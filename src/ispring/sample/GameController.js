goog.provide("ispring.sample.GameController");

goog.require("ispring.sample.GameModel");

goog.require("ispring.sample.GameView");

goog.scope(function() {
    const MODEL = ispring.sample.GameModel;
    const VIEW = ispring.sample.GameView;
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();
    /**
     * @constructor
     */
    ispring.sample.GameController = goog.defineClass(null, {
        constructor: function(canvas) 
        {            
            this._model = new MODEL();
            this._view = new VIEW(canvas);
            
            const thisPtr = this;
            window.addEventListener('keypress', thisPtr.HandlerKeyPress);
            canvas.onmouseup = function()
            {
                thisPtr._model.FlyBird();
            };

            //this._view.DrawShapes(this._model.GetBirdImage(), this._model.GetBirdPosition());
            setInterval(function()
            {
                thisPtr.GameInMotion();
            }, 1000 / 30);
        },
        HandlerKeyPress: function(e)
        {
            console.log("key pressed: ", e.keyCode);
            if (e.keyCode == 32)
            {
                this._model.FlyBird();
            }
        },
        GameInMotion: function ()
        {
            this._model.FallBird();
            this._model.MovePipe();
            this.HandlerPipes();
            this._view.ClearCanvas();
            this._view.DrawShapes(this._model.GetBirdImage(), this._model.GetBirdPosition(), this._model.GetBirdSize());
            for (var i = 0; i < this._model.GetPipeArrayLength(); ++i)
            {
                this._view.DrawShapes(this._model.GetPipeImage(i), this._model.GetPipePosition(i)[0], this._model.GetPipeSize(i)[0]);
                this._view.DrawShapes(this._model.GetPipeImage(i), this._model.GetPipePosition(i)[1], this._model.GetPipeSize(i)[1]);
            }
        },
        CheckCollision: function(posA, sizeA, posB, sizeB)
        {
            if (posA._x + sizeA._height >= posB._x && posA._x <= posB._x + sizeB._height)
            {
                if (posA._y >= posB._y && posA._y + sizeA._width <= posB._y + sizeB._width)
                {
                    return true;
                }
            }
            return false;
        },
        HandlerPipes: function()
        {
            birdPos = this._model.GetBirdPosition();
            birdSize = this._model.GetBirdSize();
            for (var i = 0; i < this._model.GetPipeArrayLength(); ++i)
            {
                if (this._model.GetPipePosition(i)[0]._x < 0)
                {
                    this._model.DeletePipe(i);
                    this._model.AddPipe();
                }
                if (this.CheckCollision(birdPos, birdSize, this._model.GetPipePosition(i)[0], this._model.GetPipeSize(i)[0]) ||
                    this.CheckCollision(birdPos, birdSize, this._model.GetPipePosition(i)[1], this._model.GetPipeSize(i)[1]))
                {
                    alert("GAME_OVER");
                    this._model.ResetData();
                }
            }
        }

    });
});