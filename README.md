# Events Planning - Backend

Este projeto é a implementação do backend de um sistema de planejamento de eventos usando **NestJS** com GraphQL e TypeORM.

## Descrição

O sistema permite o gerenciamento de eventos, com funcionalidades para:
- Criar, atualizar, remover e consultar eventos.
- Manter um histórico de modificações de eventos.
- Filtrar eventos por título, local, data de início e data de fim.
- Paginar os resultados da consulta de eventos.

### Tecnologias Utilizadas:
- **NestJS**: Framework de backend.
- **GraphQL**: API para interagir com o backend.
- **TypeORM**: ORM para interagir com o banco de dados.
- **PostgreSQL** ou **MySQL**: Banco de dados (configurável no arquivo de configuração).

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes)
- **Banco de Dados** (PostgreSQL ou MySQL)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/d8barcelos/events-planning.git
    cd events-planning
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados no arquivo `ormconfig.json` ou `app.module.ts`.

4. Execute as migrações (caso esteja usando TypeORM):

    ```bash
    npm run typeorm migration:run
    ```

5. Inicie o servidor:

    ```bash
    npm run start:dev
    ```

O servidor estará rodando em `http://localhost:3000` (pode ser configurado no arquivo `main.ts`).

## Funcionalidades

- **Consulta de Eventos**: Obtém uma lista de eventos com filtros e paginação.
- **Consulta de Evento Específico**: Obtém um evento específico pelo ID.
- **Criação de Evento**: Cria um novo evento.
- **Atualização de Evento**: Atualiza um evento existente.
- **Remoção de Evento**: Remove um evento pelo ID.

## Exemplos de Consultas GraphQL

- **Consultar Todos os Eventos**: 
    - É possível filtrar eventos por título, local, data de início e data de fim. A consulta pode ser paginada.

- **Consultar Evento Específico**: 
    - Pesquisa um evento pelo ID.

- **Criar Evento**: 
    - Permite criar um evento informando título, descrição, data e local.

- **Atualizar Evento**: 
    - Atualiza um evento existente.

- **Remover Evento**: 
    - Remove um evento pelo ID.

## Testes

Você pode realizar testes diretamente na interface GraphQL Playground, Insomnia ou qualquer outra ferramenta de sua preferência para GraphQL.

## Contribuindo

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Envie para o seu repositório remoto: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
