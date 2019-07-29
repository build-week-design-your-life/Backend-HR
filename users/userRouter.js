const router = require('express').Router();

const UserDB = require('./userModel');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Users Route.' });
});

module.exports = router;
