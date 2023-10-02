const express = require('express');
const router = express.Router();
const taskApi = require('./task.api.js');
const taskController = require('../controller/task.controller.js');


router.post('/', taskController.createTask);

router.get('/', taskController.getTask);

router.put('/:id', (req, res) => {
    res.send('update task');
});

router.delete('/:id', (req, res) => {
    res.send('delete task');
});

module.exports = router;