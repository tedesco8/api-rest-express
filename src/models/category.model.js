const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, maxlength: 50, unique: true, required: true },
  description: { type: String, maxlength: 255 },
  status: { type: Number, default: 1 },
  createAt: { type: Date, default: Date.now },
});

CategorySchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("category", CategorySchema);
