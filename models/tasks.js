const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    required: true,
  },
  labels: [
    {
      type: String,
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the User model
    required: true,
  },
},
{
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
    id: false,
    toJSON: {
      getters: true,
    },
    toObject: {
      getters: true,
    },
  }

);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
