
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection
const db = require('./config/dbConfig');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const index = express();

index.use(bodyParser.json({ limit: '50mb' }));
index.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
index.use(cors("*"));

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    index.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));