const router = require('express').Router();

const UsersDB = require('../users/usersModel');

const { authenticate } = require('./authenticate');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

// register a user.
router.post('/register', validateUser, (req, res) => {
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  UsersDB.insert(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// user login
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  UsersDB.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `user.id = ${user.id} -- you are now logged in.`,
          user,
          token
        });
      } else {
        res.status(401).json({ message: `Invalid credentials.` });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '3d'
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

function validateUser(req, res, next) {
  const { username, password } = req.body;
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: 'Missing user data.' });
  } else if (!username) {
    res.status(400).json({ message: 'Please supply a username.' });
  } else if (!password) {
    res.status(400).json({ message: 'Please supply a password.' });
  } else {
    user = req.body;
    next();
  }
}

module.exports = router;
