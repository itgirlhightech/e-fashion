const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido.'),
    body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await userController.createUser(req, res);
  }
);

module.exports = router;
