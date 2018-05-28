/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * EaselJS
 * Visit https://createjs.com for documentation, updates and examples.
 *
 * Copyright (c) 2017 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopDefault(ex) {
  return ex && (typeof ex === "undefined" ? "undefined" : _typeof(ex)) === "object" && "default" in ex ? ex["default"] : ex;
}

var Tween = _interopDefault(__webpack_require__(1));

var Timeline = _interopDefault(__webpack_require__(11));

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var StageGL = function StageGL() {
  classCallCheck(this, StageGL);
  throw new Error("\n\t\t\tStageGL is not currently supported on the EaselJS 2.0 branch.\n\t\t\tEnd of Q1 2018 is targetted for StageGL support.\n\t\t\tFollow @CreateJS on Twitter for updates.\n\t\t");
};

var Event = function () {
  function Event(type) {
    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    classCallCheck(this, Event);
    this.type = type;
    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
    this.timeStamp = new Date().getTime();
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.removed = false;
  }
  Event.prototype.preventDefault = function preventDefault() {
    this.defaultPrevented = this.cancelable;
    return this;
  };
  Event.prototype.stopPropagation = function stopPropagation() {
    this.propagationStopped = true;
    return this;
  };
  Event.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
    return this;
  };
  Event.prototype.remove = function remove() {
    this.removed = true;
    return this;
  };
  Event.prototype.clone = function clone() {
    var event = new Event(this.type, this.bubbles, this.cancelable);
    for (var n in this) {
      if (this.hasOwnProperty(n)) {
        event[n] = this[n];
      }
    }
    return event;
  };
  Event.prototype.set = function set(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  Event.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (type=" + this.type + ")]";
  };
  return Event;
}();

var EventDispatcher = function () {
  EventDispatcher.initialize = function initialize(target) {
    var p = EventDispatcher.prototype;
    target.addEventListener = p.addEventListener;
    target.on = p.on;
    target.removeEventListener = target.off = p.removeEventListener;
    target.removeAllEventListeners = p.removeAllEventListeners;
    target.hasEventListener = p.hasEventListener;
    target.dispatchEvent = p.dispatchEvent;
    target._dispatchEvent = p._dispatchEvent;
    target.willTrigger = p.willTrigger;
  };
  function EventDispatcher() {
    classCallCheck(this, EventDispatcher);
    this._listeners = null;
    this._captureListeners = null;
  }
  EventDispatcher.prototype.addEventListener = function addEventListener(type, listener) {
    var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var listeners = void 0;
    if (useCapture) {
      listeners = this._captureListeners = this._captureListeners || {};
    } else {
      listeners = this._listeners = this._listeners || {};
    }
    var arr = listeners[type];
    if (arr) {
      this.removeEventListener(type, listener, useCapture);
      arr = listeners[type];
    }
    if (arr) {
      arr.push(listener);
    } else {
      listeners[type] = [listener];
    }
    return listener;
  };
  EventDispatcher.prototype.on = function on(type, listener) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var useCapture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    if (listener.handleEvent) {
      scope = scope || listener;
      listener = listener.handleEvent;
    }
    scope = scope || this;
    return this.addEventListener(type, function (evt) {
      listener.call(scope, evt, data);
      once && evt.remove();
    }, useCapture);
  };
  EventDispatcher.prototype.removeEventListener = function removeEventListener(type, listener) {
    var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var listeners = useCapture ? this._captureListeners : this._listeners;
    if (!listeners) {
      return;
    }
    var arr = listeners[type];
    if (!arr) {
      return;
    }
    var l = arr.length;
    for (var i = 0; i < l; i++) {
      if (arr[i] === listener) {
        if (l === 1) {
          delete listeners[type];
        } else {
          arr.splice(i, 1);
        }
        break;
      }
    }
  };
  EventDispatcher.prototype.off = function off(type, listener) {
    var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.removeEventListener(type, listener, useCapture);
  };
  EventDispatcher.prototype.removeAllEventListeners = function removeAllEventListeners() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (type) {
      if (this._listeners) {
        delete this._listeners[type];
      }
      if (this._captureListeners) {
        delete this._captureListeners[type];
      }
    } else {
      this._listeners = this._captureListeners = null;
    }
  };
  EventDispatcher.prototype.dispatchEvent = function dispatchEvent(eventObj) {
    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (typeof eventObj === "string") {
      var listeners = this._listeners;
      if (!bubbles && (!listeners || !listeners[eventObj])) {
        return true;
      }
      eventObj = new Event(eventObj, bubbles, cancelable);
    } else if (eventObj.target && eventObj.clone) {
      eventObj = eventObj.clone();
    }
    try {
      eventObj.target = this;
    } catch (e) {}
    if (!eventObj.bubbles || !this.parent) {
      this._dispatchEvent(eventObj, 2);
    } else {
      var top = this;
      var list = [top];
      while (top.parent) {
        list.push(top = top.parent);
      }
      var l = list.length;
      var i = void 0;
      for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
        list[i]._dispatchEvent(eventObj, 1 + (i == 0));
      }
      for (i = 1; i < l && !eventObj.propagationStopped; i++) {
        list[i]._dispatchEvent(eventObj, 3);
      }
    }
    return !eventObj.defaultPrevented;
  };
  EventDispatcher.prototype.hasEventListener = function hasEventListener(type) {
    var listeners = this._listeners,
        captureListeners = this._captureListeners;
    return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
  };
  EventDispatcher.prototype.willTrigger = function willTrigger(type) {
    var o = this;
    while (o) {
      if (o.hasEventListener(type)) {
        return true;
      }
      o = o.parent;
    }
    return false;
  };
  EventDispatcher.prototype.toString = function toString() {
    return "[" + (this.constructor.name + this.name ? " " + this.name : "") + "]";
  };
  EventDispatcher.prototype._dispatchEvent = function _dispatchEvent(eventObj, eventPhase) {
    var listeners = eventPhase === 1 ? this._captureListeners : this._listeners;
    if (eventObj && listeners) {
      var arr = listeners[eventObj.type];
      var l = void 0;
      if (!arr || (l = arr.length) === 0) {
        return;
      }
      try {
        eventObj.currentTarget = this;
      } catch (e) {}
      try {
        eventObj.eventPhase = eventPhase;
      } catch (e) {}
      eventObj.removed = false;
      arr = arr.slice();
      for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
        var o = arr[i];
        if (o.handleEvent) {
          o.handleEvent(eventObj);
        } else {
          o(eventObj);
        }
        if (eventObj.removed) {
          this.off(eventObj.type, o, eventPhase === 1);
          eventObj.removed = false;
        }
      }
    }
  };
  return EventDispatcher;
}();

var _nextID = 0;

var UID = function () {
  function UID() {
    classCallCheck(this, UID);
    throw "UID cannot be instantiated";
  }
  UID.get = function get() {
    return UID._nextID++;
  };
  createClass(UID, null, [{
    key: "_nextID",
    get: function get() {
      return _nextID;
    },
    set: function set(nextID) {
      _nextID = nextID;
    }
  }]);
  return UID;
}();

var Point = function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    classCallCheck(this, Point);
    this.setValues(x, y);
  }
  Point.prototype.setValues = function setValues() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.x = x;
    this.y = y;
    return this;
  };
  Point.prototype.copy = function copy(point) {
    this.x = point.x;
    this.y = point.y;
    return this;
  };
  Point.prototype.clone = function clone() {
    return new Point(this.x, this.y);
  };
  Point.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (x=" + this.x + " y=" + this.y + ")]";
  };
  return Point;
}();

var Matrix2D = function () {
  function Matrix2D() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    classCallCheck(this, Matrix2D);
    this.setValues(a, b, c, d, tx, ty);
  }
  Matrix2D.prototype.setValues = function setValues() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix2D.prototype.append = function append(a, b, c, d, tx, ty) {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    if (a != 1 || b != 0 || c != 0 || d != 1) {
      this.a = a1 * a + c1 * b;
      this.b = b1 * a + d1 * b;
      this.c = a1 * c + c1 * d;
      this.d = b1 * c + d1 * d;
    }
    this.tx = a1 * tx + c1 * ty + this.tx;
    this.ty = b1 * tx + d1 * ty + this.ty;
    return this;
  };
  Matrix2D.prototype.prepend = function prepend(a, b, c, d, tx, ty) {
    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;
    this.a = a * a1 + c * this.b;
    this.b = b * a1 + d * this.b;
    this.c = a * c1 + c * this.d;
    this.d = b * c1 + d * this.d;
    this.tx = a * tx1 + c * this.ty + tx;
    this.ty = b * tx1 + d * this.ty + ty;
    return this;
  };
  Matrix2D.prototype.appendMatrix = function appendMatrix(matrix) {
    return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  Matrix2D.prototype.prependMatrix = function prependMatrix(matrix) {
    return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  Matrix2D.prototype.appendTransform = function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    var r = void 0,
        cos = void 0,
        sin = void 0;
    if (rotation % 360) {
      r = rotation * Matrix2D.DEG_TO_RAD;
      cos = Math.cos(r);
      sin = Math.sin(r);
    } else {
      cos = 1;
      sin = 0;
    }
    if (skewX || skewY) {
      skewX *= Matrix2D.DEG_TO_RAD;
      skewY *= Matrix2D.DEG_TO_RAD;
      this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
    } else {
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
    if (regX || regY) {
      this.tx -= regX * this.a + regY * this.c;
      this.ty -= regX * this.b + regY * this.d;
    }
    return this;
  };
  Matrix2D.prototype.prependTransform = function prependTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    var r = void 0,
        cos = void 0,
        sin = void 0;
    if (rotation % 360) {
      r = rotation * Matrix2D.DEG_TO_RAD;
      cos = Math.cos(r);
      sin = Math.sin(r);
    } else {
      cos = 1;
      sin = 0;
    }
    if (regX || regY) {
      this.tx -= regX;
      this.ty -= regY;
    }
    if (skewX || skewY) {
      skewX *= Matrix2D.DEG_TO_RAD;
      skewY *= Matrix2D.DEG_TO_RAD;
      this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
      this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
    } else {
      this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
    return this;
  };
  Matrix2D.prototype.rotate = function rotate(angle) {
    angle *= Matrix2D.DEG_TO_RAD;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var a1 = this.a;
    var b1 = this.b;
    this.a = a1 * cos + this.c * sin;
    this.b = b1 * cos + this.d * sin;
    this.c = -a1 * sin + this.c * cos;
    this.d = -b1 * sin + this.d * cos;
    return this;
  };
  Matrix2D.prototype.skew = function skew(skewX, skewY) {
    skewX *= Matrix2D.DEG_TO_RAD;
    skewY *= Matrix2D.DEG_TO_RAD;
    this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
    return this;
  };
  Matrix2D.prototype.scale = function scale(x, y) {
    this.a *= x;
    this.b *= x;
    this.c *= y;
    this.d *= y;
    return this;
  };
  Matrix2D.prototype.translate = function translate(x, y) {
    this.tx += this.a * x + this.c * y;
    this.ty += this.b * x + this.d * y;
    return this;
  };
  Matrix2D.prototype.identity = function identity() {
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
    return this;
  };
  Matrix2D.prototype.invert = function invert() {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    var tx1 = this.tx;
    var n = a1 * d1 - b1 * c1;
    this.a = d1 / n;
    this.b = -b1 / n;
    this.c = -c1 / n;
    this.d = a1 / n;
    this.tx = (c1 * this.ty - d1 * tx1) / n;
    this.ty = -(a1 * this.ty - b1 * tx1) / n;
    return this;
  };
  Matrix2D.prototype.isIdentity = function isIdentity() {
    return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
  };
  Matrix2D.prototype.equals = function equals(matrix) {
    return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d;
  };
  Matrix2D.prototype.transformPoint = function transformPoint(x, y) {
    var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Point();
    pt.x = x * this.a + y * this.c + this.tx;
    pt.y = x * this.b + y * this.d + this.ty;
    return pt;
  };
  Matrix2D.prototype.decompose = function decompose() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    target.x = this.tx;
    target.y = this.ty;
    target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
    target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
    var skewX = Math.atan2(-this.c, this.d);
    var skewY = Math.atan2(this.b, this.a);
    var delta = Math.abs(1 - skewX / skewY);
    if (delta < 1e-5) {
      target.rotation = skewY / Matrix2D.DEG_TO_RAD;
      if (this.a < 0 && this.d >= 0) {
        target.rotation += target.rotation <= 0 ? 180 : -180;
      }
      target.skewX = target.skewY = 0;
    } else {
      target.skewX = skewX / Matrix2D.DEG_TO_RAD;
      target.skewY = skewY / Matrix2D.DEG_TO_RAD;
    }
    return target;
  };
  Matrix2D.prototype.copy = function copy(matrix) {
    return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  Matrix2D.prototype.clone = function clone() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  Matrix2D.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
  };
  return Matrix2D;
}();

{
  Matrix2D.DEG_TO_RAD = Math.PI / 180;
  Matrix2D.identity = new Matrix2D();
}

var DisplayProps = function () {
  function DisplayProps() {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var shadow = arguments[2];
    var compositeOperation = arguments[3];
    var matrix = arguments[4];
    classCallCheck(this, DisplayProps);
    this.setValues(visible, alpha, shadow, compositeOperation, matrix);
  }
  DisplayProps.prototype.setValues = function setValues() {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var shadow = arguments[2];
    var compositeOperation = arguments[3];
    var matrix = arguments[4];
    this.visible = visible;
    this.alpha = alpha;
    this.shadow = shadow;
    this.compositeOperation = compositeOperation;
    this.matrix = matrix || this.matrix && this.matrix.identity() || new Matrix2D();
    return this;
  };
  DisplayProps.prototype.append = function append(visible, alpha, shadow, compositeOperation, matrix) {
    this.alpha *= alpha;
    this.shadow = shadow || this.shadow;
    this.compositeOperation = compositeOperation || this.compositeOperation;
    this.visible = this.visible && visible;
    matrix && this.matrix.appendMatrix(matrix);
    return this;
  };
  DisplayProps.prototype.prepend = function prepend(visible, alpha, shadow, compositeOperation, matrix) {
    this.alpha *= alpha;
    this.shadow = this.shadow || shadow;
    this.compositeOperation = this.compositeOperation || compositeOperation;
    this.visible = this.visible && visible;
    matrix && this.matrix.prependMatrix(matrix);
    return this;
  };
  DisplayProps.prototype.identity = function identity() {
    this.visible = true;
    this.alpha = 1;
    this.shadow = this.compositeOperation = null;
    this.matrix.identity();
    return this;
  };
  DisplayProps.prototype.clone = function clone() {
    return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
  };
  return DisplayProps;
}();

var Rectangle = function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    classCallCheck(this, Rectangle);
    this.setValues(x, y, width, height);
  }
  Rectangle.prototype.setValues = function setValues() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.extend = function extend(x, y) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (x + width > this.x + this.width) {
      this.width = x + width - this.x;
    }
    if (y + height > this.y + this.height) {
      this.height = y + height - this.y;
    }
    if (x < this.x) {
      this.width += this.x - x;
      this.x = x;
    }
    if (y < this.y) {
      this.height += this.y - y;
      this.y = y;
    }
    return this;
  };
  Rectangle.prototype.pad = function pad(top, left, bottom, right) {
    this.x -= left;
    this.y -= top;
    this.width += left + right;
    this.height += top + bottom;
    return this;
  };
  Rectangle.prototype.copy = function copy(rectangle) {
    return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  Rectangle.prototype.contains = function contains(x, y) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height;
  };
  Rectangle.prototype.union = function union(rect) {
    return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
  };
  Rectangle.prototype.intersection = function intersection(rect) {
    var x1 = rect.x,
        y1 = rect.y,
        x2 = x1 + rect.width,
        y2 = y1 + rect.height;
    if (this.x > x1) {
      x1 = this.x;
    }
    if (this.y > y1) {
      y1 = this.y;
    }
    if (this.x + this.width < x2) {
      x2 = this.x + this.width;
    }
    if (this.y + this.height < y2) {
      y2 = this.y + this.height;
    }
    return x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1);
  };
  Rectangle.prototype.intersects = function intersects(rect) {
    return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height;
  };
  Rectangle.prototype.isEmpty = function isEmpty() {
    return this.width <= 0 || this.height <= 0;
  };
  Rectangle.prototype.clone = function clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  Rectangle.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
  };
  return Rectangle;
}();

var Filter = function () {
  function Filter() {
    classCallCheck(this, Filter);
    this.usesContext = false;
    this._multiPass = null;
    this.VTX_SHADER_BODY = null;
    this.FRAG_SHADER_BODY = null;
  }
  Filter.prototype.getBounds = function getBounds(rect) {
    return rect;
  };
  Filter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {};
  Filter.prototype.applyFilter = function applyFilter(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    targetCtx = targetCtx || ctx;
    if (targetX == null) {
      targetX = x;
    }
    if (targetY == null) {
      targetY = y;
    }
    try {
      var imageData = ctx.getImageData(x, y, width, height);
      if (this._applyFilter(imageData)) {
        targetCtx.putImageData(imageData, targetX, targetY);
        return true;
      }
    } catch (e) {}
    return false;
  };
  Filter.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  Filter.prototype.clone = function clone() {
    return new Filter();
  };
  Filter.prototype._applyFilter = function _applyFilter(imageData) {
    return true;
  };
  return Filter;
}();

var BitmapCache = function (_Filter) {
  inherits(BitmapCache, _Filter);
  function BitmapCache() {
    classCallCheck(this, BitmapCache);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this.width = undefined;
    _this.height = undefined;
    _this.x = undefined;
    _this.y = undefined;
    _this.scale = 1;
    _this.offX = 0;
    _this.offY = 0;
    _this.cacheID = 0;
    _this._filterOffX = 0;
    _this._filterOffY = 0;
    _this._cacheDataURLID = 0;
    _this._cacheDataURL = null;
    _this._drawWidth = 0;
    _this._drawHeight = 0;
    _this._boundRect = new Rectangle();
    return _this;
  }
  BitmapCache.getFilterBounds = function getFilterBounds(target) {
    var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rectangle();
    var filters = target.filters;
    var filterCount = filters && filters.length;
    if (!!filterCount <= 0) {
      return output;
    }
    for (var i = 0; i < filterCount; i++) {
      var f = filters[i];
      if (!f || !f.getBounds) {
        continue;
      }
      var test = f.getBounds();
      if (!test) {
        continue;
      }
      if (i == 0) {
        output.setValues(test.x, test.y, test.width, test.height);
      } else {
        output.extend(test.x, test.y, test.width, test.height);
      }
    }
    return output;
  };
  BitmapCache.prototype.define = function define(target) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var options = arguments[6];
    if (!target) {
      throw "No symbol to cache";
    }
    this._options = options;
    this._useWebGL = options !== undefined;
    this.target = target;
    this.width = width >= 1 ? width : 1;
    this.height = height >= 1 ? height : 1;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.update();
  };
  BitmapCache.prototype.update = function update(compositeOperation) {
    if (!this.target) {
      throw "define() must be called before update()";
    }
    var filterBounds = BitmapCache.getFilterBounds(this.target);
    var surface = this.target.cacheCanvas;
    this._drawWidth = Math.ceil(this.width * this.scale) + filterBounds.width;
    this._drawHeight = Math.ceil(this.height * this.scale) + filterBounds.height;
    if (!surface || this._drawWidth != surface.width || this._drawHeight != surface.height) {
      this._updateSurface();
    }
    this._filterOffX = filterBounds.x;
    this._filterOffY = filterBounds.y;
    this.offX = this.x * this.scale + this._filterOffX;
    this.offY = this.y * this.scale + this._filterOffY;
    this._drawToCache(compositeOperation);
    this.cacheID = this.cacheID ? this.cacheID + 1 : 1;
  };
  BitmapCache.prototype.release = function release() {
    var stage = this.target.stage;
    if (this._useWebGL && this._webGLCache) {
      if (!this._webGLCache.isCacheControlled) {
        if (this.__lastRT) {
          this.__lastRT = undefined;
        }
        if (this.__rtA) {
          this._webGLCache._killTextureObject(this.__rtA);
        }
        if (this.__rtB) {
          this._webGLCache._killTextureObject(this.__rtB);
        }
        if (this.target && this.target.cacheCanvas) {
          this._webGLCache._killTextureObject(this.target.cacheCanvas);
        }
      }
      this._webGLCache = false;
    } else if (stage instanceof StageGL) {
      stage.releaseTexture(this.target.cacheCanvas);
    }
    this.target = this.target.cacheCanvas = null;
    this.cacheID = this._cacheDataURLID = this._cacheDataURL = undefined;
    this.width = this.height = this.x = this.y = this.offX = this.offY = 0;
    this.scale = 1;
  };
  BitmapCache.prototype.getCacheDataURL = function getCacheDataURL() {
    var cacheCanvas = this.target && this.target.cacheCanvas;
    if (!cacheCanvas) {
      return null;
    }
    if (this.cacheID != this._cacheDataURLID) {
      this._cacheDataURLID = this.cacheID;
      this._cacheDataURL = cacheCanvas.toDataURL ? cacheCanvas.toDataURL() : null;
    }
    return this._cacheDataURL;
  };
  BitmapCache.prototype.draw = function draw(ctx) {
    if (!this.target) {
      return false;
    }
    ctx.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale);
    return true;
  };
  BitmapCache.prototype.getBounds = function getBounds() {
    var scale = this.scale;
    return this._boundRect.setValue(this._filterOffX / scale, this._filterOffY / scale, this.width / scale, this.height / scale);
  };
  BitmapCache.prototype._updateSurface = function _updateSurface() {
    var surface = void 0;
    if (!this._useWebGL) {
      surface = this.target.cacheCanvas;
      if (!surface) {
        surface = this.target.cacheCanvas = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
      }
      surface.width = this._drawWidth;
      surface.height = this._drawHeight;
      return;
    }
    if (!this._webGLCache) {
      if (this._options.useGL === "stage") {
        if (!(this.target.stage != null && this.target.stage.isWebGL)) {
          throw "Cannot use 'stage' for cache because the object's parent stage is " + (this.target.stage != null ? "non WebGL." : "not set, please addChild to the correct stage.");
        }
        this.target.cacheCanvas = true;
        this._webGLCache = this.target.stage;
      } else if (this._options.useGL === "new") {
        this.target.cacheCanvas = document.createElement("canvas");
        this._webGLCache = new StageGL(this.target.cacheCanvas, {
          antialias: true,
          transparent: true,
          autoPurge: -1
        });
        this._webGLCache.isCacheControlled = true;
      } else {
        throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
      }
    }
    var stageGL = this._webGLCache;
    surface = this.target.cacheCanvas;
    if (stageGL.isCacheControlled) {
      surface.width = this._drawWidth;
      surface.height = this._drawHeight;
      stageGL.updateViewport(this._drawWidth, this._drawHeight);
    }
    if (this.target.filters) {
      stageGL.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight);
      stageGL.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight);
    } else if (!stageGL.isCacheControlled) {
      stageGL.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight);
    }
  };
  BitmapCache.prototype._drawToCache = function _drawToCache(compositeOperation) {
    var target = this.target;
    var surface = target.cacheCanvas;
    var webGL = this._webGLCache;
    if (!this._useWebGL || !webGL) {
      var ctx = surface.getContext("2d");
      if (!compositeOperation) {
        ctx.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1);
      }
      ctx.save();
      ctx.globalCompositeOperation = compositeOperation;
      ctx.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY);
      ctx.translate(-this.x, -this.y);
      target.draw(ctx, true);
      ctx.restore();
      if (target.filters && target.filters.length) {
        this._applyFilters(target);
      }
      surface._invalid = true;
      return;
    }
    this._webGLCache.cacheDraw(target, target.filters, this);
    surface = this.target.cacheCanvas;
    surface.width = this._drawWidth;
    surface.height = this._drawHeight;
    surface._invalid = true;
  };
  BitmapCache.prototype._applyFilters = function _applyFilters() {
    var surface = this.target.cacheCanvas;
    var filters = this.target.filters;
    var w = this._drawWidth;
    var h = this._drawHeight;
    var data = surface.getContext("2d").getImageData(0, 0, w, h);
    var l = filters.length;
    for (var i = 0; i < l; i++) {
      filters[i]._applyFilter(data);
    }
    surface.getContext("2d").putImageData(data, 0, 0);
  };
  return BitmapCache;
}(Filter);

var DisplayObject = function (_EventDispatcher) {
  inherits(DisplayObject, _EventDispatcher);
  function DisplayObject() {
    classCallCheck(this, DisplayObject);
    var _this = possibleConstructorReturn(this, _EventDispatcher.call(this));
    _this.alpha = 1;
    _this.cacheCanvas = null;
    _this.bitmapCache = null;
    _this.id = UID.get();
    _this.mouseEnabled = true;
    _this.tickEnabled = true;
    _this.name = null;
    _this.parent = null;
    _this.regX = 0;
    _this.regY = 0;
    _this.rotation = 0;
    _this.scaleX = 1;
    _this.scaleY = 1;
    _this.skewX = 0;
    _this.skewY = 0;
    _this.shadow = null;
    _this.visible = true;
    _this.x = 0;
    _this.y = 0;
    _this.transformMatrix = null;
    _this.compositeOperation = null;
    _this.snapToPixel = true;
    _this.filters = null;
    _this.mask = null;
    _this.hitArea = null;
    _this.cursor = null;
    _this._props = new DisplayProps();
    _this._rectangle = new Rectangle();
    _this._bounds = null;
    _this._webGLRenderStyle = DisplayObject._StageGL_NONE;
    return _this;
  }
  DisplayObject.prototype.isVisible = function isVisible() {
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
  };
  DisplayObject.prototype.draw = function draw(ctx) {
    var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return this.drawCache(ctx, ignoreCache);
  };
  DisplayObject.prototype.drawCache = function drawCache(ctx) {
    var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cache = this.bitmapCache;
    if (cache && !ignoreCache) {
      return cache.draw(ctx);
    }
    return false;
  };
  DisplayObject.prototype.updateContext = function updateContext(ctx) {
    var o = this,
        mask = o.mask,
        mtx = o._props.matrix;
    if (mask && mask.graphics && !mask.graphics.isEmpty()) {
      mask.getMatrix(mtx);
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      mask.graphics.drawAsPath(ctx);
      ctx.clip();
      mtx.invert();
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }
    this.getMatrix(mtx);
    var tx = mtx.tx,
        ty = mtx.ty;
    if (DisplayObject._snapToPixelEnabled && o.snapToPixel) {
      tx = tx + (tx < 0 ? -.5 : .5) | 0;
      ty = ty + (ty < 0 ? -.5 : .5) | 0;
    }
    ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty);
    ctx.globalAlpha *= o.alpha;
    if (o.compositeOperation) {
      ctx.globalCompositeOperation = o.compositeOperation;
    }
    if (o.shadow) {
      this._applyShadow(ctx, o.shadow);
    }
  };
  DisplayObject.prototype.cache = function cache(x, y, width, height) {
    var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var options = arguments[5];
    if (!this.bitmapCache) {
      this.bitmapCache = new BitmapCache();
    }
    this.bitmapCache.define(this, x, y, width, height, scale, options);
  };
  DisplayObject.prototype.updateCache = function updateCache(compositeOperation) {
    if (!this.bitmapCache) {
      throw "cache() must be called before updateCache()";
    }
    this.bitmapCache.update(compositeOperation);
  };
  DisplayObject.prototype.uncache = function uncache() {
    if (this.bitmapCache) {
      this.bitmapCache.release();
      this.bitmapCache = undefined;
    }
  };
  DisplayObject.prototype.getCacheDataURL = function getCacheDataURL() {
    return this.bitmapCache ? this.bitmapCache.getDataURL() : null;
  };
  DisplayObject.prototype.localToGlobal = function localToGlobal(x, y) {
    var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Point();
    return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x, y, pt);
  };
  DisplayObject.prototype.globalToLocal = function globalToLocal(x, y) {
    var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Point();
    return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x, y, pt);
  };
  DisplayObject.prototype.localToLocal = function localToLocal(x, y, target, pt) {
    pt = this.localToGlobal(x, y, pt);
    return target.globalToLocal(pt.x, pt.y, pt);
  };
  DisplayObject.prototype.setTransform = function setTransform() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var scaleY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var skewX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var skewY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var regX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var regY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.rotation = rotation;
    this.skewX = skewX;
    this.skewY = skewY;
    this.regX = regX;
    this.regY = regY;
    return this;
  };
  DisplayObject.prototype.getMatrix = function getMatrix(matrix) {
    var o = this,
        mtx = matrix && matrix.identity() || new Matrix2D();
    return o.transformMatrix ? mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
  };
  DisplayObject.prototype.getConcatenatedMatrix = function getConcatenatedMatrix(matrix) {
    var o = this,
        mtx = this.getMatrix(matrix);
    while (o = o.parent) {
      mtx.prependMatrix(o.getMatrix(o._props.matrix));
    }
    return mtx;
  };
  DisplayObject.prototype.getConcatenatedDisplayProps = function getConcatenatedDisplayProps(props) {
    props = props ? props.identity() : new DisplayProps();
    var o = this,
        mtx = o.getMatrix(props.matrix);
    do {
      props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
      if (o != this) {
        mtx.prependMatrix(o.getMatrix(o._props.matrix));
      }
    } while (o = o.parent);
    return props;
  };
  DisplayObject.prototype.hitTest = function hitTest(x, y) {
    var ctx = DisplayObject._hitTestContext;
    ctx.setTransform(1, 0, 0, 1, -x, -y);
    this.draw(ctx);
    var hit = this._testHit(ctx);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, 2, 2);
    return hit;
  };
  DisplayObject.prototype.set = function set(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  DisplayObject.prototype.getBounds = function getBounds() {
    if (this._bounds) {
      return this._rectangle.copy(this._bounds);
    }
    var cacheCanvas = this.cacheCanvas;
    if (cacheCanvas) {
      var scale = this._cacheScale;
      return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale);
    }
    return null;
  };
  DisplayObject.prototype.getTransformedBounds = function getTransformedBounds() {
    return this._getBounds();
  };
  DisplayObject.prototype.setBounds = function setBounds(x, y, width, height) {
    if (x == null) {
      this._bounds = x;
    }
    this._bounds = (this._bounds || new Rectangle()).setValues(x, y, width, height);
  };
  DisplayObject.prototype.clone = function clone() {
    return this._cloneProps(new DisplayObject());
  };
  DisplayObject.prototype.toString = function toString() {
    return "[" + this.constructor.name + (this.name ? " (name=" + this.name + ")" : "") + "]";
  };
  DisplayObject.prototype._cloneProps = function _cloneProps(o) {
    o.alpha = this.alpha;
    o.mouseEnabled = this.mouseEnabled;
    o.tickEnabled = this.tickEnabled;
    o.name = this.name;
    o.regX = this.regX;
    o.regY = this.regY;
    o.rotation = this.rotation;
    o.scaleX = this.scaleX;
    o.scaleY = this.scaleY;
    o.shadow = this.shadow;
    o.skewX = this.skewX;
    o.skewY = this.skewY;
    o.visible = this.visible;
    o.x = this.x;
    o.y = this.y;
    o.compositeOperation = this.compositeOperation;
    o.snapToPixel = this.snapToPixel;
    o.filters = this.filters == null ? null : this.filters.slice(0);
    o.mask = this.mask;
    o.hitArea = this.hitArea;
    o.cursor = this.cursor;
    o._bounds = this._bounds;
    return o;
  };
  DisplayObject.prototype._applyShadow = function _applyShadow(ctx) {
    var shadow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Shadow.identity;
    shadow = shadow;
    ctx.shadowColor = shadow.color;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    ctx.shadowBlur = shadow.blur;
  };
  DisplayObject.prototype._tick = function _tick(evtObj) {
    var ls = this._listeners;
    if (ls && ls["tick"]) {
      evtObj.target = null;
      evtObj.propagationStopped = evtObj.immediatePropagationStopped = false;
      this.dispatchEvent(evtObj);
    }
  };
  DisplayObject.prototype._testHit = function _testHit(ctx) {
    try {
      return ctx.getImageData(0, 0, 1, 1).data[3] > 1;
    } catch (e) {
      if (!DisplayObject.suppressCrossDomainErrors) {
        throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
      }
      return false;
    }
  };
  DisplayObject.prototype._getBounds = function _getBounds(matrix, ignoreTransform) {
    return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
  };
  DisplayObject.prototype._transformBounds = function _transformBounds(bounds, matrix, ignoreTransform) {
    if (!bounds) {
      return bounds;
    }
    var x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;
    var mtx = this._props.matrix;
    mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
    if (x || y) {
      mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
    }
    if (matrix) {
      mtx.prependMatrix(matrix);
    }
    var x_a = width * mtx.a,
        x_b = width * mtx.b;
    var y_c = height * mtx.c,
        y_d = height * mtx.d;
    var tx = mtx.tx,
        ty = mtx.ty;
    var minX = tx,
        maxX = tx,
        minY = ty,
        maxY = ty;
    if ((x = x_a + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }
    if ((x = x_a + y_c + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }
    if ((x = y_c + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }
    if ((y = x_b + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }
    if ((y = x_b + y_d + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }
    if ((y = y_d + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }
    return bounds.setValues(minX, minY, maxX - minX, maxY - minY);
  };
  DisplayObject.prototype._hasMouseEventListener = function _hasMouseEventListener() {
    var evts = DisplayObject._MOUSE_EVENTS;
    for (var i = 0, l = evts.length; i < l; i++) {
      if (this.hasEventListener(evts[i])) {
        return true;
      }
    }
    return !!this.cursor;
  };
  createClass(DisplayObject, [{
    key: "stage",
    get: function get() {
      var o = this;
      while (o.parent) {
        o = o.parent;
      }
      if (/^\[Stage(GL)?(\s\(name=\w+\))?\]$/.test(o.toString())) {
        return o;
      }
      return null;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.scaleX;
    },
    set: function set(value) {
      this.scaleX = this.scaleY = value;
    }
  }]);
  return DisplayObject;
}(EventDispatcher);

{
  var canvas = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas.getContext) {
    DisplayObject._hitTestCanvas = canvas;
    DisplayObject._hitTestContext = canvas.getContext("2d");
    canvas.width = canvas.height = 1;
  }
  DisplayObject._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"];
  DisplayObject.suppressCrossDomainErrors = false;
  DisplayObject.snapToPixelEnabled = false;
  DisplayObject._StageGL_NONE = 0;
  DisplayObject._StageGL_SPRITE = 1;
  DisplayObject._StageGL_BITMAP = 2;
}

var Container = function (_DisplayObject) {
  inherits(Container, _DisplayObject);
  function Container() {
    classCallCheck(this, Container);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    _this.children = [];
    _this.mouseChildren = true;
    _this.tickChildren = true;
    return _this;
  }
  Container.prototype.isVisible = function isVisible() {
    var hasContent = this.cacheCanvas || this.children.length;
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  Container.prototype.draw = function draw(ctx) {
    var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (_DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
      return true;
    }
    var list = this.children.slice();
    for (var i = 0, l = list.length; i < l; i++) {
      var child = list[i];
      if (!child.isVisible()) {
        continue;
      }
      ctx.save();
      child.updateContext(ctx);
      child.draw(ctx);
      ctx.restore();
    }
    return true;
  };
  Container.prototype.addChild = function addChild() {
    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }
    var l = children.length;
    if (l === 0) {
      return null;
    }
    var child = children[0];
    if (l > 1) {
      for (var i = 0; i < l; i++) {
        child = this.addChild(children[i]);
      }
      return child;
    }
    var parent = child.parent,
        silent = parent === this;
    parent && parent._removeChildAt(parent.children.indexOf(child), silent);
    child.parent = this;
    this.children.push(child);
    if (!silent) {
      child.dispatchEvent("added");
    }
    return child;
  };
  Container.prototype.addChildAt = function addChildAt() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }
    var l = children.length;
    if (l === 0) {
      return null;
    }
    var index = children.pop();
    if (index < 0 || index > this.children.length) {
      return children[l - 2];
    }
    if (l > 2) {
      for (var i = 0; i < l - 1; i++) {
        this.addChildAt(children[i], index++);
      }
      return children[l - 2];
    }
    var child = children[0];
    var parent = child.parent,
        silent = parent === this;
    parent && parent._removeChildAt(parent.children.indexOf(child), silent);
    child.parent = this;
    this.children.splice(index++, 0, child);
    if (!silent) {
      child.dispatchEvent("added");
    }
    return child;
  };
  Container.prototype.removeChild = function removeChild() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      children[_key3] = arguments[_key3];
    }
    var l = children.length;
    if (l === 0) {
      return true;
    }
    if (l > 1) {
      var good = true;
      for (var i = 0; i < l; i++) {
        good = good && this.removeChild(children[i]);
      }
      return good;
    }
    return this._removeChildAt(this.children.indexOf(children[0]));
  };
  Container.prototype.removeChildAt = function removeChildAt() {
    for (var _len4 = arguments.length, indexes = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      indexes[_key4] = arguments[_key4];
    }
    var l = indexes.length;
    if (l === 0) {
      return true;
    }
    if (l > 1) {
      indexes.sort(function (a, b) {
        return b - a;
      });
      var good = true;
      for (var i = 0; i < l; i++) {
        good = good && this._removeChildAt(indexes[i]);
      }
      return good;
    }
    return this._removeChildAt(indexes[0]);
  };
  Container.prototype.removeAllChildren = function removeAllChildren() {
    var kids = this.children;
    while (kids.length) {
      this._removeChildAt(0);
    }
  };
  Container.prototype.getChildAt = function getChildAt(index) {
    return this.children[index];
  };
  Container.prototype.getChildByName = function getChildByName(name) {
    var kids = this.children;
    var l = kids.length;
    for (var i = 0; i < l; i++) {
      if (kids[i].name === name) {
        return kids[i];
      }
    }
    return null;
  };
  Container.prototype.sortChildren = function sortChildren(sortFunction) {
    this.children.sort(sortFunction);
  };
  Container.prototype.getChildIndex = function getChildIndex(child) {
    return this.children.indexOf(child);
  };
  Container.prototype.swapChildrenAt = function swapChildrenAt(index1, index2) {
    var kids = this.children;
    var o1 = kids[index1];
    var o2 = kids[index2];
    if (!o1 || !o2) {
      return;
    }
    kids[index1] = o2;
    kids[index2] = o1;
  };
  Container.prototype.swapChildren = function swapChildren(child1, child2) {
    var kids = this.children;
    var l = kids.length;
    var index1 = void 0,
        index2 = void 0;
    for (var i = 0; i < l; i++) {
      if (kids[i] === child1) {
        index1 = i;
      }
      if (kids[i] === child2) {
        index2 = i;
      }
      if (index1 != null && index2 != null) {
        break;
      }
    }
    if (i === l) {
      return;
    }
    kids[index1] = child2;
    kids[index2] = child1;
  };
  Container.prototype.setChildIndex = function setChildIndex(child, index) {
    var kids = this.children;
    var l = kids.length;
    if (child.parent != this || index < 0 || index >= l) {
      return;
    }
    for (var i = 0; i < l; i++) {
      if (kids[i] === child) {
        break;
      }
    }
    if (i === l || i === index) {
      return;
    }
    kids.splice(i, 1);
    kids.splice(index, 0, child);
  };
  Container.prototype.contains = function contains(child) {
    while (child) {
      if (child === this) {
        return true;
      }
      child = child.parent;
    }
    return false;
  };
  Container.prototype.hitTest = function hitTest(x, y) {
    return this.getObjectUnderPoint(x, y) != null;
  };
  Container.prototype.getObjectsUnderPoint = function getObjectsUnderPoint(x, y) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var arr = [];
    var pt = this.localToGlobal(x, y);
    this._getObjectsUnderPoint(pt.x, pt.y, arr, mode > 0, mode === 1);
    return arr;
  };
  Container.prototype.getObjectUnderPoint = function getObjectUnderPoint(x, y) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var pt = this.localToGlobal(x, y);
    return this._getObjectsUnderPoint(pt.x, pt.y, null, mode > 0, mode === 1);
  };
  Container.prototype.getBounds = function getBounds() {
    return this._getBounds(null, true);
  };
  Container.prototype.getTransformedBounds = function getTransformedBounds() {
    return this._getBounds();
  };
  Container.prototype.clone = function clone() {
    var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var o = this._cloneProps(new Container());
    if (recursive) {
      this._cloneChildren(o);
    }
    return o;
  };
  Container.prototype._tick = function _tick(evtObj) {
    if (this.tickChildren) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var child = this.children[i];
        if (child.tickEnabled && child._tick) {
          child._tick(evtObj);
        }
      }
    }
    _DisplayObject.prototype._tick.call(this, evtObj);
  };
  Container.prototype._cloneChildren = function _cloneChildren(o) {
    if (o.children.length) {
      o.removeAllChildren();
    }
    var arr = o.children;
    var l = this.children.length;
    for (var i = 0; i < l; i++) {
      var clone = this.children[i].clone(true);
      clone.parent = o;
      arr.push(clone);
    }
  };
  Container.prototype._removeChildAt = function _removeChildAt(index) {
    var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (index < 0 || index > this.children.length - 1) {
      return false;
    }
    var child = this.children[index];
    if (child) {
      child.parent = null;
    }
    this.children.splice(index, 1);
    if (!silent) {
      child.dispatchEvent("removed");
    }
    return true;
  };
  Container.prototype._getObjectsUnderPoint = function _getObjectsUnderPoint(x, y, arr, mouse, activeListener) {
    var currentDepth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (!currentDepth && !this._testMask(this, x, y)) {
      return null;
    }
    var mtx = void 0,
        ctx = DisplayObject._hitTestContext;
    activeListener = activeListener || mouse && this._hasMouseEventListener();
    var children = this.children;
    var l = children.length;
    for (var i = l - 1; i >= 0; i--) {
      var child = children[i];
      var hitArea = child.hitArea;
      if (!child.visible || !hitArea && !child.isVisible() || mouse && !child.mouseEnabled) {
        continue;
      }
      if (!hitArea && !this._testMask(child, x, y)) {
        continue;
      }
      if (!hitArea && child instanceof Container) {
        var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth + 1);
        if (!arr && result) {
          return mouse && !this.mouseChildren ? this : result;
        }
      } else {
        if (mouse && !activeListener && !child._hasMouseEventListener()) {
          continue;
        }
        var props = child.getConcatenatedDisplayProps(child._props);
        mtx = props.matrix;
        if (hitArea) {
          mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix));
          props.alpha = hitArea.alpha;
        }
        ctx.globalAlpha = props.alpha;
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
        (hitArea || child).draw(ctx);
        if (!this._testHit(ctx)) {
          continue;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 2, 2);
        if (arr) {
          arr.push(child);
        } else {
          return mouse && !this.mouseChildren ? this : child;
        }
      }
    }
    return null;
  };
  Container.prototype._testMask = function _testMask(target, x, y) {
    var mask = target.mask;
    if (!mask || !mask.graphics || mask.graphics.isEmpty()) {
      return true;
    }
    var mtx = this._props.matrix,
        parent = target.parent;
    mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
    mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
    var ctx = DisplayObject._hitTestContext;
    ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
    mask.graphics.drawAsPath(ctx);
    ctx.fillStyle = "#000";
    ctx.fill();
    if (!this._testHit(ctx)) {
      return false;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, 2, 2);
    return true;
  };
  Container.prototype._getBounds = function _getBounds(matrix, ignoreTransform) {
    var bounds = _DisplayObject.prototype.getBounds.call(this);
    if (bounds) {
      return this._transformBounds(bounds, matrix, ignoreTransform);
    }
    var mtx = this._props.matrix;
    mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
    if (matrix) {
      mtx.prependMatrix(matrix);
    }
    var l = this.children.length;
    var rect = null;
    for (var i = 0; i < l; i++) {
      var child = this.children[i];
      if (!child.visible || !(bounds = child._getBounds(mtx))) {
        continue;
      }
      if (rect) {
        rect.extend(bounds.x, bounds.y, bounds.width, bounds.height);
      } else {
        rect = bounds.clone();
      }
    }
    return rect;
  };
  createClass(Container, [{
    key: "numChildren",
    get: function get() {
      return this.children.length;
    }
  }]);
  return Container;
}(DisplayObject);

