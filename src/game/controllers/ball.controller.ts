import { GAME_SPEED, MOVED_BALL_EVENT_NAME, START_GAME_EVENT_NAME } from "../constants";
import { Controller } from "../class/abstracts/controller";
import { GameItem } from "../class/game-item";

export class BallController extends Controller {
  private _ball: GameItem;
  private _isFirstMove: boolean;

  constructor(item: GameItem) {
    super();
    this._isFirstMove = true;
    this._ball = item;
    document.addEventListener(START_GAME_EVENT_NAME, () => this.move());
  }

  public move() {
    if (this._isFirstMove) {
      this._firstMove();
    }

    this._isFirstMove = false;
    this.emitEvent(MOVED_BALL_EVENT_NAME, { detail: this._ball });
  }

  private _firstMove() {
    Math.random() / 2 === 0 ? this._ball.x += GAME_SPEED : this._ball.x -= GAME_SPEED;
  } 

}
