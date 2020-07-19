class Github {
    constructor() {
        this.client_id = "e63fa959980ad6c086c0";
        this.client_secret = "4a3c12711285e08f7561e7222a022c00006050fd";
        this.repos_count = 5;
        this.repos_sort = "created: asc"
    }
    //GET request
    async get(user){
        const profileResponse = await
        fetch(`https://api.github.com/users/${user}` + 
        `?client_id=${this.client_id}&secret_id=${this.client_secret}`);

        const reposResponse = await
        fetch(`https://api.github.com/users/${user}/repos` + 
        `?per_page=${this.repos_count}&sort=${this.repos_sort}` + 
        `&client_id=${this.client_id}&secret_id=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}