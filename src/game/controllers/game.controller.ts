import { Controller } from "../class/abstracts/controller";
import { Ball } from "../class/entities/ball";
import { Player } from "../class/entities/player";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLOR_BALL, COLOR_J1, COLOR_J2, FPS, KEY_CODE_DOWN_J1, KEY_CODE_DOWN_J2, KEY_CODE_UP_J1, KEY_CODE_UP_J2, PLAYER_HEIGHT, PLAYER_WIDTH, START_GAME_EVENT_NAME, X_BALL, X_J1, X_J2, Y_BALL, Y_PLAYER } from "../constants";
import { CanvasCleanerHelper } from "../helpers/canvas-cleaner.helper";
import { BallRender } from "../renders/ball.render";
import { PlayerRender } from "../renders/player.render";
import { BallController } from "./ball.controller";
import { PlayerController } from "./player.controller";

export class GameController extends Controller {
  private _canvas: HTMLCanvasElement;
  private _player1Controller: PlayerController;
  private _player2Controller: PlayerController;
  private _ballController: BallController;
  private _playerRender: PlayerRender;
  private _ballRender: BallRender;

  constructor(canvas: HTMLCanvasElement) {
    super();
    this._canvas = canvas;
    this._player1Controller = new PlayerController(new Player(X_J1, Y_PLAYER, COLOR_J1), KEY_CODE_UP_J1, KEY_CODE_DOWN_J1);
    this._player2Controller = new PlayerController(new Player(X_J2, Y_PLAYER, COLOR_J2), KEY_CODE_UP_J2, KEY_CODE_DOWN_J2);
    this._ballController = new BallController(new Ball(X_BALL, Y_BALL, COLOR_BALL));
    this._playerRender = new PlayerRender();
    this._ballRender = new BallRender();
  }

  public start(): void {
    this.emitEvent(START_GAME_EVENT_NAME, {});
    this._gameLoop(this._canvas.getContext('2d'), this._player1Controller.player, this._player2Controller.player, this._ballController.ball)
  }

  private _gameLoop(ctx: CanvasRenderingContext2D, player1: Player, player2: Player, ball: Ball): void {
    setInterval(() => {
      CanvasCleanerHelper.clean(this._canvas);
      this._playerRender.render({
        ctx,
        color: player1.color,
        x: player1.x,
        y: player1.y
      });
      this._playerRender.render({
        ctx,
        color: player2.color,
        x: player2.x,
        y: player2.y
      });
      this._ballRender.render({
        ctx,
        color: ball.color,
        x: ball.x,
        y: ball.y
      });
      this._ballController.move();
      this._colissionsHandle();
      this._collissionItemsDetecHandle();
    }, 1000 / FPS);
  }

  private _colissionsHandle() :void {
    //TODO: Make the logic

    // right
    if (this._ballController.ball.x + this._ballController.ball.radius >= CANVAS_WIDTH) {
      this._ballController.ball.x = CANVAS_WIDTH - this._ballController.ball.radius;
      this._ballController.xSpeed = -this._ballController.xSpeed;
    }

    // left
    if (this._ballController.ball.x - this._ballController.ball.radius <= 0) {
      this._ballController.ball.x = this._ballController.ball.radius;
      this._ballController.xSpeed = -this._ballController.xSpeed;
    }

    // down
    if (this._ballController.ball.y + this._ballController.ball.radius >= CANVAS_HEIGHT) {
      this._ballController.ball.y = CANVAS_HEIGHT - this._ballController.ball.radius;
      this._ballController.ySpeed = -this._ballController.ySpeed;
    }

    // up
    if (this._ballController.ball.y - this._ballController.ball.radius <= 0) {
      this._ballController.ball.y = this._ballController.ball.radius;
      this._ballController.ySpeed = -this._ballController.ySpeed;
    }
  }

  private _collissionItemsDetecHandle() {
    //Pala izquierda

    if (
      (this._ballController.ball.x - this._ballController.ball.radius) <= (this._player1Controller.player.x + PLAYER_WIDTH) && 
      (this._ballController.ball.y - this._ballController.ball.radius) > (this._player1Controller.player.y - PLAYER_HEIGHT / 2) && 
      (this._ballController.ball.y + this._ballController.ball.radius) < (this._player1Controller.player.y + PLAYER_HEIGHT / 2)
      ) {
        console.log('Correcto');
    }


    if (
      (this._ballController.ball.x - this._ballController.ball.radius) <= (this._player1Controller.player.x + PLAYER_WIDTH) && 
      (this._ballController.ball.y - this._ballController.ball.radius) > (this._player1Controller.player.y - PLAYER_HEIGHT / 2) && 
      (this._ballController.ball.y + this._ballController.ball.radius) < (this._player1Controller.player.y + PLAYER_HEIGHT / 2)
      ) {
        console.log('Correcto');
    }


    // Pala derecha
  }

}