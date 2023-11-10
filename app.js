const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env['PORT'];
const { db } = require('./database/database');
const apiRoutes = require('./routes/api');

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/todos', apiRoutes);

app.listen(port, () => {
  db()
  console.log(`App is istening on port ${port}`)
});