const Produto = require('../models/produtoModels');

module.exports = {

    async index(req, res) {
        const Produtos = await Produto.findAll();
        return res.json(Produtos);
    },


    async show(req, res) {
        const Produtos = await Produto.findByPk(req.params.id);
        return res.json(Produtos);
    },

    async create(req, res) {
        const data = req.body;

        const Produtos = await Produto.create(data);
        return res.status(200).send({
            status: 1,
            message: "Produto cadastrado com sucesso", Produtos
            
        })
    },
    async update(req, res) {
        const data = req.body;
        await Produto.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Produto atualizado com sucesso"
    })
    },


    async delete(req, res) {
        await Produto.destroy({ where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Produto excluído com sucesso"
    })
    },
};