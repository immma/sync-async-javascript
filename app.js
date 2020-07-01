console.log('START \n----------')

function displayUser(username, email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: username,
                email: email
            })
            console.log('display user..')
        }, 1000);
    })
}

function displayArticle(username, email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                author: {
                    authorUsername: username,
                    contact: email
                },
                title: "One dark pro",
                category: "Code"
            })
            console.log('display article..')
        }, 2000);
    })
}

function displayRatings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ratings: 90})
            console.log('display ratings..')
        }, 3000);
    })
}

// displayUser('ardih', 'ardihanitya@woomail.com')
//     .then(user => displayArticle(user.username, user.email))
//     .then(ratings => displayRatings())
//     .then(detail => console.log(detail))


async function callAll() {
    const user = await displayUser('ardih', 'ardih@woomail.com')
    const rating = await displayRatings()
    const article = await displayArticle(user.username, user.email)
}
callAll()
