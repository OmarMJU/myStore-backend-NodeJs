const joi = require("joi");

const id = joi.number().integer();
const costumerId = joi.number().integer();
const status = joi.string().min(3);
const addressDelivery = joi.string().min(10);
const totalPrice = joi.number().positive();

const getOrderSchema = joi.object({
    id: id.required()
});

const createOrderSchema = joi.object({
    costumerId: costumerId.required(),
    addressDelivery: addressDelivery.required(),
    totalPrice: totalPrice.required()
});

const updateOrderSchema = joi.object({
    costumerId: costumerId,
    status: status,
    addressDelivery: addressDelivery,
    totalPrice: totalPrice
});

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema };
