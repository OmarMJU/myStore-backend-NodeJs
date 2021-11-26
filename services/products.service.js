const faker = require("faker");
const boom = require("@hapi/boom");

class ProductService {

    // Constructor de la clase.
    constructor() {
        this.products = [];
        this.generate();
    }

    // Genera productos de forma aleatoria.
    generate() {
        const size = 50;

        for (let i = 0; i < size; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            });
        }
    }

    // Obtiene todos los productos.
    async getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 5000);
        });
    }

    // Obtiene un producto por Id.
    async getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = this.products.find(product => product.id === id);

                if (!product) {
                    reject(boom.notFound("Product not found to get"));
                } else {
                    resolve(product);
                }
            }, 3000);
        });
    }

    // Crea un producto.
    async create(datas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newProduct = {
                    id: faker.datatype.uuid(),
                    ...datas
                };

                this.products.push(newProduct);
                resolve(newProduct);
            }, 3000);
        });
    }

    // Actualiza un producto.
    async update(id, dataChanges) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.products.findIndex(item => item.id === id);

                if (index === -1) {
                    reject(boom.notFound("Product not found to update"));
                } else {
                    const product = this.products[index];
                    this.products[index] = {
                        ...product,
                        ...dataChanges
                    };

                    resolve(this.products[index]);
                }
            }, 3000);
        });
    }

    // Elimina un producto.
    async delete(id) {
        const index = this.products.findIndex(index => index.id === id);

        if (index === -1) {
            throw boom.notFound("Product not found to delete");
        }

        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductService;
