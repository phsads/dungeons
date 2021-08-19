function overflowRange(min, max, n) {
   var size = max-min+1
   if (n>max) return min+(n-max)%size
   else if (n<min) return max+(n-min)%size
   else return n 
}
function repeatFunc(func,times){while(times--){func()}}
function Load() { //creates the map on load 
        tempdiffMult = prompt("Difficulty?\n1. Easy\n2. Medium\n3. Hard\n4. Elite Gamer")
	tempseed = prompt("Seed? (from 0 to 16777216)")
        diffMult = 1
	switch (tempdiffMult) {
		case "1": diffMult=1;break;
		case "2": diffMult=2;break;
		case "3": diffMult=3;break;
		case "4": diffMult=4;break;
	}
	if (seed==null||seed==""||seed>=0&&seed<=16777216){seed = Math.round(Math.random()*2**24)}else{seed*=1}
        map = Array(height).fill(Array(width).fill(0)).map(copy)
	random = new RNG(seed)
	random3 = new RNG(2**24-seed)
        ctx.textBaseline = "middle"
        intv = setInterval(maps,20) //useless
}
function wrapText(text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                        ctx.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                } else {
                        line = testLine;
                }
        }
        ctx.fillText(line, x, y);
}
document.body.onmousedown = function(evt) { 
  mouseDown[evt.button] = 1;
}
canvas.oncontextmenu = function(e) { e.preventDefault(); e.stopPropagation(); }
document.body.onmouseup = function(evt) {
  mouseDown[evt.button] = 0;
}
function get2DistToCircle(x1,y1,x2,y2,r1,r2) {return (x1-x2)**2+(y1-y2)**2-(r1+r2)**2}
function circleCollision(x1,y1,r1,x2,y2,r2) {return get2DistToCircle(x1,y1,x2,y2,r1,r2)<=0}
function weighted_random(a) {
	//a = {"2":weight}
	var b,c=0,d
	for (b in a) {
                c += a[b]
	}
	d = Math.random()*c
	for (b in a) {
		if (d < a[b]) {
			return b
		}
		d -= a[b]
	}
}
function anti_weighted_random(a) {
        for (let n in a) {
                a[n] = 1/a[n]
        }
        return weighted_random(a)
}
function getMousePos(event) {
    var rect = canvas.getBoundingClientRect();
    mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
} //stolem code boo boo boo boo boo boo
function randomRange(min, max) {return Math.random()*(max-min)+min}
function lerp(a,b,t) {
	t = Math.max(Math.min(1,t),0)
        return t*(b-a)+a
}
function loglerp(a,b,t) {return Math.E**lerp(Math.log(a),Math.log(b),t)}
var keyPressed = {}
window.onkeyup   = function (e) {keyPressed[e.key.toLowerCase()] = false}
window.onkeydown = function (e) {keyPressed[e.key.toLowerCase()] = true }
function updateClick() {
	click[0] = click[1] != mouseDown[0] && mouseDown[0]==1
	click[1] = mouseDown[0]
}