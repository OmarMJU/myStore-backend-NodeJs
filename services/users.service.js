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
    getAll() {
        return this.users;
    }

    // Obtiene un usuario por Id.
    getOne(id) {
        return this.users.filter(item => item.id === id);
    }

    // Crea un usuario.
    create(datas) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...datas
        };

        this.users.push(newProduct);
        return newProduct;
    }

    // Actualizar usuario.
    update(id, dataChanges) {
        const index = this.users.findIndex(index => index.id === id);

        if(index === -1) {
            throw new Error("User not found");
        }

        const userUpdate = this.users[index];
        this.users[index] = {
            ...userUpdate,
            ...dataChanges
        };

        return this.users[index];
    }

    // Eliminar usuario.
    delete(id) {
        const index = this.users.findIndex(item => item.id === id);

        if(index === -1) {
            throw new Error("User not found");
        }

        this.users.splice(index, 1);
        return { id };
    }
}

module.exports = UserService;
