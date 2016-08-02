goog.provide("ispring.sample.Bird");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    
    ispring.sample.Bird = goog.defineClass(null, {
        constructor: function () {
            this._pos = new Point(config._BIRD_POSITION.x, config._BIRD_POSITION.y);
            this._size = new Size(config._BIRD_SIZE.width, config._BIRD_SIZE.height);
            this._speed = 0;
            this._birdImage = new Image();
            this._birdImage.src = config._PATH_TO_IMAGES + config._BIRD_FILE_NAME;

        },
        GetImage: function()
        {
            var cloneBirdImage = new Image();
            cloneBirdImage.src = this._birdImage.src;
            return cloneBirdImage;
        },
        GetPosition: function()
        {
            var clonePos = new Point(this._pos.x, this._pos.y);
            return clonePos;
        },
        GetSize: function()
        {
            var cloneSize = new Size(this._size.width, this._size.height);
            return cloneSize;
        },
        SetPositionOfTheSpeed: function()
        {
            this._pos.y += this._speed;
        },
        IncSpeed: function()
        {
            this._speed++;
        },
        TakeoffSpeed: function()
        {
            this._speed = config._BIRD_FLY_NUMBER;
        },
        DeleteBird: function ()
        {
            this._birdImage = null;
            this._pos = null;
            this._size = null;
            this._speed = null;
        }
    });
});