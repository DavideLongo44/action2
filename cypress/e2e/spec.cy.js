describe('BMI Calculator', () => {
  it('calculates BMI correctly', () => {
    cy.visit('/frontend/index.html')

    cy.get('#weight').type('70')
    cy.get('#height').type('180')

    cy.contains('Berechne').click()

    cy.get('#result').should('contain', 'Dein BMI beträgt')

    cy.get('#result').invoke('text').then(parseFloat).should('be.a', 'number')
  })
})