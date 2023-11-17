const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server express')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);










// app.get('/categories/:CategoryId/products/:productId', (req, res) => {
//   const { CategoryId, productId } = req.params;
//   res.json(
//     {
//     CategoryId,
//     productId

//     })
// })


app.listen(port, () => {
  console.log('escuchando desde puerto ' + port)
});

