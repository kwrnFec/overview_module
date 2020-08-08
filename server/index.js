const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3333;
const url = 'http://52.26.193.201:3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());

app.get('/products/list', (req, res) => {
  axios.get(`${url}/products/list`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/products/:product_id/', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/products/:product_id/styles', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}/styles`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/products/:product_id/related', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}/related`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
