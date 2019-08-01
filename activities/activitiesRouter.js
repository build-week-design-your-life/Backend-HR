const router = require('express').Router();

const ActivitiesDB = require('./activitiesModel');
// const CategoriesDB = require('./activityCategoriesModel');

const { authenticate } = require('../auth/authenticate');

router.get('/all', authenticate, (req, res) => {
  const activities = ActivitiesDB.find()
    .then(activities => {
      res.status(200).json(activities);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  ActivitiesDB.findById(id)
    .then(activity => {
      res.status(200).json(activity);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/mine', authenticate, (req, res) => {
  const id = req.decoded.subject;
  ActivitiesDB.findById(id)
    .then(activities => {
      res.status(200).json(activities);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
