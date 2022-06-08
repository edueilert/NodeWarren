const express = require('express');
const routes = require('./presentation/Routes');

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log('http://localhost:3000/');
})

