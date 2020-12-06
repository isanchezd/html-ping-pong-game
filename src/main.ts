import { Game } from './game/game';


window.addEventListener('load', () => {
    const canvas = <HTMLCanvasElement>document.getElementById('main');
    const game = new Game(canvas);
    game.run();
});
