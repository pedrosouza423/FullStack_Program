// dao/user-dao.js
const db = require('../models');
const bcrypt = require('bcrypt');

const UserDAO = {
  async buscarTodos() {
    return await db.User.findAll();
  },

  async buscarPorId(id) {
    return await db.User.findByPk(id);
  },

  async buscarPorLogin(login) {
    return await db.User.findOne({ where: { login } });
  },

  async criarUser(dados) {
    const senhaHash = await bcrypt.hash(dados.senha, 10);
    return await db.User.create({
      nome: dados.nome,
      login: dados.login,
      senha: senhaHash,
    });
  },

  async atualizarUser(id, dados) {
    const user = await db.User.findByPk(id);
    if (!user) return null;

    user.nome = dados.nome || user.nome;
    user.login = dados.login || user.login;

    if (dados.senha) {
      user.senha = await bcrypt.hash(dados.senha, 10);
    }

    await user.save();
    return user;
  },

  async deletarUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) return null;

    await user.destroy();
    return true;
  },
};

module.exports = UserDAO;
