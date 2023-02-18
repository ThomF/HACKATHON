import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class VinylsServices {

    async getVinylById(vinylId) {
        const vinyl = await dbContext.Vinyls.findById(vinylId)
            .populate('creator', 'name picture')
            .populate('vinylVoter')
        if (!vinyl) {
            throw new BadRequest('Bad Vinyl ID')
        }
        return vinyl
    }
    async createVinyl(vinylData) {
        const newVinyl = await dbContext.Vinyls.create(vinylData)
        await newVinyl.populate('creator', 'name picture')

        return newVinyl
    }

    async getVinyls() {
        const vinyls = await dbContext.Vinyls.find()
            .populate('creator', 'name picture')
            .populate('vinylVoter')
        return vinyls
    }

    async deleteVinyl(vinylId, userId) {
        const vinyl = await this.getVinylById(vinylId)
        if (vinyl.creatorId != userId) {
            throw new BadRequest("401 Unathorized")
        }
        await vinyl.remove()
        return vinyl
    }

    async updateVinyl(updateData, userId, vinylId) {
        const vinyl = await dbContext.Vinyls.findById(vinylId)
        if (!vinyl) {
            throw new BadRequest("Vinyl not found")
        }
        if (vinyl.creatorId != userId) {
            throw new BadRequest("401 Unathorized Request")
        }
        vinyl.title = updateData.title || vinyl.title
        vinyl.artist = updateData.artist || vinyl.artist
        vinyl.description = updateData.description || vinyl.description
        vinyl.mood = updateData.mood || vinyl.mood
        vinyl.albumCover = updateData.albumCover || vinyl.albumCover

        await vinyl.save()
        return vinyl

    }

}

export const vinylsServices = new VinylsServices()