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

**História 3 – Editar uma Tarefa**

**Como** um usuário atento
**Quero** editar o título ou a descrição de uma tarefa
**Para** corrigir informações ou adicionar mais detalhes

**Critérios de Aceitação**

- Toda tarefa deve possuir botão **Editar** ;
- Ao clicar, os dados devem carregar em formulário ou modal;
- Após salvar, alterações devem aparecer imediatamente;
- Mudanças devem ser persistidas no backend.

**Cenário BDD**

**_Cenário: Editar título da tarefa_**
_Dado que existe a tarefa "Fazer relatório"
Quando clico em "Editar"
E altero o título para "Fazer relatório final"
E salvo
Então vejo a tarefa atualizada na lista_

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


**História 5 – Visualizar Listas Separadas**

**Como** um usuário que quer foco
**Quero** ver tarefas pendentes separadas das concluídas
**Para** não me distrair com o que já foi feito

**Critérios de Aceitação**

- A interface deve exibir duas seções claras: **Pendentes** e **Concluídas** ;
- Ao criar ou editar, a tarefa deve aparecer na seção correta;
- Tarefas concluídas podem ser reabertas.

**Cenário BDD**

**_Cenário: Carregar página com listas distintas_**
_Dado que existem duas tarefas:_

_- "Estudar" (pendente)
- "Comprar pão" (concluída)_

_Quando acesso a página principal_

_Então vejo "Estudar" em Pendentes
E vejo "Comprar pão" em Concluídas_


