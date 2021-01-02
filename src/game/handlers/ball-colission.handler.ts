import { CANVAS_HEIGHT, CANVAS_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH } from "../constants";
import { BallController } from "../controllers/ball.controller";
import { PlayerController } from "../controllers/player.controller";


export abstract class BallColissionHandler {

  public static handle(ballController: BallController, player1Controller: PlayerController, player2Controller: PlayerController) {
        // right
        if (ballController.ball.x + ballController.ball.radius >= CANVAS_WIDTH) {
          ballController.ball.x = CANVAS_WIDTH - ballController.ball.radius;
          ballController.xSpeed = -ballController.xSpeed;
        }
    
        // left
        if (ballController.ball.x - ballController.ball.radius <= 0) {
          ballController.ball.x = ballController.ball.radius;
          ballController.xSpeed = -ballController.xSpeed;
        }
    
        // down
        if (ballController.ball.y + ballController.ball.radius >= CANVAS_HEIGHT) {
          ballController.ball.y = CANVAS_HEIGHT - ballController.ball.radius;
          ballController.ySpeed = -ballController.ySpeed;
        }
    
        // up
        if (ballController.ball.y - ballController.ball.radius <= 0) {
          ballController.ball.y = ballController.ball.radius;
          ballController.ySpeed = -ballController.ySpeed;
        }
    
        // Pala izquierda
        if (
          (ballController.ball.x - ballController.ball.radius) <= (player1Controller.player.x + PLAYER_WIDTH) &&
          (ballController.ball.y - ballController.ball.radius) >= (player1Controller.player.y) &&
          (ballController.ball.y + ballController.ball.radius) <= (player1Controller.player.y + (PLAYER_HEIGHT))
        ) {
          ballController.xSpeed = -ballController.xSpeed;
        }
    
        // Pala derecha
        if (
          (ballController.ball.x + ballController.ball.radius) >= (player2Controller.player.x) &&
          (ballController.ball.y - ballController.ball.radius) >= (player2Controller.player.y) &&
          (ballController.ball.y + ballController.ball.radius) <= (player2Controller.player.y + (PLAYER_HEIGHT))
        ) {
          ballController.xSpeed = -ballController.xSpeed;
        }
  }
}
