import { Schema } from "mongoose";


export const VoterSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    upVoteComment: { type: Schema.Types.ObjectId, ref: "Comments" },
    upVoteVinyl: { type: Schema.Types.ObjectId, ref: "Vinyl" },
    //downVote:{},
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

//**** VIRTUAL PROPERTIES ****/

VoterSchema.virtual('commentVote', {
  localField: 'userId',
  foreignField: '_id',
  count: true,
  ref: 'Comment'
})

VoterSchema.virtual('vinylVoter', {
  localField: 'userId',
  foreignField: '_id',
  count: true,
  ref: 'Vinyls'
}
)

VoterSchema.index({ userId: 1, upVoteComment: 1 }, { unique: true })
VoterSchema.index({ userId: 1, upVoteVinyl: 1 }, { unique: true })
