import Game from './game/game';
import $$ from 'dom7';

let game = new Game();

window.onload = function() {
    game.fb = FBInstant;
    game.init($$('#game'));
};

export { game };
