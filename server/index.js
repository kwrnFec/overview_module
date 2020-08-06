const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