var MouseEvent = function (_Event) {
  inherits(MouseEvent, _Event);
  function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
    classCallCheck(this, MouseEvent);
    var _this = possibleConstructorReturn(this, _Event.call(this, type, bubbles, cancelable));
    _this.stageX = stageX;
    _this.stageY = stageY;
    _this.rawX = rawX == null ? stageX : rawX;
    _this.rawY = rawY == null ? stageY : rawY;
    _this.nativeEvent = nativeEvent;
    _this.pointerID = pointerID;
    _this.primary = !!primary;
    _this.relatedTarget = relatedTarget;
    return _this;
  }
  MouseEvent.prototype.clone = function clone() {
    return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
  };
  MouseEvent.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
  };
  createClass(MouseEvent, [{
    key: "localX",
    get: function get() {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
    }
  }, {
    key: "localY",
    get: function get() {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
    }
  }, {
    key: "isTouch",
    get: function get() {
      return this.pointerID !== -1;
    }
  }]);
  return MouseEvent;
}(Event);

var Stage = function (_Container) {
  inherits(Stage, _Container);
  function Stage(canvas) {
    classCallCheck(this, Stage);
    var _this = possibleConstructorReturn(this, _Container.call(this));
    _this.autoClear = true;
    _this.canvas = typeof canvas === "string" ? document.getElementById(canvas) : canvas;
    _this.mouseX = 0;
    _this.mouseY = 0;
    _this.drawRect = null;
    _this.snapToPixelEnabled = false;
    _this.mouseInBounds = false;
    _this.tickOnUpdate = true;
    _this.mouseMoveOutside = false;
    _this.preventSelection = true;
    _this._pointerData = {};
    _this._pointerCount = 0;
    _this._primaryPointerID = null;
    _this._mouseOverIntervalID = null;
    _this._nextStage = null;
    _this._prevStage = null;
    _this.enableDOMEvents(true);
    return _this;
  }
  Stage.prototype.update = function update(props) {
    if (!this.canvas) {
      return;
    }
    if (this.tickOnUpdate) {
      this.tick(props);
    }
    if (this.dispatchEvent("drawstart", false, true) === false) {
      return;
    }
    DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
    var r = this.drawRect,
        ctx = this.canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (this.autoClear) {
      if (r) {
        ctx.clearRect(r.x, r.y, r.width, r.height);
      } else {
        ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
      }
    }
    ctx.save();
    if (this.drawRect) {
      ctx.beginPath();
      ctx.rect(r.x, r.y, r.width, r.height);
      ctx.clip();
    }
    this.updateContext(ctx);
    this.draw(ctx, false);
    ctx.restore();
    this.dispatchEvent("drawend");
  };
  Stage.prototype.tick = function tick(props) {
    if (!this.tickEnabled || this.dispatchEvent("tickstart", false, true) === false) {
      return;
    }
    var evtObj = new Event("tick");
    if (props) {
      for (var n in props) {
        if (props.hasOwnProperty(n)) {
          evtObj[n] = props[n];
        }
      }
    }
    this._tick(evtObj);
    this.dispatchEvent("tickend");
  };
  Stage.prototype.handleEvent = function handleEvent(evt) {
    if (evt.type === "tick") {
      this.update(evt);
    }
  };
  Stage.prototype.clear = function clear() {
    if (!this.canvas) {
      return;
    }
    var ctx = this.canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
  };
  Stage.prototype.toDataURL = function toDataURL(backgroundColor) {
    var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "image/png";
    var data = void 0,
        ctx = this.canvas.getContext("2d"),
        w = this.canvas.width,
        h = this.canvas.height;
    if (backgroundColor) {
      data = ctx.getImageData(0, 0, w, h);
      var compositeOperation = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);
    }
    var dataURL = this.canvas.toDataURL(mimeType);
    if (backgroundColor) {
      ctx.putImageData(data, 0, 0);
      ctx.globalCompositeOperation = compositeOperation;
    }
    return dataURL;
  };
  Stage.prototype.enableMouseOver = function enableMouseOver() {
    var _this2 = this;
    var frequency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    if (this._mouseOverIntervalID) {
      clearInterval(this._mouseOverIntervalID);
      this._mouseOverIntervalID = null;
      if (frequency === 0) {
        this._testMouseOver(true);
      }
    }
    if (frequency <= 0) {
      return;
    }
    this._mouseOverIntervalID = setInterval(function () {
      return _this2._testMouseOver();
    }, 1e3 / Math.min(50, frequency));
  };
  Stage.prototype.enableDOMEvents = function enableDOMEvents() {
    var _this3 = this;
    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var ls = this._eventListeners;
    if (!enable && ls) {
      for (var n in ls) {
        var o = ls[n];
        o.t.removeEventListener(n, o.f, false);
      }
      this._eventListeners = null;
    } else if (enable && !ls && this.canvas) {
      var t = window.addEventListener ? window : document;
      ls = this._eventListeners = {
        mouseup: {
          t: t,
          f: function f(e) {
            return _this3._handleMouseUp(e);
          }
        },
        mousemove: {
          t: t,
          f: function f(e) {
            return _this3._handleMouseMove(e);
          }
        },
        dblclick: {
          t: this.canvas,
          f: function f(e) {
            return _this3._handleDoubleClick(e);
          }
        },
        mousedown: {
          t: this.canvas,
          f: function f(e) {
            return _this3._handleMouseDown(e);
          }
        }
      };
      for (var _n in ls) {
        var _o = ls[_n];
        _o.t.addEventListener && _o.t.addEventListener(_n, _o.f, false);
      }
    }
  };
  Stage.prototype.clone = function clone() {
    throw "Stage cannot be cloned.";
  };
  Stage.prototype._getElementRect = function _getElementRect(e) {
    var bounds = void 0;
    try {
      bounds = e.getBoundingClientRect();
    } catch (err) {
      bounds = {
        top: e.offsetTop,
        left: e.offsetLeft,
        width: e.offsetWidth,
        height: e.offsetHeight
      };
    }
    var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
    var offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0);
    var styles = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle;
    var padL = parseInt(styles.paddingLeft) + parseInt(styles.borderLeftWidth);
    var padT = parseInt(styles.paddingTop) + parseInt(styles.borderTopWidth);
    var padR = parseInt(styles.paddingRight) + parseInt(styles.borderRightWidth);
    var padB = parseInt(styles.paddingBottom) + parseInt(styles.borderBottomWidth);
    return {
      left: bounds.left + offX + padL,
      right: bounds.right + offX - padR,
      top: bounds.top + offY + padT,
      bottom: bounds.bottom + offY - padB
    };
  };
  Stage.prototype._getPointerData = function _getPointerData(id) {
    var data = this._pointerData[id];
    if (!data) {
      data = this._pointerData[id] = {
        x: 0,
        y: 0
      };
    }
    return data;
  };
  Stage.prototype._handleMouseMove = function _handleMouseMove() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
    this._handlePointerMove(-1, e, e.pageX, e.pageY);
  };
  Stage.prototype._handlePointerMove = function _handlePointerMove(id, e, pageX, pageY, owner) {
    if (this._prevStage && owner === undefined) {
      return;
    }
    if (!this.canvas) {
      return;
    }
    var nextStage = this._nextStage,
        o = this._getPointerData(id);
    var inBounds = o.inBounds;
    this._updatePointerPosition(id, e, pageX, pageY);
    if (inBounds || o.inBounds || this.mouseMoveOutside) {
      if (id === -1 && o.inBounds === !inBounds) {
        this._dispatchMouseEvent(this, inBounds ? "mouseleave" : "mouseenter", false, id, o, e);
      }
      this._dispatchMouseEvent(this, "stagemousemove", false, id, o, e);
      this._dispatchMouseEvent(o.target, "pressmove", true, id, o, e);
    }
    nextStage && nextStage._handlePointerMove(id, e, pageX, pageY, null);
  };
  Stage.prototype._updatePointerPosition = function _updatePointerPosition(id, e, pageX, pageY) {
    var rect = this._getElementRect(this.canvas);
    pageX -= rect.left;
    pageY -= rect.top;
    var w = this.canvas.width;
    var h = this.canvas.height;
    pageX /= (rect.right - rect.left) / w;
    pageY /= (rect.bottom - rect.top) / h;
    var o = this._getPointerData(id);
    if (o.inBounds = pageX >= 0 && pageY >= 0 && pageX <= w - 1 && pageY <= h - 1) {
      o.x = pageX;
      o.y = pageY;
    } else if (this.mouseMoveOutside) {
      o.x = pageX < 0 ? 0 : pageX > w - 1 ? w - 1 : pageX;
      o.y = pageY < 0 ? 0 : pageY > h - 1 ? h - 1 : pageY;
    }
    o.posEvtObj = e;
    o.rawX = pageX;
    o.rawY = pageY;
    if (id === this._primaryPointerID || id === -1) {
      this.mouseX = o.x;
      this.mouseY = o.y;
      this.mouseInBounds = o.inBounds;
    }
  };
  Stage.prototype._handleMouseUp = function _handleMouseUp(e) {
    this._handlePointerUp(-1, e, false);
  };
  Stage.prototype._handlePointerUp = function _handlePointerUp(id, e, clear, owner) {
    var nextStage = this._nextStage,
        o = this._getPointerData(id);
    if (this._prevStage && owner === undefined) {
      return;
    }
    var target = null,
        oTarget = o.target;
    if (!owner && (oTarget || nextStage)) {
      target = this._getObjectsUnderPoint(o.x, o.y, null, true);
    }
    if (o.down) {
      this._dispatchMouseEvent(this, "stagemouseup", false, id, o, e, target);
      o.down = false;
    }
    if (target === oTarget) {
      this._dispatchMouseEvent(oTarget, "click", true, id, o, e);
    }
    this._dispatchMouseEvent(oTarget, "pressup", true, id, o, e);
    if (clear) {
      if (id == this._primaryPointerID) {
        this._primaryPointerID = null;
      }
      delete this._pointerData[id];
    } else {
      o.target = null;
    }
    nextStage && nextStage._handlePointerUp(id, e, clear, owner || target && this);
  };
  Stage.prototype._handleMouseDown = function _handleMouseDown(e) {
    this._handlePointerDown(-1, e, e.pageX, e.pageY);
  };
  Stage.prototype._handlePointerDown = function _handlePointerDown(id, e, pageX, pageY, owner) {
    if (this.preventSelection) {
      e.preventDefault();
    }
    if (this._primaryPointerID == null || id === -1) {
      this._primaryPointerID = id;
    }
    if (pageY != null) {
      this._updatePointerPosition(id, e, pageX, pageY);
    }
    var target = null,
        nextStage = this._nextStage,
        o = this._getPointerData(id);
    if (!owner) {
      target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true);
    }
    if (o.inBounds) {
      this._dispatchMouseEvent(this, "stagemousedown", false, id, o, e, target);
      o.down = true;
    }
    this._dispatchMouseEvent(target, "mousedown", true, id, o, e);
    nextStage && nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this);
  };
  Stage.prototype._testMouseOver = function _testMouseOver(clear, owner, eventTarget) {
    if (this._prevStage && owner === undefined) {
      return;
    }
    var nextStage = this._nextStage;
    if (!this._mouseOverIntervalID) {
      nextStage && nextStage._testMouseOver(clear, owner, eventTarget);
      return;
    }
    var o = this._getPointerData(-1);
    if (!o || !clear && this.mouseX === this._mouseOverX && this.mouseY === this._mouseOverY && this.mouseInBounds) {
      return;
    }
    var e = o.posEvtObj;
    var isEventTarget = eventTarget || e && e.target === this.canvas;
    var target = null,
        common = -1,
        cursor = "";
    if (!owner && (clear || this.mouseInBounds && isEventTarget)) {
      target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
      this._mouseOverX = this.mouseX;
      this._mouseOverY = this.mouseY;
    }
    var oldList = this._mouseOverTarget || [];
    var oldTarget = oldList[oldList.length - 1];
    var list = this._mouseOverTarget = [];
    var t = target;
    while (t) {
      list.unshift(t);
      if (!cursor) {
        cursor = t.cursor;
      }
      t = t.parent;
    }
    this.canvas.style.cursor = cursor;
    if (!owner && eventTarget) {
      eventTarget.canvas.style.cursor = cursor;
    }
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i] != oldList[i]) {
        break;
      }
      common = i;
    }
    if (oldTarget != target) {
      this._dispatchMouseEvent(oldTarget, "mouseout", true, -1, o, e, target);
    }
    for (var _i = oldList.length - 1; _i > common; _i--) {
      this._dispatchMouseEvent(oldList[_i], "rollout", false, -1, o, e, target);
    }
    for (var _i2 = list.length - 1; _i2 > common; _i2--) {
      this._dispatchMouseEvent(list[_i2], "rollover", false, -1, o, e, oldTarget);
    }
    if (oldTarget != target) {
      this._dispatchMouseEvent(target, "mouseover", true, -1, o, e, oldTarget);
    }
    nextStage && nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this);
  };
  Stage.prototype._handleDoubleClick = function _handleDoubleClick(e, owner) {
    var target = null,
        nextStage = this._nextStage,
        o = this._getPointerData(-1);
    if (!owner) {
      target = this._getObjectsUnderPoint(o.x, o.y, null, true);
      this._dispatchMouseEvent(target, "dblclick", true, -1, o, e);
    }
    nextStage && nextStage._handleDoubleClick(e, owner || target && this);
  };
  Stage.prototype._dispatchMouseEvent = function _dispatchMouseEvent(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
    if (!target || !bubbles && !target.hasEventListener(type)) {
      return;
    }
    var evt = new MouseEvent(type, bubbles, false, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || pointerId === -1, o.rawX, o.rawY, relatedTarget);
    target.dispatchEvent(evt);
  };
  createClass(Stage, [{
    key: "nextStage",
    get: function get() {
      return this._nextStage;
    },
    set: function set(stage) {
      if (this._nextStage) {
        this._nextStage._prevStage = null;
      }
      if (stage) {
        stage._prevStage = this;
      }
      this._nextStage = stage;
    }
  }]);
  return Stage;
}(Container);

var VideoBuffer = function () {
  function VideoBuffer(video) {
    classCallCheck(this, VideoBuffer);
    this.readyState = video.readyState;
    this._video = video;
    this._canvas = null;
    this._lastTime = -1;
    if (this.readyState < 2) {
      video.addEventListener("canplaythrough", this._videoReady.bind(this));
    }
  }
  VideoBuffer.prototype.getImage = function getImage() {
    if (this.readyState < 2) {
      return;
    }
    var canvas = this._canvas,
        video = this._video;
    if (!canvas) {
      canvas = this._canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }
    if (video.readyState >= 2 && video.currentTime !== this._lastTime) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      this._lastTime = video.currentTime;
    }
    return canvas;
  };
  VideoBuffer.prototype._videoReady = function _videoReady() {
    this.readyState = 2;
  };
  return VideoBuffer;
}();

var Bitmap = function (_DisplayObject) {
  inherits(Bitmap, _DisplayObject);
  function Bitmap(imageOrUri) {
    classCallCheck(this, Bitmap);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    if (typeof imageOrUri === "string") {
      _this.image = document.createElement("img");
      _this.image.src = imageOrUri;
    } else {
      _this.image = imageOrUri;
    }
    _this.sourceRect = null;
    _this._webGLRenderStyle = DisplayObject._StageGL_BITMAP;
    return _this;
  }
  Bitmap.prototype.isVisible = function isVisible() {
    var image = this.image;
    var hasContent = this.cacheCanvas || image && (image.naturalWidth || image.getContext || image.readyState >= 2);
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  Bitmap.prototype.draw = function draw(ctx) {
    var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (_DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
      return true;
    }
    var img = this.image,
        rect = this.sourceRect;
    if (img instanceof VideoBuffer) {
      img = img.getImage();
    }
    if (img == null) {
      return true;
    }
    if (rect) {
      var x1 = rect.x,
          y1 = rect.y,
          x2 = x1 + rect.width,
          y2 = y1 + rect.height,
          x = 0,
          y = 0,
          w = img.width,
          h = img.height;
      if (x1 < 0) {
        x -= x1;
        x1 = 0;
      }
      if (x2 > w) {
        x2 = w;
      }
      if (y1 < 0) {
        y -= y1;
        y1 = 0;
      }
      if (y2 > h) {
        y2 = h;
      }
      ctx.drawImage(img, x1, y1, x2 - x1, y2 - y1, x, y, x2 - x1, y2 - y1);
    } else {
      ctx.drawImage(img, 0, 0);
    }
    return true;
  };
  Bitmap.prototype.getBounds = function getBounds() {
    var rect = _DisplayObject.prototype.getBounds.call(this);
    if (rect) {
      return rect;
    }
    var image = this.image,
        o = this.sourceRect || image;
    var hasContent = image && (image.naturalWidth || image.getContext || image.readyState >= 2);
    return hasContent ? this._rectangle.setValues(0, 0, o.width, o.height) : null;
  };
  Bitmap.prototype.clone = function clone(node) {
    var img = this.image;
    if (img != null && node != null) {
      img = img.cloneNode();
    }
    var bmp = new Bitmap(img);
    if (this.sourceRect) {
      bmp.sourceRect = this.sourceRect.clone();
    }
    this._cloneProps(bmp);
    return bmp;
  };
  return Bitmap;
}(DisplayObject);

var Sprite = function (_DisplayObject) {
  inherits(Sprite, _DisplayObject);
  function Sprite(spriteSheet, frameOrAnimation) {
    classCallCheck(this, Sprite);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    _this.currentFrame = 0;
    _this.currentAnimation = null;
    _this.paused = true;
    _this.spriteSheet = spriteSheet;
    _this.currentAnimationFrame = 0;
    _this.framerate = 0;
    _this._animation = null;
    _this._currentFrame = null;
    _this._skipAdvance = false;
    _this._webGLRenderStyle = DisplayObject._StageGL_SPRITE;
    if (frameOrAnimation != null) {
      _this.gotoAndPlay(frameOrAnimation);
    }
    return _this;
  }
  Sprite.prototype.isVisible = function isVisible() {
    var hasContent = this.cacheCanvas || this.spriteSheet.complete;
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  Sprite.prototype.draw = function draw(ctx, ignoreCache) {
    if (_DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
      return true;
    }
    this._normalizeFrame();
    var o = this.spriteSheet.getFrame(this._currentFrame | 0);
    if (!o) {
      return false;
    }
    var rect = o.rect;
    if (rect.width && rect.height) {
      ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height);
    }
    return true;
  };
  Sprite.prototype.play = function play() {
    this.paused = false;
  };
  Sprite.prototype.stop = function stop() {
    this.paused = true;
  };
  Sprite.prototype.gotoAndPlay = function gotoAndPlay(frameOrAnimation) {
    this.paused = false;
    this._skipAdvance = true;
    this._goto(frameOrAnimation);
  };
  Sprite.prototype.gotoAndStop = function gotoAndStop(frameOrAnimation) {
    this.paused = true;
    this._goto(frameOrAnimation);
  };
  Sprite.prototype.advance = function advance(time) {
    var fps = this.framerate || this.spriteSheet.framerate;
    var t = fps && time != null ? time / (1e3 / fps) : 1;
    this._normalizeFrame(t);
  };
  Sprite.prototype.getBounds = function getBounds() {
    return _DisplayObject.prototype.getBounds.call(this) || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
  };
  Sprite.prototype.clone = function clone() {
    return this._cloneProps(new Sprite(this.spriteSheet));
  };
  Sprite.prototype._cloneProps = function _cloneProps(o) {
    _DisplayObject.prototype._cloneProps.call(this, o);
    o.currentFrame = this.currentFrame;
    o.currentAnimation = this.currentAnimation;
    o.paused = this.paused;
    o.currentAnimationFrame = this.currentAnimationFrame;
    o.framerate = this.framerate;
    o._animation = this._animation;
    o._currentFrame = this._currentFrame;
    o._skipAdvance = this._skipAdvance;
    return o;
  };
  Sprite.prototype._tick = function _tick(evtObj) {
    if (!this.paused) {
      if (!this._skipAdvance) {
        this.advance(evtObj && evtObj.delta);
      }
      this._skipAdvance = false;
    }
    _DisplayObject.prototype._tick.call(this, evtObj);
  };
  Sprite.prototype._normalizeFrame = function _normalizeFrame() {
    var frameDelta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var animation = this._animation;
    var paused = this.paused;
    var frame = this._currentFrame;
    if (animation) {
      var speed = animation.speed || 1;
      var animFrame = this.currentAnimationFrame;
      var l = animation.frames.length;
      if (animFrame + frameDelta * speed >= l) {
        var next = animation.next;
        if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) {
          return;
        } else if (next) {
          return this._goto(next, frameDelta - (l - animFrame) / speed);
        } else {
          this.paused = true;
          animFrame = animation.frames.length - 1;
        }
      } else {
        animFrame += frameDelta * speed;
      }
      this.currentAnimationFrame = animFrame;
      this._currentFrame = animation.frames[animFrame | 0];
    } else {
      frame = this._currentFrame += frameDelta;
      var _l = this.spriteSheet.getNumFrames();
      if (frame >= _l && _l > 0) {
        if (!this._dispatchAnimationEnd(animation, frame, paused, _l - 1)) {
          if ((this._currentFrame -= _l) >= _l) {
            return this._normalizeFrame();
          }
        }
      }
    }
    frame = this._currentFrame | 0;
    if (this.currentFrame != frame) {
      this.currentFrame = frame;
      this.dispatchEvent("change");
    }
  };
  Sprite.prototype._dispatchAnimationEnd = function _dispatchAnimationEnd(animation, frame, paused, next, end) {
    var name = animation ? animation.name : null;
    if (this.hasEventListener("animationend")) {
      var evt = new Event("animationend");
      evt.name = name;
      evt.next = next;
      this.dispatchEvent(evt);
    }
    var changed = this._animation != animation || this._currentFrame != frame;
    if (!changed && !paused && this.paused) {
      this.currentAnimationFrame = end;
      changed = true;
    }
    return changed;
  };
  Sprite.prototype._goto = function _goto(frameOrAnimation, frame) {
    this.currentAnimationFrame = 0;
    if (isNaN(frameOrAnimation)) {
      var data = this.spriteSheet.getAnimation(frameOrAnimation);
      if (data) {
        this._animation = data;
        this.currentAnimation = frameOrAnimation;
        this._normalizeFrame(frame);
      }
    } else {
      this.currentAnimation = this._animation = null;
      this._currentFrame = frameOrAnimation;
      this._normalizeFrame();
    }
  };
  return Sprite;
}(DisplayObject);

var _maxPoolSize = 100;

var _spritePool = [];

