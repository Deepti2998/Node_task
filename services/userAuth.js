const models = require('../models');

const constants = require("../utils/constants")
const utilityFunction = require("../utils/utilityFunction");
const { signToken } = require('../middlewares/auth');
const { model } = require('mongoose');
bcrypt = require("bcrypt");
const mongoose = require('mongoose');
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;


module.exports = {
    login: async (params) => {
        try {
           
            const {phone, password} = params
            const user = await models.Customer.findOne({ phone }, { _id: 1, name: 1, email: 1, password }).lean()
            if (user) {
                const token = signToken(user, true);
                const passwordMatched =await utilityFunction.comparePassword(password, user.password)

                  if (!passwordMatched) {
                    let message = constants.MESSAGE.error.incorrectPassword;
                    throw { message };
                  }
                  delete user.password
                return { token, user }
            } else {
                let message = constants.MESSAGE.error.accountDoesnotExist
                let isExist = false
                return { message, isExist }
            }
        } catch (error) {
            throw error
        }
    },
    signup: async (params) => {
        try {
            const userExist = await models.Customer.findOne({ email: params.email }, { _id: 1, username: 1, email: 1})
            if (!userExist) {
                hashedPass = await bcrypt.hash(params.password, 10);
                let users = await models.Customer({
                    username: params.username,
                    email: params.email,
                    password: hashedPass
                });
                let userData = await users.save()
                let user = {
                    _id: userData._id,
                    name: userData.name,
                    email: userData.email,
                }
                const token = signToken(user, true);
                return { user, token }
            } else {
                let message = constants.MESSAGE.error.userAlreadyExist
                return { message }
            }
        } catch (error) {
            throw error
        }
    },

}