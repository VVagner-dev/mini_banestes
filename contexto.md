# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Iniciante) para reforçar meu aprendizado em arquitetura.
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint de Evolução Frontend)

1. **Núcleo Financeiro (CONCLUÍDO ✅):**
   - CRUD de Contas e Pix.
   - Depósito e Transferência Atômica.
   - Extrato (Entradas e Saídas).

2. **Segurança & Blindagem (CONCLUÍDO ✅):**
   - **Bcrypt:** Senhas protegidas.
   - **JWT + Refresh Token:** Controle de sessão.
   - **Axios Interceptor:** Envio automático do Token no Header (CONCLUÍDO ✅).

3. **Fase 3: Frontend (EM ANDAMENTO ⏳):**
   - **Setup Inicial:** Vite + TypeScript (CONCLUÍDO ✅).
   - **Fluxo de Acesso:** Login e Cadastro funcionais (CONCLUÍDO ✅).
   - **Navegação:** Roteamento com `Link` e `Routes` (CONCLUÍDO ✅).
   - **Dashboard:** Esqueleto criado, aguardando lógica de dados (EM ANDAMENTO ⏳).

## 🛠️ Próximo Passo Imediato
- Criar o endpoint `GET /api/conta` no Backend (Service -> Controller -> Routes).
- Implementar o `useEffect` no `Dashboard.tsx` para buscar o Saldo real.
- **Plano Tailwind:** Iniciar após a lógica do Dashboard e Pix estar sólida.

## 🛠️ Stack Tecnológica
- **Backend:** Node.js (Express + TypeScript + Prisma).
- **Frontend:** React (Vite + TS + React Router + Axios).
- **Estilo Atual:** CSS Puro / Flexbox.
