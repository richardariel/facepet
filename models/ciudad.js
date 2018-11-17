'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuidad = sequelize.define('Cuidad', {
    nombre: DataTypes.STRING,
    imagenUrl: DataTypes.STRING,
    activo: DataTypes.INTEGER
  }, {
    tablename: "Ciudades"
  });
  Cuidad.associate = function(models) {
    // associations can be defined here
  };
  return Cuidad;
};