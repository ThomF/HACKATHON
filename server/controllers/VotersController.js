import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";


export class VotersController extends BaseController {

    constructor() {
        super('api/vinylVotes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.vote)
    }
}