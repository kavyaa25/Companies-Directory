const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: String,
  location: String,
  size: String,
  founded: Number,
  description: String,
  website: String, // optional
});

module.exports = mongoose.model('Company', CompanySchema);
