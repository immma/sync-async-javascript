module.exports.hello = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('processOne executed'))
        }, 1000);
    })
}