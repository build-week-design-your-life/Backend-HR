const router = require('express').Router();

const UserDB = require('./usersModel');

router.get('/', (req, res) => {
  const users = UserDB.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = UserDB.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
