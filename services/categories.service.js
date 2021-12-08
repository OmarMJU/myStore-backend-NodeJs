const faker = require("faker");
const boom = require("@hapi/boom");
const getConnection = require("../libs/postgres");

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
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(this.categories);
        //     }, 5000);
        // });
        const client = await getConnection();
        const categories = await client.query("SELECT * FROM categories");
        return categories.rows;
    }

    /**
     * N O T A: Cuando el método regresa una promesa el error siempre debe ir
     * dentro de la funcion "reject", para este caso el "boom" va dentro del reject.
     * Si el metodo regresa una promesa y en vez de la funcion "reject" se usa un
     * "throw", el programa lanzara un error debido a que no sabe interpretar el "throw"
     * para regresar el error.
     * Para el caso de exito dentro de una promesa se debe usar la funcion "resolve" y
     * no el "return".
     * Para ver un métod que usa throw y un return en vez de promesa ver el método "delete".
     */
    // Una categorìa por id.
    async getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const category = this.categories.find(item => item.id === id);

                if (!category) {
                    reject(boom.notFound("Category not found"));
                }

                resolve(category);
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
                    reject(boom.notFound("Category not found to update"));
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

    /**
     * N O T A: Para metodos que no regresan promesa o hacen uso de
     * ellas se puede realizar el "return" y el "throws" de forma normal.
     */
    // Borrar categoria
    async delete(id) {
        const index = this.categories.findIndex(item => item.id === id);

        if (index === -1) {
            throw boom.notFound("Category not found to delete");
        }

        this.categories.splice(index, 1);
        return { id };
    }
}

module.exports = CategoriesServie;
