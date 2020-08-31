const util = require('util');

const fs = require("fs");
const readline = require("readline");
const { keyBuilder } = require("./keyBuilder");
const { groupBuilder } = require('./groupBuilder');

let anagramObject = {};
let currentLength = 0;
async function anagram(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const currentWord of lineReader) {
    currentLength = currentWord.length;
    const key = keyBuilder(anagramObject, currentWord);
    anagramObject = { ...anagramObject, ...key }
    const currentGroup = anagramObject[currentLength].groups;
    const anagramGroup = groupBuilder(currentGroup, currentWord);
    anagramObject = {
      ...anagramObject,
      [currentLength]: {
        ...anagramObject[currentLength],
        groups: anagramGroup
      } 
    }
    console.log('Processing:', currentLength);
  }

  const allEntries = Object.entries(anagramObject);
  for (const [, groups] of allEntries) {

    const letterKeys = Object.entries(groups);
    for (const [, items] of letterKeys) {

      const letters = Object.keys(items);
      letters.map((l) => {
        console.log(items[l].words.join(','));
      })
    }
  }
  return anagramObject;
}

exports.anagram = anagram;
