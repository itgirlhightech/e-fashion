const express = require('express');
const { body, validationResult } = require('express-balidator');
const router = express.Router();
const User = require('../models/userModel');

router.post (
  '/',
  [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido.'),
    body('password').isLegth({min: 6}).withMessage('Senha deve ter no mínimo 6 caracteres'),
  ],
  async (req, res) => {
    const errors = validationResults(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password} = req.body;

    try {
      const userExistente = await User.findOne({ where: { email } });

      if (userExistente) {
        return res.status(400).json({ error: 'Já existe um usuário com esse email.'});
      }

      const newUser = await User.create({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error ao criar usuário:', error);
      res.status(500).json({error: 'Erro interno no servidor.'});
    }
  }
);

module.exports = router;