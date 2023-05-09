import { faker } from '@faker-js/faker/locale/en'

describe('Sign up', () => {
  const emailAddress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
  const password = Cypress.env('USER_PASSWORD')

  it('successfully signs up using confirmation code sent via email', () => {
    cy.fillSignupFormAndSubmit(emailAddress, password)

    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})

