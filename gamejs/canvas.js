class Canvas {
    constructor() {
        this._width = 290;
        this._height = 290;
        this._canvas = document.getElementsByTagName('canvas')[0];
        this._canvas.width  = this._width;
        this._canvas.height = this._height;
        this._context = this._canvas.getContext('2d');
        this._context.fillStyle = 'silver';
        this._context.fillRect(0, 0 , this._width, this._height);
    } 
}