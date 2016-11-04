'use strict';

var _range = [0, 1000], // [0, 1000)
    _num = 100;

var rand = {
    setRange: function (min, max) {
        return (min < max) ? (_range = [min, max]) : false;
    },
    setNum: function (num) {
        return Number.isInteger(num) ? (_num = num) : false;
    },
    generate: function () {
        var seeds = [],
            min = _range[0],
            max = _range[1];
        for (var i = 0; i < _num; i++) {
            seeds.push(Math.floor(min + (max - min) * Math.random()));
        }
        return seeds;
    }
}

module.exports = rand;