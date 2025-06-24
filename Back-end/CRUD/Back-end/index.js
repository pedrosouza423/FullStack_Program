const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const rotaJogo = require('./routes/jogo-rotas');
const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/personagens', rotaJogo);
app.listen(3000, () => console.log("Servidor pronto"));