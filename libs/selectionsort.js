'use strict';

var timer = require('./timer');

// selection sort.
Array.prototype.selectionSort = function (){
    console.log('====selection sort=====');
    timer.record();

    var arr = this,
        iMin,
        tmp;

    for (var i = 0; i < arr.length - 1; i++) {
        iMin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[iMin]) {
                iMin = j;
            }
        }
        // swap
        if (iMin != i) {
            tmp = arr[i];
            arr[i] = arr[iMin];
            arr[iMin] = tmp;
        }
    }

    timer.record();
}

Array.prototype.ss = Array.prototype.selectionSort;

module.exports = {};