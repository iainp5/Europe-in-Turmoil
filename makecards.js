const data = require('./data')

data.strategy_cards.forEach((card, index) => {
    if (!card) return
    const name = `C_${card.name.toUpperCase().replace(/\*/g, '').replace(/ /g, '_').replace(/\-/g, '_').replace(/\//g, '_')}`
    console.log(`const ${name} = ${index}`)
})