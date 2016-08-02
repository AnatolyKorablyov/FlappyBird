goog.provide("Sample");
goog.provide("goog.math");

goog.require("goog.math.Size");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");

goog.require("ispring.sample.GameController");

/**
 * @export
 */
Sample.start = function()
{
	var myGame = ispring.sample.GameController;
	var canvas = document.querySelector("canvas");
	var game = new myGame(canvas);
};
