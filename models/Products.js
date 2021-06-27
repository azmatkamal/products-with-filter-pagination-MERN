const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  image_link: {
    type: String,
  },
  availability: {
    type: String,
  },
  price: {
    type: String,
  },
  brand: {
    type: String,
  },
  condition: {
    type: String,
  },
  shipping: {
    type: String,
  },
  identifier_exists: {
    type: String,
  },
});

ProductsSchema.plugin(mongoosePaginate);

module.exports = User = mongoose.model("products", ProductsSchema);
