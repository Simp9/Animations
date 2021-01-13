var canvas;
var context;
var canvas1;
var context1;
var W = 372;
var H = 474;

var points = [
  [129, 67],  // EAR
  [86, 189],  // EAR
  [132, 253], // SHOULDER 
  [71, 326],  // HAND 
  [42, 339],  // FINGER
  [55, 337],  // FINGER
  [64, 348],  // FINGER
  [85, 345],  // FINGER
  [93, 337],  // ARM
  [128, 312],  // UNDER ARM
  [125, 398],  // LEG
  [114, 453],  // HEEL
  [160, 466],  // FINGER
  [157, 447],  // LEG
  [212, 443],  // LEG
  [195, 461],  // FINGER
  [253, 453],  // HEEL
  [245, 392],  // LEG
  [243, 313],  // UNDER ARM
  [273, 341],  // ARM
  [288, 343],  // FINGER
  [312, 347],  // FINGER
  [313, 336],  // FINGER
  [292, 319],  // ARM
  [257, 251],  // SHOULDER
  [288, 189],  // EAR
  [251, 70],  // EAR
  [193, 50],  // HAIR
  [255, 27],  // HAIR
  [164, 50],  // HAIR
  [173, 14]];  // HAIR

var aux1 = [
  [5, -63],
  [73, 208],
  [103, 270],
  [43, 315],
  [43, 338],
  [37, 345],
  [60, 364],
  [104, 360],
  [90, 340],
  [108, 373],
  [130, 415],
  [130, 470],
  [175, 470],
  [185, 420],
  [190, 450],
  [205, 470],
  [250, 440],
  [250, 373],
  [255, 325],
  [262, 358],
  [305, 356],
  [322, 352],
  [325, 340],
  [282, 300],
  [300, 230],
  [390, 205],
  [235, 60],
  [213, 35],
  [205, 25],
  [172, 30],
  [163, 40]
];

var aux2 = [
  [-33, 185],
  [80, 230],
  [86, 300],
  [35, 339],
  [42, 339],
  [40, 368],
  [65, 367],
  [108, 338],
  [108, 320],
  [110, 380],
  [119, 434],
  [150, 472],
  [176, 465],
  [175, 400],
  [185, 455],
  [234, 468],
  [240, 415],
  [254, 360],
  [264, 335],
  [280, 363],
  [315, 360],
  [320, 344],
  [315, 320],
  [279, 270],
  [305, 212],
  [393, -73],
  [220, 50],
  [225, 33],
  [200, 28],
  [172, 25],
  [153, 50]
];

var ear1 = [
  [105, 95],
  [23, 59],
  [86, 187]
];

var eaux1 = [
  [92, 35],
  [-6, 120],
  [82, 150]
  
];

var eaux2 = [
  [50, 40],
  [33, 198],
  [84, 122]
];

var ear2 = [
  [288, 189],
  [360, 70],
  [276, 100]
];

var eaux3 = [
  [340, 195],
  [335, 25],
  [280, 120]
];

var eaux4 = [
  [370, 136],
  [295, 45],
  [290, 120]
];

var hair = [
  [181, 78],
  [210, 88],
  [195, 64],
  [240, 82],
  [193, 50]
];

var haux1 = [
  [188, 72],
  [208, 72],
  [210, 60],
  [233, 60]
];

var haux2 =[
  [200, 78],
  [205, 70],
  [217, 67],
  [220, 55]
];

var eyebrow1 = [
  [130, 116],
  [160, 100]
];

var ebaux1 = [
  [138, 107],
  [145, 95]
];

var ebaux2 = [
  [144, 102],
  [135, 101]
];

var eyebrow2 = [
  [261, 120],
  [231, 101]
];

var ebaux3 = [
  [250, 104],
  [245, 92]
];

var ebaux4 = [
  [245, 100],
  [252, 97]
];

var abdomen = [
  [155, 297],
  [190, 404],
  [225, 300],
  [206, 283],
  [193, 280]
];

var aaux1 = [
  [128, 358],
  [237, 393],
  [215, 294],
  [200, 290],
  [175, 300]
];

var aaux2 = [
  [130, 392],
  [241, 367],
  [215, 291],
  [193, 280],
  [156, 308]
];

