const UserDAO = require('../dao/user-dao');

const UserController = {
  async listarUsuarios(req, res) {
    try {
      const usuarios = await UserDAO.buscarTodos();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
  }
};

module.exports = UserController;
