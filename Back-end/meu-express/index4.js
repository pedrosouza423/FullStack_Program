const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');  

app.get('/exemplo', (req, res) => {
 
  const pessoas = [
    { nome: 'Carlos', idade: 45 },
    { nome: 'Joana',  idade: 36 },
    { nome: 'Olívia', idade: 29 }
  ];


  res.render('exemplo', { pessoas });
});

app.listen(3000, () =>
  console.log('Servidor em http://localhost:3000/exemplo')
);
