import { Schema } from "mongoose";

let objectId = Schema.Types.ObjectId

export const VoterSchema = new Schema(
  {
    vinylId: { type: objectId, required: true, ref: 'Vinyl' },
    userId: { type: objectId, required: false, ref: "Account" }
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
