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
    async getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.categories);
            }, 5000);
        });
    }

    // Una categorìa por id.
    async getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.categories.findIndex(category => category.id === id);

                if (index === -1) {
                    reject("Categorie not found to get");
                } else {
                    const category = this.categories.filter(item => item.id === id);
                    resolve(category);
                }
            }, 2000);
        });
    }

    // Crea una categoria.
    async create(datas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newCategory = {
                    id: faker.datatype.uuid(),
                    ...datas
                };

                this.categories.push(newCategory);
                resolve(newCategory);
            }, 2000);
        });
    }

    // Actualiza una categorìa.
    async update(id, dataChange) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.categories.findIndex(item => item.id === id);

                if (index === -1) {
                    reject("Category not found to update");
                } else {
                    const category = this.categories[index];
                    this.categories[index] = {
                        ...category,
                        ...dataChange
                    };

                    const categoryUpdate = this.categories[index];
                    resolve(categoryUpdate);
                }
            }, 2000);
        });
    }

    // Borrar categoria
    async delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.categories.findIndex(item => item.id === id);

                if (index === -1) {
                    reject("Category not found to delete");
                } else {
                    this.categories.splice(index, 1);
                    resolve({ id });
                }
            }, 2000);
        });
    }
}

module.exports = CategoriesServie;
