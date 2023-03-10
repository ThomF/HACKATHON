import { Auth0Provider } from "@bcwdev/auth0provider";
import { votersService } from "../services/VotersService.js";
import BaseController from "../utils/BaseController.js";


export class VotersController extends BaseController {

    constructor() {
        super('api/vinylVotes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.vote)
            .get('', this.getVotes)
    }

    async vote(req, res, next) {
        try {
            const voter = req.userInfo
            req.body.creatorId = voter.id
            const votes = await votersService.vote(req.body)
            return res.send(votes)
        } catch (error) {
            next(error)
        }
    }

    async getVotes(req, res, next) {
        try {
            const vote = await votersService.getVotes()
            return res.send(vote)
        } catch (error) {
            next(error)
        }
    }
}