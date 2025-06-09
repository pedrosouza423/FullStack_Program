import ProdutoRepo from "../model-produto.js";

export async function obterTodos() {
  return await ProdutoRepo.findAll();
}

export async function obterProduto(codigo) {
  return await ProdutoRepo.findByPk(codigo);
}

export async function criarProduto(nome, quantidade) {
  const produto = await ProdutoRepo.create({ nome, quantidade });
  return produto.codigo;
}

export async function atualizarProduto(codigo, dados) {
  const produto = await ProdutoRepo.findByPk(codigo);
  if (!produto) return null;

  await produto.update(dados);
  return produto;
}

export async function removerProduto(codigo) {
  const produto = await ProdutoRepo.findByPk(codigo);
  if (!produto) return false;

  await produto.destroy();
  return true;
}
