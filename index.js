import { criarProduto, obterTodos, obterProduto } from "./controllers/controller-produto.js";

// Criar novo produto
await criarProduto("Maçã", 200);

// Obter todos
const lista = await obterTodos();
console.log(JSON.stringify(lista, null, 2));

// Obter um específico
const item = await obterProduto(1);
console.log("Produto:", item?.nome ?? "Produto não encontrado");
