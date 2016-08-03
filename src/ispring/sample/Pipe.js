goog.provide("ispring.sample.Pipe");

goog.require("ispring.sample.Definition");

goog.scope(function() {
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    
    ispring.sample.Pipe = goog.defineClass(null, {
        constructor: function(posX) {
            this.init(posX);
            /**
             *
             * @type {boolean}
             * @private
             */
            this._passage = false;
        },
        truePassage: function ()
        {
            /**
             *
             * @type {boolean}
             * @private
             */
            this._passage = true;
        },
        getPassage: function ()
        {
            return this._passage;
        },
        init: function(posX)
        {
            var _posX = posX;
            /**
             *
             * @type {Image}
             * @private
             */
            this._pipeImage = new Image();
            this._pipeImage.src = config._PATH_TO_IMAGES + config._PIPE_FILE_NAME;

            var randNum = config.getRandomInRange(config._MINIMUM_PASS_PIPE, config._CANVAS_SIZE.height);
            /**
             *
             * @type {goog.math.Coordinate}
             * @private
             */
            this._topCoord = new Point(_posX, 0);
            /**
             *
             * @type {goog.math.Coordinate}
             * @private
             */
            this._downCoord = new Point(_posX, randNum);
            var randSize = config.getRandomInRange(0, randNum - config._MINIMUM_PASS_PIPE);
            /**
             *
             * @type {goog.math.Size}
             * @private
             */
            this._topSize = new Size(config._PIPE_HEIGHT, randSize);
            /**
             *
             * @type {goog.math.Size}
             * @private
             */
            this._downSize = new Size(config._PIPE_HEIGHT, config._CANVAS_SIZE.height - randNum);
        },
        getImage: function()
        {
            var clonePipeImage = new Image();
            clonePipeImage.src = this._pipeImage.src;
            return clonePipeImage;
        },
        getPosition: function()
        {
            var clonePosTop = new Point(this._topCoord.x, this._topCoord.y);
            var clonePosDown = new Point(this._downCoord.x, this._downCoord.y);
            return [clonePosTop, clonePosDown];
        },
        getSize: function()
        {
            var cloneSizeTop = new Size(this._topSize.width, this._topSize.height);
            var cloneSizeDown = new Size(this._downSize.width, this._downSize.height);
            return [cloneSizeTop, cloneSizeDown];
        },
        decPosition: function()
        {
            this._topCoord.x -= config._PIPE_SPEED;
            this._downCoord.x -= config._PIPE_SPEED;
        },
        deletePipe: function()
        {
            /**
             *
             * @type {null}
             * @private
             */
            this._pipeImage = null;
            /**
             *
             * @type {null}
             * @private
             */
            this._topCoord = null;
            /**
             *
             * @type {null}
             * @private
             */
            this._downCoord = null;
            /**
             *
             * @type {null}
             * @private
             */
            this._topSize = null;
            /**
             *
             * @type {null}
             * @private
             */
            this._downSize = null;
            /**
             *
             * @type {boolean}
             * @private
             */
            this._passage = false;
        }
    });
});