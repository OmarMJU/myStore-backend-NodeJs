const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");


class CategoriesServie {

    // Todas las categorias.
    async getAll() {
        const categories = await models.Category.findAll();
        return categories;
    }

    // Una categorìa por id.
    async getOne(id) {
        const categoy = await models.Category.findByPk(id);

        if (!categoy) {
            throw boom.notFound("Category not found.");
        }

        return categoy;
    }

    // Crea una categoria.
    async create(datas) {
        const newCategory = await models.Category.create(datas);
        return newCategory;
    }

    // Actualiza una categorìa.
    async update(id, dataChange) {
        const category = await this.getOne(id);
        const categoryUpdated = await category.update(dataChange);
        return categoryUpdated;
    }

    // Borrar categoria
    async delete(id) {
        const category = await this.getOne(id);
        await category.destroy();
        return { id };
    }
}

module.exports = CategoriesServie;
