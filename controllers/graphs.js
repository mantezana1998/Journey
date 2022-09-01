const Behavior = require("../models/behavior");

module.exports = {
    showGraph
};

async function showGraph(req, res){
    try{
        const showBehaviorId = await Behavior.findById({ _id: req.params.id }).populate('user').exec()
        res.status(200).json({ showBehaviorId: showBehaviorId })
      }catch(err){
        res.status(400).json({ err })
    }
}