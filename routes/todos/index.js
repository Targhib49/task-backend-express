const express = require('express');
const router = express.Router();

router.get('/', require('./controller').getAll);

module.exports = router;
