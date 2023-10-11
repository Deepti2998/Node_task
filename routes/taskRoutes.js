const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require("../middlewares/auth");


// Create a task
router.post('/create',auth.validateToken, taskController.createTask);

// Update a task
router.put('/update/:taskId',auth.validateToken, taskController.updateTask);

// Delete a task
router.delete('/delete/:taskId',auth.validateToken, taskController.deleteTask);

// Mark a task as completed or in progress
router.put('/mark/:taskId',auth.validateToken, taskController.markTask);


// view task
router.get('/view',auth.validateToken, taskController.viewTasks);


module.exports = router;
