const readline = require('readline');
const Cliente = require("./cliente.js")
const cliente = new Cliente();
const leitor = readline.createInterface({
 input: process.stdin, output: process.stdout
});
const ler = (pergunta) => {
 return new Promise(resolve => {
 leitor.question(pergunta, (input) => resolve(input))
 });
}
const menu = async () => {
 console.log("1-Listar 2-Incluir 3-Alterar 4-Excluir 0-Sair");
 const valor = await ler("Digite a opcao:");
 return eval(valor);
}

const incluir = async () => {
 const [nome, ataque, defesa] = await obterDados();
 await cliente.incluir(nome,ataque,defesa);
}

const obterDados = async() => {
 const nomeStr = await ler("Nome:");
 const ataqueStr = await ler("Ataque:");
 const defesaStr = await ler("Defesa:");
 return [nomeStr, eval(ataqueStr), eval(defesaStr)];
}

const alterar = async () => {
 const idStr = await ler("ID do personagem a alterar:");
    const id = eval(idStr);
    const [nome, ataque, defesa] = await obterDados();
    await cliente.alterar(id, nome, ataque, defesa);
}

const excluir = async () => {
 const idStr = await ler("ID do personagem a excluir:");
    const id = eval(idStr);
    await cliente.excluir(id);
}

const listar = async () => {
 const dados = await cliente.obterTodos();
 for(let obj of dados)
 console.log(obj);
}

const principal = async () => {
 let opcao;
 do {
 opcao = await menu();
 switch(opcao){
 case 1: await listar(); break;
 case 2: await incluir(); break;
 case 3: await alterar(); break;
 case 4: await excluir(); break;
 }
 } while (opcao != 0);
}
principal().then(()=>leitor.close());