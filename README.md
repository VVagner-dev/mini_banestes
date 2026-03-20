# Mini Banestes 🏦

Protótipo de um sistema bancário simplificado desenvolvido para o processo seletivo de estágio do **Banestes**. O projeto foca em boas práticas de engenharia de software, segurança e integridade de dados.

## 🚀 Status do Projeto
- **Backend:** Concluído ✅ (Incluindo segurança avançada e documentação).
- **Frontend:** Em desenvolvimento ⏳ (React + Vite + TypeScript).

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** com **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Express**: Framework web minimalista e rápido.
- **Prisma ORM**: Gerenciamento de banco de dados com produtividade e segurança de tipos.
- **PostgreSQL**: Banco de dados relacional robusto.
- **Zod**: Validação rigorosa de esquemas de entrada.
- **JWT (JSON Web Token)**: Autenticação stateless com Access e Refresh Tokens.
- **Bcrypt**: Criptografia de senhas (Hashing).
- **Swagger (OpenAPI 3.0)**: Documentação interativa da API.
- **Docker**: Containerização do banco de dados para fácil configuração do ambiente.

## 🏗️ Arquitetura
O projeto segue um padrão de camadas inspirado em princípios de Clean Architecture, facilitando a manutenção e testes:
- **Routes:** Definição dos endpoints e middlewares.
- **Controllers:** Orquestração da requisição e resposta (Equivalente aos Controllers no Spring).
- **Services:** Regras de negócio e lógica pesada (Equivalente aos @Service no Spring).
- **Prisma (Repository):** Abstração do acesso aos dados.

## ✨ Funcionalidades

### Autenticação & Segurança
- Login com CPF e Senha.
- Proteção de rotas via JWT.
- Renovação de sessão via Refresh Token persistido no banco.
- Senhas protegidas com Salt e Hash (Bcrypt).

### Core Financeiro
- **Gestão de Contas:** Criação de conta e depósitos automáticos.
- **PIX:**
    - Cadastro de até 3 chaves aleatórias por conta.
    - Transferências instantâneas.
    - Garantia de **Atomicidade (ACID)** usando `$transaction` do Prisma (se o débito falha, o crédito não ocorre).
- **Extrato:** Histórico completo de transações (entradas e saídas) com ordenação cronológica.

## ⚙️ Como Executar

### Pré-requisitos
- Node.js (v18+)
- Docker e Docker Compose

### Passos
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/mini_banestes.git
   cd mini_banestes
   ```

2. **Configurar o Banco de Dados:**
   ```bash
   docker-compose up -d
   ```

3. **Configurar o Backend:**
   ```bash
   cd backend
   npm install
   ```

4. **Configurar variáveis de ambiente:**
   Crie um arquivo `.env` dentro da pasta `backend` seguindo o exemplo:
   ```env
   DATABASE_URL="postgresql://wagner:123@localhost:5432/mini_banco_dados?schema=public"
   JWT_SECRET="sua_chave_secreta_aqui"
   ```

5. **Executar Migrations:**
   ```bash
   npx prisma migrate dev
   ```

6. **Iniciar o servidor:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em `http://localhost:3001`.

## 📖 Documentação da API
Com o servidor rodando, acesse a documentação interativa (Swagger) em:
`http://localhost:3001/api/doc`

---
Desenvolvido por [Seu Nome] - Março de 2026.
