const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const userExistente = await User.findOne({ where: { email } });
  
      if (userExistente) {
        return res.status(400).json({ error: 'Já existe um usuário com esse email.' });
      }
  
      const newUser = await User.create({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  };
  
  module.exports = { createUser };
  
  // No seu router
  const userController = require('../controllers/userController');
  
  router.post(
    '/',
    [
      body('name').notEmpty().withMessage('Nome é obrigatório'),
      body('email').isEmail().withMessage('Email inválido.'),
      body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
    ],
    userController.createUser
  );
  