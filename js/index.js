var maxHeight;
var minHeight;
var heights = [];
var rectWidth;
var gap;
var minGap = 2;
var rects;
var waitTime;
var x;
var stop = false;
var scaleX = 0.8;
var scaleY = 0.5;

function setup() {
    heights = [];
    x = heights;

    if (windowWidth <= 768) {
        scaleY = 0.8;
    }
    
    maxHeight = ((scaleY * windowHeight) - 20);
    minHeight = (.05 * windowHeight);

    createCanvas(scaleX * windowWidth, scaleY * windowHeight);
    
    background("gray");
    noStroke();

    rects = document.getElementById("slider").value; //number of rectangle to draw
    document.getElementById("value").innerHTML = rects;
    rectWidth = (((scaleX * windowWidth) / (rects)) - minGap); //with of each rectangle
    gap = ((scaleX *windowWidth) - (rectWidth * rects)) / (rects - 1);
    waitTime = 50;

    fill("darkred");
    for (var i = 0; i < rects; i ++) {
        heights.push(getRandomHeight());
        rect((rectWidth * i) + (gap * i),scaleY * windowHeight,rectWidth,-heights[i]);
    }
}

function reset() {
    stop = true;
    heights = [];
    x = heights;
    setup();
}

const timer = ms => new Promise(res => setTimeout(res, ms)) //creates a function to delay each iteration of the movements
async function bubbleSort() {
    stop = false;
    var swap;
    x = heights;
    do {
        swap = false;
        for (var i = 0; i < x.length - 1; i ++) {
            if (!stop) {
                changeHeight(i, x[i], "red");
                changeHeight(i + 1, x[i + 1], "red");
                await timer(waitTime);
                if (x[i] < x[i + 1]) {
                    var temp = x[i];
                    x[i] = x[i + 1];
                    changeHeight(i, x[i + 1], "darkred")
                    x[i + 1] = temp;
                    changeHeight(i + 1, temp, "darkred")
                    swap = true;
                }
                changeHeight(i, x[i], "darkred");
                changeHeight(i + 1, x[i + 1], "darkred");
            }
        }
    } while (swap);
    if (!swap) {
        complete();
    }
}

function complete() {
    for (var i = 0; i < x.length; i ++) {
        changeHeight(i, x[i], "darkgreen")
    }
}

function changeHeight(r, height, color) {
    fill("gray");
    rect((rectWidth * r) + ((gap * r) - 2), scaleY * windowHeight, rectWidth + 4, -maxHeight)
    fill(color);
    rect((rectWidth * r) + (gap * r), scaleY * windowHeight, rectWidth, -height)
}

function getRandomHeight() {
    return Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
}