const express = require('express');
const router = express.Router();
const behaviorCtrl = require('../../controllers/behavior');

router.post('/', behaviorCtrl.createBehavior);

module.exports = router