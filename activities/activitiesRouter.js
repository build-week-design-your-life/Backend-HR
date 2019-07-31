const router = require('express').Router();

const ActivitiesDB = require('./activitiesModel');
// const CategoriesDB = require('./activityCategoriesModel');

router.get('/', (req, res) => {
  const activities = ActivitiesDB.find()
    .then(activities => {
      res.status(200).json(activities);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/categories', (req, res) => {
  const allCategories = CategoriesDB.find()
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
