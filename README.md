# Boas vindas ao repositório do projeto Blitz!

## Description:

Blitz é um projeto com o intuito de proporcionar um gerenciamento de tarefas facilitado diferenciado e open-source.

## Tecnologias usadas

### Backend

- bcrypt
- cors
- dotenv
- express
- joi
- jsonwebtoken
- mysql2
- sequelize
- swagger-ui-express

### Frontend

- react
- react-router
- react-modal
- react-select
- react-toastify
- axios
- sass
- sass
- styled-components
- yup

## Como executar o projeto

Para a execução do projeto, é necessario ter o docker e o docker-compose instalado

### Backend

Comandos que devem ser executados na pasta do backend:

```shell
docker-compose up -d # Para subir o compose
npx sequelize-cli db:migrate # para executar as migrations do sequelize
npx sequelize-cli db:seed:all # para popular o banco
```

### Frontend

Comandos que devem ser executados na pasta do frontend:

```shell
npm start # Para iniciar a aplicação react
```

## Documentação da API

Na rota 3001/docs da api, é possivel conferir uma breve documentação da mesma.
Incluindo seus métodos e retorno.