var p = [
  [225, 300],
  [257, 251],
  [209, 262],
  [189, 264],
  [155, 297]
];

var paux1 = [
  [232, 311],
  [257, 231],
  [210, 255],
  [129, 210]
];

var paux2 = [
  [250, 295],
  [240, 231],
  [197, 247],
  [115, 245]
];

window.onload = function() {
  canvas = document.getElementById( 'canvas' );
  context = canvas.getContext( '2d' );
  canvas1 = document.getElementById( 'canvas1' );
  context1 = canvas1.getContext( '2d' );
  canvas.width = W;
  canvas.height = H;
  canvas1.width = W;
  canvas1.height = H;
  
  var img = new Image();
  img.src = "http://img4.wikia.nocookie.net/__cb20110814202926/tomandjerry/images/2/29/Jerry_2.png";
  img.onload = function () {
    context1.drawImage(img, 0, 0);
  }
 
  drawJerry();
}

function drawSkin() {
  context.beginPath();
  context.moveTo( points[0][0], points[0][1] );
  
  for( var i = 0; i < 30; i ++ ) {
    context.bezierCurveTo( aux1[i][0], aux1[i][1], aux2[i][0], aux2[i][1],  points[i + 1][0], points[i + 1][1] );
  }
  
  var n = aux1.length - 1;
  context.bezierCurveTo( aux1[n][0], aux1[n][1], aux2[n][0], aux2[n][1],  points[0][0], points[0][1] );
  context.fillStyle = '#CF8E00';
  context.fill();
  context.lineWidth = 1.6;
  context.stroke();
  
  context.beginPath();
  context.moveTo( 164, 420 );
  context.lineTo( 208, 415 );
  context.moveTo( 64, 348 );
  context.lineTo( 73, 340 );
  context.moveTo( 55, 336 );
  context.lineTo( 59, 334 );
  context.moveTo( 160, 466 );
  context.quadraticCurveTo( 165, 461, 153, 454 );
  context.moveTo( 195, 461 );
  context.quadraticCurveTo( 198, 450, 208, 453 );
  context.moveTo( 312, 347 );
  context.quadraticCurveTo( 310, 342, 305, 340 );
  context.moveTo( 313, 336 );
  context.quadraticCurveTo( 310, 330, 304, 330 );
  context.moveTo( 245, 392 );
  context.lineTo( 238, 400 );
  context.stroke();
}

function drawLeftEar() {
  context.beginPath();
  context.moveTo( ear1[0][0], ear1[0][1] );
  context.bezierCurveTo( eaux1[0][0], eaux1[0][1], eaux2[0][0], eaux2[0][1],  ear1[1][0], ear1[1][1] );
  context.bezierCurveTo( eaux1[1][0], eaux1[1][1], eaux2[1][0], eaux2[1][1],  ear1[2][0], ear1[2][1] );
  context.bezierCurveTo( eaux1[2][0], eaux1[2][1], eaux2[2][0], eaux2[2][1],  ear1[0][0], ear1[0][1] );
  context.fillStyle = '#FEC0FF';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo( 84, 147 );
  context.quadraticCurveTo(  71, 159, 58, 137 );
  context.stroke();
}

function drawRightEar() {
  context.beginPath();
  context.moveTo( ear2[0][0], ear2[0][1] );
  context.bezierCurveTo( eaux3[0][0], eaux3[0][1], eaux4[0][0], eaux4[0][1],  ear2[1][0], ear2[1][1] );
  context.bezierCurveTo( eaux3[1][0], eaux3[1][1], eaux4[1][0], eaux4[1][1],  ear2[2][0], ear2[2][1] );
  context.bezierCurveTo( eaux3[2][0], eaux3[2][1], eaux4[2][0], eaux4[2][1],  ear2[0][0], ear2[0][1] );
  context.fillStyle = '#FEC0FF';
  context.fill();
  context.stroke();

  context.beginPath();
  context.moveTo( 287, 141 );
  context.quadraticCurveTo(  300, 154, 319, 133 );
  context.stroke();
}

