goog.provide("ispring.sample.GameView");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    /**
     * @constructor
     */
    ispring.sample.GameView = goog.defineClass(null,
        {
            constructor: function (canvas) {
                this._canvasSize = {width: canvas.width, height: canvas.height};
                this._context = canvas.getContext("2d");

                //this._recordNode = document.getElementById("record");
                this._scoreNode = document.getElementById("score");

            },
            ClearCanvas: function () {
                this._context.clearRect(0, 0, this._canvasSize.width, this._canvasSize.height);
            },
            DrawShapesScaling: function (shape, position, size, scalingPos, imageSize) {
                this._context.drawImage(shape, scalingPos.x, scalingPos.y, imageSize.width, imageSize.height, position.x, position.y, size.width, size.height);
            },
            DrawShapes: function (shape, position, size) {
                this._context.drawImage(shape, position.x, position.y, size.width, size.height);
            },
            DrawScore: function (score) {
                this._scoreNode.innerHTML = score;
            }
        });
});