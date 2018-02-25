const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');
const User = require('./models/user');
const routers = require('./routers');

const dbUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(dbUrl, () => {
    console.log(`mongodb is runnning on port ${config.db.port}`);
});

const user = {
    username: 'admin',
    password: 'admin'
};

User.findOne(user).then(newUser => {
    if(!newUser) User.create(user);
}).catch(error => console.log(error));

const app = express();

app.use( bodyParser.json() );
app.use(cors({ origin: '*' }));
app.use(routers);
app.use((err, req, res, next) => {
    res.status(500);
    res.json(err.message || 'Error has occured');
});

const server = app.listen(config.serverPort, () => {
    console.log(`Server is up and running on port ${config.serverPort}`);
});