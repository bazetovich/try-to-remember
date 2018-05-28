import Game from './game/game';
import $$ from 'dom7';

(function(fb) {

    window.onload = function() {
        const game = new Game(fb);

        game.init($$('#game'));
    };

})(FBInstant);

