const mongoose = require("mongoose");
const { Schema } = mongoose;

const HouseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  upvotes: [{ type: Boolean }],
  downvotes: [{ type: Boolean }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      required: true,
      autopopulate: true
    }
  ],
  description: { type: String, required: true },
  start: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  mts: { type: Number, required: true },
  bed_rooms: { type: Number, required: true },
  bath_rooms: { type: Number, required: true },
  wifi: { type: Boolean, required: false, default: false },
});

HouseSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("house", HouseSchema);
