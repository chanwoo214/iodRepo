const express = require('express');
const router = express.Router();
const taskApi = require('./task.api.js');
const taskController = require('../controller/task.controller.js');


router.post('/', taskController.createTask);

router.get('/', taskController.getTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;