# Planejamento do Projeto: Mini Banestes 🏦

## 🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO ATIVADO)
Este documento serve como guia de escopo e aprendizado. A IA atua como Mentor Sênior.
**É EXPRESSAMENTE PROIBIDO ESCREVER O CÓDIGO FINAL PELO USUÁRIO.**

## 🎯 Status do Projeto (Março/2026)
O Backend foi concluído com sucesso, superando o MVP inicial e incluindo funcionalidades avançadas de segurança (Refresh Tokens e Swagger). O foco agora é a entrega visual.

### ✅ Fase 1 & 2 (Backend Concluído)
*   Integridade ACID garantida.
*   Autenticação robusta (JWT/Bcrypt).
*   Documentação Swagger interativa em `/api-docs`.

### ⏳ Fase 3 (Frontend - Atual)
*   **Objetivo:** Criar uma interface intuitiva e visualmente alinhada à identidade do Banestes.
*   **Tecnologias:** React, TypeScript, Axios para integração.
*   **Telas Principais:** Login, Cadastro, Dashboard (Saldo/Pix/Extrato).

## 🛠️ Stack Tecnológica Consolidada
- **Backend:** Node.js / Express / Prisma / PostgreSQL.
- **Validação:** Zod (Schemas de Entrada).
- **Segurança:** JWT (Access/Refresh Tokens) + Bcrypt.
- **Frontend:** React + Vite + TypeScript.

## 🏗️ Padrão de Arquitetura
Mantendo o padrão de camadas no Backend e Componentização no Frontend.
`Routes -> Controller -> Service -> Repository (Prisma)`
