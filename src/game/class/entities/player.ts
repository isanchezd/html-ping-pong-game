import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../../constants";
import { GameItem } from "../abstracts/game-item";

export class Player extends GameItem {
    private _id: string;

    public get id(): string { 
      return this._id;
    }

    constructor(id: string, x: number, y: number, color: string) {
        super(x, y, PLAYER_HEIGHT, PLAYER_WIDTH, color);
        this._id = id;
    }
}
