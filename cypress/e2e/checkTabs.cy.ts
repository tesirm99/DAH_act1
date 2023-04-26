describe('Check tabs spec', () => {
  it('Checks Clients tab', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Clients').click()
  })

  it('Checks Products tab', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Products').click()
  })

  it('Checks Reservations tab', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Reservations').click()
  })
})

describe('Check tabs content', () => {

  it('Check Clients tab content', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Clients').click()
    cy.get('ion-button').contains('Go to Clients').click()
    cy.get('ion-list').contains('ion-item', 'Ana García Pérez')
    cy.get('ion-back-button').click()
  })

  it('Check Products tab content', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Products').click()
    cy.get('ion-button').contains('Go to Products').click()
    cy.get('ion-list').contains('ion-item', 'Camiseta')
    cy.get('ion-back-button').click()
  })

  it('Check Reservations tab content', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Reservations').click()
    cy.get('ion-button').contains('Go to Reservations').click()
    cy.get('ion-list').contains('ion-item', 'Ana')
    cy.get('ion-back-button').click()
  })

});

describe('Check if buttons are centered', () => {
  it('Check Clients tab button', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Clients').click()
    cy.get('ion-button').contains('Go to Clients')
    cy.get('#container').should('have.css', 'display', 'grid')
    cy.get('#container').should('have.css', 'place-items', 'center')
  });

  it('Check Products tab button', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Products').click()
    cy.get('ion-button').contains('Go to Products')
    cy.get('#container').should('have.css', 'display', 'grid')
    cy.get('#container').should('have.css', 'place-items', 'center')
  });

  it('Check Reservations tab button', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Reservations').click()
    cy.get('ion-button').contains('Go to Reservations')
    cy.get('#container').should('have.css', 'display', 'grid')
    cy.get('#container').should('have.css', 'place-items', 'center')
  });
})

describe('Check new page component on Clients list', () => {
  it('Check Clients back button', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Clients').click()
    cy.get('ion-button').contains('Go to Clients').click()
    cy.get('ion-list').contains('ion-item', 'Ana García Pérez').get('ion-button').contains('Edit').click()
    cy.get('ion-back-button').contains('Back').click()
    cy.get('ion-list').contains('ion-item', 'Ana García Pérez')
  });

  it('Check Clients home button', () => {
    cy.visit('http://localhost:8100/')
    cy.get('ion-tab-button').contains('Clients').click()
    cy.get('ion-button').contains('Go to Clients').click()
    cy.get('ion-list').contains('ion-item', 'Ana García Pérez').get('ion-button').contains('Edit').click()
    cy.get('.buttons-first-slot > .button-clear').click()
  });

})
