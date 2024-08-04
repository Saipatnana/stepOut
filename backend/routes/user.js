const express = require('express');
const router = express.Router();
const { Train, Booking } = require('../models');
const { authenticate } = require('../middleware/auth');
const sequelize = require('../models').sequelize;

// Get seat availability
router.get('/trains', authenticate, async (req, res) => {
  const { source, destination } = req.query;
  try {
    const trains = await Train.findAll({ where: { source, destination } });
    res.json(trains);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Book a seat
router.post('/book', authenticate, async (req, res) => {
  const { trainId } = req.body;
  const userId = req.userId;

  const transaction = await sequelize.transaction();

  try {
    const train = await Train.findOne({ where: { id: trainId } }, { transaction });

    if (train.availableSeats <= 0) {
      await transaction.rollback();
      return res.status(400).json({ error: 'No seats available' });
    }

    const booking = await Booking.create({ userId, trainId, status: 'booked' }, { transaction });

    train.availableSeats -= 1;
    await train.save({ transaction });

    await transaction.commit();

    res.status(201).json(booking);
  } catch (error) {
    await transaction.rollback();
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
