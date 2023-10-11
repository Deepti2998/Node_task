const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
 
{
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
   
  },
  password: {
    type: String
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
});





const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
