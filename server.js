const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static('client'));