const router = require('express').Router();

// const DailyDB = require('./dailyJournalsModel');
// const WeeklyDB = require('./weeklyJournalsModel');
const JournalsDB = require('./journalsModel');

const { authenticate } = require('../auth/authenticate');

// router.get('/daily', (req, res) => {
//   res.status(400).json({ error: 'No user ID.' });
// });

// router.get('/weekly', (req, res) => {
//   res.status(400).json({ error: 'No user ID.' });
// });

router.get('/:type/:id', authenticate, (req, res) => {
  const { type, id } = req.params;
  JournalsDB.findBy(type, id)
    .then(filtered => {
      res.status(200).json(filtered);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  JournalsDB.findEntryById({ id })
    .then(entry => {
      res.status(200).json(entry);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/add', authenticate, (req, res) => {
  const journal = req.body;
  console.log(req.body);
  JournalsDB.insert(journal)
    .then(entry => {
      res.status(201).json(entry);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:type/:id', authenticate, (req, res) => {
  const { id } = req.params;
  JournalsDB.remove(id)
    .then(removed => {
      res.status(200).json({ message: `Entry successfully deleted.` });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  JournalsDB.update(id, changes)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.get('/weekly/:id', (req, res) => {
//   const { id } = req.params;
//   const weeklyEntries = JournalsDB.findById()
//     .then(weekly => {
//       res.status(200).json(weekly);
//     })
//     .catch(error => {
//       res.status(400).json(error);
//     });
// });

module.exports = router;
