import { criarProduto, obterTodos } from "./controller-produto.js";

// Criar um novo produto
await criarProduto("Maçã", 200);

// Mostrar todos os produtos
const lista = await obterTodos();
console.log(JSON.stringify(lista, null, 2));
