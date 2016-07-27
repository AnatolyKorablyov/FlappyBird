goog.provide("ispring.sample.GameView");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    /**
     * @constructor
     */
    ispring.sample.GameView = goog.defineClass(null,
        {
            constructor: function (canvas) {
                this._canvasSize = {width: canvas.width, height: canvas.height};
                this._context = canvas.getContext("2d");

                this._recordNode = document.getElementById("record");
                this._scoreNode = document.getElementById("score");

            },
            ClearCanvas: function () {
                this._context.clearRect(0, 0, this._canvasSize.width, this._canvasSize.height);
            },
            DrawShapesScaling: function (shape, position, size, scalingPos, imageSize) {
                this._context.save();
                this._context.drawImage(shape, scalingPos._x, scalingPos._y, imageSize._height, imageSize._width, position._x, position._y, size._height, size._width);
                this._context.restore();
            },
            DrawShapes: function (shape, position, size) {
                this._context.save();
                this._context.drawImage(shape, position._x, position._y, size._height, size._width);
                this._context.restore();
            },
            DrawScore: function (score) {
                this._scoreNode.innerHTML = score;
            },
            DrawResult: function (score, record) {
                this._scoreNode.innerHTML = "Score: " + score;
                this._recordNode.innerHTML = "You record: " + record;
            }
        });
});