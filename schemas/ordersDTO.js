const joi = require("joi");

const id = joi.number().integer();
const costumerId = joi.number().integer();
const status = joi.string().min(3);
const addressDelivery = joi.string().min(10);
const orderId = joi.number().integer();
const productId = joi.number().integer();
const amount = joi.number().min(1);

const getOrderSchema = joi.object({
    id: id.required()
});

const createOrderSchema = joi.object({
    costumerId: costumerId.required(),
    addressDelivery: addressDelivery.required(),
});

const updateOrderSchema = joi.object({
    costumerId: costumerId,
    status: status,
    addressDelivery: addressDelivery,
});

const addItemSchema = joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    amount: amount.required()
});

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema, addItemSchema };
