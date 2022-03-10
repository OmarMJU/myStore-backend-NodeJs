const joi = require("joi");

const id = joi.number().integer();
const fullName = joi.string().min(3).max(80);
const gender = joi.string();
const isBlock = joi.boolean();
const role = joi.string().min(3);
const phoneNumber = joi.string().length(10).pattern(/^[0-9]+$/);
const address1 = joi.string();
const address2 = joi.string();
const address3 = joi.string();
const address4 = joi.string();
const address5 = joi.string();
const address6 = joi.string();
const address7 = joi.string();
const address8 = joi.string();
const address9 = joi.string();
const address10 = joi.string();
const costumerId = joi.number().integer();
const userId = joi.number().integer();
const cardId = joi.string();

const getUserSchema = joi.object({
    id: id.required()
});

const createUserSchema = joi.object({
    fullName: fullName.required(),
    gender: gender.required(),
    isBlock: isBlock,
    role: role,
    phoneNumber: phoneNumber,
    address1: address1,
    costumerId: costumerId.required()
});

const updateUserSchema = joi.object({
    fullName: fullName,
    gender: gender,
    isBlock: isBlock,
    role: role,
    phoneNumber: phoneNumber,
    address1: address1,
    address2: address2,
    address3: address3,
    address4: address4,
    address5: address5,
    address6: address6,
    address7: address7,
    address8: address8,
    address9: address9,
    address10: address10
});

const addCardChema = joi.object({
    userId: userId.required(),
    cardId: cardId.required()
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema, addCardChema };
