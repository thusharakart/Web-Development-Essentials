// The following line is because async functions' is only available in ES8 (use 'esversion: 8').
/*jshint esversion: 8 */

const express = require('express');
const { addListener } = require('../models/students');
const router = express.Router();

const Student = require('../models/students');

router.get('/', async(req, res) => {
    try {
        // await will wait to find() to come back
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.post('/', async(req, res) => {

    const student = new Student({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try {
        const student1 = await student.save();
        res.json(student1);
    } catch (err) {
        res.send("Error");
    }
});

// exports the module router so that it will be accessible in app.js
module.exports = router;