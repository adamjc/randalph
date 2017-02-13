function Randalph () {
  let alphabet = getAlphabet()

  function getChar () {
    const randomIndex = Math.random() * alphabet.length

    return alphabet.splice(randomIndex, 1).toString()
  }

  function reset () {
    alphabet = getAlphabet()
  }

  function getAlphabet () {
    return [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
  }

  return {
    getChar: getChar,
    reset: reset
  }
}

module.exports = Randalph
