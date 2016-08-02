goog.provide("ispring.sample.Definition");

goog.require("goog.math.Size");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");

goog.scope(function() 
{
    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    /**
     * @constructor
     */
    ispring.sample.Definition = goog.defineClass(null, {
        constructor: function() {
            this._CANVAS_SIZE = new Size(600, 400);
            this._BIRD_POSITION = new Point(100, 100);
            this._BIRD_SIZE = new Size(50, 36);
            this._BIRD_FILE_NAME = "bird.png";
            this._PATH_TO_IMAGES = "../../../src/images/";
            this._BIRD_FLY_NUMBER = -10;
            this._PIPE_FILE_NAME = "pipe.png";
            this._PIPE_SPEED = 5;
            this._PIPES_DISTANCE = 200;
            this._PIPE_POS_X = 400;
            this._PIPE_HEIGHT = 50;
            this._BACKGROUND_FILE_NAME = "background.png";
            this._POS_BIRDS_IN_IMAGE = new Point(60, 50);
            this._BIRD_SIZE_IN_IMAGE = new Size(50, 36);
            this._STARTING_POSITION = new Point(0, 0);
            this._BACKGROUND_SIZE = new Size(229, 620);
            this._NUMBER_PIPES = 8;
            this._MINIMUM_PASS_PIPE = this._BIRD_SIZE.width * 2.5;
        },
        GetRandomInRange: function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
});
