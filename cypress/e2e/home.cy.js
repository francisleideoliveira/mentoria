describe('Validando textos da tela home',()=>{
  it('Validando texto principal', () => {

    cy.visit('https://buger-eats.vercel.app/');

    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    cy.get('p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.');
    cy.get('a').click();

 
  });
});