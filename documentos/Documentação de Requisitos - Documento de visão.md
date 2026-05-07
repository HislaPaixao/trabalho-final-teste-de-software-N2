 ```
Documento de Visão – Sistema de Gestão de Tarefas
```
**1. Objetivo do Produto**

Desenvolver uma ferramenta simples, intuitiva e eficiente para auxiliar usuários no gerenciamento
de tarefas do dia a dia. O sistema permitirá criar, visualizar, editar, concluir e remover atividades,
contribuindo para o aumento da produtividade pessoal ou em equipe.

**2. Problema Atual**

Atualmente, muitas pessoas utilizam métodos desorganizados para controlar suas tarefas, como
anotações em papel, mensagens, e-mails ou aplicativos excessivamente complexos. Isso gera
perda de controle sobre atividades pendentes, atrasos e dificuldade para acompanhar o que já foi
concluído.

**3. Solução Proposta**

Criar uma aplicação web de gerenciamento de tarefas com operações completas de **CRUD** (Criar,
Ler, Atualizar e Excluir), interface amigável e armazenamento de dados em backend utilizando
**Node.js + Express + SQLite**.

A solução permitirá ao usuário visualizar rapidamente suas tarefas pendentes e concluídas,
promovendo maior organização e praticidade.

**4. Público-Alvo**

O sistema será direcionado para:

- Profissionais que buscam melhor organização diária;
- Estudantes que precisam acompanhar atividades e prazos;
- Pequenas equipes que desejam uma ferramenta simples e colaborativa.
**5. Principais Funcionalidades (Épicos)**

```
Épico Descrição
Gerenciamento de
Tarefas
```
```
Criar, editar, excluir e marcar tarefas como
concluídas
Visualização da Lista Exibir tarefas pendentes e concluídas
separadamente
Persistência de Dados Salvar tarefas no banco de dados SQLite
```
**6. Restrições do Projeto**
    - Backend desenvolvido em **Node.js com Express** ;
    - Frontend em **HTML, CSS e JavaScript puro** (sem frameworks pesados);
    - Banco de dados em memória durante testes;
    - Não haverá autenticação de usuários na primeira versão.


**7. Critérios de Sucesso**

O projeto será considerado bem-sucedido quando:

- O usuário conseguir criar tarefas e visualizá-las na lista;
- O usuário conseguir alterar o status entre pendente e concluído;
- O usuário conseguir editar e excluir tarefas;
- A interface for responsiva, simples e intuitiva.

# Histórias de Usuário com Critérios de Aceitação e Cenários BDD

**História 1 – Criar Nova Tarefa**

**Como** um usuário organizado
**Quero** adicionar uma nova tarefa com título e descrição
**Para** lembrar o que preciso fazer

**Critérios de Aceitação**

- Os campos **Título** e **Descrição** são obrigatórios;
- Após salvar, a tarefa deve aparecer na lista de pendentes;
- A tarefa deve ser salva no backend;
- O formulário deve ser limpo após o cadastro.

**Cenários BDD**

**_Cenário: Criar tarefa com sucesso_**
_Dado que estou na página principal do sistema
Quando preencho o título "Estudar Teste de Software"
E preencho a descrição "Revisar BDD e CRUD"
E clico no botão "Adicionar Tarefa"
Então vejo a tarefa na lista de pendentes
E os campos ficam vazios_
**_Cenário: Tentar criar tarefa sem título_**
_Dado que estou na página principal
Quando deixo o título em branco
E preencho a descrição "Alguma coisa"
E clico em "Adicionar Tarefa"
Então vejo a mensagem "Título é obrigatório"
E nenhuma tarefa é adicionada_

**História 2 – Marcar Tarefa como Concluída**

**Como** um usuário produtivo
**Quero** marcar uma tarefa como concluída
**Para** saber o que já foi realizado e manter o foco no que falta

**Critérios de Aceitação**

