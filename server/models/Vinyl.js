import { Schema } from "mongoose";



export const VinylSchema = new Schema({

  title: { type: String, required: true, minLength: 2, maxLength: 35 },
  artist: { type: String, required: true, minLength: 2, maxLength: 35 },
  description: { type: String, required: true, minLength: 2, maxLength: 150 },
  mood: {
    type: String,
    enum: [
      'happy',
      'sad',
      'angry',
      'melancholy',
      'trippy',
      'sullen',
      'ambient',
      'depressed',
      'joyful',
      'excited',
      'hype',
      'euphoric',
      'drunk',

    ], required: true
  },
  albumCover: { type: String, required: true },

  //**** VIRTUAL PROPERTIES ****/

  //createrId: { type: String, required: true }
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account" }


},
  { timestamps: true, toJSON: { virtuals: true } }
);

VinylSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
});

VinylSchema.virtual('vinylVoter', {
  localField: '_id',
  foreignField: 'userId',
  count: true,
  ref: 'Vinyls'
}
)



