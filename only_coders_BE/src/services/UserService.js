'use strict';

const {dbConnection} = require('../index')
const mongoose = require('mongoose')
const { UserSchema } = require('../models/User')


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = async function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    resolve("Created");
    mongoose.connect("mongodb://localhost:27017/OnlyCoder").then(async (connection)=> {
      const UserModel = connection.model('User', UserSchema)
      await UserModel.create(body);
  

    })

    
  });
}