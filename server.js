const express = require('express');
const app = express();

app.get('/.', (reg, res) => {
  res.status(200).send({message: 'Olá mundo estou funcionando!'});
})

app.get('/ola', (reg, res) => {
  res.status(200).send({message: 'Oi eu sou a rota Ola!'});
})

app.listen (3001, () => {
  console.log('Api rodando na porta 3001');
})
