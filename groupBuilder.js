const { sortByText } = require("./utils/sortByText");

function groupBuilder(anagramGroup, currentWord) {
  const currentWordSorted = sortByText(currentWord);
  const firstLetter = currentWordSorted.charAt(0);
  if (!anagramGroup[firstLetter]) {
    return {
      ...anagramGroup,
      [firstLetter]: {
        refWord: currentWord,
        words: [currentWord],
      },
    };
  }

  const matchingGroup = anagramGroup[firstLetter];

  const refWordSorted = sortByText(matchingGroup.refWord);

  if (refWordSorted === currentWordSorted) {
      return {
        ...anagramGroup,
        [firstLetter]: {
          ...matchingGroup,
          words: [...matchingGroup.words, currentWord]
        }
      };
  };

  return anagramGroup;
}

exports.groupBuilder = groupBuilder;
