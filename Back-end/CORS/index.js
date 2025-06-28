const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

app.use('/auth', authRouter);   
app.use('/api', userRouter);     


app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando com CORS liberado' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
