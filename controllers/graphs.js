const Behavior = require("../models/behavior");
const Graph = require("../models/graph");

module.exports = {
    showGraph,
    createRecord
};

async function showGraph(req, res){
    try{
        const showBehaviorId = await Behavior.findById(req.params.id).populate('user').exec()
        res.status(200).json({ 
            showBehaviorId: showBehaviorId,
            _id: req.params.id
        })
      }catch(err){
        res.status(400).json({ err })
    }
}

async function createRecord(req, res){
    try{
        const record = await Graph.create({
            time: req.body.time,
            occurrences: req.body.occurrences,
            user: req.user
        });
        res.status(201).json({ record: record });
    }catch(err){
        res.status(400).json({err});
        console.log(err)
    }
}