var BitmapText = function (_Container) {
  inherits(BitmapText, _Container);
  function BitmapText() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var spriteSheet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    classCallCheck(this, BitmapText);
    var _this = possibleConstructorReturn(this, _Container.call(this));
    _this.text = text;
    _this.spriteSheet = spriteSheet;
    _this.lineHeight = 0;
    _this.letterSpacing = 0;
    _this.spaceWidth = 0;
    _this._oldProps = {
      text: 0,
      spriteSheet: 0,
      lineHeight: 0,
      letterSpacing: 0,
      spaceWidth: 0
    };
    _this._oldStage = null;
    _this._drawAction = null;
    return _this;
  }
  BitmapText.prototype.draw = function draw(ctx, ignoreCache) {
    if (this.drawCache(ctx, ignoreCache)) {
      return;
    }
    this._updateState();
    _Container.prototype.draw.call(this, ctx, ignoreCache);
  };
  BitmapText.prototype.getBounds = function getBounds() {
    this._updateText();
    return _Container.prototype.getBounds.call(this);
  };
  BitmapText.prototype.isVisible = function isVisible() {
    var hasContent = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
    return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && hasContent);
  };
  BitmapText.prototype.clone = function clone() {
    return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
  };
  BitmapText.prototype.addChild = function addChild() {};
  BitmapText.prototype.addChildAt = function addChildAt() {};
  BitmapText.prototype.removeChild = function removeChild() {};
  BitmapText.prototype.removeChildAt = function removeChildAt() {};
  BitmapText.prototype.removeAllChildren = function removeAllChildren() {};
  BitmapText.prototype._updateState = function _updateState() {
    this._updateText();
  };
  BitmapText.prototype._cloneProps = function _cloneProps(o) {
    _Container.prototype._cloneProps.call(this, o);
    o.lineHeight = this.lineHeight;
    o.letterSpacing = this.letterSpacing;
    o.spaceWidth = this.spaceWidth;
    return o;
  };
  BitmapText.prototype._getFrameIndex = function _getFrameIndex(character, spriteSheet) {
    var c = void 0,
        o = spriteSheet.getAnimation(character);
    if (!o) {
      character != (c = character.toUpperCase()) || character != (c = character.toLowerCase()) || (c = null);
      if (c) {
        o = spriteSheet.getAnimation(c);
      }
    }
    return o && o.frames[0];
  };
  BitmapText.prototype._getFrame = function _getFrame(character, spriteSheet) {
    var index = this._getFrameIndex(character, spriteSheet);
    return index == null ? index : spriteSheet.getFrame(index);
  };
  BitmapText.prototype._getLineHeight = function _getLineHeight(ss) {
    var frame = this._getFrame("1", ss) || this._getFrame("T", ss) || this._getFrame("L", ss) || ss.getFrame(0);
    return frame ? frame.rect.height : 1;
  };
  BitmapText.prototype._getSpaceWidth = function _getSpaceWidth(ss) {
    var frame = this._getFrame("1", ss) || this._getFrame("l", ss) || this._getFrame("e", ss) || this._getFrame("a", ss) || ss.getFrame(0);
    return frame ? frame.rect.width : 1;
  };
  BitmapText.prototype._tick = function _tick(evtObj) {
    var stage = this.stage;
    stage && stage.on("drawstart", this._updateText, this, true);
    _Container.prototype._tick.call(this, evtObj);
  };
  BitmapText.prototype._updateText = function _updateText() {
    var x = 0,
        y = 0,
        o = this._oldProps,
        change = false,
        spaceW = this.spaceWidth,
        lineH = this.lineHeight,
        ss = this.spriteSheet;
    var pool = BitmapText._spritePool,
        kids = this.children,
        childIndex = 0,
        numKids = kids.length,
        sprite = void 0;
    for (var n in o) {
      if (o[n] != this[n]) {
        o[n] = this[n];
        change = true;
      }
    }
    if (!change) {
      return;
    }
    var hasSpace = !!this._getFrame(" ", ss);
    if (!hasSpace && !spaceW) {
      spaceW = this._getSpaceWidth(ss);
    }
    if (!lineH) {
      lineH = this._getLineHeight(ss);
    }
    for (var i = 0, l = this.text.length; i < l; i++) {
      var character = this.text.charAt(i);
      if (character === " " && !hasSpace) {
        x += spaceW;
        continue;
      } else if (character === "\n" || character === "\r") {
        if (character === "\r" && this.text.charAt(i + 1) === "\n") {
          i++;
        }
        x = 0;
        y += lineH;
        continue;
      }
      var index = this._getFrameIndex(character, ss);
      if (index == null) {
        continue;
      }
      if (childIndex < numKids) {
        sprite = kids[childIndex];
      } else {
        kids.push(sprite = pool.length ? pool.pop() : new Sprite());
        sprite.parent = this;
        numKids++;
      }
      sprite.spriteSheet = ss;
      sprite.gotoAndStop(index);
      sprite.x = x;
      sprite.y = y;
      childIndex++;
      x += sprite.getBounds().width + this.letterSpacing;
    }
    while (numKids > childIndex) {
      pool.push(sprite = kids.pop());
      sprite.parent = null;
      numKids--;
    }
    if (pool.length > BitmapText.maxPoolSize) {
      pool.length = BitmapText.maxPoolSize;
    }
  };
  createClass(BitmapText, null, [{
    key: "maxPoolSize",
    get: function get() {
      return _maxPoolSize;
    },
    set: function set(maxPoolSize) {
      _maxPoolSize = maxPoolSize;
    }
  }, {
    key: "_spritePool",
    get: function get() {
      return _spritePool;
    }
  }]);
  return BitmapText;
}(Container);

var DOMElement = function (_DisplayObject) {
  inherits(DOMElement, _DisplayObject);
  function DOMElement(htmlElement) {
    classCallCheck(this, DOMElement);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    if (typeof htmlElement === "string") {
      htmlElement = document.getElementById(htmlElement);
    }
    _this.mouseEnabled = false;
    var style = htmlElement.style;
    style.position = "absolute";
    style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%";
    _this.htmlElement = htmlElement;
    _this._oldProps = null;
    _this._oldStage = null;
    _this._drawAction = null;
    return _this;
  }
  DOMElement.prototype.isVisible = function isVisible() {
    return this.htmlElement != null;
  };
  DOMElement.prototype.draw = function draw(ctx, ignoreCache) {
    return true;
  };
  DOMElement.prototype.cache = function cache() {};
  DOMElement.prototype.uncache = function uncache() {};
  DOMElement.prototype.updateCache = function updateCache() {};
  DOMElement.prototype.hitTest = function hitTest() {};
  DOMElement.prototype.localToGlobal = function localToGlobal() {};
  DOMElement.prototype.globalToLocal = function globalToLocal() {};
  DOMElement.prototype.localToLocal = function localToLocal() {};
  DOMElement.prototype.clone = function clone() {
    throw "DOMElement cannot be cloned.";
  };
  DOMElement.prototype._tick = function _tick(evtObj) {
    var stage = this.stage;
    if (stage != null && stage !== this._oldStage) {
      this._drawAction && stage.off("drawend", this._drawAction);
      this._drawAction = stage.on("drawend", this._handleDrawEnd, this);
      this._oldStage = stage;
    }
    _DisplayObject.prototype._tick.call(this, evtObj);
  };
  DOMElement.prototype._handleDrawEnd = function _handleDrawEnd(evt) {
    var o = this.htmlElement;
    if (!o) {
      return;
    }
    var style = o.style;
    var props = this.getConcatenatedDisplayProps(this._props),
        mtx = props.matrix;
    var visibility = props.visible ? "visible" : "hidden";
    if (visibility != style.visibility) {
      style.visibility = visibility;
    }
    if (!props.visible) {
      return;
    }
    var oldProps = this._oldProps,
        oldMtx = oldProps && oldProps.matrix;
    var n = 1e4;
    if (!oldMtx || !oldMtx.equals(mtx)) {
      var str = "matrix(" + (mtx.a * n | 0) / n + "," + (mtx.b * n | 0) / n + "," + (mtx.c * n | 0) / n + "," + (mtx.d * n | 0) / n + "," + (mtx.tx + .5 | 0);
      style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str + "," + (mtx.ty + .5 | 0) + ")";
      style.MozTransform = str + "px," + (mtx.ty + .5 | 0) + "px)";
      if (!oldProps) {
        oldProps = this._oldProps = new DisplayProps(true, null);
      }
      oldProps.matrix.copy(mtx);
    }
    if (oldProps.alpha != props.alpha) {
      style.opacity = "" + (props.alpha * n | 0) / n;
      oldProps.alpha = props.alpha;
    }
  };
  return DOMElement;
}(DisplayObject);

var Graphics = function () {
  function Graphics() {
    classCallCheck(this, Graphics);
    this.command = null;
    this._stroke = null;
    this._strokeStyle = null;
    this._oldStrokeStyle = null;
    this._strokeDash = null;
    this._oldStrokeDash = null;
    this._strokeIgnoreScale = false;
    this._fill = null;
    this._instructions = [];
    this._commitIndex = 0;
    this._activeInstructions = [];
    this._dirty = false;
    this._storeIndex = 0;
    this.curveTo = this.quadraticCurveTo;
    this.drawRect = this.rect;
    this.mt = this.moveTo;
    this.lt = this.lineTo;
    this.at = this.arcTo;
    this.bt = this.bezierCurveTo;
    this.qt = this.quadraticCurveTo;
    this.a = this.arc;
    this.r = this.rect;
    this.cp = this.closePath;
    this.c = this.clear;
    this.f = this.beginFill;
    this.lf = this.beginLinearGradientFill;
    this.rf = this.beginRadialGradientFill;
    this.bf = this.beginBitmapFill;
    this.ef = this.endFill;
    this.ss = this.setStrokeStyle;
    this.sd = this.setStrokeDash;
    this.s = this.beginStroke;
    this.ls = this.beginLinearGradientStroke;
    this.rs = this.beginRadialGradientStroke;
    this.bs = this.beginBitmapStroke;
    this.es = this.endStroke;
    this.dr = this.drawRect;
    this.rr = this.drawRoundRect;
    this.rc = this.drawRoundRectComplex;
    this.dc = this.drawCircle;
    this.de = this.drawEllipse;
    this.dp = this.drawPolyStar;
    this.p = this.decodePath;
    this.clear();
  }
  Graphics.getRGB = function getRGB(r, g, b, alpha) {
    if (r != null && b == null) {
      alpha = g;
      b = r & 255;
      g = r >> 8 & 255;
      r = r >> 16 & 255;
    }
    if (alpha == null) {
      return "rgb(" + r + "," + g + "," + b + ")";
    } else {
      return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }
  };
  Graphics.getHSL = function getHSL(hue, saturation, lightness, alpha) {
    if (alpha == null) {
      return "hsl(" + hue % 360 + "," + saturation + "%," + lightness + "%)";
    } else {
      return "hsl(" + hue % 360 + "," + saturation + "%," + lightness + "%," + alpha + ")";
    }
  };
  Graphics.prototype.isEmpty = function isEmpty() {
    return !(this._instructions.length || this._activeInstructions.length);
  };
  Graphics.prototype.draw = function draw(ctx, data) {
    this._updateInstructions();
    var instr = this._instructions;
    var l = instr.length;
    for (var i = this._storeIndex; i < l; i++) {
      instr[i].exec(ctx, data);
    }
  };
  Graphics.prototype.drawAsPath = function drawAsPath(ctx) {
    this._updateInstructions();
    var instr = void 0,
        instrs = this._instructions;
    var l = instrs.length;
    for (var i = this._storeIndex; i < l; i++) {
      if ((instr = instrs[i]).path !== false) {
        instr.exec(ctx);
      }
    }
  };
  Graphics.prototype.moveTo = function moveTo(x, y) {
    return this.append(new MoveTo(x, y), true);
  };
  Graphics.prototype.lineTo = function lineTo(x, y) {
    return this.append(new LineTo(x, y));
  };
  Graphics.prototype.arcTo = function arcTo(x1, y1, x2, y2, radius) {
    return this.append(new ArcTo(x1, y1, x2, y2, radius));
  };
  Graphics.prototype.arc = function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.append(new Arc(x, y, radius, startAngle, endAngle, anticlockwise));
  };
  Graphics.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    return this.append(new QuadraticCurveTo(cpx, cpy, x, y));
  };
  Graphics.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.append(new BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y));
  };
  Graphics.prototype.rect = function rect(x, y, w, h) {
    return this.append(new Rect(x, y, w, h));
  };
  Graphics.prototype.closePath = function closePath() {
    return this._activeInstructions.length ? this.append(new ClosePath()) : this;
  };
  Graphics.prototype.clear = function clear() {
    this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
    this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null;
    this._dirty = this._strokeIgnoreScale = false;
    return this;
  };
  Graphics.prototype.beginFill = function beginFill(color) {
    return this._setFill(color ? new Fill(color) : null);
  };
  Graphics.prototype.beginLinearGradientFill = function beginLinearGradientFill(colors, ratios, x0, y0, x1, y1) {
    return this._setFill(new Fill().linearGradient(colors, ratios, x0, y0, x1, y1));
  };
  Graphics.prototype.beginRadialGradientFill = function beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1) {
    return this._setFill(new Fill().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
  };
  Graphics.prototype.beginBitmapFill = function beginBitmapFill(image, repetition, matrix) {
    return this._setFill(new Fill(null, matrix).bitmap(image, repetition));
  };
  Graphics.prototype.endFill = function endFill() {
    return this.beginFill();
  };
  Graphics.prototype.setStrokeStyle = function setStrokeStyle(thickness) {
    var caps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var joints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var miterLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
    var ignoreScale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    this._updateInstructions(true);
    this._strokeStyle = this.command = new StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
    if (this._stroke) {
      this._stroke.ignoreScale = ignoreScale;
    }
    this._strokeIgnoreScale = ignoreScale;
    return this;
  };
  Graphics.prototype.setStrokeDash = function setStrokeDash(segments) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this._updateInstructions(true);
    this._strokeDash = this.command = new StrokeDash(segments, offset);
    return this;
  };
  Graphics.prototype.beginStroke = function beginStroke(color) {
    return this._setStroke(color ? new Stroke(color) : null);
  };
  Graphics.prototype.beginLinearGradientStroke = function beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1) {
    return this._setStroke(new Stroke().linearGradient(colors, ratios, x0, y0, x1, y1));
  };
  Graphics.prototype.beginRadialGradientStroke = function beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1) {
    return this._setStroke(new Stroke().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
  };
  Graphics.prototype.beginBitmapStroke = function beginBitmapStroke(image) {
    var repetition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "repeat";
    return this._setStroke(new Stroke().bitmap(image, repetition));
  };
  Graphics.prototype.endStroke = function endStroke() {
    return this.beginStroke();
  };
  Graphics.prototype.drawRoundRect = function drawRoundRect(x, y, w, h, radius) {
    return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
  };
  Graphics.prototype.drawRoundRectComplex = function drawRoundRectComplex(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
    return this.append(new RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL));
  };
  Graphics.prototype.drawCircle = function drawCircle(x, y, radius) {
    return this.append(new Circle(x, y, radius));
  };
  Graphics.prototype.drawEllipse = function drawEllipse(x, y, w, h) {
    return this.append(new Ellipse(x, y, w, h));
  };
  Graphics.prototype.drawPolyStar = function drawPolyStar(x, y, radius, sides, pointSize, angle) {
    return this.append(new PolyStar(x, y, radius, sides, pointSize, angle));
  };
  Graphics.prototype.append = function append(command, clean) {
    this._activeInstructions.push(command);
    this.command = command;
    if (!clean) {
      this._dirty = true;
    }
    return this;
  };
  Graphics.prototype.decodePath = function decodePath(str) {
    var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
    var paramCount = [2, 2, 4, 6, 0];
    var i = 0;
    var l = str.length;
    var params = [];
    var x = 0,
        y = 0;
    var base64 = Graphics.BASE_64;
    while (i < l) {
      var c = str.charAt(i);
      var n = base64[c];
      var fi = n >> 3;
      var f = instructions[fi];
      if (!f || n & 3) {
        throw "bad path data (@" + i + "):c";
      }
      var pl = paramCount[fi];
      if (!fi) {
        x = y = 0;
      }
      params.length = 0;
      i++;
      var charCount = (n >> 2 & 1) + 2;
      for (var p = 0; p < pl; p++) {
        var num = base64[str.charAt(i)];
        var sign = num >> 5 ? -1 : 1;
        num = (num & 31) << 6 | base64[str.charAt(i + 1)];
        if (charCount === 3) {
          num = num << 6 | base64[str.charAt(i + 2)];
        }
        num = sign * num / 10;
        if (p % 2) {
          x = num += x;
        } else {
          y = num += y;
        }
        params[p] = num;
        i += charCount;
      }
      f.apply(this, params);
    }
    return this;
  };
  Graphics.prototype.store = function store() {
    this._updateInstructions(true);
    this._storeIndex = this._instructions.length;
    return this;
  };
  Graphics.prototype.unstore = function unstore() {
    this._storeIndex = 0;
    return this;
  };
  Graphics.prototype.clone = function clone() {
    var o = new Graphics();
    o.command = this.command;
    o._stroke = this._stroke;
    o._strokeStyle = this._strokeStyle;
    o._strokeDash = this._strokeDash;
    o._strokeIgnoreScale = this._strokeIgnoreScale;
    o._fill = this._fill;
    o._instructions = this._instructions.slice();
    o._commitIndex = this._commitIndex;
    o._activeInstructions = this._activeInstructions.slice();
    o._dirty = this._dirty;
    o._storeIndex = this._storeIndex;
    return o;
  };
  Graphics.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  Graphics.prototype._updateInstructions = function _updateInstructions(commit) {
    var instr = this._instructions,
        active = this._activeInstructions,
        commitIndex = this._commitIndex;
    if (this._dirty && active.length) {
      instr.length = commitIndex;
      instr.push(Graphics.beginCmd);
      var l = active.length,
          ll = instr.length;
      instr.length = ll + l;
      for (var i = 0; i < l; i++) {
        instr[i + ll] = active[i];
      }
      if (this._fill) {
        instr.push(this._fill);
      }
      if (this._stroke) {
        if (this._strokeDash !== this._oldStrokeDash) {
          instr.push(this._strokeDash);
        }
        if (this._strokeStyle !== this._oldStrokeStyle) {
          instr.push(this._strokeStyle);
        }
        if (commit) {
          this._oldStrokeDash = this._strokeDash;
          this._oldStrokeStyle = this._strokeStyle;
        }
        instr.push(this._stroke);
      }
      this._dirty = false;
    }
    if (commit) {
      active.length = 0;
      this._commitIndex = instr.length;
    }
  };
  Graphics.prototype._setFill = function _setFill(fill) {
    this._updateInstructions(true);
    this.command = this._fill = fill;
    return this;
  };
  Graphics.prototype._setStroke = function _setStroke(stroke) {
    this._updateInstructions(true);
    if (this.command = this._stroke = stroke) {
      stroke.ignoreScale = this._strokeIgnoreScale;
    }
    return this;
  };
  createClass(Graphics, [{
    key: "instructions",
    get: function get() {
      this._updateInstructions();
      return this._instructions;
    }
  }], [{
    key: "LineTo",
    get: function get() {
      return LineTo;
    }
  }, {
    key: "MoveTo",
    get: function get() {
      return MoveTo;
    }
  }, {
    key: "ArcTo",
    get: function get() {
      return ArcTo;
    }
  }, {
    key: "Arc",
    get: function get() {
      return Arc;
    }
  }, {
    key: "QuadraticCurveTo",
    get: function get() {
      return QuadraticCurveTo;
    }
  }, {
    key: "BezierCurveTo",
    get: function get() {
      return BezierCurveTo;
    }
  }, {
    key: "Rect",
    get: function get() {
      return Rect;
    }
  }, {
    key: "ClosePath",
    get: function get() {
      return ClosePath;
    }
  }, {
    key: "BeginPath",
    get: function get() {
      return BeginPath;
    }
  }, {
    key: "Fill",
    get: function get() {
      return Fill;
    }
  }, {
    key: "Stroke",
    get: function get() {
      return Stroke;
    }
  }, {
    key: "StrokeStyle",
    get: function get() {
      return StrokeStyle;
    }
  }, {
    key: "StrokeDash",
    get: function get() {
      return StrokeDash;
    }
  }, {
    key: "RoundRect",
    get: function get() {
      return RoundRect;
    }
  }, {
    key: "Circle",
    get: function get() {
      return Circle;
    }
  }, {
    key: "Ellipse",
    get: function get() {
      return Ellipse;
    }
  }, {
    key: "PolyStar",
    get: function get() {
      return PolyStar;
    }
  }]);
  return Graphics;
}();

var LineTo = function () {
  function LineTo(x, y) {
    classCallCheck(this, LineTo);
    this.x = x;
    this.y = y;
  }
  LineTo.prototype.exec = function exec(ctx) {
    ctx.lineTo(this.x, this.y);
  };
  return LineTo;
}();

var MoveTo = function () {
  function MoveTo(x, y) {
    classCallCheck(this, MoveTo);
    this.x = x;
    this.y = y;
  }
  MoveTo.prototype.exec = function exec(ctx) {
    ctx.moveTo(this.x, this.y);
  };
  return MoveTo;
}();

var ArcTo = function () {
  function ArcTo(x1, y1, x2, y2, radius) {
    classCallCheck(this, ArcTo);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.radius = radius;
  }
  ArcTo.prototype.exec = function exec(ctx) {
    ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  };
  return ArcTo;
}();

var Arc = function () {
  function Arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    classCallCheck(this, Arc);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = !!anticlockwise;
  }
  Arc.prototype.exec = function exec(ctx) {
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  };
  return Arc;
}();

var QuadraticCurveTo = function () {
  function QuadraticCurveTo(cpx, cpy, x, y) {
    classCallCheck(this, QuadraticCurveTo);
    this.cpx = cpx;
    this.cpy = cpy;
    this.x = x;
    this.y = y;
  }
  QuadraticCurveTo.prototype.exec = function exec(ctx) {
    ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
  };
  return QuadraticCurveTo;
}();

var BezierCurveTo = function () {
  function BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    classCallCheck(this, BezierCurveTo);
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.x = x;
    this.y = y;
  }
  BezierCurveTo.prototype.exec = function exec(ctx) {
    ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
  };
  return BezierCurveTo;
}();

var Rect = function () {
  function Rect(x, y, w, h) {
    classCallCheck(this, Rect);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Rect.prototype.exec = function exec(ctx) {
    ctx.rect(this.x, this.y, this.w, this.h);
  };
  return Rect;
}();

var ClosePath = function () {
  function ClosePath() {
    classCallCheck(this, ClosePath);
  }
  ClosePath.prototype.exec = function exec(ctx) {
    ctx.closePath();
  };
  return ClosePath;
}();

var BeginPath = function () {
  function BeginPath() {
    classCallCheck(this, BeginPath);
  }
  BeginPath.prototype.exec = function exec(ctx) {
    ctx.beginPath();
  };
  return BeginPath;
}();

var Fill = function () {
  function Fill(style, matrix) {
    classCallCheck(this, Fill);
    this.style = style;
    this.matrix = matrix;
    this.path = false;
  }
  Fill.prototype.exec = function exec(ctx) {
    if (!this.style) {
      return;
    }
    ctx.fillStyle = this.style;
    var mtx = this.matrix;
    if (mtx) {
      ctx.save();
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }
    ctx.fill();
    if (mtx) {
      ctx.restore();
    }
  };
  Fill.prototype.linearGradient = function linearGradient(colors, ratios, x0, y0, x1, y1) {
    var o = this.style = Graphics._ctx.createLinearGradient(x0, y0, x1, y1);
    var l = colors.length;
    for (var i = 0; i < l; i++) {
      o.addColorStop(ratios[i], colors[i]);
    }
    o.props = {
      colors: colors,
      ratios: ratios,
      x0: x0,
      y0: y0,
      x1: x1,
      y1: y1,
      type: "linear"
    };
    return this;
  };
  Fill.prototype.radialGradient = function radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1) {
    var o = this.style = Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    var l = colors.length;
    for (var i = 0; i < l; i++) {
      o.addColorStop(ratios[i], colors[i]);
    }
    o.props = {
      colors: colors,
      ratios: ratios,
      x0: x0,
      y0: y0,
      r0: r0,
      x1: x1,
      y1: y1,
      r1: r1,
      type: "radial"
    };
    return this;
  };
  Fill.prototype.bitmap = function bitmap(image) {
    var repetition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (image.naturalWidth || image.getContext || image.readyState >= 2) {
      var o = this.style = Graphics._ctx.createPattern(image, repetition);
      o.props = {
        image: image,
        repetition: repetition,
        type: "bitmap"
      };
    }
    return this;
  };
  return Fill;
}();

var Stroke = function () {
  function Stroke(style, ignoreScale) {
    classCallCheck(this, Stroke);
    this.style = style;
    this.ignoreScale = ignoreScale;
    this.path = false;
  }
  Stroke.prototype.exec = function exec(ctx) {
    if (!this.style) {
      return;
    }
    ctx.strokeStyle = this.style;
    if (this.ignoreScale) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    ctx.stroke();
    if (this.ignoreScale) {
      ctx.restore();
    }
  };
  Stroke.prototype.linearGradient = function linearGradient() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    Fill.prototype.linearGradient.apply(this, args);
  };
  Stroke.prototype.radialGradient = function radialGradient() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    Fill.prototype.radialGradient.apply(this, args);
  };
  Stroke.prototype.bitmap = function bitmap() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    Fill.prototype.bitmap.apply(this, args);
  };
  return Stroke;
}();

var StrokeStyle = function () {
  function StrokeStyle(width) {
    var caps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "butt";
    var joints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "miter";
    var miterLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
    var ignoreScale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    classCallCheck(this, StrokeStyle);
    this.width = width;
    this.caps = caps;
    this.joints = joints;
    this.miterLimit = miterLimit;
    this.ignoreScale = ignoreScale;
    this.path = false;
  }
  StrokeStyle.prototype.exec = function exec(ctx) {
    ctx.lineWidth = this.width;
    ctx.lineCap = isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps];
    ctx.lineJoin = isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints];
    ctx.miterLimit = this.miterLimit;
    ctx.ignoreScale = this.ignoreScale;
  };
  return StrokeStyle;
}();

var StrokeDash = function () {
  function StrokeDash() {
    var segments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StrokeDash.EMPTY_SEGMENTS;
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    classCallCheck(this, StrokeDash);
    this.segments = segments;
    this.offset = offset;
  }
  StrokeDash.prototype.exec = function exec(ctx) {
    if (ctx.setLineDash) {
      ctx.setLineDash(this.segments);
      ctx.lineDashOffset = this.offset;
    }
  };
  createClass(StrokeDash, null, [{
    key: "EMPTY_SEGMENTS",
    get: function get() {
      return _EMPTY_SEGMENTS;
    }
  }]);
  return StrokeDash;
}();

var RoundRect = function () {
  function RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
    classCallCheck(this, RoundRect);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.radiusTL = radiusTL;
    this.radiusTR = radiusTR;
    this.radiusBR = radiusBR;
    this.radiusBL = radiusBL;
  }
  RoundRect.prototype.exec = function exec(ctx) {
    var max = (w < h ? w : h) / 2;
    var mTL = 0,
        mTR = 0,
        mBR = 0,
        mBL = 0;
    var x = this.x,
        y = this.y,
        w = this.w,
        h = this.h;
    var rTL = this.radiusTL,
        rTR = this.radiusTR,
        rBR = this.radiusBR,
        rBL = this.radiusBL;
    if (rTL < 0) {
      rTL *= mTL = -1;
    }
    if (rTL > max) {
      rTL = max;
    }
    if (rTR < 0) {
      rTR *= mTR = -1;
    }
    if (rTR > max) {
      rTR = max;
    }
    if (rBR < 0) {
      rBR *= mBR = -1;
    }
    if (rBR > max) {
      rBR = max;
    }
    if (rBL < 0) {
      rBL *= mBL = -1;
    }
    if (rBL > max) {
      rBL = max;
    }
    ctx.moveTo(x + w - rTR, y);
    ctx.arcTo(x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR);
    ctx.lineTo(x + w, y + h - rBR);
    ctx.arcTo(x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR);
    ctx.lineTo(x + rBL, y + h);
    ctx.arcTo(x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL);
    ctx.lineTo(x, y + rTL);
    ctx.arcTo(x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL);
    ctx.closePath();
  };
  return RoundRect;
}();

var Circle = function () {
  function Circle(x, y, radius) {
    classCallCheck(this, Circle);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  Circle.prototype.exec = function exec(ctx) {
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  };
  return Circle;
}();

var Ellipse = function () {
  function Ellipse(x, y, w, h) {
    classCallCheck(this, Ellipse);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Ellipse.prototype.exec = function exec(ctx) {
    var x = this.x,
        y = this.y;
    var w = this.w,
        h = this.h;
    var k = .5522848;
    var ox = w / 2 * k;
    var oy = h / 2 * k;
    var xe = x + w;
    var ye = y + h;
    var xm = x + w / 2;
    var ym = y + h / 2;
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  };
  return Ellipse;
}();

var PolyStar = function () {
  function PolyStar(x, y, radius, sides) {
    var pointSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var angle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    classCallCheck(this, PolyStar);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.pointSize = pointSize;
    this.angle = angle;
  }
  PolyStar.prototype.exec = function exec(ctx) {
    var x = this.x,
        y = this.y;
    var radius = this.radius;
    var angle = this.angle / 180 * Math.PI;
    var sides = this.sides;
    var ps = 1 - this.pointSize;
    var a = Math.PI / sides;
    ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    for (var i = 0; i < sides; i++) {
      angle += a;
      if (ps != 1) {
        ctx.lineTo(x + Math.cos(angle) * radius * ps, y + Math.sin(angle) * radius * ps);
      }
      angle += a;
      ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    }
    ctx.closePath();
  };
  return PolyStar;
}();

{
  var canvas$1 = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas$1.getContext) {
    Graphics._ctx = canvas$1.getContext("2d");
    canvas$1.width = canvas$1.height = 1;
  }
  Graphics.beginCmd = new BeginPath();
  Graphics.BASE_64 = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
    a: 26,
    b: 27,
    c: 28,
    d: 29,
    e: 30,
    f: 31,
    g: 32,
    h: 33,
    i: 34,
    j: 35,
    k: 36,
    l: 37,
    m: 38,
    n: 39,
    o: 40,
    p: 41,
    q: 42,
    r: 43,
    s: 44,
    t: 45,
    u: 46,
    v: 47,
    w: 48,
    x: 49,
    y: 50,
    z: 51,
    0: 52,
    1: 53,
    2: 54,
    3: 55,
    4: 56,
    5: 57,
    6: 58,
    7: 59,
    8: 60,
    9: 61,
    "+": 62,
    "/": 63
  };
  Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];
  Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
  Graphics.EMPTY_SEGMENTS = [];
}

var MovieClip = function (_Container) {
  inherits(MovieClip, _Container);
  function MovieClip(_ref) {
    var _ref$mode = _ref.mode,
        mode = _ref$mode === undefined ? MovieClip.INDEPENDENT : _ref$mode,
        _ref$startPosition = _ref.startPosition,
        startPosition = _ref$startPosition === undefined ? 0 : _ref$startPosition,
        _ref$loop = _ref.loop,
        loop = _ref$loop === undefined ? -1 : _ref$loop,
        _ref$paused = _ref.paused,
        paused = _ref$paused === undefined ? false : _ref$paused,
        _ref$frameBounds = _ref.frameBounds,
        frameBounds = _ref$frameBounds === undefined ? null : _ref$frameBounds,
        _ref$labels = _ref.labels,
        labels = _ref$labels === undefined ? null : _ref$labels;
    classCallCheck(this, MovieClip);
    var _this = possibleConstructorReturn(this, _Container.call(this));
    !MovieClip.inited && MovieClip.init();
    _this.mode = mode;
    _this.startPosition = startPosition;
    _this.loop = loop === true ? -1 : loop || 0;
    _this.currentFrame = 0;
    _this.timeline = new Timeline({
      useTicks: true,
      paused: true,
      mode: mode,
      startPosition: startPosition,
      loop: loop,
      frameBounds: frameBounds,
      labels: labels
    });
    _this.paused = paused;
    _this.actionsEnabled = true;
    _this.autoReset = true;
    _this.frameBounds = _this.frameBounds || props.frameBounds;
    _this.framerate = null;
    _this._synchOffset = 0;
    _this._rawPosition = -1;
    _this._t = 0;
    _this._managed = {};
    _this._bound_resolveState = _this._resolveState.bind(_this);
    return _this;
  }
  MovieClip.init = function init() {
    if (MovieClip.inited) {
      return;
    }
    MovieClipPlugin.install();
    MovieClip.inited = true;
  };
  MovieClip.prototype.isVisible = function isVisible() {
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
  };
  MovieClip.prototype.draw = function draw(ctx, ignoreCache) {
    if (this.drawCache(ctx, ignoreCache)) {
      return true;
    }
    this._updateState();
    _Container.prototype.draw.call(this, ctx, ignoreCache);
    return true;
  };
  MovieClip.prototype.play = function play() {
    this.paused = false;
  };
  MovieClip.prototype.stop = function stop() {
    this.paused = true;
  };
  MovieClip.prototype.gotoAndPlay = function gotoAndPlay(positionOrLabel) {
    this.paused = false;
    this._goto(positionOrLabel);
  };
  MovieClip.prototype.gotoAndStop = function gotoAndStop(positionOrLabel) {
    this.paused = true;
    this._goto(positionOrLabel);
  };
  MovieClip.prototype.advance = function advance(time) {
    var INDEPENDENT = MovieClip.INDEPENDENT;
    if (this.mode !== INDEPENDENT) {
      return;
    }
    var o = this,
        fps = o.framerate;
    while ((o = o.parent) && fps === null) {
      if (o.mode === INDEPENDENT) {
        fps = o._framerate;
      }
    }
    this._framerate = fps;
    if (this.paused) {
      return;
    }
    var t = fps !== null && fps !== -1 && time !== null ? time / (1e3 / fps) + this._t : 1;
    var frames = t | 0;
    this._t = t - frames;
    while (frames--) {
      this._updateTimeline(this._rawPosition + 1, false);
    }
  };
  MovieClip.prototype.clone = function clone() {
    throw "MovieClip cannot be cloned.";
  };
  MovieClip.prototype._updateState = function _updateState() {
    if (this._rawPosition === -1 || this.mode !== MovieClip.INDEPENDENT) {
      this._updateTimeline(-1);
    }
  };
  MovieClip.prototype._tick = function _tick(evtObj) {
    this.advance(evtObj && evtObj.delta);
    _Container.prototype._tick.call(this, evtObj);
  };
  MovieClip.prototype._goto = function _goto(positionOrLabel) {
    var pos = this.timeline.resolve(positionOrLabel);
    if (pos == null) {
      return;
    }
    this._t = 0;
    this._updateTimeline(pos, true);
  };
  MovieClip.prototype._reset = function _reset() {
    this._rawPosition = -1;
    this._t = this.currentFrame = 0;
    this.paused = false;
  };
  MovieClip.prototype._updateTimeline = function _updateTimeline(rawPosition, jump) {
    var synced = this.mode !== MovieClip.INDEPENDENT,
        tl = this.timeline;
    if (synced) {
      rawPosition = this.startPosition + (this.mode === MovieClip.SINGLE_FRAME ? 0 : this._synchOffset);
    }
    if (rawPosition < 1) {
      rawPosition = 0;
    }
    if (this._rawPosition === rawPosition && !synced) {
      return;
    }
    this._rawPosition = rawPosition;
    tl.loop = this.loop;
    tl.setPosition(rawPosition, synced || !this.actionsEnabled, jump, this._bound_resolveState);
  };
  MovieClip.prototype._renderFirstFrame = function _renderFirstFrame() {
    var tl = this.timeline,
        pos = tl.rawPosition;
    tl.setPosition(0, true, true, this._bound_resolveState);
    tl.rawPosition = pos;
  };
  MovieClip.prototype._resolveState = function _resolveState() {
    var tl = this.timeline;
    this.currentFrame = tl.position;
    for (var n in this._managed) {
      this._managed[n] = 1;
    }
    var tweens = tl.tweens;
    for (var _iterator = tweens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }
      var tween = _ref2;
      var target = tween.target;
      if (target === this || tween.passive) {
        continue;
      }
      var offset = tween._stepPosition;
      if (target instanceof DisplayObject) {
        this._addManagedChild(target, offset);
      } else {
        this._setState(target.state, offset);
      }
    }
    var kids = this.children;
    for (var i = kids.length - 1; i >= 0; i--) {
      var id = kids[i].id;
      if (this._managed[id] === 1) {
        this.removeChildAt(i);
        delete this._managed[id];
      }
    }
  };
  MovieClip.prototype._setState = function _setState(state, offset) {
    if (!state) {
      return;
    }
    for (var i = state.length - 1; i >= 0; i--) {
      var o = state[i];
      var target = o.t;
      var _props = o.p;
      for (var n in _props) {
        target[n] = _props[n];
      }
      this._addManagedChild(target, offset);
    }
  };
  MovieClip.prototype._addManagedChild = function _addManagedChild(child, offset) {
    if (child._off) {
      return;
    }
    this.addChildAt(child, 0);
    if (child instanceof MovieClip) {
      child._synchOffset = offset;
      if (child.mode === MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id]) {
        child._reset();
      }
    }
    this._managed[child.id] = 2;
  };
  MovieClip.prototype._getBounds = function _getBounds(matrix, ignoreTransform) {
    var bounds = this.getBounds();
    if (!bounds && this.frameBounds) {
      bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]);
    }
    if (bounds) {
      return this._transformBounds(bounds, matrix, ignoreTransform);
    }
    return _Container.prototype._getBounds.call(this, matrix, ignoreTransform);
  };
  createClass(MovieClip, [{
    key: "labels",
    get: function get() {
      return this.timeline.labels;
    }
  }, {
    key: "currentLabel",
    get: function get() {
      return this.timeline.getCurrentLabel();
    }
  }, {
    key: "duration",
    get: function get() {
      return this.timeline.duration;
    }
  }, {
    key: "totalFrames",
    get: function get() {
      return this.duration;
    }
  }]);
  return MovieClip;
}(Container);

