const anagram = require('./anagram').anagram;

const args = process.argv.slice(2);
const filePath = args[0];

anagram(filePath);


