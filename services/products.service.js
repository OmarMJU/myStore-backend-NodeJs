const boom = require("@hapi/boom");
const { Op } = require("sequelize");
const { models } = require("../libs/sequelize");

class ProductService {

    // Obtiene todos los productos.
    async getAll(query) {
        const { limit, offset, price, price_min, price_max } = query;
        const options = {
            include: ["category"],
            where: {}
        };

        if (limit && offset) {
            options.limit = limit;
            options.offset = offset;
        }

        if (price) {
            options.where.price = price;
        }

        if (price_min && price_max) {
            options.where.price = {
                [Op.gte]: price_min,
                [Op.lte]: price_max
            }
        }

        const products = await models.Product.findAll(options);
        return products;
    }

    // Obtiene un producto por Id.
    async getOne(id, changes) {
        const product = await models.Product.findByPk(id, { include: ["category"] });

        if (!product) {
            throw boom.notFound("Product not found.");
        }
        if (!changes) {
            if (product.isBlock) {
                throw boom.conflict("The product is block");
            }
        }

        return product;
    }

    // Crea un producto.
    async create(datas) {
        const newProduct = await models.Product.create(datas);
        return newProduct;
    }

    // Actualiza un producto.
    async update(id, dataChanges) {
        const product = await this.getOne(id, true);
        const productUpdated = await product.update(dataChanges);
        return productUpdated;
    }

    // Elimina un producto.
    async delete(id) {
        const product = await this.getOne(id, true);
        await product.destroy();
        return { id };
    }
}

module.exports = ProductService;
