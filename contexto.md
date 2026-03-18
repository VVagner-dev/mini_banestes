Contexto do Projeto: Mini Banestes 🏦
Este documento serve como um checkpoint de arquitetura e contexto de desenvolvimento para que qualquer IA Assistente possa dar continuidade à mentoria do projeto, mantendo as Hard Rules estabelecidas.

🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO)
O usuário tem um background sólido em Java e Spring Boot e está aprendendo a stack moderna do ecossistema JavaScript (Node.js/TypeScript). Portanto, a IA assistente deve agir como um Mentor Sênior:

É EXPRESSAMENTE PROIBIDO ESCREVER O CÓDIGO FINAL PELO USUÁRIO. Não forneça funções completas, apenas blocos conceituais e desafios.
Em caso de erros, não entregue a solução mastigada. Aponte a falha e direcione o raciocínio.
Faça sempre que possível analogias com o Spring Boot (ex: Controllers, Services, JPA, etc.) para facilitar o mapeamento mental.
Estimule as boas práticas da Clean Architecture/Padrão em Camadas.

🏗️ O Que Já Foi Construído (Status Atual)

1. Configuração da Stack & DB:
   - Node.js (ES Modules), Express, TypeScript (TSX).
   - PostgreSQL rodando via Docker.
   - Prisma ORM configurado na Versão 6 (escolha técnica por simplicidade de conexão direta sem Driver Adapters complexos da v7).
   - Migrations executadas com sucesso (Tabelas 'contas' e 'pix_keys' criadas).

2. Arquitetura em Camadas (Implementada para Conta):
   - server.ts: Configurado com middlewares express.json() e express.urlencoded().
   - prisma.ts: Singleton do PrismaClient exportado para uso global.
   - conta.routes.ts: Rota POST /api/conta mapeada.
   - conta.controller.ts: Recebe req.body, desestrutura dados e chama o Service dentro de um bloco try/catch.
   - conta.service.ts: Realiza a persistência real no banco via Prisma (prisma.conta.create).

3. Validação de Fluxo:
   - Teste de criação de conta realizado com sucesso via Postman (Resolvido problema de Content-Type/JSON).

🎯 Próximos Passos (O Desafio Financeiro)

1. Gestão de Chaves Pix:
   - Criar pix.service.ts para vincular chaves a uma conta.
   - Implementar a regra de negócio: Limite máximo de 3 chaves por conta (usando prisma.pixKey.count).

2. Transferências PIX (O Core do MVP):
   - Criar transacao.service.ts para realizar transferências entre contas.
   - Implementar Transações Atômicas (ACID) usando prisma.$transaction para garantir que o dinheiro saia de uma conta e entre na outra simultaneamente.
   - Validação de saldo: Impedir transferências se o saldo for insuficiente.

3. Validação com Zod:
   - Implementar schemas de validação para as requisições (CPF, Nome, Valores) para substituir o Bean Validation (@Valid) do Spring.

4. Segurança (Fase 2):
   - Implementar Hash de Senhas (bcrypt) e Autenticação JWT.

💾 Detalhes Técnicos Importantes:
- URL de Conexão: postgresql://wagner:123@localhost:5432/mini_banco_dados?schema=public
- Porta do Servidor: 3001
- Prefixo das Rotas: /api
