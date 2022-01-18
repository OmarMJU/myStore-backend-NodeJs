const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class OrderService {
    async getAll() {
        const orders = await models.Order.findAll();
        return orders;
    }

    async getOne(id) {
        const order = await models.Order.findByPk(id);

        if (!order) {
            throw boom.notFound("Order not found.");
        }

        return order;
    }

    async create(datas) {
        const newOrder = await models.Order.create(datas);
        return newOrder;
    }

    async update(id, datas) {
        const order = await this.getOne(id);
        const orderUpdated = await order.update(datas);
        return orderUpdated;
    }

    async delete(id) {
        const order = await this.getOne(id);
        await order.destroy(id);
        return { id };
    }
}

module.exports = OrderService;
