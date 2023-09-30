describe('Testes para o formulário',()=>{
    it('Preenchimento incorreto do CPF', () => {
        cy.visit('https://buger-eats.vercel.app/deliver');

        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')

    });
});