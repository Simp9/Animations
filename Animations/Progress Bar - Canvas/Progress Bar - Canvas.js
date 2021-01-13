var canvas;
var context;
var W = 250;
var H = 250;
var X = 22;
var MAX_X = 227;
var Y1 = 115;
var Y2 = 133;
var I;
var Cr = 0;
var Speed = 10;
var Stop_no = 0;
var MIN = 0;
var MAX = 10;
var MAX_SPEED = 5;
var MIN_SPEED = 20;
var Times = new Array();

window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.width = W;
	canvas.height = H;
  
	drawBorder();
	generateArrays();
	I = setInterval( load, Speed );
}


function drawBorder() {

	context.save();
	context.clearRect( 0, 0, W, H );
	context.rect( 20, 114, 208, 20 );
	context.fillStyle = "#fff";
	context.shadowColor = "#000";
	context.shadowBlur = 3;
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	context.fill();
	context.restore();
  
	context.strokeStyle = "#00FF00";
	context.lineWidth = 1;
}

function load() {
	if ( X == Times[Cr] && Cr < Stop_no ) {
		Cr ++;
		Speed = Math.round( Math.random() * ( MIN_SPEED - MAX_SPEED ) + MAX_SPEED );
		clearInterval( I );
		I = setInterval( load, Speed );
	}

	if( X >= 227 ) {
		X = 22;
		context.clearRect( 20, 114, 208, 20 );
		resetTimes();
		Cr = 0;
		generateArrays();
	}

	context.beginPath();
	context.moveTo( X , Y1 );
	context.lineTo( X , Y2 );
	context.closePath();
	context.stroke();
	X ++;
}

function sortNumber( a, b ) {
	return a - b;
}

function resetTimes() {
  for( var i = 0; i < Stop_no; i ++ ) {
    Times.pop();
  }
	Stop_no = 0;
}

function generateTimes() {
  for( var i = 0; i < Stop_no; i ++ ) {
    var t = Math.round( Math.random() * ( MAX_X - X ) + X );
    if ( Times.indexOf( t ) == -1 ) {
      Times.push( t );
    } else {
      i --;
    }
  }
}

function generateArrays() {
  Stop_no = Math.round( Math.random() * MAX + MIN );
  generateTimes();
  Times.sort( sortNumber );
}

