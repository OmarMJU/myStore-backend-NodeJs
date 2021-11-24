const faker = require("faker");

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
    getAll() {
        return this.products;
    }

    // Obtiene un producto por Id.
    getOne(id) {
        return this.products.filter(item => item.id === id);
    }

    // Crea un producto.
    create(datas) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...datas
        };

        this.products.push(newProduct);
        return newProduct;
    }

    // Actualiza un producto.
    update(id, dataChanges) {
        const index = this.products.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error("Product not found");
        }

        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...dataChanges
        };

        return this.products[index];
    }

    // Elimina un producto.
    delete(id) {
        const index = this.products.findIndex(index => index.id === id);

        if (index === -1) {
            throw new Error("Product not found");
        }

        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductService;
