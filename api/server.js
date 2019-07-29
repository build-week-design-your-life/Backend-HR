// dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// api routers
const userRouter = require('../users/usersRouter');
const activitiesRouter = require('../activities/activitiesRouter');
const journalsRouter = require('../journals/journalsRouter');
// express
const server = express();

// server set-up
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server up.' });
});

// server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/activities', activitiesRouter);
server.use('/api/journals', journalsRouter);

module.exports = server;
