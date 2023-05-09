// cypress/e2e/login.cy.js

describe('Login', () => {
  it('successfully logs in', () => {
    cy.guiLogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})

