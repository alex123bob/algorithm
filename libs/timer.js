'use strict';

var _stack = [];

var timer = {
    record: function () {
        if (_stack.length === 0) {
            _stack.push(Date.now())
            console.log('start: ' + _stack[0]);
        }
        else {
            var end = Date.now();
            console.log('end: ' + end + '\nduration: ' + (end - _stack.pop()) / 1000 + ' s.');
        }
    }
}

module.exports = timer;