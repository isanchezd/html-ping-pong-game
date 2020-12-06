import { ContextState } from './state/context.state';
import { CanvasCleanerHelper } from './helpers/canvas-cleaner.helper';
import { GameItem } from './class/game-item';
import { PlayerController } from './controllers/player.controller';
import { BallController } from './controllers/ball.controller';
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
    CANVAS_HEIGHT,
    KEY_CODE_UP_J1,
    KEY_CODE_DOWN_J1,
    KEY_CODE_UP_J2,
    KEY_CODE_DOWN_J2
} from './constants';
import { PlayerRender } from './renders/player.render';
import { BallRender } from './renders/ball.render';



export class Game {
    private _sessionId: number;
    private _canvas: HTMLCanvasElement;
    private _player1Controller: PlayerController;
    private _player2Controller: PlayerController;
    private _ballController: BallController;
    private _playerRender: PlayerRender;
    private _ballRender: BallRender;

    constructor(canvasElement: HTMLCanvasElement) {
        this._sessionId = new Date().getTime();
        this._canvas = canvasElement; 
        this._canvas.width = CANVAS_WIDTH;
        this._canvas.height = CANVAS_HEIGHT;
        this._playerRender = new PlayerRender();
        this._ballRender = new BallRender();
        ContextState.getInstance().ctx = this._canvas.getContext('2d');
    }

    public run(): void {
        console.log(`${this._sessionId} assigned to the game`);
        const PLAYER1: GameItem = new GameItem(X_J1, Y_J1, COLOR_J1);
        const PLAYER2: GameItem = new GameItem(X_J2, Y_J2, COLOR_J2);
        const BALL: GameItem = new GameItem(X_BALL, Y_BALL, COLOR_BALL);
        this._player1Controller = new PlayerController(PLAYER1, KEY_CODE_UP_J1, KEY_CODE_DOWN_J1);            
        this._player2Controller = new PlayerController(PLAYER2, KEY_CODE_UP_J2, KEY_CODE_DOWN_J2);
        this._ballController = new BallController(BALL);
        setInterval(() => {
            CanvasCleanerHelper.clean(this._canvas);
            this._playerRender.render({
                ctx: ContextState.getInstance().ctx,
                color: PLAYER1.color,
                x: PLAYER1.x,
                y: PLAYER1.y
            });
            this._playerRender.render({
                ctx: ContextState.getInstance().ctx,
                color: PLAYER2.color,
                x: PLAYER2.x,
                y: PLAYER2.y
            });
            this._ballRender.render({
                ctx: ContextState.getInstance().ctx,
                color: BALL.color,
                x: BALL.x,
                y: BALL.y
            });
        }, 1000 / FPS);
    }


    


}