class Player {
    constructor(canvas, foes) {
        this._foes = foes;
        this._canvas = canvas;
        this._width = 50;
        this._height = 50;
        this._color = 'yellow';
        this._points = 0;
        this._gameTime = 0;
        this._codeKeyUp = 'KeyW';
        this._codeKeyRight = 'KeyD';
        this._codeKeyDown = 'KeyS';
        this._codeKeyLeft = 'KeyA';
        this._step = 15;
        this._x = 0;
        this._y = 0;
        this.createPlayer(); 
    }

    step(direction) {

        let x = this._x;
        let y = this._y;

        this.deletePlayer();

        if(direction == 'up') {
            y = y - this._step;
            if(y >= 0) {
                this._y = y;
            }
        } else if(direction == 'down') {
            y = y + this._step;
            if(y <= canvas._height - this._height+5) {
                this._y = y;
            }
        } else if(direction == 'right') {
            x = x + this._step;
            if(x <= canvas._width - this._width+5) {
                this._x = x;
            }
        } else if(direction == 'left') {
            x = x - this._step;
            if(x >= 0) {
                this._x = x;
            }
        }

        this.createPlayer(this._x, this._y);

        for(let i = 0; i < this._foes.length; i++) {

            let foeEndX = this._foes[i]['_x'] + 25;
            let playerEndX = this._x + 25;
            let foeEndY = this._foes[i]['_y'] + 25;
            let playerEndY = this._y + 25;

            if (this._x <= foeEndX && playerEndX >= this._foes[i]['_x'] && playerEndY >= this._foes[i]['_y'] && this._y <= foeEndY ) {
                this._points++;
                this._foes[i].deleteFoe();
                this._foes.splice(i,1);
            }
            document.querySelector('#score > p > span').innerHTML = this._points;
            if (document.querySelector('#score > p > span').innerHTML == 20) {
                alert("Поздравляем, вы получили скидку 10% на первый заказ через сайт!");
            }
        }
}

    deletePlayer() {
        this._canvas._context.fillStyle = 'silver';
        this._canvas._context.fillRect(this._x, this._y, this._width, this._height);
    }

    createPlayer(x,y) {

        if(x === undefined || y === undefined) {
            x = this._x;
            y = this._y;
        }

        this._canvas._context.fillStyle = this._color;
        this._canvas._context.fillRect(x, y, this._width, this._height);
    }

    regenerateFoes() {
        for(let i = 0; i < this._foes.length; i++) {
            this._foes[i].deleteFoe();
            this._foes.splice(i , 1);
        }

        for(let i = 0; i < 2; i++) {
            let x = random(0, this._canvas._width-25);
            let y = random(0, this._canvas._height-25);
            foes.push(new Foe(this._canvas, x, y));
        }

        this.createPlayer(this._x, this._y);

    }

}