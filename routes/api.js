'use strict';
const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/todos', taskController.add_task);
router.get('/todos', taskController.get_tasks);
router.put('/todos/:id', taskController.update_task);
router.delete('/todos/:id', taskController.delete_task);

module.exports = router;