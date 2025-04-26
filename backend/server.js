const express = require('express');
const app = require('./src/app');
//const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: 'Usuário criado!', user: { name, email } });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const userRoutes = require('./src/routes/userRoutes'); 
app.use('/api/users', userRoutes);
