// server.js
const express = require('express');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
