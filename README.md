# Descrição - Cros-TodoList-API

Este repositório contém a API de cadastro de afazeres e de usuários desenvolvida para o teste técnico da empresa CroSoften.

## Funcionalidades

- Adicionar, atualizar, remover e carregar os afazeres 📝
- Cadastro e login de usuários
- Autenticação utilizando JSON Web Token (JWT)
- Armazenamento de dados no banco de dados PostgreSQL

## Tecnologias Utilizadas

- Framework: Express
- Biblioteca de validação: JSON Web Token (JWT)
- Banco de Dados: PostgreSQL
- ORM: Prisma
- Biblioteca Bcrypt para encriptção de senhas
- Biblioteca Joi para validação de inputs

## Documentação

[Swagger Documentação](https://app.swaggerhub.com/apis-docs/pinkglb/Cros-TodoList-API/1.0.0)

## Escolhas técnicas relevantes

- Arquitetura MVC, pois hexagonal com usecases ao meu ver seria adicionar complexidade desnecessária ao projeto e seria inviável tendo em vista o prazo.
- Abstração das bibliotecas do projeto (Joi e Bcrypt) afim de evitar alto acoplamento e maiores complicações posteriormente caso a biblioteca seja descontinuada ou aja incompatibilidade de versões.
- Princípios de desenvolvimento clean.
- A princípio iria dockerizar mas não consegui fazer o teste dentro do prazo.
- Tinha intenção de fazer testes com Jest mas também não consegui implementar dentro do prazo.
- Tratamento de erros

## Rodando localmente

1. Clone o repositório

```bash
~$ git clone https://github.com/adrian-s-costa/cros-todolist-api.git
```

2. Dentro do diretório onde o repositório foi clonado, instale as dependências

```bash
~$ npm i
```

3. Crie um aquivo `.env` na raíz do projeto e o configure de acordo com suas particularidades seguindo o padrão do `.env.example` para os nomes das variáveis de ambiente

```bash
  PORT=porta_em_que_API_vai_rodar
  JWT_SECRET=qualquer_valor_serve
  DATABASE_URL="postgresql://user:password@host:port/dbName"
```

4. Execute o comando `npx prisma migrate up` para rodar as migrações do banco

```bash
~$ npx prisma migrate up
```

5. Execute o comando `npm run start`

```bash
~$ npm run start
```

Pronto! API estará rodando em localmente <br/>

# Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
