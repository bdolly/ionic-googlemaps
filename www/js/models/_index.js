'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('app.models', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);