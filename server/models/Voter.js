import { Schema } from "mongoose";


export const VoterSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    upVote: { type: Boolean, default: false },
    //downVote:{},
  }
)

//**** VIRTUAL PROPERTIES ****/

VoterSchema.virtual('commentVote', {
  localField: 'userId',
  foreignField: '_id',
  count: true,
  ref: 'Comment'
})

VoterSchema.virtual('vinylVote', {
  localField: 'userId',
  foreignField: '_id',
  count: true,
  ref: 'Vinyls'
}
)