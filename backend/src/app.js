const express = require('express');
const app = express();
const pool = require('./db');
const productRoutes = require('../src/routes/productRoutes');
const userRoutes = require('../src/routes/userRoutes');


app.use(express.json()); 
app.use('/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ ok: true, result: result.rows[0] });       
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: err.message });
    }
});

module.exports = app;
