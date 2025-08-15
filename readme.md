# Alura API REST - Livraria

Este repositório contém uma **API RESTful** construída com **Node.js**, **Express** e **MongoDB**.  
Foi desenvolvida como parte de um curso da Alura para demonstrar os fundamentos de criação de uma aplicação back-end para gerenciar a coleção de livros e autores de uma livraria virtual.

---

## Funcionalidades

- **CRUD de Livros:** Criar, listar, atualizar e deletar livros.  
- **CRUD de Autores:** Criar, listar, atualizar e deletar autores.  
- **Integração com Banco de Dados:** Conexão com MongoDB usando Mongoose para modelagem e persistência de dados.  
- **Rotas Estruturadas:** Organização clara das rotas para endpoints manuteníveis.  
- **Configuração de Ambiente:** Uso do `dotenv` para gerenciar variáveis de ambiente de forma segura.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18.x ou superior)  
- [MongoDB](https://www.mongodb.com/) (instância rodando local ou na nuvem)

---

## Como Executar

Siga estas instruções para obter uma cópia do projeto funcionando em sua máquina local.

### Instalação

1. **Clone o repositório:**  
    ```sh
    git clone https://github.com/AntonioNeto18/alura-primeira-api-rest.git
    cd alura-primeira-api-rest
    ```

2.  **Instale as dependências**
    ```sh
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão com o MongoDB:
    ```env
    DB_CONECTION_STRING="your_mongodb_connection_string_here"
    ```

### Executando a Aplicação

Para iniciar o servidor com recarga automática ao alterar arquivos (usando `nodemon`), execute:

```sh
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

A API fornece os seguintes endpoints para interagir com os recursos de livros e autores.

### Autores

| Método | Endpoint              | Descrição                        | Corpo da requisição              |
| :----- | :-------------------- | :------------------------------- | :------------------------------- |
| `GET`  | `/autores`            | Lista todos os autores.       | -                                |
| `GET`  | `/autores/:id`        | Retorna um autor pelo ID. | -                                |
| `POST` | `/autores`            | Cria um novo autor.             | `{"nome": "...", "nacionalidade": "..."}` |
| `PUT`  | `/autores/:id`        | Atualiza um autor existente.       | `{"nome": "...", "nacionalidade": "..."}` |
| `DELETE`| `/autores/:id`       | Deleta um autor pelo ID.    | -                                |
| `DELETE`| `/autores/all`       | **Deleta todos os autores.**              | -                                |

### Livros

O autor de um livro deve ser especificado pelo `ObjectId` do MongoDB.

| Método | Endpoint              | Descrição                                      | Corpo da requisição                                                                                 |
| :----- | :-------------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------------- |
| `GET`  | `/livros`             | Lista todos os livros (com detalhes do autor).   | -                                                                                            |
| `GET`  | `/livros/:id`         | Retorna um livro pelo ID.                     | -                                                                                            |
| `GET`  | `/livros/search`      | Lista livros por editora (e.g., `?editora=Casa do Código`). | -                                                                                            |
| `POST` | `/livros`             | Cria um novo livro.                               | `{"titulo": "...", "editora": "...", "preco": ..., "paginas": ..., "autor": "ObjectId(...)"}` |
| `PUT`  | `/livros/:id`         | Atualiza um livro existente.                         | `{"titulo": "...", "editora": "...", ...}`                                                   |
| `DELETE` | `/livros/:id`       | Deleta um livro pelo ID.                         | -                                                                                            |
| `DELETE` | `/livros/all`       | **Deleta todos os livros.**                            | -                                                                                            |

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript.
-   **Express.js**: Framework web para Node.js.
-   **MongoDB**: Banco de dados NoSQL.
-   **Mongoose**: Biblioteca ODM para modelagem e conexão com MongoDB.
-   **Nodemon**: Monitoramento de alterações no código para reinício automático do servidor.
-   **Dotenv**: Carregamento de variáveis de ambiente a partir de um arquivo `.env`.