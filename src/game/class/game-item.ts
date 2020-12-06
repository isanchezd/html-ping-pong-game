export class GameItem {
    //TODO: Think better way to dont expose the properties
    public x: number;
    public y: number
    public color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    
}