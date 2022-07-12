const mongoose = require("mongoose");

const BookScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    title: { type: String, unique: true },
    autor: { type: String},
    language:{type: String},
    year: { type: Number },
    cover:{
        type: String,
        validate: {
          validator: (req) => {
            return true;
          },
          message: "ERROR_URL",
        },
      },
    url: {
        type: String,
        validate: {
          validator: (req) => {
            return true;
          },
          message: "ERROR_URL",
        },
      },
      _id: mongoose.Types.ObjectId
  },
  {
    timestamps: true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey: false,
  }
);

module.exports = mongoose.model("books", BookScheme)