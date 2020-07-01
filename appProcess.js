// INDONESIA ENGLISH MIX :)

console.log('START \n----------')

function displayProcess1(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                console.log('proses 1 executed')
            )
        }, timeout * 1000);
    })
}

function displayProcess2(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Process 2 executed'))
        }, timeout * 1000);
    })
}

function displayProcess3(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Process 3 executed'))
        }, timeout * 1000);
    })
}

// displayProcess1(2)
//     .then(dua => displayProcess2(1))
//     .then(tiga => displayProcess3(2))

async function callAllProcess() {
    const satu = await displayProcess1(2)
    const dua = await displayProcess2(3)
    const tiga = await displayProcess3(1)
    console.log('----------\nSALAM PROFIT')
}
callAllProcess()