function drawHair() {
  context.beginPath();
  context.moveTo( hair[0][0], hair[0][1] );
  context.bezierCurveTo( haux1[0][0], haux1[0][1], haux2[0][0], haux2[0][1],  hair[1][0], hair[1][1] );
  context.bezierCurveTo( haux1[1][0], haux1[1][1], haux2[1][0], haux2[1][1],  hair[2][0], hair[2][1] );
  context.bezierCurveTo( haux1[2][0], haux1[2][1], haux2[2][0], haux2[2][1],  hair[3][0], hair[0][1] );
  context.bezierCurveTo( haux1[3][0], haux1[3][1], haux2[3][0], haux2[3][1],  hair[4][0], hair[4][1] );
  context.stroke();
}

function drawLeftEyebrow() {
  context.beginPath();
  context.moveTo( eyebrow1[0][0], eyebrow1[0][1] );
  context.bezierCurveTo( ebaux1[0][0], ebaux1[0][1], ebaux2[0][0], ebaux2[0][1],  eyebrow1[1][0], eyebrow1[1][1] );
  context.bezierCurveTo( ebaux1[1][0], ebaux1[1][1], ebaux2[1][0], ebaux2[1][1],  eyebrow1[0][0], eyebrow1[0][1] );
  context.fillStyle = '#150000';
  context.fill();
  context.stroke();
}

function drawRightEyebrow() {
  context.beginPath();
  context.moveTo( eyebrow2[0][0], eyebrow2[0][1] );
  context.bezierCurveTo( ebaux3[0][0], ebaux3[0][1], ebaux4[0][0], ebaux4[0][1], eyebrow2[1][0], eyebrow2[1][1] );
  context.bezierCurveTo( ebaux3[1][0], ebaux3[1][1], ebaux4[1][0], ebaux4[1][1], eyebrow2[0][0], eyebrow2[0][1] );
  context.fillStyle = '#150000';
  context.fill();
  context.stroke();
}

function drawAbdomen() {
  context.beginPath();
  context.moveTo( abdomen[0][0], abdomen[0][1] );
  context.bezierCurveTo( aaux1[0][0], aaux1[0][1], aaux2[0][0], aaux2[0][1], abdomen[1][0], abdomen[1][1] );
  context.bezierCurveTo( aaux1[1][0], aaux1[1][1], aaux2[1][0], aaux2[1][1], abdomen[2][0], abdomen[2][1] );
  context.bezierCurveTo( aaux1[2][0], aaux1[2][1], aaux2[2][0], aaux2[2][1], abdomen[3][0], abdomen[3][1] );
  context.bezierCurveTo( aaux1[3][0], aaux1[3][1], aaux2[3][0], aaux2[3][1], abdomen[4][0], abdomen[4][1] );
  context.bezierCurveTo( aaux1[4][0], aaux1[4][1], aaux2[4][0], aaux2[4][1], abdomen[0][0], abdomen[0][1] );
  context.fillStyle = '#FFCF6B';
  context.fill();
  context.stroke();
}

function drawP() {
  context.beginPath();
  context.moveTo( p[0][0], p[0][1] );
  context.bezierCurveTo( paux1[0][0], paux1[0][1], paux2[0][0], paux2[0][1], p[1][0], p[1][1] );
  context.bezierCurveTo( paux1[1][0], paux1[1][1], paux2[1][0], paux2[1][1], p[2][0], p[2][1] );
  context.bezierCurveTo( paux1[2][0], paux1[2][1], paux2[2][0], paux2[2][1], p[3][0], p[3][1] );
  context.bezierCurveTo( paux1[3][0], paux1[3][1], paux2[3][0], paux2[3][1], p[4][0], p[4][1] );
  context.bezierCurveTo( aaux2[4][0], aaux2[4][1], aaux1[4][0], aaux1[4][1], abdomen[4][0], abdomen[4][1] );
  context.bezierCurveTo( aaux2[3][0], aaux2[3][1], aaux1[3][0], aaux1[3][1], abdomen[3][0], abdomen[3][1] );
  context.bezierCurveTo( aaux2[2][0], aaux2[2][1], aaux1[2][0], aaux1[2][1], p[0][0], p[0][1] );
  context.fillStyle = '#FE0000';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo( p[2][0], p[2][1] );
  context.quadraticCurveTo( 203, 266, abdomen[3][0], abdomen[3][1] );
  context.moveTo( p[3][0], p[3][1] );
  context.quadraticCurveTo( 188, 270, abdomen[4][0], abdomen[4][1] );
  context.moveTo( 191, 277 );
  context.quadraticCurveTo(  186, 265, 175, 266 );
  context.moveTo( 206, 274 );
  context.quadraticCurveTo(  210, 265, 225, 265 );
  context.stroke();
}

