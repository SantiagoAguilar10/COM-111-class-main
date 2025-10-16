const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Leer los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// 'Server' de 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta POST para calcular el BMI
app.post('/bmi', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (!weight || !height) {
    return res.send('Please provide both weight and height.');
  }

  const bmi = (weight / (height ** 2)) * 10000;
  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

// Escuchar el puerto 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
