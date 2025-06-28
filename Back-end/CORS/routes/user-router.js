const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const verificarToken = require('../middleware/auth-middleware');

// Rota protegida
router.get('/usuarios', verificarToken, UserController.listarUsuarios);

module.exports = router;
