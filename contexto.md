# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Controllers, Services, JPA).
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint Final do Backend)

1. **Núcleo Financeiro (CONCLUÍDO ✅):**
   - CRUD de Contas e Pix (limite de 3 chaves).
   - Depósito e Transferência Atômica (`$transaction`).
   - Extrato (Entradas e Saídas) com filtragem OR e Join de dados.

2. **Segurança & Blindagem (CONCLUÍDO ✅):**
   - **Bcrypt:** Senhas protegidas no banco.
   - **JWT + Refresh Token:** Controle de sessão persistente no banco.
   - **Middleware:** Proteção de rotas e extração de usuário via Token.
   - **Zod:** Validação completa de entrada em todas as rotas.
   - **Swagger:** Documentação interativa completa (OAS 3.0).

3. **Fase 3: Frontend (EM ANDAMENTO ⏳):**
   - Iniciar React + Vite + TypeScript.
   - Consumo da API com Axios.
   - Gerenciamento de estado de autenticação (Login/Logout).

## 🛠️ Stack Tecnológica
- **Backend:** Node.js (Express + TypeScript + Prisma).
- **Segurança:** Bcrypt + JWT (AccessToken & RefreshToken).
- **Frontend:** React (Vite + TypeScript).
- **Estilo:** React-Bootstrap (a definir).
