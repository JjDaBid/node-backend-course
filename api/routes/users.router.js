const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Aqui estan todos los usuarios')
  // const { limit, offset } = req.query;
  // if(limit && offset) {
  //   res.json({
  //     limit,
  //     offset
  //   })
  // } else {
  //   res.send('No hay parametros')
  // }
})

module.exports = router;
