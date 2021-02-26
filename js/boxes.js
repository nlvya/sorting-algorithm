var max = 300;
var min = 100;
var numOfBoxes = 10;
var heights = [];
var IDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var waitTime = 0;
var defaultColor = "darkred";
var highlightedColor = "red";

function start() {
    function getRandomHeight() {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < numOfBoxes; i ++) {
        heights[i] = getRandomHeight();
        document.getElementById(IDs[i]).style.height = heights[i] + "px";
    }
}
const timer = ms => new Promise(res => setTimeout(res, ms)) //creates a function to delay each iteration of the movements
async function sortBoxes() {
    var swap;
    var x = heights;
    do {
        swap = false;
        for (var i = 0; i < x.length - 1; i ++) {
            await timer(waitTime);
            for (var j = 0; j < x.length; j ++) {
                document.getElementById(IDs[j]).style.background = defaultColor;
            }
            document.getElementById(IDs[i]).style.background = highlightedColor;
            document.getElementById(IDs[i + 1]).style.background = highlightedColor;
            await timer(waitTime);
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                document.getElementById(IDs[i]).style.height = x[i + 1] + "px";
                x[i + 1] = temp;
                document.getElementById(IDs[i + 1]).style.height = temp + "px";
                swap = true;
            }
            if (swap == false) {
                for (var j = 0; j < x.length; j ++) {
                    document.getElementById(IDs[j]).style.background = defaultColor;
                }
            }
        }
    } while (swap);
    for (var i = 0; i < numOfBoxes; i ++) {
    }
}
start();