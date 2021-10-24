describe('チェックボックスを押してグラフが現れるかテスト', function () {
  //ホームURLに訪れる
  beforeEach(() => {
    cy.visit('/')
  })

  it('北海道のグラフが現れる', () => {
    cy.get('[id="北海道"]')
      .click()
      .get('.highcharts-point')
      .should('be.visible')
  })
})
