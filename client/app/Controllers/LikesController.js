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

  async likeVinyl(userId) {
    try {
      await likesService.likeVinyl(userId);
    } catch (error) {
      Pop.error(error.message)
    }
  }
}