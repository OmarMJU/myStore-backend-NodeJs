const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(5).max(80);
const price = joi.number().positive();
const image = joi.string().uri();
const isBlock = joi.boolean();
const description = joi.string().min(10);
const categoryId = joi.number().integer();
const limit = joi.number().integer();
const offset =joi.number().integer();

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
    description: description.required(),
    categoryId: categoryId.required()
});

const updateProductSchema = joi.object({
    name: name,
    price: price,
    image: image,
    isBlock: isBlock,
    description: description,
    categoryId: categoryId
});

const getProductSchema = joi.object({
    id: id.required()
});

const getPaginationSchema = joi.object({
    limit: limit,
    offset: offset
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, getPaginationSchema };
