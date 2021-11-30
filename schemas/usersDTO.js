const joi = require("joi");

const id = joi.string().uuid();
const name = joi.string().min(3).max(80);
const gender = joi.string();
const email = joi.string().email();
const isBlock = joi.boolean();

const getUserSchema = joi.object({
    id: id.required()
});

const createUserSchema = joi.object({
    name: name.required(),
    gender: gender.required(),
    email: email.required(),
    isBlock: isBlock.required()
});

const updateUserSchema = joi.object({
    name: name,
    gender: gender,
    email: email,
    isBlock: isBlock
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
