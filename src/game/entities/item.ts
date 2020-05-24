export class Item {
    protected _x: number;
    protected _y: number
    protected _color: string;

    constructor(x: number, y: number, color: string) {
        this._x = x;
        this._y = y;
        this._color = color; 
    }
    
    public render() {};
}