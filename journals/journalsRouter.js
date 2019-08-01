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

// router.get('/:type', authenticate, (req, res) => {
//   const { type } = req.params;
//   console.log(req.decoded);
//   const id = req.decoded.subject;
//   JournalsDB.findBy(type, id)
//     .then(filtered => {
//       console.log(filtered);
//       res.status(200).json(filtered);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// router.get('/mine', authenticate, (req, res) => {
//   const id = req.decoded.subject;
//   JournalsDB.findById(id)
//     .then(entries => {
//       res.status(200).json(entries);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

router.get('/all', authenticate, (req, res) => {
  JournalsDB.find()
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(error => {
      res.status(500).json({ error: 'Uh oh, you done messed up A-A-ron!' });
    });
});

// router.get('/daily', authenticate, (req, res) => {
//   const id = req.decoded.subject;
//   console.log(req.decoded);
//   const filter = 'daily';
//   console.log(req.params);
//   JournalsDB.findBy(filter, id)
//     .then(entries => {
//       res.status(200).json(entries);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// router.get('/weekly', authenticate, (req, res) => {
//   const id = req.decoded.subject;
//   console.log(req.decoded);
//   const filter = 'weekly';
//   console.log(req.params);
//   JournalsDB.findBy(filter, id)
//     .then(entries => {
//       res.status(200).json(entries);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

router.get('/mine', authenticate, (req, res) => {
  const id = req.decoded.subject;
  JournalsDB.findById(id)
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params;

  JournalsDB.findEntryById({ id })
    .then(entry => {
      console.log(entry);
      res.status(200).json(entry);
    })
    .catch(error => {
      res.status(400).json({ message: 'not ok', error });
    });
});

router.post('/add', authenticate, (req, res) => {
  const user_id = req.decoded.subject;
  const journal = req.body;
  const combined = { user_id, ...journal };
  JournalsDB.insert(combined)
    .then(entry => {
      res.status(201).json(entry);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  JournalsDB.remove(id)
    .then(removed => {
      res.status(200).json({ message: `Removed ${removed} records.` });
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
      res.status(200).json({ message: `Updated ${id}.`, updated });
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
