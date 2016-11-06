'use strict';

var timer = require('./timer');

// from i to n(length of arr), we are gonna sift through the complete binary tree.
// presume that except i, others already formed a complete binary tree.
function siftDown(arr, i, n) {
    var tmp = arr[i]; // temporarily store variable, for future exchange when loop is over.
    for (var j = i * 2 + 1; j <= n; j = j * 2 + 1) {
        if (j <= n && j + 1 <= n && arr[j] < arr[j + 1]) {
            ++j;
        }
        if (tmp > arr[j]) {
            break;
        }
        else {
            arr[i] = arr[j];
            i = j;
        }
    }
    arr[i] = tmp;
}

// heap sort is based on complete binary tree
// for the definition of complete binary tree and its corresponding features, 
// please Google by yourself.
Array.prototype.heapSort = function () {
    console.log('======heap sort=======');
    timer.record();
    var arr = this,
        n = arr.length,
        swapVariable;

    for (var i = Math.floor((n - 2) / 2); i >= 0; i--) {
        siftDown(arr, i, n - 1);
    }

    for (i = n - 1; i > 0; i--) {
        swapVariable = arr[i];
        arr[i] = arr[0];
        arr[0] = swapVariable;

        siftDown(arr, 0, i - 1);
    }
    timer.record();
}

Array.prototype.hs = Array.prototype.heapSort;

module.exports = {};