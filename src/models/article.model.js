const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  name: { type: String, maxlength: 50, unique: true, required: true },
  description: { type: String, maxlength: 50, required: false },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
    autopopulate: true,
  },
  code: { type: String, maxlength: 64, required: false },
  sale_price: { type: Number, required: true },
  cost_price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
  createAt: { type: Date, default: Date.now },
});

ArticleSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("article", ArticleSchema);
