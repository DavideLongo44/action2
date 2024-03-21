describe('BMI Calculator', () => {
    it('calculates BMI correctly', () => {
      cy.visit('index.html')
  
      cy.get('#weight').type('70')
      cy.get('#height').type('180')
  
      cy.contains('Berechne').click()
  
      cy.get('#result').should('contain', 'Dein BMI beträgt')
  
      cy.get('#result').invoke('text').then(parseFloat).should('be.a', 'number')
    })
  
    it('handles invalid input gracefully', () => {
      cy.visit('index.html')
  
      cy.get('#weight').type('abc')
      cy.get('#height').type('xyz')
  
      cy.contains('Berechne').click()
  
      cy.get('#result').should('contain', 'Bitte geben Sie gültige Werte ein')
    })
  })
  