function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let canvas = new Canvas();

let foes = [];
for(let i = 0; i < 2; i++)
{
    let x = random(0, canvas._width-25);
    let y = random(0, canvas._height-25);
    console.log(x, y);
    foes.push(new Foe(canvas, x, y));
}

let player = new Player(canvas, foes);

let timerId = setInterval( function() {
    player.regenerateFoes();
}, 1500);

document.addEventListener('keypress', function (event) {
    if(event.code == player._codeKeyUp) {
        player.step('up');
    }
    else if(event.code == player._codeKeyDown) {
        player.step('down');
    }
    else if(event.code == player._codeKeyRight) {
        player.step('right');
    }
    else if(event.code == player._codeKeyLeft) {
        player.step('left');
    }

});