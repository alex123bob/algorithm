'use strict';

var rand = require('./libs/rand'),
    timer = require('./libs/timer'),
    bblsrt = require('./libs/bubblesort');

rand.setRange(0, 10000);
rand.setNum(10);

var test = rand.generate();

test.bubbleSort();

console.log(test);