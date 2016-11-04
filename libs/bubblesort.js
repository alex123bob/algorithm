'use strict';

var timer = require('./timer');

// bubble sort
Array.prototype.bubbleSort = function () {
    timer.record();
    var arr = this,
        tmp, // allocate one unit space for array element swapping.
        sorted; // indicate if all numbers are already sorted in this round
    for (var i = 0; i < arr.length; i++) {
        sorted = true; // assume it's true before we started.
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    timer.record();
}

module.exports = {};