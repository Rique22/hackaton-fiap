const express = require('express');
const app = express();
const cors = require('cors'); // ✅ Importação do CORS
const connectDB = require('./configDB/DB.js');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articlesRoutes');
const userRoutes = require('./routes/userRoutes'); // Adicionado

connectDB();

// ✅ Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permite apenas o frontend React acessar
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite esses métodos HTTP
    credentials: true // Permite o uso de cookies e headers de autorização
}));

app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes); // Adicionado

module.exports = app;