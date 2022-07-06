module.exports = app => {
  const user = require('../controllers/user.controllers.js');
  const router = require('express').Router();

  router.post('/create', user.create);

  app.use('/user', router);
};
