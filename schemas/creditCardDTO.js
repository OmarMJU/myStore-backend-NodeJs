const joi = require("joi");

const cardNumber = joi.number();
const nameOwner = joi.string();
const expirationDate = joi.string();
const secureCode = joi.string();
const billingAddress = joi.string();
const userId = joi.number().integer();

const getCreditCardSchema = joi.object({
    userId: userId.required(),
});

const createCreditCardSchema = joi.object({
    cardNumber: cardNumber.required(),
    nameOwner: nameOwner.required(),
    expirationDate: expirationDate.required(),
    secureCode: secureCode.required(),
    userId: userId.required()
});

const updateCreditCardSchema  = joi.object({
    cardNumber: cardNumber,
    nameOwner: nameOwner,
    expirationDate: expirationDate,
    secureCode: secureCode,
    billingAddress: billingAddress,
    userId: userId
});

const getNumberCreditCardSchema = joi.object({
    cardNumber: cardNumber
});

module.exports = { getCreditCardSchema, createCreditCardSchema, updateCreditCardSchema, getNumberCreditCardSchema };
