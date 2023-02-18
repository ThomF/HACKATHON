import { Schema } from "mongoose";


export const VoterSchema = new Schema(
  {
    // vinylId: { type: Schema.Types.ObjectId, required: true, ref: 'Vinyl' },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "Account" }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

//**** VIRTUAL PROPERTIES ****/


VoterSchema.virtual('vinylVoter', {
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
}
)

VoterSchema.index({ userId: 1, upVoteVinyl: 1 }, { unique: true })
