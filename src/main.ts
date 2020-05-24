import HTMLPingPongGame  from './game/game';


window.addEventListener('load', (event) => {
    const canvas = <HTMLCanvasElement>document.getElementById('main');
    const game = new HTMLPingPongGame(canvas);
    game.run();
});
