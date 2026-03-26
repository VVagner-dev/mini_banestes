# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Controllers, Services, JPA).
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint de Evolução Frontend)

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
   - **Setup Inicial:** React + Vite + TypeScript (CONCLUÍDO ✅).
   - **Serviços:** Configuração do Axios para integração com API (CONCLUÍDO ✅).
   - **Fluxo de Acesso:** Telas de Login e Cadastro funcionais com `useState` (CONCLUÍDO ✅).
   - **Navegação:** Roteamento configurado com `react-router-dom` (CONCLUÍDO ✅).
   - **Sessão:** Persistência do Token JWT no `localStorage` (CONCLUÍDO ✅).
   - **Próximo Passo:** Criar o Dashboard e implementar a Proteção de Rotas (Private Routes).

## 🛠️ Stack Tecnológica
- **Backend:** Node.js (Express + TypeScript + Prisma).
- **Segurança:** Bcrypt + JWT (AccessToken & RefreshToken).
- **Frontend:** React (Vite + TypeScript + React Router + Axios).
- **Estilo:** CSS Puro / Flexbox (em evolução).
