const Joi = require('joi');



const createUserValidator = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobileNo: Joi.string(),
    email: Joi.string().required()
})

const updateUserValidator = Joi.object({
    userName: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobileNo: Joi.string(),
})

module.exports = {
    createUserValidator,
    updateUserValidator
}