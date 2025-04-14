const data = require('./data')

data.spaces.forEach((space, index) => {
    const name = `S_${space.name.toUpperCase().replace(/ /g, '_')}`
    console.log(`const ${name} = ${index}`)
})