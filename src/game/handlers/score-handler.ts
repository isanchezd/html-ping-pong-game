import { CANVAS_WIDTH, PLAYER_WIDTH } from "../constants";
import { BallController } from "../controllers/ball.controller";
import { CounterController } from "../controllers/counter.controller";

export abstract class ScoreHandler {

  public static handle(ballController: BallController, counterJ1Controller: CounterController, counterJ2Controller: CounterController) {
    if (ballController.ball.x <= PLAYER_WIDTH) {
      counterJ2Controller.updateCounter();
      ballController.reset();
    }

    if (ballController.ball.x >= (CANVAS_WIDTH - PLAYER_WIDTH)) {
      counterJ1Controller.updateCounter();
      ballController.reset();
    }
  }
}
