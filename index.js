const _ = require('lodash')

const states = require('./states.json')

console.log('States visited: ', _.filter(states, {visited: true}).length)
console.log('Lived in: ', _.filter(states, {lived: true}).length)
console.log('High-pointed: ', _.filter(states, {"high-pointed": true}).length)
console.log('Driven only: ', _.filter(states, {"drive-only": true}).length)

const countries = require('./countries.json')

console.log('')
console.log('Countries visited: ', _.filter(countries, {visited: true}).length)
console.log('Lived in: ', _.filter(countries, {lived: true}).length)
console.log('High-pointed: ', _.filter(countries, {"high-pointed": true}).length)
console.log('Driven only: ', _.filter(countries, {"drive-only": true}).length)
