'use strict';

var rand = require('./libs/rand'),
    bs = require('./libs/bubblesort'),
    ss = require('./libs/selectionsort');

rand.setRange(0, 100000);
rand.setNum(100000);

var test = rand.generate();

// test.bs();
test.ss();

console.log(test);