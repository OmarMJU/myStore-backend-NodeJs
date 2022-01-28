const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().max(80);

const getCategorySchema = joi.object({
    id: id.required()
});

const createCategorySchema = joi.object({
    name: name.required()
});

const updateCategorysSchema = joi.object({
    name: name,
});

module.exports = { getCategorySchema, createCategorySchema, updateCategorysSchema };


