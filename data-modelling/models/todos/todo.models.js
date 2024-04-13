import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // need relation with user
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // the name in .model("...",..)
    },
    // array of subTodos
    // can also make another schema for subTodo(not -s) and pass ref
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
// "Todo" => "todos"
