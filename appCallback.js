function displayUser(username, email, callback) {
    callback({
        username: username, 
        email: email
    })
}

const user = displayUser('ardih', 'ardihanitya@woomail.com')