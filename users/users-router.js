const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDepartment = require('../auth/check-department-middleware');

router.get('/', restricted, checkDepartment('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({loggedInUser: req.username, users});
    })
    .catch(err => res.send(err));
});

module.exports = router;