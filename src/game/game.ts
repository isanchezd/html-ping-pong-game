import { 
    CANVAS_WIDTH, 
    CANVAS_HEIGHT,
} from './constants';
import { GameController } from './controllers/game.controller';



export class Game{
    private _canvas: HTMLCanvasElement;
    private _gameController: GameController;

    constructor(canvasElement: HTMLCanvasElement) {
        this._canvas = canvasElement; 
        this._canvas.width = CANVAS_WIDTH;
        this._canvas.height = CANVAS_HEIGHT;
        this._gameController = new GameController(this._canvas);
    }

    public run(): void {
        this._gameController.start();
    }
    
}