const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const shop = sequelize.define(
    'shop',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  shop.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.shop.hasMany(db.users, {
      as: 'users_shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    db.shop.hasMany(db.order_items, {
      as: 'order_items_shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    db.shop.hasMany(db.shops, {
      as: 'shops_shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    //end loop

    db.shop.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.shop.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return shop;
};
