import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {
  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)
    let attachFile = false

    cy.intercept('GET', '**/notes').as('getNotes')
    cy.intercept('GET', '**/notes/**').as('getNote')
    cy.sessionLogin()

    cy.visit('/notes/new')
    cy.get('#content').type(noteDescription)

    if (attachFile) {
      cy.get('#file').selectFile('cypress/fixtures/example.json')
    }

    cy.contains('button', 'Create').click()

    cy.wait('@getNotes')
    cy.contains('.list-group-item', noteDescription)
      .should('be.visible')
      .click()
    cy.wait('@getNote')

    const updatedNoteDescription = faker.lorem.words(4)

    cy.get('#content')
      .as('contentField')
      .clear()
    cy.get('@contentField')
      .type(updatedNoteDescription)

    attachFile = true

    if (attachFile) {
      cy.get('#file').selectFile('cypress/fixtures/example.json')
    }

    cy.contains('button', 'Save').click()
    cy.wait('@getNotes')

    cy.contains('.list-group-item', noteDescription).should('not.exist')
    cy.contains('.list-group-item', updatedNoteDescription)
      .should('be.visible')
      .click()
    cy.wait('@getNote')
    cy.contains('button', 'Delete').click()
    cy.wait('@getNotes')

    cy.get('.list-group-item')
      .its('length')
      .should('be.at.least', 1)
    cy.contains('.list-group-item', updatedNoteDescription)
      .should('not.exist')
  })
})

