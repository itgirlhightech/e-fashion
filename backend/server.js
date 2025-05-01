const express = require('express');
const app = require('./src/app');
const cors = require('cors');
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.post('/api/users', (req, res) => {
 // const { name, email, password } = req.body;
 console.log(req.body);
  res.status(201).json({ message: 'Usuário criado!', user: { name, email } });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

//const userRoutes = require('./src/routes/userRoutes'); 
//app.use('/api/users', userRoutes);
