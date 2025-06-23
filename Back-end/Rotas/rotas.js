const express = require('express');
const db = require('./models');
const router = express.Router();

router.get('/', async (req, res) => {
  const dados = await db.Nota.findAll();
  res.json(dados);
});

router.get('/:id', async (req, res) => {
  const nota = await db.Nota.findByPk(req.params.id);
  if (nota) {
    res.json(nota);
  } else {
    res.status(404).json({ erro: 'Nota não encontrada' });
  }
});

// POST
router.post('/', async (req, res) => {
  const nova = await db.Nota.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
  });
  res.status(201).json(nova);
});

// PUT
router.put('/:id', async (req, res) => {
  const nota = await db.Nota.findByPk(req.params.id);
  if (!nota) return res.status(404).json({ erro: 'Nota não encontrada' });

  nota.titulo = req.body.titulo;
  nota.descricao = req.body.descricao;
  await nota.save();

  res.json(nota);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const nota = await db.Nota.findByPk(req.params.id);
  if (!nota) return res.status(404).json({ erro: 'Nota não encontrada' });

  await nota.destroy();
  res.status(204).end();
});

module.exports = router;
