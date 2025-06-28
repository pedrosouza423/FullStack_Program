const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserDAO = require('../dao/user-dao');

// Guardar em .env ou outro local seguro
const SECRET = "seuSegredoAqui";

const AuthController = {
  async login(req, res) {
    const { login, senha } = req.body;

    const user = await UserDAO.buscarPorLogin(login);
    if (!user) {
      return res.status(401).json({ erro: "Usuário não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: "Senha incorreta" });
    }

    const payload = { id: user.id, nome: user.nome };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

    return res.json({ token });
  }
};

module.exports = AuthController;
