'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Post,{
        foreignKey: "postId",
        as: "publicacion"
      })
      Comentario.belongsTo(models.Usuario,{
        foreignKey: "usuarioId",
        as: "autor"
      })
    }
  }
  Comentario.init({
    comentario: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};