const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

// Lê o arquivo swagger.json
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json'));

// Rota da documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas principais da API
const notasDummy = require('./notas-dummy');
app.use('/', notasDummy);

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 — http://localhost:3000');
  console.log('Swagger disponível em: http://localhost:3000/docs');
});
