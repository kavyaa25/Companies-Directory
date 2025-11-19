const express = require('express');
const Company = require('../models/Company');

const router = express.Router();

// GET /companies?name=&location=&industry=&size=&founded=&page=&limit=&sort=
router.get('/', async (req, res) => {
  try {
    const {
      name,
      location,
      industry,
      size,
      founded,
      page = 1,
      limit = 10,
      sort = 'name',
    } = req.query;

    const filters = {};
    if (name) filters.name = new RegExp(name, 'i');
    if (location) filters.location = new RegExp(location, 'i');
    if (industry) filters.industry = new RegExp(industry, 'i');
    if (size) filters.size = new RegExp(size, 'i');
    if (founded) filters.founded = Number(founded);

    const companies = await Company.find(filters)
      .sort({ [sort]: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Company.countDocuments(filters);

    res.json({ companies, total });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
