'use strict';

var timer = require('./timer');

// partition operation
function partition(arr, low, high) {
    var i = low,
        j = high,
        pivot = arr[i];
    while (i < j) {
        while (i < j && arr[j] >= pivot) {
            j--;
        }
        if (i < j) {
            arr[i++] = arr[j];
        }
        while (i < j && arr[i] < pivot) {
            i++;
        }
        if (i < j) {
            arr[j--] = arr[i];
        }
    }
    arr[i] = pivot;
    return i;
}

function quickSort(arr, low, high) {
    if (low < high) {
        var i = partition(arr, low, high);
        // left
        quickSort(arr, low, i - 1);
        // right
        quickSort(arr, i + 1, high);
    }
}

Array.prototype.qs = Array.prototype.quickSort = function () {
    console.log('====quick sort=====');
    timer.record();
    quickSort(this, 0, this.length - 1);
    timer.record();
};

module.exports = {};