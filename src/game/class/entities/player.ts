import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../../constants";
import { GameItem } from "../abstracts/game-item";

export class Player extends GameItem {
    constructor(x: number, y: number, color: string) {
        super(x, y, PLAYER_HEIGHT, PLAYER_WIDTH, color);
    }
}