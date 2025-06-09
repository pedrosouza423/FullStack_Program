# FullStack_Program – API REST com Node.js, Sequelize e MySQL

Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express** e **Sequelize**, conectada a um banco de dados **MySQL**, para o gerenciamento de produtos.  

Ela foi estruturada com base em boas práticas de arquitetura, organização em camadas e uso de ferramentas modernas de desenvolvimento.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) – para testar as rotas
- JavaScript (ESModules)

---

## 📦 Funcionalidades da API

| Método | Rota               | Descrição                         |
|--------|--------------------|-----------------------------------|
| GET    | `/produtos`        | Lista todos os produtos           |
| GET    | `/produtos/:codigo`| Retorna um produto pelo código    |
| POST   | `/produtos`        | Cadastra um novo produto          |
| PUT    | `/produtos/:codigo`| Atualiza um produto existente     |
| DELETE | `/produtos/:codigo`| Remove um produto do sistema      |

---

## 🔧 Como executar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/pedrosouza423/FullStack_Program.git
cd FullStack_Program
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

* Crie um banco chamado `loja_node` no seu MySQL
* Atualize as credenciais no arquivo `config/config.json` conforme seu ambiente local

### 4. Execute as migrations e seeders

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. Inicie o servidor

```bash
node server.js
```

Acesse a API em:

```
http://localhost:3000/produtos
```

---

## 🧪 Testes com Postman

Utilize o [Postman](https://www.postman.com/downloads/) para testar as rotas.
Envie requisições `GET`, `POST`, `PUT` e `DELETE` para a URL `http://localhost:3000`.

Exemplo de requisição `POST` (criar produto):

```
POST http://localhost:3000/produtos
Body (raw JSON):
{
  "nome": "Abacaxi",
  "quantidade": 300
}
```

---

## 📁 Estrutura de diretórios

```
FullStack_Program/
├── controllers/             # Lógica de negócio e operações CRUD
│   └── controller-produto.js
├── models/                  # Definições das tabelas Sequelize
│   └── model-produto.js
├── migrations/              # Scripts de criação de tabelas
├── seeders/                 # Dados iniciais para popular o banco
├── config/                  # Configuração do Sequelize
├── db.js                    # Conexão com banco de dados
├── index.js                 # Script de teste local da API
├── server.js                # Servidor Express com rotas REST
└── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Souza**
[GitHub – pedrosouza423](https://github.com/pedrosouza423)

---

## 📘 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e contribuir!

```
