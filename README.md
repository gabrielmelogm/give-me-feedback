# NLW Heat
Aplicação node feito durante o evento NLW

## FEATURES 🚀
- Express
- oauth (GitHub)
- Prisma (Sqlite)

## INICIANDO O PROJETO
- Clonar esse repositório
- Execultar o comando <code>yarn</code> para instalar as dependências
- Criar o arquivo .env:
  - DATABASE_URL
    - url do seu banco de dados de preferência
  - GITHUB_CLIENT_SECRET
    - Obito através do GitHub
  - GITHUB_CLIENT_ID
    - Obito através do GitHub junto com o GITHUB_CLIENT_SECRET
  - JWT_SECRET
    - Uma senha segura de sua preferência

## UM RESUMO DO CAMINHO QUE SEGUIMOS PARA CRIAR ESSA APLICAÇÃO

### CHECKLIST

- [x] Criar projeto
- [x] Instalar Express, Prisma, Typescript
- [x] Configurar Github OAuth
- [x] Criar rota login github
- [x] Criar rota callback
- [x] Autenticação usuário recebendo o código
- [x] Cadastro de mensagem
- [x] Configuração websocket
- [x] Retornar 3 últimas mensagens
- [x] Criar profile do user

### BUGS

- [x] Ajustar bug na autenticação com o GitHub
  - Não esqueça do await em async functions
