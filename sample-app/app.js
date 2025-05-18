const express = require('express');
const { getWelcomeMessage } = require('./utils');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send(getWelcomeMessage());
});
app.listen(port, () => {
  console.log(`Sample app listening at http://localhost:${port}`);
});
