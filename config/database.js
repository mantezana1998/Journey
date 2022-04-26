const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to MongoDB');
});

const db = mongoose.connection; 

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err){
    console.log(`MongoDB error: ${err}`);
});