const Behavior = require("../models/behavior");

module.exports = {
  createBehavior,
  index
};

async function createBehavior(req, res) {
  try{
    console.log(req.body, 'req.bodyyyyyyy')
    const behavior = await Behavior.create({
      behaviorName: req.body.behaviorName,
      recording: req.body.recording,
      startDate: req.body.startDate,
      goalDate: req.body.goalDate,
      user: req.user,
    });
    res.status(201).json({ behaviors: behavior });
  }catch(err){
    res.status(400).json({ err })
    console.log(err)
  }
}

async function index(req, res){
  try{
    const behaviors = await Behavior.find({}).populate('user').exec()
    res.status(200).json({ behaviors: behaviors })
  }catch(err){
    res.status(400).json({ err })
  }
}