const express = require('express');
const router = express.Router();
const graphsController = require('../../controllers/graphs');
const multer = require('multer')
const upload = multer()

router.get('/behavior/:id', graphsController.showGraph);

module.exports = router