//Initi Github
const github = new Github;
//Init UI
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //Get value from input form
    const userText = e.target.value;

    if(userText !== '') {
        github.get(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    //shor alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // clear profile
        ui.clearProfile();
    }
});