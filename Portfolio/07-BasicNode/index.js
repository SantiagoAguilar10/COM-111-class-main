// Hello World
console.log("Hello World");

// Star Wars Quotes
const sw = require('star-wars-quotes')
console.log(sw())

// Heroes & Villains
// In 'superheroes' and 'supervillains' 4.0.0 version, 'random' is not a function
// I had to uninstall and then install the 3.0.0 version

const heroes = require('superheroes');
const villains = require('supervillains');

const hero = heroes.random();
const villain = villains.random();

console.log(`${hero} vs ${villain} — Epic Battle!`);

// Secret message
const fs = require('fs');

const mensaje = fs.readFileSync('./data/input.txt', 'utf-8');

console.log("The secret message is:");
console.log(mensaje);

