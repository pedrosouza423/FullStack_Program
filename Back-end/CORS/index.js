const express = require('express');
const cors = require('cors');

const app = express();

// Permitir qualquer origem (modo aberto — apenas para testes)
app.use(cors({ origin: '*' }));

// Para conseguir processar JSON no corpo das requisições
app.use(express.json());

// Exemplo de rota simples
app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando com CORS liberado' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
