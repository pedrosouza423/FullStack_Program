const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /notas:
 *   get:
 *     summary: Lista todas as notas
 *     responses:
 *       200:
 *         description: Lista de notas
 */
router.get('/notas', (req, res) => {
  res.json([{ titulo: 'Nota 1' }, { titulo: 'Nota 2' }]);
});

/**
 * @swagger
 * /notas:
 *   post:
 *     summary: Cria uma nova nota
 *     responses:
 *       201:
 *         description: Nota criada com sucesso
 */
router.post('/notas', (req, res) => {
  res.status(201).json({ mensagem: 'Nota criada com sucesso' });
});

/**
 * @swagger
 * /notas/{id}:
 *   get:
 *     summary: Retorna uma nota específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nota encontrada
 */
router.get('/notas/:id', (req, res) => {
  res.json({ id: req.params.id, titulo: 'Nota específica' });
});

/**
 * @swagger
 * /notas/{id}:
 *   put:
 *     summary: Atualiza uma nota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nota atualizada
 */
router.put('/notas/:id', (req, res) => {
  res.json({ id: req.params.id, mensagem: 'Nota atualizada com sucesso' });
});

module.exports = router;
