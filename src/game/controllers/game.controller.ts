import { Controller } from "../class/abstracts/controller";
import { MOVE_BALL_EVENT_NAME, MOVE_PLAYER_EVENT_NAME } from "../constants";

export class GameController extends Controller {
    
    constructor() {
       super();
       document.addEventListener(MOVE_BALL_EVENT_NAME, this._ballMoveHandle);
       document.addEventListener(MOVE_PLAYER_EVENT_NAME, this._playerMoveHandle);
    }

    private _ballMoveHandle() {
        //TODO: Make the logic
    }

    private _playerMoveHandle() {
        //TODO: Make the logic
    }

    private _checkGame() {
        //TODO: Make the logic
    }
}