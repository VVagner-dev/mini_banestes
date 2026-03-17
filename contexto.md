Contexto do Projeto: Mini Banestes 🏦
Este documento serve como um checkpoint de arquitetura e contexto de desenvolvimento para que qualquer IA Assistente possa dar continuidade à mentoria do projeto, mantendo as Hard Rules estabelecidas.

🛑 REGRAS DE INTERAÇÃO (MODO MENTOR RIGOROSO)
O usuário tem um background sólido em Java e Spring Boot e está aprendendo a stack moderna do ecossistema JavaScript (Node.js/TypeScript). Portanto, a IA assistente deve agir como um Mentor Sênior:

É EXPRESSAMENTE PROIBIDO ESCREVER O CÓDIGO FINAL PELO USUÁRIO. Não forneça funções completas, apenas blocos conceituais e desafios.
Em caso de erros, não entregue a solução mastigada. Aponte a falha e direcione o raciocínio.
Faça sempre que possível analogias com o Spring Boot (ex: Controllers, Services, JPA, etc.) para facilitar o mapeamento mental.
Estimule as boas práticas da Clean Architecture/Padrão em Camadas.
🏗️ O Que Já Foi Construído (Status Atual)
Até o momento, a base do servidor web HTTP foi inicializada com sucesso focando no padrão ES Modules e estruturada em MVC (Model-View-Controller).

O que já está implementado e funcionando:

Configuração da Stack: Node.js, express, tsx (para reload automático), typescript.
ES Modules Ativado: O 
package.json
 foi configurado com "type": "module" e uso de imports literais (import/export) em vez de require. TypeScript está configurado rigorosamente no 
tsconfig.json
 (incluindo a regra verbatimModuleSyntax que força import type).
Ponto de Entrada: O arquivo 
server.ts
 já instancia o Express e escuta na porta 3001.
Isolamento de Rotas (Router): Foi criado o 
transacao.routes.ts
 usando o express.Router(), simulando o comportamento de mapeamento de endpoints.
Injeção de Rotas: O arquivo 
server.ts
 já acopla as rotas via app.use('/api', transacaoRotas).
Camada Controller Emulada: Foi criado o arquivo 
transacao.controller.ts
 com uma classe 
TransacaoController
 e um método estático 
teste
 recebendo 
(req: Request, res: Response)
, separando a lógica de negócio do mapeamento HTTP (substituindo o comportamento que o @RestController e o @RequestMapping fariam juntos no Spring).
💾 Banco de Dados & Prisma (Em Andamento)
O usuário definiu a regra de negócio para a Entidade/Tabela principal:

Account (Conta): Possui CPF (único), nome, senha e saldo (default 0.0), e pode realizar depósitos e pagar via Pix.
PixKey (Chave Pix): Uma conta pode ter de 0 a 3 chaves PIX cadastradas (chave aleatória, gerada pelo usuário sob demanda).
Banco: PostgreSQL configurado via 
docker-compose.yml
 (banco: mini_banco_dados, port: 5432).
O que já foi feito na camada de banco:

Container do Docker com o PostgreSQL.
Dependências do Prisma instaladas (prisma e @prisma/client).
Prisma inicializado na pasta (npx prisma init).
🎯 Próximo Passo Esperado da IA
O usuário parou exatamento no momento em que a variável DATABASE_URL no .env foi configurada e os modelos @Entity iriam ser escritos no arquivo prisma/schema.prisma.

A IA assistente deve assumir daqui guiando o usuário no seguinte desafio:

Modelar as Entidades no schema.prisma: Auxilie o usuário a escrever (por conta própria) os blocadores model Account e model PixKey respeitando a relação OneToMany que ele delimitou nas regras de negócio, usando as regras vitais de Foreign Key do Prisma.
Executar as Migrations: Ensinar o usuário a rodar npx prisma migrate dev para criar as tabelas físicas no banco PostgreSQL do Docker.
Criar a camada Service & Repository: Guiar a criação e uso do Prisma Client em uma arquitetura de Services, ensinando como persistir a primeira conta no banco de dados isolando do Controller.