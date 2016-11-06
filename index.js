'use strict';

var rand = require('./libs/rand'),
    bs = require('./libs/bubblesort'),
    ss = require('./libs/selectionsort'),
    qs = require('./libs/quicksort'),
    hs = require('./libs/heapsort');

rand.setRange(0, 10000000);
rand.setNum(1000000);

var test = rand.generate();

// test.bs();
test.ss();
// test.qs(0, test.length - 1);
// test.hs();

// console.log(test);