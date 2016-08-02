goog.provide("ispring.sample.GameController");

goog.require("ispring.sample.GameModel");
goog.require("ispring.sample.GameView");

goog.scope(function() {
    const MODEL = ispring.sample.GameModel;
    const VIEW = ispring.sample.GameView;
    const GAME_CONFIG = ispring.sample.Definition;
    const config = new GAME_CONFIG();

    const Rect = goog.math.Rect;
    /**
     * @constructor
     */
    ispring.sample.GameController = goog.defineClass(null, {
        constructor: function(canvas)
        {
            this._canvas = canvas;
            this.GameStartMenu();
        },
        GameStartMenu: function()
        {
            var btn = document.createElement("button");
            btn.style.position = "absolute";
            btn.style.left = config._CANVAS_SIZE.width / 2 + "px";
            btn.style.top = config._CANVAS_SIZE.height / 2 + "px";
            var textBtn = document.createTextNode("START!");
            btn.appendChild(textBtn);

            const thisPtr = this;
            btn.onclick = function ()
            {
                btn.parentNode.removeChild(btn);
                thisPtr.GameStart(thisPtr._canvas);

            };
            document.body.appendChild(btn);
        },
        GameDeathMenu: function ()
        {
            clearInterval(this._intervalId);
            clearInterval(this._intervalAnimationId);


            var btnRS = document.createElement("button");
            btnRS.style.position = "absolute";
            btnRS.style.left = config._CANVAS_SIZE.width / 2 + "px";
            btnRS.style.top = config._CANVAS_SIZE.height / 2 + "px";
            var textBtnRS = document.createTextNode("RESTART");
            btnRS.appendChild(textBtnRS);

            var btnStats = document.createElement("button");
            btnStats.style.position = "absolute";
            btnStats.style.left = config._CANVAS_SIZE.width / 2 + 10 + "px";
            btnStats.style.top = config._CANVAS_SIZE.height / 2 + 30 + "px";
            var textBtnStats = document.createTextNode("STATS");
            btnStats.appendChild(textBtnStats);

            const thisPtr = this;
            btnRS.onclick = function ()
            {
                btnRS.parentNode.removeChild(btnRS);
                btnStats.parentNode.removeChild(btnStats);
                thisPtr.GameStart(thisPtr._canvas);

            };

            // TODO действие для stats

            document.body.appendChild(btnRS);
            document.body.appendChild(btnStats);
        },
        GameStart: function(canvas)
        {
            this._model = new MODEL();
            this._view = new VIEW(canvas);

            const thisPtr = this;
            window.addEventListener('keypress', thisPtr.HandlerKeyPress);
            canvas.onmouseup = function()
            {
                if (thisPtr._model.GetBirdPosition().y + thisPtr._model.GetBirdSize().height / 2 > 0)
                {
                    thisPtr._model.FlyBird();
                }
                else
                {
                    thisPtr._model.FallBird();
                }
            };

            //this._view.DrawShapes(this._model.GetBirdImage(), this._model.GetBirdPosition());
            this._intervalId = setInterval(function()
            {
                thisPtr.GameInMotion();
            }, 1000 / 30);

            this._intervalAnimationId = setInterval(function()
            {
                thisPtr.HandlerBirdAnimation();
            }, 1000 / 10);
        },
        HandlerKeyPress: function(e)
        {
            console.log("key pressed: ", e.keyCode);
            if (e.keyCode == 32)
            {
                this._model.FlyBird();
            }
        },
        DrawObjects: function()
        {
            this._view.ClearCanvas();
            this._view.DrawShapesScaling(this._model.GetBackgroundImage(), config._STARTING_POSITION, config._CANVAS_SIZE, config._STARTING_POSITION, config._BACKGROUND_SIZE);
            this._view.DrawShapesScaling(this._model.GetBirdImage(), this._model.GetBirdPosition(), this._model.GetBirdSize(), this._model.GetBirdAnimationPos(), config._BIRD_SIZE_IN_IMAGE);
            for (var i = 0; i < this._model.GetPipeArrayLength(); ++i)
            {
                this._view.DrawShapes(this._model.GetPipeImage(i), this._model.GetPipePosition(i)[0], this._model.GetPipeSize(i)[0]);
                this._view.DrawShapes(this._model.GetPipeImage(i), this._model.GetPipePosition(i)[1], this._model.GetPipeSize(i)[1]);
            }
            this._view.DrawScore(this._model.GetScore());
        },
        GameInMotion: function ()
        {
            this._model.MoveObjects();
            this.DrawObjects();
            this.HandlerPipes();
            if (this._model.GetBirdPosition().y + this._model.GetBirdSize().height > config._CANVAS_SIZE.height)
            {
                this.GameDeathMenu();
            }
        },
        CheckCollision: function(posA, sizeA, posB, sizeB)
        {
            var rectA = new Rect(posA.x, posA.y, sizeA.width, sizeA.height);
            var rectB = new Rect(posB.x, posB.y, sizeB.width, sizeB.height);
            return rectA.intersection(rectB);
        },
        HandlerPipes: function()
        {
            birdPos = this._model.GetBirdPosition();
            birdSize = this._model.GetBirdSize();
            for (var i = 0; i < this._model.GetPipeArrayLength(); ++i)
            {
                var topPipePos = this._model.GetPipePosition(i)[0];
                var topPipeSize = this._model.GetPipeSize(i)[0];
                var downPipePos = this._model.GetPipePosition(i)[1];
                var downPipeSize = this._model.GetPipeSize(i)[1];

                if (!this._model.GetPipePassage(i)
                    && topPipePos.x +  topPipeSize.width < birdPos.x)
                {
                    this._model.SetPipePassage(i);
                    this._model.IncScore();
                }
                if (topPipePos.x + topPipeSize.width < 0)
                {
                    this._model.DeletePipe(i);
                    this._model.AddPipe();
                }
                if (this.CheckCollision(birdPos, birdSize, topPipePos, topPipeSize) ||
                    this.CheckCollision(birdPos, birdSize, downPipePos, downPipeSize))
                {
                    this.GameDeathMenu();
                }
            }
        },
        HandlerBirdAnimation: function()
        {
            var imagePos = this._model.GetBirdAnimationPos();
            if (imagePos.x == config._POS_BIRDS_IN_IMAGE.x * 2)
            {
                imagePos.x = 0;
            }
            else
            {
                imagePos.x += config._POS_BIRDS_IN_IMAGE.x * 2;
            }
            this._model.SetBirdAnimationPos(imagePos);
        }

    });
});