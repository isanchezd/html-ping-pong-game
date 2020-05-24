import { ContextState} from '../state/context.state';
import { Item } from './item';

export class Ball extends Item{
    get ctx(): CanvasRenderingContext2D {
        return ContextState.getInstance().ctx;
    }
    
    constructor(x: number, y: number, color: string) {
        super(x, y, color);
    }

    public render() {
        this.ctx.arc(this._x, this._y, 25, 0,(Math.PI / 180) * 360,true);
        this.ctx.fillStyle = this._color;
        this.ctx.fill();
    }

}