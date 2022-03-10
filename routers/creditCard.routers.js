const express = require("express");
const CreditCardService = require("../services/creditCard.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getCreditCardSchema, createCreditCardSchema, updateCreditCardSchema, getNumberCreditCardSchema } = require("../schemas/creditCardDTO");

const cardsRouter = express.Router();
const service = new CreditCardService();

cardsRouter.get("/:userId", validatorHandler(getCreditCardSchema, "params"), async (req, res, next) => {
    const { userId } = req.params;
    const { numCard } = req.query;

    try {
        const creditCard = await service.getCreditCards(userId, numCard);
        res.status(200).json(creditCard);
    } catch (error) {
        next(error);
    }
});

cardsRouter.post("/", validatorHandler(createCreditCardSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const creditCard = await service.createCreditCard(datas);
        res.status(201).json({
            message: "Credit card create.",
            creditCard
        });
    } catch (error) {
        next(error);
    }
});

cardsRouter.patch("/:userId", validatorHandler(getCreditCardSchema, "params"), validatorHandler(getNumberCreditCardSchema, "query"), validatorHandler(updateCreditCardSchema, "body"), async (req, res, next) => {
    const { userId } = req.params;
    const { id } = req.query;
    const datas = req.body;

    try {
        const creditCard = await service.updateCreditCard(userId, id, datas);
        res.status(201).json({
            message: "Credit card updated.",
            creditCard
        });
    } catch (error) {
        next(error);
    }
});

cardsRouter.delete("/:userId", validatorHandler(getCreditCardSchema, "params"), validatorHandler(getNumberCreditCardSchema, "query"), async (req, res, next) => {
    const { userId } = req.params;
    const { id } = req.query;

    try {
        const cardDelete = await service.deleteCreditCard(userId, id);
        res.status(201).json({
            message: "Credit card deleted.",
            cardDelete
        });
    } catch (error) {
        next(error);
    }
});

module.exports = cardsRouter;
