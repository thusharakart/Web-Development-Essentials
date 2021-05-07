/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get Request');
});

// exports the module router so that it will be accessible in app.js
module.exports = router;