{
  MovieClip.INDEPENDENT = "independent";
  MovieClip.SINGLE_FRAME = "single";
  MovieClip.SYNCHED = "synched";
  MovieClip.inited = false;
}

var MovieClipPlugin = function () {
  function MovieClipPlugin() {
    classCallCheck(this, MovieClipPlugin);
    throw "MovieClipPlugin cannot be instantiated.";
  }
  MovieClipPlugin.install = function install() {
    Tween.installPlugin(MovieClipPlugin);
  };
  MovieClipPlugin.init = function init(tween, prop, value) {
    return value;
  };
  MovieClipPlugin.tween = function tween(_tween, prop, value, startValues, endValues, ratio, wait, end) {
    if (!(_tween.target instanceof MovieClip)) {
      return value;
    }
    return ratio === 1 ? endValues[prop] : startValues[prop];
  };
  return MovieClipPlugin;
}();

{
  MovieClipPlugin.priority = 100;
}

var Shadow$1 = function () {
  function Shadow() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "black";
    var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var blur = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    classCallCheck(this, Shadow);
    this.color = color;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.blur = blur;
  }
  Shadow.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  Shadow.prototype.clone = function clone() {
    return new Shadow(this.color, this.offsetX, this.offsetY, this.blur);
  };
  return Shadow;
}();

{
  Shadow$1.identity = new Shadow$1("transparent");
}

var Shape = function (_DisplayObject) {
  inherits(Shape, _DisplayObject);
  function Shape() {
    var graphics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Graphics();
    classCallCheck(this, Shape);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    _this.graphics = graphics;
    return _this;
  }
  Shape.prototype.isVisible = function isVisible() {
    var hasContent = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  Shape.prototype.draw = function draw(ctx) {
    var ignoreCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (_DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
      return true;
    }
    this.graphics.draw(ctx, this);
    return true;
  };
  Shape.prototype.clone = function clone() {
    var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var g = recursive && this.graphics ? this.graphics.clone() : this.graphics;
    return this._cloneProps(new Shape(g));
  };
  return Shape;
}(DisplayObject);

var SpriteSheet = function (_EventDispatcher) {
  inherits(SpriteSheet, _EventDispatcher);
  function SpriteSheet(data) {
    classCallCheck(this, SpriteSheet);
    var _this = possibleConstructorReturn(this, _EventDispatcher.call(this));
    _this.complete = true;
    _this.framerate = 0;
    _this._animations = null;
    _this._frames = null;
    _this._images = null;
    _this._data = null;
    _this._loadCount = 0;
    _this._frameHeight = 0;
    _this._frameWidth = 0;
    _this._numFrames = 0;
    _this._regX = 0;
    _this._regY = 0;
    _this._spacing = 0;
    _this._margin = 0;
    _this._parseData(data);
    return _this;
  }
  SpriteSheet.prototype.getNumFrames = function getNumFrames(animation) {
    if (animation == null) {
      return this._frames ? this._frames.length : this._numFrames || 0;
    } else {
      var data = this._data[animation];
      if (data == null) {
        return 0;
      } else {
        return data.frames.length;
      }
    }
  };
  SpriteSheet.prototype.getAnimation = function getAnimation(name) {
    return this._data[name];
  };
  SpriteSheet.prototype.getFrame = function getFrame(frameIndex) {
    var frame = void 0;
    if (this._frames && (frame = this._frames[frameIndex])) {
      return frame;
    }
    return null;
  };
  SpriteSheet.prototype.getFrameBounds = function getFrameBounds(frameIndex) {
    var rectangle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rectangle();
    var frame = this.getFrame(frameIndex);
    return frame ? rectangle.setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null;
  };
  SpriteSheet.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  SpriteSheet.prototype.clone = function clone() {
    throw "SpriteSheet cannot be cloned.";
  };
  SpriteSheet.prototype._parseData = function _parseData(data) {
    var _this2 = this;
    if (data == null) {
      return;
    }
    this.framerate = data.framerate || 0;
    if (data.images) {
      var _loop = function _loop(_img) {
        var a = _this2._images = [];
        var src = void 0;
        if (typeof _img === "string") {
          src = _img;
          _img = document.createElement("img");
          _img.src = src;
        }
        a.push(_img);
        if (!_img.getContext && !_img.naturalWidth) {
          _this2._loadCount++;
          _this2.complete = false;
          _img.onload = function () {
            return _this2._handleImageLoad(src);
          };
          _img.onerror = function () {
            return _this2._handleImageError(src);
          };
        }
        img = _img;
      };
      for (var _iterator = data.images, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }
        var img = _ref;
        _loop(img);
      }
    }
    if (data.frames != null) {
      if (Array.isArray(data.frames)) {
        this._frames = [];
        for (var _iterator2 = data.frames, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }
          var arr = _ref2;
          this._frames.push({
            image: this._images[arr[4] ? arr[4] : 0],
            rect: new Rectangle(arr[0], arr[1], arr[2], arr[3]),
            regX: arr[5] || 0,
            regY: arr[6] || 0
          });
        }
      } else {
        var o = data.frames;
        this._frameWidth = o.width;
        this._frameHeight = o.height;
        this._regX = o.regX || 0;
        this._regY = o.regY || 0;
        this._spacing = o.spacing || 0;
        this._margin = o.margin || 0;
        this._numFrames = o.count;
        if (this._loadCount === 0) {
          this._calculateFrames();
        }
      }
    }
    this._animations = [];
    if (data.animations != null) {
      this._data = {};
      var _o = data.animations;
      for (var name in _o) {
        var anim = {
          name: name
        };
        var obj = _o[name];
        var a = void 0;
        if (typeof obj === "number") {
          a = anim.frames = [obj];
        } else if (Array.isArray(obj)) {
          if (obj.length === 1) {
            anim.frames = [obj[0]];
          } else {
            anim.speed = obj[3];
            anim.next = obj[2];
            a = anim.frames = [];
            for (var i = obj[0]; i <= obj[1]; i++) {
              a.push(i);
            }
          }
        } else {
          anim.speed = obj.speed;
          anim.next = obj.next;
          var frames = obj.frames;
          a = anim.frames = typeof frames === "number" ? [frames] : frames.slice(0);
        }
        if (anim.next === true || anim.next === undefined) {
          anim.next = name;
        }
        if (anim.next === false || a.length < 2 && anim.next === name) {
          anim.next = null;
        }
        if (!anim.speed) {
          anim.speed = 1;
        }
        this._animations.push(name);
        this._data[name] = anim;
      }
    }
  };
  SpriteSheet.prototype._handleImageLoad = function _handleImageLoad(src) {
    if (--this._loadCount === 0) {
      this._calculateFrames();
      this.complete = true;
      this.dispatchEvent("complete");
    }
  };
  SpriteSheet.prototype._handleImageError = function _handleImageError(src) {
    var errorEvent = new Event("error");
    errorEvent.src = src;
    this.dispatchEvent(errorEvent);
    if (--this._loadCount === 0) {
      this.dispatchEvent("complete");
    }
  };
  SpriteSheet.prototype._calculateFrames = function _calculateFrames() {
    if (this._frames || this._frameWidth === 0) {
      return;
    }
    this._frames = [];
    var maxFrames = this._numFrames || 1e5;
    var frameCount = 0,
        frameWidth = this._frameWidth,
        frameHeight = this._frameHeight;
    var spacing = this._spacing,
        margin = this._margin;
    imgLoop: for (var i = 0, imgs = this._images, l = imgs.length; i < l; i++) {
      var _img2 = imgs[i],
          imgW = _img2.width || _img2.naturalWidth,
          imgH = _img2.height || _img2.naturalHeight;
      var y = margin;
      while (y <= imgH - margin - frameHeight) {
        var x = margin;
        while (x <= imgW - margin - frameWidth) {
          if (frameCount >= maxFrames) {
            break imgLoop;
          }
          frameCount++;
          this._frames.push({
            image: _img2,
            rect: new Rectangle(x, y, frameWidth, frameHeight),
            regX: this._regX,
            regY: this._regY
          });
          x += frameWidth + spacing;
        }
        y += frameHeight + spacing;
      }
    }
    this._numFrames = frameCount;
  };
  createClass(SpriteSheet, [{
    key: "animations",
    get: function get() {
      return this._animations.slice();
    }
  }]);
  return SpriteSheet;
}(EventDispatcher);

var _H_OFFSETS = {
  start: 0,
  left: 0,
  center: -.5,
  end: -1,
  right: -1
};

var _V_OFFSETS = {
  top: 0,
  hanging: -.01,
  middle: -.4,
  alphabetic: -.8,
  ideographic: -.85,
  bottom: -1
};

var Text = function (_DisplayObject) {
  inherits(Text, _DisplayObject);
  function Text(text, font, color) {
    classCallCheck(this, Text);
    var _this = possibleConstructorReturn(this, _DisplayObject.call(this));
    _this.text = text;
    _this.font = font;
    _this.color = color;
    _this.textAlign = "left";
    _this.textBaseline = "top";
    _this.maxWidth = null;
    _this.outline = 0;
    _this.lineHeight = 0;
    _this.lineWidth = null;
    return _this;
  }
  Text.prototype.isVisible = function isVisible() {
    var hasContent = this.cacheCanvas || this.text != null && this.text !== "";
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  Text.prototype.draw = function draw(ctx, ignoreCache) {
    if (_DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
      return true;
    }
    var col = this.color || "#000";
    if (this.outline) {
      ctx.strokeStyle = col;
      ctx.lineWidth = this.outline * 1;
    } else {
      ctx.fillStyle = col;
    }
    this._drawText(this._prepContext(ctx));
    return true;
  };
  Text.prototype.getMeasuredWidth = function getMeasuredWidth() {
    return this._getMeasuredWidth(this.text);
  };
  Text.prototype.getMeasuredLineHeight = function getMeasuredLineHeight() {
    return this._getMeasuredWidth("M") * 1.2;
  };
  Text.prototype.getMeasuredHeight = function getMeasuredHeight() {
    return this._drawText(null, {}).height;
  };
  Text.prototype.getBounds = function getBounds() {
    var rect = _DisplayObject.prototype.getBounds.call(this);
    if (rect) {
      return rect;
    }
    if (this.text == null || this.text === "") {
      return null;
    }
    var o = this._drawText(null, {});
    var w = this.maxWidth && this.maxWidth < o.width ? this.maxWidth : o.width;
    var x = w * Text.H_OFFSETS[this.textAlign || "left"];
    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    var y = lineHeight * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._rectangle.setValues(x, y, w, o.height);
  };
  Text.prototype.getMetrics = function getMetrics() {
    var o = {
      lines: []
    };
    o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._drawText(null, o, o.lines);
  };
  Text.prototype.clone = function clone() {
    return this._cloneProps(new Text(this.text, this.font, this.color));
  };
  Text.prototype.toString = function toString() {
    return "[" + this.constructor.name + " (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
  };
  Text.prototype._cloneProps = function _cloneProps(o) {
    _DisplayObject.prototype._cloneProps.call(this, o);
    o.textAlign = this.textAlign;
    o.textBaseline = this.textBaseline;
    o.maxWidth = this.maxWidth;
    o.outline = this.outline;
    o.lineHeight = this.lineHeight;
    o.lineWidth = this.lineWidth;
    return o;
  };
  Text.prototype._prepContext = function _prepContext(ctx) {
    ctx.font = this.font || "10px sans-serif";
    ctx.textAlign = this.textAlign || "left";
    ctx.textBaseline = this.textBaseline || "top";
    ctx.lineJoin = "miter";
    ctx.miterLimit = 2.5;
    return ctx;
  };
  Text.prototype._drawText = function _drawText(ctx, o, lines) {
    var paint = !!ctx;
    if (!paint) {
      ctx = Text._workingContext;
      ctx.save();
      this._prepContext(ctx);
    }
    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    var maxW = 0,
        count = 0;
    var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
    for (var _iterator = hardLines, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }
      var str = _ref;
      var w = null;
      if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
        var words = str.split(/(\s)/);
        str = words[0];
        w = ctx.measureText(str).width;
        var l = words.length;
        for (var i = 1; i < l; i += 2) {
          var wordW = ctx.measureText(words[i] + words[i + 1]).width;
          if (w + wordW > this.lineWidth) {
            if (paint) {
              this._drawTextLine(ctx, str, count * lineHeight);
            }
            if (lines) {
              lines.push(str);
            }
            if (w > maxW) {
              maxW = w;
            }
            str = words[i + 1];
            w = ctx.measureText(str).width;
            count++;
          } else {
            str += words[i] + words[i + 1];
            w += wordW;
          }
        }
      }
      if (paint) {
        this._drawTextLine(ctx, str, count * lineHeight);
      }
      if (lines) {
        lines.push(str);
      }
      if (o && w == null) {
        w = ctx.measureText(str).width;
      }
      if (w > maxW) {
        maxW = w;
      }
      count++;
    }
    if (o) {
      o.width = maxW;
      o.height = count * lineHeight;
    }
    if (!paint) {
      ctx.restore();
    }
    return o;
  };
  Text.prototype._drawTextLine = function _drawTextLine(ctx, text, y) {
    if (this.outline) {
      ctx.strokeText(text, 0, y, this.maxWidth || 65535);
    } else {
      ctx.fillText(text, 0, y, this.maxWidth || 65535);
    }
  };
  Text.prototype._getMeasuredWidth = function _getMeasuredWidth(text) {
    var ctx = Text._workingContext;
    ctx.save();
    var w = this._prepContext(ctx).measureText(text).width;
    ctx.restore();
    return w;
  };
  createClass(Text, null, [{
    key: "H_OFFSETS",
    get: function get() {
      return _H_OFFSETS;
    }
  }, {
    key: "V_OFFSETS",
    get: function get() {
      return _V_OFFSETS;
    }
  }]);
  return Text;
}(DisplayObject);

{
  var canvas$2 = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas$2.getContext) {
    Text._workingContext = canvas$2.getContext("2d");
    canvas$2.width = canvas$2.height = 1;
  }
}

var AlphaMapFilter = function (_Filter) {
  inherits(AlphaMapFilter, _Filter);
  function AlphaMapFilter(alphaMap) {
    classCallCheck(this, AlphaMapFilter);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this.alphaMap = alphaMap;
    _this._alphaMap = null;
    _this._mapData = null;
    _this._mapTexture = null;
    _this.FRAG_SHADER_BODY = "\n\t\t\tuniform sampler2D uAlphaSampler;\n\n\t\t\tvoid main (void) {\n\t\t\t\tvec4 color = texture2D(uSampler, vRenderCoord);\n\t\t\t\tvec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);\n\n\t\t\t\t// some image formats can have transparent white rgba(1,1,1, 0) when put on the GPU, this means we need a slight tweak\n\t\t\t\t// using ceil ensure that the colour will be used so long as it exists but pure transparency will be treated black\n\t\t\t\tgl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));\n\t\t\t}\n\t\t";
    return _this;
  }
  AlphaMapFilter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {
    if (!this._mapTexture) {
      this._mapTexture = gl.createTexture();
    }
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._mapTexture);
    stage.setTextureParams(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.alphaMap);
    gl.uniform1i(gl.getUniformLocation(shaderProgram, "uAlphaSampler"), 1);
  };
  AlphaMapFilter.prototype.clone = function clone() {
    var o = new AlphaMapFilter(this.alphaMap);
    o._alphaMap = this._alphaMap;
    o._mapData = this._mapData;
    return o;
  };
  AlphaMapFilter.prototype._applyFilter = function _applyFilter(imageData) {
    if (!this.alphaMap) {
      return true;
    }
    if (!this._prepAlphaMap()) {
      return false;
    }
    var data = imageData.data;
    var map = this._mapData;
    var l = data.length;
    for (var i = 0; i < l; i += 4) {
      data[i + 3] = map[i] || 0;
    }
    return true;
  };
  AlphaMapFilter.prototype._prepAlphaMap = function _prepAlphaMap() {
    if (!this.alphaMap) {
      return false;
    }
    if (this.alphaMap === this._alphaMap && this._mapData) {
      return true;
    }
    this._mapData = null;
    var map = this._alphaMap = this.alphaMap;
    var canvas = map;
    var ctx = void 0;
    if (map instanceof HTMLCanvasElement) {
      ctx = canvas.getContext("2d");
    } else {
      canvas = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
      canvas.width = map.width;
      canvas.height = map.height;
      ctx = canvas.getContext("2d");
      ctx.drawImage(map, 0, 0);
    }
    try {
      this._mapData = ctx.getImageData(0, 0, map.width, map.height).data;
      return true;
    } catch (e) {
      return false;
    }
  };
  return AlphaMapFilter;
}(Filter);

var AlphaMaskFilter = function (_Filter) {
  inherits(AlphaMaskFilter, _Filter);
  function AlphaMaskFilter(mask) {
    classCallCheck(this, AlphaMaskFilter);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this.mask = mask;
    _this.usesContext = true;
    _this.FRAG_SHADER_BODY = "\n\t\t\tuniform sampler2D uAlphaSampler;\n\n\t\t\tvoid main (void) {\n\t\t\t\tvec4 color = texture2D(uSampler, vRenderCoord);\n\t\t\t\tvec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);\n\n\t\t\t\tgl_FragColor = vec4(color.rgb, color.a * alphaMap.a);\n\t\t\t}\n\t\t";
    return _this;
  }
  AlphaMaskFilter.prototype.applyFilter = function applyFilter(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    if (!this.mask) {
      return true;
    }
    targetCtx = targetCtx || ctx;
    if (targetX == null) {
      targetX = x;
    }
    if (targetY == null) {
      targetY = y;
    }
    targetCtx.save();
    if (ctx != targetCtx) {
      return false;
    }
    targetCtx.globalCompositeOperation = "destination-in";
    targetCtx.drawImage(this.mask, targetX, targetY);
    targetCtx.restore();
    return true;
  };
  AlphaMaskFilter.prototype.clone = function clone() {
    return new AlphaMaskFilter(this.mask);
  };
  AlphaMaskFilter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {
    if (!this._mapTexture) {
      this._mapTexture = gl.createTexture();
    }
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._mapTexture);
    stage.setTextureParams(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.mask);
    gl.uniform1i(gl.getUniformLocation(shaderProgram, "uAlphaSampler"), 1);
  };
  return AlphaMaskFilter;
}(Filter);

var _MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];

var _SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];

var BlurFilter = function (_Filter) {
  inherits(BlurFilter, _Filter);
  function BlurFilter() {
    var blurX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var blurY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    classCallCheck(this, BlurFilter);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this._blurX = blurX;
    _this._blurXTable = [];
    _this._lastBlurX = null;
    _this._blurY = blurY;
    _this._blurYTable = [];
    _this._lastBlurY = null;
    _this._quality = isNaN(quality) || quality < 1 ? 1 : quality;
    _this._lastQuality = null;
    _this.quality = _this._quality | 0;
    _this.FRAG_SHADER_TEMPLATE = "\n\t\t\tuniform float xWeight[{{blurX}}];\n\t\t\tuniform float yWeight[{{blurY}}];\n\t\t\tuniform vec2 textureOffset;\n\t\t\tvoid main (void) {\n\t\t\t\tvec4 color = vec4(0.0);\n\n\t\t\t\tfloat xAdj = ({{blurX}}.0-1.0)/2.0;\n\t\t\t\tfloat yAdj = ({{blurY}}.0-1.0)/2.0;\n\t\t\t\tvec2 sampleOffset;\n\n\t\t\t\tfor(int i=0; i<{{blurX}}; i++) {\n\t\t\t\t\tfor(int j=0; j<{{blurY}}; j++) {\n\t\t\t\t\t\tsampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));\n\t\t\t\t\t\tcolor += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = color.rgba;\n\t\t\t}\n\t\t";
    return _this;
  }
  BlurFilter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {
    gl.uniform1fv(gl.getUniformLocation(shaderProgram, "xWeight"), this._blurXTable);
    gl.uniform1fv(gl.getUniformLocation(shaderProgram, "yWeight"), this._blurYTable);
    gl.uniform2f(gl.getUniformLocation(shaderProgram, "textureOffset"), 2 / (stage._viewportWidth * this._quality), 2 / (stage._viewportHeight * this._quality));
  };
  BlurFilter.prototype.getBounds = function getBounds(rect) {
    var x = this.blurX | 0,
        y = this.blurY | 0;
    if (x <= 0 && y <= 0) {
      return rect;
    }
    var q = Math.pow(this.quality, .2);
    return (rect || new Rectangle()).pad(y * q + 1, x * q + 1, y * q + 1, x * q + 1);
  };
  BlurFilter.prototype.clone = function clone() {
    return new BlurFilter(this.blurX, this.blurY, this.quality);
  };
  BlurFilter.prototype._updateShader = function _updateShader() {
    var result = this.FRAG_SHADER_TEMPLATE;
    result = result.replace(/{{blurX}}/g, this._blurXTable.length.toFixed(0));
    result = result.replace(/{{blurY}}/g, this._blurYTable.length.toFixed(0));
    this.FRAG_SHADER_BODY = result;
  };
  BlurFilter.prototype._getTable = function _getTable(spread) {
    var EDGE = 4.2;
    if (spread <= 1) {
      return [1];
    }
    var result = [];
    var count = Math.ceil(spread * 2);
    count += count % 2 ? 0 : 1;
    var adjust = count / 2 | 0;
    for (var i = -adjust; i <= adjust; i++) {
      var x = i / adjust * EDGE;
      result.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -(Math.pow(x, 2) / 4)));
    }
    var factor = result.reduce(function (a, b) {
      return a + b;
    }, 0);
    return result.map(function (currentValue) {
      return currentValue / factor;
    });
  };
  BlurFilter.prototype._applyFilter = function _applyFilter(imageData) {
    var radiusX = this._blurX >> 1;
    if (isNaN(radiusX) || radiusX < 0) return false;
    var radiusY = this._blurY >> 1;
    if (isNaN(radiusY) || radiusY < 0) return false;
    if (radiusX === 0 && radiusY === 0) return false;
    var iterations = this.quality;
    if (isNaN(iterations) || iterations < 1) iterations = 1;
    iterations |= 0;
    if (iterations > 3) iterations = 3;
    if (iterations < 1) iterations = 1;
    var px = imageData.data;
    var x = 0,
        y = 0,
        i = 0,
        p = 0,
        yp = 0,
        yi = 0,
        yw = 0,
        r = 0,
        g = 0,
        b = 0,
        a = 0,
        pr = 0,
        pg = 0,
        pb = 0,
        pa = 0;
    var divx = radiusX + radiusX + 1 | 0;
    var divy = radiusY + radiusY + 1 | 0;
    var w = imageData.width | 0;
    var h = imageData.height | 0;
    var w1 = w - 1 | 0;
    var h1 = h - 1 | 0;
    var rxp1 = radiusX + 1 | 0;
    var ryp1 = radiusY + 1 | 0;
    var ssx = {
      r: 0,
      b: 0,
      g: 0,
      a: 0
    };
    var sx = ssx;
    for (i = 1; i < divx; i++) {
      sx = sx.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
    }
    sx.n = ssx;
    var ssy = {
      r: 0,
      b: 0,
      g: 0,
      a: 0
    };
    var sy = ssy;
    for (i = 1; i < divy; i++) {
      sy = sy.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
    }
    sy.n = ssy;
    var si = null;
    var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
    var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
    var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
    var sty = BlurFilter.SHG_TABLE[radiusY] | 0;
    while (iterations-- > 0) {
      yw = yi = 0;
      var ms = mtx;
      var ss = stx;
      for (y = h; --y > -1;) {
        r = rxp1 * (pr = px[yi | 0]);
        g = rxp1 * (pg = px[yi + 1 | 0]);
        b = rxp1 * (pb = px[yi + 2 | 0]);
        a = rxp1 * (pa = px[yi + 3 | 0]);
        sx = ssx;
        for (i = rxp1; --i > -1;) {
          sx.r = pr;
          sx.g = pg;
          sx.b = pb;
          sx.a = pa;
          sx = sx.n;
        }
        for (i = 1; i < rxp1; i++) {
          p = yi + ((w1 < i ? w1 : i) << 2) | 0;
          r += sx.r = px[p];
          g += sx.g = px[p + 1];
          b += sx.b = px[p + 2];
          a += sx.a = px[p + 3];
          sx = sx.n;
        }
        si = ssx;
        for (x = 0; x < w; x++) {
          px[yi++] = r * ms >>> ss;
          px[yi++] = g * ms >>> ss;
          px[yi++] = b * ms >>> ss;
          px[yi++] = a * ms >>> ss;
          p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2;
          r -= si.r - (si.r = px[p]);
          g -= si.g - (si.g = px[p + 1]);
          b -= si.b - (si.b = px[p + 2]);
          a -= si.a - (si.a = px[p + 3]);
          si = si.n;
        }
        yw += w;
      }
      ms = mty;
      ss = sty;
      for (x = 0; x < w; x++) {
        yi = x << 2 | 0;
        r = ryp1 * (pr = px[yi]) | 0;
        g = ryp1 * (pg = px[yi + 1 | 0]) | 0;
        b = ryp1 * (pb = px[yi + 2 | 0]) | 0;
        a = ryp1 * (pa = px[yi + 3 | 0]) | 0;
        sy = ssy;
        for (i = 0; i < ryp1; i++) {
          sy.r = pr;
          sy.g = pg;
          sy.b = pb;
          sy.a = pa;
          sy = sy.n;
        }
        yp = w;
        for (i = 1; i <= radiusY; i++) {
          yi = yp + x << 2;
          r += sy.r = px[yi];
          g += sy.g = px[yi + 1];
          b += sy.b = px[yi + 2];
          a += sy.a = px[yi + 3];
          sy = sy.n;
          if (i < h1) {
            yp += w;
          }
        }
        yi = x;
        si = ssy;
        if (iterations > 0) {
          for (y = 0; y < h; y++) {
            p = yi << 2;
            px[p + 3] = pa = a * ms >>> ss;
            if (pa > 0) {
              px[p] = r * ms >>> ss;
              px[p + 1] = g * ms >>> ss;
              px[p + 2] = b * ms >>> ss;
            } else {
              px[p] = px[p + 1] = px[p + 2] = 0;
            }
            p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2;
            r -= si.r - (si.r = px[p]);
            g -= si.g - (si.g = px[p + 1]);
            b -= si.b - (si.b = px[p + 2]);
            a -= si.a - (si.a = px[p + 3]);
            si = si.n;
            yi += w;
          }
        } else {
          for (y = 0; y < h; y++) {
            p = yi << 2;
            px[p + 3] = pa = a * ms >>> ss;
            if (pa > 0) {
              pa = 255 / pa;
              px[p] = (r * ms >>> ss) * pa;
              px[p + 1] = (g * ms >>> ss) * pa;
              px[p + 2] = (b * ms >>> ss) * pa;
            } else {
              px[p] = px[p + 1] = px[p + 2] = 0;
            }
            p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2;
            r -= si.r - (si.r = px[p]);
            g -= si.g - (si.g = px[p + 1]);
            b -= si.b - (si.b = px[p + 2]);
            a -= si.a - (si.a = px[p + 3]);
            si = si.n;
            yi += w;
          }
        }
      }
    }
    return true;
  };
  createClass(BlurFilter, [{
    key: "blurX",
    get: function get() {
      return this._blurX;
    },
    set: function set(blurX) {
      if (isNaN(blurX) || blurX < 0) {
        blurX = 0;
      }
      this._blurX = blurX;
    }
  }, {
    key: "blurY",
    get: function get() {
      return this._blurY;
    },
    set: function set(blurY) {
      if (isNaN(blurY) || blurY < 0) {
        blurY = 0;
      }
      this._blurY = blurY;
    }
  }, {
    key: "quality",
    get: function get() {
      return this._quality;
    },
    set: function set(quality) {
      if (isNaN(quality) || quality < 0) {
        quality = 0;
      }
      this._quality = quality | 0;
    }
  }, {
    key: "_buildShader",
    get: function get() {
      var xChange = this._lastBlurX !== this._blurX;
      var yChange = this._lastBlurY !== this._blurY;
      var qChange = this._lastQuality !== this._quality;
      if (xChange || yChange || qChange) {
        if (xChange || qChange) {
          this._blurXTable = this._getTable(this._blurX * this._quality);
        }
        if (yChange || qChange) {
          this._blurYTable = this._getTable(this._blurY * this._quality);
        }
        this._updateShader();
        this._lastBlurX = this._blurX;
        this._lastBlurY = this._blurY;
        this._lastQuality = this._quality;
        return undefined;
      }
      return this._compiledShader;
    }
  }, {
    key: "_builtShader",
    set: function set(value) {
      this._compiledShader;
    }
  }], [{
    key: "MUL_TABLE",
    get: function get() {
      return _MUL_TABLE;
    }
  }, {
    key: "SHG_TABLE",
    get: function get() {
      return _SHG_TABLE;
    }
  }]);
  return BlurFilter;
}(Filter);

var ColorFilter = function (_Filter) {
  inherits(ColorFilter, _Filter);
  function ColorFilter() {
    var redMultiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var greenMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var blueMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var alphaMultiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var redOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var greenOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var blueOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var alphaOffset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    classCallCheck(this, ColorFilter);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this.redMultiplier = redMultiplier;
    _this.greenMultiplier = greenMultiplier;
    _this.blueMultiplier = blueMultiplier;
    _this.alphaMultiplier = alphaMultiplier;
    _this.redOffset = redOffset;
    _this.greenOffset = greenOffset;
    _this.blueOffset = blueOffset;
    _this.alphaOffset = alphaOffset;
    _this.FRAG_SHADER_BODY = "\n\t\t\tuniform vec4 uColorMultiplier;\n\t\t\tuniform vec4 uColorOffset;\n\n\t\t\tvoid main (void) {\n\t\t\t\tvec4 color = texture2D(uSampler, vRenderCoord);\n\n\t\t\t\tgl_FragColor = (color * uColorMultiplier) + uColorOffset;\n\t\t\t}\n\t\t";
    return _this;
  }
  ColorFilter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {
    gl.uniform4f(gl.getUniformLocation(shaderProgram, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier);
    gl.uniform4f(gl.getUniformLocation(shaderProgram, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255);
  };
  ColorFilter.prototype.clone = function clone() {
    return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
  };
  ColorFilter.prototype._applyFilter = function _applyFilter(imageData) {
    var data = imageData.data;
    var l = data.length;
    for (var i = 0; i < l; i += 4) {
      data[i] = data[i] * this.redMultiplier + this.redOffset;
      data[i + 1] = data[i + 1] * this.greenMultiplier + this.greenOffset;
      data[i + 2] = data[i + 2] * this.blueMultiplier + this.blueOffset;
      data[i + 3] = data[i + 3] * this.alphaMultiplier + this.alphaOffset;
    }
    return true;
  };
  return ColorFilter;
}(Filter);

var _DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];

var _IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];

var _LENGTH = 25;

