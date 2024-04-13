import { mongoose } from "mongoose";

// add object and timestamps(if required, mostly are)
const userSchema = new mongoose.Schema(
  {
    //   username: String,
    //   email: String,
    //   isActive: Boolean,
    //   better approach : read docs for props
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      // things can accept arrays, value and error messages
      // required: [true, "password is required"],
      required: true,
    },
  },
  { timestamps: true }
);

// exporting with mongoose :
// 2 para : kya model banau? kiske base pe banau?
export const User = mongoose.model("User", userSchema);
// it becomes users in database : small and plural
