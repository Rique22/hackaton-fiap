require('dotenv').config();
const app = require('./src/app.js');//import app.js
const port = process.env.PORT;//localhost port
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));