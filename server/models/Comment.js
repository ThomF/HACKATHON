import { Schema } from "mongoose";

export const CommentSchema = new Schema(
  {
    body: { type: String, required: true, }
  }
)