import { dbContext } from "../db/DbContext"


class VinylsServices {

    async getVinyls() {
        const vinyls = await dbContext.Vinyls.find()
        return vinyls
    }


}

export const vinylsServices = new VinylsServices()