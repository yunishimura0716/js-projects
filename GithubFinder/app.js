//Initi Github
const github = new Github;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //Get value from input form
    const userText = e.target.value;

    if(userText !== '') {
        github.get(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    //shor alert
                } else {
                    // show profile
                }
            });
    } else {
        // clear profile
    }
});