const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UserService {

    // Obtiene todos los usuarios.
    async getAll() {
        const users = models.User.findAll();
        return users;
    }

    // Obtiene un usuario por Id.
    async getOne(id) {
        const user = await models.User.findByPk(id);

        if(!user) {
            throw boom.notFound("user not found!");
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
        const user = await this.getOne(id);
        const userUpdated = await user.update(dataChanges);
        return userUpdated;
    }

    // Eliminar usuario.
    async delete(id) {
        const user = await this.getOne(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
