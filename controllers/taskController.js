const taskService = require('../services//taskService');
const utilityFunction = require('../utils/utilityFunction'); // Import your utility function
const constants = require('../utils/constants'); // Import your constants

// Create a task
const createTask = async (req, res) => {
  try {
    const responseFromService = await taskService.createTask(req.body);
    utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.taskCreated);
  } catch (error) {
    console.error(error);
    utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const responseFromService = await taskService.updateTask(req.params.taskId, req.user, req.body);
    utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.taskUpdated);
  } catch (error) {
    console.error(error);
    utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const responseFromService = await taskService.deleteTask(req.params.taskId, req.user);
    utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.taskDeleted);
  } catch (error) {
    console.error(error);
    utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
  }
};

// Mark a task as completed or in progress
const markTask = async (req, res) => {
  try {
    const responseFromService = await taskService.markTask(req.params.taskId,req.user, req.body.status);
    utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.taskMarked);
  } catch (error) {
    console.error(error);
    utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
  }
};

//view user tasks
const viewTasks = async (req, res) => {
    try {
      const responseFromService = await taskService.getUserTasks(req.user, req.query);
      utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
    } catch (error) {
      console.error(error);
      utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
    }
  };

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  markTask,
  viewTasks
};
