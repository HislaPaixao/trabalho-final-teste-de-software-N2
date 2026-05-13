# Relatório Final de Qualidade e Testes: Sistema de Gestão de Tarefas (N2)

## 1. Introdução
Este relatório apresenta os resultados finais do ciclo de testes do **Sistema de Gestão de Tarefas**. O objetivo principal foi validar se a aplicação atende aos requisitos de produtividade e organização propostos no Documento de Visão, garantindo a integridade das operações de CRUD e a persistência dos dados.

## 2. Visão Geral do Produto
O sistema é uma aplicação web voltada para profissionais e estudantes, permitindo o gerenciamento dinâmico de atividades diárias.

* **Arquitetura:** Frontend (HTML/JS), Backend (Node.js/Express) e Banco de Dados (SQLite).
* **Escopo Funcional:** Criar, listar, concluir e excluir tarefas.

## 3. Metodologia e Ferramentas
Seguindo a estratégia definida no Plano de Testes, utilizamos a pirâmide de testes para garantir a cobertura em diferentes níveis:

| Nível de Teste | Ferramenta | Foco |
| :--- | :--- | :--- |
| **Unitário** | Jest | Validação de lógica isolada e regras de negócio. |
| **API (Integração)** | Postman / Express | Validação dos endpoints e comunicação com SQLite. |
| **E2E (Ponta a Ponta)** | Cypress | Simulação da jornada real do usuário no navegador. |

---

## 4. Execução dos Testes e Resultados

### 4.1. Testes de API (Postman)
Foram realizados testes de fumaça e integração nos endpoints da API para garantir que o contrato de comunicação estava sendo respeitado.

* **POST `/tarefas`**: Status `201 Created` ao enviar dados válidos.
* **GET `/tarefas`**: Status `200 OK` retornando o JSON com a lista de atividades.
* **DELETE `/tarefas/:id`**: Status `200 OK` confirmando a remoção física no SQLite.
* **Status:** ✅ Sucesso.

### 4.2. Testes Unitários (Jest)
Focados em garantir que as funções básicas não quebrassem com entradas inválidas.

* **Cenário Validado:** Tentativa de criar tarefa com título vazio.
* **Resultado:** O sistema barrou a operação conforme o Critério de Aceitação da História 1, retornando erro de validação.

### 4.3. Testes E2E (Cypress)
Simulamos a jornada completa descrita nas Histórias de Usuário (BDD).

* **Fluxo Validado:** Login -> Criação de Tarefa "Estudar Teste" -> Clique em Concluir -> Exclusão.
* **Evidências:** O log do Cypress confirmou a presença das tags de status "Pendente" e "Concluída" conforme a História 5.
* **Observação Técnica:** Identificamos uma latência visual entre a deleção no banco e a atualização da lista, resolvida com ajustes de assincronismo (`async/await`).

---

## 5. Avaliação dos Critérios de Aceitação
Com base nos cenários BDD definidos, validamos:

* [x] **Persistência de Dados:** As tarefas permanecem gravadas no SQLite após o reinício do servidor.
* [x] **Validação de Campos:** O título vazio é impedido de ser registrado.
* [x] **Integridade da API:** Todos os status codes (200, 201) estão operacionais.
* [x] **Interface Responsiva:** Botões e tags de status visíveis em diferentes resoluções.

---

## 6. Papéis e Responsabilidades (Equipe)
A execução foi distribuída de forma a garantir a especialização em cada nível de teste:

* **Luana Estéfany:** Planejamento, Qualidade e Gestão do GitHub.
* **Gabriel Oliveira & Lucas Pereira:** Documentação de Requisitos, Visão e Cenários BDD.
* **Murilo Oliveira:** Execução de Testes Unitários e Testes de API (Postman).
* **Hisla Paixão:** Desenvolvimento Fullstack, Testes E2E (Cypress) e Apresentação.

## 7. Conclusão
O Sistema de Gestão de Tarefas atingiu o nível de maturidade necessário para entrega. A combinação de testes de API e E2E garantiu que os "Épicos" de Gerenciamento e Visualização fossem cumpridos sem regressões. O projeto encerra este ciclo com 100% de aprovação nos cenários críticos de negócio, estando pronto para uso em ambiente local.

---
**Data do Relatório:** 13 de Maio de 2026  
**Status do Projeto:** 🟢 Aprovado para Entrega (N2)
