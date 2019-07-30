const router = require('express').Router();

// const DailyDB = require('./dailyJournalsModel');
// const WeeklyDB = require('./weeklyJournalsModel');
const JournalsDB = require('./journalsModel');

const { authenticate } = require('../auth/authenticate');

router.get('/daily', (req, res) => {
  res.status(400).json({ error: 'No user ID.' });
});

router.get('/weekly', (req, res) => {
  res.status(400).json({ error: 'No user ID.' });
});

router.get('/daily/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const dailyEntries = dailyDB
    .findByUser()
    .then(dailies => {
      res.status(200).json(dailies);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/weekly/:id', (req, res) => {
  const { id } = req.params;
  const weeklyEntries = weeklyDB
    .findByUser()
    .then(weekly => {
      res.status(200).json(weekly);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
