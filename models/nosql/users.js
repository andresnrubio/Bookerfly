const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    name: { type: String },
    lastname: { type: String},
    birthday: { type: Date },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ["user", "admin"], default: "user" },
    // _id: mongoose.Types.ObjectId
  },
  {
    timestamps: true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme)