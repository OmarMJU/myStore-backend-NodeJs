const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().max(80);
const items = joi.number().integer();

const getCategorySchema = joi.object({
    id: id.required()
});

const createCategorySchema = joi.object({
    name: name.required(),
    items: items
});

const updateCategorysSchema = joi.object({
    name: name,
    items: items
});

module.exports = { getCategorySchema, createCategorySchema, updateCategorysSchema };


