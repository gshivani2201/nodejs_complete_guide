const getDb = require("../utils/database").getDb;
class Product {
  constructor(title, price, desc, imageUrl) {
    (this.title = title),
      (this.price = price),
      (this.description = desc),
      (this.imageUrl = imageUrl);
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
