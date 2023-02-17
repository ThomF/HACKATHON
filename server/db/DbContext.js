import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { VinylSchema } from "../models/Vinyl.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Vinyls = mongoose.model('Vinyls', VinylSchema)
}

export const dbContext = new DbContext()