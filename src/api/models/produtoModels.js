const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
   static init(sequelize) {
    super.init({
        prd_descricao: DataTypes.STRING,
        prd_validade: DataTypes.STRING,
        prd_especie: DataTypes.STRING,
        
       

    }, {
           sequelize,
           tableName: 'produto',
    })
    return this;       
    }
    static associate(models) {
        this.belongsTo(models.Especie, {foreignKey: 'esp_id', as: 'especie'})   
    }
          
 }
   
    


module.exports = Produto;