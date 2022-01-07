const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CostumerService {

    // Obtiene todos los clientes
    async getAll() {
        const costumers = await models.Costumer.findAll({ include: ["user"] });
        return costumers;
    }

    // Obtiene un cliente por id.
    async getOne(id) {
        const costumer = await models.Costumer.findByPk(id, { include: ["user"] });

        if (!costumer) {
            throw boom.notFound("Costumer not found.");
        }

        return costumer;
    }

    // Crea un cliente.
    async create(datas) {
        const costumer = await models.Costumer.create(datas, { include: ["user"] });
        return costumer;
    }

    // Actualiza un cliente.
    async update(id, datas) {
        const costumer = await this.getOne(id);
        const costumerUpdated = await costumer.update(datas);
        return costumerUpdated;
    }

    // Elimina un cliente.
    async delete(id) {
        const costumer = await this.getOne(id);
        await costumer.destroy();
        return id;
    }
}

module.exports = CostumerService;
