'use strict';

var utils = require('../utils/writer.js');
var User = require('../services/UserService.js')

module.exports.createUser = function createUser (req,res) {
  const body = req.body
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};