const express = require('express');
const router = express.Router();

router.get('/group', (req, res) => res.json({username:'asdasd'}))

module.exports = router;