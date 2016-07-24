goog.provide("ispring.sample.Pipe");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    ispring.sample.Pipe = goog.defineClass(null, {
        constructor: function(posX) {
            this.SetPipe(posX);
        },
        SetPipe: function(posX)
        {
            var _posX = posX;
            this._pipeImage = new Image();
            this._pipeImage.src = config._PATH_TO_IMAGES + config._PIPE_FILE_NAME;

            var randNum = config.GetRandomArbitary(config._BIRD_SIZE._width * 3, config._CANVAS_SIZE._width);
            this._topCoord = new Point(_posX, 0);
            this._downCoord = new Point(_posX, randNum);
            this._topSize = new Size(50, randNum - config._BIRD_SIZE._width * 3);
            this._downSize = new Size(50, config._CANVAS_SIZE._width - randNum);
        },
        GetImage: function()
        {
            return this._pipeImage;
        },
        GetPosition: function()
        {
            return [this._topCoord].concat(this._downCoord);
        },
        GetSize: function()
        {
            return [this._topSize].concat(this._downSize);
        },
        DecPosition: function()
        {
            this._topCoord._x -= config._PIPE_SPEED;
            this._downCoord._x -= config._PIPE_SPEED;
        }
    });
});