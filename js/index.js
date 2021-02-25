let input = [];
let inputLength = 1000;

function createList() {
    for (var i = 0; i < inputLength; i ++) {
        input.push(Math.floor(Math.random() * 1000));
    }
    sortList(input);
}

function sortList() {
    var swap;
    var x = input;
    do {
        swap = false;
        for (var i = 0; i < x.length - 1; i ++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    console.log(x);
}