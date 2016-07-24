goog.provide("ispring.sample.Bird");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    ispring.sample.Bird = goog.defineClass(null, {
        constructor: function () {
            this._pos = new Point(config._BIRD_POSITION._x, config._BIRD_POSITION._y);
            this._size = new Size(config._BIRD_SIZE._height, config._BIRD_SIZE._width);
            this._speed = 0;
            this._birdImage = new Image();
            this._birdImage.src = config._PATH_TO_IMAGES + config._BIRD_FILE_NAME;

        },
        GetImage: function()
        {
            return this._birdImage;
        },
        GetPosition: function()
        {
            return this._pos;
        },
        GetSize: function()
        {
            return this._size;
        },
        SetPosition: function()
        {
            this._pos._y += this._speed;
        },
        IncSpeed: function()
        {
            this._speed++;
        },
        DecSpeed: function()
        {
            this._speed = config._BIRD_FLY_NUMBER;
        }
    });
});