class gitHub {
    constructor() {
        this.client_id = 'fdcb83cb909e6279a631'
        this.client_secret = 'dea81412d31c598184b618c302522cc9e525009c'
        this.repos_count = 10
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()
        return {
            profile,repos
        }
    }


}