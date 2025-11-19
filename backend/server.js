require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;
console.log('Mongo URI:', mongoURI); // Should print your URI string

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/companies', companyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
