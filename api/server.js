// dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// api routers
const userRouter = require('../users/usersRouter');
const activitiesRouter = require('../activities/activitiesRouter');
const journalsRouter = require('../journals/journalsRouter');
const authRouter = require('../auth/authRouter');

// auth
const { authenticate } = require('../auth/authenticate');

// express
const server = express();

// server set-up
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server up.' });
});

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);
server.use('/api/activities', authenticate, activitiesRouter);
server.use('/api/journals', authenticate, journalsRouter);

module.exports = server;
