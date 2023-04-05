const getDb = require("../utils/database").getDb;

class Product {
  constructor(title, price, desc, imageUrl) {
    (this.title = title),
      (this.price = price),
      (this.description = desc),
      (this.imageUrl = imageUrl);
  }
}

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

module.exports = Product;
