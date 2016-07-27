goog.provide("ispring.sample.Definition");

goog.scope(function() 
{

    Point = goog.defineClass(null, {
        constructor: function (x, y) {
            this._x = x;
            this._y = y;
        }
    });

    Size = goog.defineClass(null, {
        constructor: function (height, width) {
            this._height = height;
            this._width = width;
        }
    });
    
    const CANVAS_SIZE = new Size(800, 400);
    const BIRD_POSITION = new Point(100, 100);
    const BIRD_SIZE = new Size(50, 36);
    const BIRD_FILE_NAME = "bird.png";
    const PATH_TO_IMAGES = "src/images/";
    const BIRD_FLY_NUMBER = -10;
    const PIPE_FILE_NAME = "pipe.png";
    const PIPE_SPEED = 5;
    const PIPES_DISTANCE = 200;
    const PIPE_POS_X = 400;
    const BIRD_SIZE_IN_IMAGE = new Size(50, 36);
    const BIRD_SCALING_POS = new Point(10, 10);
    const POS_BIRDS_IN_IMAGE = new Point(60, 50);
    /**
     * @constructor
     */
    ispring.sample.Definition = goog.defineClass(null, {
        constructor: function() {
            this._CANVAS_SIZE = CANVAS_SIZE;
            this._BIRD_POSITION = BIRD_POSITION;
            this._BIRD_SIZE = BIRD_SIZE;
            this._BIRD_FILE_NAME = BIRD_FILE_NAME;
            this._PATH_TO_IMAGES = PATH_TO_IMAGES;
            this._BIRD_FLY_NUMBER = BIRD_FLY_NUMBER;
            this._PIPE_FILE_NAME = PIPE_FILE_NAME;
            this._PIPE_SPEED = PIPE_SPEED;
            this._PIPES_DISTANCE = PIPES_DISTANCE;
            this._PIPE_POS_X = PIPE_POS_X;
            this._BIRD_SCALING_POS = BIRD_SCALING_POS;
            this._POS_BIRDS_IN_IMAGE = POS_BIRDS_IN_IMAGE;
            this._BIRD_SIZE_IN_IMAGE = BIRD_SIZE_IN_IMAGE;
        },
        GetRandomArbitary: function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
});
