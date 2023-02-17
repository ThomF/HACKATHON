import { vinylsServices } from "../services/VinylsServices.js"
import BaseController from "../utils/BaseController.js"

export class VinylController extends BaseController {

    constructor() {
        super('/api/vinyl')
        this.router
            .get('', this.getVinyl)
    }


    async getVinyl(req, res, next) {
        try {
            const vinyl = await vinylsServices.getVinyls()
            return res.send(vinyl)
        } catch (error) {
            next(error)
        }
    }

}