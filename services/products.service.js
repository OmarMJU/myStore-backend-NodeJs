const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ProductService {

    // Obtiene todos los productos.
    async getAll() {
        const products = await models.Product.findAll();
        return products;
    }

    // Obtiene un producto por Id.
    async getOne(id, changes) {
        const product = await models.Product.findByPk(id);

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
