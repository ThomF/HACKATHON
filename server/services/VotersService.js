import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class VotersService {
    async getVotes() {
        const voters = await dbContext.Voters.find()
        return voters
    }
    async vote(voterData) {
        const voter = await dbContext.Voters.create(voterData)
        return voter
    }
    async getVotersByVinylId(vinylId) {
        const voters = await dbContext.Voters.find({ vinylId }).populate('vinylVoter', 'name picture')
        return voters
    }

}

export const votersService = new VotersService()