var ColorMatrix = function () {
  function ColorMatrix(brightness, contrast, saturation, hue) {
    classCallCheck(this, ColorMatrix);
    this.setColor(brightness, contrast, saturation, hue);
  }
  ColorMatrix.prototype.setColor = function setColor(brightness, contrast, saturation, hue) {
    return this.reset().adjustColor(brightness, contrast, saturation, hue);
  };
  ColorMatrix.prototype.reset = function reset() {
    return this.copy(ColorMatrix.IDENTITY_MATRIX);
  };
  ColorMatrix.prototype.adjustColor = function adjustColor(brightness, contrast, saturation, hue) {
    this.adjustHue(hue);
    this.adjustContrast(contrast);
    this.adjustBrightness(brightness);
    return this.adjustSaturation(saturation);
  };
  ColorMatrix.prototype.adjustBrightness = function adjustBrightness(value) {
    if (value === 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 255);
    this._multiplyMatrix([1, 0, 0, 0, value, 0, 1, 0, 0, value, 0, 0, 1, 0, value, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  ColorMatrix.prototype.adjustContrast = function adjustContrast(value) {
    if (value === 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 100);
    var x = void 0;
    if (value < 0) {
      x = 127 + value / 100 * 127;
    } else {
      x = value % 1;
      if (x === 0) {
        x = ColorMatrix.DELTA_INDEX[value];
      } else {
        x = ColorMatrix.DELTA_INDEX[value << 0] * (1 - x) + ColorMatrix.DELTA_INDEX[(value << 0) + 1] * x;
      }
      x = x * 127 + 127;
    }
    this._multiplyMatrix([x / 127, 0, 0, 0, .5 * (127 - x), 0, x / 127, 0, 0, .5 * (127 - x), 0, 0, x / 127, 0, .5 * (127 - x), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  ColorMatrix.prototype.adjustSaturation = function adjustSaturation(value) {
    if (value === 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 100);
    var x = 1 + (value > 0 ? 3 * value / 100 : value / 100);
    var lumR = .3086;
    var lumG = .6094;
    var lumB = .082;
    this._multiplyMatrix([lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  ColorMatrix.prototype.adjustHue = function adjustHue(value) {
    if (value === 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 180) / 180 * Math.PI;
    var cosVal = Math.cos(value);
    var sinVal = Math.sin(value);
    var lumR = .213;
    var lumG = .715;
    var lumB = .072;
    this._multiplyMatrix([lumR + cosVal * (1 - lumR) + sinVal * -lumR, lumG + cosVal * -lumG + sinVal * -lumG, lumB + cosVal * -lumB + sinVal * (1 - lumB), 0, 0, lumR + cosVal * -lumR + sinVal * .143, lumG + cosVal * (1 - lumG) + sinVal * .14, lumB + cosVal * -lumB + sinVal * -.283, 0, 0, lumR + cosVal * -lumR + sinVal * -(1 - lumR), lumG + cosVal * -lumG + sinVal * lumG, lumB + cosVal * (1 - lumB) + sinVal * lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  ColorMatrix.prototype.concat = function concat(matrix) {
    matrix = this._fixMatrix(matrix);
    if (matrix.length != ColorMatrix.LENGTH) {
      return this;
    }
    this._multiplyMatrix(matrix);
    return this;
  };
  ColorMatrix.prototype.clone = function clone() {
    return new ColorMatrix().copy(this);
  };
  ColorMatrix.prototype.toArray = function toArray() {
    var arr = [];
    var l = ColorMatrix.LENGTH;
    for (var i = 0; i < l; i++) {
      arr[i] = this[i];
    }
    return arr;
  };
  ColorMatrix.prototype.copy = function copy(matrix) {
    var l = ColorMatrix.LENGTH;
    for (var i = 0; i < l; i++) {
      this[i] = matrix[i];
    }
    return this;
  };
  ColorMatrix.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  ColorMatrix.prototype._multiplyMatrix = function _multiplyMatrix(matrix) {
    var col = [];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        col[j] = this[j + i * 5];
      }
      for (var _j = 0; _j < 5; _j++) {
        var val = 0;
        for (var k = 0; k < 5; k++) {
          val += matrix[_j + k * 5] * col[k];
        }
        this[_j + i * 5] = val;
      }
    }
  };
  ColorMatrix.prototype._cleanValue = function _cleanValue(value, limit) {
    return Math.min(limit, Math.max(-limit, value));
  };
  ColorMatrix.prototype._fixMatrix = function _fixMatrix(matrix) {
    if (matrix instanceof ColorMatrix) {
      matrix = matrix.toArray();
    }
    if (matrix.length < ColorMatrix.LENGTH) {
      matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH));
    } else if (matrix.length > ColorMatrix.LENGTH) {
      matrix = matrix.slice(0, ColorMatrix.LENGTH);
    }
    return matrix;
  };
  createClass(ColorMatrix, null, [{
    key: "DELTA_INDEX",
    get: function get() {
      return _DELTA_INDEX;
    }
  }, {
    key: "IDENTITY_MATRIX",
    get: function get() {
      return _IDENTITY_MATRIX;
    }
  }, {
    key: "LENGTH",
    get: function get() {
      return _LENGTH;
    }
  }]);
  return ColorMatrix;
}();

var ColorMatrixFilter = function (_Filter) {
  inherits(ColorMatrixFilter, _Filter);
  function ColorMatrixFilter(matrix) {
    classCallCheck(this, ColorMatrixFilter);
    var _this = possibleConstructorReturn(this, _Filter.call(this));
    _this.matrix = matrix;
    _this.FRAG_SHADER_BODY = "\n\t\t\tuniform mat4 uColorMatrix;\n\t\t\tuniform vec4 uColorMatrixOffset;\n\n\t\t\tvoid main (void) {\n\t\t\t\tvec4 color = texture2D(uSampler, vRenderCoord);\n\n\t\t\t\tmat4 m = uColorMatrix;\n\t\t\t\tvec4 newColor = vec4(0,0,0,0);\n\t\t\t\tnewColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];\n\t\t\t\tnewColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];\n\t\t\t\tnewColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];\n\t\t\t\tnewColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];\n\n\t\t\t\tgl_FragColor = newColor + uColorMatrixOffset;\n\t\t\t}\n\t\t";
    return _this;
  }
  ColorMatrixFilter.prototype.shaderParamSetup = function shaderParamSetup(gl, stage, shaderProgram) {
    var mat = this.matrix;
    var colorMatrix = new Float32Array([mat[0], mat[1], mat[2], mat[3], mat[5], mat[6], mat[7], mat[8], mat[10], mat[11], mat[12], mat[13], mat[15], mat[16], mat[17], mat[18]]);
    gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "uColorMatrix"), false, colorMatrix);
    gl.uniform4f(gl.getUniformLocation(shaderProgram, "uColorMatrixOffset"), mat[4] / 255, mat[9] / 255, mat[14] / 255, mat[19] / 255);
  };
  ColorMatrixFilter.prototype.clone = function clone() {
    return new ColorMatrixFilter(this.matrix);
  };
  ColorMatrixFilter.prototype._applyFilter = function _applyFilter(imageData) {
    var data = imageData.data;
    var l = data.length;
    var r = void 0,
        g = void 0,
        b = void 0,
        a = void 0;
    var mtx = this.matrix;
    var m0 = mtx[0],
        m1 = mtx[1],
        m2 = mtx[2],
        m3 = mtx[3],
        m4 = mtx[4];
    var m5 = mtx[5],
        m6 = mtx[6],
        m7 = mtx[7],
        m8 = mtx[8],
        m9 = mtx[9];
    var m10 = mtx[10],
        m11 = mtx[11],
        m12 = mtx[12],
        m13 = mtx[13],
        m14 = mtx[14];
    var m15 = mtx[15],
        m16 = mtx[16],
        m17 = mtx[17],
        m18 = mtx[18],
        m19 = mtx[19];
    for (var i = 0; i < l; i += 4) {
      r = data[i];
      g = data[i + 1];
      b = data[i + 2];
      a = data[i + 3];
      data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4;
      data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9;
      data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14;
      data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19;
    }
    return true;
  };
  return ColorMatrixFilter;
}(Filter);

var ButtonHelper = function () {
  function ButtonHelper(target) {
    var outLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "out";
    var overLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "over";
    var downLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "down";
    var play = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var hitArea = arguments[5];
    var hitLabel = arguments[6];
    classCallCheck(this, ButtonHelper);
    if (!target.addEventListener) {
      return;
    }
    this.target = target;
    this.overLabel = overLabel;
    this.outLabel = outLabel;
    this.downLabel = downLabel == null;
    this.play = play;
    this._isPressed = false;
    this._isOver = false;
    this._enabled = false;
    target.mouseChildren = false;
    this.enabled = true;
    this.handleEvent({});
    if (hitArea) {
      if (hitLabel) {
        hitArea.actionsEnabled = false;
        hitArea.gotoAndStop && hitArea.gotoAndStop(hitLabel);
      }
      target.hitArea = hitArea;
    }
  }
  ButtonHelper.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  ButtonHelper.prototype.handleEvent = function handleEvent(evt) {
    var label = void 0,
        t = this.target,
        type = evt.type;
    if (type === "mousedown") {
      this._isPressed = true;
      label = this.downLabel;
    } else if (type === "pressup") {
      this._isPressed = false;
      label = this._isOver ? this.overLabel : this.outLabel;
    } else if (type === "rollover") {
      this._isOver = true;
      label = this._isPressed ? this.downLabel : this.overLabel;
    } else {
      this._isOver = false;
      label = this._isPressed ? this.overLabel : this.outLabel;
    }
    if (this.play) {
      t.gotoAndPlay && t.gotoAndPlay(label);
    } else {
      t.gotoAndStop && t.gotoAndStop(label);
    }
  };
  ButtonHelper.prototype._reset = function _reset() {
    var p = this.paused;
    this.__reset();
    this.paused = p;
  };
  createClass(ButtonHelper, [{
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(enabled) {
      if (enabled === this._enabled) {
        return;
      }
      var o = this.target;
      this._enabled = enabled;
      if (enabled) {
        o.cursor = "pointer";
        o.addEventListener("rollover", this);
        o.addEventListener("rollout", this);
        o.addEventListener("mousedown", this);
        o.addEventListener("pressup", this);
        if (o._reset) {
          o.__reset = o._reset;
          o._reset = this._reset;
        }
      } else {
        o.cursor = null;
        o.removeEventListener("rollover", this);
        o.removeEventListener("rollout", this);
        o.removeEventListener("mousedown", this);
        o.removeEventListener("pressup", this);
        if (o.__reset) {
          o._reset = o.__reset;
          delete o.__reset;
        }
      }
    }
  }]);
  return ButtonHelper;
}();

var Touch = function () {
  function Touch() {
    classCallCheck(this, Touch);
    throw "Touch cannot be instantiated";
  }
  Touch.isSupported = function isSupported() {
    return !!("ontouchstart" in window || window.navigator["msPointerEnabled"] && window.navigator["msMaxTouchPoints"] > 0 || window.navigator["pointerEnabled"] && window.navigator["maxTouchPoints"] > 0);
  };
  Touch.enable = function enable(stage) {
    var singleTouch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var allowDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!stage || !stage.canvas || !Touch.isSupported()) {
      return false;
    }
    if (stage.__touch) {
      return true;
    }
    stage.__touch = {
      pointers: {},
      multitouch: !singleTouch,
      preventDefault: !allowDefault,
      count: 0
    };
    if ("ontouchstart" in window) {
      Touch._IOS_enable(stage);
    } else if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
      Touch._IE_enable(stage);
    }
    return true;
  };
  Touch.disable = function disable(stage) {
    if (!stage) {
      return;
    }
    if ("ontouchstart" in window) {
      Touch._IOS_disable(stage);
    } else if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
      Touch._IE_disable(stage);
    }
    delete stage.__touch;
  };
  Touch._IOS_enable = function _IOS_enable(stage) {
    var canvas = stage.canvas;
    var f = stage.__touch.f = function (e) {
      return Touch._IOS_handleEvent(stage, e);
    };
    canvas.addEventListener("touchstart", f, false);
    canvas.addEventListener("touchmove", f, false);
    canvas.addEventListener("touchend", f, false);
    canvas.addEventListener("touchcancel", f, false);
  };
  Touch._IOS_disable = function _IOS_disable(stage) {
    var canvas = stage.canvas;
    if (!canvas) {
      return;
    }
    var f = stage.__touch.f;
    canvas.removeEventListener("touchstart", f, false);
    canvas.removeEventListener("touchmove", f, false);
    canvas.removeEventListener("touchend", f, false);
    canvas.removeEventListener("touchcancel", f, false);
  };
  Touch._IOS_handleEvent = function _IOS_handleEvent(stage, e) {
    if (!stage) {
      return;
    }
    if (stage.__touch.preventDefault) {
      e.preventDefault && e.preventDefault();
    }
    var touches = e.changedTouches;
    var type = e.type;
    var l = touches.length;
    for (var _iterator = touches, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }
      var touch = _ref;
      var id = touch.identifier;
      if (touch.target != stage.canvas) {
        continue;
      }
      if (type === "touchstart") {
        this._handleStart(stage, id, e, touch.pageX, touch.pageY);
      } else if (type === "touchmove") {
        this._handleMove(stage, id, e, touch.pageX, touch.pageY);
      } else if (type === "touchend" || type === "touchcancel") {
        this._handleEnd(stage, id, e);
      }
    }
  };
  Touch._IE_enable = function _IE_enable(stage) {
    var canvas = stage.canvas;
    var f = stage.__touch.f = function (e) {
      return Touch._IE_handleEvent(stage, e);
    };
    if (window.navigator["pointerEnabled"] === undefined) {
      canvas.addEventListener("MSPointerDown", f, false);
      window.addEventListener("MSPointerMove", f, false);
      window.addEventListener("MSPointerUp", f, false);
      window.addEventListener("MSPointerCancel", f, false);
      if (stage.__touch.preventDefault) {
        canvas.style.msTouchAction = "none";
      }
    } else {
      canvas.addEventListener("pointerdown", f, false);
      window.addEventListener("pointermove", f, false);
      window.addEventListener("pointerup", f, false);
      window.addEventListener("pointercancel", f, false);
      if (stage.__touch.preventDefault) {
        canvas.style.touchAction = "none";
      }
    }
    stage.__touch.activeIDs = {};
  };
  Touch._IE_disable = function _IE_disable(stage) {
    var f = stage.__touch.f;
    if (window.navigator["pointerEnabled"] === undefined) {
      window.removeEventListener("MSPointerMove", f, false);
      window.removeEventListener("MSPointerUp", f, false);
      window.removeEventListener("MSPointerCancel", f, false);
      if (stage.canvas) {
        stage.canvas.removeEventListener("MSPointerDown", f, false);
      }
    } else {
      window.removeEventListener("pointermove", f, false);
      window.removeEventListener("pointerup", f, false);
      window.removeEventListener("pointercancel", f, false);
      if (stage.canvas) {
        stage.canvas.removeEventListener("pointerdown", f, false);
      }
    }
  };
  Touch._IE_handleEvent = function _IE_handleEvent(stage, e) {
    if (!stage) {
      return;
    }
    if (stage.__touch.preventDefault) {
      e.preventDefault && e.preventDefault();
    }
    var type = e.type;
    var id = e.pointerId;
    var ids = stage.__touch.activeIDs;
    if (type === "MSPointerDown" || type === "pointerdown") {
      if (e.srcElement != stage.canvas) {
        return;
      }
      ids[id] = true;
      this._handleStart(stage, id, e, e.pageX, e.pageY);
    } else if (ids[id]) {
      if (type === "MSPointerMove" || type === "pointermove") {
        this._handleMove(stage, id, e, e.pageX, e.pageY);
      } else if (type === "MSPointerUp" || type === "MSPointerCancel" || type === "pointerup" || type === "pointercancel") {
        delete ids[id];
        this._handleEnd(stage, id, e);
      }
    }
  };
  Touch._handleStart = function _handleStart(stage, id, e, x, y) {
    var props = stage.__touch;
    if (!props.multitouch && props.count) {
      return;
    }
    var ids = props.pointers;
    if (ids[id]) {
      return;
    }
    ids[id] = true;
    props.count++;
    stage._handlePointerDown(id, e, x, y);
  };
  Touch._handleMove = function _handleMove(stage, id, e, x, y) {
    if (!stage.__touch.pointers[id]) {
      return;
    }
    stage._handlePointerMove(id, e, x, y);
  };
  Touch._handleEnd = function _handleEnd(stage, id, e) {
    var props = stage.__touch;
    var ids = props.pointers;
    if (!ids[id]) {
      return;
    }
    props.count--;
    stage._handlePointerUp(id, e, true);
    delete ids[id];
  };
  return Touch;
}();

var _ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";

var _ERR_RUNNING = "a build is already running";

var SpriteSheetBuilder = function (_EventDispatcher) {
  inherits(SpriteSheetBuilder, _EventDispatcher);
  function SpriteSheetBuilder() {
    var framerate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    classCallCheck(this, SpriteSheetBuilder);
    var _this = possibleConstructorReturn(this, _EventDispatcher.call(this));
    _this.maxWidth = 2048;
    _this.maxHeight = 2048;
    _this.spriteSheet = null;
    _this.scale = 1;
    _this.padding = 1;
    _this.timeSlice = .3;
    _this.progress = -1;
    _this.framerate = framerate;
    _this._frames = [];
    _this._animations = {};
    _this._data = null;
    _this._nextFrameIndex = 0;
    _this._index = 0;
    _this._timerID = null;
    _this._scale = 1;
    return _this;
  }
  SpriteSheetBuilder.prototype.addFrame = function addFrame(source, sourceRect) {
    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var setupFunction = arguments[3];
    var setupData = arguments[4];
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var rect = sourceRect || source.bounds || source.nominalBounds || source.getBounds && source.getBounds();
    if (!rect) {
      return null;
    }
    return this._frames.push({
      source: source,
      sourceRect: rect,
      scale: scale,
      funct: setupFunction,
      data: setupData,
      index: this._frames.length,
      height: rect.height * scale
    }) - 1;
  };
  SpriteSheetBuilder.prototype.addAnimation = function addAnimation(name, frames, next, speed) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this._animations[name] = {
      frames: frames,
      next: next,
      speed: speed
    };
  };
  SpriteSheetBuilder.prototype.addMovieClip = function addMovieClip(source, sourceRect) {
    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var setupFunction = arguments[3];
    var setupData = arguments[4];
    var labelFunction = arguments[5];
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var rects = source.frameBounds;
    var rect = sourceRect || source.bounds || source.nominalBounds || source.getBounds && source.getBounds();
    if (!rect && !rects) {
      return;
    }
    var baseFrameIndex = this._frames.length;
    var duration = source.timeline.duration;
    for (var i = 0; i < duration; i++) {
      var r = rects && rects[i] ? rects[i] : rect;
      this.addFrame(source, r, scale, this._setupMovieClipFrame, {
        i: i,
        f: setupFunction,
        d: setupData
      });
    }
    var labels = source.timeline._labels;
    var lbls = [];
    for (var n in labels) {
      lbls.push({
        index: labels[n],
        label: n
      });
    }
    if (lbls.length) {
      lbls.sort(function (a, b) {
        return a.index - b.index;
      });
      for (var _i = 0, l = lbls.length; _i < l; _i++) {
        var label = lbls[_i].label;
        var start = baseFrameIndex + lbls[_i].index;
        var end = baseFrameIndex + (_i === l - 1 ? duration : lbls[_i + 1].index);
        var frames = [];
        for (var _i2 = start; _i2 < end; _i2++) {
          frames.push(_i2);
        }
        if (labelFunction) {
          label = labelFunction(label, source, start, end);
          if (!label) {
            continue;
          }
        }
        this.addAnimation(label, frames, true);
      }
    }
  };
  SpriteSheetBuilder.prototype.build = function build() {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this._startBuild();
    while (this._drawNext()) {}
    this._endBuild();
    return this.spriteSheet;
  };
  SpriteSheetBuilder.prototype.buildAsync = function buildAsync(timeSlice) {
    var _this2 = this;
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this.timeSlice = timeSlice;
    this._startBuild();
    this._timerID = setTimeout(function () {
      return _this2._run();
    }, 50 - Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50);
  };
  SpriteSheetBuilder.prototype.stopAsync = function stopAsync() {
    clearTimeout(this._timerID);
    this._data = null;
  };
  SpriteSheetBuilder.prototype.clone = function clone() {
    throw "SpriteSheetBuilder cannot be cloned.";
  };
  SpriteSheetBuilder.prototype.toString = function toString() {
    return "[" + this.constructor.name + "]";
  };
  SpriteSheetBuilder.prototype._startBuild = function _startBuild() {
    var pad = this.padding || 0;
    this.progress = 0;
    this.spriteSheet = null;
    this._index = 0;
    this._scale = this.scale;
    var dataFrames = [];
    this._data = {
      images: [],
      frames: dataFrames,
      framerate: this.framerate,
      animations: this._animations
    };
    var frames = this._frames.slice();
    frames.sort(function (a, b) {
      return a.height <= b.height ? -1 : 1;
    });
    if (frames[frames.length - 1].height + pad * 2 > this.maxHeight) {
      throw SpriteSheetBuilder.ERR_DIMENSIONS;
    }
    var y = 0,
        x = 0;
    var img = 0;
    while (frames.length) {
      var o = this._fillRow(frames, y, img, dataFrames, pad);
      if (o.w > x) {
        x = o.w;
      }
      y += o.h;
      if (!o.h || !frames.length) {
        var canvas = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.width = this._getSize(x, this.maxWidth);
        canvas.height = this._getSize(y, this.maxHeight);
        this._data.images[img] = canvas;
        if (!o.h) {
          x = y = 0;
          img++;
        }
      }
    }
  };
  SpriteSheetBuilder.prototype._setupMovieClipFrame = function _setupMovieClipFrame(source, data) {
    var ae = source.actionsEnabled;
    source.actionsEnabled = false;
    source.gotoAndStop(data.i);
    source.actionsEnabled = ae;
    data.f && data.f(source, data.d, data.i);
  };
  SpriteSheetBuilder.prototype._getSize = function _getSize(size, max) {
    var pow = 4;
    while (Math.pow(2, ++pow) < size) {}
    return Math.min(max, Math.pow(2, pow));
  };
  SpriteSheetBuilder.prototype._fillRow = function _fillRow(frames, y, img, dataFrames, pad) {
    var w = this.maxWidth;
    var maxH = this.maxHeight;
    y += pad;
    var h = maxH - y;
    var x = pad;
    var height = 0;
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      var sc = this._scale * frame.scale;
      var rect = frame.sourceRect;
      var source = frame.source;
      var rx = Math.floor(sc * rect.x - pad);
      var ry = Math.floor(sc * rect.y - pad);
      var rh = Math.ceil(sc * rect.height + pad * 2);
      var rw = Math.ceil(sc * rect.width + pad * 2);
      if (rw > w) {
        throw SpriteSheetBuilder.ERR_DIMENSIONS;
      }
      if (rh > h || x + rw > w) {
        continue;
      }
      frame.img = img;
      frame.rect = new Rectangle(x, y, rw, rh);
      height = height || rh;
      frames.splice(i, 1);
      dataFrames[frame.index] = [x, y, rw, rh, img, Math.round(-rx + sc * source.regX - pad), Math.round(-ry + sc * source.regY - pad)];
      x += rw;
    }
    return {
      w: x,
      h: height
    };
  };
  SpriteSheetBuilder.prototype._endBuild = function _endBuild() {
    this.spriteSheet = new SpriteSheet(this._data);
    this._data = null;
    this.progress = 1;
    this.dispatchEvent("complete");
  };
  SpriteSheetBuilder.prototype._run = function _run() {
    var _this3 = this;
    var ts = Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50;
    var t = new Date().getTime() + ts;
    var complete = false;
    while (t > new Date().getTime()) {
      if (!this._drawNext()) {
        complete = true;
        break;
      }
    }
    if (complete) {
      this._endBuild();
    } else {
      this._timerID = setTimeout(function () {
        return _this3._run();
      }, 50 - ts);
    }
    var p = this.progress = this._index / this._frames.length;
    if (this.hasEventListener("progress")) {
      var evt = new Event("progress");
      evt.progress = p;
      this.dispatchEvent(evt);
    }
  };
  SpriteSheetBuilder.prototype._drawNext = function _drawNext() {
    var frame = this._frames[this._index];
    var sc = frame.scale * this._scale;
    var rect = frame.rect;
    var sourceRect = frame.sourceRect;
    var canvas = this._data.images[frame.img];
    var ctx = canvas.getContext("2d");
    frame.funct && frame.funct(frame.source, frame.data);
    ctx.save();
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.clip();
    ctx.translate(Math.ceil(rect.x - sourceRect.x * sc), Math.ceil(rect.y - sourceRect.y * sc));
    ctx.scale(sc, sc);
    frame.source.draw(ctx);
    ctx.restore();
    return ++this._index < this._frames.length;
  };
  createClass(SpriteSheetBuilder, null, [{
    key: "ERR_DIMENSIONS",
    get: function get() {
      return _ERR_DIMENSIONS;
    }
  }, {
    key: "ERR_RUNNING",
    get: function get() {
      return _ERR_RUNNING;
    }
  }]);
  return SpriteSheetBuilder;
}(EventDispatcher);

var SpriteSheetUtils = function () {
  function SpriteSheetUtils() {
    classCallCheck(this, SpriteSheetUtils);
    throw "SpriteSheetUtils cannot be instantiated";
  }
  SpriteSheetUtils.extractFrame = function extractFrame(spriteSheet, frameOrAnimation) {
    if (isNaN(frameOrAnimation)) {
      frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0];
    }
    var data = spriteSheet.getFrame(frameOrAnimation);
    if (!data) {
      return null;
    }
    var r = data.rect;
    var canvas = SpriteSheetUtils._workingCanvas;
    canvas.width = r.width;
    canvas.height = r.height;
    SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
    var img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    return img;
  };
  SpriteSheetUtils.mergeAlpha = function mergeAlpha(rgbImage, alphaImage, canvas) {
    if (!canvas) {
      canvas = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    }
    canvas.width = Math.max(alphaImage.width, rgbImage.width);
    canvas.height = Math.max(alphaImage.height, rgbImage.height);
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.drawImage(rgbImage, 0, 0);
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(alphaImage, 0, 0);
    ctx.restore();
    return canvas;
  };
  SpriteSheetUtils._flip = function _flip(spriteSheet, count, h, v) {
    var imgs = spriteSheet._images;
    var canvas = SpriteSheetUtils._workingCanvas;
    var ctx = SpriteSheetUtils._workingContext;
    var il = imgs.length / count;
    for (var i = 0; i < il; i++) {
      var src = imgs[i];
      src.__tmp = i;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1);
      canvas.width = src.width;
      canvas.height = src.height;
      ctx.setTransform(h ? -1 : 1, 0, 0, v ? -1 : 1, h ? src.width : 0, v ? src.height : 0);
      ctx.drawImage(src, 0, 0);
      var img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.width = src.width || src.naturalWidth;
      img.height = src.height || src.naturalHeight;
      imgs.push(img);
    }
    var frames = spriteSheet._frames;
    var fl = frames.length / count;
    for (var _i = 0; _i < fl; _i++) {
      var _src = frames[_i];
      var rect = _src.rect.clone();
      var _img = imgs[_src.image.__tmp + il * count];
      var frame = {
        image: _img,
        rect: rect,
        regX: _src.regX,
        regY: _src.regY
      };
      if (h) {
        rect.x = (_img.width || _img.naturalWidth) - rect.x - rect.width;
        frame.regX = rect.width - _src.regX;
      }
      if (v) {
        rect.y = (_img.height || _img.naturalHeight) - rect.y - rect.height;
        frame.regY = rect.height - _src.regY;
      }
      frames.push(frame);
    }
    var sfx = "_" + (h ? "h" : "") + (v ? "v" : "");
    var names = spriteSheet._animations;
    var data = spriteSheet._data;
    var al = names.length / count;
    for (var _i2 = 0; _i2 < al; _i2++) {
      var name = names[_i2];
      var _src2 = data[name];
      var anim = {
        name: name + sfx,
        speed: _src2.speed,
        next: _src2.next,
        frames: []
      };
      if (_src2.next) {
        anim.next += sfx;
      }
      var _frames = _src2.frames;
      for (var _i3 = 0, l = _frames.length; _i3 < l; _i3++) {
        anim.frames.push(_frames[_i3] + fl * count);
      }
      data[anim.name] = anim;
      names.push(anim.name);
    }
  };
  return SpriteSheetUtils;
}();

{
  var canvas$3 = window.createjs && createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas$3.getContext) {
    SpriteSheetUtils._workingCanvas = canvas$3;
    SpriteSheetUtils._workingContext = canvas$3.getContext("2d");
    canvas$3.width = canvas$3.height = 1;
  }
}

var _alternateOutput = null;

var WebGLInspector = function (_EventDispatcher) {
  inherits(WebGLInspector, _EventDispatcher);
  function WebGLInspector(stage) {
    classCallCheck(this, WebGLInspector);
    var _this = possibleConstructorReturn(this, _EventDispatcher.call(this));
    _this._stage = stage;
    return _this;
  }
  WebGLInspector.dispProps = function dispProps(item) {
    var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var p = "\tP: " + item.x.toFixed(2) + "x" + item.y.toFixed(2) + "\t";
    var r = "\tR: " + item.regX.toFixed(2) + "x" + item.regY.toFixed(2) + "\t";
    WebGLInspector._log(prepend, item.toString() + "\t", p, r);
  };
  WebGLInspector._log = function _log() {
    if (WebGLInspector.alternateOutput) {
      var _WebGLInspector$alter;
      (_WebGLInspector$alter = WebGLInspector.alternateOutput).log.apply(_WebGLInspector$alter, arguments);
    } else {
      var _console;
      (_console = console).log.apply(_console, arguments);
    }
  };
  WebGLInspector.prototype.log = function log(stage) {
    if (!stage) {
      stage = this._stage;
    }
    WebGLInspector._log("Batches Per Draw: " + (stage._batchID / stage._drawID).toFixed(4));
    this.logContextInfo(stage._webGLContext);
    this.logDepth(stage.children, "");
    this.logTextureFill(stage);
  };
  WebGLInspector.prototype.toggleGPUDraw = function toggleGPUDraw(stage, enabled) {
    if (!stage) {
      stage = this._stage;
    }
    if (enabled === undefined) {
      enabled = !!stage._drawBuffers_;
    }
    if (enabled && stage._drawBuffers_) {
      stage._drawBuffers = stage._drawBuffers_;
      stage._drawBuffers_ = undefined;
    } else {
      stage._drawBuffers_ = stage._drawBuffers;
      stage._drawBuffers = function _inspectorDrawBuffers(gl) {
        if (this.vocalDebug) {
          WebGLInspector._log("BlankDraw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
        }
      };
    }
  };
  WebGLInspector.prototype.logDepth = function logDepth(children) {
    var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var logFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLInspector._log;
    if (!children) {
      children = this._stage.children;
    }
    var l = children.length;
    for (var i = 0; i < l; i++) {
      var child = children[i];
      logFunc(prepend + "-", child);
      if (child.children && child.children.length) {
        this.logDepth(child.children, "|" + prepend, logFunc);
      }
    }
  };
  WebGLInspector.prototype.logContextInfo = function logContextInfo(gl) {
    if (!gl) {
      gl = this._stage._webGLContext;
    }
    var data = "\n\t\t\t== LOG:\n\n\t\t\tMax textures per draw: " + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS) + "\n\n\t\t\tMax textures active: " + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS) + "\n\n\t\t\t\n\n\t\t\tMax texture size: " + gl.getParameter(gl.MAX_TEXTURE_SIZE) / 2 + "\n\n\t\t\tMax cache size: " + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) / 2 + "\n\n\t\t\t\n\n\t\t\tMax attributes per vertex: " + gl.getParameter(gl.MAX_VERTEX_ATTRIBS) + "\n\n\t\t\tWebGL Version string: " + gl.getParameter(gl.VERSION) + "\n\n\t\t\t======\n\t\t";
    WebGLInspector._log(data);
  };
  WebGLInspector.prototype.logTextureFill = function logTextureFill(stage) {
    if (!stage) {
      stage = this._stage;
    }
    var dict = stage._textureDictionary;
    var count = stage._batchTextureCount;
    WebGLInspector._log(textureMax + ": " + count);
    var output = [];
    for (var n in dict) {
      var str = n.replace(window.location.origin, "");
      var tex = dict[n];
      var shifted = tex._lastActiveIndex ? tex._lastActiveIndex === tex._activeIndex : false;
      output.push({
        src: src,
        element: tex,
        shifted: shifted
      });
      tex._lastActiveIndex = tex._activeIndex;
    }
    output.sort(function (a, b) {
      if (a.element._drawID === stage._drawID) {
        return 1;
      }
      if (a.element._drawID < b.element._drawID) {
        return -1;
      }
      return 0;
    });
    var l = output.length;
    for (var i = 0; i < l; i++) {
      var out = output[i];
      var active = out.element._drawID === stage._drawID;
      WebGLInspector._log("[" + out.src + "] " + (active ? "ACTIVE" : "stale") + " " + (out.shifted ? "steady" : "DRIFT"), out.element);
    }
  };
  createClass(WebGLInspector, null, [{
    key: "alternateOutput",
    get: function get() {
      return _alternateOutput;
    },
    set: function set(alternateOutput) {
      _alternateOutput = alternateOutput;
    }
  }]);
  return WebGLInspector;
}(EventDispatcher);

exports.StageGL = StageGL;

exports.Stage = Stage;

exports.Container = Container;

exports.DisplayObject = DisplayObject;

exports.Bitmap = Bitmap;

exports.BitmapText = BitmapText;

exports.DOMElement = DOMElement;

exports.Graphics = Graphics;

exports.MovieClip = MovieClip;

exports.Shadow = Shadow$1;

exports.Shape = Shape;

exports.Sprite = Sprite;

exports.SpriteSheet = SpriteSheet;

exports.Text = Text;

exports.MouseEvent = MouseEvent;

exports.AlphaMapFilter = AlphaMapFilter;

exports.AlphaMaskFilter = AlphaMaskFilter;

exports.BitmapCache = BitmapCache;

exports.BlurFilter = BlurFilter;

exports.ColorFilter = ColorFilter;

exports.ColorMatrix = ColorMatrix;

exports.ColorMatrixFilter = ColorMatrixFilter;

exports.Filter = Filter;

exports.DisplayProps = DisplayProps;

exports.Matrix2D = Matrix2D;

exports.Point = Point;

exports.Rectangle = Rectangle;

exports.ButtonHelper = ButtonHelper;

exports.Touch = Touch;

exports.SpriteSheetBuilder = SpriteSheetBuilder;

exports.SpriteSheetUtils = SpriteSheetUtils;

exports.UID = UID;

exports.WebGLInspector = WebGLInspector;

exports.Event = Event;

exports.EventDispatcher = EventDispatcher;

var cjs = window.createjs = window.createjs || {};

var v = cjs.v = cjs.v || {};

v.easeljs = "NEXT";
//# sourceMappingURL=maps/easeljs.common.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractTween2 = __webpack_require__(2);

var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);

var _Ease = __webpack_require__(9);

var _Ticker = __webpack_require__(10);

