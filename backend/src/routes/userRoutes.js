const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: 'Usuário criado com sucesso', user: { name, email } });
});

module.exports = router;
