const jwt = require('jsonwebtoken');
const SECRET = "seuSegredoAqui";

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ erro: "Token ausente" });

  const token = authHeader.split(" ")[1]; // "Bearer tokenAqui"

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // coloca os dados do usuário na req
    next();
  } catch (err) {
    return res.status(403).json({ erro: "Token inválido ou expirado" });
  }
}

module.exports = verificarToken;
