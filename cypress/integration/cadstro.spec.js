/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

var faker = require('faker-br')

describe('Cadastro', () => {
  it.skip('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
    cy.visit('https://form-agilizei.netlify.app')

    cy.get('input[name=firstName]').type('Agilizei')
    cy.get('input[name=lastName]').type('Bootcamp')
    cy.get('textarea[name=adress]').type('Sem endereço')
    cy.get('input[name=emailAdress]').type('test@email.com')
    cy.get('input[value=n]').check()
    cy.get('input[type=checkbox]').check('Netflix')
    cy.get('input[type=checkbox]').check('Dormir')
    cy.get('select#countries').select('Dinamarca', { force: true })
    cy.get('select#years').select('2006', { force: true })
    cy.get('select#months').select('Junho', { force: true })
    cy.get('select#days').select('23', { force: true })
    cy.get('input#firstpassword').type('M@ikti69')
    cy.get('input#secondpassword').type('M@ikti69')
    cy.get('button#submitbtn').click()

    cy.url().should('contain', 'listagem')
  })

  it.skip('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado "Usando Chance"', () => {
    cy.visit('https://form-agilizei.netlify.app')

    cy.get('input[name=firstName]').type(chance.first())
    cy.get('input[name=lastName]').type(chance.last())
    cy.get('textarea[name=adress]').type(chance.address())
    cy.get('input[name=emailAdress]').type(chance.email())
    cy.get('input[value=n]').check()
    cy.get('input[type=checkbox]').check('Netflix')
    cy.get('input[type=checkbox]').check('Dormir')
    cy.get('select#countries').select('Dinamarca', { force: true })
    cy.get('select#years').select('2006', { force: true })
    cy.get('select#months').select('Junho', { force: true })
    cy.get('select#days').select('23', { force: true })
    cy.get('input#firstpassword').type('M@ikti69')
    cy.get('input#secondpassword').type('M@ikti69')
    cy.get('button#submitbtn').click()

    cy.url().should('contain', 'listagem')
  })

  it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado "Usando Faker-Br"', () => {
    cy.visit('https://form-agilizei.netlify.app')

    cy.get('input[name=firstName]').type(faker.name.firstName())
    cy.get('input[name=lastName]').type(faker.name.lastName())
    cy.get('textarea[name=adress]').type(faker.address.streetAddress())
    cy.get('input[name=emailAdress]').type(faker.internet.email())
    cy.get('input[value=n]').check()
    cy.get('input[type=checkbox]').check('Netflix')
    cy.get('input[type=checkbox]').check('Dormir')
    cy.get('select#countries').select('Dinamarca', { force: true })
    cy.get('select#years').select('2006', { force: true })
    cy.get('select#months').select('Junho', { force: true })
    cy.get('select#days').select('23', { force: true })
    cy.get('input#firstpassword').type('M@ikti69')
    cy.get('input#secondpassword').type('M@ikti69')
    cy.get('button#submitbtn').click()

    cy.url().should('contain', 'listagem')
  })
})
