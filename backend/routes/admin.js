const express = require('express');
const router = express.Router();
const { Train } = require('../models');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

// Add a new train
router.post('/trains', authenticate, authorizeAdmin, async (req, res) => {
  const { name, source, destination, availableSeats } = req.body;
  try {
    const train = await Train.create({ name, source, destination, availableSeats });
    res.status(201).json(train);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
