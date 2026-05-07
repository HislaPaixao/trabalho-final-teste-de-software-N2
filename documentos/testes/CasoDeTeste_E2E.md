# Casos de Teste E2E - Sistema de Produtividade

## CT-E2E-01: Fluxo de Login com Sucesso
* [cite_start]**Descrição:** Validar se o usuário consegue acessar o sistema com credenciais válidas[cite: 13, 29, 34].
* [cite_start]**Passos para Execução:** [cite: 35]
  1. Acessar a página inicial do sistema.
  2. Inserir o e-mail cadastrado.
  3. Inserir a senha correspondente.
  4. Clicar no botão "Entrar".
* **Dados de Entrada:** E-mail: `admin@teste.com` | [cite_start]Senha: `123456`[cite: 36].
* [cite_start]**Saída Esperada:** O sistema deve redirecionar para o Dashboard e exibir a mensagem de boas-vindas[cite: 36].
* [cite_start]**Critério de Sucesso:** O redirecionamento ocorre e o token de acesso é gerado no navegador[cite: 37].

---

## CT-E2E-02: Registro de Nova Tarefa (CRUD)
* [cite_start]**Descrição:** Validar a funcionalidade de criação de tarefas (Create do CRUD)[cite: 14, 29, 34].
* [cite_start]**Passos para Execução:** [cite: 35]
  1. Estar logado no sistema.
  2. Digitar o nome da tarefa no campo de input.
  3. Selecionar o botão "Adicionar".
* [cite_start]**Dados de Entrada:** Título: "Finalizar Relatório de Testes"[cite: 36].
* [cite_start]**Saída Esperada:** A tarefa deve aparecer instantaneamente na lista de tarefas pendentes[cite: 36].
* [cite_start]**Critério de Sucesso:** A tarefa é persistida no banco de dados SQLite e exibida na interface[cite: 17, 37].