function drawLO() {
  context.beginPath();
  context.moveTo( 127, 187 );
  context.quadraticCurveTo( 191, 175, 152, 224 );
  context.fillStyle = '#CF8E00';
  context.fill();
  context.stroke();
}

function drawRO() {
  context.beginPath();
  context.moveTo( 240, 227 );
  context.quadraticCurveTo( 200, 187, 259, 181 );
  context.fillStyle = '#CF8E00';
  context.fill();
  context.stroke();
}

function drawMouth() {
  context.beginPath();
  context.moveTo( 183, 185 );
  context.bezierCurveTo( 150, 200, 150, 230, 196, 243 );
  context.bezierCurveTo( 230, 240, 250, 200, 212, 186 );
  context.quadraticCurveTo( 205, 200, 198, 200 );
  context.quadraticCurveTo( 185, 200, 183, 185 );
  context.fillStyle = '#F9C164';
  context.fill();
  context.stroke();

  context.beginPath();
  context.moveTo( 183, 185 );
  context.quadraticCurveTo( 185, 200, 198, 200 );
  context.quadraticCurveTo( 205, 200, 212, 186 );
  context.quadraticCurveTo( 198, 173, 183, 185 );
  context.fillStyle = '#040400';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo( 198, 200 );
  context.quadraticCurveTo(  200, 234, 224, 208 );
  context.moveTo( 198, 200 );
  context.quadraticCurveTo(  200, 234, 164, 208 );
  context.moveTo( 193, 230 );
  context.quadraticCurveTo(  203, 230, 204, 224 );
  context.stroke();
}

function drawLeftEye() {
  context.beginPath();
  context.moveTo( 146, 136 );
  context.bezierCurveTo( 130, 140, 120, 160, 137, 183 );
  context.bezierCurveTo( 130, 155, 165, 150, 164, 180 );
  context.bezierCurveTo( 180,  152, 160, 135, 146, 136 );
  context.fillStyle = '#FDFDFB';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo( 137, 183 );
  context.bezierCurveTo( 130, 155, 165, 150, 164, 180 );
  context.quadraticCurveTo( 148, 190, 137, 183 );
  context.fillStyle = '#060200';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc( 148, 169, 3, 0, 2 * Math.PI );
  context.fillStyle = '#FDFDFB';
  context.fill();
  context.stroke();
}

function drawRightEye() {
  context.beginPath();
  context.moveTo( 235, 138 );
  context.bezierCurveTo( 215, 140, 205, 165, 223, 180 );
  context.bezierCurveTo( 215, 146, 255, 156, 245, 180  );
  context.bezierCurveTo( 260,  168, 253, 140, 235, 138 );
  context.fillStyle = '#FDFDFB';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo( 223, 180 );
  context.bezierCurveTo( 215, 146, 255, 156, 245, 180  );
  context.quadraticCurveTo( 233, 190, 223, 180 );
  
  context.fillStyle = '#060200';
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc( 230, 167, 3, 0, 2 * Math.PI );
  context.fillStyle = '#FDFDFB';
  context.fill();
  context.stroke();
}

function drawMoustache() {
  context.beginPath();
  context.moveTo( 176, 202 );
  context.quadraticCurveTo(  164, 194, 143, 196 );
  context.moveTo( 171, 205 );
  context.quadraticCurveTo(  160, 204, 143, 212 );
  context.moveTo( 216, 198 );
  context.quadraticCurveTo(  225, 195, 256, 194 );
  context.moveTo( 218, 206 );
  context.quadraticCurveTo(  235, 204, 255, 210 );
  context.stroke();
}

function drawJerry() {
  drawSkin();
  drawHair();
  drawLeftEyebrow();
  drawRightEyebrow();
  drawAbdomen();
  drawP();
  drawMouth();
  drawLeftEye();
  drawRightEye();
  drawLO();
  drawRO();
  drawLeftEar();
  drawRightEar();
  drawMoustache();
}

