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
    
    const CANVAS_SIZE = new Size(400, 400);
    const BIRD_POSITION = new Point(100, 200);
    const BIRD_SIZE = new Size(50, 50);
    const BIRD_FILE_NAME = "bird.png";
    const PATH_TO_IMAGES = "src/images/";
    const BIRD_FLY_NUMBER = -10;
    const PIPE_FILE_NAME = "pipe.png";
    const PIPE_SPEED = 5;
    const PIPES_DISTANCE = 200;
    const PIPE_POS_X = 400;

    const FONT_COLOR = "#00F";
    const COLORS = ["#F00", "#0F0", "#00F", "#FF0"];
    const CENTER_X = 300;
    const CENTER_Y = 150;
    const RADIUS = 100;
    const SPEED = 0.04;
    const SCORE = 0;
    const TOP = 0;
    const TWO_HALVES = 2;
    const NUMBER_OF_COLORS = 4;
    const FONT = "italic 30pt Arial";
    const POS_SCORE_LABEL = new Point(10, 50);
    const POS_SPEED_LABEL = new Point(10, 80);
    const POS_RECORD_LABEL = new Point(350, 50);
    const ADD_SPEED = 0.01;
    const TOP_RESULT = "topResult";
    const POINTS_FOR_SPEED = 5;
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
            
            this._size = Size(0, 0);
            this._FONT_COLOR = FONT_COLOR;
            this._COLORS = COLORS;
            this._CENTER_X = CENTER_X;
            this._CENTER_Y = CENTER_Y;
            this._RADIUS = RADIUS;
            this._SPEED = SPEED;
            this._TWO_HALVES = TWO_HALVES;
            this._NUMBER_OF_COLORS = NUMBER_OF_COLORS;
            this._FONT = FONT;
            this._POS_SCORE_LABEL = POS_SCORE_LABEL;
            this._POS_SPEED_LABEL = POS_SPEED_LABEL;
            this._POS_RECORD_LABEL = POS_RECORD_LABEL;
            this._ADD_SPEED = ADD_SPEED;
            this._TOP_RESULT = TOP_RESULT;
            this._POINTS_FOR_SPEED = POINTS_FOR_SPEED;
        },
        GetRandomArbitary: function(min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
});
