# Contexto do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Estou desenvolvendo este projeto para um processo seletivo de estágio (Banestes) e o meu objetivo absoluto é **APRENDER**. 
Portanto, atue como meu Mentor Sênior. Siga estas regras estritamente:
1. **PROIBIDO ESCREVER O CÓDIGO FINAL POR MIM.**
2. Aponte erros, explique conceitos e faça analogias com **Spring Boot** (Iniciante) para reforçar meu aprendizado em arquitetura.
3. Priorize boas práticas e arquitetura em camadas.

## 🏗️ Status Atual (Checkpoint de Evolução Frontend - 30/03/2026)

1. **Backend Bancário (CONCLUÍDO ✅):**
   - **Gestão de Contas:** `GET /api/conta` retornando Saldo, Nome e Chaves Pix (`include: { pix: true }`).
   - **Transações Atômicas:** `POST /api/fazerPix` e `POST /api/conta/deposito` usando `prisma.$transaction`.
   - **Histórico:** `GET /api/extrato` filtrando entradas e saídas (`OR` no Prisma).
   - **Segurança:** Middlewares protegendo todas as rotas sensíveis via JWT.

2. **Frontend - Integração (CONCLUÍDO ✅):**
   - **Dashboard Funcional:** Consumo de saldo e dados do usuário via `useEffect` e `Axios Interceptor`.
   - **Extrato Inteligente:** Listagem com `.map()` e lógica de identificação de Entrada/Saída baseada no `meuId`.
   - **Operações Financeiras:** Formulários de Pix e Depósito enviando dados e atualizando a interface automaticamente.
   - **Gestão de Chaves:** Criar e Deletar chaves Pix aleatórias (limite de 3) direto no Dashboard.
   - **Tipagem (TS):** Interfaces `Transacao` e `PixKey` garantindo a segurança dos dados no React.

3. **Fase 4: Refinamento & Estética (PRÓXIMA ETAPA ⏳):**
   - **Refino de Lógica:** Ajustar o Extrato para diferenciar Depósitos de Entradas comuns.
   - **UX/UI:** Limpar campos de formulário após sucesso e tratar erros do backend.
   - **Tailwind CSS:** Migrar do CSS Puro para um visual moderno e "padrão Banestes".

## 🛠️ Próximo Passo Imediato
- Iniciar a estilização com **Tailwind CSS** para transformar o esqueleto em uma aplicação visualmente profissional.
- Refinar a lógica de ícones no Extrato (Diferenciar Depósito de Entrada).

## 🛠️ Stack Tecnológica Atualizada
- **Backend:** Node.js (Express + TypeScript + Prisma).
- **Frontend:** React (Vite + TS + Axios).
- **Segurança:** JWT (Auth Header) + Bcrypt.
