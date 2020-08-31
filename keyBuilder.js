
function keyBuilder(anagramObject, currentWord) {
  if(anagramObject[currentWord.length]) {
    return anagramObject;
  }
  return {
    ...anagramObject,
    [currentWord.length]: {
      groups: {}
    }
  }
}

exports.keyBuilder = keyBuilder;