import { ContextState} from '../state/context.state';
import { Item } from './item';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constants';

export class Player extends Item{

    get ctx(): CanvasRenderingContext2D {
        return ContextState.getInstance().ctx;
    }
    
    constructor(x: number, y: number, color: string) {
        super(x, y, color);
    }

    public render() {
        this.ctx.fillStyle = this._color;
        this.ctx.fillRect(this._x, this._y, PLAYER_WIDTH, PLAYER_HEIGHT);
    }
}