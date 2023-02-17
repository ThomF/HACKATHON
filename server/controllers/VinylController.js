import { Auth0Provider } from "@bcwdev/auth0provider"
import { vinylsServices } from "../services/VinylsServices.js"
import BaseController from "../utils/BaseController.js"

export class VinylController extends BaseController {

    constructor() {
        super('/api/vinyls')
        this.router
            .get('', this.getVinyl)
            .get('/:vinylId', this.getVinylId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createVinyl)
    }

    async getVinyl(req, res, next) {
        try {
            const vinyl = await vinylsServices.getVinyls()
            return res.send(vinyl)
        } catch (error) {
            next(error)
        }
    }

    async createVinyl(req, res, next) {
        try {
            const user = req.userInfo
            req.body.creatorId = user.id
            const newVinyl = await vinylsServices.createVinyl(req.body)
            return res.send(newVinyl)
        } catch (error) {
            next(error)
        }
    }

    async getVinylId(req, res, next) {
        try {
            const vinylId = req.params.vinylId
            const vinyl = await vinylsServices.getVinylById(vinylId)
            return res.send(vinyl)
        } catch (error) {
            next(error)
        }
    }

}