const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const shops = sequelize.define(
    'shops',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      address: {
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

  shops.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.shops.hasMany(db.menu_items, {
      as: 'menu_items_shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    db.shops.hasMany(db.orders, {
      as: 'orders_shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    //end loop

    db.shops.belongsTo(db.shop, {
      as: 'shop',
      foreignKey: {
        name: 'shopId',
      },
      constraints: false,
    });

    db.shops.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.shops.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return shops;
};
