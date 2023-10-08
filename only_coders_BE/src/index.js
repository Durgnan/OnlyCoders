const express = require('express');
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')

const { connect } = require('./utils/database')
const users = require('./routes/user')

const serverPort = 8080;
exports.dbConnection = connect()


const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.json())
server.use(cors())


// server.use('/',users);
server.use('/users',users)

// server.use(mainRoutes);

// http.createServer(server).listen(serverPort,()=>{
//     console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
// })

server.listen(serverPort,()=>{
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
})




