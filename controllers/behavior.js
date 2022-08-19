const Behavior = require("../models/behavior");

module.exports = {
  createBehavior,
  index
};

async function createBehavior(req, res) {
  try{
    console.log(req.file, req.body, 'this is create method', req.user)
    const behavior = await Behavior.create({
      behaviorName: req.body.behaviorName,
      recording: req.body.recording,
      startDate: req.body.startDate,
      goalDate: req.body.goalDate,
      user: req.user,
    });
    console.log(behavior, 'hahahahahahahahahhahaha')
    res.status(201).json({ behaviors: behavior });
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