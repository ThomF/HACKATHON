import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService.js"
import { vinylsServices } from "../services/VinylsServices.js"
import { votersService } from "../services/VotersService.js"
import BaseController from "../utils/BaseController.js"

export class VinylController extends BaseController {

    constructor() {
        super('/api/vinyls')
        this.router
            .get('', this.getVinyl)
            .get('/:vinylId', this.getVinylId)
            .get('/:vinylId/voters', this.getVotersByVinylId)
            .get("/:vinylId/comments", this.getCommentByVinylId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .delete('/:vinylId', this.deleteVinyl)
            .post('', this.createVinyl)
            .put('/:vinylId', this.updateVinyl)
    }

    async getVinyl(req, res, next) {
        try {
            const vinyl = await vinylsServices.getVinyls()
            return res.send(vinyl)
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

    async getVotersByVinylId(req, res, next) {
        try {
            const voters = await votersService.getVotersByVinylId(req.params.vinylId)
            return res.send(voters)
        } catch (error) {
            next(error)
        }
    }

    async deleteVinyl(req, res, next) {
        try {
            const user = req.userInfo
            const userId = user.id
            const vinylId = req.params.vinylId
            const vinyl = await vinylsServices.deleteVinyl(vinylId, userId)

            return res.send(vinyl)
        } catch (error) {
            next(error)
        }
    }

    async getCommentByVinylId(req, res, next) {
        try {
            const commentId = await commentsService.getCommentByVinylId(req.params.commentId)
            return res.send(commentId)
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

    async updateVinyl(req, res, next) {
        try {
            const vinylId = req.params.vinylId
            const updateData = req.body
            const userId = req.userInfo.id
            const updatedVinyl = await vinylsServices.updateVinyl(updateData, userId, vinylId)
            return res.send(updatedVinyl)
        } catch (error) {
            next(error)
        }
    }

}