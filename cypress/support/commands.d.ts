/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs into the Scratch App via the graphical user interface (GUI).
     *
     * @param username string - The email of the user you want to log in with
     * @param password string - The password of the user you want to log in with
     *
     * @example cy.guiLogin() // Logs into the app using the default email and password (defined as envs)
     * @example cy.guiLogin('user@email.com', 'S3cRe7P@ssW0rd') // Logs into the app using the provided credentials
     */
    guiLogin(username?: string, password?: string): void | Cypress.Chainable<null>

    /**
     * Logs into the Scratch App via GUI **once**, and creates a session in this process
     * for further restoring. This way, no time is wasted when authentication is only a
     * test's pre-condition instead of its primary focus.
     *
     * The username is used as the session id, which means that if it changes, eg., when
     * logging in with a different user, a new session is created (via GUI), and saved for
     * further restoring.
     *
     * @param username string - The email of the user you want to log in with
     * @param password string - The password of the user you want to log in with
     *
     * @example cy.sessionLogin() // Logs into the app (or simply restores the session) using the default email and password (defined as envs)
     * @example cy.sessionLogin('user@email.com', 'S3cRe7P@ssW0rd') // Logs into the app (or simply restores the session) using the provided credentials
     */
    sessionLogin(username?: string, password?: string): void | Cypress.Chainable<null>

    /**
     * Creates a new note with the possibility of attaching the `example.json` fixture file.
     *
     * @param note string - The text of the note you want to create
     * @param attachFile boolean - A boolean (`true` or `false`) defining if you want or not to attach a file when creating the note (default is `false`)
     *
     * @example cy.createNote('Feed the cat') // Creates a note with the provided description
     * @example cy.createNote('Learn Cypress', true) // Creates a note with the provided description, and attaches the `example.json` fixture file to it
     */
    createNote(note: string, attachFile?: boolean): Cypress.Chainable<undefined>

    /**
     * Edits an already existing note.
     *
     * @param note string - The text of the note you want to edit
     * @param newNoteValue string - The new value for the note you want to edit
     * @param attachFile boolean - A boolean (`true` or `false`) defining if you want or not to attach a file when editing the note (default is `false`)
     *
     * @example cy.editNote('Learn Cypress', 'Learn Cypress at the TAT online school') // Edits the description of note with the text 'Learn Cypress' to 'Learn Cypress at the TAT online school'
     * @example cy.editNote('Learn Cypress', 'Learn Cypress at the TAT online school', true) // Edits the description of note with the text 'Learn Cypress' to 'Learn Cypress at the TAT online school', and attaches the `example.json` fixture file to it
     */
    editNote(note: string, newNoteValue: string, attachFile?: boolean): Cypress.Chainable<undefined>

    /**
     * Deletes a note.
     *
     * @param note string - The text of the note you want to delete
     *
     * @example cy.deleteNote('Feed the cat') // Deletes a note with the provided description
     */
    deleteNote(note: string): Cypress.Chainable<undefined>

    /**
     * Fills in the settings form with sample data and submits it.
     *
     * @example cy.fillSettingsFormAndSubmit() // Visits the settings page, fills in the form with sample data, and submits it
     */
    fillSettingsFormAndSubmit(): Cypress.Chainable<JQuery<HTMLButtonElement>>

    /**
     * Fills in the signup form and submits it with the provided credentials.
     *
     * After that, enters a six digits code sent to the email used in the previous
     * step, and submits the second form.
     *
     * Finally, waits for the `@getStories` request to ensure the signup succeeded.
     *
     * @param email string - The email of a still not signed up user
     * @param password string - The password for the user being signed up
     *
     * @example cy.fillSignupFormAndSubmit('some-user@example.com', 'sEcR37-p@s5w0rD')
     */
    fillSignupFormAndSubmit(email: string, password: string): Cypress.Chainable<JQuery<HTMLElement>>
  }
}

