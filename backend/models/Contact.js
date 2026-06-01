const mongoose = require("mongoose");

const contactSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
      },

      phone: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        enum: [
          "Family",
          "Friends",
          "Work",
          "Business",
        ],
        default: "Friends",
      },

      favorite: {
        type: Boolean,
        default: false,
      },

      createdBy: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Contact",
    contactSchema
  );