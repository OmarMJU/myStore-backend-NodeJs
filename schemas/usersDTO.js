const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(3).max(80);
const gender = joi.string();
const email = joi.string().email();
const password = joi.string().min(8);
const isBlock = joi.boolean();

const getUserSchema = joi.object({
    id: id.required()
});

const createUserSchema = joi.object({
    name: name.required(),
    gender: gender.required(),
    email: email.required(),
    password: password.required(),
    isBlock: isBlock
});

const updateUserSchema = joi.object({
    name: name,
    gender: gender,
    email: email,
    password: password,
    isBlock: isBlock
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
