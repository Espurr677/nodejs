const db = require('../models');
const User = db.user;
const OP = db.Sequelize.OP;

exports.create = (req, res) => {
  if (!req.body.userId || !req.body.password) {
    req.status(400).send({
      message: 'Enter your ID or Password'
    });

    return;
  }

  const user = {
    userId: req.body.userId,
    password: req.body.password
  };

  User.create(user).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the account.'
    });
  });
};
