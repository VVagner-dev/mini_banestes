# Planejamento do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Este documento serve como guia de escopo e aprendizado. A IA atua como Mentor Sênior.
**É EXPRESSAMENTE PROIBIDO ESCREVER O CÓDIGO FINAL PELO USUÁRIO.**

## 🎯 Status do Projeto (Março/2026)
O Backend foi concluído com sucesso. O foco agora é a entrega visual e funcional do Frontend.

### ✅ Fase 1 & 2 (Backend Concluído)
*   Integridade ACID garantida.
*   Autenticação robusta (JWT/Bcrypt).
*   Documentação Swagger interativa em `/api-docs`.

### ⏳ Fase 3 (Frontend - Atual)
*   **Objetivo:** Criar uma interface intuitiva e visualmente alinhada à identidade do Banestes.
*   **Tecnologias:** React, TypeScript, Axios, React Router.
*   **Estratégia de Estilização (O Plano Tailwind):**
    1.  **Lógica Primeiro:** Desenvolvimento das funcionalidades (Login, Cadastro, Dashboard, Pix) usando CSS Puro/Flexbox para entender os conceitos base.
    2.  **Refatoração para Tailwind:** Após a lógica estar sólida e as rotas protegidas, faremos a migração para TailwindCSS para polimento visual e produtividade.

## 🏗️ Padrão de Arquitetura
Mantendo o padrão de camadas no Backend e Componentização no Frontend.
`Routes -> Controller -> Service -> Repository (Prisma)`
`App -> Router -> Pages -> Components -> Services (Axios)`
