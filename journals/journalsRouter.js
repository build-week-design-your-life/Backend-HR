const router = require('express').Router();

const dailyDB = require('./dailyJournalsModel');
const weeklyDB = require('./weeklyJournalsModel');

router.get('/daily', (req, res) => {
  const dailyEntries = dailyDB
    .find()
    .then(dailies => {
      res.status(200).json(dailies);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/weekly', (req, res) => {
  const weeklyEntries = weeklyDB
    .find()
    .then(weekly => {
      res.status(200).json(weekly);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
