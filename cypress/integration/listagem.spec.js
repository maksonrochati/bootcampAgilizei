/// <reference types="cypress" />

describe('Listagem', () => {
  it('Quando não houver cadastros, então a listagem deve está vazia', () => {
    cy.fixture('listagem-vazia').then((data) => {
      window.localStorage.setItem('data', JSON.stringify(data))
    })
    cy.visit('https://form-agilizei.netlify.app/listagem.html')

    cy.get('table tbody tr').should('have.length', 0)
  })
  it.skip('Quando houver um ou mias cadastros, então a listagem deve exibir cada registro', () => {
    cy.fixture('listagem-com-itens').then((data) => {
      window.localStorage.setItem('data', JSON.stringify(data))
    })
    cy.visit('https://form-agilizei.netlify.app/listagem.html')

    cy.get('table tbody tr').should('not.be.empty')
    cy.get('table tbody tr').should('have.length', 2)
  })
})
