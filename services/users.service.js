const faker = require("faker");

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
                emal: faker.internet.email()
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
                const index = this.users.findIndex(user => user.id === id);

                if (index === -1) {
                    reject("User not found");
                } else {
                    const userFind = this.users.filter(item => item.id === id);
                    resolve(userFind);
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
                    reject("User not found");
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.users.findIndex(item => item.id === id);

                if(index === -1) {
                    reject("User not found");
                } else {
                    this.users.splice(index, 1);
                    resolve({ id });
                }
            }, 2000);
        });
    }
}

module.exports = UserService;
