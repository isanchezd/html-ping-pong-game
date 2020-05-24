import { ContextState } from './state/context.state';
import { CanvasCleanerService } from './services/canvas.service';
import { Player } from './entities/player';
import { Ball } from './entities/ball';
import { 
    FPS, 
    X_J1, 
    Y_J1, 
    COLOR_J1, 
    X_J2, 
    Y_J2, 
    COLOR_J2, 
    X_BALL, 
    Y_BALL, 
    COLOR_BALL, 
    CANVAS_WIDTH, 
    CANVAS_HEIGHT 
} from './constants';


export default class HTMLPingPongGame {
    private _sessionId: number;
    private _canvas: HTMLCanvasElement;
    private _player1: Player;
    private _player2: Player;
    private _ball: Ball;

    constructor(canvasElement: HTMLCanvasElement) {
        this._sessionId = new Date().getTime();
        this._canvas = canvasElement; 
        this._canvas.width = CANVAS_WIDTH;
        this._canvas.height = CANVAS_HEIGHT;
        ContextState.getInstance().ctx = this._canvas.getContext('2d');
    }

    public run(): void {
        console.log(`${this._sessionId} assigned to the game`);
        setInterval(() => {
            CanvasCleanerService.clean(this._canvas);
            this._player1 = new Player(X_J1, Y_J1, COLOR_J1);            
            this._player2 = new Player(X_J2, Y_J2, COLOR_J2);
            this._ball = new Ball(X_BALL, Y_BALL, COLOR_BALL);
            this._player1.render();
            this._player2.render();
            this._ball.render();
        }, 1000 / FPS);
    }


}