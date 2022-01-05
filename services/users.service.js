const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UserService {

    // Obtiene todos los usuarios.
    async getAll() {
        const users = await models.User.findAll({
            include: ["costumer"]
        });
        return users;
    }

    // Obtiene un usuario por Id.
    async getOne(id, changes) {
        const user = await models.User.findByPk(id);

        if(!user) {
            throw boom.notFound("User not found.");
        }
        if (!changes) {
            if (user.isBlock) {
                throw boom.conflict("User blocked.");
            }
        }

        return user;
    }

    // Crea un usuario.
    async create(datas) {
        const newUser = await models.User.create(datas);
        return newUser;
    }

    // Actualizar usuario.
    async update(id, dataChanges) {
        const user = await this.getOne(id, true);
        const userUpdated = await user.update(dataChanges);
        return userUpdated;
    }

    // Eliminar usuario.
    async delete(id) {
        const user = await this.getOne(id, true);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
