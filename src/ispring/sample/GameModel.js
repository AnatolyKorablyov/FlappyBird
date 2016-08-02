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

    const Point = goog.math.Coordinate;
    const Size = goog.math.Size;
    
    ispring.sample.GameModel = goog.defineClass(null, {
        constructor: function () {
            this._newGame = true;
            this.ResetData();
        },

        AddPipe: function()
        {
            this._pipesArray.push(new Pipe(config._PIPE_POS_X + config._PIPES_DISTANCE * this._pipesArray.length));
        },
        DeletePipe: function(numId)
        {
            this._pipesArray[numId].DeletePipe();
            this._pipesArray.splice(numId, 1);
        },
        ResetData: function()
        {
            this.SetBackground();
            this._pipesArray = [];
            if (!this._newGame)
            {
                this._bird.DeleteBird();
                for (var j = 0; j < this._pipesArray.length; ++j)
                {
                    this.DeletePipe(j);
                }
            }
            this._bird = new Bird();
            this._birdAnimationPos = new Point(0, 0);
            for (var i = 0; i < config._NUMBER_PIPES; ++i)
            {
                this.AddPipe();
            }
            this._score = 0;
            this._newGame = false;
        }, 
        SetBackground: function()
        {
            this._background = new Image();
            this._background.src = config._PATH_TO_IMAGES + config._BACKGROUND_FILE_NAME;  
        },
        GetBackgroundImage: function()
        {
            return this._background;
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
        SetBirdAnimationPos: function(imagePos)
        {
            this._birdAnimationPos = imagePos;
        },
        GetBirdAnimationPos: function()
        {
            return this._birdAnimationPos;
        },
        MoveObjects: function()
        {
            this.FallBird();
            this.MovePipe();
        },
        FlyBird: function()
        {
            this._bird.TakeoffSpeed();
            this._bird.SetPositionOfTheSpeed();
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
        },
        GetPipePassage: function(numId)
        {
            return this._pipesArray[numId].GetPassage();
        },
        SetPipePassage: function(numId)
        {
            this._pipesArray[numId].TruePassage();
        },
        IncScore: function()
        {
            this._score++;
        },
        GetScore: function()
        {
            return this._score;
        },


        FallBird: function()
        {
            this._bird.IncSpeed();
            this._bird.SetPositionOfTheSpeed();
        },
        MovePipe: function()
        {
            for (var i = 0; i < this._pipesArray.length; ++i)
            {
                this._pipesArray[i].DecPosition();
            }
        }
    });
});