describe('Hangman', () => {
  let game

  beforeEach(() => {
    game = new Hangman()
  })

  it('should initialize with a secret word', () => {
    expect(typeof game.secretWord).toEqual('string')
    expect(game.secretWord.length).toBeGreaterThan(2)
  })

  it('should have an incorrectGuesses property', () => {
    expect(game.incorrectGuesses).toEqual('')
  })

  it('should have a correctGuesses property', () => {
    expect(game.correctGuesses).toEqual('')
  })

  describe('checkGuess', () => {
    beforeEach(() => {
      game = new Hangman()
    })

    it('should add an incorrect guess to the incorrectGuesses string', () => {
      game.checkGuess('Z')
      expect(game.incorrectGuesses).toContain('Z')
    })

    it('should add a correct guess to the correctGuesses string', () => {
      game.checkGuess('A')
      expect(game.correctGuesses).toContain('A')
    })

    it('should transform the guess to uppercase', () => {
      game.checkGuess('b')
      expect(game.incorrectGuesses).toContain('B')
      expect(game.incorrectGuesses.includes('b')).toBeFalsy()

      game.checkGuess('a')
      expect(game.correctGuesses).toContain('A')
      expect(game.incorrectGuesses.includes('a')).toBeFalsy()
    })
  })
})