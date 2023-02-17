import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class VotersService {
    async getVotersByVinylId(vinylId) {
        const voters = await dbContext.Voters.find({ vinylId }).populate('creator', 'name picture')
        return voters
    }

}

export const votersService = new VotersService()