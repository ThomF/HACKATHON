import { dbContext } from "../db/DbContext"


class VinylsServices {
    async createVinyl(vinylData) {
        const newVinyl = await dbContext.Vinyls.create(vinylData)
        // await newVinyl.populate('')
        return newVinyl
    }

    async getVinyls() {
        const vinyls = await dbContext.Vinyls.find()
        return vinyls
    }


}

export const vinylsServices = new VinylsServices()