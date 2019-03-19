function findRotationPoint(words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let hash = {};
  let word = words[0];

  for (let i = 0; i < alphabet.length; i++) {
    hash[alphabet[i]] = i;
  }

  // Find the rotation point in the vector
  for (let i = 1; i < words.length; i++) {
    if (hash[words[i][0]] < hash[word][0]) {
      console.log(i);
      return i;
    }

    if (hash[words[i][0]] = hash[word[0]]) {
      return i;
    }

    word = words[i];
  }
}

findRotationPoint(["grape", "orange", "plum", "radish", "apple"]);