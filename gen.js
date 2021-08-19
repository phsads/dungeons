function spawnVein(id, times, size) {
	while (times--) {
		var X = Math.floor(random.nextFloat()*map.length) 
	        var Y = Math.floor(random.nextFloat()*map.length)
		while (map[X][Y]<.32) {
                        X = Math.floor(random.nextFloat()*map.length) 
	                Y = Math.floor(random.nextFloat()*map.length)
		}
		var x = -size
		while (x<=size) {
			var y = -size
			while (y<=size) {
				var chance = Math.sqrt(x**2+y**2)/size
				var x2 = Math.max(Math.min(map.length-1,x+X),0)
				var y2 = Math.max(Math.min(map.length-1,y+Y),0)
				if (chance<(random.nextFloat())&&map[x2][y2]>.32&&random.nextFloat()<.1) {
					objectMap[x2][y2] = [id, objectHP[id], objectHP[id], {}, 0]
				}
				y++
			}
			x++
		}
	}
}
function random2(a) { //random function
    var r=[seed],h=0
    while (h<70) {
        h++
        r[h] = ( (a**1.1+seed**0.7-7*a+21)*r[h-1] )%1
    }
    return r[70]
}
function RNG(seed) {
  // LCG using GCC's constants
  this.m = random2(seed)*(2**31)+1024
  this.a = random2(seed)*(2**15)+128
  this.c = random2(seed)*(2**12)+64

  this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
  this.nextInt = function() {
  this.state = (this.a * this.state + this.c) % this.m;
  return this.state;
  }
  this.nextFloat = function() {
  // returns in range [0,1]
  return this.nextInt() / (this.m - 1);
}
  this.nextRange = function(start, end) {
  // returns in range [start, end): including start, excluding end
  // can't modulu nextInt because of weak randomness in lower bits
  var rangeSize = end - start;
  var randomUnder1 = this.nextInt() / this.m;
  return start + Math.floor(randomUnder1 * rangeSize);
}
  this.choice = function(array) {
  return array[this.nextRange(0, array.length)];
  }
} 
function maps() {
	addMaps()
	times++
	avgMap()
    //heatMaps() //update heatmaps
        if (times>maxTimes){addMaps();clearInterval(intv);normalize()}
}
function addMaps() {
        var y1=-1
	while(++y1<height) {
                var x1=-1
		while(++x1<width) {
			var n=0
			while (n++<avg) {
                                map[y1][x1] += random.nextFloat()-0.5 //add a random value
			}
			max=Math.max(map[y1][x1],max);min=Math.min(map[y1][x1],min) //change the min max
		}
	}  
}
function avgMap() {
	var tempMap = map.map(copy)
        var i=-1
                while (++i<height) {
                        var j=-1
                        while (++j<width) {
                                var neigh=[],k=-1
                                while (k<=1) {
                                        var l=-1
                                        while (l<=1) {
			                        var aby = k+i
			                        var abx = l+j
                                                if (aby<height&&abx<width&&aby>-1&&abx>-1) {
                                                        neigh.push(map[aby][abx])
			                        }
                                                l++
                                        }
                                        k++
                                }
                                tempMap[i][j] = neigh.reduce((a,b) => a+b)/(neigh.length**(1-times/50))
                        }
                } //avg things out
        map = tempMap
}
function heatMaps() {
    var y2=0
    while (y2<height) {
        var x2=0
        while (x2<width) {
            heatMap[y2][x2] += random.nextFloat()-0.5 //same as height maps
            heatMax=Math.max(heatMap[y2][x2],heatMax);heatMin=Math.min(heatMap[y2][x2],heatMin)
            x2++
        }
        y2++
    }
    if(times%avg==0) {
        var tempHMap = heatMap.map(copy) //we copy the map and not make referecne senbfugeidfbhg
        var u,v
        for (u in heatMap) {
            for (v in heatMap[u]) {
                var neigh=[],w=-1
                while (w<=1) {
                    var x=-1
                    while (x<=1) {
			var aay = w+(u*1)
			var aax = x+(v*1)
                        if (aay<height&&aax<width&&aay>-1&&aax>-1) {
                                neigh.push(heatMap[aay][aax])
			}
                        x++
                    }
                    w++
                }
                var red = (a,b) => a+b
                tempHMap[u][v] = neigh.reduce(red)/(neigh.length**(1-times/200))
            }
        }
        heatMap = tempHMap 
    }
}
function scaleConcat(array, factor) {
	let scaled = [];
	for(const row of array) {
		let x = [];
		for(const item of row)x = x.concat(Array(factor).fill(item))
		scaled = scaled.concat(Array(factor).fill(x))
	}
        return scaled.map(copy)
}
function normalize() {
        var y,z
        var i,j
	var pow = new RNG(seed+3).nextFloat()*.5+.8
	var halfMap = map.length/2
	var quarterMap = map.length/4
	for (y in map) {
                for (z in map[y]) {
                        map[y][z] = (map[y][z]-min)/(max-min)
			var mult = 1 - (Math.max(Math.abs(y-halfMap),Math.abs(z-halfMap),quarterMap)-quarterMap)/quarterMap
			map[y][z] *= mult
			map[y][z] = map[y][z] ** pow
                }
        } //fuck efficiency
	min = Infinity,max=-Infinity
	map = scaleConcat(map, 4)
	var tempMap = map.map(copy)
	for (i in map) {
                for (j in map[i]) {
                        var neigh=[],k=-1
                        while (k<=1) {
                                var l=-1
                                while (l<=1) {
			                var aby = k+(i*1)
			                var abx = l+(j*1)
                                        if (aby<map.length&&abx<map.length&&aby>-1&&abx>-1) {
                                                neigh.push(map[aby][abx])
			                }
                                        l++
                                }
                                k++
                        }
                        tempMap[i][j] = neigh.reduce((a,b) => a+b)/neigh.length
                        min = Math.min(tempMap[i][j],min) ; max = Math.max(tempMap[i][j],max)
                }
        } //avg things out 
        map = tempMap.map(copy)       
	for (y in map){for (z in map){map[y][z]=(map[y][z]-min)/(max-min)}}       
	map = scaleConcat(map, 2)
	player.pos[0] = Math.round(random.nextFloat()*(map.length-2))
        player.pos[1] = Math.round(random.nextFloat()*(map[0].length-2))
        while (map[player.pos[0]][player.pos[1]]<0.3) {
	        player.pos[0] = Math.floor(random.nextFloat()*(map.length-2))
	        player.pos[1] = Math.floor(random.nextFloat()*(map[0].length-2))
        }
	objectMap = JSON.parse(JSON.stringify(Array(map.length).fill(Array(map[0].length).fill([0,0,0,{},0]))))  
	brightnessMap = map.map(copy)
	//[0] = id, [1] = hp, [2] = mhp, [3] = extra info      
	spawnVein(1 ,200,35) //balsa forest
	spawnVein(2 ,800,7) //stone thingy
	spawnVein(3 ,800,7) //iron
	spawnVein(4 ,200,30) //maple forest
	spawnVein(5 ,700,6) //platinum
	spawnVein(6 ,200,25) //birch forest
	spawnVein(7 ,600,4) //titan
	spawnVein(8 ,200,20) //pine
	spawnVein(9 ,500,3) //uni
	/*terrainGradient = ctx.createLinearGradient(0,0,1000,0)
	terrainGradient.addColorStop(.1 ,"hsl(192, 100%, 15%)")
	terrainGradient.addColorStop(.2 ,"hsl(192, 100%, 30%)")
	terrainGradient.addColorStop(.3 ,"hsl(192, 100%, 50%)")
	terrainGradient.addColorStop(.4 ,"hsl(62 , 100%, 45%)")
	terrainGradient.addColorStop(.62,"hsl(120, 100%, 30%)")
	terrainGradient.addColorStop(.71,"hsl(120 ,100%, 15%)")
	terrainGradient.addColorStop(.75,"hsl(30 ,   0%, 40%)")
	terrainGradient.addColorStop(1  ,"hsl(0  ,   0%, 90%)")
	document.getElementById("canvas2").getContext("2d").fillStyle = terrainGradient
	document.getElementById("canvas2").getContext("2d").fillRect(0,0,1000,1)*/
        setInterval(update,20)       
}
var copy = a => {return a.slice(0)}