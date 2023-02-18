import { AuthController } from './Controllers/AuthController.js';
import { LikesController } from "./Controllers/LikesController.js";
import { ValuesController } from './Controllers/ValuesController.js';
import { VinylsController } from './Controllers/VinylsController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  vinylsController = new VinylsController();

  likesController = new LikesController();
}

// @ts-ignore
window.app = new App()
