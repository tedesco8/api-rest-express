const mongoose = require("mongoose");

const { Schema } = mongoose;

const HomeSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true,
  },
  image: { type: Array, required: true, default: [] },
  title: { type: String, required: true },
  description: { type: String, required: true },
  start: { type: String, required: true },
  location: { type: String, default: "Usuario" },
  price: { type: String, required: true },
  mts: { type: Number, required: true },
  bed_rooms: { type: Number, required: true },
  bath_rooms: { type: Number, required: true },
  wifi: { type: Boolean, required: false, default: false },
});

HomeSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("home", HomeSchema);
