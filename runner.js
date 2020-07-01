const exportMod = require('./exportModule')
const procOne = require('./processOne')
const procTwo = require('./processTwo')

async function runThis() {
    const proOne = await procOne.hello()
    const exportmod = exportMod.hello()
    const proTwo = await procTwo.hello()
}

runThis()
