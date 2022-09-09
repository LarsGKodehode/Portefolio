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
// - Where to store GitHub access token?
//  - This only requires read access, we could store the secret as an enviroment variable inside gh-pages server


// DEV DELETE SECRET
const ENV_GITHUB_TOKEN = "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";
// DEV DELETE SECRET

// Constants
/**
 * Enpoint for GitHub GraphQL
 */
const apiEndpoint = "https://api.github.com/graphql";

const userRepositories = 32;
/**
 * Querry Structure
 */
 const querry = JSON.parse(`
 {
  repositoryOwner(login: "LarsGKodehode") {
    ... on User {
      name
      bio
      repositories(last: ${userRepositories}) {
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
`);

const request = {
  method: 'POST',
  headers: {
    'Autohrization': "Bearer " + ENV_GITHUB_TOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: querry,
};


/**
 * Structure of RepositoryDetails
 */
export interface RepositoryDetails {
  name: string,
  description: string,
  url: string,
};


/**
 * Fetches all the repository details for a given account
 * @param accountName Case sensitive
 * @return A list of Repository details of all repositories belonging to $accountName
 */
const getRepositoryData = new Promise<Array<RepositoryDetails>>( async (resolve, reject) => {
  // Declare export list
  let projectsList: Array<RepositoryDetails> = [];

  if (projectsList.length === 0) {
    const response = await fetch(apiEndpoint, request);
    const parsed = response.json();
    console.log(parsed)
  };

  // Return 
  resolve(projectsList);
  reject();
});

export default getRepositoryData;