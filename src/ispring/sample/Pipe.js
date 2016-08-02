goog.provide("ispring.sample.Pipe");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    
    ispring.sample.Pipe = goog.defineClass(null, {
        constructor: function(posX) {
            this.Init(posX);
            this._passage = false;
        },
        TruePassage: function ()
        {
            this._passage = true;
        },
        GetPassage: function ()
        {
            return this._passage;
        },
        Init: function(posX)
        {
            var _posX = posX;
            this._pipeImage = new Image();
            this._pipeImage.src = config._PATH_TO_IMAGES + config._PIPE_FILE_NAME;

            var randNum = config.GetRandomInRange(config._MINIMUM_PASS_PIPE, config._CANVAS_SIZE.height);
            this._topCoord = new Point(_posX, 0);
            this._downCoord = new Point(_posX, randNum);
            var randSize = config.GetRandomInRange(0, randNum - config._MINIMUM_PASS_PIPE);
            this._topSize = new Size(config._PIPE_HEIGHT, randSize);
            this._downSize = new Size(config._PIPE_HEIGHT, config._CANVAS_SIZE.height - randNum);
        },
        GetImage: function()
        {
            var clonePipeImage = new Image();
            clonePipeImage.src = this._pipeImage.src;
            return clonePipeImage;
        },
        GetPosition: function()
        {
            var clonePosTop = new Point(this._topCoord.x, this._topCoord.y);
            var clonePosDown = new Point(this._downCoord.x, this._downCoord.y);
            return [clonePosTop, clonePosDown];
        },
        GetSize: function()
        {
            var cloneSizeTop = new Size(this._topSize.width, this._topSize.height);
            var cloneSizeDown = new Size(this._downSize.width, this._downSize.height);
            return [cloneSizeTop, cloneSizeDown];
        },
        DecPosition: function()
        {
            this._topCoord.x -= config._PIPE_SPEED;
            this._downCoord.x -= config._PIPE_SPEED;
        },
        DeletePipe: function()
        {
            this._pipeImage = null;
            this._topCoord = null;
            this._downCoord = null;
            this._topSize = null;
            this._downSize = null;
            this._passage = null;
        }
    });
});