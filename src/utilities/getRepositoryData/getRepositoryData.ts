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
//  - This only requires read access, we could store the secret as an enviroment variable inside gh-pages server,
//    without too much worry
// DEV DELETE SECRET
const ENV_GITHUB_TOKEN = process.env.API_GRAPHQL_GITHUB_ACCESS_TOKEN;
// DEV DELETE SECRET

// Libraries
import { graphql } from '@octokit/graphql';


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
};


/**
 * Fetches all the repository details associated with given account
 * @param profileName Case sensetive name of GitHub profile
 * @return A promise resolving to a array of all repositories with details
 */
const getRepositoryData = (profileName: string) => {
  // Create new Promise for early returning
  const promise = new Promise<Array<RepositoryDetails>>((resolve, reject) => {
    async () => {
      console.log("starting fetch");

      // Get GitHub data
      const response = await graphql(`
        query($number_of_repos:Int!) {
          repositoryOwner(login: "LarsGKodehode") {
            ... on User {
              name
              bio
              repositories(last: 32) {
                totalCount
                nodes {
                  id
                  name
                  description
                  updatedAt
                  url
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `	Bearer ${ENV_GITHUB_TOKEN}`,
        },
        baseUrl: apiEndpoint,
      }
      );
    
      console.log("fetch success");
      console.dir(response);
    };
  });

  return promise;
};

export default getRepositoryData;