import { appState } from "../AppState.js";
import { likesService } from "../Services/LikesService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";
function _drawVote() {
  console.log("adding like")
  setText('vote', appState.votes)
}

export class LikesController {
  constructor() {
    appState.on('votes', _drawVote)
  }

  async likeVinyl(vinylId) {
    try {
      await likesService.likeVinyl(vinylId);
    } catch (error) {
      Pop.error(error.message)
    }
  }
}