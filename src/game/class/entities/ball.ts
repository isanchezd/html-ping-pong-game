import { BALL_HEIGHT, BALL_WIDTH, RADIUS_BALL } from "../../constants";
import { GameItem } from "../abstracts/game-item";

export class Ball extends GameItem {
    private _radius: number;

    public get radius(): number {
        return this._radius;
    }

    constructor(x: number, y: number, color: string, radius?: number) {
        super(x, y, BALL_HEIGHT, BALL_WIDTH, color);
        this._radius = radius || RADIUS_BALL;
    }
}