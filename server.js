require('dotenv').config();
const express = require('express');
const app = express();

require('./config/database');

app.use('/api/users', require('./routes/api/users'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`Express app listening on port ${port}`);
});