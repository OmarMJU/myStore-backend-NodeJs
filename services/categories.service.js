// const boom = require("@hapi/boom");
// const pool = require("../libs/postgres");
const { QueryTypes } = require("sequelize/dist");
const sequelize = require("../libs/sequelize");

class CategoriesServie {

    // Todas las categorias.
    async getAll() {
        const query = "SELECT * FROM categories";
        const [data] = await sequelize.query(query);
        return data;
    }

    // Una categorìa por id.
    async getOne(id) {
        const query = "SELECT * FROM categories where id = ?";
        const [data] = await sequelize.query(query, {
                replacements: [id],
                type: QueryTypes.SELECT
            }
        );

        return data;
    }

    // Crea una categoria.
    async create(datas) {
        let { name, items } = datas;
        const queryId = "SELECT (MAX(ID) + 1) AS ID FROM CATEGORIES";
        const [findedId] = await sequelize.query(queryId);
        const { id } = findedId[0];

        if (!items) {
            items = 0;
        }

        const query = "INSERT INTO CATEGORIES (ID, NAME, ITEMS) VALUES (:id, :name, :items)";
        await sequelize.query(query, {
            replacements: {
                id: id,
                name: name,
                items: items
            },
        });

        return {
            id,
            ...datas,
        };
    }

    // Actualiza una categorìa.
    async update(id, dataChange) {
        const datasQuery = [];
        const updateDatas = {
            id,
            ...dataChange
        };

        Object.keys(dataChange).forEach(key => datasQuery.push(`${key} = :${key}`));
        const query = `UPDATE CATEGORIES SET ${datasQuery.join(", ")} WHERE ID = :id`;
        await sequelize.query(query, {
            replacements: updateDatas
        });

        return updateDatas;
    }

    // Borrar categoria
    async delete(id) {
        const query = "DELETE FROM CATEGORIES WHERE ID = :id";
        await sequelize.query(query, {
            replacements: {
                id: id
            }
        });

        return { id };
    }

}

module.exports = CategoriesServie;
