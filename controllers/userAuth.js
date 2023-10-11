const userAuth = require("../services/userAuth");
const utilityFunction = require("../utils/utilityFunction")
const constants = require("../utils/constants");
const models = require('../models');
const ver = require('../middlewares/auth');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;


module.exports = {
    login: async (req, res) => {

        try {
            const responseFromService = await userAuth.login(req.body);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.loginsuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },
    signup: async (req, res) => {
        try {console.log("----------------------", req.body)
            const responseFromService = await userAuth.signup(req.body);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.userAdded);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }


    },

    updateLocation: async (req, res) => {
        try {
            const responseFromService = await userAuth.updateLocation(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.userLocationAdded);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },
    // updateLocation: async (req, res) => {
    //     // Use user id from token instead of req body
    //     try {

    //     //    const userId = ver.decodeToken(token, process.env.JWT_SECRET);
    //         const { lat, lng, userId } = req.body;


    //         const user = await models.Customer .findByIdAndUpdate(
    //           userId,
    //           { lastLocation: { type: 'Point', coordinates: [lng, lat] } },
    //           { new: true }
    //         );

    //         res.status(200).json({
    //           success: true,
    //           message: 'User location updated successfully',
    //         //   user: user,
    //         });
    //       } catch (err) {
    //         console.error(err);
    //         res.status(500).json({
    //           success: false,
    //           message: 'Error updating user location',
    //           error: err,
    //         });
    //       }


    // },

    getCategories: async (req, res) => {
        try {
            const responseFromService = await userAuth.getAllCategories(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },

    getAllMerchants: async (req, res) => {
        try {
            const responseFromService = await userAuth.getAllMerchants(req.body);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },

    search: async (req, res) => {
        try {
            const responseFromService = await userAuth.search(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },
    topDeals: async (req, res) => {
        try {
            const responseFromService = await userAuth.topDeals(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    featuredMerchants: async (req, res) => {
        try {
            const responseFromService = await userAuth.featuredMerchants(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    merchantsByOffer: async (req, res) => {
        try {
            const params = {
                discountPercentage: Number(req.query.discount)
            };

            const responseFromService = await userAuth.universalMerchantsGetter(req.body, req.user, params);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    merchantsByCategory: async (req, res) => {
        try {
            const params = {
                category_id: ObjectId(req.query.category_id)
            };
            console.log(params);
            const responseFromService = await userAuth.universalMerchantsGetter(req.body, req.user, params);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    merchantsNearBy: async (req, res) => {
        try {
            const params = {
            };
            console.log(params);
            const responseFromService = await userAuth.universalMerchantsGetter(req.body, req.user, params);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    favouriteMerchantsForUser: async (req, res) => {
        try {
            const responseFromService = await userAuth.favouriteMerchantsForUser(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    totalCreditAndbalance: async (req, res) => {
        try {
            const responseFromService = await userAuth.totalCreditAndbalance(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }
    },

    getSpecificMerchant: async (req, res) => {
        try {
            const responseFromService = await userAuth.getSpecificMerchant(req.query, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },

    updateCustomer: async (req, res) => {
        try {
            const responseFromService = await userAuth.updateCustomer(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },

    getCustomerDetail: async (req, res) => {
        try {
            const responseFromService = await userAuth.getCustomerDetail(req.query, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },
    getCustomerNotifications: async (req, res) => {
        try {
            const responseFromService = await userAuth.getCustomerNotifications(req.query, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.fetchSuccess);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },
    addReview: async (req, res) => {
        try {
            const responseFromService = await userAuth.addReview(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.reviewAdded);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },
    updateCustomerWallet: async (req, res) => {
        try {
            const responseFromService = await userAuth.updateCustomerWallet(req.body, req.user);
            utilityFunction.successResponse(res, responseFromService, responseFromService?.message || constants.MESSAGE.success.moneyAdded);
        } catch (error) {
            console.log(error)
            utilityFunction.errorResponse(res, error, error.message, constants.STATUS.badRequest);
        }

    },
      

}



