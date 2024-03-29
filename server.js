require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/auth')); 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/dashboard/behavior', require('./routes/api/behavior'))
app.use('/api/dashboard', require('./routes/api/graph'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
const port = process.env.PORT || 3001;
  
app.listen(port, function() {
    console.log(`Express app listening on port ${port}`);
});