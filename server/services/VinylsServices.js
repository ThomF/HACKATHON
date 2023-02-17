import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class VinylsServices {

    async getVinylById(vinylId) {
        const vinyl = await dbContext.Vinyls.findById(vinylId)
            .populate('creator', 'name picture')
            .populate('watchCount')
        if (!vinyl) {
            throw new BadRequest('Bad Vinyl ID')
        }
        return vinyl
    }
    async createVinyl(vinylData) {
        const newVinyl = await dbContext.Vinyls.create(vinylData)
        // await newVinyl.populate('')
        return newVinyl
    }

    async getVinyls() {
        const vinyls = await dbContext.Vinyls.find()
            .populate('creator', 'name picture')
            .populate('watchCount')
        return vinyls
    }


}

export const vinylsServices = new VinylsServices()