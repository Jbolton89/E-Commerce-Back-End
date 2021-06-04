const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { 
      type: DataTypes.INT, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true
    }, 
    product_id: {
      type: DataTypes.INT, 
      references: { model: 'Product', key: 'id' }
    },
    tag_id: { 
      type: DataTypes.INT, 
      references: { model: 'Tag', key: 'id' }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
