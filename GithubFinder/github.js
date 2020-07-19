class Github {
    constructor() {
        this.client_id = "e63fa959980ad6c086c0";
        this.client_secret = "4a3c12711285e08f7561e7222a022c00006050fd";
    }
    //GET request
    async get(user){
        const profileResponse = await
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&secret_id=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}