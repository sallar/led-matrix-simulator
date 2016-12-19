/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(24);
	__webpack_require__(33);
	var preact_1 = __webpack_require__(46);
	var playground_1 = __webpack_require__(47);
	var symbols_1 = __webpack_require__(56);
	var plasma_1 = __webpack_require__(58);
	__webpack_require__(65);
	preact_1.render(preact_1.h("div", null,
	    preact_1.h("h1", null, "LED Simulator"),
	    preact_1.h("h2", null, "Text Writer"),
	    preact_1.h(playground_1.default, null),
	    preact_1.h("h2", null, "Symbols"),
	    preact_1.h(symbols_1.default, null),
	    preact_1.h("h2", null, "Plasma"),
	    preact_1.h(plasma_1.default, null)), document.getElementById('root'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = __webpack_require__(5).String.repeat;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(3);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(21)
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(6)
	  , redefine  = __webpack_require__(16)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(14)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(6)
	  , has       = __webpack_require__(17)
	  , SRC       = __webpack_require__(18)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(22)
	  , defined   = __webpack_require__(23);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(5).Array.fill;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(3);

	$export($export.P, 'Array', {fill: __webpack_require__(26)});

	__webpack_require__(30)('fill');

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(27)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(22)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(22)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(31)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(32)('wks')
	  , uid        = __webpack_require__(18)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(35)});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(36)
	  , gOPS     = __webpack_require__(44)
	  , pIE      = __webpack_require__(45)
	  , toObject = __webpack_require__(27)
	  , IObject  = __webpack_require__(39)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(43);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(32)('keys')
	  , uid    = __webpack_require__(18);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = [];
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !1) {
	            if ('number' == typeof child || child === !0) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                children.push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) isSvgMode = parent instanceof SVGElement;
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel && !componentRoot) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom) {
	                if (dom instanceof Text && dom.parentNode) {
	                    if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	                    return dom;
	                }
	                recollectNodeTree(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = vnode.nodeName, prevSvgMode = isSvgMode, vchildren = vnode.children;
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) {
	            if (out.firstChild.nodeValue != vchildren[0]) out.firstChild.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || out.firstChild) innerDiffNode(out, vchildren, context, mountAll);
	        var props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        diffAttributes(out, vnode.attributes, props);
	        if (originalAttributes && 'function' == typeof originalAttributes.ref) (props.ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) {
	                for (j = min; j < childrenLen; j++) {
	                    c = children[j];
	                    if (c && isSameNodeType(c, vchild)) {
	                        child = c;
	                        children[j] = void 0;
	                        if (j === childrenLen - 1) childrenLen--;
	                        if (j === min) min++;
	                        break;
	                    }
	                }
	                if (!child && min < childrenLen && isFunction(vchild.nodeName) && mountAll) {
	                    child = children[min];
	                    children[min++] = void 0;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom && child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) if (children[i]) recollectNodeTree(children[i], unmountOnly);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        for (var _name in old) if (!(attrs && _name in attrs) && null != old[_name]) setAccessor(dom, _name, old[_name], old[_name] = void 0, isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!('children' === _name2 || 'innerHTML' === _name2 || _name2 in old && attrs[_name2] === ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2]))) setAccessor(dom, _name2, old[_name2], old[_name2] = attrs[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    inst = initialChildComponent;
	                    var childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(46);
	var simulator_1 = __webpack_require__(48);
	var store_1 = __webpack_require__(50);
	var fonts = __webpack_require__(52);
	var Playground = (function (_super) {
	    __extends(Playground, _super);
	    function Playground() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            cols: 32,
	            rows: 16,
	            text: 'Hello\nThere',
	            color: '#5fd3ff',
	            fonts: Object.keys(fonts),
	            font: 'fivebyfive',
	            animated: false,
	            glow: false
	        };
	        return _this;
	    }
	    Playground.prototype.componentWillMount = function () {
	        this.draw();
	    };
	    Playground.prototype.draw = function () {
	        var text = this.state.text.replace(/[^\x00-\x7F]/g, '');
	        var store = store_1.createStore(this.state.cols, this.state.rows);
	        store.write(text, fonts[this.state.font], this.state.color);
	        this.setState({ data: store.matrix });
	    };
	    Playground.prototype.slideChange = function (e, prop) {
	        this.setState((_a = {},
	            _a[prop] = parseInt(e.target.value),
	            _a));
	        this.draw();
	        var _a;
	    };
	    Playground.prototype.propChange = function (e, prop) {
	        this.setState((_a = {},
	            _a[prop] = e.target.value,
	            _a));
	        this.draw();
	        var _a;
	    };
	    Playground.prototype.propToggle = function (e, prop) {
	        this.setState((_a = {},
	            _a[prop] = !this.state[prop],
	            _a));
	        this.draw();
	        var _a;
	    };
	    Playground.prototype.render = function (_, _a) {
	        var _this = this;
	        var rows = _a.rows, cols = _a.cols, text = _a.text, color = _a.color, fonts = _a.fonts, font = _a.font, animated = _a.animated, data = _a.data, glow = _a.glow;
	        return (preact_1.h("div", { className: "row" },
	            preact_1.h("div", { className: "column" },
	                "x: ",
	                cols,
	                preact_1.h("input", { type: "range", min: "32", max: "64", onInput: function (e) { return _this.slideChange(e, 'cols'); }, value: cols.toString() }),
	                preact_1.h("br", null),
	                "y: ",
	                rows,
	                preact_1.h("input", { type: "range", min: "16", max: "32", onInput: function (e) { return _this.slideChange(e, 'rows'); }, value: rows.toString() }),
	                preact_1.h("br", null),
	                preact_1.h("input", { type: "checkbox", checked: animated, onChange: function (e) { return _this.propToggle(e, 'animated'); } }),
	                " Animated",
	                preact_1.h("input", { type: "checkbox", checked: glow, onChange: function (e) { return _this.propToggle(e, 'glow'); } }),
	                " Glow",
	                preact_1.h("textarea", { value: text, onKeyUp: function (e) { return _this.propChange(e, 'text'); } }),
	                preact_1.h("br", null),
	                preact_1.h("input", { type: "color", value: color, onChange: function (e) { return _this.propChange(e, 'color'); } }),
	                preact_1.h("br", null),
	                fonts.map(function (fontName) {
	                    return preact_1.h("label", null,
	                        preact_1.h("input", { type: "radio", value: fontName, checked: fontName === font, onChange: function (e) { return _this.propChange(e, 'font'); } }),
	                        " ",
	                        fontName);
	                })),
	            preact_1.h("div", { className: "column column-60" },
	                preact_1.h("div", { class: "led" },
	                    preact_1.h(simulator_1.default, { data: data, x: cols, y: rows, animated: animated, glow: glow })))));
	    };
	    return Playground;
	}(preact_1.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Playground;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __rest = (this && this.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	            t[p[i]] = s[p[i]];
	    return t;
	};
	var preact_1 = __webpack_require__(46);
	var matrix_1 = __webpack_require__(49);
	var Simulator = (function (_super) {
	    __extends(Simulator, _super);
	    function Simulator(props) {
	        var _this = _super.call(this, props) || this;
	        var data = props.data, children = props.children, options = __rest(props, ["data", "children"]);
	        _this.state = {
	            data: data,
	            options: options
	        };
	        return _this;
	    }
	    Simulator.prototype.componentDidMount = function () {
	        this.led = new matrix_1.default(this.canvas, this.state.options);
	        this.led.setData(this.state.data);
	        this.draw();
	    };
	    Simulator.prototype.componentWillReceiveProps = function (nextProps) {
	        var data = nextProps.data, children = nextProps.children, options = __rest(nextProps, ["data", "children"]);
	        if (options !== this.state.options) {
	            this.led.setNewOptions(options);
	            this.setState({ options: options });
	        }
	        if (data !== this.state.data) {
	            this.led.setData(data);
	            this.setState({ data: data });
	        }
	        this.draw();
	    };
	    Simulator.prototype.draw = function () {
	        this.led.render();
	    };
	    Simulator.prototype.render = function () {
	        var _this = this;
	        return (preact_1.h("canvas", { ref: function (canvas) { return _this.canvas = canvas; } }));
	    };
	    return Simulator;
	}(preact_1.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Simulator;


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	var DEFAULT_OPTS = {
	    x: 32,
	    y: 16,
	    pixelWidth: 10,
	    pixelHeight: 10,
	    margin: 4,
	    glow: false,
	    animated: false
	};
	var LedMatrix = (function () {
	    function LedMatrix(canvas, opts) {
	        if (opts === void 0) { opts = {}; }
	        this.data = [];
	        this.offset = 0;
	        this.canvas = canvas;
	        this.ctx = this.canvas.getContext('2d');
	        this.opts = Object.assign({}, DEFAULT_OPTS, opts);
	        this.setup();
	    }
	    LedMatrix.prototype.setup = function () {
	        var width = this.opts.x * (this.opts.pixelWidth + this.opts.margin);
	        var height = this.opts.y * (this.opts.pixelHeight + this.opts.margin);
	        this.canvas.width = width;
	        this.canvas.height = height;
	        this.canvas.style.width = width / 2 + "px";
	        this.canvas.style.height = height / 2 + "px";
	    };
	    LedMatrix.prototype.render = function () {
	        if (this.rAF) {
	            cancelAnimationFrame(this.rAF);
	        }
	        this.clear();
	        this.draw();
	    };
	    LedMatrix.prototype.draw = function () {
	        var _a = this.opts, pixelWidth = _a.pixelWidth, pixelHeight = _a.pixelHeight, margin = _a.margin, x = _a.x, y = _a.y, glow = _a.glow, animated = _a.animated;
	        var pixels = x * y;
	        if (this.data.length !== pixels) {
	            throw new Error('`data` needs to be provided fully. Length is insufficient.');
	        }
	        for (var i = 0; i < pixels; i += 1) {
	            var _b = this.data[i], on = _b.on, color = _b.color;
	            var rgba = on ? "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")" : 'rgba(0,0,0,.1)';
	            var dy = Math.floor(i / x);
	            var dx = i - (dy * x);
	            if (animated) {
	                dx -= this.offset;
	                dx = (dx < 0) ? (x - 1) - Math.abs(dx) : dx;
	            }
	            if (glow && on) {
	                this.ctx.shadowBlur = 5;
	                this.ctx.shadowColor = rgba;
	            }
	            else {
	                this.ctx.shadowBlur = 0;
	            }
	            this.ctx.fillStyle = rgba;
	            this.ctx.fillRect(dx * (pixelWidth + margin), dy * (pixelHeight + margin), pixelWidth, pixelHeight);
	        }
	        if (animated) {
	            this.animate();
	        }
	    };
	    LedMatrix.prototype.animate = function () {
	        var _this = this;
	        this.offset += 1;
	        if (this.offset >= this.opts.x) {
	            this.offset = 0;
	        }
	        this.rAF = requestAnimationFrame(function () {
	            _this.clear();
	            _this.draw();
	        });
	    };
	    LedMatrix.prototype.clear = function () {
	        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    };
	    LedMatrix.prototype.setNewOptions = function (opts) {
	        this.opts = Object.assign({}, this.opts, opts);
	        this.setup();
	    };
	    LedMatrix.prototype.setData = function (data) {
	        this.data = data;
	    };
	    return LedMatrix;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LedMatrix;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tools_1 = __webpack_require__(51);
	function createStore(xw, yw) {
	    var matrix = Array(xw * yw).fill({
	        on: false
	    });
	    var fill = function (x, y, r, g, b, a) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        if (r === void 0) { r = 0; }
	        if (g === void 0) { g = 0; }
	        if (b === void 0) { b = 0; }
	        if (a === void 0) { a = 1; }
	        if (x < xw && y < yw) {
	            matrix[(y * xw) + x] = {
	                on: true,
	                color: { r: r, g: g, b: b, a: a }
	            };
	        }
	    };
	    var write = function (text, font, color) {
	        var lines = text.split('\n');
	        var _a = tools_1.hexToRGB(color), r = _a[0], g = _a[1], b = _a[2];
	        var CHAR_WIDTH = font[0].length;
	        var CHAR_HEIGHT = font[0][0].length;
	        lines.forEach(function (ch, line) {
	            for (var i = 0; i < ch.length; i += 1) {
	                var ind = ch.charCodeAt(i) - 32;
	                var fontRow = font[ind];
	                for (var x = 0; x < CHAR_WIDTH; x += 1) {
	                    var col = fontRow[x];
	                    for (var y = 0; y < CHAR_HEIGHT; y += 1) {
	                        if (col[y] === '1') {
	                            fill(x + (i * CHAR_WIDTH), y + (line * CHAR_HEIGHT), r, g, b, 1);
	                        }
	                    }
	                }
	            }
	        });
	    };
	    return {
	        matrix: matrix,
	        fill: fill,
	        write: write
	    };
	}
	exports.createStore = createStore;


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	function hexToBin(num) {
	    var bin = num.toString(2);
	    return (bin.length < 8) ? '0'.repeat(8 - bin.length) + bin : bin;
	}
	exports.hexToBin = hexToBin;
	function prepareFont(fontMap) {
	    return fontMap.map(function (row) { return row.map(function (num) { return hexToBin(num).split('').reverse().join(''); }); });
	}
	exports.prepareFont = prepareFont;
	function hexToRGB(hexStr) {
	    var hex = parseInt(hexStr.substr(1), 16);
	    return [hex >> 16, hex >> 8 & 0xFF, hex & 0xFF];
	}
	exports.hexToRGB = hexToRGB;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _5x5_1 = __webpack_require__(53);
	exports.fivebyfive = _5x5_1.font;
	var tama_1 = __webpack_require__(54);
	exports.tama = tama_1.font;
	var m38_1 = __webpack_require__(55);
	exports.m38 = m38_1.font;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tools_1 = __webpack_require__(51);
	exports.font = tools_1.prepareFont([
	    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x5c, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x06, 0x00, 0x06, 0x00, 0x00, 0x00],
	    [0x28, 0x7c, 0x28, 0x7c, 0x28, 0x00],
	    [0x5c, 0x54, 0xfe, 0x54, 0x74, 0x00],
	    [0x44, 0x20, 0x10, 0x08, 0x44, 0x00],
	    [0x28, 0x54, 0x54, 0x20, 0x50, 0x00],
	    [0x06, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x38, 0x44, 0x00, 0x00, 0x00, 0x00],
	    [0x44, 0x38, 0x00, 0x00, 0x00, 0x00],
	    [0x02, 0x07, 0x02, 0x00, 0x00, 0x00],
	    [0x10, 0x10, 0x7c, 0x10, 0x10, 0x00],
	    [0xc0, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x10, 0x10, 0x10, 0x10, 0x10, 0x00],
	    [0x40, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x60, 0x10, 0x0c, 0x00, 0x00, 0x00],
	    [0x7c, 0x64, 0x54, 0x4c, 0x7c, 0x00],
	    [0x48, 0x7c, 0x40, 0x00, 0x00, 0x00],
	    [0x64, 0x54, 0x54, 0x54, 0x48, 0x00],
	    [0x44, 0x54, 0x54, 0x54, 0x6c, 0x00],
	    [0x3c, 0x20, 0x70, 0x20, 0x20, 0x00],
	    [0x5c, 0x54, 0x54, 0x54, 0x24, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x74, 0x00],
	    [0x04, 0x04, 0x64, 0x14, 0x0c, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x7c, 0x00],
	    [0x5c, 0x54, 0x54, 0x54, 0x7c, 0x00],
	    [0x44, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xc4, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x10, 0x28, 0x44, 0x00, 0x00, 0x00],
	    [0x28, 0x28, 0x28, 0x28, 0x28, 0x00],
	    [0x44, 0x28, 0x10, 0x00, 0x00, 0x00],
	    [0x08, 0x04, 0x54, 0x08, 0x00, 0x00],
	    [0x7c, 0x44, 0x54, 0x54, 0x5c, 0x00],
	    [0x7c, 0x24, 0x24, 0x24, 0x7c, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x6c, 0x00],
	    [0x7c, 0x44, 0x44, 0x44, 0x44, 0x00],
	    [0x7c, 0x44, 0x44, 0x44, 0x38, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x44, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x04, 0x00],
	    [0x7c, 0x44, 0x44, 0x54, 0x74, 0x00],
	    [0x7c, 0x10, 0x10, 0x10, 0x7c, 0x00],
	    [0x44, 0x44, 0x7c, 0x44, 0x44, 0x00],
	    [0x60, 0x40, 0x40, 0x44, 0x7c, 0x00],
	    [0x7c, 0x10, 0x10, 0x28, 0x44, 0x00],
	    [0x7c, 0x40, 0x40, 0x40, 0x40, 0x00],
	    [0x7c, 0x08, 0x10, 0x08, 0x7c, 0x00],
	    [0x7c, 0x08, 0x10, 0x20, 0x7c, 0x00],
	    [0x38, 0x44, 0x44, 0x44, 0x38, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x08, 0x00],
	    [0x3c, 0x24, 0x64, 0x24, 0x3c, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x68, 0x00],
	    [0x5c, 0x54, 0x54, 0x54, 0x74, 0x00],
	    [0x04, 0x04, 0x7c, 0x04, 0x04, 0x00],
	    [0x7c, 0x40, 0x40, 0x40, 0x7c, 0x00],
	    [0x0c, 0x30, 0x40, 0x30, 0x0c, 0x00],
	    [0x3c, 0x40, 0x30, 0x40, 0x3c, 0x00],
	    [0x44, 0x28, 0x10, 0x28, 0x44, 0x00],
	    [0x0c, 0x10, 0x60, 0x10, 0x0c, 0x00],
	    [0x44, 0x64, 0x54, 0x4c, 0x44, 0x00],
	    [0x7c, 0x44, 0x00, 0x00, 0x00, 0x00],
	    [0x0c, 0x10, 0x60, 0x00, 0x00, 0x00],
	    [0x44, 0x7c, 0x00, 0x00, 0x00, 0x00],
	    [0x00, 0x01, 0x00, 0x01, 0x00, 0x00],
	    [0x40, 0x40, 0x40, 0x40, 0x40, 0x40],
	    [0x00, 0x01, 0x00, 0x00, 0x00, 0x00],
	    [0x7c, 0x24, 0x24, 0x24, 0x7c, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x6c, 0x00],
	    [0x7c, 0x44, 0x44, 0x44, 0x44, 0x00],
	    [0x7c, 0x44, 0x44, 0x44, 0x38, 0x00],
	    [0x7c, 0x54, 0x54, 0x54, 0x44, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x04, 0x00],
	    [0x7c, 0x44, 0x44, 0x54, 0x74, 0x00],
	    [0x7c, 0x10, 0x10, 0x10, 0x7c, 0x00],
	    [0x44, 0x44, 0x7c, 0x44, 0x44, 0x00],
	    [0x60, 0x40, 0x40, 0x44, 0x7c, 0x00],
	    [0x7c, 0x10, 0x10, 0x28, 0x44, 0x00],
	    [0x7c, 0x40, 0x40, 0x40, 0x40, 0x00],
	    [0x7c, 0x08, 0x10, 0x08, 0x7c, 0x00],
	    [0x7c, 0x08, 0x10, 0x20, 0x7c, 0x00],
	    [0x38, 0x44, 0x44, 0x44, 0x38, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x08, 0x00],
	    [0x3c, 0x24, 0x64, 0x24, 0x3c, 0x00],
	    [0x7c, 0x14, 0x14, 0x14, 0x68, 0x00],
	    [0x5c, 0x54, 0x54, 0x54, 0x74, 0x00],
	    [0x04, 0x04, 0x7c, 0x04, 0x04, 0x00],
	    [0x7c, 0x40, 0x40, 0x40, 0x7c, 0x00],
	    [0x0c, 0x30, 0x40, 0x30, 0x0c, 0x00],
	    [0x3c, 0x40, 0x30, 0x40, 0x3c, 0x00],
	    [0x44, 0x28, 0x10, 0x28, 0x44, 0x00],
	    [0x0c, 0x10, 0x60, 0x10, 0x0c, 0x00],
	    [0x44, 0x64, 0x54, 0x4c, 0x44, 0x00],
	    [0x10, 0x7c, 0x44, 0x00, 0x00, 0x00],
	    [0x6c, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x44, 0x7c, 0x10, 0x00, 0x00, 0x00],
	    [0x02, 0x01, 0x02, 0x01, 0x00, 0x00],
	    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
	]);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tools_1 = __webpack_require__(51);
	exports.font = tools_1.prepareFont([
	    [0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x2f, 0x00, 0x00, 0x00, 0x00],
	    [0x03, 0x00, 0x03, 0x00, 0x00],
	    [0x14, 0x3e, 0x14, 0x3e, 0x14],
	    [0x2e, 0x6a, 0x2b, 0x3a, 0x00],
	    [0x26, 0x12, 0x08, 0x24, 0x32],
	    [0x1c, 0x17, 0x15, 0x34, 0x00],
	    [0x03, 0x00, 0x00, 0x00, 0x00],
	    [0x1e, 0x21, 0x00, 0x00, 0x00],
	    [0x21, 0x1e, 0x00, 0x00, 0x00],
	    [0x22, 0x08, 0x1c, 0x08, 0x22],
	    [0x08, 0x1c, 0x08, 0x00, 0x00],
	    [0x40, 0x20, 0x00, 0x00, 0x00],
	    [0x08, 0x08, 0x00, 0x00, 0x00],
	    [0x20, 0x00, 0x00, 0x00, 0x00],
	    [0x20, 0x10, 0x08, 0x04, 0x02],
	    [0x3f, 0x21, 0x21, 0x3f, 0x00],
	    [0x01, 0x3f, 0x00, 0x00, 0x00],
	    [0x3d, 0x25, 0x25, 0x27, 0x00],
	    [0x25, 0x25, 0x25, 0x3f, 0x00],
	    [0x07, 0x04, 0x04, 0x3f, 0x00],
	    [0x27, 0x25, 0x25, 0x3d, 0x00],
	    [0x3f, 0x25, 0x25, 0x3d, 0x00],
	    [0x01, 0x39, 0x05, 0x03, 0x00],
	    [0x3f, 0x25, 0x25, 0x3f, 0x00],
	    [0x27, 0x25, 0x25, 0x3f, 0x00],
	    [0x28, 0x00, 0x00, 0x00, 0x00],
	    [0x40, 0x28, 0x00, 0x00, 0x00],
	    [0x04, 0x0a, 0x11, 0x00, 0x00],
	    [0x14, 0x14, 0x00, 0x00, 0x00],
	    [0x11, 0x0a, 0x04, 0x00, 0x00],
	    [0x01, 0x2d, 0x05, 0x07, 0x00],
	    [0x3f, 0x21, 0x3d, 0x25, 0x1f],
	    [0x3f, 0x09, 0x09, 0x3f, 0x00],
	    [0x3f, 0x25, 0x27, 0x3c, 0x00],
	    [0x3f, 0x21, 0x21, 0x21, 0x00],
	    [0x3f, 0x21, 0x21, 0x1e, 0x00],
	    [0x3f, 0x25, 0x25, 0x25, 0x00],
	    [0x3f, 0x05, 0x05, 0x05, 0x00],
	    [0x3f, 0x21, 0x25, 0x3d, 0x00],
	    [0x3f, 0x04, 0x04, 0x3f, 0x00],
	    [0x21, 0x3f, 0x21, 0x00, 0x00],
	    [0x38, 0x20, 0x21, 0x3f, 0x01],
	    [0x3f, 0x04, 0x04, 0x3b, 0x00],
	    [0x3f, 0x20, 0x20, 0x20, 0x00],
	    [0x3f, 0x01, 0x3f, 0x01, 0x3f],
	    [0x3f, 0x02, 0x04, 0x3f, 0x00],
	    [0x3f, 0x21, 0x21, 0x3f, 0x00],
	    [0x3f, 0x09, 0x09, 0x0f, 0x00],
	    [0x3f, 0x21, 0x31, 0x3f, 0x00],
	    [0x3f, 0x09, 0x39, 0x2f, 0x00],
	    [0x27, 0x25, 0x25, 0x3d, 0x00],
	    [0x01, 0x01, 0x3f, 0x01, 0x01],
	    [0x3f, 0x20, 0x20, 0x3f, 0x00],
	    [0x0f, 0x10, 0x30, 0x1f, 0x00],
	    [0x3f, 0x20, 0x3f, 0x20, 0x3f],
	    [0x3b, 0x04, 0x04, 0x3b, 0x00],
	    [0x0f, 0x08, 0x38, 0x0f, 0x00],
	    [0x31, 0x29, 0x25, 0x23, 0x00],
	    [0x3f, 0x21, 0x00, 0x00, 0x00],
	    [0x20, 0x10, 0x08, 0x04, 0x02],
	    [0x21, 0x3f, 0x00, 0x00, 0x00],
	    [0x02, 0x01, 0x01, 0x02, 0x00],
	    [0x20, 0x20, 0x00, 0x00, 0x00],
	    [0x01, 0x02, 0x00, 0x00, 0x00],
	    [0x38, 0x24, 0x24, 0x3c, 0x00],
	    [0x3f, 0x24, 0x24, 0x3c, 0x00],
	    [0x3c, 0x24, 0x24, 0x24, 0x00],
	    [0x3c, 0x24, 0x24, 0x3f, 0x00],
	    [0x3c, 0x2c, 0x2c, 0x2c, 0x00],
	    [0x04, 0x3f, 0x05, 0x00, 0x00],
	    [0xbc, 0xa4, 0xa4, 0xfc, 0x00],
	    [0x3f, 0x04, 0x04, 0x3c, 0x00],
	    [0x3d, 0x00, 0x00, 0x00, 0x00],
	    [0x80, 0xfd, 0x00, 0x00, 0x00],
	    [0x3f, 0x08, 0x08, 0x34, 0x00],
	    [0x3f, 0x00, 0x00, 0x00, 0x00],
	    [0x3c, 0x04, 0x3c, 0x04, 0x3c],
	    [0x3c, 0x04, 0x04, 0x3c, 0x00],
	    [0x3c, 0x24, 0x24, 0x3c, 0x00],
	    [0xfc, 0x24, 0x24, 0x3c, 0x00],
	    [0x3c, 0x24, 0x24, 0xfc, 0x00],
	    [0x3c, 0x08, 0x04, 0x00, 0x00],
	    [0x2c, 0x2c, 0x2c, 0x3c, 0x00],
	    [0x04, 0x3f, 0x24, 0x00, 0x00],
	    [0x3c, 0x20, 0x20, 0x3c, 0x00],
	    [0x0c, 0x10, 0x30, 0x1c, 0x00],
	    [0x3c, 0x20, 0x3c, 0x20, 0x3c],
	    [0x34, 0x08, 0x08, 0x34, 0x00],
	    [0xbc, 0xa0, 0xa0, 0xfc, 0x00],
	    [0x24, 0x34, 0x2c, 0x24, 0x00],
	    [0x04, 0x3f, 0x21, 0x00, 0x00],
	    [0x3f, 0x00, 0x00, 0x00, 0x00],
	    [0x21, 0x3f, 0x04, 0x00, 0x00],
	    [0x01, 0x02, 0x02, 0x01, 0x00],
	    [0x00, 0x00, 0x00, 0x00, 0x00]
	]);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tools_1 = __webpack_require__(51);
	exports.font = tools_1.prepareFont([
	    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xdf, 0xdf, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x07, 0x07, 0x00, 0x07, 0x07, 0x00, 0x00, 0x00],
	    [0x24, 0x24, 0xff, 0x24, 0x24, 0xff, 0x24, 0x24],
	    [0xdf, 0xdf, 0xdb, 0xff, 0xff, 0xdb, 0xfb, 0xfb],
	    [0xdf, 0xdf, 0x3b, 0xff, 0xff, 0xdc, 0xfb, 0xfb],
	    [0xff, 0xff, 0xdb, 0xdf, 0xdf, 0x20, 0xd8, 0xd8],
	    [0x07, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x3c, 0x3c, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xc3, 0xc3, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xc3, 0xc3, 0x24, 0xff, 0xff, 0x24, 0xc3, 0xc3],
	    [0x18, 0x18, 0x18, 0xff, 0xff, 0x18, 0x18, 0x18],
	    [0xc0, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18],
	    [0xc0, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xc0, 0xc0, 0x20, 0x18, 0x18, 0x04, 0x03, 0x03],
	    [0xff, 0xff, 0xe3, 0xdb, 0xdb, 0xc7, 0xff, 0xff],
	    [0xc3, 0xc3, 0xff, 0xc0, 0xc0, 0x00, 0x00, 0x00],
	    [0xfb, 0xfb, 0xdb, 0xdb, 0xdb, 0xdb, 0xdf, 0xdf],
	    [0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xff, 0xff],
	    [0x1f, 0x1f, 0x18, 0x18, 0x18, 0x18, 0xff, 0xff],
	    [0xdf, 0xdf, 0xdb, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0x07, 0x07, 0x03, 0x03, 0x03, 0x03, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xdb, 0xff, 0xff],
	    [0xdf, 0xdf, 0xdb, 0xdb, 0xdb, 0xdb, 0xff, 0xff],
	    [0x24, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xe4, 0xe4, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x18, 0x18, 0x24, 0xc3, 0xc3, 0x00, 0x00, 0x00],
	    [0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24],
	    [0xc3, 0xc3, 0x24, 0x18, 0x18, 0x00, 0x00, 0x00],
	    [0x07, 0x07, 0x03, 0xdb, 0xdb, 0x1b, 0x1f, 0x1f],
	    [0xff, 0xff, 0xc3, 0xfb, 0xfb, 0xdb, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0xdb, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xdb, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0x3c, 0x3c],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xc3, 0xe7, 0xe7],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0x03, 0x07, 0x07],
	    [0xff, 0xff, 0xc3, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0xff, 0xff, 0xdb, 0x18, 0x18, 0xdb, 0xff, 0xff],
	    [0xc3, 0xc3, 0xc3, 0xff, 0xff, 0xc3, 0xc3, 0xc3],
	    [0xe0, 0xe0, 0xc0, 0xc0, 0xc0, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x18, 0x18, 0xdb, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc0, 0xc0, 0xc0, 0xe0, 0xe0],
	    [0xff, 0xff, 0xc3, 0x1f, 0x1f, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xc4, 0x18, 0x18, 0x23, 0xff, 0xff],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0x1b, 0x1f, 0x1f],
	    [0xff, 0xff, 0xc3, 0xe3, 0xe3, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0xdb, 0xe7, 0xe7],
	    [0xdf, 0xdf, 0xdb, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0x07, 0x07, 0xc3, 0xff, 0xff, 0xc3, 0x07, 0x07],
	    [0xff, 0xff, 0xc3, 0xc0, 0xc0, 0xc3, 0xff, 0xff],
	    [0x1f, 0x1f, 0x23, 0xc0, 0xc0, 0x23, 0x1f, 0x1f],
	    [0xff, 0xff, 0xc3, 0xf8, 0xf8, 0xc3, 0xff, 0xff],
	    [0xe7, 0xe7, 0xdb, 0x18, 0x18, 0xdb, 0xe7, 0xe7],
	    [0x1f, 0x1f, 0xdb, 0xf8, 0xf8, 0xdb, 0x1f, 0x1f],
	    [0xc7, 0xc7, 0xe3, 0xdb, 0xdb, 0xc7, 0xe3, 0xe3],
	    [0xff, 0xff, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x03, 0x03, 0x04, 0x18, 0x18, 0x20, 0xc0, 0xc0],
	    [0xc3, 0xc3, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0x04, 0x04, 0x03, 0x04, 0x04, 0x00, 0x00, 0x00],
	    [0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0, 0xc0],
	    [0x03, 0x03, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0xdb, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xdb, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0x3c, 0x3c],
	    [0xff, 0xff, 0xdb, 0xdb, 0xdb, 0xc3, 0xe7, 0xe7],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0x03, 0x07, 0x07],
	    [0xff, 0xff, 0xc3, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0xff, 0xff, 0xdb, 0x18, 0x18, 0xdb, 0xff, 0xff],
	    [0xc3, 0xc3, 0xc3, 0xff, 0xff, 0xc3, 0xc3, 0xc3],
	    [0xe0, 0xe0, 0xc0, 0xc0, 0xc0, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x18, 0x18, 0xdb, 0xe7, 0xe7],
	    [0xff, 0xff, 0xc3, 0xc0, 0xc0, 0xc0, 0xe0, 0xe0],
	    [0xff, 0xff, 0xc3, 0x1f, 0x1f, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xc4, 0x18, 0x18, 0x23, 0xff, 0xff],
	    [0xff, 0xff, 0xc3, 0xc3, 0xc3, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0x1b, 0x1f, 0x1f],
	    [0xff, 0xff, 0xc3, 0xe3, 0xe3, 0xc3, 0xff, 0xff],
	    [0xff, 0xff, 0xdb, 0x1b, 0x1b, 0xdb, 0xe7, 0xe7],
	    [0xdf, 0xdf, 0xdb, 0xdb, 0xdb, 0xdb, 0xfb, 0xfb],
	    [0x07, 0x07, 0xc3, 0xff, 0xff, 0xc3, 0x07, 0x07],
	    [0xff, 0xff, 0xc3, 0xc0, 0xc0, 0xc3, 0xff, 0xff],
	    [0x1f, 0x1f, 0x23, 0xc0, 0xc0, 0x23, 0x1f, 0x1f],
	    [0xff, 0xff, 0xc3, 0xf8, 0xf8, 0xc3, 0xff, 0xff],
	    [0xe7, 0xe7, 0xdb, 0x18, 0x18, 0xdb, 0xe7, 0xe7],
	    [0x1f, 0x1f, 0xdb, 0xf8, 0xf8, 0xdb, 0x1f, 0x1f],
	    [0xc7, 0xc7, 0xe3, 0xdb, 0xdb, 0xc7, 0xe3, 0xe3],
	    [0x18, 0x18, 0xff, 0xc3, 0xc3, 0x00, 0x00, 0x00],
	    [0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	    [0xc3, 0xc3, 0xff, 0x18, 0x18, 0x00, 0x00, 0x00],
	    [0x04, 0x04, 0x03, 0x04, 0x04, 0x03, 0x00, 0x00],
	    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
	]);


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(46);
	var simulator_1 = __webpack_require__(48);
	var store_1 = __webpack_require__(50);
	var tools_1 = __webpack_require__(51);
	var shape_1 = __webpack_require__(57);
	function shapeToMatrix(shapeName) {
	    var c = tools_1.hexToRGB(shape_1.colors[Math.floor(Math.random() * (shape_1.colors.length - 1))]);
	    var shape = shape_1.shapes[shapeName];
	    var len = shape.length;
	    var width = Math.sqrt(len);
	    var store = store_1.createStore(width, width);
	    for (var i = 0; i < len; i += 1) {
	        var y = Math.floor(i / width);
	        var x = i - (y * width);
	        if (shape_1.shapes[shapeName][i] === 1) {
	            store.fill(x, y, c[0], c[1], c[2], c[3]);
	        }
	    }
	    return store.matrix;
	}
	var Symbols = (function (_super) {
	    __extends(Symbols, _super);
	    function Symbols() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            shape: 'cross',
	            data: shapeToMatrix('cross')
	        };
	        return _this;
	    }
	    Symbols.prototype.handleShapeChange = function (shape) {
	        this.setState({
	            shape: shape,
	            data: shapeToMatrix(shape)
	        });
	    };
	    Symbols.prototype.render = function (_, _a) {
	        var _this = this;
	        var shape = _a.shape;
	        return (preact_1.h("div", { className: "row" },
	            preact_1.h("div", { className: "column" }, Object.keys(shape_1.shapes).map(function (shapeName) {
	                return preact_1.h("label", null,
	                    preact_1.h("input", { type: "radio", value: shapeName, checked: shapeName === shape, onChange: function (e) { return _this.handleShapeChange(shapeName); } }),
	                    " ",
	                    shapeName);
	            })),
	            preact_1.h("div", { className: "column column-60" },
	                preact_1.h("div", { class: "led" },
	                    preact_1.h(simulator_1.default, { data: this.state.data, x: 11, y: 11, pixelHeight: 20, pixelWidth: 20, glow: true })))));
	    };
	    return Symbols;
	}(preact_1.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Symbols;


/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	exports.shapes = {
	    cross: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
	        0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
	        0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    warning: [
	        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,
	        0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
	        0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0,
	        0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0,
	        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	        1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
	        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
	    ],
	    alert: [
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    arrowUp: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0,
	        0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    arrowRight: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
	        0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
	        0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    arrowDown: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0,
	        0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    arrowLeft: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	        0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
	        0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	        0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    info: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ],
	    wifi: [
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
	        0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
	        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
	        0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
	        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	    ]
	};
	exports.colors = ['#C5E99B', '#E71D36', '#DE6449', '#F68657', '#F6B352', '#D499B9', '#30A9DE', '#EC7357', '#f9c00c', '#f26d5b'];


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var preact_1 = __webpack_require__(46);
	var simulator_1 = __webpack_require__(48);
	var store_1 = __webpack_require__(50);
	var api = __webpack_require__(59);
	var Plasma = (function (_super) {
	    __extends(Plasma, _super);
	    function Plasma() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            data: null
	        };
	        return _this;
	    }
	    Plasma.prototype.componentDidMount = function () {
	        var _this = this;
	        var store = store_1.createStore(32, 16);
	        api.setup(function (x, y, r, g, b) {
	            store.fill(x, y, r << 4, g << 4, b << 4, 1);
	        });
	        this.timer = window.setInterval(function () {
	            api.loop();
	            _this.setState({
	                data: store.matrix
	            });
	        }, 100);
	    };
	    Plasma.prototype.componentWillUnmount = function () {
	        if (this.timer) {
	            window.clearInterval(this.timer);
	        }
	    };
	    Plasma.prototype.render = function (_, _a) {
	        var data = _a.data;
	        return (preact_1.h("div", { className: "row" },
	            preact_1.h("div", { className: "column" },
	                preact_1.h("p", null,
	                    "Plasma demo is a port of ",
	                    preact_1.h("a", { href: "https://github.com/adafruit/RGB-matrix-Panel" }, "Adafruit RGB Matrix Panel Plasma Example"),
	                    " in Javascript. The original C++ code has been ported using ",
	                    preact_1.h("a", { href: "https://github.com/kripken/emscripten" }, "Emscripten"),
	                    " to Javascript and adapted for this simulator."),
	                preact_1.h("div", { class: "led" }, data && preact_1.h(simulator_1.default, { data: data, x: 32, y: 16 })))));
	    };
	    return Plasma;
	}(preact_1.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Plasma;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var api = __webpack_require__(60);
	var pointer;
	function setup(fn) {
	    pointer = api.Runtime.addFunction(fn);
	}
	exports.setup = setup;
	function loop() {
	    api.ccall('loop', 'void', [], [pointer]);
	}
	exports.loop = loop;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, __dirname, module) {// The Module object: Our interface to the outside world. We import
	// and export values on it, and do the work to get that through
	// closure compiler if necessary. There are various ways Module can be used:
	// 1. Not defined. We create it here
	// 2. A function parameter, function(Module) { ..generated code.. }
	// 3. pre-run appended it, var Module = {}; ..generated code..
	// 4. External script tag defines var Module.
	// We need to do an eval in order to handle the closure compiler
	// case, where this code here is minified but Module was defined
	// elsewhere (e.g. case 4 above). We also need to check if Module
	// already exists (e.g. case 3 above).
	// Note that if you want to run closure, and also to use Module
	// after the generated code, you will need to define   var Module = {};
	// before the code. Then that object will be used in the code, and you
	// can continue to use Module afterwards as well.
	var Module;
	if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

	// Sometimes an existing Module object exists with properties
	// meant to overwrite the default module functionality. Here
	// we collect those properties and reapply _after_ we configure
	// the current environment's defaults to avoid having to be so
	// defensive during initialization.
	var moduleOverrides = {};
	for (var key in Module) {
	  if (Module.hasOwnProperty(key)) {
	    moduleOverrides[key] = Module[key];
	  }
	}

	// The environment setup code below is customized to use Module.
	// *** Environment setup code ***
	var ENVIRONMENT_IS_WEB = typeof window === 'object';
	// Three configurations we can be running in:
	// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
	// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
	// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)
	var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
	var ENVIRONMENT_IS_NODE = typeof process === 'object' && "function" === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
	var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

	if (ENVIRONMENT_IS_NODE) {
	  // Expose functionality in the same simple way that the shells work
	  // Note that we pollute the global namespace here, otherwise we break in node
	  if (!Module['print']) Module['print'] = function print(x) {
	    process['stdout'].write(x + '\n');
	  };
	  if (!Module['printErr']) Module['printErr'] = function printErr(x) {
	    process['stderr'].write(x + '\n');
	  };

	  var nodeFS = __webpack_require__(63);
	  var nodePath = __webpack_require__(64);

	  Module['read'] = function read(filename, binary) {
	    filename = nodePath['normalize'](filename);
	    var ret = nodeFS['readFileSync'](filename);
	    // The path is absolute if the normalized version is the same as the resolved.
	    if (!ret && filename != nodePath['resolve'](filename)) {
	      filename = path.join(__dirname, '..', 'src', filename);
	      ret = nodeFS['readFileSync'](filename);
	    }
	    if (ret && !binary) ret = ret.toString();
	    return ret;
	  };

	  Module['readBinary'] = function readBinary(filename) {
	    var ret = Module['read'](filename, true);
	    if (!ret.buffer) {
	      ret = new Uint8Array(ret);
	    }
	    assert(ret.buffer);
	    return ret;
	  };

	  Module['load'] = function load(f) {
	    globalEval(read(f));
	  };

	  if (!Module['thisProgram']) {
	    if (process['argv'].length > 1) {
	      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
	    } else {
	      Module['thisProgram'] = 'unknown-program';
	    }
	  }

	  Module['arguments'] = process['argv'].slice(2);

	  if (true) {
	    module['exports'] = Module;
	  }

	  process['on']('uncaughtException', function(ex) {
	    // suppress ExitStatus exceptions from showing an error
	    if (!(ex instanceof ExitStatus)) {
	      throw ex;
	    }
	  });

	  Module['inspect'] = function () { return '[Emscripten Module object]'; };
	}
	else if (ENVIRONMENT_IS_SHELL) {
	  if (!Module['print']) Module['print'] = print;
	  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

	  if (typeof read != 'undefined') {
	    Module['read'] = read;
	  } else {
	    Module['read'] = function read() { throw 'no read() available (jsc?)' };
	  }

	  Module['readBinary'] = function readBinary(f) {
	    if (typeof readbuffer === 'function') {
	      return new Uint8Array(readbuffer(f));
	    }
	    var data = read(f, 'binary');
	    assert(typeof data === 'object');
	    return data;
	  };

	  if (typeof scriptArgs != 'undefined') {
	    Module['arguments'] = scriptArgs;
	  } else if (typeof arguments != 'undefined') {
	    Module['arguments'] = arguments;
	  }

	}
	else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
	  Module['read'] = function read(url) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url, false);
	    xhr.send(null);
	    return xhr.responseText;
	  };

	  if (typeof arguments != 'undefined') {
	    Module['arguments'] = arguments;
	  }

	  if (typeof console !== 'undefined') {
	    if (!Module['print']) Module['print'] = function print(x) {
	      console.log(x);
	    };
	    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
	      console.log(x);
	    };
	  } else {
	    // Probably a worker, and without console.log. We can do very little here...
	    var TRY_USE_DUMP = false;
	    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
	      dump(x);
	    }) : (function(x) {
	      // self.postMessage(x); // enable this if you want stdout to be sent as messages
	    }));
	  }

	  if (ENVIRONMENT_IS_WORKER) {
	    Module['load'] = importScripts;
	  }

	  if (typeof Module['setWindowTitle'] === 'undefined') {
	    Module['setWindowTitle'] = function(title) { document.title = title };
	  }
	}
	else {
	  // Unreachable because SHELL is dependant on the others
	  throw 'Unknown runtime environment. Where are we?';
	}

	function globalEval(x) {
	  eval.call(null, x);
	}
	if (!Module['load'] && Module['read']) {
	  Module['load'] = function load(f) {
	    globalEval(Module['read'](f));
	  };
	}
	if (!Module['print']) {
	  Module['print'] = function(){};
	}
	if (!Module['printErr']) {
	  Module['printErr'] = Module['print'];
	}
	if (!Module['arguments']) {
	  Module['arguments'] = [];
	}
	if (!Module['thisProgram']) {
	  Module['thisProgram'] = './this.program';
	}

	// *** Environment setup code ***

	// Closure helpers
	Module.print = Module['print'];
	Module.printErr = Module['printErr'];

	// Callbacks
	Module['preRun'] = [];
	Module['postRun'] = [];

	// Merge back in the overrides
	for (var key in moduleOverrides) {
	  if (moduleOverrides.hasOwnProperty(key)) {
	    Module[key] = moduleOverrides[key];
	  }
	}



	// === Preamble library stuff ===

	// Documentation for the public APIs defined in this file must be updated in: 
	//    site/source/docs/api_reference/preamble.js.rst
	// A prebuilt local version of the documentation is available at: 
	//    site/build/text/docs/api_reference/preamble.js.txt
	// You can also build docs locally as HTML or other formats in site/
	// An online HTML version (which may be of a different version of Emscripten)
	//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

	//========================================
	// Runtime code shared with compiler
	//========================================

	var Runtime = {
	  setTempRet0: function (value) {
	    tempRet0 = value;
	  },
	  getTempRet0: function () {
	    return tempRet0;
	  },
	  stackSave: function () {
	    return STACKTOP;
	  },
	  stackRestore: function (stackTop) {
	    STACKTOP = stackTop;
	  },
	  getNativeTypeSize: function (type) {
	    switch (type) {
	      case 'i1': case 'i8': return 1;
	      case 'i16': return 2;
	      case 'i32': return 4;
	      case 'i64': return 8;
	      case 'float': return 4;
	      case 'double': return 8;
	      default: {
	        if (type[type.length-1] === '*') {
	          return Runtime.QUANTUM_SIZE; // A pointer
	        } else if (type[0] === 'i') {
	          var bits = parseInt(type.substr(1));
	          assert(bits % 8 === 0);
	          return bits/8;
	        } else {
	          return 0;
	        }
	      }
	    }
	  },
	  getNativeFieldSize: function (type) {
	    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
	  },
	  STACK_ALIGN: 16,
	  prepVararg: function (ptr, type) {
	    if (type === 'double' || type === 'i64') {
	      // move so the load is aligned
	      if (ptr & 7) {
	        assert((ptr & 7) === 4);
	        ptr += 4;
	      }
	    } else {
	      assert((ptr & 3) === 0);
	    }
	    return ptr;
	  },
	  getAlignSize: function (type, size, vararg) {
	    // we align i64s and doubles on 64-bit boundaries, unlike x86
	    if (!vararg && (type == 'i64' || type == 'double')) return 8;
	    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
	    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
	  },
	  dynCall: function (sig, ptr, args) {
	    if (args && args.length) {
	      assert(args.length == sig.length-1);
	      if (!args.splice) args = Array.prototype.slice.call(args);
	      args.splice(0, 0, ptr);
	      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
	      return Module['dynCall_' + sig].apply(null, args);
	    } else {
	      assert(sig.length == 1);
	      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
	      return Module['dynCall_' + sig].call(null, ptr);
	    }
	  },
	  functionPointers: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
	  addFunction: function (func) {
	    for (var i = 0; i < Runtime.functionPointers.length; i++) {
	      if (!Runtime.functionPointers[i]) {
	        Runtime.functionPointers[i] = func;
	        return 2*(1 + i);
	      }
	    }
	    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
	  },
	  removeFunction: function (index) {
	    Runtime.functionPointers[(index-2)/2] = null;
	  },
	  warnOnce: function (text) {
	    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
	    if (!Runtime.warnOnce.shown[text]) {
	      Runtime.warnOnce.shown[text] = 1;
	      Module.printErr(text);
	    }
	  },
	  funcWrappers: {},
	  getFuncWrapper: function (func, sig) {
	    assert(sig);
	    if (!Runtime.funcWrappers[sig]) {
	      Runtime.funcWrappers[sig] = {};
	    }
	    var sigCache = Runtime.funcWrappers[sig];
	    if (!sigCache[func]) {
	      sigCache[func] = function dynCall_wrapper() {
	        return Runtime.dynCall(sig, func, arguments);
	      };
	    }
	    return sigCache[func];
	  },
	  getCompilerSetting: function (name) {
	    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
	  },
	  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
	  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
	  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + (assert(DYNAMICTOP > 0),size))|0;DYNAMICTOP = (((DYNAMICTOP)+15)&-16); if (DYNAMICTOP >= TOTAL_MEMORY) { var success = enlargeMemory(); if (!success) { DYNAMICTOP = ret;  return 0; } }; return ret; },
	  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
	  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
	  GLOBAL_BASE: 8,
	  QUANTUM_SIZE: 4,
	  __dummy__: 0
	}



	Module["Runtime"] = Runtime;



	//========================================
	// Runtime essentials
	//========================================

	var __THREW__ = 0; // Used in checking for thrown exceptions.

	var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
	var EXITSTATUS = 0;

	var undef = 0;
	// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
	// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
	var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
	var tempI64, tempI64b;
	var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;

	function assert(condition, text) {
	  if (!condition) {
	    abort('Assertion failed: ' + text);
	  }
	}

	var globalScope = this;

	// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
	function getCFunc(ident) {
	  var func = Module['_' + ident]; // closure exported function
	  if (!func) {
	    try {
	      func = eval('_' + ident); // explicit lookup
	    } catch(e) {}
	  }
	  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
	  return func;
	}

	var cwrap, ccall;
	(function(){
	  var JSfuncs = {
	    // Helpers for cwrap -- it can't refer to Runtime directly because it might
	    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
	    // out what the minified function name is.
	    'stackSave': function() {
	      Runtime.stackSave()
	    },
	    'stackRestore': function() {
	      Runtime.stackRestore()
	    },
	    // type conversion from js to c
	    'arrayToC' : function(arr) {
	      var ret = Runtime.stackAlloc(arr.length);
	      writeArrayToMemory(arr, ret);
	      return ret;
	    },
	    'stringToC' : function(str) {
	      var ret = 0;
	      if (str !== null && str !== undefined && str !== 0) { // null string
	        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
	        ret = Runtime.stackAlloc((str.length << 2) + 1);
	        writeStringToMemory(str, ret);
	      }
	      return ret;
	    }
	  };
	  // For fast lookup of conversion functions
	  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

	  // C calling interface. 
	  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
	    var func = getCFunc(ident);
	    var cArgs = [];
	    var stack = 0;
	    assert(returnType !== 'array', 'Return type should not be "array".');
	    if (args) {
	      for (var i = 0; i < args.length; i++) {
	        var converter = toC[argTypes[i]];
	        if (converter) {
	          if (stack === 0) stack = Runtime.stackSave();
	          cArgs[i] = converter(args[i]);
	        } else {
	          cArgs[i] = args[i];
	        }
	      }
	    }
	    var ret = func.apply(null, cArgs);
	    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
	      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
	    }
	    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
	    if (returnType === 'string') ret = Pointer_stringify(ret);
	    if (stack !== 0) {
	      if (opts && opts.async) {
	        EmterpreterAsync.asyncFinalizers.push(function() {
	          Runtime.stackRestore(stack);
	        });
	        return;
	      }
	      Runtime.stackRestore(stack);
	    }
	    return ret;
	  }

	  var sourceRegex = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
	  function parseJSFunc(jsfunc) {
	    // Match the body and the return value of a javascript function source
	    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
	    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
	  }
	  var JSsource = {};
	  for (var fun in JSfuncs) {
	    if (JSfuncs.hasOwnProperty(fun)) {
	      // Elements of toCsource are arrays of three items:
	      // the code, and the return value
	      JSsource[fun] = parseJSFunc(JSfuncs[fun]);
	    }
	  }

	  
	  cwrap = function cwrap(ident, returnType, argTypes) {
	    argTypes = argTypes || [];
	    var cfunc = getCFunc(ident);
	    // When the function takes numbers and returns a number, we can just return
	    // the original function
	    var numericArgs = argTypes.every(function(type){ return type === 'number'});
	    var numericRet = (returnType !== 'string');
	    if ( numericRet && numericArgs) {
	      return cfunc;
	    }
	    // Creation of the arguments list (["$1","$2",...,"$nargs"])
	    var argNames = argTypes.map(function(x,i){return '$'+i});
	    var funcstr = "(function(" + argNames.join(',') + ") {";
	    var nargs = argTypes.length;
	    if (!numericArgs) {
	      // Generate the code needed to convert the arguments from javascript
	      // values to pointers
	      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
	      for (var i = 0; i < nargs; i++) {
	        var arg = argNames[i], type = argTypes[i];
	        if (type === 'number') continue;
	        var convertCode = JSsource[type + 'ToC']; // [code, return]
	        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
	        funcstr += convertCode.body + ';';
	        funcstr += arg + '=' + convertCode.returnValue + ';';
	      }
	    }

	    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
	    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
	    // Call the function
	    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
	    if (!numericRet) { // Return type can only by 'string' or 'number'
	      // Convert the result to a string
	      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
	      funcstr += 'ret = ' + strgfy + '(ret);';
	    }
	    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
	    if (!numericArgs) {
	      // If we had a stack, restore it
	      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
	    }
	    funcstr += 'return ret})';
	    return eval(funcstr);
	  };
	})();
	Module["ccall"] = ccall;
	Module["cwrap"] = cwrap;

	function setValue(ptr, value, type, noSafe) {
	  type = type || 'i8';
	  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
	    switch(type) {
	      case 'i1': HEAP8[((ptr)>>0)]=value; break;
	      case 'i8': HEAP8[((ptr)>>0)]=value; break;
	      case 'i16': HEAP16[((ptr)>>1)]=value; break;
	      case 'i32': HEAP32[((ptr)>>2)]=value; break;
	      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
	      case 'float': HEAPF32[((ptr)>>2)]=value; break;
	      case 'double': HEAPF64[((ptr)>>3)]=value; break;
	      default: abort('invalid type for setValue: ' + type);
	    }
	}
	Module["setValue"] = setValue;


	function getValue(ptr, type, noSafe) {
	  type = type || 'i8';
	  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
	    switch(type) {
	      case 'i1': return HEAP8[((ptr)>>0)];
	      case 'i8': return HEAP8[((ptr)>>0)];
	      case 'i16': return HEAP16[((ptr)>>1)];
	      case 'i32': return HEAP32[((ptr)>>2)];
	      case 'i64': return HEAP32[((ptr)>>2)];
	      case 'float': return HEAPF32[((ptr)>>2)];
	      case 'double': return HEAPF64[((ptr)>>3)];
	      default: abort('invalid type for setValue: ' + type);
	    }
	  return null;
	}
	Module["getValue"] = getValue;

	var ALLOC_NORMAL = 0; // Tries to use _malloc()
	var ALLOC_STACK = 1; // Lives for the duration of the current function call
	var ALLOC_STATIC = 2; // Cannot be freed
	var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
	var ALLOC_NONE = 4; // Do not allocate
	Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
	Module["ALLOC_STACK"] = ALLOC_STACK;
	Module["ALLOC_STATIC"] = ALLOC_STATIC;
	Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
	Module["ALLOC_NONE"] = ALLOC_NONE;

	// allocate(): This is for internal use. You can use it yourself as well, but the interface
	//             is a little tricky (see docs right below). The reason is that it is optimized
	//             for multiple syntaxes to save space in generated code. So you should
	//             normally not use allocate(), and instead allocate memory using _malloc(),
	//             initialize it with setValue(), and so forth.
	// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
	//        in *bytes* (note that this is sometimes confusing: the next parameter does not
	//        affect this!)
	// @types: Either an array of types, one for each byte (or 0 if no type at that position),
	//         or a single type which is used for the entire block. This only matters if there
	//         is initial data - if @slab is a number, then this does not matter at all and is
	//         ignored.
	// @allocator: How to allocate memory, see ALLOC_*
	function allocate(slab, types, allocator, ptr) {
	  var zeroinit, size;
	  if (typeof slab === 'number') {
	    zeroinit = true;
	    size = slab;
	  } else {
	    zeroinit = false;
	    size = slab.length;
	  }

	  var singleType = typeof types === 'string' ? types : null;

	  var ret;
	  if (allocator == ALLOC_NONE) {
	    ret = ptr;
	  } else {
	    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
	  }

	  if (zeroinit) {
	    var ptr = ret, stop;
	    assert((ret & 3) == 0);
	    stop = ret + (size & ~3);
	    for (; ptr < stop; ptr += 4) {
	      HEAP32[((ptr)>>2)]=0;
	    }
	    stop = ret + size;
	    while (ptr < stop) {
	      HEAP8[((ptr++)>>0)]=0;
	    }
	    return ret;
	  }

	  if (singleType === 'i8') {
	    if (slab.subarray || slab.slice) {
	      HEAPU8.set(slab, ret);
	    } else {
	      HEAPU8.set(new Uint8Array(slab), ret);
	    }
	    return ret;
	  }

	  var i = 0, type, typeSize, previousType;
	  while (i < size) {
	    var curr = slab[i];

	    if (typeof curr === 'function') {
	      curr = Runtime.getFunctionIndex(curr);
	    }

	    type = singleType || types[i];
	    if (type === 0) {
	      i++;
	      continue;
	    }
	    assert(type, 'Must know what type to store in allocate!');

	    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

	    setValue(ret+i, curr, type);

	    // no need to look up size unless type changes, so cache it
	    if (previousType !== type) {
	      typeSize = Runtime.getNativeTypeSize(type);
	      previousType = type;
	    }
	    i += typeSize;
	  }

	  return ret;
	}
	Module["allocate"] = allocate;

	// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
	function getMemory(size) {
	  if (!staticSealed) return Runtime.staticAlloc(size);
	  if ((typeof _sbrk !== 'undefined' && !_sbrk.called) || !runtimeInitialized) return Runtime.dynamicAlloc(size);
	  return _malloc(size);
	}
	Module["getMemory"] = getMemory;

	function Pointer_stringify(ptr, /* optional */ length) {
	  if (length === 0 || !ptr) return '';
	  // TODO: use TextDecoder
	  // Find the length, and check for UTF while doing so
	  var hasUtf = 0;
	  var t;
	  var i = 0;
	  while (1) {
	    assert(ptr + i < TOTAL_MEMORY);
	    t = HEAPU8[(((ptr)+(i))>>0)];
	    hasUtf |= t;
	    if (t == 0 && !length) break;
	    i++;
	    if (length && i == length) break;
	  }
	  if (!length) length = i;

	  var ret = '';

	  if (hasUtf < 128) {
	    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
	    var curr;
	    while (length > 0) {
	      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
	      ret = ret ? ret + curr : curr;
	      ptr += MAX_CHUNK;
	      length -= MAX_CHUNK;
	    }
	    return ret;
	  }
	  return Module['UTF8ToString'](ptr);
	}
	Module["Pointer_stringify"] = Pointer_stringify;

	// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
	// a copy of that string as a Javascript String object.

	function AsciiToString(ptr) {
	  var str = '';
	  while (1) {
	    var ch = HEAP8[((ptr++)>>0)];
	    if (!ch) return str;
	    str += String.fromCharCode(ch);
	  }
	}
	Module["AsciiToString"] = AsciiToString;

	// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
	// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

	function stringToAscii(str, outPtr) {
	  return writeAsciiToMemory(str, outPtr, false);
	}
	Module["stringToAscii"] = stringToAscii;

	// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
	// a copy of that string as a Javascript String object.

	function UTF8ArrayToString(u8Array, idx) {
	  var u0, u1, u2, u3, u4, u5;

	  var str = '';
	  while (1) {
	    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
	    u0 = u8Array[idx++];
	    if (!u0) return str;
	    if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
	    u1 = u8Array[idx++] & 63;
	    if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
	    u2 = u8Array[idx++] & 63;
	    if ((u0 & 0xF0) == 0xE0) {
	      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
	    } else {
	      u3 = u8Array[idx++] & 63;
	      if ((u0 & 0xF8) == 0xF0) {
	        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
	      } else {
	        u4 = u8Array[idx++] & 63;
	        if ((u0 & 0xFC) == 0xF8) {
	          u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
	        } else {
	          u5 = u8Array[idx++] & 63;
	          u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
	        }
	      }
	    }
	    if (u0 < 0x10000) {
	      str += String.fromCharCode(u0);
	    } else {
	      var ch = u0 - 0x10000;
	      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
	    }
	  }
	}
	Module["UTF8ArrayToString"] = UTF8ArrayToString;

	// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
	// a copy of that string as a Javascript String object.

	function UTF8ToString(ptr) {
	  return UTF8ArrayToString(HEAPU8,ptr);
	}
	Module["UTF8ToString"] = UTF8ToString;

	// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
	// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
	// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
	// Parameters:
	//   str: the Javascript string to copy.
	//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
	//   outIdx: The starting offset in the array to begin the copying.
	//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null 
	//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
	//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
	// Returns the number of bytes written, EXCLUDING the null terminator.

	function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
	  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
	    return 0;

	  var startIdx = outIdx;
	  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
	  for (var i = 0; i < str.length; ++i) {
	    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
	    // See http://unicode.org/faq/utf_bom.html#utf16-3
	    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
	    var u = str.charCodeAt(i); // possibly a lead surrogate
	    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
	    if (u <= 0x7F) {
	      if (outIdx >= endIdx) break;
	      outU8Array[outIdx++] = u;
	    } else if (u <= 0x7FF) {
	      if (outIdx + 1 >= endIdx) break;
	      outU8Array[outIdx++] = 0xC0 | (u >> 6);
	      outU8Array[outIdx++] = 0x80 | (u & 63);
	    } else if (u <= 0xFFFF) {
	      if (outIdx + 2 >= endIdx) break;
	      outU8Array[outIdx++] = 0xE0 | (u >> 12);
	      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	      outU8Array[outIdx++] = 0x80 | (u & 63);
	    } else if (u <= 0x1FFFFF) {
	      if (outIdx + 3 >= endIdx) break;
	      outU8Array[outIdx++] = 0xF0 | (u >> 18);
	      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	      outU8Array[outIdx++] = 0x80 | (u & 63);
	    } else if (u <= 0x3FFFFFF) {
	      if (outIdx + 4 >= endIdx) break;
	      outU8Array[outIdx++] = 0xF8 | (u >> 24);
	      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	      outU8Array[outIdx++] = 0x80 | (u & 63);
	    } else {
	      if (outIdx + 5 >= endIdx) break;
	      outU8Array[outIdx++] = 0xFC | (u >> 30);
	      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
	      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
	      outU8Array[outIdx++] = 0x80 | (u & 63);
	    }
	  }
	  // Null-terminate the pointer to the buffer.
	  outU8Array[outIdx] = 0;
	  return outIdx - startIdx;
	}
	Module["stringToUTF8Array"] = stringToUTF8Array;

	// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
	// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
	// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
	// Returns the number of bytes written, EXCLUDING the null terminator.

	function stringToUTF8(str, outPtr, maxBytesToWrite) {
	  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
	  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
	}
	Module["stringToUTF8"] = stringToUTF8;

	// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

	function lengthBytesUTF8(str) {
	  var len = 0;
	  for (var i = 0; i < str.length; ++i) {
	    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
	    // See http://unicode.org/faq/utf_bom.html#utf16-3
	    var u = str.charCodeAt(i); // possibly a lead surrogate
	    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
	    if (u <= 0x7F) {
	      ++len;
	    } else if (u <= 0x7FF) {
	      len += 2;
	    } else if (u <= 0xFFFF) {
	      len += 3;
	    } else if (u <= 0x1FFFFF) {
	      len += 4;
	    } else if (u <= 0x3FFFFFF) {
	      len += 5;
	    } else {
	      len += 6;
	    }
	  }
	  return len;
	}
	Module["lengthBytesUTF8"] = lengthBytesUTF8;

	// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
	// a copy of that string as a Javascript String object.

	function UTF16ToString(ptr) {
	  var i = 0;

	  var str = '';
	  while (1) {
	    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
	    if (codeUnit == 0)
	      return str;
	    ++i;
	    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
	    str += String.fromCharCode(codeUnit);
	  }
	}
	Module["UTF16ToString"] = UTF16ToString;

	// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
	// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
	// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
	// Parameters:
	//   str: the Javascript string to copy.
	//   outPtr: Byte address in Emscripten HEAP where to write the string to.
	//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null 
	//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
	//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
	// Returns the number of bytes written, EXCLUDING the null terminator.

	function stringToUTF16(str, outPtr, maxBytesToWrite) {
	  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
	  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
	  if (maxBytesToWrite === undefined) {
	    maxBytesToWrite = 0x7FFFFFFF;
	  }
	  if (maxBytesToWrite < 2) return 0;
	  maxBytesToWrite -= 2; // Null terminator.
	  var startPtr = outPtr;
	  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
	  for (var i = 0; i < numCharsToWrite; ++i) {
	    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
	    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
	    HEAP16[((outPtr)>>1)]=codeUnit;
	    outPtr += 2;
	  }
	  // Null-terminate the pointer to the HEAP.
	  HEAP16[((outPtr)>>1)]=0;
	  return outPtr - startPtr;
	}
	Module["stringToUTF16"] = stringToUTF16;

	// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

	function lengthBytesUTF16(str) {
	  return str.length*2;
	}
	Module["lengthBytesUTF16"] = lengthBytesUTF16;

	function UTF32ToString(ptr) {
	  var i = 0;

	  var str = '';
	  while (1) {
	    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
	    if (utf32 == 0)
	      return str;
	    ++i;
	    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
	    // See http://unicode.org/faq/utf_bom.html#utf16-3
	    if (utf32 >= 0x10000) {
	      var ch = utf32 - 0x10000;
	      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
	    } else {
	      str += String.fromCharCode(utf32);
	    }
	  }
	}
	Module["UTF32ToString"] = UTF32ToString;

	// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
	// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
	// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
	// Parameters:
	//   str: the Javascript string to copy.
	//   outPtr: Byte address in Emscripten HEAP where to write the string to.
	//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null 
	//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
	//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
	// Returns the number of bytes written, EXCLUDING the null terminator.

	function stringToUTF32(str, outPtr, maxBytesToWrite) {
	  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
	  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
	  if (maxBytesToWrite === undefined) {
	    maxBytesToWrite = 0x7FFFFFFF;
	  }
	  if (maxBytesToWrite < 4) return 0;
	  var startPtr = outPtr;
	  var endPtr = startPtr + maxBytesToWrite - 4;
	  for (var i = 0; i < str.length; ++i) {
	    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
	    // See http://unicode.org/faq/utf_bom.html#utf16-3
	    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
	    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
	      var trailSurrogate = str.charCodeAt(++i);
	      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
	    }
	    HEAP32[((outPtr)>>2)]=codeUnit;
	    outPtr += 4;
	    if (outPtr + 4 > endPtr) break;
	  }
	  // Null-terminate the pointer to the HEAP.
	  HEAP32[((outPtr)>>2)]=0;
	  return outPtr - startPtr;
	}
	Module["stringToUTF32"] = stringToUTF32;

	// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

	function lengthBytesUTF32(str) {
	  var len = 0;
	  for (var i = 0; i < str.length; ++i) {
	    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
	    // See http://unicode.org/faq/utf_bom.html#utf16-3
	    var codeUnit = str.charCodeAt(i);
	    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
	    len += 4;
	  }

	  return len;
	}
	Module["lengthBytesUTF32"] = lengthBytesUTF32;

	function demangle(func) {
	  var hasLibcxxabi = !!Module['___cxa_demangle'];
	  if (hasLibcxxabi) {
	    try {
	      var buf = _malloc(func.length);
	      writeStringToMemory(func.substr(1), buf);
	      var status = _malloc(4);
	      var ret = Module['___cxa_demangle'](buf, 0, 0, status);
	      if (getValue(status, 'i32') === 0 && ret) {
	        return Pointer_stringify(ret);
	      }
	      // otherwise, libcxxabi failed, we can try ours which may return a partial result
	    } catch(e) {
	      // failure when using libcxxabi, we can try ours which may return a partial result
	    } finally {
	      if (buf) _free(buf);
	      if (status) _free(status);
	      if (ret) _free(ret);
	    }
	  }
	  var i = 3;
	  // params, etc.
	  var basicTypes = {
	    'v': 'void',
	    'b': 'bool',
	    'c': 'char',
	    's': 'short',
	    'i': 'int',
	    'l': 'long',
	    'f': 'float',
	    'd': 'double',
	    'w': 'wchar_t',
	    'a': 'signed char',
	    'h': 'unsigned char',
	    't': 'unsigned short',
	    'j': 'unsigned int',
	    'm': 'unsigned long',
	    'x': 'long long',
	    'y': 'unsigned long long',
	    'z': '...'
	  };
	  var subs = [];
	  var first = true;
	  function dump(x) {
	    //return;
	    if (x) Module.print(x);
	    Module.print(func);
	    var pre = '';
	    for (var a = 0; a < i; a++) pre += ' ';
	    Module.print (pre + '^');
	  }
	  function parseNested() {
	    i++;
	    if (func[i] === 'K') i++; // ignore const
	    var parts = [];
	    while (func[i] !== 'E') {
	      if (func[i] === 'S') { // substitution
	        i++;
	        var next = func.indexOf('_', i);
	        var num = func.substring(i, next) || 0;
	        parts.push(subs[num] || '?');
	        i = next+1;
	        continue;
	      }
	      if (func[i] === 'C') { // constructor
	        parts.push(parts[parts.length-1]);
	        i += 2;
	        continue;
	      }
	      var size = parseInt(func.substr(i));
	      var pre = size.toString().length;
	      if (!size || !pre) { i--; break; } // counter i++ below us
	      var curr = func.substr(i + pre, size);
	      parts.push(curr);
	      subs.push(curr);
	      i += pre + size;
	    }
	    i++; // skip E
	    return parts;
	  }
	  function parse(rawList, limit, allowVoid) { // main parser
	    limit = limit || Infinity;
	    var ret = '', list = [];
	    function flushList() {
	      return '(' + list.join(', ') + ')';
	    }
	    var name;
	    if (func[i] === 'N') {
	      // namespaced N-E
	      name = parseNested().join('::');
	      limit--;
	      if (limit === 0) return rawList ? [name] : name;
	    } else {
	      // not namespaced
	      if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
	      var size = parseInt(func.substr(i));
	      if (size) {
	        var pre = size.toString().length;
	        name = func.substr(i + pre, size);
	        i += pre + size;
	      }
	    }
	    first = false;
	    if (func[i] === 'I') {
	      i++;
	      var iList = parse(true);
	      var iRet = parse(true, 1, true);
	      ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
	    } else {
	      ret = name;
	    }
	    paramLoop: while (i < func.length && limit-- > 0) {
	      //dump('paramLoop');
	      var c = func[i++];
	      if (c in basicTypes) {
	        list.push(basicTypes[c]);
	      } else {
	        switch (c) {
	          case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
	          case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
	          case 'L': { // literal
	            i++; // skip basic type
	            var end = func.indexOf('E', i);
	            var size = end - i;
	            list.push(func.substr(i, size));
	            i += size + 2; // size + 'EE'
	            break;
	          }
	          case 'A': { // array
	            var size = parseInt(func.substr(i));
	            i += size.toString().length;
	            if (func[i] !== '_') throw '?';
	            i++; // skip _
	            list.push(parse(true, 1, true)[0] + ' [' + size + ']');
	            break;
	          }
	          case 'E': break paramLoop;
	          default: ret += '?' + c; break paramLoop;
	        }
	      }
	    }
	    if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
	    if (rawList) {
	      if (ret) {
	        list.push(ret + '?');
	      }
	      return list;
	    } else {
	      return ret + flushList();
	    }
	  }
	  var parsed = func;
	  try {
	    // Special-case the entry point, since its name differs from other name mangling.
	    if (func == 'Object._main' || func == '_main') {
	      return 'main()';
	    }
	    if (typeof func === 'number') func = Pointer_stringify(func);
	    if (func[0] !== '_') return func;
	    if (func[1] !== '_') return func; // C function
	    if (func[2] !== 'Z') return func;
	    switch (func[3]) {
	      case 'n': return 'operator new()';
	      case 'd': return 'operator delete()';
	    }
	    parsed = parse();
	  } catch(e) {
	    parsed += '?';
	  }
	  if (parsed.indexOf('?') >= 0 && !hasLibcxxabi) {
	    Runtime.warnOnce('warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
	  }
	  return parsed;
	}

	function demangleAll(text) {
	  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
	}

	function jsStackTrace() {
	  var err = new Error();
	  if (!err.stack) {
	    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
	    // so try that as a special-case.
	    try {
	      throw new Error(0);
	    } catch(e) {
	      err = e;
	    }
	    if (!err.stack) {
	      return '(no stack trace available)';
	    }
	  }
	  return err.stack.toString();
	}

	function stackTrace() {
	  return demangleAll(jsStackTrace());
	}
	Module["stackTrace"] = stackTrace;

	// Memory management

	var PAGE_SIZE = 4096;

	function alignMemoryPage(x) {
	  if (x % 4096 > 0) {
	    x += (4096 - (x % 4096));
	  }
	  return x;
	}

	var HEAP;
	var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

	var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
	var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
	var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk


	function abortOnCannotGrowMemory() {
	  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
	}

	function enlargeMemory() {
	  abortOnCannotGrowMemory();
	}


	var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
	var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;

	var totalMemory = 64*1024;
	while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
	  if (totalMemory < 16*1024*1024) {
	    totalMemory *= 2;
	  } else {
	    totalMemory += 16*1024*1024
	  }
	}
	if (totalMemory !== TOTAL_MEMORY) {
	  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be compliant with the asm.js spec (and given that TOTAL_STACK=' + TOTAL_STACK + ')');
	  TOTAL_MEMORY = totalMemory;
	}

	// Initialize the runtime's memory
	// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
	assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
	       'JS engine does not provide full typed array support');

	var buffer;



	buffer = new ArrayBuffer(TOTAL_MEMORY);
	HEAP8 = new Int8Array(buffer);
	HEAP16 = new Int16Array(buffer);
	HEAP32 = new Int32Array(buffer);
	HEAPU8 = new Uint8Array(buffer);
	HEAPU16 = new Uint16Array(buffer);
	HEAPU32 = new Uint32Array(buffer);
	HEAPF32 = new Float32Array(buffer);
	HEAPF64 = new Float64Array(buffer);


	// Endianness check (note: assumes compiler arch was little-endian)
	HEAP32[0] = 255;
	assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

	Module['HEAP'] = HEAP;
	Module['buffer'] = buffer;
	Module['HEAP8'] = HEAP8;
	Module['HEAP16'] = HEAP16;
	Module['HEAP32'] = HEAP32;
	Module['HEAPU8'] = HEAPU8;
	Module['HEAPU16'] = HEAPU16;
	Module['HEAPU32'] = HEAPU32;
	Module['HEAPF32'] = HEAPF32;
	Module['HEAPF64'] = HEAPF64;

	function callRuntimeCallbacks(callbacks) {
	  while(callbacks.length > 0) {
	    var callback = callbacks.shift();
	    if (typeof callback == 'function') {
	      callback();
	      continue;
	    }
	    var func = callback.func;
	    if (typeof func === 'number') {
	      if (callback.arg === undefined) {
	        Runtime.dynCall('v', func);
	      } else {
	        Runtime.dynCall('vi', func, [callback.arg]);
	      }
	    } else {
	      func(callback.arg === undefined ? null : callback.arg);
	    }
	  }
	}

	var __ATPRERUN__  = []; // functions called before the runtime is initialized
	var __ATINIT__    = []; // functions called during startup
	var __ATMAIN__    = []; // functions called when main() is to be run
	var __ATEXIT__    = []; // functions called during shutdown
	var __ATPOSTRUN__ = []; // functions called after the runtime has exited

	var runtimeInitialized = false;
	var runtimeExited = false;


	function preRun() {
	  // compatibility - merge in anything from Module['preRun'] at this time
	  if (Module['preRun']) {
	    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
	    while (Module['preRun'].length) {
	      addOnPreRun(Module['preRun'].shift());
	    }
	  }
	  callRuntimeCallbacks(__ATPRERUN__);
	}

	function ensureInitRuntime() {
	  if (runtimeInitialized) return;
	  runtimeInitialized = true;
	  callRuntimeCallbacks(__ATINIT__);
	}

	function preMain() {
	  callRuntimeCallbacks(__ATMAIN__);
	}

	function exitRuntime() {
	  callRuntimeCallbacks(__ATEXIT__);
	  runtimeExited = true;
	}

	function postRun() {
	  // compatibility - merge in anything from Module['postRun'] at this time
	  if (Module['postRun']) {
	    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
	    while (Module['postRun'].length) {
	      addOnPostRun(Module['postRun'].shift());
	    }
	  }
	  callRuntimeCallbacks(__ATPOSTRUN__);
	}

	function addOnPreRun(cb) {
	  __ATPRERUN__.unshift(cb);
	}
	Module["addOnPreRun"] = addOnPreRun;

	function addOnInit(cb) {
	  __ATINIT__.unshift(cb);
	}
	Module["addOnInit"] = addOnInit;

	function addOnPreMain(cb) {
	  __ATMAIN__.unshift(cb);
	}
	Module["addOnPreMain"] = addOnPreMain;

	function addOnExit(cb) {
	  __ATEXIT__.unshift(cb);
	}
	Module["addOnExit"] = addOnExit;

	function addOnPostRun(cb) {
	  __ATPOSTRUN__.unshift(cb);
	}
	Module["addOnPostRun"] = addOnPostRun;

	// Tools


	function intArrayFromString(stringy, dontAddNull, length /* optional */) {
	  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
	  var u8array = new Array(len);
	  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
	  if (dontAddNull) u8array.length = numBytesWritten;
	  return u8array;
	}
	Module["intArrayFromString"] = intArrayFromString;

	function intArrayToString(array) {
	  var ret = [];
	  for (var i = 0; i < array.length; i++) {
	    var chr = array[i];
	    if (chr > 0xFF) {
	      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
	      chr &= 0xFF;
	    }
	    ret.push(String.fromCharCode(chr));
	  }
	  return ret.join('');
	}
	Module["intArrayToString"] = intArrayToString;

	function writeStringToMemory(string, buffer, dontAddNull) {
	  var array = intArrayFromString(string, dontAddNull);
	  var i = 0;
	  while (i < array.length) {
	    var chr = array[i];
	    HEAP8[(((buffer)+(i))>>0)]=chr;
	    i = i + 1;
	  }
	}
	Module["writeStringToMemory"] = writeStringToMemory;

	function writeArrayToMemory(array, buffer) {
	  for (var i = 0; i < array.length; i++) {
	    HEAP8[((buffer++)>>0)]=array[i];
	  }
	}
	Module["writeArrayToMemory"] = writeArrayToMemory;

	function writeAsciiToMemory(str, buffer, dontAddNull) {
	  for (var i = 0; i < str.length; ++i) {
	    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
	    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
	  }
	  // Null-terminate the pointer to the HEAP.
	  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
	}
	Module["writeAsciiToMemory"] = writeAsciiToMemory;

	function unSign(value, bits, ignore) {
	  if (value >= 0) {
	    return value;
	  }
	  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
	                    : Math.pow(2, bits)         + value;
	}
	function reSign(value, bits, ignore) {
	  if (value <= 0) {
	    return value;
	  }
	  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
	                        : Math.pow(2, bits-1);
	  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
	                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
	                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
	    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
	  }
	  return value;
	}


	// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
	if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
	  var ah  = a >>> 16;
	  var al = a & 0xffff;
	  var bh  = b >>> 16;
	  var bl = b & 0xffff;
	  return (al*bl + ((ah*bl + al*bh) << 16))|0;
	};
	Math.imul = Math['imul'];


	if (!Math['clz32']) Math['clz32'] = function(x) {
	  x = x >>> 0;
	  for (var i = 0; i < 32; i++) {
	    if (x & (1 << (31 - i))) return i;
	  }
	  return 32;
	};
	Math.clz32 = Math['clz32']

	var Math_abs = Math.abs;
	var Math_cos = Math.cos;
	var Math_sin = Math.sin;
	var Math_tan = Math.tan;
	var Math_acos = Math.acos;
	var Math_asin = Math.asin;
	var Math_atan = Math.atan;
	var Math_atan2 = Math.atan2;
	var Math_exp = Math.exp;
	var Math_log = Math.log;
	var Math_sqrt = Math.sqrt;
	var Math_ceil = Math.ceil;
	var Math_floor = Math.floor;
	var Math_pow = Math.pow;
	var Math_imul = Math.imul;
	var Math_fround = Math.fround;
	var Math_min = Math.min;
	var Math_clz32 = Math.clz32;

	// A counter of dependencies for calling run(). If we need to
	// do asynchronous work before running, increment this and
	// decrement it. Incrementing must happen in a place like
	// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
	// Note that you can add dependencies in preRun, even though
	// it happens right before run - run will be postponed until
	// the dependencies are met.
	var runDependencies = 0;
	var runDependencyWatcher = null;
	var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
	var runDependencyTracking = {};

	function getUniqueRunDependency(id) {
	  var orig = id;
	  while (1) {
	    if (!runDependencyTracking[id]) return id;
	    id = orig + Math.random();
	  }
	  return id;
	}

	function addRunDependency(id) {
	  runDependencies++;
	  if (Module['monitorRunDependencies']) {
	    Module['monitorRunDependencies'](runDependencies);
	  }
	  if (id) {
	    assert(!runDependencyTracking[id]);
	    runDependencyTracking[id] = 1;
	    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
	      // Check for missing dependencies every few seconds
	      runDependencyWatcher = setInterval(function() {
	        if (ABORT) {
	          clearInterval(runDependencyWatcher);
	          runDependencyWatcher = null;
	          return;
	        }
	        var shown = false;
	        for (var dep in runDependencyTracking) {
	          if (!shown) {
	            shown = true;
	            Module.printErr('still waiting on run dependencies:');
	          }
	          Module.printErr('dependency: ' + dep);
	        }
	        if (shown) {
	          Module.printErr('(end of list)');
	        }
	      }, 10000);
	    }
	  } else {
	    Module.printErr('warning: run dependency added without ID');
	  }
	}
	Module["addRunDependency"] = addRunDependency;

	function removeRunDependency(id) {
	  runDependencies--;
	  if (Module['monitorRunDependencies']) {
	    Module['monitorRunDependencies'](runDependencies);
	  }
	  if (id) {
	    assert(runDependencyTracking[id]);
	    delete runDependencyTracking[id];
	  } else {
	    Module.printErr('warning: run dependency removed without ID');
	  }
	  if (runDependencies == 0) {
	    if (runDependencyWatcher !== null) {
	      clearInterval(runDependencyWatcher);
	      runDependencyWatcher = null;
	    }
	    if (dependenciesFulfilled) {
	      var callback = dependenciesFulfilled;
	      dependenciesFulfilled = null;
	      callback(); // can add another dependenciesFulfilled
	    }
	  }
	}
	Module["removeRunDependency"] = removeRunDependency;

	Module["preloadedImages"] = {}; // maps url to image data
	Module["preloadedAudios"] = {}; // maps url to audio data



	var memoryInitializer = null;



	// === Body ===

	var ASM_CONSTS = [];




	STATIC_BASE = 8;

	STATICTOP = STATIC_BASE + 832;
	  /* global initializers */  __ATINIT__.push();
	  

	/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,8,11,15,18,21,24,27,30,33,36,39,42,45,48,51,54,56,59,62,65,67,70,72,75,77,80,82,85,87,89,91,93,96,98,100,101,103,105,107,108,110,111,113,114,116,117,118,119,120,121,122,123,123,124,125,125,126,126,126,126,126,127,126,126,126,126,126,125,125,124,123,123,122,121,120,119,118,117,116,114,113,111,110,108,107,105,103,101,100,98,96,93,91,89,87,85,82,80,77,75,72,70,67,65,62,59,56,54,51,48,45,42,39,36,33,30,27,24,21,18,15,11,8,5,2,0,253,250,247,244,240,237,234,231,228,225,222,219,216,213,210,207,204,201,199,196,193,190,188,185,183,180,178,175,173,170,168,166,164,162,159,157,155,154,152,150,148,147,145,144,142,141,139,138,137,136,135,134,133,132,132,131,130,130,129,129,129,129,129,128,129,129,129,129,129,130,130,131,132,132,133,134,135,136,137,138,139,141,142,144,145,147,148,150,152,154,155,157,159,162,164,166,168,170,173,175,178,180,183,185,188,190,193,196,199,201,204,207,210,213,216,219,222,225,228,231,234,237,240,244,247,250,253], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





	/* no memory initializer */
	var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);

	assert(tempDoublePtr % 8 == 0);

	function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

	  HEAP8[tempDoublePtr] = HEAP8[ptr];

	  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

	  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

	  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

	}

	function copyTempDouble(ptr) {

	  HEAP8[tempDoublePtr] = HEAP8[ptr];

	  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

	  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

	  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

	  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

	  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

	  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

	  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

	}

	// {{PRE_LIBRARY}}


	  var _cos=Math_cos;

	  function _sbrk(bytes) {
	      // Implement a Linux-like 'memory area' for our 'process'.
	      // Changes the size of the memory area by |bytes|; returns the
	      // address of the previous top ('break') of the memory area
	      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
	      var self = _sbrk;
	      if (!self.called) {
	        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
	        self.called = true;
	        assert(Runtime.dynamicAlloc);
	        self.alloc = Runtime.dynamicAlloc;
	        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
	      }
	      var ret = DYNAMICTOP;
	      if (bytes != 0) {
	        var success = self.alloc(bytes);
	        if (!success) return -1 >>> 0; // sbrk failure code
	      }
	      return ret;  // Previous break location.
	    }

	  
	  function ___setErrNo(value) {
	      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
	      else Module.printErr('failed to set errno from JS');
	      return value;
	    }
	  
	  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _sysconf(name) {
	      // long sysconf(int name);
	      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
	      switch(name) {
	        case 30: return PAGE_SIZE;
	        case 85: return totalMemory / PAGE_SIZE;
	        case 132:
	        case 133:
	        case 12:
	        case 137:
	        case 138:
	        case 15:
	        case 235:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 149:
	        case 13:
	        case 10:
	        case 236:
	        case 153:
	        case 9:
	        case 21:
	        case 22:
	        case 159:
	        case 154:
	        case 14:
	        case 77:
	        case 78:
	        case 139:
	        case 80:
	        case 81:
	        case 82:
	        case 68:
	        case 67:
	        case 164:
	        case 11:
	        case 29:
	        case 47:
	        case 48:
	        case 95:
	        case 52:
	        case 51:
	        case 46:
	          return 200809;
	        case 79:
	          return 0;
	        case 27:
	        case 246:
	        case 127:
	        case 128:
	        case 23:
	        case 24:
	        case 160:
	        case 161:
	        case 181:
	        case 182:
	        case 242:
	        case 183:
	        case 184:
	        case 243:
	        case 244:
	        case 245:
	        case 165:
	        case 178:
	        case 179:
	        case 49:
	        case 50:
	        case 168:
	        case 169:
	        case 175:
	        case 170:
	        case 171:
	        case 172:
	        case 97:
	        case 76:
	        case 32:
	        case 173:
	        case 35:
	          return -1;
	        case 176:
	        case 177:
	        case 7:
	        case 155:
	        case 8:
	        case 157:
	        case 125:
	        case 126:
	        case 92:
	        case 93:
	        case 129:
	        case 130:
	        case 131:
	        case 94:
	        case 91:
	          return 1;
	        case 74:
	        case 60:
	        case 69:
	        case 70:
	        case 4:
	          return 1024;
	        case 31:
	        case 42:
	        case 72:
	          return 32;
	        case 87:
	        case 26:
	        case 33:
	          return 2147483647;
	        case 34:
	        case 1:
	          return 47839;
	        case 38:
	        case 36:
	          return 99;
	        case 43:
	        case 37:
	          return 2048;
	        case 0: return 2097152;
	        case 3: return 65536;
	        case 28: return 32768;
	        case 44: return 32767;
	        case 75: return 16384;
	        case 39: return 1000;
	        case 89: return 700;
	        case 71: return 256;
	        case 40: return 255;
	        case 2: return 100;
	        case 180: return 64;
	        case 25: return 20;
	        case 5: return 16;
	        case 6: return 6;
	        case 73: return 4;
	        case 84: {
	          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;
	          return 1;
	        }
	      }
	      ___setErrNo(ERRNO_CODES.EINVAL);
	      return -1;
	    }

	   
	  Module["_memset"] = _memset;

	  
	  function _emscripten_memcpy_big(dest, src, num) {
	      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
	      return dest;
	    } 
	  Module["_memcpy"] = _memcpy;

	  function _abort() {
	      Module['abort']();
	    }

	  
	  var PATH=undefined;
	  
	  
	  function _emscripten_set_main_loop_timing(mode, value) {
	      Browser.mainLoop.timingMode = mode;
	      Browser.mainLoop.timingValue = value;
	  
	      if (!Browser.mainLoop.func) {
	        console.error('emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.');
	        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
	      }
	  
	      if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
	        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
	          setTimeout(Browser.mainLoop.runner, value); // doing this each time means that on exception, we stop
	        };
	        Browser.mainLoop.method = 'timeout';
	      } else if (mode == 1 /*EM_TIMING_RAF*/) {
	        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
	          Browser.requestAnimationFrame(Browser.mainLoop.runner);
	        };
	        Browser.mainLoop.method = 'rAF';
	      } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
	        if (!window['setImmediate']) {
	          // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
	          var setImmediates = [];
	          var emscriptenMainLoopMessageId = '__emcc';
	          function Browser_setImmediate_messageHandler(event) {
	            if (event.source === window && event.data === emscriptenMainLoopMessageId) {
	              event.stopPropagation();
	              setImmediates.shift()();
	            }
	          }
	          window.addEventListener("message", Browser_setImmediate_messageHandler, true);
	          window['setImmediate'] = function Browser_emulated_setImmediate(func) {
	            setImmediates.push(func);
	            window.postMessage(emscriptenMainLoopMessageId, "*");
	          }
	        }
	        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
	          window['setImmediate'](Browser.mainLoop.runner);
	        };
	        Browser.mainLoop.method = 'immediate';
	      }
	      return 0;
	    }function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
	      Module['noExitRuntime'] = true;
	  
	      assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
	  
	      Browser.mainLoop.func = func;
	      Browser.mainLoop.arg = arg;
	  
	      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
	  
	      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
	        if (ABORT) return;
	        if (Browser.mainLoop.queue.length > 0) {
	          var start = Date.now();
	          var blocker = Browser.mainLoop.queue.shift();
	          blocker.func(blocker.arg);
	          if (Browser.mainLoop.remainingBlockers) {
	            var remaining = Browser.mainLoop.remainingBlockers;
	            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
	            if (blocker.counted) {
	              Browser.mainLoop.remainingBlockers = next;
	            } else {
	              // not counted, but move the progress along a tiny bit
	              next = next + 0.5; // do not steal all the next one's progress
	              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
	            }
	          }
	          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
	          Browser.mainLoop.updateStatus();
	          setTimeout(Browser.mainLoop.runner, 0);
	          return;
	        }
	  
	        // catch pauses from non-main loop sources
	        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
	  
	        // Implement very basic swap interval control
	        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
	        if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
	          // Not the scheduled time to render this frame - skip.
	          Browser.mainLoop.scheduler();
	          return;
	        }
	  
	        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
	        // VBO double-buffering and reduce GPU stalls.
	  
	        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
	          Module.printErr('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
	          Browser.mainLoop.method = ''; // just warn once per call to set main loop
	        }
	  
	        Browser.mainLoop.runIter(function() {
	          if (typeof arg !== 'undefined') {
	            Runtime.dynCall('vi', func, [arg]);
	          } else {
	            Runtime.dynCall('v', func);
	          }
	        });
	  
	        // catch pauses from the main loop itself
	        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
	  
	        // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
	        // to queue the newest produced audio samples.
	        // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
	        //       do not need to be hardcoded into this function, but can be more generic.
	        if (typeof SDL === 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
	  
	        Browser.mainLoop.scheduler();
	      }
	  
	      if (!noSetTiming) {
	        if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
	        else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
	  
	        Browser.mainLoop.scheduler();
	      }
	  
	      if (simulateInfiniteLoop) {
	        throw 'SimulateInfiniteLoop';
	      }
	    }var Browser={mainLoop:{scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function () {
	          Browser.mainLoop.scheduler = null;
	          Browser.mainLoop.currentlyRunningMainloop++; // Incrementing this signals the previous main loop that it's now become old, and it must return.
	        },resume:function () {
	          Browser.mainLoop.currentlyRunningMainloop++;
	          var timingMode = Browser.mainLoop.timingMode;
	          var timingValue = Browser.mainLoop.timingValue;
	          var func = Browser.mainLoop.func;
	          Browser.mainLoop.func = null;
	          _emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true /* do not set timing and call scheduler, we will do it on the next lines */);
	          _emscripten_set_main_loop_timing(timingMode, timingValue);
	          Browser.mainLoop.scheduler();
	        },updateStatus:function () {
	          if (Module['setStatus']) {
	            var message = Module['statusMessage'] || 'Please wait...';
	            var remaining = Browser.mainLoop.remainingBlockers;
	            var expected = Browser.mainLoop.expectedBlockers;
	            if (remaining) {
	              if (remaining < expected) {
	                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
	              } else {
	                Module['setStatus'](message);
	              }
	            } else {
	              Module['setStatus']('');
	            }
	          }
	        },runIter:function (func) {
	          if (ABORT) return;
	          if (Module['preMainLoop']) {
	            var preRet = Module['preMainLoop']();
	            if (preRet === false) {
	              return; // |return false| skips a frame
	            }
	          }
	          try {
	            func();
	          } catch (e) {
	            if (e instanceof ExitStatus) {
	              return;
	            } else {
	              if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
	              throw e;
	            }
	          }
	          if (Module['postMainLoop']) Module['postMainLoop']();
	        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
	        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
	  
	        if (Browser.initted) return;
	        Browser.initted = true;
	  
	        try {
	          new Blob();
	          Browser.hasBlobConstructor = true;
	        } catch(e) {
	          Browser.hasBlobConstructor = false;
	          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
	        }
	        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
	        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
	        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
	          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
	          Module.noImageDecoding = true;
	        }
	  
	        // Support for plugins that can process preloaded files. You can add more of these to
	        // your app by creating and appending to Module.preloadPlugins.
	        //
	        // Each plugin is asked if it can handle a file based on the file's name. If it can,
	        // it is given the file's raw data. When it is done, it calls a callback with the file's
	        // (possibly modified) data. For example, a plugin might decompress a file, or it
	        // might create some side data structure for use later (like an Image element, etc.).
	  
	        var imagePlugin = {};
	        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
	          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
	        };
	        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
	          var b = null;
	          if (Browser.hasBlobConstructor) {
	            try {
	              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
	              if (b.size !== byteArray.length) { // Safari bug #118630
	                // Safari's Blob can only take an ArrayBuffer
	                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
	              }
	            } catch(e) {
	              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
	            }
	          }
	          if (!b) {
	            var bb = new Browser.BlobBuilder();
	            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
	            b = bb.getBlob();
	          }
	          var url = Browser.URLObject.createObjectURL(b);
	          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
	          var img = new Image();
	          img.onload = function img_onload() {
	            assert(img.complete, 'Image ' + name + ' could not be decoded');
	            var canvas = document.createElement('canvas');
	            canvas.width = img.width;
	            canvas.height = img.height;
	            var ctx = canvas.getContext('2d');
	            ctx.drawImage(img, 0, 0);
	            Module["preloadedImages"][name] = canvas;
	            Browser.URLObject.revokeObjectURL(url);
	            if (onload) onload(byteArray);
	          };
	          img.onerror = function img_onerror(event) {
	            console.log('Image ' + url + ' could not be decoded');
	            if (onerror) onerror();
	          };
	          img.src = url;
	        };
	        Module['preloadPlugins'].push(imagePlugin);
	  
	        var audioPlugin = {};
	        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
	          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
	        };
	        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
	          var done = false;
	          function finish(audio) {
	            if (done) return;
	            done = true;
	            Module["preloadedAudios"][name] = audio;
	            if (onload) onload(byteArray);
	          }
	          function fail() {
	            if (done) return;
	            done = true;
	            Module["preloadedAudios"][name] = new Audio(); // empty shim
	            if (onerror) onerror();
	          }
	          if (Browser.hasBlobConstructor) {
	            try {
	              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
	            } catch(e) {
	              return fail();
	            }
	            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
	            assert(typeof url == 'string', 'createObjectURL must return a url as a string');
	            var audio = new Audio();
	            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
	            audio.onerror = function audio_onerror(event) {
	              if (done) return;
	              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
	              function encode64(data) {
	                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	                var PAD = '=';
	                var ret = '';
	                var leftchar = 0;
	                var leftbits = 0;
	                for (var i = 0; i < data.length; i++) {
	                  leftchar = (leftchar << 8) | data[i];
	                  leftbits += 8;
	                  while (leftbits >= 6) {
	                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
	                    leftbits -= 6;
	                    ret += BASE[curr];
	                  }
	                }
	                if (leftbits == 2) {
	                  ret += BASE[(leftchar&3) << 4];
	                  ret += PAD + PAD;
	                } else if (leftbits == 4) {
	                  ret += BASE[(leftchar&0xf) << 2];
	                  ret += PAD;
	                }
	                return ret;
	              }
	              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
	              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
	            };
	            audio.src = url;
	            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
	            Browser.safeSetTimeout(function() {
	              finish(audio); // try to use it even though it is not necessarily ready to play
	            }, 10000);
	          } else {
	            return fail();
	          }
	        };
	        Module['preloadPlugins'].push(audioPlugin);
	  
	        // Canvas event setup
	  
	        var canvas = Module['canvas'];
	        function pointerLockChange() {
	          Browser.pointerLock = document['pointerLockElement'] === canvas ||
	                                document['mozPointerLockElement'] === canvas ||
	                                document['webkitPointerLockElement'] === canvas ||
	                                document['msPointerLockElement'] === canvas;
	        }
	        if (canvas) {
	          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
	          // Module['forcedAspectRatio'] = 4 / 3;
	          
	          canvas.requestPointerLock = canvas['requestPointerLock'] ||
	                                      canvas['mozRequestPointerLock'] ||
	                                      canvas['webkitRequestPointerLock'] ||
	                                      canvas['msRequestPointerLock'] ||
	                                      function(){};
	          canvas.exitPointerLock = document['exitPointerLock'] ||
	                                   document['mozExitPointerLock'] ||
	                                   document['webkitExitPointerLock'] ||
	                                   document['msExitPointerLock'] ||
	                                   function(){}; // no-op if function does not exist
	          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
	  
	  
	          document.addEventListener('pointerlockchange', pointerLockChange, false);
	          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
	          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
	          document.addEventListener('mspointerlockchange', pointerLockChange, false);
	  
	          if (Module['elementPointerLock']) {
	            canvas.addEventListener("click", function(ev) {
	              if (!Browser.pointerLock && canvas.requestPointerLock) {
	                canvas.requestPointerLock();
	                ev.preventDefault();
	              }
	            }, false);
	          }
	        }
	      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
	        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
	  
	        var ctx;
	        var contextHandle;
	        if (useWebGL) {
	          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
	          var contextAttributes = {
	            antialias: false,
	            alpha: false
	          };
	  
	          if (webGLContextAttributes) {
	            for (var attribute in webGLContextAttributes) {
	              contextAttributes[attribute] = webGLContextAttributes[attribute];
	            }
	          }
	  
	          contextHandle = GL.createContext(canvas, contextAttributes);
	          if (contextHandle) {
	            ctx = GL.getContext(contextHandle).GLctx;
	          }
	          // Set the background of the WebGL canvas to black
	          canvas.style.backgroundColor = "black";
	        } else {
	          ctx = canvas.getContext('2d');
	        }
	  
	        if (!ctx) return null;
	  
	        if (setInModule) {
	          if (!useWebGL) assert(typeof GLctx === 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
	  
	          Module.ctx = ctx;
	          if (useWebGL) GL.makeContextCurrent(contextHandle);
	          Module.useWebGL = useWebGL;
	          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
	          Browser.init();
	        }
	        return ctx;
	      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas, vrDevice) {
	        Browser.lockPointer = lockPointer;
	        Browser.resizeCanvas = resizeCanvas;
	        Browser.vrDevice = vrDevice;
	        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
	        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
	        if (typeof Browser.vrDevice === 'undefined') Browser.vrDevice = null;
	  
	        var canvas = Module['canvas'];
	        function fullScreenChange() {
	          Browser.isFullScreen = false;
	          var canvasContainer = canvas.parentNode;
	          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
	               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
	               document['fullScreenElement'] || document['fullscreenElement'] ||
	               document['msFullScreenElement'] || document['msFullscreenElement'] ||
	               document['webkitCurrentFullScreenElement']) === canvasContainer) {
	            canvas.cancelFullScreen = document['cancelFullScreen'] ||
	                                      document['mozCancelFullScreen'] ||
	                                      document['webkitCancelFullScreen'] ||
	                                      document['msExitFullscreen'] ||
	                                      document['exitFullscreen'] ||
	                                      function() {};
	            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
	            if (Browser.lockPointer) canvas.requestPointerLock();
	            Browser.isFullScreen = true;
	            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
	          } else {
	            
	            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
	            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
	            canvasContainer.parentNode.removeChild(canvasContainer);
	            
	            if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
	          }
	          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
	          Browser.updateCanvasDimensions(canvas);
	        }
	  
	        if (!Browser.fullScreenHandlersInstalled) {
	          Browser.fullScreenHandlersInstalled = true;
	          document.addEventListener('fullscreenchange', fullScreenChange, false);
	          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
	          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
	          document.addEventListener('MSFullscreenChange', fullScreenChange, false);
	        }
	  
	        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
	        var canvasContainer = document.createElement("div");
	        canvas.parentNode.insertBefore(canvasContainer, canvas);
	        canvasContainer.appendChild(canvas);
	  
	        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
	        canvasContainer.requestFullScreen = canvasContainer['requestFullScreen'] ||
	                                            canvasContainer['mozRequestFullScreen'] ||
	                                            canvasContainer['msRequestFullscreen'] ||
	                                           (canvasContainer['webkitRequestFullScreen'] ? function() { canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
	  
	        if (vrDevice) {
	          canvasContainer.requestFullScreen({ vrDisplay: vrDevice });
	        } else {
	          canvasContainer.requestFullScreen();
	        }
	      },nextRAF:0,fakeRequestAnimationFrame:function (func) {
	        // try to keep 60fps between calls to here
	        var now = Date.now();
	        if (Browser.nextRAF === 0) {
	          Browser.nextRAF = now + 1000/60;
	        } else {
	          while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
	            Browser.nextRAF += 1000/60;
	          }
	        }
	        var delay = Math.max(Browser.nextRAF - now, 0);
	        setTimeout(func, delay);
	      },requestAnimationFrame:function requestAnimationFrame(func) {
	        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
	          Browser.fakeRequestAnimationFrame(func);
	        } else {
	          if (!window.requestAnimationFrame) {
	            window.requestAnimationFrame = window['requestAnimationFrame'] ||
	                                           window['mozRequestAnimationFrame'] ||
	                                           window['webkitRequestAnimationFrame'] ||
	                                           window['msRequestAnimationFrame'] ||
	                                           window['oRequestAnimationFrame'] ||
	                                           Browser.fakeRequestAnimationFrame;
	          }
	          window.requestAnimationFrame(func);
	        }
	      },safeCallback:function (func) {
	        return function() {
	          if (!ABORT) return func.apply(null, arguments);
	        };
	      },allowAsyncCallbacks:true,queuedAsyncCallbacks:[],pauseAsyncCallbacks:function () {
	        Browser.allowAsyncCallbacks = false;
	      },resumeAsyncCallbacks:function () { // marks future callbacks as ok to execute, and synchronously runs any remaining ones right now
	        Browser.allowAsyncCallbacks = true;
	        if (Browser.queuedAsyncCallbacks.length > 0) {
	          var callbacks = Browser.queuedAsyncCallbacks;
	          Browser.queuedAsyncCallbacks = [];
	          callbacks.forEach(function(func) {
	            func();
	          });
	        }
	      },safeRequestAnimationFrame:function (func) {
	        return Browser.requestAnimationFrame(function() {
	          if (ABORT) return;
	          if (Browser.allowAsyncCallbacks) {
	            func();
	          } else {
	            Browser.queuedAsyncCallbacks.push(func);
	          }
	        });
	      },safeSetTimeout:function (func, timeout) {
	        Module['noExitRuntime'] = true;
	        return setTimeout(function() {
	          if (ABORT) return;
	          if (Browser.allowAsyncCallbacks) {
	            func();
	          } else {
	            Browser.queuedAsyncCallbacks.push(func);
	          }
	        }, timeout);
	      },safeSetInterval:function (func, timeout) {
	        Module['noExitRuntime'] = true;
	        return setInterval(function() {
	          if (ABORT) return;
	          if (Browser.allowAsyncCallbacks) {
	            func();
	          } // drop it on the floor otherwise, next interval will kick in
	        }, timeout);
	      },getMimetype:function (name) {
	        return {
	          'jpg': 'image/jpeg',
	          'jpeg': 'image/jpeg',
	          'png': 'image/png',
	          'bmp': 'image/bmp',
	          'ogg': 'audio/ogg',
	          'wav': 'audio/wav',
	          'mp3': 'audio/mpeg'
	        }[name.substr(name.lastIndexOf('.')+1)];
	      },getUserMedia:function (func) {
	        if(!window.getUserMedia) {
	          window.getUserMedia = navigator['getUserMedia'] ||
	                                navigator['mozGetUserMedia'];
	        }
	        window.getUserMedia(func);
	      },getMovementX:function (event) {
	        return event['movementX'] ||
	               event['mozMovementX'] ||
	               event['webkitMovementX'] ||
	               0;
	      },getMovementY:function (event) {
	        return event['movementY'] ||
	               event['mozMovementY'] ||
	               event['webkitMovementY'] ||
	               0;
	      },getMouseWheelDelta:function (event) {
	        var delta = 0;
	        switch (event.type) {
	          case 'DOMMouseScroll': 
	            delta = event.detail;
	            break;
	          case 'mousewheel': 
	            delta = event.wheelDelta;
	            break;
	          case 'wheel': 
	            delta = event['deltaY'];
	            break;
	          default:
	            throw 'unrecognized mouse wheel event: ' + event.type;
	        }
	        return delta;
	      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
	        if (Browser.pointerLock) {
	          // When the pointer is locked, calculate the coordinates
	          // based on the movement of the mouse.
	          // Workaround for Firefox bug 764498
	          if (event.type != 'mousemove' &&
	              ('mozMovementX' in event)) {
	            Browser.mouseMovementX = Browser.mouseMovementY = 0;
	          } else {
	            Browser.mouseMovementX = Browser.getMovementX(event);
	            Browser.mouseMovementY = Browser.getMovementY(event);
	          }
	          
	          // check if SDL is available
	          if (typeof SDL != "undefined") {
	          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
	          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
	          } else {
	          	// just add the mouse delta to the current absolut mouse position
	          	// FIXME: ideally this should be clamped against the canvas size and zero
	          	Browser.mouseX += Browser.mouseMovementX;
	          	Browser.mouseY += Browser.mouseMovementY;
	          }        
	        } else {
	          // Otherwise, calculate the movement based on the changes
	          // in the coordinates.
	          var rect = Module["canvas"].getBoundingClientRect();
	          var cw = Module["canvas"].width;
	          var ch = Module["canvas"].height;
	  
	          // Neither .scrollX or .pageXOffset are defined in a spec, but
	          // we prefer .scrollX because it is currently in a spec draft.
	          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
	          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
	          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
	          // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
	          // and we have no viable fallback.
	          assert((typeof scrollX !== 'undefined') && (typeof scrollY !== 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
	  
	          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
	            var touch = event.touch;
	            if (touch === undefined) {
	              return; // the "touch" property is only defined in SDL
	  
	            }
	            var adjustedX = touch.pageX - (scrollX + rect.left);
	            var adjustedY = touch.pageY - (scrollY + rect.top);
	  
	            adjustedX = adjustedX * (cw / rect.width);
	            adjustedY = adjustedY * (ch / rect.height);
	  
	            var coords = { x: adjustedX, y: adjustedY };
	            
	            if (event.type === 'touchstart') {
	              Browser.lastTouches[touch.identifier] = coords;
	              Browser.touches[touch.identifier] = coords;
	            } else if (event.type === 'touchend' || event.type === 'touchmove') {
	              var last = Browser.touches[touch.identifier];
	              if (!last) last = coords;
	              Browser.lastTouches[touch.identifier] = last;
	              Browser.touches[touch.identifier] = coords;
	            } 
	            return;
	          }
	  
	          var x = event.pageX - (scrollX + rect.left);
	          var y = event.pageY - (scrollY + rect.top);
	  
	          // the canvas might be CSS-scaled compared to its backbuffer;
	          // SDL-using content will want mouse coordinates in terms
	          // of backbuffer units.
	          x = x * (cw / rect.width);
	          y = y * (ch / rect.height);
	  
	          Browser.mouseMovementX = x - Browser.mouseX;
	          Browser.mouseMovementY = y - Browser.mouseY;
	          Browser.mouseX = x;
	          Browser.mouseY = y;
	        }
	      },xhrLoad:function (url, onload, onerror) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url, true);
	        xhr.responseType = 'arraybuffer';
	        xhr.onload = function xhr_onload() {
	          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
	            onload(xhr.response);
	          } else {
	            onerror();
	          }
	        };
	        xhr.onerror = onerror;
	        xhr.send(null);
	      },asyncLoad:function (url, onload, onerror, noRunDep) {
	        Browser.xhrLoad(url, function(arrayBuffer) {
	          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
	          onload(new Uint8Array(arrayBuffer));
	          if (!noRunDep) removeRunDependency('al ' + url);
	        }, function(event) {
	          if (onerror) {
	            onerror();
	          } else {
	            throw 'Loading data file "' + url + '" failed.';
	          }
	        });
	        if (!noRunDep) addRunDependency('al ' + url);
	      },resizeListeners:[],updateResizeListeners:function () {
	        var canvas = Module['canvas'];
	        Browser.resizeListeners.forEach(function(listener) {
	          listener(canvas.width, canvas.height);
	        });
	      },setCanvasSize:function (width, height, noUpdates) {
	        var canvas = Module['canvas'];
	        Browser.updateCanvasDimensions(canvas, width, height);
	        if (!noUpdates) Browser.updateResizeListeners();
	      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
	        // check if SDL is available   
	        if (typeof SDL != "undefined") {
	        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
	        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
	        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
	        }
	        Browser.updateResizeListeners();
	      },setWindowedCanvasSize:function () {
	        // check if SDL is available       
	        if (typeof SDL != "undefined") {
	        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
	        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
	        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
	        }
	        Browser.updateResizeListeners();
	      },updateCanvasDimensions:function (canvas, wNative, hNative) {
	        if (wNative && hNative) {
	          canvas.widthNative = wNative;
	          canvas.heightNative = hNative;
	        } else {
	          wNative = canvas.widthNative;
	          hNative = canvas.heightNative;
	        }
	        var w = wNative;
	        var h = hNative;
	        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
	          if (w/h < Module['forcedAspectRatio']) {
	            w = Math.round(h * Module['forcedAspectRatio']);
	          } else {
	            h = Math.round(w / Module['forcedAspectRatio']);
	          }
	        }
	        if (((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
	             document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
	             document['fullScreenElement'] || document['fullscreenElement'] ||
	             document['msFullScreenElement'] || document['msFullscreenElement'] ||
	             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
	           var factor = Math.min(screen.width / w, screen.height / h);
	           w = Math.round(w * factor);
	           h = Math.round(h * factor);
	        }
	        if (Browser.resizeCanvas) {
	          if (canvas.width  != w) canvas.width  = w;
	          if (canvas.height != h) canvas.height = h;
	          if (typeof canvas.style != 'undefined') {
	            canvas.style.removeProperty( "width");
	            canvas.style.removeProperty("height");
	          }
	        } else {
	          if (canvas.width  != wNative) canvas.width  = wNative;
	          if (canvas.height != hNative) canvas.height = hNative;
	          if (typeof canvas.style != 'undefined') {
	            if (w != wNative || h != hNative) {
	              canvas.style.setProperty( "width", w + "px", "important");
	              canvas.style.setProperty("height", h + "px", "important");
	            } else {
	              canvas.style.removeProperty( "width");
	              canvas.style.removeProperty("height");
	            }
	          }
	        }
	      },wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:function () {
	        var handle = Browser.nextWgetRequestHandle;
	        Browser.nextWgetRequestHandle++;
	        return handle;
	      }};

	  function _time(ptr) {
	      var ret = (Date.now()/1000)|0;
	      if (ptr) {
	        HEAP32[((ptr)>>2)]=ret;
	      }
	      return ret;
	    }

	  function _pthread_self() {
	      //FIXME: assumes only a single thread
	      return 0;
	    }

	  var _sin=Math_sin;
	Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas, vrDevice) { Browser.requestFullScreen(lockPointer, resizeCanvas, vrDevice) };
	  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
	  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
	  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
	  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
	  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
	  Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) }
	STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

	staticSealed = true; // seal the static portion of memory

	STACK_MAX = STACK_BASE + TOTAL_STACK;

	DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);

	assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



	function nullFunc_viiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

	function invoke_viiiii(index,a1,a2,a3,a4,a5) {
	  try {
	    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
	  } catch(e) {
	    if (typeof e !== 'number' && e !== 'longjmp') throw e;
	    asm["setThrew"](1, 0);
	  }
	}

	function jsCall_viiiii(index,a1,a2,a3,a4,a5) {
	    Runtime.functionPointers[index](a1,a2,a3,a4,a5);
	}

	Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

	Module.asmLibraryArg = { "abort": abort, "assert": assert, "nullFunc_viiiii": nullFunc_viiiii, "invoke_viiiii": invoke_viiiii, "jsCall_viiiii": jsCall_viiiii, "_sin": _sin, "_cos": _cos, "_sysconf": _sysconf, "_pthread_self": _pthread_self, "_abort": _abort, "___setErrNo": ___setErrNo, "_sbrk": _sbrk, "_time": _time, "_emscripten_set_main_loop_timing": _emscripten_set_main_loop_timing, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_emscripten_set_main_loop": _emscripten_set_main_loop, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT };
	// EMSCRIPTEN_START_ASM
	var asm = (function(global, env, buffer) {
	  'almost asm';
	  
	  
	  var HEAP8 = new global.Int8Array(buffer);
	  var HEAP16 = new global.Int16Array(buffer);
	  var HEAP32 = new global.Int32Array(buffer);
	  var HEAPU8 = new global.Uint8Array(buffer);
	  var HEAPU16 = new global.Uint16Array(buffer);
	  var HEAPU32 = new global.Uint32Array(buffer);
	  var HEAPF32 = new global.Float32Array(buffer);
	  var HEAPF64 = new global.Float64Array(buffer);


	  var STACKTOP=env.STACKTOP|0;
	  var STACK_MAX=env.STACK_MAX|0;
	  var tempDoublePtr=env.tempDoublePtr|0;
	  var ABORT=env.ABORT|0;

	  var __THREW__ = 0;
	  var threwValue = 0;
	  var setjmpId = 0;
	  var undef = 0;
	  var nan = global.NaN, inf = global.Infinity;
	  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;

	  var tempRet0 = 0;
	  var tempRet1 = 0;
	  var tempRet2 = 0;
	  var tempRet3 = 0;
	  var tempRet4 = 0;
	  var tempRet5 = 0;
	  var tempRet6 = 0;
	  var tempRet7 = 0;
	  var tempRet8 = 0;
	  var tempRet9 = 0;
	  var Math_floor=global.Math.floor;
	  var Math_abs=global.Math.abs;
	  var Math_sqrt=global.Math.sqrt;
	  var Math_pow=global.Math.pow;
	  var Math_cos=global.Math.cos;
	  var Math_sin=global.Math.sin;
	  var Math_tan=global.Math.tan;
	  var Math_acos=global.Math.acos;
	  var Math_asin=global.Math.asin;
	  var Math_atan=global.Math.atan;
	  var Math_atan2=global.Math.atan2;
	  var Math_exp=global.Math.exp;
	  var Math_log=global.Math.log;
	  var Math_ceil=global.Math.ceil;
	  var Math_imul=global.Math.imul;
	  var Math_min=global.Math.min;
	  var Math_clz32=global.Math.clz32;
	  var abort=env.abort;
	  var assert=env.assert;
	  var nullFunc_viiiii=env.nullFunc_viiiii;
	  var invoke_viiiii=env.invoke_viiiii;
	  var jsCall_viiiii=env.jsCall_viiiii;
	  var _sin=env._sin;
	  var _cos=env._cos;
	  var _sysconf=env._sysconf;
	  var _pthread_self=env._pthread_self;
	  var _abort=env._abort;
	  var ___setErrNo=env.___setErrNo;
	  var _sbrk=env._sbrk;
	  var _time=env._time;
	  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
	  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
	  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
	  var tempFloat = 0.0;

	// EMSCRIPTEN_START_FUNCS
	function stackAlloc(size) {
	  size = size|0;
	  var ret = 0;
	  ret = STACKTOP;
	  STACKTOP = (STACKTOP + size)|0;
	  STACKTOP = (STACKTOP + 15)&-16;
	if ((STACKTOP|0) >= (STACK_MAX|0)) abort();

	  return ret|0;
	}
	function stackSave() {
	  return STACKTOP|0;
	}
	function stackRestore(top) {
	  top = top|0;
	  STACKTOP = top;
	}
	function establishStackSpace(stackBase, stackMax) {
	  stackBase = stackBase|0;
	  stackMax = stackMax|0;
	  STACKTOP = stackBase;
	  STACK_MAX = stackMax;
	}

	function setThrew(threw, value) {
	  threw = threw|0;
	  value = value|0;
	  if ((__THREW__|0) == 0) {
	    __THREW__ = threw;
	    threwValue = value;
	  }
	}
	function copyTempFloat(ptr) {
	  ptr = ptr|0;
	  HEAP8[tempDoublePtr>>0] = HEAP8[ptr>>0];
	  HEAP8[tempDoublePtr+1>>0] = HEAP8[ptr+1>>0];
	  HEAP8[tempDoublePtr+2>>0] = HEAP8[ptr+2>>0];
	  HEAP8[tempDoublePtr+3>>0] = HEAP8[ptr+3>>0];
	}
	function copyTempDouble(ptr) {
	  ptr = ptr|0;
	  HEAP8[tempDoublePtr>>0] = HEAP8[ptr>>0];
	  HEAP8[tempDoublePtr+1>>0] = HEAP8[ptr+1>>0];
	  HEAP8[tempDoublePtr+2>>0] = HEAP8[ptr+2>>0];
	  HEAP8[tempDoublePtr+3>>0] = HEAP8[ptr+3>>0];
	  HEAP8[tempDoublePtr+4>>0] = HEAP8[ptr+4>>0];
	  HEAP8[tempDoublePtr+5>>0] = HEAP8[ptr+5>>0];
	  HEAP8[tempDoublePtr+6>>0] = HEAP8[ptr+6>>0];
	  HEAP8[tempDoublePtr+7>>0] = HEAP8[ptr+7>>0];
	}

	function setTempRet0(value) {
	  value = value|0;
	  tempRet0 = value;
	}
	function getTempRet0() {
	  return tempRet0|0;
	}

	function _ColorHSV($hue,$sat,$val) {
	 $hue = $hue|0;
	 $sat = $sat|0;
	 $val = $val|0;
	 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
	 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
	 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
	 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
	 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
	 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $b = 0, $g = 0, $lo = 0, $r = 0, $s1 = 0, $v1 = 0, label = 0, sp = 0;
	 sp = STACKTOP;
	 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
	 $0 = $hue;
	 $1 = $sat;
	 $2 = $val;
	 $3 = $0;
	 $4 = (($3|0) % 1536)&-1;
	 $0 = $4;
	 $5 = $0;
	 $6 = ($5|0)<(0);
	 if ($6) {
	  $7 = $0;
	  $8 = (($7) + 1536)|0;
	  $0 = $8;
	 }
	 $9 = $0;
	 $10 = $9 & 255;
	 $11 = $10&255;
	 $lo = $11;
	 $12 = $0;
	 $13 = $12 >> 8;
	 switch ($13|0) {
	 case 0:  {
	  $r = -1;
	  $14 = $lo;
	  $g = $14;
	  $b = 0;
	  break;
	 }
	 case 1:  {
	  $15 = $lo;
	  $16 = $15&255;
	  $17 = (255 - ($16))|0;
	  $18 = $17&255;
	  $r = $18;
	  $g = -1;
	  $b = 0;
	  break;
	 }
	 case 2:  {
	  $r = 0;
	  $g = -1;
	  $19 = $lo;
	  $b = $19;
	  break;
	 }
	 case 3:  {
	  $r = 0;
	  $20 = $lo;
	  $21 = $20&255;
	  $22 = (255 - ($21))|0;
	  $23 = $22&255;
	  $g = $23;
	  $b = -1;
	  break;
	 }
	 case 4:  {
	  $24 = $lo;
	  $r = $24;
	  $g = 0;
	  $b = -1;
	  break;
	 }
	 default: {
	  $r = -1;
	  $g = 0;
	  $25 = $lo;
	  $26 = $25&255;
	  $27 = (255 - ($26))|0;
	  $28 = $27&255;
	  $b = $28;
	 }
	 }
	 $29 = $1;
	 $30 = $29&255;
	 $31 = (($30) + 1)|0;
	 $32 = $31&65535;
	 $s1 = $32;
	 $33 = $r;
	 $34 = $33&255;
	 $35 = (255 - ($34))|0;
	 $36 = $s1;
	 $37 = $36&65535;
	 $38 = Math_imul($35, $37)|0;
	 $39 = $38 >> 8;
	 $40 = (255 - ($39))|0;
	 $41 = $40&255;
	 $r = $41;
	 $42 = $g;
	 $43 = $42&255;
	 $44 = (255 - ($43))|0;
	 $45 = $s1;
	 $46 = $45&65535;
	 $47 = Math_imul($44, $46)|0;
	 $48 = $47 >> 8;
	 $49 = (255 - ($48))|0;
	 $50 = $49&255;
	 $g = $50;
	 $51 = $b;
	 $52 = $51&255;
	 $53 = (255 - ($52))|0;
	 $54 = $s1;
	 $55 = $54&65535;
	 $56 = Math_imul($53, $55)|0;
	 $57 = $56 >> 8;
	 $58 = (255 - ($57))|0;
	 $59 = $58&255;
	 $b = $59;
	 $60 = $2;
	 $61 = $60&255;
	 $62 = (($61) + 1)|0;
	 $63 = $62&65535;
	 $v1 = $63;
	 $64 = $r;
	 $65 = $64&255;
	 $66 = $v1;
	 $67 = $66&65535;
	 $68 = Math_imul($65, $67)|0;
	 $69 = $68 >> 12;
	 $70 = $69&255;
	 $r = $70;
	 $71 = $g;
	 $72 = $71&255;
	 $73 = $v1;
	 $74 = $73&65535;
	 $75 = Math_imul($72, $74)|0;
	 $76 = $75 >> 12;
	 $77 = $76&255;
	 $g = $77;
	 $78 = $b;
	 $79 = $78&255;
	 $80 = $v1;
	 $81 = $80&65535;
	 $82 = Math_imul($79, $81)|0;
	 $83 = $82 >> 12;
	 $84 = $83&255;
	 $b = $84;
	 $85 = $r;
	 $86 = $85&255;
	 $87 = $86 << 12;
	 $88 = $r;
	 $89 = $88&255;
	 $90 = $89 & 8;
	 $91 = $90 << 8;
	 $92 = $87 | $91;
	 $93 = $g;
	 $94 = $93&255;
	 $95 = $94 << 7;
	 $96 = $92 | $95;
	 $97 = $g;
	 $98 = $97&255;
	 $99 = $98 & 12;
	 $100 = $99 << 3;
	 $101 = $96 | $100;
	 $102 = $b;
	 $103 = $102&255;
	 $104 = $103 << 1;
	 $105 = $101 | $104;
	 $106 = $b;
	 $107 = $106&255;
	 $108 = $107 >> 3;
	 $109 = $105 | $108;
	 $110 = $109&65535;
	 STACKTOP = sp;return ($110|0);
	}
	function _loop($f) {
	 $f = $f|0;
	 var $0 = 0, $1 = 0.0, $10 = 0.0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0.0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
	 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0.0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
	 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0.0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0.0, $150 = 0, $151 = 0;
	 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0.0, $158 = 0.0, $159 = 0.0, $16 = 0.0, $160 = 0.0, $161 = 0.0, $162 = 0.0, $163 = 0.0, $164 = 0.0, $165 = 0.0, $166 = 0.0, $167 = 0.0, $168 = 0.0, $169 = 0.0, $17 = 0.0;
	 var $170 = 0.0, $171 = 0.0, $172 = 0.0, $173 = 0, $174 = 0, $18 = 0, $19 = 0.0, $2 = 0.0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0.0, $29 = 0.0, $3 = 0.0, $30 = 0;
	 var $31 = 0.0, $32 = 0.0, $33 = 0.0, $34 = 0.0, $35 = 0.0, $36 = 0, $37 = 0.0, $38 = 0.0, $39 = 0.0, $4 = 0.0, $40 = 0.0, $41 = 0.0, $42 = 0, $43 = 0.0, $44 = 0.0, $45 = 0.0, $46 = 0.0, $47 = 0.0, $48 = 0, $49 = 0;
	 var $5 = 0.0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
	 var $68 = 0, $69 = 0, $7 = 0.0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0.0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
	 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0.0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $b = 0, $c = 0, $g = 0, $r = 0, $sx1 = 0;
	 var $sx2 = 0, $sx3 = 0, $sx4 = 0, $value = 0, $x = 0, $x1 = 0, $x2 = 0, $x3 = 0, $x4 = 0, $y = 0, $y1 = 0, $y2 = 0, $y3 = 0, $y4 = 0, label = 0, sp = 0;
	 sp = STACKTOP;
	 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
	 $0 = $f;
	 $1 = +HEAPF32[8>>2];
	 $2 = $1;
	 $3 = (+Math_cos((+$2)));
	 $4 = $3 * 65.199996948242188;
	 $5 = $4 + 64.400001525878906;
	 $6 = (~~(($5)));
	 $sx1 = $6;
	 $7 = +HEAPF32[12>>2];
	 $8 = $7;
	 $9 = (+Math_cos((+$8)));
	 $10 = $9 * 92.0;
	 $11 = $10 + 46.400001525878906;
	 $12 = (~~(($11)));
	 $sx2 = $12;
	 $13 = +HEAPF32[16>>2];
	 $14 = $13;
	 $15 = (+Math_cos((+$14)));
	 $16 = $15 * 163.19999694824219;
	 $17 = $16 + 93.599998474121093;
	 $18 = (~~(($17)));
	 $sx3 = $18;
	 $19 = +HEAPF32[20>>2];
	 $20 = $19;
	 $21 = (+Math_cos((+$20)));
	 $22 = $21 * 176.80000305175781;
	 $23 = $22 + 16.399999618530273;
	 $24 = (~~(($23)));
	 $sx4 = $24;
	 $25 = +HEAPF32[8>>2];
	 $26 = $25;
	 $27 = (+Math_sin((+$26)));
	 $28 = $27 * 65.199996948242188;
	 $29 = $28 + 34.799999237060547;
	 $30 = (~~(($29)));
	 $y1 = $30;
	 $31 = +HEAPF32[12>>2];
	 $32 = $31;
	 $33 = (+Math_sin((+$32)));
	 $34 = $33 * 92.0;
	 $35 = $34 + 26.0;
	 $36 = (~~(($35)));
	 $y2 = $36;
	 $37 = +HEAPF32[16>>2];
	 $38 = $37;
	 $39 = (+Math_sin((+$38)));
	 $40 = $39 * 163.19999694824219;
	 $41 = $40 + 56.0;
	 $42 = (~~(($41)));
	 $y3 = $42;
	 $43 = +HEAPF32[20>>2];
	 $44 = $43;
	 $45 = (+Math_sin((+$44)));
	 $46 = $45 * 176.80000305175781;
	 $47 = $46 + -11.600000381469727;
	 $48 = (~~(($47)));
	 $y4 = $48;
	 $y = 0;
	 while(1) {
	  $49 = $y;
	  $50 = ($49|0)<(16);
	  if (!($50)) {
	   break;
	  }
	  $51 = $sx1;
	  $x1 = $51;
	  $52 = $sx2;
	  $x2 = $52;
	  $53 = $sx3;
	  $x3 = $53;
	  $54 = $sx4;
	  $x4 = $54;
	  $x = 0;
	  while(1) {
	   $55 = $x;
	   $56 = ($55|0)<(32);
	   if (!($56)) {
	    break;
	   }
	   $57 = HEAP32[24>>2]|0;
	   $58 = $x1;
	   $59 = $x1;
	   $60 = Math_imul($58, $59)|0;
	   $61 = $y1;
	   $62 = $y1;
	   $63 = Math_imul($61, $62)|0;
	   $64 = (($60) + ($63))|0;
	   $65 = $64 >> 4;
	   $66 = $65&255;
	   $67 = $66&255;
	   $68 = (572 + ($67)|0);
	   $69 = HEAP8[$68>>0]|0;
	   $70 = $69 << 24 >> 24;
	   $71 = (($57) + ($70))|0;
	   $72 = $x2;
	   $73 = $x2;
	   $74 = Math_imul($72, $73)|0;
	   $75 = $y2;
	   $76 = $y2;
	   $77 = Math_imul($75, $76)|0;
	   $78 = (($74) + ($77))|0;
	   $79 = $78 >> 4;
	   $80 = $79&255;
	   $81 = $80&255;
	   $82 = (572 + ($81)|0);
	   $83 = HEAP8[$82>>0]|0;
	   $84 = $83 << 24 >> 24;
	   $85 = (($71) + ($84))|0;
	   $86 = $x3;
	   $87 = $x3;
	   $88 = Math_imul($86, $87)|0;
	   $89 = $y3;
	   $90 = $y3;
	   $91 = Math_imul($89, $90)|0;
	   $92 = (($88) + ($91))|0;
	   $93 = $92 >> 5;
	   $94 = $93&255;
	   $95 = $94&255;
	   $96 = (572 + ($95)|0);
	   $97 = HEAP8[$96>>0]|0;
	   $98 = $97 << 24 >> 24;
	   $99 = (($85) + ($98))|0;
	   $100 = $x4;
	   $101 = $x4;
	   $102 = Math_imul($100, $101)|0;
	   $103 = $y4;
	   $104 = $y4;
	   $105 = Math_imul($103, $104)|0;
	   $106 = (($102) + ($105))|0;
	   $107 = $106 >> 5;
	   $108 = $107&255;
	   $109 = $108&255;
	   $110 = (572 + ($109)|0);
	   $111 = HEAP8[$110>>0]|0;
	   $112 = $111 << 24 >> 24;
	   $113 = (($99) + ($112))|0;
	   $value = $113;
	   $114 = $value;
	   $115 = ($114*3)|0;
	   $116 = (_ColorHSV($115,-1,-1)|0);
	   $c = $116;
	   $117 = $c;
	   $118 = $117&65535;
	   $119 = $118 >> 12;
	   $120 = $119&255;
	   $r = $120;
	   $121 = $c;
	   $122 = $121&65535;
	   $123 = $122 >> 7;
	   $124 = $123 & 15;
	   $125 = $124&255;
	   $g = $125;
	   $126 = $c;
	   $127 = $126&65535;
	   $128 = $127 >> 1;
	   $129 = $128 & 15;
	   $130 = $129&255;
	   $b = $130;
	   $131 = $0;
	   $132 = $x;
	   $133 = $y;
	   $134 = $r;
	   $135 = $g;
	   $136 = $b;
	   FUNCTION_TABLE_viiiii[$131 & 63]($132,$133,$134,$135,$136);
	   $137 = $x1;
	   $138 = (($137) + -1)|0;
	   $x1 = $138;
	   $139 = $x2;
	   $140 = (($139) + -1)|0;
	   $x2 = $140;
	   $141 = $x3;
	   $142 = (($141) + -1)|0;
	   $x3 = $142;
	   $143 = $x4;
	   $144 = (($143) + -1)|0;
	   $x4 = $144;
	   $145 = $x;
	   $146 = (($145) + 1)|0;
	   $x = $146;
	  }
	  $147 = $y1;
	  $148 = (($147) + -1)|0;
	  $y1 = $148;
	  $149 = $y2;
	  $150 = (($149) + -1)|0;
	  $y2 = $150;
	  $151 = $y3;
	  $152 = (($151) + -1)|0;
	  $y3 = $152;
	  $153 = $y4;
	  $154 = (($153) + -1)|0;
	  $y4 = $154;
	  $155 = $y;
	  $156 = (($155) + 1)|0;
	  $y = $156;
	 }
	 $157 = +HEAPF32[8>>2];
	 $158 = $157;
	 $159 = $158 + 0.029999999999999999;
	 $160 = $159;
	 HEAPF32[8>>2] = $160;
	 $161 = +HEAPF32[12>>2];
	 $162 = $161;
	 $163 = $162 - 0.070000000000000007;
	 $164 = $163;
	 HEAPF32[12>>2] = $164;
	 $165 = +HEAPF32[16>>2];
	 $166 = $165;
	 $167 = $166 + 0.13;
	 $168 = $167;
	 HEAPF32[16>>2] = $168;
	 $169 = +HEAPF32[20>>2];
	 $170 = $169;
	 $171 = $170 - 0.14999999999999999;
	 $172 = $171;
	 HEAPF32[20>>2] = $172;
	 $173 = HEAP32[24>>2]|0;
	 $174 = (($173) + 2)|0;
	 HEAP32[24>>2] = $174;
	 STACKTOP = sp;return;
	}
	function ___errno_location() {
	 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
	 sp = STACKTOP;
	 $0 = HEAP32[28>>2]|0;
	 $1 = ($0|0)==(0|0);
	 if ($1) {
	  $$0 = 72;
	 } else {
	  $2 = (_pthread_self()|0);
	  $3 = ((($2)) + 60|0);
	  $4 = HEAP32[$3>>2]|0;
	  $$0 = $4;
	 }
	 return ($$0|0);
	}
	function _malloc($bytes) {
	 $bytes = $bytes|0;
	 var $$3$i = 0, $$lcssa = 0, $$lcssa211 = 0, $$lcssa215 = 0, $$lcssa216 = 0, $$lcssa217 = 0, $$lcssa219 = 0, $$lcssa222 = 0, $$lcssa224 = 0, $$lcssa226 = 0, $$lcssa228 = 0, $$lcssa230 = 0, $$lcssa232 = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i22$i = 0, $$pre$i25 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i23$iZ2D = 0;
	 var $$pre$phi$i26Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi58$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre105 = 0, $$pre106 = 0, $$pre14$i$i = 0, $$pre43$i = 0, $$pre56$i$i = 0, $$pre57$i$i = 0, $$pre8$i = 0, $$rsize$0$i = 0, $$rsize$3$i = 0, $$sum = 0, $$sum$i$i = 0, $$sum$i$i$i = 0, $$sum$i13$i = 0, $$sum$i14$i = 0, $$sum$i17$i = 0, $$sum$i19$i = 0;
	 var $$sum$i2334 = 0, $$sum$i32 = 0, $$sum$i35 = 0, $$sum1 = 0, $$sum1$i = 0, $$sum1$i$i = 0, $$sum1$i15$i = 0, $$sum1$i20$i = 0, $$sum1$i24 = 0, $$sum10 = 0, $$sum10$i = 0, $$sum10$i$i = 0, $$sum11$i = 0, $$sum11$i$i = 0, $$sum1112 = 0, $$sum112$i = 0, $$sum113$i = 0, $$sum114$i = 0, $$sum115$i = 0, $$sum116$i = 0;
	 var $$sum117$i = 0, $$sum118$i = 0, $$sum119$i = 0, $$sum12$i = 0, $$sum12$i$i = 0, $$sum120$i = 0, $$sum121$i = 0, $$sum122$i = 0, $$sum123$i = 0, $$sum124$i = 0, $$sum125$i = 0, $$sum13$i = 0, $$sum13$i$i = 0, $$sum14$i$i = 0, $$sum15$i = 0, $$sum15$i$i = 0, $$sum16$i = 0, $$sum16$i$i = 0, $$sum17$i = 0, $$sum17$i$i = 0;
	 var $$sum18$i = 0, $$sum1819$i$i = 0, $$sum2 = 0, $$sum2$i = 0, $$sum2$i$i = 0, $$sum2$i$i$i = 0, $$sum2$i16$i = 0, $$sum2$i18$i = 0, $$sum2$i21$i = 0, $$sum20$i$i = 0, $$sum21$i$i = 0, $$sum22$i$i = 0, $$sum23$i$i = 0, $$sum24$i$i = 0, $$sum25$i$i = 0, $$sum27$i$i = 0, $$sum28$i$i = 0, $$sum29$i$i = 0, $$sum3$i = 0, $$sum3$i27 = 0;
	 var $$sum30$i$i = 0, $$sum3132$i$i = 0, $$sum34$i$i = 0, $$sum3536$i$i = 0, $$sum3738$i$i = 0, $$sum39$i$i = 0, $$sum4 = 0, $$sum4$i = 0, $$sum4$i$i = 0, $$sum4$i28 = 0, $$sum40$i$i = 0, $$sum41$i$i = 0, $$sum42$i$i = 0, $$sum5$i = 0, $$sum5$i$i = 0, $$sum56 = 0, $$sum6$i = 0, $$sum67$i$i = 0, $$sum7$i = 0, $$sum8$i = 0;
	 var $$sum9 = 0, $$sum9$i = 0, $$sum9$i$i = 0, $$tsize$1$i = 0, $$v$0$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0;
	 var $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0;
	 var $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0;
	 var $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $1059 = 0, $106 = 0, $1060 = 0, $1061 = 0, $1062 = 0, $1063 = 0, $1064 = 0;
	 var $1065 = 0, $1066 = 0, $1067 = 0, $1068 = 0, $1069 = 0, $107 = 0, $1070 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0;
	 var $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0;
	 var $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0;
	 var $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0;
	 var $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0;
	 var $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0;
	 var $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0;
	 var $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0;
	 var $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0;
	 var $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0;
	 var $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0;
	 var $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0;
	 var $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0;
	 var $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0;
	 var $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0;
	 var $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0;
	 var $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0;
	 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
	 var $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0;
	 var $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
	 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
	 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
	 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
	 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
	 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
	 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
	 var $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
	 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
	 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
	 var $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0;
	 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
	 var $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
	 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
	 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0;
	 var $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0;
	 var $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0;
	 var $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0;
	 var $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0;
	 var $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0;
	 var $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0;
	 var $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0;
	 var $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0;
	 var $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0;
	 var $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0;
	 var $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0;
	 var $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0;
	 var $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0;
	 var $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0;
	 var $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0;
	 var $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $F$0$i$i = 0, $F1$0$i = 0, $F4$0 = 0, $F4$0$i$i = 0;
	 var $F5$0$i = 0, $I1$0$i$i = 0, $I7$0$i = 0, $I7$0$i$i = 0, $K12$029$i = 0, $K2$07$i$i = 0, $K8$051$i$i = 0, $R$0$i = 0, $R$0$i$i = 0, $R$0$i$i$lcssa = 0, $R$0$i$lcssa = 0, $R$0$i18 = 0, $R$0$i18$lcssa = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i20 = 0, $RP$0$i = 0, $RP$0$i$i = 0, $RP$0$i$i$lcssa = 0, $RP$0$i$lcssa = 0;
	 var $RP$0$i17 = 0, $RP$0$i17$lcssa = 0, $T$0$lcssa$i = 0, $T$0$lcssa$i$i = 0, $T$0$lcssa$i25$i = 0, $T$028$i = 0, $T$028$i$lcssa = 0, $T$050$i$i = 0, $T$050$i$i$lcssa = 0, $T$06$i$i = 0, $T$06$i$i$lcssa = 0, $br$0$ph$i = 0, $cond$i = 0, $cond$i$i = 0, $cond$i21 = 0, $exitcond$i$i = 0, $i$02$i$i = 0, $idx$0$i = 0, $mem$0 = 0, $nb$0 = 0;
	 var $not$$i = 0, $not$$i$i = 0, $not$$i26$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i30 = 0, $or$cond1$i = 0, $or$cond19$i = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond5$i = 0, $or$cond57$i = 0, $or$cond6$i = 0, $or$cond8$i = 0, $or$cond9$i = 0, $qsize$0$i$i = 0, $rsize$0$i = 0, $rsize$0$i$lcssa = 0, $rsize$0$i15 = 0, $rsize$1$i = 0;
	 var $rsize$2$i = 0, $rsize$3$lcssa$i = 0, $rsize$331$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sizebits$0$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$084$i = 0, $sp$084$i$lcssa = 0, $sp$183$i = 0, $sp$183$i$lcssa = 0, $ssize$0$$i = 0, $ssize$0$i = 0, $ssize$1$ph$i = 0, $ssize$2$i = 0, $t$0$i = 0, $t$0$i14 = 0, $t$1$i = 0, $t$2$ph$i = 0;
	 var $t$2$v$3$i = 0, $t$230$i = 0, $tbase$255$i = 0, $tsize$0$ph$i = 0, $tsize$0323944$i = 0, $tsize$1$i = 0, $tsize$254$i = 0, $v$0$i = 0, $v$0$i$lcssa = 0, $v$0$i16 = 0, $v$1$i = 0, $v$2$i = 0, $v$3$lcssa$i = 0, $v$3$ph$i = 0, $v$332$i = 0, label = 0, sp = 0;
	 sp = STACKTOP;
	 $0 = ($bytes>>>0)<(245);
	 do {
	  if ($0) {
	   $1 = ($bytes>>>0)<(11);
	   $2 = (($bytes) + 11)|0;
	   $3 = $2 & -8;
	   $4 = $1 ? 16 : $3;
	   $5 = $4 >>> 3;
	   $6 = HEAP32[76>>2]|0;
	   $7 = $6 >>> $5;
	   $8 = $7 & 3;
	   $9 = ($8|0)==(0);
	   if (!($9)) {
	    $10 = $7 & 1;
	    $11 = $10 ^ 1;
	    $12 = (($11) + ($5))|0;
	    $13 = $12 << 1;
	    $14 = (116 + ($13<<2)|0);
	    $$sum10 = (($13) + 2)|0;
	    $15 = (116 + ($$sum10<<2)|0);
	    $16 = HEAP32[$15>>2]|0;
	    $17 = ((($16)) + 8|0);
	    $18 = HEAP32[$17>>2]|0;
	    $19 = ($14|0)==($18|0);
	    do {
	     if ($19) {
	      $20 = 1 << $12;
	      $21 = $20 ^ -1;
	      $22 = $6 & $21;
	      HEAP32[76>>2] = $22;
	     } else {
	      $23 = HEAP32[(92)>>2]|0;
	      $24 = ($18>>>0)<($23>>>0);
	      if ($24) {
	       _abort();
	       // unreachable;
	      }
	      $25 = ((($18)) + 12|0);
	      $26 = HEAP32[$25>>2]|0;
	      $27 = ($26|0)==($16|0);
	      if ($27) {
	       HEAP32[$25>>2] = $14;
	       HEAP32[$15>>2] = $18;
	       break;
	      } else {
	       _abort();
	       // unreachable;
	      }
	     }
	    } while(0);
	    $28 = $12 << 3;
	    $29 = $28 | 3;
	    $30 = ((($16)) + 4|0);
	    HEAP32[$30>>2] = $29;
	    $$sum1112 = $28 | 4;
	    $31 = (($16) + ($$sum1112)|0);
	    $32 = HEAP32[$31>>2]|0;
	    $33 = $32 | 1;
	    HEAP32[$31>>2] = $33;
	    $mem$0 = $17;
	    return ($mem$0|0);
	   }
	   $34 = HEAP32[(84)>>2]|0;
	   $35 = ($4>>>0)>($34>>>0);
	   if ($35) {
	    $36 = ($7|0)==(0);
	    if (!($36)) {
	     $37 = $7 << $5;
	     $38 = 2 << $5;
	     $39 = (0 - ($38))|0;
	     $40 = $38 | $39;
	     $41 = $37 & $40;
	     $42 = (0 - ($41))|0;
	     $43 = $41 & $42;
	     $44 = (($43) + -1)|0;
	     $45 = $44 >>> 12;
	     $46 = $45 & 16;
	     $47 = $44 >>> $46;
	     $48 = $47 >>> 5;
	     $49 = $48 & 8;
	     $50 = $49 | $46;
	     $51 = $47 >>> $49;
	     $52 = $51 >>> 2;
	     $53 = $52 & 4;
	     $54 = $50 | $53;
	     $55 = $51 >>> $53;
	     $56 = $55 >>> 1;
	     $57 = $56 & 2;
	     $58 = $54 | $57;
	     $59 = $55 >>> $57;
	     $60 = $59 >>> 1;
	     $61 = $60 & 1;
	     $62 = $58 | $61;
	     $63 = $59 >>> $61;
	     $64 = (($62) + ($63))|0;
	     $65 = $64 << 1;
	     $66 = (116 + ($65<<2)|0);
	     $$sum4 = (($65) + 2)|0;
	     $67 = (116 + ($$sum4<<2)|0);
	     $68 = HEAP32[$67>>2]|0;
	     $69 = ((($68)) + 8|0);
	     $70 = HEAP32[$69>>2]|0;
	     $71 = ($66|0)==($70|0);
	     do {
	      if ($71) {
	       $72 = 1 << $64;
	       $73 = $72 ^ -1;
	       $74 = $6 & $73;
	       HEAP32[76>>2] = $74;
	       $89 = $34;
	      } else {
	       $75 = HEAP32[(92)>>2]|0;
	       $76 = ($70>>>0)<($75>>>0);
	       if ($76) {
	        _abort();
	        // unreachable;
	       }
	       $77 = ((($70)) + 12|0);
	       $78 = HEAP32[$77>>2]|0;
	       $79 = ($78|0)==($68|0);
	       if ($79) {
	        HEAP32[$77>>2] = $66;
	        HEAP32[$67>>2] = $70;
	        $$pre = HEAP32[(84)>>2]|0;
	        $89 = $$pre;
	        break;
	       } else {
	        _abort();
	        // unreachable;
	       }
	      }
	     } while(0);
	     $80 = $64 << 3;
	     $81 = (($80) - ($4))|0;
	     $82 = $4 | 3;
	     $83 = ((($68)) + 4|0);
	     HEAP32[$83>>2] = $82;
	     $84 = (($68) + ($4)|0);
	     $85 = $81 | 1;
	     $$sum56 = $4 | 4;
	     $86 = (($68) + ($$sum56)|0);
	     HEAP32[$86>>2] = $85;
	     $87 = (($68) + ($80)|0);
	     HEAP32[$87>>2] = $81;
	     $88 = ($89|0)==(0);
	     if (!($88)) {
	      $90 = HEAP32[(96)>>2]|0;
	      $91 = $89 >>> 3;
	      $92 = $91 << 1;
	      $93 = (116 + ($92<<2)|0);
	      $94 = HEAP32[76>>2]|0;
	      $95 = 1 << $91;
	      $96 = $94 & $95;
	      $97 = ($96|0)==(0);
	      if ($97) {
	       $98 = $94 | $95;
	       HEAP32[76>>2] = $98;
	       $$pre105 = (($92) + 2)|0;
	       $$pre106 = (116 + ($$pre105<<2)|0);
	       $$pre$phiZ2D = $$pre106;$F4$0 = $93;
	      } else {
	       $$sum9 = (($92) + 2)|0;
	       $99 = (116 + ($$sum9<<2)|0);
	       $100 = HEAP32[$99>>2]|0;
	       $101 = HEAP32[(92)>>2]|0;
	       $102 = ($100>>>0)<($101>>>0);
	       if ($102) {
	        _abort();
	        // unreachable;
	       } else {
	        $$pre$phiZ2D = $99;$F4$0 = $100;
	       }
	      }
	      HEAP32[$$pre$phiZ2D>>2] = $90;
	      $103 = ((($F4$0)) + 12|0);
	      HEAP32[$103>>2] = $90;
	      $104 = ((($90)) + 8|0);
	      HEAP32[$104>>2] = $F4$0;
	      $105 = ((($90)) + 12|0);
	      HEAP32[$105>>2] = $93;
	     }
	     HEAP32[(84)>>2] = $81;
	     HEAP32[(96)>>2] = $84;
	     $mem$0 = $69;
	     return ($mem$0|0);
	    }
	    $106 = HEAP32[(80)>>2]|0;
	    $107 = ($106|0)==(0);
	    if ($107) {
	     $nb$0 = $4;
	    } else {
	     $108 = (0 - ($106))|0;
	     $109 = $106 & $108;
	     $110 = (($109) + -1)|0;
	     $111 = $110 >>> 12;
	     $112 = $111 & 16;
	     $113 = $110 >>> $112;
	     $114 = $113 >>> 5;
	     $115 = $114 & 8;
	     $116 = $115 | $112;
	     $117 = $113 >>> $115;
	     $118 = $117 >>> 2;
	     $119 = $118 & 4;
	     $120 = $116 | $119;
	     $121 = $117 >>> $119;
	     $122 = $121 >>> 1;
	     $123 = $122 & 2;
	     $124 = $120 | $123;
	     $125 = $121 >>> $123;
	     $126 = $125 >>> 1;
	     $127 = $126 & 1;
	     $128 = $124 | $127;
	     $129 = $125 >>> $127;
	     $130 = (($128) + ($129))|0;
	     $131 = (380 + ($130<<2)|0);
	     $132 = HEAP32[$131>>2]|0;
	     $133 = ((($132)) + 4|0);
	     $134 = HEAP32[$133>>2]|0;
	     $135 = $134 & -8;
	     $136 = (($135) - ($4))|0;
	     $rsize$0$i = $136;$t$0$i = $132;$v$0$i = $132;
	     while(1) {
	      $137 = ((($t$0$i)) + 16|0);
	      $138 = HEAP32[$137>>2]|0;
	      $139 = ($138|0)==(0|0);
	      if ($139) {
	       $140 = ((($t$0$i)) + 20|0);
	       $141 = HEAP32[$140>>2]|0;
	       $142 = ($141|0)==(0|0);
	       if ($142) {
	        $rsize$0$i$lcssa = $rsize$0$i;$v$0$i$lcssa = $v$0$i;
	        break;
	       } else {
	        $144 = $141;
	       }
	      } else {
	       $144 = $138;
	      }
	      $143 = ((($144)) + 4|0);
	      $145 = HEAP32[$143>>2]|0;
	      $146 = $145 & -8;
	      $147 = (($146) - ($4))|0;
	      $148 = ($147>>>0)<($rsize$0$i>>>0);
	      $$rsize$0$i = $148 ? $147 : $rsize$0$i;
	      $$v$0$i = $148 ? $144 : $v$0$i;
	      $rsize$0$i = $$rsize$0$i;$t$0$i = $144;$v$0$i = $$v$0$i;
	     }
	     $149 = HEAP32[(92)>>2]|0;
	     $150 = ($v$0$i$lcssa>>>0)<($149>>>0);
	     if ($150) {
	      _abort();
	      // unreachable;
	     }
	     $151 = (($v$0$i$lcssa) + ($4)|0);
	     $152 = ($v$0$i$lcssa>>>0)<($151>>>0);
	     if (!($152)) {
	      _abort();
	      // unreachable;
	     }
	     $153 = ((($v$0$i$lcssa)) + 24|0);
	     $154 = HEAP32[$153>>2]|0;
	     $155 = ((($v$0$i$lcssa)) + 12|0);
	     $156 = HEAP32[$155>>2]|0;
	     $157 = ($156|0)==($v$0$i$lcssa|0);
	     do {
	      if ($157) {
	       $167 = ((($v$0$i$lcssa)) + 20|0);
	       $168 = HEAP32[$167>>2]|0;
	       $169 = ($168|0)==(0|0);
	       if ($169) {
	        $170 = ((($v$0$i$lcssa)) + 16|0);
	        $171 = HEAP32[$170>>2]|0;
	        $172 = ($171|0)==(0|0);
	        if ($172) {
	         $R$1$i = 0;
	         break;
	        } else {
	         $R$0$i = $171;$RP$0$i = $170;
	        }
	       } else {
	        $R$0$i = $168;$RP$0$i = $167;
	       }
	       while(1) {
	        $173 = ((($R$0$i)) + 20|0);
	        $174 = HEAP32[$173>>2]|0;
	        $175 = ($174|0)==(0|0);
	        if (!($175)) {
	         $R$0$i = $174;$RP$0$i = $173;
	         continue;
	        }
	        $176 = ((($R$0$i)) + 16|0);
	        $177 = HEAP32[$176>>2]|0;
	        $178 = ($177|0)==(0|0);
	        if ($178) {
	         $R$0$i$lcssa = $R$0$i;$RP$0$i$lcssa = $RP$0$i;
	         break;
	        } else {
	         $R$0$i = $177;$RP$0$i = $176;
	        }
	       }
	       $179 = ($RP$0$i$lcssa>>>0)<($149>>>0);
	       if ($179) {
	        _abort();
	        // unreachable;
	       } else {
	        HEAP32[$RP$0$i$lcssa>>2] = 0;
	        $R$1$i = $R$0$i$lcssa;
	        break;
	       }
	      } else {
	       $158 = ((($v$0$i$lcssa)) + 8|0);
	       $159 = HEAP32[$158>>2]|0;
	       $160 = ($159>>>0)<($149>>>0);
	       if ($160) {
	        _abort();
	        // unreachable;
	       }
	       $161 = ((($159)) + 12|0);
	       $162 = HEAP32[$161>>2]|0;
	       $163 = ($162|0)==($v$0$i$lcssa|0);
	       if (!($163)) {
	        _abort();
	        // unreachable;
	       }
	       $164 = ((($156)) + 8|0);
	       $165 = HEAP32[$164>>2]|0;
	       $166 = ($165|0)==($v$0$i$lcssa|0);
	       if ($166) {
	        HEAP32[$161>>2] = $156;
	        HEAP32[$164>>2] = $159;
	        $R$1$i = $156;
	        break;
	       } else {
	        _abort();
	        // unreachable;
	       }
	      }
	     } while(0);
	     $180 = ($154|0)==(0|0);
	     do {
	      if (!($180)) {
	       $181 = ((($v$0$i$lcssa)) + 28|0);
	       $182 = HEAP32[$181>>2]|0;
	       $183 = (380 + ($182<<2)|0);
	       $184 = HEAP32[$183>>2]|0;
	       $185 = ($v$0$i$lcssa|0)==($184|0);
	       if ($185) {
	        HEAP32[$183>>2] = $R$1$i;
	        $cond$i = ($R$1$i|0)==(0|0);
	        if ($cond$i) {
	         $186 = 1 << $182;
	         $187 = $186 ^ -1;
	         $188 = HEAP32[(80)>>2]|0;
	         $189 = $188 & $187;
	         HEAP32[(80)>>2] = $189;
	         break;
	        }
	       } else {
	        $190 = HEAP32[(92)>>2]|0;
	        $191 = ($154>>>0)<($190>>>0);
	        if ($191) {
	         _abort();
	         // unreachable;
	        }
	        $192 = ((($154)) + 16|0);
	        $193 = HEAP32[$192>>2]|0;
	        $194 = ($193|0)==($v$0$i$lcssa|0);
	        if ($194) {
	         HEAP32[$192>>2] = $R$1$i;
	        } else {
	         $195 = ((($154)) + 20|0);
	         HEAP32[$195>>2] = $R$1$i;
	        }
	        $196 = ($R$1$i|0)==(0|0);
	        if ($196) {
	         break;
	        }
	       }
	       $197 = HEAP32[(92)>>2]|0;
	       $198 = ($R$1$i>>>0)<($197>>>0);
	       if ($198) {
	        _abort();
	        // unreachable;
	       }
	       $199 = ((($R$1$i)) + 24|0);
	       HEAP32[$199>>2] = $154;
	       $200 = ((($v$0$i$lcssa)) + 16|0);
	       $201 = HEAP32[$200>>2]|0;
	       $202 = ($201|0)==(0|0);
	       do {
	        if (!($202)) {
	         $203 = ($201>>>0)<($197>>>0);
	         if ($203) {
	          _abort();
	          // unreachable;
	         } else {
	          $204 = ((($R$1$i)) + 16|0);
	          HEAP32[$204>>2] = $201;
	          $205 = ((($201)) + 24|0);
	          HEAP32[$205>>2] = $R$1$i;
	          break;
	         }
	        }
	       } while(0);
	       $206 = ((($v$0$i$lcssa)) + 20|0);
	       $207 = HEAP32[$206>>2]|0;
	       $208 = ($207|0)==(0|0);
	       if (!($208)) {
	        $209 = HEAP32[(92)>>2]|0;
	        $210 = ($207>>>0)<($209>>>0);
	        if ($210) {
	         _abort();
	         // unreachable;
	        } else {
	         $211 = ((($R$1$i)) + 20|0);
	         HEAP32[$211>>2] = $207;
	         $212 = ((($207)) + 24|0);
	         HEAP32[$212>>2] = $R$1$i;
	         break;
	        }
	       }
	      }
	     } while(0);
	     $213 = ($rsize$0$i$lcssa>>>0)<(16);
	     if ($213) {
	      $214 = (($rsize$0$i$lcssa) + ($4))|0;
	      $215 = $214 | 3;
	      $216 = ((($v$0$i$lcssa)) + 4|0);
	      HEAP32[$216>>2] = $215;
	      $$sum4$i = (($214) + 4)|0;
	      $217 = (($v$0$i$lcssa) + ($$sum4$i)|0);
	      $218 = HEAP32[$217>>2]|0;
	      $219 = $218 | 1;
	      HEAP32[$217>>2] = $219;
	     } else {
	      $220 = $4 | 3;
	      $221 = ((($v$0$i$lcssa)) + 4|0);
	      HEAP32[$221>>2] = $220;
	      $222 = $rsize$0$i$lcssa | 1;
	      $$sum$i35 = $4 | 4;
	      $223 = (($v$0$i$lcssa) + ($$sum$i35)|0);
	      HEAP32[$223>>2] = $222;
	      $$sum1$i = (($rsize$0$i$lcssa) + ($4))|0;
	      $224 = (($v$0$i$lcssa) + ($$sum1$i)|0);
	      HEAP32[$224>>2] = $rsize$0$i$lcssa;
	      $225 = HEAP32[(84)>>2]|0;
	      $226 = ($225|0)==(0);
	      if (!($226)) {
	       $227 = HEAP32[(96)>>2]|0;
	       $228 = $225 >>> 3;
	       $229 = $228 << 1;
	       $230 = (116 + ($229<<2)|0);
	       $231 = HEAP32[76>>2]|0;
	       $232 = 1 << $228;
	       $233 = $231 & $232;
	       $234 = ($233|0)==(0);
	       if ($234) {
	        $235 = $231 | $232;
	        HEAP32[76>>2] = $235;
	        $$pre$i = (($229) + 2)|0;
	        $$pre8$i = (116 + ($$pre$i<<2)|0);
	        $$pre$phi$iZ2D = $$pre8$i;$F1$0$i = $230;
	       } else {
	        $$sum3$i = (($229) + 2)|0;
	        $236 = (116 + ($$sum3$i<<2)|0);
	        $237 = HEAP32[$236>>2]|0;
	        $238 = HEAP32[(92)>>2]|0;
	        $239 = ($237>>>0)<($238>>>0);
	        if ($239) {
	         _abort();
	         // unreachable;
	        } else {
	         $$pre$phi$iZ2D = $236;$F1$0$i = $237;
	        }
	       }
	       HEAP32[$$pre$phi$iZ2D>>2] = $227;
	       $240 = ((($F1$0$i)) + 12|0);
	       HEAP32[$240>>2] = $227;
	       $241 = ((($227)) + 8|0);
	       HEAP32[$241>>2] = $F1$0$i;
	       $242 = ((($227)) + 12|0);
	       HEAP32[$242>>2] = $230;
	      }
	      HEAP32[(84)>>2] = $rsize$0$i$lcssa;
	      HEAP32[(96)>>2] = $151;
	     }
	     $243 = ((($v$0$i$lcssa)) + 8|0);
	     $mem$0 = $243;
	     return ($mem$0|0);
	    }
	   } else {
	    $nb$0 = $4;
	   }
	  } else {
	   $244 = ($bytes>>>0)>(4294967231);
	   if ($244) {
	    $nb$0 = -1;
	   } else {
	    $245 = (($bytes) + 11)|0;
	    $246 = $245 & -8;
	    $247 = HEAP32[(80)>>2]|0;
	    $248 = ($247|0)==(0);
	    if ($248) {
	     $nb$0 = $246;
	    } else {
	     $249 = (0 - ($246))|0;
	     $250 = $245 >>> 8;
	     $251 = ($250|0)==(0);
	     if ($251) {
	      $idx$0$i = 0;
	     } else {
	      $252 = ($246>>>0)>(16777215);
	      if ($252) {
	       $idx$0$i = 31;
	      } else {
	       $253 = (($250) + 1048320)|0;
	       $254 = $253 >>> 16;
	       $255 = $254 & 8;
	       $256 = $250 << $255;
	       $257 = (($256) + 520192)|0;
	       $258 = $257 >>> 16;
	       $259 = $258 & 4;
	       $260 = $259 | $255;
	       $261 = $256 << $259;
	       $262 = (($261) + 245760)|0;
	       $263 = $262 >>> 16;
	       $264 = $263 & 2;
	       $265 = $260 | $264;
	       $266 = (14 - ($265))|0;
	       $267 = $261 << $264;
	       $268 = $267 >>> 15;
	       $269 = (($266) + ($268))|0;
	       $270 = $269 << 1;
	       $271 = (($269) + 7)|0;
	       $272 = $246 >>> $271;
	       $273 = $272 & 1;
	       $274 = $273 | $270;
	       $idx$0$i = $274;
	      }
	     }
	     $275 = (380 + ($idx$0$i<<2)|0);
	     $276 = HEAP32[$275>>2]|0;
	     $277 = ($276|0)==(0|0);
	     L123: do {
	      if ($277) {
	       $rsize$2$i = $249;$t$1$i = 0;$v$2$i = 0;
	       label = 86;
	      } else {
	       $278 = ($idx$0$i|0)==(31);
	       $279 = $idx$0$i >>> 1;
	       $280 = (25 - ($279))|0;
	       $281 = $278 ? 0 : $280;
	       $282 = $246 << $281;
	       $rsize$0$i15 = $249;$rst$0$i = 0;$sizebits$0$i = $282;$t$0$i14 = $276;$v$0$i16 = 0;
	       while(1) {
	        $283 = ((($t$0$i14)) + 4|0);
	        $284 = HEAP32[$283>>2]|0;
	        $285 = $284 & -8;
	        $286 = (($285) - ($246))|0;
	        $287 = ($286>>>0)<($rsize$0$i15>>>0);
	        if ($287) {
	         $288 = ($285|0)==($246|0);
	         if ($288) {
	          $rsize$331$i = $286;$t$230$i = $t$0$i14;$v$332$i = $t$0$i14;
	          label = 90;
	          break L123;
	         } else {
	          $rsize$1$i = $286;$v$1$i = $t$0$i14;
	         }
	        } else {
	         $rsize$1$i = $rsize$0$i15;$v$1$i = $v$0$i16;
	        }
	        $289 = ((($t$0$i14)) + 20|0);
	        $290 = HEAP32[$289>>2]|0;
	        $291 = $sizebits$0$i >>> 31;
	        $292 = (((($t$0$i14)) + 16|0) + ($291<<2)|0);
	        $293 = HEAP32[$292>>2]|0;
	        $294 = ($290|0)==(0|0);
	        $295 = ($290|0)==($293|0);
	        $or$cond19$i = $294 | $295;
	        $rst$1$i = $or$cond19$i ? $rst$0$i : $290;
	        $296 = ($293|0)==(0|0);
	        $297 = $sizebits$0$i << 1;
	        if ($296) {
	         $rsize$2$i = $rsize$1$i;$t$1$i = $rst$1$i;$v$2$i = $v$1$i;
	         label = 86;
	         break;
	        } else {
	         $rsize$0$i15 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $297;$t$0$i14 = $293;$v$0$i16 = $v$1$i;
	        }
	       }
	      }
	     } while(0);
	     if ((label|0) == 86) {
	      $298 = ($t$1$i|0)==(0|0);
	      $299 = ($v$2$i|0)==(0|0);
	      $or$cond$i = $298 & $299;
	      if ($or$cond$i) {
	       $300 = 2 << $idx$0$i;
	       $301 = (0 - ($300))|0;
	       $302 = $300 | $301;
	       $303 = $247 & $302;
	       $304 = ($303|0)==(0);
	       if ($304) {
	        $nb$0 = $246;
	        break;
	       }
	       $305 = (0 - ($303))|0;
	       $306 = $303 & $305;
	       $307 = (($306) + -1)|0;
	       $308 = $307 >>> 12;
	       $309 = $308 & 16;
	       $310 = $307 >>> $309;
	       $311 = $310 >>> 5;
	       $312 = $311 & 8;
	       $313 = $312 | $309;
	       $314 = $310 >>> $312;
	       $315 = $314 >>> 2;
	       $316 = $315 & 4;
	       $317 = $313 | $316;
	       $318 = $314 >>> $316;
	       $319 = $318 >>> 1;
	       $320 = $319 & 2;
	       $321 = $317 | $320;
	       $322 = $318 >>> $320;
	       $323 = $322 >>> 1;
	       $324 = $323 & 1;
	       $325 = $321 | $324;
	       $326 = $322 >>> $324;
	       $327 = (($325) + ($326))|0;
	       $328 = (380 + ($327<<2)|0);
	       $329 = HEAP32[$328>>2]|0;
	       $t$2$ph$i = $329;$v$3$ph$i = 0;
	      } else {
	       $t$2$ph$i = $t$1$i;$v$3$ph$i = $v$2$i;
	      }
	      $330 = ($t$2$ph$i|0)==(0|0);
	      if ($330) {
	       $rsize$3$lcssa$i = $rsize$2$i;$v$3$lcssa$i = $v$3$ph$i;
	      } else {
	       $rsize$331$i = $rsize$2$i;$t$230$i = $t$2$ph$i;$v$332$i = $v$3$ph$i;
	       label = 90;
	      }
	     }
	     if ((label|0) == 90) {
	      while(1) {
	       label = 0;
	       $331 = ((($t$230$i)) + 4|0);
	       $332 = HEAP32[$331>>2]|0;
	       $333 = $332 & -8;
	       $334 = (($333) - ($246))|0;
	       $335 = ($334>>>0)<($rsize$331$i>>>0);
	       $$rsize$3$i = $335 ? $334 : $rsize$331$i;
	       $t$2$v$3$i = $335 ? $t$230$i : $v$332$i;
	       $336 = ((($t$230$i)) + 16|0);
	       $337 = HEAP32[$336>>2]|0;
	       $338 = ($337|0)==(0|0);
	       if (!($338)) {
	        $rsize$331$i = $$rsize$3$i;$t$230$i = $337;$v$332$i = $t$2$v$3$i;
	        label = 90;
	        continue;
	       }
	       $339 = ((($t$230$i)) + 20|0);
	       $340 = HEAP32[$339>>2]|0;
	       $341 = ($340|0)==(0|0);
	       if ($341) {
	        $rsize$3$lcssa$i = $$rsize$3$i;$v$3$lcssa$i = $t$2$v$3$i;
	        break;
	       } else {
	        $rsize$331$i = $$rsize$3$i;$t$230$i = $340;$v$332$i = $t$2$v$3$i;
	        label = 90;
	       }
	      }
	     }
	     $342 = ($v$3$lcssa$i|0)==(0|0);
	     if ($342) {
	      $nb$0 = $246;
	     } else {
	      $343 = HEAP32[(84)>>2]|0;
	      $344 = (($343) - ($246))|0;
	      $345 = ($rsize$3$lcssa$i>>>0)<($344>>>0);
	      if ($345) {
	       $346 = HEAP32[(92)>>2]|0;
	       $347 = ($v$3$lcssa$i>>>0)<($346>>>0);
	       if ($347) {
	        _abort();
	        // unreachable;
	       }
	       $348 = (($v$3$lcssa$i) + ($246)|0);
	       $349 = ($v$3$lcssa$i>>>0)<($348>>>0);
	       if (!($349)) {
	        _abort();
	        // unreachable;
	       }
	       $350 = ((($v$3$lcssa$i)) + 24|0);
	       $351 = HEAP32[$350>>2]|0;
	       $352 = ((($v$3$lcssa$i)) + 12|0);
	       $353 = HEAP32[$352>>2]|0;
	       $354 = ($353|0)==($v$3$lcssa$i|0);
	       do {
	        if ($354) {
	         $364 = ((($v$3$lcssa$i)) + 20|0);
	         $365 = HEAP32[$364>>2]|0;
	         $366 = ($365|0)==(0|0);
	         if ($366) {
	          $367 = ((($v$3$lcssa$i)) + 16|0);
	          $368 = HEAP32[$367>>2]|0;
	          $369 = ($368|0)==(0|0);
	          if ($369) {
	           $R$1$i20 = 0;
	           break;
	          } else {
	           $R$0$i18 = $368;$RP$0$i17 = $367;
	          }
	         } else {
	          $R$0$i18 = $365;$RP$0$i17 = $364;
	         }
	         while(1) {
	          $370 = ((($R$0$i18)) + 20|0);
	          $371 = HEAP32[$370>>2]|0;
	          $372 = ($371|0)==(0|0);
	          if (!($372)) {
	           $R$0$i18 = $371;$RP$0$i17 = $370;
	           continue;
	          }
	          $373 = ((($R$0$i18)) + 16|0);
	          $374 = HEAP32[$373>>2]|0;
	          $375 = ($374|0)==(0|0);
	          if ($375) {
	           $R$0$i18$lcssa = $R$0$i18;$RP$0$i17$lcssa = $RP$0$i17;
	           break;
	          } else {
	           $R$0$i18 = $374;$RP$0$i17 = $373;
	          }
	         }
	         $376 = ($RP$0$i17$lcssa>>>0)<($346>>>0);
	         if ($376) {
	          _abort();
	          // unreachable;
	         } else {
	          HEAP32[$RP$0$i17$lcssa>>2] = 0;
	          $R$1$i20 = $R$0$i18$lcssa;
	          break;
	         }
	        } else {
	         $355 = ((($v$3$lcssa$i)) + 8|0);
	         $356 = HEAP32[$355>>2]|0;
	         $357 = ($356>>>0)<($346>>>0);
	         if ($357) {
	          _abort();
	          // unreachable;
	         }
	         $358 = ((($356)) + 12|0);
	         $359 = HEAP32[$358>>2]|0;
	         $360 = ($359|0)==($v$3$lcssa$i|0);
	         if (!($360)) {
	          _abort();
	          // unreachable;
	         }
	         $361 = ((($353)) + 8|0);
	         $362 = HEAP32[$361>>2]|0;
	         $363 = ($362|0)==($v$3$lcssa$i|0);
	         if ($363) {
	          HEAP32[$358>>2] = $353;
	          HEAP32[$361>>2] = $356;
	          $R$1$i20 = $353;
	          break;
	         } else {
	          _abort();
	          // unreachable;
	         }
	        }
	       } while(0);
	       $377 = ($351|0)==(0|0);
	       do {
	        if (!($377)) {
	         $378 = ((($v$3$lcssa$i)) + 28|0);
	         $379 = HEAP32[$378>>2]|0;
	         $380 = (380 + ($379<<2)|0);
	         $381 = HEAP32[$380>>2]|0;
	         $382 = ($v$3$lcssa$i|0)==($381|0);
	         if ($382) {
	          HEAP32[$380>>2] = $R$1$i20;
	          $cond$i21 = ($R$1$i20|0)==(0|0);
	          if ($cond$i21) {
	           $383 = 1 << $379;
	           $384 = $383 ^ -1;
	           $385 = HEAP32[(80)>>2]|0;
	           $386 = $385 & $384;
	           HEAP32[(80)>>2] = $386;
	           break;
	          }
	         } else {
	          $387 = HEAP32[(92)>>2]|0;
	          $388 = ($351>>>0)<($387>>>0);
	          if ($388) {
	           _abort();
	           // unreachable;
	          }
	          $389 = ((($351)) + 16|0);
	          $390 = HEAP32[$389>>2]|0;
	          $391 = ($390|0)==($v$3$lcssa$i|0);
	          if ($391) {
	           HEAP32[$389>>2] = $R$1$i20;
	          } else {
	           $392 = ((($351)) + 20|0);
	           HEAP32[$392>>2] = $R$1$i20;
	          }
	          $393 = ($R$1$i20|0)==(0|0);
	          if ($393) {
	           break;
	          }
	         }
	         $394 = HEAP32[(92)>>2]|0;
	         $395 = ($R$1$i20>>>0)<($394>>>0);
	         if ($395) {
	          _abort();
	          // unreachable;
	         }
	         $396 = ((($R$1$i20)) + 24|0);
	         HEAP32[$396>>2] = $351;
	         $397 = ((($v$3$lcssa$i)) + 16|0);
	         $398 = HEAP32[$397>>2]|0;
	         $399 = ($398|0)==(0|0);
	         do {
	          if (!($399)) {
	           $400 = ($398>>>0)<($394>>>0);
	           if ($400) {
	            _abort();
	            // unreachable;
	           } else {
	            $401 = ((($R$1$i20)) + 16|0);
	            HEAP32[$401>>2] = $398;
	            $402 = ((($398)) + 24|0);
	            HEAP32[$402>>2] = $R$1$i20;
	            break;
	           }
	          }
	         } while(0);
	         $403 = ((($v$3$lcssa$i)) + 20|0);
	         $404 = HEAP32[$403>>2]|0;
	         $405 = ($404|0)==(0|0);
	         if (!($405)) {
	          $406 = HEAP32[(92)>>2]|0;
	          $407 = ($404>>>0)<($406>>>0);
	          if ($407) {
	           _abort();
	           // unreachable;
	          } else {
	           $408 = ((($R$1$i20)) + 20|0);
	           HEAP32[$408>>2] = $404;
	           $409 = ((($404)) + 24|0);
	           HEAP32[$409>>2] = $R$1$i20;
	           break;
	          }
	         }
	        }
	       } while(0);
	       $410 = ($rsize$3$lcssa$i>>>0)<(16);
	       L199: do {
	        if ($410) {
	         $411 = (($rsize$3$lcssa$i) + ($246))|0;
	         $412 = $411 | 3;
	         $413 = ((($v$3$lcssa$i)) + 4|0);
	         HEAP32[$413>>2] = $412;
	         $$sum18$i = (($411) + 4)|0;
	         $414 = (($v$3$lcssa$i) + ($$sum18$i)|0);
	         $415 = HEAP32[$414>>2]|0;
	         $416 = $415 | 1;
	         HEAP32[$414>>2] = $416;
	        } else {
	         $417 = $246 | 3;
	         $418 = ((($v$3$lcssa$i)) + 4|0);
	         HEAP32[$418>>2] = $417;
	         $419 = $rsize$3$lcssa$i | 1;
	         $$sum$i2334 = $246 | 4;
	         $420 = (($v$3$lcssa$i) + ($$sum$i2334)|0);
	         HEAP32[$420>>2] = $419;
	         $$sum1$i24 = (($rsize$3$lcssa$i) + ($246))|0;
	         $421 = (($v$3$lcssa$i) + ($$sum1$i24)|0);
	         HEAP32[$421>>2] = $rsize$3$lcssa$i;
	         $422 = $rsize$3$lcssa$i >>> 3;
	         $423 = ($rsize$3$lcssa$i>>>0)<(256);
	         if ($423) {
	          $424 = $422 << 1;
	          $425 = (116 + ($424<<2)|0);
	          $426 = HEAP32[76>>2]|0;
	          $427 = 1 << $422;
	          $428 = $426 & $427;
	          $429 = ($428|0)==(0);
	          if ($429) {
	           $430 = $426 | $427;
	           HEAP32[76>>2] = $430;
	           $$pre$i25 = (($424) + 2)|0;
	           $$pre43$i = (116 + ($$pre$i25<<2)|0);
	           $$pre$phi$i26Z2D = $$pre43$i;$F5$0$i = $425;
	          } else {
	           $$sum17$i = (($424) + 2)|0;
	           $431 = (116 + ($$sum17$i<<2)|0);
	           $432 = HEAP32[$431>>2]|0;
	           $433 = HEAP32[(92)>>2]|0;
	           $434 = ($432>>>0)<($433>>>0);
	           if ($434) {
	            _abort();
	            // unreachable;
	           } else {
	            $$pre$phi$i26Z2D = $431;$F5$0$i = $432;
	           }
	          }
	          HEAP32[$$pre$phi$i26Z2D>>2] = $348;
	          $435 = ((($F5$0$i)) + 12|0);
	          HEAP32[$435>>2] = $348;
	          $$sum15$i = (($246) + 8)|0;
	          $436 = (($v$3$lcssa$i) + ($$sum15$i)|0);
	          HEAP32[$436>>2] = $F5$0$i;
	          $$sum16$i = (($246) + 12)|0;
	          $437 = (($v$3$lcssa$i) + ($$sum16$i)|0);
	          HEAP32[$437>>2] = $425;
	          break;
	         }
	         $438 = $rsize$3$lcssa$i >>> 8;
	         $439 = ($438|0)==(0);
	         if ($439) {
	          $I7$0$i = 0;
	         } else {
	          $440 = ($rsize$3$lcssa$i>>>0)>(16777215);
	          if ($440) {
	           $I7$0$i = 31;
	          } else {
	           $441 = (($438) + 1048320)|0;
	           $442 = $441 >>> 16;
	           $443 = $442 & 8;
	           $444 = $438 << $443;
	           $445 = (($444) + 520192)|0;
	           $446 = $445 >>> 16;
	           $447 = $446 & 4;
	           $448 = $447 | $443;
	           $449 = $444 << $447;
	           $450 = (($449) + 245760)|0;
	           $451 = $450 >>> 16;
	           $452 = $451 & 2;
	           $453 = $448 | $452;
	           $454 = (14 - ($453))|0;
	           $455 = $449 << $452;
	           $456 = $455 >>> 15;
	           $457 = (($454) + ($456))|0;
	           $458 = $457 << 1;
	           $459 = (($457) + 7)|0;
	           $460 = $rsize$3$lcssa$i >>> $459;
	           $461 = $460 & 1;
	           $462 = $461 | $458;
	           $I7$0$i = $462;
	          }
	         }
	         $463 = (380 + ($I7$0$i<<2)|0);
	         $$sum2$i = (($246) + 28)|0;
	         $464 = (($v$3$lcssa$i) + ($$sum2$i)|0);
	         HEAP32[$464>>2] = $I7$0$i;
	         $$sum3$i27 = (($246) + 16)|0;
	         $465 = (($v$3$lcssa$i) + ($$sum3$i27)|0);
	         $$sum4$i28 = (($246) + 20)|0;
	         $466 = (($v$3$lcssa$i) + ($$sum4$i28)|0);
	         HEAP32[$466>>2] = 0;
	         HEAP32[$465>>2] = 0;
	         $467 = HEAP32[(80)>>2]|0;
	         $468 = 1 << $I7$0$i;
	         $469 = $467 & $468;
	         $470 = ($469|0)==(0);
	         if ($470) {
	          $471 = $467 | $468;
	          HEAP32[(80)>>2] = $471;
	          HEAP32[$463>>2] = $348;
	          $$sum5$i = (($246) + 24)|0;
	          $472 = (($v$3$lcssa$i) + ($$sum5$i)|0);
	          HEAP32[$472>>2] = $463;
	          $$sum6$i = (($246) + 12)|0;
	          $473 = (($v$3$lcssa$i) + ($$sum6$i)|0);
	          HEAP32[$473>>2] = $348;
	          $$sum7$i = (($246) + 8)|0;
	          $474 = (($v$3$lcssa$i) + ($$sum7$i)|0);
	          HEAP32[$474>>2] = $348;
	          break;
	         }
	         $475 = HEAP32[$463>>2]|0;
	         $476 = ((($475)) + 4|0);
	         $477 = HEAP32[$476>>2]|0;
	         $478 = $477 & -8;
	         $479 = ($478|0)==($rsize$3$lcssa$i|0);
	         L217: do {
	          if ($479) {
	           $T$0$lcssa$i = $475;
	          } else {
	           $480 = ($I7$0$i|0)==(31);
	           $481 = $I7$0$i >>> 1;
	           $482 = (25 - ($481))|0;
	           $483 = $480 ? 0 : $482;
	           $484 = $rsize$3$lcssa$i << $483;
	           $K12$029$i = $484;$T$028$i = $475;
	           while(1) {
	            $491 = $K12$029$i >>> 31;
	            $492 = (((($T$028$i)) + 16|0) + ($491<<2)|0);
	            $487 = HEAP32[$492>>2]|0;
	            $493 = ($487|0)==(0|0);
	            if ($493) {
	             $$lcssa232 = $492;$T$028$i$lcssa = $T$028$i;
	             break;
	            }
	            $485 = $K12$029$i << 1;
	            $486 = ((($487)) + 4|0);
	            $488 = HEAP32[$486>>2]|0;
	            $489 = $488 & -8;
	            $490 = ($489|0)==($rsize$3$lcssa$i|0);
	            if ($490) {
	             $T$0$lcssa$i = $487;
	             break L217;
	            } else {
	             $K12$029$i = $485;$T$028$i = $487;
	            }
	           }
	           $494 = HEAP32[(92)>>2]|0;
	           $495 = ($$lcssa232>>>0)<($494>>>0);
	           if ($495) {
	            _abort();
	            // unreachable;
	           } else {
	            HEAP32[$$lcssa232>>2] = $348;
	            $$sum11$i = (($246) + 24)|0;
	            $496 = (($v$3$lcssa$i) + ($$sum11$i)|0);
	            HEAP32[$496>>2] = $T$028$i$lcssa;
	            $$sum12$i = (($246) + 12)|0;
	            $497 = (($v$3$lcssa$i) + ($$sum12$i)|0);
	            HEAP32[$497>>2] = $348;
	            $$sum13$i = (($246) + 8)|0;
	            $498 = (($v$3$lcssa$i) + ($$sum13$i)|0);
	            HEAP32[$498>>2] = $348;
	            break L199;
	           }
	          }
	         } while(0);
	         $499 = ((($T$0$lcssa$i)) + 8|0);
	         $500 = HEAP32[$499>>2]|0;
	         $501 = HEAP32[(92)>>2]|0;
	         $502 = ($500>>>0)>=($501>>>0);
	         $not$$i = ($T$0$lcssa$i>>>0)>=($501>>>0);
	         $503 = $502 & $not$$i;
	         if ($503) {
	          $504 = ((($500)) + 12|0);
	          HEAP32[$504>>2] = $348;
	          HEAP32[$499>>2] = $348;
	          $$sum8$i = (($246) + 8)|0;
	          $505 = (($v$3$lcssa$i) + ($$sum8$i)|0);
	          HEAP32[$505>>2] = $500;
	          $$sum9$i = (($246) + 12)|0;
	          $506 = (($v$3$lcssa$i) + ($$sum9$i)|0);
	          HEAP32[$506>>2] = $T$0$lcssa$i;
	          $$sum10$i = (($246) + 24)|0;
	          $507 = (($v$3$lcssa$i) + ($$sum10$i)|0);
	          HEAP32[$507>>2] = 0;
	          break;
	         } else {
	          _abort();
	          // unreachable;
	         }
	        }
	       } while(0);
	       $508 = ((($v$3$lcssa$i)) + 8|0);
	       $mem$0 = $508;
	       return ($mem$0|0);
	      } else {
	       $nb$0 = $246;
	      }
	     }
	    }
	   }
	  }
	 } while(0);
	 $509 = HEAP32[(84)>>2]|0;
	 $510 = ($509>>>0)<($nb$0>>>0);
	 if (!($510)) {
	  $511 = (($509) - ($nb$0))|0;
	  $512 = HEAP32[(96)>>2]|0;
	  $513 = ($511>>>0)>(15);
	  if ($513) {
	   $514 = (($512) + ($nb$0)|0);
	   HEAP32[(96)>>2] = $514;
	   HEAP32[(84)>>2] = $511;
	   $515 = $511 | 1;
	   $$sum2 = (($nb$0) + 4)|0;
	   $516 = (($512) + ($$sum2)|0);
	   HEAP32[$516>>2] = $515;
	   $517 = (($512) + ($509)|0);
	   HEAP32[$517>>2] = $511;
	   $518 = $nb$0 | 3;
	   $519 = ((($512)) + 4|0);
	   HEAP32[$519>>2] = $518;
	  } else {
	   HEAP32[(84)>>2] = 0;
	   HEAP32[(96)>>2] = 0;
	   $520 = $509 | 3;
	   $521 = ((($512)) + 4|0);
	   HEAP32[$521>>2] = $520;
	   $$sum1 = (($509) + 4)|0;
	   $522 = (($512) + ($$sum1)|0);
	   $523 = HEAP32[$522>>2]|0;
	   $524 = $523 | 1;
	   HEAP32[$522>>2] = $524;
	  }
	  $525 = ((($512)) + 8|0);
	  $mem$0 = $525;
	  return ($mem$0|0);
	 }
	 $526 = HEAP32[(88)>>2]|0;
	 $527 = ($526>>>0)>($nb$0>>>0);
	 if ($527) {
	  $528 = (($526) - ($nb$0))|0;
	  HEAP32[(88)>>2] = $528;
	  $529 = HEAP32[(100)>>2]|0;
	  $530 = (($529) + ($nb$0)|0);
	  HEAP32[(100)>>2] = $530;
	  $531 = $528 | 1;
	  $$sum = (($nb$0) + 4)|0;
	  $532 = (($529) + ($$sum)|0);
	  HEAP32[$532>>2] = $531;
	  $533 = $nb$0 | 3;
	  $534 = ((($529)) + 4|0);
	  HEAP32[$534>>2] = $533;
	  $535 = ((($529)) + 8|0);
	  $mem$0 = $535;
	  return ($mem$0|0);
	 }
	 $536 = HEAP32[548>>2]|0;
	 $537 = ($536|0)==(0);
	 do {
	  if ($537) {
	   $538 = (_sysconf(30)|0);
	   $539 = (($538) + -1)|0;
	   $540 = $539 & $538;
	   $541 = ($540|0)==(0);
	   if ($541) {
	    HEAP32[(556)>>2] = $538;
	    HEAP32[(552)>>2] = $538;
	    HEAP32[(560)>>2] = -1;
	    HEAP32[(564)>>2] = -1;
	    HEAP32[(568)>>2] = 0;
	    HEAP32[(520)>>2] = 0;
	    $542 = (_time((0|0))|0);
	    $543 = $542 & -16;
	    $544 = $543 ^ 1431655768;
	    HEAP32[548>>2] = $544;
	    break;
	   } else {
	    _abort();
	    // unreachable;
	   }
	  }
	 } while(0);
	 $545 = (($nb$0) + 48)|0;
	 $546 = HEAP32[(556)>>2]|0;
	 $547 = (($nb$0) + 47)|0;
	 $548 = (($546) + ($547))|0;
	 $549 = (0 - ($546))|0;
	 $550 = $548 & $549;
	 $551 = ($550>>>0)>($nb$0>>>0);
	 if (!($551)) {
	  $mem$0 = 0;
	  return ($mem$0|0);
	 }
	 $552 = HEAP32[(516)>>2]|0;
	 $553 = ($552|0)==(0);
	 if (!($553)) {
	  $554 = HEAP32[(508)>>2]|0;
	  $555 = (($554) + ($550))|0;
	  $556 = ($555>>>0)<=($554>>>0);
	  $557 = ($555>>>0)>($552>>>0);
	  $or$cond1$i = $556 | $557;
	  if ($or$cond1$i) {
	   $mem$0 = 0;
	   return ($mem$0|0);
	  }
	 }
	 $558 = HEAP32[(520)>>2]|0;
	 $559 = $558 & 4;
	 $560 = ($559|0)==(0);
	 L258: do {
	  if ($560) {
	   $561 = HEAP32[(100)>>2]|0;
	   $562 = ($561|0)==(0|0);
	   L260: do {
	    if ($562) {
	     label = 174;
	    } else {
	     $sp$0$i$i = (524);
	     while(1) {
	      $563 = HEAP32[$sp$0$i$i>>2]|0;
	      $564 = ($563>>>0)>($561>>>0);
	      if (!($564)) {
	       $565 = ((($sp$0$i$i)) + 4|0);
	       $566 = HEAP32[$565>>2]|0;
	       $567 = (($563) + ($566)|0);
	       $568 = ($567>>>0)>($561>>>0);
	       if ($568) {
	        $$lcssa228 = $sp$0$i$i;$$lcssa230 = $565;
	        break;
	       }
	      }
	      $569 = ((($sp$0$i$i)) + 8|0);
	      $570 = HEAP32[$569>>2]|0;
	      $571 = ($570|0)==(0|0);
	      if ($571) {
	       label = 174;
	       break L260;
	      } else {
	       $sp$0$i$i = $570;
	      }
	     }
	     $594 = HEAP32[(88)>>2]|0;
	     $595 = (($548) - ($594))|0;
	     $596 = $595 & $549;
	     $597 = ($596>>>0)<(2147483647);
	     if ($597) {
	      $598 = (_sbrk(($596|0))|0);
	      $599 = HEAP32[$$lcssa228>>2]|0;
	      $600 = HEAP32[$$lcssa230>>2]|0;
	      $601 = (($599) + ($600)|0);
	      $602 = ($598|0)==($601|0);
	      $$3$i = $602 ? $596 : 0;
	      if ($602) {
	       $603 = ($598|0)==((-1)|0);
	       if ($603) {
	        $tsize$0323944$i = $$3$i;
	       } else {
	        $tbase$255$i = $598;$tsize$254$i = $$3$i;
	        label = 194;
	        break L258;
	       }
	      } else {
	       $br$0$ph$i = $598;$ssize$1$ph$i = $596;$tsize$0$ph$i = $$3$i;
	       label = 184;
	      }
	     } else {
	      $tsize$0323944$i = 0;
	     }
	    }
	   } while(0);
	   do {
	    if ((label|0) == 174) {
	     $572 = (_sbrk(0)|0);
	     $573 = ($572|0)==((-1)|0);
	     if ($573) {
	      $tsize$0323944$i = 0;
	     } else {
	      $574 = $572;
	      $575 = HEAP32[(552)>>2]|0;
	      $576 = (($575) + -1)|0;
	      $577 = $576 & $574;
	      $578 = ($577|0)==(0);
	      if ($578) {
	       $ssize$0$i = $550;
	      } else {
	       $579 = (($576) + ($574))|0;
	       $580 = (0 - ($575))|0;
	       $581 = $579 & $580;
	       $582 = (($550) - ($574))|0;
	       $583 = (($582) + ($581))|0;
	       $ssize$0$i = $583;
	      }
	      $584 = HEAP32[(508)>>2]|0;
	      $585 = (($584) + ($ssize$0$i))|0;
	      $586 = ($ssize$0$i>>>0)>($nb$0>>>0);
	      $587 = ($ssize$0$i>>>0)<(2147483647);
	      $or$cond$i30 = $586 & $587;
	      if ($or$cond$i30) {
	       $588 = HEAP32[(516)>>2]|0;
	       $589 = ($588|0)==(0);
	       if (!($589)) {
	        $590 = ($585>>>0)<=($584>>>0);
	        $591 = ($585>>>0)>($588>>>0);
	        $or$cond2$i = $590 | $591;
	        if ($or$cond2$i) {
	         $tsize$0323944$i = 0;
	         break;
	        }
	       }
	       $592 = (_sbrk(($ssize$0$i|0))|0);
	       $593 = ($592|0)==($572|0);
	       $ssize$0$$i = $593 ? $ssize$0$i : 0;
	       if ($593) {
	        $tbase$255$i = $572;$tsize$254$i = $ssize$0$$i;
	        label = 194;
	        break L258;
	       } else {
	        $br$0$ph$i = $592;$ssize$1$ph$i = $ssize$0$i;$tsize$0$ph$i = $ssize$0$$i;
	        label = 184;
	       }
	      } else {
	       $tsize$0323944$i = 0;
	      }
	     }
	    }
	   } while(0);
	   L280: do {
	    if ((label|0) == 184) {
	     $604 = (0 - ($ssize$1$ph$i))|0;
	     $605 = ($br$0$ph$i|0)!=((-1)|0);
	     $606 = ($ssize$1$ph$i>>>0)<(2147483647);
	     $or$cond5$i = $606 & $605;
	     $607 = ($545>>>0)>($ssize$1$ph$i>>>0);
	     $or$cond6$i = $607 & $or$cond5$i;
	     do {
	      if ($or$cond6$i) {
	       $608 = HEAP32[(556)>>2]|0;
	       $609 = (($547) - ($ssize$1$ph$i))|0;
	       $610 = (($609) + ($608))|0;
	       $611 = (0 - ($608))|0;
	       $612 = $610 & $611;
	       $613 = ($612>>>0)<(2147483647);
	       if ($613) {
	        $614 = (_sbrk(($612|0))|0);
	        $615 = ($614|0)==((-1)|0);
	        if ($615) {
	         (_sbrk(($604|0))|0);
	         $tsize$0323944$i = $tsize$0$ph$i;
	         break L280;
	        } else {
	         $616 = (($612) + ($ssize$1$ph$i))|0;
	         $ssize$2$i = $616;
	         break;
	        }
	       } else {
	        $ssize$2$i = $ssize$1$ph$i;
	       }
	      } else {
	       $ssize$2$i = $ssize$1$ph$i;
	      }
	     } while(0);
	     $617 = ($br$0$ph$i|0)==((-1)|0);
	     if ($617) {
	      $tsize$0323944$i = $tsize$0$ph$i;
	     } else {
	      $tbase$255$i = $br$0$ph$i;$tsize$254$i = $ssize$2$i;
	      label = 194;
	      break L258;
	     }
	    }
	   } while(0);
	   $618 = HEAP32[(520)>>2]|0;
	   $619 = $618 | 4;
	   HEAP32[(520)>>2] = $619;
	   $tsize$1$i = $tsize$0323944$i;
	   label = 191;
	  } else {
	   $tsize$1$i = 0;
	   label = 191;
	  }
	 } while(0);
	 if ((label|0) == 191) {
	  $620 = ($550>>>0)<(2147483647);
	  if ($620) {
	   $621 = (_sbrk(($550|0))|0);
	   $622 = (_sbrk(0)|0);
	   $623 = ($621|0)!=((-1)|0);
	   $624 = ($622|0)!=((-1)|0);
	   $or$cond3$i = $623 & $624;
	   $625 = ($621>>>0)<($622>>>0);
	   $or$cond8$i = $625 & $or$cond3$i;
	   if ($or$cond8$i) {
	    $626 = $622;
	    $627 = $621;
	    $628 = (($626) - ($627))|0;
	    $629 = (($nb$0) + 40)|0;
	    $630 = ($628>>>0)>($629>>>0);
	    $$tsize$1$i = $630 ? $628 : $tsize$1$i;
	    if ($630) {
	     $tbase$255$i = $621;$tsize$254$i = $$tsize$1$i;
	     label = 194;
	    }
	   }
	  }
	 }
	 if ((label|0) == 194) {
	  $631 = HEAP32[(508)>>2]|0;
	  $632 = (($631) + ($tsize$254$i))|0;
	  HEAP32[(508)>>2] = $632;
	  $633 = HEAP32[(512)>>2]|0;
	  $634 = ($632>>>0)>($633>>>0);
	  if ($634) {
	   HEAP32[(512)>>2] = $632;
	  }
	  $635 = HEAP32[(100)>>2]|0;
	  $636 = ($635|0)==(0|0);
	  L299: do {
	   if ($636) {
	    $637 = HEAP32[(92)>>2]|0;
	    $638 = ($637|0)==(0|0);
	    $639 = ($tbase$255$i>>>0)<($637>>>0);
	    $or$cond9$i = $638 | $639;
	    if ($or$cond9$i) {
	     HEAP32[(92)>>2] = $tbase$255$i;
	    }
	    HEAP32[(524)>>2] = $tbase$255$i;
	    HEAP32[(528)>>2] = $tsize$254$i;
	    HEAP32[(536)>>2] = 0;
	    $640 = HEAP32[548>>2]|0;
	    HEAP32[(112)>>2] = $640;
	    HEAP32[(108)>>2] = -1;
	    $i$02$i$i = 0;
	    while(1) {
	     $641 = $i$02$i$i << 1;
	     $642 = (116 + ($641<<2)|0);
	     $$sum$i$i = (($641) + 3)|0;
	     $643 = (116 + ($$sum$i$i<<2)|0);
	     HEAP32[$643>>2] = $642;
	     $$sum1$i$i = (($641) + 2)|0;
	     $644 = (116 + ($$sum1$i$i<<2)|0);
	     HEAP32[$644>>2] = $642;
	     $645 = (($i$02$i$i) + 1)|0;
	     $exitcond$i$i = ($645|0)==(32);
	     if ($exitcond$i$i) {
	      break;
	     } else {
	      $i$02$i$i = $645;
	     }
	    }
	    $646 = (($tsize$254$i) + -40)|0;
	    $647 = ((($tbase$255$i)) + 8|0);
	    $648 = $647;
	    $649 = $648 & 7;
	    $650 = ($649|0)==(0);
	    $651 = (0 - ($648))|0;
	    $652 = $651 & 7;
	    $653 = $650 ? 0 : $652;
	    $654 = (($tbase$255$i) + ($653)|0);
	    $655 = (($646) - ($653))|0;
	    HEAP32[(100)>>2] = $654;
	    HEAP32[(88)>>2] = $655;
	    $656 = $655 | 1;
	    $$sum$i13$i = (($653) + 4)|0;
	    $657 = (($tbase$255$i) + ($$sum$i13$i)|0);
	    HEAP32[$657>>2] = $656;
	    $$sum2$i$i = (($tsize$254$i) + -36)|0;
	    $658 = (($tbase$255$i) + ($$sum2$i$i)|0);
	    HEAP32[$658>>2] = 40;
	    $659 = HEAP32[(564)>>2]|0;
	    HEAP32[(104)>>2] = $659;
	   } else {
	    $sp$084$i = (524);
	    while(1) {
	     $660 = HEAP32[$sp$084$i>>2]|0;
	     $661 = ((($sp$084$i)) + 4|0);
	     $662 = HEAP32[$661>>2]|0;
	     $663 = (($660) + ($662)|0);
	     $664 = ($tbase$255$i|0)==($663|0);
	     if ($664) {
	      $$lcssa222 = $660;$$lcssa224 = $661;$$lcssa226 = $662;$sp$084$i$lcssa = $sp$084$i;
	      label = 204;
	      break;
	     }
	     $665 = ((($sp$084$i)) + 8|0);
	     $666 = HEAP32[$665>>2]|0;
	     $667 = ($666|0)==(0|0);
	     if ($667) {
	      break;
	     } else {
	      $sp$084$i = $666;
	     }
	    }
	    if ((label|0) == 204) {
	     $668 = ((($sp$084$i$lcssa)) + 12|0);
	     $669 = HEAP32[$668>>2]|0;
	     $670 = $669 & 8;
	     $671 = ($670|0)==(0);
	     if ($671) {
	      $672 = ($635>>>0)>=($$lcssa222>>>0);
	      $673 = ($635>>>0)<($tbase$255$i>>>0);
	      $or$cond57$i = $673 & $672;
	      if ($or$cond57$i) {
	       $674 = (($$lcssa226) + ($tsize$254$i))|0;
	       HEAP32[$$lcssa224>>2] = $674;
	       $675 = HEAP32[(88)>>2]|0;
	       $676 = (($675) + ($tsize$254$i))|0;
	       $677 = ((($635)) + 8|0);
	       $678 = $677;
	       $679 = $678 & 7;
	       $680 = ($679|0)==(0);
	       $681 = (0 - ($678))|0;
	       $682 = $681 & 7;
	       $683 = $680 ? 0 : $682;
	       $684 = (($635) + ($683)|0);
	       $685 = (($676) - ($683))|0;
	       HEAP32[(100)>>2] = $684;
	       HEAP32[(88)>>2] = $685;
	       $686 = $685 | 1;
	       $$sum$i17$i = (($683) + 4)|0;
	       $687 = (($635) + ($$sum$i17$i)|0);
	       HEAP32[$687>>2] = $686;
	       $$sum2$i18$i = (($676) + 4)|0;
	       $688 = (($635) + ($$sum2$i18$i)|0);
	       HEAP32[$688>>2] = 40;
	       $689 = HEAP32[(564)>>2]|0;
	       HEAP32[(104)>>2] = $689;
	       break;
	      }
	     }
	    }
	    $690 = HEAP32[(92)>>2]|0;
	    $691 = ($tbase$255$i>>>0)<($690>>>0);
	    if ($691) {
	     HEAP32[(92)>>2] = $tbase$255$i;
	     $755 = $tbase$255$i;
	    } else {
	     $755 = $690;
	    }
	    $692 = (($tbase$255$i) + ($tsize$254$i)|0);
	    $sp$183$i = (524);
	    while(1) {
	     $693 = HEAP32[$sp$183$i>>2]|0;
	     $694 = ($693|0)==($692|0);
	     if ($694) {
	      $$lcssa219 = $sp$183$i;$sp$183$i$lcssa = $sp$183$i;
	      label = 212;
	      break;
	     }
	     $695 = ((($sp$183$i)) + 8|0);
	     $696 = HEAP32[$695>>2]|0;
	     $697 = ($696|0)==(0|0);
	     if ($697) {
	      $sp$0$i$i$i = (524);
	      break;
	     } else {
	      $sp$183$i = $696;
	     }
	    }
	    if ((label|0) == 212) {
	     $698 = ((($sp$183$i$lcssa)) + 12|0);
	     $699 = HEAP32[$698>>2]|0;
	     $700 = $699 & 8;
	     $701 = ($700|0)==(0);
	     if ($701) {
	      HEAP32[$$lcssa219>>2] = $tbase$255$i;
	      $702 = ((($sp$183$i$lcssa)) + 4|0);
	      $703 = HEAP32[$702>>2]|0;
	      $704 = (($703) + ($tsize$254$i))|0;
	      HEAP32[$702>>2] = $704;
	      $705 = ((($tbase$255$i)) + 8|0);
	      $706 = $705;
	      $707 = $706 & 7;
	      $708 = ($707|0)==(0);
	      $709 = (0 - ($706))|0;
	      $710 = $709 & 7;
	      $711 = $708 ? 0 : $710;
	      $712 = (($tbase$255$i) + ($711)|0);
	      $$sum112$i = (($tsize$254$i) + 8)|0;
	      $713 = (($tbase$255$i) + ($$sum112$i)|0);
	      $714 = $713;
	      $715 = $714 & 7;
	      $716 = ($715|0)==(0);
	      $717 = (0 - ($714))|0;
	      $718 = $717 & 7;
	      $719 = $716 ? 0 : $718;
	      $$sum113$i = (($719) + ($tsize$254$i))|0;
	      $720 = (($tbase$255$i) + ($$sum113$i)|0);
	      $721 = $720;
	      $722 = $712;
	      $723 = (($721) - ($722))|0;
	      $$sum$i19$i = (($711) + ($nb$0))|0;
	      $724 = (($tbase$255$i) + ($$sum$i19$i)|0);
	      $725 = (($723) - ($nb$0))|0;
	      $726 = $nb$0 | 3;
	      $$sum1$i20$i = (($711) + 4)|0;
	      $727 = (($tbase$255$i) + ($$sum1$i20$i)|0);
	      HEAP32[$727>>2] = $726;
	      $728 = ($720|0)==($635|0);
	      L324: do {
	       if ($728) {
	        $729 = HEAP32[(88)>>2]|0;
	        $730 = (($729) + ($725))|0;
	        HEAP32[(88)>>2] = $730;
	        HEAP32[(100)>>2] = $724;
	        $731 = $730 | 1;
	        $$sum42$i$i = (($$sum$i19$i) + 4)|0;
	        $732 = (($tbase$255$i) + ($$sum42$i$i)|0);
	        HEAP32[$732>>2] = $731;
	       } else {
	        $733 = HEAP32[(96)>>2]|0;
	        $734 = ($720|0)==($733|0);
	        if ($734) {
	         $735 = HEAP32[(84)>>2]|0;
	         $736 = (($735) + ($725))|0;
	         HEAP32[(84)>>2] = $736;
	         HEAP32[(96)>>2] = $724;
	         $737 = $736 | 1;
	         $$sum40$i$i = (($$sum$i19$i) + 4)|0;
	         $738 = (($tbase$255$i) + ($$sum40$i$i)|0);
	         HEAP32[$738>>2] = $737;
	         $$sum41$i$i = (($736) + ($$sum$i19$i))|0;
	         $739 = (($tbase$255$i) + ($$sum41$i$i)|0);
	         HEAP32[$739>>2] = $736;
	         break;
	        }
	        $$sum2$i21$i = (($tsize$254$i) + 4)|0;
	        $$sum114$i = (($$sum2$i21$i) + ($719))|0;
	        $740 = (($tbase$255$i) + ($$sum114$i)|0);
	        $741 = HEAP32[$740>>2]|0;
	        $742 = $741 & 3;
	        $743 = ($742|0)==(1);
	        if ($743) {
	         $744 = $741 & -8;
	         $745 = $741 >>> 3;
	         $746 = ($741>>>0)<(256);
	         L332: do {
	          if ($746) {
	           $$sum3738$i$i = $719 | 8;
	           $$sum124$i = (($$sum3738$i$i) + ($tsize$254$i))|0;
	           $747 = (($tbase$255$i) + ($$sum124$i)|0);
	           $748 = HEAP32[$747>>2]|0;
	           $$sum39$i$i = (($tsize$254$i) + 12)|0;
	           $$sum125$i = (($$sum39$i$i) + ($719))|0;
	           $749 = (($tbase$255$i) + ($$sum125$i)|0);
	           $750 = HEAP32[$749>>2]|0;
	           $751 = $745 << 1;
	           $752 = (116 + ($751<<2)|0);
	           $753 = ($748|0)==($752|0);
	           do {
	            if (!($753)) {
	             $754 = ($748>>>0)<($755>>>0);
	             if ($754) {
	              _abort();
	              // unreachable;
	             }
	             $756 = ((($748)) + 12|0);
	             $757 = HEAP32[$756>>2]|0;
	             $758 = ($757|0)==($720|0);
	             if ($758) {
	              break;
	             }
	             _abort();
	             // unreachable;
	            }
	           } while(0);
	           $759 = ($750|0)==($748|0);
	           if ($759) {
	            $760 = 1 << $745;
	            $761 = $760 ^ -1;
	            $762 = HEAP32[76>>2]|0;
	            $763 = $762 & $761;
	            HEAP32[76>>2] = $763;
	            break;
	           }
	           $764 = ($750|0)==($752|0);
	           do {
	            if ($764) {
	             $$pre57$i$i = ((($750)) + 8|0);
	             $$pre$phi58$i$iZ2D = $$pre57$i$i;
	            } else {
	             $765 = ($750>>>0)<($755>>>0);
	             if ($765) {
	              _abort();
	              // unreachable;
	             }
	             $766 = ((($750)) + 8|0);
	             $767 = HEAP32[$766>>2]|0;
	             $768 = ($767|0)==($720|0);
	             if ($768) {
	              $$pre$phi58$i$iZ2D = $766;
	              break;
	             }
	             _abort();
	             // unreachable;
	            }
	           } while(0);
	           $769 = ((($748)) + 12|0);
	           HEAP32[$769>>2] = $750;
	           HEAP32[$$pre$phi58$i$iZ2D>>2] = $748;
	          } else {
	           $$sum34$i$i = $719 | 24;
	           $$sum115$i = (($$sum34$i$i) + ($tsize$254$i))|0;
	           $770 = (($tbase$255$i) + ($$sum115$i)|0);
	           $771 = HEAP32[$770>>2]|0;
	           $$sum5$i$i = (($tsize$254$i) + 12)|0;
	           $$sum116$i = (($$sum5$i$i) + ($719))|0;
	           $772 = (($tbase$255$i) + ($$sum116$i)|0);
	           $773 = HEAP32[$772>>2]|0;
	           $774 = ($773|0)==($720|0);
	           do {
	            if ($774) {
	             $$sum67$i$i = $719 | 16;
	             $$sum122$i = (($$sum2$i21$i) + ($$sum67$i$i))|0;
	             $784 = (($tbase$255$i) + ($$sum122$i)|0);
	             $785 = HEAP32[$784>>2]|0;
	             $786 = ($785|0)==(0|0);
	             if ($786) {
	              $$sum123$i = (($$sum67$i$i) + ($tsize$254$i))|0;
	              $787 = (($tbase$255$i) + ($$sum123$i)|0);
	              $788 = HEAP32[$787>>2]|0;
	              $789 = ($788|0)==(0|0);
	              if ($789) {
	               $R$1$i$i = 0;
	               break;
	              } else {
	               $R$0$i$i = $788;$RP$0$i$i = $787;
	              }
	             } else {
	              $R$0$i$i = $785;$RP$0$i$i = $784;
	             }
	             while(1) {
	              $790 = ((($R$0$i$i)) + 20|0);
	              $791 = HEAP32[$790>>2]|0;
	              $792 = ($791|0)==(0|0);
	              if (!($792)) {
	               $R$0$i$i = $791;$RP$0$i$i = $790;
	               continue;
	              }
	              $793 = ((($R$0$i$i)) + 16|0);
	              $794 = HEAP32[$793>>2]|0;
	              $795 = ($794|0)==(0|0);
	              if ($795) {
	               $R$0$i$i$lcssa = $R$0$i$i;$RP$0$i$i$lcssa = $RP$0$i$i;
	               break;
	              } else {
	               $R$0$i$i = $794;$RP$0$i$i = $793;
	              }
	             }
	             $796 = ($RP$0$i$i$lcssa>>>0)<($755>>>0);
	             if ($796) {
	              _abort();
	              // unreachable;
	             } else {
	              HEAP32[$RP$0$i$i$lcssa>>2] = 0;
	              $R$1$i$i = $R$0$i$i$lcssa;
	              break;
	             }
	            } else {
	             $$sum3536$i$i = $719 | 8;
	             $$sum117$i = (($$sum3536$i$i) + ($tsize$254$i))|0;
	             $775 = (($tbase$255$i) + ($$sum117$i)|0);
	             $776 = HEAP32[$775>>2]|0;
	             $777 = ($776>>>0)<($755>>>0);
	             if ($777) {
	              _abort();
	              // unreachable;
	             }
	             $778 = ((($776)) + 12|0);
	             $779 = HEAP32[$778>>2]|0;
	             $780 = ($779|0)==($720|0);
	             if (!($780)) {
	              _abort();
	              // unreachable;
	             }
	             $781 = ((($773)) + 8|0);
	             $782 = HEAP32[$781>>2]|0;
	             $783 = ($782|0)==($720|0);
	             if ($783) {
	              HEAP32[$778>>2] = $773;
	              HEAP32[$781>>2] = $776;
	              $R$1$i$i = $773;
	              break;
	             } else {
	              _abort();
	              // unreachable;
	             }
	            }
	           } while(0);
	           $797 = ($771|0)==(0|0);
	           if ($797) {
	            break;
	           }
	           $$sum30$i$i = (($tsize$254$i) + 28)|0;
	           $$sum118$i = (($$sum30$i$i) + ($719))|0;
	           $798 = (($tbase$255$i) + ($$sum118$i)|0);
	           $799 = HEAP32[$798>>2]|0;
	           $800 = (380 + ($799<<2)|0);
	           $801 = HEAP32[$800>>2]|0;
	           $802 = ($720|0)==($801|0);
	           do {
	            if ($802) {
	             HEAP32[$800>>2] = $R$1$i$i;
	             $cond$i$i = ($R$1$i$i|0)==(0|0);
	             if (!($cond$i$i)) {
	              break;
	             }
	             $803 = 1 << $799;
	             $804 = $803 ^ -1;
	             $805 = HEAP32[(80)>>2]|0;
	             $806 = $805 & $804;
	             HEAP32[(80)>>2] = $806;
	             break L332;
	            } else {
	             $807 = HEAP32[(92)>>2]|0;
	             $808 = ($771>>>0)<($807>>>0);
	             if ($808) {
	              _abort();
	              // unreachable;
	             }
	             $809 = ((($771)) + 16|0);
	             $810 = HEAP32[$809>>2]|0;
	             $811 = ($810|0)==($720|0);
	             if ($811) {
	              HEAP32[$809>>2] = $R$1$i$i;
	             } else {
	              $812 = ((($771)) + 20|0);
	              HEAP32[$812>>2] = $R$1$i$i;
	             }
	             $813 = ($R$1$i$i|0)==(0|0);
	             if ($813) {
	              break L332;
	             }
	            }
	           } while(0);
	           $814 = HEAP32[(92)>>2]|0;
	           $815 = ($R$1$i$i>>>0)<($814>>>0);
	           if ($815) {
	            _abort();
	            // unreachable;
	           }
	           $816 = ((($R$1$i$i)) + 24|0);
	           HEAP32[$816>>2] = $771;
	           $$sum3132$i$i = $719 | 16;
	           $$sum119$i = (($$sum3132$i$i) + ($tsize$254$i))|0;
	           $817 = (($tbase$255$i) + ($$sum119$i)|0);
	           $818 = HEAP32[$817>>2]|0;
	           $819 = ($818|0)==(0|0);
	           do {
	            if (!($819)) {
	             $820 = ($818>>>0)<($814>>>0);
	             if ($820) {
	              _abort();
	              // unreachable;
	             } else {
	              $821 = ((($R$1$i$i)) + 16|0);
	              HEAP32[$821>>2] = $818;
	              $822 = ((($818)) + 24|0);
	              HEAP32[$822>>2] = $R$1$i$i;
	              break;
	             }
	            }
	           } while(0);
	           $$sum120$i = (($$sum2$i21$i) + ($$sum3132$i$i))|0;
	           $823 = (($tbase$255$i) + ($$sum120$i)|0);
	           $824 = HEAP32[$823>>2]|0;
	           $825 = ($824|0)==(0|0);
	           if ($825) {
	            break;
	           }
	           $826 = HEAP32[(92)>>2]|0;
	           $827 = ($824>>>0)<($826>>>0);
	           if ($827) {
	            _abort();
	            // unreachable;
	           } else {
	            $828 = ((($R$1$i$i)) + 20|0);
	            HEAP32[$828>>2] = $824;
	            $829 = ((($824)) + 24|0);
	            HEAP32[$829>>2] = $R$1$i$i;
	            break;
	           }
	          }
	         } while(0);
	         $$sum9$i$i = $744 | $719;
	         $$sum121$i = (($$sum9$i$i) + ($tsize$254$i))|0;
	         $830 = (($tbase$255$i) + ($$sum121$i)|0);
	         $831 = (($744) + ($725))|0;
	         $oldfirst$0$i$i = $830;$qsize$0$i$i = $831;
	        } else {
	         $oldfirst$0$i$i = $720;$qsize$0$i$i = $725;
	        }
	        $832 = ((($oldfirst$0$i$i)) + 4|0);
	        $833 = HEAP32[$832>>2]|0;
	        $834 = $833 & -2;
	        HEAP32[$832>>2] = $834;
	        $835 = $qsize$0$i$i | 1;
	        $$sum10$i$i = (($$sum$i19$i) + 4)|0;
	        $836 = (($tbase$255$i) + ($$sum10$i$i)|0);
	        HEAP32[$836>>2] = $835;
	        $$sum11$i$i = (($qsize$0$i$i) + ($$sum$i19$i))|0;
	        $837 = (($tbase$255$i) + ($$sum11$i$i)|0);
	        HEAP32[$837>>2] = $qsize$0$i$i;
	        $838 = $qsize$0$i$i >>> 3;
	        $839 = ($qsize$0$i$i>>>0)<(256);
	        if ($839) {
	         $840 = $838 << 1;
	         $841 = (116 + ($840<<2)|0);
	         $842 = HEAP32[76>>2]|0;
	         $843 = 1 << $838;
	         $844 = $842 & $843;
	         $845 = ($844|0)==(0);
	         do {
	          if ($845) {
	           $846 = $842 | $843;
	           HEAP32[76>>2] = $846;
	           $$pre$i22$i = (($840) + 2)|0;
	           $$pre56$i$i = (116 + ($$pre$i22$i<<2)|0);
	           $$pre$phi$i23$iZ2D = $$pre56$i$i;$F4$0$i$i = $841;
	          } else {
	           $$sum29$i$i = (($840) + 2)|0;
	           $847 = (116 + ($$sum29$i$i<<2)|0);
	           $848 = HEAP32[$847>>2]|0;
	           $849 = HEAP32[(92)>>2]|0;
	           $850 = ($848>>>0)<($849>>>0);
	           if (!($850)) {
	            $$pre$phi$i23$iZ2D = $847;$F4$0$i$i = $848;
	            break;
	           }
	           _abort();
	           // unreachable;
	          }
	         } while(0);
	         HEAP32[$$pre$phi$i23$iZ2D>>2] = $724;
	         $851 = ((($F4$0$i$i)) + 12|0);
	         HEAP32[$851>>2] = $724;
	         $$sum27$i$i = (($$sum$i19$i) + 8)|0;
	         $852 = (($tbase$255$i) + ($$sum27$i$i)|0);
	         HEAP32[$852>>2] = $F4$0$i$i;
	         $$sum28$i$i = (($$sum$i19$i) + 12)|0;
	         $853 = (($tbase$255$i) + ($$sum28$i$i)|0);
	         HEAP32[$853>>2] = $841;
	         break;
	        }
	        $854 = $qsize$0$i$i >>> 8;
	        $855 = ($854|0)==(0);
	        do {
	         if ($855) {
	          $I7$0$i$i = 0;
	         } else {
	          $856 = ($qsize$0$i$i>>>0)>(16777215);
	          if ($856) {
	           $I7$0$i$i = 31;
	           break;
	          }
	          $857 = (($854) + 1048320)|0;
	          $858 = $857 >>> 16;
	          $859 = $858 & 8;
	          $860 = $854 << $859;
	          $861 = (($860) + 520192)|0;
	          $862 = $861 >>> 16;
	          $863 = $862 & 4;
	          $864 = $863 | $859;
	          $865 = $860 << $863;
	          $866 = (($865) + 245760)|0;
	          $867 = $866 >>> 16;
	          $868 = $867 & 2;
	          $869 = $864 | $868;
	          $870 = (14 - ($869))|0;
	          $871 = $865 << $868;
	          $872 = $871 >>> 15;
	          $873 = (($870) + ($872))|0;
	          $874 = $873 << 1;
	          $875 = (($873) + 7)|0;
	          $876 = $qsize$0$i$i >>> $875;
	          $877 = $876 & 1;
	          $878 = $877 | $874;
	          $I7$0$i$i = $878;
	         }
	        } while(0);
	        $879 = (380 + ($I7$0$i$i<<2)|0);
	        $$sum12$i$i = (($$sum$i19$i) + 28)|0;
	        $880 = (($tbase$255$i) + ($$sum12$i$i)|0);
	        HEAP32[$880>>2] = $I7$0$i$i;
	        $$sum13$i$i = (($$sum$i19$i) + 16)|0;
	        $881 = (($tbase$255$i) + ($$sum13$i$i)|0);
	        $$sum14$i$i = (($$sum$i19$i) + 20)|0;
	        $882 = (($tbase$255$i) + ($$sum14$i$i)|0);
	        HEAP32[$882>>2] = 0;
	        HEAP32[$881>>2] = 0;
	        $883 = HEAP32[(80)>>2]|0;
	        $884 = 1 << $I7$0$i$i;
	        $885 = $883 & $884;
	        $886 = ($885|0)==(0);
	        if ($886) {
	         $887 = $883 | $884;
	         HEAP32[(80)>>2] = $887;
	         HEAP32[$879>>2] = $724;
	         $$sum15$i$i = (($$sum$i19$i) + 24)|0;
	         $888 = (($tbase$255$i) + ($$sum15$i$i)|0);
	         HEAP32[$888>>2] = $879;
	         $$sum16$i$i = (($$sum$i19$i) + 12)|0;
	         $889 = (($tbase$255$i) + ($$sum16$i$i)|0);
	         HEAP32[$889>>2] = $724;
	         $$sum17$i$i = (($$sum$i19$i) + 8)|0;
	         $890 = (($tbase$255$i) + ($$sum17$i$i)|0);
	         HEAP32[$890>>2] = $724;
	         break;
	        }
	        $891 = HEAP32[$879>>2]|0;
	        $892 = ((($891)) + 4|0);
	        $893 = HEAP32[$892>>2]|0;
	        $894 = $893 & -8;
	        $895 = ($894|0)==($qsize$0$i$i|0);
	        L418: do {
	         if ($895) {
	          $T$0$lcssa$i25$i = $891;
	         } else {
	          $896 = ($I7$0$i$i|0)==(31);
	          $897 = $I7$0$i$i >>> 1;
	          $898 = (25 - ($897))|0;
	          $899 = $896 ? 0 : $898;
	          $900 = $qsize$0$i$i << $899;
	          $K8$051$i$i = $900;$T$050$i$i = $891;
	          while(1) {
	           $907 = $K8$051$i$i >>> 31;
	           $908 = (((($T$050$i$i)) + 16|0) + ($907<<2)|0);
	           $903 = HEAP32[$908>>2]|0;
	           $909 = ($903|0)==(0|0);
	           if ($909) {
	            $$lcssa = $908;$T$050$i$i$lcssa = $T$050$i$i;
	            break;
	           }
	           $901 = $K8$051$i$i << 1;
	           $902 = ((($903)) + 4|0);
	           $904 = HEAP32[$902>>2]|0;
	           $905 = $904 & -8;
	           $906 = ($905|0)==($qsize$0$i$i|0);
	           if ($906) {
	            $T$0$lcssa$i25$i = $903;
	            break L418;
	           } else {
	            $K8$051$i$i = $901;$T$050$i$i = $903;
	           }
	          }
	          $910 = HEAP32[(92)>>2]|0;
	          $911 = ($$lcssa>>>0)<($910>>>0);
	          if ($911) {
	           _abort();
	           // unreachable;
	          } else {
	           HEAP32[$$lcssa>>2] = $724;
	           $$sum23$i$i = (($$sum$i19$i) + 24)|0;
	           $912 = (($tbase$255$i) + ($$sum23$i$i)|0);
	           HEAP32[$912>>2] = $T$050$i$i$lcssa;
	           $$sum24$i$i = (($$sum$i19$i) + 12)|0;
	           $913 = (($tbase$255$i) + ($$sum24$i$i)|0);
	           HEAP32[$913>>2] = $724;
	           $$sum25$i$i = (($$sum$i19$i) + 8)|0;
	           $914 = (($tbase$255$i) + ($$sum25$i$i)|0);
	           HEAP32[$914>>2] = $724;
	           break L324;
	          }
	         }
	        } while(0);
	        $915 = ((($T$0$lcssa$i25$i)) + 8|0);
	        $916 = HEAP32[$915>>2]|0;
	        $917 = HEAP32[(92)>>2]|0;
	        $918 = ($916>>>0)>=($917>>>0);
	        $not$$i26$i = ($T$0$lcssa$i25$i>>>0)>=($917>>>0);
	        $919 = $918 & $not$$i26$i;
	        if ($919) {
	         $920 = ((($916)) + 12|0);
	         HEAP32[$920>>2] = $724;
	         HEAP32[$915>>2] = $724;
	         $$sum20$i$i = (($$sum$i19$i) + 8)|0;
	         $921 = (($tbase$255$i) + ($$sum20$i$i)|0);
	         HEAP32[$921>>2] = $916;
	         $$sum21$i$i = (($$sum$i19$i) + 12)|0;
	         $922 = (($tbase$255$i) + ($$sum21$i$i)|0);
	         HEAP32[$922>>2] = $T$0$lcssa$i25$i;
	         $$sum22$i$i = (($$sum$i19$i) + 24)|0;
	         $923 = (($tbase$255$i) + ($$sum22$i$i)|0);
	         HEAP32[$923>>2] = 0;
	         break;
	        } else {
	         _abort();
	         // unreachable;
	        }
	       }
	      } while(0);
	      $$sum1819$i$i = $711 | 8;
	      $924 = (($tbase$255$i) + ($$sum1819$i$i)|0);
	      $mem$0 = $924;
	      return ($mem$0|0);
	     } else {
	      $sp$0$i$i$i = (524);
	     }
	    }
	    while(1) {
	     $925 = HEAP32[$sp$0$i$i$i>>2]|0;
	     $926 = ($925>>>0)>($635>>>0);
	     if (!($926)) {
	      $927 = ((($sp$0$i$i$i)) + 4|0);
	      $928 = HEAP32[$927>>2]|0;
	      $929 = (($925) + ($928)|0);
	      $930 = ($929>>>0)>($635>>>0);
	      if ($930) {
	       $$lcssa215 = $925;$$lcssa216 = $928;$$lcssa217 = $929;
	       break;
	      }
	     }
	     $931 = ((($sp$0$i$i$i)) + 8|0);
	     $932 = HEAP32[$931>>2]|0;
	     $sp$0$i$i$i = $932;
	    }
	    $$sum$i14$i = (($$lcssa216) + -47)|0;
	    $$sum1$i15$i = (($$lcssa216) + -39)|0;
	    $933 = (($$lcssa215) + ($$sum1$i15$i)|0);
	    $934 = $933;
	    $935 = $934 & 7;
	    $936 = ($935|0)==(0);
	    $937 = (0 - ($934))|0;
	    $938 = $937 & 7;
	    $939 = $936 ? 0 : $938;
	    $$sum2$i16$i = (($$sum$i14$i) + ($939))|0;
	    $940 = (($$lcssa215) + ($$sum2$i16$i)|0);
	    $941 = ((($635)) + 16|0);
	    $942 = ($940>>>0)<($941>>>0);
	    $943 = $942 ? $635 : $940;
	    $944 = ((($943)) + 8|0);
	    $945 = (($tsize$254$i) + -40)|0;
	    $946 = ((($tbase$255$i)) + 8|0);
	    $947 = $946;
	    $948 = $947 & 7;
	    $949 = ($948|0)==(0);
	    $950 = (0 - ($947))|0;
	    $951 = $950 & 7;
	    $952 = $949 ? 0 : $951;
	    $953 = (($tbase$255$i) + ($952)|0);
	    $954 = (($945) - ($952))|0;
	    HEAP32[(100)>>2] = $953;
	    HEAP32[(88)>>2] = $954;
	    $955 = $954 | 1;
	    $$sum$i$i$i = (($952) + 4)|0;
	    $956 = (($tbase$255$i) + ($$sum$i$i$i)|0);
	    HEAP32[$956>>2] = $955;
	    $$sum2$i$i$i = (($tsize$254$i) + -36)|0;
	    $957 = (($tbase$255$i) + ($$sum2$i$i$i)|0);
	    HEAP32[$957>>2] = 40;
	    $958 = HEAP32[(564)>>2]|0;
	    HEAP32[(104)>>2] = $958;
	    $959 = ((($943)) + 4|0);
	    HEAP32[$959>>2] = 27;
	    ;HEAP32[$944>>2]=HEAP32[(524)>>2]|0;HEAP32[$944+4>>2]=HEAP32[(524)+4>>2]|0;HEAP32[$944+8>>2]=HEAP32[(524)+8>>2]|0;HEAP32[$944+12>>2]=HEAP32[(524)+12>>2]|0;
	    HEAP32[(524)>>2] = $tbase$255$i;
	    HEAP32[(528)>>2] = $tsize$254$i;
	    HEAP32[(536)>>2] = 0;
	    HEAP32[(532)>>2] = $944;
	    $960 = ((($943)) + 28|0);
	    HEAP32[$960>>2] = 7;
	    $961 = ((($943)) + 32|0);
	    $962 = ($961>>>0)<($$lcssa217>>>0);
	    if ($962) {
	     $964 = $960;
	     while(1) {
	      $963 = ((($964)) + 4|0);
	      HEAP32[$963>>2] = 7;
	      $965 = ((($964)) + 8|0);
	      $966 = ($965>>>0)<($$lcssa217>>>0);
	      if ($966) {
	       $964 = $963;
	      } else {
	       break;
	      }
	     }
	    }
	    $967 = ($943|0)==($635|0);
	    if (!($967)) {
	     $968 = $943;
	     $969 = $635;
	     $970 = (($968) - ($969))|0;
	     $971 = HEAP32[$959>>2]|0;
	     $972 = $971 & -2;
	     HEAP32[$959>>2] = $972;
	     $973 = $970 | 1;
	     $974 = ((($635)) + 4|0);
	     HEAP32[$974>>2] = $973;
	     HEAP32[$943>>2] = $970;
	     $975 = $970 >>> 3;
	     $976 = ($970>>>0)<(256);
	     if ($976) {
	      $977 = $975 << 1;
	      $978 = (116 + ($977<<2)|0);
	      $979 = HEAP32[76>>2]|0;
	      $980 = 1 << $975;
	      $981 = $979 & $980;
	      $982 = ($981|0)==(0);
	      if ($982) {
	       $983 = $979 | $980;
	       HEAP32[76>>2] = $983;
	       $$pre$i$i = (($977) + 2)|0;
	       $$pre14$i$i = (116 + ($$pre$i$i<<2)|0);
	       $$pre$phi$i$iZ2D = $$pre14$i$i;$F$0$i$i = $978;
	      } else {
	       $$sum4$i$i = (($977) + 2)|0;
	       $984 = (116 + ($$sum4$i$i<<2)|0);
	       $985 = HEAP32[$984>>2]|0;
	       $986 = HEAP32[(92)>>2]|0;
	       $987 = ($985>>>0)<($986>>>0);
	       if ($987) {
	        _abort();
	        // unreachable;
	       } else {
	        $$pre$phi$i$iZ2D = $984;$F$0$i$i = $985;
	       }
	      }
	      HEAP32[$$pre$phi$i$iZ2D>>2] = $635;
	      $988 = ((($F$0$i$i)) + 12|0);
	      HEAP32[$988>>2] = $635;
	      $989 = ((($635)) + 8|0);
	      HEAP32[$989>>2] = $F$0$i$i;
	      $990 = ((($635)) + 12|0);
	      HEAP32[$990>>2] = $978;
	      break;
	     }
	     $991 = $970 >>> 8;
	     $992 = ($991|0)==(0);
	     if ($992) {
	      $I1$0$i$i = 0;
	     } else {
	      $993 = ($970>>>0)>(16777215);
	      if ($993) {
	       $I1$0$i$i = 31;
	      } else {
	       $994 = (($991) + 1048320)|0;
	       $995 = $994 >>> 16;
	       $996 = $995 & 8;
	       $997 = $991 << $996;
	       $998 = (($997) + 520192)|0;
	       $999 = $998 >>> 16;
	       $1000 = $999 & 4;
	       $1001 = $1000 | $996;
	       $1002 = $997 << $1000;
	       $1003 = (($1002) + 245760)|0;
	       $1004 = $1003 >>> 16;
	       $1005 = $1004 & 2;
	       $1006 = $1001 | $1005;
	       $1007 = (14 - ($1006))|0;
	       $1008 = $1002 << $1005;
	       $1009 = $1008 >>> 15;
	       $1010 = (($1007) + ($1009))|0;
	       $1011 = $1010 << 1;
	       $1012 = (($1010) + 7)|0;
	       $1013 = $970 >>> $1012;
	       $1014 = $1013 & 1;
	       $1015 = $1014 | $1011;
	       $I1$0$i$i = $1015;
	      }
	     }
	     $1016 = (380 + ($I1$0$i$i<<2)|0);
	     $1017 = ((($635)) + 28|0);
	     HEAP32[$1017>>2] = $I1$0$i$i;
	     $1018 = ((($635)) + 20|0);
	     HEAP32[$1018>>2] = 0;
	     HEAP32[$941>>2] = 0;
	     $1019 = HEAP32[(80)>>2]|0;
	     $1020 = 1 << $I1$0$i$i;
	     $1021 = $1019 & $1020;
	     $1022 = ($1021|0)==(0);
	     if ($1022) {
	      $1023 = $1019 | $1020;
	      HEAP32[(80)>>2] = $1023;
	      HEAP32[$1016>>2] = $635;
	      $1024 = ((($635)) + 24|0);
	      HEAP32[$1024>>2] = $1016;
	      $1025 = ((($635)) + 12|0);
	      HEAP32[$1025>>2] = $635;
	      $1026 = ((($635)) + 8|0);
	      HEAP32[$1026>>2] = $635;
	      break;
	     }
	     $1027 = HEAP32[$1016>>2]|0;
	     $1028 = ((($1027)) + 4|0);
	     $1029 = HEAP32[$1028>>2]|0;
	     $1030 = $1029 & -8;
	     $1031 = ($1030|0)==($970|0);
	     L459: do {
	      if ($1031) {
	       $T$0$lcssa$i$i = $1027;
	      } else {
	       $1032 = ($I1$0$i$i|0)==(31);
	       $1033 = $I1$0$i$i >>> 1;
	       $1034 = (25 - ($1033))|0;
	       $1035 = $1032 ? 0 : $1034;
	       $1036 = $970 << $1035;
	       $K2$07$i$i = $1036;$T$06$i$i = $1027;
	       while(1) {
	        $1043 = $K2$07$i$i >>> 31;
	        $1044 = (((($T$06$i$i)) + 16|0) + ($1043<<2)|0);
	        $1039 = HEAP32[$1044>>2]|0;
	        $1045 = ($1039|0)==(0|0);
	        if ($1045) {
	         $$lcssa211 = $1044;$T$06$i$i$lcssa = $T$06$i$i;
	         break;
	        }
	        $1037 = $K2$07$i$i << 1;
	        $1038 = ((($1039)) + 4|0);
	        $1040 = HEAP32[$1038>>2]|0;
	        $1041 = $1040 & -8;
	        $1042 = ($1041|0)==($970|0);
	        if ($1042) {
	         $T$0$lcssa$i$i = $1039;
	         break L459;
	        } else {
	         $K2$07$i$i = $1037;$T$06$i$i = $1039;
	        }
	       }
	       $1046 = HEAP32[(92)>>2]|0;
	       $1047 = ($$lcssa211>>>0)<($1046>>>0);
	       if ($1047) {
	        _abort();
	        // unreachable;
	       } else {
	        HEAP32[$$lcssa211>>2] = $635;
	        $1048 = ((($635)) + 24|0);
	        HEAP32[$1048>>2] = $T$06$i$i$lcssa;
	        $1049 = ((($635)) + 12|0);
	        HEAP32[$1049>>2] = $635;
	        $1050 = ((($635)) + 8|0);
	        HEAP32[$1050>>2] = $635;
	        break L299;
	       }
	      }
	     } while(0);
	     $1051 = ((($T$0$lcssa$i$i)) + 8|0);
	     $1052 = HEAP32[$1051>>2]|0;
	     $1053 = HEAP32[(92)>>2]|0;
	     $1054 = ($1052>>>0)>=($1053>>>0);
	     $not$$i$i = ($T$0$lcssa$i$i>>>0)>=($1053>>>0);
	     $1055 = $1054 & $not$$i$i;
	     if ($1055) {
	      $1056 = ((($1052)) + 12|0);
	      HEAP32[$1056>>2] = $635;
	      HEAP32[$1051>>2] = $635;
	      $1057 = ((($635)) + 8|0);
	      HEAP32[$1057>>2] = $1052;
	      $1058 = ((($635)) + 12|0);
	      HEAP32[$1058>>2] = $T$0$lcssa$i$i;
	      $1059 = ((($635)) + 24|0);
	      HEAP32[$1059>>2] = 0;
	      break;
	     } else {
	      _abort();
	      // unreachable;
	     }
	    }
	   }
	  } while(0);
	  $1060 = HEAP32[(88)>>2]|0;
	  $1061 = ($1060>>>0)>($nb$0>>>0);
	  if ($1061) {
	   $1062 = (($1060) - ($nb$0))|0;
	   HEAP32[(88)>>2] = $1062;
	   $1063 = HEAP32[(100)>>2]|0;
	   $1064 = (($1063) + ($nb$0)|0);
	   HEAP32[(100)>>2] = $1064;
	   $1065 = $1062 | 1;
	   $$sum$i32 = (($nb$0) + 4)|0;
	   $1066 = (($1063) + ($$sum$i32)|0);
	   HEAP32[$1066>>2] = $1065;
	   $1067 = $nb$0 | 3;
	   $1068 = ((($1063)) + 4|0);
	   HEAP32[$1068>>2] = $1067;
	   $1069 = ((($1063)) + 8|0);
	   $mem$0 = $1069;
	   return ($mem$0|0);
	  }
	 }
	 $1070 = (___errno_location()|0);
	 HEAP32[$1070>>2] = 12;
	 $mem$0 = 0;
	 return ($mem$0|0);
	}
	function _free($mem) {
	 $mem = $mem|0;
	 var $$lcssa = 0, $$pre = 0, $$pre$phi59Z2D = 0, $$pre$phi61Z2D = 0, $$pre$phiZ2D = 0, $$pre57 = 0, $$pre58 = 0, $$pre60 = 0, $$sum = 0, $$sum11 = 0, $$sum12 = 0, $$sum13 = 0, $$sum14 = 0, $$sum1718 = 0, $$sum19 = 0, $$sum2 = 0, $$sum20 = 0, $$sum22 = 0, $$sum23 = 0, $$sum24 = 0;
	 var $$sum25 = 0, $$sum26 = 0, $$sum27 = 0, $$sum28 = 0, $$sum29 = 0, $$sum3 = 0, $$sum30 = 0, $$sum31 = 0, $$sum5 = 0, $$sum67 = 0, $$sum8 = 0, $$sum9 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
	 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
	 var $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0;
	 var $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0;
	 var $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0;
	 var $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0;
	 var $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0;
	 var $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0;
	 var $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0;
	 var $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0;
	 var $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0;
	 var $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0;
	 var $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0;
	 var $321 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
	 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
	 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
	 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F16$0 = 0, $I18$0 = 0, $K19$052 = 0, $R$0 = 0, $R$0$lcssa = 0, $R$1 = 0;
	 var $R7$0 = 0, $R7$0$lcssa = 0, $R7$1 = 0, $RP$0 = 0, $RP$0$lcssa = 0, $RP9$0 = 0, $RP9$0$lcssa = 0, $T$0$lcssa = 0, $T$051 = 0, $T$051$lcssa = 0, $cond = 0, $cond47 = 0, $not$ = 0, $p$0 = 0, $psize$0 = 0, $psize$1 = 0, $sp$0$i = 0, $sp$0$in$i = 0, label = 0, sp = 0;
	 sp = STACKTOP;
	 $0 = ($mem|0)==(0|0);
	 if ($0) {
	  return;
	 }
	 $1 = ((($mem)) + -8|0);
	 $2 = HEAP32[(92)>>2]|0;
	 $3 = ($1>>>0)<($2>>>0);
	 if ($3) {
	  _abort();
	  // unreachable;
	 }
	 $4 = ((($mem)) + -4|0);
	 $5 = HEAP32[$4>>2]|0;
	 $6 = $5 & 3;
	 $7 = ($6|0)==(1);
	 if ($7) {
	  _abort();
	  // unreachable;
	 }
	 $8 = $5 & -8;
	 $$sum = (($8) + -8)|0;
	 $9 = (($mem) + ($$sum)|0);
	 $10 = $5 & 1;
	 $11 = ($10|0)==(0);
	 do {
	  if ($11) {
	   $12 = HEAP32[$1>>2]|0;
	   $13 = ($6|0)==(0);
	   if ($13) {
	    return;
	   }
	   $$sum2 = (-8 - ($12))|0;
	   $14 = (($mem) + ($$sum2)|0);
	   $15 = (($12) + ($8))|0;
	   $16 = ($14>>>0)<($2>>>0);
	   if ($16) {
	    _abort();
	    // unreachable;
	   }
	   $17 = HEAP32[(96)>>2]|0;
	   $18 = ($14|0)==($17|0);
	   if ($18) {
	    $$sum3 = (($8) + -4)|0;
	    $103 = (($mem) + ($$sum3)|0);
	    $104 = HEAP32[$103>>2]|0;
	    $105 = $104 & 3;
	    $106 = ($105|0)==(3);
	    if (!($106)) {
	     $p$0 = $14;$psize$0 = $15;
	     break;
	    }
	    HEAP32[(84)>>2] = $15;
	    $107 = $104 & -2;
	    HEAP32[$103>>2] = $107;
	    $108 = $15 | 1;
	    $$sum20 = (($$sum2) + 4)|0;
	    $109 = (($mem) + ($$sum20)|0);
	    HEAP32[$109>>2] = $108;
	    HEAP32[$9>>2] = $15;
	    return;
	   }
	   $19 = $12 >>> 3;
	   $20 = ($12>>>0)<(256);
	   if ($20) {
	    $$sum30 = (($$sum2) + 8)|0;
	    $21 = (($mem) + ($$sum30)|0);
	    $22 = HEAP32[$21>>2]|0;
	    $$sum31 = (($$sum2) + 12)|0;
	    $23 = (($mem) + ($$sum31)|0);
	    $24 = HEAP32[$23>>2]|0;
	    $25 = $19 << 1;
	    $26 = (116 + ($25<<2)|0);
	    $27 = ($22|0)==($26|0);
	    if (!($27)) {
	     $28 = ($22>>>0)<($2>>>0);
	     if ($28) {
	      _abort();
	      // unreachable;
	     }
	     $29 = ((($22)) + 12|0);
	     $30 = HEAP32[$29>>2]|0;
	     $31 = ($30|0)==($14|0);
	     if (!($31)) {
	      _abort();
	      // unreachable;
	     }
	    }
	    $32 = ($24|0)==($22|0);
	    if ($32) {
	     $33 = 1 << $19;
	     $34 = $33 ^ -1;
	     $35 = HEAP32[76>>2]|0;
	     $36 = $35 & $34;
	     HEAP32[76>>2] = $36;
	     $p$0 = $14;$psize$0 = $15;
	     break;
	    }
	    $37 = ($24|0)==($26|0);
	    if ($37) {
	     $$pre60 = ((($24)) + 8|0);
	     $$pre$phi61Z2D = $$pre60;
	    } else {
	     $38 = ($24>>>0)<($2>>>0);
	     if ($38) {
	      _abort();
	      // unreachable;
	     }
	     $39 = ((($24)) + 8|0);
	     $40 = HEAP32[$39>>2]|0;
	     $41 = ($40|0)==($14|0);
	     if ($41) {
	      $$pre$phi61Z2D = $39;
	     } else {
	      _abort();
	      // unreachable;
	     }
	    }
	    $42 = ((($22)) + 12|0);
	    HEAP32[$42>>2] = $24;
	    HEAP32[$$pre$phi61Z2D>>2] = $22;
	    $p$0 = $14;$psize$0 = $15;
	    break;
	   }
	   $$sum22 = (($$sum2) + 24)|0;
	   $43 = (($mem) + ($$sum22)|0);
	   $44 = HEAP32[$43>>2]|0;
	   $$sum23 = (($$sum2) + 12)|0;
	   $45 = (($mem) + ($$sum23)|0);
	   $46 = HEAP32[$45>>2]|0;
	   $47 = ($46|0)==($14|0);
	   do {
	    if ($47) {
	     $$sum25 = (($$sum2) + 20)|0;
	     $57 = (($mem) + ($$sum25)|0);
	     $58 = HEAP32[$57>>2]|0;
	     $59 = ($58|0)==(0|0);
	     if ($59) {
	      $$sum24 = (($$sum2) + 16)|0;
	      $60 = (($mem) + ($$sum24)|0);
	      $61 = HEAP32[$60>>2]|0;
	      $62 = ($61|0)==(0|0);
	      if ($62) {
	       $R$1 = 0;
	       break;
	      } else {
	       $R$0 = $61;$RP$0 = $60;
	      }
	     } else {
	      $R$0 = $58;$RP$0 = $57;
	     }
	     while(1) {
	      $63 = ((($R$0)) + 20|0);
	      $64 = HEAP32[$63>>2]|0;
	      $65 = ($64|0)==(0|0);
	      if (!($65)) {
	       $R$0 = $64;$RP$0 = $63;
	       continue;
	      }
	      $66 = ((($R$0)) + 16|0);
	      $67 = HEAP32[$66>>2]|0;
	      $68 = ($67|0)==(0|0);
	      if ($68) {
	       $R$0$lcssa = $R$0;$RP$0$lcssa = $RP$0;
	       break;
	      } else {
	       $R$0 = $67;$RP$0 = $66;
	      }
	     }
	     $69 = ($RP$0$lcssa>>>0)<($2>>>0);
	     if ($69) {
	      _abort();
	      // unreachable;
	     } else {
	      HEAP32[$RP$0$lcssa>>2] = 0;
	      $R$1 = $R$0$lcssa;
	      break;
	     }
	    } else {
	     $$sum29 = (($$sum2) + 8)|0;
	     $48 = (($mem) + ($$sum29)|0);
	     $49 = HEAP32[$48>>2]|0;
	     $50 = ($49>>>0)<($2>>>0);
	     if ($50) {
	      _abort();
	      // unreachable;
	     }
	     $51 = ((($49)) + 12|0);
	     $52 = HEAP32[$51>>2]|0;
	     $53 = ($52|0)==($14|0);
	     if (!($53)) {
	      _abort();
	      // unreachable;
	     }
	     $54 = ((($46)) + 8|0);
	     $55 = HEAP32[$54>>2]|0;
	     $56 = ($55|0)==($14|0);
	     if ($56) {
	      HEAP32[$51>>2] = $46;
	      HEAP32[$54>>2] = $49;
	      $R$1 = $46;
	      break;
	     } else {
	      _abort();
	      // unreachable;
	     }
	    }
	   } while(0);
	   $70 = ($44|0)==(0|0);
	   if ($70) {
	    $p$0 = $14;$psize$0 = $15;
	   } else {
	    $$sum26 = (($$sum2) + 28)|0;
	    $71 = (($mem) + ($$sum26)|0);
	    $72 = HEAP32[$71>>2]|0;
	    $73 = (380 + ($72<<2)|0);
	    $74 = HEAP32[$73>>2]|0;
	    $75 = ($14|0)==($74|0);
	    if ($75) {
	     HEAP32[$73>>2] = $R$1;
	     $cond = ($R$1|0)==(0|0);
	     if ($cond) {
	      $76 = 1 << $72;
	      $77 = $76 ^ -1;
	      $78 = HEAP32[(80)>>2]|0;
	      $79 = $78 & $77;
	      HEAP32[(80)>>2] = $79;
	      $p$0 = $14;$psize$0 = $15;
	      break;
	     }
	    } else {
	     $80 = HEAP32[(92)>>2]|0;
	     $81 = ($44>>>0)<($80>>>0);
	     if ($81) {
	      _abort();
	      // unreachable;
	     }
	     $82 = ((($44)) + 16|0);
	     $83 = HEAP32[$82>>2]|0;
	     $84 = ($83|0)==($14|0);
	     if ($84) {
	      HEAP32[$82>>2] = $R$1;
	     } else {
	      $85 = ((($44)) + 20|0);
	      HEAP32[$85>>2] = $R$1;
	     }
	     $86 = ($R$1|0)==(0|0);
	     if ($86) {
	      $p$0 = $14;$psize$0 = $15;
	      break;
	     }
	    }
	    $87 = HEAP32[(92)>>2]|0;
	    $88 = ($R$1>>>0)<($87>>>0);
	    if ($88) {
	     _abort();
	     // unreachable;
	    }
	    $89 = ((($R$1)) + 24|0);
	    HEAP32[$89>>2] = $44;
	    $$sum27 = (($$sum2) + 16)|0;
	    $90 = (($mem) + ($$sum27)|0);
	    $91 = HEAP32[$90>>2]|0;
	    $92 = ($91|0)==(0|0);
	    do {
	     if (!($92)) {
	      $93 = ($91>>>0)<($87>>>0);
	      if ($93) {
	       _abort();
	       // unreachable;
	      } else {
	       $94 = ((($R$1)) + 16|0);
	       HEAP32[$94>>2] = $91;
	       $95 = ((($91)) + 24|0);
	       HEAP32[$95>>2] = $R$1;
	       break;
	      }
	     }
	    } while(0);
	    $$sum28 = (($$sum2) + 20)|0;
	    $96 = (($mem) + ($$sum28)|0);
	    $97 = HEAP32[$96>>2]|0;
	    $98 = ($97|0)==(0|0);
	    if ($98) {
	     $p$0 = $14;$psize$0 = $15;
	    } else {
	     $99 = HEAP32[(92)>>2]|0;
	     $100 = ($97>>>0)<($99>>>0);
	     if ($100) {
	      _abort();
	      // unreachable;
	     } else {
	      $101 = ((($R$1)) + 20|0);
	      HEAP32[$101>>2] = $97;
	      $102 = ((($97)) + 24|0);
	      HEAP32[$102>>2] = $R$1;
	      $p$0 = $14;$psize$0 = $15;
	      break;
	     }
	    }
	   }
	  } else {
	   $p$0 = $1;$psize$0 = $8;
	  }
	 } while(0);
	 $110 = ($p$0>>>0)<($9>>>0);
	 if (!($110)) {
	  _abort();
	  // unreachable;
	 }
	 $$sum19 = (($8) + -4)|0;
	 $111 = (($mem) + ($$sum19)|0);
	 $112 = HEAP32[$111>>2]|0;
	 $113 = $112 & 1;
	 $114 = ($113|0)==(0);
	 if ($114) {
	  _abort();
	  // unreachable;
	 }
	 $115 = $112 & 2;
	 $116 = ($115|0)==(0);
	 if ($116) {
	  $117 = HEAP32[(100)>>2]|0;
	  $118 = ($9|0)==($117|0);
	  if ($118) {
	   $119 = HEAP32[(88)>>2]|0;
	   $120 = (($119) + ($psize$0))|0;
	   HEAP32[(88)>>2] = $120;
	   HEAP32[(100)>>2] = $p$0;
	   $121 = $120 | 1;
	   $122 = ((($p$0)) + 4|0);
	   HEAP32[$122>>2] = $121;
	   $123 = HEAP32[(96)>>2]|0;
	   $124 = ($p$0|0)==($123|0);
	   if (!($124)) {
	    return;
	   }
	   HEAP32[(96)>>2] = 0;
	   HEAP32[(84)>>2] = 0;
	   return;
	  }
	  $125 = HEAP32[(96)>>2]|0;
	  $126 = ($9|0)==($125|0);
	  if ($126) {
	   $127 = HEAP32[(84)>>2]|0;
	   $128 = (($127) + ($psize$0))|0;
	   HEAP32[(84)>>2] = $128;
	   HEAP32[(96)>>2] = $p$0;
	   $129 = $128 | 1;
	   $130 = ((($p$0)) + 4|0);
	   HEAP32[$130>>2] = $129;
	   $131 = (($p$0) + ($128)|0);
	   HEAP32[$131>>2] = $128;
	   return;
	  }
	  $132 = $112 & -8;
	  $133 = (($132) + ($psize$0))|0;
	  $134 = $112 >>> 3;
	  $135 = ($112>>>0)<(256);
	  do {
	   if ($135) {
	    $136 = (($mem) + ($8)|0);
	    $137 = HEAP32[$136>>2]|0;
	    $$sum1718 = $8 | 4;
	    $138 = (($mem) + ($$sum1718)|0);
	    $139 = HEAP32[$138>>2]|0;
	    $140 = $134 << 1;
	    $141 = (116 + ($140<<2)|0);
	    $142 = ($137|0)==($141|0);
	    if (!($142)) {
	     $143 = HEAP32[(92)>>2]|0;
	     $144 = ($137>>>0)<($143>>>0);
	     if ($144) {
	      _abort();
	      // unreachable;
	     }
	     $145 = ((($137)) + 12|0);
	     $146 = HEAP32[$145>>2]|0;
	     $147 = ($146|0)==($9|0);
	     if (!($147)) {
	      _abort();
	      // unreachable;
	     }
	    }
	    $148 = ($139|0)==($137|0);
	    if ($148) {
	     $149 = 1 << $134;
	     $150 = $149 ^ -1;
	     $151 = HEAP32[76>>2]|0;
	     $152 = $151 & $150;
	     HEAP32[76>>2] = $152;
	     break;
	    }
	    $153 = ($139|0)==($141|0);
	    if ($153) {
	     $$pre58 = ((($139)) + 8|0);
	     $$pre$phi59Z2D = $$pre58;
	    } else {
	     $154 = HEAP32[(92)>>2]|0;
	     $155 = ($139>>>0)<($154>>>0);
	     if ($155) {
	      _abort();
	      // unreachable;
	     }
	     $156 = ((($139)) + 8|0);
	     $157 = HEAP32[$156>>2]|0;
	     $158 = ($157|0)==($9|0);
	     if ($158) {
	      $$pre$phi59Z2D = $156;
	     } else {
	      _abort();
	      // unreachable;
	     }
	    }
	    $159 = ((($137)) + 12|0);
	    HEAP32[$159>>2] = $139;
	    HEAP32[$$pre$phi59Z2D>>2] = $137;
	   } else {
	    $$sum5 = (($8) + 16)|0;
	    $160 = (($mem) + ($$sum5)|0);
	    $161 = HEAP32[$160>>2]|0;
	    $$sum67 = $8 | 4;
	    $162 = (($mem) + ($$sum67)|0);
	    $163 = HEAP32[$162>>2]|0;
	    $164 = ($163|0)==($9|0);
	    do {
	     if ($164) {
	      $$sum9 = (($8) + 12)|0;
	      $175 = (($mem) + ($$sum9)|0);
	      $176 = HEAP32[$175>>2]|0;
	      $177 = ($176|0)==(0|0);
	      if ($177) {
	       $$sum8 = (($8) + 8)|0;
	       $178 = (($mem) + ($$sum8)|0);
	       $179 = HEAP32[$178>>2]|0;
	       $180 = ($179|0)==(0|0);
	       if ($180) {
	        $R7$1 = 0;
	        break;
	       } else {
	        $R7$0 = $179;$RP9$0 = $178;
	       }
	      } else {
	       $R7$0 = $176;$RP9$0 = $175;
	      }
	      while(1) {
	       $181 = ((($R7$0)) + 20|0);
	       $182 = HEAP32[$181>>2]|0;
	       $183 = ($182|0)==(0|0);
	       if (!($183)) {
	        $R7$0 = $182;$RP9$0 = $181;
	        continue;
	       }
	       $184 = ((($R7$0)) + 16|0);
	       $185 = HEAP32[$184>>2]|0;
	       $186 = ($185|0)==(0|0);
	       if ($186) {
	        $R7$0$lcssa = $R7$0;$RP9$0$lcssa = $RP9$0;
	        break;
	       } else {
	        $R7$0 = $185;$RP9$0 = $184;
	       }
	      }
	      $187 = HEAP32[(92)>>2]|0;
	      $188 = ($RP9$0$lcssa>>>0)<($187>>>0);
	      if ($188) {
	       _abort();
	       // unreachable;
	      } else {
	       HEAP32[$RP9$0$lcssa>>2] = 0;
	       $R7$1 = $R7$0$lcssa;
	       break;
	      }
	     } else {
	      $165 = (($mem) + ($8)|0);
	      $166 = HEAP32[$165>>2]|0;
	      $167 = HEAP32[(92)>>2]|0;
	      $168 = ($166>>>0)<($167>>>0);
	      if ($168) {
	       _abort();
	       // unreachable;
	      }
	      $169 = ((($166)) + 12|0);
	      $170 = HEAP32[$169>>2]|0;
	      $171 = ($170|0)==($9|0);
	      if (!($171)) {
	       _abort();
	       // unreachable;
	      }
	      $172 = ((($163)) + 8|0);
	      $173 = HEAP32[$172>>2]|0;
	      $174 = ($173|0)==($9|0);
	      if ($174) {
	       HEAP32[$169>>2] = $163;
	       HEAP32[$172>>2] = $166;
	       $R7$1 = $163;
	       break;
	      } else {
	       _abort();
	       // unreachable;
	      }
	     }
	    } while(0);
	    $189 = ($161|0)==(0|0);
	    if (!($189)) {
	     $$sum12 = (($8) + 20)|0;
	     $190 = (($mem) + ($$sum12)|0);
	     $191 = HEAP32[$190>>2]|0;
	     $192 = (380 + ($191<<2)|0);
	     $193 = HEAP32[$192>>2]|0;
	     $194 = ($9|0)==($193|0);
	     if ($194) {
	      HEAP32[$192>>2] = $R7$1;
	      $cond47 = ($R7$1|0)==(0|0);
	      if ($cond47) {
	       $195 = 1 << $191;
	       $196 = $195 ^ -1;
	       $197 = HEAP32[(80)>>2]|0;
	       $198 = $197 & $196;
	       HEAP32[(80)>>2] = $198;
	       break;
	      }
	     } else {
	      $199 = HEAP32[(92)>>2]|0;
	      $200 = ($161>>>0)<($199>>>0);
	      if ($200) {
	       _abort();
	       // unreachable;
	      }
	      $201 = ((($161)) + 16|0);
	      $202 = HEAP32[$201>>2]|0;
	      $203 = ($202|0)==($9|0);
	      if ($203) {
	       HEAP32[$201>>2] = $R7$1;
	      } else {
	       $204 = ((($161)) + 20|0);
	       HEAP32[$204>>2] = $R7$1;
	      }
	      $205 = ($R7$1|0)==(0|0);
	      if ($205) {
	       break;
	      }
	     }
	     $206 = HEAP32[(92)>>2]|0;
	     $207 = ($R7$1>>>0)<($206>>>0);
	     if ($207) {
	      _abort();
	      // unreachable;
	     }
	     $208 = ((($R7$1)) + 24|0);
	     HEAP32[$208>>2] = $161;
	     $$sum13 = (($8) + 8)|0;
	     $209 = (($mem) + ($$sum13)|0);
	     $210 = HEAP32[$209>>2]|0;
	     $211 = ($210|0)==(0|0);
	     do {
	      if (!($211)) {
	       $212 = ($210>>>0)<($206>>>0);
	       if ($212) {
	        _abort();
	        // unreachable;
	       } else {
	        $213 = ((($R7$1)) + 16|0);
	        HEAP32[$213>>2] = $210;
	        $214 = ((($210)) + 24|0);
	        HEAP32[$214>>2] = $R7$1;
	        break;
	       }
	      }
	     } while(0);
	     $$sum14 = (($8) + 12)|0;
	     $215 = (($mem) + ($$sum14)|0);
	     $216 = HEAP32[$215>>2]|0;
	     $217 = ($216|0)==(0|0);
	     if (!($217)) {
	      $218 = HEAP32[(92)>>2]|0;
	      $219 = ($216>>>0)<($218>>>0);
	      if ($219) {
	       _abort();
	       // unreachable;
	      } else {
	       $220 = ((($R7$1)) + 20|0);
	       HEAP32[$220>>2] = $216;
	       $221 = ((($216)) + 24|0);
	       HEAP32[$221>>2] = $R7$1;
	       break;
	      }
	     }
	    }
	   }
	  } while(0);
	  $222 = $133 | 1;
	  $223 = ((($p$0)) + 4|0);
	  HEAP32[$223>>2] = $222;
	  $224 = (($p$0) + ($133)|0);
	  HEAP32[$224>>2] = $133;
	  $225 = HEAP32[(96)>>2]|0;
	  $226 = ($p$0|0)==($225|0);
	  if ($226) {
	   HEAP32[(84)>>2] = $133;
	   return;
	  } else {
	   $psize$1 = $133;
	  }
	 } else {
	  $227 = $112 & -2;
	  HEAP32[$111>>2] = $227;
	  $228 = $psize$0 | 1;
	  $229 = ((($p$0)) + 4|0);
	  HEAP32[$229>>2] = $228;
	  $230 = (($p$0) + ($psize$0)|0);
	  HEAP32[$230>>2] = $psize$0;
	  $psize$1 = $psize$0;
	 }
	 $231 = $psize$1 >>> 3;
	 $232 = ($psize$1>>>0)<(256);
	 if ($232) {
	  $233 = $231 << 1;
	  $234 = (116 + ($233<<2)|0);
	  $235 = HEAP32[76>>2]|0;
	  $236 = 1 << $231;
	  $237 = $235 & $236;
	  $238 = ($237|0)==(0);
	  if ($238) {
	   $239 = $235 | $236;
	   HEAP32[76>>2] = $239;
	   $$pre = (($233) + 2)|0;
	   $$pre57 = (116 + ($$pre<<2)|0);
	   $$pre$phiZ2D = $$pre57;$F16$0 = $234;
	  } else {
	   $$sum11 = (($233) + 2)|0;
	   $240 = (116 + ($$sum11<<2)|0);
	   $241 = HEAP32[$240>>2]|0;
	   $242 = HEAP32[(92)>>2]|0;
	   $243 = ($241>>>0)<($242>>>0);
	   if ($243) {
	    _abort();
	    // unreachable;
	   } else {
	    $$pre$phiZ2D = $240;$F16$0 = $241;
	   }
	  }
	  HEAP32[$$pre$phiZ2D>>2] = $p$0;
	  $244 = ((($F16$0)) + 12|0);
	  HEAP32[$244>>2] = $p$0;
	  $245 = ((($p$0)) + 8|0);
	  HEAP32[$245>>2] = $F16$0;
	  $246 = ((($p$0)) + 12|0);
	  HEAP32[$246>>2] = $234;
	  return;
	 }
	 $247 = $psize$1 >>> 8;
	 $248 = ($247|0)==(0);
	 if ($248) {
	  $I18$0 = 0;
	 } else {
	  $249 = ($psize$1>>>0)>(16777215);
	  if ($249) {
	   $I18$0 = 31;
	  } else {
	   $250 = (($247) + 1048320)|0;
	   $251 = $250 >>> 16;
	   $252 = $251 & 8;
	   $253 = $247 << $252;
	   $254 = (($253) + 520192)|0;
	   $255 = $254 >>> 16;
	   $256 = $255 & 4;
	   $257 = $256 | $252;
	   $258 = $253 << $256;
	   $259 = (($258) + 245760)|0;
	   $260 = $259 >>> 16;
	   $261 = $260 & 2;
	   $262 = $257 | $261;
	   $263 = (14 - ($262))|0;
	   $264 = $258 << $261;
	   $265 = $264 >>> 15;
	   $266 = (($263) + ($265))|0;
	   $267 = $266 << 1;
	   $268 = (($266) + 7)|0;
	   $269 = $psize$1 >>> $268;
	   $270 = $269 & 1;
	   $271 = $270 | $267;
	   $I18$0 = $271;
	  }
	 }
	 $272 = (380 + ($I18$0<<2)|0);
	 $273 = ((($p$0)) + 28|0);
	 HEAP32[$273>>2] = $I18$0;
	 $274 = ((($p$0)) + 16|0);
	 $275 = ((($p$0)) + 20|0);
	 HEAP32[$275>>2] = 0;
	 HEAP32[$274>>2] = 0;
	 $276 = HEAP32[(80)>>2]|0;
	 $277 = 1 << $I18$0;
	 $278 = $276 & $277;
	 $279 = ($278|0)==(0);
	 L199: do {
	  if ($279) {
	   $280 = $276 | $277;
	   HEAP32[(80)>>2] = $280;
	   HEAP32[$272>>2] = $p$0;
	   $281 = ((($p$0)) + 24|0);
	   HEAP32[$281>>2] = $272;
	   $282 = ((($p$0)) + 12|0);
	   HEAP32[$282>>2] = $p$0;
	   $283 = ((($p$0)) + 8|0);
	   HEAP32[$283>>2] = $p$0;
	  } else {
	   $284 = HEAP32[$272>>2]|0;
	   $285 = ((($284)) + 4|0);
	   $286 = HEAP32[$285>>2]|0;
	   $287 = $286 & -8;
	   $288 = ($287|0)==($psize$1|0);
	   L202: do {
	    if ($288) {
	     $T$0$lcssa = $284;
	    } else {
	     $289 = ($I18$0|0)==(31);
	     $290 = $I18$0 >>> 1;
	     $291 = (25 - ($290))|0;
	     $292 = $289 ? 0 : $291;
	     $293 = $psize$1 << $292;
	     $K19$052 = $293;$T$051 = $284;
	     while(1) {
	      $300 = $K19$052 >>> 31;
	      $301 = (((($T$051)) + 16|0) + ($300<<2)|0);
	      $296 = HEAP32[$301>>2]|0;
	      $302 = ($296|0)==(0|0);
	      if ($302) {
	       $$lcssa = $301;$T$051$lcssa = $T$051;
	       break;
	      }
	      $294 = $K19$052 << 1;
	      $295 = ((($296)) + 4|0);
	      $297 = HEAP32[$295>>2]|0;
	      $298 = $297 & -8;
	      $299 = ($298|0)==($psize$1|0);
	      if ($299) {
	       $T$0$lcssa = $296;
	       break L202;
	      } else {
	       $K19$052 = $294;$T$051 = $296;
	      }
	     }
	     $303 = HEAP32[(92)>>2]|0;
	     $304 = ($$lcssa>>>0)<($303>>>0);
	     if ($304) {
	      _abort();
	      // unreachable;
	     } else {
	      HEAP32[$$lcssa>>2] = $p$0;
	      $305 = ((($p$0)) + 24|0);
	      HEAP32[$305>>2] = $T$051$lcssa;
	      $306 = ((($p$0)) + 12|0);
	      HEAP32[$306>>2] = $p$0;
	      $307 = ((($p$0)) + 8|0);
	      HEAP32[$307>>2] = $p$0;
	      break L199;
	     }
	    }
	   } while(0);
	   $308 = ((($T$0$lcssa)) + 8|0);
	   $309 = HEAP32[$308>>2]|0;
	   $310 = HEAP32[(92)>>2]|0;
	   $311 = ($309>>>0)>=($310>>>0);
	   $not$ = ($T$0$lcssa>>>0)>=($310>>>0);
	   $312 = $311 & $not$;
	   if ($312) {
	    $313 = ((($309)) + 12|0);
	    HEAP32[$313>>2] = $p$0;
	    HEAP32[$308>>2] = $p$0;
	    $314 = ((($p$0)) + 8|0);
	    HEAP32[$314>>2] = $309;
	    $315 = ((($p$0)) + 12|0);
	    HEAP32[$315>>2] = $T$0$lcssa;
	    $316 = ((($p$0)) + 24|0);
	    HEAP32[$316>>2] = 0;
	    break;
	   } else {
	    _abort();
	    // unreachable;
	   }
	  }
	 } while(0);
	 $317 = HEAP32[(108)>>2]|0;
	 $318 = (($317) + -1)|0;
	 HEAP32[(108)>>2] = $318;
	 $319 = ($318|0)==(0);
	 if ($319) {
	  $sp$0$in$i = (532);
	 } else {
	  return;
	 }
	 while(1) {
	  $sp$0$i = HEAP32[$sp$0$in$i>>2]|0;
	  $320 = ($sp$0$i|0)==(0|0);
	  $321 = ((($sp$0$i)) + 8|0);
	  if ($320) {
	   break;
	  } else {
	   $sp$0$in$i = $321;
	  }
	 }
	 HEAP32[(108)>>2] = -1;
	 return;
	}
	function runPostSets() {
	}
	function _memset(ptr, value, num) {
	    ptr = ptr|0; value = value|0; num = num|0;
	    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
	    stop = (ptr + num)|0;
	    if ((num|0) >= 20) {
	      // This is unaligned, but quite large, so work hard to get to aligned settings
	      value = value & 0xff;
	      unaligned = ptr & 3;
	      value4 = value | (value << 8) | (value << 16) | (value << 24);
	      stop4 = stop & ~3;
	      if (unaligned) {
	        unaligned = (ptr + 4 - unaligned)|0;
	        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
	          HEAP8[((ptr)>>0)]=value;
	          ptr = (ptr+1)|0;
	        }
	      }
	      while ((ptr|0) < (stop4|0)) {
	        HEAP32[((ptr)>>2)]=value4;
	        ptr = (ptr+4)|0;
	      }
	    }
	    while ((ptr|0) < (stop|0)) {
	      HEAP8[((ptr)>>0)]=value;
	      ptr = (ptr+1)|0;
	    }
	    return (ptr-num)|0;
	}
	function _memcpy(dest, src, num) {
	    dest = dest|0; src = src|0; num = num|0;
	    var ret = 0;
	    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
	    ret = dest|0;
	    if ((dest&3) == (src&3)) {
	      while (dest & 3) {
	        if ((num|0) == 0) return ret|0;
	        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
	        dest = (dest+1)|0;
	        src = (src+1)|0;
	        num = (num-1)|0;
	      }
	      while ((num|0) >= 4) {
	        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
	        dest = (dest+4)|0;
	        src = (src+4)|0;
	        num = (num-4)|0;
	      }
	    }
	    while ((num|0) > 0) {
	      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
	      dest = (dest+1)|0;
	      src = (src+1)|0;
	      num = (num-1)|0;
	    }
	    return ret|0;
	}

	  
	function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
	  index = index|0;
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  FUNCTION_TABLE_viiiii[index&63](a1|0,a2|0,a3|0,a4|0,a5|0);
	}


	function jsCall_viiiii_0(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(0,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_1(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(1,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_2(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(2,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_3(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(3,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_4(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(4,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_5(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(5,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_6(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(6,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_7(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(7,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_8(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(8,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_9(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(9,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_10(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(10,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_11(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(11,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_12(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(12,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_13(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(13,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_14(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(14,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_15(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(15,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_16(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(16,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_17(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(17,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_18(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(18,a1|0,a2|0,a3|0,a4|0,a5|0);
	}



	function jsCall_viiiii_19(a1,a2,a3,a4,a5) {
	  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
	  jsCall_viiiii(19,a1|0,a2|0,a3|0,a4|0,a5|0);
	}


	function b0(p0,p1,p2,p3,p4) {
	 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_viiiii(0);
	}

	// EMSCRIPTEN_END_FUNCS
	var FUNCTION_TABLE_viiiii = [b0,b0,jsCall_viiiii_0,b0,jsCall_viiiii_1,b0,jsCall_viiiii_2,b0,jsCall_viiiii_3,b0,jsCall_viiiii_4,b0,jsCall_viiiii_5,b0,jsCall_viiiii_6,b0,jsCall_viiiii_7,b0,jsCall_viiiii_8,b0,jsCall_viiiii_9,b0,jsCall_viiiii_10,b0,jsCall_viiiii_11,b0,jsCall_viiiii_12,b0,jsCall_viiiii_13
	,b0,jsCall_viiiii_14,b0,jsCall_viiiii_15,b0,jsCall_viiiii_16,b0,jsCall_viiiii_17,b0,jsCall_viiiii_18,b0,jsCall_viiiii_19,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
	,b0,b0,b0,b0,b0];

	  return { _malloc: _malloc, _free: _free, _memcpy: _memcpy, _loop: _loop, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_viiiii: dynCall_viiiii };
	})
	// EMSCRIPTEN_END_ASM
	(Module.asmGlobalArg, Module.asmLibraryArg, buffer);
	var real__loop = asm["_loop"]; asm["_loop"] = function() {
	assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
	assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
	return real__loop.apply(null, arguments);
	};

	var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
	assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
	assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
	return real__malloc.apply(null, arguments);
	};

	var real__free = asm["_free"]; asm["_free"] = function() {
	assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
	assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
	return real__free.apply(null, arguments);
	};
	var _loop = Module["_loop"] = asm["_loop"];
	var runPostSets = Module["runPostSets"] = asm["runPostSets"];
	var _memset = Module["_memset"] = asm["_memset"];
	var _malloc = Module["_malloc"] = asm["_malloc"];
	var _memcpy = Module["_memcpy"] = asm["_memcpy"];
	var _free = Module["_free"] = asm["_free"];
	var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
	;

	Runtime.stackAlloc = asm['stackAlloc'];
	Runtime.stackSave = asm['stackSave'];
	Runtime.stackRestore = asm['stackRestore'];
	Runtime.establishStackSpace = asm['establishStackSpace'];

	Runtime.setTempRet0 = asm['setTempRet0'];
	Runtime.getTempRet0 = asm['getTempRet0'];



	// === Auto-generated postamble setup entry stuff ===


	function ExitStatus(status) {
	  this.name = "ExitStatus";
	  this.message = "Program terminated with exit(" + status + ")";
	  this.status = status;
	};
	ExitStatus.prototype = new Error();
	ExitStatus.prototype.constructor = ExitStatus;

	var initialStackTop;
	var preloadStartTime = null;
	var calledMain = false;

	dependenciesFulfilled = function runCaller() {
	  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
	  if (!Module['calledRun']) run();
	  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
	}

	Module['callMain'] = Module.callMain = function callMain(args) {
	  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
	  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

	  args = args || [];

	  ensureInitRuntime();

	  var argc = args.length+1;
	  function pad() {
	    for (var i = 0; i < 4-1; i++) {
	      argv.push(0);
	    }
	  }
	  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
	  pad();
	  for (var i = 0; i < argc-1; i = i + 1) {
	    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
	    pad();
	  }
	  argv.push(0);
	  argv = allocate(argv, 'i32', ALLOC_NORMAL);


	  try {

	    var ret = Module['_main'](argc, argv, 0);


	    // if we're not running an evented main loop, it's time to exit
	    exit(ret, /* implicit = */ true);
	  }
	  catch(e) {
	    if (e instanceof ExitStatus) {
	      // exit() throws this once it's done to make sure execution
	      // has been stopped completely
	      return;
	    } else if (e == 'SimulateInfiniteLoop') {
	      // running an evented main loop, don't immediately exit
	      Module['noExitRuntime'] = true;
	      return;
	    } else {
	      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
	      throw e;
	    }
	  } finally {
	    calledMain = true;
	  }
	}




	function run(args) {
	  args = args || Module['arguments'];

	  if (preloadStartTime === null) preloadStartTime = Date.now();

	  if (runDependencies > 0) {
	    Module.printErr('run() called, but dependencies remain, so not running');
	    return;
	  }

	  preRun();

	  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
	  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

	  function doRun() {
	    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
	    Module['calledRun'] = true;

	    if (ABORT) return; 

	    ensureInitRuntime();

	    preMain();

	    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
	      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
	    }

	    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

	    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

	    postRun();
	  }

	  if (Module['setStatus']) {
	    Module['setStatus']('Running...');
	    setTimeout(function() {
	      setTimeout(function() {
	        Module['setStatus']('');
	      }, 1);
	      doRun();
	    }, 1);
	  } else {
	    doRun();
	  }
	}
	Module['run'] = Module.run = run;

	function exit(status, implicit) {
	  if (implicit && Module['noExitRuntime']) {
	    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
	    return;
	  }

	  if (Module['noExitRuntime']) {
	    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
	  } else {

	    ABORT = true;
	    EXITSTATUS = status;
	    STACKTOP = initialStackTop;

	    exitRuntime();

	    if (Module['onExit']) Module['onExit'](status);
	  }

	  if (ENVIRONMENT_IS_NODE) {
	    // Work around a node.js bug where stdout buffer is not flushed at process exit:
	    // Instead of process.exit() directly, wait for stdout flush event.
	    // See https://github.com/joyent/node/issues/1669 and https://github.com/kripken/emscripten/issues/2582
	    // Workaround is based on https://github.com/RReverser/acorn/commit/50ab143cecc9ed71a2d66f78b4aec3bb2e9844f6
	    process['stdout']['once']('drain', function () {
	      process['exit'](status);
	    });
	    console.log(' '); // Make sure to print something to force the drain event to occur, in case the stdout buffer was empty.
	    // Work around another node bug where sometimes 'drain' is never fired - make another effort
	    // to emit the exit status, after a significant delay (if node hasn't fired drain by then, give up)
	    setTimeout(function() {
	      process['exit'](status);
	    }, 500);
	  } else
	  if (ENVIRONMENT_IS_SHELL && typeof quit === 'function') {
	    quit(status);
	  }
	  // if we reach here, we must throw an exception to halt the current execution
	  throw new ExitStatus(status);
	}
	Module['exit'] = Module.exit = exit;

	var abortDecorators = [];

	function abort(what) {
	  if (what !== undefined) {
	    Module.print(what);
	    Module.printErr(what);
	    what = JSON.stringify(what)
	  } else {
	    what = '';
	  }

	  ABORT = true;
	  EXITSTATUS = 1;

	  var extra = '';

	  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
	  if (abortDecorators) {
	    abortDecorators.forEach(function(decorator) {
	      output = decorator(output, what);
	    });
	  }
	  throw output;
	}
	Module['abort'] = Module.abort = abort;

	// {{PRE_RUN_ADDITIONS}}

	if (Module['preInit']) {
	  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
	  while (Module['preInit'].length > 0) {
	    Module['preInit'].pop()();
	  }
	}

	// shouldRunNow refers to calling main(), not run().
	var shouldRunNow = true;
	if (Module['noInitialRun']) {
	  shouldRunNow = false;
	}


	run();

	// {{POST_RUN_ADDITIONS}}






	// {{MODULE_ADDITIONS}}





	/*** EXPORTS FROM exports-loader ***/
	module.exports = Module;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61), "/", __webpack_require__(62)(module)))

/***/ },
/* 61 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
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
	    var timeout = runTimeout(cleanUpNextTick);
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
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 63 */
/***/ function(module, exports) {

	

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(68)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(67)();
	// imports


	// module
	exports.push([module.id, ".led {\n  border-radius: 4px;\n  background: linear-gradient(to bottom, rgba(56,56,56,1) 0%,rgba(33,33,33,1) 100%);\n  box-shadow: 0 1px 0 #fff, inset 0 1px #555;\n  border: 1px solid #333;\n  padding: 5px;\n  display: inline-block;\n}\n\n.led canvas {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);