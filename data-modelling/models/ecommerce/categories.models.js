import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", categoriesSchema);
