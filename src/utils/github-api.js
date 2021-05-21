exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      id
      bio
      email
      avatarUrl
      isHireable
      location
      name
      url
      websiteUrl
      twitterUsername
      pinnedItems(first: 3) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            languages(first: 3) {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
