const express = require('express');
const router = express.Router();
const behaviorCtrl = require('../../controllers/behavior');

router.post('/', behaviorCtrl.createBehavior);
router.get('/', behaviorCtrl.index);

module.exports = router