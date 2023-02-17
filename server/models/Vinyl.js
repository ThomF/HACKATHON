import { Schema } from "mongoose";



export const VinylSchema = new Schema({

  title: { type: String, required: true, minLength: 2, maxLength: 35 },
  artist: { type: String, required: true, minLength: 2, maxLength: 35 },
  description: { type: String, required: true, minLength: 2, maxLength: 150 },
  mood: {
    type: String,
    enum: [
      'Happy',
      'sad',
      'angry',
      'melancholy',
      'trippy ',
      'sullen ',
      'ambient ',
      'depressed',
      'joyful ',
      'excited ',
      'hype ',
      'euphoric',
      'drunk',

    ], required: true
  },
  albumCover: { type: String, required: true },

  createrId: { type: String, required: true }
  //creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account" }


});

