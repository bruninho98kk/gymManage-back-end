# GymManage Back-End

Este é o back-end de um sistema de gerenciamento para uma coleção de exercícios. Ele foi desenvolvido utilizando Node.js, Express e Prisma.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [SQLite](https://www.sqlite.org/) (opcional, já que o banco é gerado automaticamente)

## Passo a passo para rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/bruninho98kk/gymManage-back-end.git
cd gymManage-back-end

npm install
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET="my_secret_key"

4. Configure o banco de dados
Rode as migrações para criar as tabelas no banco de dados:
npx prisma migrate dev


6. Inicie o servidor:
npm run dev

O servidor estará rodando em http://localhost:5000.
