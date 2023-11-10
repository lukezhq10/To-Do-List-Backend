'use strict';
const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/add-task', taskController.add_task);
router.get('/get-tasks', taskController.get_tasks);
router.put('/:id', taskController.update_task);
router.delete('/delete-tasks', taskController.delete_tasks);
router.delete('/:id', taskController.delete_task);


module.exports = router;