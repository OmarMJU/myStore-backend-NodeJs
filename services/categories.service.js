const faker = require("faker");

class CategoriesServie {

    // Constuctor de la clase.
    constructor() {
        this.categories = [
            { name: "Salud", items: 20 },
            { name: "Belleza", items: 30 },
            { name: "Confort", items: 10 }
        ];
        this.generateIds();
    }

    // Genera ids de forma aleatoria.
    generateIds() {
        this.categories = this.categories.map(category => {
            return {
                id: faker.datatype.uuid(),
                ...category
            };
        });
    }

    // Todas las categorias.
    getAll() {
        return this.categories;
    }

    // Una categorìa por id.
    getOne(id) {
        return this.categories.filter(item => item.id === id);
    }

    // Crea una categoria.
    create(datas) {
        const newCategory = {
            id: faker.datatype.uuid(),
            ...datas
        };

        this.categories.push(newCategory);
        return newCategory;
    }

    // Actualiza una categorìa.
    update(id, dataChange) {
        const index = this.categories.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error("Category not found");
        }

        const category = this.categories[index];
        this.categories[index] = {
            ...category,
            ...dataChange
        };

        return this.categories[index];
    }

    // Borrar categoria
    delete(id) {
        const index = this.categories.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error("Category not found");
        }

        this.categories.splice(index, 1);
        return { id };
    }
}

module.exports = CategoriesServie;
