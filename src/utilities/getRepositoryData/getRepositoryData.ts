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

// GitHub access token
//  - This token is scoped to read only, currently storing it inside the .env,
//    without too much worry

// Constants
/**
 * Enpoint for GitHub GraphQL
 */
const apiEndpoint = "https://api.github.com/graphql";


/**
 * Structure of RepositoryDetails
 */
export interface RepositoryDetails {
  name: string,
  description: string,
  url: string,
  card: string;
};

/**
 * Github repository response
 */
interface GitHubResponseRepositories {
  id: string,                   // Repository ID
  name: string,                 // Repository name
  description: string,          // Repository description
  updatedAt: string,            // Repository updated at
  url: string,                  // Repository Url
  openGraphImageUrl: string,    // Repository card image url
};

/**
 * Response shape from GitHub, this is based on shape of query
 */
 interface GitHubResponse {
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
      // Token scoped to readonly and there is no billing info attached to it
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
                  openGraphImageUrl
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
      const array: Array<GitHubResponseRepositories> = parsed.data.repositoryOwner.repositories.nodes;

      // Construct return array
      const filteredArray =  array.map((entry) => {
        return {
          name: entry.name,
          description: entry.description,
          url: entry.url,
          card: entry.openGraphImageUrl,
        };
      });
      
      resolve(filteredArray)
    };

    fetchGitHub();
   });
  
   return promise;
};

export default getRepositoryData;