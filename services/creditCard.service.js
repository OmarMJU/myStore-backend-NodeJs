const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CreditCardService {
    async getCreditCards(userId, numCard) {
        const options = {
            where: {
                userId: userId
            }
        };

        if (numCard) {
            options.where.cardNumber = numCard;
        }

        const creditCards = await models.CreditCard.findAll(options);

        if (!creditCards || creditCards.length === 0) {
            throw boom.notFound("Credit card not found.");
        }

        return creditCards;
    }

    async createCreditCard(datas) {
        const newCard = await models.CreditCard.create(datas);
        return newCard;
    }

    async updateCreditCard(userId, datas) {
        const creditCard = await this.getCreditCards(userId, datas.cardNumber);
        const creditCardUpdate = await creditCard[0].update(datas);
        return creditCardUpdate;
    }

    async deleteCreditCard(userId, datas) {
        const creditCard = await this.getCreditCards(userId, datas.cardNumber);
        await creditCard[0].destroy();
        return datas;
    }
}

module.exports = CreditCardService;
