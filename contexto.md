# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Controllers, Services, JPA).
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint)

1. **Núcleo Financeiro (CONCLUÍDO ✅):**
   - `conta.service.ts`: Cadastro (Bcrypt) e Depósito Atômico.
   - `pix.service.ts`: CRUD de chaves com limite de 3.
   - `transacao.service.ts`: Transferência PIX Atômica e **Extrato (Histórico)** com entradas e saídas.

2. **Segurança & Autenticação (FASE 2 - EM ANDAMENTO ⏳):**
   - **Bcrypt (CONCLUÍDO ✅):** Hash de senhas implementado no cadastro e conferência no Pix.
   - **JWT + Refresh Token (CONCLUÍDO ✅):** `auth.service.ts` gera tokens e os persiste no banco de dados para controle de sessão.
   - **Zod (CONCLUÍDO ✅):** Blindagem de entrada (schemas) em todos os controllers financeiros.

3. **Próximo Grande Desafio: O "Porteiro" (PENDENTE ⏳):**
   - Criar `auth.middleware.ts` (O seu **Spring Security Filter**).
   - Bloquear acesso anônimo às rotas de `/fazerPix` e `/extrato`.
   - Implementar `AuthController` e `AuthRoutes` para expor o Login e Refresh ao Postman.

## 🛠️ Stack Tecnológica
- **Backend:** Node.js (Express + TypeScript).
- **ORM:** Prisma (v6).
- **Segurança:** Bcrypt + JWT (AccessToken & RefreshToken no Banco).
- **Validação:** Zod.
