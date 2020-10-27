const mongoose = require("mongoose");

const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, maxlength:20, required: true },
  surname: { type: String, maxlength:20, required: true },
  rol: { type: String, default: "Usuario" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  estado: { type: Number, enum: [1, 2, 3], default: 1 },
  create_At: { type: Date, default: Date.now },
});

UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
