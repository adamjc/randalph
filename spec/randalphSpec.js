const Randalph = require('../src/randalph.js') 

describe('randalph', () => {
  it('picks a random letter', () => {
    const randalph = new Randalph()
    const char = randalph.getChar()

    expect(char).toMatch(/[A-Z]/)
  })

  it('picks the entire alphabet', () => {
    const randalph = new Randalph()
    let alphabet = []

    for (var i = 0; i < 26; i += 1) {
      alphabet.push(randalph.getChar())
    }

    expect(alphabet.sort().join('')).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  })
})
