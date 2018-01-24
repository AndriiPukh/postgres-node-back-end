'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
      amount: {
          type: Sequelize.DECIMAL
      },
      amountGet: {
          type: Sequelize.DECIMAL
      },
      amountGive: {
          type: Sequelize.DECIMAL
      },
      availableVolume: {
          type: Sequelize.DECIMAL
      },
      deleted: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      ethAvailableVolume: {
          type: Sequelize.DECIMAL
      },
      ethAvailableVolumeBase: {
          type: Sequelize.DECIMAL
      },
      expires: {
          type: Sequelize.STRING
      },
      id: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      nonce: {
          type: Sequelize.STRING,
      },
      price: {
          type: Sequelize.DECIMAL
      },
      tokenGet: {
          type: Sequelize.STRING
      },
      tokenGive: {
          type: Sequelize.STRING
      },
      updated: {
          type: Sequelize.DATE
      },
      user: {
          type: Sequelize.STRING
      },
      v: {
          type: Sequelize.DECIMAL
      },
      r: {
          type: Sequelize.STRING
      },
      s: {
          type: Sequelize.STRING
      }});
  return Order;
};