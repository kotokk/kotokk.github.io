class Foe {
    constructor(canvas, x, y) {
        this._canvas = canvas;
        this._x = x;
        this._y = y;
        this._width = 25;
        this._height = 25;
        this._color = 'red';
        this.createFoe();
    }

    deleteFoe() {
        this._canvas._context.fillStyle = 'silver';
        this._canvas._context.fillRect(this._x, this._y, this._width, this._height);
    }

    createFoe(x,y) {
        if(x === undefined || y === undefined) {
            x = this._x;
            y = this._y;
        }
        this._canvas._context.fillStyle = this._color;
        this._canvas._context.fillRect(x, y, this._width, this._height);
    }
}