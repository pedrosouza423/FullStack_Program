const express = require("express");
const app = express();


app.set("view engine", "ejs");   
app.set("views", "./views");    

const pessoas = [
  { nome: "Carlos", idade: 45 },
  { nome: "Joana",  idade: 36 },
  { nome: "Olívia", idade: 29 },
];


app.get("/exemplo", (req, res) => {
  res.render("exemplo", { pessoas });
});

app.get("/pessoa/:id", (req, res) => {
  const id = Number(req.params.id);  
  const pessoa = pessoas[id];       

  if (pessoa) {
    res.render("pessoa", { pessoa });
  } else {
    res.status(404).send("Pessoa não encontrada");
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`➜  Servidor em http://localhost:${PORT}/exemplo`)
);
