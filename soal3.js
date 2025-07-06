function modifySentence(sentence) {
  let words = sentence.split(" ");

  let modifiedWords = words.map(word => {
        let currentWord = word.toUpperCase();

    if (currentWord.length > 4) {
      currentWord += '!';
    }
      return currentWord;
  });

   return modifiedWords;
}

console.log(modifySentence("javascript is awesome"));
