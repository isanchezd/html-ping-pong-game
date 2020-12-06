import { CANVAS_HEIGHT, GAME_SPEED, MOVE_PLAYER_EVENT_NAME, PLAYER_HEIGHT } from "../constants";
import { Controller } from "../class/abstracts/controller";
import { GameItem } from "../class/game-item";
import { EventEmitter } from "../interfaces/event-emitter.interface";

export class PlayerController extends Controller implements EventEmitter {
  private _keyCodeLeft: number;
  private _keyCodeRight: number;
  private _player: GameItem;

  constructor(item: GameItem, keyCodeLeft: number, keyCodeRight: number) {
    super();
    this._player = item;
    this._keyCodeLeft = keyCodeLeft;
    this._keyCodeRight = keyCodeRight;
    document.addEventListener('keyup', (event: KeyboardEvent) => this._keyUpEventHandle(event));
  }

  private _keyUpEventHandle(event: KeyboardEvent): void {
    //TODO: Think a refactor to the switch
    switch (event.keyCode) {
      case this._keyCodeLeft:
        this._moveLeft();
        break;
      case this._keyCodeRight:
        this._moveRight();
        break;
      default:
        break;
    }
    this.emitEvent(MOVE_PLAYER_EVENT_NAME, { detail: this._player });
  }

  private _moveLeft() {
    if (this._player.y + GAME_SPEED < (CANVAS_HEIGHT - PLAYER_HEIGHT)) {
      this._player.y += GAME_SPEED;
    }
  }

  private _moveRight() {
    if (this._player.y - GAME_SPEED > 0) {
      this._player.y -= GAME_SPEED;
    }
  }

}