const joi = require("joi");
const { createUserSchema, updateUserSchema } = require("./usersDTO");

const id = joi.number().integer();
const name = joi.string().min(3).max(70);
const lastName = joi.string().min(3).max(70);
const phoneNumber = joi.string().length(10).pattern(/^[0-9]+$/);
const userId = joi.number().integer();
const user = joi.object();

const getCustomerSchema = joi.object({
    id: id.required()
});

const createCustomerSchema = joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phoneNumber: phoneNumber.required(),
    user: createUserSchema
});

const updateCustomerSchema = joi.object({
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber,
    userId: userId,
    user: updateUserSchema
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
