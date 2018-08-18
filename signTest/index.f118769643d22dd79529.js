/*! For license information please see LICENSES */
webpackJsonp([6], {
	"/YIb": function(t, i, e) {
		var s = e("gA56");
		"string" == typeof s && (s = [[t.i, s, ""]]),
		s.locals && (t.exports = s.locals);
		e("rjj0")("497e8699", s, !1, {
			sourceMap: !1
		})
	},
	"2/XU": function(t, i, e) { (t.exports = e("FZ+f")(!1)).push([t.i, ".list-wrapper{position:absolute;left:25.6px;left:1.6rem;top:12.8px;top:.8rem;right:0;bottom:0;overflow:hidden;background:#fff}.pullup-wrapper{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:16px 0}", ""])
	},
	"3QXb": function(t, i, e) {
		"use strict";
		i.a = {
			props: ["cid"],
			data: function() {
				return {}
			},
			methods: {}
		}
	},
	"3gRd": function(t, i, e) { (t.exports = e("FZ+f")(!1)).push([t.i, "body[data-v-2f754cba],html[data-v-2f754cba]{width:100%;height:100%;background:#fff;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.search-type[data-v-2f754cba]{border-bottom:2px solid #efefef;margin-top:16px;margin-top:1rem}.search-type div[data-v-2f754cba]{display:inline-block;width:16.66%;text-align:center;line-height:12.8px;line-height:.8rem;color:#999}.search-type div.active span[data-v-2f754cba]{border-bottom:2px solid #000;padding-bottom:3.2px;padding-bottom:.2rem;color:#000}.scroller[data-v-2f754cba]{width:100%;padding-top:46px}.category[data-v-2f754cba]{background:#f8f8f8;width:100%;height:100%;font-size:4.8px;font-size:.3rem;position:relative}.category .models[data-v-2f754cba]{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;height:100vh;overflow:hidden}.category .brands[data-v-2f754cba]{height:100%;background:#f8f8f8;width:25.6px;width:1.6rem;margin-top:12.8px;margin-top:.8rem;padding-bottom:25.6px;padding-bottom:1.6rem}.category .brands ul[data-v-2f754cba]{pointer-events:auto;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1);-webkit-transition-duration:0ms;transition-duration:0ms}.category .brands .item[data-v-2f754cba]{line-height:16px;line-height:1rem;height:16px;height:1rem;overflow:hidden;text-align:center;border-bottom:1px solid #f2f2f2}.category .brands .item span[data-v-2f754cba]{display:inline-block;width:100%;height:16px;height:1rem}.category .brands .active[data-v-2f754cba]{background:#fff;border-left:3px solid #3782ff;color:#3782ff}", ""])
	},
	"6mwK": function(t, i, e) {
		"use strict";
		var s = e("9URz"),
		o = e("uWQa"),
		r = !1;
		var n = function(t) {
			r || e("/YIb")
		},
		a = e("VU/8")(s.a, o.a, !1, n, "data-v-07965744", null);
		a.options.__file = "components/Category/goodsList.vue",
		i.a = a.exports
	},
	"9URz": function(t, i, e) {
		"use strict";
		i.a = {
			props: ["list"]
		}
	},
	E6UY: function(t, i, e) {
		"use strict";
		var s = function() {
			var t = this.$createElement;
			return (this._self._c || t)("div", {
				staticClass: "mf-loading-container"
			},
			[this._v("\n  加载中\n")])
		};
		s._withStripped = !0;
		var o = {
			render: s,
			staticRenderFns: []
		};
		i.a = o
	},
	FF4D: function(t, i, e) {
		"use strict";
		i.a = {
			name: "loading"
		}
	},
	GQaK: function(t, i, e) {
		"use strict";
		var s = function() {
			return function(t, i) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return function(t, i) {
					var e = [],
					s = !0,
					o = !1,
					r = void 0;
					try {
						for (var n, a = t[Symbol.iterator](); ! (s = (n = a.next()).done) && (e.push(n.value), !i || e.length !== i); s = !0);
					} catch(t) {
						o = !0,
						r = t
					} finally {
						try { ! s && a.
							return && a.
							return ()
						} finally {
							if (o) throw r
						}
					}
					return e
				} (t, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		} (),
		o = function(t) {
			if (Array.isArray(t)) {
				for (var i = 0,
				e = Array(t.length); i < t.length; i++) e[i] = t[i];
				return e
			}
			return Array.from(t)
		};
		var r = "undefined" != typeof window,
		n = r && navigator.userAgent.toLowerCase(),
		a = n && /wechatdevtools/.test(n),
		h = n && n.indexOf("android") > 0;
		function l() {
			return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart: +new Date
		}
		function c(t) {
			for (var i = arguments.length,
			e = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) e[s - 1] = arguments[s];
			for (var o = 0; o < e.length; o++) {
				var r = e[o];
				for (var n in r) t[n] = r[n]
			}
			return t
		}
		function p(t) {
			return void 0 === t || null === t
		}
		function d(t, i) {
			return Math.sqrt(t * t + i * i)
		}
		var u = r && document.createElement("div").style,
		f = function() {
			if (!r) return ! 1;
			var t = {
				webkit: "webkitTransform",
				Moz: "MozTransform",
				O: "OTransform",
				ms: "msTransform",
				standard: "transform"
			};
			for (var i in t) if (void 0 !== u[t[i]]) return i;
			return ! 1
		} ();
		function g(t) {
			return ! 1 !== f && ("standard" === f ? "transitionEnd" === t ? "transitionend": t: f + t.charAt(0).toUpperCase() + t.substr(1))
		}
		function m(t, i, e, s) {
			t.addEventListener(i, e, {
				passive: !1,
				capture: !!s
			})
		}
		function v(t, i, e, s) {
			t.removeEventListener(i, e, {
				passive: !1,
				capture: !!s
			})
		}
		function y(t) {
			for (var i = 0,
			e = 0; t;) i -= t.offsetLeft,
			e -= t.offsetTop,
			t = t.offsetParent;
			return {
				left: i,
				top: e
			}
		}
		function x(t) {
			var i = t.getBoundingClientRect();
			return {
				left: -(i.left + window.pageXOffset),
				top: -(i.top + window.pageYOffset)
			}
		}
		var b = g("transform"),
		w = r && g("perspective") in u,
		_ = r && ("ontouchstart" in window || a),
		T = !1 !== b,
		S = r && g("transition") in u,
		M = {
			transform: b,
			transitionTimingFunction: g("transitionTimingFunction"),
			transitionDuration: g("transitionDuration"),
			transitionProperty: g("transitionProperty"),
			transitionDelay: g("transitionDelay"),
			transformOrigin: g("transformOrigin"),
			transitionEnd: g("transitionEnd")
		},
		P = 1,
		Y = {
			touchstart: P,
			touchmove: P,
			touchend: P,
			mousedown: 2,
			mousemove: 2,
			mouseup: 2
		};
		function X(t) {
			if (t instanceof window.SVGElement) {
				var i = t.getBoundingClientRect();
				return {
					top: i.top,
					left: i.left,
					width: i.width,
					height: i.height
				}
			}
			return {
				top: t.offsetTop,
				left: t.offsetLeft,
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		}
		function k(t, i) {
			for (var e in i) if (i[e].test(t[e])) return ! 0;
			return ! 1
		}
		function D(t, i) {
			t.removeChild(i)
		}
		var E = {
			startX: 0,
			startY: 0,
			scrollX: !1,
			scrollY: !0,
			freeScroll: !1,
			directionLockThreshold: 5,
			eventPassthrough: "",
			click: !1,
			tap: !1,
			bounce: !0,
			bounceTime: 800,
			momentum: !0,
			momentumLimitTime: 300,
			momentumLimitDistance: 15,
			swipeTime: 2500,
			swipeBounceTime: 500,
			deceleration: .001,
			flickLimitTime: 200,
			flickLimitDistance: 100,
			resizePolling: 60,
			probeType: 0,
			preventDefault: !0,
			preventDefaultException: {
				tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
			},
			HWCompositing: !0,
			useTransition: !0,
			useTransform: !0,
			bindToWrapper: !1,
			disableMouse: _,
			disableTouch: !_,
			observeDOM: !0,
			autoBlur: !0,
			wheel: !1,
			snap: !1,
			scrollbar: !1,
			pullDownRefresh: !1,
			pullUpLoad: !1,
			mouseWheel: !1,
			stopPropagation: !1,
			zoom: !1
		};
		var C = {
			swipe: {
				style: "cubic-bezier(0.23, 1, 0.32, 1)",
				fn: function(t) {
					return 1 + --t * t * t * t * t
				}
			},
			swipeBounce: {
				style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				fn: function(t) {
					return t * (2 - t)
				}
			},
			bounce: {
				style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
				fn: function(t) {
					return 1 - --t * t * t * t
				}
			}
		};
		function L(t, i, e, s, o, r) {
			var n = t - i,
			a = Math.abs(n) / e,
			h = r.deceleration,
			l = r.itemHeight,
			c = r.swipeBounceTime,
			p = r.wheel,
			d = r.swipeTime,
			u = p ? 4 : 15,
			f = t + a / h * (n < 0 ? -1 : 1);
			return p && l && (f = Math.round(f / l) * l),
			f < s ? (f = o ? Math.max(s - o / 4, s - o / u * a) : s, d = c) : f > 0 && (f = o ? Math.min(o / 4, o / u * a) : 0, d = c),
			{
				destination: Math.round(f),
				duration: d
			}
		}
		function U() {}
		var z = r ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
		function(t) {
			return window.setTimeout(t, (t.interval || 100 / 60) / 2)
		}: U,
		W = r ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
		function(t) {
			window.clearTimeout(t)
		}: U,
		O = 1,
		H = -1,
		F = 1,
		A = -1,
		I = 1,
		R = 3;
		function B(t) {
			console.error("[BScroll warn]: " + t)
		}
		function N(t) {
			var i = document.createElement("div"),
			e = document.createElement("div");
			return i.style.cssText = "position:absolute;z-index:9999;pointerEvents:none",
			e.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",
			e.className = "bscroll-indicator",
			"horizontal" === t ? (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", e.style.height = "100%", i.className = "bscroll-horizontal-scrollbar") : (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", e.style.width = "100%", i.className = "bscroll-vertical-scrollbar"),
			i.style.cssText += ";overflow:hidden",
			i.appendChild(e),
			i
		}
		function $(t, i) {
			this.wrapper = i.el,
			this.wrapperStyle = this.wrapper.style,
			this.indicator = this.wrapper.children[0],
			this.indicatorStyle = this.indicator.style,
			this.scroller = t,
			this.direction = i.direction,
			i.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1,
			this.sizeRatioX = 1,
			this.sizeRatioY = 1,
			this.maxPosX = 0,
			this.maxPosY = 0,
			this.x = 0,
			this.y = 0,
			i.interactive && this._addDOMEvents()
		}
		function V(t, i) {
			this.wrapper = "string" == typeof t ? document.querySelector(t) : t,
			this.wrapper || B("Can not resolve the wrapper DOM."),
			this.scroller = this.wrapper.children[0],
			this.scroller || B("The wrapper need at least one child element to be scroller."),
			this.scrollerStyle = this.scroller.style,
			this._init(t, i)
		}
		$.prototype.handleEvent = function(t) {
			switch (t.type) {
			case "touchstart":
			case "mousedown":
				this._start(t);
				break;
			case "touchmove":
			case "mousemove":
				this._move(t);
				break;
			case "touchend":
			case "mouseup":
			case "touchcancel":
			case "mousecancel":
				this._end(t)
			}
		},
		$.prototype.refresh = function() {
			this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition())
		},
		$.prototype.fade = function(t, i) {
			var e = this;
			if (!i || this.visible) {
				var s = t ? 250 : 500;
				t = t ? "1": "0",
				this.wrapperStyle[M.transitionDuration] = s + "ms",
				clearTimeout(this.fadeTimeout),
				this.fadeTimeout = setTimeout(function() {
					e.wrapperStyle.opacity = t,
					e.visible = +t
				},
				0)
			}
		},
		$.prototype.updatePosition = function() {
			if ("vertical" === this.direction) {
				var t = Math.round(this.sizeRatioY * this.scroller.y);
				if (t < 0) {
					this.transitionTime(500);
					var i = Math.max(this.indicatorHeight + 3 * t, 8);
					this.indicatorStyle.height = i + "px",
					t = 0
				} else if (t > this.maxPosY) {
					this.transitionTime(500);
					var e = Math.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8);
					this.indicatorStyle.height = e + "px",
					t = this.maxPosY + this.indicatorHeight - e
				} else this.indicatorStyle.height = this.indicatorHeight + "px";
				this.y = t,
				this.scroller.options.useTransform ? this.indicatorStyle[M.transform] = "translateY(" + t + "px)" + this.scroller.translateZ: this.indicatorStyle.top = t + "px"
			} else {
				var s = Math.round(this.sizeRatioX * this.scroller.x);
				if (s < 0) {
					this.transitionTime(500);
					var o = Math.max(this.indicatorWidth + 3 * s, 8);
					this.indicatorStyle.width = o + "px",
					s = 0
				} else if (s > this.maxPosX) {
					this.transitionTime(500);
					var r = Math.max(this.indicatorWidth - 3 * (s - this.maxPosX), 8);
					this.indicatorStyle.width = r + "px",
					s = this.maxPosX + this.indicatorWidth - r
				} else this.indicatorStyle.width = this.indicatorWidth + "px";
				this.x = s,
				this.scroller.options.useTransform ? this.indicatorStyle[M.transform] = "translateX(" + s + "px)" + this.scroller.translateZ: this.indicatorStyle.left = s + "px"
			}
		},
		$.prototype.transitionTime = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
			this.indicatorStyle[M.transitionDuration] = t + "ms"
		},
		$.prototype.transitionTimingFunction = function(t) {
			this.indicatorStyle[M.transitionTimingFunction] = t
		},
		$.prototype.destroy = function() {
			this._removeDOMEvents(),
			this.wrapper.parentNode.removeChild(this.wrapper)
		},
		$.prototype._start = function(t) {
			var i = t.touches ? t.touches[0] : t;
			t.preventDefault(),
			t.stopPropagation(),
			this.transitionTime(),
			this.initiated = !0,
			this.moved = !1,
			this.lastPointX = i.pageX,
			this.lastPointY = i.pageY,
			this.startTime = l(),
			this._handleMoveEvents(m),
			this.scroller.trigger("beforeScrollStart")
		},
		$.prototype._move = function(t) {
			var i = t.touches ? t.touches[0] : t;
			t.preventDefault(),
			t.stopPropagation(),
			this.moved || this.scroller.trigger("scrollStart"),
			this.moved = !0;
			var e = i.pageX - this.lastPointX;
			this.lastPointX = i.pageX;
			var s = i.pageY - this.lastPointY;
			this.lastPointY = i.pageY;
			var o = this.x + e,
			r = this.y + s;
			this._pos(o, r)
		},
		$.prototype._end = function(t) {
			if (this.initiated) {
				this.initiated = !1,
				t.preventDefault(),
				t.stopPropagation(),
				this._handleMoveEvents(v);
				var i = this.scroller.options.snap;
				if (i) {
					var e = i.speed,
					s = i.easing,
					o = void 0 === s ? C.bounce: s,
					r = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
					n = e || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - r.x), 1e3), Math.min(Math.abs(this.scroller.y - r.y), 1e3)), 300);
					this.scroller.x === r.x && this.scroller.y === r.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = r, this.scroller.scrollTo(r.x, r.y, n, o))
				}
				this.moved && this.scroller.trigger("scrollEnd", {
					x: this.scroller.x,
					y: this.scroller.y
				})
			}
		},
		$.prototype._pos = function(t, i) {
			t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
			i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY),
			t = Math.round(t / this.sizeRatioX),
			i = Math.round(i / this.sizeRatioY),
			this.scroller.scrollTo(t, i),
			this.scroller.trigger("scroll", {
				x: this.scroller.x,
				y: this.scroller.y
			})
		},
		$.prototype._shouldShow = function() {
			return "vertical" === this.direction && this.scroller.hasVerticalScroll || "horizontal" === this.direction && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1)
		},
		$.prototype._calculate = function() {
			if ("vertical" === this.direction) {
				var t = this.wrapper.clientHeight;
				this.indicatorHeight = Math.max(Math.round(t * t / (this.scroller.scrollerHeight || t || 1)), 8),
				this.indicatorStyle.height = this.indicatorHeight + "px",
				this.maxPosY = t - this.indicatorHeight,
				this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY
			} else {
				var i = this.wrapper.clientWidth;
				this.indicatorWidth = Math.max(Math.round(i * i / (this.scroller.scrollerWidth || i || 1)), 8),
				this.indicatorStyle.width = this.indicatorWidth + "px",
				this.maxPosX = i - this.indicatorWidth,
				this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX
			}
		},
		$.prototype._addDOMEvents = function() {
			var t = m;
			this._handleDOMEvents(t)
		},
		$.prototype._removeDOMEvents = function() {
			var t = v;
			this._handleDOMEvents(t),
			this._handleMoveEvents(t)
		},
		$.prototype._handleMoveEvents = function(t) {
			this.scroller.options.disableTouch || t(window, "touchmove", this),
			this.scroller.options.disableMouse || t(window, "mousemove", this)
		},
		$.prototype._handleDOMEvents = function(t) {
			this.scroller.options.disableTouch || (t(this.indicator, "touchstart", this), t(window, "touchend", this)),
			this.scroller.options.disableMouse || (t(this.indicator, "mousedown", this), t(window, "mouseup", this))
		},
		function(t) {
			t.prototype._init = function(t, i) {
				this._handleOptions(i),
				this._events = {},
				this.x = 0,
				this.y = 0,
				this.scale = 1,
				this.directionX = 0,
				this.directionY = 0,
				this._addDOMEvents(),
				this._initExtFeatures(),
				this._watchTransition(),
				this.options.observeDOM && this._initDOMObserver(),
				this.options.autoBlur && this._handleAutoBlur(),
				this.refresh(),
				this.options.snap || this.scrollTo(this.options.startX, this.options.startY),
				this.enable()
			},
			t.prototype._handleOptions = function(t) {
				this.options = c({},
				E, t),
				this.translateZ = this.options.HWCompositing && w ? " translateZ(0)": "",
				this.options.useTransition = this.options.useTransition && S,
				this.options.useTransform = this.options.useTransform && T,
				this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
				this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX,
				this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY,
				this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
				this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
				!0 === this.options.tap && (this.options.tap = "tap")
			},
			t.prototype._addDOMEvents = function() {
				var t = m;
				this._handleDOMEvents(t)
			},
			t.prototype._removeDOMEvents = function() {
				var t = v;
				this._handleDOMEvents(t)
			},
			t.prototype._handleDOMEvents = function(t) {
				var i = this.options.bindToWrapper ? this.wrapper: window;
				t(window, "orientationchange", this),
				t(window, "resize", this),
				this.options.click && t(this.wrapper, "click", this, !0),
				this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)),
				_ && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)),
				t(this.scroller, M.transitionEnd, this)
			},
			t.prototype._initExtFeatures = function() {
				this.options.snap && this._initSnap(),
				this.options.scrollbar && this._initScrollbar(),
				this.options.pullUpLoad && this._initPullUp(),
				this.options.pullDownRefresh && this._initPullDown(),
				this.options.wheel && this._initWheel(),
				this.options.mouseWheel && this._initMouseWheel(),
				this.options.zoom && this._initZoom()
			},
			t.prototype._watchTransition = function() {
				if ("function" == typeof Object.defineProperty) {
					var t = this,
					i = !1;
					Object.defineProperty(this, "isInTransition", {
						get: function() {
							return i
						},
						set: function(e) {
							i = e;
							for (var s = t.scroller.children.length ? t.scroller.children: [t.scroller], o = i && !t.pulling ? "none": "auto", r = 0; r < s.length; r++) s[r].style.pointerEvents = o
						}
					})
				}
			},
			t.prototype._handleAutoBlur = function() {
				this.on("scrollStart",
				function() {
					var t = document.activeElement; ! t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
				})
			},
			t.prototype._initDOMObserver = function() {
				var t = this;
				if ("undefined" != typeof MutationObserver) {
					var i = void 0,
					e = new MutationObserver(function(e) {
						if (!t._shouldNotRefresh()) {
							for (var s = !1,
							o = !1,
							r = 0; r < e.length; r++) {
								var n = e[r];
								if ("attributes" !== n.type) {
									s = !0;
									break
								}
								if (n.target !== t.scroller) {
									o = !0;
									break
								}
							}
							s ? t.refresh() : o && (clearTimeout(i), i = setTimeout(function() {
								t._shouldNotRefresh() || t.refresh()
							},
							60))
						}
					});
					e.observe(this.scroller, {
						attributes: !0,
						childList: !0,
						subtree: !0
					}),
					this.on("destroy",
					function() {
						e.disconnect()
					})
				} else this._checkDOMUpdate()
			},
			t.prototype._shouldNotRefresh = function() {
				var t = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;
				return this.isInTransition || this.stopFromTransition || t
			},
			t.prototype._checkDOMUpdate = function() {
				var t = X(this.scroller),
				i = t.width,
				e = t.height;
				function s() {
					var o = this;
					setTimeout(function() { (function() {
							if (!this.destroyed) {
								var o = (t = X(this.scroller)).width,
								r = t.height;
								i === o && e === r || this.refresh(),
								i = o,
								e = r,
								s.call(this)
							}
						}).call(o)
					},
					1e3)
				}
				s.call(this)
			},
			t.prototype.handleEvent = function(t) {
				switch (t.type) {
				case "touchstart":
				case "mousedown":
					this._start(t),
					this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
					break;
				case "touchmove":
				case "mousemove":
					this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
					break;
				case "touchend":
				case "mouseup":
				case "touchcancel":
				case "mousecancel":
					this.scaled ? this._zoomEnd(t) : this._end(t);
					break;
				case "orientationchange":
				case "resize":
					this._resize();
					break;
				case "transitionend":
				case "webkitTransitionEnd":
				case "oTransitionEnd":
				case "MSTransitionEnd":
					this._transitionEnd(t);
					break;
				case "click":
					this.enabled && !t._constructed && (k(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
					break;
				case "wheel":
				case "DOMMouseScroll":
				case "mousewheel":
					this._onMouseWheel(t)
				}
			},
			t.prototype.refresh = function() {
				var t = X(this.wrapper);
				this.wrapperWidth = t.width,
				this.wrapperHeight = t.height;
				var i = X(this.scroller);
				this.scrollerWidth = Math.round(i.width * this.scale),
				this.scrollerHeight = Math.round(i.height * this.scale);
				var e = this.options.wheel;
				e ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length: 0, void 0 === this.selectedIndex && (this.selectedIndex = e.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
				this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
				this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
				this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
				this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
				this.endTime = 0,
				this.directionX = 0,
				this.directionY = 0,
				this.wrapperOffset = y(this.wrapper),
				this.trigger("refresh"),
				this.resetPosition()
			},
			t.prototype.enable = function() {
				this.enabled = !0
			},
			t.prototype.disable = function() {
				this.enabled = !1
			}
		} (V),
		function(t) {
			t.prototype._start = function(t) {
				var i = Y[t.type];
				if ((i === P || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
					this.initiated = i,
					this.options.preventDefault && !k(t.target, this.options.preventDefaultException) && t.preventDefault(),
					this.options.stopPropagation && t.stopPropagation(),
					this.moved = !1,
					this.distX = 0,
					this.distY = 0,
					this.directionX = 0,
					this.directionY = 0,
					this.movingDirectionX = 0,
					this.movingDirectionY = 0,
					this.directionLocked = 0,
					this._transitionTime(),
					this.startTime = l(),
					this.options.wheel && (this.target = t.target),
					this.stop();
					var e = t.touches ? t.touches[0] : t;
					this.startX = this.x,
					this.startY = this.y,
					this.absStartX = this.x,
					this.absStartY = this.y,
					this.pointX = e.pageX,
					this.pointY = e.pageY,
					this.trigger("beforeScrollStart")
				}
			},
			t.prototype._move = function(t) {
				if (this.enabled && !this.destroyed && Y[t.type] === this.initiated) {
					this.options.preventDefault && t.preventDefault(),
					this.options.stopPropagation && t.stopPropagation();
					var i = t.touches ? t.touches[0] : t,
					e = i.pageX - this.pointX,
					s = i.pageY - this.pointY;
					this.pointX = i.pageX,
					this.pointY = i.pageY,
					this.distX += e,
					this.distY += s;
					var o = Math.abs(this.distX),
					r = Math.abs(this.distY),
					n = l();
					if (! (n - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
						if (this.directionLocked || this.options.freeScroll || (o > r + this.options.directionLockThreshold ? this.directionLocked = "h": r >= o + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" === this.directionLocked) {
							if ("vertical" === this.options.eventPassthrough) t.preventDefault();
							else if ("horizontal" === this.options.eventPassthrough) return void(this.initiated = !1);
							s = 0
						} else if ("v" === this.directionLocked) {
							if ("horizontal" === this.options.eventPassthrough) t.preventDefault();
							else if ("vertical" === this.options.eventPassthrough) return void(this.initiated = !1);
							e = 0
						}
						e = this.hasHorizontalScroll ? e: 0,
						s = this.hasVerticalScroll ? s: 0,
						this.movingDirectionX = e > 0 ? A: e < 0 ? F: 0,
						this.movingDirectionY = s > 0 ? H: s < 0 ? O: 0;
						var a = this.x + e,
						h = this.y + s,
						c = !1,
						p = !1,
						d = !1,
						u = !1,
						f = this.options.bounce; ! 1 !== f && (c = void 0 === f.top || f.top, p = void 0 === f.bottom || f.bottom, d = void 0 === f.left || f.left, u = void 0 === f.right || f.right),
						(a > 0 || a < this.maxScrollX) && (a = a > 0 && d || a < this.maxScrollX && u ? this.x + e / 3 : a > 0 ? 0 : this.maxScrollX),
						(h > 0 || h < this.maxScrollY) && (h = h > 0 && c || h < this.maxScrollY && p ? this.y + s / 3 : h > 0 ? 0 : this.maxScrollY),
						this.moved || (this.moved = !0, this.trigger("scrollStart")),
						this._translate(a, h),
						n - this.startTime > this.options.momentumLimitTime && (this.startTime = n, this.startX = this.x, this.startY = this.y, this.options.probeType === I && this.trigger("scroll", {
							x: this.x,
							y: this.y
						})),
						this.options.probeType > I && this.trigger("scroll", {
							x: this.x,
							y: this.y
						});
						var g = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
						m = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
						v = this.pointX - g,
						y = this.pointY - m; (v > document.documentElement.clientWidth - this.options.momentumLimitDistance || v < this.options.momentumLimitDistance || y < this.options.momentumLimitDistance || y > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t)
					}
				}
			},
			t.prototype._end = function(t) {
				if (this.enabled && !this.destroyed && Y[t.type] === this.initiated) {
					this.initiated = !1,
					this.options.preventDefault && !k(t.target, this.options.preventDefaultException) && t.preventDefault(),
					this.options.stopPropagation && t.stopPropagation(),
					this.trigger("touchEnd", {
						x: this.x,
						y: this.y
					}),
					this.isInTransition = !1;
					var i = Math.round(this.x),
					e = Math.round(this.y),
					s = i - this.absStartX,
					o = e - this.absStartY;
					if (this.directionX = s > 0 ? A: s < 0 ? F: 0, this.directionY = o > 0 ? H: o < 0 ? O: 0, !this.options.pullDownRefresh || !this._checkPullDown()) if (this._checkClick(t)) this.trigger("scrollCancel");
					else if (!this.resetPosition(this.options.bounceTime, C.bounce)) {
						this.scrollTo(i, e),
						this.endTime = l();
						var r = this.endTime - this.startTime,
						n = Math.abs(i - this.startX),
						a = Math.abs(e - this.startY);
						if (this._events.flick && r < this.options.flickLimitTime && n < this.options.flickLimitDistance && a < this.options.flickLimitDistance) this.trigger("flick");
						else {
							var h = 0;
							if (this.options.momentum && r < this.options.momentumLimitTime && (a > this.options.momentumLimitDistance || n > this.options.momentumLimitDistance)) {
								var c = !1,
								p = !1,
								d = !1,
								u = !1,
								f = this.options.bounce; ! 1 !== f && (c = void 0 === f.top || f.top, p = void 0 === f.bottom || f.bottom, d = void 0 === f.left || f.left, u = void 0 === f.right || f.right);
								var g = this.directionX === A && d || this.directionX === F && u ? this.wrapperWidth: 0,
								m = this.directionY === H && c || this.directionY === O && p ? this.wrapperHeight: 0,
								v = this.hasHorizontalScroll ? L(this.x, this.startX, r, this.maxScrollX, g, this.options) : {
									destination: i,
									duration: 0
								},
								y = this.hasVerticalScroll ? L(this.y, this.startY, r, this.maxScrollY, m, this.options) : {
									destination: e,
									duration: 0
								};
								i = v.destination,
								e = y.destination,
								h = Math.max(v.duration, y.duration),
								this.isInTransition = !0
							} else this.options.wheel && (e = Math.round(e / this.itemHeight) * this.itemHeight, h = this.options.wheel.adjustTime || 400);
							var x = C.swipe;
							if (this.options.snap) {
								var b = this._nearestSnap(i, e);
								this.currentPage = b,
								h = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - b.x), 1e3), Math.min(Math.abs(e - b.y), 1e3)), 300),
								i = b.x,
								e = b.y,
								this.directionX = 0,
								this.directionY = 0,
								x = this.options.snap.easing || C.bounce
							}
							if (i !== this.x || e !== this.y) return (i > 0 || i < this.maxScrollX || e > 0 || e < this.maxScrollY) && (x = C.swipeBounce),
							void this.scrollTo(i, e, h, x);
							this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))),
							this.trigger("scrollEnd", {
								x: this.x,
								y: this.y
							})
						}
					}
				}
			},
			t.prototype._checkClick = function(t) {
				var i = this.stopFromTransition && !this.pulling;
				if (this.stopFromTransition = !1, !this.moved) {
					if (this.options.wheel) {
						if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
							var e = Math.abs(Math.round(this.y / this.itemHeight)),
							s = Math.round((this.pointY + x(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
							this.target = this.items[e + s]
						}
						return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, C.swipe),
						!0
					}
					return ! i && (this.options.tap &&
					function(t, i) {
						var e = document.createEvent("Event");
						e.initEvent(i, !0, !0),
						e.pageX = t.pageX,
						e.pageY = t.pageY,
						t.target.dispatchEvent(e)
					} (t, this.options.tap), this.options.click && !k(t.target, this.options.preventDefaultException) &&
					function(t) {
						var i = void 0;
						"mouseup" === t.type || "mousecancel" === t.type ? i = t: "touchend" !== t.type && "touchcancel" !== t.type || (i = t.changedTouches[0]);
						var e = {};
						i && (e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0);
						var s = void 0,
						o = "click",
						r = !0,
						n = !0;
						if ("undefined" != typeof MouseEvent) try {
							s = new MouseEvent(o, c({
								bubbles: r,
								cancelable: n
							},
							e))
						} catch(t) {
							a()
						} else a();
						function a() { (s = document.createEvent("Event")).initEvent(o, r, n),
							c(s, e)
						}
						s.forwardedTouchEvent = !0,
						s._constructed = !0,
						t.target.dispatchEvent(s)
					} (t), !0)
				}
				return ! 1
			},
			t.prototype._resize = function() {
				var t = this;
				this.enabled && (h && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
					t.refresh()
				},
				this.options.resizePolling))
			},
			t.prototype._startProbe = function() {
				W(this.probeTimer),
				this.probeTimer = z(function i() {
					var e = t.getComputedPosition();
					t.trigger("scroll", e),
					t.isInTransition ? t.probeTimer = z(i) : t.trigger("scrollEnd", e)
				});
				var t = this
			},
			t.prototype._transitionProperty = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
				this.scrollerStyle[M.transitionProperty] = t
			},
			t.prototype._transitionTime = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				if (this.scrollerStyle[M.transitionDuration] = t + "ms", this.options.wheel) for (var i = 0; i < this.items.length; i++) this.items[i].style[M.transitionDuration] = t + "ms";
				if (this.indicators) for (var e = 0; e < this.indicators.length; e++) this.indicators[e].transitionTime(t)
			},
			t.prototype._transitionTimingFunction = function(t) {
				if (this.scrollerStyle[M.transitionTimingFunction] = t, this.options.wheel) for (var i = 0; i < this.items.length; i++) this.items[i].style[M.transitionTimingFunction] = t;
				if (this.indicators) for (var e = 0; e < this.indicators.length; e++) this.indicators[e].transitionTimingFunction(t)
			},
			t.prototype._transitionEnd = function(t) {
				t.target === this.scroller && this.isInTransition && (this._transitionTime(), (!this.pulling || this.movingDirectionY === O) && !this.resetPosition(this.options.bounceTime, C.bounce) && (this.isInTransition = !1, this.options.probeType !== R && this.trigger("scrollEnd", {
					x: this.x,
					y: this.y
				})))
			},
			t.prototype._translate = function(t, i) {
				if (function(t, i) {
					if (!t) throw new Error("[BScroll] " + i)
				} (!p(t) && !p(i), "Translate x or y is null or undefined."), this.options.useTransform ? this.scrollerStyle[M.transform] = "translate(" + t + "px," + i + "px) scale(" + this.scale + ")" + this.translateZ: (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel) for (var e = this.options.wheel.rotate,
				s = void 0 === e ? 25 : e, o = 0; o < this.items.length; o++) {
					var r = s * (i / this.itemHeight + o);
					this.items[o].style[M.transform] = "rotateX(" + r + "deg)"
				}
				if (this.x = t, this.y = i, this.indicators) for (var n = 0; n < this.indicators.length; n++) this.indicators[n].updatePosition()
			},
			t.prototype._animate = function(t, i, e, s) {
				var o = this,
				r = this.x,
				n = this.y,
				a = l(),
				h = a + e;
				this.isAnimating = !0,
				W(this.animateTimer),
				function c() {
					var p = l();
					if (p >= h) return o.isAnimating = !1,
					o._translate(t, i),
					void(o.pulling || o.resetPosition(o.options.bounceTime) || o.trigger("scrollEnd", {
						x: o.x,
						y: o.y
					}));
					var d = s(p = (p - a) / e),
					u = (t - r) * d + r,
					f = (i - n) * d + n;
					o._translate(u, f),
					o.isAnimating && (o.animateTimer = z(c)),
					o.options.probeType === R && o.trigger("scroll", {
						x: o.x,
						y: o.y
					})
				} ()
			},
			t.prototype.scrollBy = function(t, i) {
				var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C.bounce;
				t = this.x + t,
				i = this.y + i,
				this.scrollTo(t, i, e, s)
			},
			t.prototype.scrollTo = function(t, i) {
				var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C.bounce;
				this.isInTransition = this.options.useTransition && e > 0 && (t !== this.x || i !== this.y),
				!e || this.options.useTransition ? (this._transitionProperty(), this._transitionTimingFunction(s.style), this._transitionTime(e), this._translate(t, i), e && this.options.probeType === R && this._startProbe(), this.options.wheel && (i > 0 ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, e, s.fn)
			},
			t.prototype.scrollToElement = function(t, i, e, s, o) {
				if (t && (t = t.nodeType ? t: this.scroller.querySelector(t), !this.options.wheel || t.className === this.options.wheel.wheelItemClass)) {
					var r = y(t);
					r.left -= this.wrapperOffset.left,
					r.top -= this.wrapperOffset.top,
					!0 === e && (e = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
					!0 === s && (s = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
					r.left -= e || 0,
					r.top -= s || 0,
					r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX: r.left,
					r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY: r.top,
					this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight),
					this.scrollTo(r.left, r.top, i, o)
				}
			},
			t.prototype.resetPosition = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
				i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.bounce,
				e = this.x,
				s = Math.round(e); ! this.hasHorizontalScroll || s > 0 ? e = 0 : s < this.maxScrollX && (e = this.maxScrollX);
				var o = this.y,
				r = Math.round(o);
				return ! this.hasVerticalScroll || r > 0 ? o = 0 : r < this.maxScrollY && (o = this.maxScrollY),
				(e !== this.x || o !== this.y) && (this.scrollTo(e, o, t, i), !0)
			},
			t.prototype.getComputedPosition = function() {
				var t = window.getComputedStyle(this.scroller, null),
				i = void 0,
				e = void 0;
				return this.options.useTransform ? (i = +((t = t[M.transform].split(")")[0].split(", "))[12] || t[4]), e = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), e = +t.top.replace(/[^-\d.]/g, "")),
				{
					x: i,
					y: e
				}
			},
			t.prototype.stop = function() {
				if (this.options.useTransition && this.isInTransition) {
					this.isInTransition = !1;
					var t = this.getComputedPosition();
					this._translate(t.x, t.y),
					this.options.wheel ? this.target = this.items[Math.round( - t.y / this.itemHeight)] : this.trigger("scrollEnd", {
						x: this.x,
						y: this.y
					}),
					this.stopFromTransition = !0
				} else ! this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this.trigger("scrollEnd", {
					x: this.x,
					y: this.y
				}), this.stopFromTransition = !0)
			},
			t.prototype.destroy = function() {
				this.destroyed = !0,
				this.trigger("destroy"),
				this._removeDOMEvents(),
				this._events = {}
			}
		} (V),
		function(t) {
			t.prototype.on = function(t, i) {
				var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
				this._events[t] || (this._events[t] = []),
				this._events[t].push([i, e])
			},
			t.prototype.once = function(t, i) {
				var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
				function s() {
					this.off(t, s),
					i.apply(e, arguments)
				}
				s.fn = i,
				this.on(t, s)
			},
			t.prototype.off = function(t, i) {
				var e = this._events[t];
				if (e) for (var s = e.length; s--;)(e[s][0] === i || e[s][0] && e[s][0].fn === i) && (e[s][0] = void 0)
			},
			t.prototype.trigger = function(t) {
				var i = this._events[t];
				if (i) for (var e = i.length,
				r = [].concat(o(i)), n = 0; n < e; n++) {
					var a = r[n],
					h = s(a, 2),
					l = h[0],
					c = h[1];
					l && l.apply(c, [].slice.call(arguments, 1))
				}
			}
		} (V),
		function(t) {
			t.prototype._initSnap = function() {
				var t = this;
				this.currentPage = {};
				var i = this.options.snap;
				if (i.loop) {
					var e = this.scroller.children;
					e.length > 1 ? (function(t, i) {
						i.firstChild ?
						function(t, i) {
							i.parentNode.insertBefore(t, i)
						} (t, i.firstChild) : i.appendChild(t)
					} (e[e.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(e[1].cloneNode(!0))) : i.loop = !1
				}
				var s = i.el;
				"string" == typeof s && (s = this.scroller.querySelectorAll(s)),
				this.on("refresh",
				function() {
					if (t.pages = [], t.wrapperWidth && t.wrapperHeight && t.scrollerWidth && t.scrollerHeight) {
						var e = i.stepX || t.wrapperWidth,
						o = i.stepY || t.wrapperHeight,
						r = 0,
						n = void 0,
						a = void 0,
						h = void 0,
						l = 0,
						c = void 0,
						p = 0,
						d = void 0,
						u = void 0;
						if (s) for (c = s.length, d = -1; l < c; l++) u = X(s[l]),
						(0 === l || u.left <= X(s[l - 1]).left) && (p = 0, d++),
						t.pages[p] || (t.pages[p] = []),
						r = Math.max( - u.left, t.maxScrollX),
						n = Math.max( - u.top, t.maxScrollY),
						a = r - Math.round(u.width / 2),
						h = n - Math.round(u.height / 2),
						t.pages[p][d] = {
							x: r,
							y: n,
							width: u.width,
							height: u.height,
							cx: a,
							cy: h
						},
						r > t.maxScrollX && p++;
						else for (a = Math.round(e / 2), h = Math.round(o / 2); r > -t.scrollerWidth;) {
							for (t.pages[l] = [], c = 0, n = 0; n > -t.scrollerHeight;) t.pages[l][c] = {
								x: Math.max(r, t.maxScrollX),
								y: Math.max(n, t.maxScrollY),
								width: e,
								height: o,
								cx: r - a,
								cy: n - h
							},
							n -= o,
							c++;
							r -= e,
							l++
						}
						t._checkSnapLoop();
						var f = i._loopX ? 1 : 0,
						g = i._loopY ? 1 : 0;
						t._goToPage(t.currentPage.pageX || f, t.currentPage.pageY || g, 0);
						var m = i.threshold;
						m % 1 == 0 ? (t.snapThresholdX = m, t.snapThresholdY = m) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * m), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * m))
					}
				}),
				this.on("scrollEnd",
				function() {
					i.loop && (i._loopX ? (0 === t.currentPage.pageX && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (0 === t.currentPage.pageY && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)))
				}),
				!1 !== i.listenFlick && this.on("flick",
				function() {
					var e = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
					t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, e)
				}),
				this.on("destroy",
				function() {
					if (i.loop) {
						var e = t.scroller.children;
						e.length > 2 && (D(t.scroller, e[e.length - 1]), D(t.scroller, e[0]))
					}
				})
			},
			t.prototype._checkSnapLoop = function() {
				var t = this.options.snap;
				t.loop && this.pages && this.pages.length && (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && B("Loop does not support two direction at the same time."))
			},
			t.prototype._nearestSnap = function(t, i) {
				if (!this.pages.length) return {
					x: 0,
					y: 0,
					pageX: 0,
					pageY: 0
				};
				var e = 0;
				if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY) return this.currentPage;
				t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX),
				i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY);
				for (var s = this.pages.length; e < s; e++) if (t >= this.pages[e][0].cx) {
					t = this.pages[e][0].x;
					break
				}
				s = this.pages[e].length;
				for (var o = 0; o < s; o++) if (i >= this.pages[0][o].cy) {
					i = this.pages[0][o].y;
					break
				}
				return e === this.currentPage.pageX && ((e += this.directionX) < 0 ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x),
				o === this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y),
				{
					x: t,
					y: i,
					pageX: e,
					pageY: o
				}
			},
			t.prototype._goToPage = function(t) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				e = arguments[2],
				s = arguments[3],
				o = this.options.snap;
				if (o && this.pages && this.pages.length && (s = s || o.easing || C.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), this.pages[t])) {
					i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
					var r = this.pages[t][i].x,
					n = this.pages[t][i].y;
					e = void 0 === e ? o.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(n - this.y), 1e3)), 300) : e,
					this.currentPage = {
						x: r,
						y: n,
						pageX: t,
						pageY: i
					},
					this.scrollTo(r, n, e, s)
				}
			},
			t.prototype.goToPage = function(t, i, e, s) {
				var o = this.options.snap;
				if (o && this.pages && this.pages.length) {
					if (o.loop) {
						var r = void 0;
						o._loopX ? (t >= (r = this.pages.length - 2) ? t = r - 1 : t < 0 && (t = 0), t += 1) : (i >= (r = this.pages[0].length - 2) ? i = r - 1 : i < 0 && (i = 0), i += 1)
					}
					this._goToPage(t, i, e, s)
				}
			},
			t.prototype.next = function(t, i) {
				if (this.options.snap) {
					var e = this.currentPage.pageX,
					s = this.currentPage.pageY; ++e >= this.pages.length && this.hasVerticalScroll && (e = 0, s++),
					this._goToPage(e, s, t, i)
				}
			},
			t.prototype.prev = function(t, i) {
				if (this.options.snap) {
					var e = this.currentPage.pageX,
					s = this.currentPage.pageY; --e < 0 && this.hasVerticalScroll && (e = 0, s--),
					this._goToPage(e, s, t, i)
				}
			},
			t.prototype.getCurrentPage = function() {
				var t = this.options.snap;
				return t ? t.loop ? t._loopX ? c({},
				this.currentPage, {
					pageX: this.currentPage.pageX - 1
				}) : c({},
				this.currentPage, {
					pageY: this.currentPage.pageY - 1
				}) : this.currentPage: null
			}
		} (V),
		function(t) {
			t.prototype.wheelTo = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y))
			},
			t.prototype.getSelectedIndex = function() {
				return this.options.wheel && this.selectedIndex
			},
			t.prototype._initWheel = function() {
				var t = this.options.wheel;
				t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"),
				t.wheelItemClass || (t.wheelItemClass = "wheel-item"),
				void 0 === t.selectedIndex && (t.selectedIndex = 0, B("wheel option selectedIndex is required!"))
			}
		} (V),
		function(t) {
			t.prototype._initScrollbar = function() {
				var t = this,
				i = this.options.scrollbar,
				e = i.fade,
				s = void 0 === e || e,
				o = i.interactive,
				r = void 0 !== o && o;
				this.indicators = [];
				var n = void 0;
				this.options.scrollX && (n = {
					el: N("horizontal"),
					direction: "horizontal",
					fade: s,
					interactive: r
				},
				this._insertScrollBar(n.el), this.indicators.push(new $(this, n))),
				this.options.scrollY && (n = {
					el: N("vertical"),
					direction: "vertical",
					fade: s,
					interactive: r
				},
				this._insertScrollBar(n.el), this.indicators.push(new $(this, n))),
				this.on("refresh",
				function() {
					for (var i = 0; i < t.indicators.length; i++) t.indicators[i].refresh()
				}),
				s && (this.on("scrollEnd",
				function() {
					for (var i = 0; i < t.indicators.length; i++) t.indicators[i].fade()
				}), this.on("scrollCancel",
				function() {
					for (var i = 0; i < t.indicators.length; i++) t.indicators[i].fade()
				}), this.on("scrollStart",
				function() {
					for (var i = 0; i < t.indicators.length; i++) t.indicators[i].fade(!0)
				}), this.on("beforeScrollStart",
				function() {
					for (var i = 0; i < t.indicators.length; i++) t.indicators[i].fade(!0, !0)
				})),
				this.on("destroy",
				function() {
					t._removeScrollBars()
				})
			},
			t.prototype._insertScrollBar = function(t) {
				this.wrapper.appendChild(t)
			},
			t.prototype._removeScrollBars = function() {
				for (var t = 0; t < this.indicators.length; t++) this.indicators[t].destroy()
			}
		} (V),
		function(t) {
			t.prototype._initPullDown = function() {
				this.options.probeType = R
			},
			t.prototype._checkPullDown = function() {
				var t = this.options.pullDownRefresh,
				i = t.threshold,
				e = void 0 === i ? 90 : i,
				s = t.stop,
				o = void 0 === s ? 40 : s;
				return ! (this.directionY !== H || this.y < e) && (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, o, this.options.bounceTime, C.bounce), this.pulling)
			},
			t.prototype.finishPullDown = function() {
				this.pulling = !1,
				this.resetPosition(this.options.bounceTime, C.bounce)
			},
			t.prototype.openPullDown = function() {
				var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				this.options.pullDownRefresh = t,
				this._initPullDown()
			},
			t.prototype.closePullDown = function() {
				this.options.pullDownRefresh = !1
			}
		} (V),
		function(t) {
			t.prototype._initPullUp = function() {
				this.options.probeType = R,
				this.pullupWatching = !1,
				this._watchPullUp()
			},
			t.prototype._watchPullUp = function() {
				this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd))
			},
			t.prototype._checkToEnd = function(t) {
				var i = this,
				e = this.options.pullUpLoad.threshold,
				s = void 0 === e ? 0 : e;
				this.movingDirectionY === O && t.y <= this.maxScrollY + s && (this.once("scrollEnd",
				function() {
					i.pullupWatching = !1
				}), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd))
			},
			t.prototype.finishPullUp = function() {
				var t = this;
				this.pullupWatching ? this.once("scrollEnd",
				function() {
					t._watchPullUp()
				}) : this._watchPullUp()
			},
			t.prototype.openPullUp = function() {
				var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				this.options.pullUpLoad = t,
				this._initPullUp()
			},
			t.prototype.closePullUp = function() {
				this.options.pullUpLoad = !1,
				this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd))
			}
		} (V),
		function(t) {
			t.prototype._initMouseWheel = function() {
				var t = this;
				this._handleMouseWheelEvent(m),
				this.on("destroy",
				function() {
					clearTimeout(t.mouseWheelTimer),
					t._handleMouseWheelEvent(v)
				}),
				this.firstWheelOpreation = !0
			},
			t.prototype._handleMouseWheelEvent = function(t) {
				t(this.wrapper, "wheel", this),
				t(this.wrapper, "mousewheel", this),
				t(this.wrapper, "DOMMouseScroll", this)
			},
			t.prototype._onMouseWheel = function(t) {
				var i = this;
				if (this.enabled) {
					t.preventDefault(),
					this.firstWheelOpreation && this.trigger("scrollStart"),
					this.firstWheelOpreation = !1,
					clearTimeout(this.mouseWheelTimer),
					this.mouseWheelTimer = setTimeout(function() {
						i.options.snap || i.trigger("scrollEnd", {
							x: i.x,
							y: i.y
						}),
						i.firstWheelOpreation = !0
					},
					400);
					var e = this.options.mouseWheel,
					s = e.speed,
					o = void 0 === s ? 20 : s,
					r = e.invert,
					n = void 0 !== r && r,
					a = e.easeTime,
					h = void 0 === a ? 300 : a,
					l = void 0,
					c = void 0;
					switch (!0) {
					case "deltaX" in t: 1 === t.deltaMode ? (l = -t.deltaX * o, c = -t.deltaY * o) : (l = -t.deltaX, c = -t.deltaY);
						break;
					case "wheelDeltaX" in t: l = t.wheelDeltaX / 120 * o,
						c = t.wheelDeltaY / 120 * o;
						break;
					case "wheelDelta" in t: l = c = t.wheelDelta / 120 * o;
						break;
					case "detail" in t: l = c = -t.detail / 3 * o;
						break;
					default:
						return
					}
					var p = n ? -1 : 1;
					l *= p,
					c *= p,
					this.hasVerticalScroll || (l = c, c = 0);
					var d = void 0,
					u = void 0;
					if (this.options.snap) return d = this.currentPage.pageX,
					u = this.currentPage.pageY,
					l > 0 ? d--:l < 0 && d++,
					c > 0 ? u--:c < 0 && u++,
					void this._goToPage(d, u);
					d = this.x + Math.round(this.hasHorizontalScroll ? l: 0),
					u = this.y + Math.round(this.hasVerticalScroll ? c: 0),
					this.movingDirectionX = this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0,
					this.movingDirectionY = this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0,
					d > 0 ? d = 0 : d < this.maxScrollX && (d = this.maxScrollX),
					u > 0 ? u = 0 : u < this.maxScrollY && (u = this.maxScrollY),
					this.scrollTo(d, u, h, C.swipe),
					this.trigger("scroll", {
						x: this.x,
						y: this.y
					})
				}
			}
		} (V),
		function(t) {
			t.prototype._initZoom = function() {
				var t = this.options.zoom,
				i = t.start,
				e = void 0 === i ? 1 : i,
				s = t.min,
				o = void 0 === s ? 1 : s,
				r = t.max,
				n = void 0 === r ? 4 : r;
				this.scale = Math.min(Math.max(e, o), n),
				this.scrollerStyle[M.transformOrigin] = "0 0"
			},
			t.prototype._zoomStart = function(t) {
				var i = t.touches[0],
				e = t.touches[1],
				s = Math.abs(i.pageX - e.pageX),
				o = Math.abs(i.pageY - e.pageY);
				this.startDistance = d(s, o),
				this.startScale = this.scale;
				var r = x(this.wrapper),
				n = r.left,
				a = r.top;
				this.originX = Math.abs(i.pageX + e.pageX) / 2 + n - this.x,
				this.originY = Math.abs(i.pageY + e.pageY) / 2 + a - this.y,
				this.trigger("zoomStart")
			},
			t.prototype._zoom = function(t) {
				if (this.enabled && !this.destroyed && Y[t.type] === this.initiated) {
					this.options.preventDefault && t.preventDefault();
					var i = t.touches[0],
					e = t.touches[1],
					s = d(Math.abs(i.pageX - e.pageX), Math.abs(i.pageY - e.pageY)) / this.startDistance * this.startScale;
					this.scaled = !0;
					var o = this.options.zoom,
					r = o.min,
					n = void 0 === r ? 1 : r,
					a = o.max,
					h = void 0 === a ? 4 : a;
					s < n ? s = .5 * n * Math.pow(2, s / n) : s > h && (s = 2 * h * Math.pow(.5, h / s));
					var l = s / this.startScale,
					c = this.originX - this.originX * l + this.startX,
					p = this.originY - this.originY * l + this.startY;
					this.scale = s,
					this.scrollTo(c, p, 0)
				}
			},
			t.prototype._zoomEnd = function(t) {
				if (this.enabled && !this.destroyed && Y[t.type] === this.initiated) {
					this.options.preventDefault && t.preventDefault(),
					this.isInTransition = !1,
					this.initiated = 0;
					var i = this.options.zoom,
					e = i.min,
					s = void 0 === e ? 1 : e,
					o = i.max,
					r = void 0 === o ? 4 : o;
					this.scale > r ? this.scale = r: this.scale < s && (this.scale = s),
					this.refresh();
					var n = this.scale / this.startScale,
					a = this.originX - this.originX * n + this.startX,
					h = this.originY - this.originY * n + this.startY;
					a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX),
					h > 0 ? h = 0 : h < this.maxScrollY && (h = this.maxScrollY),
					this.x === a && this.y === h || this.scrollTo(a, h, this.options.bounceTime),
					this.scaled = !1,
					this.trigger("zoomEnd")
				}
			}
		} (V),
		V.Version = "1.11.1",
		i.a = V
	},
	IOj6: function(t, i, e) {
		"use strict";
		var s = e("JNUJ"),
		o = e("kScT"),
		r = !1;
		var n = function(t) {
			r || e("KOv6")
		},
		a = e("VU/8")(s.a, o.a, !1, n, null, null);
		a.options.__file = "components/better-scroll/Scroll.vue",
		i.a = a.exports
	},
	JNUJ: function(t, i, e) {
		"use strict";
		var s = e("GQaK"),
		o = e("nFi8"),
		r = e("W5YX");
		i.a = {
			name: "BetterScroll",
			components: {
				Loading: o.a
			},
			props: {
				data: {
					type: Array,
				default:
					function() {
						return []
					}
				},
				probeType: {
					type: Number,
				default:
					1
				},
				click: {
					type: Boolean,
				default:
					!0
				},
				direction: {
					type: String,
				default:
					"vertical"
				},
				scrollbar: {
					type: null,
				default:
					!0
				},
				pullUpLoad: {
					type: null,
				default:
					!1
				},
				startY: {
					type: Number,
				default:
					0
				},
				refreshDelay: {
					type: Number,
				default:
					20
				},
				freeScroll: {
					type: Boolean,
				default:
					!1
				},
				bounce: {
					type: Boolean,
				default:
					!0
				},
				listenScroll: {
					type: Boolean,
				default:
					!1
				},
				listenBeforeScroll: {
					type: Boolean,
				default:
					!1
				},
				listenScrollEnd: {
					type: Boolean,
				default:
					!1
				}
			},
			data: function() {
				return {
					isPullUpLoad: !1,
					pullUpDirty: !0
				}
			},
			computed: {
				pullUpTxt: function() {
					var t = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || "",
					i = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || "暂无更多数据";
					return this.pullUpDirty ? t: i
				}
			},
			mounted: function() {
				var t = this;
				setTimeout(function() {
					t.initScroll()
				},
				20)
			},
			methods: {
				initScroll: function() {
					var t = this;
					if (this.$refs.wrapper) {
						this.$refs.list && (this.pullDownRefresh || this.pullUpLoad) && (this.$refs.list.style.minHeight = Object(r.a)(this.$refs.wrapper).height + 1 + "px");
						var i = {
							probeType: this.probeType,
							click: this.click,
							scrollbar: this.scrollbar,
							pullUpLoad: this.pullUpLoad,
							startY: this.startY,
							bounce: this.bounce
						};
						this.scroll = new s.a(this.$refs.wrapper, i),
						this.listenScroll && this.scroll.on("scroll",
						function(i) {
							t.$emit("scroll", i)
						}),
						this.listenBeforeScroll && this.scroll.on("beforeScrollStart",
						function() {
							t.$emit("beforeScrollStart")
						}),
						this.listenScrollEnd && this.scroll.on("scrollEnd",
						function(i) {
							t.$emit("scrollEnd")
						}),
						this.pullUpLoad && this._initPullUpLoad()
					}
				},
				refresh: function() {
					this.scroll && this.scroll.refresh()
				},
				destroy: function() {
					this.scroll.destroy()
				},
				forceUpdate: function(t) {
					this.pullUpLoad && this.isPullUpLoad ? (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpDirty = t, this.refresh()) : this.refresh()
				},
				_initPullUpLoad: function() {
					var t = this;
					this.scroll.on("pullingUp",
					function() {
						t.isPullUpLoad = !0,
						t.$emit("pullingUp")
					})
				}
			},
			watch: {
				data: function() {
					var t = this;
					setTimeout(function() {
						t.forceUpdate(!0)
					},
					this.refreshDelay)
				}
			}
		}
	},
	KOv6: function(t, i, e) {
		var s = e("2/XU");
		"string" == typeof s && (s = [[t.i, s, ""]]),
		s.locals && (t.exports = s.locals);
		e("rjj0")("5500bca6", s, !1, {
			sourceMap: !1
		})
	},
	KQC9: function(t, i, e) {
		"use strict";
		var s = e("3QXb"),
		o = e("uPfw"),
		r = !1;
		var n = function(t) {
			r || e("L+U3")
		},
		a = e("VU/8")(s.a, o.a, !1, n, "data-v-12ec82ee", null);
		a.options.__file = "components/Category/Search.vue",
		i.a = a.exports
	},
	"L+U3": function(t, i, e) {
		var s = e("Qwcz");
		"string" == typeof s && (s = [[t.i, s, ""]]),
		s.locals && (t.exports = s.locals);
		e("rjj0")("44322388", s, !1, {
			sourceMap: !1
		})
	},
	LNQ4: function(t, i, e) {
		"use strict";
		var s = e("4vvA"),
		o = e.n(s),
		r = e("bOdI"),
		n = e.n(r),
		a = e("GQaK"),
		h = e("KQC9"),
		l = e("6mwK"),
		c = e("IOj6");
		i.a = {
			name: "Category",
			data: function() {
				var t;
				return t = {
					active: this.$route.query.bid ? this.$route.query.bid: 0,
					cid: this.$route.query.cid ? this.$route.query.cid: 1,
					loading: !1
				},
				n()(t, "active", 0),
				n()(t, "page", 0),
				n()(t, "list", []),
				n()(t, "finished", !1),
				n()(t, "goods", []),
				n()(t, "startY", 0),
				n()(t, "pullUpLoad", {
					threshold: 10,
					txt: {
						more: "",
						noMore: "暂无更多数据"
					}
				}),
				n()(t, "type", [{
					id: 1,
					name: "手机",
					link: "/category?cid=1&bid=1"
				},
				{
					id: 2,
					name: "平板",
					link: "/category?cid=2&bid=1"
				},
				{
					id: 19,
					name: "笔记本",
					link: "/category?cid=19&bid=1"
				},
				{
					id: 9,
					name: "数码",
					link: "/category?cid=9&bid=2"
				},
				{
					id: 13,
					name: "摄像",
					link: "/category?cid=13&bid=39"
				},
				{
					id: 15,
					name: "手表",
					link: "/category?cid=15&bid=85"
				}]),
				t
			},
			components: {
				Search: h.a,
				Scroll: c.a,
				goodsList: l.a
			},
			computed: {
				brands: function() {
					return this.$store.state.brands
				}
			},
			mounted: function() {
				this.fetchBrandsData()
			},
			head: function() {
				return {
					title: "回收分类列表",
					titleTemplate: "%s",
					meta: [{
						hid: "description",
						name: "description",
						content: "回收分类列表"
					},
					{
						hid: "keywords",
						name: "keywords",
						content: "回收分类列表"
					}]
				}
			},
			created: function() {
				this.active = parseInt(this.$route.query.bid),
				this.onPullingUp()
			},
			methods: {
				setCat: function(t) {
					this.cid = t,
					this.active = 0,
					this.page = 0,
					this.goods = [],
					o.a.loading({
						mask: !0,
						message: "加载中..."
					}),
					this.loading = !0,
					this.finished = !1,
					this.fetchBrandsData(),
					this.onPullingUp()
				},
				setTab: function(t, i) {
					i = i > 15 ? 15 : i,
					this.startY = "-" + 50 * (i + 1),
					this.active = t,
					this.page = 0,
					this.goods = [],
					o.a.loading({
						mask: !0,
						message: "加载中..."
					}),
					this.loading = !0,
					this.finished = !1,
					this.onPullingUp()
				},
				fetchBrandsData: function() {
					var t = this,
					i = {
						id: this.cid
					};
					this.$store.dispatch("FETCH_BRANDS_DATA", {
						params: i
					}).then(function(i) {
						t.$nextTick(function() {
							t.scroll = new a.a(t.$refs.brands, {
								click: !0
							})
						})
					})
				},
				onPullingUp: function() {
					var t = this;
					this.page++;
					var i = {
						cid: this.cid,
						bid: this.active,
						size: 20,
						page: this.page,
						order: 3
					};
					this.$store.dispatch("FETCH_LIST_DATA", {
						params: i
					}).then(function() {
						o.a.clear(),
						t.goods = t.goods.concat(t.$store.state.goods.data)
					})
				}
			}
		}
	},
	Qwcz: function(t, i, e) { (t.exports = e("FZ+f")(!1)).push([t.i, ".search[data-v-12ec82ee]{position:fixed;top:0;width:100%;background:#fff}.search-box[data-v-12ec82ee]{background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #efefef}.search-box a[data-v-12ec82ee]{display:inline-block}.search-box .search-left[data-v-12ec82ee]{width:10%;margin:4.8px 0 0 3.2px;margin:.3rem 0 0 .2rem}.search-box .search-right[data-v-12ec82ee]{background:#f6f7f8;margin:3.2px 0;margin:.2rem 0;width:80%;height:9.6px;height:.6rem;line-height:9.6px;line-height:.6rem;border-radius:50px}.search-box i[data-v-12ec82ee]{font-size:6.4px;font-size:.4rem;position:absolute;left:1.6px;left:.1rem}.search-box span[data-v-12ec82ee]{margin-left:3.2px;margin-left:.2rem}", ""])
	},
	StIU: function(t, i, e) { (t.exports = e("FZ+f")(!1)).push([t.i, ".mf-loading-container{display:block;text-align:center}", ""])
	},
	W5YX: function(t, i, e) {
		"use strict";
		i.a = function(t) {
			if (t instanceof window.SVGElement) {
				var i = t.getBoundingClientRect();
				return {
					top: i.top,
					left: i.left,
					width: i.width,
					height: i.height
				}
			}
			return {
				top: t.offsetTop,
				left: t.offsetLeft,
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		}
	},
	fQVu: function(t, i, e) {
		"use strict";
		var s = function() {
			var t = this,
			i = t.$createElement,
			e = t._self._c || i;
			return e("div", {
				staticClass: "category clearfix"
			},
			[e("Search", {
				attrs: {
					cid: t.cid
				}
			}), e("div", {
				staticClass: "search-type"
			},
			t._l(t.type,
			function(i) {
				return e("div", {
					key: i.id,
					class: {
						active: i.id == t.cid
					},
					on: {
						click: function(e) {
							t.setCat(i.id)
						}
					}
				},
				[e("span", [t._v(t._s(i.name))])])
			})), e("div", {
				staticClass: "models"
			},
			[e("div", {
				ref: "brands",
				staticClass: "brands"
			},
			[e("ul", {
				style: {
					transform: "translate(0px, " + t.startY + "px) translateZ(0px)"
				}
			},
			[e("li", {
				staticClass: "item",
				class: {
					active: 0 === t.active
				},
				on: {
					click: function(i) {
						t.setTab(0)
					}
				}
			},
			[t._v("热门")]), t._l(t.brands,
			function(i, s) {
				return e("li", {
					key: i.id,
					staticClass: "item",
					class: {
						active: t.active === i.id
					},
					on: {
						click: function(e) {
							t.setTab(i.id, s)
						}
					}
				},
				[e("span", [t._v(t._s(i.name))])])
			}), e("li", {
				staticClass: "item"
			}), e("li", {
				staticClass: "item"
			}), e("li", {
				staticClass: "item"
			}), e("li", {
				staticClass: "item"
			})], 2)]), e("div", {
				staticClass: "model-wrapper"
			},
			[e("scroll", {
				ref: "scroll",
				attrs: {
					data: t.goods,
					listenScrollEnd: !0,
					pullUpLoad: t.pullUpLoad
				},
				on: {
					pullingUp: t.onPullingUp
				}
			},
			[e("goodsList", {
				attrs: {
					list: t.goods
				}
			})], 1)], 1)])], 1)
		};
		s._withStripped = !0;
		var o = {
			render: s,
			staticRenderFns: []
		};
		i.a = o
	},
	gA56: function(t, i, e) { (t.exports = e("FZ+f")(!1)).push([t.i, '.panel a[data-v-07965744]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:6.4px 6.4px 6.4px 12.8px;margin:.4rem .4rem .4rem .8rem;border-bottom:1px solid #efefef;padding-bottom:3.2px;padding-bottom:.2rem;padding-left:6.4px;padding-left:.4rem;position:relative}.content[data-v-07965744]{margin-left:3.2px;margin-left:.2rem}.content .name[data-v-07965744]{color:#666;margin-top:1.6px;margin-top:.1rem;height:6.4px;height:.4rem;overflow:hidden}.content .price[data-v-07965744]{font-size:4.16px;font-size:.26rem;margin-top:3.2px;margin-top:.2rem}.content .price span[data-v-07965744]{color:#ef1411}.panel i[data-v-07965744]{position:absolute;top:0;left:-10px;background:#fd6132;color:#fff;display:inline-block;width:20px;font:12px \\\\5FAE\\8F6F\\96C5\\9ED1;text-align:center;padding:2px 0}.panel i[data-v-07965744]:after{border-top:6px solid transparent;border-left:5px solid #fd6132;position:absolute;top:12px;right:-4px;content:" "}.panel:nth-child(2) i[data-v-07965744]{background-color:#ff7a06}.panel:nth-child(2) i[data-v-07965744]:after{border-left-color:#ff7a06}.panel:nth-child(3) i[data-v-07965744]{background-color:#4fabef}.panel:nth-child(3) i[data-v-07965744]:after{border-left-color:#4fabef}', ""])
	},
	iWMn: function(t, i, e) {
		var s = e("3gRd");
		"string" == typeof s && (s = [[t.i, s, ""]]),
		s.locals && (t.exports = s.locals);
		e("rjj0")("07d40ae7", s, !1, {
			sourceMap: !1
		})
	},
	kScT: function(t, i, e) {
		"use strict";
		var s = function() {
			var t = this,
			i = t.$createElement,
			e = t._self._c || i;
			return e("div", {
				ref: "wrapper",
				staticClass: "list-wrapper"
			},
			[e("div", {
				staticClass: "scroll-content"
			},
			[e("div", {
				ref: "list"
			},
			[t._t("default")], 2), t._t("pullup", [t.pullUpLoad ? e("div", {
				staticClass: "pullup-wrapper"
			},
			[t.isPullUpLoad ? e("div", {
				staticClass: "after-trigger"
			},
			[e("loading")], 1) : e("div", {
				staticClass: "before-trigger"
			},
			[e("span", [t._v(t._s(t.pullUpTxt))])])]) : t._e()])], 2)])
		};
		s._withStripped = !0;
		var o = {
			render: s,
			staticRenderFns: []
		};
		i.a = o
	},
	nFi8: function(t, i, e) {
		"use strict";
		var s = e("FF4D"),
		o = e("E6UY"),
		r = !1;
		var n = function(t) {
			r || e("rXVP")
		},
		a = e("VU/8")(s.a, o.a, !1, n, null, null);
		a.options.__file = "components/better-scroll/loading.vue",
		i.a = a.exports
	},
	r45R: function(t, i, e) {
		"use strict";
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var s = e("LNQ4"),
		o = e("fQVu"),
		r = !1;
		var n = function(t) {
			r || e("iWMn")
		},
		a = e("VU/8")(s.a, o.a, !1, n, "data-v-2f754cba", null);
		a.options.__file = "pages/category/index.vue",
		i.
	default = a.exports
	},
	rXVP: function(t, i, e) {
		var s = e("StIU");
		"string" == typeof s && (s = [[t.i, s, ""]]),
		s.locals && (t.exports = s.locals);
		e("rjj0")("0d3ddfdd", s, !1, {
			sourceMap: !1
		})
	},
	uPfw: function(t, i, e) {
		"use strict";
		var s = function() {
			var t = this.$createElement,
			i = this._self._c || t;
			return i("div", {
				staticClass: "search"
			},
			[i("div", {
				staticClass: "search-box"
			},
			[i("router-link", {
				staticClass: "search-left",
				attrs: {
					to: "/"
				}
			},
			[i("van-icon", {
				attrs: {
					name: "arrow-left"
				}
			})], 1), i("router-link", {
				staticClass: "search-right",
				attrs: {
					to: "/search"
				}
			},
			[i("i", {
				staticClass: "iconfont icon-search"
			}), i("span", [this._v("请输入关键词搜索")])])], 1)])
		};
		s._withStripped = !0;
		var o = {
			render: s,
			staticRenderFns: []
		};
		i.a = o
	},
	uWQa: function(t, i, e) {
		"use strict";
		var s = function() {
			var t = this,
			i = t.$createElement,
			e = t._self._c || i;
			return e("div", {
				staticClass: "wapper"
			},
			t._l(t.list,
			function(i, s) {
				return e("div", {
					key: s,
					staticClass: "panel"
				},
				[19 == i.cat_id ? e("router-link", {
					attrs: {
						to: {
							name: "laptop-id",
							params: {
								id: i.id
							}
						}
					}
				},
				[s < 3 ? e("i", [t._v(t._s(s + 1))]) : t._e(), e("div", {
					staticClass: "img"
				},
				[e("img", {
					attrs: {
						src: i.img + "?imageMogr2/thumbnail/60x60!/interlace/1",
						width: "60",
						height: "60"
					}
				})]), e("div", {
					staticClass: "content"
				},
				[e("p", {
					staticClass: "name"
				},
				[t._v(t._s(i.title))]), e("p", {
					staticClass: "price"
				},
				[t._v("回收均价 : "), e("span", [t._v("￥" + t._s(i.price))])])])]) : 15 == i.cat_id ? e("router-link", {
					attrs: {
						to: {
							name: "watch-id",
							params: {
								id: i.id
							}
						}
					}
				},
				[s < 3 ? e("i", [t._v(t._s(s + 1))]) : t._e(), e("div", {
					staticClass: "img"
				},
				[e("img", {
					attrs: {
						src: i.img + "?imageMogr2/thumbnail/60x60!/interlace/1",
						width: "60",
						height: "60"
					}
				})]), e("div", {
					staticClass: "content"
				},
				[e("p", {
					staticClass: "name"
				},
				[t._v(t._s(i.title))])])]) : e("router-link", {
					attrs: {
						to: {
							name: "product-id",
							params: {
								id: i.id
							}
						}
					}
				},
				[s < 3 ? e("i", [t._v(t._s(s + 1))]) : t._e(), e("div", {
					staticClass: "img"
				},
				[e("img", {
					attrs: {
						src: i.img + "?imageMogr2/thumbnail/60x60!/interlace/1",
						width: "60",
						height: "60"
					}
				})]), e("div", {
					staticClass: "content"
				},
				[e("p", {
					staticClass: "name"
				},
				[t._v(t._s(i.title))]), e("p", {
					staticClass: "price"
				},
				[t._v("回收均价 : "), e("span", [t._v("￥" + t._s(i.price))])])])])], 1)
			}))
		};
		s._withStripped = !0;
		var o = {
			render: s,
			staticRenderFns: []
		};
		i.a = o
	}
});