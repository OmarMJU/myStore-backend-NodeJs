const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(5).max(80);
const price = joi.number().positive();
const image = joi.string().uri();
const isBlock = joi.boolean();
const description = joi.string().min(10);

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
    description: description.required()
});

const updateProductSchema = joi.object({
    name: name,
    price: price,
    image: image,
    isBlock: isBlock,
    description: description
});

const getProductSchema = joi.object({
    id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
