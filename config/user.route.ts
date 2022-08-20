'use strict'
const user = require('../src/controller/UserController')

exports.listUsers = async function(req, res) {
  user.getUsers().then(users => res.json({'users': users}))
};

exports.getOneUser = function(req, res) {
  user.getOneUser(req.params.id).then(user => res.json({'user': user}))
};