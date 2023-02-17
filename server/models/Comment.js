import { count } from "console";
import { Schema } from "mongoose";

export const CommentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    vinylId: { type: Schema.Types.ObjectId, required: true, ref: "Vinyl" },
    body: { type: String, required: true, minLength: 2, maxLength: 1000 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

//**** VIRTUAL PROPERTIES ****/

CommentSchema.virtual('comment', {
  localField: 'vinylId',
  foreignField: '_id',
  count: true,
  ref: 'Vinyls'

})

CommentSchema.virtual('account', {
  localField: 'userId',
  foreignField: '_id',
  count: true,
  ref: 'Account'

})