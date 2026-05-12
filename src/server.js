const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://127.0.0.1:5501', 'http://localhost:5501', 'https://backend-usuarios.vercel.app'], // Allow local development and your Vercel domain
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes)

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
