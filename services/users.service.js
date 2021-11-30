const faker = require("faker");
const boom = require("@hapi/boom");

class UserService {

    // Constructor de la clase.
    constructor() {
        this.users = [];
        this.generate();
    }

    // Genera datos de usuarios.
    generate() {
        const size = 20;

        for (let i = 0; i < size; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                gender: faker.name.gender(),
                email: faker.internet.email(),
                isBlock: faker.datatype.boolean()
            });
        }
    }

    // Obtiene todos los usuarios.
    async getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.users);
            }, 5000);
        });
    }

    // Obtiene un usuario por Id.
    async getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(user => user.id === id);

                if(!user) {
                    reject(boom.notFound("User not found to get"));
                } else if (user.isBlock) {
                    reject(boom.conflict("User is block"));
                } else {
                    resolve(user);
                }
            }, 3000);
        });
    }

    // Crea un usuario.
    async create(datas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newProduct = {
                    id: faker.datatype.uuid(),
                    ...datas
                };

                this.users.push(newProduct);
                resolve(newProduct);
            }, 3000);
        });
    }

    // Actualizar usuario.
    async update(id, dataChanges) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.users.findIndex(index => index.id === id);

                if(index === -1) {
                    reject(boom.notFound("User not found to update"));
                } else {
                    const userUpdate = this.users[index];
                    this.users[index] = {
                        ...userUpdate,
                        ...dataChanges
                    };

                    const productUpdate =  this.users[index];
                    resolve(productUpdate);
                }
            }, 4000);
        });
    }

    // Eliminar usuario.
    async delete(id) {
        const index = this.users.findIndex(item => item.id === id);

        if(index === -1) {
            throw boom.notFound("User not found to delete");
        }

        this.users.splice(index, 1);
        return { id };
    }
}

module.exports = UserService;
