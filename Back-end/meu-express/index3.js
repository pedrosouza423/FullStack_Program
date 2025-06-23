const express = require('express');
const app = express();

// Precisamos de um parser para receber dados do formulário
app.use(express.urlencoded({ extended: true }));

// Armazenamento em memória
let tarefas = [ { tarefa: "compilar" }, { tarefa: "testar" } ];

// Função que monta a página HTML dinamicamente
function getPagina() {
  let conteudo = `<html><body><form method='post'>`;
  conteudo += `<input type='text' name='tarefa' placeholder='Tarefa'>`;
  conteudo += `<input type='submit' value='Adicionar'></form><ul>`;
  for (let t of tarefas)
    conteudo += `<li>${t.tarefa}</li>`;
  conteudo += `</ul></body></html>`;
  return conteudo;
}

// GET: mostra a página com formulário + lista
app.get(['/','/web/tarefas'], (req, res) => {
  res.status(200).contentType('text/html').send(getPagina());
});

// POST: recebe tarefa e adiciona na lista
app.post(['/','/web/tarefas'], (req, res) => {
  tarefas.push({ tarefa: req.body.tarefa });
  res.status(200).contentType('text/html').send(getPagina());
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/web/tarefas");
});