- Cada tarefa pendente deve possuir opção **Concluir** ;
- Ao concluir, a tarefa deve ir para a lista de concluídas;
- O status deve ser atualizado no backend.


**Cenários BDD**

**_Cenário: Concluir uma tarefa pendente_**
_Dado que a tarefa "Comprar café" está pendente
Quando clico em "Concluir"
Então a tarefa sai da lista de pendentes
E aparece na lista de concluídas_
**_Cenário: Reabrir uma tarefa concluída_**
_Dado que a tarefa "Ler documento" está concluída
Quando clico em "Reabrir"
Então a tarefa volta para pendentes_

**História 3 – Consultar Status das Tarefas**

**Como** um usuário que precisa acompanhar o andamento
**Quero** visualizar o status de cada tarefa na lista
**Para** identificar rapidamente o que está pendente e o que já foi concluído

**Critérios de Aceitação**

Toda tarefa exibe uma tag de status indicando "Pendente" ou "Concluída";

O status deve refletir o valor armazenado no backend;

A tag deve ser atualizada automaticamente após qualquer alteração de status;

A lista apresenta todas as tarefas em uma única visualização.

**Cenários BDD**

Cenário: Visualizar status de uma tarefa pendente
Dado que a tarefa "Estudar lógica" está cadastrada e não foi concluída
Quando acesso a lista de tarefas
Então vejo a tag "Pendente" ao lado do título
Cenário: Visualizar status de uma tarefa concluída
Dado que a tarefa "Beber água" foi marcada como concluída
Quando acesso a lista de tarefas
Então vejo a tag "Concluída" ao lado do título
Cenário: Status atualiza após conclusão
Dado que a tarefa "Organizar mesa" está com tag "Pendente"
Quando clico no botão "Concluir"
Então a tag muda imediatamente para "Concluída"
E permaneço na mesma lista de tarefas

**História 4 – Excluir uma Tarefa**

**Como** um usuário que comete erros
**Quero** excluir uma tarefa permanentemente
**Para** remover itens desnecessários ou duplicados

**Critérios de Aceitação**

- Toda tarefa deve possuir botão **Excluir** ;
- Ao excluir, a tarefa desaparece da lista;
- O item também deve ser removido do backend.

**Cenários BDD**

**_Cenário: Excluir tarefa pendente_**
_Dado que existe a tarefa "Testar login"
Quando clico em "Excluir"
Então ela não aparece mais em nenhuma lista_
**_Cenário: Excluir tarefa concluída_**
_Dado que existe a tarefa "Já feito"
Quando clico em "Excluir"
Então ela é removida da lista de concluídas_


**História 5 – Filtrar Tarefas por Status**

**Como** um usuário que quer foco
**Quero** identificar visualmente quais tarefas estão pendentes e quais estão concluídas
**Para** priorizar o que ainda precisa ser feito

**Critérios de Aceitação**

Cada tarefa exibe seu status por meio de uma tag visual (rótulo);

O status "Pendente" é exibido para tarefas não concluídas;

O status "Concluída" é exibido para tarefas finalizadas;

Todas as tarefas aparecem em uma lista única , sem separação física entre seções;

A tag de status permite distinguir os dois estados sem necessidade de navegar entre abas ou páginas.

**Cenários BDD**

Cenário: Identificar tarefas pendentes e concluídas na mesma lista
Dado que existem três tarefas:

_- "Estudar" (pendente)

"Comprar pão" (concluída)

"Ligar para cliente" (pendente)_

_Quando acesso a página principal

Então vejo as três tarefas em uma única lista
E "Estudar" exibe a tag "Pendente"
E "Comprar pão" exibe a tag "Concluída"
E "Ligar para cliente" exibe a tag "Pendente"_
Cenário: Diferenciar status sem separação de seções
Dado que existem tarefas com diferentes status
Quando olho para a lista
Então consigo distinguir o que está concluído e o que está pendente
E não há divisão da lista em seções separadas