var _Ticker2 = _interopRequireDefault(_Ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license Tween
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Visit http://createjs.com/ for documentation, updates and examples.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017 gskinner.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * obtaining a copy of this software and associated documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * files (the "Software"), to deal in the Software without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * restriction, including without limitation the rights to use,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Software is furnished to do so, subject to the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Tweens properties for a single target. Methods can be chained to create complex animation sequences:
 *
 * @example
 * Tween.get(target)
 *   .wait(500)
 *   .to({ alpha: 0, visible: false }, 1000)
 *   .call(handleComplete);
 *
 * Multiple tweens can share a target, however if they affect the same properties there could be unexpected
 * behaviour. To stop all tweens on an object, use {@link tweenjs.Tween#removeTweens} or pass `override:true`
 * in the props argument.
 *
 * 	createjs.Tween.get(target, {override:true}).to({x:100});
 *
 * Subscribe to the {@link tweenjs.Tween#event:change} event to be notified when the tween position changes.
 *
 * 	createjs.Tween.get(target, {override:true}).to({x:100}).addEventListener("change", handleChange);
 * 	function handleChange(event) {
 * 		// The tween changed.
 * 	}
 *
 * @see tweenjs.Tween.get
 *
 * @memberof tweenjs
 * @extends AbstractTween
 *
 * @param {Object} target The target object that will have its properties tweened.
 * @param {Object} [props] The configuration properties to apply to this instance (ex. `{loop:-1, paused:true}`).
 * @param {boolean} [props.useTicks]
 * @param {boolean} [props.ignoreGlobalPause]
 * @param {number|boolean} [props.loop]
 * @param {boolean} [props.reversed]
 * @param {boolean} [props.bounce]
 * @param {number} [props.timeScale]
 * @param {Object} [props.pluginData]
 * @param {boolean} [props.paused]
 * @param {*} [props.position] indicates the initial position for this tween
 * @param {*} [props.onChange] adds the specified function as a listener to the `change` event
 * @param {*} [props.onComplete] adds the specified function as a listener to the `complete` event
 * @param {*} [props.override] if true, removes all existing tweens for the target
 */
var Tween = function (_AbstractTween) {
	_inherits(Tween, _AbstractTween);

	function Tween(target, props) {
		_classCallCheck(this, Tween);

		/**
   * Allows you to specify data that will be used by installed plugins. Each plugin uses this differently, but in general
   * you specify data by assigning it to a property of `pluginData` with the same name as the plugin.
   * Note that in many cases, this data is used as soon as the plugin initializes itself for the tween.
   * As such, this data should be set before the first `to` call in most cases.
   *
   * Some plugins also store working data in this object, usually in a property named `_PluginClassName`.
   * See the documentation for individual plugins for more details.
   *
   * @example
   * myTween.pluginData.SmartRotation = data;
   * myTween.pluginData.SmartRotation_disabled = true;
   *
   *
   * @default null
   * @type {Object}
   */
		var _this = _possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this, props));

		_this.pluginData = null;

		/**
   * The target of this tween. This is the object on which the tweened properties will be changed.
   * @type {Object}
   * @readonly
   */
		_this.target = target;

		/**
   * Indicates the tween's current position is within a passive wait.
   * @type {boolean}
   * @default false
   * @readonly
   */
		_this.passive = false;

		/**
   * @private
   * @type {TweenStep}
   */
		_this._stepHead = new TweenStep(null, 0, 0, {}, null, true);

		/**
   * @private
   * @type {TweenStep}
   */
		_this._stepTail = _this._stepHead;

		/**
   * The position within the current step. Used by MovieClip.
   * @private
   * @type {number}
   * @default 0
   */
		_this._stepPosition = 0;

		/**
   * @private
   * @type {TweenAction}
   * @default null
   */
		_this._actionHead = null;

		/**
   * @private
   * @type {TweenAction}
   * @default null
   */
		_this._actionTail = null;

		/**
   * Plugins added to this tween instance.
   * @private
   * @type {Object[]}
   * @default null
   */
		_this._plugins = null;

		/**
   * Hash for quickly looking up added plugins. Null until a plugin is added.
   * @private
   * @type {Object}
   * @default null
   */
		_this._pluginIds = null;

		/**
   * Used by plugins to inject new properties.
   * @private
   * @type {Object}
   * @default null
   */
		_this._injected = null;

		if (props) {
			_this.pluginData = props.pluginData;
			if (props.override) {
				Tween.removeTweens(target);
			}
		}
		if (!_this.pluginData) {
			_this.pluginData = {};
		}

		_this._init(props);
		return _this;
	}

	/**
  * Returns a new tween instance. This is functionally identical to using `new Tween(...)`, but may look cleaner
  * with the chained syntax of TweenJS.
  *
  * @static
  * @example
  * let tween = Tween.get(target).to({ x: 100 }, 500);
  * // equivalent to:
  * let tween = new Tween(target).to({ x: 100 }, 500);
  *
  * @param {Object} target The target object that will have its properties tweened.
  * @param {Object} [props] The configuration properties to apply to this instance (ex. `{loop:-1, paused:true}`).
  * @param {boolean} [props.useTicks]
  * @param {boolean} [props.ignoreGlobalPause]
  * @param {number|boolean} [props.loop]
  * @param {boolean} [props.reversed]
  * @param {boolean} [props.bounce]
  * @param {number} [props.timeScale]
  * @param {Object} [props.pluginData]
  * @param {boolean} [props.paused]
  * @param {*} [props.position] indicates the initial position for this tween
  * @param {*} [props.onChange] adds the specified function as a listener to the `change` event
  * @param {*} [props.onComplete] adds the specified function as a listener to the `complete` event
  * @param {*} [props.override] if true, removes all existing tweens for the target
  * @return {Tween} A reference to the created tween.
  */


	_createClass(Tween, [{
		key: "wait",


		/**
   * Adds a wait (essentially an empty tween).
   *
   * @example
   * // This tween will wait 1s before alpha is faded to 0.
   * Tween.get(target)
   *   .wait(1000)
   *   .to({ alpha: 0 }, 1000);
   *
   * @param {number} duration The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
   * @param {boolean} [passive=false] Tween properties will not be updated during a passive wait. This
   * is mostly useful for use with {@link tweenjs.Timeline} instances that contain multiple tweens
   * affecting the same target at different times.
   * @chainable
   */
		value: function wait(duration) {
			var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if (duration > 0) {
				this._addStep(+duration, this._stepTail.props, null, passive);
			}
			return this;
		}

		/**
   * Adds a tween from the current values to the specified properties. Set duration to 0 to jump to these value.
   * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
   * properties will be set at the end of the specified duration.
   *
   * @example
   * Tween.get(target)
   *   .to({ alpha: 0, visible: false }, 1000);
   *
   * @param {Object} props An object specifying property target values for this tween (Ex. `{x:300}` would tween the x
   * property of the target to 300).
   * @param {number} [duration=0] The duration of the tween in milliseconds (or in ticks if `useTicks` is true).
   * @param {Function} [ease=Ease.linear] The easing function to use for this tween. See the {@link tweenjs.Ease}
   * class for a list of built-in ease functions.
   * @chainable
   */

	}, {
		key: "to",
		value: function to(props) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Ease.linear;

			if (duration < 0) {
				duration = 0;
			}
			var step = this._addStep(+duration, null, ease);
			this._appendProps(props, step);
			return this;
		}

		/**
   * Adds a label that can be used with {@link tweenjs.Tween#gotoAndPlay}/{@link tweenjs.Tween#gotoAndStop}
   * at the current point in the tween.
   *
   * @example
   * let tween = Tween.get(foo)
   *   .to({ x: 100 }, 1000)
   *   .label("myLabel")
   *   .to({ x: 200 }, 1000);
   * // ...
   * tween.gotoAndPlay("myLabel"); // would play from 1000ms in.
   *
   * @param {string} label The label name.
   * @chainable
   */

	}, {
		key: "label",
		value: function label(name) {
			this.addLabel(name, this.duration);
			return this;
		}

		/**
   * Adds an action to call the specified function.
   *
   * @example
   * // would call myFunction() after 1 second.
   * Tween.get()
   *   .wait(1000)
   *   .call(myFunction);
   *
   * @param {Function} callback The function to call.
   * @param {Array} [params]. The parameters to call the function with. If this is omitted, then the function
   * will be called with a single param pointing to this tween.
   * @param {Object} [scope]. The scope to call the function in. If omitted, it will be called in the target's scope.
   * @chainable
   */

	}, {
		key: "call",
		value: function call(callback, params, scope) {
			return this._addAction(scope || this.target, callback, params || [this]);
		}

		/**
   * Adds an action to set the specified props on the specified target. If `target` is null, it will use this tween's
   * target. Note that for properties on the target object, you should consider using a zero duration {@link tweenjs.Tween#to}
   * operation instead so the values are registered as tweened props.
   *
   * @example
   * tween.wait(1000)
   *   .set({ visible: false }, foo);
   *
   * @param {Object} props The properties to set (ex. `{ visible: false }`).
   * @param {Object} [target] The target to set the properties on. If omitted, they will be set on the tween's target.
   * @chainable
   */

	}, {
		key: "set",
		value: function set(props, target) {
			return this._addAction(target || this.target, this._set, [props]);
		}

		/**
   * Adds an action to play (unpause) the specified tween. This enables you to sequence multiple tweens.
   *
   * @example
   * tween.to({ x: 100 }, 500)
   *   .play(otherTween);
   *
   * @param {Tween} [tween] The tween to play. Defaults to this tween.
   * @chainable
   */

	}, {
		key: "play",
		value: function play(tween) {
			return this._addAction(tween || this, this._set, [{ paused: false }]);
		}

		/**
   * Adds an action to pause the specified tween.
   * At 60fps the tween will advance by ~16ms per tick, if the tween above was at 999ms prior to the current tick, it
    * will advance to 1015ms (15ms into the second "step") and then pause.
   *
   * @example
   * tween.pause(otherTween)
   *   .to({ alpha: 1 }, 1000)
   *   .play(otherTween);
   *
   * // Note that this executes at the end of a tween update,
   * // so the tween may advance beyond the time the pause action was inserted at.
    *
    * tween.to({ foo: 0 }, 1000)
    *   .pause()
    *   .to({ foo: 1 }, 1000);
   *
   * @param {Tween} [tween] The tween to pause. Defaults to this tween.
   * @chainable
   */

	}, {
		key: "pause",
		value: function pause(tween) {
			return this._addAction(tween || this, this._set, [{ paused: false }]);
		}

		/**
   * @throws Tween cannot be cloned.
   */

	}, {
		key: "clone",
		value: function clone() {
			throw "Tween can not be cloned.";
		}

		/**
   * @private
   * @param {Object} plugin
   */

	}, {
		key: "_addPlugin",
		value: function _addPlugin(plugin) {
			var ids = this._pluginIds || (this._pluginIds = {}),
			    id = plugin.id;
			if (!id || ids[id]) {
				return;
			} // already added

			ids[id] = true;
			var plugins = this._plugins || (this._plugins = []),
			    priority = plugin.priority || 0;
			for (var _i = 0, l = plugins.length; _i < l; _i++) {
				if (priority < plugins[_i].priority) {
					plugins.splice(_i, 0, plugin);
					return;
				}
			}
			plugins.push(plugin);
		}

		/**
   * @private
   * @param {} jump
   * @param {boolean} end
    */

	}, {
		key: "_updatePosition",
		value: function _updatePosition(jump, end) {
			var step = this._stepHead.next,
			    t = this.position,
			    d = this.duration;
			if (this.target && step) {
				// find our new step index:
				var stepNext = step.next;
				while (stepNext && stepNext.t <= t) {
					step = step.next;stepNext = step.next;
				}
				var ratio = end ? d === 0 ? 1 : t / d : (t - step.t) / step.d; // TODO: revisit this.
				this._updateTargetProps(step, ratio, end);
			}
			this._stepPosition = step ? t - step.t : 0;
		}

		/**
   * @private
   * @param {Object} step
   * @param {Number} ratio
   * @param {boolean} end Indicates to plugins that the full tween has ended.
   */

	}, {
		key: "_updateTargetProps",
		value: function _updateTargetProps(step, ratio, end) {
			if (this.passive = !!step.passive) {
				return;
			} // don't update props.

			var v = void 0,
			    v0 = void 0,
			    v1 = void 0,
			    ease = void 0;
			var p0 = step.prev.props;
			var p1 = step.props;
			if (ease = step.ease) {
				ratio = ease(ratio, 0, 1, 1);
			}

			var plugins = this._plugins;
			proploop: for (var n in p0) {
				v0 = p0[n];
				v1 = p1[n];

				// values are different & it is numeric then interpolate:
				if (v0 !== v1 && typeof v0 === "number") {
					v = v0 + (v1 - v0) * ratio;
				} else {
					v = ratio >= 1 ? v1 : v0;
				}

				if (plugins) {
					for (var _i2 = 0, l = plugins.length; _i2 < l; _i2++) {
						var value = plugins[_i2].change(this, step, n, v, ratio, end);
						if (value === Tween.IGNORE) {
							continue proploop;
						}
						if (value !== undefined) {
							v = value;
						}
					}
				}
				this.target[n] = v;
			}
		}

		/**
   * @private
   * @param {number} startPos
   * @param {number} endPos
   * @param {boolean} includeStart
   */

	}, {
		key: "_runActionsRange",
		value: function _runActionsRange(startPos, endPos, jump, includeStart) {
			var rev = startPos > endPos;
			var action = rev ? this._actionTail : this._actionHead;
			var ePos = endPos,
			    sPos = startPos;
			if (rev) {
				ePos = startPos;sPos = endPos;
			}
			var t = this.position;
			while (action) {
				var pos = action.t;
				if (pos === endPos || pos > sPos && pos < ePos || includeStart && pos === startPos) {
					action.funct.apply(action.scope, action.params);
					if (t !== this.position) {
						return true;
					}
				}
				action = rev ? action.prev : action.next;
			}
		}

		/**
   * @private
   * @param {Object} props
   */

	}, {
		key: "_appendProps",
		value: function _appendProps(props, step, stepPlugins) {
			var initProps = this._stepHead.props,
			    target = this.target,
			    plugins = Tween._plugins;
			var n = void 0,
			    i = void 0,
			    l = void 0,
			    value = void 0,
			    initValue = void 0,
			    inject = void 0;

			var oldStep = step.prev,
			    oldProps = oldStep.props;
			var stepProps = step.props || (step.props = this._cloneProps(oldProps));
			var cleanProps = {};

			for (n in props) {
				if (!props.hasOwnProperty(n)) {
					continue;
				}
				cleanProps[n] = stepProps[n] = props[n];

				if (initProps[n] !== undefined) {
					continue;
				}

				initValue = undefined; // accessing missing properties on DOMElements when using CSSPlugin is INSANELY expensive, so we let the plugin take a first swing at it.
				if (plugins) {
					for (i = plugins.length - 1; i >= 0; i--) {
						value = plugins[i].init(this, n, initValue);
						if (value !== undefined) {
							initValue = value;
						}
						if (initValue === Tween.IGNORE) {
							(ignored = ignored || {})[n] = true;
							delete stepProps[n];
							delete cleanProps[n];
							break;
						}
					}
				}

				if (initValue !== Tween.IGNORE) {
					if (initValue === undefined) {
						initValue = target[n];
					}
					oldProps[n] = initValue === undefined ? null : initValue;
				}
			}

			for (n in cleanProps) {
				value = props[n];

				// propagate old value to previous steps:
				var o = void 0,
				    prev = oldStep;
				while ((o = prev) && (prev = o.prev)) {
					if (prev.props === o.props) {
						continue;
					} // wait step
					if (prev.props[n] !== undefined) {
						break;
					} // already has a value, we're done.
					prev.props[n] = oldProps[n];
				}
			}

			if (stepPlugins && (plugins = this._plugins)) {
				for (i = plugins.length - 1; i >= 0; i--) {
					plugins[i].step(this, step, cleanProps);
				}
			}

			if (inject = this._injected) {
				this._injected = null;
				this._appendProps(inject, step, false);
			}
		}

		/**
   * Used by plugins to inject properties onto the current step. Called from within `Plugin.step` calls.
   * For example, a plugin dealing with color, could read a hex color, and inject red, green, and blue props into the tween.
   * See the SamplePlugin for more info.
   * @see tweenjs.SamplePlugin
   * @private
   * @param {string} name
   * @param {Object} value
   */

	}, {
		key: "_injectProp",
		value: function _injectProp(name, value) {
			var o = this._injected || (this._injected = {});
			o[name] = value;
		}

		/**
   * @private
   * @param {number} duration
   * @param {Object} props
   * @param {Function} ease
   * @param {boolean} [passive=false]
   */

	}, {
		key: "_addStep",
		value: function _addStep(duration, props, ease) {
			var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

			var step = new TweenStep(this._stepTail, this.duration, duration, props, ease, passive);
			this.duration += duration;
			return this._stepTail = this._stepTail.next = step;
		}

		/**
   * @private
   * @param {Object} scope
   * @param {Function} funct
   * @param {Array} params
   */

	}, {
		key: "_addAction",
		value: function _addAction(scope, funct, params) {
			var action = new TweenAction(this._actionTail, this.duration, scope, funct, params);
			if (this._actionTail) {
				this._actionTail.next = action;
			} else {
				this._actionHead = action;
			}
			this._actionTail = action;
			return this;
		}

		/**
   * @private
   * @param {Object} props
   */

	}, {
		key: "_set",
		value: function _set(props) {
			for (var n in props) {
				this[n] = props[n];
			}
		}

		/**
   * @private
   * @param {Object} props
   */

	}, {
		key: "_cloneProps",
		value: function _cloneProps(props) {
			var o = {};
			for (var n in props) {
				o[n] = props[n];
			}
			return o;
		}
	}], [{
		key: "get",
		value: function get(target, props) {
			return new Tween(target, props);
		}

		/**
   * Advances all tweens. This typically uses the {{#crossLink "Ticker"}}{{/crossLink}} class, but you can call it
   * manually if you prefer to use your own "heartbeat" implementation.
   *
   * @static
   *
   * @param {number} delta The change in time in milliseconds since the last tick. Required unless all tweens have
   * `useTicks` set to true.
   * @param {boolean} paused Indicates whether a global pause is in effect. Tweens with {@link tweenjs.Tween#ignoreGlobalPause}
   * will ignore this, but all others will pause if this is `true`.
   */

	}, {
		key: "tick",
		value: function tick(delta, paused) {
			var tween = Tween._tweenHead;
			while (tween) {
				var next = tween._next; // in case it completes and wipes its _next property
				if (paused && !tween.ignoreGlobalPause || tween._paused) {/* paused */} else {
					tween.advance(tween.useTicks ? 1 : delta);
				}
				tween = next;
			}
		}

		/**
   * Handle events that result from Tween being used as an event handler. This is included to allow Tween to handle
   * {@link tweenjs.Ticker#event:tick} events from the {@link tweenjs.Ticker}.
   * No other events are handled in Tween.
   *
   * @static
   * @since 0.4.2
   *
   * @param {Object} event An event object passed in by the {@link core.EventDispatcher}. Will
   * usually be of type "tick".
   */

	}, {
		key: "handleEvent",
		value: function handleEvent(event) {
			if (event.type === "tick") {
				this.tick(event.delta, event.paused);
			}
		}

		/**
   * Removes all existing tweens for a target. This is called automatically by new tweens if the `override`
   * property is `true`.
   *
   * @static
   *
   * @param {Object} target The target object to remove existing tweens from.=
   */

	}, {
		key: "removeTweens",
		value: function removeTweens(target) {
			if (!target.tweenjs_count) {
				return;
			}
			var tween = Tween._tweenHead;
			while (tween) {
				var next = tween._next;
				if (tween.target === target) {
					tween.paused = true;
				}
				tween = next;
			}
			target.tweenjs_count = 0;
		}

		/**
   * Stop and remove all existing tweens.
   *
   * @static
   * @since 0.4.1
   */

	}, {
		key: "removeAllTweens",
		value: function removeAllTweens() {
			var tween = Tween._tweenHead;
			while (tween) {
				var next = tween._next;
				tween._paused = true;
				tween.target && (tween.target.tweenjs_count = 0);
				tween._next = tween._prev = null;
				tween = next;
			}
			Tween._tweenHead = Tween._tweenTail = null;
		}

		/**
   * Indicates whether there are any active tweens on the target object (if specified) or in general.
   *
   * @static
   *
   * @param {Object} [target] The target to check for active tweens. If not specified, the return value will indicate
   * if there are any active tweens on any target.
   * @return {boolean} Indicates if there are active tweens.
   */

	}, {
		key: "hasActiveTweens",
		value: function hasActiveTweens(target) {
			if (target) {
				return !!target.tweenjs_count;
			}
			return !!Tween._tweenHead;
		}

		/**
   * Installs a plugin, which can modify how certain properties are handled when tweened. See the {{#crossLink "SamplePlugin"}}{{/crossLink}}
   * for an example of how to write TweenJS plugins. Plugins should generally be installed via their own `install` method, in order to provide
   * the plugin with an opportunity to configure itself.
   *
   * @static
   *
   * @param {Object} plugin The plugin to install
   * @param {Object} props The props to pass to the plugin
   */

	}, {
		key: "installPlugin",
		value: function installPlugin(plugin, props) {
			plugin.install(props);
			var priority = plugin.priority = plugin.priority || 0,
			    arr = Tween._plugins = Tween._plugins || [];
			for (var _i3 = 0, l = arr.length; _i3 < l; _i3++) {
				if (priority < arr[_i3].priority) {
					break;
				}
			}
			arr.splice(i, 0, plugin);
		}

		/**
   * Registers or unregisters a tween with the ticking system.
   *
   * @private
   * @static
   *
   * @param {Tween} tween The tween instance to register or unregister.
   * @param {boolean} paused If `false`, the tween is registered. If `true` the tween is unregistered.
   */

	}, {
		key: "_register",
		value: function _register(tween, paused) {
			var target = tween.target;
			if (!paused && tween._paused) {
				// TODO: this approach might fail if a dev is using sealed objects
				if (target) {
					target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1;
				}
				var tail = Tween._tweenTail;
				if (!tail) {
					Tween._tweenHead = Tween._tweenTail = tween;
				} else {
					Tween._tweenTail = tail._next = tween;
					tween._prev = tail;
				}
				if (!Tween._inited) {
					_Ticker2.default.addEventListener("tick", Tween);Tween._inited = true;
				}
			} else if (paused && !tween._paused) {
				if (target) {
					target.tweenjs_count--;
				}
				var next = tween._next,
				    prev = tween._prev;

				if (next) {
					next._prev = prev;
				} else {
					Tween._tweenTail = prev;
				} // was tail
				if (prev) {
					prev._next = next;
				} else {
					Tween._tweenHead = next;
				} // was head.

				tween._next = tween._prev = null;
			}
		}
	}]);

	return Tween;
}(_AbstractTween3.default);

// tiny api (primarily for tool output):


{
	var p = Tween.prototype;
	p.w = p.wait;
	p.t = p.to;
	p.c = p.call;
	p.s = p.set;
}

// static properties
/**
 * Constant returned by plugins to tell the tween not to use default assignment.
 * @property IGNORE
 * @type {Object}
 * @static
 */
Tween.IGNORE = {};

/**
 * @property _listeners
 * @type {Tween[]}
 * @static
 * @private
 */
Tween._tweens = [];

/**
 * @property _plugins
 * @type {Object}
 * @static
 * @private
 */
Tween._plugins = null;

/**
 * @property _tweenHead
 * @type {Tween}
 * @static
 * @private
 */
Tween._tweenHead = null;

/**
 * @property _tweenTail
 * @type {Tween}
 * @static
 * @private
 */
Tween._tweenTail = null;

// helpers:

/**
 * @private
 * @param {*} prev
 * @param {*} t
 * @param {*} d
 * @param {*} props
 * @param {*} ease
 * @param {*} passive
 */

var TweenStep = function TweenStep(prev, t, d, props, ease, passive) {
	_classCallCheck(this, TweenStep);

	this.next = null;
	this.prev = prev;
	this.t = t;
	this.d = d;
	this.props = props;
	this.ease = ease;
	this.passive = passive;
	this.index = prev ? prev.index + 1 : 0;
};

/**
 * @private
 * @param {*} prev
 * @param {*} t
 * @param {*} scope
 * @param {*} funct
 * @param {*} params
 */


var TweenAction = function TweenAction(prev, t, scope, funct, params) {
	_classCallCheck(this, TweenAction);

	this.next = null;
	this.d = 0;
	this.prev = prev;
	this.t = t;
	this.scope = scope;
	this.funct = funct;
	this.params = params;
};

exports.default = Tween;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(3);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _Tween = __webpack_require__(1);

