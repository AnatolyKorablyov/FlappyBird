goog.provide("ispring.sample.GameModel");

goog.require("ispring.sample.Definition");
goog.require("ispring.sample.Bird");
goog.require("ispring.sample.Pipe");

goog.scope(function() {
    /**
     * @constructor
     */
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();
    const Bird = ispring.sample.Bird;
    const Pipe = ispring.sample.Pipe;
    
    ispring.sample.GameModel = goog.defineClass(null, {
        constructor: function () {
            this.ResetData();
        },

        AddPipe: function()
        {
            this._pipesArray.push(new Pipe(config._PIPE_POS_X + config._PIPES_DISTANCE * this._pipesArray.length));
        },
        DeletePipe: function(numId)
        {
            this._pipesArray.splice(numId, 1);
        },
        ResetData: function()
        {
            this._bird = new Bird();
            this._pipesArray = [];
            for (var i = 0; i < 7; ++i)
            {
                this.AddPipe();
            }
        },
        GetBirdImage: function()
        {
            return this._bird.GetImage();
        },
        GetBirdPosition: function()
        {
            return this._bird.GetPosition();
        },
        GetBirdSize: function()
        {
            return this._bird.GetSize();
        },
        FallBird: function()
        {
            this._bird.IncSpeed();
            this._bird.SetPosition();
        },
        FlyBird: function()
        {
            this._bird.DecSpeed();
            this._bird.SetPosition();
        },
        MovePipe: function()
        {
            for (var i = 0; i < this._pipesArray.length; ++i)
            {
                this._pipesArray[i].DecPosition();
            }
        },
        GetPipeArrayLength: function()
        {
            return this._pipesArray.length;
        },
        GetPipeImage: function(numId)
        {
            return this._pipesArray[numId].GetImage();
        },
        GetPipePosition: function(numId)
        {
            return this._pipesArray[numId].GetPosition();
        },
        GetPipeSize: function(numId)
        {
            return this._pipesArray[numId].GetSize();
        }
    });
});