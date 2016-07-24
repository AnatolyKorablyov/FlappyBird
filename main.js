goog.provide("Sample");
goog.require("ispring.sample.GameController");

//goog.require('goog.math');

Sample.start = function()
{
	var myGame = ispring.sample.GameController;
	var canvas = document.querySelector("canvas");
	var game = new myGame(canvas);


	//var cord = new goog.math.Coordinate(34, 56);
/*	cord.x = 34;
	cord.y = 56;
*/

	//console.log(cord.x, cord.y);
	/*
	function onTimerTick()
	{
		console.log(timer.time());
	}

	const timer = new ispring.sample.MyTimer(onTimerTick);
	timer.start();
	*/
	/*
	var canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	birdImage = new Image();
	birdImage.src = "../../../src/images/bird.png";
	birdImage.onload = function()
	{
		context.drawImage(birdImage, 100, 100);
	};
	*/
	

};