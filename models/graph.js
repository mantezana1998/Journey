const mongoose = require('mongoose'); 

const graphSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    behavior: {type: mongoose.Schema.Types.ObjectId, ref: 'Behavior'},
    typeOfBehavior: {type: String},
    time: {type: Date},
    occurrences: {type: Number}
}, {
    timestamps: true
})

module.exports = mongoose.model('Graph', graphSchema);