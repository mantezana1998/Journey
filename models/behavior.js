const mongoose = require('mongoose'); 

const behaviorSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    behaviorName: {type: String, required: true},
    recording: {type: String, required: true},
    startDate: {type: Date, required: true},
    goalDate: {type: Date, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Behavior', behaviorSchema);