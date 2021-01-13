function Circle(Triangle) {
	this.Triangle = Triangle;
}

Circle.prototype = {
	Triangle : new Triangle(),
	X : 0,
	Y : 0,
	R : 0,

	getXY : function () {
		var m1 = (this.Triangle.P3.Y - this.Triangle.P2.Y) / (this.Triangle.P3.X - this.Triangle.P2.X);
		if (m1 != 0) {
			var m2 = (-1) / m1;

			var P23 = new Point((this.Triangle.P3.X + this.Triangle.P2.X) / 2, (this.Triangle.P3.Y + this.Triangle.P2.Y) / 2);
			var c2 = P23.Y - P23.X * m2;

			var m3 = (this.Triangle.P2.Y - this.Triangle.P1.Y) / (this.Triangle.P2.X - this.Triangle.P1.X);
			var m4 = (-1) / m3;

			var P12 = new Point((this.Triangle.P1.X + this.Triangle.P2.X) / 2, (this.Triangle.P1.Y + this.Triangle.P2.Y) / 2);
			var c4 = P12.Y - P12.X * m4;

			this.X = (c4 - c2) / (m2 - m4);
			this.Y = m2 * this.X + c2;
		} else {
			m1 = (this.Triangle.P3.Y - this.Triangle.P1.Y) / (this.Triangle.P3.X - this.Triangle.P1.X);
			var m2 = (-1) / m1;

			var P13 = new Point((this.Triangle.P3.X + this.Triangle.P1.X) / 2, (this.Triangle.P3.Y + this.Triangle.P1.Y) / 2);
			var c2 = P13.Y - P13.X * m2;

			var m3 = (this.Triangle.P2.Y - this.Triangle.P1.Y) / (this.Triangle.P2.X - this.Triangle.P1.X);
			var m4 = (-1) / m3;

			var P12 = new Point((this.Triangle.P1.X + this.Triangle.P2.X) / 2, (this.Triangle.P1.Y + this.Triangle.P2.Y) / 2);
			var c4 = P12.Y - P12.X * m4;

			this.X = (c4 - c2) / (m2 - m4);
			this.Y = m2 * this.X + c2;
		}
	},

	setR : function () {
		this.R = Math.sqrt((this.X - this.Triangle.P2.X) * (this.X - this.Triangle.P2.X) + (this.Y - this.Triangle.P2.Y) * (this.Y - this.Triangle.P2.Y));
	},

	draw : function (context, a, color) {
		context.beginPath();

		var gradient = context.createRadialGradient(this.X, this.Y, this.R - a, this.X, this.Y, this.R + 30);
		gradient.addColorStop(0, color);
		gradient.addColorStop(1, 'blue');

		context.arc(this.X, this.Y, this.R, 0, 2 * Math.PI);
		context.fillStyle = gradient;
		context.fill();
	}

};

function Triangle(P1, P2, P3) {
	this.P1 = P1;
	this.P2 = P2;
	this.P3 = P3;
}

Triangle.prototype = {
	P1 : new Point(0, 0),
	P2 : new Point(0, 0),
	P3 : new Point(0, 0),
	lineColor : 'black',
	lineWidth : 2,

	draw : function (context) {
		context.beginPath();
		context.moveTo(this.P1.X, this.P1.Y);
		context.lineTo(this.P2.X, this.P2.Y);
		context.lineTo(this.P3.X, this.P3.Y);
		context.lineTo(this.P1.X, this.P1.Y);
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.lineColor;
		context.stroke();
	}
};

function Point(X, Y) {
	this.X = X;
	this.Y = Y;
}

Point.prototype = {
	X : 0,
	Y : 0
};

function myFunction()
{

	var canvas,
	context,
	P1,
	P2,
	P3,
	triangles,
	circles,
	N = 8,
	a;

	function getTriangles() {
		var j = 0;

		for (var i = N - 1; i >= 1; --i) {
			var w = window.innerWidth / N;
			var h = window.innerHeight / N;
			var x = i * w;
			var y = i * h;
			var P1 = new Point(x, 0);
			var P2 = new Point((x + w / 2) / 2, (y + h / 2) / 2);
			var P3 = new Point(0, y);
			triangles[j++] = new Triangle(P1, P2, P3);
		}

		for (var i = 1; i <= N; ++i) {
			var w = window.innerWidth / N;
			var h = window.innerHeight / N;
			var x = i * w;
			var y = i * h;
			var P1 = new Point(x, window.innerHeight);
			var P2 = new Point((x + window.innerWidth - w / 2) / 2, (y + window.innerHeight - h / 2) / 2);
			var P3 = new Point(window.innerWidth, y);
			triangles[j++] = new Triangle(P1, P2, P3);
		}

	}

	function getCircles() {
		for (var i = 0; i < triangles.length; ++i) {
			if (i > N - 2) {
				circles[i] = new Circle(triangles[i]);
				circles[i].getXY();
				circles[i].setR();
				circles[i].draw(context, a, 'white');
			} else {
				circles[i] = new Circle(triangles[i]);
				circles[i].getXY();
				circles[i].setR();
				circles[i].draw(context, a, 'white');
			}
		}
	}

	function Resize() {
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		getTriangles();
		getCircles();
	}

	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.addEventListener('resize', Resize, false);
	triangles = [];
	getTriangles();
	a = Math.sqrt((triangles[0].P2.Y - triangles[1].P2.Y) * (triangles[0].P2.Y - triangles[1].P2.Y) + (triangles[0].P2.X - triangles[1].P2.X) * (triangles[0].P2.X - triangles[1].P2.X));
	circles = [];
	getCircles();

}

