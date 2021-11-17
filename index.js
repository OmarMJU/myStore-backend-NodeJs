const express = require("express");
const faker = require("faker");
const app = express();
const _PORT = 3000;

/* Endpoints home */
app.get("/", (req, res) => {
    res.send("Soy tu servidor en Express");
});

/* Endpoints contact */
app.get("/contact", (req, res) => {
    res.send("Seccion de contacto");
});

/* Endpoints products */
app.get("/products", (req, res) => {
    const products = [];
    const { limit } = req.query;
    const size = limit || 20;

    for (let i = 0; i < size; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }

    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id, name: "Microblading", price: 2500 },);
});

/* Endpoints categories */
app.get("/categories", (req, res) => {
    res.json([
        { name: "Salud", items: 20 },
        { name: "Belleza", items: 30 },
        { name: "Confort", items: 10 }
    ]);
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    });
});

/* Endpoints users */
app.get("/users", (req, res) => {
    const { limit, offset} = req.query;

    if (limit && offset) {
        res.json({
            limit: limit,
            offset: offset
        });
    } else {
        res.json([
            { name: "Daniela", lastName: "Zamudio", age: "30", mail: "danni_zam@mail.com" },
            { name: "Manoli", lastName: "Hernandez", age: "35", mail: "mano_her35@mail.com" },
            { name: "Pamela", lastName: "Rosas", age: "52", mail: "pam.rosas@mail.com" },
            { name: "Janneth", lastName: "Carmona", age: "45", mail: "jan-car@mail.com" }
        ]);
    }
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Pamela",
        lastName: "Rosas",
        age: "52",
        mail: "pam.rosas@mail.com"
    });
});

app.get("/users/:id/shopping", (req, res) => {
    const { id } = req.params;
    res.json({
        idUser: id,
        shopping: [
            { name: "Micoblading", price: 2500, date: "14/10/2021" },
            { name: "Facial", price: 300, date: "05/11/2021" }
        ]
    });
});

app.get("/users/:idUser/shopping/:idShop", (req, res) => {
    const { idUser, idShop } = req.params;
    res.json({
        idUser,
        idShop,
        shop: { name: "Micoblading", price: 2500, date: "14/10/2021" }
    });
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});
