const express = require('express');
const router = express.Router();
const graphsController = require('../../controllers/graphs');

router.get('/behavior/:id', graphsController.showGraph);

module.exports = router