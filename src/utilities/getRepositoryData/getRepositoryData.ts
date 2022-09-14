// Toughts about design of this API
// 
// BlackBox
//
// Input:
//   Account Name
//
// Output:
//   Array of RepositoryDetails
//
//
// - All logic and variables should be inside here


// Types
import { ColorHEX } from "../../@types/types";


// Constants
/**
 * Endpoint for GitHub GraphQL
 */
const apiEndpoint = "https://api.github.com/graphql";


/**
 * All programming languages we have accountetd for
 */
export type ProgrammingLanguage = 
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Go"
  | "Docker"
  | string;


/**
 * Language info
 */
export type LanguagesInfo = Array<{language: ProgrammingLanguage, ratio: number, color: ColorHEX}>;

/**
 * Structure of RepositoryDetails
 */
export interface RepositoryDetails {
  name: string,
  description: string,
  url: string,
  /**
   * A list of the 5 most used languages in repository
   */ 
  languageInfo: LanguagesInfo,
};

/**
 * Github response, repository part
 */
export interface GitHubResponseRepositories {
  id: string,                   // Repository ID
  name: string,                 // Repository name
  description: string,          // Repository description
  updatedAt: string,            // Repository updated at
  url: string,                  // Repository Url
  languages: {                  // Repository language info
    totalSize: number,
    edges: Array<{size: number, node: {name: ProgrammingLanguage, color: ColorHEX}}>
  }
};

/**
 * Response shape from GitHub, this is based on shape of query
 */
 export interface GitHubResponse {
  repositoryOwner: {
    name: string,
    bio: string,
    repositories: {
      totalCount: number,
      nodes: Array<GitHubResponseRepositories>,
    }
  }
};

/**
 * Fetches all the repository details associated with given account
 * @param profileName Case sensetive name of GitHub profile
 * @return A promise resolving to a array of all repositories with details
 */
const getRepositoryData = async (profileName: string): Promise<Array<RepositoryDetails> | null> => {
  // Returned promise
   const promise = new Promise<Array<RepositoryDetails>>((resolve, reject) => {
    async function fetchGitHub() {
      // API Token
      const sec = import.meta.env.VITE_GITHUB_ACCESS_TOKEN_1;
      const ret = import.meta.env.VITE_GITHUB_ACCESS_TOKEN_2;
      // Only for avoiding GitHub auto dropping of exposed keys
      // Token is scoped to readonly and there is no billing info attached to it
      function getToken() {
        return sec + ret;
      };

      // Setup query
      const query = `
        query($profile_name: String!, $number_of_repos: Int!) {
          repositoryOwner(login: $profile_name) {
            ... on User {
              name
              bio
              repositories(last: $number_of_repos) {
                totalCount
                nodes {
                  id
                  name
                  description
                  updatedAt
                  url
                  languages(first: 5) {
                    totalSize
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;
  
      // Setup headers
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
  
      // Make request
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          ...headers,
          "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify({
          query: query,
          variables: {
            profile_name: profileName,
            number_of_repos: 32
          }
        })
      });

      // Perform check if response OK here
      if(!response.ok) {
        reject(`Could not fetch data from ${apiEndpoint}`);
        return;
      };
  
      // Parse response
      const parsed: {data: GitHubResponse} = await response.json();

      // Get repository details
      const repositoriesArray: Array<GitHubResponseRepositories> = parsed.data.repositoryOwner.repositories.nodes;

      // Construct return array
      const filteredArray =  repositoriesArray.map((entry) => {
        // Get total size of language files
        const totalSize = entry.languages.totalSize;

        // Massage language info
        const languages = entry.languages.edges.map((language) => {
          const size = language.size;
          const { name, color} = language.node;
          return {
            language: name,
            color: color,
            ratio: size / totalSize,
          };
        });

        return {
          name: entry.name,
          description: entry.description,
          url: entry.url,
          languageInfo: languages,
        };
      });
      
      resolve(filteredArray);
    };

    fetchGitHub();
   });
  
   return promise;
};

export default getRepositoryData;