(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/lib/_empty.js":[function(require,module,exports){

},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/assert/assert.js":[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/util/util.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/path-browserify/index.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))

},{"_process":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/process/browser.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/util/support/isBufferBrowser.js","_process":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/process/browser.js","inherits":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/index.js":[function(require,module,exports){
var glob = require('glob');
var path = require('path');

module.exports = function (root, globs, opts) {
    if (typeof globs === 'string') globs = [ globs ];
    if (!Array.isArray(globs)) return {};
    if (!opts) opts = {};
    var requireFn = opts.require || require;
    
    var xglobs = globs.map(function (g) {
        if (Array.isArray(g)) {
            return [ path.resolve(root, g[0]) ].concat(g.slice(1));
        }
        return path.resolve(root, g)
    });
    
    return walk(xglobs.reduce(function (acc, g) {
        var args = [];
        if (Array.isArray(g)) {
            args = g.slice(1);
            g = g[0];
        }
        var ex = glob.sync(g);
        
        ex.forEach(function (file) {
            var keys = keyOf(file);
            for (var node = acc, i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (i === keys.length - 1) {
                    if (!node[key]) node[key] = [ file ];
                    node[key].push.apply(node[key], args);
                }
                else {
                    if (!node[key]) node[key] = {};
                    node = node[key];
                }
            }
        });
        return acc;
    }, {}));
    
    function walk (node) {
        if (Array.isArray(node)) {
            var exp = requireFn(node[0]);
            var args = node.slice(1);
            if (args.length === 0) return exp;
            var mapF = function (f) {
                if (typeof f !== 'function') return f;
                return function () {
                    var args_ = args.concat([].slice.call(arguments));
                    return f.apply(this, args_);
                };
            };
            
            if (typeof exp === 'function') {
                return mapF(exp);
            }
            else if (Array.isArray(exp)) {
                return exp.map(mapF);
            }
            else if (exp && typeof exp === 'object') {
                return Object.keys(exp).reduce(function (acc, key) {
                    acc[key] = mapF(exp[key]);
                    return acc;
                }, {});
            }
            else return exp;
        }
        else if (typeof node === 'object') {
            var init = node.index && typeof node.index[0] === 'string'
                && requireFn(node.index[0]);
            
            return Object.keys(node).reduce(function (acc, key) {
                acc[key] = walk(node[key]);
                return acc;
            }, init && typeof init === 'function' ? init : {});
        }
    }
    
    function keyOf (file) {
        var parts = path.relative(root, file).split(/\/|\\/);
        var len = parts.length;
        if (len) parts[len-1] = parts[len-1].replace(/\.[^.]*$/, '');
        return parts;
    }
};

},{"glob":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/glob.js","path":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/path-browserify/index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/glob.js":[function(require,module,exports){
(function (process){
// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
// readdir(PREFIX) as ENTRIES
//   If fails, END
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $])
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $])
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.



module.exports = glob

var fs = require("fs")
, minimatch = require("minimatch")
, Minimatch = minimatch.Minimatch
, inherits = require("inherits")
, EE = require("events").EventEmitter
, path = require("path")
, isDir = {}
, assert = require("assert").ok

function glob (pattern, options, cb) {
  if (typeof options === "function") cb = options, options = {}
  if (!options) options = {}

  if (typeof options === "number") {
    deprecated()
    return
  }

  var g = new Glob(pattern, options, cb)
  return g.sync ? g.found : g
}

glob.fnmatch = deprecated

function deprecated () {
  throw new Error("glob's interface has changed. Please see the docs.")
}

glob.sync = globSync
function globSync (pattern, options) {
  if (typeof options === "number") {
    deprecated()
    return
  }

  options = options || {}
  options.sync = true
  return glob(pattern, options)
}

this._processingEmitQueue = false

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (!(this instanceof Glob)) {
    return new Glob(pattern, options, cb)
  }

  if (typeof options === "function") {
    cb = options
    options = null
  }

  if (typeof cb === "function") {
    this.on("error", cb)
    this.on("end", function (matches) {
      cb(null, matches)
    })
  }

  options = options || {}

  this._endEmitted = false
  this.EOF = {}
  this._emitQueue = []

  this.paused = false
  this._processingEmitQueue = false

  this.maxDepth = options.maxDepth || 1000
  this.maxLength = options.maxLength || Infinity
  this.cache = options.cache || {}
  this.statCache = options.statCache || {}

  this.changedCwd = false
  var cwd = process.cwd()
  if (!options.hasOwnProperty("cwd")) this.cwd = cwd
  else {
    this.cwd = options.cwd
    this.changedCwd = path.resolve(options.cwd) !== cwd
  }

  this.root = options.root || path.resolve(this.cwd, "/")
  this.root = path.resolve(this.root)
  if (process.platform === "win32")
    this.root = this.root.replace(/\\/g, "/")

  this.nomount = !!options.nomount

  if (!pattern) {
    throw new Error("must provide pattern")
  }

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  this.strict = options.strict !== false
  this.dot = !!options.dot
  this.mark = !!options.mark
  this.sync = !!options.sync
  this.nounique = !!options.nounique
  this.nonull = !!options.nonull
  this.nosort = !!options.nosort
  this.nocase = !!options.nocase
  this.stat = !!options.stat

  this.debug = !!options.debug || !!options.globDebug
  if (this.debug)
    this.log = console.error

  this.silent = !!options.silent

  var mm = this.minimatch = new Minimatch(pattern, options)
  this.options = mm.options
  pattern = this.pattern = mm.pattern

  this.error = null
  this.aborted = false

  // list of all the patterns that ** has resolved do, so
  // we can avoid visiting multiple times.
  this._globstars = {}

  EE.call(this)

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  this.minimatch.set.forEach(iterator.bind(this))
  function iterator (pattern, i, set) {
    this._process(pattern, 0, i, function (er) {
      if (er) this.emit("error", er)
      if (-- n <= 0) this._finish()
    })
  }
}

Glob.prototype.log = function () {}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)

  var nou = this.nounique
  , all = nou ? [] : {}

  for (var i = 0, l = this.matches.length; i < l; i ++) {
    var matches = this.matches[i]
    this.log("matches[%d] =", i, matches)
    // do like the shell, and spit out the literal glob
    if (!matches) {
      if (this.nonull) {
        var literal = this.minimatch.globSet[i]
        if (nou) all.push(literal)
        else all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou) all.push.apply(all, m)
      else m.forEach(function (m) {
        all[m] = true
      })
    }
  }

  if (!nou) all = Object.keys(all)

  if (!this.nosort) {
    all = all.sort(this.nocase ? alphasorti : alphasort)
  }

  if (this.mark) {
    // at *some* point we statted all of these
    all = all.map(this._mark, this)
  }

  this.log("emitting end", all)

  this.EOF = this.found = all
  this.emitMatch(this.EOF)
}

function alphasorti (a, b) {
  a = a.toLowerCase()
  b = b.toLowerCase()
  return alphasort(a, b)
}

function alphasort (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

Glob.prototype._mark = function (p) {
  var c = this.cache[p]
  var m = p
  if (c) {
    var isDir = c === 2 || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      this.statCache[m] = this.statCache[p]
      this.cache[m] = this.cache[p]
    }
  }

  return m
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit("abort")
}

Glob.prototype.pause = function () {
  if (this.paused) return
  if (this.sync)
    this.emit("error", new Error("Can't pause/resume sync glob"))
  this.paused = true
  this.emit("pause")
}

Glob.prototype.resume = function () {
  if (!this.paused) return
  if (this.sync)
    this.emit("error", new Error("Can't pause/resume sync glob"))
  this.paused = false
  this.emit("resume")
  this._processEmitQueue()
  //process.nextTick(this.emit.bind(this, "resume"))
}

Glob.prototype.emitMatch = function (m) {
  this.log('emitMatch', m)
  this._emitQueue.push(m)
  this._processEmitQueue()
}

Glob.prototype._processEmitQueue = function (m) {
  this.log("pEQ paused=%j processing=%j m=%j", this.paused,
           this._processingEmitQueue, m)
  var done = false
  while (!this._processingEmitQueue &&
         !this.paused) {
    this._processingEmitQueue = true
    var m = this._emitQueue.shift()
    this.log(">processEmitQueue", m === this.EOF ? ":EOF:" : m)
    if (!m) {
      this.log(">processEmitQueue, falsey m")
      this._processingEmitQueue = false
      break
    }

    if (m === this.EOF || !(this.mark && !this.stat)) {
      this.log("peq: unmarked, or eof")
      next.call(this, 0, false)
    } else if (this.statCache[m]) {
      var sc = this.statCache[m]
      var exists
      if (sc)
        exists = sc.isDirectory() ? 2 : 1
      this.log("peq: stat cached")
      next.call(this, exists, exists === 2)
    } else {
      this.log("peq: _stat, then next")
      this._stat(m, next)
    }

    function next(exists, isDir) {
      this.log("next", m, exists, isDir)
      var ev = m === this.EOF ? "end" : "match"

      // "end" can only happen once.
      assert(!this._endEmitted)
      if (ev === "end")
        this._endEmitted = true

      if (exists) {
        // Doesn't mean it necessarily doesn't exist, it's possible
        // we just didn't check because we don't care that much, or
        // this is EOF anyway.
        if (isDir && !m.match(/\/$/)) {
          m = m + "/"
        } else if (!isDir && m.match(/\/$/)) {
          m = m.replace(/\/+$/, "")
        }
      }
      this.log("emit", ev, m)
      this.emit(ev, m)
      this._processingEmitQueue = false
      if (done && m !== this.EOF && !this.paused)
        this._processEmitQueue()
    }
  }
  done = true
}

Glob.prototype._process = function (pattern, depth, index, cb_) {
  assert(this instanceof Glob)

  var cb = function cb (er, res) {
    assert(this instanceof Glob)
    if (this.paused) {
      if (!this._processQueue) {
        this._processQueue = []
        this.once("resume", function () {
          var q = this._processQueue
          this._processQueue = null
          q.forEach(function (cb) { cb() })
        })
      }
      this._processQueue.push(cb_.bind(this, er, res))
    } else {
      cb_.call(this, er, res)
    }
  }.bind(this)

  if (this.aborted) return cb()

  if (depth > this.maxDepth) return cb()

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === "string") {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      prefix = pattern.join("/")
      this._stat(prefix, function (exists, isDir) {
        // either it's there, or it isn't.
        // nothing more to do, either way.
        if (exists) {
          if (prefix && isAbsolute(prefix) && !this.nomount) {
            if (prefix.charAt(0) === "/") {
              prefix = path.join(this.root, prefix)
            } else {
              prefix = path.resolve(this.root, prefix)
            }
          }

          if (process.platform === "win32")
            prefix = prefix.replace(/\\/g, "/")

          this.matches[index] = this.matches[index] || {}
          this.matches[index][prefix] = true
          this.emitMatch(prefix)
        }
        return cb()
      })
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's "absolute" like /foo/bar,
      // or "relative" like "../baz"
      prefix = pattern.slice(0, n)
      prefix = prefix.join("/")
      break
  }

  // get the list of entries.
  var read
  if (prefix === null) read = "."
  else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
    if (!prefix || !isAbsolute(prefix)) {
      prefix = path.join("/", prefix)
    }
    read = prefix = path.resolve(prefix)

    // if (process.platform === "win32")
    //   read = prefix = prefix.replace(/^[a-zA-Z]:|\\/g, "/")

    this.log('absolute: ', prefix, this.root, pattern, read)
  } else {
    read = prefix
  }

  this.log('readdir(%j)', read, this.cwd, this.root)

  return this._readdir(read, function (er, entries) {
    if (er) {
      // not a directory!
      // this means that, whatever else comes after this, it can never match
      return cb()
    }

    // globstar is special
    if (pattern[n] === minimatch.GLOBSTAR) {
      // test without the globstar, and with every child both below
      // and replacing the globstar.
      var s = [ pattern.slice(0, n).concat(pattern.slice(n + 1)) ]
      entries.forEach(function (e) {
        if (e.charAt(0) === "." && !this.dot) return
        // instead of the globstar
        s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1)))
        // below the globstar
        s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n)))
      }, this)

      s = s.filter(function (pattern) {
        var key = gsKey(pattern)
        var seen = !this._globstars[key]
        this._globstars[key] = true
        return seen
      }, this)

      if (!s.length)
        return cb()

      // now asyncForEach over this
      var l = s.length
      , errState = null
      s.forEach(function (gsPattern) {
        this._process(gsPattern, depth + 1, index, function (er) {
          if (errState) return
          if (er) return cb(errState = er)
          if (--l <= 0) return cb()
        })
      }, this)

      return
    }

    // not a globstar
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = pattern[n]
    var rawGlob = pattern[n]._glob
    , dotOk = this.dot || rawGlob.charAt(0) === "."

    entries = entries.filter(function (e) {
      return (e.charAt(0) !== "." || dotOk) &&
             e.match(pattern[n])
    })

    // If n === pattern.length - 1, then there's no need for the extra stat
    // *unless* the user has specified "mark" or "stat" explicitly.
    // We know that they exist, since the readdir returned them.
    if (n === pattern.length - 1 &&
        !this.mark &&
        !this.stat) {
      entries.forEach(function (e) {
        if (prefix) {
          if (prefix !== "/") e = prefix + "/" + e
          else e = prefix + e
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path.join(this.root, e)
        }

        if (process.platform === "win32")
          e = e.replace(/\\/g, "/")

        this.matches[index] = this.matches[index] || {}
        this.matches[index][e] = true
        this.emitMatch(e)
      }, this)
      return cb.call(this)
    }


    // now test all the remaining entries as stand-ins for that part
    // of the pattern.
    var l = entries.length
    , errState = null
    if (l === 0) return cb() // no matches possible
    entries.forEach(function (e) {
      var p = pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1))
      this._process(p, depth + 1, index, function (er) {
        if (errState) return
        if (er) return cb(errState = er)
        if (--l === 0) return cb.call(this)
      })
    }, this)
  })

}

function gsKey (pattern) {
  return '**' + pattern.map(function (p) {
    return (p === minimatch.GLOBSTAR) ? '**' : (''+p)
  }).join('/')
}

Glob.prototype._stat = function (f, cb) {
  assert(this instanceof Glob)
  var abs = f
  if (f.charAt(0) === "/") {
    abs = path.join(this.root, f)
  } else if (this.changedCwd) {
    abs = path.resolve(this.cwd, f)
  }

  if (f.length > this.maxLength) {
    var er = new Error("Path name too long")
    er.code = "ENAMETOOLONG"
    er.path = f
    return this._afterStat(f, abs, cb, er)
  }

  this.log('stat', [this.cwd, f, '=', abs])

  if (!this.stat && this.cache.hasOwnProperty(f)) {
    var exists = this.cache[f]
    , isDir = exists && (Array.isArray(exists) || exists === 2)
    if (this.sync) return cb.call(this, !!exists, isDir)
    return process.nextTick(cb.bind(this, !!exists, isDir))
  }

  var stat = this.statCache[abs]
  if (this.sync || stat) {
    var er
    try {
      stat = fs.statSync(abs)
    } catch (e) {
      er = e
    }
    this._afterStat(f, abs, cb, er, stat)
  } else {
    fs.stat(abs, this._afterStat.bind(this, f, abs, cb))
  }
}

Glob.prototype._afterStat = function (f, abs, cb, er, stat) {
  var exists
  assert(this instanceof Glob)

  if (abs.slice(-1) === "/" && stat && !stat.isDirectory()) {
    this.log("should be ENOTDIR, fake it")

    er = new Error("ENOTDIR, not a directory '" + abs + "'")
    er.path = abs
    er.code = "ENOTDIR"
    stat = null
  }

  var emit = !this.statCache[abs]
  this.statCache[abs] = stat

  if (er || !stat) {
    exists = false
  } else {
    exists = stat.isDirectory() ? 2 : 1
    if (emit)
      this.emit('stat', f, stat)
  }
  this.cache[f] = this.cache[f] || exists
  cb.call(this, !!exists, exists === 2)
}

Glob.prototype._readdir = function (f, cb) {
  assert(this instanceof Glob)
  var abs = f
  if (f.charAt(0) === "/") {
    abs = path.join(this.root, f)
  } else if (isAbsolute(f)) {
    abs = f
  } else if (this.changedCwd) {
    abs = path.resolve(this.cwd, f)
  }

  if (f.length > this.maxLength) {
    var er = new Error("Path name too long")
    er.code = "ENAMETOOLONG"
    er.path = f
    return this._afterReaddir(f, abs, cb, er)
  }

  this.log('readdir', [this.cwd, f, abs])
  if (this.cache.hasOwnProperty(f)) {
    var c = this.cache[f]
    if (Array.isArray(c)) {
      if (this.sync) return cb.call(this, null, c)
      return process.nextTick(cb.bind(this, null, c))
    }

    if (!c || c === 1) {
      // either ENOENT or ENOTDIR
      var code = c ? "ENOTDIR" : "ENOENT"
      , er = new Error((c ? "Not a directory" : "Not found") + ": " + f)
      er.path = f
      er.code = code
      this.log(f, er)
      if (this.sync) return cb.call(this, er)
      return process.nextTick(cb.bind(this, er))
    }

    // at this point, c === 2, meaning it's a dir, but we haven't
    // had to read it yet, or c === true, meaning it's *something*
    // but we don't have any idea what.  Need to read it, either way.
  }

  if (this.sync) {
    var er, entries
    try {
      entries = fs.readdirSync(abs)
    } catch (e) {
      er = e
    }
    return this._afterReaddir(f, abs, cb, er, entries)
  }

  fs.readdir(abs, this._afterReaddir.bind(this, f, abs, cb))
}

Glob.prototype._afterReaddir = function (f, abs, cb, er, entries) {
  assert(this instanceof Glob)
  if (entries && !er) {
    this.cache[f] = entries
    // if we haven't asked to stat everything for suresies, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.  This also gets us one step
    // further into ELOOP territory.
    if (!this.mark && !this.stat) {
      entries.forEach(function (e) {
        if (f === "/") e = f + e
        else e = f + "/" + e
        this.cache[e] = true
      }, this)
    }

    return cb.call(this, er, entries)
  }

  // now handle errors, and cache the information
  if (er) switch (er.code) {
    case "ENOTDIR": // totally normal. means it *does* exist.
      this.cache[f] = 1
      return cb.call(this, er)
    case "ENOENT": // not terribly unusual
    case "ELOOP":
    case "ENAMETOOLONG":
    case "UNKNOWN":
      this.cache[f] = false
      return cb.call(this, er)
    default: // some unusual error.  Treat as failure.
      this.cache[f] = false
      if (this.strict) this.emit("error", er)
      if (!this.silent) console.error("glob error", er)
      return cb.call(this, er)
  }
}

var isAbsolute = process.platform === "win32" ? absWin : absUnix

function absWin (p) {
  if (absUnix(p)) return true
  // pull off the device/UNC bit from a windows path.
  // from node's lib/path.js
  var splitDeviceRe =
      /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/
    , result = splitDeviceRe.exec(p)
    , device = result[1] || ''
    , isUnc = device && device.charAt(1) !== ':'
    , isAbsolute = !!result[2] || isUnc // UNC paths are always absolute

  return isAbsolute
}

function absUnix (p) {
  return p.charAt(0) === "/" || p === ""
}

}).call(this,require('_process'))

},{"_process":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/process/browser.js","assert":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/assert/assert.js","events":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/events/events.js","fs":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/lib/_empty.js","inherits":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/inherits/inherits_browser.js","minimatch":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/minimatch.js","path":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/path-browserify/index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
arguments[4]["/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/inherits/inherits_browser.js"][0].apply(exports,arguments)
},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/minimatch.js":[function(require,module,exports){
(function (process){
;(function (require, exports, module, platform) {

if (module) module.exports = minimatch
else exports.minimatch = minimatch

if (!require) {
  require = function (id) {
    switch (id) {
      case "sigmund": return function sigmund (obj) {
        return JSON.stringify(obj)
      }
      case "path": return { basename: function (f) {
        f = f.split(/[\/\\]/)
        var e = f.pop()
        if (!e) e = f.pop()
        return e
      }}
      case "lru-cache": return function LRUCache () {
        // not quite an LRU, but still space-limited.
        var cache = {}
        var cnt = 0
        this.set = function (k, v) {
          cnt ++
          if (cnt >= 100) cache = {}
          cache[k] = v
        }
        this.get = function (k) { return cache[k] }
      }
    }
  }
}

minimatch.Minimatch = Minimatch

var LRU = require("lru-cache")
  , cache = minimatch.cache = new LRU({max: 100})
  , GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
  , sigmund = require("sigmund")

var path = require("path")
  // any single thing other than /
  // don't need to escape / when using new RegExp()
  , qmark = "[^/]"

  // * => any number of characters
  , star = qmark + "*?"

  // ** when dots are allowed.  Anything goes, except .. and .
  // not (^ or / followed by one or two dots followed by $ or /),
  // followed by anything, any number of times.
  , twoStarDot = "(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?"

  // not a ^ or / followed by a dot,
  // followed by anything, any number of times.
  , twoStarNoDot = "(?:(?!(?:\\\/|^)\\.).)*?"

  // characters that need to be escaped in RegExp.
  , reSpecials = charSet("().*{}+?[]^$\\!")

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split("").reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}


function minimatch (p, pattern, options) {
  if (typeof pattern !== "string") {
    throw new TypeError("glob pattern string required")
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === "") return p === ""

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options, cache)
  }

  if (typeof pattern !== "string") {
    throw new TypeError("glob pattern string required")
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows: need to use /, not \
  // On other platforms, \ is a valid (albeit bad) filename char.
  if (platform === "win32") {
    pattern = pattern.split("\\").join("/")
  }

  // lru storage.
  // these things aren't particularly big, but walking down the string
  // and turning it into a regexp can get pretty costly.
  var cacheKey = pattern + "\n" + sigmund(options)
  var cached = minimatch.cache.get(cacheKey)
  if (cached) return cached
  minimatch.cache.set(cacheKey, this)

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function() {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === "#") {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return -1 === s.indexOf(false)
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
    , negate = false
    , options = this.options
    , negateOffset = 0

  if (options.nonegate) return

  for ( var i = 0, l = pattern.length
      ; i < l && pattern.charAt(i) === "!"
      ; i ++) {
    negate = !negate
    negateOffset ++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return new Minimatch(pattern, options).braceExpand()
}

Minimatch.prototype.braceExpand = braceExpand
function braceExpand (pattern, options) {
  options = options || this.options
  pattern = typeof pattern === "undefined"
    ? this.pattern : pattern

  if (typeof pattern === "undefined") {
    throw new Error("undefined pattern")
  }

  if (options.nobrace ||
      !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  var escaping = false

  // examples and comments refer to this crazy pattern:
  // a{b,c{d,e},{f,g}h}x{y,z}
  // expected:
  // abxy
  // abxz
  // acdxy
  // acdxz
  // acexy
  // acexz
  // afhxy
  // afhxz
  // aghxy
  // aghxz

  // everything before the first \{ is just a prefix.
  // So, we pluck that off, and work with the rest,
  // and then prepend it to everything we find.
  if (pattern.charAt(0) !== "{") {
    this.debug(pattern)
    var prefix = null
    for (var i = 0, l = pattern.length; i < l; i ++) {
      var c = pattern.charAt(i)
      this.debug(i, c)
      if (c === "\\") {
        escaping = !escaping
      } else if (c === "{" && !escaping) {
        prefix = pattern.substr(0, i)
        break
      }
    }

    // actually no sets, all { were escaped.
    if (prefix === null) {
      this.debug("no sets")
      return [pattern]
    }

   var tail = braceExpand.call(this, pattern.substr(i), options)
    return tail.map(function (t) {
      return prefix + t
    })
  }

  // now we have something like:
  // {b,c{d,e},{f,g}h}x{y,z}
  // walk through the set, expanding each part, until
  // the set ends.  then, we'll expand the suffix.
  // If the set only has a single member, then'll put the {} back

  // first, handle numeric sets, since they're easier
  var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/)
  if (numset) {
    this.debug("numset", numset[1], numset[2])
    var suf = braceExpand.call(this, pattern.substr(numset[0].length), options)
      , start = +numset[1]
      , end = +numset[2]
      , inc = start > end ? -1 : 1
      , set = []
    for (var i = start; i != (end + inc); i += inc) {
      // append all the suffixes
      for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
        set.push(i + suf[ii])
      }
    }
    return set
  }

  // ok, walk through the set
  // We hope, somewhat optimistically, that there
  // will be a } at the end.
  // If the closing brace isn't found, then the pattern is
  // interpreted as braceExpand("\\" + pattern) so that
  // the leading \{ will be interpreted literally.
  var i = 1 // skip the \{
    , depth = 1
    , set = []
    , member = ""
    , sawEnd = false
    , escaping = false

  function addMember () {
    set.push(member)
    member = ""
  }

  this.debug("Entering for")
  FOR: for (i = 1, l = pattern.length; i < l; i ++) {
    var c = pattern.charAt(i)
    this.debug("", i, c)

    if (escaping) {
      escaping = false
      member += "\\" + c
    } else {
      switch (c) {
        case "\\":
          escaping = true
          continue

        case "{":
          depth ++
          member += "{"
          continue

        case "}":
          depth --
          // if this closes the actual set, then we're done
          if (depth === 0) {
            addMember()
            // pluck off the close-brace
            i ++
            break FOR
          } else {
            member += c
            continue
          }

        case ",":
          if (depth === 1) {
            addMember()
          } else {
            member += c
          }
          continue

        default:
          member += c
          continue
      } // switch
    } // else
  } // for

  // now we've either finished the set, and the suffix is
  // pattern.substr(i), or we have *not* closed the set,
  // and need to escape the leading brace
  if (depth !== 0) {
    this.debug("didn't close", pattern)
    return braceExpand.call(this, "\\" + pattern, options)
  }

  // x{y,z} -> ["xy", "xz"]
  this.debug("set", set)
  this.debug("suffix", pattern.substr(i))
  var suf = braceExpand.call(this, pattern.substr(i), options)
  // ["b", "c{d,e}","{f,g}h"] ->
  //   [["b"], ["cd", "ce"], ["fh", "gh"]]
  var addBraces = set.length === 1
  this.debug("set pre-expanded", set)
  set = set.map(function (p) {
    return braceExpand.call(this, p, options)
  }, this)
  this.debug("set expanded", set)


  // [["b"], ["cd", "ce"], ["fh", "gh"]] ->
  //   ["b", "cd", "ce", "fh", "gh"]
  set = set.reduce(function (l, r) {
    return l.concat(r)
  })

  if (addBraces) {
    set = set.map(function (s) {
      return "{" + s + "}"
    })
  }

  // now attach the suffixes.
  var ret = []
  for (var i = 0, l = set.length; i < l; i ++) {
    for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
      ret.push(set[i] + suf[ii])
    }
  }
  return ret
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === "**") return GLOBSTAR
  if (pattern === "") return ""

  var re = ""
    , hasMagic = !!options.nocase
    , escaping = false
    // ? => one single character
    , patternListStack = []
    , plType
    , stateChar
    , inClass = false
    , reClassStart = -1
    , classStart = -1
    // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.
    , patternStart = pattern.charAt(0) === "." ? "" // anything
      // not (start or / followed by . or .. followed by / or end)
      : options.dot ? "(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))"
      : "(?!\\.)"
    , self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case "*":
          re += star
          hasMagic = true
          break
        case "?":
          re += qmark
          hasMagic = true
          break
        default:
          re += "\\"+stateChar
          break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for ( var i = 0, len = pattern.length, c
      ; (i < len) && (c = pattern.charAt(i))
      ; i ++ ) {

    this.debug("%s\t%s %s %j", pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += "\\" + c
      escaping = false
      continue
    }

    SWITCH: switch (c) {
      case "/":
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case "\\":
        clearStateChar()
        escaping = true
        continue

      // the various stateChar values
      // for the "extglob" stuff.
      case "?":
      case "*":
      case "+":
      case "@":
      case "!":
        this.debug("%s\t%s %s %j <-- stateChar", pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === "!" && i === classStart + 1) c = "^"
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
        continue

      case "(":
        if (inClass) {
          re += "("
          continue
        }

        if (!stateChar) {
          re += "\\("
          continue
        }

        plType = stateChar
        patternListStack.push({ type: plType
                              , start: i - 1
                              , reStart: re.length })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === "!" ? "(?:(?!" : "(?:"
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
        continue

      case ")":
        if (inClass || !patternListStack.length) {
          re += "\\)"
          continue
        }

        clearStateChar()
        hasMagic = true
        re += ")"
        plType = patternListStack.pop().type
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        switch (plType) {
          case "!":
            re += "[^/]*?)"
            break
          case "?":
          case "+":
          case "*": re += plType
          case "@": break // the default anyway
        }
        continue

      case "|":
        if (inClass || !patternListStack.length || escaping) {
          re += "\\|"
          escaping = false
          continue
        }

        clearStateChar()
        re += "|"
        continue

      // these are mostly the same in regexp and glob
      case "[":
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += "\\" + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
        continue

      case "]":
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += "\\" + c
          escaping = false
          continue
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
        continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
                   && !(c === "^" && inClass)) {
          re += "\\"
        }

        re += c

    } // switch
  } // for


  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    var cs = pattern.substr(classStart + 1)
      , sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + "\\[" + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  var pl
  while (pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + 3)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = "\\"
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + "|"
    })

    this.debug("tail=%j\n   %s", tail, tail)
    var t = pl.type === "*" ? star
          : pl.type === "?" ? qmark
          : "\\" + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart)
       + t + "\\("
       + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += "\\\\"
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case ".":
    case "[":
    case "(": addPatternStart = true
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== "" && hasMagic) re = "(?=.)" + re

  if (addPatternStart) re = patternStart + re

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [ re, hasMagic ]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? "i" : ""
    , regExp = new RegExp("^" + re + "$", flags)

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) return this.regexp = false
  var options = this.options

  var twoStar = options.noglobstar ? star
      : options.dot ? twoStarDot
      : twoStarNoDot
    , flags = options.nocase ? "i" : ""

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
           : (typeof p === "string") ? regExpEscape(p)
           : p._src
    }).join("\\\/")
  }).join("|")

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = "^(?:" + re + ")$"

  // can match anything, as long as it's not this.
  if (this.negate) re = "^(?!" + re + ").*$"

  try {
    return this.regexp = new RegExp(re, flags)
  } catch (ex) {
    return this.regexp = false
  }
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug("match", f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ""

  if (f === "/" && partial) return true

  var options = this.options

  // windows: need to use /, not \
  // On other platforms, \ is a valid (albeit bad) filename char.
  if (platform === "win32") {
    f = f.split("\\").join("/")
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, "split", f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, "set", set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename;
  for (var i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (var i = 0, l = set.length; i < l; i ++) {
    var pattern = set[i], file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug("matchOne",
              { "this": this
              , file: file
              , pattern: pattern })

  this.debug("matchOne", file.length, pattern.length)

  for ( var fi = 0
          , pi = 0
          , fl = file.length
          , pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi ++, pi ++ ) {

    this.debug("matchOne loop")
    var p = pattern[pi]
      , f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
        , pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for ( ; fi < fl; fi ++) {
          if (file[fi] === "." || file[fi] === ".." ||
              (!options.dot && file[fi].charAt(0) === ".")) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      WHILE: while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while',
                    file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === "." || swallowee === ".." ||
              (!options.dot && swallowee.charAt(0) === ".")) {
            this.debug("dot detected!", file, fr, pattern, pr)
            break WHILE
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr ++
        }
      }
      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug("\n>>> no match, partial?", file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === "string") {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug("string match", p, f, hit)
    } else {
      hit = f.match(p)
      this.debug("pattern match", p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === "")
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error("wtf?")
}


// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, "$1")
}


function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

})( typeof require === "function" ? require : null,
    this,
    typeof module === "object" ? module : null,
    typeof process === "object" ? process.platform : "win32"
  )

}).call(this,require('_process'))

},{"_process":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/process/browser.js","lru-cache":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/node_modules/lru-cache/lib/lru-cache.js","path":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/browserify/node_modules/path-browserify/index.js","sigmund":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/node_modules/sigmund/sigmund.js"}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/node_modules/lru-cache/lib/lru-cache.js":[function(require,module,exports){
;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

var didTypeWarning = false
function typeCheckKey(key) {
  if (!didTypeWarning && typeof key !== 'string' && typeof key !== 'number') {
    didTypeWarning = true
    console.error(new TypeError("LRU: key must be a string or number. Almost certainly a bug! " + typeof key).stack)
  }
}

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })


Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0
  var itemCount = this._itemCount

  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
    i++
    var hit = this._lruList[k]
    if (isStale(this, hit)) {
      del(this, hit)
      if (!this._allowStale) hit = undefined
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    keys[i++] = hit.key
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    values[i++] = hit.value
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._cache) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}

LRUCache.prototype.dump = function () {
  var arr = []
  var i = 0

  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    if (!isStale(this, hit)) {
      //Do not store staled hits
      ++i
      arr.push({
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      });
    }
  }
  //arr has the most read first
  return arr
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge
  typeCheckKey(key)

  var now = maxAge ? Date.now() : 0
  var len = this._lengthCalculator(value)

  if (hOP(this._cache, key)) {
    if (len > this._max) {
      del(this, this._cache[key])
      return false
    }
    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, this._cache[key].value)

    this._cache[key].now = now
    this._cache[key].maxAge = maxAge
    this._cache[key].value = value
    this._length += (len - this._cache[key].length)
    this._cache[key].length = len
    this.get(key)

    if (this._length > this._max)
      trim(this)

    return true
  }

  var hit = new Entry(key, value, this._mru++, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList[hit.lu] = this._cache[key] = hit
  this._itemCount ++

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  typeCheckKey(key)
  if (!hOP(this._cache, key)) return false
  var hit = this._cache[key]
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  typeCheckKey(key)
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  typeCheckKey(key)
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var hit = this._lruList[this._lru]
  del(this, hit)
  return hit || null
}

LRUCache.prototype.del = function (key) {
  typeCheckKey(key)
  del(this, this._cache[key])
}

LRUCache.prototype.load = function (arr) {
  //reset the cache
  this.reset();

  var now = Date.now()
  //A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l-- ) {
    var hit = arr[l]
    typeCheckKey(hit.k)
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      //the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      //dont add already expired items
      if (maxAge > 0) this.set(hit.k, hit.v, maxAge)
    }
  }
}

function get (self, key, doUse) {
  typeCheckKey(key)
  var hit = self._cache[key]
  if (hit) {
    if (isStale(self, hit)) {
      del(self, hit)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(self, hit)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function use (self, hit) {
  shiftLU(self, hit)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self, self._lruList[self._lru])
}

function shiftLU (self, hit) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del (self, hit) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ hit.key ]
    shiftLU(self, hit)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, length, now, maxAge) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}

})()

},{}],"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/node_modules/glob/node_modules/minimatch/node_modules/sigmund/sigmund.js":[function(require,module,exports){
module.exports = sigmund
function sigmund (subject, maxSessions) {
    maxSessions = maxSessions || 10;
    var notes = [];
    var analysis = '';
    var RE = RegExp;

    function psychoAnalyze (subject, session) {
        if (session > maxSessions) return;

        if (typeof subject === 'function' ||
            typeof subject === 'undefined') {
            return;
        }

        if (typeof subject !== 'object' || !subject ||
            (subject instanceof RE)) {
            analysis += subject;
            return;
        }

        if (notes.indexOf(subject) !== -1 || session === maxSessions) return;

        notes.push(subject);
        analysis += '{';
        Object.keys(subject).forEach(function (issue, _, __) {
            // pseudo-private values.  skip those.
            if (issue.charAt(0) === '_') return;
            var to = typeof subject[issue];
            if (to === 'function' || to === 'undefined') return;
            analysis += issue;
            psychoAnalyze(subject[issue], session + 1);
        });
    }
    psychoAnalyze(subject, 0);
    return analysis;
}

// vim: set softtabstop=4 shiftwidth=4:

},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js":[function(require,module,exports){
'use strict';

// require('angular');
require('ionic');

// angular modules
// require('angular-ui-router');
// require('angular-module-sanitize');
// require('./templates');
require('./controllers/_index');
// require('./services/_index');
// require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ionic',
    // 'app.controllers'
    // 'ui.router',
    // 'templates',
    // 'ngSanitize',
    // 'app.services',
    // 'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // angular.module('app').constant('AppSettings', require('./constants.development'));

  // angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
},{"./controllers/_index":"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js","./on_run":"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js","ionic":"/Library/WebServer/Documents/ionic-googlemaps/www/lib/ionic/js/ionic.min.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/controllers/_index.js":[function(require,module,exports){
(function (__dirname){
'use strict';

// var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.controllers', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
}).call(this,"/www/js/controllers")

},{"bulk-require":"/Library/WebServer/Documents/ionic-googlemaps/node_modules/bulk-require/index.js"}],"/Library/WebServer/Documents/ionic-googlemaps/www/js/on_run.js":[function(require,module,exports){
'use strict';

/**
 * @ngInject
 */
function OnRun($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

module.exports = OnRun;
},{}],"/Library/WebServer/Documents/ionic-googlemaps/www/lib/ionic/js/ionic.min.js":[function(require,module,exports){
/*!
 * Copyright 2015 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.2.4
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n){t!==!1?X.addEventListener(e,J[e],n):X.removeEventListener(e,J[e])}function t(e){var t=w(e.target),i=T(t);if(ionic.tap.requiresNativeClick(i)||$)return!1;var r=ionic.tap.pointerCoord(e);n("click",i,r.x,r.y),h(i)}function n(e,t,n,i){var r=document.createEvent("MouseEvents");r.initMouseEvent(e,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),r.isIonicTap=!0,t.dispatchEvent(r)}function i(e){return"submit"==e.target.type&&0===e.detail?null:ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)||!e.isIonicTap&&!ionic.tap.requiresNativeClick(e.target)?(e.stopPropagation(),ionic.tap.isLabelWithTextInput(e.target)||e.preventDefault(),!1):void 0}function r(t){return t.isIonicTap||p(t)?null:B?(t.stopPropagation(),ionic.Platform.isEdge()||ionic.tap.isTextInput(t.target)&&K===t.target||b(t.target.tagName)||ionic.tap.isVideo(t.target)||t.preventDefault(),!1):($=!1,q=ionic.tap.pointerCoord(t),e("mousemove"),void ionic.activator.start(t))}function a(n){return B?(n.stopPropagation(),n.preventDefault(),!1):p(n)||b(n.target.tagName)?!1:(_(n)||t(n),e("mousemove",!1),ionic.activator.end(),void($=!1))}function o(t){return _(t)?(e("mousemove",!1),ionic.activator.end(),$=!0,!1):void 0}function s(t){if(!p(t)&&($=!1,u(),q=ionic.tap.pointerCoord(t),e(j),ionic.activator.start(t),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(t.target))){var n=T(w(t.target));n!==F&&t.preventDefault()}}function l(e){p(e)||(u(),_(e)||(t(e),b(e.target.tagName)&&e.preventDefault()),K=e.target,d())}function c(t){return _(t)?($=!0,e(j,!1),ionic.activator.end(),!1):void 0}function d(){e(j,!1),ionic.activator.end(),$=!1}function u(){B=!0,clearTimeout(W),W=setTimeout(function(){B=!1},600)}function p(e){return e.isTapHandled?!0:(e.isTapHandled=!0,ionic.tap.isElementTapDisabled(e.target)?!0:ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)?(e.preventDefault(),!0):void 0)}function h(e){U=null;var t=!1;"SELECT"==e.tagName?(n("mousedown",e,0,0),e.focus&&e.focus(),t=!0):v()===e?t=!0:/^(input|textarea|ion-label)$/i.test(e.tagName)||e.isContentEditable?(t=!0,e.focus&&e.focus(),e.value=e.value,B&&(U=e)):f(),t&&(v(e),ionic.trigger("ionic.focusin",{target:e},!0))}function f(){var e=v();e&&(/^(input|textarea|select)$/i.test(e.tagName)||e.isContentEditable)&&e.blur(),v(null)}function m(e){B&&ionic.tap.isTextInput(v())&&ionic.tap.isTextInput(U)&&U!==e.target&&(U.focus(),U=null),ionic.scroll.isScrolling=!1}function g(){v(null)}function v(e){return arguments.length&&(F=e),F||document.activeElement}function _(e){if(!e||1!==e.target.nodeType||!q||0===q.x&&0===q.y)return!1;var t=ionic.tap.pointerCoord(e),n=!(!e.target.classList||!e.target.classList.contains||"function"!=typeof e.target.classList.contains),i=n&&e.target.classList.contains("button")?Q:Z;return Math.abs(q.x-t.x)>i||Math.abs(q.y-t.y)>i}function w(e,t){for(var n=e,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return t!==!1?e:void 0}function T(e){if(e&&"LABEL"===e.tagName){if(e.control)return e.control;if(e.querySelector){var t=e.querySelector("input,textarea,select");if(t)return t}}return e}function b(e){return/^(select|option)$/i.test(e)}function S(){ionic.keyboard.isInitialized||(V()?(window.addEventListener("native.keyboardshow",pe),window.addEventListener("native.keyboardhide",x)):document.body.addEventListener("focusout",x),document.body.addEventListener("ionic.focusin",ue),document.body.addEventListener("focusin",ue),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!0)}function y(e){clearTimeout(re),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),ionic.keyboard.height=e.keyboardHeight,le?C(O,!0):C(I,!0)}function E(e){return clearTimeout(re),e.target&&!e.target.readOnly&&ionic.tap.isKeyboardElement(e.target)&&(ne=ionic.DomUtil.getParentWithClass(e.target,de))?(ee=e.target,ne.classList.contains("overflow-scroll")||(document.body.scrollTop=0,ne.scrollTop=0,ionic.requestAnimationFrame(function(){document.body.scrollTop=0,ne.scrollTop=0}),window.navigator.msPointerEnabled?document.addEventListener("MSPointerMove",L,!1):document.addEventListener("touchmove",L,!1)),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),document.addEventListener("keydown",M,!1),void(ionic.keyboard.isOpen||V()?ionic.keyboard.isOpen&&I():C(I,!0))):(ee&&(te=ee),void(ee=null))}function x(){clearTimeout(re),(ionic.keyboard.isOpen||ionic.keyboard.isOpening)&&(ionic.keyboard.isClosing=!0,ionic.keyboard.isOpening=!1),re=setTimeout(function(){ionic.requestAnimationFrame(function(){le?C(function(){O(),P()},!1):C(P,!1)})},50)}function D(){ionic.keyboard.isLandscape=!ionic.keyboard.isLandscape,ionic.Platform.isIOS()&&O(),ionic.Platform.isAndroid()&&(ionic.keyboard.isOpen&&V()?le=!0:C(O,!1))}function M(e){ionic.scroll.isScrolling&&L(e)}function L(e){"TEXTAREA"!==e.target.tagName&&e.preventDefault()}function C(e,t){clearInterval(ie);var n,i=0,r=G(),a=r;return n=ionic.Platform.isAndroid()&&ionic.Platform.version()<4.4?30:ionic.Platform.isAndroid()?10:1,ie=setInterval(function(){a=G(),(!(++i<n)||(N(a)||z(a))&&ionic.keyboard.height)&&(V()||(ionic.keyboard.height=Math.abs(r-window.innerHeight)),ionic.keyboard.isOpen=t,clearInterval(ie),e())},50),n}function P(){clearTimeout(re),ionic.keyboard.isOpen=!1,ionic.keyboard.isClosing=!1,(ee||te)&&ionic.trigger("resetScrollView",{target:ee||te},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(ce)}),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerMove",L):document.removeEventListener("touchmove",L),document.removeEventListener("keydown",M),ionic.Platform.isAndroid()&&(V()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()),ee=null,te=null}function I(){ionic.keyboard.isOpen=!0,ionic.keyboard.isOpening=!1;var e={keyboardHeight:k(),viewportHeight:ae};if(ee){e.target=ee;var t=ee.getBoundingClientRect();e.elementTop=Math.round(t.top),e.elementBottom=Math.round(t.bottom),e.windowHeight=e.viewportHeight-e.keyboardHeight,e.isElementUnderKeyboard=e.elementBottom>e.windowHeight,ionic.trigger("scrollChildIntoView",e,!0)}return setTimeout(function(){document.body.classList.add(ce)},400),e}function k(){if(ionic.keyboard.height)return ionic.keyboard.height;if(ionic.Platform.isAndroid()){if(ionic.Platform.isFullScreen)return 275;var e=window.innerHeight;return ae>e?ae-e:0}return ionic.Platform.isIOS()?ionic.keyboard.isLandscape?206:ionic.Platform.isWebView()?260:216:275}function N(e){return!!(!ionic.keyboard.isLandscape&&oe&&Math.abs(oe-e)<2)}function z(e){return!!(ionic.keyboard.isLandscape&&se&&Math.abs(se-e)<2)}function O(){le=!1,ae=G(),ionic.keyboard.isLandscape&&!se?se=ae:ionic.keyboard.isLandscape||oe||(oe=ae),ee&&ionic.trigger("resetScrollView",{target:ee},!0),ionic.keyboard.isOpen&&ionic.tap.isTextInput(ee)&&I()}function A(){var e=G();e/window.innerWidth<1&&(ionic.keyboard.isLandscape=!0),ae=e,ionic.keyboard.isLandscape&&!se?se=ae:ionic.keyboard.isLandscape||oe||(oe=ae)}function G(){var e=window.innerHeight;return ionic.Platform.isAndroid()&&ionic.Platform.isFullScreen||!ionic.keyboard.isOpen&&!ionic.keyboard.isOpening||ionic.keyboard.isClosing?e:e+k()}function V(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function R(){var e;for(e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){he=document.head.children[e];break}if(he){var t,n=he.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<n.length;e++)n[e]&&(t=n[e].split("="),fe[t[0]]=t.length>1?t[1]:"_");H()}}function H(){var e=fe.width,t=fe.height,n=ionic.Platform,i=n.version(),r="device-width",a="device-height",o=ionic.viewport.orientation();delete fe.height,fe.width=r,n.isIPad()?i>7?delete fe.width:n.isWebView()?90==o?fe.height="0":7==i&&(fe.height=a):7>i&&(fe.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete fe.width:7>i?t&&(fe.height="0"):7==i&&(fe.height=a):7>i&&t&&(fe.height="0")),(e!==fe.width||t!==fe.height)&&Y()}function Y(){var e,t=[];for(e in fe)fe[e]&&t.push(e+("_"==fe[e]?"":"="+fe[e]));he.content=t.join(", ")}window.ionic=window.ionic||{},window.ionic.views={},window.ionic.version="1.2.4",function(e){e.DelegateService=function(e){function t(){return!0}if(e.indexOf("$getByHandle")>-1)throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");return["$log",function(n){function i(e,t){this._instances=e,this.handle=t}function r(){this._instances=[]}function a(e){return function(){var t,i=this.handle,r=arguments,a=0;return this._instances.forEach(function(n){if((!i||i==n.$$delegateHandle)&&n.$$filterFn(n)){a++;var o=n[e].apply(n,r);1===a&&(t=o)}}),!a&&i?n.warn('Delegate for handle "'+i+'" could not find a corresponding element with delegate-handle="'+i+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+i+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again."):t}}return e.forEach(function(e){i.prototype[e]=a(e)}),r.prototype=i.prototype,r.prototype._registerInstance=function(e,n,i){var r=this._instances;return e.$$delegateHandle=n,e.$$filterFn=i||t,r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}},r.prototype.$getByHandle=function(e){return new i(this._instances,e)},new r}]}}(window.ionic),function(e,t,n){function i(){a=!0;for(var e=0;e<r.length;e++)n.requestAnimationFrame(r[e]);r=[],t.removeEventListener("DOMContentLoaded",i)}var r=[],a="complete"===t.readyState||"interactive"===t.readyState;a||t.addEventListener("DOMContentLoaded",i),e._rAF=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,16)}}();var o=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(t){return e._rAF(t)},cancelAnimationFrame:function(e){o(e)},animationFrameThrottle:function(e){var t,i,r;return function(){t=arguments,r=this,i||(i=!0,n.requestAnimationFrame(function(){e.apply(r,t),i=!1}))}},contains:function(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}},getPositionInParent:function(e){return{left:e.offsetLeft,top:e.offsetTop}},getOffsetTop:function(e){var t=0;if(e.offsetParent){do t+=e.offsetTop,e=e.offsetParent;while(e);return t}},ready:function(e){a?n.requestAnimationFrame(e):r.push(e)},getTextBounds:function(n){if(t.createRange){var i=t.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var r=i.getBoundingClientRect();if(r){var a=e.scrollX,o=e.scrollY;return{top:r.top+o,left:r.left+a,right:r.left+a+r.width,bottom:r.top+o+r.height,width:r.width,height:r.height}}}}return null},getChildIndex:function(e,t){if(t)for(var n,i=e.parentNode.children,r=0,a=0,o=i.length;o>r;r++)if(n=i[r],n.nodeName&&n.nodeName.toLowerCase()==t){if(n==e)return a;a++}return Array.prototype.slice.call(e.parentNode.children).indexOf(e)},swapNodes:function(e,t){t.parentNode.insertBefore(e,t)},elementIsDescendant:function(e,t,n){var i=e;do{if(i===t)return!0;i=i.parentNode}while(i&&i!==n);return!1},getParentWithClass:function(e,t,n){for(n=n||10;e.parentNode&&n--;){if(e.parentNode.classList&&e.parentNode.classList.contains(t))return e.parentNode;e=e.parentNode}return null},getParentOrSelfWithClass:function(e,t,n){for(n=n||10;e&&n--;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},rectContains:function(e,t,n,i,r,a){return n>e||e>r?!1:i>t||t>a?!1:!0},blurAll:function(){return t.activeElement&&t.activeElement!=t.body?(t.activeElement.blur(),t.activeElement):null},cachedAttr:function(e,t,n){if(e=e&&e.length&&e[0]||e,e&&e.setAttribute){var i="$attr-"+t;return arguments.length>2?e[i]!==n&&(e.setAttribute(t,n),e[i]=n):"undefined"==typeof e[i]&&(e[i]=e.getAttribute(t)),e[i]}},cachedStyles:function(e,t){if(e=e&&e.length&&e[0]||e,e&&e.style)for(var n in t)e["$style-"+n]!==t[n]&&(e.style[n]=e["$style-"+n]=t[n])}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(e){e.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var e=function(e,t){var n;t=t||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(i){n=document.createEvent("Event");for(var r in t)n[r]=t[r];n.initEvent(e,t.bubbles,t.cancelable)}return n};return e.prototype=window.Event.prototype,e}(),e.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(t,n,i,r){var a=new e.CustomEvent(t,{detail:n,bubbles:!!i,cancelable:!!r});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(a)||window.dispatchEvent(a)},on:function(t,n,i){for(var r=i||window,a=0,o=this.VIRTUALIZED_EVENTS.length;o>a;a++)if(t==this.VIRTUALIZED_EVENTS[a]){var s=new e.Gesture(i);return s.on(t,n),s}r.addEventListener(t,n)},off:function(e,t,n){n.removeEventListener(e,t)},onGesture:function(t,n,i,r){var a=new e.Gesture(i,r);return a.on(t,n),a},offGesture:function(e,t,n){e&&e.off(t,n)},handlePopState:function(){}},e.on=function(){e.EventController.on.apply(e.EventController,arguments)},e.off=function(){e.EventController.off.apply(e.EventController,arguments)},e.trigger=e.EventController.trigger,e.onGesture=function(){return e.EventController.onGesture.apply(e.EventController.onGesture,arguments)},e.offGesture=function(){return e.EventController.offGesture.apply(e.EventController.offGesture,arguments)}}(window.ionic),function(e){function t(){if(!e.Gestures.READY){e.Gestures.event.determineEventTypes();for(var t in e.Gestures.gestures)e.Gestures.gestures.hasOwnProperty(t)&&e.Gestures.detection.register(e.Gestures.gestures[t]);e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_MOVE,e.Gestures.detection.detect),e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_END,e.Gestures.detection.detect),e.Gestures.READY=!0}}e.Gesture=function(t,n){return new e.Gestures.Instance(t,n||{})},e.Gestures={},e.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},e.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,e.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.Gestures.NO_MOUSEEVENTS=e.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),e.Gestures.EVENT_TYPES={},e.Gestures.DIRECTION_DOWN="down",e.Gestures.DIRECTION_LEFT="left",e.Gestures.DIRECTION_UP="up",e.Gestures.DIRECTION_RIGHT="right",e.Gestures.POINTER_MOUSE="mouse",e.Gestures.POINTER_TOUCH="touch",e.Gestures.POINTER_PEN="pen",e.Gestures.EVENT_START="start",e.Gestures.EVENT_MOVE="move",e.Gestures.EVENT_END="end",e.Gestures.DOCUMENT=window.document,e.Gestures.plugins={},e.Gestures.READY=!1,e.Gestures.Instance=function(n,i){var r=this;return null===n?this:(t(),this.element=n,this.enabled=!0,this.options=e.Gestures.utils.extend(e.Gestures.utils.extend({},e.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&e.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),e.Gestures.event.onTouch(n,e.Gestures.EVENT_START,function(t){r.enabled&&e.Gestures.detection.startDetect(r,t)}),this)},e.Gestures.Instance.prototype={on:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],t,!1);return this},off:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],t,!1);return this},trigger:function(t,n){var i=e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n;var r=this.element;return e.Gestures.utils.hasParent(n.target,r)&&(r=n.target),r.dispatchEvent(i),this},enable:function(e){return this.enabled=e,this}};var n=null,i=!1,r=!1;e.Gestures.event={bindDom:function(e,t,n){for(var i=t.split(" "),r=0;r<i.length;r++)e.addEventListener(i[r],n,!1)},onTouch:function(t,a,o){var s=this;this.bindDom(t,e.Gestures.EVENT_TYPES[a],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!r){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(r=!0);var d=0;i&&(e.Gestures.HAS_POINTEREVENTS&&a!=e.Gestures.EVENT_END?d=e.Gestures.PointerEvent.updatePointer(a,l):c.match(/touch/)?d=l.touches.length:r||(d=c.match(/up/)?0:1),d>0&&a==e.Gestures.EVENT_END?a=e.Gestures.EVENT_MOVE:d||(a=e.Gestures.EVENT_END),(d||null===n)&&(n=l),o.call(e.Gestures.detection,s.collectEventData(t,a,s.getTouchList(n,a),l)),e.Gestures.HAS_POINTEREVENTS&&a==e.Gestures.EVENT_END&&(d=e.Gestures.PointerEvent.updatePointer(a,l))),d||(n=null,i=!1,r=!1,e.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getEvents():e.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START]=t[0],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE]=t[1],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END]=t[2]},getTouchList:function(t){return e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,n,i,r){var a=e.Gestures.POINTER_TOUCH;return(r.type.match(/mouse/)||e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE,r))&&(a=e.Gestures.POINTER_MOUSE),{center:e.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:r.target,touches:i,eventType:n,pointerType:a,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return e.Gestures.detection.stopDetect()}}}},e.Gestures.PointerEvent={pointers:{},getTouchList:function(){var e=this,t=[];return Object.keys(e.pointers).sort().forEach(function(n){t.push(e.pointers[n])}),t},updatePointer:function(t,n){return t==e.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(t,n){if(!n.pointerType)return!1;var i={};return i[e.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==e.Gestures.POINTER_MOUSE,i[e.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==e.Gestures.POINTER_TOUCH,i[e.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==e.Gestures.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},e.Gestures.utils={extend:function(e,t,n){for(var i in t)void 0!==e[i]&&n||(e[i]=t[i]);return e},hasParent:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},getCenter:function(e){for(var t=[],n=[],i=0,r=e.length;r>i;i++)t.push(e[i].pageX),n.push(e[i].pageY);return{pageX:(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(e,t,n){return{x:Math.abs(t/e)||0,y:Math.abs(n/e)||0}},getAngle:function(e,t){var n=t.pageY-e.pageY,i=t.pageX-e.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,n){var i=Math.abs(t.pageX-n.pageX),r=Math.abs(t.pageY-n.pageY);return i>=r?t.pageX-n.pageX>0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT:t.pageY-n.pageY>0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN},getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},getScale:function(e,t){return e.length>=2&&t.length>=2?this.getDistance(t[0],t[1])/this.getDistance(e[0],e[1]):1},getRotation:function(e,t){return e.length>=2&&t.length>=2?this.getAngle(t[1],t[0])-this.getAngle(e[1],e[0]):0},isVertical:function(t){return t==e.Gestures.DIRECTION_UP||t==e.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(e,t){e&&e.classList&&(e.classList.add(t),e.onselectstart=function(){return!1})}},e.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,n){this.current||(this.stopped=!1,this.current={inst:t,startEvent:e.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(t){if(!this.current||this.stopped)return null;t=this.extendEventData(t);for(var n=this.current.inst.options,i=0,r=this.gestures.length;r>i;i++){var a=this.gestures[i];if(!this.stopped&&n[a.name]!==!1&&a.handler.call(a,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==e.Gestures.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t},stopDetect:function(){this.previous=e.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var n=this.current.startEvent;if(n&&(t.touches.length!=n.touches.length||t.touches===n.touches)){n.touches=[];for(var i=0,r=t.touches.length;r>i;i++)n.touches.push(e.Gestures.utils.extend({},t.touches[i]))}var a=t.timeStamp-n.timeStamp,o=t.center.pageX-n.center.pageX,s=t.center.pageY-n.center.pageY,l=e.Gestures.utils.getVelocity(a,o,s);return e.Gestures.utils.extend(t,{deltaTime:a,deltaX:o,deltaY:s,velocityX:l.x,velocityY:l.y,distance:e.Gestures.utils.getDistance(n.center,t.center),angle:e.Gestures.utils.getAngle(n.center,t.center),direction:e.Gestures.utils.getDirection(n.center,t.center),scale:e.Gestures.utils.getScale(n.touches,t.touches),rotation:e.Gestures.utils.getRotation(n.touches,t.touches),startEvent:n}),t},register:function(t){var n=t.defaults||{};return void 0===n[t.name]&&(n[t.name]=!0),e.Gestures.utils.extend(e.Gestures.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(e,t){return e.index<t.index?-1:e.index>t.index?1:0}),this.gestures}},e.Gestures.gestures=e.Gestures.gestures||{},e.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:9},timer:null,handler:function(t,n){switch(t.eventType){case e.Gestures.EVENT_START:clearTimeout(this.timer),e.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==e.Gestures.detection.current.name&&(e.tap.cancelClick(),n.trigger("hold",t))},n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:t.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case e.Gestures.EVENT_END:clearTimeout(this.timer)}}},e.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=e.Gestures.detection.previous,r=!1;if(t.deltaTime>n.options.tap_max_touchtime||t.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&t.distance<n.options.doubletap_distance&&(n.trigger("doubletap",t),r=!0),(!r||n.options.tap_always)&&(e.Gestures.detection.current.name="tap",n.trigger("tap",t))}}},e.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.4},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&t.touches.length>n.options.swipe_max_touches)return;(t.velocityX>n.options.swipe_velocity||t.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,t),n.trigger(this.name+t.direction,t))}}},e.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25,prevent_default_directions:[]},triggered:!1,handler:function(t,n){if("touchstart"==t.srcEvent.type||"touchend"==t.srcEvent.type?this.preventedFirstMove=!1:this.preventedFirstMove||"touchmove"!=t.srcEvent.type||(n.options.prevent_default_directions.length>0&&-1!=n.options.prevent_default_directions.indexOf(t.direction)&&t.srcEvent.preventDefault(),this.preventedFirstMove=!0),e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&e.Gestures.detection.current.name!=this.name)return;if(e.Gestures.detection.current.name!=this.name&&(e.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);e.Gestures.detection.current.startEvent.center.pageX+=t.deltaX*i,e.Gestures.detection.current.startEvent.center.pageY+=t.deltaY*i,t=e.Gestures.detection.extendEventData(t)}(e.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(e.Gestures.utils.isVertical(r)?t.direction=t.deltaY<0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN:t.direction=t.deltaX<0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&e.Gestures.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!e.Gestures.utils.isVertical(t.direction))&&t.preventDefault();break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(i<n.options.transform_min_scale&&r<n.options.transform_min_rotation)return;e.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),r>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Touch={name:"touch",index:-(1/0),defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==e.Gestures.POINTER_MOUSE?void t.stopDetect():(n.options.prevent_default&&t.preventDefault(),void(t.eventType==e.Gestures.EVENT_START&&n.trigger(this.name,t)))}},e.Gestures.gestures.Release={name:"release",index:1/0,handler:function(t,n){t.eventType==e.Gestures.EVENT_END&&n.trigger(this.name,t)}}}(window.ionic),function(e,t,n){function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function r(){setTimeout(function(){!f.isReady&&f.isWebView()},_)}function a(){f.isWebView()?t.addEventListener("deviceready",o,!1):o(),s&&e.removeEventListener("load",a,!1)}function o(){f.isReady=!0,f.detect();for(var e=0;e<v.length;e++)v[e]();v=[],n.trigger("platformready",{target:t}),h(function(){t.body.classList.add("platform-ready")})}var s,l="ios",c="android",d="windowsphone",u="edge",p="crosswalk",h=n.requestAnimationFrame,f=n.Platform={navigator:e.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(e){f.isReady?e():v.push(e)},detect:function(){f._checkPlatforms(),h(function(){for(var e=0;e<f.platforms.length;e++)t.body.classList.add("platform-"+f.platforms[e])})},setGrade:function(e){var n=f.grade;f.grade=e,h(function(){n&&t.body.classList.remove("grade-"+n),t.body.classList.add("grade-"+e)})},device:function(){return e.device||{}},_checkPlatforms:function(){f.platforms=[];var t="a";f.isWebView()?(f.platforms.push("webview"),e.cordova||e.PhoneGap||e.phonegap?f.platforms.push("cordova"):e.forge&&f.platforms.push("trigger")):f.platforms.push("browser"),f.isIPad()&&f.platforms.push("ipad");var n=f.platform();if(n){f.platforms.push(n);var i=f.version();if(i){var r=i.toString();r.indexOf(".")>0?r=r.replace(".","_"):r+="_0",f.platforms.push(n+r.split("_")[0]),f.platforms.push(n+r),f.isAndroid()&&4.4>i?t=4>i?"c":"b":f.isWindowsPhone()&&(t="b")}}f.setGrade(t)},isWebView:function(){return!!(e.cordova||e.PhoneGap||e.phonegap||e.forge)},isIPad:function(){return/iPad/i.test(f.navigator.platform)?!0:/iPad/i.test(f.ua)},isIOS:function(){return f.is(l)},isAndroid:function(){return f.is(c)},isWindowsPhone:function(){return f.is(d)},isEdge:function(){return f.is(u)},isCrosswalk:function(){return f.is(p)},platform:function(){return null===m&&f.setPlatform(f.device().platform),m},setPlatform:function(e){m="undefined"!=typeof e&&null!==e&&e.length?e.toLowerCase():i("ionicplatform")?i("ionicplatform"):f.ua.indexOf("Edge")>-1?u:f.ua.indexOf("Windows Phone")>-1?d:f.ua.indexOf("Android")>0?c:/iPhone|iPad|iPod/.test(f.ua)?l:f.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===g&&f.setVersion(f.device().version),g},setVersion:function(e){if("undefined"!=typeof e&&null!==e&&(e=e.split("."),e=parseFloat(e[0]+"."+(e.length>1?e[1]:0)),!isNaN(e)))return void(g=e);g=0;var t=f.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[t]&&(e=f.ua.match(n[t]),e&&e.length>2&&(g=parseFloat(e[1]+"."+e[2])))},is:function(e){if(e=e.toLowerCase(),f.platforms)for(var t=0;t<f.platforms.length;t++)if(f.platforms[t]===e)return!0;var n=f.platform();return n?n===e.toLowerCase():f.ua.toLowerCase().indexOf(e)>=0},exitApp:function(){f.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(n){f._showStatusBar=n,f.ready(function(){h(function(){f._showStatusBar?(e.StatusBar&&e.StatusBar.show(),t.body.classList.remove("status-bar-hide")):(e.StatusBar&&e.StatusBar.hide(),t.body.classList.add("status-bar-hide"))})})},fullScreen:function(e,i){f.isFullScreen=e!==!1,n.DomUtil.ready(function(){h(function(){f.isFullScreen?t.body.classList.add("fullscreen"):t.body.classList.remove("fullscreen")}),f.showStatusBar(i===!0)})}},m=null,g=null,v=[],_=2e3;r(),"complete"===t.readyState?a():(s=!0,e.addEventListener("load",a,!1))}(window,document,ionic),function(e,t){"use strict";t.CSS={},t.CSS.TRANSITION=[],t.CSS.TRANSFORM=[],t.EVENTS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSITION=i[n];break}t.CSS.TRANSITION=t.CSS.TRANSITION||"transition";var r=t.CSS.TRANSITION.indexOf("webkit")>-1;t.CSS.TRANSITION_DURATION=(r?"-webkit-":"")+"transition-duration",t.CSS.TRANSITIONEND=(r?"webkitTransitionEnd ":"")+"transitionend"}(),function(){var e="touchstart",n="touchmove",i="touchend",r="touchcancel";window.navigator.pointerEnabled?(e="pointerdown",
n="pointermove",i="pointerup",r="pointercancel"):window.navigator.msPointerEnabled&&(e="MSPointerDown",n="MSPointerMove",i="MSPointerUp",r="MSPointerCancel"),t.EVENTS.touchstart=e,t.EVENTS.touchmove=n,t.EVENTS.touchend=i,t.EVENTS.touchcancel=r}(),"classList"in e.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(){var n,i=t.className.split(/\s+/);for(n=0;n<arguments.length;n++)e(i,i.indexOf(arguments[n]),arguments[n]);t.className=i.join(" ")}}var t=this;return{add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}}})}(document,ionic);var X,F,B,W,$,q,U,K,j="touchmove",Z=12,Q=50,J={click:i,mousedown:r,mouseup:a,mousemove:o,touchstart:s,touchend:l,touchcancel:d,touchmove:c,pointerdown:s,pointerup:l,pointercancel:d,pointermove:c,MSPointerDown:s,MSPointerUp:l,MSPointerCancel:d,MSPointerMove:c,focusin:m,focusout:g};ionic.tap={register:function(t){return X=t,e("click",!0,!0),e("mouseup"),e("mousedown"),window.navigator.pointerEnabled?(e("pointerdown"),e("pointerup"),e("pointercancel"),j="pointermove"):window.navigator.msPointerEnabled?(e("MSPointerDown"),e("MSPointerUp"),e("MSPointerCancel"),j="MSPointerMove"):(e("touchstart"),e("touchend"),e("touchcancel")),e("focusin"),e("focusout"),function(){for(var t in J)e(t,!1);X=null,F=null,B=!1,$=!1,q=null}},ignoreScrollStart:function(e){return e.defaultPrevented||/^(file|range)$/i.test(e.target.type)||"true"==(e.target.dataset?e.target.dataset.preventScroll:e.target.getAttribute("data-prevent-scroll"))||!!/^(object|embed)$/i.test(e.target.tagName)||ionic.tap.isElementTapDisabled(e.target)},isTextInput:function(e){return!!e&&("TEXTAREA"==e.tagName||"true"===e.contentEditable||"INPUT"==e.tagName&&!/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(e.type))},isDateInput:function(e){return!!e&&"INPUT"==e.tagName&&/^(date|time|datetime-local|month|week)$/i.test(e.type)},isVideo:function(e){return!!e&&"VIDEO"==e.tagName},isKeyboardElement:function(e){return!ionic.Platform.isIOS()||ionic.Platform.isIPad()?ionic.tap.isTextInput(e)&&!ionic.tap.isDateInput(e):ionic.tap.isTextInput(e)||!!e&&"SELECT"==e.tagName},isLabelWithTextInput:function(e){var t=w(e,!1);return!!t&&ionic.tap.isTextInput(T(t))},containsOrIsTextInput:function(e){return ionic.tap.isTextInput(e)||ionic.tap.isLabelWithTextInput(e)},cloneFocusedInput:function(e){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var t=e.querySelector(":focus");if(ionic.tap.isTextInput(t)&&!ionic.tap.isDateInput(t)){var n=t.cloneNode(!0);n.value=t.value,n.classList.add("cloned-text-input"),n.readOnly=!0,t.isContentEditable&&(n.contentEditable=t.contentEditable,n.innerHTML=t.innerHTML),t.parentElement.insertBefore(n,t),t.classList.add("previous-input-focus"),n.scrollTop=t.scrollTop}}))},hasCheckedClone:!1,removeClonedInputs:function(e){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var t,n=e.querySelectorAll(".cloned-text-input"),i=e.querySelectorAll(".previous-input-focus");for(t=0;t<n.length;t++)n[t].parentElement.removeChild(n[t]);for(t=0;t<i.length;t++)i[t].classList.remove("previous-input-focus"),i[t].style.top="",ionic.keyboard.isOpen&&!ionic.keyboard.isClosing&&i[t].focus()})},requiresNativeClick:function(e){return ionic.Platform.isWindowsPhone()&&("A"==e.tagName||"BUTTON"==e.tagName||e.hasAttribute("ng-click")||"INPUT"==e.tagName&&("button"==e.type||"submit"==e.type))?!0:!e||e.disabled||/^(file|range)$/i.test(e.type)||/^(object|video)$/i.test(e.tagName)||ionic.tap.isLabelContainingFileInput(e)?!0:ionic.tap.isElementTapDisabled(e)},isLabelContainingFileInput:function(e){var t=w(e);if("LABEL"!==t.tagName)return!1;var n=t.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(e){if(e&&1===e.nodeType)for(var t=e;t;){if("true"==(t.dataset?t.dataset.tapDisabled:t.getAttribute&&t.getAttribute("data-tap-disabled")))return!0;t=t.parentElement}return!1},setTolerance:function(e,t){Z=e,Q=t},cancelClick:function(){$=!0},pointerCoord:function(e){var t={x:0,y:0};if(e){var n=e.touches&&e.touches.length?e.touches:[e],i=e.changedTouches&&e.changedTouches[0]||n[0];i&&(t.x=i.clientX||i.pageX||0,t.y=i.clientY||i.pageY||0)}return t}},ionic.DomUtil.ready(function(){var e="undefined"!=typeof angular?angular:null;(!e||e&&!e.scenario)&&ionic.tap.register(document)}),function(e,t){"use strict";function n(){a={},t.requestAnimationFrame(r)}function i(){for(var e in a)a[e]&&(a[e].classList.add(l),o[e]=a[e]);a={}}function r(){if(t.transition&&t.transition.isActive)return void setTimeout(r,400);for(var e in o)o[e]&&(o[e].classList.remove(l),delete o[e])}var a={},o={},s=0,l="activated";t.activator={start:function(e){var n=t.tap.pointerCoord(e).x;n>0&&30>n||t.requestAnimationFrame(function(){if(!(t.scroll&&t.scroll.isScrolling||t.tap.requiresNativeClick(e.target))){for(var n,r=e.target,o=0;6>o&&(r&&1===r.nodeType);o++){if(n&&r.classList&&r.classList.contains("item")){n=r;break}if("A"==r.tagName||"BUTTON"==r.tagName||r.hasAttribute("ng-click")){n=r;break}if(r.classList.contains("button")){n=r;break}if("ION-CONTENT"==r.tagName||r.classList&&r.classList.contains("pane")||"BODY"==r.tagName)break;r=r.parentElement}n&&(a[s]=n,t.requestAnimationFrame(i),s=s>29?0:s+1)}})},end:function(){setTimeout(n,200)}}}(document,ionic),function(e){var t=0;e.Utils={arrayMove:function(e,t,n){if(n>=e.length)for(var i=n-e.length;i--+1;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e},proxy:function(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(e,t,n){var i,r,a,o,s;return function(){a=this,r=arguments,o=new Date;var l=function(){var c=new Date-o;t>c?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(a,r)))},c=n&&!i;return i||(i=setTimeout(l,t)),c&&(s=e.apply(a,r)),s}},throttle:function(e,t,n){var i,r,a,o=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:Date.now(),o=null,a=e.apply(i,r)};return function(){var c=Date.now();s||n.leading!==!1||(s=c);var d=t-(c-s);return i=this,r=arguments,0>=d?(clearTimeout(o),o=null,s=c,a=e.apply(i,r)):o||n.trailing===!1||(o=setTimeout(l,d)),a}},inherit:function(t,n){var i,r=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)},e.extend(i,r,n);var a=function(){this.constructor=i};return a.prototype=r.prototype,i.prototype=new a,t&&e.extend(i.prototype,t),i.__super__=r.prototype,i},extend:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){var i=t[n];if(i)for(var r in i)e[r]=i[r]}return e},nextUid:function(){return"ion"+t++},disconnectScope:function(e){if(e&&e.$root!==e){var t=e.$parent;e.$$disconnected=!0,e.$broadcast("$ionic.disconnectScope",e),t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$broadcast("$ionic.reconnectScope",e),e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}},isScopeDisconnected:function(e){for(var t=e;t;){if(t.$$disconnected)return!0;t=t.$parent}return!1}},e.inherit=e.Utils.inherit,e.extend=e.Utils.extend,e.throttle=e.Utils.throttle,e.proxy=e.Utils.proxy,e.debounce=e.Utils.debounce}(window.ionic);var ee,te,ne,ie,re,ae=0,oe=0,se=0,le=!1,ce="keyboard-open",de="scroll-content",ue=ionic.debounce(E,200,!0),pe=ionic.debounce(y,100,!0);ionic.keyboard={isOpen:!1,isClosing:!1,isOpening:!1,height:0,isLandscape:!1,isInitialized:!1,hide:function(){V()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()},show:function(){V()&&cordova.plugins.Keyboard.show()},disable:function(){V()?(window.removeEventListener("native.keyboardshow",pe),window.removeEventListener("native.keyboardhide",x)):document.body.removeEventListener("focusout",x),document.body.removeEventListener("ionic.focusin",ue),document.body.removeEventListener("focusin",ue),window.removeEventListener("orientationchange",D),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!1},enable:function(){S()}},ae=G(),ionic.Platform.ready(function(){A(),window.addEventListener("orientationchange",D),setTimeout(A,999),window.navigator.msPointerEnabled?document.addEventListener("MSPointerDown",S,!1):document.addEventListener("touchstart",S,!1)});var he,fe={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){R(),window.addEventListener("orientationchange",function(){setTimeout(H,1e3)},!1)}),function(e){"use strict";e.views.View=function(){this.initialize.apply(this,arguments)},e.views.View.inherit=e.inherit,e.extend(e.views.View.prototype,{initialize:function(){}})}(window.ionic);var me={effect:{}};!function(e){var t=Date.now||function(){return+new Date},n=60,i=1e3,r={},a=1;me.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var i=60,r={},a=0,o=1,s=null,l=+new Date;return function(e){var t=o++;return r[t]=e,a++,null===s&&(s=setInterval(function(){var e=+new Date,t=r;r={},a=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),l=e);e-l>2500&&(clearInterval(s),s=null)},1e3/i)),t}}(),stop:function(e){var t=null!=r[e];return t&&(r[e]=null),t},isRunning:function(e){return null!=r[e]},start:function(e,o,s,l,c,d){var u=t(),p=u,h=0,f=0,m=a++;if(d||(d=document.body),m%20===0){var g={};for(var v in r)g[v]=!0;r=g}var _=function(a){var g=a!==!0,v=t();if(!r[m]||o&&!o(m))return r[m]=null,void(s&&s(n-f/((v-u)/i),m,!1));if(g)for(var w=Math.round((v-p)/(i/n))-1,T=0;T<Math.min(w,4);T++)_(!0),f++;l&&(h=(v-u)/l,h>1&&(h=1));var b=c?c(h):h;e(b,v,g)!==!1&&1!==h||!g?g&&(p=v,me.effect.Animate.requestAnimationFrame(_,d)):(r[m]=null,s&&s(n-f/((v-u)/i),m,1===h||null==l))};return r[m]=!0,me.effect.Animate.requestAnimationFrame(_,d),m}}}(window),function(e){var t=function(){},n=function(e){return Math.pow(e-1,3)+1},i=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};e.views.Scroll=e.views.View.inherit({initialize:function(n){var i=this;i.__container=n.el,i.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),i.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,decelVelocityThreshold:4,decelVelocityThresholdPaging:4,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,preventDefault:!1,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,freeze:!1,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var r in n)i.options[r]=n[r];i.hintResize=e.debounce(function(){i.resize()},1e3,!0),i.onScroll=function(){e.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},i.freeze=function(e){return arguments.length&&(i.options.freeze=e),i.options.freeze},i.freezeShut=i.freeze,i.setScrollStart=function(){e.scroll.isScrolling=Math.abs(e.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},i.setScrollStop=function(){e.scroll.isScrolling=!1,e.scroll.lastTop=i.__scrollTop},i.triggerScrollEvent=e.throttle(function(){i.onScroll(),e.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.options.scrollEventInterval),i.triggerScrollEndEvent=function(){e.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.__scrollLeft=i.options.startX,i.__scrollTop=i.options.startY,i.__callback=i.getRenderFn(),i.__initEventHandlers(),i.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function t(e){return e.touches&&e.touches.length?e.touches:[{pageX:e.pageX,pageY:e.pageY}]}var n,i=this,r=i.__container;if(i.scrollChildIntoView=function(t){var a=r.getBoundingClientRect().bottom;n=r.offsetHeight;var o=i.isShrunkForKeyboard,s=r.parentNode.classList.contains("modal"),l=s&&window.innerWidth>=680;if(!o){if(e.Platform.isIOS()||e.Platform.isFullScreen||l){var c=t.detail.viewportHeight-a,d=Math.max(0,t.detail.keyboardHeight-c);e.requestAnimationFrame(function(){n-=d,r.style.height=n+"px",r.style.overflow="visible",i.resize()})}i.isShrunkForKeyboard=!0}t.detail.isElementUnderKeyboard&&e.requestAnimationFrame(function(){r.scrollTop=0,i.isShrunkForKeyboard&&!o&&(a=r.getBoundingClientRect().bottom);var s=.5*n,l=(t.detail.elementBottom+t.detail.elementTop)/2,c=l-a,d=c+s;d>0&&(e.Platform.isIOS()&&e.tap.cloneFocusedInput(r,i),i.scrollBy(0,d,!0),i.onScroll())}),t.stopPropagation()},i.resetScrollView=function(){i.isShrunkForKeyboard&&(i.isShrunkForKeyboard=!1,r.style.height="",r.style.overflow=""),i.resize()},r.addEventListener("scrollChildIntoView",i.scrollChildIntoView),document.addEventListener("resetScrollView",i.resetScrollView),i.touchStart=function(n){if(i.startCoordinates=e.tap.pointerCoord(n),!e.tap.ignoreScrollStart(n)){if(i.__isDown=!0,e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName)return void(i.__hasStarted=!1);i.__isSelectable=!0,i.__enableScrollY=!0,i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),n.preventDefault()}},i.touchMove=function(n){if(!(i.options.freeze||!i.__isDown||!i.__isDown&&n.defaultPrevented||"TEXTAREA"===n.target.tagName&&n.target.parentElement.querySelector(":focus"))){if(!i.__hasStarted&&(e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName))return i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),void n.preventDefault();if(i.startCoordinates){var a=e.tap.pointerCoord(n);i.__isSelectable&&e.tap.isTextInput(n.target)&&Math.abs(i.startCoordinates.x-a.x)>20&&(i.__enableScrollY=!1,i.__isSelectable=!0),i.__enableScrollY&&Math.abs(i.startCoordinates.y-a.y)>10&&(i.__isSelectable=!1,e.tap.cloneFocusedInput(r,i))}i.doTouchMove(t(n),n.timeStamp,n.scale),i.__isDown=!0}},i.touchMoveBubble=function(e){i.__isDown&&i.options.preventDefault&&e.preventDefault()},i.touchEnd=function(t){i.__isDown&&(i.doTouchEnd(t,t.timeStamp),i.__isDown=!1,i.__hasStarted=!1,i.__isSelectable=!0,i.__enableScrollY=!0,i.__isDragging||i.__isDecelerating||i.__isAnimating||e.tap.removeClonedInputs(r,i))},i.mouseWheel=e.animationFrameThrottle(function(t){var n=e.DomUtil.getParentOrSelfWithClass(t.target,"ionic-scroll");i.options.freeze||n!==i.__container||(i.hintResize(),i.scrollBy((t.wheelDeltaX||t.deltaX||0)/i.options.wheelDampen,(-t.wheelDeltaY||t.deltaY||0)/i.options.wheelDampen),i.__fadeScrollbars("in"),clearTimeout(i.__wheelHideBarTimeout),i.__wheelHideBarTimeout=setTimeout(function(){i.__fadeScrollbars("out")},100))}),"ontouchstart"in window)r.addEventListener("touchstart",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("touchmove",i.touchMoveBubble,!1),document.addEventListener("touchmove",i.touchMove,!1),document.addEventListener("touchend",i.touchEnd,!1),document.addEventListener("touchcancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else if(window.navigator.pointerEnabled)r.addEventListener("pointerdown",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("pointermove",i.touchMoveBubble,!1),document.addEventListener("pointermove",i.touchMove,!1),document.addEventListener("pointerup",i.touchEnd,!1),document.addEventListener("pointercancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else if(window.navigator.msPointerEnabled)r.addEventListener("MSPointerDown",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("MSPointerMove",i.touchMoveBubble,!1),document.addEventListener("MSPointerMove",i.touchMove,!1),document.addEventListener("MSPointerUp",i.touchEnd,!1),document.addEventListener("MSPointerCancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else{var a=!1;i.mouseDown=function(n){e.tap.ignoreScrollStart(n)||"SELECT"===n.target.tagName||(i.doTouchStart(t(n),n.timeStamp),e.tap.isTextInput(n.target)||n.preventDefault(),a=!0)},i.mouseMove=function(e){i.options.freeze||!a||!a&&e.defaultPrevented||(i.doTouchMove(t(e),e.timeStamp),a=!0)},i.mouseMoveBubble=function(e){a&&i.options.preventDefault&&e.preventDefault()},i.mouseUp=function(e){a&&(i.doTouchEnd(e,e.timeStamp),a=!1)},r.addEventListener("mousedown",i.mouseDown,!1),i.options.preventDefault&&r.addEventListener("mousemove",i.mouseMoveBubble,!1),document.addEventListener("mousemove",i.mouseMove,!1),document.addEventListener("mouseup",i.mouseUp,!1),document.addEventListener("mousewheel",i.mouseWheel,!1),document.addEventListener("wheel",i.mouseWheel,!1)}},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("touchstart",n.touchStart),i.removeEventListener("touchmove",n.touchMoveBubble),document.removeEventListener("touchmove",n.touchMove),document.removeEventListener("touchend",n.touchEnd),document.removeEventListener("touchcancel",n.touchEnd),i.removeEventListener("pointerdown",n.touchStart),i.removeEventListener("pointermove",n.touchMoveBubble),document.removeEventListener("pointermove",n.touchMove),document.removeEventListener("pointerup",n.touchEnd),document.removeEventListener("pointercancel",n.touchEnd),i.removeEventListener("MSPointerDown",n.touchStart),i.removeEventListener("MSPointerMove",n.touchMoveBubble),document.removeEventListener("MSPointerMove",n.touchMove),document.removeEventListener("MSPointerUp",n.touchEnd),document.removeEventListener("MSPointerCancel",n.touchEnd),i.removeEventListener("mousedown",n.mouseDown),i.removeEventListener("mousemove",n.mouseMoveBubble),document.removeEventListener("mousemove",n.mouseMove),document.removeEventListener("mouseup",n.mouseUp),document.removeEventListener("mousewheel",n.mouseWheel),document.removeEventListener("wheel",n.mouseWheel),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),document.removeEventListener("resetScrollView",n.resetScrollView),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.__callback=n.scrollChildIntoView=n.resetScrollView=t,n.mouseMove=n.mouseDown=n.mouseUp=n.mouseWheel=n.touchStart=n.touchMove=n.touchEnd=n.touchCancel=t,n.resize=n.scrollTo=n.zoomTo=n.__scrollingComplete=t,i=null},__createScrollbar:function(e){var t=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator scroll-bar-fade-out","h"==e?t.className="scroll-bar scroll-bar-h":t.className="scroll-bar scroll-bar-v",t.appendChild(n),t},__createScrollbars:function(){var e,t,n=this;n.options.scrollingX&&(e={el:n.__createScrollbar("h"),sizeRatio:1},e.indicator=e.el.children[0],n.options.scrollbarX&&n.__container.appendChild(e.el),n.__indicatorX=e),n.options.scrollingY&&(t={el:n.__createScrollbar("v"),sizeRatio:1},t.indicator=t.el.children[0],n.options.scrollbarY&&n.__container.appendChild(t.el),n.__indicatorY=t)},__resizeScrollbars:function(){var t=this;if(t.__indicatorX){var n=Math.max(Math.round(t.__clientWidth*t.__clientWidth/t.__contentWidth),20);n>t.__contentWidth&&(n=0),n!==t.__indicatorX.size&&e.requestAnimationFrame(function(){t.__indicatorX.indicator.style.width=n+"px"}),t.__indicatorX.size=n,t.__indicatorX.minScale=t.options.minScrollbarSizeX/n,t.__indicatorX.maxPos=t.__clientWidth-n,t.__indicatorX.sizeRatio=t.__maxScrollLeft?t.__indicatorX.maxPos/t.__maxScrollLeft:1}if(t.__indicatorY){var i=Math.max(Math.round(t.__clientHeight*t.__clientHeight/t.__contentHeight),20);i>t.__contentHeight&&(i=0),i!==t.__indicatorY.size&&e.requestAnimationFrame(function(){t.__indicatorY&&(t.__indicatorY.indicator.style.height=i+"px")}),t.__indicatorY.size=i,t.__indicatorY.minScale=t.options.minScrollbarSizeY/i,t.__indicatorY.maxPos=t.__clientHeight-i,t.__indicatorY.sizeRatio=t.__maxScrollTop?t.__indicatorY.maxPos/t.__maxScrollTop:1}},__repositionScrollbars:function(){var e,t,n,i,r,a,o=this,s=0,l=0;if(o.__indicatorX){o.__indicatorY&&(s=10),r=Math.round(o.__indicatorX.sizeRatio*o.__scrollLeft)||0,n=o.__scrollLeft-(o.__maxScrollLeft-s),o.__scrollLeft<0?(t=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-Math.abs(o.__scrollLeft))/o.__indicatorX.size),r=0,o.__indicatorX.indicator.style[o.__transformOriginProperty]="left center"):n>0?(t=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-n)/o.__indicatorX.size),r=o.__indicatorX.maxPos-s,o.__indicatorX.indicator.style[o.__transformOriginProperty]="right center"):(r=Math.min(o.__maxScrollLeft,Math.max(0,r)),t=1);var c="translate3d("+r+"px, 0, 0) scaleX("+t+")";o.__indicatorX.transformProp!==c&&(o.__indicatorX.indicator.style[o.__transformProperty]=c,o.__indicatorX.transformProp=c)}if(o.__indicatorY){a=Math.round(o.__indicatorY.sizeRatio*o.__scrollTop)||0,o.__indicatorX&&(l=10),i=o.__scrollTop-(o.__maxScrollTop-l),o.__scrollTop<0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-Math.abs(o.__scrollTop))/o.__indicatorY.size),a=0,"center top"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center top",o.__indicatorY.originProp="center top")):i>0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-i)/o.__indicatorY.size),a=o.__indicatorY.maxPos-l,"center bottom"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center bottom",o.__indicatorY.originProp="center bottom")):(a=Math.min(o.__maxScrollTop,Math.max(0,a)),e=1);var d="translate3d(0,"+a+"px, 0) scaleY("+e+")";o.__indicatorY.transformProp!==d&&(o.__indicatorY.indicator.style[o.__transformProperty]=d,o.__indicatorY.transformProp=d)}},__fadeScrollbars:function(e,t){var n=this;if(n.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==e?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},t||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){this.options.scrollingComplete(),e.tap.removeClonedInputs(this.__container,this),this.__fadeScrollbars("out")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},getRenderFn:function(){var e,t=this,n=t.__content,i=document.documentElement.style;"MozAppearance"in i?e="gecko":"WebkitAppearance"in i?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var r,a={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],o=document.createElement("div"),s=a+"Perspective",l=a+"Transform",c=a+"TransformOrigin";return t.__perspectiveProperty=l,t.__transformProperty=l,t.__transformOriginProperty=c,o.style[s]!==r?function(e,i,r,a){var o="translate3d("+-e+"px,"+-i+"px,0) scale("+r+")";o!==t.contentTransform&&(n.style[l]=o,t.contentTransform=o),t.__repositionScrollbars(),a||t.triggerScrollEvent()}:o.style[l]!==r?function(e,i,r,a){n.style[l]="translate("+-e+"px,"+-i+"px) scale("+r+")",t.__repositionScrollbars(),a||t.triggerScrollEvent()}:function(e,i,r,a){n.style.marginLeft=e?-e/r+"px":"",n.style.marginTop=i?-i/r+"px":"",n.style.zoom=r||"",t.__repositionScrollbars(),a||t.triggerScrollEvent()}},setDimensions:function(e,t,n,i,r){var a=this;(e||t||n||i)&&(e===+e&&(a.__clientWidth=e),t===+t&&(a.__clientHeight=t),n===+n&&(a.__contentWidth=n),i===+i&&(a.__contentHeight=i),a.__computeScrollMax(),a.__resizeScrollbars(),r||a.scrollTo(a.__scrollLeft,a.__scrollTop,!0,null,!0))},setPosition:function(e,t){this.__clientLeft=e||0,this.__clientTop=t||0},setSnapSize:function(e,t){this.__snapWidth=e,this.__snapHeight=t},activatePullToRefresh:function(t,n){var i=this;i.__refreshHeight=t,i.__refreshActivate=function(){e.requestAnimationFrame(n.activate)},i.__refreshDeactivate=function(){e.requestAnimationFrame(n.deactivate)},i.__refreshStart=function(){e.requestAnimationFrame(n.start)},i.__refreshShow=function(){e.requestAnimationFrame(n.show)},i.__refreshHide=function(){e.requestAnimationFrame(n.hide)},i.__refreshTail=function(){e.requestAnimationFrame(n.tail)},i.__refreshTailTime=100,i.__minSpinTime=600},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);var e=new Date;this.refreshStartTime=e.getTime(),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this,t=new Date,n=0;e.refreshStartTime+e.__minSpinTime>t.getTime()&&(n=e.refreshStartTime+e.__minSpinTime-t.getTime()),setTimeout(function(){e.__refreshTail&&e.__refreshTail(),setTimeout(function(){e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.__refreshHide&&e.__refreshHide(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},e.__refreshTailTime)},n)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(e,t,n,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");r.__isDecelerating&&(me.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var a=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==i&&(i=r.__clientHeight/2),e=Math.max(Math.min(e,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(e);var o=(n+r.__scrollLeft)*e/a-n,s=(i+r.__scrollTop)*e/a-i;o>r.__maxScrollLeft?o=r.__maxScrollLeft:0>o&&(o=0),s>r.__maxScrollTop?s=r.__maxScrollTop:0>s&&(s=0),r.__publish(o,s,e,t)},zoomBy:function(e,t,n,i){this.zoomTo(this.__zoomLevel*e,t,n,i)},scrollTo:function(e,t,n,i,r){var a=this;if(a.__isDecelerating&&(me.effect.Animate.stop(a.__isDecelerating),a.__isDecelerating=!1),null!=i&&i!==a.__zoomLevel){if(!a.options.zooming)throw new Error("Zooming is not enabled!");e*=i,t*=i,a.__computeScrollMax(i)}else i=a.__zoomLevel;a.options.scrollingX?a.options.paging?e=Math.round(e/a.__clientWidth)*a.__clientWidth:a.options.snapping&&(e=Math.round(e/a.__snapWidth)*a.__snapWidth):e=a.__scrollLeft,a.options.scrollingY?a.options.paging?t=Math.round(t/a.__clientHeight)*a.__clientHeight:a.options.snapping&&(t=Math.round(t/a.__snapHeight)*a.__snapHeight):t=a.__scrollTop,e=Math.max(Math.min(a.__maxScrollLeft,e),0),t=Math.max(Math.min(a.__maxScrollTop,t),0),e===a.__scrollLeft&&t===a.__scrollTop&&(n=!1),a.__publish(e,t,i,n,r)},scrollBy:function(e,t,n){var i=this,r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,a=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),a+(t||0),n)},doMouseZoom:function(e,t,n,i){var r=e>0?.97:1.03;return this.zoomTo(this.__zoomLevel*r,!1,n-this.__clientLeft,i-this.__clientTop)},doTouchStart:function(e,t){var n=this;n.__decStopped=!(!n.__isDecelerating&&!n.__isAnimating),n.hintResize(),t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now()),n.__interruptedAnimation=!0,n.__isDecelerating&&(me.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(me.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,r,a=1===e.length;a?(i=e[0].pageX,r=e[0].pageY):(i=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=r,n.__initialTouches=e,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=r,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!a&&n.options.scrollingX,n.__enableScrollY=!a&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!a,n.__isSingleTouch=a,n.__positions=[]},doTouchMove:function(e,t,n){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var i=this;if(i.__isTracking){var r,a;2===e.length?(r=Math.abs(e[0].pageX+e[1].pageX)/2,a=Math.abs(e[0].pageY+e[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,e))):(r=e[0].pageX,a=e[0].pageY);var o=i.__positions;if(i.__isDragging){i.__decStopped=!1;var s=r-i.__lastTouchLeft,l=a-i.__lastTouchTop,c=i.__scrollLeft,d=i.__scrollTop,u=i.__zoomLevel;if(null!=n&&i.options.zooming){var p=u;if(u=u/i.__lastScale*n,u=Math.max(Math.min(u,i.options.maxZoom),i.options.minZoom),p!==u){var h=r-i.__clientLeft,f=a-i.__clientTop;c=(h+c)*u/p-h,d=(f+d)*u/p-f,i.__computeScrollMax(u)}}if(i.__enableScrollX){c-=s*i.options.speedMultiplier;var m=i.__maxScrollLeft;(c>m||0>c)&&(i.options.bouncing?c+=s/2*i.options.speedMultiplier:c=c>m?m:0)}if(i.__enableScrollY){d-=l*i.options.speedMultiplier;var g=i.__maxScrollTop;d>g||0>d?i.options.bouncing||i.__refreshHeight&&0>d?(d+=l/2*i.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(0>d?(i.__refreshHidden=!1,i.__refreshShow()):(i.__refreshHide(),i.__refreshHidden=!0),!i.__refreshActive&&d<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&d>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):d=d>g?g:0:i.__refreshHeight&&!i.__refreshHidden&&(i.__refreshHide(),i.__refreshHidden=!0)}o.length>60&&o.splice(0,30),o.push(c,d,t),i.__publish(c,d,u)}else{var v=i.options.locking?3:0,_=5,w=Math.abs(r-i.__initialTouchLeft),T=Math.abs(a-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&w>=v,i.__enableScrollY=i.options.scrollingY&&T>=v,o.push(i.__scrollLeft,i.__scrollTop,t),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(w>=_||T>=_),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=r,i.__lastTouchTop=a,i.__lastTouchMove=t,i.__lastScale=n}},doTouchEnd:function(t,n){n instanceof Date&&(n=n.valueOf()),"number"!=typeof n&&(n=Date.now());var i=this;if(i.__isTracking){if(i.__isTracking=!1,i.__isDragging)if(i.__isDragging=!1,i.__isSingleTouch&&i.options.animating&&n-i.__lastTouchMove<=100){for(var r=i.__positions,a=r.length-1,o=a,s=a;s>0&&r[s]>i.__lastTouchMove-100;s-=3)o=s;
if(o!==a){var l=r[a]-r[o],c=i.__scrollLeft-r[o-2],d=i.__scrollTop-r[o-1];i.__decelerationVelocityX=c/l*(1e3/60),i.__decelerationVelocityY=d/l*(1e3/60);var u=i.options.paging||i.options.snapping?i.options.decelVelocityThresholdPaging:i.options.decelVelocityThreshold;(Math.abs(i.__decelerationVelocityX)>u||Math.abs(i.__decelerationVelocityY)>u)&&(i.__refreshActive||i.__startDeceleration(n))}else i.__scrollingComplete()}else n-i.__lastTouchMove>100&&i.__scrollingComplete();else i.__decStopped&&(t.isTapHandled=!0,i.__decStopped=!1);if(!i.__isDecelerating)if(i.__refreshActive&&i.__refreshStart){i.__publish(i.__scrollLeft,-i.__refreshHeight,i.__zoomLevel,!0);var p=new Date;i.refreshStartTime=p.getTime(),i.__refreshStart&&i.__refreshStart(),e.Platform.isAndroid()||i.__startDeceleration()}else(i.__interruptedAnimation||i.__isDragging)&&i.__scrollingComplete(),i.scrollTo(i.__scrollLeft,i.__scrollTop,!0,i.__zoomLevel),i.__refreshActive&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate());i.__positions.length=0}},__publish:function(e,t,r,a,o){var s=this,l=s.__isAnimating;if(l&&(me.effect.Animate.stop(l),s.__isAnimating=!1),a&&s.options.animating){s.__scheduledLeft=e,s.__scheduledTop=t,s.__scheduledZoom=r;var c=s.__scrollLeft,d=s.__scrollTop,u=s.__zoomLevel,p=e-c,h=t-d,f=r-u,m=function(e,t,n){n&&(s.__scrollLeft=c+p*e,s.__scrollTop=d+h*e,s.__zoomLevel=u+f*e,s.__callback&&s.__callback(s.__scrollLeft,s.__scrollTop,s.__zoomLevel,o))},g=function(e){return s.__isAnimating===e},v=function(e,t,n){t===s.__isAnimating&&(s.__isAnimating=!1),(s.__didDecelerationComplete||n)&&s.__scrollingComplete(),s.options.zooming&&s.__computeScrollMax()};s.__isAnimating=me.effect.Animate.start(m,g,v,s.options.animationDuration,l?n:i)}else s.__scheduledLeft=s.__scrollLeft=e,s.__scheduledTop=s.__scrollTop=t,s.__scheduledZoom=s.__zoomLevel=r,s.__callback&&s.__callback(e,t,r,o),s.options.zooming&&s.__computeScrollMax()},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0),t.__didWaitForSize||t.__maxScrollLeft||t.__maxScrollTop||(t.__didWaitForSize=!0,t.__waitForSize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__startDeceleration:function(){var e=this;if(e.options.paging){var t=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),n=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,r=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(t/i)*i,e.__minDecelerationScrollTop=Math.floor(n/r)*r,e.__maxDecelerationScrollLeft=Math.ceil(t/i)*i,e.__maxDecelerationScrollTop=Math.ceil(n/r)*r}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop,e.__refreshActive&&(e.__minDecelerationScrollTop=-1*e.__refreshHeight);var a=function(t,n,i){e.__stepThroughDeceleration(i)};e.__minVelocityToKeepDecelerating=e.options.snapping?4:.1;var o=function(){var t=Math.abs(e.__decelerationVelocityX)>=e.__minVelocityToKeepDecelerating||Math.abs(e.__decelerationVelocityY)>=e.__minVelocityToKeepDecelerating;return t||(e.__didDecelerationComplete=!0,e.options.bouncing&&!e.__refreshActive&&e.scrollTo(Math.min(Math.max(e.__scrollLeft,0),e.__maxScrollLeft),Math.min(Math.max(e.__scrollTop,0),e.__maxScrollTop),e.__refreshActive)),t},s=function(){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.__scrollingComplete(),e.options.paging&&e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=me.effect.Animate.start(a,o,s)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,i=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var r=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);r!==n&&(n=r,t.__decelerationVelocityX=0);var a=Math.max(Math.min(t.__maxDecelerationScrollTop,i),t.__minDecelerationScrollTop);a!==i&&(i=a,t.__decelerationVelocityY=0)}if(e?t.__publish(n,i,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=i),!t.options.paging){var o=t.options.deceleration;t.__decelerationVelocityX*=o,t.__decelerationVelocityY*=o}if(t.options.bouncing){var s=0,l=0,c=t.options.penetrationDeceleration,d=t.options.penetrationAcceleration;if(n<t.__minDecelerationScrollLeft?s=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(s=t.__maxDecelerationScrollLeft-n),i<t.__minDecelerationScrollTop?l=t.__minDecelerationScrollTop-i:i>t.__maxDecelerationScrollTop&&(l=t.__maxDecelerationScrollTop-i),0!==s){var u=s*t.__decelerationVelocityX<=t.__minDecelerationScrollLeft;u&&(t.__decelerationVelocityX+=s*c);var p=Math.abs(t.__decelerationVelocityX)<=t.__minVelocityToKeepDecelerating;(!u||p)&&(t.__decelerationVelocityX=s*d)}if(0!==l){var h=l*t.__decelerationVelocityY<=t.__minDecelerationScrollTop;h&&(t.__decelerationVelocityY+=l*c);var f=Math.abs(t.__decelerationVelocityY)<=t.__minVelocityToKeepDecelerating;(!h||f)&&(t.__decelerationVelocityY=l*d)}}},__getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(e,t){return e.length>=2&&t.length>=2?this.__getDistance(t[0],t[1])/this.__getDistance(e[0],e[1]):1}}),e.scroll={isScrolling:!1,lastTop:0}}(ionic),function(e){var t=function(){},n=function(e){};e.views.ScrollNative=e.views.View.inherit({initialize:function(t){var n=this;n.__container=n.el=t.el,n.__content=t.el.firstElementChild,n.__frozen=!1,n.isNative=!0,n.__scrollTop=n.el.scrollTop,n.__scrollLeft=n.el.scrollLeft,n.__clientHeight=n.__content.clientHeight,n.__clientWidth=n.__content.clientWidth,n.__maxScrollTop=Math.max(n.__contentHeight-n.__clientHeight,0),n.__maxScrollLeft=Math.max(n.__contentWidth-n.__clientWidth,0),(t.startY>=0||t.startX>=0)&&e.requestAnimationFrame(function(){n.el.scrollTop=t.startY||0,n.el.scrollLeft=t.startX||0,n.__scrollTop=n.el.scrollTop,n.__scrollLeft=n.el.scrollLeft}),n.options={freeze:!1,getContentWidth:function(){return Math.max(n.__content.scrollWidth,n.__content.offsetWidth)},getContentHeight:function(){return Math.max(n.__content.scrollHeight,n.__content.offsetHeight+2*n.__content.offsetTop)}};for(var i in t)n.options[i]=t[i];n.onScroll=function(){e.scroll.isScrolling||(e.scroll.isScrolling=!0),clearTimeout(n.scrollTimer),n.scrollTimer=setTimeout(function(){e.scroll.isScrolling=!1},80)},n.freeze=function(e){n.__frozen=e},n.freezeShut=function(e){n.__frozenShut=e},n.__initEventHandlers()},__callback:function(){n("__callback")},zoomTo:function(){n("zoomTo")},zoomBy:function(){n("zoomBy")},activatePullToRefresh:function(){n("activatePullToRefresh")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},run:function(){this.resize()},getValues:function(){var e=this;return e.update(),{left:e.__scrollLeft,top:e.__scrollTop,zoom:1}},update:function(){var e=this;e.__scrollLeft=e.el.scrollLeft,e.__scrollTop=e.el.scrollTop},setDimensions:function(e,t,n,i){var r=this;(e||t||n||i)&&(e===+e&&(r.__clientWidth=e),t===+t&&(r.__clientHeight=t),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax())},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},scrollBy:function(e,t,n){var i=this;i.update();var r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,a=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),a+(t||0),n)},scrollTo:function(t,n,i){function r(t,n){function i(e){return--e*e*e+1}function r(){var p=Date.now(),h=Math.min(1,(p-l)/c),f=i(h);d!=t&&(a.el.scrollTop=parseInt(f*(t-d)+d,10)),u!=n&&(a.el.scrollLeft=parseInt(f*(n-u)+u,10)),1>h?e.requestAnimationFrame(r):(e.tap.removeClonedInputs(a.__container,a),a.el.style.overflowX=o,a.el.style.overflowY=s,a.resize())}var l=Date.now(),c=250,d=a.el.scrollTop,u=a.el.scrollLeft;return d===t&&u===n?(a.el.style.overflowX=o,a.el.style.overflowY=s,void a.resize()):void e.requestAnimationFrame(r)}var a=this;if(!i)return a.el.scrollTop=n,a.el.scrollLeft=t,void a.resize();var o=a.el.style.overflowX,s=a.el.style.overflowY;clearTimeout(a.__scrollToCleanupTimeout),a.__scrollToCleanupTimeout=setTimeout(function(){a.el.style.overflowX=o,a.el.style.overflowY=s},500),a.el.style.overflowY="hidden",a.el.style.overflowX="hidden",r(n,t)},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__computeScrollMax:function(){var e=this;e.__maxScrollLeft=Math.max(e.__contentWidth-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight-e.__clientHeight,0),e.__didWaitForSize||e.__maxScrollLeft||e.__maxScrollTop||(e.__didWaitForSize=!0,e.__waitForSize())},__initEventHandlers:function(){var t,n,i=this,r=i.__container;i.scrollChildIntoView=function(a){var o=r.getBoundingClientRect();i.__originalContainerHeight||(i.__originalContainerHeight=o.height),t=i.__originalContainerHeight;var s=i.isShrunkForKeyboard,l=r.parentNode.classList.contains("modal"),c=r.parentNode.classList.contains("popover"),d=l&&window.innerWidth>=680,u=n&&n!==a.detail.keyboardHeight;(!s||u)&&(!c&&(e.Platform.isIOS()||e.Platform.isFullScreen||d)&&e.requestAnimationFrame(function(){t=Math.max(0,Math.min(i.__originalContainerHeight,i.__originalContainerHeight-(a.detail.keyboardHeight-43))),r.style.height=t+"px",r.classList.add("keyboard-up"),i.resize()}),i.isShrunkForKeyboard=!0),n=a.detail.keyboardHeight,a.detail.isElementUnderKeyboard&&e.requestAnimationFrame(function(){var t=e.DomUtil.getOffsetTop(a.detail.target);setTimeout(function(){e.Platform.isIOS()&&e.tap.cloneFocusedInput(r,i),i.scrollTo(0,t-(o.top+100),!0),i.onScroll()},32)}),a.stopPropagation()},i.resetScrollView=function(){i.isShrunkForKeyboard&&(i.isShrunkForKeyboard=!1,r.style.height="",i.__originalContainerHeight=r.getBoundingClientRect().height,e.Platform.isIOS()&&e.requestAnimationFrame(function(){r.classList.remove("keyboard-up")})),i.resize()},i.handleTouchMove=function(e){return i.__frozenShut?(e.preventDefault(),e.stopPropagation(),!1):void 0},r.addEventListener("scroll",i.onScroll),r.addEventListener("scrollChildIntoView",i.scrollChildIntoView),r.addEventListener(e.EVENTS.touchstart,i.handleTouchMove),r.addEventListener(e.EVENTS.touchmove,i.handleTouchMove),document.addEventListener("resetScrollView",i.resetScrollView)},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("resetScrollView",n.resetScrollView),i.removeEventListener("scroll",n.onScroll),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),i.removeEventListener("resetScrollView",n.resetScrollView),i.removeEventListener(e.EVENTS.touchstart,n.handleTouchMove),i.removeEventListener(e.EVENTS.touchmove,n.handleTouchMove),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.resize=n.scrollTo=n.onScroll=n.resetScrollView=t,n.scrollChildIntoView=t,i=null}})}(ionic),function(e){"use strict";var t="item",n="item-content",i="item-sliding",r="item-options",a="item-placeholder",o="item-reordering",s="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(e){this.dragThresholdX=e.dragThresholdX||10,this.el=e.el,this.item=e.item,this.canSwipe=e.canSwipe};c.prototype=new l,c.prototype.start=function(a){var o,s,l,c;this.canSwipe()&&(o=a.target.classList.contains(n)?a.target:a.target.classList.contains(t)?a.target.querySelector("."+n):e.DomUtil.getParentWithClass(a.target,n),o&&(o.classList.remove(i),l=parseFloat(o.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,s=o.parentNode.querySelector("."+r),s&&(s.classList.remove("invisible"),c=s.offsetWidth,this._currentDrag={buttons:s,buttonsWidth:c,content:o,startOffsetX:l})))},c.prototype.isSameItem=function(e){return e._lastDrag&&this._currentDrag?this._currentDrag.content==e._lastDrag.content:!1},c.prototype.clean=function(t){function n(){i.buttons&&i.buttons.classList.add("invisible")}var i=this._lastDrag;i&&i.content&&(i.content.style[e.CSS.TRANSITION]="",i.content.style[e.CSS.TRANSFORM]="",t?(i.content.style[e.CSS.TRANSITION]="none",n(),e.requestAnimationFrame(function(){i.content.style[e.CSS.TRANSITION]=""})):e.requestAnimationFrame(function(){setTimeout(n,250)}))},c.prototype.drag=e.animationFrameThrottle(function(t){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(t.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+t.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(t.gesture.deltaX+n))),this._currentDrag.content.$$ionicOptionsOpen=0!==i,this._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[e.CSS.TRANSITION]="none"}}),c.prototype.end=function(t,n){var i=this;if(!i._currentDrag)return void(n&&n());var r=-i._currentDrag.buttonsWidth;t.gesture.deltaX>-(i._currentDrag.buttonsWidth/2)&&("left"==t.gesture.direction&&Math.abs(t.gesture.velocityX)<.3?r=0:"right"==t.gesture.direction&&(r=0)),e.requestAnimationFrame(function(){if(0===r){i._currentDrag.content.style[e.CSS.TRANSFORM]="";var t=i._currentDrag.buttons;setTimeout(function(){t&&t.classList.add("invisible")},250)}else i._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+r+"px,0,0)";i._currentDrag.content.style[e.CSS.TRANSITION]="",i._lastDrag||(i._lastDrag={}),e.extend(i._lastDrag,i._currentDrag),i._currentDrag&&(i._currentDrag.buttons=null,i._currentDrag.content=null),i._currentDrag=null,n&&n()})};var d=function(e){var t=this;if(t.dragThresholdY=e.dragThresholdY||0,t.onReorder=e.onReorder,t.listEl=e.listEl,t.el=t.item=e.el,t.scrollEl=e.scrollEl,t.scrollView=e.scrollView,t.listElTrueTop=0,t.listEl.offsetParent){var n=t.listEl;do t.listElTrueTop+=n.offsetTop,n=n.offsetParent;while(n)}};d.prototype=new l,d.prototype._moveElement=function(t){var n=t.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[e.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},d.prototype.deregister=function(){this.listEl=this.el=this.scrollEl=this.scrollView=null},d.prototype.start=function(t){var n=e.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,r=this.el.cloneNode(!0);r.classList.add(a),this.el.parentNode.insertBefore(r,this.el),this.el.classList.add(o),this._currentDrag={elementHeight:i,startIndex:n,placeholder:r,scrollHeight:scroll,list:r.parentNode},this._moveElement(t)},d.prototype.drag=e.animationFrameThrottle(function(t){var n=this;if(this._currentDrag){var i=0,r=t.gesture.center.pageY,a=this.listElTrueTop;if(this.scrollView){var o=this.scrollView.__container;i=this.scrollView.getValues().top;var s=o.offsetTop,l=s-r+this._currentDrag.elementHeight/2,c=r+this._currentDrag.elementHeight/2-s-o.offsetHeight;t.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),e.requestAnimationFrame(function(){n.drag(t)})),t.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),e.requestAnimationFrame(function(){n.drag(t)}))}!this._isDragging&&Math.abs(t.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(t),this._currentDrag.currentY=i+r-a)}}),d.prototype._getReorderIndex=function(){for(var e,t=this,n=Array.prototype.slice.call(t._currentDrag.placeholder.parentNode.children).filter(function(e){return e.nodeName===t.el.nodeName&&e!==t.el}),i=t._currentDrag.currentY,r=0,a=n.length;a>r;r++)if(e=n[r],r===a-1){if(i>e.offsetTop)return r}else if(0===r){if(i<e.offsetTop+e.offsetHeight)return r}else if(i>e.offsetTop-e.offsetHeight/2&&i<e.offsetTop+e.offsetHeight)return r;return t._currentDrag.startIndex},d.prototype.end=function(t,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,r=this._getReorderIndex();this.el.classList.remove(o),this.el.style[e.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,r),this._currentDrag={placeholder:null,content:null},this._currentDrag=null,n&&n()},e.views.ListView=e.views.View.inherit({initialize:function(t){var n=this;t=e.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},t),e.extend(n,t),!n.itemHeight&&n.listEl&&(n.itemHeight=n.listEl.children[0]&&parseInt(n.listEl.children[0].style.height,10)),n.onRefresh=t.onRefresh||function(){},n.onRefreshOpening=t.onRefreshOpening||function(){},n.onRefreshHolding=t.onRefreshHolding||function(){};var i={};e.DomUtil.getParentOrSelfWithClass(n.el,"overflow-scroll")&&(i.prevent_default_directions=["left","right"]),window.ionic.onGesture("release",function(e){n._handleEndDrag(e)},n.el,i),window.ionic.onGesture("drag",function(e){n._handleDrag(e)},n.el,i),n._initDrag()},deregister:function(){this.el=this.listEl=this.scrollEl=this.scrollView=null,this.isScrollFreeze&&self.scrollView.freeze(!1)},stopRefreshing:function(){var e=this.el.querySelector(".list-refresher");e.style.height="0"},didScroll:function(e){var t=this;if(t.isVirtual){var n=t.itemHeight,i=e.target.scrollHeight,r=t.el.parentNode.offsetHeight,a=Math.max(0,e.scrollTop+t.virtualRemoveThreshold),o=Math.min(i,Math.abs(e.scrollTop)+r+t.virtualAddThreshold),s=parseInt(Math.abs(a/n),10),l=parseInt(Math.abs(o/n),10);t._virtualItemsToRemove=Array.prototype.slice.call(t.listEl.children,0,s),t.renderViewport&&t.renderViewport(a,o,s,l)}},didStopScrolling:function(){if(this.isVirtual)for(var e=0;e<this._virtualItemsToRemove.length;e++)this.didHideItem&&this.didHideItem(e)},clearDragEffects:function(e){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(e),this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp&&this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(e){for(;e;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},_startDrag:function(t){var n=this;n._isDragging=!1;var i,r=n._lastDragOp;n._didDragUpOrDown&&r instanceof c&&r.clean&&r.clean(),!e.DomUtil.getParentOrSelfWithClass(t.target,s)||"up"!=t.gesture.direction&&"down"!=t.gesture.direction?!n._didDragUpOrDown&&("left"==t.gesture.direction||"right"==t.gesture.direction)&&Math.abs(t.gesture.deltaX)>5&&(i=n._getItem(t.target),i&&i.querySelector(".item-options")&&(n._dragOp=new c({el:n.el,item:i,canSwipe:n.canSwipe}),n._dragOp.start(t),t.preventDefault(),n.isScrollFreeze=n.scrollView.freeze(!0))):(i=n._getItem(t.target),i&&(n._dragOp=new d({listEl:n.el,el:i,scrollEl:n.scrollEl,scrollView:n.scrollView,onReorder:function(e,t,i){n.onReorder&&n.onReorder(e,t,i)}}),n._dragOp.start(t),t.preventDefault())),r&&n._dragOp&&!n._dragOp.isSameItem(r)&&t.defaultPrevented&&r.clean&&r.clean()},_handleEndDrag:function(e){var t=this;t.scrollView&&(t.isScrollFreeze=t.scrollView.freeze(!1)),t._didDragUpOrDown=!1,t._dragOp&&t._dragOp.end(e,function(){t._initDrag()})},_handleDrag:function(e){var t=this;Math.abs(e.gesture.deltaY)>5&&(t._didDragUpOrDown=!0),t.isDragging||t._dragOp||t._startDrag(e),t._dragOp&&(e.gesture.srcEvent.preventDefault(),t._dragOp.drag(e))}})}(ionic),function(e){"use strict";e.views.Modal=e.views.View.inherit({initialize:function(t){t=e.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},t),e.extend(this,t),this.el=t.el},show:function(){var e=this;e.focusFirstInput&&window.setTimeout(function(){var t=e.el.querySelector("input, textarea");t&&t.focus&&t.focus()},e.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var e=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var t=0;t<e.length;t++)e[t].blur&&e[t].blur()})}}})}(ionic),function(e){"use strict";e.views.SideMenu=e.views.View.inherit({initialize:function(e){this.el=e.el,this.isEnabled="undefined"==typeof e.isEnabled?!0:e.isEnabled,this.setWidth(e.width)},getFullWidth:function(){return this.width},setWidth:function(e){this.width=e,this.el.style.width=e+"px"},setIsEnabled:function(e){this.isEnabled=e},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),e.views.SideMenuContent=e.views.View.inherit({initialize:function(t){e.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},t),e.onGesture("drag",e.proxy(this._onDrag,this),this.el),e.onGesture("release",e.proxy(this._onEndDrag,this),this.el)},_onDrag:function(e){this.onDrag&&this.onDrag(e)},_onEndDrag:function(e){this.onEndDrag&&this.onEndDrag(e)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:e.animationFrameThrottle(function(t){this.el.style[e.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)"})})}(ionic),function(e){"use strict";e.views.Slider=e.views.View.inherit({initialize:function(e){function t(){if(b.offsetWidth){S=D.children,x=S.length,S.length<2&&(e.continuous=!1),T.transitions&&e.continuous&&S.length<3&&(D.appendChild(S[0].cloneNode(!0)),D.appendChild(D.children[1].cloneNode(!0)),S=D.children),y=new Array(S.length),E=b.offsetWidth||b.getBoundingClientRect().width,D.style.width=S.length*E+"px";for(var t=S.length;t--;){var n=S[t];n.style.width=E+"px",n.setAttribute("data-index",t),T.transitions&&(n.style.left=t*-E+"px",o(t,M>t?-E:t>M?E:0,0))}e.continuous&&T.transitions&&(o(r(M-1),-E,0),o(r(M+1),E,0)),T.transitions||(D.style.left=M*-E+"px"),b.style.visibility="visible",e.slidesChanged&&e.slidesChanged()}}function n(t){e.continuous?a(M-1,t):M&&a(M-1,t)}function i(t){e.continuous?a(M+1,t):M<S.length-1&&a(M+1,t)}function r(e){return(S.length+e%S.length)%S.length}function a(t,n){if(M!=t){if(!S)return void(M=t);if(T.transitions){var i=Math.abs(M-t)/(M-t);if(e.continuous){var a=i;i=-y[r(t)]/E,i!==a&&(t=-i*S.length+t)}for(var s=Math.abs(M-t)-1;s--;)o(r((t>M?t:M)-s-1),E*i,0);t=r(t),o(M,E*i,n||L),o(t,0,n||L),e.continuous&&o(r(t-i),-(E*i),0)}else t=r(t),l(M*-E,t*-E,n||L);M=t,w(e.callback&&e.callback(M,S[M]))}}function o(e,t,n){s(e,t,n),y[e]=t}function s(e,t,n){var i=S[e],r=i&&i.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+t+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+t+"px)")}function l(t,n,i){if(!i)return void(D.style.left=n+"px");var r=+new Date,a=setInterval(function(){var o=+new Date-r;return o>i?(D.style.left=n+"px",I&&c(),e.transitionEnd&&e.transitionEnd.call(event,M,S[M]),void clearInterval(a)):void(D.style.left=(n-t)*(Math.floor(o/i*100)/100)+t+"px")},4)}function c(){C=setTimeout(i,I)}function d(){I=e.auto||0,clearTimeout(C)}var u,p,h,f=this;window.navigator.pointerEnabled?(u="pointerdown",p="pointermove",h="pointerup"):window.navigator.msPointerEnabled?(u="MSPointerDown",p="MSPointerMove",h="MSPointerUp"):(u="touchstart",p="touchmove",h="touchend");var m="mousedown",g="mousemove",v="mouseup",_=function(){},w=function(e){setTimeout(e||_,0)},T={addEventListener:!!window.addEventListener,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))},b=e.el;if(b){var S,y,E,x,D=b.children[0];e=e||{};var M=parseInt(e.startSlide,10)||0,L=e.speed||300;e.continuous=void 0!==e.continuous?e.continuous:!0;var C,P,I=e.auto||0,k={},N={},z={handleEvent:function(n){switch(!n.touches&&n.pageX&&n.pageY&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case u:this.start(n);break;case m:this.start(n);break;case p:this.touchmove(n);break;case g:this.touchmove(n);break;case h:w(this.end(n));break;case v:w(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":w(this.transitionEnd(n));break;case"resize":w(t)}e.stopPropagation&&n.stopPropagation()},start:function(e){if(e.touches){var t=e.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},P=void 0,N={},D.addEventListener(p,this,!1),D.addEventListener(g,this,!1),D.addEventListener(h,this,!1),D.addEventListener(v,this,!1),document.addEventListener(h,this,!1),document.addEventListener(v,this,!1)}},touchmove:function(t){if(!(!t.touches||t.touches.length>1||t.scale&&1!==t.scale||f.slideIsDisabled)){e.disableScroll&&t.preventDefault();var n=t.touches[0];N={x:n.pageX-k.x,y:n.pageY-k.y},"undefined"==typeof P&&(P=!!(P||Math.abs(N.x)<Math.abs(N.y))),P||(t.preventDefault(),d(),e.continuous?(s(r(M-1),N.x+y[r(M-1)],0),s(M,N.x+y[M],0),s(r(M+1),N.x+y[r(M+1)],0)):(e.bouncing?N.x=N.x/(!M&&N.x>0||M==S.length-1&&N.x<0?Math.abs(N.x)/E+1:1):(E*M-N.x<0&&(N.x=Math.min(N.x,E*M)),Math.abs(N.x)>E*(S.length-M-1)&&(N.x=Math.max(-E*(S.length-M-1),N.x))),s(M-1,N.x+y[M-1],0),s(M,N.x+y[M],0),s(M+1,N.x+y[M+1],0)),e.onDrag&&e.onDrag())}},end:function(){var t=+new Date-k.time,n=Number(t)<250&&Math.abs(N.x)>20||Math.abs(N.x)>E/2,i=!M&&N.x>0||M==S.length-1&&N.x<0;e.continuous&&(i=!1);var a=N.x<0;P||(n&&!i?(a?(e.continuous?(o(r(M-1),-E,0),o(r(M+2),E,0)):o(M-1,-E,0),o(M,y[M]-E,L),o(r(M+1),y[r(M+1)]-E,L),M=r(M+1)):(e.continuous?(o(r(M+1),E,0),o(r(M-2),-E,0)):o(M+1,E,0),o(M,y[M]+E,L),o(r(M-1),y[r(M-1)]+E,L),M=r(M-1)),e.callback&&e.callback(M,S[M])):e.continuous?(o(r(M-1),-E,L),o(M,0,L),o(r(M+1),E,L)):(o(M-1,-E,L),o(M,0,L),o(M+1,E,L))),D.removeEventListener(p,z,!1),D.removeEventListener(g,z,!1),D.removeEventListener(h,z,!1),D.removeEventListener(v,z,!1),document.removeEventListener(h,z,!1),document.removeEventListener(v,z,!1),e.onDragEnd&&e.onDragEnd()},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==M&&(I&&c(),e.transitionEnd&&e.transitionEnd.call(t,M,S[M]))}};this.update=function(){setTimeout(t)},this.setup=function(){t()},this.loop=function(t){return arguments.length&&(e.continuous=!!t),e.continuous},this.enableSlide=function(e){return arguments.length&&(this.slideIsDisabled=!e),!this.slideIsDisabled},this.slide=this.select=function(e,t){d(),a(e,t)},this.prev=this.previous=function(){d(),n()},this.next=function(){d(),i()},this.stop=function(){d()},this.start=function(){c()},this.autoPlay=function(e){!I||0>I?d():(I=e,c())},this.currentIndex=this.selected=function(){return M},this.slidesCount=this.count=function(){return x},this.kill=function(){d(),D.style.width="",D.style.left="",S&&(S=[]),T.addEventListener?(D.removeEventListener(u,z,!1),D.removeEventListener(m,z,!1),D.removeEventListener("webkitTransitionEnd",z,!1),D.removeEventListener("msTransitionEnd",z,!1),D.removeEventListener("oTransitionEnd",z,!1),D.removeEventListener("otransitionend",z,!1),D.removeEventListener("transitionend",z,!1),window.removeEventListener("resize",z,!1)):window.onresize=null},this.load=function(){t(),I&&c(),T.addEventListener?(D.addEventListener(u,z,!1),D.addEventListener(m,z,!1),T.transitions&&(D.addEventListener("webkitTransitionEnd",z,!1),D.addEventListener("msTransitionEnd",z,!1),D.addEventListener("oTransitionEnd",z,!1),D.addEventListener("otransitionend",z,!1),D.addEventListener("transitionend",z,!1)),window.addEventListener("resize",z,!1)):window.onresize=function(){t()}}}}})}(ionic),function(){"use strict";function e(e){e.fn.swiper=function(t){var i;return e(this).each(function(){var e=new n(this,t);i||(i=e)}),i}}var t,n=function(e,r,a,o){function s(){return"horizontal"===y.params.direction}function l(e){return Math.floor(e)}function c(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext()):y.isEnd?r.autoplayStopOnLast?y.stopAutoplay():y._slideTo(0):y._slideNext()},y.params.autoplay)}function d(e,n){var i=t(e.target);if(!i.is(n))if("string"==typeof n)i=i.parents(n);else if(n.nodeType){var r;return i.parents().each(function(e,t){t===n&&(r=n)}),r?n:void 0}return 0===i.length?void 0:i[0]}function u(e,t){t=t||{};var n=window.MutationObserver||window.WebkitMutationObserver,i=new n(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});i.observe(e,{attributes:"undefined"==typeof t.attributes?!0:t.attributes,childList:"undefined"==typeof t.childList?!0:t.childList,characterData:"undefined"==typeof t.characterData?!0:t.characterData}),y.observers.push(i)}function p(e){e.originalEvent&&(e=e.originalEvent);var t=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(s()&&39===t||!s()&&40===t))return!1;if(!y.params.allowSwipeToPrev&&(s()&&37===t||!s()&&38===t))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var n=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var i={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,a=window.innerHeight,o=y.container.offset();y.rtl&&(o.left=o.left-y.container[0].scrollLeft);for(var l=[[o.left,o.top],[o.left+y.width,o.top],[o.left,o.top+y.height],[o.left+y.width,o.top+y.height]],c=0;c<l.length;c++){var d=l[c];d[0]>=i.left&&d[0]<=i.left+r&&d[1]>=i.top&&d[1]<=i.top+a&&(n=!0)}if(!n)return}s()?((37===t||39===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===t&&!y.rtl||37===t&&y.rtl)&&y.slideNext(),(37===t&&!y.rtl||39===t&&y.rtl)&&y.slidePrev()):((38===t||40===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&y.slideNext(),38===t&&y.slidePrev())}}function h(e){e.originalEvent&&(e=e.originalEvent);var t=y.mousewheel.event,n=0,i=y.rtl?-1:1;if(e.detail)n=-e.detail;else if("mousewheel"===t)if(y.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;n=e.wheelDeltaX*i}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;n=e.wheelDeltaY}else n=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*i:-e.wheelDeltaY;else if("DOMMouseScroll"===t)n=-e.detail;else if("wheel"===t)if(y.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;n=-e.deltaX*i}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;n=-e.deltaY}else n=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*i:-e.deltaY;if(0!==n){if(y.params.mousewheelInvert&&(n=-n),y.params.freeMode){var r=y.getWrapperTranslate()+n*y.params.mousewheelSensitivity,a=y.isBeginning,o=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!a&&y.isBeginning||!o&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky&&(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>n)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function f(e,n){e=t(e);var i,r,a,o=y.rtl?-1:1;i=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),
a=e.attr("data-swiper-parallax-y"),r||a?(r=r||"0",a=a||"0"):s()?(r=i,a="0"):(a=i,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*n*o+"%":r*n*o+"px",a=a.indexOf("%")>=0?parseInt(a,10)*n+"%":a*n+"px",e.transform("translate3d("+r+", "+a+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof n))return new n(e,r);var g={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},v=r&&r.virtualTranslate;r=r||{};var _={};for(var w in r)if("object"!=typeof r[w]||(r[w].nodeType||r[w]===window||r[w]===document||"undefined"!=typeof i&&r[w]instanceof i||"undefined"!=typeof jQuery&&r[w]instanceof jQuery))_[w]=r[w];else{_[w]={};for(var T in r[w])_[w][T]=r[w][T]}for(var b in g)if("undefined"==typeof r[b])r[b]=g[b];else if("object"==typeof r[b])for(var S in g[b])"undefined"==typeof r[b][S]&&(r[b][S]=g[b][S]);var y=this;if(y.params=r,y.originalParams=_,y.classNames=[],"undefined"!=typeof t&&"undefined"!=typeof i&&(t=i),("undefined"!=typeof t||(t="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i))&&(y.$=t,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,t=!1,n=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&n.push(e);n.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var i=0;i<n.length;i++)e=n[i],e>=window.innerWidth&&!t&&(t=e);return t||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var t=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams;for(var n in t)y.params[n]=t[n];y.currentBreakpoint=e}},y.params.breakpoints&&y.setBreakpoint(),y.container=t(e),0!==y.container.length)){if(y.container.length>1)return void y.container.each(function(){new n(this,r)});y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),"fade"===y.params.effect&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,"undefined"==typeof v&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=t(y.params.pagination),y.params.paginationClickable&&y.paginationContainer.addClass("swiper-pagination-clickable")),y.rtl=s()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,t,n,i,r){function a(){r&&r()}var o;e.complete&&i?a():t?(o=new window.Image,o.onload=a,o.onerror=a,n&&(o.srcset=n),t&&(o.src=t)):a()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var t=0;t<y.imagesToLoad.length;t++)y.loadImage(y.imagesToLoad[t],y.imagesToLoad[t].currentSrc||y.imagesToLoad[t].getAttribute("src"),y.imagesToLoad[t].srcset||y.imagesToLoad[t].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void c()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,c()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?c():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0].offsetHeight;e&&y.wrapper.css("height",y.slides.eq(y.activeIndex)[0].offsetHeight+"px")},y.updateContainerSize=function(){var e,t;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,t="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&s()||0===t&&!s()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),t=t-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=t,y.size=s()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,t=y.params.spaceBetween,n=-y.params.slidesOffsetBefore,i=0,r=0;"string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*y.size),y.virtualSize=-t,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var a;y.params.slidesPerColumn>1&&(a=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(a=Math.max(a,y.params.slidesPerView*y.params.slidesPerColumn)));var o,c=y.params.slidesPerColumn,d=a/c,u=d-(y.params.slidesPerColumn*d-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var p=y.slides.eq(e);if(y.params.slidesPerColumn>1){var h,f,m;"column"===y.params.slidesPerColumnFill?(f=Math.floor(e/c),m=e-f*c,(f>u||f===u&&m===c-1)&&++m>=c&&(m=0,f++),h=f+m*a/c,p.css({"-webkit-box-ordinal-group":h,"-moz-box-ordinal-group":h,"-ms-flex-order":h,"-webkit-order":h,order:h})):(m=Math.floor(e/d),f=e-m*d),p.css({"margin-top":0!==m&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",f).attr("data-swiper-row",m)}"none"!==p.css("display")&&("auto"===y.params.slidesPerView?(o=s()?p.outerWidth(!0):p.outerHeight(!0),y.params.roundLengths&&(o=l(o))):(o=(y.size-(y.params.slidesPerView-1)*t)/y.params.slidesPerView,y.params.roundLengths&&(o=l(o)),s()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(n=n+o/2+i/2+t,0===e&&(n=n-y.size/2-t),Math.abs(n)<.001&&(n=0),r%y.params.slidesPerGroup===0&&y.snapGrid.push(n),y.slidesGrid.push(n)):(r%y.params.slidesPerGroup===0&&y.snapGrid.push(n),y.slidesGrid.push(n),n=n+o+t),y.virtualSize+=o+t,i=o,r++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var g;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(s()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*a,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&g.push(y.snapGrid[e]);y.snapGrid=g}if(!y.params.centeredSlides){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&g.push(y.snapGrid[e]);y.snapGrid=g,Math.floor(y.virtualSize-y.size)>Math.floor(y.snapGrid[y.snapGrid.length-1])&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(s()?y.rtl?y.slides.css({marginLeft:t+"px"}):y.slides.css({marginRight:t+"px"}):y.slides.css({marginBottom:t+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=s()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var t=-e;y.rtl&&(t=e),y.slides.removeClass(y.params.slideVisibleClass);for(var n=0;n<y.slides.length;n++){var i=y.slides[n],r=(t-i.swiperSlideOffset)/(i.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var a=-(t-i.swiperSlideOffset),o=a+y.slidesSizesGrid[n],s=a>=0&&a<y.size||o>0&&o<=y.size||0>=a&&o>=y.size;s&&y.slides.eq(n).addClass(y.params.slideVisibleClass)}i.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var t=y.maxTranslate()-y.minTranslate(),n=y.isBeginning,i=y.isEnd;0===t?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/t,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!n&&y.emit("onReachBeginning",y),y.isEnd&&!i&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,t,n,i=y.rtl?y.translate:-y.translate;for(t=0;t<y.slidesGrid.length;t++)"undefined"!=typeof y.slidesGrid[t+1]?i>=y.slidesGrid[t]&&i<y.slidesGrid[t+1]-(y.slidesGrid[t+1]-y.slidesGrid[t])/2?e=t:i>=y.slidesGrid[t]&&i<y.slidesGrid[t+1]&&(e=t+1):i>=y.slidesGrid[t]&&(e=t);(0>e||"undefined"==typeof e)&&(e=0),n=Math.floor(e/y.params.slidesPerGroup),n>=y.snapGrid.length&&(n=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=n,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);if(e.addClass(y.params.slideActiveClass),e.next("."+y.params.slideClass).addClass(y.params.slideNextClass),e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass),y.bullets&&y.bullets.length>0){y.bullets.removeClass(y.params.bulletActiveClass);var n;y.params.loop?(n=Math.ceil(y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup,n>y.slides.length-1-2*y.loopedSlides&&(n-=y.slides.length-2*y.loopedSlides),n>y.bullets.length-1&&(n-=y.bullets.length)):n="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,y.paginationContainer.length>1?y.bullets.each(function(){t(this).index()===n&&t(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(n).addClass(y.params.bulletActiveClass)}y.params.loop||(y.params.prevButton&&(y.isBeginning?(t(y.params.prevButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(t(y.params.prevButton))):(t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(t(y.params.prevButton)))),y.params.nextButton&&(y.isEnd?(t(y.params.nextButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(t(y.params.nextButton))):(t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(t(y.params.nextButton)))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){for(var e="",t=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,n=0;t>n;n++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(n,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}},y.update=function(e){function t(){i=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(i),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var n,i;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(t(),y.params.autoHeight&&y.updateAutoHeight()):(n=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),n||t())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var t=y.params.allowSwipeToPrev,n=y.params.allowSwipeToNext;if(y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode){var i=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(i),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.allowSwipeToPrev=t,y.params.allowSwipeToNext=n};var E=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?E=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(E=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":E[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":E[1],end:y.support.touch||!y.params.simulateTouch?"touchend":E[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var n=e?"off":"on",i=e?"removeEventListener":"addEventListener",a="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],o=y.support.touch?a:document,s=y.params.nested?!0:!1;y.browser.ie?(a[i](y.touchEvents.start,y.onTouchStart,!1),o[i](y.touchEvents.move,y.onTouchMove,s),o[i](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(a[i](y.touchEvents.start,y.onTouchStart,!1),a[i](y.touchEvents.move,y.onTouchMove,s),a[i](y.touchEvents.end,y.onTouchEnd,!1)),!r.simulateTouch||y.device.ios||y.device.android||(a[i]("mousedown",y.onTouchStart,!1),document[i]("mousemove",y.onTouchMove,s),document[i]("mouseup",y.onTouchEnd,!1))),window[i]("resize",y.onResize),y.params.nextButton&&(t(y.params.nextButton)[n]("click",y.onClickNext),y.params.a11y&&y.a11y&&t(y.params.nextButton)[n]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&(t(y.params.prevButton)[n]("click",y.onClickPrev),y.params.a11y&&y.a11y&&t(y.params.prevButton)[n]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(t(y.paginationContainer)[n]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&t(y.paginationContainer)[n]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&a[i]("click",y.preventClicks,!0)},y.attachEvents=function(e){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var n=t(this).index()*y.params.slidesPerGroup;y.params.loop&&(n+=y.loopedSlides),y.slideTo(n)},y.updateClickedSlide=function(e){var n=d(e,"."+y.params.slideClass),i=!1;if(n)for(var r=0;r<y.slides.length;r++)y.slides[r]===n&&(i=!0);if(!n||!i)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=n,y.clickedIndex=t(n).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var a,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;a=t(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var x,D,M,L,C,P,I,k,N,z,O="input, select, textarea, button",A=Date.now(),G=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var V,R;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),V="touchstart"===e.type,V||!("which"in e)||3!==e.which){if(y.params.noSwiping&&d(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||d(e,y.params.swipeHandler)){var n=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&n<=y.params.iOSEdgeSwipeThreshold)){if(x=!0,D=!1,M=!0,C=void 0,R=void 0,y.touches.startX=n,y.touches.startY=i,L=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;t(e.target).is(O)&&(r=!1),document.activeElement&&t(document.activeElement).is(O)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(V&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(y.params.onlyExternal)return y.allowClick=!1,void(x&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,L=Date.now()));if(V&&document.activeElement&&e.target===document.activeElement&&t(e.target).is(O))return D=!0,void(y.allowClick=!1);if(M&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof C){var n=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;C=s()?n>y.params.touchAngle:90-n>y.params.touchAngle}if(C&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof R&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(R=!0),x){if(C)return void(x=!1);if(R||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),D||(r.loop&&y.fixLoop(),I=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),z=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),D=!0;var i=y.touches.diff=s()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;i*=y.params.touchRatio,y.rtl&&(i=-i),y.swipeDirection=i>0?"prev":"next",P=i+I;var a=!0;if(i>0&&P>y.minTranslate()?(a=!1,y.params.resistance&&(P=y.minTranslate()-1+Math.pow(-y.minTranslate()+I+i,y.params.resistanceRatio))):0>i&&P<y.maxTranslate()&&(a=!1,y.params.resistance&&(P=y.maxTranslate()+1-Math.pow(y.maxTranslate()-I-i,y.params.resistanceRatio))),a&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&I>P&&(P=I),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&P>I&&(P=I),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(i)>y.params.threshold||k))return void(P=I);if(!k)return k=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,P=I,void(y.touches.diff=s()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===G.length&&G.push({position:y.touches[s()?"startX":"startY"],time:L}),G.push({position:y.touches[s()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(P),y.setWrapperTranslate(P)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),M&&y.emit("onTouchEnd",y,e),M=!1,x){y.params.grabCursor&&D&&x&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var n=Date.now(),i=n-L;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>i&&n-A>300&&(N&&clearTimeout(N),N=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!t(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),y.emit("onClick",y,e))},300)),300>i&&300>n-A&&(N&&clearTimeout(N),y.emit("onDoubleTap",y,e))),A=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!x||!D||!y.swipeDirection||0===y.touches.diff||P===I)return void(x=D=!1);x=D=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-P,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(G.length>1){var a=G.pop(),o=G.pop(),s=a.position-o.position,l=a.time-o.time;y.velocity=s/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-a.time>300)&&(y.velocity=0)}else y.velocity=0;G.length=0;var c=1e3*y.params.freeModeMomentumRatio,d=y.velocity*c,u=y.translate+d;y.rtl&&(u=-u);var p,h=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),p=y.maxTranslate(),h=!0,z=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),p=y.minTranslate(),h=!0,z=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var m,g=0;for(g=0;g<y.snapGrid.length;g+=1)if(y.snapGrid[g]>-u){m=g;break}u=Math.abs(y.snapGrid[m]-u)<Math.abs(y.snapGrid[m-1]-u)||"next"===y.swipeDirection?y.snapGrid[m]:y.snapGrid[m-1],y.rtl||(u=-u)}if(0!==y.velocity)c=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&h?(y.updateProgress(p),y.setWrapperTransition(c),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&z&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(p),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(c),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||i>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,_=0,w=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(_=v,w=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(_=v,w=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var T=(r-y.slidesGrid[_])/w;if(i>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(T>=y.params.longSwipesRatio?y.slideTo(_+y.params.slidesPerGroup):y.slideTo(_)),"prev"===y.swipeDirection&&(T>1-y.params.longSwipesRatio?y.slideTo(_+y.params.slidesPerGroup):y.slideTo(_))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(_+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(_)}}},y._slideTo=function(e,t){return y.slideTo(e,t,!0,!0)},y.slideTo=function(e,t,n,i){"undefined"==typeof n&&(n=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(i||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(t):y.stopAutoplay()),y.updateProgress(r);for(var a=0;a<y.slidesGrid.length;a++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[a])&&(e=a);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof t&&(t=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(n),0===t?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(n)):(y.setWrapperTranslate(r),y.setWrapperTransition(t),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(n)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,t,n){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,t,e,n)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,t,e,n)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,t,n){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,t,e,n)}return y.slideTo(y.activeIndex-1,t,e,n)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,t,n){return y.slideTo(y.activeIndex,t,e)},y.setWrapperTransition=function(e,t){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,t),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,t,n){var i=0,r=0,a=0;s()?i=y.rtl?-e:e:r=e,y.params.roundLengths&&(i=l(i),r=l(r)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+i+"px, "+r+"px, "+a+"px)"):y.wrapper.transform("translate("+i+"px, "+r+"px)")),y.translate=s()?i:r;var o,c=y.maxTranslate()-y.minTranslate();o=0===c?0:(e-y.minTranslate())/c,o!==y.progress&&y.updateProgress(e),
t&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,n),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,t){var n,i,r,a;return"undefined"==typeof t&&(t="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(i=r.transform||r.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),a=new window.WebKitCSSMatrix("none"===i?"":i)):(a=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=a.toString().split(",")),"x"===t&&(i=window.WebKitCSSMatrix?a.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(i=window.WebKitCSSMatrix?a.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),y.rtl&&i&&(i=-i),i||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=s()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),t=0;t<e.length;t++)u(e[t]);u(y.container[0],{childList:!1}),u(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){var e=y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass);angular.element(e).remove();var n=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=n.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>n.length&&(y.loopedSlides=n.length);var i,r,a,s=[],l=[];for(n.each(function(e,i){var r=t(this);e<y.loopedSlides&&l.push(i),e<n.length&&e>=n.length-y.loopedSlides&&s.push(i),r.attr("data-swiper-slide-index",e)}),i=0;i<l.length;i++)a=angular.element(l[i]).clone().addClass(y.params.slideDuplicateClass),a.removeAttr("ng-transclude"),a.removeAttr("ng-repeat"),r=angular.element(l[i]).scope(),a=o(a)(r),angular.element(y.wrapper).append(a);for(i=s.length-1;i>=0;i--)a=angular.element(s[i]).clone().addClass(y.params.slideDuplicateClass),a.removeAttr("ng-transclude"),a.removeAttr("ng-repeat"),r=angular.element(s[i]).scope(),a=o(a)(r),angular.element(y.wrapper).prepend(a)},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;t<e.length;t++)e[t]&&y.wrapper.append(e[t]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var t=y.activeIndex+1;if("object"==typeof e&&e.length){for(var n=0;n<e.length;n++)e[n]&&y.wrapper.prepend(e[n]);t=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(t,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var t,n=y.activeIndex;if("object"==typeof e&&e.length){for(var i=0;i<e.length;i++)t=e[i],y.slides[t]&&y.slides.eq(t).remove(),n>t&&n--;n=Math.max(n,0)}else t=e,y.slides[t]&&y.slides.eq(t).remove(),n>t&&n--,n=Math.max(n,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(n+y.loopedSlides,0,!1):y.slideTo(n,0,!1)},y.removeAllSlides=function(){for(var e=[],t=0;t<y.slides.length;t++)e.push(t);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),n=t[0].swiperSlideOffset,i=-n;y.params.virtualTranslate||(i-=y.translate);var r=0;s()||(r=i,i=0);var a=y.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:a}).transform("translate3d("+i+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.transitionEnd(function(){if(!t&&y){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=0;n<e.length;n++)y.wrapper.trigger(e[n])}})}}},cube:{setTranslate:function(){var e,n=0;y.params.cube.shadow&&(s()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=t('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=t('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var i=0;i<y.slides.length;i++){var r=y.slides.eq(i),a=90*i,o=Math.floor(a/360);y.rtl&&(a=-a,o=Math.floor(-a/360));var l=Math.max(Math.min(r[0].progress,1),-1),c=0,d=0,u=0;i%4===0?(c=4*-o*y.size,u=0):(i-1)%4===0?(c=0,u=4*-o*y.size):(i-2)%4===0?(c=y.size+4*o*y.size,u=y.size):(i-3)%4===0&&(c=-y.size,u=3*y.size+4*y.size*o),y.rtl&&(c=-c),s()||(d=c,c=0);var p="rotateX("+(s()?0:-a)+"deg) rotateY("+(s()?a:0)+"deg) translate3d("+c+"px, "+d+"px, "+u+"px)";if(1>=l&&l>-1&&(n=90*i+90*l,y.rtl&&(n=90*-i-90*l)),r.transform(p),y.params.cube.slideShadows){var h=s()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),f=s()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===h.length&&(h=t('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),r.append(h)),0===f.length&&(f=t('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),r.append(f));r[0].progress;h.length&&(h[0].style.opacity=-r[0].progress),f.length&&(f[0].style.opacity=r[0].progress)}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(s())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var m=Math.abs(n)-90*Math.floor(Math.abs(n)/90),g=1.5-(Math.sin(2*m*Math.PI/360)/2+Math.cos(2*m*Math.PI/360)/2),v=y.params.cube.shadowScale,_=y.params.cube.shadowScale/g,w=y.params.cube.shadowOffset;e.transform("scale3d("+v+", 1, "+_+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/_+"px) rotateX(-90deg)")}var T=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+T+"px) rotateX("+(s()?0:n)+"deg) rotateY("+(s()?-n:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!s()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,n=s()?-e+y.width/2:-e+y.height/2,i=s()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,a=0,o=y.slides.length;o>a;a++){var l=y.slides.eq(a),c=y.slidesSizesGrid[a],d=l[0].swiperSlideOffset,u=(n-d-c/2)/c*y.params.coverflow.modifier,p=s()?i*u:0,h=s()?0:i*u,f=-r*Math.abs(u),m=s()?0:y.params.coverflow.stretch*u,g=s()?y.params.coverflow.stretch*u:0;Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(f)<.001&&(f=0),Math.abs(p)<.001&&(p=0),Math.abs(h)<.001&&(h=0);var v="translate3d("+g+"px,"+m+"px,"+f+"px)  rotateX("+h+"deg) rotateY("+p+"deg)";if(l.transform(v),l[0].style.zIndex=-Math.abs(Math.round(u))+1,y.params.coverflow.slideShadows){var _=s()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),w=s()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");0===_.length&&(_=t('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),l.append(_)),0===w.length&&(w=t('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),l.append(w)),_.length&&(_[0].style.opacity=u>0?u:0),w.length&&(w[0].style.opacity=-u>0?-u:0)}}if(y.browser.ie){var T=y.wrapper[0].style;T.perspectiveOrigin=n+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,n){if("undefined"!=typeof e&&("undefined"==typeof n&&(n=!0),0!==y.slides.length)){var i=y.slides.eq(e),r=i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy")||i.hasClass("swiper-lazy-loaded")||i.hasClass("swiper-lazy-loading")||(r=r.add(i[0])),0!==r.length&&r.each(function(){var e=t(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),a=e.attr("data-src"),o=e.attr("data-srcset");y.loadImage(e[0],a||r,o,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(o&&(e.attr("srcset",o),e.removeAttr("data-srcset")),a&&(e.attr("src",a),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),i.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&n){var t=i.attr("data-swiper-slide-index");if(i.hasClass(y.params.slideDuplicateClass)){var s=y.wrapper.children('[data-swiper-slide-index="'+t+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(s.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+t+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,i[0],e[0])}),y.emit("onLazyImageLoad",y,i[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(t(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1){for(e=y.activeIndex+y.params.slidesPerView;e<y.activeIndex+y.params.slidesPerView+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=y.activeIndex-y.params.slidesPerView;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var i=y.wrapper.children("."+y.params.slidePrevClass);i.length>0&&y.lazy.loadImageInSlide(i.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var t=y.scrollbar,n=s()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,i=n-t.track.offset()[s()?"left":"top"]-t.dragSize/2,r=-y.minTranslate()*t.moveDivider,a=-y.maxTranslate()*t.moveDivider;r>i?i=r:i>a&&(i=a),i=-i/t.moveDivider,y.updateProgress(i),y.setWrapperTranslate(i,!0)},dragStart:function(e){var t=y.scrollbar;t.isTouched=!0,e.preventDefault(),e.stopPropagation(),t.setDragPosition(e),clearTimeout(t.dragTimeout),t.track.transition(0),y.params.scrollbarHide&&t.track.css("opacity",1),y.wrapper.transition(100),t.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var t=y.scrollbar;t.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),y.wrapper.transition(0),t.track.transition(0),t.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var t=y.scrollbar;t.isTouched&&(t.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(t.dragTimeout),t.dragTimeout=setTimeout(function(){t.track.css("opacity",0),t.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,n=y.support.touch?e.track:document;t(e.track).on(y.touchEvents.start,e.dragStart),t(n).on(y.touchEvents.move,e.dragMove),t(n).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,n=y.support.touch?e.track:document;t(e.track).off(y.touchEvents.start,e.dragStart),t(n).off(y.touchEvents.move,e.dragMove),t(n).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=t(y.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=t('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=s()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,s()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,t=y.scrollbar,n=(y.translate||0,t.dragSize);e=(t.trackSize-t.dragSize)*y.progress,y.rtl&&s()?(e=-e,e>0?(n=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(n=t.trackSize+e)):0>e?(n=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(n=t.trackSize-e),s()?(y.support.transforms3d?t.drag.transform("translate3d("+e+"px, 0, 0)"):t.drag.transform("translateX("+e+"px)"),t.drag[0].style.width=n+"px"):(y.support.transforms3d?t.drag.transform("translate3d(0px, "+e+"px, 0)"):t.drag.transform("translateY("+e+"px)"),t.drag[0].style.height=n+"px"),y.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,t){this.x=e,this.y=t,this.lastIndex=e.length-1;var n,i;this.x.length;this.interpolate=function(e){return e?(i=r(this.x,e),n=i-1,(e-this.x[n])*(this.y[i]-this.y[n])/(this.x[i]-this.x[n])+this.y[n]):0};var r=function(){var e,t,n;return function(i,r){for(t=-1,e=i.length;e-t>1;)i[n=e+t>>1]<=r?t=n:e=n;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,t){function i(t){e=t.rtl&&"horizontal"===t.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(t),a=-y.controller.spline.interpolate(-e)),a&&"container"!==y.params.controlBy||(r=(t.maxTranslate()-t.minTranslate())/(y.maxTranslate()-y.minTranslate()),a=(e-y.minTranslate())*r+t.minTranslate()),y.params.controlInverse&&(a=t.maxTranslate()-a),t.updateProgress(a),t.setWrapperTranslate(a,!1,y),t.updateActiveIndex()}var r,a,o=y.params.control;if(y.isArray(o))for(var s=0;s<o.length;s++)o[s]!==t&&o[s]instanceof n&&i(o[s]);else o instanceof n&&t!==o&&i(o)},setTransition:function(e,t){function i(t){t.setWrapperTransition(e,y),0!==e&&(t.onTransitionStart(),t.wrapper.transitionEnd(function(){a&&(t.params.loop&&"slide"===y.params.controlBy&&t.fixLoop(),t.onTransitionEnd())}))}var r,a=y.params.control;if(y.isArray(a))for(r=0;r<a.length;r++)a[r]!==t&&a[r]instanceof n&&i(a[r]);else a instanceof n&&t!==a&&i(a)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,n=0,i=y.slides.length;i>n;n++){var r=y.slides.eq(n),a=r.attr("data-hash");if(a===e&&!r.hasClass(y.params.slideDuplicateClass)){var o=r.index();y.slideTo(o,t,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,t(document).off("keydown",p)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,t(document).on("keydown",p)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(H){}y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,h),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,h),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){f(this,y.progress)}),y.slides.each(function(){var e=t(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=Math.min(Math.max(e[0].progress,-1),1);f(this,t)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var n=t(this),i=parseInt(n.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),n.transition(i)})}},y._plugins=[];for(var Y in y.plugins){var X=y.plugins[Y](y,y.params[Y]);X&&y._plugins.push(X)}return y.callPlugins=function(e){for(var t=0;t<y._plugins.length;t++)e in y._plugins[t]&&y._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var t;if(y.emitterEventListeners[e])for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,t){return e=m(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(t),y},y.off=function(e,t){var n;if(e=m(e),"undefined"==typeof t)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(n=0;n<y.emitterEventListeners[e].length;n++)y.emitterEventListeners[e][n]===t&&y.emitterEventListeners[e].splice(n,1);return y}},y.once=function(e,t){e=m(e);var n=function(){t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,n)};return y.on(e,n),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(t(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):t(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),t(e.target).is("."+y.params.bulletClass)&&t(e.target)[0].click())},liveRegion:t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=y.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){if(y.params.nextButton){var e=t(y.params.nextButton);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.nextSlideMessage)}if(y.params.prevButton){var n=t(y.params.prevButton);y.a11y.makeFocusable(n),y.a11y.addRole(n,"button"),y.a11y.addLabel(n,y.params.prevSlideMessage)}t(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=t(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,t){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),t&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};n.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),n=e.match(/(iPad).*OS\s([\d_]+)/),i=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!n&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:n||r||i,android:t}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),n=0;n<t.length;n++)if(t[n]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var i=(function(){var e=function(e){var t=this,n=0;for(n=0;n<e.length;n++)t[n]=e[n];return t.length=e.length,this},t=function(t,n){var i=[],r=0;if(t&&!n&&t instanceof e)return t;if(t)if("string"==typeof t){var a,o,s=t.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){var l="div";for(0===s.indexOf("<li")&&(l="ul"),0===s.indexOf("<tr")&&(l="tbody"),(0===s.indexOf("<td")||0===s.indexOf("<th"))&&(l="tr"),0===s.indexOf("<tbody")&&(l="table"),0===s.indexOf("<option")&&(l="select"),o=document.createElement(l),o.innerHTML=t,r=0;r<o.childNodes.length;r++)i.push(o.childNodes[r])}else for(a=n||"#"!==t[0]||t.match(/[ .<>:~]/)?(n||document).querySelectorAll(t):[document.getElementById(t.split("#")[1])],r=0;r<a.length;r++)a[r]&&i.push(a[r])}else if(t.nodeType||t===window||t===document)i.push(t);else if(t.length>0&&t[0].nodeType)for(r=0;r<t.length;r++)i.push(t[r]);return new e(i)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.add(t[n]);return this},removeClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.remove(t[n]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.toggle(t[n]);return this},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var n=0;n<this.length;n++)if(2===arguments.length)this[n].setAttribute(e,t);else for(var i in e)this[n][i]=e[i],this[n].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute(e);return this},data:function(e,t){if("undefined"==typeof t){if(this[0]){var n=this[0].getAttribute("data-"+e);return n?n:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var i=0;i<this.length;i++){var r=this[i];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=t}return this},transform:function(e){for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=e}return this},on:function(e,n,i,r){function a(e){var r=e.target;if(t(r).is(n))i.call(r,e);else for(var a=t(r).parents(),o=0;o<a.length;o++)t(a[o]).is(n)&&i.call(a[o],e)}var o,s,l=e.split(" ");for(o=0;o<this.length;o++)if("function"==typeof n||n===!1)for("function"==typeof n&&(i=arguments[1],r=arguments[2]||!1),s=0;s<l.length;s++)this[o].addEventListener(l[s],i,r);else for(s=0;s<l.length;s++)this[o].dom7LiveListeners||(this[o].dom7LiveListeners=[]),this[o].dom7LiveListeners.push({listener:i,liveListener:a}),this[o].addEventListener(l[s],a,r);return this},off:function(e,t,n,i){for(var r=e.split(" "),a=0;a<r.length;a++)for(var o=0;o<this.length;o++)if("function"==typeof t||t===!1)"function"==typeof t&&(n=arguments[1],i=arguments[2]||!1),this[o].removeEventListener(r[a],n,i);else if(this[o].dom7LiveListeners)for(var s=0;s<this[o].dom7LiveListeners.length;s++)this[o].dom7LiveListeners[s].listener===n&&this[o].removeEventListener(r[a],this[o].dom7LiveListeners[s].liveListener,i);return this},once:function(e,t,n,i){function r(o){n(o),a.off(e,t,r,i)}var a=this;"function"==typeof t&&(t=!1,n=arguments[1],i=arguments[2]),a.on(e,t,r,i)},trigger:function(e,t){for(var n=0;n<this.length;n++){var i;try{i=new window.CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(r){i=document.createEvent("Event"),i.initEvent(e,!0,!0),i.detail=t}this[n].dispatchEvent(i)}return this},transitionEnd:function(e){function t(a){if(a.target===this)for(e.call(this,a),n=0;n<i.length;n++)r.off(i[n],t)}var n,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(n=0;n<i.length;n++)r.on(i[n],t);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),n=document.body,i=e.clientTop||n.clientTop||0,r=e.clientLeft||n.clientLeft||0,a=window.pageYOffset||e.scrollTop,o=window.pageXOffset||e.scrollLeft;return{top:t.top+a-i,left:t.left+o-r}}return null},css:function(e,t){var n;if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n++)for(var i in e)this[n].style[i]=e[i];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(n=0;n<this.length;n++)this[n].style[e]=t;return this}return this},each:function(e){for(var t=0;t<this.length;t++)e.call(this[t],t,this[t]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t++)this[t].innerHTML=e;return this},is:function(n){if(!this[0])return!1;var i,r;if("string"==typeof n){var a=this[0];if(a===document)return n===document;if(a===window)return n===window;if(a.matches)return a.matches(n);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(n);if(a.mozMatchesSelector)return a.mozMatchesSelector(n);if(a.msMatchesSelector)return a.msMatchesSelector(n);for(i=t(n),r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}if(n===document)return this[0]===document;if(n===window)return this[0]===window;if(n.nodeType||n instanceof e){for(i=n.nodeType?[n]:n,r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],t=0;null!==(e=e.previousSibling);)1===e.nodeType&&t++;return t}return void 0},eq:function(t){if("undefined"==typeof t)return this;var n,i=this.length;return t>i-1?new e([]):0>t?(n=i+t,new e(0>n?[]:[this[n]])):new e([this[t]])},append:function(t){var n,i;for(n=0;n<this.length;n++)if("string"==typeof t){var r=document.createElement("div");for(r.innerHTML=t;r.firstChild;)this[n].appendChild(r.firstChild)}else if(t instanceof e)for(i=0;i<t.length;i++)this[n].appendChild(t[i]);else this[n].appendChild(t);return this},prepend:function(t){var n,i;for(n=0;n<this.length;n++)if("string"==typeof t){var r=document.createElement("div");for(r.innerHTML=t,i=r.childNodes.length-1;i>=0;i--)this[n].insertBefore(r.childNodes[i],this[n].childNodes[0])}else if(t instanceof e)for(i=0;i<t.length;i++)this[n].insertBefore(t[i],this[n].childNodes[0]);else this[n].insertBefore(t,this[n].childNodes[0]);
return this},insertBefore:function(e){for(var n=t(e),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0]);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r])},insertAfter:function(e){for(var n=t(e),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0].nextSibling);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r].nextSibling)},next:function(n){return new e(this.length>0?n?this[0].nextElementSibling&&t(this[0].nextElementSibling).is(n)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(n){var i=[],r=this[0];if(!r)return new e([]);for(;r.nextElementSibling;){var a=r.nextElementSibling;n?t(a).is(n)&&i.push(a):i.push(a),r=a}return new e(i)},prev:function(n){return new e(this.length>0?n?this[0].previousElementSibling&&t(this[0].previousElementSibling).is(n)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(n){var i=[],r=this[0];if(!r)return new e([]);for(;r.previousElementSibling;){var a=r.previousElementSibling;n?t(a).is(n)&&i.push(a):i.push(a),r=a}return new e(i)},parent:function(e){for(var n=[],i=0;i<this.length;i++)e?t(this[i].parentNode).is(e)&&n.push(this[i].parentNode):n.push(this[i].parentNode);return t(t.unique(n))},parents:function(e){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].parentNode;r;)e?t(r).is(e)&&n.push(r):n.push(r),r=r.parentNode;return t(t.unique(n))},find:function(t){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].querySelectorAll(t),a=0;a<r.length;a++)n.push(r[a]);return new e(n)},children:function(n){for(var i=[],r=0;r<this.length;r++)for(var a=this[r].childNodes,o=0;o<a.length;o++)n?1===a[o].nodeType&&t(a[o]).is(n)&&i.push(a[o]):1===a[o].nodeType&&i.push(a[o]);return new e(t.unique(i))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,n,i=this;for(e=0;e<arguments.length;e++){var r=t(arguments[e]);for(n=0;n<r.length;n++)i[i.length]=r[n],i.length++}return i}},t.fn=e.prototype,t.unique=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},t}()),r=["jQuery","Zepto","Dom7"],a=0;a<r.length;a++)window[r[a]]&&e(window[r[a]]);var o;o="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i,o&&("transitionEnd"in o.fn||(o.fn.transitionEnd=function(e){function t(a){if(a.target===this)for(e.call(this,a),n=0;n<i.length;n++)r.off(i[n],t)}var n,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(n=0;n<i.length;n++)r.on(i[n],t);return this}),"transform"in o.fn||(o.fn.transform=function(e){for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=e}return this}),"transition"in o.fn||(o.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=e}return this})),ionic.views.Swiper=n}(),function(e){"use strict";e.views.Toggle=e.views.View.inherit({initialize:function(t){var n=this;this.el=t.el,this.checkbox=t.checkbox,this.track=t.track,this.handle=t.handle,this.openPercent=-1,this.onChange=t.onChange||function(){},this.triggerThreshold=t.triggerThreshold||20,this.dragStartHandler=function(e){n.dragStart(e)},this.dragHandler=function(e){n.drag(e)},this.holdHandler=function(e){n.hold(e)},this.releaseHandler=function(e){n.release(e)},this.dragStartGesture=e.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=e.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=e.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=e.onGesture("release",this.releaseHandler,this.el)},destroy:function(){e.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),e.offGesture(this.dragGesture,"drag",this.dragGesture),e.offGesture(this.dragHoldGesture,"hold",this.holdHandler),e.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(e){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},e.gesture.srcEvent.preventDefault(),this.hold(e))},drag:function(t){var n=this;this._dragInfo&&(t.gesture.srcEvent.preventDefault(),e.requestAnimationFrame(function(){if(n._dragInfo){var e=t.gesture.touches[0].pageX-n._dragInfo.left,i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?e<n.triggerThreshold?n.setOpenPercent(0):e>n._dragInfo.triggerX&&n.setOpenPercent(100):e<n._dragInfo.triggerX?n.setOpenPercent(0):e>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(e){this.el.classList.remove("dragging"),this.endDrag(e)},setOpenPercent:function(t){if(this.openPercent<0||t<this.openPercent-3||t>this.openPercent+3)if(this.openPercent=t,0===t)this.val(!1);else if(100===t)this.val(!0);else{var n=Math.round(t/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[e.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(t){return(t===!0||t===!1)&&(""!==this.handle.style[e.CSS.TRANSFORM]&&(this.handle.style[e.CSS.TRANSFORM]=""),this.checkbox.checked=t,this.openPercent=t?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic)}();
},{}]},{},["/Library/WebServer/Documents/ionic-googlemaps/www/js/app-main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJub2RlX21vZHVsZXMvYnVsay1yZXF1aXJlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2J1bGstcmVxdWlyZS9ub2RlX21vZHVsZXMvZ2xvYi9nbG9iLmpzIiwibm9kZV9tb2R1bGVzL2J1bGstcmVxdWlyZS9ub2RlX21vZHVsZXMvZ2xvYi9ub2RlX21vZHVsZXMvbWluaW1hdGNoL21pbmltYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9idWxrLXJlcXVpcmUvbm9kZV9tb2R1bGVzL2dsb2Ivbm9kZV9tb2R1bGVzL21pbmltYXRjaC9ub2RlX21vZHVsZXMvbHJ1LWNhY2hlL2xpYi9scnUtY2FjaGUuanMiLCJub2RlX21vZHVsZXMvYnVsay1yZXF1aXJlL25vZGVfbW9kdWxlcy9nbG9iL25vZGVfbW9kdWxlcy9taW5pbWF0Y2gvbm9kZV9tb2R1bGVzL3NpZ211bmQvc2lnbXVuZC5qcyIsInd3dy9qcy9hcHAtbWFpbi5qcyIsInd3dy9qcy9jb250cm9sbGVycy9faW5kZXguanMiLCJ3d3cvanMvb25fcnVuLmpzIiwid3d3L2xpYi9pb25pYy9qcy9pb25pYy5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3h0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcmlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsIi8vIGh0dHA6Ly93aWtpLmNvbW1vbmpzLm9yZy93aWtpL1VuaXRfVGVzdGluZy8xLjBcbi8vXG4vLyBUSElTIElTIE5PVCBURVNURUQgTk9SIExJS0VMWSBUTyBXT1JLIE9VVFNJREUgVjghXG4vL1xuLy8gT3JpZ2luYWxseSBmcm9tIG5hcndoYWwuanMgKGh0dHA6Ly9uYXJ3aGFsanMub3JnKVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IFRob21hcyBSb2JpbnNvbiA8Mjgwbm9ydGguY29tPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0b1xuLy8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbi8vIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuLy8gc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyB3aGVuIHVzZWQgaW4gbm9kZSwgdGhpcyB3aWxsIGFjdHVhbGx5IGxvYWQgdGhlIHV0aWwgbW9kdWxlIHdlIGRlcGVuZCBvblxuLy8gdmVyc3VzIGxvYWRpbmcgdGhlIGJ1aWx0aW4gdXRpbCBtb2R1bGUgYXMgaGFwcGVucyBvdGhlcndpc2Vcbi8vIHRoaXMgaXMgYSBidWcgaW4gbm9kZSBtb2R1bGUgbG9hZGluZyBhcyBmYXIgYXMgSSBhbSBjb25jZXJuZWRcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbC8nKTtcblxudmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vLyAxLiBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG5cbi8vIDIuIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGFzc2VydC5cbi8vIG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IoeyBtZXNzYWdlOiBtZXNzYWdlLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCB9KVxuXG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gIHRoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gIHRoaXMuYWN0dWFsID0gb3B0aW9ucy5hY3R1YWw7XG4gIHRoaXMuZXhwZWN0ZWQgPSBvcHRpb25zLmV4cGVjdGVkO1xuICB0aGlzLm9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcjtcbiAgaWYgKG9wdGlvbnMubWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNZXNzYWdlKHRoaXMpO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IHRydWU7XG4gIH1cbiAgdmFyIHN0YWNrU3RhcnRGdW5jdGlvbiA9IG9wdGlvbnMuc3RhY2tTdGFydEZ1bmN0aW9uIHx8IGZhaWw7XG5cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBzdGFja1N0YXJ0RnVuY3Rpb24ubmFtZTtcbiAgICAgIHZhciBpZHggPSBvdXQuaW5kZXhPZignXFxuJyArIGZuX25hbWUpO1xuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSBsb2NhdGVkIHRoZSBmdW5jdGlvbiBmcmFtZVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIG91dCBldmVyeXRoaW5nIGJlZm9yZSBpdCAoYW5kIGl0cyBsaW5lKVxuICAgICAgICB2YXIgbmV4dF9saW5lID0gb3V0LmluZGV4T2YoJ1xcbicsIGlkeCArIDEpO1xuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKG5leHRfbGluZSArIDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YWNrID0gb3V0O1xuICAgIH1cbiAgfVxufTtcblxuLy8gYXNzZXJ0LkFzc2VydGlvbkVycm9yIGluc3RhbmNlb2YgRXJyb3JcbnV0aWwuaW5oZXJpdHMoYXNzZXJ0LkFzc2VydGlvbkVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgaWYgKHV0aWwuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuICcnICsgdmFsdWU7XG4gIH1cbiAgaWYgKHV0aWwuaXNOdW1iZXIodmFsdWUpICYmICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuICBpZiAodXRpbC5pc0Z1bmN0aW9uKHZhbHVlKSB8fCB1dGlsLmlzUmVnRXhwKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGUocywgbikge1xuICBpZiAodXRpbC5pc1N0cmluZyhzKSkge1xuICAgIHJldHVybiBzLmxlbmd0aCA8IG4gPyBzIDogcy5zbGljZSgwLCBuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNZXNzYWdlKHNlbGYpIHtcbiAgcmV0dXJuIHRydW5jYXRlKEpTT04uc3RyaW5naWZ5KHNlbGYuYWN0dWFsLCByZXBsYWNlciksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShKU09OLnN0cmluZ2lmeShzZWxmLmV4cGVjdGVkLCByZXBsYWNlciksIDEyOCk7XG59XG5cbi8vIEF0IHByZXNlbnQgb25seSB0aGUgdGhyZWUga2V5cyBtZW50aW9uZWQgYWJvdmUgYXJlIHVzZWQgYW5kXG4vLyB1bmRlcnN0b29kIGJ5IHRoZSBzcGVjLiBJbXBsZW1lbnRhdGlvbnMgb3Igc3ViIG1vZHVsZXMgY2FuIHBhc3Ncbi8vIG90aGVyIGtleXMgdG8gdGhlIEFzc2VydGlvbkVycm9yJ3MgY29uc3RydWN0b3IgLSB0aGV5IHdpbGwgYmVcbi8vIGlnbm9yZWQuXG5cbi8vIDMuIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuICBBbGwgYXNzZXJ0aW9uIG1ldGhvZHMgcHJvdmlkZVxuLy8gYm90aCB0aGUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgdG8gdGhlIGFzc2VydGlvbiBlcnJvciBmb3Jcbi8vIGRpc3BsYXkgcHVycG9zZXMuXG5cbmZ1bmN0aW9uIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgb3BlcmF0b3IsIHN0YWNrU3RhcnRGdW5jdGlvbikge1xuICB0aHJvdyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHtcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIGFjdHVhbDogYWN0dWFsLFxuICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICBvcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZ1bmN0aW9uOiBzdGFja1N0YXJ0RnVuY3Rpb25cbiAgfSk7XG59XG5cbi8vIEVYVEVOU0lPTiEgYWxsb3dzIGZvciB3ZWxsIGJlaGF2ZWQgZXJyb3JzIGRlZmluZWQgZWxzZXdoZXJlLlxuYXNzZXJ0LmZhaWwgPSBmYWlsO1xuXG4vLyA0LiBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIWd1YXJkLlxuLy8gYXNzZXJ0Lm9rKGd1YXJkLCBtZXNzYWdlX29wdCk7XG4vLyBUaGlzIHN0YXRlbWVudCBpcyBlcXVpdmFsZW50IHRvIGFzc2VydC5lcXVhbCh0cnVlLCAhIWd1YXJkLFxuLy8gbWVzc2FnZV9vcHQpOy4gVG8gdGVzdCBzdHJpY3RseSBmb3IgdGhlIHZhbHVlIHRydWUsIHVzZVxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHRydWUsIGd1YXJkLCBtZXNzYWdlX29wdCk7LlxuXG5mdW5jdGlvbiBvayh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQub2spO1xufVxuYXNzZXJ0Lm9rID0gb2s7XG5cbi8vIDUuIFRoZSBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc2hhbGxvdywgY29lcmNpdmUgZXF1YWxpdHkgd2l0aFxuLy8gPT0uXG4vLyBhc3NlcnQuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT0gZXhwZWN0ZWQpIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09JywgYXNzZXJ0LmVxdWFsKTtcbn07XG5cbi8vIDYuIFRoZSBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciB3aGV0aGVyIHR3byBvYmplY3RzIGFyZSBub3QgZXF1YWxcbi8vIHdpdGggIT0gYXNzZXJ0Lm5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdEVxdWFsID0gZnVuY3Rpb24gbm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT0nLCBhc3NlcnQubm90RXF1YWwpO1xuICB9XG59O1xuXG4vLyA3LiBUaGUgZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGEgZGVlcCBlcXVhbGl0eSByZWxhdGlvbi5cbi8vIGFzc2VydC5kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcEVxdWFsJywgYXNzZXJ0LmRlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCkge1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKHV0aWwuaXNCdWZmZXIoYWN0dWFsKSAmJiB1dGlsLmlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIGlmIChhY3R1YWwubGVuZ3RoICE9IGV4cGVjdGVkLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3R1YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3R1YWxbaV0gIT09IGV4cGVjdGVkW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgLy8gNy4yLiBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBEYXRlIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBEYXRlIG9iamVjdCB0aGF0IHJlZmVycyB0byB0aGUgc2FtZSB0aW1lLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNEYXRlKGFjdHVhbCkgJiYgdXRpbC5pc0RhdGUoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMgSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBSZWdFeHAgb2JqZWN0IHdpdGggdGhlIHNhbWUgc291cmNlIGFuZFxuICAvLyBwcm9wZXJ0aWVzIChgZ2xvYmFsYCwgYG11bHRpbGluZWAsIGBsYXN0SW5kZXhgLCBgaWdub3JlQ2FzZWApLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNSZWdFeHAoYWN0dWFsKSAmJiB1dGlsLmlzUmVnRXhwKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuc291cmNlID09PSBleHBlY3RlZC5zb3VyY2UgJiZcbiAgICAgICAgICAgYWN0dWFsLmdsb2JhbCA9PT0gZXhwZWN0ZWQuZ2xvYmFsICYmXG4gICAgICAgICAgIGFjdHVhbC5tdWx0aWxpbmUgPT09IGV4cGVjdGVkLm11bHRpbGluZSAmJlxuICAgICAgICAgICBhY3R1YWwubGFzdEluZGV4ID09PSBleHBlY3RlZC5sYXN0SW5kZXggJiZcbiAgICAgICAgICAgYWN0dWFsLmlnbm9yZUNhc2UgPT09IGV4cGVjdGVkLmlnbm9yZUNhc2U7XG5cbiAgLy8gNy40LiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCF1dGlsLmlzT2JqZWN0KGFjdHVhbCkgJiYgIXV0aWwuaXNPYmplY3QoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjUgRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiKSB7XG4gIGlmICh1dGlsLmlzTnVsbE9yVW5kZWZpbmVkKGEpIHx8IHV0aWwuaXNOdWxsT3JVbmRlZmluZWQoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy8gaWYgb25lIGlzIGEgcHJpbWl0aXZlLCB0aGUgb3RoZXIgbXVzdCBiZSBzYW1lXG4gIGlmICh1dGlsLmlzUHJpbWl0aXZlKGEpIHx8IHV0aWwuaXNQcmltaXRpdmUoYikpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuICB2YXIgYUlzQXJncyA9IGlzQXJndW1lbnRzKGEpLFxuICAgICAgYklzQXJncyA9IGlzQXJndW1lbnRzKGIpO1xuICBpZiAoKGFJc0FyZ3MgJiYgIWJJc0FyZ3MpIHx8ICghYUlzQXJncyAmJiBiSXNBcmdzKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChhSXNBcmdzKSB7XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gX2RlZXBFcXVhbChhLCBiKTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAga2IgPSBvYmplY3RLZXlzKGIpLFxuICAgICAga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFfZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwRXF1YWwnLCBhc3NlcnQubm90RGVlcEVxdWFsKTtcbiAgfVxufTtcblxuLy8gOS4gVGhlIHN0cmljdCBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc3RyaWN0IGVxdWFsaXR5LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PT0nLCBhc3NlcnQuc3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG4vLyAxMC4gVGhlIHN0cmljdCBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciBzdHJpY3QgaW5lcXVhbGl0eSwgYXNcbi8vIGRldGVybWluZWQgYnkgIT09LiAgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9PScsIGFzc2VydC5ub3RTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHBlY3RlZCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWQudGVzdChhY3R1YWwpO1xuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfdGhyb3dzKHNob3VsZFRocm93LCBibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGFjdHVhbDtcblxuICBpZiAodXRpbC5pc1N0cmluZyhleHBlY3RlZCkpIHtcbiAgICBtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gICAgZXhwZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYWN0dWFsID0gZTtcbiAgfVxuXG4gIG1lc3NhZ2UgPSAoZXhwZWN0ZWQgJiYgZXhwZWN0ZWQubmFtZSA/ICcgKCcgKyBleHBlY3RlZC5uYW1lICsgJykuJyA6ICcuJykgK1xuICAgICAgICAgICAgKG1lc3NhZ2UgPyAnICcgKyBtZXNzYWdlIDogJy4nKTtcblxuICBpZiAoc2hvdWxkVGhyb3cgJiYgIWFjdHVhbCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ01pc3NpbmcgZXhwZWN0ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKCFzaG91bGRUaHJvdyAmJiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ0dvdCB1bndhbnRlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICBpZiAoKHNob3VsZFRocm93ICYmIGFjdHVhbCAmJiBleHBlY3RlZCAmJlxuICAgICAgIWV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fCAoIXNob3VsZFRocm93ICYmIGFjdHVhbCkpIHtcbiAgICB0aHJvdyBhY3R1YWw7XG4gIH1cbn1cblxuLy8gMTEuIEV4cGVjdGVkIHRvIHRocm93IGFuIGVycm9yOlxuLy8gYXNzZXJ0LnRocm93cyhibG9jaywgRXJyb3Jfb3B0LCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cy5hcHBseSh0aGlzLCBbdHJ1ZV0uY29uY2F0KHBTbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbn07XG5cbi8vIEVYVEVOU0lPTiEgVGhpcyBpcyBhbm5veWluZyB0byB3cml0ZSBvdXRzaWRlIHRoaXMgbW9kdWxlLlxuYXNzZXJ0LmRvZXNOb3RUaHJvdyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3MuYXBwbHkodGhpcywgW2ZhbHNlXS5jb25jYXQocFNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xufTtcblxuYXNzZXJ0LmlmRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgaWYgKGVycikge3Rocm93IGVycjt9fTtcblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID1cbiAgICAvXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLztcbnZhciBzcGxpdFBhdGggPSBmdW5jdGlvbihmaWxlbmFtZSkge1xuICByZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XG59O1xuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciByZXN1bHQgPSBzcGxpdFBhdGgocGF0aCksXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xuXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXG4gICAgcmV0dXJuICcuJztcbiAgfVxuXG4gIGlmIChkaXIpIHtcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIHJvb3QgKyBkaXI7XG59O1xuXG5cbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBzcGxpdFBhdGgocGF0aClbMl07XG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gc3BsaXRQYXRoKHBhdGgpWzNdO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwidmFyIGdsb2IgPSByZXF1aXJlKCdnbG9iJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocm9vdCwgZ2xvYnMsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JzID09PSAnc3RyaW5nJykgZ2xvYnMgPSBbIGdsb2JzIF07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGdsb2JzKSkgcmV0dXJuIHt9O1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAgIHZhciByZXF1aXJlRm4gPSBvcHRzLnJlcXVpcmUgfHwgcmVxdWlyZTtcbiAgICBcbiAgICB2YXIgeGdsb2JzID0gZ2xvYnMubWFwKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGcpKSB7XG4gICAgICAgICAgICByZXR1cm4gWyBwYXRoLnJlc29sdmUocm9vdCwgZ1swXSkgXS5jb25jYXQoZy5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShyb290LCBnKVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB3YWxrKHhnbG9icy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZykge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShnKSkge1xuICAgICAgICAgICAgYXJncyA9IGcuc2xpY2UoMSk7XG4gICAgICAgICAgICBnID0gZ1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXggPSBnbG9iLnN5bmMoZyk7XG4gICAgICAgIFxuICAgICAgICBleC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGtleU9mKGZpbGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgbm9kZSA9IGFjYywgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVba2V5XSkgbm9kZVtrZXldID0gWyBmaWxlIF07XG4gICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XS5wdXNoLmFwcGx5KG5vZGVba2V5XSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVba2V5XSkgbm9kZVtrZXldID0ge307XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSkpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHdhbGsgKG5vZGUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgICAgICAgIHZhciBleHAgPSByZXF1aXJlRm4obm9kZVswXSk7XG4gICAgICAgICAgICB2YXIgYXJncyA9IG5vZGUuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiBleHA7XG4gICAgICAgICAgICB2YXIgbWFwRiA9IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnc18gPSBhcmdzLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzXyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXhwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcEYoZXhwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXhwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHAubWFwKG1hcEYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXhwICYmIHR5cGVvZiBleHAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV4cCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IG1hcEYoZXhwW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGV4cDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBpbml0ID0gbm9kZS5pbmRleCAmJiB0eXBlb2Ygbm9kZS5pbmRleFswXSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAmJiByZXF1aXJlRm4obm9kZS5pbmRleFswXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhub2RlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSB3YWxrKG5vZGVba2V5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIGluaXQgJiYgdHlwZW9mIGluaXQgPT09ICdmdW5jdGlvbicgPyBpbml0IDoge30pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGtleU9mIChmaWxlKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdGgucmVsYXRpdmUocm9vdCwgZmlsZSkuc3BsaXQoL1xcL3xcXFxcLyk7XG4gICAgICAgIHZhciBsZW4gPSBwYXJ0cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4pIHBhcnRzW2xlbi0xXSA9IHBhcnRzW2xlbi0xXS5yZXBsYWNlKC9cXC5bXi5dKiQvLCAnJyk7XG4gICAgICAgIHJldHVybiBwYXJ0cztcbiAgICB9XG59O1xuIiwiLy8gQXBwcm9hY2g6XG4vL1xuLy8gMS4gR2V0IHRoZSBtaW5pbWF0Y2ggc2V0XG4vLyAyLiBGb3IgZWFjaCBwYXR0ZXJuIGluIHRoZSBzZXQsIFBST0NFU1MocGF0dGVybilcbi8vIDMuIFN0b3JlIG1hdGNoZXMgcGVyLXNldCwgdGhlbiB1bmlxIHRoZW1cbi8vXG4vLyBQUk9DRVNTKHBhdHRlcm4pXG4vLyBHZXQgdGhlIGZpcnN0IFtuXSBpdGVtcyBmcm9tIHBhdHRlcm4gdGhhdCBhcmUgYWxsIHN0cmluZ3Ncbi8vIEpvaW4gdGhlc2UgdG9nZXRoZXIuICBUaGlzIGlzIFBSRUZJWC5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbW9yZSByZW1haW5pbmcsIHRoZW4gc3RhdChQUkVGSVgpIGFuZFxuLy8gICBhZGQgdG8gbWF0Y2hlcyBpZiBpdCBzdWNjZWVkcy4gIEVORC5cbi8vIHJlYWRkaXIoUFJFRklYKSBhcyBFTlRSSUVTXG4vLyAgIElmIGZhaWxzLCBFTkRcbi8vICAgSWYgcGF0dGVybltuXSBpcyBHTE9CU1RBUlxuLy8gICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgZ2xvYnN0YXIgbWF0Y2ggaXMgZW1wdHlcbi8vICAgICAvLyBieSBwcnVuaW5nIGl0IG91dCwgYW5kIHRlc3RpbmcgdGhlIHJlc3VsdGluZyBwYXR0ZXJuXG4vLyAgICAgUFJPQ0VTUyhwYXR0ZXJuWzAuLm5dICsgcGF0dGVybltuKzEgLi4gJF0pXG4vLyAgICAgLy8gaGFuZGxlIG90aGVyIGNhc2VzLlxuLy8gICAgIGZvciBFTlRSWSBpbiBFTlRSSUVTIChub3QgZG90ZmlsZXMpXG4vLyAgICAgICAvLyBhdHRhY2ggZ2xvYnN0YXIgKyB0YWlsIG9udG8gdGhlIGVudHJ5XG4vLyAgICAgICBQUk9DRVNTKHBhdHRlcm5bMC4ubl0gKyBFTlRSWSArIHBhdHRlcm5bbiAuLiAkXSlcbi8vXG4vLyAgIGVsc2UgLy8gbm90IGdsb2JzdGFyXG4vLyAgICAgZm9yIEVOVFJZIGluIEVOVFJJRVMgKG5vdCBkb3RmaWxlcywgdW5sZXNzIHBhdHRlcm5bbl0gaXMgZG90KVxuLy8gICAgICAgVGVzdCBFTlRSWSBhZ2FpbnN0IHBhdHRlcm5bbl1cbi8vICAgICAgIElmIGZhaWxzLCBjb250aW51ZVxuLy8gICAgICAgSWYgcGFzc2VzLCBQUk9DRVNTKHBhdHRlcm5bMC4ubl0gKyBpdGVtICsgcGF0dGVybltuKzEgLi4gJF0pXG4vL1xuLy8gQ2F2ZWF0OlxuLy8gICBDYWNoZSBhbGwgc3RhdHMgYW5kIHJlYWRkaXJzIHJlc3VsdHMgdG8gbWluaW1pemUgc3lzY2FsbC4gIFNpbmNlIGFsbFxuLy8gICB3ZSBldmVyIGNhcmUgYWJvdXQgaXMgZXhpc3RlbmNlIGFuZCBkaXJlY3RvcnktbmVzcywgd2UgY2FuIGp1c3Qga2VlcFxuLy8gICBgdHJ1ZWAgZm9yIGZpbGVzLCBhbmQgW2NoaWxkcmVuLC4uLl0gZm9yIGRpcmVjdG9yaWVzLCBvciBgZmFsc2VgIGZvclxuLy8gICB0aGluZ3MgdGhhdCBkb24ndCBleGlzdC5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYlxuXG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIilcbiwgbWluaW1hdGNoID0gcmVxdWlyZShcIm1pbmltYXRjaFwiKVxuLCBNaW5pbWF0Y2ggPSBtaW5pbWF0Y2guTWluaW1hdGNoXG4sIGluaGVyaXRzID0gcmVxdWlyZShcImluaGVyaXRzXCIpXG4sIEVFID0gcmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXJcbiwgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpXG4sIGlzRGlyID0ge31cbiwgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKS5va1xuXG5mdW5jdGlvbiBnbG9iIChwYXR0ZXJuLCBvcHRpb25zLCBjYikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikgY2IgPSBvcHRpb25zLCBvcHRpb25zID0ge31cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIpIHtcbiAgICBkZXByZWNhdGVkKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBnID0gbmV3IEdsb2IocGF0dGVybiwgb3B0aW9ucywgY2IpXG4gIHJldHVybiBnLnN5bmMgPyBnLmZvdW5kIDogZ1xufVxuXG5nbG9iLmZubWF0Y2ggPSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJnbG9iJ3MgaW50ZXJmYWNlIGhhcyBjaGFuZ2VkLiBQbGVhc2Ugc2VlIHRoZSBkb2NzLlwiKVxufVxuXG5nbG9iLnN5bmMgPSBnbG9iU3luY1xuZnVuY3Rpb24gZ2xvYlN5bmMgKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSB7XG4gICAgZGVwcmVjYXRlZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBvcHRpb25zLnN5bmMgPSB0cnVlXG4gIHJldHVybiBnbG9iKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbnRoaXMuX3Byb2Nlc3NpbmdFbWl0UXVldWUgPSBmYWxzZVxuXG5nbG9iLkdsb2IgPSBHbG9iXG5pbmhlcml0cyhHbG9iLCBFRSlcbmZ1bmN0aW9uIEdsb2IgKHBhdHRlcm4sIG9wdGlvbnMsIGNiKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBHbG9iKSkge1xuICAgIHJldHVybiBuZXcgR2xvYihwYXR0ZXJuLCBvcHRpb25zLCBjYilcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2IgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXMub24oXCJlcnJvclwiLCBjYilcbiAgICB0aGlzLm9uKFwiZW5kXCIsIGZ1bmN0aW9uIChtYXRjaGVzKSB7XG4gICAgICBjYihudWxsLCBtYXRjaGVzKVxuICAgIH0pXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHRoaXMuX2VuZEVtaXR0ZWQgPSBmYWxzZVxuICB0aGlzLkVPRiA9IHt9XG4gIHRoaXMuX2VtaXRRdWV1ZSA9IFtdXG5cbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICB0aGlzLl9wcm9jZXNzaW5nRW1pdFF1ZXVlID0gZmFsc2VcblxuICB0aGlzLm1heERlcHRoID0gb3B0aW9ucy5tYXhEZXB0aCB8fCAxMDAwXG4gIHRoaXMubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGggfHwgSW5maW5pdHlcbiAgdGhpcy5jYWNoZSA9IG9wdGlvbnMuY2FjaGUgfHwge31cbiAgdGhpcy5zdGF0Q2FjaGUgPSBvcHRpb25zLnN0YXRDYWNoZSB8fCB7fVxuXG4gIHRoaXMuY2hhbmdlZEN3ZCA9IGZhbHNlXG4gIHZhciBjd2QgPSBwcm9jZXNzLmN3ZCgpXG4gIGlmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcImN3ZFwiKSkgdGhpcy5jd2QgPSBjd2RcbiAgZWxzZSB7XG4gICAgdGhpcy5jd2QgPSBvcHRpb25zLmN3ZFxuICAgIHRoaXMuY2hhbmdlZEN3ZCA9IHBhdGgucmVzb2x2ZShvcHRpb25zLmN3ZCkgIT09IGN3ZFxuICB9XG5cbiAgdGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IHBhdGgucmVzb2x2ZSh0aGlzLmN3ZCwgXCIvXCIpXG4gIHRoaXMucm9vdCA9IHBhdGgucmVzb2x2ZSh0aGlzLnJvb3QpXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSBcIndpbjMyXCIpXG4gICAgdGhpcy5yb290ID0gdGhpcy5yb290LnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpXG5cbiAgdGhpcy5ub21vdW50ID0gISFvcHRpb25zLm5vbW91bnRcblxuICBpZiAoIXBhdHRlcm4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHByb3ZpZGUgcGF0dGVyblwiKVxuICB9XG5cbiAgLy8gYmFzZS1tYXRjaGluZzoganVzdCB1c2UgZ2xvYnN0YXIgZm9yIHRoYXQuXG4gIGlmIChvcHRpb25zLm1hdGNoQmFzZSAmJiAtMSA9PT0gcGF0dGVybi5pbmRleE9mKFwiL1wiKSkge1xuICAgIGlmIChvcHRpb25zLm5vZ2xvYnN0YXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UgbWF0Y2hpbmcgcmVxdWlyZXMgZ2xvYnN0YXJcIilcbiAgICB9XG4gICAgcGF0dGVybiA9IFwiKiovXCIgKyBwYXR0ZXJuXG4gIH1cblxuICB0aGlzLnN0cmljdCA9IG9wdGlvbnMuc3RyaWN0ICE9PSBmYWxzZVxuICB0aGlzLmRvdCA9ICEhb3B0aW9ucy5kb3RcbiAgdGhpcy5tYXJrID0gISFvcHRpb25zLm1hcmtcbiAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmNcbiAgdGhpcy5ub3VuaXF1ZSA9ICEhb3B0aW9ucy5ub3VuaXF1ZVxuICB0aGlzLm5vbnVsbCA9ICEhb3B0aW9ucy5ub251bGxcbiAgdGhpcy5ub3NvcnQgPSAhIW9wdGlvbnMubm9zb3J0XG4gIHRoaXMubm9jYXNlID0gISFvcHRpb25zLm5vY2FzZVxuICB0aGlzLnN0YXQgPSAhIW9wdGlvbnMuc3RhdFxuXG4gIHRoaXMuZGVidWcgPSAhIW9wdGlvbnMuZGVidWcgfHwgISFvcHRpb25zLmdsb2JEZWJ1Z1xuICBpZiAodGhpcy5kZWJ1ZylcbiAgICB0aGlzLmxvZyA9IGNvbnNvbGUuZXJyb3JcblxuICB0aGlzLnNpbGVudCA9ICEhb3B0aW9ucy5zaWxlbnRcblxuICB2YXIgbW0gPSB0aGlzLm1pbmltYXRjaCA9IG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucylcbiAgdGhpcy5vcHRpb25zID0gbW0ub3B0aW9uc1xuICBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuID0gbW0ucGF0dGVyblxuXG4gIHRoaXMuZXJyb3IgPSBudWxsXG4gIHRoaXMuYWJvcnRlZCA9IGZhbHNlXG5cbiAgLy8gbGlzdCBvZiBhbGwgdGhlIHBhdHRlcm5zIHRoYXQgKiogaGFzIHJlc29sdmVkIGRvLCBzb1xuICAvLyB3ZSBjYW4gYXZvaWQgdmlzaXRpbmcgbXVsdGlwbGUgdGltZXMuXG4gIHRoaXMuX2dsb2JzdGFycyA9IHt9XG5cbiAgRUUuY2FsbCh0aGlzKVxuXG4gIC8vIHByb2Nlc3MgZWFjaCBwYXR0ZXJuIGluIHRoZSBtaW5pbWF0Y2ggc2V0XG4gIHZhciBuID0gdGhpcy5taW5pbWF0Y2guc2V0Lmxlbmd0aFxuXG4gIC8vIFRoZSBtYXRjaGVzIGFyZSBzdG9yZWQgYXMgezxmaWxlbmFtZT46IHRydWUsLi4ufSBzbyB0aGF0XG4gIC8vIGR1cGxpY2F0ZXMgYXJlIGF1dG9tYWdpY2FsbHkgcHJ1bmVkLlxuICAvLyBMYXRlciwgd2UgZG8gYW4gT2JqZWN0LmtleXMoKSBvbiB0aGVzZS5cbiAgLy8gS2VlcCB0aGVtIGFzIGEgbGlzdCBzbyB3ZSBjYW4gZmlsbCBpbiB3aGVuIG5vbnVsbCBpcyBzZXQuXG4gIHRoaXMubWF0Y2hlcyA9IG5ldyBBcnJheShuKVxuXG4gIHRoaXMubWluaW1hdGNoLnNldC5mb3JFYWNoKGl0ZXJhdG9yLmJpbmQodGhpcykpXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yIChwYXR0ZXJuLCBpLCBzZXQpIHtcbiAgICB0aGlzLl9wcm9jZXNzKHBhdHRlcm4sIDAsIGksIGZ1bmN0aW9uIChlcikge1xuICAgICAgaWYgKGVyKSB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcilcbiAgICAgIGlmICgtLSBuIDw9IDApIHRoaXMuX2ZpbmlzaCgpXG4gICAgfSlcbiAgfVxufVxuXG5HbG9iLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7fVxuXG5HbG9iLnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIEdsb2IpXG5cbiAgdmFyIG5vdSA9IHRoaXMubm91bmlxdWVcbiAgLCBhbGwgPSBub3UgPyBbXSA6IHt9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLm1hdGNoZXMubGVuZ3RoOyBpIDwgbDsgaSArKykge1xuICAgIHZhciBtYXRjaGVzID0gdGhpcy5tYXRjaGVzW2ldXG4gICAgdGhpcy5sb2coXCJtYXRjaGVzWyVkXSA9XCIsIGksIG1hdGNoZXMpXG4gICAgLy8gZG8gbGlrZSB0aGUgc2hlbGwsIGFuZCBzcGl0IG91dCB0aGUgbGl0ZXJhbCBnbG9iXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBpZiAodGhpcy5ub251bGwpIHtcbiAgICAgICAgdmFyIGxpdGVyYWwgPSB0aGlzLm1pbmltYXRjaC5nbG9iU2V0W2ldXG4gICAgICAgIGlmIChub3UpIGFsbC5wdXNoKGxpdGVyYWwpXG4gICAgICAgIGVsc2UgYWxsW2xpdGVyYWxdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYWQgbWF0Y2hlc1xuICAgICAgdmFyIG0gPSBPYmplY3Qua2V5cyhtYXRjaGVzKVxuICAgICAgaWYgKG5vdSkgYWxsLnB1c2guYXBwbHkoYWxsLCBtKVxuICAgICAgZWxzZSBtLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgYWxsW21dID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoIW5vdSkgYWxsID0gT2JqZWN0LmtleXMoYWxsKVxuXG4gIGlmICghdGhpcy5ub3NvcnQpIHtcbiAgICBhbGwgPSBhbGwuc29ydCh0aGlzLm5vY2FzZSA/IGFscGhhc29ydGkgOiBhbHBoYXNvcnQpXG4gIH1cblxuICBpZiAodGhpcy5tYXJrKSB7XG4gICAgLy8gYXQgKnNvbWUqIHBvaW50IHdlIHN0YXR0ZWQgYWxsIG9mIHRoZXNlXG4gICAgYWxsID0gYWxsLm1hcCh0aGlzLl9tYXJrLCB0aGlzKVxuICB9XG5cbiAgdGhpcy5sb2coXCJlbWl0dGluZyBlbmRcIiwgYWxsKVxuXG4gIHRoaXMuRU9GID0gdGhpcy5mb3VuZCA9IGFsbFxuICB0aGlzLmVtaXRNYXRjaCh0aGlzLkVPRilcbn1cblxuZnVuY3Rpb24gYWxwaGFzb3J0aSAoYSwgYikge1xuICBhID0gYS50b0xvd2VyQ2FzZSgpXG4gIGIgPSBiLnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIGFscGhhc29ydChhLCBiKVxufVxuXG5mdW5jdGlvbiBhbHBoYXNvcnQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwXG59XG5cbkdsb2IucHJvdG90eXBlLl9tYXJrID0gZnVuY3Rpb24gKHApIHtcbiAgdmFyIGMgPSB0aGlzLmNhY2hlW3BdXG4gIHZhciBtID0gcFxuICBpZiAoYykge1xuICAgIHZhciBpc0RpciA9IGMgPT09IDIgfHwgQXJyYXkuaXNBcnJheShjKVxuICAgIHZhciBzbGFzaCA9IHAuc2xpY2UoLTEpID09PSAnLydcblxuICAgIGlmIChpc0RpciAmJiAhc2xhc2gpXG4gICAgICBtICs9ICcvJ1xuICAgIGVsc2UgaWYgKCFpc0RpciAmJiBzbGFzaClcbiAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKVxuXG4gICAgaWYgKG0gIT09IHApIHtcbiAgICAgIHRoaXMuc3RhdENhY2hlW21dID0gdGhpcy5zdGF0Q2FjaGVbcF1cbiAgICAgIHRoaXMuY2FjaGVbbV0gPSB0aGlzLmNhY2hlW3BdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1cbn1cblxuR2xvYi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWJvcnRlZCA9IHRydWVcbiAgdGhpcy5lbWl0KFwiYWJvcnRcIilcbn1cblxuR2xvYi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhdXNlZCkgcmV0dXJuXG4gIGlmICh0aGlzLnN5bmMpXG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiQ2FuJ3QgcGF1c2UvcmVzdW1lIHN5bmMgZ2xvYlwiKSlcbiAgdGhpcy5wYXVzZWQgPSB0cnVlXG4gIHRoaXMuZW1pdChcInBhdXNlXCIpXG59XG5cbkdsb2IucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnBhdXNlZCkgcmV0dXJuXG4gIGlmICh0aGlzLnN5bmMpXG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiQ2FuJ3QgcGF1c2UvcmVzdW1lIHN5bmMgZ2xvYlwiKSlcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICB0aGlzLmVtaXQoXCJyZXN1bWVcIilcbiAgdGhpcy5fcHJvY2Vzc0VtaXRRdWV1ZSgpXG4gIC8vcHJvY2Vzcy5uZXh0VGljayh0aGlzLmVtaXQuYmluZCh0aGlzLCBcInJlc3VtZVwiKSlcbn1cblxuR2xvYi5wcm90b3R5cGUuZW1pdE1hdGNoID0gZnVuY3Rpb24gKG0pIHtcbiAgdGhpcy5sb2coJ2VtaXRNYXRjaCcsIG0pXG4gIHRoaXMuX2VtaXRRdWV1ZS5wdXNoKG0pXG4gIHRoaXMuX3Byb2Nlc3NFbWl0UXVldWUoKVxufVxuXG5HbG9iLnByb3RvdHlwZS5fcHJvY2Vzc0VtaXRRdWV1ZSA9IGZ1bmN0aW9uIChtKSB7XG4gIHRoaXMubG9nKFwicEVRIHBhdXNlZD0laiBwcm9jZXNzaW5nPSVqIG09JWpcIiwgdGhpcy5wYXVzZWQsXG4gICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdFbWl0UXVldWUsIG0pXG4gIHZhciBkb25lID0gZmFsc2VcbiAgd2hpbGUgKCF0aGlzLl9wcm9jZXNzaW5nRW1pdFF1ZXVlICYmXG4gICAgICAgICAhdGhpcy5wYXVzZWQpIHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nRW1pdFF1ZXVlID0gdHJ1ZVxuICAgIHZhciBtID0gdGhpcy5fZW1pdFF1ZXVlLnNoaWZ0KClcbiAgICB0aGlzLmxvZyhcIj5wcm9jZXNzRW1pdFF1ZXVlXCIsIG0gPT09IHRoaXMuRU9GID8gXCI6RU9GOlwiIDogbSlcbiAgICBpZiAoIW0pIHtcbiAgICAgIHRoaXMubG9nKFwiPnByb2Nlc3NFbWl0UXVldWUsIGZhbHNleSBtXCIpXG4gICAgICB0aGlzLl9wcm9jZXNzaW5nRW1pdFF1ZXVlID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKG0gPT09IHRoaXMuRU9GIHx8ICEodGhpcy5tYXJrICYmICF0aGlzLnN0YXQpKSB7XG4gICAgICB0aGlzLmxvZyhcInBlcTogdW5tYXJrZWQsIG9yIGVvZlwiKVxuICAgICAgbmV4dC5jYWxsKHRoaXMsIDAsIGZhbHNlKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0Q2FjaGVbbV0pIHtcbiAgICAgIHZhciBzYyA9IHRoaXMuc3RhdENhY2hlW21dXG4gICAgICB2YXIgZXhpc3RzXG4gICAgICBpZiAoc2MpXG4gICAgICAgIGV4aXN0cyA9IHNjLmlzRGlyZWN0b3J5KCkgPyAyIDogMVxuICAgICAgdGhpcy5sb2coXCJwZXE6IHN0YXQgY2FjaGVkXCIpXG4gICAgICBuZXh0LmNhbGwodGhpcywgZXhpc3RzLCBleGlzdHMgPT09IDIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nKFwicGVxOiBfc3RhdCwgdGhlbiBuZXh0XCIpXG4gICAgICB0aGlzLl9zdGF0KG0sIG5leHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dChleGlzdHMsIGlzRGlyKSB7XG4gICAgICB0aGlzLmxvZyhcIm5leHRcIiwgbSwgZXhpc3RzLCBpc0RpcilcbiAgICAgIHZhciBldiA9IG0gPT09IHRoaXMuRU9GID8gXCJlbmRcIiA6IFwibWF0Y2hcIlxuXG4gICAgICAvLyBcImVuZFwiIGNhbiBvbmx5IGhhcHBlbiBvbmNlLlxuICAgICAgYXNzZXJ0KCF0aGlzLl9lbmRFbWl0dGVkKVxuICAgICAgaWYgKGV2ID09PSBcImVuZFwiKVxuICAgICAgICB0aGlzLl9lbmRFbWl0dGVkID0gdHJ1ZVxuXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIC8vIERvZXNuJ3QgbWVhbiBpdCBuZWNlc3NhcmlseSBkb2Vzbid0IGV4aXN0LCBpdCdzIHBvc3NpYmxlXG4gICAgICAgIC8vIHdlIGp1c3QgZGlkbid0IGNoZWNrIGJlY2F1c2Ugd2UgZG9uJ3QgY2FyZSB0aGF0IG11Y2gsIG9yXG4gICAgICAgIC8vIHRoaXMgaXMgRU9GIGFueXdheS5cbiAgICAgICAgaWYgKGlzRGlyICYmICFtLm1hdGNoKC9cXC8kLykpIHtcbiAgICAgICAgICBtID0gbSArIFwiL1wiXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzRGlyICYmIG0ubWF0Y2goL1xcLyQvKSkge1xuICAgICAgICAgIG0gPSBtLnJlcGxhY2UoL1xcLyskLywgXCJcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sb2coXCJlbWl0XCIsIGV2LCBtKVxuICAgICAgdGhpcy5lbWl0KGV2LCBtKVxuICAgICAgdGhpcy5fcHJvY2Vzc2luZ0VtaXRRdWV1ZSA9IGZhbHNlXG4gICAgICBpZiAoZG9uZSAmJiBtICE9PSB0aGlzLkVPRiAmJiAhdGhpcy5wYXVzZWQpXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NFbWl0UXVldWUoKVxuICAgIH1cbiAgfVxuICBkb25lID0gdHJ1ZVxufVxuXG5HbG9iLnByb3RvdHlwZS5fcHJvY2VzcyA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBkZXB0aCwgaW5kZXgsIGNiXykge1xuICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIEdsb2IpXG5cbiAgdmFyIGNiID0gZnVuY3Rpb24gY2IgKGVyLCByZXMpIHtcbiAgICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIEdsb2IpXG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICBpZiAoIXRoaXMuX3Byb2Nlc3NRdWV1ZSkge1xuICAgICAgICB0aGlzLl9wcm9jZXNzUXVldWUgPSBbXVxuICAgICAgICB0aGlzLm9uY2UoXCJyZXN1bWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBxID0gdGhpcy5fcHJvY2Vzc1F1ZXVlXG4gICAgICAgICAgdGhpcy5fcHJvY2Vzc1F1ZXVlID0gbnVsbFxuICAgICAgICAgIHEuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoKSB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5fcHJvY2Vzc1F1ZXVlLnB1c2goY2JfLmJpbmQodGhpcywgZXIsIHJlcykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNiXy5jYWxsKHRoaXMsIGVyLCByZXMpXG4gICAgfVxuICB9LmJpbmQodGhpcylcblxuICBpZiAodGhpcy5hYm9ydGVkKSByZXR1cm4gY2IoKVxuXG4gIGlmIChkZXB0aCA+IHRoaXMubWF4RGVwdGgpIHJldHVybiBjYigpXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBbbl0gcGFydHMgb2YgcGF0dGVybiB0aGF0IGFyZSBhbGwgc3RyaW5ncy5cbiAgdmFyIG4gPSAwXG4gIHdoaWxlICh0eXBlb2YgcGF0dGVybltuXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIG4gKytcbiAgfVxuICAvLyBub3cgbiBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG9uZSB0aGF0IGlzICpub3QqIGEgc3RyaW5nLlxuXG4gIC8vIHNlZSBpZiB0aGVyZSdzIGFueXRoaW5nIGVsc2VcbiAgdmFyIHByZWZpeFxuICBzd2l0Y2ggKG4pIHtcbiAgICAvLyBpZiBub3QsIHRoZW4gdGhpcyBpcyByYXRoZXIgc2ltcGxlXG4gICAgY2FzZSBwYXR0ZXJuLmxlbmd0aDpcbiAgICAgIHByZWZpeCA9IHBhdHRlcm4uam9pbihcIi9cIilcbiAgICAgIHRoaXMuX3N0YXQocHJlZml4LCBmdW5jdGlvbiAoZXhpc3RzLCBpc0Rpcikge1xuICAgICAgICAvLyBlaXRoZXIgaXQncyB0aGVyZSwgb3IgaXQgaXNuJ3QuXG4gICAgICAgIC8vIG5vdGhpbmcgbW9yZSB0byBkbywgZWl0aGVyIHdheS5cbiAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgIGlmIChwcmVmaXggJiYgaXNBYnNvbHV0ZShwcmVmaXgpICYmICF0aGlzLm5vbW91bnQpIHtcbiAgICAgICAgICAgIGlmIChwcmVmaXguY2hhckF0KDApID09PSBcIi9cIikge1xuICAgICAgICAgICAgICBwcmVmaXggPSBwYXRoLmpvaW4odGhpcy5yb290LCBwcmVmaXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcmVmaXggPSBwYXRoLnJlc29sdmUodGhpcy5yb290LCBwcmVmaXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIilcbiAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKVxuXG4gICAgICAgICAgdGhpcy5tYXRjaGVzW2luZGV4XSA9IHRoaXMubWF0Y2hlc1tpbmRleF0gfHwge31cbiAgICAgICAgICB0aGlzLm1hdGNoZXNbaW5kZXhdW3ByZWZpeF0gPSB0cnVlXG4gICAgICAgICAgdGhpcy5lbWl0TWF0Y2gocHJlZml4KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYigpXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG5cbiAgICBjYXNlIDA6XG4gICAgICAvLyBwYXR0ZXJuICpzdGFydHMqIHdpdGggc29tZSBub24tdHJpdmlhbCBpdGVtLlxuICAgICAgLy8gZ29pbmcgdG8gcmVhZGRpcihjd2QpLCBidXQgbm90IGluY2x1ZGUgdGhlIHByZWZpeCBpbiBtYXRjaGVzLlxuICAgICAgcHJlZml4ID0gbnVsbFxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBwYXR0ZXJuIGhhcyBzb21lIHN0cmluZyBiaXRzIGluIHRoZSBmcm9udC5cbiAgICAgIC8vIHdoYXRldmVyIGl0IHN0YXJ0cyB3aXRoLCB3aGV0aGVyIHRoYXQncyBcImFic29sdXRlXCIgbGlrZSAvZm9vL2JhcixcbiAgICAgIC8vIG9yIFwicmVsYXRpdmVcIiBsaWtlIFwiLi4vYmF6XCJcbiAgICAgIHByZWZpeCA9IHBhdHRlcm4uc2xpY2UoMCwgbilcbiAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiL1wiKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIC8vIGdldCB0aGUgbGlzdCBvZiBlbnRyaWVzLlxuICB2YXIgcmVhZFxuICBpZiAocHJlZml4ID09PSBudWxsKSByZWFkID0gXCIuXCJcbiAgZWxzZSBpZiAoaXNBYnNvbHV0ZShwcmVmaXgpIHx8IGlzQWJzb2x1dGUocGF0dGVybi5qb2luKFwiL1wiKSkpIHtcbiAgICBpZiAoIXByZWZpeCB8fCAhaXNBYnNvbHV0ZShwcmVmaXgpKSB7XG4gICAgICBwcmVmaXggPSBwYXRoLmpvaW4oXCIvXCIsIHByZWZpeClcbiAgICB9XG4gICAgcmVhZCA9IHByZWZpeCA9IHBhdGgucmVzb2x2ZShwcmVmaXgpXG5cbiAgICAvLyBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKVxuICAgIC8vICAgcmVhZCA9IHByZWZpeCA9IHByZWZpeC5yZXBsYWNlKC9eW2EtekEtWl06fFxcXFwvZywgXCIvXCIpXG5cbiAgICB0aGlzLmxvZygnYWJzb2x1dGU6ICcsIHByZWZpeCwgdGhpcy5yb290LCBwYXR0ZXJuLCByZWFkKVxuICB9IGVsc2Uge1xuICAgIHJlYWQgPSBwcmVmaXhcbiAgfVxuXG4gIHRoaXMubG9nKCdyZWFkZGlyKCVqKScsIHJlYWQsIHRoaXMuY3dkLCB0aGlzLnJvb3QpXG5cbiAgcmV0dXJuIHRoaXMuX3JlYWRkaXIocmVhZCwgZnVuY3Rpb24gKGVyLCBlbnRyaWVzKSB7XG4gICAgaWYgKGVyKSB7XG4gICAgICAvLyBub3QgYSBkaXJlY3RvcnkhXG4gICAgICAvLyB0aGlzIG1lYW5zIHRoYXQsIHdoYXRldmVyIGVsc2UgY29tZXMgYWZ0ZXIgdGhpcywgaXQgY2FuIG5ldmVyIG1hdGNoXG4gICAgICByZXR1cm4gY2IoKVxuICAgIH1cblxuICAgIC8vIGdsb2JzdGFyIGlzIHNwZWNpYWxcbiAgICBpZiAocGF0dGVybltuXSA9PT0gbWluaW1hdGNoLkdMT0JTVEFSKSB7XG4gICAgICAvLyB0ZXN0IHdpdGhvdXQgdGhlIGdsb2JzdGFyLCBhbmQgd2l0aCBldmVyeSBjaGlsZCBib3RoIGJlbG93XG4gICAgICAvLyBhbmQgcmVwbGFjaW5nIHRoZSBnbG9ic3Rhci5cbiAgICAgIHZhciBzID0gWyBwYXR0ZXJuLnNsaWNlKDAsIG4pLmNvbmNhdChwYXR0ZXJuLnNsaWNlKG4gKyAxKSkgXVxuICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmNoYXJBdCgwKSA9PT0gXCIuXCIgJiYgIXRoaXMuZG90KSByZXR1cm5cbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgZ2xvYnN0YXJcbiAgICAgICAgcy5wdXNoKHBhdHRlcm4uc2xpY2UoMCwgbikuY29uY2F0KGUpLmNvbmNhdChwYXR0ZXJuLnNsaWNlKG4gKyAxKSkpXG4gICAgICAgIC8vIGJlbG93IHRoZSBnbG9ic3RhclxuICAgICAgICBzLnB1c2gocGF0dGVybi5zbGljZSgwLCBuKS5jb25jYXQoZSkuY29uY2F0KHBhdHRlcm4uc2xpY2UobikpKVxuICAgICAgfSwgdGhpcylcblxuICAgICAgcyA9IHMuZmlsdGVyKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHZhciBrZXkgPSBnc0tleShwYXR0ZXJuKVxuICAgICAgICB2YXIgc2VlbiA9ICF0aGlzLl9nbG9ic3RhcnNba2V5XVxuICAgICAgICB0aGlzLl9nbG9ic3RhcnNba2V5XSA9IHRydWVcbiAgICAgICAgcmV0dXJuIHNlZW5cbiAgICAgIH0sIHRoaXMpXG5cbiAgICAgIGlmICghcy5sZW5ndGgpXG4gICAgICAgIHJldHVybiBjYigpXG5cbiAgICAgIC8vIG5vdyBhc3luY0ZvckVhY2ggb3ZlciB0aGlzXG4gICAgICB2YXIgbCA9IHMubGVuZ3RoXG4gICAgICAsIGVyclN0YXRlID0gbnVsbFxuICAgICAgcy5mb3JFYWNoKGZ1bmN0aW9uIChnc1BhdHRlcm4pIHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzcyhnc1BhdHRlcm4sIGRlcHRoICsgMSwgaW5kZXgsIGZ1bmN0aW9uIChlcikge1xuICAgICAgICAgIGlmIChlcnJTdGF0ZSkgcmV0dXJuXG4gICAgICAgICAgaWYgKGVyKSByZXR1cm4gY2IoZXJyU3RhdGUgPSBlcilcbiAgICAgICAgICBpZiAoLS1sIDw9IDApIHJldHVybiBjYigpXG4gICAgICAgIH0pXG4gICAgICB9LCB0aGlzKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBub3QgYSBnbG9ic3RhclxuICAgIC8vIEl0IHdpbGwgb25seSBtYXRjaCBkb3QgZW50cmllcyBpZiBpdCBzdGFydHMgd2l0aCBhIGRvdCwgb3IgaWZcbiAgICAvLyBkb3QgaXMgc2V0LiAgU3R1ZmYgbGlrZSBAKC5mb298LmJhcikgaXNuJ3QgYWxsb3dlZC5cbiAgICB2YXIgcG4gPSBwYXR0ZXJuW25dXG4gICAgdmFyIHJhd0dsb2IgPSBwYXR0ZXJuW25dLl9nbG9iXG4gICAgLCBkb3RPayA9IHRoaXMuZG90IHx8IHJhd0dsb2IuY2hhckF0KDApID09PSBcIi5cIlxuXG4gICAgZW50cmllcyA9IGVudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gKGUuY2hhckF0KDApICE9PSBcIi5cIiB8fCBkb3RPaykgJiZcbiAgICAgICAgICAgICBlLm1hdGNoKHBhdHRlcm5bbl0pXG4gICAgfSlcblxuICAgIC8vIElmIG4gPT09IHBhdHRlcm4ubGVuZ3RoIC0gMSwgdGhlbiB0aGVyZSdzIG5vIG5lZWQgZm9yIHRoZSBleHRyYSBzdGF0XG4gICAgLy8gKnVubGVzcyogdGhlIHVzZXIgaGFzIHNwZWNpZmllZCBcIm1hcmtcIiBvciBcInN0YXRcIiBleHBsaWNpdGx5LlxuICAgIC8vIFdlIGtub3cgdGhhdCB0aGV5IGV4aXN0LCBzaW5jZSB0aGUgcmVhZGRpciByZXR1cm5lZCB0aGVtLlxuICAgIGlmIChuID09PSBwYXR0ZXJuLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgIXRoaXMubWFyayAmJlxuICAgICAgICAhdGhpcy5zdGF0KSB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIGlmIChwcmVmaXggIT09IFwiL1wiKSBlID0gcHJlZml4ICsgXCIvXCIgKyBlXG4gICAgICAgICAgZWxzZSBlID0gcHJlZml4ICsgZVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmNoYXJBdCgwKSA9PT0gXCIvXCIgJiYgIXRoaXMubm9tb3VudCkge1xuICAgICAgICAgIGUgPSBwYXRoLmpvaW4odGhpcy5yb290LCBlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIilcbiAgICAgICAgICBlID0gZS5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKVxuXG4gICAgICAgIHRoaXMubWF0Y2hlc1tpbmRleF0gPSB0aGlzLm1hdGNoZXNbaW5kZXhdIHx8IHt9XG4gICAgICAgIHRoaXMubWF0Y2hlc1tpbmRleF1bZV0gPSB0cnVlXG4gICAgICAgIHRoaXMuZW1pdE1hdGNoKGUpXG4gICAgICB9LCB0aGlzKVxuICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcylcbiAgICB9XG5cblxuICAgIC8vIG5vdyB0ZXN0IGFsbCB0aGUgcmVtYWluaW5nIGVudHJpZXMgYXMgc3RhbmQtaW5zIGZvciB0aGF0IHBhcnRcbiAgICAvLyBvZiB0aGUgcGF0dGVybi5cbiAgICB2YXIgbCA9IGVudHJpZXMubGVuZ3RoXG4gICAgLCBlcnJTdGF0ZSA9IG51bGxcbiAgICBpZiAobCA9PT0gMCkgcmV0dXJuIGNiKCkgLy8gbm8gbWF0Y2hlcyBwb3NzaWJsZVxuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHAgPSBwYXR0ZXJuLnNsaWNlKDAsIG4pLmNvbmNhdChlKS5jb25jYXQocGF0dGVybi5zbGljZShuICsgMSkpXG4gICAgICB0aGlzLl9wcm9jZXNzKHAsIGRlcHRoICsgMSwgaW5kZXgsIGZ1bmN0aW9uIChlcikge1xuICAgICAgICBpZiAoZXJyU3RhdGUpIHJldHVyblxuICAgICAgICBpZiAoZXIpIHJldHVybiBjYihlcnJTdGF0ZSA9IGVyKVxuICAgICAgICBpZiAoLS1sID09PSAwKSByZXR1cm4gY2IuY2FsbCh0aGlzKVxuICAgICAgfSlcbiAgICB9LCB0aGlzKVxuICB9KVxuXG59XG5cbmZ1bmN0aW9uIGdzS2V5IChwYXR0ZXJuKSB7XG4gIHJldHVybiAnKionICsgcGF0dGVybi5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgPT09IG1pbmltYXRjaC5HTE9CU1RBUikgPyAnKionIDogKCcnK3ApXG4gIH0pLmpvaW4oJy8nKVxufVxuXG5HbG9iLnByb3RvdHlwZS5fc3RhdCA9IGZ1bmN0aW9uIChmLCBjYikge1xuICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIEdsb2IpXG4gIHZhciBhYnMgPSBmXG4gIGlmIChmLmNoYXJBdCgwKSA9PT0gXCIvXCIpIHtcbiAgICBhYnMgPSBwYXRoLmpvaW4odGhpcy5yb290LCBmKVxuICB9IGVsc2UgaWYgKHRoaXMuY2hhbmdlZEN3ZCkge1xuICAgIGFicyA9IHBhdGgucmVzb2x2ZSh0aGlzLmN3ZCwgZilcbiAgfVxuXG4gIGlmIChmLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgdmFyIGVyID0gbmV3IEVycm9yKFwiUGF0aCBuYW1lIHRvbyBsb25nXCIpXG4gICAgZXIuY29kZSA9IFwiRU5BTUVUT09MT05HXCJcbiAgICBlci5wYXRoID0gZlxuICAgIHJldHVybiB0aGlzLl9hZnRlclN0YXQoZiwgYWJzLCBjYiwgZXIpXG4gIH1cblxuICB0aGlzLmxvZygnc3RhdCcsIFt0aGlzLmN3ZCwgZiwgJz0nLCBhYnNdKVxuXG4gIGlmICghdGhpcy5zdGF0ICYmIHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoZikpIHtcbiAgICB2YXIgZXhpc3RzID0gdGhpcy5jYWNoZVtmXVxuICAgICwgaXNEaXIgPSBleGlzdHMgJiYgKEFycmF5LmlzQXJyYXkoZXhpc3RzKSB8fCBleGlzdHMgPT09IDIpXG4gICAgaWYgKHRoaXMuc3luYykgcmV0dXJuIGNiLmNhbGwodGhpcywgISFleGlzdHMsIGlzRGlyKVxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNiLmJpbmQodGhpcywgISFleGlzdHMsIGlzRGlyKSlcbiAgfVxuXG4gIHZhciBzdGF0ID0gdGhpcy5zdGF0Q2FjaGVbYWJzXVxuICBpZiAodGhpcy5zeW5jIHx8IHN0YXQpIHtcbiAgICB2YXIgZXJcbiAgICB0cnkge1xuICAgICAgc3RhdCA9IGZzLnN0YXRTeW5jKGFicylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlciA9IGVcbiAgICB9XG4gICAgdGhpcy5fYWZ0ZXJTdGF0KGYsIGFicywgY2IsIGVyLCBzdGF0KVxuICB9IGVsc2Uge1xuICAgIGZzLnN0YXQoYWJzLCB0aGlzLl9hZnRlclN0YXQuYmluZCh0aGlzLCBmLCBhYnMsIGNiKSlcbiAgfVxufVxuXG5HbG9iLnByb3RvdHlwZS5fYWZ0ZXJTdGF0ID0gZnVuY3Rpb24gKGYsIGFicywgY2IsIGVyLCBzdGF0KSB7XG4gIHZhciBleGlzdHNcbiAgYXNzZXJ0KHRoaXMgaW5zdGFuY2VvZiBHbG9iKVxuXG4gIGlmIChhYnMuc2xpY2UoLTEpID09PSBcIi9cIiAmJiBzdGF0ICYmICFzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICB0aGlzLmxvZyhcInNob3VsZCBiZSBFTk9URElSLCBmYWtlIGl0XCIpXG5cbiAgICBlciA9IG5ldyBFcnJvcihcIkVOT1RESVIsIG5vdCBhIGRpcmVjdG9yeSAnXCIgKyBhYnMgKyBcIidcIilcbiAgICBlci5wYXRoID0gYWJzXG4gICAgZXIuY29kZSA9IFwiRU5PVERJUlwiXG4gICAgc3RhdCA9IG51bGxcbiAgfVxuXG4gIHZhciBlbWl0ID0gIXRoaXMuc3RhdENhY2hlW2Fic11cbiAgdGhpcy5zdGF0Q2FjaGVbYWJzXSA9IHN0YXRcblxuICBpZiAoZXIgfHwgIXN0YXQpIHtcbiAgICBleGlzdHMgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGV4aXN0cyA9IHN0YXQuaXNEaXJlY3RvcnkoKSA/IDIgOiAxXG4gICAgaWYgKGVtaXQpXG4gICAgICB0aGlzLmVtaXQoJ3N0YXQnLCBmLCBzdGF0KVxuICB9XG4gIHRoaXMuY2FjaGVbZl0gPSB0aGlzLmNhY2hlW2ZdIHx8IGV4aXN0c1xuICBjYi5jYWxsKHRoaXMsICEhZXhpc3RzLCBleGlzdHMgPT09IDIpXG59XG5cbkdsb2IucHJvdG90eXBlLl9yZWFkZGlyID0gZnVuY3Rpb24gKGYsIGNiKSB7XG4gIGFzc2VydCh0aGlzIGluc3RhbmNlb2YgR2xvYilcbiAgdmFyIGFicyA9IGZcbiAgaWYgKGYuY2hhckF0KDApID09PSBcIi9cIikge1xuICAgIGFicyA9IHBhdGguam9pbih0aGlzLnJvb3QsIGYpXG4gIH0gZWxzZSBpZiAoaXNBYnNvbHV0ZShmKSkge1xuICAgIGFicyA9IGZcbiAgfSBlbHNlIGlmICh0aGlzLmNoYW5nZWRDd2QpIHtcbiAgICBhYnMgPSBwYXRoLnJlc29sdmUodGhpcy5jd2QsIGYpXG4gIH1cblxuICBpZiAoZi5sZW5ndGggPiB0aGlzLm1heExlbmd0aCkge1xuICAgIHZhciBlciA9IG5ldyBFcnJvcihcIlBhdGggbmFtZSB0b28gbG9uZ1wiKVxuICAgIGVyLmNvZGUgPSBcIkVOQU1FVE9PTE9OR1wiXG4gICAgZXIucGF0aCA9IGZcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJSZWFkZGlyKGYsIGFicywgY2IsIGVyKVxuICB9XG5cbiAgdGhpcy5sb2coJ3JlYWRkaXInLCBbdGhpcy5jd2QsIGYsIGFic10pXG4gIGlmICh0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGYpKSB7XG4gICAgdmFyIGMgPSB0aGlzLmNhY2hlW2ZdXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgIGlmICh0aGlzLnN5bmMpIHJldHVybiBjYi5jYWxsKHRoaXMsIG51bGwsIGMpXG4gICAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYi5iaW5kKHRoaXMsIG51bGwsIGMpKVxuICAgIH1cblxuICAgIGlmICghYyB8fCBjID09PSAxKSB7XG4gICAgICAvLyBlaXRoZXIgRU5PRU5UIG9yIEVOT1RESVJcbiAgICAgIHZhciBjb2RlID0gYyA/IFwiRU5PVERJUlwiIDogXCJFTk9FTlRcIlxuICAgICAgLCBlciA9IG5ldyBFcnJvcigoYyA/IFwiTm90IGEgZGlyZWN0b3J5XCIgOiBcIk5vdCBmb3VuZFwiKSArIFwiOiBcIiArIGYpXG4gICAgICBlci5wYXRoID0gZlxuICAgICAgZXIuY29kZSA9IGNvZGVcbiAgICAgIHRoaXMubG9nKGYsIGVyKVxuICAgICAgaWYgKHRoaXMuc3luYykgcmV0dXJuIGNiLmNhbGwodGhpcywgZXIpXG4gICAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYi5iaW5kKHRoaXMsIGVyKSlcbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBjID09PSAyLCBtZWFuaW5nIGl0J3MgYSBkaXIsIGJ1dCB3ZSBoYXZlbid0XG4gICAgLy8gaGFkIHRvIHJlYWQgaXQgeWV0LCBvciBjID09PSB0cnVlLCBtZWFuaW5nIGl0J3MgKnNvbWV0aGluZypcbiAgICAvLyBidXQgd2UgZG9uJ3QgaGF2ZSBhbnkgaWRlYSB3aGF0LiAgTmVlZCB0byByZWFkIGl0LCBlaXRoZXIgd2F5LlxuICB9XG5cbiAgaWYgKHRoaXMuc3luYykge1xuICAgIHZhciBlciwgZW50cmllc1xuICAgIHRyeSB7XG4gICAgICBlbnRyaWVzID0gZnMucmVhZGRpclN5bmMoYWJzKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVyID0gZVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJSZWFkZGlyKGYsIGFicywgY2IsIGVyLCBlbnRyaWVzKVxuICB9XG5cbiAgZnMucmVhZGRpcihhYnMsIHRoaXMuX2FmdGVyUmVhZGRpci5iaW5kKHRoaXMsIGYsIGFicywgY2IpKVxufVxuXG5HbG9iLnByb3RvdHlwZS5fYWZ0ZXJSZWFkZGlyID0gZnVuY3Rpb24gKGYsIGFicywgY2IsIGVyLCBlbnRyaWVzKSB7XG4gIGFzc2VydCh0aGlzIGluc3RhbmNlb2YgR2xvYilcbiAgaWYgKGVudHJpZXMgJiYgIWVyKSB7XG4gICAgdGhpcy5jYWNoZVtmXSA9IGVudHJpZXNcbiAgICAvLyBpZiB3ZSBoYXZlbid0IGFza2VkIHRvIHN0YXQgZXZlcnl0aGluZyBmb3Igc3VyZXNpZXMsIHRoZW4ganVzdFxuICAgIC8vIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlcmUgZXhpc3RzLCBzbyB3ZSBjYW4gYXZvaWRcbiAgICAvLyBoYXZpbmcgdG8gc3RhdCBpdCBhIHNlY29uZCB0aW1lLiAgVGhpcyBhbHNvIGdldHMgdXMgb25lIHN0ZXBcbiAgICAvLyBmdXJ0aGVyIGludG8gRUxPT1AgdGVycml0b3J5LlxuICAgIGlmICghdGhpcy5tYXJrICYmICF0aGlzLnN0YXQpIHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZiA9PT0gXCIvXCIpIGUgPSBmICsgZVxuICAgICAgICBlbHNlIGUgPSBmICsgXCIvXCIgKyBlXG4gICAgICAgIHRoaXMuY2FjaGVbZV0gPSB0cnVlXG4gICAgICB9LCB0aGlzKVxuICAgIH1cblxuICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGVyLCBlbnRyaWVzKVxuICB9XG5cbiAgLy8gbm93IGhhbmRsZSBlcnJvcnMsIGFuZCBjYWNoZSB0aGUgaW5mb3JtYXRpb25cbiAgaWYgKGVyKSBzd2l0Y2ggKGVyLmNvZGUpIHtcbiAgICBjYXNlIFwiRU5PVERJUlwiOiAvLyB0b3RhbGx5IG5vcm1hbC4gbWVhbnMgaXQgKmRvZXMqIGV4aXN0LlxuICAgICAgdGhpcy5jYWNoZVtmXSA9IDFcbiAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGVyKVxuICAgIGNhc2UgXCJFTk9FTlRcIjogLy8gbm90IHRlcnJpYmx5IHVudXN1YWxcbiAgICBjYXNlIFwiRUxPT1BcIjpcbiAgICBjYXNlIFwiRU5BTUVUT09MT05HXCI6XG4gICAgY2FzZSBcIlVOS05PV05cIjpcbiAgICAgIHRoaXMuY2FjaGVbZl0gPSBmYWxzZVxuICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgZXIpXG4gICAgZGVmYXVsdDogLy8gc29tZSB1bnVzdWFsIGVycm9yLiAgVHJlYXQgYXMgZmFpbHVyZS5cbiAgICAgIHRoaXMuY2FjaGVbZl0gPSBmYWxzZVxuICAgICAgaWYgKHRoaXMuc3RyaWN0KSB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcilcbiAgICAgIGlmICghdGhpcy5zaWxlbnQpIGNvbnNvbGUuZXJyb3IoXCJnbG9iIGVycm9yXCIsIGVyKVxuICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgZXIpXG4gIH1cbn1cblxudmFyIGlzQWJzb2x1dGUgPSBwcm9jZXNzLnBsYXRmb3JtID09PSBcIndpbjMyXCIgPyBhYnNXaW4gOiBhYnNVbml4XG5cbmZ1bmN0aW9uIGFic1dpbiAocCkge1xuICBpZiAoYWJzVW5peChwKSkgcmV0dXJuIHRydWVcbiAgLy8gcHVsbCBvZmYgdGhlIGRldmljZS9VTkMgYml0IGZyb20gYSB3aW5kb3dzIHBhdGguXG4gIC8vIGZyb20gbm9kZSdzIGxpYi9wYXRoLmpzXG4gIHZhciBzcGxpdERldmljZVJlID1cbiAgICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC9cbiAgICAsIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwKVxuICAgICwgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnXG4gICAgLCBpc1VuYyA9IGRldmljZSAmJiBkZXZpY2UuY2hhckF0KDEpICE9PSAnOidcbiAgICAsIGlzQWJzb2x1dGUgPSAhIXJlc3VsdFsyXSB8fCBpc1VuYyAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxuXG4gIHJldHVybiBpc0Fic29sdXRlXG59XG5cbmZ1bmN0aW9uIGFic1VuaXggKHApIHtcbiAgcmV0dXJuIHAuY2hhckF0KDApID09PSBcIi9cIiB8fCBwID09PSBcIlwiXG59XG4iLCI7KGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUsIHBsYXRmb3JtKSB7XG5cbmlmIChtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbWluaW1hdGNoXG5lbHNlIGV4cG9ydHMubWluaW1hdGNoID0gbWluaW1hdGNoXG5cbmlmICghcmVxdWlyZSkge1xuICByZXF1aXJlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBcInNpZ211bmRcIjogcmV0dXJuIGZ1bmN0aW9uIHNpZ211bmQgKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgICAgfVxuICAgICAgY2FzZSBcInBhdGhcIjogcmV0dXJuIHsgYmFzZW5hbWU6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIGYgPSBmLnNwbGl0KC9bXFwvXFxcXF0vKVxuICAgICAgICB2YXIgZSA9IGYucG9wKClcbiAgICAgICAgaWYgKCFlKSBlID0gZi5wb3AoKVxuICAgICAgICByZXR1cm4gZVxuICAgICAgfX1cbiAgICAgIGNhc2UgXCJscnUtY2FjaGVcIjogcmV0dXJuIGZ1bmN0aW9uIExSVUNhY2hlICgpIHtcbiAgICAgICAgLy8gbm90IHF1aXRlIGFuIExSVSwgYnV0IHN0aWxsIHNwYWNlLWxpbWl0ZWQuXG4gICAgICAgIHZhciBjYWNoZSA9IHt9XG4gICAgICAgIHZhciBjbnQgPSAwXG4gICAgICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgICBjbnQgKytcbiAgICAgICAgICBpZiAoY250ID49IDEwMCkgY2FjaGUgPSB7fVxuICAgICAgICAgIGNhY2hlW2tdID0gdlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKGspIHsgcmV0dXJuIGNhY2hlW2tdIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubWluaW1hdGNoLk1pbmltYXRjaCA9IE1pbmltYXRjaFxuXG52YXIgTFJVID0gcmVxdWlyZShcImxydS1jYWNoZVwiKVxuICAsIGNhY2hlID0gbWluaW1hdGNoLmNhY2hlID0gbmV3IExSVSh7bWF4OiAxMDB9KVxuICAsIEdMT0JTVEFSID0gbWluaW1hdGNoLkdMT0JTVEFSID0gTWluaW1hdGNoLkdMT0JTVEFSID0ge31cbiAgLCBzaWdtdW5kID0gcmVxdWlyZShcInNpZ211bmRcIilcblxudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKVxuICAvLyBhbnkgc2luZ2xlIHRoaW5nIG90aGVyIHRoYW4gL1xuICAvLyBkb24ndCBuZWVkIHRvIGVzY2FwZSAvIHdoZW4gdXNpbmcgbmV3IFJlZ0V4cCgpXG4gICwgcW1hcmsgPSBcIlteL11cIlxuXG4gIC8vICogPT4gYW55IG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICwgc3RhciA9IHFtYXJrICsgXCIqP1wiXG5cbiAgLy8gKiogd2hlbiBkb3RzIGFyZSBhbGxvd2VkLiAgQW55dGhpbmcgZ29lcywgZXhjZXB0IC4uIGFuZCAuXG4gIC8vIG5vdCAoXiBvciAvIGZvbGxvd2VkIGJ5IG9uZSBvciB0d28gZG90cyBmb2xsb3dlZCBieSAkIG9yIC8pLFxuICAvLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbiAgLCB0d29TdGFyRG90ID0gXCIoPzooPyEoPzpcXFxcXFwvfF4pKD86XFxcXC57MSwyfSkoJHxcXFxcXFwvKSkuKSo/XCJcblxuICAvLyBub3QgYSBeIG9yIC8gZm9sbG93ZWQgYnkgYSBkb3QsXG4gIC8vIGZvbGxvd2VkIGJ5IGFueXRoaW5nLCBhbnkgbnVtYmVyIG9mIHRpbWVzLlxuICAsIHR3b1N0YXJOb0RvdCA9IFwiKD86KD8hKD86XFxcXFxcL3xeKVxcXFwuKS4pKj9cIlxuXG4gIC8vIGNoYXJhY3RlcnMgdGhhdCBuZWVkIHRvIGJlIGVzY2FwZWQgaW4gUmVnRXhwLlxuICAsIHJlU3BlY2lhbHMgPSBjaGFyU2V0KFwiKCkuKnt9Kz9bXV4kXFxcXCFcIilcblxuLy8gXCJhYmNcIiAtPiB7IGE6dHJ1ZSwgYjp0cnVlLCBjOnRydWUgfVxuZnVuY3Rpb24gY2hhclNldCAocykge1xuICByZXR1cm4gcy5zcGxpdChcIlwiKS5yZWR1Y2UoZnVuY3Rpb24gKHNldCwgYykge1xuICAgIHNldFtjXSA9IHRydWVcbiAgICByZXR1cm4gc2V0XG4gIH0sIHt9KVxufVxuXG4vLyBub3JtYWxpemVzIHNsYXNoZXMuXG52YXIgc2xhc2hTcGxpdCA9IC9cXC8rL1xuXG5taW5pbWF0Y2guZmlsdGVyID0gZmlsdGVyXG5mdW5jdGlvbiBmaWx0ZXIgKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgcmV0dXJuIGZ1bmN0aW9uIChwLCBpLCBsaXN0KSB7XG4gICAgcmV0dXJuIG1pbmltYXRjaChwLCBwYXR0ZXJuLCBvcHRpb25zKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dCAoYSwgYikge1xuICBhID0gYSB8fCB7fVxuICBiID0gYiB8fCB7fVxuICB2YXIgdCA9IHt9XG4gIE9iamVjdC5rZXlzKGIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB0W2tdID0gYltrXVxuICB9KVxuICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgdFtrXSA9IGFba11cbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxubWluaW1hdGNoLmRlZmF1bHRzID0gZnVuY3Rpb24gKGRlZikge1xuICBpZiAoIWRlZiB8fCAhT2JqZWN0LmtleXMoZGVmKS5sZW5ndGgpIHJldHVybiBtaW5pbWF0Y2hcblxuICB2YXIgb3JpZyA9IG1pbmltYXRjaFxuXG4gIHZhciBtID0gZnVuY3Rpb24gbWluaW1hdGNoIChwLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9yaWcubWluaW1hdGNoKHAsIHBhdHRlcm4sIGV4dChkZWYsIG9wdGlvbnMpKVxuICB9XG5cbiAgbS5NaW5pbWF0Y2ggPSBmdW5jdGlvbiBNaW5pbWF0Y2ggKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IG9yaWcuTWluaW1hdGNoKHBhdHRlcm4sIGV4dChkZWYsIG9wdGlvbnMpKVxuICB9XG5cbiAgcmV0dXJuIG1cbn1cblxuTWluaW1hdGNoLmRlZmF1bHRzID0gZnVuY3Rpb24gKGRlZikge1xuICBpZiAoIWRlZiB8fCAhT2JqZWN0LmtleXMoZGVmKS5sZW5ndGgpIHJldHVybiBNaW5pbWF0Y2hcbiAgcmV0dXJuIG1pbmltYXRjaC5kZWZhdWx0cyhkZWYpLk1pbmltYXRjaFxufVxuXG5cbmZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZ2xvYiBwYXR0ZXJuIHN0cmluZyByZXF1aXJlZFwiKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cblxuICAvLyBzaG9ydGN1dDogY29tbWVudHMgbWF0Y2ggbm90aGluZy5cbiAgaWYgKCFvcHRpb25zLm5vY29tbWVudCAmJiBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFwiXCIgb25seSBtYXRjaGVzIFwiXCJcbiAgaWYgKHBhdHRlcm4udHJpbSgpID09PSBcIlwiKSByZXR1cm4gcCA9PT0gXCJcIlxuXG4gIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpLm1hdGNoKHApXG59XG5cbmZ1bmN0aW9uIE1pbmltYXRjaCAocGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWluaW1hdGNoKSkge1xuICAgIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMsIGNhY2hlKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdsb2IgcGF0dGVybiBzdHJpbmcgcmVxdWlyZWRcIilcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG4gIHBhdHRlcm4gPSBwYXR0ZXJuLnRyaW0oKVxuXG4gIC8vIHdpbmRvd3M6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICAvLyBPbiBvdGhlciBwbGF0Zm9ybXMsIFxcIGlzIGEgdmFsaWQgKGFsYmVpdCBiYWQpIGZpbGVuYW1lIGNoYXIuXG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoXCJcXFxcXCIpLmpvaW4oXCIvXCIpXG4gIH1cblxuICAvLyBscnUgc3RvcmFnZS5cbiAgLy8gdGhlc2UgdGhpbmdzIGFyZW4ndCBwYXJ0aWN1bGFybHkgYmlnLCBidXQgd2Fsa2luZyBkb3duIHRoZSBzdHJpbmdcbiAgLy8gYW5kIHR1cm5pbmcgaXQgaW50byBhIHJlZ2V4cCBjYW4gZ2V0IHByZXR0eSBjb3N0bHkuXG4gIHZhciBjYWNoZUtleSA9IHBhdHRlcm4gKyBcIlxcblwiICsgc2lnbXVuZChvcHRpb25zKVxuICB2YXIgY2FjaGVkID0gbWluaW1hdGNoLmNhY2hlLmdldChjYWNoZUtleSlcbiAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZFxuICBtaW5pbWF0Y2guY2FjaGUuc2V0KGNhY2hlS2V5LCB0aGlzKVxuXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5zZXQgPSBbXVxuICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuXG4gIHRoaXMucmVnZXhwID0gbnVsbFxuICB0aGlzLm5lZ2F0ZSA9IGZhbHNlXG4gIHRoaXMuY29tbWVudCA9IGZhbHNlXG4gIHRoaXMuZW1wdHkgPSBmYWxzZVxuXG4gIC8vIG1ha2UgdGhlIHNldCBvZiByZWdleHBzIGV0Yy5cbiAgdGhpcy5tYWtlKClcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uKCkge31cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlID0gbWFrZVxuZnVuY3Rpb24gbWFrZSAoKSB7XG4gIC8vIGRvbid0IGRvIGl0IG1vcmUgdGhhbiBvbmNlLlxuICBpZiAodGhpcy5fbWFkZSkgcmV0dXJuXG5cbiAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBlbXB0eSBwYXR0ZXJucyBhbmQgY29tbWVudHMgbWF0Y2ggbm90aGluZy5cbiAgaWYgKCFvcHRpb25zLm5vY29tbWVudCAmJiBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICB0aGlzLmNvbW1lbnQgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgdGhpcy5lbXB0eSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHN0ZXAgMTogZmlndXJlIG91dCBuZWdhdGlvbiwgZXRjLlxuICB0aGlzLnBhcnNlTmVnYXRlKClcblxuICAvLyBzdGVwIDI6IGV4cGFuZCBicmFjZXNcbiAgdmFyIHNldCA9IHRoaXMuZ2xvYlNldCA9IHRoaXMuYnJhY2VFeHBhbmQoKVxuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB0aGlzLmRlYnVnID0gY29uc29sZS5lcnJvclxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gc3RlcCAzOiBub3cgd2UgaGF2ZSBhIHNldCwgc28gdHVybiBlYWNoIG9uZSBpbnRvIGEgc2VyaWVzIG9mIHBhdGgtcG9ydGlvblxuICAvLyBtYXRjaGluZyBwYXR0ZXJucy5cbiAgLy8gVGhlc2Ugd2lsbCBiZSByZWdleHBzLCBleGNlcHQgaW4gdGhlIGNhc2Ugb2YgXCIqKlwiLCB3aGljaCBpc1xuICAvLyBzZXQgdG8gdGhlIEdMT0JTVEFSIG9iamVjdCBmb3IgZ2xvYnN0YXIgYmVoYXZpb3IsXG4gIC8vIGFuZCB3aWxsIG5vdCBjb250YWluIGFueSAvIGNoYXJhY3RlcnNcbiAgc2V0ID0gdGhpcy5nbG9iUGFydHMgPSBzZXQubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoc2xhc2hTcGxpdClcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGdsb2IgLS0+IHJlZ2V4cHNcbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAocywgc2ksIHNldCkge1xuICAgIHJldHVybiBzLm1hcCh0aGlzLnBhcnNlLCB0aGlzKVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gZmlsdGVyIG91dCBldmVyeXRoaW5nIHRoYXQgZGlkbid0IGNvbXBpbGUgcHJvcGVybHkuXG4gIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gLTEgPT09IHMuaW5kZXhPZihmYWxzZSlcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIHRoaXMuc2V0ID0gc2V0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2VOZWdhdGUgPSBwYXJzZU5lZ2F0ZVxuZnVuY3Rpb24gcGFyc2VOZWdhdGUgKCkge1xuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICAgICwgbmVnYXRlID0gZmFsc2VcbiAgICAsIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgICAsIG5lZ2F0ZU9mZnNldCA9IDBcblxuICBpZiAob3B0aW9ucy5ub25lZ2F0ZSkgcmV0dXJuXG5cbiAgZm9yICggdmFyIGkgPSAwLCBsID0gcGF0dGVybi5sZW5ndGhcbiAgICAgIDsgaSA8IGwgJiYgcGF0dGVybi5jaGFyQXQoaSkgPT09IFwiIVwiXG4gICAgICA7IGkgKyspIHtcbiAgICBuZWdhdGUgPSAhbmVnYXRlXG4gICAgbmVnYXRlT2Zmc2V0ICsrXG4gIH1cblxuICBpZiAobmVnYXRlT2Zmc2V0KSB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cihuZWdhdGVPZmZzZXQpXG4gIHRoaXMubmVnYXRlID0gbmVnYXRlXG59XG5cbi8vIEJyYWNlIGV4cGFuc2lvbjpcbi8vIGF7YixjfWQgLT4gYWJkIGFjZFxuLy8gYXtiLH1jIC0+IGFiYyBhY1xuLy8gYXswLi4zfWQgLT4gYTBkIGExZCBhMmQgYTNkXG4vLyBhe2IsY3tkLGV9Zn1nIC0+IGFiZyBhY2RmZyBhY2VmZ1xuLy8gYXtiLGN9ZHtlLGZ9ZyAtPiBhYmRlZyBhY2RlZyBhYmRlZyBhYmRmZ1xuLy9cbi8vIEludmFsaWQgc2V0cyBhcmUgbm90IGV4cGFuZGVkLlxuLy8gYXsyLi59YiAtPiBhezIuLn1iXG4vLyBhe2J9YyAtPiBhe2J9Y1xubWluaW1hdGNoLmJyYWNlRXhwYW5kID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucykuYnJhY2VFeHBhbmQoKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLmJyYWNlRXhwYW5kID0gYnJhY2VFeHBhbmRcbmZ1bmN0aW9uIGJyYWNlRXhwYW5kIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHRoaXMub3B0aW9uc1xuICBwYXR0ZXJuID0gdHlwZW9mIHBhdHRlcm4gPT09IFwidW5kZWZpbmVkXCJcbiAgICA/IHRoaXMucGF0dGVybiA6IHBhdHRlcm5cblxuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgcGF0dGVyblwiKVxuICB9XG5cbiAgaWYgKG9wdGlvbnMubm9icmFjZSB8fFxuICAgICAgIXBhdHRlcm4ubWF0Y2goL1xcey4qXFx9LykpIHtcbiAgICAvLyBzaG9ydGN1dC4gbm8gbmVlZCB0byBleHBhbmQuXG4gICAgcmV0dXJuIFtwYXR0ZXJuXVxuICB9XG5cbiAgdmFyIGVzY2FwaW5nID0gZmFsc2VcblxuICAvLyBleGFtcGxlcyBhbmQgY29tbWVudHMgcmVmZXIgdG8gdGhpcyBjcmF6eSBwYXR0ZXJuOlxuICAvLyBhe2IsY3tkLGV9LHtmLGd9aH14e3ksen1cbiAgLy8gZXhwZWN0ZWQ6XG4gIC8vIGFieHlcbiAgLy8gYWJ4elxuICAvLyBhY2R4eVxuICAvLyBhY2R4elxuICAvLyBhY2V4eVxuICAvLyBhY2V4elxuICAvLyBhZmh4eVxuICAvLyBhZmh4elxuICAvLyBhZ2h4eVxuICAvLyBhZ2h4elxuXG4gIC8vIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBmaXJzdCBcXHsgaXMganVzdCBhIHByZWZpeC5cbiAgLy8gU28sIHdlIHBsdWNrIHRoYXQgb2ZmLCBhbmQgd29yayB3aXRoIHRoZSByZXN0LFxuICAvLyBhbmQgdGhlbiBwcmVwZW5kIGl0IHRvIGV2ZXJ5dGhpbmcgd2UgZmluZC5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KDApICE9PSBcIntcIikge1xuICAgIHRoaXMuZGVidWcocGF0dGVybilcbiAgICB2YXIgcHJlZml4ID0gbnVsbFxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsOyBpICsrKSB7XG4gICAgICB2YXIgYyA9IHBhdHRlcm4uY2hhckF0KGkpXG4gICAgICB0aGlzLmRlYnVnKGksIGMpXG4gICAgICBpZiAoYyA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgZXNjYXBpbmcgPSAhZXNjYXBpbmdcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gXCJ7XCIgJiYgIWVzY2FwaW5nKSB7XG4gICAgICAgIHByZWZpeCA9IHBhdHRlcm4uc3Vic3RyKDAsIGkpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0dWFsbHkgbm8gc2V0cywgYWxsIHsgd2VyZSBlc2NhcGVkLlxuICAgIGlmIChwcmVmaXggPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVidWcoXCJubyBzZXRzXCIpXG4gICAgICByZXR1cm4gW3BhdHRlcm5dXG4gICAgfVxuXG4gICB2YXIgdGFpbCA9IGJyYWNlRXhwYW5kLmNhbGwodGhpcywgcGF0dGVybi5zdWJzdHIoaSksIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRhaWwubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdFxuICAgIH0pXG4gIH1cblxuICAvLyBub3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZTpcbiAgLy8ge2IsY3tkLGV9LHtmLGd9aH14e3ksen1cbiAgLy8gd2FsayB0aHJvdWdoIHRoZSBzZXQsIGV4cGFuZGluZyBlYWNoIHBhcnQsIHVudGlsXG4gIC8vIHRoZSBzZXQgZW5kcy4gIHRoZW4sIHdlJ2xsIGV4cGFuZCB0aGUgc3VmZml4LlxuICAvLyBJZiB0aGUgc2V0IG9ubHkgaGFzIGEgc2luZ2xlIG1lbWJlciwgdGhlbidsbCBwdXQgdGhlIHt9IGJhY2tcblxuICAvLyBmaXJzdCwgaGFuZGxlIG51bWVyaWMgc2V0cywgc2luY2UgdGhleSdyZSBlYXNpZXJcbiAgdmFyIG51bXNldCA9IHBhdHRlcm4ubWF0Y2goL15cXHsoLT9bMC05XSspXFwuXFwuKC0/WzAtOV0rKVxcfS8pXG4gIGlmIChudW1zZXQpIHtcbiAgICB0aGlzLmRlYnVnKFwibnVtc2V0XCIsIG51bXNldFsxXSwgbnVtc2V0WzJdKVxuICAgIHZhciBzdWYgPSBicmFjZUV4cGFuZC5jYWxsKHRoaXMsIHBhdHRlcm4uc3Vic3RyKG51bXNldFswXS5sZW5ndGgpLCBvcHRpb25zKVxuICAgICAgLCBzdGFydCA9ICtudW1zZXRbMV1cbiAgICAgICwgZW5kID0gK251bXNldFsyXVxuICAgICAgLCBpbmMgPSBzdGFydCA+IGVuZCA/IC0xIDogMVxuICAgICAgLCBzZXQgPSBbXVxuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSAhPSAoZW5kICsgaW5jKTsgaSArPSBpbmMpIHtcbiAgICAgIC8vIGFwcGVuZCBhbGwgdGhlIHN1ZmZpeGVzXG4gICAgICBmb3IgKHZhciBpaSA9IDAsIGxsID0gc3VmLmxlbmd0aDsgaWkgPCBsbDsgaWkgKyspIHtcbiAgICAgICAgc2V0LnB1c2goaSArIHN1ZltpaV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZXRcbiAgfVxuXG4gIC8vIG9rLCB3YWxrIHRocm91Z2ggdGhlIHNldFxuICAvLyBXZSBob3BlLCBzb21ld2hhdCBvcHRpbWlzdGljYWxseSwgdGhhdCB0aGVyZVxuICAvLyB3aWxsIGJlIGEgfSBhdCB0aGUgZW5kLlxuICAvLyBJZiB0aGUgY2xvc2luZyBicmFjZSBpc24ndCBmb3VuZCwgdGhlbiB0aGUgcGF0dGVybiBpc1xuICAvLyBpbnRlcnByZXRlZCBhcyBicmFjZUV4cGFuZChcIlxcXFxcIiArIHBhdHRlcm4pIHNvIHRoYXRcbiAgLy8gdGhlIGxlYWRpbmcgXFx7IHdpbGwgYmUgaW50ZXJwcmV0ZWQgbGl0ZXJhbGx5LlxuICB2YXIgaSA9IDEgLy8gc2tpcCB0aGUgXFx7XG4gICAgLCBkZXB0aCA9IDFcbiAgICAsIHNldCA9IFtdXG4gICAgLCBtZW1iZXIgPSBcIlwiXG4gICAgLCBzYXdFbmQgPSBmYWxzZVxuICAgICwgZXNjYXBpbmcgPSBmYWxzZVxuXG4gIGZ1bmN0aW9uIGFkZE1lbWJlciAoKSB7XG4gICAgc2V0LnB1c2gobWVtYmVyKVxuICAgIG1lbWJlciA9IFwiXCJcbiAgfVxuXG4gIHRoaXMuZGVidWcoXCJFbnRlcmluZyBmb3JcIilcbiAgRk9SOiBmb3IgKGkgPSAxLCBsID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsOyBpICsrKSB7XG4gICAgdmFyIGMgPSBwYXR0ZXJuLmNoYXJBdChpKVxuICAgIHRoaXMuZGVidWcoXCJcIiwgaSwgYylcblxuICAgIGlmIChlc2NhcGluZykge1xuICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgbWVtYmVyICs9IFwiXFxcXFwiICsgY1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSBcIlxcXFxcIjpcbiAgICAgICAgICBlc2NhcGluZyA9IHRydWVcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgZGVwdGggKytcbiAgICAgICAgICBtZW1iZXIgKz0gXCJ7XCJcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgXCJ9XCI6XG4gICAgICAgICAgZGVwdGggLS1cbiAgICAgICAgICAvLyBpZiB0aGlzIGNsb3NlcyB0aGUgYWN0dWFsIHNldCwgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBhZGRNZW1iZXIoKVxuICAgICAgICAgICAgLy8gcGx1Y2sgb2ZmIHRoZSBjbG9zZS1icmFjZVxuICAgICAgICAgICAgaSArK1xuICAgICAgICAgICAgYnJlYWsgRk9SXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbWJlciArPSBjXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFwiLFwiOlxuICAgICAgICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgICAgICAgYWRkTWVtYmVyKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVtYmVyICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG1lbWJlciArPSBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgIH0gLy8gc3dpdGNoXG4gICAgfSAvLyBlbHNlXG4gIH0gLy8gZm9yXG5cbiAgLy8gbm93IHdlJ3ZlIGVpdGhlciBmaW5pc2hlZCB0aGUgc2V0LCBhbmQgdGhlIHN1ZmZpeCBpc1xuICAvLyBwYXR0ZXJuLnN1YnN0cihpKSwgb3Igd2UgaGF2ZSAqbm90KiBjbG9zZWQgdGhlIHNldCxcbiAgLy8gYW5kIG5lZWQgdG8gZXNjYXBlIHRoZSBsZWFkaW5nIGJyYWNlXG4gIGlmIChkZXB0aCAhPT0gMCkge1xuICAgIHRoaXMuZGVidWcoXCJkaWRuJ3QgY2xvc2VcIiwgcGF0dGVybilcbiAgICByZXR1cm4gYnJhY2VFeHBhbmQuY2FsbCh0aGlzLCBcIlxcXFxcIiArIHBhdHRlcm4sIG9wdGlvbnMpXG4gIH1cblxuICAvLyB4e3ksen0gLT4gW1wieHlcIiwgXCJ4elwiXVxuICB0aGlzLmRlYnVnKFwic2V0XCIsIHNldClcbiAgdGhpcy5kZWJ1ZyhcInN1ZmZpeFwiLCBwYXR0ZXJuLnN1YnN0cihpKSlcbiAgdmFyIHN1ZiA9IGJyYWNlRXhwYW5kLmNhbGwodGhpcywgcGF0dGVybi5zdWJzdHIoaSksIG9wdGlvbnMpXG4gIC8vIFtcImJcIiwgXCJje2QsZX1cIixcIntmLGd9aFwiXSAtPlxuICAvLyAgIFtbXCJiXCJdLCBbXCJjZFwiLCBcImNlXCJdLCBbXCJmaFwiLCBcImdoXCJdXVxuICB2YXIgYWRkQnJhY2VzID0gc2V0Lmxlbmd0aCA9PT0gMVxuICB0aGlzLmRlYnVnKFwic2V0IHByZS1leHBhbmRlZFwiLCBzZXQpXG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gYnJhY2VFeHBhbmQuY2FsbCh0aGlzLCBwLCBvcHRpb25zKVxuICB9LCB0aGlzKVxuICB0aGlzLmRlYnVnKFwic2V0IGV4cGFuZGVkXCIsIHNldClcblxuXG4gIC8vIFtbXCJiXCJdLCBbXCJjZFwiLCBcImNlXCJdLCBbXCJmaFwiLCBcImdoXCJdXSAtPlxuICAvLyAgIFtcImJcIiwgXCJjZFwiLCBcImNlXCIsIFwiZmhcIiwgXCJnaFwiXVxuICBzZXQgPSBzZXQucmVkdWNlKGZ1bmN0aW9uIChsLCByKSB7XG4gICAgcmV0dXJuIGwuY29uY2F0KHIpXG4gIH0pXG5cbiAgaWYgKGFkZEJyYWNlcykge1xuICAgIHNldCA9IHNldC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBcIntcIiArIHMgKyBcIn1cIlxuICAgIH0pXG4gIH1cblxuICAvLyBub3cgYXR0YWNoIHRoZSBzdWZmaXhlcy5cbiAgdmFyIHJldCA9IFtdXG4gIGZvciAodmFyIGkgPSAwLCBsID0gc2V0Lmxlbmd0aDsgaSA8IGw7IGkgKyspIHtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGxsID0gc3VmLmxlbmd0aDsgaWkgPCBsbDsgaWkgKyspIHtcbiAgICAgIHJldC5wdXNoKHNldFtpXSArIHN1ZltpaV0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLy8gcGFyc2UgYSBjb21wb25lbnQgb2YgdGhlIGV4cGFuZGVkIHNldC5cbi8vIEF0IHRoaXMgcG9pbnQsIG5vIHBhdHRlcm4gbWF5IGNvbnRhaW4gXCIvXCIgaW4gaXRcbi8vIHNvIHdlJ3JlIGdvaW5nIHRvIHJldHVybiBhIDJkIGFycmF5LCB3aGVyZSBlYWNoIGVudHJ5IGlzIHRoZSBmdWxsXG4vLyBwYXR0ZXJuLCBzcGxpdCBvbiAnLycsIGFuZCB0aGVuIHR1cm5lZCBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuLy8gQSByZWdleHAgaXMgbWFkZSBhdCB0aGUgZW5kIHdoaWNoIGpvaW5zIGVhY2ggYXJyYXkgd2l0aCBhblxuLy8gZXNjYXBlZCAvLCBhbmQgYW5vdGhlciBmdWxsIG9uZSB3aGljaCBqb2lucyBlYWNoIHJlZ2V4cCB3aXRoIHwuXG4vL1xuLy8gRm9sbG93aW5nIHRoZSBsZWFkIG9mIEJhc2ggNC4xLCBub3RlIHRoYXQgXCIqKlwiIG9ubHkgaGFzIHNwZWNpYWwgbWVhbmluZ1xuLy8gd2hlbiBpdCBpcyB0aGUgKm9ubHkqIHRoaW5nIGluIGEgcGF0aCBwb3J0aW9uLiAgT3RoZXJ3aXNlLCBhbnkgc2VyaWVzXG4vLyBvZiAqIGlzIGVxdWl2YWxlbnQgdG8gYSBzaW5nbGUgKi4gIEdsb2JzdGFyIGJlaGF2aW9yIGlzIGVuYWJsZWQgYnlcbi8vIGRlZmF1bHQsIGFuZCBjYW4gYmUgZGlzYWJsZWQgYnkgc2V0dGluZyBvcHRpb25zLm5vZ2xvYnN0YXIuXG5NaW5pbWF0Y2gucHJvdG90eXBlLnBhcnNlID0gcGFyc2VcbnZhciBTVUJQQVJTRSA9IHt9XG5mdW5jdGlvbiBwYXJzZSAocGF0dGVybiwgaXNTdWIpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBzaG9ydGN1dHNcbiAgaWYgKCFvcHRpb25zLm5vZ2xvYnN0YXIgJiYgcGF0dGVybiA9PT0gXCIqKlwiKSByZXR1cm4gR0xPQlNUQVJcbiAgaWYgKHBhdHRlcm4gPT09IFwiXCIpIHJldHVybiBcIlwiXG5cbiAgdmFyIHJlID0gXCJcIlxuICAgICwgaGFzTWFnaWMgPSAhIW9wdGlvbnMubm9jYXNlXG4gICAgLCBlc2NhcGluZyA9IGZhbHNlXG4gICAgLy8gPyA9PiBvbmUgc2luZ2xlIGNoYXJhY3RlclxuICAgICwgcGF0dGVybkxpc3RTdGFjayA9IFtdXG4gICAgLCBwbFR5cGVcbiAgICAsIHN0YXRlQ2hhclxuICAgICwgaW5DbGFzcyA9IGZhbHNlXG4gICAgLCByZUNsYXNzU3RhcnQgPSAtMVxuICAgICwgY2xhc3NTdGFydCA9IC0xXG4gICAgLy8gLiBhbmQgLi4gbmV2ZXIgbWF0Y2ggYW55dGhpbmcgdGhhdCBkb2Vzbid0IHN0YXJ0IHdpdGggLixcbiAgICAvLyBldmVuIHdoZW4gb3B0aW9ucy5kb3QgaXMgc2V0LlxuICAgICwgcGF0dGVyblN0YXJ0ID0gcGF0dGVybi5jaGFyQXQoMCkgPT09IFwiLlwiID8gXCJcIiAvLyBhbnl0aGluZ1xuICAgICAgLy8gbm90IChzdGFydCBvciAvIGZvbGxvd2VkIGJ5IC4gb3IgLi4gZm9sbG93ZWQgYnkgLyBvciBlbmQpXG4gICAgICA6IG9wdGlvbnMuZG90ID8gXCIoPyEoPzpefFxcXFxcXC8pXFxcXC57MSwyfSg/OiR8XFxcXFxcLykpXCJcbiAgICAgIDogXCIoPyFcXFxcLilcIlxuICAgICwgc2VsZiA9IHRoaXNcblxuICBmdW5jdGlvbiBjbGVhclN0YXRlQ2hhciAoKSB7XG4gICAgaWYgKHN0YXRlQ2hhcikge1xuICAgICAgLy8gd2UgaGFkIHNvbWUgc3RhdGUtdHJhY2tpbmcgY2hhcmFjdGVyXG4gICAgICAvLyB0aGF0IHdhc24ndCBjb25zdW1lZCBieSB0aGlzIHBhc3MuXG4gICAgICBzd2l0Y2ggKHN0YXRlQ2hhcikge1xuICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICAgIHJlICs9IHN0YXJcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgIHJlICs9IHFtYXJrXG4gICAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZSArPSBcIlxcXFxcIitzdGF0ZUNoYXJcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VsZi5kZWJ1ZygnY2xlYXJTdGF0ZUNoYXIgJWogJWonLCBzdGF0ZUNoYXIsIHJlKVxuICAgICAgc3RhdGVDaGFyID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCBjXG4gICAgICA7IChpIDwgbGVuKSAmJiAoYyA9IHBhdHRlcm4uY2hhckF0KGkpKVxuICAgICAgOyBpICsrICkge1xuXG4gICAgdGhpcy5kZWJ1ZyhcIiVzXFx0JXMgJXMgJWpcIiwgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAvLyBza2lwIG92ZXIgYW55IHRoYXQgYXJlIGVzY2FwZWQuXG4gICAgaWYgKGVzY2FwaW5nICYmIHJlU3BlY2lhbHNbY10pIHtcbiAgICAgIHJlICs9IFwiXFxcXFwiICsgY1xuICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBTV0lUQ0g6IHN3aXRjaCAoYykge1xuICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgLy8gY29tcGxldGVseSBub3QgYWxsb3dlZCwgZXZlbiBlc2NhcGVkLlxuICAgICAgICAvLyBTaG91bGQgYWxyZWFkeSBiZSBwYXRoLXNwbGl0IGJ5IG5vdy5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNhc2UgXCJcXFxcXCI6XG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgZXNjYXBpbmcgPSB0cnVlXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIC8vIHRoZSB2YXJpb3VzIHN0YXRlQ2hhciB2YWx1ZXNcbiAgICAgIC8vIGZvciB0aGUgXCJleHRnbG9iXCIgc3R1ZmYuXG4gICAgICBjYXNlIFwiP1wiOlxuICAgICAgY2FzZSBcIipcIjpcbiAgICAgIGNhc2UgXCIrXCI6XG4gICAgICBjYXNlIFwiQFwiOlxuICAgICAgY2FzZSBcIiFcIjpcbiAgICAgICAgdGhpcy5kZWJ1ZyhcIiVzXFx0JXMgJXMgJWogPC0tIHN0YXRlQ2hhclwiLCBwYXR0ZXJuLCBpLCByZSwgYylcblxuICAgICAgICAvLyBhbGwgb2YgdGhvc2UgYXJlIGxpdGVyYWxzIGluc2lkZSBhIGNsYXNzLCBleGNlcHQgdGhhdFxuICAgICAgICAvLyB0aGUgZ2xvYiBbIWFdIG1lYW5zIFteYV0gaW4gcmVnZXhwXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnICBpbiBjbGFzcycpXG4gICAgICAgICAgaWYgKGMgPT09IFwiIVwiICYmIGkgPT09IGNsYXNzU3RhcnQgKyAxKSBjID0gXCJeXCJcbiAgICAgICAgICByZSArPSBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHN0YXRlQ2hhciwgdGhlbiBpdCBtZWFuc1xuICAgICAgICAvLyB0aGF0IHRoZXJlIHdhcyBzb21ldGhpbmcgbGlrZSAqKiBvciArPyBpbiB0aGVyZS5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSBzdGF0ZUNoYXIsIHRoZW4gcHJvY2VlZCB3aXRoIHRoaXMgb25lLlxuICAgICAgICBzZWxmLmRlYnVnKCdjYWxsIGNsZWFyU3RhdGVDaGFyICVqJywgc3RhdGVDaGFyKVxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIHN0YXRlQ2hhciA9IGNcbiAgICAgICAgLy8gaWYgZXh0Z2xvYiBpcyBkaXNhYmxlZCwgdGhlbiArKGFzZGZ8Zm9vKSBpc24ndCBhIHRoaW5nLlxuICAgICAgICAvLyBqdXN0IGNsZWFyIHRoZSBzdGF0ZWNoYXIgKm5vdyosIHJhdGhlciB0aGFuIGV2ZW4gZGl2aW5nIGludG9cbiAgICAgICAgLy8gdGhlIHBhdHRlcm5MaXN0IHN0dWZmLlxuICAgICAgICBpZiAob3B0aW9ucy5ub2V4dCkgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlIFwiKFwiOlxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9IFwiKFwiXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGVDaGFyKSB7XG4gICAgICAgICAgcmUgKz0gXCJcXFxcKFwiXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIHBsVHlwZSA9IHN0YXRlQ2hhclxuICAgICAgICBwYXR0ZXJuTGlzdFN0YWNrLnB1c2goeyB0eXBlOiBwbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgc3RhcnQ6IGkgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIHJlU3RhcnQ6IHJlLmxlbmd0aCB9KVxuICAgICAgICAvLyBuZWdhdGlvbiBpcyAoPzooPyFqcylbXi9dKilcbiAgICAgICAgcmUgKz0gc3RhdGVDaGFyID09PSBcIiFcIiA/IFwiKD86KD8hXCIgOiBcIig/OlwiXG4gICAgICAgIHRoaXMuZGVidWcoJ3BsVHlwZSAlaiAlaicsIHN0YXRlQ2hhciwgcmUpXG4gICAgICAgIHN0YXRlQ2hhciA9IGZhbHNlXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlICs9IFwiXFxcXClcIlxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICByZSArPSBcIilcIlxuICAgICAgICBwbFR5cGUgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpLnR5cGVcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIC8vIFRoZSBvdGhlcnMgYXJlICg/OjxwYXR0ZXJuPik8dHlwZT5cbiAgICAgICAgc3dpdGNoIChwbFR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgICAgcmUgKz0gXCJbXi9dKj8pXCJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSBcIj9cIjpcbiAgICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgIGNhc2UgXCIqXCI6IHJlICs9IHBsVHlwZVxuICAgICAgICAgIGNhc2UgXCJAXCI6IGJyZWFrIC8vIHRoZSBkZWZhdWx0IGFueXdheVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgXCJ8XCI6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCB8fCBlc2NhcGluZykge1xuICAgICAgICAgIHJlICs9IFwiXFxcXHxcIlxuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICByZSArPSBcInxcIlxuICAgICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGVzZSBhcmUgbW9zdGx5IHRoZSBzYW1lIGluIHJlZ2V4cCBhbmQgZ2xvYlxuICAgICAgY2FzZSBcIltcIjpcbiAgICAgICAgLy8gc3dhbGxvdyBhbnkgc3RhdGUtdHJhY2tpbmcgY2hhciBiZWZvcmUgdGhlIFtcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gXCJcXFxcXCIgKyBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGluQ2xhc3MgPSB0cnVlXG4gICAgICAgIGNsYXNzU3RhcnQgPSBpXG4gICAgICAgIHJlQ2xhc3NTdGFydCA9IHJlLmxlbmd0aFxuICAgICAgICByZSArPSBjXG4gICAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgXCJdXCI6XG4gICAgICAgIC8vICBhIHJpZ2h0IGJyYWNrZXQgc2hhbGwgbG9zZSBpdHMgc3BlY2lhbFxuICAgICAgICAvLyAgbWVhbmluZyBhbmQgcmVwcmVzZW50IGl0c2VsZiBpblxuICAgICAgICAvLyAgYSBicmFja2V0IGV4cHJlc3Npb24gaWYgaXQgb2NjdXJzXG4gICAgICAgIC8vICBmaXJzdCBpbiB0aGUgbGlzdC4gIC0tIFBPU0lYLjIgMi44LjMuMlxuICAgICAgICBpZiAoaSA9PT0gY2xhc3NTdGFydCArIDEgfHwgIWluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSBcIlxcXFxcIiArIGNcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmlzaCB1cCB0aGUgY2xhc3MuXG4gICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICBpbkNsYXNzID0gZmFsc2VcbiAgICAgICAgcmUgKz0gY1xuICAgICAgICBjb250aW51ZVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBzd2FsbG93IGFueSBzdGF0ZSBjaGFyIHRoYXQgd2Fzbid0IGNvbnN1bWVkXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcblxuICAgICAgICBpZiAoZXNjYXBpbmcpIHtcbiAgICAgICAgICAvLyBubyBuZWVkXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHJlU3BlY2lhbHNbY11cbiAgICAgICAgICAgICAgICAgICAmJiAhKGMgPT09IFwiXlwiICYmIGluQ2xhc3MpKSB7XG4gICAgICAgICAgcmUgKz0gXCJcXFxcXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHJlICs9IGNcblxuICAgIH0gLy8gc3dpdGNoXG4gIH0gLy8gZm9yXG5cblxuICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gIC8vIFwiW2FiY1wiIGlzIHZhbGlkLCBlcXVpdmFsZW50IHRvIFwiXFxbYWJjXCJcbiAgaWYgKGluQ2xhc3MpIHtcbiAgICAvLyBzcGxpdCB3aGVyZSB0aGUgbGFzdCBbIHdhcywgYW5kIGVzY2FwZSBpdFxuICAgIC8vIHRoaXMgaXMgYSBodWdlIHBpdGEuICBXZSBub3cgaGF2ZSB0byByZS13YWxrXG4gICAgLy8gdGhlIGNvbnRlbnRzIG9mIHRoZSB3b3VsZC1iZSBjbGFzcyB0byByZS10cmFuc2xhdGVcbiAgICAvLyBhbnkgY2hhcmFjdGVycyB0aGF0IHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXNcbiAgICB2YXIgY3MgPSBwYXR0ZXJuLnN1YnN0cihjbGFzc1N0YXJ0ICsgMSlcbiAgICAgICwgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICByZSA9IHJlLnN1YnN0cigwLCByZUNsYXNzU3RhcnQpICsgXCJcXFxcW1wiICsgc3BbMF1cbiAgICBoYXNNYWdpYyA9IGhhc01hZ2ljIHx8IHNwWzFdXG4gIH1cblxuICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgaGFkIGEgKyggdGhpbmcgYXQgdGhlICplbmQqXG4gIC8vIG9mIHRoZSBwYXR0ZXJuLlxuICAvLyBlYWNoIHBhdHRlcm4gbGlzdCBzdGFjayBhZGRzIDMgY2hhcnMsIGFuZCB3ZSBuZWVkIHRvIGdvIHRocm91Z2hcbiAgLy8gYW5kIGVzY2FwZSBhbnkgfCBjaGFycyB0aGF0IHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXMgZm9yIHRoZSByZWdleHAuXG4gIC8vIEdvIHRocm91Z2ggYW5kIGVzY2FwZSB0aGVtLCB0YWtpbmcgY2FyZSBub3QgdG8gZG91YmxlLWVzY2FwZSBhbnlcbiAgLy8gfCBjaGFycyB0aGF0IHdlcmUgYWxyZWFkeSBlc2NhcGVkLlxuICB2YXIgcGxcbiAgd2hpbGUgKHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKSkge1xuICAgIHZhciB0YWlsID0gcmUuc2xpY2UocGwucmVTdGFydCArIDMpXG4gICAgLy8gbWF5YmUgc29tZSBldmVuIG51bWJlciBvZiBcXCwgdGhlbiBtYXliZSAxIFxcLCBmb2xsb3dlZCBieSBhIHxcbiAgICB0YWlsID0gdGFpbC5yZXBsYWNlKC8oKD86XFxcXHsyfSkqKShcXFxcPylcXHwvZywgZnVuY3Rpb24gKF8sICQxLCAkMikge1xuICAgICAgaWYgKCEkMikge1xuICAgICAgICAvLyB0aGUgfCBpc24ndCBhbHJlYWR5IGVzY2FwZWQsIHNvIGVzY2FwZSBpdC5cbiAgICAgICAgJDIgPSBcIlxcXFxcIlxuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIGVzY2FwZSBhbGwgdGhvc2Ugc2xhc2hlcyAqYWdhaW4qLCB3aXRob3V0IGVzY2FwaW5nIHRoZVxuICAgICAgLy8gb25lIHRoYXQgd2UgbmVlZCBmb3IgZXNjYXBpbmcgdGhlIHwgY2hhcmFjdGVyLiAgQXMgaXQgd29ya3Mgb3V0LFxuICAgICAgLy8gZXNjYXBpbmcgYW4gZXZlbiBudW1iZXIgb2Ygc2xhc2hlcyBjYW4gYmUgZG9uZSBieSBzaW1wbHkgcmVwZWF0aW5nXG4gICAgICAvLyBpdCBleGFjdGx5IGFmdGVyIGl0c2VsZi4gIFRoYXQncyB3aHkgdGhpcyB0cmljayB3b3Jrcy5cbiAgICAgIC8vXG4gICAgICAvLyBJIGFtIHNvcnJ5IHRoYXQgeW91IGhhdmUgdG8gc2VlIHRoaXMuXG4gICAgICByZXR1cm4gJDEgKyAkMSArICQyICsgXCJ8XCJcbiAgICB9KVxuXG4gICAgdGhpcy5kZWJ1ZyhcInRhaWw9JWpcXG4gICAlc1wiLCB0YWlsLCB0YWlsKVxuICAgIHZhciB0ID0gcGwudHlwZSA9PT0gXCIqXCIgPyBzdGFyXG4gICAgICAgICAgOiBwbC50eXBlID09PSBcIj9cIiA/IHFtYXJrXG4gICAgICAgICAgOiBcIlxcXFxcIiArIHBsLnR5cGVcblxuICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgIHJlID0gcmUuc2xpY2UoMCwgcGwucmVTdGFydClcbiAgICAgICArIHQgKyBcIlxcXFwoXCJcbiAgICAgICArIHRhaWxcbiAgfVxuXG4gIC8vIGhhbmRsZSB0cmFpbGluZyB0aGluZ3MgdGhhdCBvbmx5IG1hdHRlciBhdCB0aGUgdmVyeSBlbmQuXG4gIGNsZWFyU3RhdGVDaGFyKClcbiAgaWYgKGVzY2FwaW5nKSB7XG4gICAgLy8gdHJhaWxpbmcgXFxcXFxuICAgIHJlICs9IFwiXFxcXFxcXFxcIlxuICB9XG5cbiAgLy8gb25seSBuZWVkIHRvIGFwcGx5IHRoZSBub2RvdCBzdGFydCBpZiB0aGUgcmUgc3RhcnRzIHdpdGhcbiAgLy8gc29tZXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgY2FwdHVyZSBhIGRvdFxuICB2YXIgYWRkUGF0dGVyblN0YXJ0ID0gZmFsc2VcbiAgc3dpdGNoIChyZS5jaGFyQXQoMCkpIHtcbiAgICBjYXNlIFwiLlwiOlxuICAgIGNhc2UgXCJbXCI6XG4gICAgY2FzZSBcIihcIjogYWRkUGF0dGVyblN0YXJ0ID0gdHJ1ZVxuICB9XG5cbiAgLy8gaWYgdGhlIHJlIGlzIG5vdCBcIlwiIGF0IHRoaXMgcG9pbnQsIHRoZW4gd2UgbmVlZCB0byBtYWtlIHN1cmVcbiAgLy8gaXQgZG9lc24ndCBtYXRjaCBhZ2FpbnN0IGFuIGVtcHR5IHBhdGggcGFydC5cbiAgLy8gT3RoZXJ3aXNlIGEvKiB3aWxsIG1hdGNoIGEvLCB3aGljaCBpdCBzaG91bGQgbm90LlxuICBpZiAocmUgIT09IFwiXCIgJiYgaGFzTWFnaWMpIHJlID0gXCIoPz0uKVwiICsgcmVcblxuICBpZiAoYWRkUGF0dGVyblN0YXJ0KSByZSA9IHBhdHRlcm5TdGFydCArIHJlXG5cbiAgLy8gcGFyc2luZyBqdXN0IGEgcGllY2Ugb2YgYSBsYXJnZXIgcGF0dGVybi5cbiAgaWYgKGlzU3ViID09PSBTVUJQQVJTRSkge1xuICAgIHJldHVybiBbIHJlLCBoYXNNYWdpYyBdXG4gIH1cblxuICAvLyBza2lwIHRoZSByZWdleHAgZm9yIG5vbi1tYWdpY2FsIHBhdHRlcm5zXG4gIC8vIHVuZXNjYXBlIGFueXRoaW5nIGluIGl0LCB0aG91Z2gsIHNvIHRoYXQgaXQnbGwgYmVcbiAgLy8gYW4gZXhhY3QgbWF0Y2ggYWdhaW5zdCBhIGZpbGUgZXRjLlxuICBpZiAoIWhhc01hZ2ljKSB7XG4gICAgcmV0dXJuIGdsb2JVbmVzY2FwZShwYXR0ZXJuKVxuICB9XG5cbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyBcImlcIiA6IFwiXCJcbiAgICAsIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZSArIFwiJFwiLCBmbGFncylcblxuICByZWdFeHAuX2dsb2IgPSBwYXR0ZXJuXG4gIHJlZ0V4cC5fc3JjID0gcmVcblxuICByZXR1cm4gcmVnRXhwXG59XG5cbm1pbmltYXRjaC5tYWtlUmUgPSBmdW5jdGlvbiAocGF0dGVybiwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zIHx8IHt9KS5tYWtlUmUoKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1ha2VSZSA9IG1ha2VSZVxuZnVuY3Rpb24gbWFrZVJlICgpIHtcbiAgaWYgKHRoaXMucmVnZXhwIHx8IHRoaXMucmVnZXhwID09PSBmYWxzZSkgcmV0dXJuIHRoaXMucmVnZXhwXG5cbiAgLy8gYXQgdGhpcyBwb2ludCwgdGhpcy5zZXQgaXMgYSAyZCBhcnJheSBvZiBwYXJ0aWFsXG4gIC8vIHBhdHRlcm4gc3RyaW5ncywgb3IgXCIqKlwiLlxuICAvL1xuICAvLyBJdCdzIGJldHRlciB0byB1c2UgLm1hdGNoKCkuICBUaGlzIGZ1bmN0aW9uIHNob3VsZG4ndFxuICAvLyBiZSB1c2VkLCByZWFsbHksIGJ1dCBpdCdzIHByZXR0eSBjb252ZW5pZW50IHNvbWV0aW1lcyxcbiAgLy8gd2hlbiB5b3UganVzdCB3YW50IHRvIHdvcmsgd2l0aCBhIHJlZ2V4LlxuICB2YXIgc2V0ID0gdGhpcy5zZXRcblxuICBpZiAoIXNldC5sZW5ndGgpIHJldHVybiB0aGlzLnJlZ2V4cCA9IGZhbHNlXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdmFyIHR3b1N0YXIgPSBvcHRpb25zLm5vZ2xvYnN0YXIgPyBzdGFyXG4gICAgICA6IG9wdGlvbnMuZG90ID8gdHdvU3RhckRvdFxuICAgICAgOiB0d29TdGFyTm9Eb3RcbiAgICAsIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyBcImlcIiA6IFwiXCJcblxuICB2YXIgcmUgPSBzZXQubWFwKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKHAgPT09IEdMT0JTVEFSKSA/IHR3b1N0YXJcbiAgICAgICAgICAgOiAodHlwZW9mIHAgPT09IFwic3RyaW5nXCIpID8gcmVnRXhwRXNjYXBlKHApXG4gICAgICAgICAgIDogcC5fc3JjXG4gICAgfSkuam9pbihcIlxcXFxcXC9cIilcbiAgfSkuam9pbihcInxcIilcblxuICAvLyBtdXN0IG1hdGNoIGVudGlyZSBwYXR0ZXJuXG4gIC8vIGVuZGluZyBpbiBhICogb3IgKiogd2lsbCBtYWtlIGl0IGxlc3Mgc3RyaWN0LlxuICByZSA9IFwiXig/OlwiICsgcmUgKyBcIikkXCJcblxuICAvLyBjYW4gbWF0Y2ggYW55dGhpbmcsIGFzIGxvbmcgYXMgaXQncyBub3QgdGhpcy5cbiAgaWYgKHRoaXMubmVnYXRlKSByZSA9IFwiXig/IVwiICsgcmUgKyBcIikuKiRcIlxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0dXJuIHRoaXMucmVnZXhwID0gZmFsc2VcbiAgfVxufVxuXG5taW5pbWF0Y2gubWF0Y2ggPSBmdW5jdGlvbiAobGlzdCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbW0gPSBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpXG4gIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBtbS5tYXRjaChmKVxuICB9KVxuICBpZiAobW0ub3B0aW9ucy5ub251bGwgJiYgIWxpc3QubGVuZ3RoKSB7XG4gICAgbGlzdC5wdXNoKHBhdHRlcm4pXG4gIH1cbiAgcmV0dXJuIGxpc3Rcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaCA9IG1hdGNoXG5mdW5jdGlvbiBtYXRjaCAoZiwgcGFydGlhbCkge1xuICB0aGlzLmRlYnVnKFwibWF0Y2hcIiwgZiwgdGhpcy5wYXR0ZXJuKVxuICAvLyBzaG9ydC1jaXJjdWl0IGluIHRoZSBjYXNlIG9mIGJ1c3RlZCB0aGluZ3MuXG4gIC8vIGNvbW1lbnRzLCBldGMuXG4gIGlmICh0aGlzLmNvbW1lbnQpIHJldHVybiBmYWxzZVxuICBpZiAodGhpcy5lbXB0eSkgcmV0dXJuIGYgPT09IFwiXCJcblxuICBpZiAoZiA9PT0gXCIvXCIgJiYgcGFydGlhbCkgcmV0dXJuIHRydWVcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIHdpbmRvd3M6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICAvLyBPbiBvdGhlciBwbGF0Zm9ybXMsIFxcIGlzIGEgdmFsaWQgKGFsYmVpdCBiYWQpIGZpbGVuYW1lIGNoYXIuXG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgZiA9IGYuc3BsaXQoXCJcXFxcXCIpLmpvaW4oXCIvXCIpXG4gIH1cblxuICAvLyB0cmVhdCB0aGUgdGVzdCBwYXRoIGFzIGEgc2V0IG9mIHBhdGhwYXJ0cy5cbiAgZiA9IGYuc3BsaXQoc2xhc2hTcGxpdClcbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIFwic3BsaXRcIiwgZilcblxuICAvLyBqdXN0IE9ORSBvZiB0aGUgcGF0dGVybiBzZXRzIGluIHRoaXMuc2V0IG5lZWRzIHRvIG1hdGNoXG4gIC8vIGluIG9yZGVyIGZvciBpdCB0byBiZSB2YWxpZC4gIElmIG5lZ2F0aW5nLCB0aGVuIGp1c3Qgb25lXG4gIC8vIG1hdGNoIG1lYW5zIHRoYXQgd2UgaGF2ZSBmYWlsZWQuXG4gIC8vIEVpdGhlciB3YXksIHJldHVybiBvbiB0aGUgZmlyc3QgaGl0LlxuXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgXCJzZXRcIiwgc2V0KVxuXG4gIC8vIEZpbmQgdGhlIGJhc2VuYW1lIG9mIHRoZSBwYXRoIGJ5IGxvb2tpbmcgZm9yIHRoZSBsYXN0IG5vbi1lbXB0eSBzZWdtZW50XG4gIHZhciBmaWxlbmFtZTtcbiAgZm9yICh2YXIgaSA9IGYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBmaWxlbmFtZSA9IGZbaV1cbiAgICBpZiAoZmlsZW5hbWUpIGJyZWFrXG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHNldC5sZW5ndGg7IGkgPCBsOyBpICsrKSB7XG4gICAgdmFyIHBhdHRlcm4gPSBzZXRbaV0sIGZpbGUgPSBmXG4gICAgaWYgKG9wdGlvbnMubWF0Y2hCYXNlICYmIHBhdHRlcm4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBmaWxlID0gW2ZpbGVuYW1lXVxuICAgIH1cbiAgICB2YXIgaGl0ID0gdGhpcy5tYXRjaE9uZShmaWxlLCBwYXR0ZXJuLCBwYXJ0aWFsKVxuICAgIGlmIChoaXQpIHtcbiAgICAgIGlmIChvcHRpb25zLmZsaXBOZWdhdGUpIHJldHVybiB0cnVlXG4gICAgICByZXR1cm4gIXRoaXMubmVnYXRlXG4gICAgfVxuICB9XG5cbiAgLy8gZGlkbid0IGdldCBhbnkgaGl0cy4gIHRoaXMgaXMgc3VjY2VzcyBpZiBpdCdzIGEgbmVnYXRpdmVcbiAgLy8gcGF0dGVybiwgZmFpbHVyZSBvdGhlcndpc2UuXG4gIGlmIChvcHRpb25zLmZsaXBOZWdhdGUpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdGhpcy5uZWdhdGVcbn1cblxuLy8gc2V0IHBhcnRpYWwgdG8gdHJ1ZSB0byB0ZXN0IGlmLCBmb3IgZXhhbXBsZSxcbi8vIFwiL2EvYlwiIG1hdGNoZXMgdGhlIHN0YXJ0IG9mIFwiLyovYi8qL2RcIlxuLy8gUGFydGlhbCBtZWFucywgaWYgeW91IHJ1biBvdXQgb2YgZmlsZSBiZWZvcmUgeW91IHJ1blxuLy8gb3V0IG9mIHBhdHRlcm4sIHRoZW4gdGhhdCdzIGZpbmUsIGFzIGxvbmcgYXMgYWxsXG4vLyB0aGUgcGFydHMgbWF0Y2guXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1hdGNoT25lID0gZnVuY3Rpb24gKGZpbGUsIHBhdHRlcm4sIHBhcnRpYWwpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICB0aGlzLmRlYnVnKFwibWF0Y2hPbmVcIixcbiAgICAgICAgICAgICAgeyBcInRoaXNcIjogdGhpc1xuICAgICAgICAgICAgICAsIGZpbGU6IGZpbGVcbiAgICAgICAgICAgICAgLCBwYXR0ZXJuOiBwYXR0ZXJuIH0pXG5cbiAgdGhpcy5kZWJ1ZyhcIm1hdGNoT25lXCIsIGZpbGUubGVuZ3RoLCBwYXR0ZXJuLmxlbmd0aClcblxuICBmb3IgKCB2YXIgZmkgPSAwXG4gICAgICAgICAgLCBwaSA9IDBcbiAgICAgICAgICAsIGZsID0gZmlsZS5sZW5ndGhcbiAgICAgICAgICAsIHBsID0gcGF0dGVybi5sZW5ndGhcbiAgICAgIDsgKGZpIDwgZmwpICYmIChwaSA8IHBsKVxuICAgICAgOyBmaSArKywgcGkgKysgKSB7XG5cbiAgICB0aGlzLmRlYnVnKFwibWF0Y2hPbmUgbG9vcFwiKVxuICAgIHZhciBwID0gcGF0dGVybltwaV1cbiAgICAgICwgZiA9IGZpbGVbZmldXG5cbiAgICB0aGlzLmRlYnVnKHBhdHRlcm4sIHAsIGYpXG5cbiAgICAvLyBzaG91bGQgYmUgaW1wb3NzaWJsZS5cbiAgICAvLyBzb21lIGludmFsaWQgcmVnZXhwIHN0dWZmIGluIHRoZSBzZXQuXG4gICAgaWYgKHAgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgIGlmIChwID09PSBHTE9CU1RBUikge1xuICAgICAgdGhpcy5kZWJ1ZygnR0xPQlNUQVInLCBbcGF0dGVybiwgcCwgZl0pXG5cbiAgICAgIC8vIFwiKipcIlxuICAgICAgLy8gYS8qKi9iLyoqL2Mgd291bGQgbWF0Y2ggdGhlIGZvbGxvd2luZzpcbiAgICAgIC8vIGEvYi94L3kvei9jXG4gICAgICAvLyBhL3gveS96L2IvY1xuICAgICAgLy8gYS9iL3gvYi94L2NcbiAgICAgIC8vIGEvYi9jXG4gICAgICAvLyBUbyBkbyB0aGlzLCB0YWtlIHRoZSByZXN0IG9mIHRoZSBwYXR0ZXJuIGFmdGVyXG4gICAgICAvLyB0aGUgKiosIGFuZCBzZWUgaWYgaXQgd291bGQgbWF0Y2ggdGhlIGZpbGUgcmVtYWluZGVyLlxuICAgICAgLy8gSWYgc28sIHJldHVybiBzdWNjZXNzLlxuICAgICAgLy8gSWYgbm90LCB0aGUgKiogXCJzd2FsbG93c1wiIGEgc2VnbWVudCwgYW5kIHRyeSBhZ2Fpbi5cbiAgICAgIC8vIFRoaXMgaXMgcmVjdXJzaXZlbHkgYXdmdWwuXG4gICAgICAvL1xuICAgICAgLy8gYS8qKi9iLyoqL2MgbWF0Y2hpbmcgYS9iL3gveS96L2NcbiAgICAgIC8vIC0gYSBtYXRjaGVzIGFcbiAgICAgIC8vIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAtIG1hdGNoT25lKGIveC95L3ovYywgYi8qKi9jKVxuICAgICAgLy8gICAgIC0gYiBtYXRjaGVzIGJcbiAgICAgIC8vICAgICAtIGRvdWJsZXN0YXJcbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeC95L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeS96L2MsIGMpIC0+IG5vXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKHovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoYywgYykgeWVzLCBoaXRcbiAgICAgIHZhciBmciA9IGZpXG4gICAgICAgICwgcHIgPSBwaSArIDFcbiAgICAgIGlmIChwciA9PT0gcGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZygnKiogYXQgdGhlIGVuZCcpXG4gICAgICAgIC8vIGEgKiogYXQgdGhlIGVuZCB3aWxsIGp1c3Qgc3dhbGxvdyB0aGUgcmVzdC5cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VuZCBhIG1hdGNoLlxuICAgICAgICAvLyBob3dldmVyLCBpdCB3aWxsIG5vdCBzd2FsbG93IC8ueCwgdW5sZXNzXG4gICAgICAgIC8vIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgICAgICAgLy8gLiBhbmQgLi4gYXJlICpuZXZlciogbWF0Y2hlZCBieSAqKiwgZm9yIGV4cGxvc2l2ZWx5XG4gICAgICAgIC8vIGV4cG9uZW50aWFsIHJlYXNvbnMuXG4gICAgICAgIGZvciAoIDsgZmkgPCBmbDsgZmkgKyspIHtcbiAgICAgICAgICBpZiAoZmlsZVtmaV0gPT09IFwiLlwiIHx8IGZpbGVbZmldID09PSBcIi4uXCIgfHxcbiAgICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBmaWxlW2ZpXS5jaGFyQXQoMCkgPT09IFwiLlwiKSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gb2ssIGxldCdzIHNlZSBpZiB3ZSBjYW4gc3dhbGxvdyB3aGF0ZXZlciB3ZSBjYW4uXG4gICAgICBXSElMRTogd2hpbGUgKGZyIDwgZmwpIHtcbiAgICAgICAgdmFyIHN3YWxsb3dlZSA9IGZpbGVbZnJdXG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuZ2xvYnN0YXIgd2hpbGUnLFxuICAgICAgICAgICAgICAgICAgICBmaWxlLCBmciwgcGF0dGVybiwgcHIsIHN3YWxsb3dlZSlcblxuICAgICAgICAvLyBYWFggcmVtb3ZlIHRoaXMgc2xpY2UuICBKdXN0IHBhc3MgdGhlIHN0YXJ0IGluZGV4LlxuICAgICAgICBpZiAodGhpcy5tYXRjaE9uZShmaWxlLnNsaWNlKGZyKSwgcGF0dGVybi5zbGljZShwciksIHBhcnRpYWwpKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgZm91bmQgbWF0Y2ghJywgZnIsIGZsLCBzd2FsbG93ZWUpXG4gICAgICAgICAgLy8gZm91bmQgYSBtYXRjaC5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbid0IHN3YWxsb3cgXCIuXCIgb3IgXCIuLlwiIGV2ZXIuXG4gICAgICAgICAgLy8gY2FuIG9ubHkgc3dhbGxvdyBcIi5mb29cIiB3aGVuIGV4cGxpY2l0bHkgYXNrZWQuXG4gICAgICAgICAgaWYgKHN3YWxsb3dlZSA9PT0gXCIuXCIgfHwgc3dhbGxvd2VlID09PSBcIi4uXCIgfHxcbiAgICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBzd2FsbG93ZWUuY2hhckF0KDApID09PSBcIi5cIikpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoXCJkb3QgZGV0ZWN0ZWQhXCIsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgICAgIGJyZWFrIFdISUxFXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gKiogc3dhbGxvd3MgYSBzZWdtZW50LCBhbmQgY29udGludWUuXG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgc3dhbGxvdyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZScpXG4gICAgICAgICAgZnIgKytcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kLlxuICAgICAgLy8gSG93ZXZlciwgaW4gcGFydGlhbCBtb2RlLCB3ZSBjYW4ndCBzYXkgdGhpcyBpcyBuZWNlc3NhcmlseSBvdmVyLlxuICAgICAgLy8gSWYgdGhlcmUncyBtb3JlICpwYXR0ZXJuKiBsZWZ0LCB0aGVuXG4gICAgICBpZiAocGFydGlhbCkge1xuICAgICAgICAvLyByYW4gb3V0IG9mIGZpbGVcbiAgICAgICAgdGhpcy5kZWJ1ZyhcIlxcbj4+PiBubyBtYXRjaCwgcGFydGlhbD9cIiwgZmlsZSwgZnIsIHBhdHRlcm4sIHByKVxuICAgICAgICBpZiAoZnIgPT09IGZsKSByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gKipcbiAgICAvLyBub24tbWFnaWMgcGF0dGVybnMganVzdCBoYXZlIHRvIG1hdGNoIGV4YWN0bHlcbiAgICAvLyBwYXR0ZXJucyB3aXRoIG1hZ2ljIGhhdmUgYmVlbiB0dXJuZWQgaW50byByZWdleHBzLlxuICAgIHZhciBoaXRcbiAgICBpZiAodHlwZW9mIHAgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChvcHRpb25zLm5vY2FzZSkge1xuICAgICAgICBoaXQgPSBmLnRvTG93ZXJDYXNlKCkgPT09IHAudG9Mb3dlckNhc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGl0ID0gZiA9PT0gcFxuICAgICAgfVxuICAgICAgdGhpcy5kZWJ1ZyhcInN0cmluZyBtYXRjaFwiLCBwLCBmLCBoaXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdCA9IGYubWF0Y2gocClcbiAgICAgIHRoaXMuZGVidWcoXCJwYXR0ZXJuIG1hdGNoXCIsIHAsIGYsIGhpdClcbiAgICB9XG5cbiAgICBpZiAoIWhpdCkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBOb3RlOiBlbmRpbmcgaW4gLyBtZWFucyB0aGF0IHdlJ2xsIGdldCBhIGZpbmFsIFwiXCJcbiAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi4gIFRoaXMgY2FuIG9ubHkgbWF0Y2ggYVxuICAvLyBjb3JyZXNwb25kaW5nIFwiXCIgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAgLy8gSWYgdGhlIGZpbGUgZW5kcyBpbiAvLCB0aGVuIGl0IGNhbiBvbmx5IG1hdGNoIGFcbiAgLy8gYSBwYXR0ZXJuIHRoYXQgZW5kcyBpbiAvLCB1bmxlc3MgdGhlIHBhdHRlcm4ganVzdFxuICAvLyBkb2Vzbid0IGhhdmUgYW55IG1vcmUgZm9yIGl0LiBCdXQsIGEvYi8gc2hvdWxkICpub3QqXG4gIC8vIG1hdGNoIFwiYS9iLypcIiwgZXZlbiB0aG91Z2ggXCJcIiBtYXRjaGVzIGFnYWluc3QgdGhlXG4gIC8vIFteL10qPyBwYXR0ZXJuLCBleGNlcHQgaW4gcGFydGlhbCBtb2RlLCB3aGVyZSBpdCBtaWdodFxuICAvLyBzaW1wbHkgbm90IGJlIHJlYWNoZWQgeWV0LlxuICAvLyBIb3dldmVyLCBhL2IvIHNob3VsZCBzdGlsbCBzYXRpc2Z5IGEvKlxuXG4gIC8vIG5vdyBlaXRoZXIgd2UgZmVsbCBvZmYgdGhlIGVuZCBvZiB0aGUgcGF0dGVybiwgb3Igd2UncmUgZG9uZS5cbiAgaWYgKGZpID09PSBmbCAmJiBwaSA9PT0gcGwpIHtcbiAgICAvLyByYW4gb3V0IG9mIHBhdHRlcm4gYW5kIGZpbGVuYW1lIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgLy8gYW4gZXhhY3QgaGl0IVxuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAoZmkgPT09IGZsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBmaWxlLCBidXQgc3RpbGwgaGFkIHBhdHRlcm4gbGVmdC5cbiAgICAvLyB0aGlzIGlzIG9rIGlmIHdlJ3JlIGRvaW5nIHRoZSBtYXRjaCBhcyBwYXJ0IG9mXG4gICAgLy8gYSBnbG9iIGZzIHRyYXZlcnNhbC5cbiAgICByZXR1cm4gcGFydGlhbFxuICB9IGVsc2UgaWYgKHBpID09PSBwbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgcGF0dGVybiwgc3RpbGwgaGF2ZSBmaWxlIGxlZnQuXG4gICAgLy8gdGhpcyBpcyBvbmx5IGFjY2VwdGFibGUgaWYgd2UncmUgb24gdGhlIHZlcnkgbGFzdFxuICAgIC8vIGVtcHR5IHNlZ21lbnQgb2YgYSBmaWxlIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICAvLyBhLyogc2hvdWxkIG1hdGNoIGEvYi9cbiAgICB2YXIgZW1wdHlGaWxlRW5kID0gKGZpID09PSBmbCAtIDEpICYmIChmaWxlW2ZpXSA9PT0gXCJcIilcbiAgICByZXR1cm4gZW1wdHlGaWxlRW5kXG4gIH1cblxuICAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGUuXG4gIHRocm93IG5ldyBFcnJvcihcInd0Zj9cIilcbn1cblxuXG4vLyByZXBsYWNlIHN0dWZmIGxpa2UgXFwqIHdpdGggKlxuZnVuY3Rpb24gZ2xvYlVuZXNjYXBlIChzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1xcXFwoLikvZywgXCIkMVwiKVxufVxuXG5cbmZ1bmN0aW9uIHJlZ0V4cEVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgXCJcXFxcJCZcIilcbn1cblxufSkoIHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIgPyByZXF1aXJlIDogbnVsbCxcbiAgICB0aGlzLFxuICAgIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUgOiBudWxsLFxuICAgIHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiID8gcHJvY2Vzcy5wbGF0Zm9ybSA6IFwid2luMzJcIlxuICApXG4iLCI7KGZ1bmN0aW9uICgpIHsgLy8gY2xvc3VyZSBmb3Igd2ViIGJyb3dzZXJzXG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IExSVUNhY2hlXG59IGVsc2Uge1xuICAvLyBqdXN0IHNldCB0aGUgZ2xvYmFsIGZvciBub24tbm9kZSBwbGF0Zm9ybXMuXG4gIHRoaXMuTFJVQ2FjaGUgPSBMUlVDYWNoZVxufVxuXG5mdW5jdGlvbiBoT1AgKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmZ1bmN0aW9uIG5haXZlTGVuZ3RoICgpIHsgcmV0dXJuIDEgfVxuXG52YXIgZGlkVHlwZVdhcm5pbmcgPSBmYWxzZVxuZnVuY3Rpb24gdHlwZUNoZWNrS2V5KGtleSkge1xuICBpZiAoIWRpZFR5cGVXYXJuaW5nICYmIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBrZXkgIT09ICdudW1iZXInKSB7XG4gICAgZGlkVHlwZVdhcm5pbmcgPSB0cnVlXG4gICAgY29uc29sZS5lcnJvcihuZXcgVHlwZUVycm9yKFwiTFJVOiBrZXkgbXVzdCBiZSBhIHN0cmluZyBvciBudW1iZXIuIEFsbW9zdCBjZXJ0YWlubHkgYSBidWchIFwiICsgdHlwZW9mIGtleSkuc3RhY2spXG4gIH1cbn1cblxuZnVuY3Rpb24gTFJVQ2FjaGUgKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExSVUNhY2hlKSlcbiAgICByZXR1cm4gbmV3IExSVUNhY2hlKG9wdGlvbnMpXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJylcbiAgICBvcHRpb25zID0geyBtYXg6IG9wdGlvbnMgfVxuXG4gIGlmICghb3B0aW9ucylcbiAgICBvcHRpb25zID0ge31cblxuICB0aGlzLl9tYXggPSBvcHRpb25zLm1heFxuICAvLyBLaW5kIG9mIHdlaXJkIHRvIGhhdmUgYSBkZWZhdWx0IG1heCBvZiBJbmZpbml0eSwgYnV0IG9oIHdlbGwuXG4gIGlmICghdGhpcy5fbWF4IHx8ICEodHlwZW9mIHRoaXMuX21heCA9PT0gXCJudW1iZXJcIikgfHwgdGhpcy5fbWF4IDw9IDAgKVxuICAgIHRoaXMuX21heCA9IEluZmluaXR5XG5cbiAgdGhpcy5fbGVuZ3RoQ2FsY3VsYXRvciA9IG9wdGlvbnMubGVuZ3RoIHx8IG5haXZlTGVuZ3RoXG4gIGlmICh0eXBlb2YgdGhpcy5fbGVuZ3RoQ2FsY3VsYXRvciAhPT0gXCJmdW5jdGlvblwiKVxuICAgIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgPSBuYWl2ZUxlbmd0aFxuXG4gIHRoaXMuX2FsbG93U3RhbGUgPSBvcHRpb25zLnN0YWxlIHx8IGZhbHNlXG4gIHRoaXMuX21heEFnZSA9IG9wdGlvbnMubWF4QWdlIHx8IG51bGxcbiAgdGhpcy5fZGlzcG9zZSA9IG9wdGlvbnMuZGlzcG9zZVxuICB0aGlzLnJlc2V0KClcbn1cblxuLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBtYXggY2hhbmdlcy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShMUlVDYWNoZS5wcm90b3R5cGUsIFwibWF4XCIsXG4gIHsgc2V0IDogZnVuY3Rpb24gKG1MKSB7XG4gICAgICBpZiAoIW1MIHx8ICEodHlwZW9mIG1MID09PSBcIm51bWJlclwiKSB8fCBtTCA8PSAwICkgbUwgPSBJbmZpbml0eVxuICAgICAgdGhpcy5fbWF4ID0gbUxcbiAgICAgIGlmICh0aGlzLl9sZW5ndGggPiB0aGlzLl9tYXgpIHRyaW0odGhpcylcbiAgICB9XG4gICwgZ2V0IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWF4IH1cbiAgLCBlbnVtZXJhYmxlIDogdHJ1ZVxuICB9KVxuXG4vLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIGxlbmd0aENhbGN1bGF0b3IgY2hhbmdlcy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShMUlVDYWNoZS5wcm90b3R5cGUsIFwibGVuZ3RoQ2FsY3VsYXRvclwiLFxuICB7IHNldCA6IGZ1bmN0aW9uIChsQykge1xuICAgICAgaWYgKHR5cGVvZiBsQyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgPSBuYWl2ZUxlbmd0aFxuICAgICAgICB0aGlzLl9sZW5ndGggPSB0aGlzLl9pdGVtQ291bnRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVba2V5XS5sZW5ndGggPSAxXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgPSBsQ1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9jYWNoZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlW2tleV0ubGVuZ3RoID0gdGhpcy5fbGVuZ3RoQ2FsY3VsYXRvcih0aGlzLl9jYWNoZVtrZXldLnZhbHVlKVxuICAgICAgICAgIHRoaXMuX2xlbmd0aCArPSB0aGlzLl9jYWNoZVtrZXldLmxlbmd0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9sZW5ndGggPiB0aGlzLl9tYXgpIHRyaW0odGhpcylcbiAgICB9XG4gICwgZ2V0IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbGVuZ3RoQ2FsY3VsYXRvciB9XG4gICwgZW51bWVyYWJsZSA6IHRydWVcbiAgfSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KExSVUNhY2hlLnByb3RvdHlwZSwgXCJsZW5ndGhcIixcbiAgeyBnZXQgOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9sZW5ndGggfVxuICAsIGVudW1lcmFibGUgOiB0cnVlXG4gIH0pXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KExSVUNhY2hlLnByb3RvdHlwZSwgXCJpdGVtQ291bnRcIixcbiAgeyBnZXQgOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pdGVtQ291bnQgfVxuICAsIGVudW1lcmFibGUgOiB0cnVlXG4gIH0pXG5cbkxSVUNhY2hlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgdmFyIGkgPSAwXG4gIHZhciBpdGVtQ291bnQgPSB0aGlzLl9pdGVtQ291bnRcblxuICBmb3IgKHZhciBrID0gdGhpcy5fbXJ1IC0gMTsgayA+PSAwICYmIGkgPCBpdGVtQ291bnQ7IGstLSkgaWYgKHRoaXMuX2xydUxpc3Rba10pIHtcbiAgICBpKytcbiAgICB2YXIgaGl0ID0gdGhpcy5fbHJ1TGlzdFtrXVxuICAgIGlmIChpc1N0YWxlKHRoaXMsIGhpdCkpIHtcbiAgICAgIGRlbCh0aGlzLCBoaXQpXG4gICAgICBpZiAoIXRoaXMuX2FsbG93U3RhbGUpIGhpdCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAoaGl0KSB7XG4gICAgICBmbi5jYWxsKHRoaXNwLCBoaXQudmFsdWUsIGhpdC5rZXksIHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICB2YXIga2V5cyA9IG5ldyBBcnJheSh0aGlzLl9pdGVtQ291bnQpXG4gIHZhciBpID0gMFxuICBmb3IgKHZhciBrID0gdGhpcy5fbXJ1IC0gMTsgayA+PSAwICYmIGkgPCB0aGlzLl9pdGVtQ291bnQ7IGstLSkgaWYgKHRoaXMuX2xydUxpc3Rba10pIHtcbiAgICB2YXIgaGl0ID0gdGhpcy5fbHJ1TGlzdFtrXVxuICAgIGtleXNbaSsrXSA9IGhpdC5rZXlcbiAgfVxuICByZXR1cm4ga2V5c1xufVxuXG5MUlVDYWNoZS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KHRoaXMuX2l0ZW1Db3VudClcbiAgdmFyIGkgPSAwXG4gIGZvciAodmFyIGsgPSB0aGlzLl9tcnUgLSAxOyBrID49IDAgJiYgaSA8IHRoaXMuX2l0ZW1Db3VudDsgay0tKSBpZiAodGhpcy5fbHJ1TGlzdFtrXSkge1xuICAgIHZhciBoaXQgPSB0aGlzLl9scnVMaXN0W2tdXG4gICAgdmFsdWVzW2krK10gPSBoaXQudmFsdWVcbiAgfVxuICByZXR1cm4gdmFsdWVzXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2Rpc3Bvc2UgJiYgdGhpcy5fY2FjaGUpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2NhY2hlKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlKGssIHRoaXMuX2NhY2hlW2tdLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKSAvLyBoYXNoIG9mIGl0ZW1zIGJ5IGtleVxuICB0aGlzLl9scnVMaXN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKSAvLyBsaXN0IG9mIGl0ZW1zIGluIG9yZGVyIG9mIHVzZSByZWNlbmN5XG4gIHRoaXMuX21ydSA9IDAgLy8gbW9zdCByZWNlbnRseSB1c2VkXG4gIHRoaXMuX2xydSA9IDAgLy8gbGVhc3QgcmVjZW50bHkgdXNlZFxuICB0aGlzLl9sZW5ndGggPSAwIC8vIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICB0aGlzLl9pdGVtQ291bnQgPSAwXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5kdW1wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyID0gW11cbiAgdmFyIGkgPSAwXG5cbiAgZm9yICh2YXIgayA9IHRoaXMuX21ydSAtIDE7IGsgPj0gMCAmJiBpIDwgdGhpcy5faXRlbUNvdW50OyBrLS0pIGlmICh0aGlzLl9scnVMaXN0W2tdKSB7XG4gICAgdmFyIGhpdCA9IHRoaXMuX2xydUxpc3Rba11cbiAgICBpZiAoIWlzU3RhbGUodGhpcywgaGl0KSkge1xuICAgICAgLy9EbyBub3Qgc3RvcmUgc3RhbGVkIGhpdHNcbiAgICAgICsraVxuICAgICAgYXJyLnB1c2goe1xuICAgICAgICBrOiBoaXQua2V5LFxuICAgICAgICB2OiBoaXQudmFsdWUsXG4gICAgICAgIGU6IGhpdC5ub3cgKyAoaGl0Lm1heEFnZSB8fCAwKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vYXJyIGhhcyB0aGUgbW9zdCByZWFkIGZpcnN0XG4gIHJldHVybiBhcnJcbn1cblxuTFJVQ2FjaGUucHJvdG90eXBlLmR1bXBMcnUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9scnVMaXN0XG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgbWF4QWdlKSB7XG4gIG1heEFnZSA9IG1heEFnZSB8fCB0aGlzLl9tYXhBZ2VcbiAgdHlwZUNoZWNrS2V5KGtleSlcblxuICB2YXIgbm93ID0gbWF4QWdlID8gRGF0ZS5ub3coKSA6IDBcbiAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aENhbGN1bGF0b3IodmFsdWUpXG5cbiAgaWYgKGhPUCh0aGlzLl9jYWNoZSwga2V5KSkge1xuICAgIGlmIChsZW4gPiB0aGlzLl9tYXgpIHtcbiAgICAgIGRlbCh0aGlzLCB0aGlzLl9jYWNoZVtrZXldKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIGRpc3Bvc2Ugb2YgdGhlIG9sZCBvbmUgYmVmb3JlIG92ZXJ3cml0aW5nXG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2UpXG4gICAgICB0aGlzLl9kaXNwb3NlKGtleSwgdGhpcy5fY2FjaGVba2V5XS52YWx1ZSlcblxuICAgIHRoaXMuX2NhY2hlW2tleV0ubm93ID0gbm93XG4gICAgdGhpcy5fY2FjaGVba2V5XS5tYXhBZ2UgPSBtYXhBZ2VcbiAgICB0aGlzLl9jYWNoZVtrZXldLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLl9sZW5ndGggKz0gKGxlbiAtIHRoaXMuX2NhY2hlW2tleV0ubGVuZ3RoKVxuICAgIHRoaXMuX2NhY2hlW2tleV0ubGVuZ3RoID0gbGVuXG4gICAgdGhpcy5nZXQoa2V5KVxuXG4gICAgaWYgKHRoaXMuX2xlbmd0aCA+IHRoaXMuX21heClcbiAgICAgIHRyaW0odGhpcylcblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YXIgaGl0ID0gbmV3IEVudHJ5KGtleSwgdmFsdWUsIHRoaXMuX21ydSsrLCBsZW4sIG5vdywgbWF4QWdlKVxuXG4gIC8vIG92ZXJzaXplZCBvYmplY3RzIGZhbGwgb3V0IG9mIGNhY2hlIGF1dG9tYXRpY2FsbHkuXG4gIGlmIChoaXQubGVuZ3RoID4gdGhpcy5fbWF4KSB7XG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2UpIHRoaXMuX2Rpc3Bvc2Uoa2V5LCB2YWx1ZSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHRoaXMuX2xlbmd0aCArPSBoaXQubGVuZ3RoXG4gIHRoaXMuX2xydUxpc3RbaGl0Lmx1XSA9IHRoaXMuX2NhY2hlW2tleV0gPSBoaXRcbiAgdGhpcy5faXRlbUNvdW50ICsrXG5cbiAgaWYgKHRoaXMuX2xlbmd0aCA+IHRoaXMuX21heClcbiAgICB0cmltKHRoaXMpXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuTFJVQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdHlwZUNoZWNrS2V5KGtleSlcbiAgaWYgKCFoT1AodGhpcy5fY2FjaGUsIGtleSkpIHJldHVybiBmYWxzZVxuICB2YXIgaGl0ID0gdGhpcy5fY2FjaGVba2V5XVxuICBpZiAoaXNTdGFsZSh0aGlzLCBoaXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuTFJVQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdHlwZUNoZWNrS2V5KGtleSlcbiAgcmV0dXJuIGdldCh0aGlzLCBrZXksIHRydWUpXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGtleSkge1xuICB0eXBlQ2hlY2tLZXkoa2V5KVxuICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoaXQgPSB0aGlzLl9scnVMaXN0W3RoaXMuX2xydV1cbiAgZGVsKHRoaXMsIGhpdClcbiAgcmV0dXJuIGhpdCB8fCBudWxsXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHR5cGVDaGVja0tleShrZXkpXG4gIGRlbCh0aGlzLCB0aGlzLl9jYWNoZVtrZXldKVxufVxuXG5MUlVDYWNoZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgLy9yZXNldCB0aGUgY2FjaGVcbiAgdGhpcy5yZXNldCgpO1xuXG4gIHZhciBub3cgPSBEYXRlLm5vdygpXG4gIC8vQSBwcmV2aW91cyBzZXJpYWxpemVkIGNhY2hlIGhhcyB0aGUgbW9zdCByZWNlbnQgaXRlbXMgZmlyc3RcbiAgZm9yICh2YXIgbCA9IGFyci5sZW5ndGggLSAxOyBsID49IDA7IGwtLSApIHtcbiAgICB2YXIgaGl0ID0gYXJyW2xdXG4gICAgdHlwZUNoZWNrS2V5KGhpdC5rKVxuICAgIHZhciBleHBpcmVzQXQgPSBoaXQuZSB8fCAwXG4gICAgaWYgKGV4cGlyZXNBdCA9PT0gMCkge1xuICAgICAgLy90aGUgaXRlbSB3YXMgY3JlYXRlZCB3aXRob3V0IGV4cGlyYXRpb24gaW4gYSBub24gYWdlZCBjYWNoZVxuICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4QWdlID0gZXhwaXJlc0F0IC0gbm93XG4gICAgICAvL2RvbnQgYWRkIGFscmVhZHkgZXhwaXJlZCBpdGVtc1xuICAgICAgaWYgKG1heEFnZSA+IDApIHRoaXMuc2V0KGhpdC5rLCBoaXQudiwgbWF4QWdlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQgKHNlbGYsIGtleSwgZG9Vc2UpIHtcbiAgdHlwZUNoZWNrS2V5KGtleSlcbiAgdmFyIGhpdCA9IHNlbGYuX2NhY2hlW2tleV1cbiAgaWYgKGhpdCkge1xuICAgIGlmIChpc1N0YWxlKHNlbGYsIGhpdCkpIHtcbiAgICAgIGRlbChzZWxmLCBoaXQpXG4gICAgICBpZiAoIXNlbGYuX2FsbG93U3RhbGUpIGhpdCA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9Vc2UpIHVzZShzZWxmLCBoaXQpXG4gICAgfVxuICAgIGlmIChoaXQpIGhpdCA9IGhpdC52YWx1ZVxuICB9XG4gIHJldHVybiBoaXRcbn1cblxuZnVuY3Rpb24gaXNTdGFsZShzZWxmLCBoaXQpIHtcbiAgaWYgKCFoaXQgfHwgKCFoaXQubWF4QWdlICYmICFzZWxmLl9tYXhBZ2UpKSByZXR1cm4gZmFsc2VcbiAgdmFyIHN0YWxlID0gZmFsc2U7XG4gIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIGhpdC5ub3dcbiAgaWYgKGhpdC5tYXhBZ2UpIHtcbiAgICBzdGFsZSA9IGRpZmYgPiBoaXQubWF4QWdlXG4gIH0gZWxzZSB7XG4gICAgc3RhbGUgPSBzZWxmLl9tYXhBZ2UgJiYgKGRpZmYgPiBzZWxmLl9tYXhBZ2UpXG4gIH1cbiAgcmV0dXJuIHN0YWxlO1xufVxuXG5mdW5jdGlvbiB1c2UgKHNlbGYsIGhpdCkge1xuICBzaGlmdExVKHNlbGYsIGhpdClcbiAgaGl0Lmx1ID0gc2VsZi5fbXJ1ICsrXG4gIHNlbGYuX2xydUxpc3RbaGl0Lmx1XSA9IGhpdFxufVxuXG5mdW5jdGlvbiB0cmltIChzZWxmKSB7XG4gIHdoaWxlIChzZWxmLl9scnUgPCBzZWxmLl9tcnUgJiYgc2VsZi5fbGVuZ3RoID4gc2VsZi5fbWF4KVxuICAgIGRlbChzZWxmLCBzZWxmLl9scnVMaXN0W3NlbGYuX2xydV0pXG59XG5cbmZ1bmN0aW9uIHNoaWZ0TFUgKHNlbGYsIGhpdCkge1xuICBkZWxldGUgc2VsZi5fbHJ1TGlzdFsgaGl0Lmx1IF1cbiAgd2hpbGUgKHNlbGYuX2xydSA8IHNlbGYuX21ydSAmJiAhc2VsZi5fbHJ1TGlzdFtzZWxmLl9scnVdKSBzZWxmLl9scnUgKytcbn1cblxuZnVuY3Rpb24gZGVsIChzZWxmLCBoaXQpIHtcbiAgaWYgKGhpdCkge1xuICAgIGlmIChzZWxmLl9kaXNwb3NlKSBzZWxmLl9kaXNwb3NlKGhpdC5rZXksIGhpdC52YWx1ZSlcbiAgICBzZWxmLl9sZW5ndGggLT0gaGl0Lmxlbmd0aFxuICAgIHNlbGYuX2l0ZW1Db3VudCAtLVxuICAgIGRlbGV0ZSBzZWxmLl9jYWNoZVsgaGl0LmtleSBdXG4gICAgc2hpZnRMVShzZWxmLCBoaXQpXG4gIH1cbn1cblxuLy8gY2xhc3N5LCBzaW5jZSBWOCBwcmVmZXJzIHByZWRpY3RhYmxlIG9iamVjdHMuXG5mdW5jdGlvbiBFbnRyeSAoa2V5LCB2YWx1ZSwgbHUsIGxlbmd0aCwgbm93LCBtYXhBZ2UpIHtcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMubHUgPSBsdVxuICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICB0aGlzLm5vdyA9IG5vd1xuICBpZiAobWF4QWdlKSB0aGlzLm1heEFnZSA9IG1heEFnZVxufVxuXG59KSgpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNpZ211bmRcbmZ1bmN0aW9uIHNpZ211bmQgKHN1YmplY3QsIG1heFNlc3Npb25zKSB7XG4gICAgbWF4U2Vzc2lvbnMgPSBtYXhTZXNzaW9ucyB8fCAxMDtcbiAgICB2YXIgbm90ZXMgPSBbXTtcbiAgICB2YXIgYW5hbHlzaXMgPSAnJztcbiAgICB2YXIgUkUgPSBSZWdFeHA7XG5cbiAgICBmdW5jdGlvbiBwc3ljaG9BbmFseXplIChzdWJqZWN0LCBzZXNzaW9uKSB7XG4gICAgICAgIGlmIChzZXNzaW9uID4gbWF4U2Vzc2lvbnMpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIHN1YmplY3QgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgIHR5cGVvZiBzdWJqZWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdWJqZWN0ICE9PSAnb2JqZWN0JyB8fCAhc3ViamVjdCB8fFxuICAgICAgICAgICAgKHN1YmplY3QgaW5zdGFuY2VvZiBSRSkpIHtcbiAgICAgICAgICAgIGFuYWx5c2lzICs9IHN1YmplY3Q7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm90ZXMuaW5kZXhPZihzdWJqZWN0KSAhPT0gLTEgfHwgc2Vzc2lvbiA9PT0gbWF4U2Vzc2lvbnMpIHJldHVybjtcblxuICAgICAgICBub3Rlcy5wdXNoKHN1YmplY3QpO1xuICAgICAgICBhbmFseXNpcyArPSAneyc7XG4gICAgICAgIE9iamVjdC5rZXlzKHN1YmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGlzc3VlLCBfLCBfXykge1xuICAgICAgICAgICAgLy8gcHNldWRvLXByaXZhdGUgdmFsdWVzLiAgc2tpcCB0aG9zZS5cbiAgICAgICAgICAgIGlmIChpc3N1ZS5jaGFyQXQoMCkgPT09ICdfJykgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHRvID0gdHlwZW9mIHN1YmplY3RbaXNzdWVdO1xuICAgICAgICAgICAgaWYgKHRvID09PSAnZnVuY3Rpb24nIHx8IHRvID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICAgICAgYW5hbHlzaXMgKz0gaXNzdWU7XG4gICAgICAgICAgICBwc3ljaG9BbmFseXplKHN1YmplY3RbaXNzdWVdLCBzZXNzaW9uICsgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwc3ljaG9BbmFseXplKHN1YmplY3QsIDApO1xuICAgIHJldHVybiBhbmFseXNpcztcbn1cblxuLy8gdmltOiBzZXQgc29mdHRhYnN0b3A9NCBzaGlmdHdpZHRoPTQ6XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHJlcXVpcmUoJ2FuZ3VsYXInKTtcbnJlcXVpcmUoJ2lvbmljJyk7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xuLy8gcmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbi8vIHJlcXVpcmUoJ2FuZ3VsYXItbW9kdWxlLXNhbml0aXplJyk7XG4vLyByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9faW5kZXgnKTtcbi8vIHJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XG4vLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvX2luZGV4Jyk7XG5cbi8vIGNyZWF0ZSBhbmQgYm9vdHN0cmFwIGFwcGxpY2F0aW9uXG5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHZhciByZXF1aXJlcyA9IFtcbiAgICAnaW9uaWMnLFxuICAgIC8vICdhcHAuY29udHJvbGxlcnMnXG4gICAgLy8gJ3VpLnJvdXRlcicsXG4gICAgLy8gJ3RlbXBsYXRlcycsXG4gICAgLy8gJ25nU2FuaXRpemUnLFxuICAgIC8vICdhcHAuc2VydmljZXMnLFxuICAgIC8vICdhcHAuY29tcG9uZW50cydcbiAgXTtcblxuICAvLyBtb3VudCBvbiB3aW5kb3cgZm9yIHRlc3RpbmdcbiAgd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCByZXF1aXJlcyk7XG5cbiAgLy8gYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzLmRldmVsb3BtZW50JykpO1xuXG4gIC8vIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcblxuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHAnXSk7XG5cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBPblJ1bigkaW9uaWNQbGF0Zm9ybSkge1xuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuOyIsIi8qIVxuICogQ29weXJpZ2h0IDIwMTUgRHJpZnR5IENvLlxuICogaHR0cDovL2RyaWZ0eS5jb20vXG4gKlxuICogSW9uaWMsIHYxLjIuNFxuICogQSBwb3dlcmZ1bCBIVE1MNSBtb2JpbGUgYXBwIGZyYW1ld29yay5cbiAqIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vXG4gKlxuICogQnkgQG1heGx5bmNoLCBAYmVuanNwZXJyeSwgQGFkYW1kYnJhZGxleSA8M1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gUGxlYXNlIHNlZSBMSUNFTlNFIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqL1xuXG4hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0IT09ITE/WC5hZGRFdmVudExpc3RlbmVyKGUsSltlXSxuKTpYLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxKW2VdKX1mdW5jdGlvbiB0KGUpe3ZhciB0PXcoZS50YXJnZXQpLGk9VCh0KTtpZihpb25pYy50YXAucmVxdWlyZXNOYXRpdmVDbGljayhpKXx8JClyZXR1cm4hMTt2YXIgcj1pb25pYy50YXAucG9pbnRlckNvb3JkKGUpO24oXCJjbGlja1wiLGksci54LHIueSksaChpKX1mdW5jdGlvbiBuKGUsdCxuLGkpe3ZhciByPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7ci5pbml0TW91c2VFdmVudChlLCEwLCEwLHdpbmRvdywxLDAsMCxuLGksITEsITEsITEsITEsMCxudWxsKSxyLmlzSW9uaWNUYXA9ITAsdC5kaXNwYXRjaEV2ZW50KHIpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuXCJzdWJtaXRcIj09ZS50YXJnZXQudHlwZSYmMD09PWUuZGV0YWlsP251bGw6aW9uaWMuc2Nyb2xsLmlzU2Nyb2xsaW5nJiZpb25pYy50YXAuY29udGFpbnNPcklzVGV4dElucHV0KGUudGFyZ2V0KXx8IWUuaXNJb25pY1RhcCYmIWlvbmljLnRhcC5yZXF1aXJlc05hdGl2ZUNsaWNrKGUudGFyZ2V0KT8oZS5zdG9wUHJvcGFnYXRpb24oKSxpb25pYy50YXAuaXNMYWJlbFdpdGhUZXh0SW5wdXQoZS50YXJnZXQpfHxlLnByZXZlbnREZWZhdWx0KCksITEpOnZvaWQgMH1mdW5jdGlvbiByKHQpe3JldHVybiB0LmlzSW9uaWNUYXB8fHAodCk/bnVsbDpCPyh0LnN0b3BQcm9wYWdhdGlvbigpLGlvbmljLlBsYXRmb3JtLmlzRWRnZSgpfHxpb25pYy50YXAuaXNUZXh0SW5wdXQodC50YXJnZXQpJiZLPT09dC50YXJnZXR8fGIodC50YXJnZXQudGFnTmFtZSl8fGlvbmljLnRhcC5pc1ZpZGVvKHQudGFyZ2V0KXx8dC5wcmV2ZW50RGVmYXVsdCgpLCExKTooJD0hMSxxPWlvbmljLnRhcC5wb2ludGVyQ29vcmQodCksZShcIm1vdXNlbW92ZVwiKSx2b2lkIGlvbmljLmFjdGl2YXRvci5zdGFydCh0KSl9ZnVuY3Rpb24gYShuKXtyZXR1cm4gQj8obi5zdG9wUHJvcGFnYXRpb24oKSxuLnByZXZlbnREZWZhdWx0KCksITEpOnAobil8fGIobi50YXJnZXQudGFnTmFtZSk/ITE6KF8obil8fHQobiksZShcIm1vdXNlbW92ZVwiLCExKSxpb25pYy5hY3RpdmF0b3IuZW5kKCksdm9pZCgkPSExKSl9ZnVuY3Rpb24gbyh0KXtyZXR1cm4gXyh0KT8oZShcIm1vdXNlbW92ZVwiLCExKSxpb25pYy5hY3RpdmF0b3IuZW5kKCksJD0hMCwhMSk6dm9pZCAwfWZ1bmN0aW9uIHModCl7aWYoIXAodCkmJigkPSExLHUoKSxxPWlvbmljLnRhcC5wb2ludGVyQ29vcmQodCksZShqKSxpb25pYy5hY3RpdmF0b3Iuc3RhcnQodCksaW9uaWMuUGxhdGZvcm0uaXNJT1MoKSYmaW9uaWMudGFwLmlzTGFiZWxXaXRoVGV4dElucHV0KHQudGFyZ2V0KSkpe3ZhciBuPVQodyh0LnRhcmdldCkpO24hPT1GJiZ0LnByZXZlbnREZWZhdWx0KCl9fWZ1bmN0aW9uIGwoZSl7cChlKXx8KHUoKSxfKGUpfHwodChlKSxiKGUudGFyZ2V0LnRhZ05hbWUpJiZlLnByZXZlbnREZWZhdWx0KCkpLEs9ZS50YXJnZXQsZCgpKX1mdW5jdGlvbiBjKHQpe3JldHVybiBfKHQpPygkPSEwLGUoaiwhMSksaW9uaWMuYWN0aXZhdG9yLmVuZCgpLCExKTp2b2lkIDB9ZnVuY3Rpb24gZCgpe2UoaiwhMSksaW9uaWMuYWN0aXZhdG9yLmVuZCgpLCQ9ITF9ZnVuY3Rpb24gdSgpe0I9ITAsY2xlYXJUaW1lb3V0KFcpLFc9c2V0VGltZW91dChmdW5jdGlvbigpe0I9ITF9LDYwMCl9ZnVuY3Rpb24gcChlKXtyZXR1cm4gZS5pc1RhcEhhbmRsZWQ/ITA6KGUuaXNUYXBIYW5kbGVkPSEwLGlvbmljLnRhcC5pc0VsZW1lbnRUYXBEaXNhYmxlZChlLnRhcmdldCk/ITA6aW9uaWMuc2Nyb2xsLmlzU2Nyb2xsaW5nJiZpb25pYy50YXAuY29udGFpbnNPcklzVGV4dElucHV0KGUudGFyZ2V0KT8oZS5wcmV2ZW50RGVmYXVsdCgpLCEwKTp2b2lkIDApfWZ1bmN0aW9uIGgoZSl7VT1udWxsO3ZhciB0PSExO1wiU0VMRUNUXCI9PWUudGFnTmFtZT8obihcIm1vdXNlZG93blwiLGUsMCwwKSxlLmZvY3VzJiZlLmZvY3VzKCksdD0hMCk6digpPT09ZT90PSEwOi9eKGlucHV0fHRleHRhcmVhfGlvbi1sYWJlbCkkL2kudGVzdChlLnRhZ05hbWUpfHxlLmlzQ29udGVudEVkaXRhYmxlPyh0PSEwLGUuZm9jdXMmJmUuZm9jdXMoKSxlLnZhbHVlPWUudmFsdWUsQiYmKFU9ZSkpOmYoKSx0JiYodihlKSxpb25pYy50cmlnZ2VyKFwiaW9uaWMuZm9jdXNpblwiLHt0YXJnZXQ6ZX0sITApKX1mdW5jdGlvbiBmKCl7dmFyIGU9digpO2UmJigvXihpbnB1dHx0ZXh0YXJlYXxzZWxlY3QpJC9pLnRlc3QoZS50YWdOYW1lKXx8ZS5pc0NvbnRlbnRFZGl0YWJsZSkmJmUuYmx1cigpLHYobnVsbCl9ZnVuY3Rpb24gbShlKXtCJiZpb25pYy50YXAuaXNUZXh0SW5wdXQodigpKSYmaW9uaWMudGFwLmlzVGV4dElucHV0KFUpJiZVIT09ZS50YXJnZXQmJihVLmZvY3VzKCksVT1udWxsKSxpb25pYy5zY3JvbGwuaXNTY3JvbGxpbmc9ITF9ZnVuY3Rpb24gZygpe3YobnVsbCl9ZnVuY3Rpb24gdihlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCYmKEY9ZSksRnx8ZG9jdW1lbnQuYWN0aXZlRWxlbWVudH1mdW5jdGlvbiBfKGUpe2lmKCFlfHwxIT09ZS50YXJnZXQubm9kZVR5cGV8fCFxfHwwPT09cS54JiYwPT09cS55KXJldHVybiExO3ZhciB0PWlvbmljLnRhcC5wb2ludGVyQ29vcmQoZSksbj0hKCFlLnRhcmdldC5jbGFzc0xpc3R8fCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnN8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyksaT1uJiZlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b25cIik/UTpaO3JldHVybiBNYXRoLmFicyhxLngtdC54KT5pfHxNYXRoLmFicyhxLnktdC55KT5pfWZ1bmN0aW9uIHcoZSx0KXtmb3IodmFyIG49ZSxpPTA7Nj5pJiZuO2krKyl7aWYoXCJMQUJFTFwiPT09bi50YWdOYW1lKXJldHVybiBuO249bi5wYXJlbnRFbGVtZW50fXJldHVybiB0IT09ITE/ZTp2b2lkIDB9ZnVuY3Rpb24gVChlKXtpZihlJiZcIkxBQkVMXCI9PT1lLnRhZ05hbWUpe2lmKGUuY29udHJvbClyZXR1cm4gZS5jb250cm9sO2lmKGUucXVlcnlTZWxlY3Rvcil7dmFyIHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0XCIpO2lmKHQpcmV0dXJuIHR9fXJldHVybiBlfWZ1bmN0aW9uIGIoZSl7cmV0dXJuL14oc2VsZWN0fG9wdGlvbikkL2kudGVzdChlKX1mdW5jdGlvbiBTKCl7aW9uaWMua2V5Ym9hcmQuaXNJbml0aWFsaXplZHx8KFYoKT8od2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJuYXRpdmUua2V5Ym9hcmRzaG93XCIscGUpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibmF0aXZlLmtleWJvYXJkaGlkZVwiLHgpKTpkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLHgpLGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImlvbmljLmZvY3VzaW5cIix1ZSksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLHVlKSx3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ/ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixTKTpkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLFMpLGlvbmljLmtleWJvYXJkLmlzSW5pdGlhbGl6ZWQ9ITApfWZ1bmN0aW9uIHkoZSl7Y2xlYXJUaW1lb3V0KHJlKSwoIWlvbmljLmtleWJvYXJkLmlzT3Blbnx8aW9uaWMua2V5Ym9hcmQuaXNDbG9zaW5nKSYmKGlvbmljLmtleWJvYXJkLmlzT3BlbmluZz0hMCxpb25pYy5rZXlib2FyZC5pc0Nsb3Npbmc9ITEpLGlvbmljLmtleWJvYXJkLmhlaWdodD1lLmtleWJvYXJkSGVpZ2h0LGxlP0MoTywhMCk6QyhJLCEwKX1mdW5jdGlvbiBFKGUpe3JldHVybiBjbGVhclRpbWVvdXQocmUpLGUudGFyZ2V0JiYhZS50YXJnZXQucmVhZE9ubHkmJmlvbmljLnRhcC5pc0tleWJvYXJkRWxlbWVudChlLnRhcmdldCkmJihuZT1pb25pYy5Eb21VdGlsLmdldFBhcmVudFdpdGhDbGFzcyhlLnRhcmdldCxkZSkpPyhlZT1lLnRhcmdldCxuZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVyZmxvdy1zY3JvbGxcIil8fChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcD0wLG5lLnNjcm9sbFRvcD0wLGlvbmljLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wPTAsbmUuc2Nyb2xsVG9wPTB9KSx3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlck1vdmVcIixMLCExKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsTCwhMSkpLCghaW9uaWMua2V5Ym9hcmQuaXNPcGVufHxpb25pYy5rZXlib2FyZC5pc0Nsb3NpbmcpJiYoaW9uaWMua2V5Ym9hcmQuaXNPcGVuaW5nPSEwLGlvbmljLmtleWJvYXJkLmlzQ2xvc2luZz0hMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixNLCExKSx2b2lkKGlvbmljLmtleWJvYXJkLmlzT3Blbnx8VigpP2lvbmljLmtleWJvYXJkLmlzT3BlbiYmSSgpOkMoSSwhMCkpKTooZWUmJih0ZT1lZSksdm9pZChlZT1udWxsKSl9ZnVuY3Rpb24geCgpe2NsZWFyVGltZW91dChyZSksKGlvbmljLmtleWJvYXJkLmlzT3Blbnx8aW9uaWMua2V5Ym9hcmQuaXNPcGVuaW5nKSYmKGlvbmljLmtleWJvYXJkLmlzQ2xvc2luZz0hMCxpb25pYy5rZXlib2FyZC5pc09wZW5pbmc9ITEpLHJlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtpb25pYy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtsZT9DKGZ1bmN0aW9uKCl7TygpLFAoKX0sITEpOkMoUCwhMSl9KX0sNTApfWZ1bmN0aW9uIEQoKXtpb25pYy5rZXlib2FyZC5pc0xhbmRzY2FwZT0haW9uaWMua2V5Ym9hcmQuaXNMYW5kc2NhcGUsaW9uaWMuUGxhdGZvcm0uaXNJT1MoKSYmTygpLGlvbmljLlBsYXRmb3JtLmlzQW5kcm9pZCgpJiYoaW9uaWMua2V5Ym9hcmQuaXNPcGVuJiZWKCk/bGU9ITA6QyhPLCExKSl9ZnVuY3Rpb24gTShlKXtpb25pYy5zY3JvbGwuaXNTY3JvbGxpbmcmJkwoZSl9ZnVuY3Rpb24gTChlKXtcIlRFWFRBUkVBXCIhPT1lLnRhcmdldC50YWdOYW1lJiZlLnByZXZlbnREZWZhdWx0KCl9ZnVuY3Rpb24gQyhlLHQpe2NsZWFySW50ZXJ2YWwoaWUpO3ZhciBuLGk9MCxyPUcoKSxhPXI7cmV0dXJuIG49aW9uaWMuUGxhdGZvcm0uaXNBbmRyb2lkKCkmJmlvbmljLlBsYXRmb3JtLnZlcnNpb24oKTw0LjQ/MzA6aW9uaWMuUGxhdGZvcm0uaXNBbmRyb2lkKCk/MTA6MSxpZT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2E9RygpLCghKCsraTxuKXx8KE4oYSl8fHooYSkpJiZpb25pYy5rZXlib2FyZC5oZWlnaHQpJiYoVigpfHwoaW9uaWMua2V5Ym9hcmQuaGVpZ2h0PU1hdGguYWJzKHItd2luZG93LmlubmVySGVpZ2h0KSksaW9uaWMua2V5Ym9hcmQuaXNPcGVuPXQsY2xlYXJJbnRlcnZhbChpZSksZSgpKX0sNTApLG59ZnVuY3Rpb24gUCgpe2NsZWFyVGltZW91dChyZSksaW9uaWMua2V5Ym9hcmQuaXNPcGVuPSExLGlvbmljLmtleWJvYXJkLmlzQ2xvc2luZz0hMSwoZWV8fHRlKSYmaW9uaWMudHJpZ2dlcihcInJlc2V0U2Nyb2xsVmlld1wiLHt0YXJnZXQ6ZWV8fHRlfSwhMCksaW9uaWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNlKX0pLHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZD9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyTW92ZVwiLEwpOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixMKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLE0pLGlvbmljLlBsYXRmb3JtLmlzQW5kcm9pZCgpJiYoVigpJiZjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuY2xvc2UoKSxlZSYmZWUuYmx1cigpKSxlZT1udWxsLHRlPW51bGx9ZnVuY3Rpb24gSSgpe2lvbmljLmtleWJvYXJkLmlzT3Blbj0hMCxpb25pYy5rZXlib2FyZC5pc09wZW5pbmc9ITE7dmFyIGU9e2tleWJvYXJkSGVpZ2h0OmsoKSx2aWV3cG9ydEhlaWdodDphZX07aWYoZWUpe2UudGFyZ2V0PWVlO3ZhciB0PWVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2UuZWxlbWVudFRvcD1NYXRoLnJvdW5kKHQudG9wKSxlLmVsZW1lbnRCb3R0b209TWF0aC5yb3VuZCh0LmJvdHRvbSksZS53aW5kb3dIZWlnaHQ9ZS52aWV3cG9ydEhlaWdodC1lLmtleWJvYXJkSGVpZ2h0LGUuaXNFbGVtZW50VW5kZXJLZXlib2FyZD1lLmVsZW1lbnRCb3R0b20+ZS53aW5kb3dIZWlnaHQsaW9uaWMudHJpZ2dlcihcInNjcm9sbENoaWxkSW50b1ZpZXdcIixlLCEwKX1yZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjZSl9LDQwMCksZX1mdW5jdGlvbiBrKCl7aWYoaW9uaWMua2V5Ym9hcmQuaGVpZ2h0KXJldHVybiBpb25pYy5rZXlib2FyZC5oZWlnaHQ7aWYoaW9uaWMuUGxhdGZvcm0uaXNBbmRyb2lkKCkpe2lmKGlvbmljLlBsYXRmb3JtLmlzRnVsbFNjcmVlbilyZXR1cm4gMjc1O3ZhciBlPXdpbmRvdy5pbm5lckhlaWdodDtyZXR1cm4gYWU+ZT9hZS1lOjB9cmV0dXJuIGlvbmljLlBsYXRmb3JtLmlzSU9TKCk/aW9uaWMua2V5Ym9hcmQuaXNMYW5kc2NhcGU/MjA2OmlvbmljLlBsYXRmb3JtLmlzV2ViVmlldygpPzI2MDoyMTY6Mjc1fWZ1bmN0aW9uIE4oZSl7cmV0dXJuISEoIWlvbmljLmtleWJvYXJkLmlzTGFuZHNjYXBlJiZvZSYmTWF0aC5hYnMob2UtZSk8Mil9ZnVuY3Rpb24geihlKXtyZXR1cm4hIShpb25pYy5rZXlib2FyZC5pc0xhbmRzY2FwZSYmc2UmJk1hdGguYWJzKHNlLWUpPDIpfWZ1bmN0aW9uIE8oKXtsZT0hMSxhZT1HKCksaW9uaWMua2V5Ym9hcmQuaXNMYW5kc2NhcGUmJiFzZT9zZT1hZTppb25pYy5rZXlib2FyZC5pc0xhbmRzY2FwZXx8b2V8fChvZT1hZSksZWUmJmlvbmljLnRyaWdnZXIoXCJyZXNldFNjcm9sbFZpZXdcIix7dGFyZ2V0OmVlfSwhMCksaW9uaWMua2V5Ym9hcmQuaXNPcGVuJiZpb25pYy50YXAuaXNUZXh0SW5wdXQoZWUpJiZJKCl9ZnVuY3Rpb24gQSgpe3ZhciBlPUcoKTtlL3dpbmRvdy5pbm5lcldpZHRoPDEmJihpb25pYy5rZXlib2FyZC5pc0xhbmRzY2FwZT0hMCksYWU9ZSxpb25pYy5rZXlib2FyZC5pc0xhbmRzY2FwZSYmIXNlP3NlPWFlOmlvbmljLmtleWJvYXJkLmlzTGFuZHNjYXBlfHxvZXx8KG9lPWFlKX1mdW5jdGlvbiBHKCl7dmFyIGU9d2luZG93LmlubmVySGVpZ2h0O3JldHVybiBpb25pYy5QbGF0Zm9ybS5pc0FuZHJvaWQoKSYmaW9uaWMuUGxhdGZvcm0uaXNGdWxsU2NyZWVufHwhaW9uaWMua2V5Ym9hcmQuaXNPcGVuJiYhaW9uaWMua2V5Ym9hcmQuaXNPcGVuaW5nfHxpb25pYy5rZXlib2FyZC5pc0Nsb3Npbmc/ZTplK2soKX1mdW5jdGlvbiBWKCl7cmV0dXJuISEod2luZG93LmNvcmRvdmEmJmNvcmRvdmEucGx1Z2lucyYmY29yZG92YS5wbHVnaW5zLktleWJvYXJkKX1mdW5jdGlvbiBSKCl7dmFyIGU7Zm9yKGU9MDtlPGRvY3VtZW50LmhlYWQuY2hpbGRyZW4ubGVuZ3RoO2UrKylpZihcInZpZXdwb3J0XCI9PWRvY3VtZW50LmhlYWQuY2hpbGRyZW5bZV0ubmFtZSl7aGU9ZG9jdW1lbnQuaGVhZC5jaGlsZHJlbltlXTticmVha31pZihoZSl7dmFyIHQsbj1oZS5jb250ZW50LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLFwiXCIpLnNwbGl0KFwiLFwiKTtmb3IoZT0wO2U8bi5sZW5ndGg7ZSsrKW5bZV0mJih0PW5bZV0uc3BsaXQoXCI9XCIpLGZlW3RbMF1dPXQubGVuZ3RoPjE/dFsxXTpcIl9cIik7SCgpfX1mdW5jdGlvbiBIKCl7dmFyIGU9ZmUud2lkdGgsdD1mZS5oZWlnaHQsbj1pb25pYy5QbGF0Zm9ybSxpPW4udmVyc2lvbigpLHI9XCJkZXZpY2Utd2lkdGhcIixhPVwiZGV2aWNlLWhlaWdodFwiLG89aW9uaWMudmlld3BvcnQub3JpZW50YXRpb24oKTtkZWxldGUgZmUuaGVpZ2h0LGZlLndpZHRoPXIsbi5pc0lQYWQoKT9pPjc/ZGVsZXRlIGZlLndpZHRoOm4uaXNXZWJWaWV3KCk/OTA9PW8/ZmUuaGVpZ2h0PVwiMFwiOjc9PWkmJihmZS5oZWlnaHQ9YSk6Nz5pJiYoZmUuaGVpZ2h0PVwiMFwiKTpuLmlzSU9TKCkmJihuLmlzV2ViVmlldygpP2k+Nz9kZWxldGUgZmUud2lkdGg6Nz5pP3QmJihmZS5oZWlnaHQ9XCIwXCIpOjc9PWkmJihmZS5oZWlnaHQ9YSk6Nz5pJiZ0JiYoZmUuaGVpZ2h0PVwiMFwiKSksKGUhPT1mZS53aWR0aHx8dCE9PWZlLmhlaWdodCkmJlkoKX1mdW5jdGlvbiBZKCl7dmFyIGUsdD1bXTtmb3IoZSBpbiBmZSlmZVtlXSYmdC5wdXNoKGUrKFwiX1wiPT1mZVtlXT9cIlwiOlwiPVwiK2ZlW2VdKSk7aGUuY29udGVudD10LmpvaW4oXCIsIFwiKX13aW5kb3cuaW9uaWM9d2luZG93LmlvbmljfHx7fSx3aW5kb3cuaW9uaWMudmlld3M9e30sd2luZG93LmlvbmljLnZlcnNpb249XCIxLjIuNFwiLGZ1bmN0aW9uKGUpe2UuRGVsZWdhdGVTZXJ2aWNlPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4hMH1pZihlLmluZGV4T2YoXCIkZ2V0QnlIYW5kbGVcIik+LTEpdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kICckZ2V0QnlIYW5kbGUnIGlzIGltcGxpY2l0bHkgYWRkZWQgdG8gZWFjaCBkZWxlZ2F0ZSBzZXJ2aWNlLiBEbyBub3QgbGlzdCBpdCBhcyBhIG1ldGhvZC5cIik7cmV0dXJuW1wiJGxvZ1wiLGZ1bmN0aW9uKG4pe2Z1bmN0aW9uIGkoZSx0KXt0aGlzLl9pbnN0YW5jZXM9ZSx0aGlzLmhhbmRsZT10fWZ1bmN0aW9uIHIoKXt0aGlzLl9pbnN0YW5jZXM9W119ZnVuY3Rpb24gYShlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdCxpPXRoaXMuaGFuZGxlLHI9YXJndW1lbnRzLGE9MDtyZXR1cm4gdGhpcy5faW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24obil7aWYoKCFpfHxpPT1uLiQkZGVsZWdhdGVIYW5kbGUpJiZuLiQkZmlsdGVyRm4obikpe2ErKzt2YXIgbz1uW2VdLmFwcGx5KG4scik7MT09PWEmJih0PW8pfX0pLCFhJiZpP24ud2FybignRGVsZWdhdGUgZm9yIGhhbmRsZSBcIicraSsnXCIgY291bGQgbm90IGZpbmQgYSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgd2l0aCBkZWxlZ2F0ZS1oYW5kbGU9XCInK2krJ1wiISAnK2UrXCIoKSB3YXMgbm90IGNhbGxlZCFcXG5Qb3NzaWJsZSBjYXVzZTogSWYgeW91IGFyZSBjYWxsaW5nIFwiK2UrJygpIGltbWVkaWF0ZWx5LCBhbmQgeW91ciBlbGVtZW50IHdpdGggZGVsZWdhdGUtaGFuZGxlPVwiJytpKydcIiBpcyBhIGNoaWxkIG9mIHlvdXIgY29udHJvbGxlciwgdGhlbiB5b3VyIGVsZW1lbnQgbWF5IG5vdCBiZSBjb21waWxlZCB5ZXQuIFB1dCBhICR0aW1lb3V0IGFyb3VuZCB5b3VyIGNhbGwgdG8gJytlK1wiKCkgYW5kIHRyeSBhZ2Fpbi5cIik6dH19cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtpLnByb3RvdHlwZVtlXT1hKGUpfSksci5wcm90b3R5cGU9aS5wcm90b3R5cGUsci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2U9ZnVuY3Rpb24oZSxuLGkpe3ZhciByPXRoaXMuX2luc3RhbmNlcztyZXR1cm4gZS4kJGRlbGVnYXRlSGFuZGxlPW4sZS4kJGZpbHRlckZuPWl8fHQsci5wdXNoKGUpLGZ1bmN0aW9uKCl7dmFyIHQ9ci5pbmRleE9mKGUpOy0xIT09dCYmci5zcGxpY2UodCwxKX19LHIucHJvdG90eXBlLiRnZXRCeUhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGkodGhpcy5faW5zdGFuY2VzLGUpfSxuZXcgcn1dfX0od2luZG93LmlvbmljKSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaSgpe2E9ITA7Zm9yKHZhciBlPTA7ZTxyLmxlbmd0aDtlKyspbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocltlXSk7cj1bXSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsaSl9dmFyIHI9W10sYT1cImNvbXBsZXRlXCI9PT10LnJlYWR5U3RhdGV8fFwiaW50ZXJhY3RpdmVcIj09PXQucmVhZHlTdGF0ZTthfHx0LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsaSksZS5fckFGPWZ1bmN0aW9uKCl7cmV0dXJuIGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZS5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe2Uuc2V0VGltZW91dCh0LDE2KX19KCk7dmFyIG89ZS5jYW5jZWxBbmltYXRpb25GcmFtZXx8ZS53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8ZS5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8ZS53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7bi5Eb21VdGlsPXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuX3JBRih0KX0sY2FuY2VsQW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24oZSl7byhlKX0sYW5pbWF0aW9uRnJhbWVUaHJvdHRsZTpmdW5jdGlvbihlKXt2YXIgdCxpLHI7cmV0dXJuIGZ1bmN0aW9uKCl7dD1hcmd1bWVudHMscj10aGlzLGl8fChpPSEwLG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5hcHBseShyLHQpLGk9ITF9KSl9fSxjb250YWluczpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10O247KXtpZihuPT09ZSlyZXR1cm4hMDtuPW4ucGFyZW50Tm9kZX19LGdldFBvc2l0aW9uSW5QYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJue2xlZnQ6ZS5vZmZzZXRMZWZ0LHRvcDplLm9mZnNldFRvcH19LGdldE9mZnNldFRvcDpmdW5jdGlvbihlKXt2YXIgdD0wO2lmKGUub2Zmc2V0UGFyZW50KXtkbyB0Kz1lLm9mZnNldFRvcCxlPWUub2Zmc2V0UGFyZW50O3doaWxlKGUpO3JldHVybiB0fX0scmVhZHk6ZnVuY3Rpb24oZSl7YT9uLnJlcXVlc3RBbmltYXRpb25GcmFtZShlKTpyLnB1c2goZSl9LGdldFRleHRCb3VuZHM6ZnVuY3Rpb24obil7aWYodC5jcmVhdGVSYW5nZSl7dmFyIGk9dC5jcmVhdGVSYW5nZSgpO2lmKGkuc2VsZWN0Tm9kZUNvbnRlbnRzKG4pLGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KXt2YXIgcj1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKHIpe3ZhciBhPWUuc2Nyb2xsWCxvPWUuc2Nyb2xsWTtyZXR1cm57dG9wOnIudG9wK28sbGVmdDpyLmxlZnQrYSxyaWdodDpyLmxlZnQrYStyLndpZHRoLGJvdHRvbTpyLnRvcCtvK3IuaGVpZ2h0LHdpZHRoOnIud2lkdGgsaGVpZ2h0OnIuaGVpZ2h0fX19fXJldHVybiBudWxsfSxnZXRDaGlsZEluZGV4OmZ1bmN0aW9uKGUsdCl7aWYodClmb3IodmFyIG4saT1lLnBhcmVudE5vZGUuY2hpbGRyZW4scj0wLGE9MCxvPWkubGVuZ3RoO28+cjtyKyspaWYobj1pW3JdLG4ubm9kZU5hbWUmJm4ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09dCl7aWYobj09ZSlyZXR1cm4gYTthKyt9cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihlKX0sc3dhcE5vZGVzOmZ1bmN0aW9uKGUsdCl7dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHQpfSxlbGVtZW50SXNEZXNjZW5kYW50OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1lO2Rve2lmKGk9PT10KXJldHVybiEwO2k9aS5wYXJlbnROb2RlfXdoaWxlKGkmJmkhPT1uKTtyZXR1cm4hMX0sZ2V0UGFyZW50V2l0aENsYXNzOmZ1bmN0aW9uKGUsdCxuKXtmb3Iobj1ufHwxMDtlLnBhcmVudE5vZGUmJm4tLTspe2lmKGUucGFyZW50Tm9kZS5jbGFzc0xpc3QmJmUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnModCkpcmV0dXJuIGUucGFyZW50Tm9kZTtlPWUucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH0sZ2V0UGFyZW50T3JTZWxmV2l0aENsYXNzOmZ1bmN0aW9uKGUsdCxuKXtmb3Iobj1ufHwxMDtlJiZuLS07KXtpZihlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuY29udGFpbnModCkpcmV0dXJuIGU7ZT1lLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9LHJlY3RDb250YWluczpmdW5jdGlvbihlLHQsbixpLHIsYSl7cmV0dXJuIG4+ZXx8ZT5yPyExOmk+dHx8dD5hPyExOiEwfSxibHVyQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIHQuYWN0aXZlRWxlbWVudCYmdC5hY3RpdmVFbGVtZW50IT10LmJvZHk/KHQuYWN0aXZlRWxlbWVudC5ibHVyKCksdC5hY3RpdmVFbGVtZW50KTpudWxsfSxjYWNoZWRBdHRyOmZ1bmN0aW9uKGUsdCxuKXtpZihlPWUmJmUubGVuZ3RoJiZlWzBdfHxlLGUmJmUuc2V0QXR0cmlidXRlKXt2YXIgaT1cIiRhdHRyLVwiK3Q7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+Mj9lW2ldIT09biYmKGUuc2V0QXR0cmlidXRlKHQsbiksZVtpXT1uKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgZVtpXSYmKGVbaV09ZS5nZXRBdHRyaWJ1dGUodCkpLGVbaV19fSxjYWNoZWRTdHlsZXM6ZnVuY3Rpb24oZSx0KXtpZihlPWUmJmUubGVuZ3RoJiZlWzBdfHxlLGUmJmUuc3R5bGUpZm9yKHZhciBuIGluIHQpZVtcIiRzdHlsZS1cIituXSE9PXRbbl0mJihlLnN0eWxlW25dPWVbXCIkc3R5bGUtXCIrbl09dFtuXSl9fSxuLnJlcXVlc3RBbmltYXRpb25GcmFtZT1uLkRvbVV0aWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lLG4uY2FuY2VsQW5pbWF0aW9uRnJhbWU9bi5Eb21VdGlsLmNhbmNlbEFuaW1hdGlvbkZyYW1lLG4uYW5pbWF0aW9uRnJhbWVUaHJvdHRsZT1uLkRvbVV0aWwuYW5pbWF0aW9uRnJhbWVUaHJvdHRsZX0od2luZG93LGRvY3VtZW50LGlvbmljKSxmdW5jdGlvbihlKXtlLkN1c3RvbUV2ZW50PWZ1bmN0aW9uKCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KXJldHVybiBDdXN0b21FdmVudDt2YXIgZT1mdW5jdGlvbihlLHQpe3ZhciBuO3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt0cnl7bj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpLG4uaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCl9Y2F0Y2goaSl7bj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2Zvcih2YXIgciBpbiB0KW5bcl09dFtyXTtuLmluaXRFdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUpfXJldHVybiBufTtyZXR1cm4gZS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSxlfSgpLGUuRXZlbnRDb250cm9sbGVyPXtWSVJUVUFMSVpFRF9FVkVOVFM6W1widGFwXCIsXCJzd2lwZVwiLFwic3dpcGVyaWdodFwiLFwic3dpcGVsZWZ0XCIsXCJkcmFnXCIsXCJob2xkXCIsXCJyZWxlYXNlXCJdLHRyaWdnZXI6ZnVuY3Rpb24odCxuLGkscil7dmFyIGE9bmV3IGUuQ3VzdG9tRXZlbnQodCx7ZGV0YWlsOm4sYnViYmxlczohIWksY2FuY2VsYWJsZTohIXJ9KTtuJiZuLnRhcmdldCYmbi50YXJnZXQuZGlzcGF0Y2hFdmVudCYmbi50YXJnZXQuZGlzcGF0Y2hFdmVudChhKXx8d2luZG93LmRpc3BhdGNoRXZlbnQoYSl9LG9uOmZ1bmN0aW9uKHQsbixpKXtmb3IodmFyIHI9aXx8d2luZG93LGE9MCxvPXRoaXMuVklSVFVBTElaRURfRVZFTlRTLmxlbmd0aDtvPmE7YSsrKWlmKHQ9PXRoaXMuVklSVFVBTElaRURfRVZFTlRTW2FdKXt2YXIgcz1uZXcgZS5HZXN0dXJlKGkpO3JldHVybiBzLm9uKHQsbiksc31yLmFkZEV2ZW50TGlzdGVuZXIodCxuKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0KX0sb25HZXN0dXJlOmZ1bmN0aW9uKHQsbixpLHIpe3ZhciBhPW5ldyBlLkdlc3R1cmUoaSxyKTtyZXR1cm4gYS5vbih0LG4pLGF9LG9mZkdlc3R1cmU6ZnVuY3Rpb24oZSx0LG4pe2UmJmUub2ZmKHQsbil9LGhhbmRsZVBvcFN0YXRlOmZ1bmN0aW9uKCl7fX0sZS5vbj1mdW5jdGlvbigpe2UuRXZlbnRDb250cm9sbGVyLm9uLmFwcGx5KGUuRXZlbnRDb250cm9sbGVyLGFyZ3VtZW50cyl9LGUub2ZmPWZ1bmN0aW9uKCl7ZS5FdmVudENvbnRyb2xsZXIub2ZmLmFwcGx5KGUuRXZlbnRDb250cm9sbGVyLGFyZ3VtZW50cyl9LGUudHJpZ2dlcj1lLkV2ZW50Q29udHJvbGxlci50cmlnZ2VyLGUub25HZXN0dXJlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuRXZlbnRDb250cm9sbGVyLm9uR2VzdHVyZS5hcHBseShlLkV2ZW50Q29udHJvbGxlci5vbkdlc3R1cmUsYXJndW1lbnRzKX0sZS5vZmZHZXN0dXJlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuRXZlbnRDb250cm9sbGVyLm9mZkdlc3R1cmUuYXBwbHkoZS5FdmVudENvbnRyb2xsZXIub2ZmR2VzdHVyZSxhcmd1bWVudHMpfX0od2luZG93LmlvbmljKSxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7aWYoIWUuR2VzdHVyZXMuUkVBRFkpe2UuR2VzdHVyZXMuZXZlbnQuZGV0ZXJtaW5lRXZlbnRUeXBlcygpO2Zvcih2YXIgdCBpbiBlLkdlc3R1cmVzLmdlc3R1cmVzKWUuR2VzdHVyZXMuZ2VzdHVyZXMuaGFzT3duUHJvcGVydHkodCkmJmUuR2VzdHVyZXMuZGV0ZWN0aW9uLnJlZ2lzdGVyKGUuR2VzdHVyZXMuZ2VzdHVyZXNbdF0pO2UuR2VzdHVyZXMuZXZlbnQub25Ub3VjaChlLkdlc3R1cmVzLkRPQ1VNRU5ULGUuR2VzdHVyZXMuRVZFTlRfTU9WRSxlLkdlc3R1cmVzLmRldGVjdGlvbi5kZXRlY3QpLGUuR2VzdHVyZXMuZXZlbnQub25Ub3VjaChlLkdlc3R1cmVzLkRPQ1VNRU5ULGUuR2VzdHVyZXMuRVZFTlRfRU5ELGUuR2VzdHVyZXMuZGV0ZWN0aW9uLmRldGVjdCksZS5HZXN0dXJlcy5SRUFEWT0hMH19ZS5HZXN0dXJlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBlLkdlc3R1cmVzLkluc3RhbmNlKHQsbnx8e30pfSxlLkdlc3R1cmVzPXt9LGUuR2VzdHVyZXMuZGVmYXVsdHM9e3N0b3BfYnJvd3Nlcl9iZWhhdmlvcjpcImRpc2FibGUtdXNlci1iZWhhdmlvclwifSxlLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTPXdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWR8fHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxlLkdlc3R1cmVzLkhBU19UT1VDSEVWRU5UUz1cIm9udG91Y2hzdGFydFwiaW4gd2luZG93LGUuR2VzdHVyZXMuTU9CSUxFX1JFR0VYPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWR8c2lsay9pLGUuR2VzdHVyZXMuTk9fTU9VU0VFVkVOVFM9ZS5HZXN0dXJlcy5IQVNfVE9VQ0hFVkVOVFMmJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKGUuR2VzdHVyZXMuTU9CSUxFX1JFR0VYKSxlLkdlc3R1cmVzLkVWRU5UX1RZUEVTPXt9LGUuR2VzdHVyZXMuRElSRUNUSU9OX0RPV049XCJkb3duXCIsZS5HZXN0dXJlcy5ESVJFQ1RJT05fTEVGVD1cImxlZnRcIixlLkdlc3R1cmVzLkRJUkVDVElPTl9VUD1cInVwXCIsZS5HZXN0dXJlcy5ESVJFQ1RJT05fUklHSFQ9XCJyaWdodFwiLGUuR2VzdHVyZXMuUE9JTlRFUl9NT1VTRT1cIm1vdXNlXCIsZS5HZXN0dXJlcy5QT0lOVEVSX1RPVUNIPVwidG91Y2hcIixlLkdlc3R1cmVzLlBPSU5URVJfUEVOPVwicGVuXCIsZS5HZXN0dXJlcy5FVkVOVF9TVEFSVD1cInN0YXJ0XCIsZS5HZXN0dXJlcy5FVkVOVF9NT1ZFPVwibW92ZVwiLGUuR2VzdHVyZXMuRVZFTlRfRU5EPVwiZW5kXCIsZS5HZXN0dXJlcy5ET0NVTUVOVD13aW5kb3cuZG9jdW1lbnQsZS5HZXN0dXJlcy5wbHVnaW5zPXt9LGUuR2VzdHVyZXMuUkVBRFk9ITEsZS5HZXN0dXJlcy5JbnN0YW5jZT1mdW5jdGlvbihuLGkpe3ZhciByPXRoaXM7cmV0dXJuIG51bGw9PT1uP3RoaXM6KHQoKSx0aGlzLmVsZW1lbnQ9bix0aGlzLmVuYWJsZWQ9ITAsdGhpcy5vcHRpb25zPWUuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKGUuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKHt9LGUuR2VzdHVyZXMuZGVmYXVsdHMpLGl8fHt9KSx0aGlzLm9wdGlvbnMuc3RvcF9icm93c2VyX2JlaGF2aW9yJiZlLkdlc3R1cmVzLnV0aWxzLnN0b3BEZWZhdWx0QnJvd3NlckJlaGF2aW9yKHRoaXMuZWxlbWVudCx0aGlzLm9wdGlvbnMuc3RvcF9icm93c2VyX2JlaGF2aW9yKSxlLkdlc3R1cmVzLmV2ZW50Lm9uVG91Y2gobixlLkdlc3R1cmVzLkVWRU5UX1NUQVJULGZ1bmN0aW9uKHQpe3IuZW5hYmxlZCYmZS5HZXN0dXJlcy5kZXRlY3Rpb24uc3RhcnREZXRlY3Qocix0KX0pLHRoaXMpfSxlLkdlc3R1cmVzLkluc3RhbmNlLnByb3RvdHlwZT17b246ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49ZS5zcGxpdChcIiBcIiksaT0wO2k8bi5sZW5ndGg7aSsrKXRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5baV0sdCwhMSk7cmV0dXJuIHRoaXN9LG9mZjpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1lLnNwbGl0KFwiIFwiKSxpPTA7aTxuLmxlbmd0aDtpKyspdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobltpXSx0LCExKTtyZXR1cm4gdGhpc30sdHJpZ2dlcjpmdW5jdGlvbih0LG4pe3ZhciBpPWUuR2VzdHVyZXMuRE9DVU1FTlQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtpLmluaXRFdmVudCh0LCEwLCEwKSxpLmdlc3R1cmU9bjt2YXIgcj10aGlzLmVsZW1lbnQ7cmV0dXJuIGUuR2VzdHVyZXMudXRpbHMuaGFzUGFyZW50KG4udGFyZ2V0LHIpJiYocj1uLnRhcmdldCksci5kaXNwYXRjaEV2ZW50KGkpLHRoaXN9LGVuYWJsZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbmFibGVkPWUsdGhpc319O3ZhciBuPW51bGwsaT0hMSxyPSExO2UuR2VzdHVyZXMuZXZlbnQ9e2JpbmREb206ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaT10LnNwbGl0KFwiIFwiKSxyPTA7cjxpLmxlbmd0aDtyKyspZS5hZGRFdmVudExpc3RlbmVyKGlbcl0sbiwhMSl9LG9uVG91Y2g6ZnVuY3Rpb24odCxhLG8pe3ZhciBzPXRoaXM7dGhpcy5iaW5kRG9tKHQsZS5HZXN0dXJlcy5FVkVOVF9UWVBFU1thXSxmdW5jdGlvbihsKXt2YXIgYz1sLnR5cGUudG9Mb3dlckNhc2UoKTtpZighYy5tYXRjaCgvbW91c2UvKXx8IXIpe2MubWF0Y2goL3RvdWNoLyl8fGMubWF0Y2goL3BvaW50ZXJkb3duLyl8fGMubWF0Y2goL21vdXNlLykmJjE9PT1sLndoaWNoP2k9ITA6Yy5tYXRjaCgvbW91c2UvKSYmMSE9PWwud2hpY2gmJihpPSExKSxjLm1hdGNoKC90b3VjaHxwb2ludGVyLykmJihyPSEwKTt2YXIgZD0wO2kmJihlLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTJiZhIT1lLkdlc3R1cmVzLkVWRU5UX0VORD9kPWUuR2VzdHVyZXMuUG9pbnRlckV2ZW50LnVwZGF0ZVBvaW50ZXIoYSxsKTpjLm1hdGNoKC90b3VjaC8pP2Q9bC50b3VjaGVzLmxlbmd0aDpyfHwoZD1jLm1hdGNoKC91cC8pPzA6MSksZD4wJiZhPT1lLkdlc3R1cmVzLkVWRU5UX0VORD9hPWUuR2VzdHVyZXMuRVZFTlRfTU9WRTpkfHwoYT1lLkdlc3R1cmVzLkVWRU5UX0VORCksKGR8fG51bGw9PT1uKSYmKG49bCksby5jYWxsKGUuR2VzdHVyZXMuZGV0ZWN0aW9uLHMuY29sbGVjdEV2ZW50RGF0YSh0LGEscy5nZXRUb3VjaExpc3QobixhKSxsKSksZS5HZXN0dXJlcy5IQVNfUE9JTlRFUkVWRU5UUyYmYT09ZS5HZXN0dXJlcy5FVkVOVF9FTkQmJihkPWUuR2VzdHVyZXMuUG9pbnRlckV2ZW50LnVwZGF0ZVBvaW50ZXIoYSxsKSkpLGR8fChuPW51bGwsaT0hMSxyPSExLGUuR2VzdHVyZXMuUG9pbnRlckV2ZW50LnJlc2V0KCkpfX0pfSxkZXRlcm1pbmVFdmVudFR5cGVzOmZ1bmN0aW9uKCl7dmFyIHQ7dD1lLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTP2UuR2VzdHVyZXMuUG9pbnRlckV2ZW50LmdldEV2ZW50cygpOmUuR2VzdHVyZXMuTk9fTU9VU0VFVkVOVFM/W1widG91Y2hzdGFydFwiLFwidG91Y2htb3ZlXCIsXCJ0b3VjaGVuZCB0b3VjaGNhbmNlbFwiXTpbXCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiLFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiLFwidG91Y2hlbmQgdG91Y2hjYW5jZWwgbW91c2V1cFwiXSxlLkdlc3R1cmVzLkVWRU5UX1RZUEVTW2UuR2VzdHVyZXMuRVZFTlRfU1RBUlRdPXRbMF0sZS5HZXN0dXJlcy5FVkVOVF9UWVBFU1tlLkdlc3R1cmVzLkVWRU5UX01PVkVdPXRbMV0sZS5HZXN0dXJlcy5FVkVOVF9UWVBFU1tlLkdlc3R1cmVzLkVWRU5UX0VORF09dFsyXX0sZ2V0VG91Y2hMaXN0OmZ1bmN0aW9uKHQpe3JldHVybiBlLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTP2UuR2VzdHVyZXMuUG9pbnRlckV2ZW50LmdldFRvdWNoTGlzdCgpOnQudG91Y2hlcz90LnRvdWNoZXM6KHQuaWRlbnRpZmllcj0xLFt0XSl9LGNvbGxlY3RFdmVudERhdGE6ZnVuY3Rpb24odCxuLGkscil7dmFyIGE9ZS5HZXN0dXJlcy5QT0lOVEVSX1RPVUNIO3JldHVybihyLnR5cGUubWF0Y2goL21vdXNlLyl8fGUuR2VzdHVyZXMuUG9pbnRlckV2ZW50Lm1hdGNoVHlwZShlLkdlc3R1cmVzLlBPSU5URVJfTU9VU0UscikpJiYoYT1lLkdlc3R1cmVzLlBPSU5URVJfTU9VU0UpLHtjZW50ZXI6ZS5HZXN0dXJlcy51dGlscy5nZXRDZW50ZXIoaSksdGltZVN0YW1wOihuZXcgRGF0ZSkuZ2V0VGltZSgpLHRhcmdldDpyLnRhcmdldCx0b3VjaGVzOmksZXZlbnRUeXBlOm4scG9pbnRlclR5cGU6YSxzcmNFdmVudDpyLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5zcmNFdmVudC5wcmV2ZW50TWFuaXB1bGF0aW9uJiZ0aGlzLnNyY0V2ZW50LnByZXZlbnRNYW5pcHVsYXRpb24oKSx0aGlzLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0fSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt0aGlzLnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wRGV0ZWN0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuR2VzdHVyZXMuZGV0ZWN0aW9uLnN0b3BEZXRlY3QoKX19fX0sZS5HZXN0dXJlcy5Qb2ludGVyRXZlbnQ9e3BvaW50ZXJzOnt9LGdldFRvdWNoTGlzdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1bXTtyZXR1cm4gT2JqZWN0LmtleXMoZS5wb2ludGVycykuc29ydCgpLmZvckVhY2goZnVuY3Rpb24obil7dC5wdXNoKGUucG9pbnRlcnNbbl0pfSksdH0sdXBkYXRlUG9pbnRlcjpmdW5jdGlvbih0LG4pe3JldHVybiB0PT1lLkdlc3R1cmVzLkVWRU5UX0VORD90aGlzLnBvaW50ZXJzPXt9OihuLmlkZW50aWZpZXI9bi5wb2ludGVySWQsdGhpcy5wb2ludGVyc1tuLnBvaW50ZXJJZF09biksT2JqZWN0LmtleXModGhpcy5wb2ludGVycykubGVuZ3RofSxtYXRjaFR5cGU6ZnVuY3Rpb24odCxuKXtpZighbi5wb2ludGVyVHlwZSlyZXR1cm4hMTt2YXIgaT17fTtyZXR1cm4gaVtlLkdlc3R1cmVzLlBPSU5URVJfTU9VU0VdPW4ucG9pbnRlclR5cGU9PW4uTVNQT0lOVEVSX1RZUEVfTU9VU0V8fG4ucG9pbnRlclR5cGU9PWUuR2VzdHVyZXMuUE9JTlRFUl9NT1VTRSxpW2UuR2VzdHVyZXMuUE9JTlRFUl9UT1VDSF09bi5wb2ludGVyVHlwZT09bi5NU1BPSU5URVJfVFlQRV9UT1VDSHx8bi5wb2ludGVyVHlwZT09ZS5HZXN0dXJlcy5QT0lOVEVSX1RPVUNILGlbZS5HZXN0dXJlcy5QT0lOVEVSX1BFTl09bi5wb2ludGVyVHlwZT09bi5NU1BPSU5URVJfVFlQRV9QRU58fG4ucG9pbnRlclR5cGU9PWUuR2VzdHVyZXMuUE9JTlRFUl9QRU4saVt0XX0sZ2V0RXZlbnRzOmZ1bmN0aW9uKCl7cmV0dXJuW1wicG9pbnRlcmRvd24gTVNQb2ludGVyRG93blwiLFwicG9pbnRlcm1vdmUgTVNQb2ludGVyTW92ZVwiLFwicG9pbnRlcnVwIHBvaW50ZXJjYW5jZWwgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCJdfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcnM9e319fSxlLkdlc3R1cmVzLnV0aWxzPXtleHRlbmQ6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaSBpbiB0KXZvaWQgMCE9PWVbaV0mJm58fChlW2ldPXRbaV0pO3JldHVybiBlfSxoYXNQYXJlbnQ6ZnVuY3Rpb24oZSx0KXtmb3IoO2U7KXtpZihlPT10KXJldHVybiEwO2U9ZS5wYXJlbnROb2RlfXJldHVybiExfSxnZXRDZW50ZXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49W10saT0wLHI9ZS5sZW5ndGg7cj5pO2krKyl0LnB1c2goZVtpXS5wYWdlWCksbi5wdXNoKGVbaV0ucGFnZVkpO3JldHVybntwYWdlWDooTWF0aC5taW4uYXBwbHkoTWF0aCx0KStNYXRoLm1heC5hcHBseShNYXRoLHQpKS8yLHBhZ2VZOihNYXRoLm1pbi5hcHBseShNYXRoLG4pK01hdGgubWF4LmFwcGx5KE1hdGgsbikpLzJ9fSxnZXRWZWxvY2l0eTpmdW5jdGlvbihlLHQsbil7cmV0dXJue3g6TWF0aC5hYnModC9lKXx8MCx5Ok1hdGguYWJzKG4vZSl8fDB9fSxnZXRBbmdsZTpmdW5jdGlvbihlLHQpe3ZhciBuPXQucGFnZVktZS5wYWdlWSxpPXQucGFnZVgtZS5wYWdlWDtyZXR1cm4gMTgwKk1hdGguYXRhbjIobixpKS9NYXRoLlBJfSxnZXREaXJlY3Rpb246ZnVuY3Rpb24odCxuKXt2YXIgaT1NYXRoLmFicyh0LnBhZ2VYLW4ucGFnZVgpLHI9TWF0aC5hYnModC5wYWdlWS1uLnBhZ2VZKTtyZXR1cm4gaT49cj90LnBhZ2VYLW4ucGFnZVg+MD9lLkdlc3R1cmVzLkRJUkVDVElPTl9MRUZUOmUuR2VzdHVyZXMuRElSRUNUSU9OX1JJR0hUOnQucGFnZVktbi5wYWdlWT4wP2UuR2VzdHVyZXMuRElSRUNUSU9OX1VQOmUuR2VzdHVyZXMuRElSRUNUSU9OX0RPV059LGdldERpc3RhbmNlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dC5wYWdlWC1lLnBhZ2VYLGk9dC5wYWdlWS1lLnBhZ2VZO3JldHVybiBNYXRoLnNxcnQobipuK2kqaSl9LGdldFNjYWxlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPj0yJiZ0Lmxlbmd0aD49Mj90aGlzLmdldERpc3RhbmNlKHRbMF0sdFsxXSkvdGhpcy5nZXREaXN0YW5jZShlWzBdLGVbMV0pOjF9LGdldFJvdGF0aW9uOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPj0yJiZ0Lmxlbmd0aD49Mj90aGlzLmdldEFuZ2xlKHRbMV0sdFswXSktdGhpcy5nZXRBbmdsZShlWzFdLGVbMF0pOjB9LGlzVmVydGljYWw6ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PWUuR2VzdHVyZXMuRElSRUNUSU9OX1VQfHx0PT1lLkdlc3R1cmVzLkRJUkVDVElPTl9ET1dOfSxzdG9wRGVmYXVsdEJyb3dzZXJCZWhhdmlvcjpmdW5jdGlvbihlLHQpe2UmJmUuY2xhc3NMaXN0JiYoZS5jbGFzc0xpc3QuYWRkKHQpLGUub25zZWxlY3RzdGFydD1mdW5jdGlvbigpe3JldHVybiExfSl9fSxlLkdlc3R1cmVzLmRldGVjdGlvbj17Z2VzdHVyZXM6W10sY3VycmVudDpudWxsLHByZXZpb3VzOm51bGwsc3RvcHBlZDohMSxzdGFydERldGVjdDpmdW5jdGlvbih0LG4pe3RoaXMuY3VycmVudHx8KHRoaXMuc3RvcHBlZD0hMSx0aGlzLmN1cnJlbnQ9e2luc3Q6dCxzdGFydEV2ZW50OmUuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKHt9LG4pLGxhc3RFdmVudDohMSxuYW1lOlwiXCJ9LHRoaXMuZGV0ZWN0KG4pKX0sZGV0ZWN0OmZ1bmN0aW9uKHQpe2lmKCF0aGlzLmN1cnJlbnR8fHRoaXMuc3RvcHBlZClyZXR1cm4gbnVsbDt0PXRoaXMuZXh0ZW5kRXZlbnREYXRhKHQpO2Zvcih2YXIgbj10aGlzLmN1cnJlbnQuaW5zdC5vcHRpb25zLGk9MCxyPXRoaXMuZ2VzdHVyZXMubGVuZ3RoO3I+aTtpKyspe3ZhciBhPXRoaXMuZ2VzdHVyZXNbaV07aWYoIXRoaXMuc3RvcHBlZCYmblthLm5hbWVdIT09ITEmJmEuaGFuZGxlci5jYWxsKGEsdCx0aGlzLmN1cnJlbnQuaW5zdCk9PT0hMSl7dGhpcy5zdG9wRGV0ZWN0KCk7YnJlYWt9fXJldHVybiB0aGlzLmN1cnJlbnQmJih0aGlzLmN1cnJlbnQubGFzdEV2ZW50PXQpLHQuZXZlbnRUeXBlPT1lLkdlc3R1cmVzLkVWRU5UX0VORCYmIXQudG91Y2hlcy5sZW5ndGgtMSYmdGhpcy5zdG9wRGV0ZWN0KCksdH0sc3RvcERldGVjdDpmdW5jdGlvbigpe3RoaXMucHJldmlvdXM9ZS5HZXN0dXJlcy51dGlscy5leHRlbmQoe30sdGhpcy5jdXJyZW50KSx0aGlzLmN1cnJlbnQ9bnVsbCx0aGlzLnN0b3BwZWQ9ITB9LGV4dGVuZEV2ZW50RGF0YTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLmN1cnJlbnQuc3RhcnRFdmVudDtpZihuJiYodC50b3VjaGVzLmxlbmd0aCE9bi50b3VjaGVzLmxlbmd0aHx8dC50b3VjaGVzPT09bi50b3VjaGVzKSl7bi50b3VjaGVzPVtdO2Zvcih2YXIgaT0wLHI9dC50b3VjaGVzLmxlbmd0aDtyPmk7aSsrKW4udG91Y2hlcy5wdXNoKGUuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKHt9LHQudG91Y2hlc1tpXSkpfXZhciBhPXQudGltZVN0YW1wLW4udGltZVN0YW1wLG89dC5jZW50ZXIucGFnZVgtbi5jZW50ZXIucGFnZVgscz10LmNlbnRlci5wYWdlWS1uLmNlbnRlci5wYWdlWSxsPWUuR2VzdHVyZXMudXRpbHMuZ2V0VmVsb2NpdHkoYSxvLHMpO3JldHVybiBlLkdlc3R1cmVzLnV0aWxzLmV4dGVuZCh0LHtkZWx0YVRpbWU6YSxkZWx0YVg6byxkZWx0YVk6cyx2ZWxvY2l0eVg6bC54LHZlbG9jaXR5WTpsLnksZGlzdGFuY2U6ZS5HZXN0dXJlcy51dGlscy5nZXREaXN0YW5jZShuLmNlbnRlcix0LmNlbnRlciksYW5nbGU6ZS5HZXN0dXJlcy51dGlscy5nZXRBbmdsZShuLmNlbnRlcix0LmNlbnRlciksZGlyZWN0aW9uOmUuR2VzdHVyZXMudXRpbHMuZ2V0RGlyZWN0aW9uKG4uY2VudGVyLHQuY2VudGVyKSxzY2FsZTplLkdlc3R1cmVzLnV0aWxzLmdldFNjYWxlKG4udG91Y2hlcyx0LnRvdWNoZXMpLHJvdGF0aW9uOmUuR2VzdHVyZXMudXRpbHMuZ2V0Um90YXRpb24obi50b3VjaGVzLHQudG91Y2hlcyksc3RhcnRFdmVudDpufSksdH0scmVnaXN0ZXI6ZnVuY3Rpb24odCl7dmFyIG49dC5kZWZhdWx0c3x8e307cmV0dXJuIHZvaWQgMD09PW5bdC5uYW1lXSYmKG5bdC5uYW1lXT0hMCksZS5HZXN0dXJlcy51dGlscy5leHRlbmQoZS5HZXN0dXJlcy5kZWZhdWx0cyxuLCEwKSx0LmluZGV4PXQuaW5kZXh8fDFlMyx0aGlzLmdlc3R1cmVzLnB1c2godCksdGhpcy5nZXN0dXJlcy5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuaW5kZXg8dC5pbmRleD8tMTplLmluZGV4PnQuaW5kZXg/MTowfSksdGhpcy5nZXN0dXJlc319LGUuR2VzdHVyZXMuZ2VzdHVyZXM9ZS5HZXN0dXJlcy5nZXN0dXJlc3x8e30sZS5HZXN0dXJlcy5nZXN0dXJlcy5Ib2xkPXtuYW1lOlwiaG9sZFwiLGluZGV4OjEwLGRlZmF1bHRzOntob2xkX3RpbWVvdXQ6NTAwLGhvbGRfdGhyZXNob2xkOjl9LHRpbWVyOm51bGwsaGFuZGxlcjpmdW5jdGlvbih0LG4pe3N3aXRjaCh0LmV2ZW50VHlwZSl7Y2FzZSBlLkdlc3R1cmVzLkVWRU5UX1NUQVJUOmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKSxlLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWU9dGhpcy5uYW1lLHRoaXMudGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe1wiaG9sZFwiPT1lLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWUmJihlLnRhcC5jYW5jZWxDbGljaygpLG4udHJpZ2dlcihcImhvbGRcIix0KSl9LG4ub3B0aW9ucy5ob2xkX3RpbWVvdXQpO2JyZWFrO2Nhc2UgZS5HZXN0dXJlcy5FVkVOVF9NT1ZFOnQuZGlzdGFuY2U+bi5vcHRpb25zLmhvbGRfdGhyZXNob2xkJiZjbGVhclRpbWVvdXQodGhpcy50aW1lcik7YnJlYWs7Y2FzZSBlLkdlc3R1cmVzLkVWRU5UX0VORDpjbGVhclRpbWVvdXQodGhpcy50aW1lcil9fX0sZS5HZXN0dXJlcy5nZXN0dXJlcy5UYXA9e25hbWU6XCJ0YXBcIixpbmRleDoxMDAsZGVmYXVsdHM6e3RhcF9tYXhfdG91Y2h0aW1lOjI1MCx0YXBfbWF4X2Rpc3RhbmNlOjEwLHRhcF9hbHdheXM6ITAsZG91YmxldGFwX2Rpc3RhbmNlOjIwLGRvdWJsZXRhcF9pbnRlcnZhbDozMDB9LGhhbmRsZXI6ZnVuY3Rpb24odCxuKXtpZih0LmV2ZW50VHlwZT09ZS5HZXN0dXJlcy5FVkVOVF9FTkQmJlwidG91Y2hjYW5jZWxcIiE9dC5zcmNFdmVudC50eXBlKXt2YXIgaT1lLkdlc3R1cmVzLmRldGVjdGlvbi5wcmV2aW91cyxyPSExO2lmKHQuZGVsdGFUaW1lPm4ub3B0aW9ucy50YXBfbWF4X3RvdWNodGltZXx8dC5kaXN0YW5jZT5uLm9wdGlvbnMudGFwX21heF9kaXN0YW5jZSlyZXR1cm47aSYmXCJ0YXBcIj09aS5uYW1lJiZ0LnRpbWVTdGFtcC1pLmxhc3RFdmVudC50aW1lU3RhbXA8bi5vcHRpb25zLmRvdWJsZXRhcF9pbnRlcnZhbCYmdC5kaXN0YW5jZTxuLm9wdGlvbnMuZG91YmxldGFwX2Rpc3RhbmNlJiYobi50cmlnZ2VyKFwiZG91YmxldGFwXCIsdCkscj0hMCksKCFyfHxuLm9wdGlvbnMudGFwX2Fsd2F5cykmJihlLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWU9XCJ0YXBcIixuLnRyaWdnZXIoXCJ0YXBcIix0KSl9fX0sZS5HZXN0dXJlcy5nZXN0dXJlcy5Td2lwZT17bmFtZTpcInN3aXBlXCIsaW5kZXg6NDAsZGVmYXVsdHM6e3N3aXBlX21heF90b3VjaGVzOjEsc3dpcGVfdmVsb2NpdHk6LjR9LGhhbmRsZXI6ZnVuY3Rpb24odCxuKXtpZih0LmV2ZW50VHlwZT09ZS5HZXN0dXJlcy5FVkVOVF9FTkQpe2lmKG4ub3B0aW9ucy5zd2lwZV9tYXhfdG91Y2hlcz4wJiZ0LnRvdWNoZXMubGVuZ3RoPm4ub3B0aW9ucy5zd2lwZV9tYXhfdG91Y2hlcylyZXR1cm47KHQudmVsb2NpdHlYPm4ub3B0aW9ucy5zd2lwZV92ZWxvY2l0eXx8dC52ZWxvY2l0eVk+bi5vcHRpb25zLnN3aXBlX3ZlbG9jaXR5KSYmKG4udHJpZ2dlcih0aGlzLm5hbWUsdCksbi50cmlnZ2VyKHRoaXMubmFtZSt0LmRpcmVjdGlvbix0KSl9fX0sZS5HZXN0dXJlcy5nZXN0dXJlcy5EcmFnPXtuYW1lOlwiZHJhZ1wiLGluZGV4OjUwLGRlZmF1bHRzOntkcmFnX21pbl9kaXN0YW5jZToxMCxjb3JyZWN0X2Zvcl9kcmFnX21pbl9kaXN0YW5jZTohMCxkcmFnX21heF90b3VjaGVzOjEsZHJhZ19ibG9ja19ob3Jpem9udGFsOiEwLGRyYWdfYmxvY2tfdmVydGljYWw6ITAsZHJhZ19sb2NrX3RvX2F4aXM6ITEsZHJhZ19sb2NrX21pbl9kaXN0YW5jZToyNSxwcmV2ZW50X2RlZmF1bHRfZGlyZWN0aW9uczpbXX0sdHJpZ2dlcmVkOiExLGhhbmRsZXI6ZnVuY3Rpb24odCxuKXtpZihcInRvdWNoc3RhcnRcIj09dC5zcmNFdmVudC50eXBlfHxcInRvdWNoZW5kXCI9PXQuc3JjRXZlbnQudHlwZT90aGlzLnByZXZlbnRlZEZpcnN0TW92ZT0hMTp0aGlzLnByZXZlbnRlZEZpcnN0TW92ZXx8XCJ0b3VjaG1vdmVcIiE9dC5zcmNFdmVudC50eXBlfHwobi5vcHRpb25zLnByZXZlbnRfZGVmYXVsdF9kaXJlY3Rpb25zLmxlbmd0aD4wJiYtMSE9bi5vcHRpb25zLnByZXZlbnRfZGVmYXVsdF9kaXJlY3Rpb25zLmluZGV4T2YodC5kaXJlY3Rpb24pJiZ0LnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCksdGhpcy5wcmV2ZW50ZWRGaXJzdE1vdmU9ITApLGUuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZSE9dGhpcy5uYW1lJiZ0aGlzLnRyaWdnZXJlZClyZXR1cm4gbi50cmlnZ2VyKHRoaXMubmFtZStcImVuZFwiLHQpLHZvaWQodGhpcy50cmlnZ2VyZWQ9ITEpO2lmKCEobi5vcHRpb25zLmRyYWdfbWF4X3RvdWNoZXM+MCYmdC50b3VjaGVzLmxlbmd0aD5uLm9wdGlvbnMuZHJhZ19tYXhfdG91Y2hlcykpc3dpdGNoKHQuZXZlbnRUeXBlKXtjYXNlIGUuR2VzdHVyZXMuRVZFTlRfU1RBUlQ6dGhpcy50cmlnZ2VyZWQ9ITE7YnJlYWs7Y2FzZSBlLkdlc3R1cmVzLkVWRU5UX01PVkU6aWYodC5kaXN0YW5jZTxuLm9wdGlvbnMuZHJhZ19taW5fZGlzdGFuY2UmJmUuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZSE9dGhpcy5uYW1lKXJldHVybjtpZihlLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWUhPXRoaXMubmFtZSYmKGUuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZT10aGlzLm5hbWUsbi5vcHRpb25zLmNvcnJlY3RfZm9yX2RyYWdfbWluX2Rpc3RhbmNlKSl7dmFyIGk9TWF0aC5hYnMobi5vcHRpb25zLmRyYWdfbWluX2Rpc3RhbmNlL3QuZGlzdGFuY2UpO2UuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQuc3RhcnRFdmVudC5jZW50ZXIucGFnZVgrPXQuZGVsdGFYKmksZS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5zdGFydEV2ZW50LmNlbnRlci5wYWdlWSs9dC5kZWx0YVkqaSx0PWUuR2VzdHVyZXMuZGV0ZWN0aW9uLmV4dGVuZEV2ZW50RGF0YSh0KX0oZS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5sYXN0RXZlbnQuZHJhZ19sb2NrZWRfdG9fYXhpc3x8bi5vcHRpb25zLmRyYWdfbG9ja190b19heGlzJiZuLm9wdGlvbnMuZHJhZ19sb2NrX21pbl9kaXN0YW5jZTw9dC5kaXN0YW5jZSkmJih0LmRyYWdfbG9ja2VkX3RvX2F4aXM9ITApO3ZhciByPWUuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubGFzdEV2ZW50LmRpcmVjdGlvbjt0LmRyYWdfbG9ja2VkX3RvX2F4aXMmJnIhPT10LmRpcmVjdGlvbiYmKGUuR2VzdHVyZXMudXRpbHMuaXNWZXJ0aWNhbChyKT90LmRpcmVjdGlvbj10LmRlbHRhWTwwP2UuR2VzdHVyZXMuRElSRUNUSU9OX1VQOmUuR2VzdHVyZXMuRElSRUNUSU9OX0RPV046dC5kaXJlY3Rpb249dC5kZWx0YVg8MD9lLkdlc3R1cmVzLkRJUkVDVElPTl9MRUZUOmUuR2VzdHVyZXMuRElSRUNUSU9OX1JJR0hUKSx0aGlzLnRyaWdnZXJlZHx8KG4udHJpZ2dlcih0aGlzLm5hbWUrXCJzdGFydFwiLHQpLHRoaXMudHJpZ2dlcmVkPSEwKSxuLnRyaWdnZXIodGhpcy5uYW1lLHQpLG4udHJpZ2dlcih0aGlzLm5hbWUrdC5kaXJlY3Rpb24sdCksKG4ub3B0aW9ucy5kcmFnX2Jsb2NrX3ZlcnRpY2FsJiZlLkdlc3R1cmVzLnV0aWxzLmlzVmVydGljYWwodC5kaXJlY3Rpb24pfHxuLm9wdGlvbnMuZHJhZ19ibG9ja19ob3Jpem9udGFsJiYhZS5HZXN0dXJlcy51dGlscy5pc1ZlcnRpY2FsKHQuZGlyZWN0aW9uKSkmJnQucHJldmVudERlZmF1bHQoKTticmVhaztjYXNlIGUuR2VzdHVyZXMuRVZFTlRfRU5EOnRoaXMudHJpZ2dlcmVkJiZuLnRyaWdnZXIodGhpcy5uYW1lK1wiZW5kXCIsdCksdGhpcy50cmlnZ2VyZWQ9ITF9fX0sZS5HZXN0dXJlcy5nZXN0dXJlcy5UcmFuc2Zvcm09e25hbWU6XCJ0cmFuc2Zvcm1cIixpbmRleDo0NSxkZWZhdWx0czp7dHJhbnNmb3JtX21pbl9zY2FsZTouMDEsdHJhbnNmb3JtX21pbl9yb3RhdGlvbjoxLHRyYW5zZm9ybV9hbHdheXNfYmxvY2s6ITF9LHRyaWdnZXJlZDohMSxoYW5kbGVyOmZ1bmN0aW9uKHQsbil7aWYoZS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5uYW1lIT10aGlzLm5hbWUmJnRoaXMudHJpZ2dlcmVkKXJldHVybiBuLnRyaWdnZXIodGhpcy5uYW1lK1wiZW5kXCIsdCksdm9pZCh0aGlzLnRyaWdnZXJlZD0hMSk7aWYoISh0LnRvdWNoZXMubGVuZ3RoPDIpKXN3aXRjaChuLm9wdGlvbnMudHJhbnNmb3JtX2Fsd2F5c19ibG9jayYmdC5wcmV2ZW50RGVmYXVsdCgpLHQuZXZlbnRUeXBlKXtjYXNlIGUuR2VzdHVyZXMuRVZFTlRfU1RBUlQ6dGhpcy50cmlnZ2VyZWQ9ITE7YnJlYWs7Y2FzZSBlLkdlc3R1cmVzLkVWRU5UX01PVkU6dmFyIGk9TWF0aC5hYnMoMS10LnNjYWxlKSxyPU1hdGguYWJzKHQucm90YXRpb24pO2lmKGk8bi5vcHRpb25zLnRyYW5zZm9ybV9taW5fc2NhbGUmJnI8bi5vcHRpb25zLnRyYW5zZm9ybV9taW5fcm90YXRpb24pcmV0dXJuO2UuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZT10aGlzLm5hbWUsdGhpcy50cmlnZ2VyZWR8fChuLnRyaWdnZXIodGhpcy5uYW1lK1wic3RhcnRcIix0KSx0aGlzLnRyaWdnZXJlZD0hMCksbi50cmlnZ2VyKHRoaXMubmFtZSx0KSxyPm4ub3B0aW9ucy50cmFuc2Zvcm1fbWluX3JvdGF0aW9uJiZuLnRyaWdnZXIoXCJyb3RhdGVcIix0KSxpPm4ub3B0aW9ucy50cmFuc2Zvcm1fbWluX3NjYWxlJiYobi50cmlnZ2VyKFwicGluY2hcIix0KSxuLnRyaWdnZXIoXCJwaW5jaFwiKyh0LnNjYWxlPDE/XCJpblwiOlwib3V0XCIpLHQpKTticmVhaztjYXNlIGUuR2VzdHVyZXMuRVZFTlRfRU5EOnRoaXMudHJpZ2dlcmVkJiZuLnRyaWdnZXIodGhpcy5uYW1lK1wiZW5kXCIsdCksdGhpcy50cmlnZ2VyZWQ9ITF9fX0sZS5HZXN0dXJlcy5nZXN0dXJlcy5Ub3VjaD17bmFtZTpcInRvdWNoXCIsaW5kZXg6LSgxLzApLGRlZmF1bHRzOntwcmV2ZW50X2RlZmF1bHQ6ITEscHJldmVudF9tb3VzZWV2ZW50czohMX0saGFuZGxlcjpmdW5jdGlvbih0LG4pe3JldHVybiBuLm9wdGlvbnMucHJldmVudF9tb3VzZWV2ZW50cyYmdC5wb2ludGVyVHlwZT09ZS5HZXN0dXJlcy5QT0lOVEVSX01PVVNFP3ZvaWQgdC5zdG9wRGV0ZWN0KCk6KG4ub3B0aW9ucy5wcmV2ZW50X2RlZmF1bHQmJnQucHJldmVudERlZmF1bHQoKSx2b2lkKHQuZXZlbnRUeXBlPT1lLkdlc3R1cmVzLkVWRU5UX1NUQVJUJiZuLnRyaWdnZXIodGhpcy5uYW1lLHQpKSl9fSxlLkdlc3R1cmVzLmdlc3R1cmVzLlJlbGVhc2U9e25hbWU6XCJyZWxlYXNlXCIsaW5kZXg6MS8wLGhhbmRsZXI6ZnVuY3Rpb24odCxuKXt0LmV2ZW50VHlwZT09ZS5HZXN0dXJlcy5FVkVOVF9FTkQmJm4udHJpZ2dlcih0aGlzLm5hbWUsdCl9fX0od2luZG93LmlvbmljKSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaShlKXtlPWUucmVwbGFjZSgvW1xcW10vLFwiXFxcXFtcIikucmVwbGFjZSgvW1xcXV0vLFwiXFxcXF1cIik7dmFyIHQ9bmV3IFJlZ0V4cChcIltcXFxcPyZdXCIrZStcIj0oW14mI10qKVwiKSxuPXQuZXhlYyhsb2NhdGlvbi5zZWFyY2gpO3JldHVybiBudWxsPT09bj9cIlwiOmRlY29kZVVSSUNvbXBvbmVudChuWzFdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSl9ZnVuY3Rpb24gcigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXshZi5pc1JlYWR5JiZmLmlzV2ViVmlldygpfSxfKX1mdW5jdGlvbiBhKCl7Zi5pc1dlYlZpZXcoKT90LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLG8sITEpOm8oKSxzJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsYSwhMSl9ZnVuY3Rpb24gbygpe2YuaXNSZWFkeT0hMCxmLmRldGVjdCgpO2Zvcih2YXIgZT0wO2U8di5sZW5ndGg7ZSsrKXZbZV0oKTt2PVtdLG4udHJpZ2dlcihcInBsYXRmb3JtcmVhZHlcIix7dGFyZ2V0OnR9KSxoKGZ1bmN0aW9uKCl7dC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJwbGF0Zm9ybS1yZWFkeVwiKX0pfXZhciBzLGw9XCJpb3NcIixjPVwiYW5kcm9pZFwiLGQ9XCJ3aW5kb3dzcGhvbmVcIix1PVwiZWRnZVwiLHA9XCJjcm9zc3dhbGtcIixoPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lLGY9bi5QbGF0Zm9ybT17bmF2aWdhdG9yOmUubmF2aWdhdG9yLGlzUmVhZHk6ITEsaXNGdWxsU2NyZWVuOiExLHBsYXRmb3JtczpudWxsLGdyYWRlOm51bGwsdWE6bmF2aWdhdG9yLnVzZXJBZ2VudCxyZWFkeTpmdW5jdGlvbihlKXtmLmlzUmVhZHk/ZSgpOnYucHVzaChlKX0sZGV0ZWN0OmZ1bmN0aW9uKCl7Zi5fY2hlY2tQbGF0Zm9ybXMoKSxoKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxmLnBsYXRmb3Jtcy5sZW5ndGg7ZSsrKXQuYm9keS5jbGFzc0xpc3QuYWRkKFwicGxhdGZvcm0tXCIrZi5wbGF0Zm9ybXNbZV0pfSl9LHNldEdyYWRlOmZ1bmN0aW9uKGUpe3ZhciBuPWYuZ3JhZGU7Zi5ncmFkZT1lLGgoZnVuY3Rpb24oKXtuJiZ0LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImdyYWRlLVwiK24pLHQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZ3JhZGUtXCIrZSl9KX0sZGV2aWNlOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZGV2aWNlfHx7fX0sX2NoZWNrUGxhdGZvcm1zOmZ1bmN0aW9uKCl7Zi5wbGF0Zm9ybXM9W107dmFyIHQ9XCJhXCI7Zi5pc1dlYlZpZXcoKT8oZi5wbGF0Zm9ybXMucHVzaChcIndlYnZpZXdcIiksZS5jb3Jkb3ZhfHxlLlBob25lR2FwfHxlLnBob25lZ2FwP2YucGxhdGZvcm1zLnB1c2goXCJjb3Jkb3ZhXCIpOmUuZm9yZ2UmJmYucGxhdGZvcm1zLnB1c2goXCJ0cmlnZ2VyXCIpKTpmLnBsYXRmb3Jtcy5wdXNoKFwiYnJvd3NlclwiKSxmLmlzSVBhZCgpJiZmLnBsYXRmb3Jtcy5wdXNoKFwiaXBhZFwiKTt2YXIgbj1mLnBsYXRmb3JtKCk7aWYobil7Zi5wbGF0Zm9ybXMucHVzaChuKTt2YXIgaT1mLnZlcnNpb24oKTtpZihpKXt2YXIgcj1pLnRvU3RyaW5nKCk7ci5pbmRleE9mKFwiLlwiKT4wP3I9ci5yZXBsYWNlKFwiLlwiLFwiX1wiKTpyKz1cIl8wXCIsZi5wbGF0Zm9ybXMucHVzaChuK3Iuc3BsaXQoXCJfXCIpWzBdKSxmLnBsYXRmb3Jtcy5wdXNoKG4rciksZi5pc0FuZHJvaWQoKSYmNC40Pmk/dD00Pmk/XCJjXCI6XCJiXCI6Zi5pc1dpbmRvd3NQaG9uZSgpJiYodD1cImJcIil9fWYuc2V0R3JhZGUodCl9LGlzV2ViVmlldzpmdW5jdGlvbigpe3JldHVybiEhKGUuY29yZG92YXx8ZS5QaG9uZUdhcHx8ZS5waG9uZWdhcHx8ZS5mb3JnZSl9LGlzSVBhZDpmdW5jdGlvbigpe3JldHVybi9pUGFkL2kudGVzdChmLm5hdmlnYXRvci5wbGF0Zm9ybSk/ITA6L2lQYWQvaS50ZXN0KGYudWEpfSxpc0lPUzpmdW5jdGlvbigpe3JldHVybiBmLmlzKGwpfSxpc0FuZHJvaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gZi5pcyhjKX0saXNXaW5kb3dzUGhvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5pcyhkKX0saXNFZGdlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuaXModSl9LGlzQ3Jvc3N3YWxrOmZ1bmN0aW9uKCl7cmV0dXJuIGYuaXMocCl9LHBsYXRmb3JtOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PT1tJiZmLnNldFBsYXRmb3JtKGYuZGV2aWNlKCkucGxhdGZvcm0pLG19LHNldFBsYXRmb3JtOmZ1bmN0aW9uKGUpe209XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJm51bGwhPT1lJiZlLmxlbmd0aD9lLnRvTG93ZXJDYXNlKCk6aShcImlvbmljcGxhdGZvcm1cIik/aShcImlvbmljcGxhdGZvcm1cIik6Zi51YS5pbmRleE9mKFwiRWRnZVwiKT4tMT91OmYudWEuaW5kZXhPZihcIldpbmRvd3MgUGhvbmVcIik+LTE/ZDpmLnVhLmluZGV4T2YoXCJBbmRyb2lkXCIpPjA/YzovaVBob25lfGlQYWR8aVBvZC8udGVzdChmLnVhKT9sOmYubmF2aWdhdG9yLnBsYXRmb3JtJiZuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIilbMF18fFwiXCJ9LHZlcnNpb246ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09PWcmJmYuc2V0VmVyc2lvbihmLmRldmljZSgpLnZlcnNpb24pLGd9LHNldFZlcnNpb246ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJm51bGwhPT1lJiYoZT1lLnNwbGl0KFwiLlwiKSxlPXBhcnNlRmxvYXQoZVswXStcIi5cIisoZS5sZW5ndGg+MT9lWzFdOjApKSwhaXNOYU4oZSkpKXJldHVybiB2b2lkKGc9ZSk7Zz0wO3ZhciB0PWYucGxhdGZvcm0oKSxuPXthbmRyb2lkOi9BbmRyb2lkIChcXGQrKS4oXFxkKyk/Lyxpb3M6L09TIChcXGQrKV8oXFxkKyk/Lyx3aW5kb3dzcGhvbmU6L1dpbmRvd3MgUGhvbmUgKFxcZCspLihcXGQrKT8vfTtuW3RdJiYoZT1mLnVhLm1hdGNoKG5bdF0pLGUmJmUubGVuZ3RoPjImJihnPXBhcnNlRmxvYXQoZVsxXStcIi5cIitlWzJdKSkpfSxpczpmdW5jdGlvbihlKXtpZihlPWUudG9Mb3dlckNhc2UoKSxmLnBsYXRmb3Jtcylmb3IodmFyIHQ9MDt0PGYucGxhdGZvcm1zLmxlbmd0aDt0KyspaWYoZi5wbGF0Zm9ybXNbdF09PT1lKXJldHVybiEwO3ZhciBuPWYucGxhdGZvcm0oKTtyZXR1cm4gbj9uPT09ZS50b0xvd2VyQ2FzZSgpOmYudWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKGUpPj0wfSxleGl0QXBwOmZ1bmN0aW9uKCl7Zi5yZWFkeShmdW5jdGlvbigpe25hdmlnYXRvci5hcHAmJm5hdmlnYXRvci5hcHAuZXhpdEFwcCYmbmF2aWdhdG9yLmFwcC5leGl0QXBwKCl9KX0sc2hvd1N0YXR1c0JhcjpmdW5jdGlvbihuKXtmLl9zaG93U3RhdHVzQmFyPW4sZi5yZWFkeShmdW5jdGlvbigpe2goZnVuY3Rpb24oKXtmLl9zaG93U3RhdHVzQmFyPyhlLlN0YXR1c0JhciYmZS5TdGF0dXNCYXIuc2hvdygpLHQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdHVzLWJhci1oaWRlXCIpKTooZS5TdGF0dXNCYXImJmUuU3RhdHVzQmFyLmhpZGUoKSx0LmJvZHkuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1iYXItaGlkZVwiKSl9KX0pfSxmdWxsU2NyZWVuOmZ1bmN0aW9uKGUsaSl7Zi5pc0Z1bGxTY3JlZW49ZSE9PSExLG4uRG9tVXRpbC5yZWFkeShmdW5jdGlvbigpe2goZnVuY3Rpb24oKXtmLmlzRnVsbFNjcmVlbj90LmJvZHkuY2xhc3NMaXN0LmFkZChcImZ1bGxzY3JlZW5cIik6dC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpfSksZi5zaG93U3RhdHVzQmFyKGk9PT0hMCl9KX19LG09bnVsbCxnPW51bGwsdj1bXSxfPTJlMztyKCksXCJjb21wbGV0ZVwiPT09dC5yZWFkeVN0YXRlP2EoKToocz0hMCxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsYSwhMSkpfSh3aW5kb3csZG9jdW1lbnQsaW9uaWMpLGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dC5DU1M9e30sdC5DU1MuVFJBTlNJVElPTj1bXSx0LkNTUy5UUkFOU0ZPUk09W10sdC5FVkVOVFM9e30sZnVuY3Rpb24oKXt2YXIgbixpPVtcIndlYmtpdFRyYW5zZm9ybVwiLFwidHJhbnNmb3JtXCIsXCItd2Via2l0LXRyYW5zZm9ybVwiLFwid2Via2l0LXRyYW5zZm9ybVwiLFwiLW1vei10cmFuc2Zvcm1cIixcIm1vei10cmFuc2Zvcm1cIixcIk1velRyYW5zZm9ybVwiLFwibW96VHJhbnNmb3JtXCIsXCJtc1RyYW5zZm9ybVwiXTtmb3Iobj0wO248aS5sZW5ndGg7bisrKWlmKHZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50LnN0eWxlW2lbbl1dKXt0LkNTUy5UUkFOU0ZPUk09aVtuXTticmVha31mb3IoaT1bXCJ3ZWJraXRUcmFuc2l0aW9uXCIsXCJtb3pUcmFuc2l0aW9uXCIsXCJtc1RyYW5zaXRpb25cIixcInRyYW5zaXRpb25cIl0sbj0wO248aS5sZW5ndGg7bisrKWlmKHZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50LnN0eWxlW2lbbl1dKXt0LkNTUy5UUkFOU0lUSU9OPWlbbl07YnJlYWt9dC5DU1MuVFJBTlNJVElPTj10LkNTUy5UUkFOU0lUSU9OfHxcInRyYW5zaXRpb25cIjt2YXIgcj10LkNTUy5UUkFOU0lUSU9OLmluZGV4T2YoXCJ3ZWJraXRcIik+LTE7dC5DU1MuVFJBTlNJVElPTl9EVVJBVElPTj0ocj9cIi13ZWJraXQtXCI6XCJcIikrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsdC5DU1MuVFJBTlNJVElPTkVORD0ocj9cIndlYmtpdFRyYW5zaXRpb25FbmQgXCI6XCJcIikrXCJ0cmFuc2l0aW9uZW5kXCJ9KCksZnVuY3Rpb24oKXt2YXIgZT1cInRvdWNoc3RhcnRcIixuPVwidG91Y2htb3ZlXCIsaT1cInRvdWNoZW5kXCIscj1cInRvdWNoY2FuY2VsXCI7d2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZD8oZT1cInBvaW50ZXJkb3duXCIsXG5uPVwicG9pbnRlcm1vdmVcIixpPVwicG9pbnRlcnVwXCIscj1cInBvaW50ZXJjYW5jZWxcIik6d2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkJiYoZT1cIk1TUG9pbnRlckRvd25cIixuPVwiTVNQb2ludGVyTW92ZVwiLGk9XCJNU1BvaW50ZXJVcFwiLHI9XCJNU1BvaW50ZXJDYW5jZWxcIiksdC5FVkVOVFMudG91Y2hzdGFydD1lLHQuRVZFTlRTLnRvdWNobW92ZT1uLHQuRVZFTlRTLnRvdWNoZW5kPWksdC5FVkVOVFMudG91Y2hjYW5jZWw9cn0oKSxcImNsYXNzTGlzdFwiaW4gZS5kb2N1bWVudEVsZW1lbnR8fCFPYmplY3QuZGVmaW5lUHJvcGVydHl8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBIVE1MRWxlbWVudHx8T2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImNsYXNzTGlzdFwiLHtnZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuLGk9dC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtmb3Iobj0wO248YXJndW1lbnRzLmxlbmd0aDtuKyspZShpLGkuaW5kZXhPZihhcmd1bWVudHNbbl0pLGFyZ3VtZW50c1tuXSk7dC5jbGFzc05hbWU9aS5qb2luKFwiIFwiKX19dmFyIHQ9dGhpcztyZXR1cm57YWRkOmUoZnVuY3Rpb24oZSx0LG4pe350fHxlLnB1c2gobil9KSxyZW1vdmU6ZShmdW5jdGlvbihlLHQpe350JiZlLnNwbGljZSh0LDEpfSksdG9nZ2xlOmUoZnVuY3Rpb24oZSx0LG4pe350P2Uuc3BsaWNlKHQsMSk6ZS5wdXNoKG4pfSksY29udGFpbnM6ZnVuY3Rpb24oZSl7cmV0dXJuISF+dC5jbGFzc05hbWUuc3BsaXQoL1xccysvKS5pbmRleE9mKGUpfSxpdGVtOmZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pW2VdfHxudWxsfX19fSl9KGRvY3VtZW50LGlvbmljKTt2YXIgWCxGLEIsVywkLHEsVSxLLGo9XCJ0b3VjaG1vdmVcIixaPTEyLFE9NTAsSj17Y2xpY2s6aSxtb3VzZWRvd246cixtb3VzZXVwOmEsbW91c2Vtb3ZlOm8sdG91Y2hzdGFydDpzLHRvdWNoZW5kOmwsdG91Y2hjYW5jZWw6ZCx0b3VjaG1vdmU6Yyxwb2ludGVyZG93bjpzLHBvaW50ZXJ1cDpsLHBvaW50ZXJjYW5jZWw6ZCxwb2ludGVybW92ZTpjLE1TUG9pbnRlckRvd246cyxNU1BvaW50ZXJVcDpsLE1TUG9pbnRlckNhbmNlbDpkLE1TUG9pbnRlck1vdmU6Yyxmb2N1c2luOm0sZm9jdXNvdXQ6Z307aW9uaWMudGFwPXtyZWdpc3RlcjpmdW5jdGlvbih0KXtyZXR1cm4gWD10LGUoXCJjbGlja1wiLCEwLCEwKSxlKFwibW91c2V1cFwiKSxlKFwibW91c2Vkb3duXCIpLHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQ/KGUoXCJwb2ludGVyZG93blwiKSxlKFwicG9pbnRlcnVwXCIpLGUoXCJwb2ludGVyY2FuY2VsXCIpLGo9XCJwb2ludGVybW92ZVwiKTp3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ/KGUoXCJNU1BvaW50ZXJEb3duXCIpLGUoXCJNU1BvaW50ZXJVcFwiKSxlKFwiTVNQb2ludGVyQ2FuY2VsXCIpLGo9XCJNU1BvaW50ZXJNb3ZlXCIpOihlKFwidG91Y2hzdGFydFwiKSxlKFwidG91Y2hlbmRcIiksZShcInRvdWNoY2FuY2VsXCIpKSxlKFwiZm9jdXNpblwiKSxlKFwiZm9jdXNvdXRcIiksZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gSillKHQsITEpO1g9bnVsbCxGPW51bGwsQj0hMSwkPSExLHE9bnVsbH19LGlnbm9yZVNjcm9sbFN0YXJ0OmZ1bmN0aW9uKGUpe3JldHVybiBlLmRlZmF1bHRQcmV2ZW50ZWR8fC9eKGZpbGV8cmFuZ2UpJC9pLnRlc3QoZS50YXJnZXQudHlwZSl8fFwidHJ1ZVwiPT0oZS50YXJnZXQuZGF0YXNldD9lLnRhcmdldC5kYXRhc2V0LnByZXZlbnRTY3JvbGw6ZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2ZW50LXNjcm9sbFwiKSl8fCEhL14ob2JqZWN0fGVtYmVkKSQvaS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpfHxpb25pYy50YXAuaXNFbGVtZW50VGFwRGlzYWJsZWQoZS50YXJnZXQpfSxpc1RleHRJbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4hIWUmJihcIlRFWFRBUkVBXCI9PWUudGFnTmFtZXx8XCJ0cnVlXCI9PT1lLmNvbnRlbnRFZGl0YWJsZXx8XCJJTlBVVFwiPT1lLnRhZ05hbWUmJiEvXihyYWRpb3xjaGVja2JveHxyYW5nZXxmaWxlfHN1Ym1pdHxyZXNldHxjb2xvcnxpbWFnZXxidXR0b24pJC9pLnRlc3QoZS50eXBlKSl9LGlzRGF0ZUlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiEhZSYmXCJJTlBVVFwiPT1lLnRhZ05hbWUmJi9eKGRhdGV8dGltZXxkYXRldGltZS1sb2NhbHxtb250aHx3ZWVrKSQvaS50ZXN0KGUudHlwZSl9LGlzVmlkZW86ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiZcIlZJREVPXCI9PWUudGFnTmFtZX0saXNLZXlib2FyZEVsZW1lbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWlvbmljLlBsYXRmb3JtLmlzSU9TKCl8fGlvbmljLlBsYXRmb3JtLmlzSVBhZCgpP2lvbmljLnRhcC5pc1RleHRJbnB1dChlKSYmIWlvbmljLnRhcC5pc0RhdGVJbnB1dChlKTppb25pYy50YXAuaXNUZXh0SW5wdXQoZSl8fCEhZSYmXCJTRUxFQ1RcIj09ZS50YWdOYW1lfSxpc0xhYmVsV2l0aFRleHRJbnB1dDpmdW5jdGlvbihlKXt2YXIgdD13KGUsITEpO3JldHVybiEhdCYmaW9uaWMudGFwLmlzVGV4dElucHV0KFQodCkpfSxjb250YWluc09ySXNUZXh0SW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlvbmljLnRhcC5pc1RleHRJbnB1dChlKXx8aW9uaWMudGFwLmlzTGFiZWxXaXRoVGV4dElucHV0KGUpfSxjbG9uZUZvY3VzZWRJbnB1dDpmdW5jdGlvbihlKXtpb25pYy50YXAuaGFzQ2hlY2tlZENsb25lfHwoaW9uaWMudGFwLmhhc0NoZWNrZWRDbG9uZT0hMCxpb25pYy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoXCI6Zm9jdXNcIik7aWYoaW9uaWMudGFwLmlzVGV4dElucHV0KHQpJiYhaW9uaWMudGFwLmlzRGF0ZUlucHV0KHQpKXt2YXIgbj10LmNsb25lTm9kZSghMCk7bi52YWx1ZT10LnZhbHVlLG4uY2xhc3NMaXN0LmFkZChcImNsb25lZC10ZXh0LWlucHV0XCIpLG4ucmVhZE9ubHk9ITAsdC5pc0NvbnRlbnRFZGl0YWJsZSYmKG4uY29udGVudEVkaXRhYmxlPXQuY29udGVudEVkaXRhYmxlLG4uaW5uZXJIVE1MPXQuaW5uZXJIVE1MKSx0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4sdCksdC5jbGFzc0xpc3QuYWRkKFwicHJldmlvdXMtaW5wdXQtZm9jdXNcIiksbi5zY3JvbGxUb3A9dC5zY3JvbGxUb3B9fSkpfSxoYXNDaGVja2VkQ2xvbmU6ITEscmVtb3ZlQ2xvbmVkSW5wdXRzOmZ1bmN0aW9uKGUpe2lvbmljLnRhcC5oYXNDaGVja2VkQ2xvbmU9ITEsaW9uaWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dmFyIHQsbj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvbmVkLXRleHQtaW5wdXRcIiksaT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlvdXMtaW5wdXQtZm9jdXNcIik7Zm9yKHQ9MDt0PG4ubGVuZ3RoO3QrKyluW3RdLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoblt0XSk7Zm9yKHQ9MDt0PGkubGVuZ3RoO3QrKylpW3RdLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmV2aW91cy1pbnB1dC1mb2N1c1wiKSxpW3RdLnN0eWxlLnRvcD1cIlwiLGlvbmljLmtleWJvYXJkLmlzT3BlbiYmIWlvbmljLmtleWJvYXJkLmlzQ2xvc2luZyYmaVt0XS5mb2N1cygpfSl9LHJlcXVpcmVzTmF0aXZlQ2xpY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIGlvbmljLlBsYXRmb3JtLmlzV2luZG93c1Bob25lKCkmJihcIkFcIj09ZS50YWdOYW1lfHxcIkJVVFRPTlwiPT1lLnRhZ05hbWV8fGUuaGFzQXR0cmlidXRlKFwibmctY2xpY2tcIil8fFwiSU5QVVRcIj09ZS50YWdOYW1lJiYoXCJidXR0b25cIj09ZS50eXBlfHxcInN1Ym1pdFwiPT1lLnR5cGUpKT8hMDohZXx8ZS5kaXNhYmxlZHx8L14oZmlsZXxyYW5nZSkkL2kudGVzdChlLnR5cGUpfHwvXihvYmplY3R8dmlkZW8pJC9pLnRlc3QoZS50YWdOYW1lKXx8aW9uaWMudGFwLmlzTGFiZWxDb250YWluaW5nRmlsZUlucHV0KGUpPyEwOmlvbmljLnRhcC5pc0VsZW1lbnRUYXBEaXNhYmxlZChlKX0saXNMYWJlbENvbnRhaW5pbmdGaWxlSW5wdXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dyhlKTtpZihcIkxBQkVMXCIhPT10LnRhZ05hbWUpcmV0dXJuITE7dmFyIG49dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT1maWxlXVwiKTtyZXR1cm4gbiYmbi5kaXNhYmxlZD09PSExPyEwOiExfSxpc0VsZW1lbnRUYXBEaXNhYmxlZDpmdW5jdGlvbihlKXtpZihlJiYxPT09ZS5ub2RlVHlwZSlmb3IodmFyIHQ9ZTt0Oyl7aWYoXCJ0cnVlXCI9PSh0LmRhdGFzZXQ/dC5kYXRhc2V0LnRhcERpc2FibGVkOnQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFwLWRpc2FibGVkXCIpKSlyZXR1cm4hMDt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMX0sc2V0VG9sZXJhbmNlOmZ1bmN0aW9uKGUsdCl7Wj1lLFE9dH0sY2FuY2VsQ2xpY2s6ZnVuY3Rpb24oKXskPSEwfSxwb2ludGVyQ29vcmQ6ZnVuY3Rpb24oZSl7dmFyIHQ9e3g6MCx5OjB9O2lmKGUpe3ZhciBuPWUudG91Y2hlcyYmZS50b3VjaGVzLmxlbmd0aD9lLnRvdWNoZXM6W2VdLGk9ZS5jaGFuZ2VkVG91Y2hlcyYmZS5jaGFuZ2VkVG91Y2hlc1swXXx8blswXTtpJiYodC54PWkuY2xpZW50WHx8aS5wYWdlWHx8MCx0Lnk9aS5jbGllbnRZfHxpLnBhZ2VZfHwwKX1yZXR1cm4gdH19LGlvbmljLkRvbVV0aWwucmVhZHkoZnVuY3Rpb24oKXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgYW5ndWxhcj9hbmd1bGFyOm51bGw7KCFlfHxlJiYhZS5zY2VuYXJpbykmJmlvbmljLnRhcC5yZWdpc3Rlcihkb2N1bWVudCl9KSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXthPXt9LHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpfWZ1bmN0aW9uIGkoKXtmb3IodmFyIGUgaW4gYSlhW2VdJiYoYVtlXS5jbGFzc0xpc3QuYWRkKGwpLG9bZV09YVtlXSk7YT17fX1mdW5jdGlvbiByKCl7aWYodC50cmFuc2l0aW9uJiZ0LnRyYW5zaXRpb24uaXNBY3RpdmUpcmV0dXJuIHZvaWQgc2V0VGltZW91dChyLDQwMCk7Zm9yKHZhciBlIGluIG8pb1tlXSYmKG9bZV0uY2xhc3NMaXN0LnJlbW92ZShsKSxkZWxldGUgb1tlXSl9dmFyIGE9e30sbz17fSxzPTAsbD1cImFjdGl2YXRlZFwiO3QuYWN0aXZhdG9yPXtzdGFydDpmdW5jdGlvbihlKXt2YXIgbj10LnRhcC5wb2ludGVyQ29vcmQoZSkueDtuPjAmJjMwPm58fHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7aWYoISh0LnNjcm9sbCYmdC5zY3JvbGwuaXNTY3JvbGxpbmd8fHQudGFwLnJlcXVpcmVzTmF0aXZlQ2xpY2soZS50YXJnZXQpKSl7Zm9yKHZhciBuLHI9ZS50YXJnZXQsbz0wOzY+byYmKHImJjE9PT1yLm5vZGVUeXBlKTtvKyspe2lmKG4mJnIuY2xhc3NMaXN0JiZyLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1cIikpe249cjticmVha31pZihcIkFcIj09ci50YWdOYW1lfHxcIkJVVFRPTlwiPT1yLnRhZ05hbWV8fHIuaGFzQXR0cmlidXRlKFwibmctY2xpY2tcIikpe249cjticmVha31pZihyLmNsYXNzTGlzdC5jb250YWlucyhcImJ1dHRvblwiKSl7bj1yO2JyZWFrfWlmKFwiSU9OLUNPTlRFTlRcIj09ci50YWdOYW1lfHxyLmNsYXNzTGlzdCYmci5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5lXCIpfHxcIkJPRFlcIj09ci50YWdOYW1lKWJyZWFrO3I9ci5wYXJlbnRFbGVtZW50fW4mJihhW3NdPW4sdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaSkscz1zPjI5PzA6cysxKX19KX0sZW5kOmZ1bmN0aW9uKCl7c2V0VGltZW91dChuLDIwMCl9fX0oZG9jdW1lbnQsaW9uaWMpLGZ1bmN0aW9uKGUpe3ZhciB0PTA7ZS5VdGlscz17YXJyYXlNb3ZlOmZ1bmN0aW9uKGUsdCxuKXtpZihuPj1lLmxlbmd0aClmb3IodmFyIGk9bi1lLmxlbmd0aDtpLS0rMTspZS5wdXNoKHZvaWQgMCk7cmV0dXJuIGUuc3BsaWNlKG4sMCxlLnNwbGljZSh0LDEpWzBdKSxlfSxwcm94eTpmdW5jdGlvbihlLHQpe3ZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0LG4uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX19LGRlYm91bmNlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyLGEsbyxzO3JldHVybiBmdW5jdGlvbigpe2E9dGhpcyxyPWFyZ3VtZW50cyxvPW5ldyBEYXRlO3ZhciBsPWZ1bmN0aW9uKCl7dmFyIGM9bmV3IERhdGUtbzt0PmM/aT1zZXRUaW1lb3V0KGwsdC1jKTooaT1udWxsLG58fChzPWUuYXBwbHkoYSxyKSkpfSxjPW4mJiFpO3JldHVybiBpfHwoaT1zZXRUaW1lb3V0KGwsdCkpLGMmJihzPWUuYXBwbHkoYSxyKSksc319LHRocm90dGxlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyLGEsbz1udWxsLHM9MDtufHwobj17fSk7dmFyIGw9ZnVuY3Rpb24oKXtzPW4ubGVhZGluZz09PSExPzA6RGF0ZS5ub3coKSxvPW51bGwsYT1lLmFwcGx5KGkscil9O3JldHVybiBmdW5jdGlvbigpe3ZhciBjPURhdGUubm93KCk7c3x8bi5sZWFkaW5nIT09ITF8fChzPWMpO3ZhciBkPXQtKGMtcyk7cmV0dXJuIGk9dGhpcyxyPWFyZ3VtZW50cywwPj1kPyhjbGVhclRpbWVvdXQobyksbz1udWxsLHM9YyxhPWUuYXBwbHkoaSxyKSk6b3x8bi50cmFpbGluZz09PSExfHwobz1zZXRUaW1lb3V0KGwsZCkpLGF9fSxpbmhlcml0OmZ1bmN0aW9uKHQsbil7dmFyIGkscj10aGlzO2k9dCYmdC5oYXNPd25Qcm9wZXJ0eShcImNvbnN0cnVjdG9yXCIpP3QuY29uc3RydWN0b3I6ZnVuY3Rpb24oKXtyZXR1cm4gci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZXh0ZW5kKGkscixuKTt2YXIgYT1mdW5jdGlvbigpe3RoaXMuY29uc3RydWN0b3I9aX07cmV0dXJuIGEucHJvdG90eXBlPXIucHJvdG90eXBlLGkucHJvdG90eXBlPW5ldyBhLHQmJmUuZXh0ZW5kKGkucHJvdG90eXBlLHQpLGkuX19zdXBlcl9fPXIucHJvdG90eXBlLGl9LGV4dGVuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpZihpKWZvcih2YXIgciBpbiBpKWVbcl09aVtyXX1yZXR1cm4gZX0sbmV4dFVpZDpmdW5jdGlvbigpe3JldHVyblwiaW9uXCIrdCsrfSxkaXNjb25uZWN0U2NvcGU6ZnVuY3Rpb24oZSl7aWYoZSYmZS4kcm9vdCE9PWUpe3ZhciB0PWUuJHBhcmVudDtlLiQkZGlzY29ubmVjdGVkPSEwLGUuJGJyb2FkY2FzdChcIiRpb25pYy5kaXNjb25uZWN0U2NvcGVcIixlKSx0LiQkY2hpbGRIZWFkPT09ZSYmKHQuJCRjaGlsZEhlYWQ9ZS4kJG5leHRTaWJsaW5nKSx0LiQkY2hpbGRUYWlsPT09ZSYmKHQuJCRjaGlsZFRhaWw9ZS4kJHByZXZTaWJsaW5nKSxlLiQkcHJldlNpYmxpbmcmJihlLiQkcHJldlNpYmxpbmcuJCRuZXh0U2libGluZz1lLiQkbmV4dFNpYmxpbmcpLGUuJCRuZXh0U2libGluZyYmKGUuJCRuZXh0U2libGluZy4kJHByZXZTaWJsaW5nPWUuJCRwcmV2U2libGluZyksZS4kJG5leHRTaWJsaW5nPWUuJCRwcmV2U2libGluZz1udWxsfX0scmVjb25uZWN0U2NvcGU6ZnVuY3Rpb24oZSl7aWYoZSYmZS4kcm9vdCE9PWUmJmUuJCRkaXNjb25uZWN0ZWQpe3ZhciB0PWUuJHBhcmVudDtlLiQkZGlzY29ubmVjdGVkPSExLGUuJGJyb2FkY2FzdChcIiRpb25pYy5yZWNvbm5lY3RTY29wZVwiLGUpLGUuJCRwcmV2U2libGluZz10LiQkY2hpbGRUYWlsLHQuJCRjaGlsZEhlYWQ/KHQuJCRjaGlsZFRhaWwuJCRuZXh0U2libGluZz1lLHQuJCRjaGlsZFRhaWw9ZSk6dC4kJGNoaWxkSGVhZD10LiQkY2hpbGRUYWlsPWV9fSxpc1Njb3BlRGlzY29ubmVjdGVkOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lO3Q7KXtpZih0LiQkZGlzY29ubmVjdGVkKXJldHVybiEwO3Q9dC4kcGFyZW50fXJldHVybiExfX0sZS5pbmhlcml0PWUuVXRpbHMuaW5oZXJpdCxlLmV4dGVuZD1lLlV0aWxzLmV4dGVuZCxlLnRocm90dGxlPWUuVXRpbHMudGhyb3R0bGUsZS5wcm94eT1lLlV0aWxzLnByb3h5LGUuZGVib3VuY2U9ZS5VdGlscy5kZWJvdW5jZX0od2luZG93LmlvbmljKTt2YXIgZWUsdGUsbmUsaWUscmUsYWU9MCxvZT0wLHNlPTAsbGU9ITEsY2U9XCJrZXlib2FyZC1vcGVuXCIsZGU9XCJzY3JvbGwtY29udGVudFwiLHVlPWlvbmljLmRlYm91bmNlKEUsMjAwLCEwKSxwZT1pb25pYy5kZWJvdW5jZSh5LDEwMCwhMCk7aW9uaWMua2V5Ym9hcmQ9e2lzT3BlbjohMSxpc0Nsb3Npbmc6ITEsaXNPcGVuaW5nOiExLGhlaWdodDowLGlzTGFuZHNjYXBlOiExLGlzSW5pdGlhbGl6ZWQ6ITEsaGlkZTpmdW5jdGlvbigpe1YoKSYmY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmNsb3NlKCksZWUmJmVlLmJsdXIoKX0sc2hvdzpmdW5jdGlvbigpe1YoKSYmY29yZG92YS5wbHVnaW5zLktleWJvYXJkLnNob3coKX0sZGlzYWJsZTpmdW5jdGlvbigpe1YoKT8od2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJuYXRpdmUua2V5Ym9hcmRzaG93XCIscGUpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibmF0aXZlLmtleWJvYXJkaGlkZVwiLHgpKTpkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLHgpLGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlvbmljLmZvY3VzaW5cIix1ZSksZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLHVlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsRCksd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkP2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsUyk6ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixTKSxpb25pYy5rZXlib2FyZC5pc0luaXRpYWxpemVkPSExfSxlbmFibGU6ZnVuY3Rpb24oKXtTKCl9fSxhZT1HKCksaW9uaWMuUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKXtBKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLEQpLHNldFRpbWVvdXQoQSw5OTkpLHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZD9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLFMsITEpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsUywhMSl9KTt2YXIgaGUsZmU9e307aW9uaWMudmlld3BvcnQ9e29yaWVudGF0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoPndpbmRvdy5pbm5lckhlaWdodD85MDowfX0saW9uaWMuUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKXtSKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7c2V0VGltZW91dChILDFlMyl9LCExKX0pLGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2Uudmlld3MuVmlldz1mdW5jdGlvbigpe3RoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUudmlld3MuVmlldy5pbmhlcml0PWUuaW5oZXJpdCxlLmV4dGVuZChlLnZpZXdzLlZpZXcucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7fX0pfSh3aW5kb3cuaW9uaWMpO3ZhciBtZT17ZWZmZWN0Ont9fTshZnVuY3Rpb24oZSl7dmFyIHQ9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfSxuPTYwLGk9MWUzLHI9e30sYT0xO21lLmVmZmVjdC5BbmltYXRlPXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24oKXt2YXIgdD1lLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZS53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGUubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUsbj0hIXQ7aWYodCYmIS9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcXChcXClcXHMqXFx7XFxzKlxcW25hdGl2ZSBjb2RlXFxdXFxzKlxcfS9pLnRlc3QodC50b1N0cmluZygpKSYmKG49ITEpLG4pcmV0dXJuIGZ1bmN0aW9uKGUsbil7dChlLG4pfTt2YXIgaT02MCxyPXt9LGE9MCxvPTEscz1udWxsLGw9K25ldyBEYXRlO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1vKys7cmV0dXJuIHJbdF09ZSxhKyssbnVsbD09PXMmJihzPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIGU9K25ldyBEYXRlLHQ9cjtyPXt9LGE9MDtmb3IodmFyIG4gaW4gdCl0Lmhhc093blByb3BlcnR5KG4pJiYodFtuXShlKSxsPWUpO2UtbD4yNTAwJiYoY2xlYXJJbnRlcnZhbChzKSxzPW51bGwpfSwxZTMvaSkpLHR9fSgpLHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCE9cltlXTtyZXR1cm4gdCYmKHJbZV09bnVsbCksdH0saXNSdW5uaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1yW2VdfSxzdGFydDpmdW5jdGlvbihlLG8scyxsLGMsZCl7dmFyIHU9dCgpLHA9dSxoPTAsZj0wLG09YSsrO2lmKGR8fChkPWRvY3VtZW50LmJvZHkpLG0lMjA9PT0wKXt2YXIgZz17fTtmb3IodmFyIHYgaW4gcilnW3ZdPSEwO3I9Z312YXIgXz1mdW5jdGlvbihhKXt2YXIgZz1hIT09ITAsdj10KCk7aWYoIXJbbV18fG8mJiFvKG0pKXJldHVybiByW21dPW51bGwsdm9pZChzJiZzKG4tZi8oKHYtdSkvaSksbSwhMSkpO2lmKGcpZm9yKHZhciB3PU1hdGgucm91bmQoKHYtcCkvKGkvbikpLTEsVD0wO1Q8TWF0aC5taW4odyw0KTtUKyspXyghMCksZisrO2wmJihoPSh2LXUpL2wsaD4xJiYoaD0xKSk7dmFyIGI9Yz9jKGgpOmg7ZShiLHYsZykhPT0hMSYmMSE9PWh8fCFnP2cmJihwPXYsbWUuZWZmZWN0LkFuaW1hdGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8sZCkpOihyW21dPW51bGwscyYmcyhuLWYvKCh2LXUpL2kpLG0sMT09PWh8fG51bGw9PWwpKX07cmV0dXJuIHJbbV09ITAsbWUuZWZmZWN0LkFuaW1hdGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8sZCksbX19fSh3aW5kb3cpLGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKCl7fSxuPWZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLnBvdyhlLTEsMykrMX0saT1mdW5jdGlvbihlKXtyZXR1cm4oZS89LjUpPDE/LjUqTWF0aC5wb3coZSwzKTouNSooTWF0aC5wb3coZS0yLDMpKzIpfTtlLnZpZXdzLlNjcm9sbD1lLnZpZXdzLlZpZXcuaW5oZXJpdCh7aW5pdGlhbGl6ZTpmdW5jdGlvbihuKXt2YXIgaT10aGlzO2kuX19jb250YWluZXI9bi5lbCxpLl9fY29udGVudD1uLmVsLmZpcnN0RWxlbWVudENoaWxkLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLl9fY29udGFpbmVyJiZpLl9fY29udGVudCYmKGkuX19jb250YWluZXIuc2Nyb2xsVG9wPTAsaS5fX2NvbnRlbnQuc2Nyb2xsVG9wPTApfSksaS5vcHRpb25zPXtzY3JvbGxpbmdYOiExLHNjcm9sbGJhclg6ITAsc2Nyb2xsaW5nWTohMCxzY3JvbGxiYXJZOiEwLHN0YXJ0WDowLHN0YXJ0WTowLHdoZWVsRGFtcGVuOjYsbWluU2Nyb2xsYmFyU2l6ZVg6NSxtaW5TY3JvbGxiYXJTaXplWTo1LHNjcm9sbGJhcnNGYWRlOiEwLHNjcm9sbGJhckZhZGVEZWxheTozMDAsc2Nyb2xsYmFyUmVzaXplRmFkZURlbGF5OjFlMyxhbmltYXRpbmc6ITAsYW5pbWF0aW9uRHVyYXRpb246MjUwLGRlY2VsVmVsb2NpdHlUaHJlc2hvbGQ6NCxkZWNlbFZlbG9jaXR5VGhyZXNob2xkUGFnaW5nOjQsYm91bmNpbmc6ITAsbG9ja2luZzohMCxwYWdpbmc6ITEsc25hcHBpbmc6ITEsem9vbWluZzohMSxtaW5ab29tOi41LG1heFpvb206MyxzcGVlZE11bHRpcGxpZXI6MSxkZWNlbGVyYXRpb246Ljk3LHByZXZlbnREZWZhdWx0OiExLHNjcm9sbGluZ0NvbXBsZXRlOnQscGVuZXRyYXRpb25EZWNlbGVyYXRpb246LjAzLHBlbmV0cmF0aW9uQWNjZWxlcmF0aW9uOi4wOCxzY3JvbGxFdmVudEludGVydmFsOjEwLGZyZWV6ZTohMSxnZXRDb250ZW50V2lkdGg6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoaS5fX2NvbnRlbnQuc2Nyb2xsV2lkdGgsaS5fX2NvbnRlbnQub2Zmc2V0V2lkdGgpfSxnZXRDb250ZW50SGVpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KGkuX19jb250ZW50LnNjcm9sbEhlaWdodCxpLl9fY29udGVudC5vZmZzZXRIZWlnaHQrMippLl9fY29udGVudC5vZmZzZXRUb3ApfX07Zm9yKHZhciByIGluIG4paS5vcHRpb25zW3JdPW5bcl07aS5oaW50UmVzaXplPWUuZGVib3VuY2UoZnVuY3Rpb24oKXtpLnJlc2l6ZSgpfSwxZTMsITApLGkub25TY3JvbGw9ZnVuY3Rpb24oKXtlLnNjcm9sbC5pc1Njcm9sbGluZz8oY2xlYXJUaW1lb3V0KGkuc2Nyb2xsVGltZXIpLGkuc2Nyb2xsVGltZXI9c2V0VGltZW91dChpLnNldFNjcm9sbFN0b3AsODApKTpzZXRUaW1lb3V0KGkuc2V0U2Nyb2xsU3RhcnQsNTApfSxpLmZyZWV6ZT1mdW5jdGlvbihlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCYmKGkub3B0aW9ucy5mcmVlemU9ZSksaS5vcHRpb25zLmZyZWV6ZX0saS5mcmVlemVTaHV0PWkuZnJlZXplLGkuc2V0U2Nyb2xsU3RhcnQ9ZnVuY3Rpb24oKXtlLnNjcm9sbC5pc1Njcm9sbGluZz1NYXRoLmFicyhlLnNjcm9sbC5sYXN0VG9wLWkuX19zY3JvbGxUb3ApPjEsY2xlYXJUaW1lb3V0KGkuc2Nyb2xsVGltZXIpLGkuc2Nyb2xsVGltZXI9c2V0VGltZW91dChpLnNldFNjcm9sbFN0b3AsODApfSxpLnNldFNjcm9sbFN0b3A9ZnVuY3Rpb24oKXtlLnNjcm9sbC5pc1Njcm9sbGluZz0hMSxlLnNjcm9sbC5sYXN0VG9wPWkuX19zY3JvbGxUb3B9LGkudHJpZ2dlclNjcm9sbEV2ZW50PWUudGhyb3R0bGUoZnVuY3Rpb24oKXtpLm9uU2Nyb2xsKCksZS50cmlnZ2VyKFwic2Nyb2xsXCIse3Njcm9sbFRvcDppLl9fc2Nyb2xsVG9wLHNjcm9sbExlZnQ6aS5fX3Njcm9sbExlZnQsdGFyZ2V0OmkuX19jb250YWluZXJ9KX0saS5vcHRpb25zLnNjcm9sbEV2ZW50SW50ZXJ2YWwpLGkudHJpZ2dlclNjcm9sbEVuZEV2ZW50PWZ1bmN0aW9uKCl7ZS50cmlnZ2VyKFwic2Nyb2xsZW5kXCIse3Njcm9sbFRvcDppLl9fc2Nyb2xsVG9wLHNjcm9sbExlZnQ6aS5fX3Njcm9sbExlZnQsdGFyZ2V0OmkuX19jb250YWluZXJ9KX0saS5fX3Njcm9sbExlZnQ9aS5vcHRpb25zLnN0YXJ0WCxpLl9fc2Nyb2xsVG9wPWkub3B0aW9ucy5zdGFydFksaS5fX2NhbGxiYWNrPWkuZ2V0UmVuZGVyRm4oKSxpLl9faW5pdEV2ZW50SGFuZGxlcnMoKSxpLl9fY3JlYXRlU2Nyb2xsYmFycygpfSxydW46ZnVuY3Rpb24oKXt0aGlzLnJlc2l6ZSgpLHRoaXMuX19mYWRlU2Nyb2xsYmFycyhcIm91dFwiLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJSZXNpemVGYWRlRGVsYXkpfSxfX2lzU2luZ2xlVG91Y2g6ITEsX19pc1RyYWNraW5nOiExLF9fZGlkRGVjZWxlcmF0aW9uQ29tcGxldGU6ITEsX19pc0dlc3R1cmluZzohMSxfX2lzRHJhZ2dpbmc6ITEsX19pc0RlY2VsZXJhdGluZzohMSxfX2lzQW5pbWF0aW5nOiExLF9fY2xpZW50TGVmdDowLF9fY2xpZW50VG9wOjAsX19jbGllbnRXaWR0aDowLF9fY2xpZW50SGVpZ2h0OjAsX19jb250ZW50V2lkdGg6MCxfX2NvbnRlbnRIZWlnaHQ6MCxfX3NuYXBXaWR0aDoxMDAsX19zbmFwSGVpZ2h0OjEwMCxfX3JlZnJlc2hIZWlnaHQ6bnVsbCxfX3JlZnJlc2hBY3RpdmU6ITEsX19yZWZyZXNoQWN0aXZhdGU6bnVsbCxfX3JlZnJlc2hEZWFjdGl2YXRlOm51bGwsX19yZWZyZXNoU3RhcnQ6bnVsbCxfX3pvb21MZXZlbDoxLF9fc2Nyb2xsTGVmdDowLF9fc2Nyb2xsVG9wOjAsX19tYXhTY3JvbGxMZWZ0OjAsX19tYXhTY3JvbGxUb3A6MCxfX3NjaGVkdWxlZExlZnQ6MCxfX3NjaGVkdWxlZFRvcDowLF9fc2NoZWR1bGVkWm9vbTowLF9fbGFzdFRvdWNoTGVmdDpudWxsLF9fbGFzdFRvdWNoVG9wOm51bGwsX19sYXN0VG91Y2hNb3ZlOm51bGwsX19wb3NpdGlvbnM6bnVsbCxfX21pbkRlY2VsZXJhdGlvblNjcm9sbExlZnQ6bnVsbCxfX21pbkRlY2VsZXJhdGlvblNjcm9sbFRvcDpudWxsLF9fbWF4RGVjZWxlcmF0aW9uU2Nyb2xsTGVmdDpudWxsLF9fbWF4RGVjZWxlcmF0aW9uU2Nyb2xsVG9wOm51bGwsX19kZWNlbGVyYXRpb25WZWxvY2l0eVg6bnVsbCxfX2RlY2VsZXJhdGlvblZlbG9jaXR5WTpudWxsLF9fdHJhbnNmb3JtUHJvcGVydHk6bnVsbCxfX3BlcnNwZWN0aXZlUHJvcGVydHk6bnVsbCxfX2luZGljYXRvclg6bnVsbCxfX2luZGljYXRvclk6bnVsbCxfX3Njcm9sbGJhckZhZGVUaW1lb3V0Om51bGwsX19kaWRXYWl0Rm9yU2l6ZTpudWxsLF9fc2l6ZXJUaW1lb3V0Om51bGwsX19pbml0RXZlbnRIYW5kbGVyczpmdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7cmV0dXJuIGUudG91Y2hlcyYmZS50b3VjaGVzLmxlbmd0aD9lLnRvdWNoZXM6W3twYWdlWDplLnBhZ2VYLHBhZ2VZOmUucGFnZVl9XX12YXIgbixpPXRoaXMscj1pLl9fY29udGFpbmVyO2lmKGkuc2Nyb2xsQ2hpbGRJbnRvVmlldz1mdW5jdGlvbih0KXt2YXIgYT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtuPXIub2Zmc2V0SGVpZ2h0O3ZhciBvPWkuaXNTaHJ1bmtGb3JLZXlib2FyZCxzPXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSxsPXMmJndpbmRvdy5pbm5lcldpZHRoPj02ODA7aWYoIW8pe2lmKGUuUGxhdGZvcm0uaXNJT1MoKXx8ZS5QbGF0Zm9ybS5pc0Z1bGxTY3JlZW58fGwpe3ZhciBjPXQuZGV0YWlsLnZpZXdwb3J0SGVpZ2h0LWEsZD1NYXRoLm1heCgwLHQuZGV0YWlsLmtleWJvYXJkSGVpZ2h0LWMpO2UucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bi09ZCxyLnN0eWxlLmhlaWdodD1uK1wicHhcIixyLnN0eWxlLm92ZXJmbG93PVwidmlzaWJsZVwiLGkucmVzaXplKCl9KX1pLmlzU2hydW5rRm9yS2V5Ym9hcmQ9ITB9dC5kZXRhaWwuaXNFbGVtZW50VW5kZXJLZXlib2FyZCYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyLnNjcm9sbFRvcD0wLGkuaXNTaHJ1bmtGb3JLZXlib2FyZCYmIW8mJihhPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tKTt2YXIgcz0uNSpuLGw9KHQuZGV0YWlsLmVsZW1lbnRCb3R0b20rdC5kZXRhaWwuZWxlbWVudFRvcCkvMixjPWwtYSxkPWMrcztkPjAmJihlLlBsYXRmb3JtLmlzSU9TKCkmJmUudGFwLmNsb25lRm9jdXNlZElucHV0KHIsaSksaS5zY3JvbGxCeSgwLGQsITApLGkub25TY3JvbGwoKSl9KSx0LnN0b3BQcm9wYWdhdGlvbigpfSxpLnJlc2V0U2Nyb2xsVmlldz1mdW5jdGlvbigpe2kuaXNTaHJ1bmtGb3JLZXlib2FyZCYmKGkuaXNTaHJ1bmtGb3JLZXlib2FyZD0hMSxyLnN0eWxlLmhlaWdodD1cIlwiLHIuc3R5bGUub3ZlcmZsb3c9XCJcIiksaS5yZXNpemUoKX0sci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsQ2hpbGRJbnRvVmlld1wiLGkuc2Nyb2xsQ2hpbGRJbnRvVmlldyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0U2Nyb2xsVmlld1wiLGkucmVzZXRTY3JvbGxWaWV3KSxpLnRvdWNoU3RhcnQ9ZnVuY3Rpb24obil7aWYoaS5zdGFydENvb3JkaW5hdGVzPWUudGFwLnBvaW50ZXJDb29yZChuKSwhZS50YXAuaWdub3JlU2Nyb2xsU3RhcnQobikpe2lmKGkuX19pc0Rvd249ITAsZS50YXAuY29udGFpbnNPcklzVGV4dElucHV0KG4udGFyZ2V0KXx8XCJTRUxFQ1RcIj09PW4udGFyZ2V0LnRhZ05hbWUpcmV0dXJuIHZvaWQoaS5fX2hhc1N0YXJ0ZWQ9ITEpO2kuX19pc1NlbGVjdGFibGU9ITAsaS5fX2VuYWJsZVNjcm9sbFk9ITAsaS5fX2hhc1N0YXJ0ZWQ9ITAsaS5kb1RvdWNoU3RhcnQodChuKSxuLnRpbWVTdGFtcCksbi5wcmV2ZW50RGVmYXVsdCgpfX0saS50b3VjaE1vdmU9ZnVuY3Rpb24obil7aWYoIShpLm9wdGlvbnMuZnJlZXplfHwhaS5fX2lzRG93bnx8IWkuX19pc0Rvd24mJm4uZGVmYXVsdFByZXZlbnRlZHx8XCJURVhUQVJFQVwiPT09bi50YXJnZXQudGFnTmFtZSYmbi50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiOmZvY3VzXCIpKSl7aWYoIWkuX19oYXNTdGFydGVkJiYoZS50YXAuY29udGFpbnNPcklzVGV4dElucHV0KG4udGFyZ2V0KXx8XCJTRUxFQ1RcIj09PW4udGFyZ2V0LnRhZ05hbWUpKXJldHVybiBpLl9faGFzU3RhcnRlZD0hMCxpLmRvVG91Y2hTdGFydCh0KG4pLG4udGltZVN0YW1wKSx2b2lkIG4ucHJldmVudERlZmF1bHQoKTtpZihpLnN0YXJ0Q29vcmRpbmF0ZXMpe3ZhciBhPWUudGFwLnBvaW50ZXJDb29yZChuKTtpLl9faXNTZWxlY3RhYmxlJiZlLnRhcC5pc1RleHRJbnB1dChuLnRhcmdldCkmJk1hdGguYWJzKGkuc3RhcnRDb29yZGluYXRlcy54LWEueCk+MjAmJihpLl9fZW5hYmxlU2Nyb2xsWT0hMSxpLl9faXNTZWxlY3RhYmxlPSEwKSxpLl9fZW5hYmxlU2Nyb2xsWSYmTWF0aC5hYnMoaS5zdGFydENvb3JkaW5hdGVzLnktYS55KT4xMCYmKGkuX19pc1NlbGVjdGFibGU9ITEsZS50YXAuY2xvbmVGb2N1c2VkSW5wdXQocixpKSl9aS5kb1RvdWNoTW92ZSh0KG4pLG4udGltZVN0YW1wLG4uc2NhbGUpLGkuX19pc0Rvd249ITB9fSxpLnRvdWNoTW92ZUJ1YmJsZT1mdW5jdGlvbihlKXtpLl9faXNEb3duJiZpLm9wdGlvbnMucHJldmVudERlZmF1bHQmJmUucHJldmVudERlZmF1bHQoKX0saS50b3VjaEVuZD1mdW5jdGlvbih0KXtpLl9faXNEb3duJiYoaS5kb1RvdWNoRW5kKHQsdC50aW1lU3RhbXApLGkuX19pc0Rvd249ITEsaS5fX2hhc1N0YXJ0ZWQ9ITEsaS5fX2lzU2VsZWN0YWJsZT0hMCxpLl9fZW5hYmxlU2Nyb2xsWT0hMCxpLl9faXNEcmFnZ2luZ3x8aS5fX2lzRGVjZWxlcmF0aW5nfHxpLl9faXNBbmltYXRpbmd8fGUudGFwLnJlbW92ZUNsb25lZElucHV0cyhyLGkpKX0saS5tb3VzZVdoZWVsPWUuYW5pbWF0aW9uRnJhbWVUaHJvdHRsZShmdW5jdGlvbih0KXt2YXIgbj1lLkRvbVV0aWwuZ2V0UGFyZW50T3JTZWxmV2l0aENsYXNzKHQudGFyZ2V0LFwiaW9uaWMtc2Nyb2xsXCIpO2kub3B0aW9ucy5mcmVlemV8fG4hPT1pLl9fY29udGFpbmVyfHwoaS5oaW50UmVzaXplKCksaS5zY3JvbGxCeSgodC53aGVlbERlbHRhWHx8dC5kZWx0YVh8fDApL2kub3B0aW9ucy53aGVlbERhbXBlbiwoLXQud2hlZWxEZWx0YVl8fHQuZGVsdGFZfHwwKS9pLm9wdGlvbnMud2hlZWxEYW1wZW4pLGkuX19mYWRlU2Nyb2xsYmFycyhcImluXCIpLGNsZWFyVGltZW91dChpLl9fd2hlZWxIaWRlQmFyVGltZW91dCksaS5fX3doZWVsSGlkZUJhclRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2kuX19mYWRlU2Nyb2xsYmFycyhcIm91dFwiKX0sMTAwKSl9KSxcIm9udG91Y2hzdGFydFwiaW4gd2luZG93KXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixpLnRvdWNoU3RhcnQsITEpLGkub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCYmci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaS50b3VjaE1vdmVCdWJibGUsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixpLnRvdWNoTW92ZSwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsaS50b3VjaEVuZCwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsaS50b3VjaEVuZCwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsaS5tb3VzZVdoZWVsLCExKTtlbHNlIGlmKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIixpLnRvdWNoU3RhcnQsITEpLGkub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCYmci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixpLnRvdWNoTW92ZUJ1YmJsZSwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsaS50b3VjaE1vdmUsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIixpLnRvdWNoRW5kLCExKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGkudG91Y2hFbmQsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGkubW91c2VXaGVlbCwhMSk7ZWxzZSBpZih3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpci5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGkudG91Y2hTdGFydCwhMSksaS5vcHRpb25zLnByZXZlbnREZWZhdWx0JiZyLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJNb3ZlXCIsaS50b3VjaE1vdmVCdWJibGUsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJNb3ZlXCIsaS50b3VjaE1vdmUsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJVcFwiLGkudG91Y2hFbmQsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJDYW5jZWxcIixpLnRvdWNoRW5kLCExKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIixpLm1vdXNlV2hlZWwsITEpO2Vsc2V7dmFyIGE9ITE7aS5tb3VzZURvd249ZnVuY3Rpb24obil7ZS50YXAuaWdub3JlU2Nyb2xsU3RhcnQobil8fFwiU0VMRUNUXCI9PT1uLnRhcmdldC50YWdOYW1lfHwoaS5kb1RvdWNoU3RhcnQodChuKSxuLnRpbWVTdGFtcCksZS50YXAuaXNUZXh0SW5wdXQobi50YXJnZXQpfHxuLnByZXZlbnREZWZhdWx0KCksYT0hMCl9LGkubW91c2VNb3ZlPWZ1bmN0aW9uKGUpe2kub3B0aW9ucy5mcmVlemV8fCFhfHwhYSYmZS5kZWZhdWx0UHJldmVudGVkfHwoaS5kb1RvdWNoTW92ZSh0KGUpLGUudGltZVN0YW1wKSxhPSEwKX0saS5tb3VzZU1vdmVCdWJibGU9ZnVuY3Rpb24oZSl7YSYmaS5vcHRpb25zLnByZXZlbnREZWZhdWx0JiZlLnByZXZlbnREZWZhdWx0KCl9LGkubW91c2VVcD1mdW5jdGlvbihlKXthJiYoaS5kb1RvdWNoRW5kKGUsZS50aW1lU3RhbXApLGE9ITEpfSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixpLm1vdXNlRG93biwhMSksaS5vcHRpb25zLnByZXZlbnREZWZhdWx0JiZyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixpLm1vdXNlTW92ZUJ1YmJsZSwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGkubW91c2VNb3ZlLCExKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGkubW91c2VVcCwhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIixpLm1vdXNlV2hlZWwsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGkubW91c2VXaGVlbCwhMSl9fSxfX2NsZWFudXA6ZnVuY3Rpb24oKXt2YXIgbj10aGlzLGk9bi5fX2NvbnRhaW5lcjtpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsbi50b3VjaFN0YXJ0KSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixuLnRvdWNoTW92ZUJ1YmJsZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG4udG91Y2hNb3ZlKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixuLnRvdWNoRW5kKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIixuLnRvdWNoRW5kKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLG4udG91Y2hTdGFydCksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIixuLnRvdWNoTW92ZUJ1YmJsZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsbi50b3VjaE1vdmUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIixuLnRvdWNoRW5kKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLG4udG91Y2hFbmQpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIixuLnRvdWNoU3RhcnQpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlck1vdmVcIixuLnRvdWNoTW92ZUJ1YmJsZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlck1vdmVcIixuLnRvdWNoTW92ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlclVwXCIsbi50b3VjaEVuZCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckNhbmNlbFwiLG4udG91Y2hFbmQpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLG4ubW91c2VEb3duKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixuLm1vdXNlTW92ZUJ1YmJsZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG4ubW91c2VNb3ZlKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLG4ubW91c2VVcCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIixuLm1vdXNlV2hlZWwpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLG4ubW91c2VXaGVlbCksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsQ2hpbGRJbnRvVmlld1wiLG4uc2Nyb2xsQ2hpbGRJbnRvVmlldyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2V0U2Nyb2xsVmlld1wiLG4ucmVzZXRTY3JvbGxWaWV3KSxlLnRhcC5yZW1vdmVDbG9uZWRJbnB1dHMoaSxuKSxkZWxldGUgbi5fX2NvbnRhaW5lcixkZWxldGUgbi5fX2NvbnRlbnQsZGVsZXRlIG4uX19pbmRpY2F0b3JYLGRlbGV0ZSBuLl9faW5kaWNhdG9yWSxkZWxldGUgbi5vcHRpb25zLmVsLG4uX19jYWxsYmFjaz1uLnNjcm9sbENoaWxkSW50b1ZpZXc9bi5yZXNldFNjcm9sbFZpZXc9dCxuLm1vdXNlTW92ZT1uLm1vdXNlRG93bj1uLm1vdXNlVXA9bi5tb3VzZVdoZWVsPW4udG91Y2hTdGFydD1uLnRvdWNoTW92ZT1uLnRvdWNoRW5kPW4udG91Y2hDYW5jZWw9dCxuLnJlc2l6ZT1uLnNjcm9sbFRvPW4uem9vbVRvPW4uX19zY3JvbGxpbmdDb21wbGV0ZT10LGk9bnVsbH0sX19jcmVhdGVTY3JvbGxiYXI6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uY2xhc3NOYW1lPVwic2Nyb2xsLWJhci1pbmRpY2F0b3Igc2Nyb2xsLWJhci1mYWRlLW91dFwiLFwiaFwiPT1lP3QuY2xhc3NOYW1lPVwic2Nyb2xsLWJhciBzY3JvbGwtYmFyLWhcIjp0LmNsYXNzTmFtZT1cInNjcm9sbC1iYXIgc2Nyb2xsLWJhci12XCIsdC5hcHBlbmRDaGlsZChuKSx0fSxfX2NyZWF0ZVNjcm9sbGJhcnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG49dGhpcztuLm9wdGlvbnMuc2Nyb2xsaW5nWCYmKGU9e2VsOm4uX19jcmVhdGVTY3JvbGxiYXIoXCJoXCIpLHNpemVSYXRpbzoxfSxlLmluZGljYXRvcj1lLmVsLmNoaWxkcmVuWzBdLG4ub3B0aW9ucy5zY3JvbGxiYXJYJiZuLl9fY29udGFpbmVyLmFwcGVuZENoaWxkKGUuZWwpLG4uX19pbmRpY2F0b3JYPWUpLG4ub3B0aW9ucy5zY3JvbGxpbmdZJiYodD17ZWw6bi5fX2NyZWF0ZVNjcm9sbGJhcihcInZcIiksc2l6ZVJhdGlvOjF9LHQuaW5kaWNhdG9yPXQuZWwuY2hpbGRyZW5bMF0sbi5vcHRpb25zLnNjcm9sbGJhclkmJm4uX19jb250YWluZXIuYXBwZW5kQ2hpbGQodC5lbCksbi5fX2luZGljYXRvclk9dCl9LF9fcmVzaXplU2Nyb2xsYmFyczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYodC5fX2luZGljYXRvclgpe3ZhciBuPU1hdGgubWF4KE1hdGgucm91bmQodC5fX2NsaWVudFdpZHRoKnQuX19jbGllbnRXaWR0aC90Ll9fY29udGVudFdpZHRoKSwyMCk7bj50Ll9fY29udGVudFdpZHRoJiYobj0wKSxuIT09dC5fX2luZGljYXRvclguc2l6ZSYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0Ll9faW5kaWNhdG9yWC5pbmRpY2F0b3Iuc3R5bGUud2lkdGg9bitcInB4XCJ9KSx0Ll9faW5kaWNhdG9yWC5zaXplPW4sdC5fX2luZGljYXRvclgubWluU2NhbGU9dC5vcHRpb25zLm1pblNjcm9sbGJhclNpemVYL24sdC5fX2luZGljYXRvclgubWF4UG9zPXQuX19jbGllbnRXaWR0aC1uLHQuX19pbmRpY2F0b3JYLnNpemVSYXRpbz10Ll9fbWF4U2Nyb2xsTGVmdD90Ll9faW5kaWNhdG9yWC5tYXhQb3MvdC5fX21heFNjcm9sbExlZnQ6MX1pZih0Ll9faW5kaWNhdG9yWSl7dmFyIGk9TWF0aC5tYXgoTWF0aC5yb3VuZCh0Ll9fY2xpZW50SGVpZ2h0KnQuX19jbGllbnRIZWlnaHQvdC5fX2NvbnRlbnRIZWlnaHQpLDIwKTtpPnQuX19jb250ZW50SGVpZ2h0JiYoaT0wKSxpIT09dC5fX2luZGljYXRvclkuc2l6ZSYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0Ll9faW5kaWNhdG9yWSYmKHQuX19pbmRpY2F0b3JZLmluZGljYXRvci5zdHlsZS5oZWlnaHQ9aStcInB4XCIpfSksdC5fX2luZGljYXRvclkuc2l6ZT1pLHQuX19pbmRpY2F0b3JZLm1pblNjYWxlPXQub3B0aW9ucy5taW5TY3JvbGxiYXJTaXplWS9pLHQuX19pbmRpY2F0b3JZLm1heFBvcz10Ll9fY2xpZW50SGVpZ2h0LWksdC5fX2luZGljYXRvclkuc2l6ZVJhdGlvPXQuX19tYXhTY3JvbGxUb3A/dC5fX2luZGljYXRvclkubWF4UG9zL3QuX19tYXhTY3JvbGxUb3A6MX19LF9fcmVwb3NpdGlvblNjcm9sbGJhcnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4saSxyLGEsbz10aGlzLHM9MCxsPTA7aWYoby5fX2luZGljYXRvclgpe28uX19pbmRpY2F0b3JZJiYocz0xMCkscj1NYXRoLnJvdW5kKG8uX19pbmRpY2F0b3JYLnNpemVSYXRpbypvLl9fc2Nyb2xsTGVmdCl8fDAsbj1vLl9fc2Nyb2xsTGVmdC0oby5fX21heFNjcm9sbExlZnQtcyksby5fX3Njcm9sbExlZnQ8MD8odD1NYXRoLm1heChvLl9faW5kaWNhdG9yWC5taW5TY2FsZSwoby5fX2luZGljYXRvclguc2l6ZS1NYXRoLmFicyhvLl9fc2Nyb2xsTGVmdCkpL28uX19pbmRpY2F0b3JYLnNpemUpLHI9MCxvLl9faW5kaWNhdG9yWC5pbmRpY2F0b3Iuc3R5bGVbby5fX3RyYW5zZm9ybU9yaWdpblByb3BlcnR5XT1cImxlZnQgY2VudGVyXCIpOm4+MD8odD1NYXRoLm1heChvLl9faW5kaWNhdG9yWC5taW5TY2FsZSwoby5fX2luZGljYXRvclguc2l6ZS1uKS9vLl9faW5kaWNhdG9yWC5zaXplKSxyPW8uX19pbmRpY2F0b3JYLm1heFBvcy1zLG8uX19pbmRpY2F0b3JYLmluZGljYXRvci5zdHlsZVtvLl9fdHJhbnNmb3JtT3JpZ2luUHJvcGVydHldPVwicmlnaHQgY2VudGVyXCIpOihyPU1hdGgubWluKG8uX19tYXhTY3JvbGxMZWZ0LE1hdGgubWF4KDAscikpLHQ9MSk7dmFyIGM9XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApIHNjYWxlWChcIit0K1wiKVwiO28uX19pbmRpY2F0b3JYLnRyYW5zZm9ybVByb3AhPT1jJiYoby5fX2luZGljYXRvclguaW5kaWNhdG9yLnN0eWxlW28uX190cmFuc2Zvcm1Qcm9wZXJ0eV09YyxvLl9faW5kaWNhdG9yWC50cmFuc2Zvcm1Qcm9wPWMpfWlmKG8uX19pbmRpY2F0b3JZKXthPU1hdGgucm91bmQoby5fX2luZGljYXRvclkuc2l6ZVJhdGlvKm8uX19zY3JvbGxUb3ApfHwwLG8uX19pbmRpY2F0b3JYJiYobD0xMCksaT1vLl9fc2Nyb2xsVG9wLShvLl9fbWF4U2Nyb2xsVG9wLWwpLG8uX19zY3JvbGxUb3A8MD8oZT1NYXRoLm1heChvLl9faW5kaWNhdG9yWS5taW5TY2FsZSwoby5fX2luZGljYXRvclkuc2l6ZS1NYXRoLmFicyhvLl9fc2Nyb2xsVG9wKSkvby5fX2luZGljYXRvclkuc2l6ZSksYT0wLFwiY2VudGVyIHRvcFwiIT09by5fX2luZGljYXRvclkub3JpZ2luUHJvcCYmKG8uX19pbmRpY2F0b3JZLmluZGljYXRvci5zdHlsZVtvLl9fdHJhbnNmb3JtT3JpZ2luUHJvcGVydHldPVwiY2VudGVyIHRvcFwiLG8uX19pbmRpY2F0b3JZLm9yaWdpblByb3A9XCJjZW50ZXIgdG9wXCIpKTppPjA/KGU9TWF0aC5tYXgoby5fX2luZGljYXRvclkubWluU2NhbGUsKG8uX19pbmRpY2F0b3JZLnNpemUtaSkvby5fX2luZGljYXRvclkuc2l6ZSksYT1vLl9faW5kaWNhdG9yWS5tYXhQb3MtbCxcImNlbnRlciBib3R0b21cIiE9PW8uX19pbmRpY2F0b3JZLm9yaWdpblByb3AmJihvLl9faW5kaWNhdG9yWS5pbmRpY2F0b3Iuc3R5bGVbby5fX3RyYW5zZm9ybU9yaWdpblByb3BlcnR5XT1cImNlbnRlciBib3R0b21cIixvLl9faW5kaWNhdG9yWS5vcmlnaW5Qcm9wPVwiY2VudGVyIGJvdHRvbVwiKSk6KGE9TWF0aC5taW4oby5fX21heFNjcm9sbFRvcCxNYXRoLm1heCgwLGEpKSxlPTEpO3ZhciBkPVwidHJhbnNsYXRlM2QoMCxcIithK1wicHgsIDApIHNjYWxlWShcIitlK1wiKVwiO28uX19pbmRpY2F0b3JZLnRyYW5zZm9ybVByb3AhPT1kJiYoby5fX2luZGljYXRvclkuaW5kaWNhdG9yLnN0eWxlW28uX190cmFuc2Zvcm1Qcm9wZXJ0eV09ZCxvLl9faW5kaWNhdG9yWS50cmFuc2Zvcm1Qcm9wPWQpfX0sX19mYWRlU2Nyb2xsYmFyczpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYobi5vcHRpb25zLnNjcm9sbGJhcnNGYWRlKXt2YXIgaT1cInNjcm9sbC1iYXItZmFkZS1vdXRcIjtuLm9wdGlvbnMuc2Nyb2xsYmFyc0ZhZGU9PT0hMCYmKGNsZWFyVGltZW91dChuLl9fc2Nyb2xsYmFyRmFkZVRpbWVvdXQpLFwiaW5cIj09ZT8obi5fX2luZGljYXRvclgmJm4uX19pbmRpY2F0b3JYLmluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKGkpLG4uX19pbmRpY2F0b3JZJiZuLl9faW5kaWNhdG9yWS5pbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShpKSk6bi5fX3Njcm9sbGJhckZhZGVUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLl9faW5kaWNhdG9yWCYmbi5fX2luZGljYXRvclguaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoaSksbi5fX2luZGljYXRvclkmJm4uX19pbmRpY2F0b3JZLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKGkpfSx0fHxuLm9wdGlvbnMuc2Nyb2xsYmFyRmFkZURlbGF5KSl9fSxfX3Njcm9sbGluZ0NvbXBsZXRlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLnNjcm9sbGluZ0NvbXBsZXRlKCksZS50YXAucmVtb3ZlQ2xvbmVkSW5wdXRzKHRoaXMuX19jb250YWluZXIsdGhpcyksdGhpcy5fX2ZhZGVTY3JvbGxiYXJzKFwib3V0XCIpfSxyZXNpemU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0Ll9fY29udGFpbmVyJiZ0Lm9wdGlvbnMmJnQuc2V0RGltZW5zaW9ucyh0Ll9fY29udGFpbmVyLmNsaWVudFdpZHRoLHQuX19jb250YWluZXIuY2xpZW50SGVpZ2h0LHQub3B0aW9ucy5nZXRDb250ZW50V2lkdGgoKSx0Lm9wdGlvbnMuZ2V0Q29udGVudEhlaWdodCgpLGUpfSxnZXRSZW5kZXJGbjpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcyxuPXQuX19jb250ZW50LGk9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1wiTW96QXBwZWFyYW5jZVwiaW4gaT9lPVwiZ2Vja29cIjpcIldlYmtpdEFwcGVhcmFuY2VcImluIGk/ZT1cIndlYmtpdFwiOlwic3RyaW5nXCI9PXR5cGVvZiBuYXZpZ2F0b3IuY3B1Q2xhc3MmJihlPVwidHJpZGVudFwiKTt2YXIgcixhPXt0cmlkZW50OlwibXNcIixnZWNrbzpcIk1velwiLHdlYmtpdDpcIldlYmtpdFwiLHByZXN0bzpcIk9cIn1bZV0sbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9YStcIlBlcnNwZWN0aXZlXCIsbD1hK1wiVHJhbnNmb3JtXCIsYz1hK1wiVHJhbnNmb3JtT3JpZ2luXCI7cmV0dXJuIHQuX19wZXJzcGVjdGl2ZVByb3BlcnR5PWwsdC5fX3RyYW5zZm9ybVByb3BlcnR5PWwsdC5fX3RyYW5zZm9ybU9yaWdpblByb3BlcnR5PWMsby5zdHlsZVtzXSE9PXI/ZnVuY3Rpb24oZSxpLHIsYSl7dmFyIG89XCJ0cmFuc2xhdGUzZChcIistZStcInB4LFwiKy1pK1wicHgsMCkgc2NhbGUoXCIrcitcIilcIjtvIT09dC5jb250ZW50VHJhbnNmb3JtJiYobi5zdHlsZVtsXT1vLHQuY29udGVudFRyYW5zZm9ybT1vKSx0Ll9fcmVwb3NpdGlvblNjcm9sbGJhcnMoKSxhfHx0LnRyaWdnZXJTY3JvbGxFdmVudCgpfTpvLnN0eWxlW2xdIT09cj9mdW5jdGlvbihlLGkscixhKXtuLnN0eWxlW2xdPVwidHJhbnNsYXRlKFwiKy1lK1wicHgsXCIrLWkrXCJweCkgc2NhbGUoXCIrcitcIilcIix0Ll9fcmVwb3NpdGlvblNjcm9sbGJhcnMoKSxhfHx0LnRyaWdnZXJTY3JvbGxFdmVudCgpfTpmdW5jdGlvbihlLGkscixhKXtuLnN0eWxlLm1hcmdpbkxlZnQ9ZT8tZS9yK1wicHhcIjpcIlwiLG4uc3R5bGUubWFyZ2luVG9wPWk/LWkvcitcInB4XCI6XCJcIixuLnN0eWxlLnpvb209cnx8XCJcIix0Ll9fcmVwb3NpdGlvblNjcm9sbGJhcnMoKSxhfHx0LnRyaWdnZXJTY3JvbGxFdmVudCgpfX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBhPXRoaXM7KGV8fHR8fG58fGkpJiYoZT09PStlJiYoYS5fX2NsaWVudFdpZHRoPWUpLHQ9PT0rdCYmKGEuX19jbGllbnRIZWlnaHQ9dCksbj09PStuJiYoYS5fX2NvbnRlbnRXaWR0aD1uKSxpPT09K2kmJihhLl9fY29udGVudEhlaWdodD1pKSxhLl9fY29tcHV0ZVNjcm9sbE1heCgpLGEuX19yZXNpemVTY3JvbGxiYXJzKCkscnx8YS5zY3JvbGxUbyhhLl9fc2Nyb2xsTGVmdCxhLl9fc2Nyb2xsVG9wLCEwLG51bGwsITApKX0sc2V0UG9zaXRpb246ZnVuY3Rpb24oZSx0KXt0aGlzLl9fY2xpZW50TGVmdD1lfHwwLHRoaXMuX19jbGllbnRUb3A9dHx8MH0sc2V0U25hcFNpemU6ZnVuY3Rpb24oZSx0KXt0aGlzLl9fc25hcFdpZHRoPWUsdGhpcy5fX3NuYXBIZWlnaHQ9dH0sYWN0aXZhdGVQdWxsVG9SZWZyZXNoOmZ1bmN0aW9uKHQsbil7dmFyIGk9dGhpcztpLl9fcmVmcmVzaEhlaWdodD10LGkuX19yZWZyZXNoQWN0aXZhdGU9ZnVuY3Rpb24oKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZShuLmFjdGl2YXRlKX0saS5fX3JlZnJlc2hEZWFjdGl2YXRlPWZ1bmN0aW9uKCl7ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobi5kZWFjdGl2YXRlKX0saS5fX3JlZnJlc2hTdGFydD1mdW5jdGlvbigpe2UucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG4uc3RhcnQpfSxpLl9fcmVmcmVzaFNob3c9ZnVuY3Rpb24oKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZShuLnNob3cpfSxpLl9fcmVmcmVzaEhpZGU9ZnVuY3Rpb24oKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZShuLmhpZGUpfSxpLl9fcmVmcmVzaFRhaWw9ZnVuY3Rpb24oKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZShuLnRhaWwpfSxpLl9fcmVmcmVzaFRhaWxUaW1lPTEwMCxpLl9fbWluU3BpblRpbWU9NjAwfSx0cmlnZ2VyUHVsbFRvUmVmcmVzaDpmdW5jdGlvbigpe3RoaXMuX19wdWJsaXNoKHRoaXMuX19zY3JvbGxMZWZ0LC10aGlzLl9fcmVmcmVzaEhlaWdodCx0aGlzLl9fem9vbUxldmVsLCEwKTt2YXIgZT1uZXcgRGF0ZTt0aGlzLnJlZnJlc2hTdGFydFRpbWU9ZS5nZXRUaW1lKCksdGhpcy5fX3JlZnJlc2hTdGFydCYmdGhpcy5fX3JlZnJlc2hTdGFydCgpfSxmaW5pc2hQdWxsVG9SZWZyZXNoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PW5ldyBEYXRlLG49MDtlLnJlZnJlc2hTdGFydFRpbWUrZS5fX21pblNwaW5UaW1lPnQuZ2V0VGltZSgpJiYobj1lLnJlZnJlc2hTdGFydFRpbWUrZS5fX21pblNwaW5UaW1lLXQuZ2V0VGltZSgpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fX3JlZnJlc2hUYWlsJiZlLl9fcmVmcmVzaFRhaWwoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fX3JlZnJlc2hBY3RpdmU9ITEsZS5fX3JlZnJlc2hEZWFjdGl2YXRlJiZlLl9fcmVmcmVzaERlYWN0aXZhdGUoKSxlLl9fcmVmcmVzaEhpZGUmJmUuX19yZWZyZXNoSGlkZSgpLGUuc2Nyb2xsVG8oZS5fX3Njcm9sbExlZnQsZS5fX3Njcm9sbFRvcCwhMCl9LGUuX19yZWZyZXNoVGFpbFRpbWUpfSxuKX0sZ2V0VmFsdWVzOmZ1bmN0aW9uKCl7cmV0dXJue2xlZnQ6dGhpcy5fX3Njcm9sbExlZnQsdG9wOnRoaXMuX19zY3JvbGxUb3Asem9vbTp0aGlzLl9fem9vbUxldmVsfX0sZ2V0U2Nyb2xsTWF4OmZ1bmN0aW9uKCl7cmV0dXJue2xlZnQ6dGhpcy5fX21heFNjcm9sbExlZnQsdG9wOnRoaXMuX19tYXhTY3JvbGxUb3B9fSx6b29tVG86ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHI9dGhpcztpZighci5vcHRpb25zLnpvb21pbmcpdGhyb3cgbmV3IEVycm9yKFwiWm9vbWluZyBpcyBub3QgZW5hYmxlZCFcIik7ci5fX2lzRGVjZWxlcmF0aW5nJiYobWUuZWZmZWN0LkFuaW1hdGUuc3RvcChyLl9faXNEZWNlbGVyYXRpbmcpLHIuX19pc0RlY2VsZXJhdGluZz0hMSk7dmFyIGE9ci5fX3pvb21MZXZlbDtudWxsPT1uJiYobj1yLl9fY2xpZW50V2lkdGgvMiksbnVsbD09aSYmKGk9ci5fX2NsaWVudEhlaWdodC8yKSxlPU1hdGgubWF4KE1hdGgubWluKGUsci5vcHRpb25zLm1heFpvb20pLHIub3B0aW9ucy5taW5ab29tKSxyLl9fY29tcHV0ZVNjcm9sbE1heChlKTt2YXIgbz0obityLl9fc2Nyb2xsTGVmdCkqZS9hLW4scz0oaStyLl9fc2Nyb2xsVG9wKSplL2EtaTtvPnIuX19tYXhTY3JvbGxMZWZ0P289ci5fX21heFNjcm9sbExlZnQ6MD5vJiYobz0wKSxzPnIuX19tYXhTY3JvbGxUb3A/cz1yLl9fbWF4U2Nyb2xsVG9wOjA+cyYmKHM9MCksci5fX3B1Ymxpc2gobyxzLGUsdCl9LHpvb21CeTpmdW5jdGlvbihlLHQsbixpKXt0aGlzLnpvb21Ubyh0aGlzLl9fem9vbUxldmVsKmUsdCxuLGkpfSxzY3JvbGxUbzpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBhPXRoaXM7aWYoYS5fX2lzRGVjZWxlcmF0aW5nJiYobWUuZWZmZWN0LkFuaW1hdGUuc3RvcChhLl9faXNEZWNlbGVyYXRpbmcpLGEuX19pc0RlY2VsZXJhdGluZz0hMSksbnVsbCE9aSYmaSE9PWEuX196b29tTGV2ZWwpe2lmKCFhLm9wdGlvbnMuem9vbWluZyl0aHJvdyBuZXcgRXJyb3IoXCJab29taW5nIGlzIG5vdCBlbmFibGVkIVwiKTtlKj1pLHQqPWksYS5fX2NvbXB1dGVTY3JvbGxNYXgoaSl9ZWxzZSBpPWEuX196b29tTGV2ZWw7YS5vcHRpb25zLnNjcm9sbGluZ1g/YS5vcHRpb25zLnBhZ2luZz9lPU1hdGgucm91bmQoZS9hLl9fY2xpZW50V2lkdGgpKmEuX19jbGllbnRXaWR0aDphLm9wdGlvbnMuc25hcHBpbmcmJihlPU1hdGgucm91bmQoZS9hLl9fc25hcFdpZHRoKSphLl9fc25hcFdpZHRoKTplPWEuX19zY3JvbGxMZWZ0LGEub3B0aW9ucy5zY3JvbGxpbmdZP2Eub3B0aW9ucy5wYWdpbmc/dD1NYXRoLnJvdW5kKHQvYS5fX2NsaWVudEhlaWdodCkqYS5fX2NsaWVudEhlaWdodDphLm9wdGlvbnMuc25hcHBpbmcmJih0PU1hdGgucm91bmQodC9hLl9fc25hcEhlaWdodCkqYS5fX3NuYXBIZWlnaHQpOnQ9YS5fX3Njcm9sbFRvcCxlPU1hdGgubWF4KE1hdGgubWluKGEuX19tYXhTY3JvbGxMZWZ0LGUpLDApLHQ9TWF0aC5tYXgoTWF0aC5taW4oYS5fX21heFNjcm9sbFRvcCx0KSwwKSxlPT09YS5fX3Njcm9sbExlZnQmJnQ9PT1hLl9fc2Nyb2xsVG9wJiYobj0hMSksYS5fX3B1Ymxpc2goZSx0LGksbixyKX0sc2Nyb2xsQnk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj1pLl9faXNBbmltYXRpbmc/aS5fX3NjaGVkdWxlZExlZnQ6aS5fX3Njcm9sbExlZnQsYT1pLl9faXNBbmltYXRpbmc/aS5fX3NjaGVkdWxlZFRvcDppLl9fc2Nyb2xsVG9wO2kuc2Nyb2xsVG8ocisoZXx8MCksYSsodHx8MCksbil9LGRvTW91c2Vab29tOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPWU+MD8uOTc6MS4wMztyZXR1cm4gdGhpcy56b29tVG8odGhpcy5fX3pvb21MZXZlbCpyLCExLG4tdGhpcy5fX2NsaWVudExlZnQsaS10aGlzLl9fY2xpZW50VG9wKX0sZG9Ub3VjaFN0YXJ0OmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztuLl9fZGVjU3RvcHBlZD0hKCFuLl9faXNEZWNlbGVyYXRpbmcmJiFuLl9faXNBbmltYXRpbmcpLG4uaGludFJlc2l6ZSgpLHQgaW5zdGFuY2VvZiBEYXRlJiYodD10LnZhbHVlT2YoKSksXCJudW1iZXJcIiE9dHlwZW9mIHQmJih0PURhdGUubm93KCkpLG4uX19pbnRlcnJ1cHRlZEFuaW1hdGlvbj0hMCxuLl9faXNEZWNlbGVyYXRpbmcmJihtZS5lZmZlY3QuQW5pbWF0ZS5zdG9wKG4uX19pc0RlY2VsZXJhdGluZyksbi5fX2lzRGVjZWxlcmF0aW5nPSExLG4uX19pbnRlcnJ1cHRlZEFuaW1hdGlvbj0hMCksbi5fX2lzQW5pbWF0aW5nJiYobWUuZWZmZWN0LkFuaW1hdGUuc3RvcChuLl9faXNBbmltYXRpbmcpLG4uX19pc0FuaW1hdGluZz0hMSxuLl9faW50ZXJydXB0ZWRBbmltYXRpb249ITApO3ZhciBpLHIsYT0xPT09ZS5sZW5ndGg7YT8oaT1lWzBdLnBhZ2VYLHI9ZVswXS5wYWdlWSk6KGk9TWF0aC5hYnMoZVswXS5wYWdlWCtlWzFdLnBhZ2VYKS8yLHI9TWF0aC5hYnMoZVswXS5wYWdlWStlWzFdLnBhZ2VZKS8yKSxuLl9faW5pdGlhbFRvdWNoTGVmdD1pLG4uX19pbml0aWFsVG91Y2hUb3A9cixuLl9faW5pdGlhbFRvdWNoZXM9ZSxuLl9fem9vbUxldmVsU3RhcnQ9bi5fX3pvb21MZXZlbCxuLl9fbGFzdFRvdWNoTGVmdD1pLG4uX19sYXN0VG91Y2hUb3A9cixuLl9fbGFzdFRvdWNoTW92ZT10LG4uX19sYXN0U2NhbGU9MSxuLl9fZW5hYmxlU2Nyb2xsWD0hYSYmbi5vcHRpb25zLnNjcm9sbGluZ1gsbi5fX2VuYWJsZVNjcm9sbFk9IWEmJm4ub3B0aW9ucy5zY3JvbGxpbmdZLG4uX19pc1RyYWNraW5nPSEwLG4uX19kaWREZWNlbGVyYXRpb25Db21wbGV0ZT0hMSxuLl9faXNEcmFnZ2luZz0hYSxuLl9faXNTaW5nbGVUb3VjaD1hLG4uX19wb3NpdGlvbnM9W119LGRvVG91Y2hNb3ZlOmZ1bmN0aW9uKGUsdCxuKXt0IGluc3RhbmNlb2YgRGF0ZSYmKHQ9dC52YWx1ZU9mKCkpLFwibnVtYmVyXCIhPXR5cGVvZiB0JiYodD1EYXRlLm5vdygpKTt2YXIgaT10aGlzO2lmKGkuX19pc1RyYWNraW5nKXt2YXIgcixhOzI9PT1lLmxlbmd0aD8ocj1NYXRoLmFicyhlWzBdLnBhZ2VYK2VbMV0ucGFnZVgpLzIsYT1NYXRoLmFicyhlWzBdLnBhZ2VZK2VbMV0ucGFnZVkpLzIsIW4mJmkub3B0aW9ucy56b29taW5nJiYobj1pLl9fZ2V0U2NhbGUoaS5fX2luaXRpYWxUb3VjaGVzLGUpKSk6KHI9ZVswXS5wYWdlWCxhPWVbMF0ucGFnZVkpO3ZhciBvPWkuX19wb3NpdGlvbnM7aWYoaS5fX2lzRHJhZ2dpbmcpe2kuX19kZWNTdG9wcGVkPSExO3ZhciBzPXItaS5fX2xhc3RUb3VjaExlZnQsbD1hLWkuX19sYXN0VG91Y2hUb3AsYz1pLl9fc2Nyb2xsTGVmdCxkPWkuX19zY3JvbGxUb3AsdT1pLl9fem9vbUxldmVsO2lmKG51bGwhPW4mJmkub3B0aW9ucy56b29taW5nKXt2YXIgcD11O2lmKHU9dS9pLl9fbGFzdFNjYWxlKm4sdT1NYXRoLm1heChNYXRoLm1pbih1LGkub3B0aW9ucy5tYXhab29tKSxpLm9wdGlvbnMubWluWm9vbSkscCE9PXUpe3ZhciBoPXItaS5fX2NsaWVudExlZnQsZj1hLWkuX19jbGllbnRUb3A7Yz0oaCtjKSp1L3AtaCxkPShmK2QpKnUvcC1mLGkuX19jb21wdXRlU2Nyb2xsTWF4KHUpfX1pZihpLl9fZW5hYmxlU2Nyb2xsWCl7Yy09cyppLm9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyO3ZhciBtPWkuX19tYXhTY3JvbGxMZWZ0OyhjPm18fDA+YykmJihpLm9wdGlvbnMuYm91bmNpbmc/Yys9cy8yKmkub3B0aW9ucy5zcGVlZE11bHRpcGxpZXI6Yz1jPm0/bTowKX1pZihpLl9fZW5hYmxlU2Nyb2xsWSl7ZC09bCppLm9wdGlvbnMuc3BlZWRNdWx0aXBsaWVyO3ZhciBnPWkuX19tYXhTY3JvbGxUb3A7ZD5nfHwwPmQ/aS5vcHRpb25zLmJvdW5jaW5nfHxpLl9fcmVmcmVzaEhlaWdodCYmMD5kPyhkKz1sLzIqaS5vcHRpb25zLnNwZWVkTXVsdGlwbGllcixpLl9fZW5hYmxlU2Nyb2xsWHx8bnVsbD09aS5fX3JlZnJlc2hIZWlnaHR8fCgwPmQ/KGkuX19yZWZyZXNoSGlkZGVuPSExLGkuX19yZWZyZXNoU2hvdygpKTooaS5fX3JlZnJlc2hIaWRlKCksaS5fX3JlZnJlc2hIaWRkZW49ITApLCFpLl9fcmVmcmVzaEFjdGl2ZSYmZDw9LWkuX19yZWZyZXNoSGVpZ2h0PyhpLl9fcmVmcmVzaEFjdGl2ZT0hMCxpLl9fcmVmcmVzaEFjdGl2YXRlJiZpLl9fcmVmcmVzaEFjdGl2YXRlKCkpOmkuX19yZWZyZXNoQWN0aXZlJiZkPi1pLl9fcmVmcmVzaEhlaWdodCYmKGkuX19yZWZyZXNoQWN0aXZlPSExLGkuX19yZWZyZXNoRGVhY3RpdmF0ZSYmaS5fX3JlZnJlc2hEZWFjdGl2YXRlKCkpKSk6ZD1kPmc/ZzowOmkuX19yZWZyZXNoSGVpZ2h0JiYhaS5fX3JlZnJlc2hIaWRkZW4mJihpLl9fcmVmcmVzaEhpZGUoKSxpLl9fcmVmcmVzaEhpZGRlbj0hMCl9by5sZW5ndGg+NjAmJm8uc3BsaWNlKDAsMzApLG8ucHVzaChjLGQsdCksaS5fX3B1Ymxpc2goYyxkLHUpfWVsc2V7dmFyIHY9aS5vcHRpb25zLmxvY2tpbmc/MzowLF89NSx3PU1hdGguYWJzKHItaS5fX2luaXRpYWxUb3VjaExlZnQpLFQ9TWF0aC5hYnMoYS1pLl9faW5pdGlhbFRvdWNoVG9wKTtpLl9fZW5hYmxlU2Nyb2xsWD1pLm9wdGlvbnMuc2Nyb2xsaW5nWCYmdz49dixpLl9fZW5hYmxlU2Nyb2xsWT1pLm9wdGlvbnMuc2Nyb2xsaW5nWSYmVD49dixvLnB1c2goaS5fX3Njcm9sbExlZnQsaS5fX3Njcm9sbFRvcCx0KSxpLl9faXNEcmFnZ2luZz0oaS5fX2VuYWJsZVNjcm9sbFh8fGkuX19lbmFibGVTY3JvbGxZKSYmKHc+PV98fFQ+PV8pLGkuX19pc0RyYWdnaW5nJiYoaS5fX2ludGVycnVwdGVkQW5pbWF0aW9uPSExLGkuX19mYWRlU2Nyb2xsYmFycyhcImluXCIpKX1pLl9fbGFzdFRvdWNoTGVmdD1yLGkuX19sYXN0VG91Y2hUb3A9YSxpLl9fbGFzdFRvdWNoTW92ZT10LGkuX19sYXN0U2NhbGU9bn19LGRvVG91Y2hFbmQ6ZnVuY3Rpb24odCxuKXtuIGluc3RhbmNlb2YgRGF0ZSYmKG49bi52YWx1ZU9mKCkpLFwibnVtYmVyXCIhPXR5cGVvZiBuJiYobj1EYXRlLm5vdygpKTt2YXIgaT10aGlzO2lmKGkuX19pc1RyYWNraW5nKXtpZihpLl9faXNUcmFja2luZz0hMSxpLl9faXNEcmFnZ2luZylpZihpLl9faXNEcmFnZ2luZz0hMSxpLl9faXNTaW5nbGVUb3VjaCYmaS5vcHRpb25zLmFuaW1hdGluZyYmbi1pLl9fbGFzdFRvdWNoTW92ZTw9MTAwKXtmb3IodmFyIHI9aS5fX3Bvc2l0aW9ucyxhPXIubGVuZ3RoLTEsbz1hLHM9YTtzPjAmJnJbc10+aS5fX2xhc3RUb3VjaE1vdmUtMTAwO3MtPTMpbz1zO1xuaWYobyE9PWEpe3ZhciBsPXJbYV0tcltvXSxjPWkuX19zY3JvbGxMZWZ0LXJbby0yXSxkPWkuX19zY3JvbGxUb3AtcltvLTFdO2kuX19kZWNlbGVyYXRpb25WZWxvY2l0eVg9Yy9sKigxZTMvNjApLGkuX19kZWNlbGVyYXRpb25WZWxvY2l0eVk9ZC9sKigxZTMvNjApO3ZhciB1PWkub3B0aW9ucy5wYWdpbmd8fGkub3B0aW9ucy5zbmFwcGluZz9pLm9wdGlvbnMuZGVjZWxWZWxvY2l0eVRocmVzaG9sZFBhZ2luZzppLm9wdGlvbnMuZGVjZWxWZWxvY2l0eVRocmVzaG9sZDsoTWF0aC5hYnMoaS5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WCk+dXx8TWF0aC5hYnMoaS5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WSk+dSkmJihpLl9fcmVmcmVzaEFjdGl2ZXx8aS5fX3N0YXJ0RGVjZWxlcmF0aW9uKG4pKX1lbHNlIGkuX19zY3JvbGxpbmdDb21wbGV0ZSgpfWVsc2Ugbi1pLl9fbGFzdFRvdWNoTW92ZT4xMDAmJmkuX19zY3JvbGxpbmdDb21wbGV0ZSgpO2Vsc2UgaS5fX2RlY1N0b3BwZWQmJih0LmlzVGFwSGFuZGxlZD0hMCxpLl9fZGVjU3RvcHBlZD0hMSk7aWYoIWkuX19pc0RlY2VsZXJhdGluZylpZihpLl9fcmVmcmVzaEFjdGl2ZSYmaS5fX3JlZnJlc2hTdGFydCl7aS5fX3B1Ymxpc2goaS5fX3Njcm9sbExlZnQsLWkuX19yZWZyZXNoSGVpZ2h0LGkuX196b29tTGV2ZWwsITApO3ZhciBwPW5ldyBEYXRlO2kucmVmcmVzaFN0YXJ0VGltZT1wLmdldFRpbWUoKSxpLl9fcmVmcmVzaFN0YXJ0JiZpLl9fcmVmcmVzaFN0YXJ0KCksZS5QbGF0Zm9ybS5pc0FuZHJvaWQoKXx8aS5fX3N0YXJ0RGVjZWxlcmF0aW9uKCl9ZWxzZShpLl9faW50ZXJydXB0ZWRBbmltYXRpb258fGkuX19pc0RyYWdnaW5nKSYmaS5fX3Njcm9sbGluZ0NvbXBsZXRlKCksaS5zY3JvbGxUbyhpLl9fc2Nyb2xsTGVmdCxpLl9fc2Nyb2xsVG9wLCEwLGkuX196b29tTGV2ZWwpLGkuX19yZWZyZXNoQWN0aXZlJiYoaS5fX3JlZnJlc2hBY3RpdmU9ITEsaS5fX3JlZnJlc2hEZWFjdGl2YXRlJiZpLl9fcmVmcmVzaERlYWN0aXZhdGUoKSk7aS5fX3Bvc2l0aW9ucy5sZW5ndGg9MH19LF9fcHVibGlzaDpmdW5jdGlvbihlLHQscixhLG8pe3ZhciBzPXRoaXMsbD1zLl9faXNBbmltYXRpbmc7aWYobCYmKG1lLmVmZmVjdC5BbmltYXRlLnN0b3AobCkscy5fX2lzQW5pbWF0aW5nPSExKSxhJiZzLm9wdGlvbnMuYW5pbWF0aW5nKXtzLl9fc2NoZWR1bGVkTGVmdD1lLHMuX19zY2hlZHVsZWRUb3A9dCxzLl9fc2NoZWR1bGVkWm9vbT1yO3ZhciBjPXMuX19zY3JvbGxMZWZ0LGQ9cy5fX3Njcm9sbFRvcCx1PXMuX196b29tTGV2ZWwscD1lLWMsaD10LWQsZj1yLXUsbT1mdW5jdGlvbihlLHQsbil7biYmKHMuX19zY3JvbGxMZWZ0PWMrcCplLHMuX19zY3JvbGxUb3A9ZCtoKmUscy5fX3pvb21MZXZlbD11K2YqZSxzLl9fY2FsbGJhY2smJnMuX19jYWxsYmFjayhzLl9fc2Nyb2xsTGVmdCxzLl9fc2Nyb2xsVG9wLHMuX196b29tTGV2ZWwsbykpfSxnPWZ1bmN0aW9uKGUpe3JldHVybiBzLl9faXNBbmltYXRpbmc9PT1lfSx2PWZ1bmN0aW9uKGUsdCxuKXt0PT09cy5fX2lzQW5pbWF0aW5nJiYocy5fX2lzQW5pbWF0aW5nPSExKSwocy5fX2RpZERlY2VsZXJhdGlvbkNvbXBsZXRlfHxuKSYmcy5fX3Njcm9sbGluZ0NvbXBsZXRlKCkscy5vcHRpb25zLnpvb21pbmcmJnMuX19jb21wdXRlU2Nyb2xsTWF4KCl9O3MuX19pc0FuaW1hdGluZz1tZS5lZmZlY3QuQW5pbWF0ZS5zdGFydChtLGcsdixzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sbD9uOmkpfWVsc2Ugcy5fX3NjaGVkdWxlZExlZnQ9cy5fX3Njcm9sbExlZnQ9ZSxzLl9fc2NoZWR1bGVkVG9wPXMuX19zY3JvbGxUb3A9dCxzLl9fc2NoZWR1bGVkWm9vbT1zLl9fem9vbUxldmVsPXIscy5fX2NhbGxiYWNrJiZzLl9fY2FsbGJhY2soZSx0LHIsbykscy5vcHRpb25zLnpvb21pbmcmJnMuX19jb21wdXRlU2Nyb2xsTWF4KCl9LF9fY29tcHV0ZVNjcm9sbE1heDpmdW5jdGlvbihlKXt2YXIgdD10aGlzO251bGw9PWUmJihlPXQuX196b29tTGV2ZWwpLHQuX19tYXhTY3JvbGxMZWZ0PU1hdGgubWF4KHQuX19jb250ZW50V2lkdGgqZS10Ll9fY2xpZW50V2lkdGgsMCksdC5fX21heFNjcm9sbFRvcD1NYXRoLm1heCh0Ll9fY29udGVudEhlaWdodCplLXQuX19jbGllbnRIZWlnaHQsMCksdC5fX2RpZFdhaXRGb3JTaXplfHx0Ll9fbWF4U2Nyb2xsTGVmdHx8dC5fX21heFNjcm9sbFRvcHx8KHQuX19kaWRXYWl0Rm9yU2l6ZT0hMCx0Ll9fd2FpdEZvclNpemUoKSl9LF9fd2FpdEZvclNpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2NsZWFyVGltZW91dChlLl9fc2l6ZXJUaW1lb3V0KTt2YXIgdD1mdW5jdGlvbigpe2UucmVzaXplKCEwKX07dCgpLGUuX19zaXplclRpbWVvdXQ9c2V0VGltZW91dCh0LDUwMCl9LF9fc3RhcnREZWNlbGVyYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGUub3B0aW9ucy5wYWdpbmcpe3ZhciB0PU1hdGgubWF4KE1hdGgubWluKGUuX19zY3JvbGxMZWZ0LGUuX19tYXhTY3JvbGxMZWZ0KSwwKSxuPU1hdGgubWF4KE1hdGgubWluKGUuX19zY3JvbGxUb3AsZS5fX21heFNjcm9sbFRvcCksMCksaT1lLl9fY2xpZW50V2lkdGgscj1lLl9fY2xpZW50SGVpZ2h0O2UuX19taW5EZWNlbGVyYXRpb25TY3JvbGxMZWZ0PU1hdGguZmxvb3IodC9pKSppLGUuX19taW5EZWNlbGVyYXRpb25TY3JvbGxUb3A9TWF0aC5mbG9vcihuL3IpKnIsZS5fX21heERlY2VsZXJhdGlvblNjcm9sbExlZnQ9TWF0aC5jZWlsKHQvaSkqaSxlLl9fbWF4RGVjZWxlcmF0aW9uU2Nyb2xsVG9wPU1hdGguY2VpbChuL3IpKnJ9ZWxzZSBlLl9fbWluRGVjZWxlcmF0aW9uU2Nyb2xsTGVmdD0wLGUuX19taW5EZWNlbGVyYXRpb25TY3JvbGxUb3A9MCxlLl9fbWF4RGVjZWxlcmF0aW9uU2Nyb2xsTGVmdD1lLl9fbWF4U2Nyb2xsTGVmdCxlLl9fbWF4RGVjZWxlcmF0aW9uU2Nyb2xsVG9wPWUuX19tYXhTY3JvbGxUb3AsZS5fX3JlZnJlc2hBY3RpdmUmJihlLl9fbWluRGVjZWxlcmF0aW9uU2Nyb2xsVG9wPS0xKmUuX19yZWZyZXNoSGVpZ2h0KTt2YXIgYT1mdW5jdGlvbih0LG4saSl7ZS5fX3N0ZXBUaHJvdWdoRGVjZWxlcmF0aW9uKGkpfTtlLl9fbWluVmVsb2NpdHlUb0tlZXBEZWNlbGVyYXRpbmc9ZS5vcHRpb25zLnNuYXBwaW5nPzQ6LjE7dmFyIG89ZnVuY3Rpb24oKXt2YXIgdD1NYXRoLmFicyhlLl9fZGVjZWxlcmF0aW9uVmVsb2NpdHlYKT49ZS5fX21pblZlbG9jaXR5VG9LZWVwRGVjZWxlcmF0aW5nfHxNYXRoLmFicyhlLl9fZGVjZWxlcmF0aW9uVmVsb2NpdHlZKT49ZS5fX21pblZlbG9jaXR5VG9LZWVwRGVjZWxlcmF0aW5nO3JldHVybiB0fHwoZS5fX2RpZERlY2VsZXJhdGlvbkNvbXBsZXRlPSEwLGUub3B0aW9ucy5ib3VuY2luZyYmIWUuX19yZWZyZXNoQWN0aXZlJiZlLnNjcm9sbFRvKE1hdGgubWluKE1hdGgubWF4KGUuX19zY3JvbGxMZWZ0LDApLGUuX19tYXhTY3JvbGxMZWZ0KSxNYXRoLm1pbihNYXRoLm1heChlLl9fc2Nyb2xsVG9wLDApLGUuX19tYXhTY3JvbGxUb3ApLGUuX19yZWZyZXNoQWN0aXZlKSksdH0scz1mdW5jdGlvbigpe2UuX19pc0RlY2VsZXJhdGluZz0hMSxlLl9fZGlkRGVjZWxlcmF0aW9uQ29tcGxldGUmJmUuX19zY3JvbGxpbmdDb21wbGV0ZSgpLGUub3B0aW9ucy5wYWdpbmcmJmUuc2Nyb2xsVG8oZS5fX3Njcm9sbExlZnQsZS5fX3Njcm9sbFRvcCxlLm9wdGlvbnMuc25hcHBpbmcpfTtlLl9faXNEZWNlbGVyYXRpbmc9bWUuZWZmZWN0LkFuaW1hdGUuc3RhcnQoYSxvLHMpfSxfX3N0ZXBUaHJvdWdoRGVjZWxlcmF0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10Ll9fc2Nyb2xsTGVmdCt0Ll9fZGVjZWxlcmF0aW9uVmVsb2NpdHlYLGk9dC5fX3Njcm9sbFRvcCt0Ll9fZGVjZWxlcmF0aW9uVmVsb2NpdHlZO2lmKCF0Lm9wdGlvbnMuYm91bmNpbmcpe3ZhciByPU1hdGgubWF4KE1hdGgubWluKHQuX19tYXhEZWNlbGVyYXRpb25TY3JvbGxMZWZ0LG4pLHQuX19taW5EZWNlbGVyYXRpb25TY3JvbGxMZWZ0KTtyIT09biYmKG49cix0Ll9fZGVjZWxlcmF0aW9uVmVsb2NpdHlYPTApO3ZhciBhPU1hdGgubWF4KE1hdGgubWluKHQuX19tYXhEZWNlbGVyYXRpb25TY3JvbGxUb3AsaSksdC5fX21pbkRlY2VsZXJhdGlvblNjcm9sbFRvcCk7YSE9PWkmJihpPWEsdC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WT0wKX1pZihlP3QuX19wdWJsaXNoKG4saSx0Ll9fem9vbUxldmVsKToodC5fX3Njcm9sbExlZnQ9bix0Ll9fc2Nyb2xsVG9wPWkpLCF0Lm9wdGlvbnMucGFnaW5nKXt2YXIgbz10Lm9wdGlvbnMuZGVjZWxlcmF0aW9uO3QuX19kZWNlbGVyYXRpb25WZWxvY2l0eVgqPW8sdC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WSo9b31pZih0Lm9wdGlvbnMuYm91bmNpbmcpe3ZhciBzPTAsbD0wLGM9dC5vcHRpb25zLnBlbmV0cmF0aW9uRGVjZWxlcmF0aW9uLGQ9dC5vcHRpb25zLnBlbmV0cmF0aW9uQWNjZWxlcmF0aW9uO2lmKG48dC5fX21pbkRlY2VsZXJhdGlvblNjcm9sbExlZnQ/cz10Ll9fbWluRGVjZWxlcmF0aW9uU2Nyb2xsTGVmdC1uOm4+dC5fX21heERlY2VsZXJhdGlvblNjcm9sbExlZnQmJihzPXQuX19tYXhEZWNlbGVyYXRpb25TY3JvbGxMZWZ0LW4pLGk8dC5fX21pbkRlY2VsZXJhdGlvblNjcm9sbFRvcD9sPXQuX19taW5EZWNlbGVyYXRpb25TY3JvbGxUb3AtaTppPnQuX19tYXhEZWNlbGVyYXRpb25TY3JvbGxUb3AmJihsPXQuX19tYXhEZWNlbGVyYXRpb25TY3JvbGxUb3AtaSksMCE9PXMpe3ZhciB1PXMqdC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WDw9dC5fX21pbkRlY2VsZXJhdGlvblNjcm9sbExlZnQ7dSYmKHQuX19kZWNlbGVyYXRpb25WZWxvY2l0eVgrPXMqYyk7dmFyIHA9TWF0aC5hYnModC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WCk8PXQuX19taW5WZWxvY2l0eVRvS2VlcERlY2VsZXJhdGluZzsoIXV8fHApJiYodC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WD1zKmQpfWlmKDAhPT1sKXt2YXIgaD1sKnQuX19kZWNlbGVyYXRpb25WZWxvY2l0eVk8PXQuX19taW5EZWNlbGVyYXRpb25TY3JvbGxUb3A7aCYmKHQuX19kZWNlbGVyYXRpb25WZWxvY2l0eVkrPWwqYyk7dmFyIGY9TWF0aC5hYnModC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WSk8PXQuX19taW5WZWxvY2l0eVRvS2VlcERlY2VsZXJhdGluZzsoIWh8fGYpJiYodC5fX2RlY2VsZXJhdGlvblZlbG9jaXR5WT1sKmQpfX19LF9fZ2V0RGlzdGFuY2U6ZnVuY3Rpb24oZSx0KXt2YXIgbj10LnBhZ2VYLWUucGFnZVgsaT10LnBhZ2VZLWUucGFnZVk7cmV0dXJuIE1hdGguc3FydChuKm4raSppKX0sX19nZXRTY2FsZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmxlbmd0aD49MiYmdC5sZW5ndGg+PTI/dGhpcy5fX2dldERpc3RhbmNlKHRbMF0sdFsxXSkvdGhpcy5fX2dldERpc3RhbmNlKGVbMF0sZVsxXSk6MX19KSxlLnNjcm9sbD17aXNTY3JvbGxpbmc6ITEsbGFzdFRvcDowfX0oaW9uaWMpLGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKCl7fSxuPWZ1bmN0aW9uKGUpe307ZS52aWV3cy5TY3JvbGxOYXRpdmU9ZS52aWV3cy5WaWV3LmluaGVyaXQoe2luaXRpYWxpemU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztuLl9fY29udGFpbmVyPW4uZWw9dC5lbCxuLl9fY29udGVudD10LmVsLmZpcnN0RWxlbWVudENoaWxkLG4uX19mcm96ZW49ITEsbi5pc05hdGl2ZT0hMCxuLl9fc2Nyb2xsVG9wPW4uZWwuc2Nyb2xsVG9wLG4uX19zY3JvbGxMZWZ0PW4uZWwuc2Nyb2xsTGVmdCxuLl9fY2xpZW50SGVpZ2h0PW4uX19jb250ZW50LmNsaWVudEhlaWdodCxuLl9fY2xpZW50V2lkdGg9bi5fX2NvbnRlbnQuY2xpZW50V2lkdGgsbi5fX21heFNjcm9sbFRvcD1NYXRoLm1heChuLl9fY29udGVudEhlaWdodC1uLl9fY2xpZW50SGVpZ2h0LDApLG4uX19tYXhTY3JvbGxMZWZ0PU1hdGgubWF4KG4uX19jb250ZW50V2lkdGgtbi5fX2NsaWVudFdpZHRoLDApLCh0LnN0YXJ0WT49MHx8dC5zdGFydFg+PTApJiZlLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe24uZWwuc2Nyb2xsVG9wPXQuc3RhcnRZfHwwLG4uZWwuc2Nyb2xsTGVmdD10LnN0YXJ0WHx8MCxuLl9fc2Nyb2xsVG9wPW4uZWwuc2Nyb2xsVG9wLG4uX19zY3JvbGxMZWZ0PW4uZWwuc2Nyb2xsTGVmdH0pLG4ub3B0aW9ucz17ZnJlZXplOiExLGdldENvbnRlbnRXaWR0aDpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heChuLl9fY29udGVudC5zY3JvbGxXaWR0aCxuLl9fY29udGVudC5vZmZzZXRXaWR0aCl9LGdldENvbnRlbnRIZWlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgobi5fX2NvbnRlbnQuc2Nyb2xsSGVpZ2h0LG4uX19jb250ZW50Lm9mZnNldEhlaWdodCsyKm4uX19jb250ZW50Lm9mZnNldFRvcCl9fTtmb3IodmFyIGkgaW4gdCluLm9wdGlvbnNbaV09dFtpXTtuLm9uU2Nyb2xsPWZ1bmN0aW9uKCl7ZS5zY3JvbGwuaXNTY3JvbGxpbmd8fChlLnNjcm9sbC5pc1Njcm9sbGluZz0hMCksY2xlYXJUaW1lb3V0KG4uc2Nyb2xsVGltZXIpLG4uc2Nyb2xsVGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe2Uuc2Nyb2xsLmlzU2Nyb2xsaW5nPSExfSw4MCl9LG4uZnJlZXplPWZ1bmN0aW9uKGUpe24uX19mcm96ZW49ZX0sbi5mcmVlemVTaHV0PWZ1bmN0aW9uKGUpe24uX19mcm96ZW5TaHV0PWV9LG4uX19pbml0RXZlbnRIYW5kbGVycygpfSxfX2NhbGxiYWNrOmZ1bmN0aW9uKCl7bihcIl9fY2FsbGJhY2tcIil9LHpvb21UbzpmdW5jdGlvbigpe24oXCJ6b29tVG9cIil9LHpvb21CeTpmdW5jdGlvbigpe24oXCJ6b29tQnlcIil9LGFjdGl2YXRlUHVsbFRvUmVmcmVzaDpmdW5jdGlvbigpe24oXCJhY3RpdmF0ZVB1bGxUb1JlZnJlc2hcIil9LHJlc2l6ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX19jb250YWluZXImJnQub3B0aW9ucyYmdC5zZXREaW1lbnNpb25zKHQuX19jb250YWluZXIuY2xpZW50V2lkdGgsdC5fX2NvbnRhaW5lci5jbGllbnRIZWlnaHQsdC5vcHRpb25zLmdldENvbnRlbnRXaWR0aCgpLHQub3B0aW9ucy5nZXRDb250ZW50SGVpZ2h0KCksZSl9LHJ1bjpmdW5jdGlvbigpe3RoaXMucmVzaXplKCl9LGdldFZhbHVlczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGUudXBkYXRlKCkse2xlZnQ6ZS5fX3Njcm9sbExlZnQsdG9wOmUuX19zY3JvbGxUb3Asem9vbToxfX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9fc2Nyb2xsTGVmdD1lLmVsLnNjcm9sbExlZnQsZS5fX3Njcm9sbFRvcD1lLmVsLnNjcm9sbFRvcH0sc2V0RGltZW5zaW9uczpmdW5jdGlvbihlLHQsbixpKXt2YXIgcj10aGlzOyhlfHx0fHxufHxpKSYmKGU9PT0rZSYmKHIuX19jbGllbnRXaWR0aD1lKSx0PT09K3QmJihyLl9fY2xpZW50SGVpZ2h0PXQpLG49PT0rbiYmKHIuX19jb250ZW50V2lkdGg9biksaT09PStpJiYoci5fX2NvbnRlbnRIZWlnaHQ9aSksci5fX2NvbXB1dGVTY3JvbGxNYXgoKSl9LGdldFNjcm9sbE1heDpmdW5jdGlvbigpe3JldHVybntsZWZ0OnRoaXMuX19tYXhTY3JvbGxMZWZ0LHRvcDp0aGlzLl9fbWF4U2Nyb2xsVG9wfX0sc2Nyb2xsQnk6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7aS51cGRhdGUoKTt2YXIgcj1pLl9faXNBbmltYXRpbmc/aS5fX3NjaGVkdWxlZExlZnQ6aS5fX3Njcm9sbExlZnQsYT1pLl9faXNBbmltYXRpbmc/aS5fX3NjaGVkdWxlZFRvcDppLl9fc2Nyb2xsVG9wO2kuc2Nyb2xsVG8ocisoZXx8MCksYSsodHx8MCksbil9LHNjcm9sbFRvOmZ1bmN0aW9uKHQsbixpKXtmdW5jdGlvbiByKHQsbil7ZnVuY3Rpb24gaShlKXtyZXR1cm4tLWUqZSplKzF9ZnVuY3Rpb24gcigpe3ZhciBwPURhdGUubm93KCksaD1NYXRoLm1pbigxLChwLWwpL2MpLGY9aShoKTtkIT10JiYoYS5lbC5zY3JvbGxUb3A9cGFyc2VJbnQoZioodC1kKStkLDEwKSksdSE9biYmKGEuZWwuc2Nyb2xsTGVmdD1wYXJzZUludChmKihuLXUpK3UsMTApKSwxPmg/ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocik6KGUudGFwLnJlbW92ZUNsb25lZElucHV0cyhhLl9fY29udGFpbmVyLGEpLGEuZWwuc3R5bGUub3ZlcmZsb3dYPW8sYS5lbC5zdHlsZS5vdmVyZmxvd1k9cyxhLnJlc2l6ZSgpKX12YXIgbD1EYXRlLm5vdygpLGM9MjUwLGQ9YS5lbC5zY3JvbGxUb3AsdT1hLmVsLnNjcm9sbExlZnQ7cmV0dXJuIGQ9PT10JiZ1PT09bj8oYS5lbC5zdHlsZS5vdmVyZmxvd1g9byxhLmVsLnN0eWxlLm92ZXJmbG93WT1zLHZvaWQgYS5yZXNpemUoKSk6dm9pZCBlLnJlcXVlc3RBbmltYXRpb25GcmFtZShyKX12YXIgYT10aGlzO2lmKCFpKXJldHVybiBhLmVsLnNjcm9sbFRvcD1uLGEuZWwuc2Nyb2xsTGVmdD10LHZvaWQgYS5yZXNpemUoKTt2YXIgbz1hLmVsLnN0eWxlLm92ZXJmbG93WCxzPWEuZWwuc3R5bGUub3ZlcmZsb3dZO2NsZWFyVGltZW91dChhLl9fc2Nyb2xsVG9DbGVhbnVwVGltZW91dCksYS5fX3Njcm9sbFRvQ2xlYW51cFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2EuZWwuc3R5bGUub3ZlcmZsb3dYPW8sYS5lbC5zdHlsZS5vdmVyZmxvd1k9c30sNTAwKSxhLmVsLnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLGEuZWwuc3R5bGUub3ZlcmZsb3dYPVwiaGlkZGVuXCIscihuLHQpfSxfX3dhaXRGb3JTaXplOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztjbGVhclRpbWVvdXQoZS5fX3NpemVyVGltZW91dCk7dmFyIHQ9ZnVuY3Rpb24oKXtlLnJlc2l6ZSghMCl9O3QoKSxlLl9fc2l6ZXJUaW1lb3V0PXNldFRpbWVvdXQodCw1MDApfSxfX2NvbXB1dGVTY3JvbGxNYXg6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX19tYXhTY3JvbGxMZWZ0PU1hdGgubWF4KGUuX19jb250ZW50V2lkdGgtZS5fX2NsaWVudFdpZHRoLDApLGUuX19tYXhTY3JvbGxUb3A9TWF0aC5tYXgoZS5fX2NvbnRlbnRIZWlnaHQtZS5fX2NsaWVudEhlaWdodCwwKSxlLl9fZGlkV2FpdEZvclNpemV8fGUuX19tYXhTY3JvbGxMZWZ0fHxlLl9fbWF4U2Nyb2xsVG9wfHwoZS5fX2RpZFdhaXRGb3JTaXplPSEwLGUuX193YWl0Rm9yU2l6ZSgpKX0sX19pbml0RXZlbnRIYW5kbGVyczpmdW5jdGlvbigpe3ZhciB0LG4saT10aGlzLHI9aS5fX2NvbnRhaW5lcjtpLnNjcm9sbENoaWxkSW50b1ZpZXc9ZnVuY3Rpb24oYSl7dmFyIG89ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpLl9fb3JpZ2luYWxDb250YWluZXJIZWlnaHR8fChpLl9fb3JpZ2luYWxDb250YWluZXJIZWlnaHQ9by5oZWlnaHQpLHQ9aS5fX29yaWdpbmFsQ29udGFpbmVySGVpZ2h0O3ZhciBzPWkuaXNTaHJ1bmtGb3JLZXlib2FyZCxsPXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSxjPXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3BvdmVyXCIpLGQ9bCYmd2luZG93LmlubmVyV2lkdGg+PTY4MCx1PW4mJm4hPT1hLmRldGFpbC5rZXlib2FyZEhlaWdodDsoIXN8fHUpJiYoIWMmJihlLlBsYXRmb3JtLmlzSU9TKCl8fGUuUGxhdGZvcm0uaXNGdWxsU2NyZWVufHxkKSYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0PU1hdGgubWF4KDAsTWF0aC5taW4oaS5fX29yaWdpbmFsQ29udGFpbmVySGVpZ2h0LGkuX19vcmlnaW5hbENvbnRhaW5lckhlaWdodC0oYS5kZXRhaWwua2V5Ym9hcmRIZWlnaHQtNDMpKSksci5zdHlsZS5oZWlnaHQ9dCtcInB4XCIsci5jbGFzc0xpc3QuYWRkKFwia2V5Ym9hcmQtdXBcIiksaS5yZXNpemUoKX0pLGkuaXNTaHJ1bmtGb3JLZXlib2FyZD0hMCksbj1hLmRldGFpbC5rZXlib2FyZEhlaWdodCxhLmRldGFpbC5pc0VsZW1lbnRVbmRlcktleWJvYXJkJiZlLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3ZhciB0PWUuRG9tVXRpbC5nZXRPZmZzZXRUb3AoYS5kZXRhaWwudGFyZ2V0KTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5QbGF0Zm9ybS5pc0lPUygpJiZlLnRhcC5jbG9uZUZvY3VzZWRJbnB1dChyLGkpLGkuc2Nyb2xsVG8oMCx0LShvLnRvcCsxMDApLCEwKSxpLm9uU2Nyb2xsKCl9LDMyKX0pLGEuc3RvcFByb3BhZ2F0aW9uKCl9LGkucmVzZXRTY3JvbGxWaWV3PWZ1bmN0aW9uKCl7aS5pc1NocnVua0ZvcktleWJvYXJkJiYoaS5pc1NocnVua0ZvcktleWJvYXJkPSExLHIuc3R5bGUuaGVpZ2h0PVwiXCIsaS5fX29yaWdpbmFsQ29udGFpbmVySGVpZ2h0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LGUuUGxhdGZvcm0uaXNJT1MoKSYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyLmNsYXNzTGlzdC5yZW1vdmUoXCJrZXlib2FyZC11cFwiKX0pKSxpLnJlc2l6ZSgpfSxpLmhhbmRsZVRvdWNoTW92ZT1mdW5jdGlvbihlKXtyZXR1cm4gaS5fX2Zyb3plblNodXQ/KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLCExKTp2b2lkIDB9LHIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGkub25TY3JvbGwpLHIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbENoaWxkSW50b1ZpZXdcIixpLnNjcm9sbENoaWxkSW50b1ZpZXcpLHIuYWRkRXZlbnRMaXN0ZW5lcihlLkVWRU5UUy50b3VjaHN0YXJ0LGkuaGFuZGxlVG91Y2hNb3ZlKSxyLmFkZEV2ZW50TGlzdGVuZXIoZS5FVkVOVFMudG91Y2htb3ZlLGkuaGFuZGxlVG91Y2hNb3ZlKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRTY3JvbGxWaWV3XCIsaS5yZXNldFNjcm9sbFZpZXcpfSxfX2NsZWFudXA6ZnVuY3Rpb24oKXt2YXIgbj10aGlzLGk9bi5fX2NvbnRhaW5lcjtpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNldFNjcm9sbFZpZXdcIixuLnJlc2V0U2Nyb2xsVmlldyksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbi5vblNjcm9sbCksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsQ2hpbGRJbnRvVmlld1wiLG4uc2Nyb2xsQ2hpbGRJbnRvVmlldyksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzZXRTY3JvbGxWaWV3XCIsbi5yZXNldFNjcm9sbFZpZXcpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLkVWRU5UUy50b3VjaHN0YXJ0LG4uaGFuZGxlVG91Y2hNb3ZlKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS5FVkVOVFMudG91Y2htb3ZlLG4uaGFuZGxlVG91Y2hNb3ZlKSxlLnRhcC5yZW1vdmVDbG9uZWRJbnB1dHMoaSxuKSxkZWxldGUgbi5fX2NvbnRhaW5lcixkZWxldGUgbi5fX2NvbnRlbnQsZGVsZXRlIG4uX19pbmRpY2F0b3JYLGRlbGV0ZSBuLl9faW5kaWNhdG9yWSxkZWxldGUgbi5vcHRpb25zLmVsLG4ucmVzaXplPW4uc2Nyb2xsVG89bi5vblNjcm9sbD1uLnJlc2V0U2Nyb2xsVmlldz10LG4uc2Nyb2xsQ2hpbGRJbnRvVmlldz10LGk9bnVsbH19KX0oaW9uaWMpLGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVwiaXRlbVwiLG49XCJpdGVtLWNvbnRlbnRcIixpPVwiaXRlbS1zbGlkaW5nXCIscj1cIml0ZW0tb3B0aW9uc1wiLGE9XCJpdGVtLXBsYWNlaG9sZGVyXCIsbz1cIml0ZW0tcmVvcmRlcmluZ1wiLHM9XCJpdGVtLXJlb3JkZXJcIixsPWZ1bmN0aW9uKCl7fTtsLnByb3RvdHlwZT17c3RhcnQ6ZnVuY3Rpb24oKXt9LGRyYWc6ZnVuY3Rpb24oKXt9LGVuZDpmdW5jdGlvbigpe30saXNTYW1lSXRlbTpmdW5jdGlvbigpe3JldHVybiExfX07dmFyIGM9ZnVuY3Rpb24oZSl7dGhpcy5kcmFnVGhyZXNob2xkWD1lLmRyYWdUaHJlc2hvbGRYfHwxMCx0aGlzLmVsPWUuZWwsdGhpcy5pdGVtPWUuaXRlbSx0aGlzLmNhblN3aXBlPWUuY2FuU3dpcGV9O2MucHJvdG90eXBlPW5ldyBsLGMucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKGEpe3ZhciBvLHMsbCxjO3RoaXMuY2FuU3dpcGUoKSYmKG89YS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG4pP2EudGFyZ2V0OmEudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0KT9hLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLlwiK24pOmUuRG9tVXRpbC5nZXRQYXJlbnRXaXRoQ2xhc3MoYS50YXJnZXQsbiksbyYmKG8uY2xhc3NMaXN0LnJlbW92ZShpKSxsPXBhcnNlRmxvYXQoby5zdHlsZVtlLkNTUy5UUkFOU0ZPUk1dLnJlcGxhY2UoXCJ0cmFuc2xhdGUzZChcIixcIlwiKS5zcGxpdChcIixcIilbMF0pfHwwLHM9by5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrcikscyYmKHMuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKSxjPXMub2Zmc2V0V2lkdGgsdGhpcy5fY3VycmVudERyYWc9e2J1dHRvbnM6cyxidXR0b25zV2lkdGg6Yyxjb250ZW50Om8sc3RhcnRPZmZzZXRYOmx9KSkpfSxjLnByb3RvdHlwZS5pc1NhbWVJdGVtPWZ1bmN0aW9uKGUpe3JldHVybiBlLl9sYXN0RHJhZyYmdGhpcy5fY3VycmVudERyYWc/dGhpcy5fY3VycmVudERyYWcuY29udGVudD09ZS5fbGFzdERyYWcuY29udGVudDohMX0sYy5wcm90b3R5cGUuY2xlYW49ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbigpe2kuYnV0dG9ucyYmaS5idXR0b25zLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIil9dmFyIGk9dGhpcy5fbGFzdERyYWc7aSYmaS5jb250ZW50JiYoaS5jb250ZW50LnN0eWxlW2UuQ1NTLlRSQU5TSVRJT05dPVwiXCIsaS5jb250ZW50LnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJcIix0PyhpLmNvbnRlbnQuc3R5bGVbZS5DU1MuVFJBTlNJVElPTl09XCJub25lXCIsbigpLGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7aS5jb250ZW50LnN0eWxlW2UuQ1NTLlRSQU5TSVRJT05dPVwiXCJ9KSk6ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KG4sMjUwKX0pKX0sYy5wcm90b3R5cGUuZHJhZz1lLmFuaW1hdGlvbkZyYW1lVGhyb3R0bGUoZnVuY3Rpb24odCl7dmFyIG47aWYodGhpcy5fY3VycmVudERyYWcmJighdGhpcy5faXNEcmFnZ2luZyYmKE1hdGguYWJzKHQuZ2VzdHVyZS5kZWx0YVgpPnRoaXMuZHJhZ1RocmVzaG9sZFh8fE1hdGguYWJzKHRoaXMuX2N1cnJlbnREcmFnLnN0YXJ0T2Zmc2V0WCk+MCkmJih0aGlzLl9pc0RyYWdnaW5nPSEwKSx0aGlzLl9pc0RyYWdnaW5nKSl7bj10aGlzLl9jdXJyZW50RHJhZy5idXR0b25zV2lkdGg7dmFyIGk9TWF0aC5taW4oMCx0aGlzLl9jdXJyZW50RHJhZy5zdGFydE9mZnNldFgrdC5nZXN0dXJlLmRlbHRhWCk7LW4+aSYmKGk9TWF0aC5taW4oLW4sLW4rLjQqKHQuZ2VzdHVyZS5kZWx0YVgrbikpKSx0aGlzLl9jdXJyZW50RHJhZy5jb250ZW50LiQkaW9uaWNPcHRpb25zT3Blbj0wIT09aSx0aGlzLl9jdXJyZW50RHJhZy5jb250ZW50LnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJ0cmFuc2xhdGUzZChcIitpK1wicHgsIDAsIDApXCIsdGhpcy5fY3VycmVudERyYWcuY29udGVudC5zdHlsZVtlLkNTUy5UUkFOU0lUSU9OXT1cIm5vbmVcIn19KSxjLnByb3RvdHlwZS5lbmQ9ZnVuY3Rpb24odCxuKXt2YXIgaT10aGlzO2lmKCFpLl9jdXJyZW50RHJhZylyZXR1cm4gdm9pZChuJiZuKCkpO3ZhciByPS1pLl9jdXJyZW50RHJhZy5idXR0b25zV2lkdGg7dC5nZXN0dXJlLmRlbHRhWD4tKGkuX2N1cnJlbnREcmFnLmJ1dHRvbnNXaWR0aC8yKSYmKFwibGVmdFwiPT10Lmdlc3R1cmUuZGlyZWN0aW9uJiZNYXRoLmFicyh0Lmdlc3R1cmUudmVsb2NpdHlYKTwuMz9yPTA6XCJyaWdodFwiPT10Lmdlc3R1cmUuZGlyZWN0aW9uJiYocj0wKSksZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZigwPT09cil7aS5fY3VycmVudERyYWcuY29udGVudC5zdHlsZVtlLkNTUy5UUkFOU0ZPUk1dPVwiXCI7dmFyIHQ9aS5fY3VycmVudERyYWcuYnV0dG9ucztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCYmdC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpfSwyNTApfWVsc2UgaS5fY3VycmVudERyYWcuY29udGVudC5zdHlsZVtlLkNTUy5UUkFOU0ZPUk1dPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LDAsMClcIjtpLl9jdXJyZW50RHJhZy5jb250ZW50LnN0eWxlW2UuQ1NTLlRSQU5TSVRJT05dPVwiXCIsaS5fbGFzdERyYWd8fChpLl9sYXN0RHJhZz17fSksZS5leHRlbmQoaS5fbGFzdERyYWcsaS5fY3VycmVudERyYWcpLGkuX2N1cnJlbnREcmFnJiYoaS5fY3VycmVudERyYWcuYnV0dG9ucz1udWxsLGkuX2N1cnJlbnREcmFnLmNvbnRlbnQ9bnVsbCksaS5fY3VycmVudERyYWc9bnVsbCxuJiZuKCl9KX07dmFyIGQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0LmRyYWdUaHJlc2hvbGRZPWUuZHJhZ1RocmVzaG9sZFl8fDAsdC5vblJlb3JkZXI9ZS5vblJlb3JkZXIsdC5saXN0RWw9ZS5saXN0RWwsdC5lbD10Lml0ZW09ZS5lbCx0LnNjcm9sbEVsPWUuc2Nyb2xsRWwsdC5zY3JvbGxWaWV3PWUuc2Nyb2xsVmlldyx0Lmxpc3RFbFRydWVUb3A9MCx0Lmxpc3RFbC5vZmZzZXRQYXJlbnQpe3ZhciBuPXQubGlzdEVsO2RvIHQubGlzdEVsVHJ1ZVRvcCs9bi5vZmZzZXRUb3Asbj1uLm9mZnNldFBhcmVudDt3aGlsZShuKX19O2QucHJvdG90eXBlPW5ldyBsLGQucHJvdG90eXBlLl9tb3ZlRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgbj10Lmdlc3R1cmUuY2VudGVyLnBhZ2VZK3RoaXMuc2Nyb2xsVmlldy5nZXRWYWx1ZXMoKS50b3AtdGhpcy5fY3VycmVudERyYWcuZWxlbWVudEhlaWdodC8yLXRoaXMubGlzdEVsVHJ1ZVRvcDt0aGlzLmVsLnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJ0cmFuc2xhdGUzZCgwLCBcIituK1wicHgsIDApXCJ9LGQucHJvdG90eXBlLmRlcmVnaXN0ZXI9ZnVuY3Rpb24oKXt0aGlzLmxpc3RFbD10aGlzLmVsPXRoaXMuc2Nyb2xsRWw9dGhpcy5zY3JvbGxWaWV3PW51bGx9LGQucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKHQpe3ZhciBuPWUuRG9tVXRpbC5nZXRDaGlsZEluZGV4KHRoaXMuZWwsdGhpcy5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSxpPXRoaXMuZWwuc2Nyb2xsSGVpZ2h0LHI9dGhpcy5lbC5jbG9uZU5vZGUoITApO3IuY2xhc3NMaXN0LmFkZChhKSx0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHIsdGhpcy5lbCksdGhpcy5lbC5jbGFzc0xpc3QuYWRkKG8pLHRoaXMuX2N1cnJlbnREcmFnPXtlbGVtZW50SGVpZ2h0Omksc3RhcnRJbmRleDpuLHBsYWNlaG9sZGVyOnIsc2Nyb2xsSGVpZ2h0OnNjcm9sbCxsaXN0OnIucGFyZW50Tm9kZX0sdGhpcy5fbW92ZUVsZW1lbnQodCl9LGQucHJvdG90eXBlLmRyYWc9ZS5hbmltYXRpb25GcmFtZVRocm90dGxlKGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYodGhpcy5fY3VycmVudERyYWcpe3ZhciBpPTAscj10Lmdlc3R1cmUuY2VudGVyLnBhZ2VZLGE9dGhpcy5saXN0RWxUcnVlVG9wO2lmKHRoaXMuc2Nyb2xsVmlldyl7dmFyIG89dGhpcy5zY3JvbGxWaWV3Ll9fY29udGFpbmVyO2k9dGhpcy5zY3JvbGxWaWV3LmdldFZhbHVlcygpLnRvcDt2YXIgcz1vLm9mZnNldFRvcCxsPXMtcit0aGlzLl9jdXJyZW50RHJhZy5lbGVtZW50SGVpZ2h0LzIsYz1yK3RoaXMuX2N1cnJlbnREcmFnLmVsZW1lbnRIZWlnaHQvMi1zLW8ub2Zmc2V0SGVpZ2h0O3QuZ2VzdHVyZS5kZWx0YVk8MCYmbD4wJiZpPjAmJih0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsQnkobnVsbCwtbCksZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtuLmRyYWcodCl9KSksdC5nZXN0dXJlLmRlbHRhWT4wJiZjPjAmJmk8dGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE1heCgpLnRvcCYmKHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxCeShudWxsLGMpLGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7bi5kcmFnKHQpfSkpfSF0aGlzLl9pc0RyYWdnaW5nJiZNYXRoLmFicyh0Lmdlc3R1cmUuZGVsdGFZKT50aGlzLmRyYWdUaHJlc2hvbGRZJiYodGhpcy5faXNEcmFnZ2luZz0hMCksdGhpcy5faXNEcmFnZ2luZyYmKHRoaXMuX21vdmVFbGVtZW50KHQpLHRoaXMuX2N1cnJlbnREcmFnLmN1cnJlbnRZPWkrci1hKX19KSxkLnByb3RvdHlwZS5fZ2V0UmVvcmRlckluZGV4PWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9dGhpcyxuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQuX2N1cnJlbnREcmFnLnBsYWNlaG9sZGVyLnBhcmVudE5vZGUuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZT09PXQuZWwubm9kZU5hbWUmJmUhPT10LmVsfSksaT10Ll9jdXJyZW50RHJhZy5jdXJyZW50WSxyPTAsYT1uLmxlbmd0aDthPnI7cisrKWlmKGU9bltyXSxyPT09YS0xKXtpZihpPmUub2Zmc2V0VG9wKXJldHVybiByfWVsc2UgaWYoMD09PXIpe2lmKGk8ZS5vZmZzZXRUb3ArZS5vZmZzZXRIZWlnaHQpcmV0dXJuIHJ9ZWxzZSBpZihpPmUub2Zmc2V0VG9wLWUub2Zmc2V0SGVpZ2h0LzImJmk8ZS5vZmZzZXRUb3ArZS5vZmZzZXRIZWlnaHQpcmV0dXJuIHI7cmV0dXJuIHQuX2N1cnJlbnREcmFnLnN0YXJ0SW5kZXh9LGQucHJvdG90eXBlLmVuZD1mdW5jdGlvbih0LG4pe2lmKCF0aGlzLl9jdXJyZW50RHJhZylyZXR1cm4gdm9pZChuJiZuKCkpO3ZhciBpPXRoaXMuX2N1cnJlbnREcmFnLnBsYWNlaG9sZGVyLHI9dGhpcy5fZ2V0UmVvcmRlckluZGV4KCk7dGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKG8pLHRoaXMuZWwuc3R5bGVbZS5DU1MuVFJBTlNGT1JNXT1cIlwiLGkucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbCxpKSxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksdGhpcy5vblJlb3JkZXImJnRoaXMub25SZW9yZGVyKHRoaXMuZWwsdGhpcy5fY3VycmVudERyYWcuc3RhcnRJbmRleCxyKSx0aGlzLl9jdXJyZW50RHJhZz17cGxhY2Vob2xkZXI6bnVsbCxjb250ZW50Om51bGx9LHRoaXMuX2N1cnJlbnREcmFnPW51bGwsbiYmbigpfSxlLnZpZXdzLkxpc3RWaWV3PWUudmlld3MuVmlldy5pbmhlcml0KHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7dD1lLmV4dGVuZCh7b25SZW9yZGVyOmZ1bmN0aW9uKCl7fSx2aXJ0dWFsUmVtb3ZlVGhyZXNob2xkOi0yMDAsdmlydHVhbEFkZFRocmVzaG9sZDoyMDAsY2FuU3dpcGU6ZnVuY3Rpb24oKXtyZXR1cm4hMH19LHQpLGUuZXh0ZW5kKG4sdCksIW4uaXRlbUhlaWdodCYmbi5saXN0RWwmJihuLml0ZW1IZWlnaHQ9bi5saXN0RWwuY2hpbGRyZW5bMF0mJnBhcnNlSW50KG4ubGlzdEVsLmNoaWxkcmVuWzBdLnN0eWxlLmhlaWdodCwxMCkpLG4ub25SZWZyZXNoPXQub25SZWZyZXNofHxmdW5jdGlvbigpe30sbi5vblJlZnJlc2hPcGVuaW5nPXQub25SZWZyZXNoT3BlbmluZ3x8ZnVuY3Rpb24oKXt9LG4ub25SZWZyZXNoSG9sZGluZz10Lm9uUmVmcmVzaEhvbGRpbmd8fGZ1bmN0aW9uKCl7fTt2YXIgaT17fTtlLkRvbVV0aWwuZ2V0UGFyZW50T3JTZWxmV2l0aENsYXNzKG4uZWwsXCJvdmVyZmxvdy1zY3JvbGxcIikmJihpLnByZXZlbnRfZGVmYXVsdF9kaXJlY3Rpb25zPVtcImxlZnRcIixcInJpZ2h0XCJdKSx3aW5kb3cuaW9uaWMub25HZXN0dXJlKFwicmVsZWFzZVwiLGZ1bmN0aW9uKGUpe24uX2hhbmRsZUVuZERyYWcoZSl9LG4uZWwsaSksd2luZG93LmlvbmljLm9uR2VzdHVyZShcImRyYWdcIixmdW5jdGlvbihlKXtuLl9oYW5kbGVEcmFnKGUpfSxuLmVsLGkpLG4uX2luaXREcmFnKCl9LGRlcmVnaXN0ZXI6ZnVuY3Rpb24oKXt0aGlzLmVsPXRoaXMubGlzdEVsPXRoaXMuc2Nyb2xsRWw9dGhpcy5zY3JvbGxWaWV3PW51bGwsdGhpcy5pc1Njcm9sbEZyZWV6ZSYmc2VsZi5zY3JvbGxWaWV3LmZyZWV6ZSghMSl9LHN0b3BSZWZyZXNoaW5nOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtcmVmcmVzaGVyXCIpO2Uuc3R5bGUuaGVpZ2h0PVwiMFwifSxkaWRTY3JvbGw6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZih0LmlzVmlydHVhbCl7dmFyIG49dC5pdGVtSGVpZ2h0LGk9ZS50YXJnZXQuc2Nyb2xsSGVpZ2h0LHI9dC5lbC5wYXJlbnROb2RlLm9mZnNldEhlaWdodCxhPU1hdGgubWF4KDAsZS5zY3JvbGxUb3ArdC52aXJ0dWFsUmVtb3ZlVGhyZXNob2xkKSxvPU1hdGgubWluKGksTWF0aC5hYnMoZS5zY3JvbGxUb3ApK3IrdC52aXJ0dWFsQWRkVGhyZXNob2xkKSxzPXBhcnNlSW50KE1hdGguYWJzKGEvbiksMTApLGw9cGFyc2VJbnQoTWF0aC5hYnMoby9uKSwxMCk7dC5fdmlydHVhbEl0ZW1zVG9SZW1vdmU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodC5saXN0RWwuY2hpbGRyZW4sMCxzKSx0LnJlbmRlclZpZXdwb3J0JiZ0LnJlbmRlclZpZXdwb3J0KGEsbyxzLGwpfX0sZGlkU3RvcFNjcm9sbGluZzpmdW5jdGlvbigpe2lmKHRoaXMuaXNWaXJ0dWFsKWZvcih2YXIgZT0wO2U8dGhpcy5fdmlydHVhbEl0ZW1zVG9SZW1vdmUubGVuZ3RoO2UrKyl0aGlzLmRpZEhpZGVJdGVtJiZ0aGlzLmRpZEhpZGVJdGVtKGUpfSxjbGVhckRyYWdFZmZlY3RzOmZ1bmN0aW9uKGUpe3RoaXMuX2xhc3REcmFnT3AmJih0aGlzLl9sYXN0RHJhZ09wLmNsZWFuJiZ0aGlzLl9sYXN0RHJhZ09wLmNsZWFuKGUpLHRoaXMuX2xhc3REcmFnT3AuZGVyZWdpc3RlciYmdGhpcy5fbGFzdERyYWdPcC5kZXJlZ2lzdGVyKCksdGhpcy5fbGFzdERyYWdPcD1udWxsKX0sX2luaXREcmFnOmZ1bmN0aW9uKCl7dGhpcy5fbGFzdERyYWdPcCYmdGhpcy5fbGFzdERyYWdPcC5kZXJlZ2lzdGVyJiZ0aGlzLl9sYXN0RHJhZ09wLmRlcmVnaXN0ZXIoKSx0aGlzLl9sYXN0RHJhZ09wPXRoaXMuX2RyYWdPcCx0aGlzLl9kcmFnT3A9bnVsbH0sX2dldEl0ZW06ZnVuY3Rpb24oZSl7Zm9yKDtlOyl7aWYoZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpKXJldHVybiBlO2U9ZS5wYXJlbnROb2RlfXJldHVybiBudWxsfSxfc3RhcnREcmFnOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7bi5faXNEcmFnZ2luZz0hMTt2YXIgaSxyPW4uX2xhc3REcmFnT3A7bi5fZGlkRHJhZ1VwT3JEb3duJiZyIGluc3RhbmNlb2YgYyYmci5jbGVhbiYmci5jbGVhbigpLCFlLkRvbVV0aWwuZ2V0UGFyZW50T3JTZWxmV2l0aENsYXNzKHQudGFyZ2V0LHMpfHxcInVwXCIhPXQuZ2VzdHVyZS5kaXJlY3Rpb24mJlwiZG93blwiIT10Lmdlc3R1cmUuZGlyZWN0aW9uPyFuLl9kaWREcmFnVXBPckRvd24mJihcImxlZnRcIj09dC5nZXN0dXJlLmRpcmVjdGlvbnx8XCJyaWdodFwiPT10Lmdlc3R1cmUuZGlyZWN0aW9uKSYmTWF0aC5hYnModC5nZXN0dXJlLmRlbHRhWCk+NSYmKGk9bi5fZ2V0SXRlbSh0LnRhcmdldCksaSYmaS5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tb3B0aW9uc1wiKSYmKG4uX2RyYWdPcD1uZXcgYyh7ZWw6bi5lbCxpdGVtOmksY2FuU3dpcGU6bi5jYW5Td2lwZX0pLG4uX2RyYWdPcC5zdGFydCh0KSx0LnByZXZlbnREZWZhdWx0KCksbi5pc1Njcm9sbEZyZWV6ZT1uLnNjcm9sbFZpZXcuZnJlZXplKCEwKSkpOihpPW4uX2dldEl0ZW0odC50YXJnZXQpLGkmJihuLl9kcmFnT3A9bmV3IGQoe2xpc3RFbDpuLmVsLGVsOmksc2Nyb2xsRWw6bi5zY3JvbGxFbCxzY3JvbGxWaWV3Om4uc2Nyb2xsVmlldyxvblJlb3JkZXI6ZnVuY3Rpb24oZSx0LGkpe24ub25SZW9yZGVyJiZuLm9uUmVvcmRlcihlLHQsaSl9fSksbi5fZHJhZ09wLnN0YXJ0KHQpLHQucHJldmVudERlZmF1bHQoKSkpLHImJm4uX2RyYWdPcCYmIW4uX2RyYWdPcC5pc1NhbWVJdGVtKHIpJiZ0LmRlZmF1bHRQcmV2ZW50ZWQmJnIuY2xlYW4mJnIuY2xlYW4oKX0sX2hhbmRsZUVuZERyYWc6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0LnNjcm9sbFZpZXcmJih0LmlzU2Nyb2xsRnJlZXplPXQuc2Nyb2xsVmlldy5mcmVlemUoITEpKSx0Ll9kaWREcmFnVXBPckRvd249ITEsdC5fZHJhZ09wJiZ0Ll9kcmFnT3AuZW5kKGUsZnVuY3Rpb24oKXt0Ll9pbml0RHJhZygpfSl9LF9oYW5kbGVEcmFnOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7TWF0aC5hYnMoZS5nZXN0dXJlLmRlbHRhWSk+NSYmKHQuX2RpZERyYWdVcE9yRG93bj0hMCksdC5pc0RyYWdnaW5nfHx0Ll9kcmFnT3B8fHQuX3N0YXJ0RHJhZyhlKSx0Ll9kcmFnT3AmJihlLmdlc3R1cmUuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKSx0Ll9kcmFnT3AuZHJhZyhlKSl9fSl9KGlvbmljKSxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtlLnZpZXdzLk1vZGFsPWUudmlld3MuVmlldy5pbmhlcml0KHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe3Q9ZS5leHRlbmQoe2ZvY3VzRmlyc3RJbnB1dDohMSx1bmZvY3VzT25IaWRlOiEwLGZvY3VzRmlyc3REZWxheTo2MDAsYmFja2Ryb3BDbGlja1RvQ2xvc2U6ITAsaGFyZHdhcmVCYWNrQnV0dG9uQ2xvc2U6ITB9LHQpLGUuZXh0ZW5kKHRoaXMsdCksdGhpcy5lbD10LmVsfSxzaG93OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmZvY3VzRmlyc3RJbnB1dCYmd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgdD1lLmVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgdGV4dGFyZWFcIik7dCYmdC5mb2N1cyYmdC5mb2N1cygpfSxlLmZvY3VzRmlyc3REZWxheSl9LGhpZGU6ZnVuY3Rpb24oKXtpZih0aGlzLnVuZm9jdXNPbkhpZGUpe3ZhciBlPXRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYVwiKTt3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0uYmx1ciYmZVt0XS5ibHVyKCl9KX19fSl9KGlvbmljKSxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtlLnZpZXdzLlNpZGVNZW51PWUudmlld3MuVmlldy5pbmhlcml0KHtpbml0aWFsaXplOmZ1bmN0aW9uKGUpe3RoaXMuZWw9ZS5lbCx0aGlzLmlzRW5hYmxlZD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5pc0VuYWJsZWQ/ITA6ZS5pc0VuYWJsZWQsdGhpcy5zZXRXaWR0aChlLndpZHRoKX0sZ2V0RnVsbFdpZHRoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2lkdGh9LHNldFdpZHRoOmZ1bmN0aW9uKGUpe3RoaXMud2lkdGg9ZSx0aGlzLmVsLnN0eWxlLndpZHRoPWUrXCJweFwifSxzZXRJc0VuYWJsZWQ6ZnVuY3Rpb24oZSl7dGhpcy5pc0VuYWJsZWQ9ZX0sYnJpbmdVcDpmdW5jdGlvbigpe1wiMFwiIT09dGhpcy5lbC5zdHlsZS56SW5kZXgmJih0aGlzLmVsLnN0eWxlLnpJbmRleD1cIjBcIil9LHB1c2hEb3duOmZ1bmN0aW9uKCl7XCItMVwiIT09dGhpcy5lbC5zdHlsZS56SW5kZXgmJih0aGlzLmVsLnN0eWxlLnpJbmRleD1cIi0xXCIpfX0pLGUudmlld3MuU2lkZU1lbnVDb250ZW50PWUudmlld3MuVmlldy5pbmhlcml0KHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe2UuZXh0ZW5kKHRoaXMse2FuaW1hdGlvbkNsYXNzOlwibWVudS1hbmltYXRlZFwiLG9uRHJhZzpmdW5jdGlvbigpe30sb25FbmREcmFnOmZ1bmN0aW9uKCl7fX0sdCksZS5vbkdlc3R1cmUoXCJkcmFnXCIsZS5wcm94eSh0aGlzLl9vbkRyYWcsdGhpcyksdGhpcy5lbCksZS5vbkdlc3R1cmUoXCJyZWxlYXNlXCIsZS5wcm94eSh0aGlzLl9vbkVuZERyYWcsdGhpcyksdGhpcy5lbCl9LF9vbkRyYWc6ZnVuY3Rpb24oZSl7dGhpcy5vbkRyYWcmJnRoaXMub25EcmFnKGUpfSxfb25FbmREcmFnOmZ1bmN0aW9uKGUpe3RoaXMub25FbmREcmFnJiZ0aGlzLm9uRW5kRHJhZyhlKX0sZGlzYWJsZUFuaW1hdGlvbjpmdW5jdGlvbigpe3RoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFuaW1hdGlvbkNsYXNzKX0sZW5hYmxlQW5pbWF0aW9uOmZ1bmN0aW9uKCl7dGhpcy5lbC5jbGFzc0xpc3QuYWRkKHRoaXMuYW5pbWF0aW9uQ2xhc3MpfSxnZXRUcmFuc2xhdGVYOmZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlRmxvYXQodGhpcy5lbC5zdHlsZVtlLkNTUy5UUkFOU0ZPUk1dLnJlcGxhY2UoXCJ0cmFuc2xhdGUzZChcIixcIlwiKS5zcGxpdChcIixcIilbMF0pfSxzZXRUcmFuc2xhdGVYOmUuYW5pbWF0aW9uRnJhbWVUaHJvdHRsZShmdW5jdGlvbih0KXt0aGlzLmVsLnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJ0cmFuc2xhdGUzZChcIit0K1wicHgsIDAsIDApXCJ9KX0pfShpb25pYyksZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZS52aWV3cy5TbGlkZXI9ZS52aWV3cy5WaWV3LmluaGVyaXQoe2luaXRpYWxpemU6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe2lmKGIub2Zmc2V0V2lkdGgpe1M9RC5jaGlsZHJlbix4PVMubGVuZ3RoLFMubGVuZ3RoPDImJihlLmNvbnRpbnVvdXM9ITEpLFQudHJhbnNpdGlvbnMmJmUuY29udGludW91cyYmUy5sZW5ndGg8MyYmKEQuYXBwZW5kQ2hpbGQoU1swXS5jbG9uZU5vZGUoITApKSxELmFwcGVuZENoaWxkKEQuY2hpbGRyZW5bMV0uY2xvbmVOb2RlKCEwKSksUz1ELmNoaWxkcmVuKSx5PW5ldyBBcnJheShTLmxlbmd0aCksRT1iLm9mZnNldFdpZHRofHxiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLEQuc3R5bGUud2lkdGg9Uy5sZW5ndGgqRStcInB4XCI7Zm9yKHZhciB0PVMubGVuZ3RoO3QtLTspe3ZhciBuPVNbdF07bi5zdHlsZS53aWR0aD1FK1wicHhcIixuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIix0KSxULnRyYW5zaXRpb25zJiYobi5zdHlsZS5sZWZ0PXQqLUUrXCJweFwiLG8odCxNPnQ/LUU6dD5NP0U6MCwwKSl9ZS5jb250aW51b3VzJiZULnRyYW5zaXRpb25zJiYobyhyKE0tMSksLUUsMCksbyhyKE0rMSksRSwwKSksVC50cmFuc2l0aW9uc3x8KEQuc3R5bGUubGVmdD1NKi1FK1wicHhcIiksYi5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiLGUuc2xpZGVzQ2hhbmdlZCYmZS5zbGlkZXNDaGFuZ2VkKCl9fWZ1bmN0aW9uIG4odCl7ZS5jb250aW51b3VzP2EoTS0xLHQpOk0mJmEoTS0xLHQpfWZ1bmN0aW9uIGkodCl7ZS5jb250aW51b3VzP2EoTSsxLHQpOk08Uy5sZW5ndGgtMSYmYShNKzEsdCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4oUy5sZW5ndGgrZSVTLmxlbmd0aCklUy5sZW5ndGh9ZnVuY3Rpb24gYSh0LG4pe2lmKE0hPXQpe2lmKCFTKXJldHVybiB2b2lkKE09dCk7aWYoVC50cmFuc2l0aW9ucyl7dmFyIGk9TWF0aC5hYnMoTS10KS8oTS10KTtpZihlLmNvbnRpbnVvdXMpe3ZhciBhPWk7aT0teVtyKHQpXS9FLGkhPT1hJiYodD0taSpTLmxlbmd0aCt0KX1mb3IodmFyIHM9TWF0aC5hYnMoTS10KS0xO3MtLTspbyhyKCh0Pk0/dDpNKS1zLTEpLEUqaSwwKTt0PXIodCksbyhNLEUqaSxufHxMKSxvKHQsMCxufHxMKSxlLmNvbnRpbnVvdXMmJm8ocih0LWkpLC0oRSppKSwwKX1lbHNlIHQ9cih0KSxsKE0qLUUsdCotRSxufHxMKTtNPXQsdyhlLmNhbGxiYWNrJiZlLmNhbGxiYWNrKE0sU1tNXSkpfX1mdW5jdGlvbiBvKGUsdCxuKXtzKGUsdCxuKSx5W2VdPXR9ZnVuY3Rpb24gcyhlLHQsbil7dmFyIGk9U1tlXSxyPWkmJmkuc3R5bGU7ciYmKHIud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uPXIuTW96VHJhbnNpdGlvbkR1cmF0aW9uPXIubXNUcmFuc2l0aW9uRHVyYXRpb249ci5PVHJhbnNpdGlvbkR1cmF0aW9uPXIudHJhbnNpdGlvbkR1cmF0aW9uPW4rXCJtc1wiLHIud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3QrXCJweCwwKXRyYW5zbGF0ZVooMClcIixyLm1zVHJhbnNmb3JtPXIuTW96VHJhbnNmb3JtPXIuT1RyYW5zZm9ybT1cInRyYW5zbGF0ZVgoXCIrdCtcInB4KVwiKX1mdW5jdGlvbiBsKHQsbixpKXtpZighaSlyZXR1cm4gdm9pZChELnN0eWxlLmxlZnQ9bitcInB4XCIpO3ZhciByPStuZXcgRGF0ZSxhPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIG89K25ldyBEYXRlLXI7cmV0dXJuIG8+aT8oRC5zdHlsZS5sZWZ0PW4rXCJweFwiLEkmJmMoKSxlLnRyYW5zaXRpb25FbmQmJmUudHJhbnNpdGlvbkVuZC5jYWxsKGV2ZW50LE0sU1tNXSksdm9pZCBjbGVhckludGVydmFsKGEpKTp2b2lkKEQuc3R5bGUubGVmdD0obi10KSooTWF0aC5mbG9vcihvL2kqMTAwKS8xMDApK3QrXCJweFwiKX0sNCl9ZnVuY3Rpb24gYygpe0M9c2V0VGltZW91dChpLEkpfWZ1bmN0aW9uIGQoKXtJPWUuYXV0b3x8MCxjbGVhclRpbWVvdXQoQyl9dmFyIHUscCxoLGY9dGhpczt3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkPyh1PVwicG9pbnRlcmRvd25cIixwPVwicG9pbnRlcm1vdmVcIixoPVwicG9pbnRlcnVwXCIpOndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZD8odT1cIk1TUG9pbnRlckRvd25cIixwPVwiTVNQb2ludGVyTW92ZVwiLGg9XCJNU1BvaW50ZXJVcFwiKToodT1cInRvdWNoc3RhcnRcIixwPVwidG91Y2htb3ZlXCIsaD1cInRvdWNoZW5kXCIpO3ZhciBtPVwibW91c2Vkb3duXCIsZz1cIm1vdXNlbW92ZVwiLHY9XCJtb3VzZXVwXCIsXz1mdW5jdGlvbigpe30sdz1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KGV8fF8sMCl9LFQ9e2FkZEV2ZW50TGlzdGVuZXI6ISF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcix0cmFuc2l0aW9uczpmdW5jdGlvbihlKXt2YXIgdD1bXCJ0cmFuc2l0aW9uUHJvcGVydHlcIixcIldlYmtpdFRyYW5zaXRpb25cIixcIk1velRyYW5zaXRpb25cIixcIk9UcmFuc2l0aW9uXCIsXCJtc1RyYW5zaXRpb25cIl07Zm9yKHZhciBuIGluIHQpaWYodm9pZCAwIT09ZS5zdHlsZVt0W25dXSlyZXR1cm4hMDtyZXR1cm4hMX0oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN3aXBlXCIpKX0sYj1lLmVsO2lmKGIpe3ZhciBTLHksRSx4LEQ9Yi5jaGlsZHJlblswXTtlPWV8fHt9O3ZhciBNPXBhcnNlSW50KGUuc3RhcnRTbGlkZSwxMCl8fDAsTD1lLnNwZWVkfHwzMDA7ZS5jb250aW51b3VzPXZvaWQgMCE9PWUuY29udGludW91cz9lLmNvbnRpbnVvdXM6ITA7dmFyIEMsUCxJPWUuYXV0b3x8MCxrPXt9LE49e30sej17aGFuZGxlRXZlbnQ6ZnVuY3Rpb24obil7c3dpdGNoKCFuLnRvdWNoZXMmJm4ucGFnZVgmJm4ucGFnZVkmJihuLnRvdWNoZXM9W3twYWdlWDpuLnBhZ2VYLHBhZ2VZOm4ucGFnZVl9XSksbi50eXBlKXtjYXNlIHU6dGhpcy5zdGFydChuKTticmVhaztjYXNlIG06dGhpcy5zdGFydChuKTticmVhaztjYXNlIHA6dGhpcy50b3VjaG1vdmUobik7YnJlYWs7Y2FzZSBnOnRoaXMudG91Y2htb3ZlKG4pO2JyZWFrO2Nhc2UgaDp3KHRoaXMuZW5kKG4pKTticmVhaztjYXNlIHY6dyh0aGlzLmVuZChuKSk7YnJlYWs7Y2FzZVwid2Via2l0VHJhbnNpdGlvbkVuZFwiOmNhc2VcIm1zVHJhbnNpdGlvbkVuZFwiOmNhc2VcIm9UcmFuc2l0aW9uRW5kXCI6Y2FzZVwib3RyYW5zaXRpb25lbmRcIjpjYXNlXCJ0cmFuc2l0aW9uZW5kXCI6dyh0aGlzLnRyYW5zaXRpb25FbmQobikpO2JyZWFrO2Nhc2VcInJlc2l6ZVwiOncodCl9ZS5zdG9wUHJvcGFnYXRpb24mJm4uc3RvcFByb3BhZ2F0aW9uKCl9LHN0YXJ0OmZ1bmN0aW9uKGUpe2lmKGUudG91Y2hlcyl7dmFyIHQ9ZS50b3VjaGVzWzBdO2s9e3g6dC5wYWdlWCx5OnQucGFnZVksdGltZTorbmV3IERhdGV9LFA9dm9pZCAwLE49e30sRC5hZGRFdmVudExpc3RlbmVyKHAsdGhpcywhMSksRC5hZGRFdmVudExpc3RlbmVyKGcsdGhpcywhMSksRC5hZGRFdmVudExpc3RlbmVyKGgsdGhpcywhMSksRC5hZGRFdmVudExpc3RlbmVyKHYsdGhpcywhMSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihoLHRoaXMsITEpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodix0aGlzLCExKX19LHRvdWNobW92ZTpmdW5jdGlvbih0KXtpZighKCF0LnRvdWNoZXN8fHQudG91Y2hlcy5sZW5ndGg+MXx8dC5zY2FsZSYmMSE9PXQuc2NhbGV8fGYuc2xpZGVJc0Rpc2FibGVkKSl7ZS5kaXNhYmxlU2Nyb2xsJiZ0LnByZXZlbnREZWZhdWx0KCk7dmFyIG49dC50b3VjaGVzWzBdO049e3g6bi5wYWdlWC1rLngseTpuLnBhZ2VZLWsueX0sXCJ1bmRlZmluZWRcIj09dHlwZW9mIFAmJihQPSEhKFB8fE1hdGguYWJzKE4ueCk8TWF0aC5hYnMoTi55KSkpLFB8fCh0LnByZXZlbnREZWZhdWx0KCksZCgpLGUuY29udGludW91cz8ocyhyKE0tMSksTi54K3lbcihNLTEpXSwwKSxzKE0sTi54K3lbTV0sMCkscyhyKE0rMSksTi54K3lbcihNKzEpXSwwKSk6KGUuYm91bmNpbmc/Ti54PU4ueC8oIU0mJk4ueD4wfHxNPT1TLmxlbmd0aC0xJiZOLng8MD9NYXRoLmFicyhOLngpL0UrMToxKTooRSpNLU4ueDwwJiYoTi54PU1hdGgubWluKE4ueCxFKk0pKSxNYXRoLmFicyhOLngpPkUqKFMubGVuZ3RoLU0tMSkmJihOLng9TWF0aC5tYXgoLUUqKFMubGVuZ3RoLU0tMSksTi54KSkpLHMoTS0xLE4ueCt5W00tMV0sMCkscyhNLE4ueCt5W01dLDApLHMoTSsxLE4ueCt5W00rMV0sMCkpLGUub25EcmFnJiZlLm9uRHJhZygpKX19LGVuZDpmdW5jdGlvbigpe3ZhciB0PStuZXcgRGF0ZS1rLnRpbWUsbj1OdW1iZXIodCk8MjUwJiZNYXRoLmFicyhOLngpPjIwfHxNYXRoLmFicyhOLngpPkUvMixpPSFNJiZOLng+MHx8TT09Uy5sZW5ndGgtMSYmTi54PDA7ZS5jb250aW51b3VzJiYoaT0hMSk7dmFyIGE9Ti54PDA7UHx8KG4mJiFpPyhhPyhlLmNvbnRpbnVvdXM/KG8ocihNLTEpLC1FLDApLG8ocihNKzIpLEUsMCkpOm8oTS0xLC1FLDApLG8oTSx5W01dLUUsTCksbyhyKE0rMSkseVtyKE0rMSldLUUsTCksTT1yKE0rMSkpOihlLmNvbnRpbnVvdXM/KG8ocihNKzEpLEUsMCksbyhyKE0tMiksLUUsMCkpOm8oTSsxLEUsMCksbyhNLHlbTV0rRSxMKSxvKHIoTS0xKSx5W3IoTS0xKV0rRSxMKSxNPXIoTS0xKSksZS5jYWxsYmFjayYmZS5jYWxsYmFjayhNLFNbTV0pKTplLmNvbnRpbnVvdXM/KG8ocihNLTEpLC1FLEwpLG8oTSwwLEwpLG8ocihNKzEpLEUsTCkpOihvKE0tMSwtRSxMKSxvKE0sMCxMKSxvKE0rMSxFLEwpKSksRC5yZW1vdmVFdmVudExpc3RlbmVyKHAseiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKGcseiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKGgseiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKHYseiwhMSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoLHosITEpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodix6LCExKSxlLm9uRHJhZ0VuZCYmZS5vbkRyYWdFbmQoKX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbih0KXtwYXJzZUludCh0LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpLDEwKT09TSYmKEkmJmMoKSxlLnRyYW5zaXRpb25FbmQmJmUudHJhbnNpdGlvbkVuZC5jYWxsKHQsTSxTW01dKSl9fTt0aGlzLnVwZGF0ZT1mdW5jdGlvbigpe3NldFRpbWVvdXQodCl9LHRoaXMuc2V0dXA9ZnVuY3Rpb24oKXt0KCl9LHRoaXMubG9vcD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCYmKGUuY29udGludW91cz0hIXQpLGUuY29udGludW91c30sdGhpcy5lbmFibGVTbGlkZT1mdW5jdGlvbihlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCYmKHRoaXMuc2xpZGVJc0Rpc2FibGVkPSFlKSwhdGhpcy5zbGlkZUlzRGlzYWJsZWR9LHRoaXMuc2xpZGU9dGhpcy5zZWxlY3Q9ZnVuY3Rpb24oZSx0KXtkKCksYShlLHQpfSx0aGlzLnByZXY9dGhpcy5wcmV2aW91cz1mdW5jdGlvbigpe2QoKSxuKCl9LHRoaXMubmV4dD1mdW5jdGlvbigpe2QoKSxpKCl9LHRoaXMuc3RvcD1mdW5jdGlvbigpe2QoKX0sdGhpcy5zdGFydD1mdW5jdGlvbigpe2MoKX0sdGhpcy5hdXRvUGxheT1mdW5jdGlvbihlKXshSXx8MD5JP2QoKTooST1lLGMoKSl9LHRoaXMuY3VycmVudEluZGV4PXRoaXMuc2VsZWN0ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gTX0sdGhpcy5zbGlkZXNDb3VudD10aGlzLmNvdW50PWZ1bmN0aW9uKCl7cmV0dXJuIHh9LHRoaXMua2lsbD1mdW5jdGlvbigpe2QoKSxELnN0eWxlLndpZHRoPVwiXCIsRC5zdHlsZS5sZWZ0PVwiXCIsUyYmKFM9W10pLFQuYWRkRXZlbnRMaXN0ZW5lcj8oRC5yZW1vdmVFdmVudExpc3RlbmVyKHUseiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKG0seiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHosITEpLEQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1zVHJhbnNpdGlvbkVuZFwiLHosITEpLEQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9UcmFuc2l0aW9uRW5kXCIseiwhMSksRC5yZW1vdmVFdmVudExpc3RlbmVyKFwib3RyYW5zaXRpb25lbmRcIix6LCExKSxELnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIseiwhMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix6LCExKSk6d2luZG93Lm9ucmVzaXplPW51bGx9LHRoaXMubG9hZD1mdW5jdGlvbigpe3QoKSxJJiZjKCksVC5hZGRFdmVudExpc3RlbmVyPyhELmFkZEV2ZW50TGlzdGVuZXIodSx6LCExKSxELmFkZEV2ZW50TGlzdGVuZXIobSx6LCExKSxULnRyYW5zaXRpb25zJiYoRC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHosITEpLEQuYWRkRXZlbnRMaXN0ZW5lcihcIm1zVHJhbnNpdGlvbkVuZFwiLHosITEpLEQuYWRkRXZlbnRMaXN0ZW5lcihcIm9UcmFuc2l0aW9uRW5kXCIseiwhMSksRC5hZGRFdmVudExpc3RlbmVyKFwib3RyYW5zaXRpb25lbmRcIix6LCExKSxELmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIseiwhMSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIseiwhMSkpOndpbmRvdy5vbnJlc2l6ZT1mdW5jdGlvbigpe3QoKX19fX19KX0oaW9uaWMpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtlLmZuLnN3aXBlcj1mdW5jdGlvbih0KXt2YXIgaTtyZXR1cm4gZSh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9bmV3IG4odGhpcyx0KTtpfHwoaT1lKX0pLGl9fXZhciB0LG49ZnVuY3Rpb24oZSxyLGEsbyl7ZnVuY3Rpb24gcygpe3JldHVyblwiaG9yaXpvbnRhbFwiPT09eS5wYXJhbXMuZGlyZWN0aW9ufWZ1bmN0aW9uIGwoZSl7cmV0dXJuIE1hdGguZmxvb3IoZSl9ZnVuY3Rpb24gYygpe3kuYXV0b3BsYXlUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe3kucGFyYW1zLmxvb3A/KHkuZml4TG9vcCgpLHkuX3NsaWRlTmV4dCgpKTp5LmlzRW5kP3IuYXV0b3BsYXlTdG9wT25MYXN0P3kuc3RvcEF1dG9wbGF5KCk6eS5fc2xpZGVUbygwKTp5Ll9zbGlkZU5leHQoKX0seS5wYXJhbXMuYXV0b3BsYXkpfWZ1bmN0aW9uIGQoZSxuKXt2YXIgaT10KGUudGFyZ2V0KTtpZighaS5pcyhuKSlpZihcInN0cmluZ1wiPT10eXBlb2YgbilpPWkucGFyZW50cyhuKTtlbHNlIGlmKG4ubm9kZVR5cGUpe3ZhciByO3JldHVybiBpLnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKGUsdCl7dD09PW4mJihyPW4pfSkscj9uOnZvaWQgMH1yZXR1cm4gMD09PWkubGVuZ3RoP3ZvaWQgMDppWzBdfWZ1bmN0aW9uIHUoZSx0KXt0PXR8fHt9O3ZhciBuPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcixpPW5ldyBuKGZ1bmN0aW9uKGUpe2UuZm9yRWFjaChmdW5jdGlvbihlKXt5Lm9uUmVzaXplKCEwKSx5LmVtaXQoXCJvbk9ic2VydmVyVXBkYXRlXCIseSxlKX0pfSk7aS5vYnNlcnZlKGUse2F0dHJpYnV0ZXM6XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuYXR0cmlidXRlcz8hMDp0LmF0dHJpYnV0ZXMsY2hpbGRMaXN0OlwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LmNoaWxkTGlzdD8hMDp0LmNoaWxkTGlzdCxjaGFyYWN0ZXJEYXRhOlwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LmNoYXJhY3RlckRhdGE/ITA6dC5jaGFyYWN0ZXJEYXRhfSkseS5vYnNlcnZlcnMucHVzaChpKX1mdW5jdGlvbiBwKGUpe2Uub3JpZ2luYWxFdmVudCYmKGU9ZS5vcmlnaW5hbEV2ZW50KTt2YXIgdD1lLmtleUNvZGV8fGUuY2hhckNvZGU7aWYoIXkucGFyYW1zLmFsbG93U3dpcGVUb05leHQmJihzKCkmJjM5PT09dHx8IXMoKSYmNDA9PT10KSlyZXR1cm4hMTtpZigheS5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiYmKHMoKSYmMzc9PT10fHwhcygpJiYzOD09PXQpKXJldHVybiExO2lmKCEoZS5zaGlmdEtleXx8ZS5hbHRLZXl8fGUuY3RybEtleXx8ZS5tZXRhS2V5fHxkb2N1bWVudC5hY3RpdmVFbGVtZW50JiZkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lJiYoXCJpbnB1dFwiPT09ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfHxcInRleHRhcmVhXCI9PT1kb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSl7aWYoMzc9PT10fHwzOT09PXR8fDM4PT09dHx8NDA9PT10KXt2YXIgbj0hMTtpZih5LmNvbnRhaW5lci5wYXJlbnRzKFwiLnN3aXBlci1zbGlkZVwiKS5sZW5ndGg+MCYmMD09PXkuY29udGFpbmVyLnBhcmVudHMoXCIuc3dpcGVyLXNsaWRlLWFjdGl2ZVwiKS5sZW5ndGgpcmV0dXJuO3ZhciBpPXtsZWZ0OndpbmRvdy5wYWdlWE9mZnNldCx0b3A6d2luZG93LnBhZ2VZT2Zmc2V0fSxyPXdpbmRvdy5pbm5lcldpZHRoLGE9d2luZG93LmlubmVySGVpZ2h0LG89eS5jb250YWluZXIub2Zmc2V0KCk7eS5ydGwmJihvLmxlZnQ9by5sZWZ0LXkuY29udGFpbmVyWzBdLnNjcm9sbExlZnQpO2Zvcih2YXIgbD1bW28ubGVmdCxvLnRvcF0sW28ubGVmdCt5LndpZHRoLG8udG9wXSxbby5sZWZ0LG8udG9wK3kuaGVpZ2h0XSxbby5sZWZ0K3kud2lkdGgsby50b3AreS5oZWlnaHRdXSxjPTA7YzxsLmxlbmd0aDtjKyspe3ZhciBkPWxbY107ZFswXT49aS5sZWZ0JiZkWzBdPD1pLmxlZnQrciYmZFsxXT49aS50b3AmJmRbMV08PWkudG9wK2EmJihuPSEwKX1pZighbilyZXR1cm59cygpPygoMzc9PT10fHwzOT09PXQpJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSksKDM5PT09dCYmIXkucnRsfHwzNz09PXQmJnkucnRsKSYmeS5zbGlkZU5leHQoKSwoMzc9PT10JiYheS5ydGx8fDM5PT09dCYmeS5ydGwpJiZ5LnNsaWRlUHJldigpKTooKDM4PT09dHx8NDA9PT10KSYmKGUucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITEpLDQwPT09dCYmeS5zbGlkZU5leHQoKSwzOD09PXQmJnkuc2xpZGVQcmV2KCkpfX1mdW5jdGlvbiBoKGUpe2Uub3JpZ2luYWxFdmVudCYmKGU9ZS5vcmlnaW5hbEV2ZW50KTt2YXIgdD15Lm1vdXNld2hlZWwuZXZlbnQsbj0wLGk9eS5ydGw/LTE6MTtpZihlLmRldGFpbCluPS1lLmRldGFpbDtlbHNlIGlmKFwibW91c2V3aGVlbFwiPT09dClpZih5LnBhcmFtcy5tb3VzZXdoZWVsRm9yY2VUb0F4aXMpaWYocygpKXtpZighKE1hdGguYWJzKGUud2hlZWxEZWx0YVgpPk1hdGguYWJzKGUud2hlZWxEZWx0YVkpKSlyZXR1cm47bj1lLndoZWVsRGVsdGFYKml9ZWxzZXtpZighKE1hdGguYWJzKGUud2hlZWxEZWx0YVkpPk1hdGguYWJzKGUud2hlZWxEZWx0YVgpKSlyZXR1cm47bj1lLndoZWVsRGVsdGFZfWVsc2Ugbj1NYXRoLmFicyhlLndoZWVsRGVsdGFYKT5NYXRoLmFicyhlLndoZWVsRGVsdGFZKT8tZS53aGVlbERlbHRhWCppOi1lLndoZWVsRGVsdGFZO2Vsc2UgaWYoXCJET01Nb3VzZVNjcm9sbFwiPT09dCluPS1lLmRldGFpbDtlbHNlIGlmKFwid2hlZWxcIj09PXQpaWYoeS5wYXJhbXMubW91c2V3aGVlbEZvcmNlVG9BeGlzKWlmKHMoKSl7aWYoIShNYXRoLmFicyhlLmRlbHRhWCk+TWF0aC5hYnMoZS5kZWx0YVkpKSlyZXR1cm47bj0tZS5kZWx0YVgqaX1lbHNle2lmKCEoTWF0aC5hYnMoZS5kZWx0YVkpPk1hdGguYWJzKGUuZGVsdGFYKSkpcmV0dXJuO249LWUuZGVsdGFZfWVsc2Ugbj1NYXRoLmFicyhlLmRlbHRhWCk+TWF0aC5hYnMoZS5kZWx0YVkpPy1lLmRlbHRhWCppOi1lLmRlbHRhWTtpZigwIT09bil7aWYoeS5wYXJhbXMubW91c2V3aGVlbEludmVydCYmKG49LW4pLHkucGFyYW1zLmZyZWVNb2RlKXt2YXIgcj15LmdldFdyYXBwZXJUcmFuc2xhdGUoKStuKnkucGFyYW1zLm1vdXNld2hlZWxTZW5zaXRpdml0eSxhPXkuaXNCZWdpbm5pbmcsbz15LmlzRW5kO2lmKHI+PXkubWluVHJhbnNsYXRlKCkmJihyPXkubWluVHJhbnNsYXRlKCkpLHI8PXkubWF4VHJhbnNsYXRlKCkmJihyPXkubWF4VHJhbnNsYXRlKCkpLHkuc2V0V3JhcHBlclRyYW5zaXRpb24oMCkseS5zZXRXcmFwcGVyVHJhbnNsYXRlKHIpLHkudXBkYXRlUHJvZ3Jlc3MoKSx5LnVwZGF0ZUFjdGl2ZUluZGV4KCksKCFhJiZ5LmlzQmVnaW5uaW5nfHwhbyYmeS5pc0VuZCkmJnkudXBkYXRlQ2xhc3NlcygpLHkucGFyYW1zLmZyZWVNb2RlU3RpY2t5JiYoY2xlYXJUaW1lb3V0KHkubW91c2V3aGVlbC50aW1lb3V0KSx5Lm1vdXNld2hlZWwudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5zbGlkZVJlc2V0KCl9LDMwMCkpLDA9PT1yfHxyPT09eS5tYXhUcmFuc2xhdGUoKSlyZXR1cm59ZWxzZXtpZigobmV3IHdpbmRvdy5EYXRlKS5nZXRUaW1lKCkteS5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lPjYwKWlmKDA+bilpZih5LmlzRW5kJiYheS5wYXJhbXMubG9vcHx8eS5hbmltYXRpbmcpe2lmKHkucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcylyZXR1cm4hMH1lbHNlIHkuc2xpZGVOZXh0KCk7ZWxzZSBpZih5LmlzQmVnaW5uaW5nJiYheS5wYXJhbXMubG9vcHx8eS5hbmltYXRpbmcpe2lmKHkucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcylyZXR1cm4hMH1lbHNlIHkuc2xpZGVQcmV2KCk7eS5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lPShuZXcgd2luZG93LkRhdGUpLmdldFRpbWUoKX1yZXR1cm4geS5wYXJhbXMuYXV0b3BsYXkmJnkuc3RvcEF1dG9wbGF5KCksZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSwhMX19ZnVuY3Rpb24gZihlLG4pe2U9dChlKTt2YXIgaSxyLGEsbz15LnJ0bD8tMToxO2k9ZS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXhcIil8fFwiMFwiLHI9ZS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgteFwiKSxcbmE9ZS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgteVwiKSxyfHxhPyhyPXJ8fFwiMFwiLGE9YXx8XCIwXCIpOnMoKT8ocj1pLGE9XCIwXCIpOihhPWkscj1cIjBcIikscj1yLmluZGV4T2YoXCIlXCIpPj0wP3BhcnNlSW50KHIsMTApKm4qbytcIiVcIjpyKm4qbytcInB4XCIsYT1hLmluZGV4T2YoXCIlXCIpPj0wP3BhcnNlSW50KGEsMTApKm4rXCIlXCI6YSpuK1wicHhcIixlLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3IrXCIsIFwiK2ErXCIsMHB4KVwiKX1mdW5jdGlvbiBtKGUpe3JldHVybiAwIT09ZS5pbmRleE9mKFwib25cIikmJihlPWVbMF0hPT1lWzBdLnRvVXBwZXJDYXNlKCk/XCJvblwiK2VbMF0udG9VcHBlckNhc2UoKStlLnN1YnN0cmluZygxKTpcIm9uXCIrZSksZX1pZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG4oZSxyKTt2YXIgZz17ZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHRvdWNoRXZlbnRzVGFyZ2V0OlwiY29udGFpbmVyXCIsaW5pdGlhbFNsaWRlOjAsc3BlZWQ6MzAwLGF1dG9wbGF5OiExLGF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb246ITAsaU9TRWRnZVN3aXBlRGV0ZWN0aW9uOiExLGlPU0VkZ2VTd2lwZVRocmVzaG9sZDoyMCxmcmVlTW9kZTohMSxmcmVlTW9kZU1vbWVudHVtOiEwLGZyZWVNb2RlTW9tZW50dW1SYXRpbzoxLGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U6ITAsZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvOjEsZnJlZU1vZGVTdGlja3k6ITEsZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6LjAyLGF1dG9IZWlnaHQ6ITEsc2V0V3JhcHBlclNpemU6ITEsdmlydHVhbFRyYW5zbGF0ZTohMSxlZmZlY3Q6XCJzbGlkZVwiLGNvdmVyZmxvdzp7cm90YXRlOjUwLHN0cmV0Y2g6MCxkZXB0aDoxMDAsbW9kaWZpZXI6MSxzbGlkZVNoYWRvd3M6ITB9LGN1YmU6e3NsaWRlU2hhZG93czohMCxzaGFkb3c6ITAsc2hhZG93T2Zmc2V0OjIwLHNoYWRvd1NjYWxlOi45NH0sZmFkZTp7Y3Jvc3NGYWRlOiExfSxwYXJhbGxheDohMSxzY3JvbGxiYXI6bnVsbCxzY3JvbGxiYXJIaWRlOiEwLHNjcm9sbGJhckRyYWdnYWJsZTohMSxzY3JvbGxiYXJTbmFwT25SZWxlYXNlOiExLGtleWJvYXJkQ29udHJvbDohMSxtb3VzZXdoZWVsQ29udHJvbDohMSxtb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXM6ITEsbW91c2V3aGVlbEludmVydDohMSxtb3VzZXdoZWVsRm9yY2VUb0F4aXM6ITEsbW91c2V3aGVlbFNlbnNpdGl2aXR5OjEsaGFzaG5hdjohMSxicmVha3BvaW50czp2b2lkIDAsc3BhY2VCZXR3ZWVuOjAsc2xpZGVzUGVyVmlldzoxLHNsaWRlc1BlckNvbHVtbjoxLHNsaWRlc1BlckNvbHVtbkZpbGw6XCJjb2x1bW5cIixzbGlkZXNQZXJHcm91cDoxLGNlbnRlcmVkU2xpZGVzOiExLHNsaWRlc09mZnNldEJlZm9yZTowLHNsaWRlc09mZnNldEFmdGVyOjAscm91bmRMZW5ndGhzOiExLHRvdWNoUmF0aW86MSx0b3VjaEFuZ2xlOjQ1LHNpbXVsYXRlVG91Y2g6ITAsc2hvcnRTd2lwZXM6ITAsbG9uZ1N3aXBlczohMCxsb25nU3dpcGVzUmF0aW86LjUsbG9uZ1N3aXBlc01zOjMwMCxmb2xsb3dGaW5nZXI6ITAsb25seUV4dGVybmFsOiExLHRocmVzaG9sZDowLHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjohMCxwYWdpbmF0aW9uOm51bGwscGFnaW5hdGlvbkVsZW1lbnQ6XCJzcGFuXCIscGFnaW5hdGlvbkNsaWNrYWJsZTohMSxwYWdpbmF0aW9uSGlkZTohMSxwYWdpbmF0aW9uQnVsbGV0UmVuZGVyOm51bGwscmVzaXN0YW5jZTohMCxyZXNpc3RhbmNlUmF0aW86Ljg1LG5leHRCdXR0b246bnVsbCxwcmV2QnV0dG9uOm51bGwsd2F0Y2hTbGlkZXNQcm9ncmVzczohMSx3YXRjaFNsaWRlc1Zpc2liaWxpdHk6ITEsZ3JhYkN1cnNvcjohMSxwcmV2ZW50Q2xpY2tzOiEwLHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjohMCxzbGlkZVRvQ2xpY2tlZFNsaWRlOiExLGxhenlMb2FkaW5nOiExLGxhenlMb2FkaW5nSW5QcmV2TmV4dDohMSxsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0OiExLHByZWxvYWRJbWFnZXM6ITAsdXBkYXRlT25JbWFnZXNSZWFkeTohMCxsb29wOiExLGxvb3BBZGRpdGlvbmFsU2xpZGVzOjAsbG9vcGVkU2xpZGVzOm51bGwsY29udHJvbDp2b2lkIDAsY29udHJvbEludmVyc2U6ITEsY29udHJvbEJ5Olwic2xpZGVcIixhbGxvd1N3aXBlVG9QcmV2OiEwLGFsbG93U3dpcGVUb05leHQ6ITAsc3dpcGVIYW5kbGVyOm51bGwsbm9Td2lwaW5nOiEwLG5vU3dpcGluZ0NsYXNzOlwic3dpcGVyLW5vLXN3aXBpbmdcIixzbGlkZUNsYXNzOlwic3dpcGVyLXNsaWRlXCIsc2xpZGVBY3RpdmVDbGFzczpcInN3aXBlci1zbGlkZS1hY3RpdmVcIixzbGlkZVZpc2libGVDbGFzczpcInN3aXBlci1zbGlkZS12aXNpYmxlXCIsc2xpZGVEdXBsaWNhdGVDbGFzczpcInN3aXBlci1zbGlkZS1kdXBsaWNhdGVcIixzbGlkZU5leHRDbGFzczpcInN3aXBlci1zbGlkZS1uZXh0XCIsc2xpZGVQcmV2Q2xhc3M6XCJzd2lwZXItc2xpZGUtcHJldlwiLHdyYXBwZXJDbGFzczpcInN3aXBlci13cmFwcGVyXCIsYnVsbGV0Q2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRcIixidWxsZXRBY3RpdmVDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmVcIixidXR0b25EaXNhYmxlZENsYXNzOlwic3dpcGVyLWJ1dHRvbi1kaXNhYmxlZFwiLHBhZ2luYXRpb25IaWRkZW5DbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLG9ic2VydmVyOiExLG9ic2VydmVQYXJlbnRzOiExLGExMXk6ITEscHJldlNsaWRlTWVzc2FnZTpcIlByZXZpb3VzIHNsaWRlXCIsbmV4dFNsaWRlTWVzc2FnZTpcIk5leHQgc2xpZGVcIixmaXJzdFNsaWRlTWVzc2FnZTpcIlRoaXMgaXMgdGhlIGZpcnN0IHNsaWRlXCIsbGFzdFNsaWRlTWVzc2FnZTpcIlRoaXMgaXMgdGhlIGxhc3Qgc2xpZGVcIixwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTpcIkdvIHRvIHNsaWRlIHt7aW5kZXh9fVwiLHJ1bkNhbGxiYWNrc09uSW5pdDohMH0sdj1yJiZyLnZpcnR1YWxUcmFuc2xhdGU7cj1yfHx7fTt2YXIgXz17fTtmb3IodmFyIHcgaW4gcilpZihcIm9iamVjdFwiIT10eXBlb2Ygclt3XXx8KHJbd10ubm9kZVR5cGV8fHJbd109PT13aW5kb3d8fHJbd109PT1kb2N1bWVudHx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkmJnJbd11pbnN0YW5jZW9mIGl8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkmJnJbd11pbnN0YW5jZW9mIGpRdWVyeSkpX1t3XT1yW3ddO2Vsc2V7X1t3XT17fTtmb3IodmFyIFQgaW4gclt3XSlfW3ddW1RdPXJbd11bVF19Zm9yKHZhciBiIGluIGcpaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHJbYl0pcltiXT1nW2JdO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIHJbYl0pZm9yKHZhciBTIGluIGdbYl0pXCJ1bmRlZmluZWRcIj09dHlwZW9mIHJbYl1bU10mJihyW2JdW1NdPWdbYl1bU10pO3ZhciB5PXRoaXM7aWYoeS5wYXJhbXM9cix5Lm9yaWdpbmFsUGFyYW1zPV8seS5jbGFzc05hbWVzPVtdLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaSYmKHQ9aSksKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0fHwodD1cInVuZGVmaW5lZFwiPT10eXBlb2YgaT93aW5kb3cuRG9tN3x8d2luZG93LlplcHRvfHx3aW5kb3cualF1ZXJ5OmkpKSYmKHkuJD10LHkuY3VycmVudEJyZWFrcG9pbnQ9dm9pZCAwLHkuZ2V0QWN0aXZlQnJlYWtwb2ludD1mdW5jdGlvbigpe2lmKCF5LnBhcmFtcy5icmVha3BvaW50cylyZXR1cm4hMTt2YXIgZSx0PSExLG49W107Zm9yKGUgaW4geS5wYXJhbXMuYnJlYWtwb2ludHMpeS5wYXJhbXMuYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoZSkmJm4ucHVzaChlKTtuLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gcGFyc2VJbnQoZSwxMCk+cGFyc2VJbnQodCwxMCl9KTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyllPW5baV0sZT49d2luZG93LmlubmVyV2lkdGgmJiF0JiYodD1lKTtyZXR1cm4gdHx8XCJtYXhcIn0seS5zZXRCcmVha3BvaW50PWZ1bmN0aW9uKCl7dmFyIGU9eS5nZXRBY3RpdmVCcmVha3BvaW50KCk7aWYoZSYmeS5jdXJyZW50QnJlYWtwb2ludCE9PWUpe3ZhciB0PWUgaW4geS5wYXJhbXMuYnJlYWtwb2ludHM/eS5wYXJhbXMuYnJlYWtwb2ludHNbZV06eS5vcmlnaW5hbFBhcmFtcztmb3IodmFyIG4gaW4gdCl5LnBhcmFtc1tuXT10W25dO3kuY3VycmVudEJyZWFrcG9pbnQ9ZX19LHkucGFyYW1zLmJyZWFrcG9pbnRzJiZ5LnNldEJyZWFrcG9pbnQoKSx5LmNvbnRhaW5lcj10KGUpLDAhPT15LmNvbnRhaW5lci5sZW5ndGgpKXtpZih5LmNvbnRhaW5lci5sZW5ndGg+MSlyZXR1cm4gdm9pZCB5LmNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uKCl7bmV3IG4odGhpcyxyKX0pO3kuY29udGFpbmVyWzBdLnN3aXBlcj15LHkuY29udGFpbmVyLmRhdGEoXCJzd2lwZXJcIix5KSx5LmNsYXNzTmFtZXMucHVzaChcInN3aXBlci1jb250YWluZXItXCIreS5wYXJhbXMuZGlyZWN0aW9uKSx5LnBhcmFtcy5mcmVlTW9kZSYmeS5jbGFzc05hbWVzLnB1c2goXCJzd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZVwiKSx5LnN1cHBvcnQuZmxleGJveHx8KHkuY2xhc3NOYW1lcy5wdXNoKFwic3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94XCIpLHkucGFyYW1zLnNsaWRlc1BlckNvbHVtbj0xKSx5LnBhcmFtcy5hdXRvSGVpZ2h0JiZ5LmNsYXNzTmFtZXMucHVzaChcInN3aXBlci1jb250YWluZXItYXV0b2hlaWdodFwiKSwoeS5wYXJhbXMucGFyYWxsYXh8fHkucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkmJih5LnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzPSEwKSxbXCJjdWJlXCIsXCJjb3ZlcmZsb3dcIl0uaW5kZXhPZih5LnBhcmFtcy5lZmZlY3QpPj0wJiYoeS5zdXBwb3J0LnRyYW5zZm9ybXMzZD8oeS5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCx5LmNsYXNzTmFtZXMucHVzaChcInN3aXBlci1jb250YWluZXItM2RcIikpOnkucGFyYW1zLmVmZmVjdD1cInNsaWRlXCIpLFwic2xpZGVcIiE9PXkucGFyYW1zLmVmZmVjdCYmeS5jbGFzc05hbWVzLnB1c2goXCJzd2lwZXItY29udGFpbmVyLVwiK3kucGFyYW1zLmVmZmVjdCksXCJjdWJlXCI9PT15LnBhcmFtcy5lZmZlY3QmJih5LnBhcmFtcy5yZXNpc3RhbmNlUmF0aW89MCx5LnBhcmFtcy5zbGlkZXNQZXJWaWV3PTEseS5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uPTEseS5wYXJhbXMuc2xpZGVzUGVyR3JvdXA9MSx5LnBhcmFtcy5jZW50ZXJlZFNsaWRlcz0hMSx5LnBhcmFtcy5zcGFjZUJldHdlZW49MCx5LnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlPSEwLHkucGFyYW1zLnNldFdyYXBwZXJTaXplPSExKSxcImZhZGVcIj09PXkucGFyYW1zLmVmZmVjdCYmKHkucGFyYW1zLnNsaWRlc1BlclZpZXc9MSx5LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW49MSx5LnBhcmFtcy5zbGlkZXNQZXJHcm91cD0xLHkucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3M9ITAseS5wYXJhbXMuc3BhY2VCZXR3ZWVuPTAsXCJ1bmRlZmluZWRcIj09dHlwZW9mIHYmJih5LnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlPSEwKSkseS5wYXJhbXMuZ3JhYkN1cnNvciYmeS5zdXBwb3J0LnRvdWNoJiYoeS5wYXJhbXMuZ3JhYkN1cnNvcj0hMSkseS53cmFwcGVyPXkuY29udGFpbmVyLmNoaWxkcmVuKFwiLlwiK3kucGFyYW1zLndyYXBwZXJDbGFzcykseS5wYXJhbXMucGFnaW5hdGlvbiYmKHkucGFnaW5hdGlvbkNvbnRhaW5lcj10KHkucGFyYW1zLnBhZ2luYXRpb24pLHkucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUmJnkucGFnaW5hdGlvbkNvbnRhaW5lci5hZGRDbGFzcyhcInN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZVwiKSkseS5ydGw9cygpJiYoXCJydGxcIj09PXkuY29udGFpbmVyWzBdLmRpci50b0xvd2VyQ2FzZSgpfHxcInJ0bFwiPT09eS5jb250YWluZXIuY3NzKFwiZGlyZWN0aW9uXCIpKSx5LnJ0bCYmeS5jbGFzc05hbWVzLnB1c2goXCJzd2lwZXItY29udGFpbmVyLXJ0bFwiKSx5LnJ0bCYmKHkud3JvbmdSVEw9XCItd2Via2l0LWJveFwiPT09eS53cmFwcGVyLmNzcyhcImRpc3BsYXlcIikpLHkucGFyYW1zLnNsaWRlc1BlckNvbHVtbj4xJiZ5LmNsYXNzTmFtZXMucHVzaChcInN3aXBlci1jb250YWluZXItbXVsdGlyb3dcIikseS5kZXZpY2UuYW5kcm9pZCYmeS5jbGFzc05hbWVzLnB1c2goXCJzd2lwZXItY29udGFpbmVyLWFuZHJvaWRcIikseS5jb250YWluZXIuYWRkQ2xhc3MoeS5jbGFzc05hbWVzLmpvaW4oXCIgXCIpKSx5LnRyYW5zbGF0ZT0wLHkucHJvZ3Jlc3M9MCx5LnZlbG9jaXR5PTAseS5sb2NrU3dpcGVUb05leHQ9ZnVuY3Rpb24oKXt5LnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0PSExfSx5LmxvY2tTd2lwZVRvUHJldj1mdW5jdGlvbigpe3kucGFyYW1zLmFsbG93U3dpcGVUb1ByZXY9ITF9LHkubG9ja1N3aXBlcz1mdW5jdGlvbigpe3kucGFyYW1zLmFsbG93U3dpcGVUb05leHQ9eS5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldj0hMX0seS51bmxvY2tTd2lwZVRvTmV4dD1mdW5jdGlvbigpe3kucGFyYW1zLmFsbG93U3dpcGVUb05leHQ9ITB9LHkudW5sb2NrU3dpcGVUb1ByZXY9ZnVuY3Rpb24oKXt5LnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2PSEwfSx5LnVubG9ja1N3aXBlcz1mdW5jdGlvbigpe3kucGFyYW1zLmFsbG93U3dpcGVUb05leHQ9eS5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldj0hMH0seS5wYXJhbXMuZ3JhYkN1cnNvciYmKHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cIm1vdmVcIix5LmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix5LmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3I9XCItbW96LWdyYWJcIix5LmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3I9XCJncmFiXCIpLHkuaW1hZ2VzVG9Mb2FkPVtdLHkuaW1hZ2VzTG9hZGVkPTAseS5sb2FkSW1hZ2U9ZnVuY3Rpb24oZSx0LG4saSxyKXtmdW5jdGlvbiBhKCl7ciYmcigpfXZhciBvO2UuY29tcGxldGUmJmk/YSgpOnQ/KG89bmV3IHdpbmRvdy5JbWFnZSxvLm9ubG9hZD1hLG8ub25lcnJvcj1hLG4mJihvLnNyY3NldD1uKSx0JiYoby5zcmM9dCkpOmEoKX0seS5wcmVsb2FkSW1hZ2VzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe1widW5kZWZpbmVkXCIhPXR5cGVvZiB5JiZudWxsIT09eSYmKHZvaWQgMCE9PXkuaW1hZ2VzTG9hZGVkJiZ5LmltYWdlc0xvYWRlZCsrLHkuaW1hZ2VzTG9hZGVkPT09eS5pbWFnZXNUb0xvYWQubGVuZ3RoJiYoeS5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSYmeS51cGRhdGUoKSx5LmVtaXQoXCJvbkltYWdlc1JlYWR5XCIseSkpKX15LmltYWdlc1RvTG9hZD15LmNvbnRhaW5lci5maW5kKFwiaW1nXCIpO2Zvcih2YXIgdD0wO3Q8eS5pbWFnZXNUb0xvYWQubGVuZ3RoO3QrKyl5LmxvYWRJbWFnZSh5LmltYWdlc1RvTG9hZFt0XSx5LmltYWdlc1RvTG9hZFt0XS5jdXJyZW50U3JjfHx5LmltYWdlc1RvTG9hZFt0XS5nZXRBdHRyaWJ1dGUoXCJzcmNcIikseS5pbWFnZXNUb0xvYWRbdF0uc3Jjc2V0fHx5LmltYWdlc1RvTG9hZFt0XS5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksITAsZSl9LHkuYXV0b3BsYXlUaW1lb3V0SWQ9dm9pZCAwLHkuYXV0b3BsYXlpbmc9ITEseS5hdXRvcGxheVBhdXNlZD0hMSx5LnN0YXJ0QXV0b3BsYXk9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgeS5hdXRvcGxheVRpbWVvdXRJZD8hMTp5LnBhcmFtcy5hdXRvcGxheT95LmF1dG9wbGF5aW5nPyExOih5LmF1dG9wbGF5aW5nPSEwLHkuZW1pdChcIm9uQXV0b3BsYXlTdGFydFwiLHkpLHZvaWQgYygpKTohMX0seS5zdG9wQXV0b3BsYXk9ZnVuY3Rpb24oZSl7eS5hdXRvcGxheVRpbWVvdXRJZCYmKHkuYXV0b3BsYXlUaW1lb3V0SWQmJmNsZWFyVGltZW91dCh5LmF1dG9wbGF5VGltZW91dElkKSx5LmF1dG9wbGF5aW5nPSExLHkuYXV0b3BsYXlUaW1lb3V0SWQ9dm9pZCAwLHkuZW1pdChcIm9uQXV0b3BsYXlTdG9wXCIseSkpfSx5LnBhdXNlQXV0b3BsYXk9ZnVuY3Rpb24oZSl7eS5hdXRvcGxheVBhdXNlZHx8KHkuYXV0b3BsYXlUaW1lb3V0SWQmJmNsZWFyVGltZW91dCh5LmF1dG9wbGF5VGltZW91dElkKSx5LmF1dG9wbGF5UGF1c2VkPSEwLDA9PT1lPyh5LmF1dG9wbGF5UGF1c2VkPSExLGMoKSk6eS53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXt5JiYoeS5hdXRvcGxheVBhdXNlZD0hMSx5LmF1dG9wbGF5aW5nP2MoKTp5LnN0b3BBdXRvcGxheSgpKX0pKX0seS5taW5UcmFuc2xhdGU9ZnVuY3Rpb24oKXtyZXR1cm4teS5zbmFwR3JpZFswXX0seS5tYXhUcmFuc2xhdGU9ZnVuY3Rpb24oKXtyZXR1cm4teS5zbmFwR3JpZFt5LnNuYXBHcmlkLmxlbmd0aC0xXX0seS51cGRhdGVBdXRvSGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGU9eS5zbGlkZXMuZXEoeS5hY3RpdmVJbmRleClbMF0ub2Zmc2V0SGVpZ2h0O2UmJnkud3JhcHBlci5jc3MoXCJoZWlnaHRcIix5LnNsaWRlcy5lcSh5LmFjdGl2ZUluZGV4KVswXS5vZmZzZXRIZWlnaHQrXCJweFwiKX0seS51cGRhdGVDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7dmFyIGUsdDtlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB5LnBhcmFtcy53aWR0aD95LnBhcmFtcy53aWR0aDp5LmNvbnRhaW5lclswXS5jbGllbnRXaWR0aCx0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB5LnBhcmFtcy5oZWlnaHQ/eS5wYXJhbXMuaGVpZ2h0OnkuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodCwwPT09ZSYmcygpfHwwPT09dCYmIXMoKXx8KGU9ZS1wYXJzZUludCh5LmNvbnRhaW5lci5jc3MoXCJwYWRkaW5nLWxlZnRcIiksMTApLXBhcnNlSW50KHkuY29udGFpbmVyLmNzcyhcInBhZGRpbmctcmlnaHRcIiksMTApLHQ9dC1wYXJzZUludCh5LmNvbnRhaW5lci5jc3MoXCJwYWRkaW5nLXRvcFwiKSwxMCktcGFyc2VJbnQoeS5jb250YWluZXIuY3NzKFwicGFkZGluZy1ib3R0b21cIiksMTApLHkud2lkdGg9ZSx5LmhlaWdodD10LHkuc2l6ZT1zKCk/eS53aWR0aDp5LmhlaWdodCl9LHkudXBkYXRlU2xpZGVzU2l6ZT1mdW5jdGlvbigpe3kuc2xpZGVzPXkud3JhcHBlci5jaGlsZHJlbihcIi5cIit5LnBhcmFtcy5zbGlkZUNsYXNzKSx5LnNuYXBHcmlkPVtdLHkuc2xpZGVzR3JpZD1bXSx5LnNsaWRlc1NpemVzR3JpZD1bXTt2YXIgZSx0PXkucGFyYW1zLnNwYWNlQmV0d2VlbixuPS15LnBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUsaT0wLHI9MDtcInN0cmluZ1wiPT10eXBlb2YgdCYmdC5pbmRleE9mKFwiJVwiKT49MCYmKHQ9cGFyc2VGbG9hdCh0LnJlcGxhY2UoXCIlXCIsXCJcIikpLzEwMCp5LnNpemUpLHkudmlydHVhbFNpemU9LXQseS5ydGw/eS5zbGlkZXMuY3NzKHttYXJnaW5MZWZ0OlwiXCIsbWFyZ2luVG9wOlwiXCJ9KTp5LnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OlwiXCIsbWFyZ2luQm90dG9tOlwiXCJ9KTt2YXIgYTt5LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4+MSYmKGE9TWF0aC5mbG9vcih5LnNsaWRlcy5sZW5ndGgveS5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKT09PXkuc2xpZGVzLmxlbmd0aC95LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4/eS5zbGlkZXMubGVuZ3RoOk1hdGguY2VpbCh5LnNsaWRlcy5sZW5ndGgveS5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSp5LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4sXCJhdXRvXCIhPT15LnBhcmFtcy5zbGlkZXNQZXJWaWV3JiZcInJvd1wiPT09eS5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCYmKGE9TWF0aC5tYXgoYSx5LnBhcmFtcy5zbGlkZXNQZXJWaWV3KnkucGFyYW1zLnNsaWRlc1BlckNvbHVtbikpKTt2YXIgbyxjPXkucGFyYW1zLnNsaWRlc1BlckNvbHVtbixkPWEvYyx1PWQtKHkucGFyYW1zLnNsaWRlc1BlckNvbHVtbipkLXkuc2xpZGVzLmxlbmd0aCk7Zm9yKGU9MDtlPHkuc2xpZGVzLmxlbmd0aDtlKyspe289MDt2YXIgcD15LnNsaWRlcy5lcShlKTtpZih5LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4+MSl7dmFyIGgsZixtO1wiY29sdW1uXCI9PT15LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsPyhmPU1hdGguZmxvb3IoZS9jKSxtPWUtZipjLChmPnV8fGY9PT11JiZtPT09Yy0xKSYmKyttPj1jJiYobT0wLGYrKyksaD1mK20qYS9jLHAuY3NzKHtcIi13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXBcIjpoLFwiLW1vei1ib3gtb3JkaW5hbC1ncm91cFwiOmgsXCItbXMtZmxleC1vcmRlclwiOmgsXCItd2Via2l0LW9yZGVyXCI6aCxvcmRlcjpofSkpOihtPU1hdGguZmxvb3IoZS9kKSxmPWUtbSpkKSxwLmNzcyh7XCJtYXJnaW4tdG9wXCI6MCE9PW0mJnkucGFyYW1zLnNwYWNlQmV0d2VlbiYmeS5wYXJhbXMuc3BhY2VCZXR3ZWVuK1wicHhcIn0pLmF0dHIoXCJkYXRhLXN3aXBlci1jb2x1bW5cIixmKS5hdHRyKFwiZGF0YS1zd2lwZXItcm93XCIsbSl9XCJub25lXCIhPT1wLmNzcyhcImRpc3BsYXlcIikmJihcImF1dG9cIj09PXkucGFyYW1zLnNsaWRlc1BlclZpZXc/KG89cygpP3Aub3V0ZXJXaWR0aCghMCk6cC5vdXRlckhlaWdodCghMCkseS5wYXJhbXMucm91bmRMZW5ndGhzJiYobz1sKG8pKSk6KG89KHkuc2l6ZS0oeS5wYXJhbXMuc2xpZGVzUGVyVmlldy0xKSp0KS95LnBhcmFtcy5zbGlkZXNQZXJWaWV3LHkucGFyYW1zLnJvdW5kTGVuZ3RocyYmKG89bChvKSkscygpP3kuc2xpZGVzW2VdLnN0eWxlLndpZHRoPW8rXCJweFwiOnkuc2xpZGVzW2VdLnN0eWxlLmhlaWdodD1vK1wicHhcIikseS5zbGlkZXNbZV0uc3dpcGVyU2xpZGVTaXplPW8seS5zbGlkZXNTaXplc0dyaWQucHVzaChvKSx5LnBhcmFtcy5jZW50ZXJlZFNsaWRlcz8obj1uK28vMitpLzIrdCwwPT09ZSYmKG49bi15LnNpemUvMi10KSxNYXRoLmFicyhuKTwuMDAxJiYobj0wKSxyJXkucGFyYW1zLnNsaWRlc1Blckdyb3VwPT09MCYmeS5zbmFwR3JpZC5wdXNoKG4pLHkuc2xpZGVzR3JpZC5wdXNoKG4pKToociV5LnBhcmFtcy5zbGlkZXNQZXJHcm91cD09PTAmJnkuc25hcEdyaWQucHVzaChuKSx5LnNsaWRlc0dyaWQucHVzaChuKSxuPW4rbyt0KSx5LnZpcnR1YWxTaXplKz1vK3QsaT1vLHIrKyl9eS52aXJ0dWFsU2l6ZT1NYXRoLm1heCh5LnZpcnR1YWxTaXplLHkuc2l6ZSkreS5wYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7dmFyIGc7aWYoeS5ydGwmJnkud3JvbmdSVEwmJihcInNsaWRlXCI9PT15LnBhcmFtcy5lZmZlY3R8fFwiY292ZXJmbG93XCI9PT15LnBhcmFtcy5lZmZlY3QpJiZ5LndyYXBwZXIuY3NzKHt3aWR0aDp5LnZpcnR1YWxTaXplK3kucGFyYW1zLnNwYWNlQmV0d2VlbitcInB4XCJ9KSwoIXkuc3VwcG9ydC5mbGV4Ym94fHx5LnBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkmJihzKCk/eS53cmFwcGVyLmNzcyh7d2lkdGg6eS52aXJ0dWFsU2l6ZSt5LnBhcmFtcy5zcGFjZUJldHdlZW4rXCJweFwifSk6eS53cmFwcGVyLmNzcyh7aGVpZ2h0OnkudmlydHVhbFNpemUreS5wYXJhbXMuc3BhY2VCZXR3ZWVuK1wicHhcIn0pKSx5LnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4+MSYmKHkudmlydHVhbFNpemU9KG8reS5wYXJhbXMuc3BhY2VCZXR3ZWVuKSphLHkudmlydHVhbFNpemU9TWF0aC5jZWlsKHkudmlydHVhbFNpemUveS5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKS15LnBhcmFtcy5zcGFjZUJldHdlZW4seS53cmFwcGVyLmNzcyh7d2lkdGg6eS52aXJ0dWFsU2l6ZSt5LnBhcmFtcy5zcGFjZUJldHdlZW4rXCJweFwifSkseS5wYXJhbXMuY2VudGVyZWRTbGlkZXMpKXtmb3IoZz1bXSxlPTA7ZTx5LnNuYXBHcmlkLmxlbmd0aDtlKyspeS5zbmFwR3JpZFtlXTx5LnZpcnR1YWxTaXplK3kuc25hcEdyaWRbMF0mJmcucHVzaCh5LnNuYXBHcmlkW2VdKTt5LnNuYXBHcmlkPWd9aWYoIXkucGFyYW1zLmNlbnRlcmVkU2xpZGVzKXtmb3IoZz1bXSxlPTA7ZTx5LnNuYXBHcmlkLmxlbmd0aDtlKyspeS5zbmFwR3JpZFtlXTw9eS52aXJ0dWFsU2l6ZS15LnNpemUmJmcucHVzaCh5LnNuYXBHcmlkW2VdKTt5LnNuYXBHcmlkPWcsTWF0aC5mbG9vcih5LnZpcnR1YWxTaXplLXkuc2l6ZSk+TWF0aC5mbG9vcih5LnNuYXBHcmlkW3kuc25hcEdyaWQubGVuZ3RoLTFdKSYmeS5zbmFwR3JpZC5wdXNoKHkudmlydHVhbFNpemUteS5zaXplKX0wPT09eS5zbmFwR3JpZC5sZW5ndGgmJih5LnNuYXBHcmlkPVswXSksMCE9PXkucGFyYW1zLnNwYWNlQmV0d2VlbiYmKHMoKT95LnJ0bD95LnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6dCtcInB4XCJ9KTp5LnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OnQrXCJweFwifSk6eS5zbGlkZXMuY3NzKHttYXJnaW5Cb3R0b206dCtcInB4XCJ9KSkseS5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyYmeS51cGRhdGVTbGlkZXNPZmZzZXQoKX0seS51cGRhdGVTbGlkZXNPZmZzZXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHkuc2xpZGVzLmxlbmd0aDtlKyspeS5zbGlkZXNbZV0uc3dpcGVyU2xpZGVPZmZzZXQ9cygpP3kuc2xpZGVzW2VdLm9mZnNldExlZnQ6eS5zbGlkZXNbZV0ub2Zmc2V0VG9wfSx5LnVwZGF0ZVNsaWRlc1Byb2dyZXNzPWZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT15LnRyYW5zbGF0ZXx8MCksMCE9PXkuc2xpZGVzLmxlbmd0aCl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHkuc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0JiZ5LnVwZGF0ZVNsaWRlc09mZnNldCgpO3ZhciB0PS1lO3kucnRsJiYodD1lKSx5LnNsaWRlcy5yZW1vdmVDbGFzcyh5LnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7Zm9yKHZhciBuPTA7bjx5LnNsaWRlcy5sZW5ndGg7bisrKXt2YXIgaT15LnNsaWRlc1tuXSxyPSh0LWkuc3dpcGVyU2xpZGVPZmZzZXQpLyhpLnN3aXBlclNsaWRlU2l6ZSt5LnBhcmFtcy5zcGFjZUJldHdlZW4pO2lmKHkucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSl7dmFyIGE9LSh0LWkuc3dpcGVyU2xpZGVPZmZzZXQpLG89YSt5LnNsaWRlc1NpemVzR3JpZFtuXSxzPWE+PTAmJmE8eS5zaXplfHxvPjAmJm88PXkuc2l6ZXx8MD49YSYmbz49eS5zaXplO3MmJnkuc2xpZGVzLmVxKG4pLmFkZENsYXNzKHkucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKX1pLnByb2dyZXNzPXkucnRsPy1yOnJ9fX0seS51cGRhdGVQcm9ncmVzcz1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKGU9eS50cmFuc2xhdGV8fDApO3ZhciB0PXkubWF4VHJhbnNsYXRlKCkteS5taW5UcmFuc2xhdGUoKSxuPXkuaXNCZWdpbm5pbmcsaT15LmlzRW5kOzA9PT10Pyh5LnByb2dyZXNzPTAseS5pc0JlZ2lubmluZz15LmlzRW5kPSEwKTooeS5wcm9ncmVzcz0oZS15Lm1pblRyYW5zbGF0ZSgpKS90LHkuaXNCZWdpbm5pbmc9eS5wcm9ncmVzczw9MCx5LmlzRW5kPXkucHJvZ3Jlc3M+PTEpLHkuaXNCZWdpbm5pbmcmJiFuJiZ5LmVtaXQoXCJvblJlYWNoQmVnaW5uaW5nXCIseSkseS5pc0VuZCYmIWkmJnkuZW1pdChcIm9uUmVhY2hFbmRcIix5KSx5LnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzJiZ5LnVwZGF0ZVNsaWRlc1Byb2dyZXNzKGUpLHkuZW1pdChcIm9uUHJvZ3Jlc3NcIix5LHkucHJvZ3Jlc3MpfSx5LnVwZGF0ZUFjdGl2ZUluZGV4PWZ1bmN0aW9uKCl7dmFyIGUsdCxuLGk9eS5ydGw/eS50cmFuc2xhdGU6LXkudHJhbnNsYXRlO2Zvcih0PTA7dDx5LnNsaWRlc0dyaWQubGVuZ3RoO3QrKylcInVuZGVmaW5lZFwiIT10eXBlb2YgeS5zbGlkZXNHcmlkW3QrMV0/aT49eS5zbGlkZXNHcmlkW3RdJiZpPHkuc2xpZGVzR3JpZFt0KzFdLSh5LnNsaWRlc0dyaWRbdCsxXS15LnNsaWRlc0dyaWRbdF0pLzI/ZT10Omk+PXkuc2xpZGVzR3JpZFt0XSYmaTx5LnNsaWRlc0dyaWRbdCsxXSYmKGU9dCsxKTppPj15LnNsaWRlc0dyaWRbdF0mJihlPXQpOygwPmV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlKSYmKGU9MCksbj1NYXRoLmZsb29yKGUveS5wYXJhbXMuc2xpZGVzUGVyR3JvdXApLG4+PXkuc25hcEdyaWQubGVuZ3RoJiYobj15LnNuYXBHcmlkLmxlbmd0aC0xKSxlIT09eS5hY3RpdmVJbmRleCYmKHkuc25hcEluZGV4PW4seS5wcmV2aW91c0luZGV4PXkuYWN0aXZlSW5kZXgseS5hY3RpdmVJbmRleD1lLHkudXBkYXRlQ2xhc3NlcygpKX0seS51cGRhdGVDbGFzc2VzPWZ1bmN0aW9uKCl7eS5zbGlkZXMucmVtb3ZlQ2xhc3MoeS5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcytcIiBcIit5LnBhcmFtcy5zbGlkZU5leHRDbGFzcytcIiBcIit5LnBhcmFtcy5zbGlkZVByZXZDbGFzcyk7dmFyIGU9eS5zbGlkZXMuZXEoeS5hY3RpdmVJbmRleCk7aWYoZS5hZGRDbGFzcyh5LnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSxlLm5leHQoXCIuXCIreS5wYXJhbXMuc2xpZGVDbGFzcykuYWRkQ2xhc3MoeS5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MpLGUucHJldihcIi5cIit5LnBhcmFtcy5zbGlkZUNsYXNzKS5hZGRDbGFzcyh5LnBhcmFtcy5zbGlkZVByZXZDbGFzcykseS5idWxsZXRzJiZ5LmJ1bGxldHMubGVuZ3RoPjApe3kuYnVsbGV0cy5yZW1vdmVDbGFzcyh5LnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7dmFyIG47eS5wYXJhbXMubG9vcD8obj1NYXRoLmNlaWwoeS5hY3RpdmVJbmRleC15Lmxvb3BlZFNsaWRlcykveS5wYXJhbXMuc2xpZGVzUGVyR3JvdXAsbj55LnNsaWRlcy5sZW5ndGgtMS0yKnkubG9vcGVkU2xpZGVzJiYobi09eS5zbGlkZXMubGVuZ3RoLTIqeS5sb29wZWRTbGlkZXMpLG4+eS5idWxsZXRzLmxlbmd0aC0xJiYobi09eS5idWxsZXRzLmxlbmd0aCkpOm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHkuc25hcEluZGV4P3kuc25hcEluZGV4OnkuYWN0aXZlSW5kZXh8fDAseS5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aD4xP3kuYnVsbGV0cy5lYWNoKGZ1bmN0aW9uKCl7dCh0aGlzKS5pbmRleCgpPT09biYmdCh0aGlzKS5hZGRDbGFzcyh5LnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyl9KTp5LmJ1bGxldHMuZXEobikuYWRkQ2xhc3MoeS5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpfXkucGFyYW1zLmxvb3B8fCh5LnBhcmFtcy5wcmV2QnV0dG9uJiYoeS5pc0JlZ2lubmluZz8odCh5LnBhcmFtcy5wcmV2QnV0dG9uKS5hZGRDbGFzcyh5LnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5kaXNhYmxlKHQoeS5wYXJhbXMucHJldkJ1dHRvbikpKToodCh5LnBhcmFtcy5wcmV2QnV0dG9uKS5yZW1vdmVDbGFzcyh5LnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5lbmFibGUodCh5LnBhcmFtcy5wcmV2QnV0dG9uKSkpKSx5LnBhcmFtcy5uZXh0QnV0dG9uJiYoeS5pc0VuZD8odCh5LnBhcmFtcy5uZXh0QnV0dG9uKS5hZGRDbGFzcyh5LnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5kaXNhYmxlKHQoeS5wYXJhbXMubmV4dEJ1dHRvbikpKToodCh5LnBhcmFtcy5uZXh0QnV0dG9uKS5yZW1vdmVDbGFzcyh5LnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5lbmFibGUodCh5LnBhcmFtcy5uZXh0QnV0dG9uKSkpKSl9LHkudXBkYXRlUGFnaW5hdGlvbj1mdW5jdGlvbigpe2lmKHkucGFyYW1zLnBhZ2luYXRpb24mJnkucGFnaW5hdGlvbkNvbnRhaW5lciYmeS5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aD4wKXtmb3IodmFyIGU9XCJcIix0PXkucGFyYW1zLmxvb3A/TWF0aC5jZWlsKCh5LnNsaWRlcy5sZW5ndGgtMip5Lmxvb3BlZFNsaWRlcykveS5wYXJhbXMuc2xpZGVzUGVyR3JvdXApOnkuc25hcEdyaWQubGVuZ3RoLG49MDt0Pm47bisrKWUrPXkucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRSZW5kZXI/eS5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldFJlbmRlcihuLHkucGFyYW1zLmJ1bGxldENsYXNzKTpcIjxcIit5LnBhcmFtcy5wYWdpbmF0aW9uRWxlbWVudCsnIGNsYXNzPVwiJyt5LnBhcmFtcy5idWxsZXRDbGFzcysnXCI+PC8nK3kucGFyYW1zLnBhZ2luYXRpb25FbGVtZW50K1wiPlwiO3kucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKGUpLHkuYnVsbGV0cz15LnBhZ2luYXRpb25Db250YWluZXIuZmluZChcIi5cIit5LnBhcmFtcy5idWxsZXRDbGFzcykseS5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSYmeS5wYXJhbXMuYTExeSYmeS5hMTF5JiZ5LmExMXkuaW5pdFBhZ2luYXRpb24oKX19LHkudXBkYXRlPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtpPU1hdGgubWluKE1hdGgubWF4KHkudHJhbnNsYXRlLHkubWF4VHJhbnNsYXRlKCkpLHkubWluVHJhbnNsYXRlKCkpLHkuc2V0V3JhcHBlclRyYW5zbGF0ZShpKSx5LnVwZGF0ZUFjdGl2ZUluZGV4KCkseS51cGRhdGVDbGFzc2VzKCl9aWYoeS51cGRhdGVDb250YWluZXJTaXplKCkseS51cGRhdGVTbGlkZXNTaXplKCkseS51cGRhdGVQcm9ncmVzcygpLHkudXBkYXRlUGFnaW5hdGlvbigpLHkudXBkYXRlQ2xhc3NlcygpLHkucGFyYW1zLnNjcm9sbGJhciYmeS5zY3JvbGxiYXImJnkuc2Nyb2xsYmFyLnNldCgpLGUpe3ZhciBuLGk7eS5jb250cm9sbGVyJiZ5LmNvbnRyb2xsZXIuc3BsaW5lJiYoeS5jb250cm9sbGVyLnNwbGluZT12b2lkIDApLHkucGFyYW1zLmZyZWVNb2RlPyh0KCkseS5wYXJhbXMuYXV0b0hlaWdodCYmeS51cGRhdGVBdXRvSGVpZ2h0KCkpOihuPShcImF1dG9cIj09PXkucGFyYW1zLnNsaWRlc1BlclZpZXd8fHkucGFyYW1zLnNsaWRlc1BlclZpZXc+MSkmJnkuaXNFbmQmJiF5LnBhcmFtcy5jZW50ZXJlZFNsaWRlcz95LnNsaWRlVG8oeS5zbGlkZXMubGVuZ3RoLTEsMCwhMSwhMCk6eS5zbGlkZVRvKHkuYWN0aXZlSW5kZXgsMCwhMSwhMCksbnx8dCgpKX1lbHNlIHkucGFyYW1zLmF1dG9IZWlnaHQmJnkudXBkYXRlQXV0b0hlaWdodCgpfSx5Lm9uUmVzaXplPWZ1bmN0aW9uKGUpe3kucGFyYW1zLmJyZWFrcG9pbnRzJiZ5LnNldEJyZWFrcG9pbnQoKTt2YXIgdD15LnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2LG49eS5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dDtpZih5LnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2PXkucGFyYW1zLmFsbG93U3dpcGVUb05leHQ9ITAseS51cGRhdGVDb250YWluZXJTaXplKCkseS51cGRhdGVTbGlkZXNTaXplKCksKFwiYXV0b1wiPT09eS5wYXJhbXMuc2xpZGVzUGVyVmlld3x8eS5wYXJhbXMuZnJlZU1vZGV8fGUpJiZ5LnVwZGF0ZVBhZ2luYXRpb24oKSx5LnBhcmFtcy5zY3JvbGxiYXImJnkuc2Nyb2xsYmFyJiZ5LnNjcm9sbGJhci5zZXQoKSx5LmNvbnRyb2xsZXImJnkuY29udHJvbGxlci5zcGxpbmUmJih5LmNvbnRyb2xsZXIuc3BsaW5lPXZvaWQgMCkseS5wYXJhbXMuZnJlZU1vZGUpe3ZhciBpPU1hdGgubWluKE1hdGgubWF4KHkudHJhbnNsYXRlLHkubWF4VHJhbnNsYXRlKCkpLHkubWluVHJhbnNsYXRlKCkpO3kuc2V0V3JhcHBlclRyYW5zbGF0ZShpKSx5LnVwZGF0ZUFjdGl2ZUluZGV4KCkseS51cGRhdGVDbGFzc2VzKCkseS5wYXJhbXMuYXV0b0hlaWdodCYmeS51cGRhdGVBdXRvSGVpZ2h0KCl9ZWxzZSB5LnVwZGF0ZUNsYXNzZXMoKSwoXCJhdXRvXCI9PT15LnBhcmFtcy5zbGlkZXNQZXJWaWV3fHx5LnBhcmFtcy5zbGlkZXNQZXJWaWV3PjEpJiZ5LmlzRW5kJiYheS5wYXJhbXMuY2VudGVyZWRTbGlkZXM/eS5zbGlkZVRvKHkuc2xpZGVzLmxlbmd0aC0xLDAsITEsITApOnkuc2xpZGVUbyh5LmFjdGl2ZUluZGV4LDAsITEsITApO3kucGFyYW1zLmFsbG93U3dpcGVUb1ByZXY9dCx5LnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0PW59O3ZhciBFPVtcIm1vdXNlZG93blwiLFwibW91c2Vtb3ZlXCIsXCJtb3VzZXVwXCJdO3dpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQ/RT1bXCJwb2ludGVyZG93blwiLFwicG9pbnRlcm1vdmVcIixcInBvaW50ZXJ1cFwiXTp3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQmJihFPVtcIk1TUG9pbnRlckRvd25cIixcIk1TUG9pbnRlck1vdmVcIixcIk1TUG9pbnRlclVwXCJdKSx5LnRvdWNoRXZlbnRzPXtzdGFydDp5LnN1cHBvcnQudG91Y2h8fCF5LnBhcmFtcy5zaW11bGF0ZVRvdWNoP1widG91Y2hzdGFydFwiOkVbMF0sbW92ZTp5LnN1cHBvcnQudG91Y2h8fCF5LnBhcmFtcy5zaW11bGF0ZVRvdWNoP1widG91Y2htb3ZlXCI6RVsxXSxlbmQ6eS5zdXBwb3J0LnRvdWNofHwheS5wYXJhbXMuc2ltdWxhdGVUb3VjaD9cInRvdWNoZW5kXCI6RVsyXX0sKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWR8fHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkmJihcImNvbnRhaW5lclwiPT09eS5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQ/eS5jb250YWluZXI6eS53cmFwcGVyKS5hZGRDbGFzcyhcInN3aXBlci13cDgtXCIreS5wYXJhbXMuZGlyZWN0aW9uKSx5LmluaXRFdmVudHM9ZnVuY3Rpb24oZSl7dmFyIG49ZT9cIm9mZlwiOlwib25cIixpPWU/XCJyZW1vdmVFdmVudExpc3RlbmVyXCI6XCJhZGRFdmVudExpc3RlbmVyXCIsYT1cImNvbnRhaW5lclwiPT09eS5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQ/eS5jb250YWluZXJbMF06eS53cmFwcGVyWzBdLG89eS5zdXBwb3J0LnRvdWNoP2E6ZG9jdW1lbnQscz15LnBhcmFtcy5uZXN0ZWQ/ITA6ITE7eS5icm93c2VyLmllPyhhW2ldKHkudG91Y2hFdmVudHMuc3RhcnQseS5vblRvdWNoU3RhcnQsITEpLG9baV0oeS50b3VjaEV2ZW50cy5tb3ZlLHkub25Ub3VjaE1vdmUscyksb1tpXSh5LnRvdWNoRXZlbnRzLmVuZCx5Lm9uVG91Y2hFbmQsITEpKTooeS5zdXBwb3J0LnRvdWNoJiYoYVtpXSh5LnRvdWNoRXZlbnRzLnN0YXJ0LHkub25Ub3VjaFN0YXJ0LCExKSxhW2ldKHkudG91Y2hFdmVudHMubW92ZSx5Lm9uVG91Y2hNb3ZlLHMpLGFbaV0oeS50b3VjaEV2ZW50cy5lbmQseS5vblRvdWNoRW5kLCExKSksIXIuc2ltdWxhdGVUb3VjaHx8eS5kZXZpY2UuaW9zfHx5LmRldmljZS5hbmRyb2lkfHwoYVtpXShcIm1vdXNlZG93blwiLHkub25Ub3VjaFN0YXJ0LCExKSxkb2N1bWVudFtpXShcIm1vdXNlbW92ZVwiLHkub25Ub3VjaE1vdmUscyksZG9jdW1lbnRbaV0oXCJtb3VzZXVwXCIseS5vblRvdWNoRW5kLCExKSkpLHdpbmRvd1tpXShcInJlc2l6ZVwiLHkub25SZXNpemUpLHkucGFyYW1zLm5leHRCdXR0b24mJih0KHkucGFyYW1zLm5leHRCdXR0b24pW25dKFwiY2xpY2tcIix5Lm9uQ2xpY2tOZXh0KSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnQoeS5wYXJhbXMubmV4dEJ1dHRvbilbbl0oXCJrZXlkb3duXCIseS5hMTF5Lm9uRW50ZXJLZXkpKSx5LnBhcmFtcy5wcmV2QnV0dG9uJiYodCh5LnBhcmFtcy5wcmV2QnV0dG9uKVtuXShcImNsaWNrXCIseS5vbkNsaWNrUHJldikseS5wYXJhbXMuYTExeSYmeS5hMTF5JiZ0KHkucGFyYW1zLnByZXZCdXR0b24pW25dKFwia2V5ZG93blwiLHkuYTExeS5vbkVudGVyS2V5KSkseS5wYXJhbXMucGFnaW5hdGlvbiYmeS5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSYmKHQoeS5wYWdpbmF0aW9uQ29udGFpbmVyKVtuXShcImNsaWNrXCIsXCIuXCIreS5wYXJhbXMuYnVsbGV0Q2xhc3MseS5vbkNsaWNrSW5kZXgpLHkucGFyYW1zLmExMXkmJnkuYTExeSYmdCh5LnBhZ2luYXRpb25Db250YWluZXIpW25dKFwia2V5ZG93blwiLFwiLlwiK3kucGFyYW1zLmJ1bGxldENsYXNzLHkuYTExeS5vbkVudGVyS2V5KSksKHkucGFyYW1zLnByZXZlbnRDbGlja3N8fHkucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikmJmFbaV0oXCJjbGlja1wiLHkucHJldmVudENsaWNrcywhMCl9LHkuYXR0YWNoRXZlbnRzPWZ1bmN0aW9uKGUpe3kuaW5pdEV2ZW50cygpfSx5LmRldGFjaEV2ZW50cz1mdW5jdGlvbigpe3kuaW5pdEV2ZW50cyghMCl9LHkuYWxsb3dDbGljaz0hMCx5LnByZXZlbnRDbGlja3M9ZnVuY3Rpb24oZSl7eS5hbGxvd0NsaWNrfHwoeS5wYXJhbXMucHJldmVudENsaWNrcyYmZS5wcmV2ZW50RGVmYXVsdCgpLHkucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiYmeS5hbmltYXRpbmcmJihlLnN0b3BQcm9wYWdhdGlvbigpLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpKX0seS5vbkNsaWNrTmV4dD1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksKCF5LmlzRW5kfHx5LnBhcmFtcy5sb29wKSYmeS5zbGlkZU5leHQoKX0seS5vbkNsaWNrUHJldj1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksKCF5LmlzQmVnaW5uaW5nfHx5LnBhcmFtcy5sb29wKSYmeS5zbGlkZVByZXYoKX0seS5vbkNsaWNrSW5kZXg9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBuPXQodGhpcykuaW5kZXgoKSp5LnBhcmFtcy5zbGlkZXNQZXJHcm91cDt5LnBhcmFtcy5sb29wJiYobis9eS5sb29wZWRTbGlkZXMpLHkuc2xpZGVUbyhuKX0seS51cGRhdGVDbGlja2VkU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIG49ZChlLFwiLlwiK3kucGFyYW1zLnNsaWRlQ2xhc3MpLGk9ITE7aWYobilmb3IodmFyIHI9MDtyPHkuc2xpZGVzLmxlbmd0aDtyKyspeS5zbGlkZXNbcl09PT1uJiYoaT0hMCk7aWYoIW58fCFpKXJldHVybiB5LmNsaWNrZWRTbGlkZT12b2lkIDAsdm9pZCh5LmNsaWNrZWRJbmRleD12b2lkIDApO2lmKHkuY2xpY2tlZFNsaWRlPW4seS5jbGlja2VkSW5kZXg9dChuKS5pbmRleCgpLHkucGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUmJnZvaWQgMCE9PXkuY2xpY2tlZEluZGV4JiZ5LmNsaWNrZWRJbmRleCE9PXkuYWN0aXZlSW5kZXgpe3ZhciBhLG89eS5jbGlja2VkSW5kZXg7aWYoeS5wYXJhbXMubG9vcCl7aWYoeS5hbmltYXRpbmcpcmV0dXJuO2E9dCh5LmNsaWNrZWRTbGlkZSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpLHkucGFyYW1zLmNlbnRlcmVkU2xpZGVzP288eS5sb29wZWRTbGlkZXMteS5wYXJhbXMuc2xpZGVzUGVyVmlldy8yfHxvPnkuc2xpZGVzLmxlbmd0aC15Lmxvb3BlZFNsaWRlcyt5LnBhcmFtcy5zbGlkZXNQZXJWaWV3LzI/KHkuZml4TG9vcCgpLG89eS53cmFwcGVyLmNoaWxkcmVuKFwiLlwiK3kucGFyYW1zLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrYSsnXCJdOm5vdCguc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZSknKS5lcSgwKS5pbmRleCgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LnNsaWRlVG8obyl9LDApKTp5LnNsaWRlVG8obyk6bz55LnNsaWRlcy5sZW5ndGgteS5wYXJhbXMuc2xpZGVzUGVyVmlldz8oeS5maXhMb29wKCksbz15LndyYXBwZXIuY2hpbGRyZW4oXCIuXCIreS5wYXJhbXMuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJythKydcIl06bm90KC5zd2lwZXItc2xpZGUtZHVwbGljYXRlKScpLmVxKDApLmluZGV4KCksc2V0VGltZW91dChmdW5jdGlvbigpe3kuc2xpZGVUbyhvKX0sMCkpOnkuc2xpZGVUbyhvKX1lbHNlIHkuc2xpZGVUbyhvKX19O3ZhciB4LEQsTSxMLEMsUCxJLGssTix6LE89XCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uXCIsQT1EYXRlLm5vdygpLEc9W107eS5hbmltYXRpbmc9ITEseS50b3VjaGVzPXtzdGFydFg6MCxzdGFydFk6MCxjdXJyZW50WDowLGN1cnJlbnRZOjAsZGlmZjowfTt2YXIgVixSO2lmKHkub25Ub3VjaFN0YXJ0PWZ1bmN0aW9uKGUpe2lmKGUub3JpZ2luYWxFdmVudCYmKGU9ZS5vcmlnaW5hbEV2ZW50KSxWPVwidG91Y2hzdGFydFwiPT09ZS50eXBlLFZ8fCEoXCJ3aGljaFwiaW4gZSl8fDMhPT1lLndoaWNoKXtpZih5LnBhcmFtcy5ub1N3aXBpbmcmJmQoZSxcIi5cIit5LnBhcmFtcy5ub1N3aXBpbmdDbGFzcykpcmV0dXJuIHZvaWQoeS5hbGxvd0NsaWNrPSEwKTtpZigheS5wYXJhbXMuc3dpcGVIYW5kbGVyfHxkKGUseS5wYXJhbXMuc3dpcGVIYW5kbGVyKSl7dmFyIG49eS50b3VjaGVzLmN1cnJlbnRYPVwidG91Y2hzdGFydFwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDplLnBhZ2VYLGk9eS50b3VjaGVzLmN1cnJlbnRZPVwidG91Y2hzdGFydFwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTplLnBhZ2VZO2lmKCEoeS5kZXZpY2UuaW9zJiZ5LnBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb24mJm48PXkucGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZCkpe2lmKHg9ITAsRD0hMSxNPSEwLEM9dm9pZCAwLFI9dm9pZCAwLHkudG91Y2hlcy5zdGFydFg9bix5LnRvdWNoZXMuc3RhcnRZPWksTD1EYXRlLm5vdygpLHkuYWxsb3dDbGljaz0hMCx5LnVwZGF0ZUNvbnRhaW5lclNpemUoKSx5LnN3aXBlRGlyZWN0aW9uPXZvaWQgMCx5LnBhcmFtcy50aHJlc2hvbGQ+MCYmKGs9ITEpLFwidG91Y2hzdGFydFwiIT09ZS50eXBlKXt2YXIgcj0hMDt0KGUudGFyZ2V0KS5pcyhPKSYmKHI9ITEpLGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoTykmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLHImJmUucHJldmVudERlZmF1bHQoKX15LmVtaXQoXCJvblRvdWNoU3RhcnRcIix5LGUpfX19fSx5Lm9uVG91Y2hNb3ZlPWZ1bmN0aW9uKGUpe2lmKGUub3JpZ2luYWxFdmVudCYmKGU9ZS5vcmlnaW5hbEV2ZW50KSwhKFYmJlwibW91c2Vtb3ZlXCI9PT1lLnR5cGV8fGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpKXtpZih5LnBhcmFtcy5vbmx5RXh0ZXJuYWwpcmV0dXJuIHkuYWxsb3dDbGljaz0hMSx2b2lkKHgmJih5LnRvdWNoZXMuc3RhcnRYPXkudG91Y2hlcy5jdXJyZW50WD1cInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDplLnBhZ2VYLHkudG91Y2hlcy5zdGFydFk9eS50b3VjaGVzLmN1cnJlbnRZPVwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZOmUucGFnZVksTD1EYXRlLm5vdygpKSk7aWYoViYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmZS50YXJnZXQ9PT1kb2N1bWVudC5hY3RpdmVFbGVtZW50JiZ0KGUudGFyZ2V0KS5pcyhPKSlyZXR1cm4gRD0hMCx2b2lkKHkuYWxsb3dDbGljaz0hMSk7aWYoTSYmeS5lbWl0KFwib25Ub3VjaE1vdmVcIix5LGUpLCEoZS50YXJnZXRUb3VjaGVzJiZlLnRhcmdldFRvdWNoZXMubGVuZ3RoPjEpKXtpZih5LnRvdWNoZXMuY3VycmVudFg9XCJ0b3VjaG1vdmVcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg6ZS5wYWdlWCx5LnRvdWNoZXMuY3VycmVudFk9XCJ0b3VjaG1vdmVcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWSxcInVuZGVmaW5lZFwiPT10eXBlb2YgQyl7dmFyIG49MTgwKk1hdGguYXRhbjIoTWF0aC5hYnMoeS50b3VjaGVzLmN1cnJlbnRZLXkudG91Y2hlcy5zdGFydFkpLE1hdGguYWJzKHkudG91Y2hlcy5jdXJyZW50WC15LnRvdWNoZXMuc3RhcnRYKSkvTWF0aC5QSTtDPXMoKT9uPnkucGFyYW1zLnRvdWNoQW5nbGU6OTAtbj55LnBhcmFtcy50b3VjaEFuZ2xlfWlmKEMmJnkuZW1pdChcIm9uVG91Y2hNb3ZlT3Bwb3NpdGVcIix5LGUpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSJiZ5LmJyb3dzZXIuaWVUb3VjaCYmKHkudG91Y2hlcy5jdXJyZW50WCE9PXkudG91Y2hlcy5zdGFydFh8fHkudG91Y2hlcy5jdXJyZW50WSE9PXkudG91Y2hlcy5zdGFydFkpJiYoUj0hMCkseCl7aWYoQylyZXR1cm4gdm9pZCh4PSExKTtpZihSfHwheS5icm93c2VyLmllVG91Y2gpe3kuYWxsb3dDbGljaz0hMSx5LmVtaXQoXCJvblNsaWRlck1vdmVcIix5LGUpLGUucHJldmVudERlZmF1bHQoKSx5LnBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24mJiF5LnBhcmFtcy5uZXN0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCksRHx8KHIubG9vcCYmeS5maXhMb29wKCksST15LmdldFdyYXBwZXJUcmFuc2xhdGUoKSx5LnNldFdyYXBwZXJUcmFuc2l0aW9uKDApLHkuYW5pbWF0aW5nJiZ5LndyYXBwZXIudHJpZ2dlcihcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kXCIpLHkucGFyYW1zLmF1dG9wbGF5JiZ5LmF1dG9wbGF5aW5nJiYoeS5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbj95LnN0b3BBdXRvcGxheSgpOnkucGF1c2VBdXRvcGxheSgpKSx6PSExLHkucGFyYW1zLmdyYWJDdXJzb3ImJih5LmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3I9XCJtb3ZlXCIseS5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiYmluZ1wiLHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cIi1tb3otZ3JhYmJpblwiLHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cImdyYWJiaW5nXCIpKSxEPSEwO3ZhciBpPXkudG91Y2hlcy5kaWZmPXMoKT95LnRvdWNoZXMuY3VycmVudFgteS50b3VjaGVzLnN0YXJ0WDp5LnRvdWNoZXMuY3VycmVudFkteS50b3VjaGVzLnN0YXJ0WTtpKj15LnBhcmFtcy50b3VjaFJhdGlvLHkucnRsJiYoaT0taSkseS5zd2lwZURpcmVjdGlvbj1pPjA/XCJwcmV2XCI6XCJuZXh0XCIsUD1pK0k7dmFyIGE9ITA7aWYoaT4wJiZQPnkubWluVHJhbnNsYXRlKCk/KGE9ITEseS5wYXJhbXMucmVzaXN0YW5jZSYmKFA9eS5taW5UcmFuc2xhdGUoKS0xK01hdGgucG93KC15Lm1pblRyYW5zbGF0ZSgpK0kraSx5LnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8pKSk6MD5pJiZQPHkubWF4VHJhbnNsYXRlKCkmJihhPSExLHkucGFyYW1zLnJlc2lzdGFuY2UmJihQPXkubWF4VHJhbnNsYXRlKCkrMS1NYXRoLnBvdyh5Lm1heFRyYW5zbGF0ZSgpLUktaSx5LnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8pKSksYSYmKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXI9ITApLCF5LnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0JiZcIm5leHRcIj09PXkuc3dpcGVEaXJlY3Rpb24mJkk+UCYmKFA9SSksIXkucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYmJlwicHJldlwiPT09eS5zd2lwZURpcmVjdGlvbiYmUD5JJiYoUD1JKSx5LnBhcmFtcy5mb2xsb3dGaW5nZXIpe2lmKHkucGFyYW1zLnRocmVzaG9sZD4wKXtpZighKE1hdGguYWJzKGkpPnkucGFyYW1zLnRocmVzaG9sZHx8aykpcmV0dXJuIHZvaWQoUD1JKTtpZighaylyZXR1cm4gaz0hMCx5LnRvdWNoZXMuc3RhcnRYPXkudG91Y2hlcy5jdXJyZW50WCx5LnRvdWNoZXMuc3RhcnRZPXkudG91Y2hlcy5jdXJyZW50WSxQPUksdm9pZCh5LnRvdWNoZXMuZGlmZj1zKCk/eS50b3VjaGVzLmN1cnJlbnRYLXkudG91Y2hlcy5zdGFydFg6eS50b3VjaGVzLmN1cnJlbnRZLXkudG91Y2hlcy5zdGFydFkpfSh5LnBhcmFtcy5mcmVlTW9kZXx8eS5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykmJnkudXBkYXRlQWN0aXZlSW5kZXgoKSx5LnBhcmFtcy5mcmVlTW9kZSYmKDA9PT1HLmxlbmd0aCYmRy5wdXNoKHtwb3NpdGlvbjp5LnRvdWNoZXNbcygpP1wic3RhcnRYXCI6XCJzdGFydFlcIl0sdGltZTpMfSksRy5wdXNoKHtwb3NpdGlvbjp5LnRvdWNoZXNbcygpP1wiY3VycmVudFhcIjpcImN1cnJlbnRZXCJdLHRpbWU6KG5ldyB3aW5kb3cuRGF0ZSkuZ2V0VGltZSgpfSkpLHkudXBkYXRlUHJvZ3Jlc3MoUCkseS5zZXRXcmFwcGVyVHJhbnNsYXRlKFApfX19fX19LHkub25Ub3VjaEVuZD1mdW5jdGlvbihlKXtpZihlLm9yaWdpbmFsRXZlbnQmJihlPWUub3JpZ2luYWxFdmVudCksTSYmeS5lbWl0KFwib25Ub3VjaEVuZFwiLHksZSksTT0hMSx4KXt5LnBhcmFtcy5ncmFiQ3Vyc29yJiZEJiZ4JiYoeS5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yPVwibW92ZVwiLHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cIi1tb3otZ3JhYlwiLHkuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvcj1cImdyYWJcIik7dmFyIG49RGF0ZS5ub3coKSxpPW4tTDtpZih5LmFsbG93Q2xpY2smJih5LnVwZGF0ZUNsaWNrZWRTbGlkZShlKSx5LmVtaXQoXCJvblRhcFwiLHksZSksMzAwPmkmJm4tQT4zMDAmJihOJiZjbGVhclRpbWVvdXQoTiksTj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eSYmKHkucGFyYW1zLnBhZ2luYXRpb25IaWRlJiZ5LnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoPjAmJiF0KGUudGFyZ2V0KS5oYXNDbGFzcyh5LnBhcmFtcy5idWxsZXRDbGFzcykmJnkucGFnaW5hdGlvbkNvbnRhaW5lci50b2dnbGVDbGFzcyh5LnBhcmFtcy5wYWdpbmF0aW9uSGlkZGVuQ2xhc3MpLHkuZW1pdChcIm9uQ2xpY2tcIix5LGUpKX0sMzAwKSksMzAwPmkmJjMwMD5uLUEmJihOJiZjbGVhclRpbWVvdXQoTikseS5lbWl0KFwib25Eb3VibGVUYXBcIix5LGUpKSksQT1EYXRlLm5vdygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt5JiYoeS5hbGxvd0NsaWNrPSEwKX0sMCksIXh8fCFEfHwheS5zd2lwZURpcmVjdGlvbnx8MD09PXkudG91Y2hlcy5kaWZmfHxQPT09SSlyZXR1cm4gdm9pZCh4PUQ9ITEpO3g9RD0hMTt2YXIgcjtpZihyPXkucGFyYW1zLmZvbGxvd0Zpbmdlcj95LnJ0bD95LnRyYW5zbGF0ZToteS50cmFuc2xhdGU6LVAseS5wYXJhbXMuZnJlZU1vZGUpe2lmKHI8LXkubWluVHJhbnNsYXRlKCkpcmV0dXJuIHZvaWQgeS5zbGlkZVRvKHkuYWN0aXZlSW5kZXgpO2lmKHI+LXkubWF4VHJhbnNsYXRlKCkpcmV0dXJuIHZvaWQoeS5zbGlkZXMubGVuZ3RoPHkuc25hcEdyaWQubGVuZ3RoP3kuc2xpZGVUbyh5LnNuYXBHcmlkLmxlbmd0aC0xKTp5LnNsaWRlVG8oeS5zbGlkZXMubGVuZ3RoLTEpKTtpZih5LnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKXtpZihHLmxlbmd0aD4xKXt2YXIgYT1HLnBvcCgpLG89Ry5wb3AoKSxzPWEucG9zaXRpb24tby5wb3NpdGlvbixsPWEudGltZS1vLnRpbWU7eS52ZWxvY2l0eT1zL2wseS52ZWxvY2l0eT15LnZlbG9jaXR5LzIsTWF0aC5hYnMoeS52ZWxvY2l0eSk8eS5wYXJhbXMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkmJih5LnZlbG9jaXR5PTApLChsPjE1MHx8KG5ldyB3aW5kb3cuRGF0ZSkuZ2V0VGltZSgpLWEudGltZT4zMDApJiYoeS52ZWxvY2l0eT0wKX1lbHNlIHkudmVsb2NpdHk9MDtHLmxlbmd0aD0wO3ZhciBjPTFlMyp5LnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtUmF0aW8sZD15LnZlbG9jaXR5KmMsdT15LnRyYW5zbGF0ZStkO3kucnRsJiYodT0tdSk7dmFyIHAsaD0hMSxmPTIwKk1hdGguYWJzKHkudmVsb2NpdHkpKnkucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztpZih1PHkubWF4VHJhbnNsYXRlKCkpeS5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZT8odSt5Lm1heFRyYW5zbGF0ZSgpPC1mJiYodT15Lm1heFRyYW5zbGF0ZSgpLWYpLHA9eS5tYXhUcmFuc2xhdGUoKSxoPSEwLHo9ITApOnU9eS5tYXhUcmFuc2xhdGUoKTtlbHNlIGlmKHU+eS5taW5UcmFuc2xhdGUoKSl5LnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlPyh1LXkubWluVHJhbnNsYXRlKCk+ZiYmKHU9eS5taW5UcmFuc2xhdGUoKStmKSxwPXkubWluVHJhbnNsYXRlKCksaD0hMCx6PSEwKTp1PXkubWluVHJhbnNsYXRlKCk7ZWxzZSBpZih5LnBhcmFtcy5mcmVlTW9kZVN0aWNreSl7dmFyIG0sZz0wO2ZvcihnPTA7Zzx5LnNuYXBHcmlkLmxlbmd0aDtnKz0xKWlmKHkuc25hcEdyaWRbZ10+LXUpe209ZzticmVha311PU1hdGguYWJzKHkuc25hcEdyaWRbbV0tdSk8TWF0aC5hYnMoeS5zbmFwR3JpZFttLTFdLXUpfHxcIm5leHRcIj09PXkuc3dpcGVEaXJlY3Rpb24/eS5zbmFwR3JpZFttXTp5LnNuYXBHcmlkW20tMV0seS5ydGx8fCh1PS11KX1pZigwIT09eS52ZWxvY2l0eSljPXkucnRsP01hdGguYWJzKCgtdS15LnRyYW5zbGF0ZSkveS52ZWxvY2l0eSk6TWF0aC5hYnMoKHUteS50cmFuc2xhdGUpL3kudmVsb2NpdHkpO2Vsc2UgaWYoeS5wYXJhbXMuZnJlZU1vZGVTdGlja3kpcmV0dXJuIHZvaWQgeS5zbGlkZVJlc2V0KCk7eS5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSYmaD8oeS51cGRhdGVQcm9ncmVzcyhwKSx5LnNldFdyYXBwZXJUcmFuc2l0aW9uKGMpLHkuc2V0V3JhcHBlclRyYW5zbGF0ZSh1KSx5Lm9uVHJhbnNpdGlvblN0YXJ0KCkseS5hbmltYXRpbmc9ITAseS53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXt5JiZ6JiYoeS5lbWl0KFwib25Nb21lbnR1bUJvdW5jZVwiLHkpLHkuc2V0V3JhcHBlclRyYW5zaXRpb24oeS5wYXJhbXMuc3BlZWQpLHkuc2V0V3JhcHBlclRyYW5zbGF0ZShwKSx5LndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3kmJnkub25UcmFuc2l0aW9uRW5kKCl9KSl9KSk6eS52ZWxvY2l0eT8oeS51cGRhdGVQcm9ncmVzcyh1KSx5LnNldFdyYXBwZXJUcmFuc2l0aW9uKGMpLHkuc2V0V3JhcHBlclRyYW5zbGF0ZSh1KSx5Lm9uVHJhbnNpdGlvblN0YXJ0KCkseS5hbmltYXRpbmd8fCh5LmFuaW1hdGluZz0hMCx5LndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3kmJnkub25UcmFuc2l0aW9uRW5kKCl9KSkpOnkudXBkYXRlUHJvZ3Jlc3ModSkseS51cGRhdGVBY3RpdmVJbmRleCgpfXJldHVybiB2b2lkKCgheS5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bXx8aT49eS5wYXJhbXMubG9uZ1N3aXBlc01zKSYmKHkudXBkYXRlUHJvZ3Jlc3MoKSx5LnVwZGF0ZUFjdGl2ZUluZGV4KCkpKX12YXIgdixfPTAsdz15LnNsaWRlc1NpemVzR3JpZFswXTtmb3Iodj0wO3Y8eS5zbGlkZXNHcmlkLmxlbmd0aDt2Kz15LnBhcmFtcy5zbGlkZXNQZXJHcm91cClcInVuZGVmaW5lZFwiIT10eXBlb2YgeS5zbGlkZXNHcmlkW3YreS5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdP3I+PXkuc2xpZGVzR3JpZFt2XSYmcjx5LnNsaWRlc0dyaWRbdit5LnBhcmFtcy5zbGlkZXNQZXJHcm91cF0mJihfPXYsdz15LnNsaWRlc0dyaWRbdit5LnBhcmFtcy5zbGlkZXNQZXJHcm91cF0teS5zbGlkZXNHcmlkW3ZdKTpyPj15LnNsaWRlc0dyaWRbdl0mJihfPXYsdz15LnNsaWRlc0dyaWRbeS5zbGlkZXNHcmlkLmxlbmd0aC0xXS15LnNsaWRlc0dyaWRbeS5zbGlkZXNHcmlkLmxlbmd0aC0yXSk7dmFyIFQ9KHIteS5zbGlkZXNHcmlkW19dKS93O2lmKGk+eS5wYXJhbXMubG9uZ1N3aXBlc01zKXtpZigheS5wYXJhbXMubG9uZ1N3aXBlcylyZXR1cm4gdm9pZCB5LnNsaWRlVG8oeS5hY3RpdmVJbmRleCk7XCJuZXh0XCI9PT15LnN3aXBlRGlyZWN0aW9uJiYoVD49eS5wYXJhbXMubG9uZ1N3aXBlc1JhdGlvP3kuc2xpZGVUbyhfK3kucGFyYW1zLnNsaWRlc1Blckdyb3VwKTp5LnNsaWRlVG8oXykpLFwicHJldlwiPT09eS5zd2lwZURpcmVjdGlvbiYmKFQ+MS15LnBhcmFtcy5sb25nU3dpcGVzUmF0aW8/eS5zbGlkZVRvKF8reS5wYXJhbXMuc2xpZGVzUGVyR3JvdXApOnkuc2xpZGVUbyhfKSl9ZWxzZXtpZigheS5wYXJhbXMuc2hvcnRTd2lwZXMpcmV0dXJuIHZvaWQgeS5zbGlkZVRvKHkuYWN0aXZlSW5kZXgpO1wibmV4dFwiPT09eS5zd2lwZURpcmVjdGlvbiYmeS5zbGlkZVRvKF8reS5wYXJhbXMuc2xpZGVzUGVyR3JvdXApLFwicHJldlwiPT09eS5zd2lwZURpcmVjdGlvbiYmeS5zbGlkZVRvKF8pfX19LHkuX3NsaWRlVG89ZnVuY3Rpb24oZSx0KXtyZXR1cm4geS5zbGlkZVRvKGUsdCwhMCwhMCl9LHkuc2xpZGVUbz1mdW5jdGlvbihlLHQsbixpKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgbiYmKG49ITApLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT0wKSwwPmUmJihlPTApLHkuc25hcEluZGV4PU1hdGguZmxvb3IoZS95LnBhcmFtcy5zbGlkZXNQZXJHcm91cCkseS5zbmFwSW5kZXg+PXkuc25hcEdyaWQubGVuZ3RoJiYoeS5zbmFwSW5kZXg9eS5zbmFwR3JpZC5sZW5ndGgtMSk7dmFyIHI9LXkuc25hcEdyaWRbeS5zbmFwSW5kZXhdO3kucGFyYW1zLmF1dG9wbGF5JiZ5LmF1dG9wbGF5aW5nJiYoaXx8IXkucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24/eS5wYXVzZUF1dG9wbGF5KHQpOnkuc3RvcEF1dG9wbGF5KCkpLHkudXBkYXRlUHJvZ3Jlc3Mocik7Zm9yKHZhciBhPTA7YTx5LnNsaWRlc0dyaWQubGVuZ3RoO2ErKyktTWF0aC5mbG9vcigxMDAqcik+PU1hdGguZmxvb3IoMTAwKnkuc2xpZGVzR3JpZFthXSkmJihlPWEpO3JldHVybiF5LnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0JiZyPHkudHJhbnNsYXRlJiZyPHkubWluVHJhbnNsYXRlKCk/ITE6IXkucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYmJnI+eS50cmFuc2xhdGUmJnI+eS5tYXhUcmFuc2xhdGUoKSYmKHkuYWN0aXZlSW5kZXh8fDApIT09ZT8hMTooXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQmJih0PXkucGFyYW1zLnNwZWVkKSx5LnByZXZpb3VzSW5kZXg9eS5hY3RpdmVJbmRleHx8MCx5LmFjdGl2ZUluZGV4PWUseS5ydGwmJi1yPT09eS50cmFuc2xhdGV8fCF5LnJ0bCYmcj09PXkudHJhbnNsYXRlPyh5LnBhcmFtcy5hdXRvSGVpZ2h0JiZ5LnVwZGF0ZUF1dG9IZWlnaHQoKSx5LnVwZGF0ZUNsYXNzZXMoKSxcInNsaWRlXCIhPT15LnBhcmFtcy5lZmZlY3QmJnkuc2V0V3JhcHBlclRyYW5zbGF0ZShyKSwhMSk6KHkudXBkYXRlQ2xhc3NlcygpLHkub25UcmFuc2l0aW9uU3RhcnQobiksMD09PXQ/KHkuc2V0V3JhcHBlclRyYW5zbGF0ZShyKSx5LnNldFdyYXBwZXJUcmFuc2l0aW9uKDApLHkub25UcmFuc2l0aW9uRW5kKG4pKTooeS5zZXRXcmFwcGVyVHJhbnNsYXRlKHIpLHkuc2V0V3JhcHBlclRyYW5zaXRpb24odCkseS5hbmltYXRpbmd8fCh5LmFuaW1hdGluZz0hMCx5LndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3kmJnkub25UcmFuc2l0aW9uRW5kKG4pfSkpKSwhMCkpfSx5Lm9uVHJhbnNpdGlvblN0YXJ0PWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT0hMCkseS5wYXJhbXMuYXV0b0hlaWdodCYmeS51cGRhdGVBdXRvSGVpZ2h0KCkseS5sYXp5JiZ5Lmxhenkub25UcmFuc2l0aW9uU3RhcnQoKSxlJiYoeS5lbWl0KFwib25UcmFuc2l0aW9uU3RhcnRcIix5KSx5LmFjdGl2ZUluZGV4IT09eS5wcmV2aW91c0luZGV4JiYoeS5lbWl0KFwib25TbGlkZUNoYW5nZVN0YXJ0XCIseSkseS5hY3RpdmVJbmRleD55LnByZXZpb3VzSW5kZXg/eS5lbWl0KFwib25TbGlkZU5leHRTdGFydFwiLHkpOnkuZW1pdChcIm9uU2xpZGVQcmV2U3RhcnRcIix5KSkpfSx5Lm9uVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihlKXt5LmFuaW1hdGluZz0hMSx5LnNldFdyYXBwZXJUcmFuc2l0aW9uKDApLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT0hMCkseS5sYXp5JiZ5Lmxhenkub25UcmFuc2l0aW9uRW5kKCksZSYmKHkuZW1pdChcIm9uVHJhbnNpdGlvbkVuZFwiLHkpLHkuYWN0aXZlSW5kZXghPT15LnByZXZpb3VzSW5kZXgmJih5LmVtaXQoXCJvblNsaWRlQ2hhbmdlRW5kXCIseSkseS5hY3RpdmVJbmRleD55LnByZXZpb3VzSW5kZXg/eS5lbWl0KFwib25TbGlkZU5leHRFbmRcIix5KTp5LmVtaXQoXCJvblNsaWRlUHJldkVuZFwiLHkpKSkseS5wYXJhbXMuaGFzaG5hdiYmeS5oYXNobmF2JiZ5Lmhhc2huYXYuc2V0SGFzaCgpfSx5LnNsaWRlTmV4dD1mdW5jdGlvbihlLHQsbil7aWYoeS5wYXJhbXMubG9vcCl7aWYoeS5hbmltYXRpbmcpcmV0dXJuITE7eS5maXhMb29wKCk7eS5jb250YWluZXJbMF0uY2xpZW50TGVmdDtyZXR1cm4geS5zbGlkZVRvKHkuYWN0aXZlSW5kZXgreS5wYXJhbXMuc2xpZGVzUGVyR3JvdXAsdCxlLG4pfXJldHVybiB5LnNsaWRlVG8oeS5hY3RpdmVJbmRleCt5LnBhcmFtcy5zbGlkZXNQZXJHcm91cCx0LGUsbil9LHkuX3NsaWRlTmV4dD1mdW5jdGlvbihlKXtyZXR1cm4geS5zbGlkZU5leHQoITAsZSwhMCl9LHkuc2xpZGVQcmV2PWZ1bmN0aW9uKGUsdCxuKXtpZih5LnBhcmFtcy5sb29wKXtpZih5LmFuaW1hdGluZylyZXR1cm4hMTt5LmZpeExvb3AoKTt5LmNvbnRhaW5lclswXS5jbGllbnRMZWZ0O3JldHVybiB5LnNsaWRlVG8oeS5hY3RpdmVJbmRleC0xLHQsZSxuKX1yZXR1cm4geS5zbGlkZVRvKHkuYWN0aXZlSW5kZXgtMSx0LGUsbil9LHkuX3NsaWRlUHJldj1mdW5jdGlvbihlKXtyZXR1cm4geS5zbGlkZVByZXYoITAsZSwhMCl9LHkuc2xpZGVSZXNldD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHkuc2xpZGVUbyh5LmFjdGl2ZUluZGV4LHQsZSl9LHkuc2V0V3JhcHBlclRyYW5zaXRpb249ZnVuY3Rpb24oZSx0KXt5LndyYXBwZXIudHJhbnNpdGlvbihlKSxcInNsaWRlXCIhPT15LnBhcmFtcy5lZmZlY3QmJnkuZWZmZWN0c1t5LnBhcmFtcy5lZmZlY3RdJiZ5LmVmZmVjdHNbeS5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2l0aW9uKGUpLHkucGFyYW1zLnBhcmFsbGF4JiZ5LnBhcmFsbGF4JiZ5LnBhcmFsbGF4LnNldFRyYW5zaXRpb24oZSkseS5wYXJhbXMuc2Nyb2xsYmFyJiZ5LnNjcm9sbGJhciYmeS5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihlKSx5LnBhcmFtcy5jb250cm9sJiZ5LmNvbnRyb2xsZXImJnkuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGUsdCkseS5lbWl0KFwib25TZXRUcmFuc2l0aW9uXCIseSxlKX0seS5zZXRXcmFwcGVyVHJhbnNsYXRlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT0wLHI9MCxhPTA7cygpP2k9eS5ydGw/LWU6ZTpyPWUseS5wYXJhbXMucm91bmRMZW5ndGhzJiYoaT1sKGkpLHI9bChyKSkseS5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZXx8KHkuc3VwcG9ydC50cmFuc2Zvcm1zM2Q/eS53cmFwcGVyLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK2krXCJweCwgXCIrcitcInB4LCBcIithK1wicHgpXCIpOnkud3JhcHBlci50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUoXCIraStcInB4LCBcIityK1wicHgpXCIpKSx5LnRyYW5zbGF0ZT1zKCk/aTpyO3ZhciBvLGM9eS5tYXhUcmFuc2xhdGUoKS15Lm1pblRyYW5zbGF0ZSgpO289MD09PWM/MDooZS15Lm1pblRyYW5zbGF0ZSgpKS9jLG8hPT15LnByb2dyZXNzJiZ5LnVwZGF0ZVByb2dyZXNzKGUpLFxudCYmeS51cGRhdGVBY3RpdmVJbmRleCgpLFwic2xpZGVcIiE9PXkucGFyYW1zLmVmZmVjdCYmeS5lZmZlY3RzW3kucGFyYW1zLmVmZmVjdF0mJnkuZWZmZWN0c1t5LnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZSh5LnRyYW5zbGF0ZSkseS5wYXJhbXMucGFyYWxsYXgmJnkucGFyYWxsYXgmJnkucGFyYWxsYXguc2V0VHJhbnNsYXRlKHkudHJhbnNsYXRlKSx5LnBhcmFtcy5zY3JvbGxiYXImJnkuc2Nyb2xsYmFyJiZ5LnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoeS50cmFuc2xhdGUpLHkucGFyYW1zLmNvbnRyb2wmJnkuY29udHJvbGxlciYmeS5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh5LnRyYW5zbGF0ZSxuKSx5LmVtaXQoXCJvblNldFRyYW5zbGF0ZVwiLHkseS50cmFuc2xhdGUpfSx5LmdldFRyYW5zbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuLGkscixhO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0JiYodD1cInhcIikseS5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZT95LnJ0bD8teS50cmFuc2xhdGU6eS50cmFuc2xhdGU6KHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKSx3aW5kb3cuV2ViS2l0Q1NTTWF0cml4PyhpPXIudHJhbnNmb3JtfHxyLndlYmtpdFRyYW5zZm9ybSxpLnNwbGl0KFwiLFwiKS5sZW5ndGg+NiYmKGk9aS5zcGxpdChcIiwgXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKFwiLFwiLFwiLlwiKX0pLmpvaW4oXCIsIFwiKSksYT1uZXcgd2luZG93LldlYktpdENTU01hdHJpeChcIm5vbmVcIj09PWk/XCJcIjppKSk6KGE9ci5Nb3pUcmFuc2Zvcm18fHIuT1RyYW5zZm9ybXx8ci5Nc1RyYW5zZm9ybXx8ci5tc1RyYW5zZm9ybXx8ci50cmFuc2Zvcm18fHIuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKS5yZXBsYWNlKFwidHJhbnNsYXRlKFwiLFwibWF0cml4KDEsIDAsIDAsIDEsXCIpLG49YS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSksXCJ4XCI9PT10JiYoaT13aW5kb3cuV2ViS2l0Q1NTTWF0cml4P2EubTQxOjE2PT09bi5sZW5ndGg/cGFyc2VGbG9hdChuWzEyXSk6cGFyc2VGbG9hdChuWzRdKSksXCJ5XCI9PT10JiYoaT13aW5kb3cuV2ViS2l0Q1NTTWF0cml4P2EubTQyOjE2PT09bi5sZW5ndGg/cGFyc2VGbG9hdChuWzEzXSk6cGFyc2VGbG9hdChuWzVdKSkseS5ydGwmJmkmJihpPS1pKSxpfHwwKX0seS5nZXRXcmFwcGVyVHJhbnNsYXRlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT1zKCk/XCJ4XCI6XCJ5XCIpLHkuZ2V0VHJhbnNsYXRlKHkud3JhcHBlclswXSxlKX0seS5vYnNlcnZlcnM9W10seS5pbml0T2JzZXJ2ZXJzPWZ1bmN0aW9uKCl7aWYoeS5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpZm9yKHZhciBlPXkuY29udGFpbmVyLnBhcmVudHMoKSx0PTA7dDxlLmxlbmd0aDt0KyspdShlW3RdKTt1KHkuY29udGFpbmVyWzBdLHtjaGlsZExpc3Q6ITF9KSx1KHkud3JhcHBlclswXSx7YXR0cmlidXRlczohMX0pfSx5LmRpc2Nvbm5lY3RPYnNlcnZlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHkub2JzZXJ2ZXJzLmxlbmd0aDtlKyspeS5vYnNlcnZlcnNbZV0uZGlzY29ubmVjdCgpO3kub2JzZXJ2ZXJzPVtdfSx5LmNyZWF0ZUxvb3A9ZnVuY3Rpb24oKXt2YXIgZT15LndyYXBwZXIuY2hpbGRyZW4oXCIuXCIreS5wYXJhbXMuc2xpZGVDbGFzcytcIi5cIit5LnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKTthbmd1bGFyLmVsZW1lbnQoZSkucmVtb3ZlKCk7dmFyIG49eS53cmFwcGVyLmNoaWxkcmVuKFwiLlwiK3kucGFyYW1zLnNsaWRlQ2xhc3MpO1wiYXV0b1wiIT09eS5wYXJhbXMuc2xpZGVzUGVyVmlld3x8eS5wYXJhbXMubG9vcGVkU2xpZGVzfHwoeS5wYXJhbXMubG9vcGVkU2xpZGVzPW4ubGVuZ3RoKSx5Lmxvb3BlZFNsaWRlcz1wYXJzZUludCh5LnBhcmFtcy5sb29wZWRTbGlkZXN8fHkucGFyYW1zLnNsaWRlc1BlclZpZXcsMTApLHkubG9vcGVkU2xpZGVzPXkubG9vcGVkU2xpZGVzK3kucGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzLHkubG9vcGVkU2xpZGVzPm4ubGVuZ3RoJiYoeS5sb29wZWRTbGlkZXM9bi5sZW5ndGgpO3ZhciBpLHIsYSxzPVtdLGw9W107Zm9yKG4uZWFjaChmdW5jdGlvbihlLGkpe3ZhciByPXQodGhpcyk7ZTx5Lmxvb3BlZFNsaWRlcyYmbC5wdXNoKGkpLGU8bi5sZW5ndGgmJmU+PW4ubGVuZ3RoLXkubG9vcGVkU2xpZGVzJiZzLnB1c2goaSksci5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIixlKX0pLGk9MDtpPGwubGVuZ3RoO2krKylhPWFuZ3VsYXIuZWxlbWVudChsW2ldKS5jbG9uZSgpLmFkZENsYXNzKHkucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLGEucmVtb3ZlQXR0cihcIm5nLXRyYW5zY2x1ZGVcIiksYS5yZW1vdmVBdHRyKFwibmctcmVwZWF0XCIpLHI9YW5ndWxhci5lbGVtZW50KGxbaV0pLnNjb3BlKCksYT1vKGEpKHIpLGFuZ3VsYXIuZWxlbWVudCh5LndyYXBwZXIpLmFwcGVuZChhKTtmb3IoaT1zLmxlbmd0aC0xO2k+PTA7aS0tKWE9YW5ndWxhci5lbGVtZW50KHNbaV0pLmNsb25lKCkuYWRkQ2xhc3MoeS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyksYS5yZW1vdmVBdHRyKFwibmctdHJhbnNjbHVkZVwiKSxhLnJlbW92ZUF0dHIoXCJuZy1yZXBlYXRcIikscj1hbmd1bGFyLmVsZW1lbnQoc1tpXSkuc2NvcGUoKSxhPW8oYSkociksYW5ndWxhci5lbGVtZW50KHkud3JhcHBlcikucHJlcGVuZChhKX0seS5kZXN0cm95TG9vcD1mdW5jdGlvbigpe3kud3JhcHBlci5jaGlsZHJlbihcIi5cIit5LnBhcmFtcy5zbGlkZUNsYXNzK1wiLlwiK3kucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpLHkuc2xpZGVzLnJlbW92ZUF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKX0seS5maXhMb29wPWZ1bmN0aW9uKCl7dmFyIGU7eS5hY3RpdmVJbmRleDx5Lmxvb3BlZFNsaWRlcz8oZT15LnNsaWRlcy5sZW5ndGgtMyp5Lmxvb3BlZFNsaWRlcyt5LmFjdGl2ZUluZGV4LGUrPXkubG9vcGVkU2xpZGVzLHkuc2xpZGVUbyhlLDAsITEsITApKTooXCJhdXRvXCI9PT15LnBhcmFtcy5zbGlkZXNQZXJWaWV3JiZ5LmFjdGl2ZUluZGV4Pj0yKnkubG9vcGVkU2xpZGVzfHx5LmFjdGl2ZUluZGV4Pnkuc2xpZGVzLmxlbmd0aC0yKnkucGFyYW1zLnNsaWRlc1BlclZpZXcpJiYoZT0teS5zbGlkZXMubGVuZ3RoK3kuYWN0aXZlSW5kZXgreS5sb29wZWRTbGlkZXMsZSs9eS5sb29wZWRTbGlkZXMseS5zbGlkZVRvKGUsMCwhMSwhMCkpfSx5LmFwcGVuZFNsaWRlPWZ1bmN0aW9uKGUpe2lmKHkucGFyYW1zLmxvb3AmJnkuZGVzdHJveUxvb3AoKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmZS5sZW5ndGgpZm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmeS53cmFwcGVyLmFwcGVuZChlW3RdKTtlbHNlIHkud3JhcHBlci5hcHBlbmQoZSk7eS5wYXJhbXMubG9vcCYmeS5jcmVhdGVMb29wKCkseS5wYXJhbXMub2JzZXJ2ZXImJnkuc3VwcG9ydC5vYnNlcnZlcnx8eS51cGRhdGUoITApfSx5LnByZXBlbmRTbGlkZT1mdW5jdGlvbihlKXt5LnBhcmFtcy5sb29wJiZ5LmRlc3Ryb3lMb29wKCk7dmFyIHQ9eS5hY3RpdmVJbmRleCsxO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmxlbmd0aCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspZVtuXSYmeS53cmFwcGVyLnByZXBlbmQoZVtuXSk7dD15LmFjdGl2ZUluZGV4K2UubGVuZ3RofWVsc2UgeS53cmFwcGVyLnByZXBlbmQoZSk7eS5wYXJhbXMubG9vcCYmeS5jcmVhdGVMb29wKCkseS5wYXJhbXMub2JzZXJ2ZXImJnkuc3VwcG9ydC5vYnNlcnZlcnx8eS51cGRhdGUoITApLHkuc2xpZGVUbyh0LDAsITEpfSx5LnJlbW92ZVNsaWRlPWZ1bmN0aW9uKGUpe3kucGFyYW1zLmxvb3AmJih5LmRlc3Ryb3lMb29wKCkseS5zbGlkZXM9eS53cmFwcGVyLmNoaWxkcmVuKFwiLlwiK3kucGFyYW1zLnNsaWRlQ2xhc3MpKTt2YXIgdCxuPXkuYWN0aXZlSW5kZXg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJmUubGVuZ3RoKXtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl0PWVbaV0seS5zbGlkZXNbdF0mJnkuc2xpZGVzLmVxKHQpLnJlbW92ZSgpLG4+dCYmbi0tO249TWF0aC5tYXgobiwwKX1lbHNlIHQ9ZSx5LnNsaWRlc1t0XSYmeS5zbGlkZXMuZXEodCkucmVtb3ZlKCksbj50JiZuLS0sbj1NYXRoLm1heChuLDApO3kucGFyYW1zLmxvb3AmJnkuY3JlYXRlTG9vcCgpLHkucGFyYW1zLm9ic2VydmVyJiZ5LnN1cHBvcnQub2JzZXJ2ZXJ8fHkudXBkYXRlKCEwKSx5LnBhcmFtcy5sb29wP3kuc2xpZGVUbyhuK3kubG9vcGVkU2xpZGVzLDAsITEpOnkuc2xpZGVUbyhuLDAsITEpfSx5LnJlbW92ZUFsbFNsaWRlcz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx5LnNsaWRlcy5sZW5ndGg7dCsrKWUucHVzaCh0KTt5LnJlbW92ZVNsaWRlKGUpfSx5LmVmZmVjdHM9e2ZhZGU6e3NldFRyYW5zbGF0ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8eS5zbGlkZXMubGVuZ3RoO2UrKyl7dmFyIHQ9eS5zbGlkZXMuZXEoZSksbj10WzBdLnN3aXBlclNsaWRlT2Zmc2V0LGk9LW47eS5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZXx8KGktPXkudHJhbnNsYXRlKTt2YXIgcj0wO3MoKXx8KHI9aSxpPTApO3ZhciBhPXkucGFyYW1zLmZhZGUuY3Jvc3NGYWRlP01hdGgubWF4KDEtTWF0aC5hYnModFswXS5wcm9ncmVzcyksMCk6MStNYXRoLm1pbihNYXRoLm1heCh0WzBdLnByb2dyZXNzLC0xKSwwKTt0LmNzcyh7b3BhY2l0eTphfSkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIraStcInB4LCBcIityK1wicHgsIDBweClcIil9fSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe2lmKHkuc2xpZGVzLnRyYW5zaXRpb24oZSkseS5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSYmMCE9PWUpe3ZhciB0PSExO3kuc2xpZGVzLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtpZighdCYmeSl7dD0hMCx5LmFuaW1hdGluZz0hMTtmb3IodmFyIGU9W1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLFwidHJhbnNpdGlvbmVuZFwiLFwib1RyYW5zaXRpb25FbmRcIixcIk1TVHJhbnNpdGlvbkVuZFwiLFwibXNUcmFuc2l0aW9uRW5kXCJdLG49MDtuPGUubGVuZ3RoO24rKyl5LndyYXBwZXIudHJpZ2dlcihlW25dKX19KX19fSxjdWJlOntzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt2YXIgZSxuPTA7eS5wYXJhbXMuY3ViZS5zaGFkb3cmJihzKCk/KGU9eS53cmFwcGVyLmZpbmQoXCIuc3dpcGVyLWN1YmUtc2hhZG93XCIpLDA9PT1lLmxlbmd0aCYmKGU9dCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpLHkud3JhcHBlci5hcHBlbmQoZSkpLGUuY3NzKHtoZWlnaHQ6eS53aWR0aCtcInB4XCJ9KSk6KGU9eS5jb250YWluZXIuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIiksMD09PWUubGVuZ3RoJiYoZT10KCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+JykseS5jb250YWluZXIuYXBwZW5kKGUpKSkpO2Zvcih2YXIgaT0wO2k8eS5zbGlkZXMubGVuZ3RoO2krKyl7dmFyIHI9eS5zbGlkZXMuZXEoaSksYT05MCppLG89TWF0aC5mbG9vcihhLzM2MCk7eS5ydGwmJihhPS1hLG89TWF0aC5mbG9vcigtYS8zNjApKTt2YXIgbD1NYXRoLm1heChNYXRoLm1pbihyWzBdLnByb2dyZXNzLDEpLC0xKSxjPTAsZD0wLHU9MDtpJTQ9PT0wPyhjPTQqLW8qeS5zaXplLHU9MCk6KGktMSklND09PTA/KGM9MCx1PTQqLW8qeS5zaXplKTooaS0yKSU0PT09MD8oYz15LnNpemUrNCpvKnkuc2l6ZSx1PXkuc2l6ZSk6KGktMyklND09PTAmJihjPS15LnNpemUsdT0zKnkuc2l6ZSs0Knkuc2l6ZSpvKSx5LnJ0bCYmKGM9LWMpLHMoKXx8KGQ9YyxjPTApO3ZhciBwPVwicm90YXRlWChcIisocygpPzA6LWEpK1wiZGVnKSByb3RhdGVZKFwiKyhzKCk/YTowKStcImRlZykgdHJhbnNsYXRlM2QoXCIrYytcInB4LCBcIitkK1wicHgsIFwiK3UrXCJweClcIjtpZigxPj1sJiZsPi0xJiYobj05MCppKzkwKmwseS5ydGwmJihuPTkwKi1pLTkwKmwpKSxyLnRyYW5zZm9ybShwKSx5LnBhcmFtcy5jdWJlLnNsaWRlU2hhZG93cyl7dmFyIGg9cygpP3IuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6ci5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLGY9cygpP3IuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCIpOnIuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiKTswPT09aC5sZW5ndGgmJihoPXQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKHMoKT9cImxlZnRcIjpcInRvcFwiKSsnXCI+PC9kaXY+Jyksci5hcHBlbmQoaCkpLDA9PT1mLmxlbmd0aCYmKGY9dCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysocygpP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+Jyksci5hcHBlbmQoZikpO3JbMF0ucHJvZ3Jlc3M7aC5sZW5ndGgmJihoWzBdLnN0eWxlLm9wYWNpdHk9LXJbMF0ucHJvZ3Jlc3MpLGYubGVuZ3RoJiYoZlswXS5zdHlsZS5vcGFjaXR5PXJbMF0ucHJvZ3Jlc3MpfX1pZih5LndyYXBwZXIuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIreS5zaXplLzIrXCJweFwiLFwiLW1vei10cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIit5LnNpemUvMitcInB4XCIsXCItbXMtdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIreS5zaXplLzIrXCJweFwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIreS5zaXplLzIrXCJweFwifSkseS5wYXJhbXMuY3ViZS5zaGFkb3cpaWYocygpKWUudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIisoeS53aWR0aC8yK3kucGFyYW1zLmN1YmUuc2hhZG93T2Zmc2V0KStcInB4LCBcIisteS53aWR0aC8yK1wicHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoXCIreS5wYXJhbXMuY3ViZS5zaGFkb3dTY2FsZStcIilcIik7ZWxzZXt2YXIgbT1NYXRoLmFicyhuKS05MCpNYXRoLmZsb29yKE1hdGguYWJzKG4pLzkwKSxnPTEuNS0oTWF0aC5zaW4oMiptKk1hdGguUEkvMzYwKS8yK01hdGguY29zKDIqbSpNYXRoLlBJLzM2MCkvMiksdj15LnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlLF89eS5wYXJhbXMuY3ViZS5zaGFkb3dTY2FsZS9nLHc9eS5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQ7ZS50cmFuc2Zvcm0oXCJzY2FsZTNkKFwiK3YrXCIsIDEsIFwiK18rXCIpIHRyYW5zbGF0ZTNkKDBweCwgXCIrKHkuaGVpZ2h0LzIrdykrXCJweCwgXCIrLXkuaGVpZ2h0LzIvXytcInB4KSByb3RhdGVYKC05MGRlZylcIil9dmFyIFQ9eS5pc1NhZmFyaXx8eS5pc1VpV2ViVmlldz8teS5zaXplLzI6MDt5LndyYXBwZXIudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LDAsXCIrVCtcInB4KSByb3RhdGVYKFwiKyhzKCk/MDpuKStcImRlZykgcm90YXRlWShcIisocygpPy1uOjApK1wiZGVnKVwiKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt5LnNsaWRlcy50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKSx5LnBhcmFtcy5jdWJlLnNoYWRvdyYmIXMoKSYmeS5jb250YWluZXIuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIikudHJhbnNpdGlvbihlKX19LGNvdmVyZmxvdzp7c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXkudHJhbnNsYXRlLG49cygpPy1lK3kud2lkdGgvMjotZSt5LmhlaWdodC8yLGk9cygpP3kucGFyYW1zLmNvdmVyZmxvdy5yb3RhdGU6LXkucGFyYW1zLmNvdmVyZmxvdy5yb3RhdGUscj15LnBhcmFtcy5jb3ZlcmZsb3cuZGVwdGgsYT0wLG89eS5zbGlkZXMubGVuZ3RoO28+YTthKyspe3ZhciBsPXkuc2xpZGVzLmVxKGEpLGM9eS5zbGlkZXNTaXplc0dyaWRbYV0sZD1sWzBdLnN3aXBlclNsaWRlT2Zmc2V0LHU9KG4tZC1jLzIpL2MqeS5wYXJhbXMuY292ZXJmbG93Lm1vZGlmaWVyLHA9cygpP2kqdTowLGg9cygpPzA6aSp1LGY9LXIqTWF0aC5hYnModSksbT1zKCk/MDp5LnBhcmFtcy5jb3ZlcmZsb3cuc3RyZXRjaCp1LGc9cygpP3kucGFyYW1zLmNvdmVyZmxvdy5zdHJldGNoKnU6MDtNYXRoLmFicyhnKTwuMDAxJiYoZz0wKSxNYXRoLmFicyhtKTwuMDAxJiYobT0wKSxNYXRoLmFicyhmKTwuMDAxJiYoZj0wKSxNYXRoLmFicyhwKTwuMDAxJiYocD0wKSxNYXRoLmFicyhoKTwuMDAxJiYoaD0wKTt2YXIgdj1cInRyYW5zbGF0ZTNkKFwiK2crXCJweCxcIittK1wicHgsXCIrZitcInB4KSAgcm90YXRlWChcIitoK1wiZGVnKSByb3RhdGVZKFwiK3ArXCJkZWcpXCI7aWYobC50cmFuc2Zvcm0odiksbFswXS5zdHlsZS56SW5kZXg9LU1hdGguYWJzKE1hdGgucm91bmQodSkpKzEseS5wYXJhbXMuY292ZXJmbG93LnNsaWRlU2hhZG93cyl7dmFyIF89cygpP2wuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6bC5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLHc9cygpP2wuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCIpOmwuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiKTswPT09Xy5sZW5ndGgmJihfPXQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKHMoKT9cImxlZnRcIjpcInRvcFwiKSsnXCI+PC9kaXY+JyksbC5hcHBlbmQoXykpLDA9PT13Lmxlbmd0aCYmKHc9dCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysocygpP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+JyksbC5hcHBlbmQodykpLF8ubGVuZ3RoJiYoX1swXS5zdHlsZS5vcGFjaXR5PXU+MD91OjApLHcubGVuZ3RoJiYod1swXS5zdHlsZS5vcGFjaXR5PS11PjA/LXU6MCl9fWlmKHkuYnJvd3Nlci5pZSl7dmFyIFQ9eS53cmFwcGVyWzBdLnN0eWxlO1QucGVyc3BlY3RpdmVPcmlnaW49bitcInB4IDUwJVwifX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt5LnNsaWRlcy50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKX19fSx5Lmxhenk9e2luaXRpYWxJbWFnZUxvYWRlZDohMSxsb2FkSW1hZ2VJblNsaWRlOmZ1bmN0aW9uKGUsbil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJihcInVuZGVmaW5lZFwiPT10eXBlb2YgbiYmKG49ITApLDAhPT15LnNsaWRlcy5sZW5ndGgpKXt2YXIgaT15LnNsaWRlcy5lcShlKSxyPWkuZmluZChcIi5zd2lwZXItbGF6eTpub3QoLnN3aXBlci1sYXp5LWxvYWRlZCk6bm90KC5zd2lwZXItbGF6eS1sb2FkaW5nKVwiKTshaS5oYXNDbGFzcyhcInN3aXBlci1sYXp5XCIpfHxpLmhhc0NsYXNzKFwic3dpcGVyLWxhenktbG9hZGVkXCIpfHxpLmhhc0NsYXNzKFwic3dpcGVyLWxhenktbG9hZGluZ1wiKXx8KHI9ci5hZGQoaVswXSkpLDAhPT1yLmxlbmd0aCYmci5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKTtlLmFkZENsYXNzKFwic3dpcGVyLWxhenktbG9hZGluZ1wiKTt2YXIgcj1lLmF0dHIoXCJkYXRhLWJhY2tncm91bmRcIiksYT1lLmF0dHIoXCJkYXRhLXNyY1wiKSxvPWUuYXR0cihcImRhdGEtc3Jjc2V0XCIpO3kubG9hZEltYWdlKGVbMF0sYXx8cixvLCExLGZ1bmN0aW9uKCl7aWYocj8oZS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIrcitcIilcIiksZS5yZW1vdmVBdHRyKFwiZGF0YS1iYWNrZ3JvdW5kXCIpKToobyYmKGUuYXR0cihcInNyY3NldFwiLG8pLGUucmVtb3ZlQXR0cihcImRhdGEtc3Jjc2V0XCIpKSxhJiYoZS5hdHRyKFwic3JjXCIsYSksZS5yZW1vdmVBdHRyKFwiZGF0YS1zcmNcIikpKSxlLmFkZENsYXNzKFwic3dpcGVyLWxhenktbG9hZGVkXCIpLnJlbW92ZUNsYXNzKFwic3dpcGVyLWxhenktbG9hZGluZ1wiKSxpLmZpbmQoXCIuc3dpcGVyLWxhenktcHJlbG9hZGVyLCAucHJlbG9hZGVyXCIpLnJlbW92ZSgpLHkucGFyYW1zLmxvb3AmJm4pe3ZhciB0PWkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpO2lmKGkuaGFzQ2xhc3MoeS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpe3ZhciBzPXkud3JhcHBlci5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyt0KydcIl06bm90KC4nK3kucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MrXCIpXCIpO3kubGF6eS5sb2FkSW1hZ2VJblNsaWRlKHMuaW5kZXgoKSwhMSl9ZWxzZXt2YXIgbD15LndyYXBwZXIuY2hpbGRyZW4oXCIuXCIreS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyt0KydcIl0nKTt5LmxhenkubG9hZEltYWdlSW5TbGlkZShsLmluZGV4KCksITEpfX15LmVtaXQoXCJvbkxhenlJbWFnZVJlYWR5XCIseSxpWzBdLGVbMF0pfSkseS5lbWl0KFwib25MYXp5SW1hZ2VMb2FkXCIseSxpWzBdLGVbMF0pfSl9fSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGU7aWYoeS5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KXkud3JhcHBlci5jaGlsZHJlbihcIi5cIit5LnBhcmFtcy5zbGlkZVZpc2libGVDbGFzcykuZWFjaChmdW5jdGlvbigpe3kubGF6eS5sb2FkSW1hZ2VJblNsaWRlKHQodGhpcykuaW5kZXgoKSl9KTtlbHNlIGlmKHkucGFyYW1zLnNsaWRlc1BlclZpZXc+MSlmb3IoZT15LmFjdGl2ZUluZGV4O2U8eS5hY3RpdmVJbmRleCt5LnBhcmFtcy5zbGlkZXNQZXJWaWV3O2UrKyl5LnNsaWRlc1tlXSYmeS5sYXp5LmxvYWRJbWFnZUluU2xpZGUoZSk7ZWxzZSB5LmxhenkubG9hZEltYWdlSW5TbGlkZSh5LmFjdGl2ZUluZGV4KTtpZih5LnBhcmFtcy5sYXp5TG9hZGluZ0luUHJldk5leHQpaWYoeS5wYXJhbXMuc2xpZGVzUGVyVmlldz4xKXtmb3IoZT15LmFjdGl2ZUluZGV4K3kucGFyYW1zLnNsaWRlc1BlclZpZXc7ZTx5LmFjdGl2ZUluZGV4K3kucGFyYW1zLnNsaWRlc1BlclZpZXcreS5wYXJhbXMuc2xpZGVzUGVyVmlldztlKyspeS5zbGlkZXNbZV0mJnkubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGUpO2ZvcihlPXkuYWN0aXZlSW5kZXgteS5wYXJhbXMuc2xpZGVzUGVyVmlldztlPHkuYWN0aXZlSW5kZXg7ZSsrKXkuc2xpZGVzW2VdJiZ5LmxhenkubG9hZEltYWdlSW5TbGlkZShlKX1lbHNle3ZhciBuPXkud3JhcHBlci5jaGlsZHJlbihcIi5cIit5LnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7bi5sZW5ndGg+MCYmeS5sYXp5LmxvYWRJbWFnZUluU2xpZGUobi5pbmRleCgpKTt2YXIgaT15LndyYXBwZXIuY2hpbGRyZW4oXCIuXCIreS5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO2kubGVuZ3RoPjAmJnkubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkuaW5kZXgoKSl9fSxvblRyYW5zaXRpb25TdGFydDpmdW5jdGlvbigpe3kucGFyYW1zLmxhenlMb2FkaW5nJiYoeS5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydHx8IXkucGFyYW1zLmxhenlMb2FkaW5nT25UcmFuc2l0aW9uU3RhcnQmJiF5LmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSYmeS5sYXp5LmxvYWQoKX0sb25UcmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7eS5wYXJhbXMubGF6eUxvYWRpbmcmJiF5LnBhcmFtcy5sYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0JiZ5LmxhenkubG9hZCgpfX0seS5zY3JvbGxiYXI9e2lzVG91Y2hlZDohMSxzZXREcmFnUG9zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9eS5zY3JvbGxiYXIsbj1zKCk/XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGV8fFwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOmUucGFnZVh8fGUuY2xpZW50WDpcInRvdWNoc3RhcnRcIj09PWUudHlwZXx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWXx8ZS5jbGllbnRZLGk9bi10LnRyYWNrLm9mZnNldCgpW3MoKT9cImxlZnRcIjpcInRvcFwiXS10LmRyYWdTaXplLzIscj0teS5taW5UcmFuc2xhdGUoKSp0Lm1vdmVEaXZpZGVyLGE9LXkubWF4VHJhbnNsYXRlKCkqdC5tb3ZlRGl2aWRlcjtyPmk/aT1yOmk+YSYmKGk9YSksaT0taS90Lm1vdmVEaXZpZGVyLHkudXBkYXRlUHJvZ3Jlc3MoaSkseS5zZXRXcmFwcGVyVHJhbnNsYXRlKGksITApfSxkcmFnU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9eS5zY3JvbGxiYXI7dC5pc1RvdWNoZWQ9ITAsZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdC5zZXREcmFnUG9zaXRpb24oZSksY2xlYXJUaW1lb3V0KHQuZHJhZ1RpbWVvdXQpLHQudHJhY2sudHJhbnNpdGlvbigwKSx5LnBhcmFtcy5zY3JvbGxiYXJIaWRlJiZ0LnRyYWNrLmNzcyhcIm9wYWNpdHlcIiwxKSx5LndyYXBwZXIudHJhbnNpdGlvbigxMDApLHQuZHJhZy50cmFuc2l0aW9uKDEwMCkseS5lbWl0KFwib25TY3JvbGxiYXJEcmFnU3RhcnRcIix5KX0sZHJhZ01vdmU6ZnVuY3Rpb24oZSl7dmFyIHQ9eS5zY3JvbGxiYXI7dC5pc1RvdWNoZWQmJihlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLHQuc2V0RHJhZ1Bvc2l0aW9uKGUpLHkud3JhcHBlci50cmFuc2l0aW9uKDApLHQudHJhY2sudHJhbnNpdGlvbigwKSx0LmRyYWcudHJhbnNpdGlvbigwKSx5LmVtaXQoXCJvblNjcm9sbGJhckRyYWdNb3ZlXCIseSkpfSxkcmFnRW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXkuc2Nyb2xsYmFyO3QuaXNUb3VjaGVkJiYodC5pc1RvdWNoZWQ9ITEseS5wYXJhbXMuc2Nyb2xsYmFySGlkZSYmKGNsZWFyVGltZW91dCh0LmRyYWdUaW1lb3V0KSx0LmRyYWdUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnRyYWNrLmNzcyhcIm9wYWNpdHlcIiwwKSx0LnRyYWNrLnRyYW5zaXRpb24oNDAwKX0sMWUzKSkseS5lbWl0KFwib25TY3JvbGxiYXJEcmFnRW5kXCIseSkseS5wYXJhbXMuc2Nyb2xsYmFyU25hcE9uUmVsZWFzZSYmeS5zbGlkZVJlc2V0KCkpfSxlbmFibGVEcmFnZ2FibGU6ZnVuY3Rpb24oKXt2YXIgZT15LnNjcm9sbGJhcixuPXkuc3VwcG9ydC50b3VjaD9lLnRyYWNrOmRvY3VtZW50O3QoZS50cmFjaykub24oeS50b3VjaEV2ZW50cy5zdGFydCxlLmRyYWdTdGFydCksdChuKS5vbih5LnRvdWNoRXZlbnRzLm1vdmUsZS5kcmFnTW92ZSksdChuKS5vbih5LnRvdWNoRXZlbnRzLmVuZCxlLmRyYWdFbmQpfSxkaXNhYmxlRHJhZ2dhYmxlOmZ1bmN0aW9uKCl7dmFyIGU9eS5zY3JvbGxiYXIsbj15LnN1cHBvcnQudG91Y2g/ZS50cmFjazpkb2N1bWVudDt0KGUudHJhY2spLm9mZih5LnRvdWNoRXZlbnRzLnN0YXJ0LGUuZHJhZ1N0YXJ0KSx0KG4pLm9mZih5LnRvdWNoRXZlbnRzLm1vdmUsZS5kcmFnTW92ZSksdChuKS5vZmYoeS50b3VjaEV2ZW50cy5lbmQsZS5kcmFnRW5kKX0sc2V0OmZ1bmN0aW9uKCl7aWYoeS5wYXJhbXMuc2Nyb2xsYmFyKXt2YXIgZT15LnNjcm9sbGJhcjtlLnRyYWNrPXQoeS5wYXJhbXMuc2Nyb2xsYmFyKSxlLmRyYWc9ZS50cmFjay5maW5kKFwiLnN3aXBlci1zY3JvbGxiYXItZHJhZ1wiKSwwPT09ZS5kcmFnLmxlbmd0aCYmKGUuZHJhZz10KCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNjcm9sbGJhci1kcmFnXCI+PC9kaXY+JyksZS50cmFjay5hcHBlbmQoZS5kcmFnKSksZS5kcmFnWzBdLnN0eWxlLndpZHRoPVwiXCIsZS5kcmFnWzBdLnN0eWxlLmhlaWdodD1cIlwiLGUudHJhY2tTaXplPXMoKT9lLnRyYWNrWzBdLm9mZnNldFdpZHRoOmUudHJhY2tbMF0ub2Zmc2V0SGVpZ2h0LGUuZGl2aWRlcj15LnNpemUveS52aXJ0dWFsU2l6ZSxlLm1vdmVEaXZpZGVyPWUuZGl2aWRlciooZS50cmFja1NpemUveS5zaXplKSxlLmRyYWdTaXplPWUudHJhY2tTaXplKmUuZGl2aWRlcixzKCk/ZS5kcmFnWzBdLnN0eWxlLndpZHRoPWUuZHJhZ1NpemUrXCJweFwiOmUuZHJhZ1swXS5zdHlsZS5oZWlnaHQ9ZS5kcmFnU2l6ZStcInB4XCIsZS5kaXZpZGVyPj0xP2UudHJhY2tbMF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjplLnRyYWNrWzBdLnN0eWxlLmRpc3BsYXk9XCJcIix5LnBhcmFtcy5zY3JvbGxiYXJIaWRlJiYoZS50cmFja1swXS5zdHlsZS5vcGFjaXR5PTApfX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7aWYoeS5wYXJhbXMuc2Nyb2xsYmFyKXt2YXIgZSx0PXkuc2Nyb2xsYmFyLG49KHkudHJhbnNsYXRlfHwwLHQuZHJhZ1NpemUpO2U9KHQudHJhY2tTaXplLXQuZHJhZ1NpemUpKnkucHJvZ3Jlc3MseS5ydGwmJnMoKT8oZT0tZSxlPjA/KG49dC5kcmFnU2l6ZS1lLGU9MCk6LWUrdC5kcmFnU2l6ZT50LnRyYWNrU2l6ZSYmKG49dC50cmFja1NpemUrZSkpOjA+ZT8obj10LmRyYWdTaXplK2UsZT0wKTplK3QuZHJhZ1NpemU+dC50cmFja1NpemUmJihuPXQudHJhY2tTaXplLWUpLHMoKT8oeS5zdXBwb3J0LnRyYW5zZm9ybXMzZD90LmRyYWcudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrZStcInB4LCAwLCAwKVwiKTp0LmRyYWcudHJhbnNmb3JtKFwidHJhbnNsYXRlWChcIitlK1wicHgpXCIpLHQuZHJhZ1swXS5zdHlsZS53aWR0aD1uK1wicHhcIik6KHkuc3VwcG9ydC50cmFuc2Zvcm1zM2Q/dC5kcmFnLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwgXCIrZStcInB4LCAwKVwiKTp0LmRyYWcudHJhbnNmb3JtKFwidHJhbnNsYXRlWShcIitlK1wicHgpXCIpLHQuZHJhZ1swXS5zdHlsZS5oZWlnaHQ9bitcInB4XCIpLHkucGFyYW1zLnNjcm9sbGJhckhpZGUmJihjbGVhclRpbWVvdXQodC50aW1lb3V0KSx0LnRyYWNrWzBdLnN0eWxlLm9wYWNpdHk9MSx0LnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QudHJhY2tbMF0uc3R5bGUub3BhY2l0eT0wLHQudHJhY2sudHJhbnNpdGlvbig0MDApfSwxZTMpKX19LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7eS5wYXJhbXMuc2Nyb2xsYmFyJiZ5LnNjcm9sbGJhci5kcmFnLnRyYW5zaXRpb24oZSl9fSx5LmNvbnRyb2xsZXI9e0xpbmVhclNwbGluZTpmdW5jdGlvbihlLHQpe3RoaXMueD1lLHRoaXMueT10LHRoaXMubGFzdEluZGV4PWUubGVuZ3RoLTE7dmFyIG4saTt0aGlzLngubGVuZ3RoO3RoaXMuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/KGk9cih0aGlzLngsZSksbj1pLTEsKGUtdGhpcy54W25dKSoodGhpcy55W2ldLXRoaXMueVtuXSkvKHRoaXMueFtpXS10aGlzLnhbbl0pK3RoaXMueVtuXSk6MH07dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZSx0LG47cmV0dXJuIGZ1bmN0aW9uKGkscil7Zm9yKHQ9LTEsZT1pLmxlbmd0aDtlLXQ+MTspaVtuPWUrdD4+MV08PXI/dD1uOmU9bjtyZXR1cm4gZX19KCl9LGdldEludGVycG9sYXRlRnVuY3Rpb246ZnVuY3Rpb24oZSl7eS5jb250cm9sbGVyLnNwbGluZXx8KHkuY29udHJvbGxlci5zcGxpbmU9eS5wYXJhbXMubG9vcD9uZXcgeS5jb250cm9sbGVyLkxpbmVhclNwbGluZSh5LnNsaWRlc0dyaWQsZS5zbGlkZXNHcmlkKTpuZXcgeS5jb250cm9sbGVyLkxpbmVhclNwbGluZSh5LnNuYXBHcmlkLGUuc25hcEdyaWQpKX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gaSh0KXtlPXQucnRsJiZcImhvcml6b250YWxcIj09PXQucGFyYW1zLmRpcmVjdGlvbj8teS50cmFuc2xhdGU6eS50cmFuc2xhdGUsXCJzbGlkZVwiPT09eS5wYXJhbXMuY29udHJvbEJ5JiYoeS5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24odCksYT0teS5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtZSkpLGEmJlwiY29udGFpbmVyXCIhPT15LnBhcmFtcy5jb250cm9sQnl8fChyPSh0Lm1heFRyYW5zbGF0ZSgpLXQubWluVHJhbnNsYXRlKCkpLyh5Lm1heFRyYW5zbGF0ZSgpLXkubWluVHJhbnNsYXRlKCkpLGE9KGUteS5taW5UcmFuc2xhdGUoKSkqcit0Lm1pblRyYW5zbGF0ZSgpKSx5LnBhcmFtcy5jb250cm9sSW52ZXJzZSYmKGE9dC5tYXhUcmFuc2xhdGUoKS1hKSx0LnVwZGF0ZVByb2dyZXNzKGEpLHQuc2V0V3JhcHBlclRyYW5zbGF0ZShhLCExLHkpLHQudXBkYXRlQWN0aXZlSW5kZXgoKX12YXIgcixhLG89eS5wYXJhbXMuY29udHJvbDtpZih5LmlzQXJyYXkobykpZm9yKHZhciBzPTA7czxvLmxlbmd0aDtzKyspb1tzXSE9PXQmJm9bc11pbnN0YW5jZW9mIG4mJmkob1tzXSk7ZWxzZSBvIGluc3RhbmNlb2YgbiYmdCE9PW8mJmkobyl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBpKHQpe3Quc2V0V3JhcHBlclRyYW5zaXRpb24oZSx5KSwwIT09ZSYmKHQub25UcmFuc2l0aW9uU3RhcnQoKSx0LndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe2EmJih0LnBhcmFtcy5sb29wJiZcInNsaWRlXCI9PT15LnBhcmFtcy5jb250cm9sQnkmJnQuZml4TG9vcCgpLHQub25UcmFuc2l0aW9uRW5kKCkpfSkpfXZhciByLGE9eS5wYXJhbXMuY29udHJvbDtpZih5LmlzQXJyYXkoYSkpZm9yKHI9MDtyPGEubGVuZ3RoO3IrKylhW3JdIT09dCYmYVtyXWluc3RhbmNlb2YgbiYmaShhW3JdKTtlbHNlIGEgaW5zdGFuY2VvZiBuJiZ0IT09YSYmaShhKX19LHkuaGFzaG5hdj17aW5pdDpmdW5jdGlvbigpe2lmKHkucGFyYW1zLmhhc2huYXYpe3kuaGFzaG5hdi5pbml0aWFsaXplZD0hMDt2YXIgZT1kb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsXCJcIik7aWYoZSlmb3IodmFyIHQ9MCxuPTAsaT15LnNsaWRlcy5sZW5ndGg7aT5uO24rKyl7dmFyIHI9eS5zbGlkZXMuZXEobiksYT1yLmF0dHIoXCJkYXRhLWhhc2hcIik7aWYoYT09PWUmJiFyLmhhc0NsYXNzKHkucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKXt2YXIgbz1yLmluZGV4KCk7eS5zbGlkZVRvKG8sdCx5LnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsITApfX19fSxzZXRIYXNoOmZ1bmN0aW9uKCl7eS5oYXNobmF2LmluaXRpYWxpemVkJiZ5LnBhcmFtcy5oYXNobmF2JiYoZG9jdW1lbnQubG9jYXRpb24uaGFzaD15LnNsaWRlcy5lcSh5LmFjdGl2ZUluZGV4KS5hdHRyKFwiZGF0YS1oYXNoXCIpfHxcIlwiKX19LHkuZGlzYWJsZUtleWJvYXJkQ29udHJvbD1mdW5jdGlvbigpe3kucGFyYW1zLmtleWJvYXJkQ29udHJvbD0hMSx0KGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIscCl9LHkuZW5hYmxlS2V5Ym9hcmRDb250cm9sPWZ1bmN0aW9uKCl7eS5wYXJhbXMua2V5Ym9hcmRDb250cm9sPSEwLHQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLHApfSx5Lm1vdXNld2hlZWw9e2V2ZW50OiExLGxhc3RTY3JvbGxUaW1lOihuZXcgd2luZG93LkRhdGUpLmdldFRpbWUoKX0seS5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpe3RyeXtuZXcgd2luZG93LldoZWVsRXZlbnQoXCJ3aGVlbFwiKSx5Lm1vdXNld2hlZWwuZXZlbnQ9XCJ3aGVlbFwifWNhdGNoKEgpe315Lm1vdXNld2hlZWwuZXZlbnR8fHZvaWQgMD09PWRvY3VtZW50Lm9ubW91c2V3aGVlbHx8KHkubW91c2V3aGVlbC5ldmVudD1cIm1vdXNld2hlZWxcIikseS5tb3VzZXdoZWVsLmV2ZW50fHwoeS5tb3VzZXdoZWVsLmV2ZW50PVwiRE9NTW91c2VTY3JvbGxcIil9eS5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2w9ZnVuY3Rpb24oKXtyZXR1cm4geS5tb3VzZXdoZWVsLmV2ZW50Pyh5LmNvbnRhaW5lci5vZmYoeS5tb3VzZXdoZWVsLmV2ZW50LGgpLCEwKTohMX0seS5lbmFibGVNb3VzZXdoZWVsQ29udHJvbD1mdW5jdGlvbigpe3JldHVybiB5Lm1vdXNld2hlZWwuZXZlbnQ/KHkuY29udGFpbmVyLm9uKHkubW91c2V3aGVlbC5ldmVudCxoKSwhMCk6ITF9LHkucGFyYWxsYXg9e3NldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3kuY29udGFpbmVyLmNoaWxkcmVuKFwiW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV1cIikuZWFjaChmdW5jdGlvbigpe2YodGhpcyx5LnByb2dyZXNzKX0pLHkuc2xpZGVzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO2UuZmluZChcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1NYXRoLm1pbihNYXRoLm1heChlWzBdLnByb2dyZXNzLC0xKSwxKTtmKHRoaXMsdCl9KX0pfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT15LnBhcmFtcy5zcGVlZCkseS5jb250YWluZXIuZmluZChcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgbj10KHRoaXMpLGk9cGFyc2VJbnQobi5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb25cIiksMTApfHxlOzA9PT1lJiYoaT0wKSxuLnRyYW5zaXRpb24oaSl9KX19LHkuX3BsdWdpbnM9W107Zm9yKHZhciBZIGluIHkucGx1Z2lucyl7dmFyIFg9eS5wbHVnaW5zW1ldKHkseS5wYXJhbXNbWV0pO1gmJnkuX3BsdWdpbnMucHVzaChYKX1yZXR1cm4geS5jYWxsUGx1Z2lucz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PHkuX3BsdWdpbnMubGVuZ3RoO3QrKyllIGluIHkuX3BsdWdpbnNbdF0mJnkuX3BsdWdpbnNbdF1bZV0oYXJndW1lbnRzWzFdLGFyZ3VtZW50c1syXSxhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSl9LHkuZW1pdHRlckV2ZW50TGlzdGVuZXJzPXt9LHkuZW1pdD1mdW5jdGlvbihlKXt5LnBhcmFtc1tlXSYmeS5wYXJhbXNbZV0oYXJndW1lbnRzWzFdLGFyZ3VtZW50c1syXSxhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSk7dmFyIHQ7aWYoeS5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZV0pZm9yKHQ9MDt0PHkuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2VdLmxlbmd0aDt0KyspeS5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZV1bdF0oYXJndW1lbnRzWzFdLGFyZ3VtZW50c1syXSxhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSk7eS5jYWxsUGx1Z2lucyYmeS5jYWxsUGx1Z2lucyhlLGFyZ3VtZW50c1sxXSxhcmd1bWVudHNbMl0sYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0pfSx5Lm9uPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bShlKSx5LmVtaXR0ZXJFdmVudExpc3RlbmVyc1tlXXx8KHkuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2VdPVtdKSx5LmVtaXR0ZXJFdmVudExpc3RlbmVyc1tlXS5wdXNoKHQpLHl9LHkub2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG47aWYoZT1tKGUpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0KXJldHVybiB5LmVtaXR0ZXJFdmVudExpc3RlbmVyc1tlXT1bXSx5O2lmKHkuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2VdJiYwIT09eS5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZV0ubGVuZ3RoKXtmb3Iobj0wO248eS5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZV0ubGVuZ3RoO24rKyl5LmVtaXR0ZXJFdmVudExpc3RlbmVyc1tlXVtuXT09PXQmJnkuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2VdLnNwbGljZShuLDEpO3JldHVybiB5fX0seS5vbmNlPWZ1bmN0aW9uKGUsdCl7ZT1tKGUpO3ZhciBuPWZ1bmN0aW9uKCl7dChhcmd1bWVudHNbMF0sYXJndW1lbnRzWzFdLGFyZ3VtZW50c1syXSxhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdKSx5Lm9mZihlLG4pfTtyZXR1cm4geS5vbihlLG4pLHl9LHkuYTExeT17bWFrZUZvY3VzYWJsZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5hdHRyKFwidGFiSW5kZXhcIixcIjBcIiksZX0sYWRkUm9sZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmF0dHIoXCJyb2xlXCIsdCksZX0sYWRkTGFiZWw6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5hdHRyKFwiYXJpYS1sYWJlbFwiLHQpLGV9LGRpc2FibGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwhMCksZX0sZW5hYmxlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsITEpLGV9LG9uRW50ZXJLZXk6ZnVuY3Rpb24oZSl7MTM9PT1lLmtleUNvZGUmJih0KGUudGFyZ2V0KS5pcyh5LnBhcmFtcy5uZXh0QnV0dG9uKT8oeS5vbkNsaWNrTmV4dChlKSx5LmlzRW5kP3kuYTExeS5ub3RpZnkoeS5wYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk6eS5hMTF5Lm5vdGlmeSh5LnBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKSk6dChlLnRhcmdldCkuaXMoeS5wYXJhbXMucHJldkJ1dHRvbikmJih5Lm9uQ2xpY2tQcmV2KGUpLHkuaXNCZWdpbm5pbmc/eS5hMTF5Lm5vdGlmeSh5LnBhcmFtcy5maXJzdFNsaWRlTWVzc2FnZSk6eS5hMTF5Lm5vdGlmeSh5LnBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKSksdChlLnRhcmdldCkuaXMoXCIuXCIreS5wYXJhbXMuYnVsbGV0Q2xhc3MpJiZ0KGUudGFyZ2V0KVswXS5jbGljaygpKX0sbGl2ZVJlZ2lvbjp0KCc8c3BhbiBjbGFzcz1cInN3aXBlci1ub3RpZmljYXRpb25cIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+Jyksbm90aWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PXkuYTExeS5saXZlUmVnaW9uOzAhPT10Lmxlbmd0aCYmKHQuaHRtbChcIlwiKSx0Lmh0bWwoZSkpfSxpbml0OmZ1bmN0aW9uKCl7aWYoeS5wYXJhbXMubmV4dEJ1dHRvbil7dmFyIGU9dCh5LnBhcmFtcy5uZXh0QnV0dG9uKTt5LmExMXkubWFrZUZvY3VzYWJsZShlKSx5LmExMXkuYWRkUm9sZShlLFwiYnV0dG9uXCIpLHkuYTExeS5hZGRMYWJlbChlLHkucGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpfWlmKHkucGFyYW1zLnByZXZCdXR0b24pe3ZhciBuPXQoeS5wYXJhbXMucHJldkJ1dHRvbik7eS5hMTF5Lm1ha2VGb2N1c2FibGUobikseS5hMTF5LmFkZFJvbGUobixcImJ1dHRvblwiKSx5LmExMXkuYWRkTGFiZWwobix5LnBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKX10KHkuY29udGFpbmVyKS5hcHBlbmQoeS5hMTF5LmxpdmVSZWdpb24pfSxpbml0UGFnaW5hdGlvbjpmdW5jdGlvbigpe3kucGFyYW1zLnBhZ2luYXRpb24mJnkucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUmJnkuYnVsbGV0cyYmeS5idWxsZXRzLmxlbmd0aCYmeS5idWxsZXRzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO3kuYTExeS5tYWtlRm9jdXNhYmxlKGUpLHkuYTExeS5hZGRSb2xlKGUsXCJidXR0b25cIikseS5hMTF5LmFkZExhYmVsKGUseS5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgve3tpbmRleH19LyxlLmluZGV4KCkrMSkpfSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt5LmExMXkubGl2ZVJlZ2lvbiYmeS5hMTF5LmxpdmVSZWdpb24ubGVuZ3RoPjAmJnkuYTExeS5saXZlUmVnaW9uLnJlbW92ZSgpfX0seS5pbml0PWZ1bmN0aW9uKCl7eS5wYXJhbXMubG9vcCYmeS5jcmVhdGVMb29wKCkseS51cGRhdGVDb250YWluZXJTaXplKCkseS51cGRhdGVTbGlkZXNTaXplKCkseS51cGRhdGVQYWdpbmF0aW9uKCkseS5wYXJhbXMuc2Nyb2xsYmFyJiZ5LnNjcm9sbGJhciYmKHkuc2Nyb2xsYmFyLnNldCgpLHkucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSYmeS5zY3JvbGxiYXIuZW5hYmxlRHJhZ2dhYmxlKCkpLFwic2xpZGVcIiE9PXkucGFyYW1zLmVmZmVjdCYmeS5lZmZlY3RzW3kucGFyYW1zLmVmZmVjdF0mJih5LnBhcmFtcy5sb29wfHx5LnVwZGF0ZVByb2dyZXNzKCkseS5lZmZlY3RzW3kucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNsYXRlKCkpLHkucGFyYW1zLmxvb3A/eS5zbGlkZVRvKHkucGFyYW1zLmluaXRpYWxTbGlkZSt5Lmxvb3BlZFNsaWRlcywwLHkucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk6KHkuc2xpZGVUbyh5LnBhcmFtcy5pbml0aWFsU2xpZGUsMCx5LnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpLDA9PT15LnBhcmFtcy5pbml0aWFsU2xpZGUmJih5LnBhcmFsbGF4JiZ5LnBhcmFtcy5wYXJhbGxheCYmeS5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKSx5LmxhenkmJnkucGFyYW1zLmxhenlMb2FkaW5nJiYoeS5sYXp5LmxvYWQoKSx5LmxhenkuaW5pdGlhbEltYWdlTG9hZGVkPSEwKSkpLHkuYXR0YWNoRXZlbnRzKCkseS5wYXJhbXMub2JzZXJ2ZXImJnkuc3VwcG9ydC5vYnNlcnZlciYmeS5pbml0T2JzZXJ2ZXJzKCkseS5wYXJhbXMucHJlbG9hZEltYWdlcyYmIXkucGFyYW1zLmxhenlMb2FkaW5nJiZ5LnByZWxvYWRJbWFnZXMoKSx5LnBhcmFtcy5hdXRvcGxheSYmeS5zdGFydEF1dG9wbGF5KCkseS5wYXJhbXMua2V5Ym9hcmRDb250cm9sJiZ5LmVuYWJsZUtleWJvYXJkQ29udHJvbCYmeS5lbmFibGVLZXlib2FyZENvbnRyb2woKSx5LnBhcmFtcy5tb3VzZXdoZWVsQ29udHJvbCYmeS5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCYmeS5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCgpLHkucGFyYW1zLmhhc2huYXYmJnkuaGFzaG5hdiYmeS5oYXNobmF2LmluaXQoKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5pbml0KCkseS5lbWl0KFwib25Jbml0XCIseSl9LHkuY2xlYW51cFN0eWxlcz1mdW5jdGlvbigpe3kuY29udGFpbmVyLnJlbW92ZUNsYXNzKHkuY2xhc3NOYW1lcy5qb2luKFwiIFwiKSkucmVtb3ZlQXR0cihcInN0eWxlXCIpLHkud3JhcHBlci5yZW1vdmVBdHRyKFwic3R5bGVcIikseS5zbGlkZXMmJnkuc2xpZGVzLmxlbmd0aCYmeS5zbGlkZXMucmVtb3ZlQ2xhc3MoW3kucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLHkucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MseS5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MseS5wYXJhbXMuc2xpZGVQcmV2Q2xhc3NdLmpvaW4oXCIgXCIpKS5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQXR0cihcImRhdGEtc3dpcGVyLWNvbHVtblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItcm93XCIpLHkucGFnaW5hdGlvbkNvbnRhaW5lciYmeS5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCYmeS5wYWdpbmF0aW9uQ29udGFpbmVyLnJlbW92ZUNsYXNzKHkucGFyYW1zLnBhZ2luYXRpb25IaWRkZW5DbGFzcykseS5idWxsZXRzJiZ5LmJ1bGxldHMubGVuZ3RoJiZ5LmJ1bGxldHMucmVtb3ZlQ2xhc3MoeS5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpLHkucGFyYW1zLnByZXZCdXR0b24mJnQoeS5wYXJhbXMucHJldkJ1dHRvbikucmVtb3ZlQ2xhc3MoeS5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcykseS5wYXJhbXMubmV4dEJ1dHRvbiYmdCh5LnBhcmFtcy5uZXh0QnV0dG9uKS5yZW1vdmVDbGFzcyh5LnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKSx5LnBhcmFtcy5zY3JvbGxiYXImJnkuc2Nyb2xsYmFyJiYoeS5zY3JvbGxiYXIudHJhY2smJnkuc2Nyb2xsYmFyLnRyYWNrLmxlbmd0aCYmeS5zY3JvbGxiYXIudHJhY2sucmVtb3ZlQXR0cihcInN0eWxlXCIpLHkuc2Nyb2xsYmFyLmRyYWcmJnkuc2Nyb2xsYmFyLmRyYWcubGVuZ3RoJiZ5LnNjcm9sbGJhci5kcmFnLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSl9LHkuZGVzdHJveT1mdW5jdGlvbihlLHQpe3kuZGV0YWNoRXZlbnRzKCkseS5zdG9wQXV0b3BsYXkoKSx5LnBhcmFtcy5zY3JvbGxiYXImJnkuc2Nyb2xsYmFyJiZ5LnBhcmFtcy5zY3JvbGxiYXJEcmFnZ2FibGUmJnkuc2Nyb2xsYmFyLmRpc2FibGVEcmFnZ2FibGUoKSx5LnBhcmFtcy5sb29wJiZ5LmRlc3Ryb3lMb29wKCksdCYmeS5jbGVhbnVwU3R5bGVzKCkseS5kaXNjb25uZWN0T2JzZXJ2ZXJzKCkseS5wYXJhbXMua2V5Ym9hcmRDb250cm9sJiZ5LmRpc2FibGVLZXlib2FyZENvbnRyb2wmJnkuZGlzYWJsZUtleWJvYXJkQ29udHJvbCgpLHkucGFyYW1zLm1vdXNld2hlZWxDb250cm9sJiZ5LmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCYmeS5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2woKSx5LnBhcmFtcy5hMTF5JiZ5LmExMXkmJnkuYTExeS5kZXN0cm95KCkseS5lbWl0KFwib25EZXN0cm95XCIpLGUhPT0hMSYmKHk9bnVsbCl9LHkuaW5pdCgpLHl9fTtuLnByb3RvdHlwZT17aXNTYWZhcmk6ZnVuY3Rpb24oKXt2YXIgZT1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuaW5kZXhPZihcInNhZmFyaVwiKT49MCYmZS5pbmRleE9mKFwiY2hyb21lXCIpPDAmJmUuaW5kZXhPZihcImFuZHJvaWRcIik8MH0oKSxpc1VpV2ViVmlldzovKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNBcnJheTpmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGUpfSxicm93c2VyOntpZTp3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkfHx3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsaWVUb3VjaDp3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQmJndpbmRvdy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cz4xfHx3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkJiZ3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjF9LGRldmljZTpmdW5jdGlvbigpe3ZhciBlPW5hdmlnYXRvci51c2VyQWdlbnQsdD1lLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKSxuPWUubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKSxpPWUubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKSxyPSFuJiZlLm1hdGNoKC8oaVBob25lXFxzT1MpXFxzKFtcXGRfXSspLyk7cmV0dXJue2lvczpufHxyfHxpLGFuZHJvaWQ6dH19KCksc3VwcG9ydDp7dG91Y2g6d2luZG93Lk1vZGVybml6ciYmTW9kZXJuaXpyLnRvdWNoPT09ITB8fGZ1bmN0aW9uKCl7cmV0dXJuISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8d2luZG93LkRvY3VtZW50VG91Y2gmJmRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl9KCksdHJhbnNmb3JtczNkOndpbmRvdy5Nb2Rlcm5penImJk1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2Q9PT0hMHx8ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO3JldHVyblwid2Via2l0UGVyc3BlY3RpdmVcImluIGV8fFwiTW96UGVyc3BlY3RpdmVcImluIGV8fFwiT1BlcnNwZWN0aXZlXCJpbiBlfHxcIk1zUGVyc3BlY3RpdmVcImluIGV8fFwicGVyc3BlY3RpdmVcImluIGV9KCksZmxleGJveDpmdW5jdGlvbigpe2Zvcih2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLHQ9XCJhbGlnbkl0ZW1zIHdlYmtpdEFsaWduSXRlbXMgd2Via2l0Qm94QWxpZ24gbXNGbGV4QWxpZ24gbW96Qm94QWxpZ24gd2Via2l0RmxleERpcmVjdGlvbiBtc0ZsZXhEaXJlY3Rpb24gbW96Qm94RGlyZWN0aW9uIG1vekJveE9yaWVudCB3ZWJraXRCb3hEaXJlY3Rpb24gd2Via2l0Qm94T3JpZW50XCIuc3BsaXQoXCIgXCIpLG49MDtuPHQubGVuZ3RoO24rKylpZih0W25daW4gZSlyZXR1cm4hMH0oKSxvYnNlcnZlcjpmdW5jdGlvbigpe3JldHVyblwiTXV0YXRpb25PYnNlcnZlclwiaW4gd2luZG93fHxcIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJcImluIHdpbmRvd30oKX0scGx1Z2luczp7fX07Zm9yKHZhciBpPShmdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj0wO2ZvcihuPTA7bjxlLmxlbmd0aDtuKyspdFtuXT1lW25dO3JldHVybiB0Lmxlbmd0aD1lLmxlbmd0aCx0aGlzfSx0PWZ1bmN0aW9uKHQsbil7dmFyIGk9W10scj0wO2lmKHQmJiFuJiZ0IGluc3RhbmNlb2YgZSlyZXR1cm4gdDtpZih0KWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgYSxvLHM9dC50cmltKCk7aWYocy5pbmRleE9mKFwiPFwiKT49MCYmcy5pbmRleE9mKFwiPlwiKT49MCl7dmFyIGw9XCJkaXZcIjtmb3IoMD09PXMuaW5kZXhPZihcIjxsaVwiKSYmKGw9XCJ1bFwiKSwwPT09cy5pbmRleE9mKFwiPHRyXCIpJiYobD1cInRib2R5XCIpLCgwPT09cy5pbmRleE9mKFwiPHRkXCIpfHwwPT09cy5pbmRleE9mKFwiPHRoXCIpKSYmKGw9XCJ0clwiKSwwPT09cy5pbmRleE9mKFwiPHRib2R5XCIpJiYobD1cInRhYmxlXCIpLDA9PT1zLmluZGV4T2YoXCI8b3B0aW9uXCIpJiYobD1cInNlbGVjdFwiKSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobCksby5pbm5lckhUTUw9dCxyPTA7cjxvLmNoaWxkTm9kZXMubGVuZ3RoO3IrKylpLnB1c2goby5jaGlsZE5vZGVzW3JdKX1lbHNlIGZvcihhPW58fFwiI1wiIT09dFswXXx8dC5tYXRjaCgvWyAuPD46fl0vKT8obnx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCk6W2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQuc3BsaXQoXCIjXCIpWzFdKV0scj0wO3I8YS5sZW5ndGg7cisrKWFbcl0mJmkucHVzaChhW3JdKX1lbHNlIGlmKHQubm9kZVR5cGV8fHQ9PT13aW5kb3d8fHQ9PT1kb2N1bWVudClpLnB1c2godCk7ZWxzZSBpZih0Lmxlbmd0aD4wJiZ0WzBdLm5vZGVUeXBlKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspaS5wdXNoKHRbcl0pO3JldHVybiBuZXcgZShpKX07cmV0dXJuIGUucHJvdG90eXBlPXthZGRDbGFzczpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZSlyZXR1cm4gdGhpcztmb3IodmFyIHQ9ZS5zcGxpdChcIiBcIiksbj0wO248dC5sZW5ndGg7bisrKWZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXRoaXNbaV0uY2xhc3NMaXN0LmFkZCh0W25dKTtyZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIgXCIpLG49MDtuPHQubGVuZ3RoO24rKylmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl0aGlzW2ldLmNsYXNzTGlzdC5yZW1vdmUodFtuXSk7cmV0dXJuIHRoaXN9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzWzBdP3RoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGUpOiExfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zcGxpdChcIiBcIiksbj0wO248dC5sZW5ndGg7bisrKWZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXRoaXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSh0W25dKTtyZXR1cm4gdGhpc30sYXR0cjpmdW5jdGlvbihlLHQpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLmdldEF0dHJpYnV0ZShlKTp2b2lkIDA7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspaWYoMj09PWFyZ3VtZW50cy5sZW5ndGgpdGhpc1tuXS5zZXRBdHRyaWJ1dGUoZSx0KTtlbHNlIGZvcih2YXIgaSBpbiBlKXRoaXNbbl1baV09ZVtpXSx0aGlzW25dLnNldEF0dHJpYnV0ZShpLGVbaV0pO3JldHVybiB0aGlzfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCsrKXRoaXNbdF0ucmVtb3ZlQXR0cmlidXRlKGUpO3JldHVybiB0aGlzfSxkYXRhOmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQpe2lmKHRoaXNbMF0pe3ZhciBuPXRoaXNbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1cIitlKTtyZXR1cm4gbj9uOnRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZSYmZSBpbiB0aGlzWzBdLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2U/dGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlW2VdOnZvaWQgMH1yZXR1cm4gdm9pZCAwfWZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXt2YXIgcj10aGlzW2ldO3IuZG9tN0VsZW1lbnREYXRhU3RvcmFnZXx8KHIuZG9tN0VsZW1lbnREYXRhU3RvcmFnZT17fSksci5kb203RWxlbWVudERhdGFTdG9yYWdlW2VdPXR9cmV0dXJuIHRoaXN9LHRyYW5zZm9ybTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpc1t0XS5zdHlsZTtuLndlYmtpdFRyYW5zZm9ybT1uLk1zVHJhbnNmb3JtPW4ubXNUcmFuc2Zvcm09bi5Nb3pUcmFuc2Zvcm09bi5PVHJhbnNmb3JtPW4udHJhbnNmb3JtPWV9cmV0dXJuIHRoaXN9LHRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihlKz1cIm1zXCIpO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCsrKXt2YXIgbj10aGlzW3RdLnN0eWxlO24ud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uPW4uTXNUcmFuc2l0aW9uRHVyYXRpb249bi5tc1RyYW5zaXRpb25EdXJhdGlvbj1uLk1velRyYW5zaXRpb25EdXJhdGlvbj1uLk9UcmFuc2l0aW9uRHVyYXRpb249bi50cmFuc2l0aW9uRHVyYXRpb249ZX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oZSxuLGkscil7ZnVuY3Rpb24gYShlKXt2YXIgcj1lLnRhcmdldDtpZih0KHIpLmlzKG4pKWkuY2FsbChyLGUpO2Vsc2UgZm9yKHZhciBhPXQocikucGFyZW50cygpLG89MDtvPGEubGVuZ3RoO28rKyl0KGFbb10pLmlzKG4pJiZpLmNhbGwoYVtvXSxlKX12YXIgbyxzLGw9ZS5zcGxpdChcIiBcIik7Zm9yKG89MDtvPHRoaXMubGVuZ3RoO28rKylpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBufHxuPT09ITEpZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihpPWFyZ3VtZW50c1sxXSxyPWFyZ3VtZW50c1syXXx8ITEpLHM9MDtzPGwubGVuZ3RoO3MrKyl0aGlzW29dLmFkZEV2ZW50TGlzdGVuZXIobFtzXSxpLHIpO2Vsc2UgZm9yKHM9MDtzPGwubGVuZ3RoO3MrKyl0aGlzW29dLmRvbTdMaXZlTGlzdGVuZXJzfHwodGhpc1tvXS5kb203TGl2ZUxpc3RlbmVycz1bXSksdGhpc1tvXS5kb203TGl2ZUxpc3RlbmVycy5wdXNoKHtsaXN0ZW5lcjppLGxpdmVMaXN0ZW5lcjphfSksdGhpc1tvXS5hZGRFdmVudExpc3RlbmVyKGxbc10sYSxyKTtyZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKGUsdCxuLGkpe2Zvcih2YXIgcj1lLnNwbGl0KFwiIFwiKSxhPTA7YTxyLmxlbmd0aDthKyspZm9yKHZhciBvPTA7bzx0aGlzLmxlbmd0aDtvKyspaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8dD09PSExKVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihuPWFyZ3VtZW50c1sxXSxpPWFyZ3VtZW50c1syXXx8ITEpLHRoaXNbb10ucmVtb3ZlRXZlbnRMaXN0ZW5lcihyW2FdLG4saSk7ZWxzZSBpZih0aGlzW29dLmRvbTdMaXZlTGlzdGVuZXJzKWZvcih2YXIgcz0wO3M8dGhpc1tvXS5kb203TGl2ZUxpc3RlbmVycy5sZW5ndGg7cysrKXRoaXNbb10uZG9tN0xpdmVMaXN0ZW5lcnNbc10ubGlzdGVuZXI9PT1uJiZ0aGlzW29dLnJlbW92ZUV2ZW50TGlzdGVuZXIoclthXSx0aGlzW29dLmRvbTdMaXZlTGlzdGVuZXJzW3NdLmxpdmVMaXN0ZW5lcixpKTtyZXR1cm4gdGhpc30sb25jZTpmdW5jdGlvbihlLHQsbixpKXtmdW5jdGlvbiByKG8pe24obyksYS5vZmYoZSx0LHIsaSl9dmFyIGE9dGhpcztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYodD0hMSxuPWFyZ3VtZW50c1sxXSxpPWFyZ3VtZW50c1syXSksYS5vbihlLHQscixpKX0sdHJpZ2dlcjpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bisrKXt2YXIgaTt0cnl7aT1uZXcgd2luZG93LkN1c3RvbUV2ZW50KGUse2RldGFpbDp0LGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pfWNhdGNoKHIpe2k9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSxpLmluaXRFdmVudChlLCEwLCEwKSxpLmRldGFpbD10fXRoaXNbbl0uZGlzcGF0Y2hFdmVudChpKX1yZXR1cm4gdGhpc30sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGEpe2lmKGEudGFyZ2V0PT09dGhpcylmb3IoZS5jYWxsKHRoaXMsYSksbj0wO248aS5sZW5ndGg7bisrKXIub2ZmKGlbbl0sdCl9dmFyIG4saT1bXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXCJ0cmFuc2l0aW9uZW5kXCIsXCJvVHJhbnNpdGlvbkVuZFwiLFwiTVNUcmFuc2l0aW9uRW5kXCIsXCJtc1RyYW5zaXRpb25FbmRcIl0scj10aGlzO2lmKGUpZm9yKG49MDtuPGkubGVuZ3RoO24rKylyLm9uKGlbbl0sdCk7cmV0dXJuIHRoaXN9LHdpZHRoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbMF09PT13aW5kb3c/d2luZG93LmlubmVyV2lkdGg6dGhpcy5sZW5ndGg+MD9wYXJzZUZsb2F0KHRoaXMuY3NzKFwid2lkdGhcIikpOm51bGx9LG91dGVyV2lkdGg6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGVuZ3RoPjA/ZT90aGlzWzBdLm9mZnNldFdpZHRoK3BhcnNlRmxvYXQodGhpcy5jc3MoXCJtYXJnaW4tcmlnaHRcIikpK3BhcnNlRmxvYXQodGhpcy5jc3MoXCJtYXJnaW4tbGVmdFwiKSk6dGhpc1swXS5vZmZzZXRXaWR0aDpudWxsfSxoZWlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1swXT09PXdpbmRvdz93aW5kb3cuaW5uZXJIZWlnaHQ6dGhpcy5sZW5ndGg+MD9wYXJzZUZsb2F0KHRoaXMuY3NzKFwiaGVpZ2h0XCIpKTpudWxsfSxvdXRlckhlaWdodDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5sZW5ndGg+MD9lP3RoaXNbMF0ub2Zmc2V0SGVpZ2h0K3BhcnNlRmxvYXQodGhpcy5jc3MoXCJtYXJnaW4tdG9wXCIpKStwYXJzZUZsb2F0KHRoaXMuY3NzKFwibWFyZ2luLWJvdHRvbVwiKSk6dGhpc1swXS5vZmZzZXRIZWlnaHQ6bnVsbH0sb2Zmc2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5sZW5ndGg+MCl7dmFyIGU9dGhpc1swXSx0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1kb2N1bWVudC5ib2R5LGk9ZS5jbGllbnRUb3B8fG4uY2xpZW50VG9wfHwwLHI9ZS5jbGllbnRMZWZ0fHxuLmNsaWVudExlZnR8fDAsYT13aW5kb3cucGFnZVlPZmZzZXR8fGUuc2Nyb2xsVG9wLG89d2luZG93LnBhZ2VYT2Zmc2V0fHxlLnNjcm9sbExlZnQ7cmV0dXJue3RvcDp0LnRvcCthLWksbGVmdDp0LmxlZnQrby1yfX1yZXR1cm4gbnVsbH0sY3NzOmZ1bmN0aW9uKGUsdCl7dmFyIG47aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXtmb3Iobj0wO248dGhpcy5sZW5ndGg7bisrKWZvcih2YXIgaSBpbiBlKXRoaXNbbl0uc3R5bGVbaV09ZVtpXTtyZXR1cm4gdGhpc31pZih0aGlzWzBdKXJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLG51bGwpLmdldFByb3BlcnR5VmFsdWUoZSl9aWYoMj09PWFyZ3VtZW50cy5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlKXtmb3Iobj0wO248dGhpcy5sZW5ndGg7bisrKXRoaXNbbl0uc3R5bGVbZV09dDtyZXR1cm4gdGhpc31yZXR1cm4gdGhpc30sZWFjaDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyllLmNhbGwodGhpc1t0XSx0LHRoaXNbdF0pO3JldHVybiB0aGlzfSxodG1sOmZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlKXJldHVybiB0aGlzWzBdP3RoaXNbMF0uaW5uZXJIVE1MOnZvaWQgMDtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl0aGlzW3RdLmlubmVySFRNTD1lO3JldHVybiB0aGlzfSxpczpmdW5jdGlvbihuKXtpZighdGhpc1swXSlyZXR1cm4hMTt2YXIgaSxyO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgYT10aGlzWzBdO2lmKGE9PT1kb2N1bWVudClyZXR1cm4gbj09PWRvY3VtZW50O2lmKGE9PT13aW5kb3cpcmV0dXJuIG49PT13aW5kb3c7aWYoYS5tYXRjaGVzKXJldHVybiBhLm1hdGNoZXMobik7aWYoYS53ZWJraXRNYXRjaGVzU2VsZWN0b3IpcmV0dXJuIGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yKG4pO2lmKGEubW96TWF0Y2hlc1NlbGVjdG9yKXJldHVybiBhLm1vek1hdGNoZXNTZWxlY3RvcihuKTtpZihhLm1zTWF0Y2hlc1NlbGVjdG9yKXJldHVybiBhLm1zTWF0Y2hlc1NlbGVjdG9yKG4pO2ZvcihpPXQobikscj0wO3I8aS5sZW5ndGg7cisrKWlmKGlbcl09PT10aGlzWzBdKXJldHVybiEwO3JldHVybiExfWlmKG49PT1kb2N1bWVudClyZXR1cm4gdGhpc1swXT09PWRvY3VtZW50O2lmKG49PT13aW5kb3cpcmV0dXJuIHRoaXNbMF09PT13aW5kb3c7aWYobi5ub2RlVHlwZXx8biBpbnN0YW5jZW9mIGUpe2ZvcihpPW4ubm9kZVR5cGU/W25dOm4scj0wO3I8aS5sZW5ndGg7cisrKWlmKGlbcl09PT10aGlzWzBdKXJldHVybiEwO3JldHVybiExfXJldHVybiExfSxpbmRleDpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe2Zvcih2YXIgZT10aGlzWzBdLHQ9MDtudWxsIT09KGU9ZS5wcmV2aW91c1NpYmxpbmcpOykxPT09ZS5ub2RlVHlwZSYmdCsrO3JldHVybiB0fXJldHVybiB2b2lkIDB9LGVxOmZ1bmN0aW9uKHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0KXJldHVybiB0aGlzO3ZhciBuLGk9dGhpcy5sZW5ndGg7cmV0dXJuIHQ+aS0xP25ldyBlKFtdKTowPnQ/KG49aSt0LG5ldyBlKDA+bj9bXTpbdGhpc1tuXV0pKTpuZXcgZShbdGhpc1t0XV0pfSxhcHBlbmQ6ZnVuY3Rpb24odCl7dmFyIG4saTtmb3Iobj0wO248dGhpcy5sZW5ndGg7bisrKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihyLmlubmVySFRNTD10O3IuZmlyc3RDaGlsZDspdGhpc1tuXS5hcHBlbmRDaGlsZChyLmZpcnN0Q2hpbGQpfWVsc2UgaWYodCBpbnN0YW5jZW9mIGUpZm9yKGk9MDtpPHQubGVuZ3RoO2krKyl0aGlzW25dLmFwcGVuZENoaWxkKHRbaV0pO2Vsc2UgdGhpc1tuXS5hcHBlbmRDaGlsZCh0KTtyZXR1cm4gdGhpc30scHJlcGVuZDpmdW5jdGlvbih0KXt2YXIgbixpO2ZvcihuPTA7bjx0aGlzLmxlbmd0aDtuKyspaWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKHIuaW5uZXJIVE1MPXQsaT1yLmNoaWxkTm9kZXMubGVuZ3RoLTE7aT49MDtpLS0pdGhpc1tuXS5pbnNlcnRCZWZvcmUoci5jaGlsZE5vZGVzW2ldLHRoaXNbbl0uY2hpbGROb2Rlc1swXSl9ZWxzZSBpZih0IGluc3RhbmNlb2YgZSlmb3IoaT0wO2k8dC5sZW5ndGg7aSsrKXRoaXNbbl0uaW5zZXJ0QmVmb3JlKHRbaV0sdGhpc1tuXS5jaGlsZE5vZGVzWzBdKTtlbHNlIHRoaXNbbl0uaW5zZXJ0QmVmb3JlKHQsdGhpc1tuXS5jaGlsZE5vZGVzWzBdKTtcbnJldHVybiB0aGlzfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPXQoZSksaT0wO2k8dGhpcy5sZW5ndGg7aSsrKWlmKDE9PT1uLmxlbmd0aCluWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sblswXSk7ZWxzZSBpZihuLmxlbmd0aD4xKWZvcih2YXIgcj0wO3I8bi5sZW5ndGg7cisrKW5bcl0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUoITApLG5bcl0pfSxpbnNlcnRBZnRlcjpmdW5jdGlvbihlKXtmb3IodmFyIG49dChlKSxpPTA7aTx0aGlzLmxlbmd0aDtpKyspaWYoMT09PW4ubGVuZ3RoKW5bMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSxuWzBdLm5leHRTaWJsaW5nKTtlbHNlIGlmKG4ubGVuZ3RoPjEpZm9yKHZhciByPTA7cjxuLmxlbmd0aDtyKyspbltyXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSghMCksbltyXS5uZXh0U2libGluZyl9LG5leHQ6ZnVuY3Rpb24obil7cmV0dXJuIG5ldyBlKHRoaXMubGVuZ3RoPjA/bj90aGlzWzBdLm5leHRFbGVtZW50U2libGluZyYmdCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMobik/W3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXTpbXTp0aGlzWzBdLm5leHRFbGVtZW50U2libGluZz9bdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddOltdOltdKX0sbmV4dEFsbDpmdW5jdGlvbihuKXt2YXIgaT1bXSxyPXRoaXNbMF07aWYoIXIpcmV0dXJuIG5ldyBlKFtdKTtmb3IoO3IubmV4dEVsZW1lbnRTaWJsaW5nOyl7dmFyIGE9ci5uZXh0RWxlbWVudFNpYmxpbmc7bj90KGEpLmlzKG4pJiZpLnB1c2goYSk6aS5wdXNoKGEpLHI9YX1yZXR1cm4gbmV3IGUoaSl9LHByZXY6ZnVuY3Rpb24obil7cmV0dXJuIG5ldyBlKHRoaXMubGVuZ3RoPjA/bj90aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcmJnQodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhuKT9bdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXTpbXTp0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmc/W3RoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZ106W106W10pfSxwcmV2QWxsOmZ1bmN0aW9uKG4pe3ZhciBpPVtdLHI9dGhpc1swXTtpZighcilyZXR1cm4gbmV3IGUoW10pO2Zvcig7ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyl7dmFyIGE9ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO24/dChhKS5pcyhuKSYmaS5wdXNoKGEpOmkucHVzaChhKSxyPWF9cmV0dXJuIG5ldyBlKGkpfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPVtdLGk9MDtpPHRoaXMubGVuZ3RoO2krKyllP3QodGhpc1tpXS5wYXJlbnROb2RlKS5pcyhlKSYmbi5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk6bi5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7cmV0dXJuIHQodC51bmlxdWUobikpfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe2Zvcih2YXIgbj1bXSxpPTA7aTx0aGlzLmxlbmd0aDtpKyspZm9yKHZhciByPXRoaXNbaV0ucGFyZW50Tm9kZTtyOyllP3QocikuaXMoZSkmJm4ucHVzaChyKTpuLnB1c2gocikscj1yLnBhcmVudE5vZGU7cmV0dXJuIHQodC51bmlxdWUobikpfSxmaW5kOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1bXSxpPTA7aTx0aGlzLmxlbmd0aDtpKyspZm9yKHZhciByPXRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbCh0KSxhPTA7YTxyLmxlbmd0aDthKyspbi5wdXNoKHJbYV0pO3JldHVybiBuZXcgZShuKX0sY2hpbGRyZW46ZnVuY3Rpb24obil7Zm9yKHZhciBpPVtdLHI9MDtyPHRoaXMubGVuZ3RoO3IrKylmb3IodmFyIGE9dGhpc1tyXS5jaGlsZE5vZGVzLG89MDtvPGEubGVuZ3RoO28rKyluPzE9PT1hW29dLm5vZGVUeXBlJiZ0KGFbb10pLmlzKG4pJiZpLnB1c2goYVtvXSk6MT09PWFbb10ubm9kZVR5cGUmJmkucHVzaChhW29dKTtyZXR1cm4gbmV3IGUodC51bmlxdWUoaSkpfSxyZW1vdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHRoaXMubGVuZ3RoO2UrKyl0aGlzW2VdLnBhcmVudE5vZGUmJnRoaXNbZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2VdKTtyZXR1cm4gdGhpc30sYWRkOmZ1bmN0aW9uKCl7dmFyIGUsbixpPXRoaXM7Zm9yKGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgcj10KGFyZ3VtZW50c1tlXSk7Zm9yKG49MDtuPHIubGVuZ3RoO24rKylpW2kubGVuZ3RoXT1yW25dLGkubGVuZ3RoKyt9cmV0dXJuIGl9fSx0LmZuPWUucHJvdG90eXBlLHQudW5pcXVlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxuPTA7bjxlLmxlbmd0aDtuKyspLTE9PT10LmluZGV4T2YoZVtuXSkmJnQucHVzaChlW25dKTtyZXR1cm4gdH0sdH0oKSkscj1bXCJqUXVlcnlcIixcIlplcHRvXCIsXCJEb203XCJdLGE9MDthPHIubGVuZ3RoO2ErKyl3aW5kb3dbclthXV0mJmUod2luZG93W3JbYV1dKTt2YXIgbztvPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBpP3dpbmRvdy5Eb203fHx3aW5kb3cuWmVwdG98fHdpbmRvdy5qUXVlcnk6aSxvJiYoXCJ0cmFuc2l0aW9uRW5kXCJpbiBvLmZufHwoby5mbi50cmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoYSl7aWYoYS50YXJnZXQ9PT10aGlzKWZvcihlLmNhbGwodGhpcyxhKSxuPTA7bjxpLmxlbmd0aDtuKyspci5vZmYoaVtuXSx0KX12YXIgbixpPVtcIndlYmtpdFRyYW5zaXRpb25FbmRcIixcInRyYW5zaXRpb25lbmRcIixcIm9UcmFuc2l0aW9uRW5kXCIsXCJNU1RyYW5zaXRpb25FbmRcIixcIm1zVHJhbnNpdGlvbkVuZFwiXSxyPXRoaXM7aWYoZSlmb3Iobj0wO248aS5sZW5ndGg7bisrKXIub24oaVtuXSx0KTtyZXR1cm4gdGhpc30pLFwidHJhbnNmb3JtXCJpbiBvLmZufHwoby5mbi50cmFuc2Zvcm09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kyspe3ZhciBuPXRoaXNbdF0uc3R5bGU7bi53ZWJraXRUcmFuc2Zvcm09bi5Nc1RyYW5zZm9ybT1uLm1zVHJhbnNmb3JtPW4uTW96VHJhbnNmb3JtPW4uT1RyYW5zZm9ybT1uLnRyYW5zZm9ybT1lfXJldHVybiB0aGlzfSksXCJ0cmFuc2l0aW9uXCJpbiBvLmZufHwoby5mbi50cmFuc2l0aW9uPWZ1bmN0aW9uKGUpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYoZSs9XCJtc1wiKTtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpc1t0XS5zdHlsZTtuLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbj1uLk1zVHJhbnNpdGlvbkR1cmF0aW9uPW4ubXNUcmFuc2l0aW9uRHVyYXRpb249bi5Nb3pUcmFuc2l0aW9uRHVyYXRpb249bi5PVHJhbnNpdGlvbkR1cmF0aW9uPW4udHJhbnNpdGlvbkR1cmF0aW9uPWV9cmV0dXJuIHRoaXN9KSksaW9uaWMudmlld3MuU3dpcGVyPW59KCksZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZS52aWV3cy5Ub2dnbGU9ZS52aWV3cy5WaWV3LmluaGVyaXQoe2luaXRpYWxpemU6ZnVuY3Rpb24odCl7dmFyIG49dGhpczt0aGlzLmVsPXQuZWwsdGhpcy5jaGVja2JveD10LmNoZWNrYm94LHRoaXMudHJhY2s9dC50cmFjayx0aGlzLmhhbmRsZT10LmhhbmRsZSx0aGlzLm9wZW5QZXJjZW50PS0xLHRoaXMub25DaGFuZ2U9dC5vbkNoYW5nZXx8ZnVuY3Rpb24oKXt9LHRoaXMudHJpZ2dlclRocmVzaG9sZD10LnRyaWdnZXJUaHJlc2hvbGR8fDIwLHRoaXMuZHJhZ1N0YXJ0SGFuZGxlcj1mdW5jdGlvbihlKXtuLmRyYWdTdGFydChlKX0sdGhpcy5kcmFnSGFuZGxlcj1mdW5jdGlvbihlKXtuLmRyYWcoZSl9LHRoaXMuaG9sZEhhbmRsZXI9ZnVuY3Rpb24oZSl7bi5ob2xkKGUpfSx0aGlzLnJlbGVhc2VIYW5kbGVyPWZ1bmN0aW9uKGUpe24ucmVsZWFzZShlKX0sdGhpcy5kcmFnU3RhcnRHZXN0dXJlPWUub25HZXN0dXJlKFwiZHJhZ3N0YXJ0XCIsdGhpcy5kcmFnU3RhcnRIYW5kbGVyLHRoaXMuZWwpLHRoaXMuZHJhZ0dlc3R1cmU9ZS5vbkdlc3R1cmUoXCJkcmFnXCIsdGhpcy5kcmFnSGFuZGxlcix0aGlzLmVsKSx0aGlzLmRyYWdIb2xkR2VzdHVyZT1lLm9uR2VzdHVyZShcImhvbGRcIix0aGlzLmhvbGRIYW5kbGVyLHRoaXMuZWwpLHRoaXMuZHJhZ1JlbGVhc2VHZXN0dXJlPWUub25HZXN0dXJlKFwicmVsZWFzZVwiLHRoaXMucmVsZWFzZUhhbmRsZXIsdGhpcy5lbCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtlLm9mZkdlc3R1cmUodGhpcy5kcmFnU3RhcnRHZXN0dXJlLFwiZHJhZ3N0YXJ0XCIsdGhpcy5kcmFnU3RhcnRHZXN0dXJlKSxlLm9mZkdlc3R1cmUodGhpcy5kcmFnR2VzdHVyZSxcImRyYWdcIix0aGlzLmRyYWdHZXN0dXJlKSxlLm9mZkdlc3R1cmUodGhpcy5kcmFnSG9sZEdlc3R1cmUsXCJob2xkXCIsdGhpcy5ob2xkSGFuZGxlciksZS5vZmZHZXN0dXJlKHRoaXMuZHJhZ1JlbGVhc2VHZXN0dXJlLFwicmVsZWFzZVwiLHRoaXMucmVsZWFzZUhhbmRsZXIpfSx0YXA6ZnVuY3Rpb24oKXtcImRpc2FibGVkXCIhPT10aGlzLmVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpJiZ0aGlzLnZhbCghdGhpcy5jaGVja2JveC5jaGVja2VkKX0sZHJhZ1N0YXJ0OmZ1bmN0aW9uKGUpe3RoaXMuY2hlY2tib3guZGlzYWJsZWR8fCh0aGlzLl9kcmFnSW5mbz17d2lkdGg6dGhpcy5lbC5vZmZzZXRXaWR0aCxsZWZ0OnRoaXMuZWwub2Zmc2V0TGVmdCxyaWdodDp0aGlzLmVsLm9mZnNldExlZnQrdGhpcy5lbC5vZmZzZXRXaWR0aCx0cmlnZ2VyWDp0aGlzLmVsLm9mZnNldFdpZHRoLzIsaW5pdGlhbFN0YXRlOnRoaXMuY2hlY2tib3guY2hlY2tlZH0sZS5nZXN0dXJlLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCksdGhpcy5ob2xkKGUpKX0sZHJhZzpmdW5jdGlvbih0KXt2YXIgbj10aGlzO3RoaXMuX2RyYWdJbmZvJiYodC5nZXN0dXJlLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCksZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihuLl9kcmFnSW5mbyl7dmFyIGU9dC5nZXN0dXJlLnRvdWNoZXNbMF0ucGFnZVgtbi5fZHJhZ0luZm8ubGVmdCxpPW4uX2RyYWdJbmZvLndpZHRoLW4udHJpZ2dlclRocmVzaG9sZDtuLl9kcmFnSW5mby5pbml0aWFsU3RhdGU/ZTxuLnRyaWdnZXJUaHJlc2hvbGQ/bi5zZXRPcGVuUGVyY2VudCgwKTplPm4uX2RyYWdJbmZvLnRyaWdnZXJYJiZuLnNldE9wZW5QZXJjZW50KDEwMCk6ZTxuLl9kcmFnSW5mby50cmlnZ2VyWD9uLnNldE9wZW5QZXJjZW50KDApOmU+aSYmbi5zZXRPcGVuUGVyY2VudCgxMDApfX0pKX0sZW5kRHJhZzpmdW5jdGlvbigpe3RoaXMuX2RyYWdJbmZvPW51bGx9LGhvbGQ6ZnVuY3Rpb24oKXt0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKX0scmVsZWFzZTpmdW5jdGlvbihlKXt0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKSx0aGlzLmVuZERyYWcoZSl9LHNldE9wZW5QZXJjZW50OmZ1bmN0aW9uKHQpe2lmKHRoaXMub3BlblBlcmNlbnQ8MHx8dDx0aGlzLm9wZW5QZXJjZW50LTN8fHQ+dGhpcy5vcGVuUGVyY2VudCszKWlmKHRoaXMub3BlblBlcmNlbnQ9dCwwPT09dCl0aGlzLnZhbCghMSk7ZWxzZSBpZigxMDA9PT10KXRoaXMudmFsKCEwKTtlbHNle3ZhciBuPU1hdGgucm91bmQodC8xMDAqdGhpcy50cmFjay5vZmZzZXRXaWR0aC10aGlzLmhhbmRsZS5vZmZzZXRXaWR0aCk7bj0xPm4/MDpuLHRoaXMuaGFuZGxlLnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJ0cmFuc2xhdGUzZChcIituK1wicHgsMCwwKVwifX0sdmFsOmZ1bmN0aW9uKHQpe3JldHVybih0PT09ITB8fHQ9PT0hMSkmJihcIlwiIT09dGhpcy5oYW5kbGUuc3R5bGVbZS5DU1MuVFJBTlNGT1JNXSYmKHRoaXMuaGFuZGxlLnN0eWxlW2UuQ1NTLlRSQU5TRk9STV09XCJcIiksdGhpcy5jaGVja2JveC5jaGVja2VkPXQsdGhpcy5vcGVuUGVyY2VudD10PzEwMDowLHRoaXMub25DaGFuZ2UmJnRoaXMub25DaGFuZ2UoKSksdGhpcy5jaGVja2JveC5jaGVja2VkfX0pfShpb25pYyl9KCk7Il19
