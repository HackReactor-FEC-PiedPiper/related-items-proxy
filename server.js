const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static('client'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});