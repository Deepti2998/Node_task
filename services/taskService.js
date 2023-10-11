const Task = require('../models/tasks');

// Service for creating a task
const createTask = async (params) => {
  try {
    const {title, priority, dueDate, status, labels, userId}= params
    const task = new Task({
      title,
      priority,
      dueDate,
      status,
      labels,
      userId,
    },);

    return await task.save();
  } catch (error) {
    throw error;
  }
};

// Service for updating a task
const updateTask = async (taskId, user, query) => {
  try {
    const { title, priority, dueDate, status, labels} = query
    return await Task.findOneAndUpdate({
      _id: taskId,
      userId: user
    }, {
      title,
      priority,
      dueDate,
      status,
      labels,
    },{ new: true});
  } catch (error) {
    throw error;
  }
};

// Service for deleting a task
const deleteTask = async (taskId, user) => {
  try {
    return await Task.findOneAndDelete({
      _id: taskId,
      userId: user
    });
  } catch (error) {
    throw error;
  }
};

// Service for marking a task as completed or in progress
const markTask = async (taskId,user, status) => {
  try {
    console.log("----", status)
    return await Task.findOneAndUpdate({
      _id: taskId,
      userId: user
    }, { status }, {new:true});
  } catch (error) {
    throw error;
  }
};



//view user tasks       
const getUserTasks = async (user, query) => {
  try {
    const { priority, dueDate, search } = query;

    if (priority) {
      query.priority = priority;
    }

    if (dueDate) {
      console.log("------", dueDate)
      query.dueDate = { $gte: new Date(dueDate) }; 
    }

    if (search) {
      query.title = { $regex: new RegExp(search, 'i') };
    }

    const tasks = await Task.find(query);
    return tasks;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  markTask,
  getUserTasks
};
