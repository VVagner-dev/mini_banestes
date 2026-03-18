# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Controllers, Services, JPA).
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint)

1. **Núcleo Financeiro (CONCLUÍDO ✅):**
   - `conta.service.ts`: Cadastro e Depósito Atômico (`increment`).
   - `pix.service.ts`: CRUD de chaves com limite de 3 por conta e UUID aleatório.
   - `transacao.service.ts`: Transferência PIX Atômica (`$transaction`) com débito, crédito e registro de histórico na tabela `transacoes`.
   - **Modelo ACID:** Garantido pela transação do Prisma.

2. **Próximo Grande Desafio: Segurança & Blindagem (PENDENTE ⏳):**
   - **Validação com Zod:** Criar schemas para impedir depósitos negativos e CPFs inválidos (Bean Validation).
   - **Hash de Senhas (Bcrypt):** Esconder as senhas no banco (hoje estão em texto puro - Ponto Crítico!).
   - **Autenticação (JWT):** Criar rotas de Login e Middleware de proteção nas rotas de Pix e Transferência.

## 🛠️ Stack Tecnológica
- **Backend:** Node.js (Express + TypeScript).
- **ORM:** Prisma (v6).
- **Banco:** PostgreSQL (Docker).
- **Segurança:** Bcrypt + JWT (Fase 2).
- **Validação:** Zod.
