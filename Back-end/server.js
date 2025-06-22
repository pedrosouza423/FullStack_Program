import express from "express";
import {
  obterTodos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  removerProduto
} from "./controllers/controller-produto.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/produtos", async (req, res) => {
  const produtos = await obterTodos();
  res.status(200).json(produtos);
});

app.get("/produtos/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const produto = await obterProduto(codigo);
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, quantidade } = req.body;
  const codigo = await criarProduto(nome, quantidade);
  res.status(201).json({ codigo });
});

app.put("/produtos/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const atualizado = await atualizarProduto(codigo, req.body);
  if (atualizado) {
    res.status(200).json(atualizado);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

app.delete("/produtos/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const sucesso = await removerProduto(codigo);
  if (sucesso) {
    res.status(204).end(); 
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
