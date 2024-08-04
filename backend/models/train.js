'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Train extends Model {
    static associate(models) {
      // define association here
      Train.hasMany(models.Booking, { foreignKey: 'trainId' });
    }
  }
  Train.init({
    name: DataTypes.STRING,
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    availableSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Train',
  });
  return Train;
};
