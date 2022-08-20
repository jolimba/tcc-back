'use strict'
const user = require('../src/controller/UserController')

exports.listUsers = async function(req, res) {
  user.getUsers().then(users => res.json({'users': users}))
};

exports.getOneUSer = function(req, res) {
  res.send('oi');
};