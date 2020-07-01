module.exports.hello = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('processTwo executed'))
        }, 1000);
    })
}