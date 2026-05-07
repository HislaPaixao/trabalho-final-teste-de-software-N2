# **Plano de Testes de Software: Gestão de Tarefas**

## **1\. Introdução**

Este documento descreve o planejamento de testes para o sistema de Gestão de Tarefas, com o objetivo de garantir que as funções de planejar atividades funcionem bem, ajudando o usuário a ter uma rotina diária mais eficaz e produtiva. 

## 

## **2\. Objetivo dos Testes**

Os seguintes objetivo são:

* Garantir que as funcionalidades principais operem conforme os requisitos.  
* Identificar e corrigir falhas antes da entrega final.  
* Validar a interface e a experiência do usuário (UX).

## **3\. Escopo dos Testes**

### **3.1. O que será testado:**

**API (Express/Node):**

* Verificação das rotas de CRUD (Create, Read, Update, Delete) de tarefas.  
* Validação das respostas do servidor (Status 200, 201, 400, 500).  
  **E2E (Navegador):**  
* Fluxo completo: Usuário entra \-\> Cria Tarefa \-\> Marcar como concluída.  
* Teste de interface: Se os botões estão clicáveis e se a lista atualiza na tela.  
  **Unitários:**  
* Validação de regras (ex: não aceitar tarefas sem nome).


### **3.2. O que não será testado:**

* **Teste de Carga:** Não vamos testar como o sistema reage com milhares de acessos ao mesmo tempo, pois o foco agora é o funcionamento básico para um único usuário.  
* **Teste de Segurança:** Não serão feitos testes contra invasões ou ataques hackers (como injeção de código), focando apenas na validação correta dos campos de texto.  
* **Teste de Estresse:** Não vamos forçar o sistema além do seu limite de memória ou processamento, já que ele vai rodar apenas em computadores locais.  
* **Teste de Compatibilidade:** Não vamos testar se o sistema abre em celulares muito antigos ou em navegadores que não sejam o Chrome ou Edge.  
* **Teste de Localização:** Não faremos testes para ver se o sistema funciona em outras línguas ou fusos horários, mantendo tudo apenas em Português-BR.


## **4\. Ferramentas**

As ferramentas utilizadas foram:

* **Github:** controle de versão e armazenamento de código.    
* **VS code(IDE):** onde escrevemos o código e utilizamos o terminal para rodar o projeto e monitorar possíveis erros  
* **Node.js e Express:** onde vamos testar se as rotas de tarefas estão respondendo como por ex: salvar e deletar  
* **SQLite:**Onde vamos validar se os dados das tarefas estão sendo gravados de verdade no banco.    
* **Navegadores(Chrome e Edge):**Para testar a interface e o funcionamento dos botões na prática.   
*  **Jest :**Testar componentes isolados e a lógica do sistema em JavaScript/Node.js.   
* **Postman** :Testar as rotas (endpoints) da API de forma isolada.   
* **Cypress :**Testar a jornada do usuário de ponta a ponta (E2E) no navegador. 

## **5\. Estratégia de Testes**

Abaixo estão listado como os testes vão ser realizados

### **5.1. Tipos de Testes**

* **Testes de unitários:** testar cada componente do sistema de forma individual e isolada, garantindo se o sistema corresponde aos requisitos.  
* **Testes de API (testes de endpoints) :** Testar as rotas criadas com Express. O foco é garantir que ao pedir a requisição, o servidor responda com o status  correto e os dados sejam processados.  
* **Testes E2E(ponta a ponta):**testes que simulam a interação do usuário com o sistema.

### **5.2. Critérios de Aceitação**

Os testes só serão considerados concluídos se contiverem:

1. **Persistência de Dados:** Toda tarefa criada deve ser salva no banco de dados SQLite e permanecer lá mesmo após atualizar a página ou reiniciar o servidor Node.js.  
2. **Validação de Campos:** O sistema não deve aceitar a criação de tarefas com o título vazio. Deve exibir uma mensagem de alerta ao usuário.  
3. **Integridade da API:** Os endpoints da API devem retornar o código de status correto (Ex: `201 Created` para novas tarefas e `200 OK` para listagens).  
4. **Navegação Sem Erros:** O usuário deve conseguir completar o fluxo de "Criar", "Listar" e "Excluir" uma tarefa sem que apareçam erros no console do Navegador ou no terminal do VS Code.  
5. **Interface Responsiva:** Os botões e a lista de tarefas devem estar visíveis e clicáveis tanto no computador quanto no navegador do celular.  
6. **Conclusão de Testes E2E:** Aprovação total em todos os cenários que simulam a jornada real do usuário, sem falhas nos fluxos principais. 

## **6\. Papéis e Responsabilidades**

| Nome do Integrante | Papel | Responsabilidades |
| :---- | :---- | :---- |
| Luana Estéfany Ferreira dos Santos | **Analista de Planejamento e Qualidade**   | Responsável pela elaboração do plano de testes e pelo acompanhamento das atualizações de código via GitHub  |
| Gabriel Oliveira de Araújo  e Lucas Pereira Rocha  | **Analistas de requisitos** | Responsável pela elaboração da documentação de requisitos do sistema, incluindo a criação do Documento de Visão para definição dos objetivos do projeto. Desenvolvimento das histórias de usuário, com definição clara dos critérios de aceitação. Modelagem de cenários utilizando BDD, para descrever o comportamento esperado do sistema de forma estruturada e testável. Garantir que os requisitos estejam claros, organizados e alinhados com as necessidades do projeto. |
| Murilo Oliveira Rodrigues  | **Analista de Testes Unitários** | Garantir que cada funcionalidade funcione de forma esperada, usando junit e testes unitários |
| Hisla Paixão Dias | **Analista de Testes E2E  e Desenvolvimento** | Desenvolvimento do sistema (Frontend, Backend e Banco de Dados) ; configuração do repositório no GitHub ; implementação e execução dos testes de interface (E2E); e elaboração dos slides para a apresentação final. |
| Murilo Oliveira Rodrigues  | **Analista de Testes de API**  | garantir que cada rota funcione de forma esperada, usando Postman. |

