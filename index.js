const _ = require('lodash')

const states = require('./states.json')

console.log('Total visited: ', _.filter(states, {visited: true}).length)
console.log('Lived in: ', _.filter(states, {lived: true}).length)
console.log('High-pointed: ', _.filter(states, {"high-pointed": true}).length)
