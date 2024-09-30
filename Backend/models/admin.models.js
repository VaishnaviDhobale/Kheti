const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = {
    AdminModel,
};
