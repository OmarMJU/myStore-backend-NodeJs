const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(3).max(70);
const lastName = joi.string().min(3).max(70);
const phoneNumber = joi.string().length(10).pattern(/^[0-9]+$/);

const getCustomerSchema = joi.object({
    id: id.required()
});

const createCustomerSchema = joi.object({
    id: id.required(),
    name: name.required(),
    lastName: lastName.required(),
    phoneNumber: phoneNumber.required()
});

const updateCustomerSchema = joi.object({
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
