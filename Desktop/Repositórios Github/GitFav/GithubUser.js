export class GithubUser {
    static search(usernames) {
       const endpoint = `https://api.github.com/users/${usernames}`

       return fetch(endpoint)
       .then(data => data.json())
       .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers,
       }))

    }
}