var _Tween2 = _interopRequireDefault(_Tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license AbstractTween
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Visit http://createjs.com/ for documentation, updates and examples.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017 gskinner.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * obtaining a copy of this software and associated documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * files (the "Software"), to deal in the Software without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * restriction, including without limitation the rights to use,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Software is furnished to do so, subject to the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Base class that both {@link tweenjs.Tween} and {@link tweenjs.Timeline} extend. Should not be instantiated directly.
 *
 * @memberof tweenjs
 * @extends EventDispatcher
 *
 * @param {Object} [props] The configuration properties to apply to this instance (ex. `{loop:-1, paused:true}`).
 * @param {boolean} [props.useTicks=false] See the {@link tweenjs.AbstractTween#useTicks} property for more information.
 * @param {boolean} [props.ignoreGlobalPause=false] See the {@link tweenjs.AbstractTween#ignoreGlobalPause} for more information.
 * @param {number|boolean} [props.loop=0] See the {@link tweenjs.AbstractTween#loop} for more information.
 * @param {boolean} [props.reversed=false] See the {@link tweenjs.AbstractTween#reversed} for more information.
 * @param {boolean} [props.bounce=false] See the {@link tweenjs.AbstractTween#bounce} for more information.
 * @param {number} [props.timeScale=1] See the {@link tweenjs.AbstractTween#timeScale} for more information.
 * @param {Function} [props.onChange] Adds the specified function as a listener to the {@link tweenjs.AbstractTween#event:change} event.
 * @param {Function} [props.onComplete] Adds the specified function as a listener to the {@link tweenjs.AbstractTween#event:complete} event.
 */
var AbstractTween = function (_EventDispatcher) {
	_inherits(AbstractTween, _EventDispatcher);

	function AbstractTween(props) {
		_classCallCheck(this, AbstractTween);

		/**
   * Causes this tween to continue playing when a global pause is active. For example, if TweenJS is using {@link core.Ticker},
   * then setting this to false (the default) will cause this tween to be paused when `Ticker.setPaused(true)`
   * is called. See the {@link tweenjs.Tween#tick} method for more info. Can be set via the `props` parameter.
   * @type {boolean}
   * @default false
   */
		var _this = _possibleConstructorReturn(this, (AbstractTween.__proto__ || Object.getPrototypeOf(AbstractTween)).call(this));

		_this.ignoreGlobalPause = false;

		/**
   * Indicates the number of times to loop. If set to -1, the tween will loop continuously.
   * @type {number}
   * @default 0
   */
		_this.loop = 0;

		/**
   * Uses ticks for all durations instead of milliseconds. This also changes the behaviour of some actions (such as `call`).
   * Changing this value on a running tween could have unexpected results.
   * @type {boolean}
   * @default false
   * @readonly
   */
		_this.useTicks = false;

		/**
   * Causes the tween to play in reverse.
   * @type {boolean}
   * @default false
   */
		_this.reversed = false;

		/**
   * Causes the tween to reverse direction at the end of each loop.
   * @type {boolean}
   * @default false
   */
		_this.bounce = false;

		/**
   * Changes the rate at which the tween advances. For example, a `timeScale` value of `2` will double the
   * playback speed, a value of `0.5` would halve it.
   * @type {number}
   * @default 1
   */
		_this.timeScale = 1;

		/**
   * Indicates the duration of this tween in milliseconds (or ticks if `useTicks` is true), irrespective of `loops`.
   * This value is automatically updated as you modify the tween. Changing it directly could result in unexpected
   * behaviour.
   * @type {number}
   * @default 0
   * @readonly
   */
		_this.duration = 0;

		/**
   * The current normalized position of the tween. This will always be a value between 0 and `duration`.
   * Changing this property directly will have unexpected results, use {@link tweenjs.Tween#setPosition}.
   * @type {Object}
   * @default 0
   * @readonly
   */
		_this.position = 0;

		/**
   * The raw tween position. This value will be between `0` and `loops * duration` while the tween is active, or -1 before it activates.
   * @type {number}
   * @default -1
   * @readonly
   */
		_this.rawPosition = -1;

		/**
   * @private
   * @default false
   */
		_this._paused = true;

		/**
   * @private
   * @type {Tween}
   * @default null
   */
		_this._next = null;

		/**
   * @private
   * @type {Tween}
   * @default null
   */
		_this._prev = null;

		/**
   * @private
   * @type {Object}
   * @default null
   */
		_this._parent = null;

		/**
   * @private
   * @type {Object}
   */
		_this._labels = null;

		/**
   * @private
   * @type {Object[]}
   */
		_this._labelList = null;

		if (props) {
			_this.useTicks = !!props.useTicks;
			_this.ignoreGlobalPause = !!props.ignoreGlobalPause;
			_this.loop = props.loop === true ? -1 : props.loop || 0;
			_this.reversed = !!props.reversed;
			_this.bounce = !!props.bounce;
			_this.timeScale = props.timeScale || 1;
			props.onChange && _this.addEventListener("change", props.onChange);
			props.onComplete && _this.addEventListener("complete", props.onComplete);
		}

		// while `position` is shared, it needs to happen after ALL props are set, so it's handled in _init()
		return _this;
	}

	/**
  * Returns a list of the labels defined on this tween sorted by position.
  * @type {Object[]}
  */


	_createClass(AbstractTween, [{
		key: "advance",


		/**
   * Advances the tween by a specified amount.
   *
   * @example
   * `var a = 2 + 2;`
   * Some words
   * `var b = 5;`
   *
   * @param {number} delta The amount to advance in milliseconds (or ticks if useTicks is true). Negative values are supported.
   * @param {boolean} [ignoreActions=false] If true, actions will not be executed due to this change in position.
   */
		value: function advance(delta) {
			var ignoreActions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.setPosition(this.rawPosition + delta * this.timeScale, ignoreActions);
		}

		/**
   * Advances the tween to a specified position.
   *
   * @emits tweenjs.AbstractTween#event:change
   * @emits tweenjs.AbstractTween#event:complete
   *
   * @param {number} rawPosition The raw position to seek to in milliseconds (or ticks if useTicks is true).
   * @param {boolean} [ignoreActions=false] If true, do not run any actions that would be triggered by this operation.
   * @param {boolean} [jump=false] If true, only actions at the new position will be run. If false, actions between the old and new position are run.
   * @param {Function} [callback] Primarily for use with MovieClip, this callback is called after properties are updated, but before actions are run.
   */

	}, {
		key: "setPosition",
		value: function setPosition(rawPosition) {
			var ignoreActions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var jump = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var callback = arguments[3];

			var d = this.duration,
			    loopCount = this.loop,
			    prevRawPos = this.rawPosition;
			var loop = 0,
			    t = 0,
			    end = false;

			// normalize position:
			if (rawPosition < 0) {
				rawPosition = 0;
			}

			if (d === 0) {
				// deal with 0 length tweens.
				end = true;
				if (prevRawPos !== -1) {
					return end;
				} // we can avoid doing anything else if we're already at 0.
			} else {
				loop = rawPosition / d | 0;
				t = rawPosition - loop * d;

				end = loopCount !== -1 && rawPosition >= loopCount * d + d;
				if (end) {
					rawPosition = (t = d) * (loop = loopCount) + d;
				}
				if (rawPosition === prevRawPos) {
					return end;
				} // no need to update

				// current loop is reversed
				if (!this.reversed !== !(this.bounce && loop % 2)) {
					t = d - t;
				}
			}

			// set this in advance in case an action modifies position:
			this.position = t;
			this.rawPosition = rawPosition;

			this._updatePosition(jump, end);
			if (end) {
				this.paused = true;
			}

			callback && callback(this);

			if (!ignoreActions) {
				this._runActions(prevRawPos, rawPosition, jump, !jump && prevRawPos === -1);
			}

			this.dispatchEvent("change");
			if (end) {
				this.dispatchEvent("complete");
			}
		}

		/**
   * Calculates a normalized position based on a raw position.
   *
   * @example
   * // given a tween with a duration of 3000ms set to loop:
   * console.log(myTween.calculatePosition(3700); // 700
   *
   * @param {number} rawPosition A raw position.
   */

	}, {
		key: "calculatePosition",
		value: function calculatePosition(rawPosition) {
			// largely duplicated from setPosition, but necessary to avoid having to instantiate generic objects to pass values (end, loop, position) back.
			var d = this.duration,
			    loopCount = this.loop;
			var loop = 0,
			    t = 0;

			if (d === 0) {
				return 0;
			}
			if (loopCount !== -1 && rawPosition >= loopCount * d + d) {
				t = d;
				loop = loopCount;
			} else if (rawPosition < 0) {
				t = 0;
			} else {
				loop = rawPosition / d | 0;
				t = rawPosition - loop * d;
			}

			return !this.reversed !== !(this.bounce && loop % 2) ? d - t : t;
		}

		/**
   * Adds a label that can be used with {@link tweenjs.Timeline#gotoAndPlay}/{@link tweenjs.Timeline#gotoAndStop}.
   *
   * @param {string} label The label name.
   * @param {number} position The position this label represents.
   */

	}, {
		key: "addLabel",
		value: function addLabel(label, position) {
			if (!this._labels) {
				this._labels = {};
			}
			this._labels[label] = position;
			var list = this._labelList;
			if (list) {
				for (var _i = 0, l = list.length; _i < l; _i++) {
					if (position < list[_i].position) {
						break;
					}
				}
				list.splice(i, 0, { label: label, position: position });
			}
		}

		/**
   * Unpauses this timeline and jumps to the specified position or label.
   *
   * @param {string|number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`)
   * or label to jump to.
   */

	}, {
		key: "gotoAndPlay",
		value: function gotoAndPlay(positionOrLabel) {
			this.paused = false;
			this._goto(positionOrLabel);
		}

		/**
   * Pauses this timeline and jumps to the specified position or label.
   *
   * @param {string|number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`) or label
   * to jump to.
   */

	}, {
		key: "gotoAndStop",
		value: function gotoAndStop(positionOrLabel) {
			this.paused = true;
			this._goto(positionOrLabel);
		}

		/**
   * If a numeric position is passed, it is returned unchanged. If a string is passed, the position of the
   * corresponding frame label will be returned, or `null` if a matching label is not defined.
   *
   * @param {string|number} positionOrLabel A numeric position value or label string.
   */

	}, {
		key: "resolve",
		value: function resolve(positionOrLabel) {
			var pos = Number(positionOrLabel);
			return isNaN(pos) ? this._labels && this._labels[positionOrLabel] : pos;
		}

		/**
   * Returns a string representation of this object.
   *
   * @return {string} a string representation of the instance.
   */

	}, {
		key: "toString",
		value: function toString() {
			return "[" + this.constructor.name + (this.name ? " (name=" + this.name + ")" : "") + "]";
		}

		/**
   * @throws AbstractTween cannot be cloned.
   */

	}, {
		key: "clone",
		value: function clone() {
			throw "AbstractTween cannot be cloned.";
		}

		/**
   * Shared logic that executes at the end of the subclass constructor.
   *
   * @private
   *
   * @param {Object} [props]
   */

	}, {
		key: "_init",
		value: function _init(props) {
			if (!props || !props.paused) {
				this.paused = false;
			}
			if (props && props.position != null) {
				this.setPosition(props.position);
			}
		}

		/**
   * @private
   * @param {string|number} positionOrLabel
   */

	}, {
		key: "_goto",
		value: function _goto(positionOrLabel) {
			var pos = this.resolve(positionOrLabel);
			if (pos != null) {
				this.setPosition(pos, false, true);
			}
		}

		/**
    * Runs actions between startPos & endPos. Separated to support action deferral.
    *
   * @private
   *
   * @param {number} startRawPos
   * @param {number} endRawPos
   * @param {boolean} jump
   * @param {boolean} includeStart
   */

	}, {
		key: "_runActions",
		value: function _runActions(startRawPos, endRawPos, jump, includeStart) {
			// console.log(this.passive === false ? " > Tween" : "Timeline", "run", startRawPos, endRawPos, jump, includeStart);
			// if we don't have any actions, and we're not a Timeline, then return:
			// TODO: a cleaner way to handle this would be to override this method in Tween, but I'm not sure it's worth the overhead.
			if (!this._actionHead && !this.tweens) {
				return;
			}

			var d = this.duration,
			    loopCount = this.loop;
			var reversed = this.reversed,
			    bounce = this.bounce;
			var loop0 = void 0,
			    loop1 = void 0,
			    t0 = void 0,
			    t1 = void 0;

			if (d === 0) {
				// deal with 0 length tweens:
				loop0 = loop1 = t0 = t1 = 0;
				reversed = bounce = false;
			} else {
				loop0 = startRawPos / d | 0;
				loop1 = endRawPos / d | 0;
				t0 = startRawPos - loop0 * d;
				t1 = endRawPos - loop1 * d;
			}

			// catch positions that are past the end:
			if (loopCount !== -1) {
				if (loop1 > loopCount) {
					t1 = d;loop1 = loopCount;
				}
				if (loop0 > loopCount) {
					t0 = d;loop0 = loopCount;
				}
			}

			// special cases:
			if (jump) {
				return this._runActionsRange(t1, t1, jump, includeStart);
			} // jump.
			else if (loop0 === loop1 && t0 === t1 && !jump && !includeStart) {
					return;
				} // no actions if the position is identical and we aren't including the start
				else if (loop0 === -1) {
						loop0 = t0 = 0;
					} // correct the -1 value for first advance, important with useTicks.

			var dir = startRawPos <= endRawPos;
			var loop = loop0;
			do {
				var rev = !reversed !== !(bounce && loop % 2);
				var start = loop === loop0 ? t0 : dir ? 0 : d;
				var end = loop === loop1 ? t1 : dir ? d : 0;

				if (rev) {
					start = d - start;
					end = d - end;
				}

				if (bounce && loop !== loop0 && start === end) {/* bounced onto the same time/frame, don't re-execute end actions */} else if (this._runActionsRange(start, end, jump, includeStart || loop !== loop0 && !bounce)) {
					return true;
				}

				includeStart = false;
			} while (dir && ++loop <= loop1 || !dir && --loop >= loop1);
		}

		/**
   * @private
   * @abstract
   * @throws Must be overridden by a subclass.
  */

	}, {
		key: "_runActionsRange",
		value: function _runActionsRange(startPos, endPos, jump, includeStart) {
			throw "_runActionsRange is abstract and must be overridden by a subclass.";
		}

		/**
  * @private
   * @abstract
   * @throws Must be overridden by a subclass.
  */

	}, {
		key: "_updatePosition",
		value: function _updatePosition(jump, end) {
			throw "_updatePosition is abstract and must be overridden by a subclass.";
		}
	}, {
		key: "labels",
		get: function get() {
			var list = this._labelList;
			if (!list) {
				list = this._labelList = [];
				var labels = this._labels;
				for (var label in labels) {
					list.push({ label: label, position: labels[label] });
				}
				list.sort(function (a, b) {
					return a.position - b.position;
				});
			}
			return list;
		},
		set: function set(labels) {
			this._labels = labels;
			this._labelList = null;
		}

		/**
   * Returns the name of the label on or immediately before the current position. For example, given a tween with
   * two labels, "first" on frame index 4, and "second" on frame 8, currentLabel would return:
   * <ul>
   *   <li>null if the current position is 2.</li>
   *   <li>"first" if the current position is 4.</li>
   *   <li>"first" if the current position is 7.</li>
   *   <li>"second" if the current position is 15.</li>
   * </ul>
   * @type {string}
   * @readonly
   */

	}, {
		key: "currentLabel",
		get: function get() {
			var labels = this.labels;
			var pos = this.position;
			for (var _i2 = 0, l = labels.length; _i2 < l; _i2++) {
				if (pos < labels[_i2].position) {
					break;
				}
			}
			return i === 0 ? null : labels[i - 1].label;
		}

		/**
   * Pauses or unpauses the tween. A paused tween is removed from the global registry and is eligible for garbage collection
   * if no other references to it exist.
   * @type {boolean}
  */

	}, {
		key: "paused",
		get: function get() {
			return this._paused;
		},
		set: function set(paused) {
			_Tween2.default._register(this, paused);
			this._paused = paused;
		}
	}]);

	return AbstractTween;
}(_EventDispatcher3.default);

/**
 * Dispatched whenever the tween's position changes. It occurs after all tweened properties are updated and actions
 * are executed.
 * @event tweenjs.AbstractTween#change
 */
/**
 * Dispatched when the tween reaches its end and has paused itself. This does not fire until all loops are complete;
 * tweens that loop continuously will never fire a complete event.
 * @event tweenjs.AbstractTween#complete
 */

exports.default = AbstractTween;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license EventDispatcher
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Visit http://createjs.com/ for documentation, updates and examples.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 gskinner.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtaining a copy of this software and associated documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * files (the "Software"), to deal in the Software without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * restriction, including without limitation the rights to use,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Software is furnished to do so, subject to the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Event = __webpack_require__(4);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
 *
 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
 * EventDispatcher {@link core.EventDispatcher.initialize} method.
 *
 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
 *
 * EventDispatcher also exposes a {@link core.EventDispatcher#on} method, which makes it easier
 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The
 * {@link core.EventDispatcher#off} method is merely an alias to {@link core.EventDispatcher#removeEventListener}.
 *
 * Another addition to the DOM Level 2 model is the {@link core.EventDispatcher#removeAllEventListeners}
 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also
 * includes a {@link core.Event#remove} method which removes the active listener.
 *
 * @memberof core
 * @example
 * // add EventDispatcher capabilities to the "MyClass" class.
 * EventDispatcher.initialize(MyClass.prototype);
 *
 * // Add an event.
 * instance.addEventListener("eventName", event => console.log(event.target + " was clicked."));
 *
 * // scope ("this") can be be a challenge with events.
 * // using the {@link core.EventDispatcher#on} method to subscribe to events simplifies this.
 * instance.addEventListener("click", event => console.log(instance === this)); // false, scope is ambiguous.
 * instance.on("click", event => console.log(instance === this)); // true, `on` uses dispatcher scope by default.
 */
var EventDispatcher = function () {
	_createClass(EventDispatcher, null, [{
		key: "initialize",


		/**
   * Static initializer to mix EventDispatcher methods into a target object or prototype.
   *
   * @static
   * @example
   * EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
   * EventDispatcher.initialize(myInstance); // add to a specific instance
   *
   * @param {Object} target The target object to inject EventDispatcher methods into.
   */
		value: function initialize(target) {
			var p = EventDispatcher.prototype;
			target.addEventListener = p.addEventListener;
			target.on = p.on;
			target.removeEventListener = target.off = p.removeEventListener;
			target.removeAllEventListeners = p.removeAllEventListeners;
			target.hasEventListener = p.hasEventListener;
			target.dispatchEvent = p.dispatchEvent;
			target._dispatchEvent = p._dispatchEvent;
			target.willTrigger = p.willTrigger;
		}
	}]);

	function EventDispatcher() {
		_classCallCheck(this, EventDispatcher);

		/**
   * @private
   * @default null
   * @type Object
   */
		this._listeners = null;

		/**
   * @private
   * @default null
   * @type Object
   */
		this._captureListeners = null;
	}

	/**
  * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
  * multiple callbacks getting fired.
  *
  * @example
  * displayObject.addEventListener("click", event => console.log('clicked', event));
  *
  * @param {string} type The string type of the event.
  * @param {Function|Object} listener An object with a handleEvent method, or a function that will be called when the event is dispatched.
  * @param {boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
  * @return {Function|Object} Returns the listener for chaining or assignment.
  */


	_createClass(EventDispatcher, [{
		key: "addEventListener",
		value: function addEventListener(type, listener) {
			var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var listeners = void 0;
			if (useCapture) {
				listeners = this._captureListeners = this._captureListeners || {};
			} else {
				listeners = this._listeners = this._listeners || {};
			}
			var arr = listeners[type];
			if (arr) {
				this.removeEventListener(type, listener, useCapture);
				arr = listeners[type]; // remove may have deleted the array
			}
			if (arr) {
				arr.push(listener);
			} else {
				listeners[type] = [listener];
			}
			return listener;
		}

		/**
   * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
   * only run once, associate arbitrary data with the listener, and remove the listener.
   *
   * This method works by creating an anonymous wrapper function and subscribing it with `addEventListener`.
   * The wrapper function is returned for use with `removeEventListener` (or `off`).
   *
   * To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
   * {@link core.Event#remove}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
   * to `on` with the same params will create multiple listeners.
   *
   * @example
   * const listener = myBtn.on("click", handleClick, null, false, { count: 3 });
   * function handleClick (evt, data) {
   *   data.count -= 1;
   *   console.log(this == myBtn); // true - scope defaults to the dispatcher
   *   if (data.count == 0) {
   *     alert("clicked 3 times!");
   *     myBtn.off("click", listener);
   *     // alternately: evt.remove();
   *   }
   * }
   *
   * @param {string} type The string type of the event.
   * @param {Function|Object} listener An object with a handleEvent method, or a function that will be called when the event is dispatched.
   * @param {Object} [scope=null] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
   * @param {boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
   * @param {*} [data={}] Arbitrary data that will be included as the second parameter when the listener is called.
   * @param {boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
   * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
   */

	}, {
		key: "on",
		value: function on(type, listener) {
			var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
			var useCapture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

			if (listener.handleEvent) {
				scope = scope || listener;
				listener = listener.handleEvent;
			}
			scope = scope || this;
			return this.addEventListener(type, function (evt) {
				listener.call(scope, evt, data);
				once && evt.remove();
			}, useCapture);
		}

		/**
   * Removes the specified event listener.
   *
   * You must pass the exact function reference used when the event was added. If a proxy
   * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
   * closure will not work.
   *
   * @example
   * displayObject.removeEventListener("click", handleClick);
   *
   * @param {string} type The string type of the event.
   * @param {Function|Object} listener The listener function or object.
   * @param {boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
   */

	}, {
		key: "removeEventListener",
		value: function removeEventListener(type, listener) {
			var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var listeners = useCapture ? this._captureListeners : this._listeners;
			if (!listeners) {
				return;
			}
			var arr = listeners[type];
			if (!arr) {
				return;
			}
			var l = arr.length;
			for (var i = 0; i < l; i++) {
				if (arr[i] === listener) {
					if (l === 1) {
						delete listeners[type];
					} // allows for faster checks.
					else {
							arr.splice(i, 1);
						}
					break;
				}
			}
		}

		/**
   * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
   * `on` method.
   *
   * To remove a listener added with `on`, you must pass in the returned wrapper function as the listener. See
   * {@link core.EventDispatcher#on} for an example.
   *
   * @param {string} type The string type of the event.
   * @param {Function|Object} listener The listener function or object.
   * @param {boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
   */

	}, {
		key: "off",
		value: function off(type, listener) {
			var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			this.removeEventListener(type, listener, useCapture);
		}

		/**
   * Removes all listeners for the specified type, or all listeners of all types.
   *
   * @example
   * // remove all listeners
   * displayObject.removeAllEventListeners();
   *
   * // remove all click listeners
   * displayObject.removeAllEventListeners("click");
   *
   * @param {string} [type=null] The string type of the event. If omitted, all listeners for all types will be removed.
   */

	}, {
		key: "removeAllEventListeners",
		value: function removeAllEventListeners() {
			var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (type) {
				if (this._listeners) {
					delete this._listeners[type];
				}
				if (this._captureListeners) {
					delete this._captureListeners[type];
				}
			} else {
				this._listeners = this._captureListeners = null;
			}
		}

		/**
   * Dispatches the specified event to all listeners.
   *
   * @example
   * // use a string event
   * this.dispatchEvent("complete")
   *
   * // use an Event instance
   * const event = new createjs.Event("progress");
   * this.dispatchEvent(event);
   *
   * @param {Object|Event|string} eventObj An object with a "type" property, or a string type.
   * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
   * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
   * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
   * @param {boolean} [bubbles=false] Specifies the `bubbles` value when a string was passed to eventObj.
   * @param {boolean} [cancelable=false] Specifies the `cancelable` value when a string was passed to eventObj.
   * @return {boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
   */

	}, {
		key: "dispatchEvent",
		value: function dispatchEvent(eventObj) {
			var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if (typeof eventObj === "string") {
				// skip everything if there's no listeners and it doesn't bubble:
				var listeners = this._listeners;
				if (!bubbles && (!listeners || !listeners[eventObj])) {
					return true;
				}
				eventObj = new _Event2.default(eventObj, bubbles, cancelable);
			} else if (eventObj.target && eventObj.clone) {
				// redispatching an active event object, so clone it:
				eventObj = eventObj.clone();
			}

			// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
			try {
				eventObj.target = this;
			} catch (e) {} // try/catch allows redispatching of native events

			if (!eventObj.bubbles || !this.parent) {
				this._dispatchEvent(eventObj, 2);
			} else {
				var top = this;
				var list = [top];
				while (top.parent) {
					list.push(top = top.parent);
				}
				var l = list.length;
				var i = void 0;

				// capture & atTarget
				for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
					list[i]._dispatchEvent(eventObj, 1 + (i == 0));
				}
				// bubbling
				for (i = 1; i < l && !eventObj.propagationStopped; i++) {
					list[i]._dispatchEvent(eventObj, 3);
				}
			}
			return !eventObj.defaultPrevented;
		}

		/**
   * Indicates whether there is at least one listener for the specified event type.
   *
   * @param {string} type The string type of the event.
   * @return {boolean} Returns true if there is at least one listener for the specified event.
   */

	}, {
		key: "hasEventListener",
		value: function hasEventListener(type) {
			var listeners = this._listeners,
			    captureListeners = this._captureListeners;
			return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
		}

		/**
   * Indicates whether there is at least one listener for the specified event type on this object or any of its
   * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
   * specified type is dispatched from this object, it will trigger at least one listener.
   *
   * This is similar to {@link core.EventDispatcher#hasEventListener}, but it searches the entire
   * event flow for a listener, not just this object.
   *
   * @param {string} type The string type of the event.
   * @return {boolean} Returns `true` if there is at least one listener for the specified event.
   */

	}, {
		key: "willTrigger",
		value: function willTrigger(type) {
			var o = this;
			while (o) {
				if (o.hasEventListener(type)) {
					return true;
				}
				o = o.parent;
			}
			return false;
		}

		/**
   * @return {String} a string representation of the instance.
   */

	}, {
		key: "toString",
		value: function toString() {
			return "[" + (this.constructor.name + this.name ? " " + this.name : "") + "]";
		}

		/**
   * @private
   * @param {Object|Event|string} eventObj
   * @param {Object} eventPhase
   */

	}, {
		key: "_dispatchEvent",
		value: function _dispatchEvent(eventObj, eventPhase) {
			var listeners = eventPhase === 1 ? this._captureListeners : this._listeners;
			if (eventObj && listeners) {
				var arr = listeners[eventObj.type];
				var l = void 0;
				if (!arr || (l = arr.length) === 0) {
					return;
				}
				try {
					eventObj.currentTarget = this;
				} catch (e) {}
				try {
					eventObj.eventPhase = eventPhase;
				} catch (e) {}
				eventObj.removed = false;

				arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
				for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
					var o = arr[i];
					if (o.handleEvent) {
						o.handleEvent(eventObj);
					} else {
						o(eventObj);
					}
					if (eventObj.removed) {
						this.off(eventObj.type, o, eventPhase === 1);
						eventObj.removed = false;
					}
				}
			}
		}
	}]);

	return EventDispatcher;
}();

exports.default = EventDispatcher;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license Event
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2017 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Contains properties and methods shared by all events for use with {@link core.EventDispatcher}.
 * Note that Event objects are often reused, so you should never
 * rely on an event object's state outside of the call stack it was received in.
 *
 * @memberof core
 * @example
 * const evt = new Event("myEvent");
 * const dispatcher = new EventDispatcher();
 * dispatcher.on("myEvent", event => console.log(event.type));
 * dispatcher.dispatchEvent(evt); // logs "myEvent"
 *
 * @param {string} type The event type.
 * @param {boolean} [bubbles=false] Indicates whether the event will bubble through the display list.
 * @param {boolean} [cancelable=false] Indicates whether the default behaviour of this event can be cancelled.
 */
var Event = function () {
	function Event(type) {
		var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		_classCallCheck(this, Event);

		/**
   * The type of event.
   * @type string
   */
		this.type = type;

		/**
   * The object that generated an event.
   *
   * @type Object
   * @default null
   * @readonly
   */
		this.target = null;

		/**
   * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
   * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
   * is generated from childObj, then a listener on parentObj would receive the event with
   * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
   *
   * @type Object
   * @default null
   * @readonly
   */
		this.currentTarget = null;

		/**
   * For bubbling events, this indicates the current event phase:
   * <OL>
   * 	<LI> capture phase: starting from the top parent to the target</LI>
   * 	<LI> at target phase: currently being dispatched from the target</LI>
   * 	<LI> bubbling phase: from the target to the top parent</LI>
   * </OL>
   *
   * @type number
   * @default 0
   * @readonly
   */
		this.eventPhase = 0;

		/**
   * Indicates whether the event will bubble through the display list.
   *
   * @type boolean
   * @readonly
   */
		this.bubbles = bubbles;

		/**
   * Indicates whether the default behaviour of this event can be cancelled via {@link core.Event#preventDefault}.
   *
   * @type boolean
   * @readonly
   */
		this.cancelable = cancelable;

		/**
   * The epoch time at which this event was created.
   *
   * @type number
   * @readonly
   */
		this.timeStamp = new Date().getTime();

		/**
   * Indicates if {@link core.Event#preventDefault} has been called on this event.
   *
   * @type boolean
   * @default false
   * @readonly
   */
		this.defaultPrevented = false;

		/**
   * Indicates if {@link core.Event#stopPropagation} or {@link core.Event#stopImmediatePropagation} has been called on this event.
   *
   * @type boolean
   * @default false
   * @readonly
   */
		this.propagationStopped = false;

		/**
   * Indicates if {@link core.Event#stopImmediatePropagation} has been called on this event.
   *
   * @type boolean
   * @default false
   * @readonly
   */
		this.immediatePropagationStopped = false;

		/**
   * Indicates if {@link core.Event#remove} has been called on this event.
   *
   * @type boolean
   * @default false
   * @readonly
   */
		this.removed = false;
	}

	/**
  * Sets {@link core.Event#defaultPrevented} to true if the event is cancelable.
  * Mirrors the DOM level 2 event standard. In general, cancelable events that have `preventDefault()` called will
  * cancel the default behaviour associated with the event.
  * @return {core.Event} this, chainable
  */


	_createClass(Event, [{
		key: "preventDefault",
		value: function preventDefault() {
			this.defaultPrevented = this.cancelable;
			return this;
		}

		/**
   * Sets {@link core.Event#propagationStopped} to true.
   * Mirrors the DOM event standard.
   * @return {core.Event} this, chainable
   */

	}, {
		key: "stopPropagation",
		value: function stopPropagation() {
			this.propagationStopped = true;
			return this;
		}

		/**
   * Sets {@link core.Event#propagationStopped} and {@link core.Event#immediatePropagationStopped} to true.
   * Mirrors the DOM event standard.
   * @return {core.Event} this, chainable
   */

	}, {
		key: "stopImmediatePropagation",
		value: function stopImmediatePropagation() {
			this.immediatePropagationStopped = this.propagationStopped = true;
			return this;
		}

		/**
   * Causes the active listener to be removed via removeEventListener();
   *
   * @example
   * myBtn.addEventListener("click", event => {
   *   event.remove(); // removes this listener.
   * });
   *
   * @return {core.Event} this, chainable
   */

	}, {
		key: "remove",
		value: function remove() {
			this.removed = true;
			return this;
		}

		/**
   * Returns a clone of the Event instance.
   *
   * @return {core.Event} a clone of the Event instance.
   */

	}, {
		key: "clone",
		value: function clone() {
			var event = new Event(this.type, this.bubbles, this.cancelable);
			for (var n in this) {
				if (this.hasOwnProperty(n)) {
					event[n] = this[n];
				}
			}
			return event;
		}

		/**
   * Provides a return {core.Event} this, chainable shortcut method for setting a number of properties on the instance.
   *
   * @param {Object} props A generic object containing properties to copy to the instance.
   * @return {core.Event} this, chainable
   */

	}, {
		key: "set",
		value: function set(props) {
			for (var n in props) {
				this[n] = props[n];
			}
			return this;
		}

		/**
   * Returns a string representation of this object.
   *
   * @return {string} A string representation of the instance.
   */

	}, {
		key: "toString",
		value: function toString() {
			return "[" + this.constructor.name + " (type=" + this.type + ")]";
		}
	}]);

	return Event;
}();

exports.default = Event;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// helpers

function toFixed(num, precision) {
    precision = precision || 3;

    return num.toFixed(precision);
}

function floor(num) {
    return Math.floor(num);
}

// tile

function getTileWidth(gameWidth, hCount) {
    return toFixed(gameWidth / hCount);
}

function getVTileCount(gameHeight, tileWidth) {
    return floor(gameHeight / tileWidth);
}

// line

function getLineStepCord(ratio, tileWidth) {
    return tileWidth * ratio + tileWidth / 2;
}

// point

function getPointCord(cord, pointWidth) {
    return pointWidth * cord + pointWidth / 2;
}

exports.default = {
    toFixed: toFixed,
    getTileWidth: getTileWidth,
    getLineStepCord: getLineStepCord,
    getPointCord: getPointCord,
    getVTileCount: getVTileCount
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(7);

var _game2 = _interopRequireDefault(_game);

var _dom = __webpack_require__(15);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (fb) {

    window.onload = function () {
        var game = new _game2.default(fb);

        game.init((0, _dom2.default)('#game'));
    };
})(FBInstant);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(8);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(FBInstant) {
        _classCallCheck(this, Game);

        this.fb = FBInstant;
    }

    // handlers

    _createClass(Game, [{
        key: 'selectBtnClickHandler',
        value: function selectBtnClickHandler() {
            var _this = this;

            this.fb.context.chooseAsync({
                minSize: 2,
                maxSize: 2
            }).then(function () {
                _this.start();
            });
        }

        // game cycle

    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            this.fb.context.getPlayersAsync().then(function (players) {
                if (_this.fb.context.getType() !== 'SOLO') {
                    _this.toggleContextMenu(false);
                }

                /*console.log(players.map(function(player) {
                    return {
                        id: player.getID(),
                        name: player.getName(),
                    }
                }));*/
            });
        }

        // other

    }, {
        key: 'toggleContextMenu',
        value: function toggleContextMenu(flag) {
            if (flag) {
                this.contextMenu.show();
            } else {
                this.contextMenu.hide();
            }
        }
    }, {
        key: 'init',
        value: function init(node) {
            var _this = this;

            this.contextMenu = node.find('.context-menu-layer');
            this.map = new _map2.default(node);

            this.contextMenu.find('.select-btn').on('click', this.selectBtnClickHandler.bind(this));

            this.fb.initializeAsync().then(function () {
                _this.fb.setLoadingProgress(100);
                _this.fb.startGameAsync().then(function () {

                    // check whether it a match or new game? how?????

                    // _this.fb.context.getType() !== 'SOLO'
                    // getEntryPointAsync() returns string

                    _this.toggleContextMenu(true);
                });
            });
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _easeljs = __webpack_require__(0);

var _point = __webpack_require__(12);

var _point2 = _interopRequireDefault(_point);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

var _calculations = __webpack_require__(5);

var _calculations2 = _interopRequireDefault(_calculations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZERO = 0;

var Map = function () {
    function Map(node) {
        _classCallCheck(this, Map);

        this.gameWrap = node;
        this.gameWidth = node.width();
        this.gameHeight = node.height();
        this.stage = new _easeljs.Stage('stage');

        this.matrix = null;
        this.tileWidth = null;
        this.vTileCount = null;
        this.hTileCount = null;

        this.updateTileOptionsByGameWrap();
        this.updateCanvasAndStage();
        this.createAndDrawMatrix();
    }

    _createClass(Map, [{
        key: 'updateTileOptionsByGameWrap',
        value: function updateTileOptionsByGameWrap() {
            this.hTileCount = _config2.default.tileCount.horizontal;

            if (this.gameWidth > this.gameHeight) {
                this.hTileCount = _config2.default.tileCount.vertical;
            }

            this.tileWidth = _calculations2.default.getTileWidth(this.gameWidth, this.hTileCount);
            this.vTileCount = _calculations2.default.getVTileCount(this.gameHeight, this.tileWidth);
        }

        // drawing

    }, {
        key: 'updateCanvasAndStage',
        value: function updateCanvasAndStage() {
            _easeljs.Touch.enable(this.stage);
            this.stage.enableMouseOver();

            this.gameWrap.find('#stage').attr({
                width: _calculations2.default.toFixed(this.gameWidth),
                height: _calculations2.default.toFixed(this.gameHeight)
            });
        }
    }, {
        key: 'createAndDrawMatrix',
        value: function createAndDrawMatrix() {
            var matrix = [];

            for (var i = ZERO; i < this.vTileCount; i++) {
                var row = [];

                this.drawHLine(i);

                for (var j = ZERO; j < this.hTileCount; j++) {
                    if (i === ZERO) {
                        this.drawVLine(j);
                    }

                    row.push(new _point2.default({
                        id: {
                            x: j,
                            y: i
                        },
                        width: this.tileWidth
                    }, this));
                }

                matrix.push(row);
            }

            this.matrix = matrix;

            this.stage.update();
        }
    }, {
        key: 'drawHLine',
        value: function drawHLine(ratio) {
            var line = new _easeljs.Shape();
            var startX = ZERO;
            var startY = _calculations2.default.getLineStepCord(ratio, this.tileWidth);
            var endX = this.gameWidth;

            line.graphics.setStrokeStyle(_config2.default.lineWidth).beginStroke(_config2.default.colors.lines).moveTo(startX, startY).lineTo(endX, startY).endStroke();

            this.stage.addChild(line);
        }
    }, {
        key: 'drawVLine',
        value: function drawVLine(ratio) {
            var line = new _easeljs.Shape();
            var startX = _calculations2.default.getLineStepCord(ratio, this.tileWidth);
            var startY = ZERO;
            var endX = startX;
            var endY = this.gameHeight;

            line.graphics.setStrokeStyle(_config2.default.lineWidth).beginStroke(_config2.default.colors.lines).moveTo(startX, startY).lineTo(endX, endY).endStroke();

            this.stage.addChild(line);
        }
    }]);

    return Map;
}();

exports.default = Map;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license Ease
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2017 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * The Ease class provides a collection of easing functions for use with TweenJS. It does not use the standard 4 param
 * easing signature. Instead it uses a single param which indicates the current linear ratio (0 to 1) of the tween.
 *
 * Most methods on Ease can be passed directly as easing functions:
 *
 *      Tween.get(target).to({x:100}, 500, Ease.linear);
 *
 * However, methods beginning with "get" will return an easing function based on parameter values:
 *
 *      Tween.get(target).to({y:200}, 500, Ease.getPowIn(2.2));
 *
 * Please see the <a href="http://www.createjs.com/Demos/TweenJS/Tween_SparkTable">spark table demo</a> for an
 * overview of the different ease types on <a href="http://tweenjs.com">TweenJS.com</a>.
 *
 * <em>Equations derived from work by Robert Penner.</em>
 *
 * @memberof tweenjs
 * @module Ease
 */

/**
 * @param {number} t
 * @return {number}
 */
function linear(t) {
  return t;
}

/**
 * Mimics the simple -100 to 100 easing in Flash Pro.
 * @param {number} amount A value from -1 (ease in) to 1 (ease out) indicating the strength and direction of the ease.
 * @return {Function}
 */
function get(amount) {
  if (amount < -1) {
    amount = -1;
  } else if (amount > 1) {
    amount = 1;
  }
  return function (t) {
    if (amount == 0) {
      return t;
    }
    if (amount < 0) {
      return t * (t * -amount + 1 + amount);
    }
    return t * ((2 - t) * amount + (1 - amount));
  };
}

/**
 * Configurable exponential ease.
 * @param {number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @return {Function}
 */
function getPowIn(pow) {
  return function (t) {
    return Math.pow(t, pow);
  };
}

/**
 * Configurable exponential ease.
 * @param {number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @return {Function}
 */
function getPowOut(pow) {
  return function (t) {
    return 1 - Math.pow(1 - t, pow);
  };
}

/**
 * Configurable exponential ease.
 * @param {number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @return {Function}
 */
function getPowInOut(pow) {
  return function (t) {
    if ((t *= 2) < 1) return 0.5 * Math.pow(t, pow);
    return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
  };
}

/**
 * @param {number} t
 * @return {number}
 */
function sineIn(t) {
  return 1 - Math.cos(t * Math.PI / 2);
}

/**
 * @param {number} t
 * @return {number}
 */
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}

/**
 * @param {number} t
 * @return {number}
 */
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

/**
 * Configurable "back in" ease.
 * @param {number} amount The strength of the ease.
 * @return {Function}
 */
function getBackIn(amount) {
  return function (t) {
    return t * t * ((amount + 1) * t - amount);
  };
}

/**
 * Configurable "back out" ease.
 * @param {number} amount The strength of the ease.
 * @return {Function}
 */
function getBackOut(amount) {
  return function (t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
}

/**
 * Configurable "back in out" ease.
 * @param {number} amount The strength of the ease.
 * @return {Function}
 */
function getBackInOut(amount) {
  amount *= 1.525;
  return function (t) {
    if ((t *= 2) < 1) return 0.5 * (t * t * ((amount + 1) * t - amount));
    return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
  };
}

/**
 * @param {number} t
 * @return {number}
 */
function circIn(t) {
  return -(Math.sqrt(1 - t * t) - 1);
}

/**
 * @param {number} t
 * @return {number}
 */
function circOut(t) {
  return Math.sqrt(1 - --t * t);
}

/**
 * @param {number} t
 * @return {number}
 */
function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}

/**
 * @param {number} t
 * @return {number}
 */
function bounceIn(t) {
  return 1 - Ease.bounceOut(1 - t);
}

/**
 * @param {number} t
 * @return {number}
 */
function bounceOut(t) {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
}

/**
 * @param {number} t
 * @return {number}
 */
function bounceInOut(t) {
  if (t < 0.5) return Ease.bounceIn(t * 2) * 0.5;
  return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
}

/**
 * Configurable elastic ease.
 * @param {number} amplitude
 * @param {number} period
 * @return {Function}
 */
function getElasticIn(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
  };
}

/**
 * Configurable elastic ease.
 * @param {number} amplitude
 * @param {number} period
 * @return {Function}
 */
function getElasticOut(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
  };
}

/**
 * Configurable elastic ease.
 * @param {number} amplitude
 * @param {number} period
 * @return {Function}
 */
function getElasticInOut(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    var s = period / pi2 * Math.asin(1 / amplitude);
    if ((t *= 2) < 1) return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
    return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
  };
}

/**
 * Identical to linear.
 * @param {number} t
 * @return {number}
 */
var none = linear;
/**
 * @param {number} t
 * @return {number}
 */
var quadIn = getPowIn(2);
/**
 * @param {number} t
 * @return {number}
 */
var quadOut = getPowOut(2);
/**
 * @param {number} t
 * @return {number}
 */
var quadInOut = getPowInOut(2);
/**
 * @param {number} t
 * @return {number}
 */
var cubicIn = getPowIn(3);
/**
 * @param {number} t
 * @return {number}
 */
var cubicOut = getPowOut(3);
/**
 * @param {number} t
 * @return {number}
 */
var cubicInOut = getPowInOut(3);
/**
 * @param {number} t
 * @return {number}
 */
var quartIn = getPowIn(4);
/**
 * @param {number} t
 * @return {number}
 */
var quartOut = getPowOut(4);
/**
 * @param {number} t
 * @return {number}
 */
var quartInOut = getPowInOut(4);
/**
 * @param {number} t
 * @return {number}
 */
var quintIn = getPowIn(5);
/**
 * @param {number} t
 * @return {number}
 */
var quintOut = getPowOut(5);
/**
 * @param {number} t
 * @return {number}
 */
var quintInOut = getPowInOut(5);
/**
 * @param {number} t
 * @return {number}
 */
var backIn = getBackIn(1.7);
/**
 * @param {number} t
 * @return {number}
 */
var backOut = getBackOut(1.7);
/**
 * @param {number} t
 * @return {number}
 */
var backInOut = getBackInOut(1.7);
/**
 * @param {number} t
 * @return {number}
 */
var elasticIn = getElasticIn(1, 0.3);
/**
 * @param {number} t
 * @return {number}
 */
var elasticOut = getElasticOut(1, 0.3);
/**
 * @param {number} t
 * @return {number}
 */
var elasticInOut = getElasticInOut(1, 0.3 * 1.5);

exports.linear = linear;
exports.get = get;
exports.getPowIn = getPowIn;
exports.getPowOut = getPowOut;
exports.getPowInOut = getPowInOut;
exports.sineIn = sineIn;
exports.sineOut = sineOut;
exports.sineInOut = sineInOut;
exports.getBackIn = getBackIn;
exports.getBackOut = getBackOut;
exports.getBackInOut = getBackInOut;
exports.circIn = circIn;
exports.circOut = circOut;
exports.circInOut = circInOut;
exports.bounceIn = bounceIn;
exports.bounceOut = bounceOut;
exports.bounceInOut = bounceInOut;
exports.getElasticIn = getElasticIn;
exports.getElasticOut = getElasticOut;
exports.getElasticInOut = getElasticInOut;
exports.none = none;
exports.quadIn = quadIn;
exports.quadOut = quadOut;
exports.quadInOut = quadInOut;
exports.cubicIn = cubicIn;
exports.cubicOut = cubicOut;
exports.cubicInOut = cubicInOut;
exports.quartIn = quartIn;
exports.quartOut = quartOut;
exports.quartInOut = quartInOut;
exports.quintIn = quintIn;
exports.quintOut = quintOut;
exports.quintInOut = quintInOut;
exports.backIn = backIn;
exports.backOut = backOut;
exports.backInOut = backInOut;
exports.elasticIn = elasticIn;
exports.elasticOut = elasticOut;
exports.elasticInOut = elasticInOut;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(3);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _Event = __webpack_require__(4);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license Ticker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Visit http://createjs.com/ for documentation, updates and examples.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017 gskinner.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * obtaining a copy of this software and associated documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * files (the "Software"), to deal in the Software without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * restriction, including without limitation the rights to use,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Software is furnished to do so, subject to the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
 * event to be notified when a set time interval has elapsed.
 *
 * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
 * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
 * can not be instantiated.
 *
 * @todo Pass timingMode, maxDelta, paused values as instantiation arguments?
 *
 * @memberof core
 * @example
 * Ticker.addEventListener("tick", event => {
 *   // Actions carried out each tick (aka frame)
 *   if (!event.paused) {
 *     // Actions carried out when the Ticker is not paused.
 *   }
 * });
 * @example
 * // Ticker export explanation
 * import Ticker, { Ticker as TickerClass, getTicker } from "@createjs/core";
 * Ticker.name, Ticker.RAF // -> createjs.global, undefined
 * TickerClass.RAF // -> raf
 * Ticker === getTicker("createjs.global") // -> true
 *
 * @extends core.EventDispatcher
 * @param {string} name The name assigned to this instance.
 */
var Ticker = function (_EventDispatcher) {
	_inherits(Ticker, _EventDispatcher);

	_createClass(Ticker, null, [{
		key: "RAF_SYNCHED",


		/**
   * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
   * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
   * dispatches the tick when the time is within a certain threshold.
   *
   * This mode has a higher variance for time between frames than {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}},
   * but does not require that content be time based as with {{#crossLink "Ticker/RAF:property"}}{{/crossLink}} while
   * gaining the benefits of that API (screen synch, background throttling).
   *
   * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
   * framerates of 10, 12, 15, 20, and 30 work well.
   *
   * Falls back to {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
   * supported.
   *
   * @static
   * @type {string}
   * @default "synched"
   * @readonly
   */
		get: function get() {
			return "synched";
		}

		/**
   * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
   * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
   * You can leverage {@link core.Ticker#getTime} and the {@link core.Ticker#event:tick}
   * event object's "delta" properties to make this easier.
   *
   * Falls back on {@link core.Ticker.TIMEOUT} if the requestAnimationFrame API is not supported.
   *
   * @static
   * @type {string}
   * @default "raf"
   * @readonly
   */

	}, {
		key: "RAF",
		get: function get() {
			return "raf";
		}

		/**
   * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
   * provide the benefits of requestAnimationFrame (screen synch, background throttling).
   *
   * @static
   * @type {string}
   * @default "timeout"
   * @readonly
   */

	}, {
		key: "TIMEOUT",
		get: function get() {
			return "timeout";
		}
	}]);

	function Ticker(name) {
		_classCallCheck(this, Ticker);

		/**
   * The name of this instance.
   * @type {string}
   */
		var _this = _possibleConstructorReturn(this, (Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call(this));

		_this.name = name;

		/**
   * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use.
   *
   * @see {@link core.Ticker.TIMEOUT}
   * @see {@link core.Ticker.RAF}
   * @see {@link core.Ticker.RAF_SYNCHED}
   *
   * @type {string}
   * @default Ticker.TIMEOUT
   */
		_this.timingMode = Ticker.TIMEOUT;

		/**
   * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
   * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
   * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
   * (ex. maxDelta=50 when running at 40fps).
   *
   * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
   * when using both delta and other values.
   *
   * If 0, there is no maximum.
   *
   * @type {number}
   * @default 0
   */
		_this.maxDelta = 0;

		/**
   * When the ticker is paused, all listeners will still receive a tick event, but the `paused` property
   * of the event will be `true`. Also, while paused the `runTime` will not increase.
   *
   * @example
   * Ticker.addEventListener("tick", event => console.log(event.paused, Ticker.getTime(false), Ticker.getTime(true)));
   * Ticker.paused = true;
   *
   * @see {@link core.Ticker#event:tick}
   * @see {@link core.Ticker#getTime}
   * @see {@link core.Ticker#getEventTime}
   *
   * @type {boolean}
   * @default false
   */
		_this.paused = false;

		/**
   * @private
   * @type {boolean}
   * @default false
   */
		_this._inited = false;

		/**
   * @private
   * @type {number}
   * @default 0
   */
		_this._startTime = 0;

		/**
   * @private
   * @type {number}
   * @default 0
   */
		_this._pausedTime = 0;

		/**
   * The number of ticks that have passed.
   *
   * @private
   * @type {number}
   * @default 0
   */
		_this._ticks = 0;

		/**
   * The number of ticks that have passed while Ticker has been paused.
   *
   * @private
   * @type {number}
   * @default
   */
		_this._pausedTicks = 0;

		/**
   * @private
   * @type {number}
   * @default
   */
		_this._interval = 50;

		/**
   * @private
   * @type {number}
   * @default
   */
		_this._lastTime = 0;

		/**
   * @private
   * @type {Array}
   * @default null
   */
		_this._times = null;

		/**
   * @private
   * @type {Array}
   * @default null
   */
		_this._tickTimes = null;

		/**
   * Stores the timeout or requestAnimationFrame id.
   *
   * @private
   * @type {number}
   * @default null
   */
		_this._timerId = null;

		/**
   * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
   * if that property changed and a tick hasn't fired.
   *
   * @private
   * @type {boolean}
   * @default true
   */
		_this._raf = true;
		return _this;
	}

	/**
  * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
  * Note that actual time between ticks may be more than specified depending on CPU load.
  * This property is ignored if the ticker is using the `RAF` timing mode.
  *
  * @type {number}
  */


	_createClass(Ticker, [{
		key: "init",


		/**
   * Starts the tick. This is called automatically when the first listener is added.
   */
		value: function init() {
			if (this._inited) {
				return;
			}
			this._inited = true;
			this._times = [];
			this._tickTimes = [];
			this._startTime = this._getTime();
			this._times.push(this._lastTime = 0);
			this._setupTick();
		}

		/**
   * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
   */

	}, {
		key: "reset",
		value: function reset() {
			if (this._raf) {
				var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
				f && f(this._timerId);
			} else {
				clearTimeout(this._timerId);
			}
			this.removeAllEventListeners("tick");
			this._timerId = this._times = this._tickTimes = null;
			this._startTime = this._lastTime = this._ticks = 0;
			this._inited = false;
		}

		/**
   * Init the Ticker instance if it hasn't been already.
   */

	}, {
		key: "addEventListener",
		value: function addEventListener(type, listener, useCapture) {
			!this._inited && this.init();
			return _get(Ticker.prototype.__proto__ || Object.getPrototypeOf(Ticker.prototype), "addEventListener", this).call(this, type, listener, useCapture);
		}

		/**
   * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
   * because it only measures the time spent within the tick execution stack.
   *
   * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between
   * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that
   * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
   *
   * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
   * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
   * other than the tick is using ~80ms (another script, DOM rendering, etc).
   *
   * @param {number} [ticks=null] The number of previous ticks over which to measure the average time spent in a tick.
   * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
   * @return {number} The average time spent in a tick in milliseconds.
   */

	}, {
		key: "getMeasuredTickTime",
		value: function getMeasuredTickTime() {
			var ticks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var times = this._tickTimes;
			if (!times || times.length < 1) {
				return -1;
			}
			// by default, calculate average for the past ~1 second:
			ticks = Math.min(times.length, ticks || this.framerate | 0);
			return times.reduce(function (a, b) {
				return a + b;
			}, 0) / ticks;
		}

		/**
   * Returns the actual frames / ticks per second.
   *
   * @param {number} [ticks=null] The number of previous ticks over which to measure the actual frames / ticks per second.
   * Defaults to the number of ticks per second.
   * @return {number} The actual frames / ticks per second. Depending on performance, this may differ
   * from the target frames per second.
   */

	}, {
		key: "getMeasuredFPS",
		value: function getMeasuredFPS() {
			var ticks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var times = this._times;
			if (!times || times.length < 2) {
				return -1;
			}
			// by default, calculate fps for the past ~1 second:
			ticks = Math.min(times.length - 1, ticks || this.framerate | 0);
			return 1000 / ((times[0] - times[ticks]) / ticks);
		}

		/**
   * Returns the number of milliseconds that have elapsed since Ticker was initialized via {@link core.Ticker#init}.
   * Returns -1 if Ticker has not been initialized. For example, you could use
   * this in a time synchronized animation to determine the exact amount of time that has elapsed.
   *
   * @param {boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
   * If false, the value returned will be total time elapsed since the first tick event listener was added.
   * @return {number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
   */

	}, {
		key: "getTime",
		value: function getTime() {
			var runTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			return this._startTime ? this._getTime() - (runTime ? this._pausedTime : 0) : -1;
		}

		/**
   * Similar to {@link core.Ticker#getTime}, but returns the time on the most recent {@link core.Ticker#event:tick}
   * event object.
   *
   * @param {boolean} [runTime=false] If true, the runTime property will be returned instead of time.
   * @returns {number} The time or runTime property from the most recent tick event or -1.
   */

	}, {
		key: "getEventTime",
		value: function getEventTime() {
			var runTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			return this._startTime ? (this._lastTime || this._startTime) - (runTime ? this._pausedTime : 0) : -1;
		}

		/**
   * Returns the number of ticks that have been broadcast by Ticker.
   *
   * @param {boolean} [pauseable=false] Indicates whether to include ticks that would have been broadcast
   * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
   * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
   * value.
   * @return {number} of ticks that have been broadcast.
   */

	}, {
		key: "getTicks",
		value: function getTicks() {
			var pauseable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			return this._ticks - (pauseable ? this._pausedTicks : 0);
		}

		/**
   * @private
   */

	}, {
		key: "_handleSynch",
		value: function _handleSynch() {
			this._timerId = null;
			this._setupTick();

			// run if enough time has elapsed, with a little bit of flexibility to be early:
			if (this._getTime() - this._lastTime >= (this._interval - 1) * 0.97) {
				this._tick();
			}
		}

		/**
   * @private
   */

	}, {
		key: "_handleRAF",
		value: function _handleRAF() {
			this._timerId = null;
			this._setupTick();
			this._tick();
		}

		/**
   * @private
   */

	}, {
		key: "_handleTimeout",
		value: function _handleTimeout() {
			this._timerId = null;
			this._setupTick();
			this._tick();
		}

		/**
   * @private
   */

	}, {
		key: "_setupTick",
		value: function _setupTick() {
			if (this._timerId != null) {
				return;
			} // avoid duplicates
			var mode = this.timingMode || this._raf && Ticker.RAF;
			if (mode === Ticker.RAF_SYNCHED || mode === Ticker.RAF) {
				var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (f) {
					this._timerId = f(mode === Ticker.RAF ? this._handleRAF.bind(this) : this._handleSynch.bind(this));
					this._raf = true;
					return;
				}
			}
			this._raf = false;
			this._timerId = setTimeout(this._handleTimeout.bind(this), this._interval);
		}

		/**
   * @private
   * @emits core.Ticker#event:tick
   */

	}, {
		key: "_tick",
		value: function _tick() {
			var paused = this.paused,
			    time = this._getTime(),
			    elapsedTime = time - this._lastTime;
			this._lastTime = time;
			this._ticks++;

			if (paused) {
				this._pausedTicks++;
				this._pausedTime += elapsedTime;
			}

			if (this.hasEventListener("tick")) {
				var event = new _Event2.default("tick");
				var maxDelta = this.maxDelta;
				event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime;
				event.paused = paused;
				event.time = time;
				event.runTime = time - this._pausedTime;
				this.dispatchEvent(event);
			}

			this._tickTimes.unshift(this._getTime() - time);
			while (this._tickTimes.length > 100) {
				this._tickTimes.pop();
			}

			this._times.unshift(time);
			while (this._times.length > 100) {
				this._times.pop();
			}
		}

		/**
   * @private
   */

	}, {
		key: "_getTime",
		value: function _getTime() {
			var now = window.performance && window.performance.now;
			return (now && now.call(performance) || new Date().getTime()) - this._startTime;
		}
	}, {
		key: "interval",
		get: function get() {
			return this._interval;
		},
		set: function set(interval) {
			this._interval = interval;
			if (!this._inited) {
				return;
			}
			this._setupTick();
		}

		/**
   * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
   * `framerate == 1000/interval`.
   *
   * @type {number}
   */

	}, {
		key: "framerate",
		get: function get() {
			return 1000 / this._interval;
		},
		set: function set(framerate) {
			this.interval = 1000 / framerate;
		}
	}], [{
		key: "on",
		value: function on(type, listener, scope, once, data, useCapture) {
			return _instance.on(type, listener, scope, once, data, useCapture);
		}
	}, {
		key: "removeEventListener",
		value: function removeEventListener(type, listener, useCapture) {
			_instance.removeEventListener(type, listener, useCapture);
		}
	}, {
		key: "off",
		value: function off(type, listener, useCapture) {
			_instance.off(type, listener, useCapture);
		}
	}, {
		key: "removeAllEventListeners",
		value: function removeAllEventListeners(type) {
			_instance.removeAllEventListeners(type);
		}
	}, {
		key: "dispatchEvent",
		value: function dispatchEvent(eventObj, bubbles, cancelable) {
			return _instance.dispatchEvent(eventObj, bubbles, cancelable);
		}
	}, {
		key: "hasEventListener",
		value: function hasEventListener(type) {
			return _instance.hasEventListener(type);
		}
	}, {
		key: "willTrigger",
		value: function willTrigger(type) {
			return _instance.willTrigger(type);
		}
	}, {
		key: "toString",
		value: function toString() {
			return _instance.toString();
		}
	}, {
		key: "init",
		value: function init() {
			_instance.init();
		}
	}, {
		key: "reset",
		value: function reset() {
			_instance.reset();
		}
	}, {
		key: "addEventListener",
		value: function addEventListener(type, listener, useCapture) {
			_instance.addEventListener(type, listener, useCapture);
		}
	}, {
		key: "getMeasuredTickTime",
		value: function getMeasuredTickTime(ticks) {
			return _instance.getMeasuredTickTime(ticks);
		}
	}, {
		key: "getMeasuredFPS",
		value: function getMeasuredFPS(ticks) {
			return _instance.getMeasuredFPS(ticks);
		}
	}, {
		key: "getTime",
		value: function getTime(runTime) {
			return _instance.getTime(runTime);
		}
	}, {
		key: "getEventTime",
		value: function getEventTime(runTime) {
			return _instance.getEventTime(runTime);
		}
	}, {
		key: "getTicks",
		value: function getTicks(pauseable) {
			return _instance.getTicks(pauseable);
		}
	}, {
		key: "interval",
		get: function get() {
			return _instance.interval;
		},
		set: function set(interval) {
			_instance.interval = interval;
		}
	}, {
		key: "framerate",
		get: function get() {
			return _instance.framerate;
		},
		set: function set(framerate) {
			_instance.framerate = framerate;
		}
	}, {
		key: "name",
		get: function get() {
			return _instance.name;
		},
		set: function set(name) {
			_instance.name = name;
		}
	}, {
		key: "timingMode",
		get: function get() {
			return _instance.timingMode;
		},
		set: function set(timingMode) {
			_instance.timingMode = timingMode;
		}
	}, {
		key: "maxDelta",
		get: function get() {
			return _instance.maxDelta;
		},
		set: function set(maxDelta) {
			_instance.maxDelta = maxDelta;
		}
	}, {
		key: "paused",
		get: function get() {
			return _instance.paused;
		},
		set: function set(paused) {
			_instance.paused = paused;
		}
	}]);

	return Ticker;
}(_EventDispatcher3.default);

/**
 * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused.
 *
 * @example
 * Ticker.addEventListener("tick", event => console.log("Paused:", event.paused, event.delta));
 *
 * @event core.Ticker#tick
 * @type {Object}
 * @property {Object} target The object that dispatched the event.
 * @property {string} type The event type.
 * @property {boolean} paused Indicates whether the ticker is currently paused.
 * @property {number} delta The time elapsed in ms since the last tick.
 * @property {number} time The total time in ms since Ticker was initialized.
 * @property {number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
 * you could determine the amount of time that the Ticker has been paused since initialization with `time-runTime`.
 * @since 0.6.0
 */

exports.default = Ticker;

// the default Ticker instance

var _instance = new Ticker("createjs.global");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractTween2 = __webpack_require__(2);

var _AbstractTween3 = _interopRequireDefault(_AbstractTween2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Timeline
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Visit http://createjs.com/ for documentation, updates and examples.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Copyright (c) 2010 gskinner.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Permission is hereby granted, free of charge, to any person
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * obtaining a copy of this software and associated documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * files (the "Software"), to deal in the Software without
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * restriction, including without limitation the rights to use,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * copies of the Software, and to permit persons to whom the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Software is furnished to do so, subject to the following
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * The above copyright notice and this permission notice shall be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * The Timeline class synchronizes multiple tweens and allows them to be controlled as a group. Please note that if a
 * timeline is looping, the tweens on it may appear to loop even if the "loop" property of the tween is false.
 *
 * NOTE: Timeline currently also accepts a param list in the form: `tweens, labels, props`. This is for backwards
 * compatibility only and will be removed in the future. Include tweens and labels as properties on the props object.
 *
 * @memberof tweenjs
 * @extends AbstractTween
 *
 * @param {Object} [props] The configuration properties to apply to this instance (ex. `{loop:-1, paused:true}`).
 * @param {boolean} [props.useTicks=false] See the {@link tweenjs.AbstractTween#useTicks} property for more information.
 * @param {boolean} [props.ignoreGlobalPause=false] See the {@link tweenjs.AbstractTween#ignoreGlobalPause} for more information.
 * @param {number|boolean} [props.loop=0] See the {@link tweenjs.AbstractTween#loop} for more information.
 * @param {boolean} [props.reversed=false] See the {@link tweenjs.AbstractTween#reversed} for more information.
 * @param {boolean} [props.bounce=false] See the {@link tweenjs.AbstractTween#bounce} for more information.
 * @param {number} [props.timeScale=1] See the {@link tweenjs.AbstractTween#timeScale} for more information.
 * @param {boolean} [props.paused=false] See the {@link tweenjs.AbstractTween#paused} for more information.
 * @param {number} [props.position] See the {@link tweenjs.AbstractTween#position} for more information.
 * @param {boolean} [props.tweens]
 * @param {number} [props.labels]
 * @param {Function} [props.onChange] Adds the specified function as a listener to the {@link tweenjs.AbstractTween#event:change} event.
 * @param {Function} [props.onComplete] Adds the specified function as a listener to the {@link tweenjs.AbstractTween#event:complete} event.
 * Supported props are listed below. These props are set on the corresponding instance properties except where
 * specified.<UL>
 *    <LI> `useTicks`</LI>
 *    <LI> `ignoreGlobalPause`</LI>
 *    <LI> `loop`</LI>
 *    <LI> `reversed`</LI>
 *    <LI> `bounce`</LI>
 *    <LI> `timeScale`</LI>
 *    <LI> `paused`</LI>
 *    <LI> `position`: indicates the initial position for this tween.</LI>
 *    <LI> `onChange`: adds the specified function as a listener to the `change` event</LI>
 *    <LI> `onComplete`: adds the specified function as a listener to the `complete` event</LI>
 * </UL>
 */
var Timeline = function (_AbstractTween) {
	_inherits(Timeline, _AbstractTween);

	function Timeline() {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Timeline);

		/**
   * The array of tweens in the timeline. It is *strongly* recommended that you use
   * {@link tweenjs.Tween#addTween} and {@link tweenjs.Tween#removeTween},
   * rather than accessing this directly, but it is included for advanced uses.
   * @type {Tween[]}
   */
		var _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

		_this.tweens = [];

		if (props.tweens) {
			_this.addTween.apply(_this, _toConsumableArray(props.tweens));
		}
		if (props.labels) {
			_this.labels = props.labels;
		}

		_this._init(props);
		return _this;
	}

	/**
  * Adds one or more tweens (or timelines) to this timeline. The tweens will be paused (to remove them from the
  * normal ticking system) and managed by this timeline. Adding a tween to multiple timelines will result in
  * unexpected behaviour.
  *
  * @param {Tween} ...tweens The tween(s) to add. Accepts multiple arguments.
  * @return {Tween} The first tween that was passed in.
  */


	_createClass(Timeline, [{
		key: "addTween",
		value: function addTween() {
			for (var _len = arguments.length, tweens = Array(_len), _key = 0; _key < _len; _key++) {
				tweens[_key] = arguments[_key];
			}

			var l = tweens.length;
			if (l === 1) {
				var tween = tweens[0];
				this.tweens.push(tween);
				tween._parent = this;
				tween.paused = true;
				var d = tween.duration;
				if (tween.loop > 0) {
					d *= tween.loop + 1;
				}
				if (d > this.duration) {
					this.duration = d;
				}
				if (this.rawPosition >= 0) {
					tween.setPosition(this.rawPosition);
				}
				return tween;
			}
			if (l > 1) {
				for (var i = 0; i < l; i++) {
					this.addTween(tweens[i]);
				}
				return tweens[l - 1];
			}
			return null;
		}

		/**
   * Removes one or more tweens from this timeline.
   *
   * @param {Tween} ...tweens The tween(s) to remove. Accepts multiple arguments.
   * @return {boolean} Returns `true` if all of the tweens were successfully removed.
   */

	}, {
		key: "removeTween",
		value: function removeTween() {
			for (var _len2 = arguments.length, tweens = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				tweens[_key2] = arguments[_key2];
			}

			var l = tweens.length;
			if (l === 1) {
				var tw = this.tweens;
				var tween = tweens[0];
				var i = tw.length;
				while (i--) {
					if (tw[i] === tween) {
						tw.splice(i, 1);
						tween._parent = null;
						if (tween.duration >= this.duration) {
							this.updateDuration();
						}
						return true;
					}
				}
				return false;
			}
			if (l > 1) {
				var good = true;
				for (var _i = 0; _i < l; _i++) {
					good = good && this.removeTween(tweens[_i]);
				}
				return good;
			}
			return true;
		}

		/**
   * Recalculates the duration of the timeline. The duration is automatically updated when tweens are added or removed,
   * but this method is useful if you modify a tween after it was added to the timeline.
   */

	}, {
		key: "updateDuration",
		value: function updateDuration() {
			this.duration = 0;
			for (var i = 0, l = this.tweens.length; i < l; i++) {
				var tween = this.tweens[i];
				var d = tween.duration;
				if (tween.loop > 0) {
					d *= tween.loop + 1;
				}
				if (d > this.duration) {
					this.duration = d;
				}
			}
		}

		/**
   * @throws Timeline cannot be cloned.
   */

	}, {
		key: "clone",
		value: function clone() {
			throw "Timeline can not be cloned.";
		}

		/**
   * @private
   */

	}, {
		key: "_updatePosition",
		value: function _updatePosition(jump, end) {
			var t = this.position;
			for (var i = 0, l = this.tweens.length; i < l; i++) {
				this.tweens[i].setPosition(t, true, jump); // actions will run after all the tweens update.
			}
		}

		/**
   * @private
   */

	}, {
		key: "_runActionsRange",
		value: function _runActionsRange(startPos, endPos, jump, includeStart) {
			//console.log("	range", startPos, endPos, jump, includeStart);
			var t = this.position;
			for (var i = 0, l = this.tweens.length; i < l; i++) {
				this.tweens[i]._runActions(startPos, endPos, jump, includeStart);
				if (t !== this.position) {
					return true;
				} // an action changed this timeline's position.
			}
		}
	}]);

	return Timeline;
}(_AbstractTween3.default);

exports.default = Timeline;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _easeljs = __webpack_require__(0);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _calculations = __webpack_require__(5);

var _calculations2 = _interopRequireDefault(_calculations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(options, map) {
        _classCallCheck(this, Point);

        this.map = map;

        this.occupied = false;
        this.circled = false;

        this.setWidth(options.width);
        this.setId(options.id);

        this.circle = this.draw();

        this.circle.on('click', this.circleClickHandler, this, true);
    }

    // handlers

    _createClass(Point, [{
        key: 'circleClickHandler',
        value: function circleClickHandler() {
            var pointWidth = this.getWidth();
            var id = this.getId();

            this.occupied = true;
            this.circle.cursor = 'default';
            this.circle.graphics.clear().beginFill(_config2.default.colors.circleRed).drawCircle(_calculations2.default.getPointCord(id.x, pointWidth), _calculations2.default.getPointCord(id.y, pointWidth), _config2.default.circleRadius);

            this.map.stage.update();
        }

        // drawing

    }, {
        key: 'draw',
        value: function draw() {
            var circle = new _easeljs.Shape();
            var pointWidth = this.getWidth();
            var id = this.getId();

            circle.cursor = 'pointer';
            circle.graphics.beginFill(_config2.default.colors.circleDefault).drawCircle(_calculations2.default.getPointCord(id.x, pointWidth), _calculations2.default.getPointCord(id.y, pointWidth), _config2.default.circleRadius);
            this.map.stage.addChild(circle);

            return circle;
        }

        // accessors

    }, {
        key: 'setWidth',
        value: function setWidth(w) {
            this.w = w;
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.w;
        }
    }, {
        key: 'setId',
        value: function setId(id) {
            this.id = id;
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }]);

    return Point;
}();

exports.default = Point;

/*for tile testing*/

/*const sq = new Shape();
const pointWidth = this.getWidth();
const id = this.getId();

sq.graphics
    .setStrokeStyle(1)
    .beginStroke('red')
    .drawRect(
        (id.x * pointWidth),
        (id.y * pointWidth),
        pointWidth,
        pointWidth
    );
this.map.stage.addChild(sq);*/

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    colors: {
        lines: '#efefef',
        circleDefault: '#CCCCCC',
        circleRed: '#ff1212',
        circleBlue: '#127cff'
    },
    circleRadius: 4
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tileCount: {
        vertical: 26,
        horizontal: 17
    },
    colors: {
        lines: '#efefef'
    },
    lineWidth: 2
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ssrWindow = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Dom7 2.0.5
                                                                                                                                                           * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
                                                                                                                                                           * http://framework7.io/docs/dom.html
                                                                                                                                                           *
                                                                                                                                                           * Copyright 2018, Vladimir Kharlampidi
                                                                                                                                                           * The iDangero.us
                                                                                                                                                           * http://www.idangero.us/
                                                                                                                                                           *
                                                                                                                                                           * Licensed under MIT
                                                                                                                                                           *
                                                                                                                                                           * Released on: April 20, 2018
                                                                                                                                                           */


var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this;
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }
  self.length = arr.length;
  // Return collection with methods
  return this;
};

function $$1(selector, context) {
  var arr = [];
  var i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els = void 0;
      var tempParent = void 0;
      var _html = selector.trim();
      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = _ssrWindow.document.createElement(toCreate);
        tempParent.innerHTML = _html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [_ssrWindow.document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || _ssrWindow.document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === _ssrWindow.window || selector === _ssrWindow.document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$$1.fn = Dom7.prototype;
$$1.Class = Dom7;
$$1.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (_ssrWindow.window.requestAnimationFrame) return _ssrWindow.window.requestAnimationFrame(callback);else if (_ssrWindow.window.webkitRequestAnimationFrame) return _ssrWindow.window.webkitRequestAnimationFrame(callback);
  return _ssrWindow.window.setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (_ssrWindow.window.cancelAnimationFrame) return _ssrWindow.window.cancelAnimationFrame(id);else if (_ssrWindow.window.webkitCancelAnimationFrame) return _ssrWindow.window.webkitCancelAnimationFrame(id);
  return _ssrWindow.window.clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  var el = void 0;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute('data-' + key);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];
      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  var dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];
        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (var _i = 0; _i < dom.length; _i += 1) {
    var el = dom[_i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = duration + 'ms'; // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($$1(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $$1(target).parents(); // eslint-disable-line
      for (var k = 0; k < _parents.length; k += 1) {
        if ($$1(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j = void 0;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      for (var k = handlers.length - 1; k >= 0; k -= 1) {
        var handler = handlers[k];
        if (listener && handler.listener === listener) {
          el.removeEventListener(event, handler.proxyListener, capture);
          handlers.splice(k, 1);
        } else if (!listener) {
          el.removeEventListener(event, handler.proxyListener, capture);
          handlers.splice(k, 1);
        }
      }
    }
  }
  return this;
}
function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  function proxy() {
    for (var _len4 = arguments.length, eventArgs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, proxy, capture);
  }
  return dom.on(eventName, targetSelector, proxy, capture);
}
function trigger() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = void 0;
      try {
        evt = new _ssrWindow.window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = _ssrWindow.document.createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = _ssrWindow.document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var _scrollTop = el === _ssrWindow.window ? _ssrWindow.window.scrollY : el.scrollTop;
    var _scrollLeft = el === _ssrWindow.window ? _ssrWindow.window.scrollX : el.scrollLeft;
    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}
function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (_ssrWindow.window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var i = void 0;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  var arr = [];
  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  var matchedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  var modifiedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var el = this[0];
  var compareWith = void 0;
  var i = void 0;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $$1(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === _ssrWindow.document) return el === _ssrWindow.document;else if (selector === _ssrWindow.window) return el === _ssrWindow.window;

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  var child = this[0];
  var i = void 0;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex = void 0;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append() {
  var newChild = void 0;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = arguments.length <= k ? undefined : arguments[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = _ssrWindow.document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $$1(parent).append(this);
  return this;
}
function prepend(newChild) {
  var i = void 0;
  var j = void 0;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = _ssrWindow.document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $$1(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  var before = $$1(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  var after = $$1(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $$1(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);
    el = _next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $$1(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);
    el = _prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($$1(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $$1(unique(parents));
}
function parents(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line
    while (_parent) {
      if (selector) {
        if ($$1(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $$1(unique(parents));
}
function closest(selector) {
  var closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  var children = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $$1(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add() {
  var dom = this;
  var i = void 0;
  var j = void 0;

  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $$1(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

var Methods = Object.freeze({
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  prop: prop,
  data: data,
  removeData: removeData,
  dataset: dataset,
  val: val,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  once: once,
  trigger: trigger,
  transitionEnd: transitionEnd,
  animationEnd: animationEnd,
  width: width,
  outerWidth: outerWidth,
  height: height,
  outerHeight: outerHeight,
  offset: offset,
  hide: hide,
  show: show,
  styles: styles,
  css: css,
  toArray: toArray,
  each: each,
  forEach: forEach,
  filter: filter,
  map: map,
  html: html,
  text: text,
  is: is,
  indexOf: indexOf,
  index: index,
  eq: eq,
  append: append,
  appendTo: appendTo,
  prepend: prepend,
  prependTo: prependTo,
  insertBefore: insertBefore,
  insertAfter: insertAfter,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  siblings: siblings,
  parent: parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  remove: remove,
  detach: detach,
  add: add,
  empty: empty
});

function scrollTo() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    var el = this;
    var currentTop = void 0;
    var currentLeft = void 0;
    var maxTop = void 0;
    var maxLeft = void 0;
    var newTop = void 0;
    var newLeft = void 0;
    var scrollTop = void 0; // eslint-disable-line
    var scrollLeft = void 0; // eslint-disable-line
    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done = void 0;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop() {
  for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
  for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

var Scroll = Object.freeze({
  scrollTo: scrollTo,
  scrollTop: scrollTop,
  scrollLeft: scrollLeft
});

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      var elements = [];

      // Define & Cache Initials & Units
      a.elements.each(function (index, el) {
        var initialFullValue = void 0;
        var initialValue = void 0;
        var unit = void 0;
        var finalValue = void 0;
        var finalFullValue = void 0;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = _ssrWindow.window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });

      var startTime = null;
      var time = void 0;
      var elementsDone = 0;
      var propsDone = 0;
      var done = void 0;
      var began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress = void 0;
        var easeProgress = void 0;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;

            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance = void 0;
  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;
  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var Animate = Object.freeze({
  animate: animate,
  stop: stop
});

var noTrigger = 'resize scroll'.split(' ');
function eventShortcut(name) {
  for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $$1(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(undefined, ['click'].concat(args));
}
function blur() {
  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(undefined, ['blur'].concat(args));
}
function focus() {
  for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(undefined, ['focus'].concat(args));
}
function focusin() {
  for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusin'].concat(args));
}
function focusout() {
  for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusout'].concat(args));
}
function keyup() {
  for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(undefined, ['keyup'].concat(args));
}
function keydown() {
  for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(undefined, ['keydown'].concat(args));
}
function keypress() {
  for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(undefined, ['keypress'].concat(args));
}
function submit() {
  for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(undefined, ['submit'].concat(args));
}
function change() {
  for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(undefined, ['change'].concat(args));
}
function mousedown() {
  for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousedown'].concat(args));
}
function mousemove() {
  for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousemove'].concat(args));
}
function mouseup() {
  for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseup'].concat(args));
}
function mouseenter() {
  for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseenter'].concat(args));
}
function mouseleave() {
  for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseleave'].concat(args));
}
function mouseout() {
  for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseout'].concat(args));
}
function mouseover() {
  for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseover'].concat(args));
}
function touchstart() {
  for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchstart'].concat(args));
}
function touchend() {
  for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchend'].concat(args));
}
function touchmove() {
  for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchmove'].concat(args));
}
function resize() {
  for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(undefined, ['resize'].concat(args));
}
function scroll() {
  for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(undefined, ['scroll'].concat(args));
}

var eventShortcuts = Object.freeze({
  click: click,
  blur: blur,
  focus: focus,
  focusin: focusin,
  focusout: focusout,
  keyup: keyup,
  keydown: keydown,
  keypress: keypress,
  submit: submit,
  change: change,
  mousedown: mousedown,
  mousemove: mousemove,
  mouseup: mouseup,
  mouseenter: mouseenter,
  mouseleave: mouseleave,
  mouseout: mouseout,
  mouseover: mouseover,
  touchstart: touchstart,
  touchend: touchend,
  touchmove: touchmove,
  resize: resize,
  scroll: scroll
});

[Methods, Scroll, Animate, eventShortcuts].forEach(function (group) {
  Object.keys(group).forEach(function (methodName) {
    $$1.fn[methodName] = group[methodName];
  });
});

exports.default = $$1;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * SSR Window 1.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 10, 2018
 */
var d;
if (typeof document === 'undefined') {
  d = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: { hash: '' }
  };
} else {
  // eslint-disable-next-line
  d = document;
}

var doc = d;

var w;
if (typeof window === 'undefined') {
  w = {
    document: doc,
    navigator: {
      userAgent: ''
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  };
} else {
  // eslint-disable-next-line
  w = window;
}

var win = w;

exports.window = win;
exports.document = doc;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map