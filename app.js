const github = new gitHub
const ui = new UI
const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value


    if (userText !== "") {
        // make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {

                    // alert
                    ui.showAlert('user not found', 'alert alert-danger')

                } else {
                    // show profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })


    } else {
        // clear profile

        ui.clearProfile()

    }
})