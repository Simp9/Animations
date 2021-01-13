function Dot(X, Y, R) {
	this.X = X;
	this.Y = Y;
	this.R = R;
}

Dot.prototype = {
	X : 0,
	Y : 0,
	R : 0,
	fillColor : 'red',
	opacity : 0.8,
	text : '',
	textColor : 'black',

	drawText : function (context) {
		h = this.R;
		context.font = h + 'px Calibri';
		context.textBaseline = 'middle';
		context.textAlign = "center";
		context.fillStyle = this.textColor;
		context.fillText(this.text, this.X, this.Y);
	},

	draw : function (context) {
		context.beginPath();
		context.moveTo(this.X, this.Y);
		context.arc(this.X, this.Y, this.R, 0, Math.PI * 2);
		context.closePath();
		context.globalAlpha = this.opacity;
		context.fillStyle = this.fillColor;
		context.fill();
		context.globalAlpha = 1;
		this.drawText(context);
	}
};

function myFunction()
{

	var canvas,
	context;

	var p;
	var state = 1;
	var dots = [];
	var X;
	var X1;

	function Resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context = canvas.getContext('2d');
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		dots = [];
		getDots();
		for (var i = 0; i < 100; i++) {
			dots[i].draw(context);
		}
	}

	function getDots() {
		if (window.innerHeight > window.innerWidth) {
			var x = window.innerWidth / 2;
			var y = window.innerHeight / 10;
			for (var i = 0; i < 100; i++) {
				if (i % 20 < 10) {
					dots[i] = new Dot(x / 2 + Math.floor(i / 20) * window.innerWidth, y * (i % 10) + y / 2, x / 8);
				} else {
					dots[i] = new Dot(x + x / 2 + Math.floor(i / 20) * window.innerWidth, y * (i % 10) + y / 2, x / 8);
				}
				dots[i].text = i + 1 + '';
			}
		} else {
			var y = window.innerHeight / 2;
			var x = window.innerWidth / 10;
			for (var i = 0; i < 100; i++) {
				if (i % 20 < 10) {
					dots[i] = new Dot(x * (i % 10) + x / 2 + Math.floor(i / 20) * window.innerWidth, y / 2, y / 8);
				} else {
					dots[i] = new Dot(x * (i % 10) + x / 2 + Math.floor(i / 20) * window.innerWidth, y + y / 2, y / 8);
				}
				dots[i].text = i + 1 + '';
			}
		}
		dots[0].textColor = 'white';
	}

	function MouseMove(e) {

		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		for (var i = 0; i < 100; i++) {
			dots[i].X = dots[i].X + e.pageX - X1;
		}

		X1 = e.pageX;

		for (var i = 0; i < 100; i++) {
			dots[i].draw(context);
		}
	}

	function MouseDown(e) {
		X = e.pageX;
		X1 = e.pageX;
		window.addEventListener('mousemove', MouseMove, false);
	}

	function MouseUp(e) {
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);

		if (window.innerHeight > window.innerWidth) {
			if (dots[0].X > window.innerWidth / 4) {
				for (var i = 0; i < 100; i++) {
					dots[i].X = dots[i].X - (X1 - X);
				}
			} else if (dots[99].X < window.innerWidth / 2 + window.innerWidth / 4) {
				for (var i = 0; i < 100; i++) {
					dots[i].X = dots[i].X - (X1 - X);
				}
			} else {
				if (e.pageX - X > 60) {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X + window.innerWidth - Math.abs(X1 - X);
					}
				} else if (e.pageX - X < -60) {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X - window.innerWidth + Math.abs(X1 - X);
					}
				} else {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X - (X1 - X);
					}
				}
			}
		} else {
			if (dots[0].X > window.innerWidth / 20) {
				for (var i = 0; i < 100; i++) {
					dots[i].X = dots[i].X - (X1 - X);
				}
			} else if (dots[99].X < 19 * window.innerWidth / 20) {
				for (var i = 0; i < 100; i++) {
					dots[i].X = dots[i].X - (X1 - X);
				}
			} else {
				if (e.pageX - X > 60) {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X + window.innerWidth - Math.abs(X1 - X);
					}
				} else if (e.pageX - X < -60) {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X - window.innerWidth + Math.abs(X1 - X);
					}
				} else {
					for (var i = 0; i < 100; i++) {
						dots[i].X = dots[i].X - (X1 - X);
					}
				}
			}
		}

		for (var i = 0; i < 100; i++) {
			dots[i].draw(context);
		}
		window.removeEventListener('mousemove', MouseMove, false);
	}

	canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext('2d');

	getDots();
	for (var i = 0; i < 100; i++) {
		dots[i].draw(context);
	}
  
	window.addEventListener('mousedown', MouseDown, false);
	window.addEventListener('mouseup', MouseUp, false);
   window.addEventListener('resize', Resize, false);

}

