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
	const preact_1 = __webpack_require__(1);
	const playground_1 = __webpack_require__(2);
	const symbols_1 = __webpack_require__(10);
	__webpack_require__(12);
	preact_1.render(preact_1.h("div", null,
	    preact_1.h("h1", null, "LED Simulator"),
	    preact_1.h("h2", null, "Text Writer"),
	    preact_1.h(playground_1.default, null),
	    preact_1.h("h2", null, "Symbols"),
	    preact_1.h(symbols_1.default, null)), document.getElementById('root'));


/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const preact_1 = __webpack_require__(1);
	const matrix_1 = __webpack_require__(3);
	const store_1 = __webpack_require__(4);
	const fonts = __webpack_require__(6);
	class Playground extends preact_1.Component {
	    constructor() {
	        super();
	        this.state = {
	            cols: 32,
	            rows: 16,
	            text: 'Hello\nThere',
	            color: '#5fd3ff',
	            fonts: Object.keys(fonts),
	            font: 'fivebyfive'
	        };
	    }
	    componentDidMount() {
	        this.led = new matrix_1.default(this.canvas, {
	            x: this.state.cols,
	            y: this.state.rows
	        });
	        this.draw();
	    }
	    draw() {
	        const store = store_1.createStore(this.state.cols, this.state.rows);
	        store.write(this.state.text, fonts[this.state.font], this.state.color);
	        this.led.clear();
	        this.led.draw(store.matrix);
	    }
	    slideChange(e, prop) {
	        this.setState({
	            [prop]: parseInt(e.target.value)
	        });
	        this.led.setNewDimensions(this.state.cols, this.state.rows);
	        this.draw();
	    }
	    propChange(e, prop) {
	        this.setState({
	            [prop]: e.target.value
	        });
	        this.draw();
	    }
	    render(_, { rows, cols, text, color, fonts, font }) {
	        return (preact_1.h("div", { className: "row" },
	            preact_1.h("div", { className: "column" },
	                "x: ",
	                cols,
	                preact_1.h("input", { type: "range", min: "32", max: "64", onInput: e => this.slideChange(e, 'cols'), value: cols.toString() }),
	                preact_1.h("br", null),
	                "y: ",
	                rows,
	                preact_1.h("input", { type: "range", min: "16", max: "32", onInput: e => this.slideChange(e, 'rows'), value: rows.toString() }),
	                preact_1.h("br", null),
	                preact_1.h("textarea", { value: text, onKeyUp: e => this.propChange(e, 'text') }),
	                preact_1.h("br", null),
	                preact_1.h("input", { type: "color", value: color, onChange: e => this.propChange(e, 'color') }),
	                preact_1.h("br", null),
	                fonts.map(fontName => preact_1.h("label", null,
	                    preact_1.h("input", { type: "radio", value: fontName, checked: fontName === font, onChange: e => this.propChange(e, 'font') }),
	                    " ",
	                    fontName))),
	            preact_1.h("div", { className: "column column-60" },
	                preact_1.h("div", { class: "led" },
	                    preact_1.h("canvas", { ref: canvas => this.canvas = canvas })))));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Playground;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	const DEFAULT_OPTS = {
	    x: 32,
	    y: 16,
	    pixelWidth: 10,
	    pixelHeight: 10,
	    margin: 4,
	    glow: false
	};
	class LedMatrix {
	    constructor(canvas, opts = {}) {
	        this.canvas = canvas;
	        this.ctx = this.canvas.getContext('2d');
	        this.opts = Object.assign({}, DEFAULT_OPTS, opts);
	        this.setup();
	    }
	    setup() {
	        const width = this.opts.x * (this.opts.pixelWidth + this.opts.margin);
	        const height = this.opts.y * (this.opts.pixelHeight + this.opts.margin);
	        this.canvas.width = width;
	        this.canvas.height = height;
	        this.canvas.style.width = `${width / 2}px`;
	        this.canvas.style.height = `${height / 2}px`;
	    }
	    draw(data) {
	        const { pixelWidth, pixelHeight, margin, x, y, glow } = this.opts;
	        const pixels = this.opts.x * this.opts.y;
	        for (let i = 0; i < pixels; i += 1) {
	            const { on, color } = data[i];
	            const y = Math.floor(i / this.opts.x);
	            const x = i - (y * this.opts.x);
	            const rgba = on ? `rgba(${color.r},${color.g},${color.b},${color.a})` : 'rgba(0,0,0,.1)';
	            this.ctx.fillStyle = rgba;
	            this.ctx.fillRect(x * (pixelWidth + margin), y * (pixelHeight + margin), pixelWidth, pixelHeight);
	            if (glow && on) {
	                this.ctx.shadowBlur = 5;
	                this.ctx.shadowColor = rgba;
	            }
	        }
	    }
	    clear() {
	        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    }
	    setNewDimensions(x, y) {
	        this.opts = Object.assign({}, this.opts, { x, y });
	        this.setup();
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LedMatrix;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tools_1 = __webpack_require__(5);
	function createStore(xw, yw) {
	    const matrix = Array(xw * yw).fill({
	        on: false
	    });
	    const fill = (x = 0, y = 0, r = 0, g = 0, b = 0, a = 1) => {
	        matrix[(y * xw) + x] = {
	            on: true,
	            color: { r, g, b, a }
	        };
	    };
	    const write = (text, font, color) => {
	        const lines = text.split('\n');
	        const [r, g, b] = tools_1.hexToRGB(color);
	        const CHAR_WIDTH = font[0].length;
	        const CHAR_HEIGHT = font[0][0].length;
	        lines.forEach((ch, line) => {
	            for (let i = 0; i < ch.length; i += 1) {
	                const ind = ch.charCodeAt(i) - 32;
	                const fontRow = font[ind];
	                for (let x = 0; x < CHAR_WIDTH; x += 1) {
	                    const col = fontRow[x];
	                    for (let y = 0; y < CHAR_HEIGHT; y += 1) {
	                        if (col[y] === '1') {
	                            fill(x + (i * CHAR_WIDTH), y + (line * CHAR_HEIGHT), r, g, b, 1);
	                        }
	                    }
	                }
	            }
	        });
	    };
	    return {
	        matrix,
	        fill,
	        write
	    };
	}
	exports.createStore = createStore;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	function hexToBin(num) {
	    const bin = num.toString(2);
	    return (bin.length < 8) ? '0'.repeat(8 - bin.length) + bin : bin;
	}
	exports.hexToBin = hexToBin;
	function prepareFont(fontMap) {
	    return fontMap.map(row => row.map(num => hexToBin(num).split('').reverse().join('')));
	}
	exports.prepareFont = prepareFont;
	function hexToRGB(hexStr) {
	    const hex = parseInt(hexStr.substr(1), 16);
	    return [hex >> 16, hex >> 8 & 0xFF, hex & 0xFF];
	}
	exports.hexToRGB = hexToRGB;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _5x5_1 = __webpack_require__(7);
	exports.fivebyfive = _5x5_1.font;
	var tama_1 = __webpack_require__(8);
	exports.tama = tama_1.font;
	var m38_1 = __webpack_require__(9);
	exports.m38 = m38_1.font;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tools_1 = __webpack_require__(5);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tools_1 = __webpack_require__(5);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tools_1 = __webpack_require__(5);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const preact_1 = __webpack_require__(1);
	const matrix_1 = __webpack_require__(3);
	const store_1 = __webpack_require__(4);
	const tools_1 = __webpack_require__(5);
	const shape_1 = __webpack_require__(11);
	class Symbols extends preact_1.Component {
	    constructor() {
	        super();
	        this.state = {
	            shape: 'cross'
	        };
	    }
	    componentDidMount() {
	        this.led = new matrix_1.default(this.canvas, {
	            x: 11,
	            y: 11
	        });
	        this.draw();
	    }
	    draw() {
	        const c = tools_1.hexToRGB(shape_1.colors[Math.floor(Math.random() * (shape_1.colors.length - 1))]);
	        const shape = shape_1.shapes[this.state.shape];
	        const len = shape.length;
	        const width = Math.sqrt(len);
	        const store = store_1.createStore(width, width);
	        for (let i = 0; i < len; i += 1) {
	            const y = Math.floor(i / width);
	            const x = i - (y * width);
	            if (shape_1.shapes[this.state.shape][i] === 1) {
	                store.fill(x, y, c[0], c[1], c[2], c[3]);
	            }
	        }
	        this.led.clear();
	        this.led.draw(store.matrix);
	    }
	    handleShapeChange(shape) {
	        this.setState({
	            shape
	        });
	        this.draw();
	    }
	    render(_, { shape }) {
	        return (preact_1.h("div", { className: "row" },
	            preact_1.h("div", { className: "column" }, Object.keys(shape_1.shapes).map(shapeName => preact_1.h("label", null,
	                preact_1.h("input", { type: "radio", value: shapeName, checked: shapeName === shape, onChange: e => this.handleShapeChange(shapeName) }),
	                " ",
	                shapeName))),
	            preact_1.h("div", { className: "column column-60" },
	                preact_1.h("div", { class: "led" },
	                    preact_1.h("canvas", { ref: canvas => this.canvas = canvas })))));
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Symbols;


/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".led {\n  border-radius: 4px;\n  background: linear-gradient(to bottom, rgba(56,56,56,1) 0%,rgba(33,33,33,1) 100%);\n  box-shadow: 0 1px 0 #fff, inset 0 1px #555;\n  border: 1px solid #333;\n  padding: 5px;\n  display: inline-block;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
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
/* 15 */
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