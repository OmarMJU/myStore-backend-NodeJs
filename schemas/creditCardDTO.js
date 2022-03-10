const joi = require("joi");

const id = joi.string();
const nameOwner = joi.string();
const expirationDate = joi.string();
const secureCode = joi.string();
const billingAddress = joi.string();
const userId = joi.number().integer();

const getCreditCardSchema = joi.object({
    userId: userId.required()
});

const createCreditCardSchema = joi.object({
    id: id.required(),
    nameOwner: nameOwner.required(),
    expirationDate: expirationDate.required(),
    secureCode: secureCode.required(),
    billingAddress: billingAddress.required(),
    userId: userId.required()
});

const updateCreditCardSchema  = joi.object({
    expirationDate: expirationDate,
    secureCode: secureCode,
    billingAddress: billingAddress,
    userId: userId
});

const getNumberCreditCardSchema = joi.object({
    id: id.required()
});

module.exports = { getCreditCardSchema, createCreditCardSchema, updateCreditCardSchema, getNumberCreditCardSchema };
