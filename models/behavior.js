const mongoose = require('mongoose'); 

const behaviorSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    behaviorName: {type: String},
    recording: {type: String},
    startDate: {type: String},
    goalDate: {type: String},
}, {
    timestamps: true
})

module.exports = mongoose.model('Behavior', behaviorSchema);