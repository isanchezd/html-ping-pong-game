import { BALL_HEIGHT, BALL_SPEED, START_GAME_EVENT_NAME } from "../constants";
import { Controller } from "../class/abstracts/controller";
import { Ball } from "../class/entities/ball";

export class BallController extends Controller {
  public xSpeed: number = BALL_SPEED;
  public ySpeed: number = BALL_SPEED;
  private _ball: Ball;

  public get ball(): Ball {
    return this._ball;
  }

  constructor(ball: Ball) {
    super();
    this._ball = ball;
    document.addEventListener(START_GAME_EVENT_NAME, () => this.move());
  }

  public move() {
    this._ball.x += this.xSpeed;
    this._ball.y += this.ySpeed;
  }

}
