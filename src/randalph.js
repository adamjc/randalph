function Randalph () {
  let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  function getChar () {
    let randomIndex = Math.random() * alphabet.length

    return alphabet.splice(randomIndex, 1).toString()
  }

  return {
    getChar: getChar
  }
}

module.exports = Randalph
