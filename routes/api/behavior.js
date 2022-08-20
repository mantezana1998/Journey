const express = require('express');
const router = express.Router();
const behaviorCtrl = require('../../controllers/behavior');
const multer = require('multer')
const upload = multer()

router.post('/', upload.none(), behaviorCtrl.createBehavior);
router.get('/', behaviorCtrl.index);

module.exports = router