const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Especie = require('../api/models/especieModels');
const Produto = require('../api/models/produtoModels');

const conexao = new Sequelize(dbConfig);


Especie.init(conexao);
Produto.init(conexao);

Especie.associate(conexao.models);
Produto.associate(conexao.models);

try{
    conexao.authenticate();
    console.log('Conexao estabelecida');
    }
catch(error){
    console.log('Falha de conexao', error);
}

module.exports = conexao;

