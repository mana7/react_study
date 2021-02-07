const baseUrl = Cypress.env(baseUrl);

context('Window', () => {
  before(() => {
    cy.visit('/')
  })

  it('cy.document() - get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    cy.title().should('include', 'React App')
  })
})

context('add todo', () => {
  before(() => {
    cy.visit('/')
  })

  it('todoを追加', () => {
    cy.get('form > input')
      .type('newTodo')
      .should('have.value','newTodo')
    cy.get('form > button')
      .click()
    cy.get('ul > :nth-child(1)')
      .should('contain','newTodo')
    cy.get('ul > :nth-child(1) > .done')
      .should('contain','完了にする')
      .and('be.enabled')
    cy.get('ul > :nth-child(1) > .delete')
      .should('contain','削除')
      .and('be.enabled')
  })

  it('追加したtodoの絞り込み_作業中のみヒット', () => {
    cy.get('.active > input').click()
    cy.get('ul > :nth-child(1)')
      .should('contain','newTodo')

    cy.get('.completed > input').click()
    cy.get('ul')
      .should('not.be.visible')
  })

})

context('change to comleted', () => {
  before(() => {
    cy.visit('/')
  })

  it('todoを完了に変更', () => {
    cy.get('ul > :nth-child(1) > .done').click()
    cy.get('ul > :nth-child(1)')
      .should('contain', '作業中にする')
  })

  it('追加したtodoの絞り込み_完了のみヒット', () => {
    cy.get('.active > input').click()
    cy.get('ul')
      .should('not.be.visible')

    cy.get('.completed > input').click()
    cy.get('ul > :nth-child(1)')
      .should('contain','newTodo')
    })
})

context('delete todo', () => {
  before(() => {
    cy.visit('/')
  })

  it('todoを削除', () => {
    cy.get('ul > :nth-child(1) > .delete').click()
    cy.get('ul')
      .should('not.be.visible')
  })
})

context('add todo2', () => {
  before(() => {
    cy.visit('/')
    cy.get('form > input')
    .type('newTodo1')
    cy.get('form > button')
    .click()
  })

  it('todo2つ目を追加すると、先頭に追加されること', () => {
    cy.get('form > input')
      .type('newTodo2')
      .should('have.value','newTodo2')
    cy.get('form > button')
      .click()
    cy.get('ul > :nth-child(1)')
      .should('contain','newTodo2')
  })

  it('追加したtodoの絞り込み_作業中は複数ヒット', () => {
    cy.get('.active > input').click()
    cy.get('ul > :nth-child(1)')
      .should('contain','newTodo2','newTodo1')

    cy.get('.completed > input').click()
    cy.get('ul')
      .should('not.be.visible')
  })

})