const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: true, // Allow all origins for development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Middleware to normalize URLs by removing double slashes
app.use((req, res, next) => {
  req.url = req.url.replace(/\/\//g, '/');
  next();
});

app.use(express.json());
app.use(routes)

const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
