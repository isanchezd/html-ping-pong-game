import { ContextState } from '../state/context.state';
import { Item } from './item';
import { PLAYER_WIDTH, PLAYER_HEIGHT, GAME_SPEED, CANVAS_HEIGHT } from '../constants';

export class Player extends Item {
    private _keyLeft: number;
    private _keyRight: number;

    get ctx(): CanvasRenderingContext2D {
        return ContextState.getInstance().ctx;
    }

    constructor(x: number, y: number, color: string, keyLeft: number, keyRight: number) {
        super(x, y, color);
        this._keyLeft = keyLeft;
        this._keyRight = keyRight;
        document.addEventListener('keyup', (event: KeyboardEvent) => this._onKeyUp(event));
    }

    public render() {
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }

    private _onKeyUp(event: KeyboardEvent) {
        switch (event.keyCode) {
            case this._keyLeft:
                this._moveLeft();
                break;
            case this._keyRight:
                this._moveRight();
                break;
            default:
                break;
        }
    }


    private _moveRight() {
        console.log(this._y);
        if (this._y + GAME_SPEED < (CANVAS_HEIGHT - PLAYER_HEIGHT)) {
            this._y += GAME_SPEED;
        }
    }

    private _moveLeft() {
        if (this._y - GAME_SPEED > 0) {
            this._y -= GAME_SPEED;
        }
    }

}