'use strict';

var rand = require('./libs/rand'),
    bs = require('./libs/bubblesort'),
    ss = require('./libs/selectionsort'),
    qs = require('./libs/quicksort');

rand.setRange(0, 10000);
rand.setNum(100);

var test = rand.generate();

// test.bs();
// test.ss();
test.qs(0, test.length - 1);

console.log(test);