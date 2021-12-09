const faker = require("faker");
const boom = require("@hapi/boom");
const pool = require("../libs/postgres");

class CategoriesServie {

    // Constuctor de la clase.
    constructor() {
       this.categories = [];
       this.pool = pool;
       this.pool.on("error", err => console.error(err));
    }

    // Todas las categorias.
    async getAll() {
        const query = "SELECT * FROM categories";
        const categories = await this.pool.query(query);
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
        const query = "SELECT * FROM categories where id = $1";
        const category = await this.pool.query(query, [id]);
        return category.rows;
    }

    // Crea una categoria.
    async create(datas) {
        try {
            let { name, items } = datas;
            const queryId = "SELECT (MAX(ID) + 1) AS ID FROM CATEGORIES";
            const { rows } = await this.pool.query(queryId);

            if (!items) {
                items = 0;
            }

            const values = [rows[0].id, name, items];
            const query = "INSERT INTO CATEGORIES (ID, NAME, ITEMS) VALUES ($1, $2, $3)";
            await this.pool.query(query, values);

            return {
                id: rows[0].id,
                ...datas
            };
        } catch (error) {
            console.error(error);
        }
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
