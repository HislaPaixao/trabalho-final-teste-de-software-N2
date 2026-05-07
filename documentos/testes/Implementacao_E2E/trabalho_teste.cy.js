describe('Teste de Qualidade N2 - Sistema de Produtividade', () => {
  
  beforeEach(() => {
    // Garante que o servidor está rodando na porta 3000
    cy.visit('http://localhost:3000');
  });

  it('CT-E2E-01: Fluxo Completo de Sucesso (Login, Criar, Concluir e Deletar)', () => {
    // 1. LOGIN usando os IDs exatos do seu HTML
    cy.get('#email').type('admin@teste.com');
    cy.get('#senha').type('123456');
    cy.get('button').contains('Entrar').click();

    // 2. VERIFICAR se o painel apareceu
    cy.get('#painel').should('be.visible');

    // 3. CRIAR TAREFA
    const nomeTarefa = 'Minha Tarefa N2';
    cy.get('#tarefaInput').type(nomeTarefa);
    cy.get('button').contains('Registrar Tarefa').click();

    // 4. VERIFICAR se a tarefa está na lista
    cy.contains(nomeTarefa).should('be.visible');

    // 5. CONCLUIR TAREFA (Update)
    // Clica no botão que contém o texto exato do seu HTML
    cy.contains('concluir (Update)').click();
    cy.contains('[Concluída]').should('be.visible');

    // 6. DELETAR TAREFA (Delete)
    cy.contains('deletar (Delete)').click();
    cy.contains(nomeTarefa).should('not.exist');
  });
});