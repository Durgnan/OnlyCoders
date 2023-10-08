const mongoose = require('mongoose');
const { User } = require('../models/User')

const connect = async () => {
    try {
        connection = await mongoose.connect("mongodb://localhost:27017/OnlyCoder");
        console.log("Database Connected");
        // console.log(connection.model("Users").find());
        return connection

    } catch (error) {
        console.log("Error in Database Connection", error);
        throw error;
    }
}

exports.connect = connect;