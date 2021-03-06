const Behavior = require("../models/behavior");

module.exports = {
  createBehavior,
  index
};

async function createBehavior(req, res) {
  try{
    const behavior = new Behavior({
      behaviorName: req.body.behaviorName,
      recording: req.body.recording,
      startDate: req.body.startDate,
      goalDate: req.body.goalDate,
      user: req.user,
    });

    res.status(201).json({ behavior: behavior });
  }catch(err){
    res.status(400).json({ err })
    console.log(err)
  }
}

async function index(req, res){
  try{
    const behaviorsList = await Behavior.find({}).populate('user').exec()
    res.status(200).json({ behaviorsList: behaviorsList })
  }catch(err){
    res.status(400).json({ err })
  }
}