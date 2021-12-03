const { Model, DataTypes } = require('sequelize');

class Especie extends Model {
   static init(sequelize) {
    super.init({
        esp_descricao: DataTypes.STRING,
        esp_validade: DataTypes.STRING,
        esp_orientacao: DataTypes.STRING,
       

    }, {
           sequelize,
           tableName: 'especie',
    })

    }
    static associate(models) {
        this.hasMany(models.Produto, {foreignKey: 'esp_id', as: 'especie'})  
    }
   
    
}

module.exports = Especie;