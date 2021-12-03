const Especie = require('../models/especieModels');

module.exports = {

    async index(req, res) {
        const Especies = await Especie.findAll();
        return res.json(Especies);
    },

    async show(req, res) {
        const Especies = await Especie.findByPk(req.params.id);
        return res.json(Especies);
    },

    async create(req, res) {
        const data = req.body;
        console.log(data)
        const Especies = await Especie.create(data);
        return res.status(200).send({
            status: 1,
            message: "Espécie cadastrada com sucesso", Especies
            
        })
    },
    async update(req, res) {
        const data = req.body;
        await Especie.update(data, { where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Espécie atualizada com sucesso"
    })
    },

    async delete(req, res) {
        await Especie.destroy({ where: {
        id: req.params.codigo
    }
    });
        return res.status(200).send({
        status: 1,
        message: "Espécie excluída com sucesso"
    })
    },
};