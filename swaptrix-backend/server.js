const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for Swaptrix'))
  .catch(err => console.error(err));

// Маршруты
app.get('/api/health', (req, res) => res.json({ status: 'Swaptrix API is running' }));
const userRoutes = require('./routes/users');
const swapRoutes = require('./routes/swap');
const contactRoutes = require('./routes/contact');
app.use('/api/users', userRoutes);
app.use('/api/swap', swapRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Swaptrix server running on port ${PORT}`));