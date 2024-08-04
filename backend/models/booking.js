'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, { foreignKey: 'userId' });
      Booking.belongsTo(models.Train, { foreignKey: 'trainId' });
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    trainId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};