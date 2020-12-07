// Canvas Size
export const CANVAS_WIDTH = 1000;
export const CANVAS_HEIGHT = 600;

// Rendering game settings
export const FPS: number = 60;
export const BALL_SPEED: number = 1;
export const PLAYER_SPEED: number = 10;


//Game items  Size
export const PLAYER_WIDTH: number = 100;
export const PLAYER_HEIGHT: number = 160;
export const BALL_WIDTH: number = 50;
export const BALL_HEIGHT: number = 50;
export const RADIUS_BALL: number = 20;

//Game Items coordinates
export const X_J1: number = ((CANVAS_WIDTH * 5) / 100);
export const X_J2: number = ((CANVAS_WIDTH * 85) / 100);
export const Y_PLAYER: number = (CANVAS_HEIGHT / 2 ) - (PLAYER_HEIGHT / 2);
export const X_BALL: number = ((CANVAS_WIDTH * 50) / 100);
export const Y_BALL: number = (CANVAS_HEIGHT / 2);

// Game Items color
export const COLOR_J1: string = '#FF2D00';
export const COLOR_J2: string = '#0049FF';
export const COLOR_BALL: string = '#000';

//Keycodes for the control game items
export const KEY_CODE_UP_J1: number = 81;
export const KEY_CODE_DOWN_J1: number = 65;
export const KEY_CODE_UP_J2: number = 80;  
export const KEY_CODE_DOWN_J2: number = 186;  
export const KEY_CODE_MOVE_BALL: number = 32;

//Event Names
export const START_GAME_EVENT_NAME: string = '[Start Game]';
export const MOVED_BALL_EVENT_NAME: string = '[Moved Ball]';
export const MOVE_BALL_EVENT_NAME: string = '[Move Ball]';
export const MOVE_PLAYER_EVENT_NAME: string = '[Move player]';




