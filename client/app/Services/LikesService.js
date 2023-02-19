import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";

class LikesService {
  async likeVinyl(vinylId) {
    let res = await server.post('api/vinylVotes', { vinylId })
    console.log("LIKING THIS VINYL", res.data)
    let vinyl = appState.vinyls.find((vinyl) => vinyl.id == vinylId)
    if (vinyl) {
      vinyl.vinylVoter++;
    }

    appState.emit("vinyls")
  }

}

export const likesService = new LikesService();