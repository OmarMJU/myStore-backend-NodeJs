const joi = require("joi");

const id = joi.number().integer();
const nameUser = joi.string().min(3).max(70);
const email = joi.string().email();
const password = joi.string().min(8);

const getCustomerSchema = joi.object({
    id: id.required()
});

const createCustomerSchema = joi.object({
    nameUser: nameUser.required(),
    email: email.required(),
    password: password.required()
});

const updateCustomerSchema = joi.object({
    nameUser: nameUser,
    email: email,
    password: password
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
