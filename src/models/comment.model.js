const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  description: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true
  }
});

CommentSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("comment", CommentSchema);
