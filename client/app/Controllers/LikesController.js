import { likesService } from "../Services/LikesService.js";
import { Pop } from "../Utils/Pop.js";

export class LikesController{
  constructor(){

  }

  async likeVinyl(vinylId){
    try {
      await likesService.likeVinyl(vinylId);
    } catch (error) {
      Pop.error(error.message)
    }
  }
}