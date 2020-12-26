! function(a, b) {
	"use strict";
	var c = {},
		d = a.GreenSockGlobals = a.GreenSockGlobals || a;
	if (!d.TweenLite) {
		var e, f, g, h, i, j = function(a) {
				var b, c = a.split("."),
					e = d;
				for (b = 0; b < c.length; b++) e[c[b]] = e = e[c[b]] || {};
				return e
			},
			k = j("com.greensock"),
			l = 1e-10,
			m = function(a) {
				var b, c = [],
					d = a.length;
				for (b = 0; b !== d; c.push(a[b++]));
				return c
			},
			n = function() {},
			o = function() {
				var a = Object.prototype.toString,
					b = a.call([]);
				return function(c) {
					return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
				}
			}(),
			p = {},
			q = function(e, f, g, h) {
				this.sc = p[e] ? p[e].sc : [], p[e] = this, this.gsClass = null, this.func = g;
				var i = [];
				this.check = function(k) {
					for (var l, m, n, o, r, s = f.length, t = s; --s > -1;)(l = p[f[s]] || new q(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : k && l.sc.push(this);
					if (0 === t && g) {
						if (n = (m = ("com.greensock." + e).split(".")).pop(), o = j(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
							if (d[n] = c[n] = o, !(r = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], (function() {
								return o
							}));
							else if (r)
							if (e === b)
								for (s in module.exports = c[b] = o, c) o[s] = c[s];
							else c[b] && (c[b][n] = o);
						for (s = 0; s < this.sc.length; s++) this.sc[s].check()
					}
				}, this.check(!0)
			},
			r = a._gsDefine = function(a, b, c, d) {
				return new q(a, b, c, d)
			},
			s = k._class = function(a, b, c) {
				return b = b || function() {}, r(a, [], (function() {
					return b
				}), c), b
			};
		r.globals = d;
		var t = [0, 0, 1, 1],
			u = s("easing.Ease", (function(a, b, c, d) {
				this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? t.concat(b) : t
			}), !0),
			v = u.map = {},
			w = u.register = function(a, b, c, d) {
				for (var e, f, g, h, i = b.split(","), j = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
					for (f = i[j], e = d ? s("easing." + f, null, !0) : k.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
			};
		for ((g = u.prototype)._calcEnd = !1, g.getRatio = function(a) {
				if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
				var b = this._type,
					c = this._power,
					d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
				return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
			}, f = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --f > -1;) g = e[f] + ",Power" + f, w(new u(null, null, 1, f), g, "easeOut", !0), w(new u(null, null, 2, f), g, "easeIn" + (0 === f ? ",easeNone" : "")), w(new u(null, null, 3, f), g, "easeInOut");
		v.linear = k.easing.Linear.easeIn, v.swing = k.easing.Quad.easeInOut;
		var x = s("events.EventDispatcher", (function(a) {
			this._listeners = {}, this._eventTarget = a || this
		}));
		(g = x.prototype).addEventListener = function(a, b, c, d, e) {
			e = e || 0;
			var f, g, j = this._listeners[a],
				k = 0;
			for (this !== h || i || h.wake(), null == j && (this._listeners[a] = j = []), g = j.length; --g > -1;)(f = j[g]).c === b && f.s === c ? j.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
			j.splice(k, 0, {
				c: b,
				s: c,
				up: d,
				pr: e
			})
		}, g.removeEventListener = function(a, b) {
			var c, d = this._listeners[a];
			if (d)
				for (c = d.length; --c > -1;)
					if (d[c].c === b) return void d.splice(c, 1)
		}, g.dispatchEvent = function(a) {
			var b, c, d, e = this._listeners[a];
			if (e)
				for ((b = e.length) > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)(d = e[b]) && (d.up ? d.c.call(d.s || c, {
					type: a,
					target: c
				}) : d.c.call(d.s || c))
		};
		var y = a.requestAnimationFrame,
			z = a.cancelAnimationFrame,
			A = Date.now || function() {
				return (new Date).getTime()
			},
			B = A();
		for (f = (e = ["ms", "moz", "webkit", "o"]).length; --f > -1 && !y;) y = a[e[f] + "RequestAnimationFrame"], z = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];
		s("Ticker", (function(a, b) {
			var c, d, e, f, g, j = this,
				k = A(),
				m = !(!1 === b || !y) && "auto",
				o = 500,
				p = 33,
				r = function(a) {
					var b, h, i = A() - B;
					i > o && (k += i - p), B += i, j.time = (B - k) / 1e3, b = j.time - g, (!c || b > 0 || !0 === a) && (j.frame++, g += b + (b >= f ? .004 : f - b), h = !0), !0 !== a && (e = d(r)), h && j.dispatchEvent("tick")
				};
			x.call(j), j.time = j.frame = 0, j.tick = function() {
				r(!0)
			}, j.lagSmoothing = function(a, b) {
				o = a || 1 / l, p = Math.min(b, o, 0)
			}, j.sleep = function() {
				null != e && (m && z ? z(e) : clearTimeout(e), d = n, e = null, j === h && (i = !1))
			}, j.wake = function(a) {
				null !== e ? j.sleep() : a ? k += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? n : m && y ? y : function(a) {
					return setTimeout(a, 1e3 * (g - j.time) + 1 | 0)
				}, j === h && (i = !0), r(2)
			}, j.fps = function(a) {
				return arguments.length ? (f = 1 / ((c = a) || 60), g = this.time + f, void j.wake()) : c
			}, j.useRAF = function(a) {
				return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
			}, j.fps(a), setTimeout((function() {
				"auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
			}), 1500)
		})), (g = k.Ticker.prototype = new k.events.EventDispatcher).constructor = k.Ticker;
		var C = s("core.Animation", (function(a, b) {
			if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, V) {
				i || h.wake();
				var c = this.vars.useFrames ? U : V;
				c.add(this, c._time), this.vars.paused && this.paused(!0)
			}
		}));
		h = C.ticker = new k.Ticker, (g = C.prototype)._dirty = g._gc = g._initted = g._paused = !1, g._totalTime = g._time = 0, g._rawPrevTime = -1, g._next = g._last = g._onUpdate = g._timeline = g.timeline = null, g._paused = !1;
		var D = function() {
			i && A() - B > 2e3 && h.wake(), setTimeout(D, 2e3)
		};
		D(), g.play = function(a, b) {
			return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
		}, g.pause = function(a, b) {
			return null != a && this.seek(a, b), this.paused(!0)
		}, g.resume = function(a, b) {
			return null != a && this.seek(a, b), this.paused(!1)
		}, g.seek = function(a, b) {
			return this.totalTime(Number(a), !1 !== b)
		}, g.restart = function(a, b) {
			return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
		}, g.reverse = function(a, b) {
			return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
		}, g.render = function(a, b, c) {}, g.invalidate = function() {
			return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
		}, g.isActive = function() {
			var a, b = this._timeline,
				c = this._startTime;
			return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
		}, g._enabled = function(a, b) {
			return i || h.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
		}, g._kill = function(a, b) {
			return this._enabled(!1, !1)
		}, g.kill = function(a, b) {
			return this._kill(a, b), this
		}, g._uncache = function(a) {
			for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
			return this
		}, g._swapSelfInParams = function(a) {
			for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
			return c
		}, g._callback = function(a) {
			var b = this.vars,
				c = b[a],
				d = b[a + "Params"],
				e = b[a + "Scope"] || b.callbackScope || this;
			switch (d ? d.length : 0) {
				case 0:
					c.call(e);
					break;
				case 1:
					c.call(e, d[0]);
					break;
				case 2:
					c.call(e, d[0], d[1]);
					break;
				default:
					c.apply(e, d)
			}
		}, g.eventCallback = function(a, b, c, d) {
			if ("on" === (a || "").substr(0, 2)) {
				var e = this.vars;
				if (1 === arguments.length) return e[a];
				null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
			}
			return this
		}, g.delay = function(a) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
		}, g.duration = function(a) {
			return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, g.totalDuration = function(a) {
			return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
		}, g.time = function(a, b) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
		}, g.totalTime = function(a, b, c) {
			if (i || h.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var d = this._totalDuration,
						e = this._timeline;
					if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
						for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
				}
				this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X())
			}
			return this
		}, g.progress = g.totalProgress = function(a, b) {
			var c = this.duration();
			return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
		}, g.startTime = function(a) {
			return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
		}, g.endTime = function(a) {
			return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
		}, g.timeScale = function(a) {
			if (!arguments.length) return this._timeScale;
			if (a = a || l, this._timeline && this._timeline.smoothChildTiming) {
				var b = this._pauseTime,
					c = b || 0 === b ? b : this._timeline.totalTime();
				this._startTime = c - (c - this._startTime) * this._timeScale / a
			}
			return this._timeScale = a, this._uncache(!1)
		}, g.reversed = function(a) {
			return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, g.paused = function(a) {
			if (!arguments.length) return this._paused;
			var b, c, d = this._timeline;
			return a != this._paused && d && (i || a || h.wake(), c = (b = d.rawTime()) - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
		};
		var E = s("core.SimpleTimeline", (function(a) {
			C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
		}));
		(g = E.prototype = new C).constructor = E, g.kill()._gc = !1, g._first = g._last = g._recent = null, g._sortChildren = !1, g.add = g.insert = function(a, b, c, d) {
			var e, f;
			if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
				for (f = a._startTime; e && e._startTime > f;) e = e._prev;
			return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
		}, g._remove = function(a, b) {
			return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
		}, g.render = function(a, b, c) {
			var d, e = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
		}, g.rawTime = function() {
			return i || h.wake(), this._totalTime
		};
		var F = s("TweenLite", (function(b, c, d) {
				if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
				this.target = b = "string" != typeof b ? b : F.selector(b) || b;
				var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
					i = this.vars.overwrite;
				if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0])
					for (this._targets = g = m(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)(f = g[e]) ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(m(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : "string" == typeof(f = g[e--] = F.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1);
				else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
				(this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -l, this.render(Math.min(0, -this._delay)))
			}), !0),
			G = function(b) {
				return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
			};
		(g = F.prototype = new C).constructor = F, g.kill()._gc = !1, g.ratio = 0, g._firstPT = g._targets = g._overwrittenProps = g._startAt = null, g._notifyPluginsOfEnabled = g._lazy = !1, F.version = "1.19.0", F.defaultEase = g._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = h, F.autoSleep = 120, F.lagSmoothing = function(a, b) {
			h.lagSmoothing(a, b)
		}, F.selector = a.$ || a.jQuery || function(b) {
			var c = a.$ || a.jQuery;
			return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
		};
		var I = [],
			J = {},
			K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
			L = function(a) {
				for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
			},
			M = function(a, b, c, d) {
				var e, f, g, h, i, j, k, l = [a, b],
					m = 0,
					n = "",
					o = 0;
				for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], n += (j = b.substr(m, b.indexOf(k, m) - m)) || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
					_next: l._firstPT,
					t: l,
					p: l.length - 1,
					s: g,
					c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
					f: 0,
					m: o && 4 > o ? Math.round : 0
				}), m += k.length;
				return (n += b.substr(m)) && l.push(n), l.setRatio = L, l
			},
			N = function(a, b, c, d, e, f, g, h, i) {
				"function" == typeof d && (d = d(i || 0, a));
				var k, l = "get" === c ? a[b] : c,
					m = typeof a[b],
					n = "string" == typeof d && "=" === d.charAt(1),
					o = {
						t: a,
						p: b,
						s: l,
						f: "function" === m,
						pg: 0,
						n: e || b,
						m: f ? "function" == typeof f ? f : Math.round : 0,
						pr: 0,
						c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - l || 0
					};
				return "number" !== m && ("function" === m && "get" === c && (k = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), o.s = l = g ? a[k](g) : a[k]()), "string" == typeof l && (g || isNaN(l)) ? (o.fp = g, o = {
					t: M(l, d, h || F.defaultStringFilter, o),
					p: "setRatio",
					s: 0,
					c: 1,
					f: 2,
					pg: 0,
					n: e || b,
					pr: 0,
					m: 0
				}) : n || (o.s = parseFloat(l), o.c = parseFloat(d) - o.s || 0)), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
			},
			O = F._internals = {
				isArray: o,
				isSelector: G,
				lazyTweens: I,
				blobDif: M
			},
			P = F._plugins = {},
			Q = O.tweenLookup = {},
			R = 0,
			S = O.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1,
				onOverwrite: 1,
				callbackScope: 1,
				stringFilter: 1,
				id: 1
			},
			T = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				true: 1,
				false: 0
			},
			U = C._rootFramesTimeline = new E,
			V = C._rootTimeline = new E,
			W = 30,
			X = O.lazyRender = function() {
				var a, b = I.length;
				for (J = {}; --b > -1;)(a = I[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
				I.length = 0
			};
		V._startTime = h.time, U._startTime = h.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function() {
			var a, b, c;
			if (I.length && X(), V.render((h.time - V._startTime) * V._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), h.frame >= W) {
				for (c in W = h.frame + (parseInt(F.autoSleep, 10) || 120), Q) {
					for (a = (b = Q[c].tweens).length; --a > -1;) b[a]._gc && b.splice(a, 1);
					0 === b.length && delete Q[c]
				}
				if ((!(c = V._first) || c._paused) && F.autoSleep && !U._first && 1 === h._listeners.tick.length) {
					for (; c && c._paused;) c = c._next;
					c || h.sleep()
				}
			}
		}, h.addEventListener("tick", C._updateRoot);
		var Y = function(a, b, c) {
				var d, e, f = a._gsTweenID;
				if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
						target: a,
						tweens: []
					}), b && ((d = Q[f].tweens)[e = d.length] = b, c))
					for (; --e > -1;) d[e] === b && d.splice(e, 1);
				return Q[f].tweens
			},
			Z = function(a, b, c, d) {
				var e, f, g = a.vars.onOverwrite;
				return g && (e = g(a, b, c, d)), (g = F.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f
			},
			$ = function(a, b, c, d, e) {
				var f, g, h, i;
				if (1 === d || d >= 4) {
					for (i = e.length, f = 0; i > f; f++)
						if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
						else if (5 === d) break;
					return g
				}
				var j, k = b._startTime + l,
					m = [],
					n = 0,
					o = 0 === b._duration;
				for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));
				for (f = n; --f > -1;)
					if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
						if (2 !== d && !Z(h, b)) continue;
						h._enabled(!1, !1) && (g = !0)
					}
				return g
			},
			_ = function(a, b, c) {
				for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
					if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
					d = d._timeline
				}
				return (f /= e) > b ? f - b : c && f === b || !a._initted && 2 * l > f - b ? l : (f += a.totalDuration() / a._timeScale / e) > b + l ? 0 : f - b - l
			};
		g._init = function() {
			var a, b, c, d, e, f, g = this.vars,
				h = this._overwrittenProps,
				i = this._duration,
				j = !!g.immediateRender,
				k = g.ease;
			if (g.startAt) {
				for (d in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {}, g.startAt) e[d] = g.startAt[d];
				if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), j)
					if (this._time > 0) this._startAt = null;
					else if (0 !== i) return
			} else if (g.runBackwards && 0 !== i)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					for (d in 0 !== this._time && (j = !1), c = {}, g) S[d] && "autoCSS" !== d || (c[d] = g[d]);
					if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, this._startAt = F.to(this.target, 0, c), j) {
						if (0 === this._time) return
					} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
				}
			if (this._ease = k = k ? k instanceof u ? k : "function" == typeof k ? new u(k, g.easeParams) : v[k] || F.defaultEase : F.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
			else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
			if (b && F._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
				for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
			this._onUpdate = g.onUpdate, this._initted = !0
		}, g._initProps = function(b, c, d, e, f) {
			var g, h, i, j, k, l;
			if (null == b) return !1;
			for (g in J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && !1 !== this.vars.autoCSS && function(a, b) {
					var c, d = {};
					for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
					a.css = d
				}(this.vars, b), this.vars)
				if (l = this.vars[g], S[g]) l && (l instanceof Array || l.push && o(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
				else if (P[g] && (j = new P[g])._onInitTween(b, this.vars[g], this, f)) {
				for (this._firstPT = k = {
						_next: this._firstPT,
						t: j,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 1,
						n: g,
						pg: 1,
						pr: j._priority,
						m: 0
					}, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
				(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
			} else c[g] = N.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
			return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), i)
		}, g.render = function(a, b, c) {
			var d, e, f, g, h = this._time,
				i = this._duration,
				j = this._rawPrevTime;
			if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0, j > l && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : l);
			else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : l)), this._initted || (c = !0);
			else if (this._totalTime = this._time = a, this._easeType) {
				var k = a / i,
					m = this._easeType,
					n = this._easePower;
				(1 === m || 3 === m && k >= .5) && (k = 1 - k), 3 === m && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), this.ratio = 1 === m ? 1 - k : 2 === m ? k : .5 > a / i ? k / 2 : 1 - k / 2
			} else this.ratio = this._ease.getRatio(a / i);
			if (this._time !== h || c) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
					this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
				this._onUpdate && (0 > a && this._startAt && -1e-4 !== a && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && -1e-4 !== a && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0))
			}
		}, g._kill = function(a, b, c) {
			if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
			var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
			if ((o(b) || G(b)) && "number" != typeof b[0])
				for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
			else {
				if (this._targets) {
					for (d = this._targets.length; --d > -1;)
						if (b === this._targets[d]) {
							h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
							break
						}
				} else {
					if (b !== this.target) return !1;
					h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
				}
				if (h) {
					if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
						for (f in j) h[f] && (l || (l = []), l.push(f));
						if ((l || !a) && !Z(this, c, b, l)) return !1
					}
					for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return i
		}, g.invalidate = function() {
			return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -l, this.render(Math.min(0, -this._delay))), this
		}, g._enabled = function(a, b) {
			if (i || h.wake(), a && this._gc) {
				var c, d = this._targets;
				if (d)
					for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0);
				else this._siblings = Y(this.target, this, !0)
			}
			return C.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
		}, F.to = function(a, b, c) {
			return new F(a, b, c)
		}, F.from = function(a, b, c) {
			return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
		}, F.fromTo = function(a, b, c, d) {
			return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
		}, F.delayedCall = function(a, b, c, d, e) {
			return new F(b, 0, {
				delay: a,
				onComplete: b,
				onCompleteParams: c,
				callbackScope: d,
				onReverseComplete: b,
				onReverseCompleteParams: c,
				immediateRender: !1,
				lazy: !1,
				useFrames: e,
				overwrite: 0
			})
		}, F.set = function(a, b) {
			return new F(a, 0, b)
		}, F.getTweensOf = function(a, b) {
			if (null == a) return [];
			var c, d, e, f;
			if (a = "string" != typeof a ? a : F.selector(a) || a, (o(a) || G(a)) && "number" != typeof a[0]) {
				for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
				for (c = d.length; --c > -1;)
					for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
			} else
				for (c = (d = Y(a).concat()).length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
			return d
		}, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
			"object" == typeof b && (c = b, b = !1);
			for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
		};
		var aa = s("plugins.TweenPlugin", (function(a, b) {
			this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype
		}), !0);
		if (g = aa.prototype, aa.version = "1.19.0", aa.API = 2, g._firstPT = null, g._addTween = N, g.setRatio = L, g._kill = function(a) {
				var b, c = this._overwriteProps,
					d = this._firstPT;
				if (null != a[this._propName]) this._overwriteProps = [];
				else
					for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
				for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
				return !1
			}, g._mod = g._roundProps = function(a) {
				for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
			}, F._onPluginEvent = function(a, b) {
				var c, d, e, f, g, h = b._firstPT;
				if ("_onInitAllProps" === a) {
					for (; h;) {
						for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
						(h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
					}
					h = b._firstPT = e
				}
				for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
				return c
			}, aa.activate = function(a) {
				for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
				return !0
			}, r.plugin = function(a) {
				if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
				var b, c = a.propName,
					d = a.priority || 0,
					e = a.overwriteProps,
					f = {
						init: "_onInitTween",
						set: "setRatio",
						kill: "_kill",
						round: "_mod",
						mod: "_mod",
						initAll: "_onInitAllProps"
					},
					g = s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", (function() {
						aa.call(this, c, d), this._overwriteProps = e || []
					}), !0 === a.global),
					h = g.prototype = new aa(c);
				for (b in h.constructor = g, g.API = a.API, f) "function" == typeof a[b] && (h[f[b]] = a[b]);
				return g.version = a.version, aa.activate([g]), g
			}, e = a._gsQueue) {
			for (f = 0; f < e.length; f++) e[f]();
			for (g in p) p[g].func || a.console.log("GSAP encountered missing dependency: " + g)
		}
		i = !1
	}
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.8.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
		"use strict";
		var a = document.documentElement,
			b = window,
			c = function(c, d) {
				var e = "x" === d ? "Width" : "Height",
					f = "scroll" + e,
					g = "client" + e,
					h = document.body;
				return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e]
			},
			e = function(c, d) {
				var e = "scroll" + ("x" === d ? "Left" : "Top");
				return c === b && (null != c.pageXOffset ? e = "page" + d.toUpperCase() + "Offset" : c = null != a[e] ? a : document.body),
					function() {
						return c[e]
					}
			},
			f = function(c, f) {
				var g = function(a) {
						return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || a.nodeType && a.style ? a : null
					}(c).getBoundingClientRect(),
					h = !f || f === b || f === document.body,
					i = (h ? a : f).getBoundingClientRect(),
					j = {
						x: g.left - i.left,
						y: g.top - i.top
					};
				return !h && f && (j.x += e(f, "x")(), j.y += e(f, "y")()), j
			},
			g = function(a, b, d) {
				var e = typeof a;
				return "number" === e || "string" === e && "=" === a.charAt(1) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d])
			},
			h = _gsScope._gsDefine.plugin({
				propName: "scrollTo",
				API: 2,
				version: "1.8.0",
				init: function(a, c, d) {
					return this._wdw = a === b, this._target = a, this._tween = d, "object" != typeof c ? "string" == typeof(c = {
						y: c
					}).y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y) : c.nodeType && (c = {
						y: c,
						x: c
					}), this.vars = c, this._autoKill = !1 !== c.autoKill, this.getX = e(a, "x"), this.getY = e(a, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
				},
				set: function(a) {
					this._super.setRatio.call(this, a);
					var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
						e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
						f = e - this.yPrev,
						g = d - this.xPrev,
						i = h.autoKillThreshold;
					this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0), !this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
				}
			}),
			i = h.prototype;
		h.max = c, h.getOffset = f, h.autoKillThreshold = 7, i._kill = function(a) {
			return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a)
		}
	})), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(a) {
		"use strict";
		var b = function() {
			return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
	}(),
	function(t, e) {
		"function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.KUTE = e()
	}(this, (function() {
		"use strict";
		for (var t = "undefined" != typeof global ? global : window, e = t.performance, n = [], i = null, s = ["color", "backgroundColor"], r = ["top", "left", "width", "height"], a = ["translate3d", "translateX", "translateY", "translateZ", "rotate", "translate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scale"], o = ["opacity"], u = s.concat(o, r, a), l = u.length, h = {}, c = 0; c < l; c++) {
			var p = u[c]; - 1 !== s.indexOf(p) ? h[p] = "rgba(0,0,0,0)" : -1 !== r.indexOf(p) ? h[p] = 0 : "translate3d" === p ? h[p] = [0, 0, 0] : "translate" === p ? h[p] = [0, 0] : "rotate" === p || /X|Y|Z/.test(p) ? h[p] = 0 : "scale" !== p && "opacity" !== p || (h[p] = 1), p = null
		}
		var f = {
				duration: 700,
				delay: 0,
				offset: 0,
				repeat: 0,
				repeatDelay: 0,
				yoyo: !1,
				easing: "linear",
				keepHex: !1
			},
			d = function() {
				for (var t = document.createElement("div"), e = 0, n = ["Moz", "moz", "Webkit", "webkit", "O", "o", "Ms", "ms"], i = ["MozTransform", "mozTransform", "WebkitTransform", "webkitTransform", "OTransform", "oTransform", "MsTransform", "msTransform"], s = (e = 0, n.length); e < s; e++)
					if (i[e] in t.style) return n[e];
				t = null
			},
			v = function(t) {
				var e = !(t in document.body.style),
					n = d();
				return e ? n + (t.charAt(0).toUpperCase() + t.slice(1)) : t
			},
			g = function(t, e) {
				var n;
				if (null === (n = e ? t instanceof Object || "object" == typeof t ? t : document.querySelectorAll(t) : "object" == typeof t ? t : /^#/.test(t) ? document.getElementById(t.replace("#", "")) : document.querySelector(t)) && "window" !== t) throw new TypeError("Element not found or incorrect selector: " + t);
				return n
			},
			y = function(t) {
				return 180 * t / Math.PI
			},
			m = function(t, e) {
				for (var n, i = parseInt(t) || 0, s = ["px", "%", "deg", "rad", "em", "rem", "vh", "vw"], r = 0, a = s.length; r < a; r++)
					if ("string" == typeof t && -1 !== t.indexOf(s[r])) {
						n = s[r];
						break
					}
				return {
					v: i,
					u: n = void 0 !== n ? n : e ? "deg" : "px"
				}
			},
			w = function(e) {
				if (/rgb|rgba/.test(e)) {
					var n = e.replace(/\s|\)/, "").split("(")[1].split(","),
						i = n[3] ? n[3] : null;
					return i ? {
						r: parseInt(n[0]),
						g: parseInt(n[1]),
						b: parseInt(n[2]),
						a: parseFloat(i)
					} : {
						r: parseInt(n[0]),
						g: parseInt(n[1]),
						b: parseInt(n[2])
					}
				}
				if (/^#/.test(e)) {
					var s = I(e);
					return {
						r: s.r,
						g: s.g,
						b: s.b
					}
				}
				if (/transparent|none|initial|inherit/.test(e)) return {
					r: 0,
					g: 0,
					b: 0,
					a: 0
				};
				if (!/^#|^rgb/.test(e)) {
					var r = document.getElementsByTagName("head")[0];
					r.style.color = e;
					var a = t.getComputedStyle(r, null).color;
					return a = /rgb/.test(a) ? a.replace(/[^\d,]/g, "").split(",") : [0, 0, 0], r.style.color = "", {
						r: parseInt(a[0]),
						g: parseInt(a[1]),
						b: parseInt(a[2])
					}
				}
			},
			b = function(t, e, n) {
				return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
			},
			I = function(t) {
				t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, i) {
					return e + e + n + n + i + i
				}));
				var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
				return n ? {
					r: parseInt(n[1], 16),
					g: parseInt(n[2], 16),
					b: parseInt(n[3], 16)
				} : null
			},
			E = function(e, n) {
				var i = e.style,
					s = t.getComputedStyle(e, null) || e.currentStyle,
					r = v(n),
					a = i[n] && !/auto|initial|none|unset/.test(i[n]) ? i[n] : s[r];
				if ("transform" !== n && (r in s || r in i)) {
					if (a) {
						if ("filter" === r) {
							var o = parseInt(a.split("=")[1].replace(")", ""));
							return parseFloat(o / 100)
						}
						return a
					}
					return h[n]
				}
			},
			x = function(t) {
				var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
			},
			S = "ontouchstart" in t || navigator && navigator.msMaxTouchPoints || !1 ? "touchstart" : "mousewheel",
			P = "mouseenter",
			Y = t.requestAnimationFrame || t.webkitRequestAnimationFrame || function(t) {
				return setTimeout(t, 16)
			},
			X = t.cancelAnimationFrame || t.webkitCancelRequestAnimationFrame || function(t) {
				return clearTimeout(t)
			},
			C = v("transform"),
			A = document.body,
			F = document.getElementsByTagName("HTML")[0],
			Z = navigator && /webkit/i.test(navigator.userAgent) || "BackCompat" == document.compatMode ? A : F,
			B = 8 === (!(!navigator || null === new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)) && parseFloat(RegExp.$1)),
			$ = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
			q = t.Interpolate = {},
			Q = q.number = function(t, e, n) {
				return (t = +t) + (e -= t) * n
			},
			R = (q.unit = function(t, e, n, i) {
				return (t = +t) + (e -= t) * i + n
			}, q.color = function(t, e, n, i) {
				var s, r = {},
					o = ",";
				for (s in e) r[s] = "a" !== s ? Q(t[s], e[s], n) >> 0 || 0 : t[s] && e[s] ? (100 * Q(t[s], e[s], n) >> 0) / 100 : null;
				return i ? b(r.r, r.g, r.b) : r.a ? "rgba(" + r.r + o + r.g + o + r.b + o + r.a + ")" : "rgb(" + r.r + o + r.g + o + r.b + ")"
			}),
			W = q.translate = $ ? function(t, e, n, i) {
				var s = {};
				for (var r in e) s[r] = (t[r] === e[r] ? e[r] : t[r] + (e[r] - t[r]) * i >> 0) + n;
				return s.x || s.y ? "translate(" + s.x + "," + s.y + ")" : "translate3d(" + s.translateX + "," + s.translateY + "," + s.translateZ + ")"
			} : function(t, e, n, i) {
				var s = {};
				for (var r in e) s[r] = (t[r] === e[r] ? e[r] : (100 * (t[r] + (e[r] - t[r]) * i) >> 0) / 100) + n;
				return s.x || s.y ? "translate(" + s.x + "," + s.y + ")" : "translate3d(" + s.translateX + "," + s.translateY + "," + s.translateZ + ")"
			},
			z = q.rotate = function(t, e, n, i) {
				var s = {};
				for (var r in e) s[r] = "z" === r ? "rotate(" + (100 * (t[r] + (e[r] - t[r]) * i) >> 0) / 100 + n + ")" : r + "(" + (100 * (t[r] + (e[r] - t[r]) * i) >> 0) / 100 + n + ")";
				return s.z ? s.z : (s.rotateX || "") + (s.rotateY || "") + (s.rotateZ || "")
			},
			H = q.skew = function(t, e, n, i) {
				var s = {};
				for (var r in e) s[r] = r + "(" + (10 * (t[r] + (e[r] - t[r]) * i) >> 0) / 10 + n + ")";
				return (s.skewX || "") + (s.skewY || "")
			},
			D = q.scale = function(t, e, n) {
				return "scale(" + (1e3 * (t + (e - t) * n) >> 0) / 1e3 + ")"
			},
			j = {},
			L = function(t) {
				for (var e = 0; e < n.length;) N.call(n[e], t) ? e++ : n.splice(e, 1);
				i = Y(L)
			},
			N = function(t) {
				if ((t = t || e.now()) < this._startTime && this.playing) return !0;
				var n = Math.min((t - this._startTime) / this.options.duration, 1),
					i = this.options.easing(n);
				for (var s in this.valuesEnd) j[s](this.element, s, this.valuesStart[s], this.valuesEnd[s], i, this.options);
				if (this.options.update && this.options.update.call(), 1 === n) {
					if (this.options.repeat > 0) return isFinite(this.options.repeat) && this.options.repeat--, this.options.yoyo && (this.reversed = !this.reversed, tt.call(this)), this._startTime = this.options.yoyo && !this.reversed ? t + this.options.repeatDelay : t, !0;
					this.options.complete && this.options.complete.call(), it.call(this);
					for (var r = 0, a = this.options.chain.length; r < a; r++) this.options.chain[r].start();
					return et.call(this), !1
				}
				return !0
			},
			U = function() {
				var t = this.element,
					e = this.options;
				void 0 !== e.perspective && C in this.valuesEnd && (this.valuesStart[C].perspective = this.valuesEnd[C].perspective), void 0 === e.transformOrigin || "svgTransform" in this.valuesEnd || (t.style[v("transformOrigin")] = e.transformOrigin), void 0 !== e.perspectiveOrigin && (t.style[v("perspectiveOrigin")] = e.perspectiveOrigin), void 0 !== e.parentPerspective && (t.parentNode.style[v("perspective")] = e.parentPerspective + "px"), void 0 !== e.parentPerspectiveOrigin && (t.parentNode.style[v("perspectiveOrigin")] = e.parentPerspectiveOrigin)
			},
			K = {},
			G = {},
			J = {
				boxModel: function(t, e) {
					t in j || (j[t] = function(t, e, n, i, s) {
						t.style[e] = (s > .99 || s < .01 ? (10 * Q(n, i, s) >> 0) / 10 : Q(n, i, s) >> 0) + "px"
					});
					var n = m(e);
					return "%" === n.u ? n.v * this.element.offsetWidth / 100 : n.v
				},
				transform: function(t, e) {
					if (C in j || (j[C] = function(t, e, n, i, s, r) {
							t.style[e] = (n.perspective || "") + ("translate" in n ? W(n.translate, i.translate, "px", s) : "") + ("rotate" in n ? z(n.rotate, i.rotate, "deg", s) : "") + ("skew" in n ? H(n.skew, i.skew, "deg", s) : "") + ("scale" in n ? D(n.scale, i.scale, s) : "")
						}), /translate/.test(t)) {
						if ("translate3d" === t) {
							var n = e.split(","),
								i = m(n[0]),
								s = m(n[1], t3d2 = m(n[2]));
							return {
								translateX: "%" === i.u ? i.v * this.element.offsetWidth / 100 : i.v,
								translateY: "%" === s.u ? s.v * this.element.offsetHeight / 100 : s.v,
								translateZ: "%" === t3d2.u ? t3d2.v * (this.element.offsetHeight + this.element.offsetWidth) / 200 : t3d2.v
							}
						}
						if (/^translate(?:[XYZ])$/.test(t)) {
							var r = m(e),
								a = /X/.test(t) ? this.element.offsetWidth / 100 : /Y/.test(t) ? this.element.offsetHeight / 100 : (this.element.offsetWidth + this.element.offsetHeight) / 200;
							return "%" === r.u ? r.v * a : r.v
						}
						if ("translate" === t) {
							var o, u = "string" == typeof e ? e.split(",") : e,
								l = {},
								h = m(u[0]),
								c = u.length ? m(u[1]) : {
									v: 0,
									u: "px"
								};
							return u instanceof Array ? (l.x = "%" === h.u ? h.v * this.element.offsetWidth / 100 : h.v, l.y = "%" === c.u ? c.v * this.element.offsetHeight / 100 : c.v) : (o = m(u), l.x = "%" === o.u ? o.v * this.element.offsetWidth / 100 : o.v, l.y = 0), l
						}
					} else if (/rotate|skew/.test(t)) {
						if (/^rotate(?:[XYZ])$|skew(?:[XY])$/.test(t)) {
							var p = m(e, !0);
							return "rad" === p.u ? y(p.v) : p.v
						}
						if ("rotate" === t) {
							var f = {},
								d = m(e, !0);
							return f.z = "rad" === d.u ? y(d.v) : d.v, f
						}
					} else if ("scale" === t) return parseFloat(e)
				},
				unitless: function(t, e) {
					return !/scroll/.test(t) || t in j ? "opacity" === t && (t in j || (j[t] = B ? function(t, e, n, i, s) {
						t.style.filter = "alpha(opacity=" + (100 * Q(n, i, s) >> 0) + ")"
					} : function(t, e, n, i, s) {
						t.style.opacity = (100 * Q(n, i, s) >> 0) / 100
					})) : j[t] = function(t, e, n, i, s) {
						t.scrollTop = Q(n, i, s) >> 0
					}, parseFloat(e)
				},
				colors: function(t, e) {
					return t in j || (j[t] = function(t, e, n, i, s, r) {
						t.style[e] = R(n, i, s, r.keepHex)
					}), w(e)
				}
			},
			V = function(t, e) {
				var n = (this.element, "start" === e ? this.valuesStart : this.valuesEnd),
					i = {},
					u = {},
					l = {},
					h = {};
				for (var c in t)
					if (-1 !== a.indexOf(c)) {
						if (/^translate(?:[XYZ]|3d)$/.test(c)) {
							for (var p = ["X", "Y", "Z"], f = 0; f < 3; f++) {
								var d = p[f];
								/3d/.test(c) ? l["translate" + d] = J.transform.call(this, "translate" + d, t[c][f]) : l["translate" + d] = "translate" + d in t ? J.transform.call(this, "translate" + d, t["translate" + d]) : 0
							}
							h.translate = l
						} else if (/^rotate(?:[XYZ])$|^skew(?:[XY])$/.test(c)) {
							for (var v = /rotate/.test(c) ? "rotate" : "skew", g = ["X", "Y", "Z"], y = "rotate" === v ? u : i, m = 0; m < 3; m++) {
								var w = g[m];
								void 0 !== t[v + w] && "skewZ" !== c && (y[v + w] = J.transform.call(this, v + w, t[v + w]))
							}
							h[v] = y
						} else /(rotate|translate|scale)$/.test(c) && (h[c] = J.transform.call(this, c, t[c]));
						n[C] = h
					} else -1 !== r.indexOf(c) ? n[c] = J.boxModel.call(this, c, t[c]) : -1 !== o.indexOf(c) || "scroll" === c ? n[c] = J.unitless.call(this, c, t[c]) : -1 !== s.indexOf(c) ? n[c] = J.colors.call(this, c, t[c]) : c in J && (n[c] = J[c].call(this, c, t[c]))
			},
			tt = function() {
				if (this.options.yoyo)
					for (var t in this.valuesEnd) {
						var e = this.valuesRepeat[t];
						this.valuesRepeat[t] = this.valuesEnd[t], this.valuesEnd[t] = e, this.valuesStart[t] = this.valuesRepeat[t]
					}
			},
			et = function() {
				this.repeat > 0 && (this.options.repeat = this.repeat), this.options.yoyo && !0 === this.reversed && (tt.call(this), this.reversed = !1), this.playing = !1, setTimeout((function() {
					n.length || i && (X(i), i = null)
				}), 48)
			},
			nt = function(t) {
				var e = document.body.getAttribute("data-tweening");
				e && "scroll" === e && t.preventDefault()
			},
			it = function() {
				"scroll" in this.valuesEnd && document.body.getAttribute("data-tweening") && (document.removeEventListener(S, nt, !1), document.removeEventListener(P, nt, !1), document.body.removeAttribute("data-tweening"))
			},
			st = function() {
				"scroll" in this.valuesEnd && !document.body.getAttribute("data-tweening") && (document.addEventListener(S, nt, !1), document.addEventListener(P, nt, !1), document.body.setAttribute("data-tweening", "scroll"))
			},
			rt = function(t) {
				return "function" == typeof t ? t : "string" == typeof t ? ot[t] : void 0
			},
			at = function() {
				var e = {},
					n = function(t, e) {
						if (t) {
							for (var n = t.style.cssText.replace(/\s/g, "").split(";"), i = {}, s = 0, r = n.length; s < r; s++)
								if (/transform/i.test(n[s]))
									for (var o = n[s].split(":")[1].split(")"), u = 0, l = o.length - 1; u < l; u++) {
										var h = o[u].split("("),
											c = h[0],
											p = h[1]; - 1 !== a.indexOf(c) && (i[c] = /translate3d/.test(c) ? p.split(",") : p)
									}
							return i
						}
					}(this.element),
					i = ["rotate", "skew"],
					s = ["X", "Y", "Z"];
				for (var r in this.valuesStart)
					if (-1 !== a.indexOf(r)) {
						var o = /(rotate|translate|scale)$/.test(r);
						if (/translate/.test(r) && "translate" !== r) e.translate3d = n.translate3d || h[r];
						else if (o) e[r] = n[r] || h[r];
						else if (!o && /rotate|skew/.test(r))
							for (var l = 0; l < 2; l++)
								for (var c = 0; c < 3; c++) {
									var p = i[l] + s[c]; - 1 !== a.indexOf(p) && p in this.valuesStart && (e[p] = n[p] || h[p])
								}
					} else if ("scroll" !== r)
					if ("opacity" === r && B) {
						var f = E(this.element, "filter");
						e.opacity = "number" == typeof f ? f : h.opacity
					} else -1 !== u.indexOf(r) ? e[r] = E(this.element, r) || l[r] : e[r] = r in K ? K[r].call(this, r, this.valuesStart[r]) : 0;
				else e[r] = this.element === Z ? t.pageYOffset || Z.scrollTop : this.element.scrollTop;
				for (var r in n) - 1 === a.indexOf(r) || r in this.valuesStart || (e[r] = n[r] || h[r]);
				if (this.valuesStart = {}, V.call(this, e, "start"), C in this.valuesEnd)
					for (var d in this.valuesStart[C])
						if ("perspective" !== d)
							if ("object" == typeof this.valuesStart[C][d])
								for (var v in this.valuesStart[C][d]) void 0 === this.valuesEnd[C][d] && (this.valuesEnd[C][d] = {}), "number" == typeof this.valuesStart[C][d][v] && void 0 === this.valuesEnd[C][d][v] && (this.valuesEnd[C][d][v] = this.valuesStart[C][d][v]);
							else "number" == typeof this.valuesStart[C][d] && void 0 === this.valuesEnd[C][d] && (this.valuesEnd[C][d] = this.valuesStart[C][d])
			},
			ot = t.Easing = {};
		ot.linear = function(t) {
			return t
		}, ot.easingSinusoidalIn = function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		}, ot.easingSinusoidalOut = function(t) {
			return Math.sin(t * Math.PI / 2)
		}, ot.easingSinusoidalInOut = function(t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		}, ot.easingQuadraticIn = function(t) {
			return t * t
		}, ot.easingQuadraticOut = function(t) {
			return t * (2 - t)
		}, ot.easingQuadraticInOut = function(t) {
			return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
		}, ot.easingCubicIn = function(t) {
			return t * t * t
		}, ot.easingCubicOut = function(t) {
			return --t * t * t + 1
		}, ot.easingCubicInOut = function(t) {
			return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
		}, ot.easingQuarticIn = function(t) {
			return t * t * t * t
		}, ot.easingQuarticOut = function(t) {
			return 1 - --t * t * t * t
		}, ot.easingQuarticInOut = function(t) {
			return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
		}, ot.easingQuinticIn = function(t) {
			return t * t * t * t * t
		}, ot.easingQuinticOut = function(t) {
			return 1 + --t * t * t * t * t
		}, ot.easingQuinticInOut = function(t) {
			return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
		}, ot.easingCircularIn = function(t) {
			return -(Math.sqrt(1 - t * t) - 1)
		}, ot.easingCircularOut = function(t) {
			return Math.sqrt(1 - (t -= 1) * t)
		}, ot.easingCircularInOut = function(t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		}, ot.easingExponentialIn = function(t) {
			return Math.pow(2, 10 * (t - 1)) - .001
		}, ot.easingExponentialOut = function(t) {
			return 1 - Math.pow(2, -10 * t)
		}, ot.easingExponentialInOut = function(t) {
			return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
		}, ot.easingBackIn = function(t) {
			var e = 1.70158;
			return t * t * ((e + 1) * t - e)
		}, ot.easingBackOut = function(t) {
			var e = 1.70158;
			return --t * t * ((e + 1) * t + e) + 1
		}, ot.easingBackInOut = function(t) {
			var e = 2.5949095;
			return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
		}, ot.easingElasticIn = function(t) {
			var e, n = .1;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / .4))
		}, ot.easingElasticOut = function(t) {
			var e, n = .1;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / Math.PI * 2, n * Math.pow(2, -10 * t) * Math.sin((t - e) * Math.PI * 2 / .4) + 1)
		}, ot.easingElasticInOut = function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = i * Math.asin(1 / n) / Math.PI * 2, (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * Math.PI * 2 / i) * .5 + 1)
		}, ot.easingBounceIn = function(t) {
			return 1 - ot.easingBounceOut(1 - t)
		}, ot.easingBounceOut = function(t) {
			return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}, ot.easingBounceInOut = function(t) {
			return t < .5 ? .5 * ot.easingBounceIn(2 * t) : .5 * ot.easingBounceOut(2 * t - 1) + .5
		};
		var ut = function(t, e, n, i) {
				for (var s in this.element = "scroll" in n && null == t ? Z : t, this.playing = !1, this.reversed = !1, this.paused = !1, this._startTime = null, this._pauseTime = null, this._startFired = !1, this.options = {}, i) this.options[s] = i[s];
				if (this.options.rpr = i.rpr || !1, this.valuesRepeat = {}, this.valuesEnd = {}, this.valuesStart = {}, V.call(this, n, "end"), this.options.rpr ? this.valuesStart = e : V.call(this, e, "start"), void 0 !== this.options.perspective && C in this.valuesEnd) {
					var r = "perspective(" + parseInt(this.options.perspective) + "px)";
					this.valuesEnd[C].perspective = r
				}
				for (var a in this.valuesEnd) a in G && !this.options.rpr && G[a].call(this);
				this.options.chain = [], this.options.easing = i.easing && "function" == typeof rt(i.easing) ? rt(i.easing) : ot[f.easing], this.options.repeat = i.repeat || f.repeat, this.options.repeatDelay = i.repeatDelay || f.repeatDelay, this.options.yoyo = i.yoyo || f.yoyo, this.options.duration = i.duration || f.duration, this.options.delay = i.delay || f.delay, this.repeat = this.options.repeat
			},
			lt = (ut.prototype = {
				start: function(t) {
					for (var s in st.call(this), this.options.rpr && at.apply(this), U.apply(this), this.valuesEnd) s in G && this.options.rpr && G[s].call(this), this.valuesRepeat[s] = this.valuesStart[s];
					return n.push(this), this.playing = !0, this.paused = !1, this._startFired = !1, this._startTime = t || e.now(), this._startTime += this.options.delay, this._startFired || (this.options.start && this.options.start.call(), this._startFired = !0), !i && L(), this
				},
				play: function() {
					return this.paused && this.playing && (this.paused = !1, this.options.resume && this.options.resume.call(), this._startTime += e.now() - this._pauseTime, function(t) {
						n.push(t)
					}(this), !i && L()), this
				},
				resume: function() {
					return this.play()
				},
				pause: function() {
					return !this.paused && this.playing && (x(this), this.paused = !0, this._pauseTime = e.now(), this.options.pause && this.options.pause.call()), this
				},
				stop: function() {
					return !this.paused && this.playing && (x(this), this.playing = !1, this.paused = !1, it.call(this), this.options.stop && this.options.stop.call(), this.stopChainedTweens(), et.call(this)), this
				},
				chain: function() {
					return this.options.chain = arguments, this
				},
				stopChainedTweens: function() {
					for (var t = 0, e = this.options.chain.length; t < e; t++) this.options.chain[t].stop()
				}
			}, function(t, e, n) {
				this.tweens = [];
				for (var i = [], s = 0, r = t.length; s < r; s++) i[s] = n || {}, n.delay = n.delay || f.delay, i[s].delay = s > 0 ? n.delay + (n.offset || f.offset) : n.delay, this.tweens.push(ct(t[s], e, i[s]))
			}),
			ht = function(t, e, n, i) {
				this.tweens = [];
				for (var s = [], r = 0, a = t.length; r < a; r++) s[r] = i || {}, i.delay = i.delay || f.delay, s[r].delay = r > 0 ? i.delay + (i.offset || f.offset) : i.delay, this.tweens.push(pt(t[r], e, n, s[r]))
			},
			ct = (lt.prototype = ht.prototype = {
				start: function(t) {
					t = t || e.now();
					for (var n = 0, i = this.tweens.length; n < i; n++) this.tweens[n].start(t);
					return this
				},
				stop: function() {
					for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].stop();
					return this
				},
				pause: function() {
					for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].pause();
					return this
				},
				chain: function() {
					return this.tweens[this.tweens.length - 1].options.chain = arguments, this
				},
				play: function() {
					for (var t = 0, e = this.tweens.length; t < e; t++) this.tweens[t].play();
					return this
				},
				resume: function() {
					return this.play()
				}
			}, function(t, e, n) {
				return (n = n || {}).rpr = !0, new ut(g(t), e, e, n)
			}),
			pt = function(t, e, n, i) {
				return i = i || {}, new ut(g(t), e, n, i)
			};
		return {
			property: v,
			getPrefix: d,
			selector: g,
			processEasing: rt,
			defaultOptions: f,
			to: ct,
			fromTo: pt,
			allTo: function(t, e, n) {
				return new lt(g(t, !0), e, n)
			},
			allFromTo: function(t, e, n, i) {
				return new ht(g(t, !0), e, n, i)
			},
			ticker: L,
			tick: i,
			tweens: n,
			update: N,
			dom: j,
			parseProperty: J,
			prepareStart: K,
			crossCheck: G,
			Tween: ut,
			truD: m,
			truC: w,
			rth: b,
			htr: I,
			getCurrentStyle: E
		}
	})),
	function(t, e) {
		if ("function" == typeof define && define.amd) define(["kute.js"], e);
		else if ("object" == typeof module && "function" == typeof require) module.exports = e(require("kute.js"));
		else {
			if (void 0 === t.KUTE) throw new Error("SVG Plugin require KUTE.js.");
			e(t.KUTE)
		}
	}(this, (function(t) {
		"use strict";
		var e = "undefined" != typeof global ? global : window,
			r = t,
			n = r.dom,
			a = r.parseProperty,
			i = r.prepareStart,
			s = r.getCurrentStyle,
			o = (r.truC, r.truD, r.crossCheck),
			l = e.Interpolate.number,
			h = (e.Interpolate.unit, e.Interpolate.color, r.defaultOptions),
			u = null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) && parseFloat(RegExp.$1),
			p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (!(u && u < 9)) {
			var f = /(m[^(h|v|l)]*|[vhl][^(v|h|l|z)]*)/gim,
				c = e.Interpolate.coords = p ? function(t, e, r, n) {
					for (var a = [], i = 0; i < r; i++) {
						a[i] = [];
						for (var s = 0; s < 2; s++) a[i].push(t[i][s] + (e[i][s] - t[i][s]) * n)
					}
					return a
				} : function(t, e, r, n) {
					for (var a = [], i = 0; i < r; i++) {
						a[i] = [];
						for (var s = 0; s < 2; s++) a[i].push((10 * (t[i][s] + (e[i][s] - t[i][s]) * n) >> 0) / 10)
					}
					return a
				},
				m = function(t, e, r) {
					for (var n, a, i, s, o, l = [], h = r.length, u = 0; u < h; u++) n = Math.abs(r[u][0] - e.x), a = Math.abs(r[u][1] - e.y), l.push(Math.sqrt(n * n + a * a));
					return o = r[(i = l.indexOf(Math.min.apply(null, l))) - 1] ? i - 1 : h - 1, s = r[i + 1] ? i + 1 : 0, Math.abs(r[o][0] - e.x) < t && Math.abs(r[o][1] - e.y) < t ? r[o] : Math.abs(r[s][0] - e.x) < t && Math.abs(r[s][1] - e.y) < t ? r[s] : Math.abs(r[i][0] - e.x) < t && Math.abs(r[i][1] - e.y) < t ? r[i] : [e.x, e.y]
				},
				d = function(t) {
					for (var e, r, n = t.match(f), a = n.length, i = 0, s = 0, o = 0; o < a; o++) n[o] = n[o], e = n[o][0], r = new RegExp(e + "[^\\d|\\-]*", "i"), n[o] = n[o].replace(/(^|[^,])\s*-/g, "$1,-").replace(/(\s+\,|\s|\,)/g, ",").replace(r, "").split(","), n[o][0] = parseFloat(n[o][0]), n[o][1] = parseFloat(n[o][1]), 0 === o ? (i += n[o][0], s += n[o][1]) : (i = n[o - 1][0], s = n[o - 1][1], /l/i.test(e) ? (n[o][0] = "l" === e ? n[o][0] + i : n[o][0], n[o][1] = "l" === e ? n[o][1] + s : n[o][1]) : /h/i.test(e) ? (n[o][0] = "h" === e ? n[o][0] + i : n[o][0], n[o][1] = s) : /v/i.test(e) && (n[o][0] = i, n[o][1] = "v" === e ? n[o][0] + s : n[o][0]));
					return n
				},
				y = function(t) {
					return t.split(/z/i).shift() + "z"
				},
				b = function(t) {
					var e = document.createElementNS("http://www.w3.org/2000/svg", "path"),
						r = "object" == typeof t ? t.getAttribute("d") : t;
					return e.setAttribute("d", r), e
				},
				A = function(t) {
					var e = {},
						r = "object" == typeof t ? t : /^\.|^\#/.test(t) ? document.querySelector(t) : null;
					return r && /path|glyph/.test(r.tagName) ? (e.e = function(t) {
						if ("glyph" === t.tagName) {
							var e = b(t);
							return t.parentNode.appendChild(e), e
						}
						return t
					}(r), e.o = r.getAttribute("d")) : !r && /[a-z][^a-z]*/gi.test(t) && (e.e = b(t.trim()), e.o = t), e
				},
				M = function(t, e) {
					var r, n, a, i, s, o, l, u, p, f, g = [],
						c = this.options.morphIndex;
					if (this._isPolygon)
						if (t = d(t), e = d(e), t.length !== e.length) {
							(i = Math.max(t.length, e.length)) === e.length ? (s = t, o = e) : (s = e, o = t), s.length, u = (l = b("M" + s.join("L") + "z")).getTotalLength() / i;
							for (var y = 0; y < i; y++) p = l.getPointAtLength(u * y), f = m(u, p, s), g.push([f[0], f[1]]);
							i === e.length ? (n = o, r = g) : (r = o, n = g)
						} else r = t, n = e;
					else r = (a = function(t, e, r) {
						for (var n = [], a = [], i = t.getTotalLength(), s = e.getTotalLength(), h = 0, u = Math.max(i, s) / r * r;
							(h += r) < u;) n.push([t.getPointAtLength(h).x, t.getPointAtLength(h).y]), a.push([e.getPointAtLength(h).x, e.getPointAtLength(h).y]);
						return [n, a]
					}(t = b(t), e = b(e), this.options.morphPrecision))[0], i = (n = a[1]).length;
					if (this.options.reverseFirstPath && r.reverse(), this.options.reverseSecondPath && n.reverse(), c) {
						var w = n.splice(c, i - c);
						n = w.concat(n)
					}
					return t = e = null, [r, n]
				};
			h.morphPrecision = 15, a.path = function(t, e) {
				return "path" in n || (n.path = function(t, e, r, n, a) {
					t.setAttribute("d", 1 === a ? n.o : "M" + c(r.d, n.d, n.d.length, a) + "Z")
				}), A(e)
			}, i.path = function(t) {
				return this.element.getAttribute("d")
			}, o.path = function() {
				var t, e = y(this.valuesStart.path.o),
					r = y(this.valuesEnd.path.o);
				this.options.morphPrecision = this.options && "morphPrecision" in this.options ? parseInt(this.options.morphPrecision) : h.morphPrecision, this._isPolygon = !/[CSQTA]/i.test(e) && !/[CSQTA]/i.test(r), t = M.apply(this, [e, r]), this.valuesStart.path.d = t[0], this.valuesEnd.path.d = t[1]
			};
			var x = function(t, e) {
					return parseFloat(t) / 100 * e
				},
				N = function(t) {
					return /rect/.test(t.tagName) ? function(t) {
						return 2 * t.getAttribute("width") + 2 * t.getAttribute("height")
					}(t) : /circle/.test(t.tagName) ? function(t) {
						var e = t.getAttribute("r");
						return 2 * Math.PI * e
					}(t) : /ellipse/.test(t.tagName) ? function(t) {
						var n = 2 * t.getAttribute("rx"),
							a = 2 * t.getAttribute("ry");
						return Math.sqrt(.5 * (n * n + a * a)) * (2 * Math.PI) / 2
					}(t) : /polygon|polyline/.test(t.tagName) ? function(t) {
						var e = t.getAttribute("points").split(" "),
							r = 0;
						if (e.length > 1) {
							var n = function(t) {
									var e = t.split(",");
									if (2 == e.length && !isNaN(e[0]) && !isNaN(e[1])) return [parseFloat(e[0]), parseFloat(e[1])]
								},
								a = function(t, e) {
									return null != t && null != e ? Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2)) : 0
								};
							if (e.length > 2)
								for (var i = 0; i < e.length - 1; i++) r += a(n(e[i]), n(e[i + 1]));
							r += a(n(e[0]), n(e[e.length - 1]))
						}
						return r
					}(t) : /line/.test(t.tagName) ? function(t) {
						var e = t.getAttribute("x1"),
							r = t.getAttribute("x2"),
							n = t.getAttribute("y1"),
							a = t.getAttribute("y2");
						return Math.sqrt(Math.pow(r - e, 2) + Math.pow(a - n, 2))
					}(t) : void 0
				},
				E = function(t, e) {
					var r, n, a, i, o = /path|glyph/.test(t.tagName) ? t.getTotalLength() : N(t);
					return e instanceof Object ? e : ("string" == typeof e ? (e = e.split(/\,|\s/), r = /%/.test(e[0]) ? x(e[0].trim(), o) : parseFloat(e[0]), n = /%/.test(e[1]) ? x(e[1].trim(), o) : parseFloat(e[1])) : void 0 === e && (i = parseFloat(s(t, "stroke-dashoffset")), a = s(t, "stroke-dasharray").split(/\,/), r = 0 - i, n = parseFloat(a[0]) + r || o), {
						s: r,
						e: n,
						l: o
					})
				};
			a.draw = function(t, e) {
				return "draw" in n || (n.draw = function(t, e, r, n, a) {
					var i = (100 * r.l >> 0) / 100,
						h = 0 - (100 * l(r.s, n.s, a) >> 0) / 100,
						u = (100 * l(r.e, n.e, a) >> 0) / 100 + h;
					t.style.strokeDashoffset = h + "px", t.style.strokeDasharray = (100 * (u < 1 ? 0 : u) >> 0) / 100 + "px, " + i + "px"
				}), E(this.element, e)
			}, i.draw = function() {
				return E(this.element)
			};
			var I = function(t, e) {
					return /[a-zA-Z]/.test(t) && !/px/.test(t) ? t.replace(/top|left/, 0).replace(/right|bottom/, 100).replace(/center|middle/, 50) : /%/.test(t) ? e.x + parseFloat(t) * e.width / 100 : parseFloat(t)
				},
				L = function(t) {
					var e = t && /\)/.test(t) ? t.substring(0, t.length - 1).split(/\)\s|\)/) : "none",
						r = {};
					if (e instanceof Array)
						for (var n = 0, a = e.length; n < a; n++) {
							var i = e[n].trim().split("(");
							r[i[0]] = i[1]
						}
					return r
				},
				j = function(t) {
					var e, r = {},
						n = this.element.getBBox(),
						a = n.x + n.width / 2,
						i = n.y + n.height / 2,
						s = this.options.transformOrigin;
					for (var o in (s = s ? s instanceof Array ? s : s.split(/\s/) : [a, i])[0] = "number" == typeof s[0] ? s[0] : I(s[0], n), s[1] = "number" == typeof s[1] ? s[1] : I(s[1], n), r.origin = s, t) "rotate" === o ? r[o] = "number" == typeof t[o] ? t[o] : t[o] instanceof Array ? t[o][0] : 1 * t[o].split(/\s/)[0] : "translate" === o ? (e = t[o] instanceof Array ? t[o] : /\,|\s/.test(t[o]) ? t[o].split(",") : [t[o], 0], r[o] = [1 * e[0] || 0, 1 * e[1] || 0]) : /skew/.test(o) ? r[o] = 1 * t[o] || 0 : "scale" === o && (r[o] = parseFloat(t[o]) || 1);
					return r
				};
			return a.svgTransform = function(t, e) {
				return "svgTransform" in n || (n.svgTransform = function(t, e, r, n, a) {
					var i, s = 0,
						o = 0,
						h = Math.PI / 180,
						u = "scale" in n ? l(r.scale, n.scale, a) : 1,
						p = "rotate" in n ? l(r.rotate, n.rotate, a) : 0,
						f = Math.sin(p * h),
						g = Math.cos(p * h),
						c = "skewX" in n ? l(r.skewX, n.skewX, a) : 0,
						v = "skewY" in n ? l(r.skewY, n.skewY, a) : 0,
						m = p || c || v || 1 !== u || 0;
					s -= m ? n.origin[0] : 0, o -= m ? n.origin[1] : 0, s *= u, o *= u, o += v ? s * Math.tan(v * h) : 0, i = g * (s += c ? o * Math.tan(c * h) : 0) - f * o, o = p ? f * s + g * o : o, s = p ? i : s, s += "translate" in n ? l(r.translate[0], n.translate[0], a) : 0, o += "translate" in n ? l(r.translate[1], n.translate[1], a) : 0, s += m ? n.origin[0] : 0, o += m ? n.origin[1] : 0, t.setAttribute("transform", (s || o ? "translate(" + (100 * s >> 0) / 100 + (o ? "," + (100 * o >> 0) / 100 : "") + ")" : "") + (p ? "rotate(" + (100 * p >> 0) / 100 + ")" : "") + (c ? "skewX(" + (10 * c >> 0) / 10 + ")" : "") + (v ? "skewY(" + (10 * v >> 0) / 10 + ")" : "") + (1 !== u ? "scale(" + (1e3 * u >> 0) / 1e3 + ")" : ""))
				}), j.call(this, e)
			}, i.svgTransform = function(t, e) {
				var r = {},
					n = L(this.element.getAttribute("transform"));
				for (var a in e) r[a] = a in n ? n[a] : "scale" === a ? 1 : 0;
				return r
			}, o.svgTransform = function() {
				if (this.options.rpr) {
					var t = this.valuesStart.svgTransform,
						e = this.valuesEnd.svgTransform,
						r = j.call(this, L(this.element.getAttribute("transform")));
					for (var n in r) t[n] = r[n];
					var a = this.element.ownerSVGElement,
						i = a.createSVGTransformFromMatrix(a.createSVGMatrix().translate(-t.origin[0], -t.origin[1]).translate("translate" in t ? t.translate[0] : 0, "translate" in t ? t.translate[1] : 0).rotate(t.rotate || 0).skewX(t.skewX || 0).skewY(t.skewY || 0).scale(t.scale || 1).translate(+t.origin[0], +t.origin[1]));
					for (var n in t.translate = [i.matrix.e, i.matrix.f], t) n in e || (e[n] = t[n])
				}
			}, this
		}
	}));
/*! @license ScrollReveal v4.0.0

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal = function() {
	"use strict";
	var r = {
			delay: 0,
			distance: "0",
			duration: 600,
			easing: "cubic-bezier(0.5, 0, 0, 1)",
			interval: 0,
			opacity: 0,
			origin: "bottom",
			rotate: {
				x: 0,
				y: 0,
				z: 0
			},
			scale: 1,
			cleanup: !0,
			container: document.documentElement,
			desktop: !0,
			mobile: !0,
			reset: !1,
			useDelay: "always",
			viewFactor: 0,
			viewOffset: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			},
			afterReset: function() {},
			afterReveal: function() {},
			beforeReset: function() {},
			beforeReveal: function() {}
		},
		n = {
			clean: function() {},
			destroy: function() {},
			reveal: function() {},
			sync: function() {},
			get noop() {
				return !0
			}
		};

	function o(e) {
		return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
	}

	function u(e, t) {
		if (void 0 === t && (t = document), e instanceof Array) return e.filter(o);
		if (o(e)) return [e];
		if (n = e, i = Object.prototype.toString.call(n), "object" == typeof window.NodeList ? n instanceof window.NodeList : null !== n && "object" == typeof n && "number" == typeof n.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) && (0 === n.length || o(n[0]))) return Array.prototype.slice.call(e);
		var n, i;
		if ("string" == typeof e) try {
			var r = t.querySelectorAll(e);
			return Array.prototype.slice.call(r)
		} catch (e) {
			return []
		}
		return []
	}

	function s(e) {
		return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
	}

	function f(n, i) {
		if (s(n)) return Object.keys(n).forEach((function(e) {
			return i(n[e], e, n)
		}));
		if (n instanceof Array) return n.forEach((function(e, t) {
			return i(e, t, n)
		}));
		throw new TypeError("Expected either an array or object literal.")
	}

	function h(e) {
		for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
		if (this.constructor.debug && console) {
			var i = "%cScrollReveal: " + e;
			t.forEach((function(e) {
				return i += "\n â€” " + e
			})), console.log(i, "color: #ea654b;")
		}
	}

	function t() {
		var n = this,
			i = {
				active: [],
				stale: []
			},
			t = {
				active: [],
				stale: []
			},
			r = {
				active: [],
				stale: []
			};
		try {
			f(u("[data-sr-id]"), (function(e) {
				var t = parseInt(e.getAttribute("data-sr-id"));
				i.active.push(t)
			}))
		} catch (e) {
			throw e
		}
		f(this.store.elements, (function(e) {
			-1 === i.active.indexOf(e.id) && i.stale.push(e.id)
		})), f(i.stale, (function(e) {
			return delete n.store.elements[e]
		})), f(this.store.elements, (function(e) {
			-1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === t.active.indexOf(e.sequence.id) && t.active.push(e.sequence.id)
		})), f(this.store.containers, (function(e) {
			-1 === r.active.indexOf(e.id) && r.stale.push(e.id)
		})), f(r.stale, (function(e) {
			var t = n.store.containers[e].node;
			t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate), delete n.store.containers[e]
		})), f(this.store.sequences, (function(e) {
			-1 === t.active.indexOf(e.id) && t.stale.push(e.id)
		})), f(t.stale, (function(e) {
			return delete n.store.sequences[e]
		}))
	}

	function p(e) {
		var i, r = this;
		try {
			f(u(e), (function(e) {
				var t = e.getAttribute("data-sr-id");
				if (null !== t) {
					i = !0;
					var n = r.store.elements[t];
					n.callbackTimer && window.clearTimeout(n.callbackTimer.clock), e.setAttribute("style", n.styles.inline.generated), e.removeAttribute("data-sr-id"), delete r.store.elements[t]
				}
			}))
		} catch (e) {
			return h.call(this, "Clean failed.", e.message)
		}
		if (i) try {
			t.call(this)
		} catch (e) {
			return h.call(this, "Clean failed.", e.message)
		}
	}

	function N(e) {
		if (e.constructor !== Array) throw new TypeError("Expected array.");
		if (16 === e.length) return e;
		if (6 === e.length) {
			var t = z();
			return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t
		}
		throw new RangeError("Expected array with either 6 or 16 values.")
	}

	function z() {
		for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
		return e
	}

	function F(e, t) {
		for (var n = N(e), i = N(t), r = [], o = 0; o < 4; o++)
			for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) {
				var c = 4 * a,
					l = [i[c], i[c + 1], i[c + 2], i[c + 3]],
					d = s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3];
				r[o + c] = d
			}
		return r
	}

	function D(e, t) {
		var n = z();
		return n[0] = e, n[5] = "number" == typeof t ? t : e, n
	}
	var S = function() {
		var n = {},
			i = document.documentElement.style;

		function e(e, t) {
			if (void 0 === t && (t = i), e && "string" == typeof e) {
				if (n[e]) return n[e];
				if ("string" == typeof t[e]) return n[e] = e;
				if ("string" == typeof t["-webkit-" + e]) return n[e] = "-webkit-" + e;
				throw new RangeError('Unable to find "' + e + '" style property.')
			}
			throw new TypeError("Expected a string.")
		}
		return e.clearCache = function() {
			return n = {}
		}, e
	}();

	function c(e, t) {
		void 0 === t && (t = {});
		var n = t.pristine || this.pristine,
			i = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen,
			r = e.visible && !e.revealed,
			o = !e.visible && e.revealed && e.config.reset;
		return t.reveal || r ? function(e, t) {
			var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
			t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant), e.revealed = e.seen = !0, e.node.setAttribute("style", n.filter((function(e) {
				return "" !== e
			})).join(" ")), a.call(this, e, t)
		}.call(this, e, i) : t.reset || o ? function(e) {
			var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
			e.revealed = !1, e.node.setAttribute("style", t.filter((function(e) {
				return "" !== e
			})).join(" ")), a.call(this, e)
		}.call(this, e) : void 0
	}

	function a(e, t) {
		var n = this,
			i = t ? e.config.duration + e.config.delay : e.config.duration,
			r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
			o = e.revealed ? e.config.afterReveal : e.config.afterReset,
			s = 0;
		e.callbackTimer && (s = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = {
			start: Date.now(),
			clock: window.setTimeout((function() {
				o(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && p.call(n, e.node)
			}), i - s)
		}
	}
	var e, y = (e = 0, function() {
		return e++
	});

	function l(e, t) {
		if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return c.call(this, e, {
			reset: !0
		});
		var n = this.store.sequences[e.sequence.id],
			i = e.sequence.index;
		if (n) {
			var r = new d(n, "visible", this.store),
				o = new d(n, "revealed", this.store);
			if (n.models = {
					visible: r,
					revealed: o
				}, !o.body.length) {
				var s = n.members[r.body[0]],
					a = this.store.elements[s];
				if (a) return g.call(this, n, r.body[0], -1, t), g.call(this, n, r.body[0], 1, t), c.call(this, a, {
					reveal: !0,
					pristine: t
				})
			}
			if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift()) return g.call(this, n, i, -1, t), c.call(this, e, {
				reveal: !0,
				pristine: t
			});
			if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop()) return g.call(this, n, i, 1, t), c.call(this, e, {
				reveal: !0,
				pristine: t
			})
		}
	}

	function v(e) {
		var t = Math.abs(e);
		if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
		this.id = y(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = {
			head: !1,
			foot: !1
		}
	}

	function d(e, i, r) {
		var o = this;
		this.head = [], this.body = [], this.foot = [], f(e.members, (function(e, t) {
			var n = r.elements[e];
			n && n[i] && o.body.push(t)
		})), this.body.length && f(e.members, (function(e, t) {
			var n = r.elements[e];
			n && !n[i] && (t < o.body[0] ? o.head.push(t) : o.foot.push(t))
		}))
	}

	function g(e, t, n, i) {
		var r = this,
			o = ["head", null, "foot"][1 + n],
			s = e.members[t + n],
			a = this.store.elements[s];
		e.blocked[o] = !0, setTimeout((function() {
			e.blocked[o] = !1, a && l.call(r, a, i)
		}), e.interval)
	}

	function b() {
		var n = this;
		t.call(this), f(this.store.elements, (function(e) {
			var t = [e.styles.inline.generated];
			e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final)) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial)), e.node.setAttribute("style", t.filter((function(e) {
				return "" !== e
			})).join(" "))
		})), f(this.store.containers, (function(e) {
			var t = e.node === document.documentElement ? window : e.node;
			t.addEventListener("scroll", n.delegate), t.addEventListener("resize", n.delegate)
		})), this.delegate(), this.initTimeout = null
	}

	function w(e) {
		return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e)
	}

	function E(n) {
		for (var e = [], t = arguments.length - 1; 0 < t--;) e[t] = arguments[t + 1];
		if (s(n)) return f(e, (function(e) {
			f(e, (function(e, t) {
				s(e) ? (n[t] && s(n[t]) || (n[t] = {}), E(n[t], e)) : n[t] = e
			}))
		})), n;
		throw new TypeError("Target must be an object literal.")
	}

	function i(e, a, t) {
		var c = this;
		void 0 === a && (a = {}), void 0 === t && (t = !1);
		var l, d = [],
			n = a.interval || r.interval;
		try {
			n && (l = new v(n));
			var i = u(e);
			if (!i.length) throw new Error("Invalid reveal target.");
			f(i.reduce((function(e, t) {
				var n = {},
					i = t.getAttribute("data-sr-id");
				i ? (E(n, c.store.elements[i]), n.node.setAttribute("style", n.styles.inline.computed)) : (n.id = y(), n.node = t, n.seen = !1, n.revealed = !1, n.visible = !1);
				var r = E({}, n.config || c.defaults, a);
				if (!r.mobile && w() || !r.desktop && !w()) return i && p.call(c, n), e;
				var o, s = u(r.container)[0];
				if (!s) throw new Error("Invalid container.");
				return s.contains(t) && (null === (o = function(t) {
					for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
					var i = null;
					return f(e, (function(e) {
						f(e, (function(e) {
							null === i && e.node === t && (i = e.id)
						}))
					})), i
				}(s, d, c.store.containers)) && (o = y(), d.push({
					id: o,
					node: s
				})), n.config = r, n.containerId = o, n.styles = function(e) {
					var t = window.getComputedStyle(e.node),
						n = t.position,
						i = e.config,
						r = {},
						o = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
					r.computed = o ? o.map((function(e) {
						return e.trim()
					})).join("; ") + ";" : "", r.generated = o.some((function(e) {
						return e.match(/visibility\s?:\s?visible/i)
					})) ? r.computed : o.concat(["visibility: visible"]).map((function(e) {
						return e.trim()
					})).join("; ") + ";";
					var s, a, c, l, d, u, f, h, p, m, y, v, g, b = parseFloat(t.opacity),
						w = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity),
						E = {
							computed: b !== w ? "opacity: " + b + ";" : "",
							generated: b !== w ? "opacity: " + w + ";" : ""
						},
						j = [];
					if (parseFloat(i.distance)) {
						var T = "top" === i.origin || "bottom" === i.origin ? "Y" : "X",
							O = i.distance;
						"top" !== i.origin && "left" !== i.origin || (O = /^-/.test(O) ? O.substr(1) : "-" + O);
						var k = O.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
							x = k[0];
						switch (k[1]) {
							case "em":
								O = parseInt(t.fontSize) * x;
								break;
							case "px":
								O = x;
								break;
							case "%":
								O = "Y" === T ? e.node.getBoundingClientRect().height * x / 100 : e.node.getBoundingClientRect().width * x / 100;
								break;
							default:
								throw new RangeError("Unrecognized or missing distance unit.")
						}
						"Y" === T ? j.push((c = O, (l = z())[13] = c, l)) : j.push((s = O, (a = z())[12] = s, a))
					}
					i.rotate.x && j.push((d = i.rotate.x, u = Math.PI / 180 * d, (f = z())[5] = f[10] = Math.cos(u), f[6] = f[9] = Math.sin(u), f[9] *= -1, f)), i.rotate.y && j.push((h = i.rotate.y, p = Math.PI / 180 * h, (m = z())[0] = m[10] = Math.cos(p), m[2] = m[8] = Math.sin(p), m[2] *= -1, m)), i.rotate.z && j.push((y = i.rotate.z, v = Math.PI / 180 * y, (g = z())[0] = g[5] = Math.cos(v), g[1] = g[4] = Math.sin(v), g[4] *= -1, g)), 1 !== i.scale && (0 === i.scale ? j.push(D(2e-4)) : j.push(D(i.scale)));
					var A = {};
					if (j.length) {
						A.property = S("transform"), A.computed = {
							raw: t[A.property],
							matrix: function(e) {
								if ("string" == typeof e) {
									var t = e.match(/matrix(3d)?\(([^)]+)\)/);
									if (t) return N(t[2].split(", ").map(parseFloat))
								}
								return z()
							}(t[A.property])
						}, j.unshift(A.computed.matrix);
						var R = j.reduce(F);
						A.generated = {
							initial: A.property + ": matrix3d(" + R.join(", ") + ");",
							final: A.property + ": matrix3d(" + A.computed.matrix.join(", ") + ");"
						}
					} else A.generated = {
						initial: "",
						final: ""
					};
					var q = {};
					if (E.generated || A.generated.initial) {
						q.property = S("transition"), q.computed = t[q.property], q.fragments = [];
						var P = i.delay,
							I = i.duration,
							L = i.easing;
						E.generated && q.fragments.push({
							delayed: "opacity " + I / 1e3 + "s " + L + " " + P / 1e3 + "s",
							instant: "opacity " + I / 1e3 + "s " + L + " 0s"
						}), A.generated.initial && q.fragments.push({
							delayed: A.property + " " + I / 1e3 + "s " + L + " " + P / 1e3 + "s",
							instant: A.property + " " + I / 1e3 + "s " + L + " 0s"
						}), q.computed && !q.computed.match(/all 0s/) && q.fragments.unshift({
							delayed: q.computed,
							instant: q.computed
						});
						var M = q.fragments.reduce((function(e, t, n) {
							return e.delayed += 0 === n ? t.delayed : ", " + t.delayed, e.instant += 0 === n ? t.instant : ", " + t.instant, e
						}), {
							delayed: "",
							instant: ""
						});
						q.generated = {
							delayed: q.property + ": " + M.delayed + ";",
							instant: q.property + ": " + M.instant + ";"
						}
					} else q.generated = {
						delayed: "",
						instant: ""
					};
					return {
						inline: r,
						opacity: E,
						position: n,
						transform: A,
						transition: q
					}
				}(n), l && (n.sequence = {
					id: l.id,
					index: l.members.length
				}, l.members.push(n.id)), e.push(n)), e
			}), []), (function(e) {
				(c.store.elements[e.id] = e).node.setAttribute("data-sr-id", e.id)
			}))
		} catch (e) {
			return h.call(this, "Reveal failed.", e.message)
		}
		f(d, (function(e) {
			c.store.containers[e.id] = {
				id: e.id,
				node: e.node
			}
		})), l && (this.store.sequences[l.id] = l), !0 !== t && (this.store.history.push({
			target: e,
			options: a
		}), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(b.bind(this), 0))
	}
	var j, T = Math.sign || function(e) {
			return (0 < e) - (e < 0) || +e
		},
		O = (j = Date.now(), function(e) {
			var t = Date.now();
			16 < t - j ? e(j = t) : setTimeout((function() {
				return O(e)
			}), 0)
		}),
		k = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || O;

	function x(e, t) {
		for (var n = t ? e.node.clientHeight : e.node.offsetHeight, i = t ? e.node.clientWidth : e.node.offsetWidth, r = 0, o = 0, s = e.node; isNaN(s.offsetTop) || (r += s.offsetTop), isNaN(s.offsetLeft) || (o += s.offsetLeft), s = s.offsetParent;);
		return {
			bounds: {
				top: r,
				right: o + i,
				bottom: r + n,
				left: o
			},
			height: n,
			width: i
		}
	}

	function A(e, t) {
		var i = this;
		void 0 === e && (e = {
			type: "init"
		}), void 0 === t && (t = this.store.elements), k((function() {
			var n = "init" === e.type || "resize" === e.type;
			f(i.store.containers, (function(e) {
				n && (e.geometry = x.call(i, e, !0));
				var t = function(e) {
					var t, n;
					return e.node === document.documentElement ? (t = window.pageYOffset, n = window.pageXOffset) : (t = e.node.scrollTop, n = e.node.scrollLeft), {
						top: t,
						left: n
					}
				}.call(i, e);
				e.scroll && (e.direction = {
					x: T(t.left - e.scroll.left),
					y: T(t.top - e.scroll.top)
				}), e.scroll = t
			})), f(t, (function(e) {
				n && (e.geometry = x.call(i, e)), e.visible = function(e) {
					void 0 === e && (e = {});
					var t = this.store.containers[e.containerId];
					if (t) {
						var n = Math.max(0, Math.min(1, e.config.viewFactor)),
							i = e.config.viewOffset,
							r = e.geometry.bounds.top + e.geometry.height * n,
							o = e.geometry.bounds.right - e.geometry.width * n,
							s = e.geometry.bounds.bottom - e.geometry.height * n,
							a = e.geometry.bounds.left + e.geometry.width * n,
							c = t.geometry.bounds.top + t.scroll.top + i.top,
							l = t.geometry.bounds.right + t.scroll.left - i.right,
							d = t.geometry.bounds.bottom + t.scroll.top - i.bottom,
							u = t.geometry.bounds.left + t.scroll.left + i.left;
						return r < d && u < o && c < s && a < l || "fixed" === e.styles.position
					}
				}.call(i, e)
			})), f(t, (function(e) {
				e.sequence ? l.call(i, e) : c.call(i, e)
			})), i.pristine = !1
		}))
	}
	var R, q, P, I, L, M, C, W;

	function $(e) {
		var t;
		if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== $.prototype) return new $(e);
		if (!$.isSupported()) return h.call(this, "Instantiation failed.", "This browser is not supported."), n;
		try {
			t = E({}, M || r, e)
		} catch (e) {
			return h.call(this, "Instantiation failed.", "Invalid configuration.", e.message), n
		}
		try {
			if (!u(t.container)[0]) throw new Error("Invalid container.");
			if (!t.mobile && w() || !t.desktop && !w()) throw new Error("This device is disabled.")
		} catch (e) {
			return h.call(this, "Instantiation failed.", e.message), n
		}
		return M = t, document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", (function() {
			document.body.style.height = "100%"
		})), this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		}, this.pristine = !0, R = R || A.bind(this), q = q || function() {
			var n = this;
			f(this.store.elements, (function(e) {
				e.node.setAttribute("style", e.styles.inline.generated), e.node.removeAttribute("data-sr-id")
			})), f(this.store.containers, (function(e) {
				var t = e.node === document.documentElement ? window : e.node;
				t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate)
			})), this.store = {
				containers: {},
				elements: {},
				history: [],
				sequences: {}
			}
		}.bind(this), P = P || i.bind(this), I = I || p.bind(this), L = L || function() {
			var t = this;
			f(this.store.history, (function(e) {
				i.call(t, e.target, e.options, !0)
			})), b.call(this)
		}.bind(this), Object.defineProperty(this, "delegate", {
			get: function() {
				return R
			}
		}), Object.defineProperty(this, "destroy", {
			get: function() {
				return q
			}
		}), Object.defineProperty(this, "reveal", {
			get: function() {
				return P
			}
		}), Object.defineProperty(this, "clean", {
			get: function() {
				return I
			}
		}), Object.defineProperty(this, "sync", {
			get: function() {
				return L
			}
		}), Object.defineProperty(this, "defaults", {
			get: function() {
				return M
			}
		}), Object.defineProperty(this, "version", {
			get: function() {
				return "4.0.0"
			}
		}), Object.defineProperty(this, "noop", {
			get: function() {
				return !1
			}
		}), W || (W = this)
	}
	return $.isSupported = function() {
		return ("transform" in (t = document.documentElement.style) || "WebkitTransform" in t) && ("transition" in (e = document.documentElement.style) || "WebkitTransition" in e);
		var e, t
	}, Object.defineProperty($, "debug", {
		get: function() {
			return C || !1
		},
		set: function(e) {
			return C = "boolean" == typeof e ? e : C
		}
	}), $(), $
}();
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, (function() {
	"use strict";
	var f = "undefined" == typeof document ? {
			body: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return null
			},
			querySelectorAll: function() {
				return []
			},
			getElementById: function() {
				return null
			},
			createEvent: function() {
				return {
					initEvent: function() {}
				}
			},
			createElement: function() {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		B = "undefined" == typeof window ? {
			document: f,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function() {
				return this
			},
			addEventListener: function() {},
			removeEventListener: function() {},
			getComputedStyle: function() {
				return {
					getPropertyValue: function() {
						return ""
					}
				}
			},
			Image: function() {},
			Date: function() {},
			screen: {},
			setTimeout: function() {},
			clearTimeout: function() {}
		} : window,
		l = function(e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function L(e, t) {
		var a = [],
			i = 0;
		if (e && !t && e instanceof l) return e;
		if (e)
			if ("string" == typeof e) {
				var s, r, n = e.trim();
				if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
					var o = "div";
					for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
				} else
					for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
			} else if (e.nodeType || e === B || e === f) a.push(e);
		else if (0 < e.length && e[0].nodeType)
			for (i = 0; i < e.length; i += 1) a.push(e[i]);
		return new l(a)
	}

	function r(e) {
		for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}
	L.fn = l.prototype, L.Class = l, L.Dom7 = l;
	var t = {
		addClass: function(e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
			return this
		},
		removeClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
			return this
		},
		hasClass: function(e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
			return this
		},
		attr: function(e, t) {
			var a = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var i = 0; i < this.length; i += 1)
				if (2 === a.length) this[i].setAttribute(e, t);
				else
					for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function(e, t) {
			var a;
			if (void 0 !== t) {
				for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
				return this
			}
			if (a = this[0]) return a.dom7ElementDataStorage && e in a.dom7ElementDataStorage ? a.dom7ElementDataStorage[e] : a.getAttribute("data-" + e) || void 0
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransform = e, a.transform = e
			}
			return this
		},
		transition: function(e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransitionDuration = e, a.transitionDuration = e
			}
			return this
		},
		on: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				r = t[1],
				n = t[2],
				s = t[3];

			function o(e) {
				var t = e.target;
				if (t) {
					var a = e.target.dom7EventData || [];
					if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
					else
						for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
				}
			}

			function l(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
			}
			"function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
			for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (r)
					for (d = 0; d < p.length; d += 1) {
						var h = p[d];
						u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
							listener: n,
							proxyListener: o
						}), u.addEventListener(h, o, s)
					} else
						for (d = 0; d < p.length; d += 1) {
							var v = p[d];
							u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
								listener: n,
								proxyListener: l
							}), u.addEventListener(v, l, s)
						}
			}
			return this
		},
		off: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
			for (var o = i.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], p = 0; p < this.length; p += 1) {
					var c = this[p],
						u = void 0;
					if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
						for (var h = u.length - 1; 0 <= h; h -= 1) {
							var v = u[h];
							r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
						}
				}
			return this
		},
		trigger: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
				for (var r = a[s], n = 0; n < this.length; n += 1) {
					var o = this[n],
						l = void 0;
					try {
						l = new B.CustomEvent(r, {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
					}
					o.dom7EventData = e.filter((function(e, t) {
						return 0 < t
					})), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
				}
			return this
		},
		transitionEnd: function(t) {
			var a, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function r(e) {
				if (e.target === this)
					for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
			}
			if (t)
				for (a = 0; a < i.length; a += 1) s.on(i[a], r);
			return this
		},
		outerWidth: function(e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (0 < this.length) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					a = f.body,
					i = e.clientTop || a.clientTop || 0,
					s = e.clientLeft || a.clientLeft || 0,
					r = e === B ? B.scrollY : e.scrollTop,
					n = e === B ? B.scrollX : e.scrollLeft;
				return {
					top: t.top + r - i,
					left: t.left + n - s
				}
			}
			return null
		},
		css: function(e, t) {
			var a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var i in e) this[a].style[i] = e[i];
					return this
				}
				if (this[0]) return B.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var t, a, i = this[0];
			if (!i || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (t = L(e), a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			if (e === f) return i === f;
			if (e === B) return i === B;
			if (e.nodeType || e instanceof l) {
				for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (void 0 === e) return this;
			var t, a = this.length;
			return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function() {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			for (var i = 0; i < t.length; i += 1) {
				e = t[i];
				for (var s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						var r = f.createElement("div");
						for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
					} else if (e instanceof l)
					for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
				else this[s].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var t, a, i = this;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var s = f.createElement("div");
					for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
				} else if (e instanceof l)
				for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
			else i[t].insertBefore(e, i[t].childNodes[0]);
			return this
		},
		next: function(e) {
			return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
		},
		nextAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.nextElementSibling;) {
				var i = a.nextElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		prev: function(e) {
			if (0 < this.length) {
				var t = this[0];
				return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
			}
			return new l([])
		},
		prevAll: function(e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.previousElementSibling;) {
				var i = a.previousElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		parent: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
			return L(r(t))
		},
		parents: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
			return L(r(t))
		},
		closest: function(e) {
			var t = this;
			return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
			return new l(t)
		},
		children: function(e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
			return new l(r(t))
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var a, i;
			for (a = 0; a < e.length; a += 1) {
				var s = L(e[a]);
				for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
			}
			return this
		},
		styles: function() {
			return this[0] ? B.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(t).forEach((function(e) {
		L.fn[e] = t[e]
	}));
	var e, a, i, X = {
			deleteProps: function(e) {
				var t = e;
				Object.keys(t).forEach((function(e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				}))
			},
			nextTick: function(e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(e, t) {
				var a, i, s;
				void 0 === t && (t = "x");
				var r = B.getComputedStyle(e, null);
				return B.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map((function(e) {
					return e.replace(",", ".")
				})).join(", ")), s = new B.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = B.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = B.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
			},
			parseUrlQuery: function(e) {
				var t, a, i, s, r = {},
					n = e || B.location.href;
				if ("string" == typeof n && n.length)
					for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
							return "" !== e
						}))).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
				return r
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i];
					if (null != s)
						for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n],
								d = Object.getOwnPropertyDescriptor(s, l);
							void 0 !== d && d.enumerable && (X.isObject(a[l]) && X.isObject(s[l]) ? X.extend(a[l], s[l]) : !X.isObject(a[l]) && X.isObject(s[l]) ? (a[l] = {}, X.extend(a[l], s[l])) : a[l] = s[l])
						}
				}
				return a
			}
		},
		Y = (i = f.createElement("div"), {
			touch: B.Modernizr && !0 === B.Modernizr.touch || !!("ontouchstart" in B || B.DocumentTouch && f instanceof B.DocumentTouch),
			pointerEvents: !(!B.navigator.pointerEnabled && !B.PointerEvent),
			prefixedPointerEvents: !!B.navigator.msPointerEnabled,
			transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
			transforms3d: B.Modernizr && !0 === B.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
			flexbox: function() {
				for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
					if (t[a] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in B || "WebkitMutationObserver" in B,
			passiveListener: function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					B.addEventListener("testPassiveListener", null, t)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in B
		}),
		s = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
				t.on(e, t.params.on[e])
			}))
		},
		n = {
			components: {
				configurable: !0
			}
		};
	s.prototype.on = function(e, t, a) {
		var i = this;
		if ("function" != typeof t) return i;
		var s = a ? "unshift" : "push";
		return e.split(" ").forEach((function(e) {
			i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
		})), i
	}, s.prototype.once = function(i, s, e) {
		var r = this;
		return "function" != typeof s ? r : r.on(i, (function e() {
			for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
			s.apply(r, t), r.off(i, e)
		}), e)
	}, s.prototype.off = function(e, i) {
		var s = this;
		return s.eventsListeners && e.split(" ").forEach((function(a) {
			void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a].forEach((function(e, t) {
				e === i && s.eventsListeners[a].splice(t, 1)
			}))
		})), s
	}, s.prototype.emit = function() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var a, i, s, r = this;
		return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach((function(e) {
			if (r.eventsListeners && r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach((function(e) {
					t.push(e)
				})), t.forEach((function(e) {
					e.apply(s, i)
				}))
			}
		}))), r
	}, s.prototype.useModulesParams = function(a) {
		var i = this;
		i.modules && Object.keys(i.modules).forEach((function(e) {
			var t = i.modules[e];
			t.params && X.extend(a, t.params)
		}))
	}, s.prototype.useModules = function(i) {
		void 0 === i && (i = {});
		var s = this;
		s.modules && Object.keys(s.modules).forEach((function(e) {
			var a = s.modules[e],
				t = i[e] || {};
			a.instance && Object.keys(a.instance).forEach((function(e) {
				var t = a.instance[e];
				s[e] = "function" == typeof t ? t.bind(s) : t
			})), a.on && s.on && Object.keys(a.on).forEach((function(e) {
				s.on(e, a.on[e])
			})), a.create && a.create.bind(s)(t)
		}))
	}, n.components.set = function(e) {
		this.use && this.use(e)
	}, s.installModule = function(t) {
		for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var s = t.name || Object.keys(i.prototype.modules).length + "_" + X.now();
		return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach((function(e) {
			i.prototype[e] = t.proto[e]
		})), t.static && Object.keys(t.static).forEach((function(e) {
			i[e] = t.static[e]
		})), t.install && t.install.apply(i, e), i
	}, s.use = function(e) {
		for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach((function(e) {
			return i.installModule(e)
		})), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(s, n);
	var o = {
			updateSize: function() {
				var e, t, a = this,
					i = a.$el;
				e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), X.extend(a, {
					width: e,
					height: t,
					size: a.isHorizontal() ? e : t
				}))
			},
			updateSlides: function() {
				var e = this,
					t = e.params,
					a = e.$wrapperEl,
					i = e.size,
					s = e.rtlTranslate,
					r = e.wrongRTL,
					n = e.virtual && t.virtual.enabled,
					o = n ? e.virtual.slides.length : e.slides.length,
					l = a.children("." + e.params.slideClass),
					d = n ? e.virtual.slides.length : l.length,
					p = [],
					c = [],
					u = [],
					h = t.slidesOffsetBefore;
				"function" == typeof h && (h = t.slidesOffsetBefore.call(e));
				var v = t.slidesOffsetAfter;
				"function" == typeof v && (v = t.slidesOffsetAfter.call(e));
				var f = e.snapGrid.length,
					m = e.snapGrid.length,
					g = t.spaceBetween,
					b = -h,
					w = 0,
					y = 0;
				if (void 0 !== i) {
					var x, E;
					"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
						marginLeft: "",
						marginTop: ""
					}) : l.css({
						marginRight: "",
						marginBottom: ""
					}), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
					for (var T, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), z = 0; z < d; z += 1) {
						E = 0;
						var k = l.eq(z);
						if (1 < t.slidesPerColumn) {
							var P = void 0,
								$ = void 0,
								L = void 0;
							"column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, k.css({
								"-webkit-box-ordinal-group": P,
								"-moz-box-ordinal-group": P,
								"-ms-flex-order": P,
								"-webkit-order": P,
								order: P
							})) : $ = z - (L = Math.floor(z / C)) * C, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
						}
						if ("none" !== k.css("display")) {
							if ("auto" === t.slidesPerView) {
								var I = B.getComputedStyle(k[0], null),
									D = k[0].style.transform,
									O = k[0].style.webkitTransform;
								D && (k[0].style.transform = "none"), O && (k[0].style.webkitTransform = "none"), E = e.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (k[0].style.transform = D), O && (k[0].style.webkitTransform = O), t.roundLengths && (E = Math.floor(E))
							} else E = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), l[z] && (e.isHorizontal() ? l[z].style.width = E + "px" : l[z].style.height = E + "px");
							l[z] && (l[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (b = b + E / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + E + g), e.virtualSize += E + g, w = E, y += 1
						}
					}
					if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}), Y.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						})), 1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						}), t.centeredSlides)) {
						T = [];
						for (var A = 0; A < p.length; A += 1) {
							var H = p[A];
							t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && T.push(H)
						}
						p = T
					}
					if (!t.centeredSlides) {
						T = [];
						for (var G = 0; G < p.length; G += 1) {
							var N = p[G];
							t.roundLengths && (N = Math.floor(N)), p[G] <= e.virtualSize - i && T.push(N)
						}
						p = T, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
					}
					0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
						marginLeft: g + "px"
					}) : l.css({
						marginRight: g + "px"
					}) : l.css({
						marginBottom: g + "px"
					})), X.extend(e, {
						slides: l,
						snapGrid: p,
						slidesGrid: c,
						slidesSizesGrid: u
					}), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
				}
			},
			updateAutoHeight: function(e) {
				var t, a = this,
					i = [],
					s = 0;
				if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
					for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
						var r = a.activeIndex + t;
						if (r > a.slides.length) break;
						i.push(a.slides.eq(r)[0])
					} else i.push(a.slides.eq(a.activeIndex)[0]);
				for (t = 0; t < i.length; t += 1)
					if (void 0 !== i[t]) {
						var n = i[t].offsetHeight;
						s = s < n ? n : s
					}
				s && a.$wrapperEl.css("height", s + "px")
			},
			updateSlidesOffset: function() {
				for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
			},
			updateSlidesProgress: function(e) {
				void 0 === e && (e = this && this.translate || 0);
				var t = this,
					a = t.params,
					i = t.slides,
					s = t.rtlTranslate;
				if (0 !== i.length) {
					void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
					var r = -e;
					s && (r = e), i.removeClass(a.slideVisibleClass);
					for (var n = 0; n < i.length; n += 1) {
						var o = i[n],
							l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
						if (a.watchSlidesVisibility) {
							var d = -(r - o.swiperSlideOffset),
								p = d + t.slidesSizesGrid[n];
							(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
						}
						o.progress = s ? -l : l
					}
				}
			},
			updateProgress: function(e) {
				void 0 === e && (e = this && this.translate || 0);
				var t = this,
					a = t.params,
					i = t.maxTranslate() - t.minTranslate(),
					s = t.progress,
					r = t.isBeginning,
					n = t.isEnd,
					o = r,
					l = n;
				0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), X.extend(t, {
					progress: s,
					isBeginning: r,
					isEnd: n
				}), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
			},
			updateSlidesClasses: function() {
				var e, t = this,
					a = t.slides,
					i = t.params,
					s = t.$wrapperEl,
					r = t.activeIndex,
					n = t.realIndex,
					o = t.virtual && i.virtual.enabled;
				a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
				var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
				i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
				var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
				i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
			},
			updateActiveIndex: function(e) {
				var t, a = this,
					i = a.rtlTranslate ? a.translate : -a.translate,
					s = a.slidesGrid,
					r = a.snapGrid,
					n = a.params,
					o = a.activeIndex,
					l = a.realIndex,
					d = a.snapIndex,
					p = e;
				if (void 0 === p) {
					for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
					n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
				}
				if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
					var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
					X.extend(a, {
						snapIndex: t,
						realIndex: u,
						previousIndex: o,
						activeIndex: p
					}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
				} else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
			},
			updateClickedSlide: function(e) {
				var t = this,
					a = t.params,
					i = L(e.target).closest("." + a.slideClass)[0],
					s = !1;
				if (i)
					for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
				if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
				t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
			}
		},
		d = {
			getTranslate: function(e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this.params,
					a = this.rtlTranslate,
					i = this.translate,
					s = this.$wrapperEl;
				if (t.virtualTranslate) return a ? -i : i;
				var r = X.getTranslate(s[0], e);
				return a && (r = -r), r || 0
			},
			setTranslate: function(e, t) {
				var a = this,
					i = a.rtlTranslate,
					s = a.params,
					r = a.$wrapperEl,
					n = a.progress,
					o = 0,
					l = 0;
				a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (Y.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
				var d = a.maxTranslate() - a.minTranslate();
				(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
			},
			minTranslate: function() {
				return -this.snapGrid[0]
			},
			maxTranslate: function() {
				return -this.snapGrid[this.snapGrid.length - 1]
			}
		},
		c = {
			slideTo: function(e, t, a, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
				var s = this,
					r = e;
				r < 0 && (r = 0);
				var n = s.params,
					o = s.snapGrid,
					l = s.slidesGrid,
					d = s.previousIndex,
					p = s.activeIndex,
					c = s.rtlTranslate;
				if (s.animating && n.preventInteractionOnTransition) return !1;
				var u = Math.floor(r / n.slidesPerGroup);
				u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
				var h, v = -o[u];
				if (s.updateProgress(v), n.normalizeSlideIndex)
					for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
				if (s.initialized && r !== p) {
					if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
					if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
				}
				return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && Y.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
					s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
				}), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
			},
			slideToLoop: function(e, t, a, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
				var s = e;
				return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
			},
			slideNext: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating;
				return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
			},
			slidePrev: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating,
					n = i.snapGrid,
					o = i.slidesGrid,
					l = i.rtlTranslate;
				if (s.loop) {
					if (r) return !1;
					i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
				}

				function d(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
				}
				var p, c = d(l ? i.translate : -i.translate),
					u = n.map((function(e) {
						return d(e)
					})),
					h = (o.map((function(e) {
						return d(e)
					})), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
				return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
			},
			slideReset: function(e, t, a) {
				return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
			},
			slideToClosest: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.activeIndex,
					r = Math.floor(s / i.params.slidesPerGroup);
				if (r < i.snapGrid.length - 1) {
					var n = i.rtlTranslate ? i.translate : -i.translate,
						o = i.snapGrid[r];
					(i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
				}
				return i.slideTo(s, e, t, a)
			},
			slideToClickedSlide: function() {
				var e, t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
					r = t.clickedIndex;
				if (a.loop) {
					if (t.animating) return;
					e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick((function() {
						t.slideTo(r)
					}))) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick((function() {
						t.slideTo(r)
					}))) : t.slideTo(r)
				} else t.slideTo(r)
			}
		},
		u = {
			loopCreate: function() {
				var i = this,
					e = i.params,
					t = i.$wrapperEl;
				t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
				var s = t.children("." + e.slideClass);
				if (e.loopFillGroupWithBlank) {
					var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
					if (a !== e.slidesPerGroup) {
						for (var r = 0; r < a; r += 1) {
							var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
							t.append(n)
						}
						s = t.children("." + e.slideClass)
					}
				}
				"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
				var o = [],
					l = [];
				s.each((function(e, t) {
					var a = L(t);
					e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
				}));
				for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
				for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
			},
			loopFix: function() {
				var e, t = this,
					a = t.params,
					i = t.activeIndex,
					s = t.slides,
					r = t.loopedSlides,
					n = t.allowSlidePrev,
					o = t.allowSlideNext,
					l = t.snapGrid,
					d = t.rtlTranslate;
				t.allowSlidePrev = !0, t.allowSlideNext = !0;
				var p = -l[i] - t.getTranslate();
				i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)), t.allowSlidePrev = n, t.allowSlideNext = o
			},
			loopDestroy: function() {
				var e = this.$wrapperEl,
					t = this.params,
					a = this.slides;
				e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index")
			}
		},
		h = {
			setGrabCursor: function(e) {
				if (!(Y.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
					var t = this.el;
					t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function() {
				Y.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
			}
		},
		v = {
			appendSlide: function(e) {
				var t = this,
					a = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
				else a.append(e);
				i.loop && t.loopCreate(), i.observer && Y.observer || t.update()
			},
			prependSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && t.loopDestroy();
				var r = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					r = s + e.length
				} else i.prepend(e);
				a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), t.slideTo(r, 0, !1)
			},
			addSlide: function(e, t) {
				var a = this,
					i = a.$wrapperEl,
					s = a.params,
					r = a.activeIndex;
				s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
				var n = a.slides.length;
				if (e <= 0) a.prependSlide(t);
				else if (n <= e) a.appendSlide(t);
				else {
					for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
						var p = a.slides.eq(d);
						p.remove(), l.unshift(p)
					}
					if ("object" == typeof t && "length" in t) {
						for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
						o = e < r ? r + t.length : r
					} else i.append(t);
					for (var u = 0; u < l.length; u += 1) i.append(l[u]);
					s.loop && a.loopCreate(), s.observer && Y.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
				}
			},
			removeSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
				var r, n = s;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
					n = Math.max(n, 0)
				} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
				a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
			},
			removeAllSlides: function() {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		m = function() {
			var e = B.navigator.userAgent,
				t = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: B.cordova || B.phonegap,
					phonegap: B.cordova || B.phonegap
				},
				a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				s = e.match(/(iPad).*OS\s([\d_]+)/),
				r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
				var o = t.osVersion.split("."),
					l = f.querySelector('meta[name="viewport"]');
				t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
			}
			return t.pixelRatio = B.devicePixelRatio || 1, t
		}();

	function g() {
		var e = this,
			t = e.params,
			a = e.el;
		if (!a || 0 !== a.offsetWidth) {
			t.breakpoints && e.setBreakpoint();
			var i = e.allowSlideNext,
				s = e.allowSlidePrev,
				r = e.snapGrid;
			if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
				var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
				e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
			} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
			e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
		}
	}
	var w, b = {
			attachEvents: function() {
				var e = this,
					t = e.params,
					a = e.touchEvents,
					i = e.el,
					s = e.wrapperEl;
				e.onTouchStart = function(e) {
					var t = this,
						a = t.touchEventsData,
						i = t.params,
						s = t.touches;
					if (!t.animating || !i.preventInteractionOnTransition) {
						var r = e;
						if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && (!a.isTouched || !a.isMoved))
							if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
							else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
							s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
							var n = s.currentX,
								o = s.currentY,
								l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
								d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
							if (!l || !(n <= d || n >= B.screen.width - d)) {
								if (X.extend(a, {
										isTouched: !0,
										isMoved: !1,
										allowTouchCallbacks: !0,
										isScrolling: void 0,
										startMoving: void 0
									}), s.startX = n, s.startY = o, a.touchStartTime = X.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
									var p = !0;
									L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && r.preventDefault()
								}
								t.emit("touchStart", r)
							}
						}
					}
				}.bind(e), e.onTouchMove = function(e) {
					var t = this,
						a = t.touchEventsData,
						i = t.params,
						s = t.touches,
						r = t.rtlTranslate,
						n = e;
					if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
						if (!a.isTouchEvent || "mousemove" !== n.type) {
							var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
								l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
							if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
							if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (X.extend(s, {
								startX: o,
								startY: l,
								currentX: o,
								currentY: l
							}), a.touchStartTime = X.now()));
							if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
								if (t.isVertical()) {
									if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
								} else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
							if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
							if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
								s.currentX = o, s.currentY = l;
								var d, p = s.currentX - s.startX,
									c = s.currentY - s.startY;
								if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
									if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
									else if (a.startMoving) {
									t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
									var u = t.isHorizontal() ? p : c;
									s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
									var h = !0,
										v = i.resistanceRatio;
									if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
										if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
										if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
									}
									i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
										position: s[t.isHorizontal() ? "startX" : "startY"],
										time: a.touchStartTime
									}), a.velocities.push({
										position: s[t.isHorizontal() ? "currentX" : "currentY"],
										time: X.now()
									})), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
								}
							}
						}
					} else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
				}.bind(e), e.onTouchEnd = function(e) {
					var t = this,
						a = t.touchEventsData,
						i = t.params,
						s = t.touches,
						r = t.rtlTranslate,
						n = t.$wrapperEl,
						o = t.slidesGrid,
						l = t.snapGrid,
						d = e;
					if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
					i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
					var p, c = X.now(),
						u = c - a.touchStartTime;
					if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = X.nextTick((function() {
							t && !t.destroyed && t.emit("click", d)
						}), 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = X.now(), X.nextTick((function() {
							t.destroyed || (t.allowClick = !0)
						})), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
					if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
						if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
						if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
						if (i.freeModeMomentum) {
							if (1 < a.velocities.length) {
								var h = a.velocities.pop(),
									v = a.velocities.pop(),
									f = h.position - v.position,
									m = h.time - v.time;
								t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < X.now() - h.time) && (t.velocity = 0)
							} else t.velocity = 0;
							t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
							var g = 1e3 * i.freeModeMomentumRatio,
								b = t.velocity * g,
								w = t.translate + b;
							r && (w = -w);
							var y, x, E = !1,
								T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
							if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T), y = t.maxTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
							else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T), y = t.minTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
							else if (i.freeModeSticky) {
								for (var S, C = 0; C < l.length; C += 1)
									if (l[C] > -w) {
										S = C;
										break
									}
								w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
							}
							if (x && t.once("transitionEnd", (function() {
									t.loopFix()
								})), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
							else if (i.freeModeSticky) return void t.slideToClosest();
							i.freeModeMomentumBounce && E ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function() {
								t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd((function() {
									t && !t.destroyed && t.transitionEnd()
								})))
							}))) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function() {
								t && !t.destroyed && t.transitionEnd()
							})))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
						} else if (i.freeModeSticky) return void t.slideToClosest();
						(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
					} else {
						for (var M = 0, z = t.slidesSizesGrid[0], k = 0; k < o.length; k += i.slidesPerGroup) void 0 !== o[k + i.slidesPerGroup] ? p >= o[k] && p < o[k + i.slidesPerGroup] && (z = o[(M = k) + i.slidesPerGroup] - o[k]) : p >= o[k] && (M = k, z = o[o.length - 1] - o[o.length - 2]);
						var P = (p - o[M]) / z;
						if (u > i.longSwipesMs) {
							if (!i.longSwipes) return void t.slideTo(t.activeIndex);
							"next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
						} else {
							if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
							"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
						}
					}
				}.bind(e), e.onClick = function(e) {
					this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
				}.bind(e);
				var r = "container" === t.touchEventsTarget ? i : s,
					n = !!t.nested;
				if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) {
					if (Y.touch) {
						var o = !("touchstart" !== a.start || !Y.passiveListener || !t.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, Y.passiveListener ? {
							passive: !1,
							capture: n
						} : n), r.addEventListener(a.end, e.onTouchEnd, o)
					}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
				} else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
			},
			detachEvents: function() {
				var e = this,
					t = e.params,
					a = e.touchEvents,
					i = e.el,
					s = e.wrapperEl,
					r = "container" === t.touchEventsTarget ? i : s,
					n = !!t.nested;
				if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) {
					if (Y.touch) {
						var o = !("onTouchStart" !== a.start || !Y.passiveListener || !t.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
					}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
				} else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
				(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
			}
		},
		y = {
			setBreakpoint: function() {
				var e = this,
					t = e.activeIndex,
					a = e.initialized,
					i = e.loopedSlides;
				void 0 === i && (i = 0);
				var s = e.params,
					r = s.breakpoints;
				if (r && (!r || 0 !== Object.keys(r).length)) {
					var n = e.getBreakpoint(r);
					if (n && e.currentBreakpoint !== n) {
						var o = n in r ? r[n] : e.originalParams,
							l = s.loop && o.slidesPerView !== s.slidesPerView;
						X.extend(e.params, o), X.extend(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev
						}), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
					}
				}
			},
			getBreakpoint: function(e) {
				if (e) {
					var t = !1,
						a = [];
					Object.keys(e).forEach((function(e) {
						a.push(e)
					})), a.sort((function(e, t) {
						return parseInt(e, 10) - parseInt(t, 10)
					}));
					for (var i = 0; i < a.length; i += 1) {
						var s = a[i];
						s >= B.innerWidth && !t && (t = s)
					}
					return t || "max"
				}
			}
		},
		I = {
			isIE: !!B.navigator.userAgent.match(/Trident/g) || !!B.navigator.userAgent.match(/MSIE/g),
			isSafari: (w = B.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(B.navigator.userAgent)
		},
		x = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		E = {
			update: o,
			translate: d,
			transition: {
				setTransition: function(e, t) {
					this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
				},
				transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					var a = this,
						i = a.activeIndex,
						s = a.params,
						r = a.previousIndex;
					s.autoHeight && a.updateAutoHeight();
					var n = t;
					if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
						if ("reset" === n) return void a.emit("slideResetTransitionStart");
						a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
					}
				},
				transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					var a = this,
						i = a.activeIndex,
						s = a.previousIndex;
					a.animating = !1, a.setTransition(0);
					var r = t;
					if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
						if ("reset" === r) return void a.emit("slideResetTransitionEnd");
						a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
					}
				}
			},
			slide: c,
			loop: u,
			grabCursor: h,
			manipulation: v,
			events: b,
			breakpoints: y,
			checkOverflow: {
				checkOverflow: function() {
					var e = this,
						t = e.isLocked;
					e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
				}
			},
			classes: {
				addClasses: function() {
					var t = this.classNames,
						a = this.params,
						e = this.rtl,
						i = this.$el,
						s = [];
					s.push(a.direction), a.freeMode && s.push("free-mode"), Y.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), I.isIE && (Y.pointerEvents || Y.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach((function(e) {
						t.push(a.containerModifierClass + e)
					})), i.addClass(t.join(" "))
				},
				removeClasses: function() {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(e, t, a, i, s, r) {
					var n;

					function o() {
						r && r()
					}
					e.complete && s ? o() : t ? ((n = new B.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var a = 0; a < e.imagesToLoad.length; a += 1) {
						var i = e.imagesToLoad[a];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		T = {},
		S = function(u) {
			function h() {
				for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
				1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = X.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(E).forEach((function(t) {
					Object.keys(E[t]).forEach((function(e) {
						h.prototype[e] || (h.prototype[e] = E[t][e])
					}))
				}));
				var r = this;
				void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach((function(e) {
					var t = r.modules[e];
					if (t.params) {
						var a = Object.keys(t.params)[0],
							i = t.params[a];
						if ("object" != typeof i) return;
						if (!(a in s) || !("enabled" in i)) return;
						!0 === s[a] && (s[a] = {
							enabled: !0
						}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
							enabled: !1
						})
					}
				}));
				var n = X.extend({}, x);
				r.useModulesParams(n), r.params = X.extend({}, n, T, s), r.originalParams = X.extend({}, r.params), r.passedParams = X.extend({}, s);
				var o = (r.$ = L)(r.params.el);
				if (t = o[0]) {
					if (1 < o.length) {
						var l = [];
						return o.each((function(e, t) {
							var a = X.extend({}, s, {
								el: t
							});
							l.push(new h(a))
						})), l
					}
					t.swiper = r, o.data("swiper", r);
					var d, p, c = o.children("." + r.params.wrapperClass);
					return X.extend(r, {
						$el: o,
						el: t,
						$wrapperEl: c,
						wrapperEl: c[0],
						classNames: [],
						slides: L(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return "horizontal" === r.params.direction
						},
						isVertical: function() {
							return "vertical" === r.params.direction
						},
						rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
						rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
						wrongRTL: "-webkit-box" === c.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: r.params.allowSlideNext,
						allowSlidePrev: r.params.allowSlidePrev,
						touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], Y.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : Y.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
							start: d[0],
							move: d[1],
							end: d[2]
						}, r.touchEventsDesktop = {
							start: p[0],
							move: p[1],
							end: p[2]
						}, Y.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: X.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: r.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), r.useModules(), r.params.init && r.init(), r
				}
			}
			u && (h.__proto__ = u);
			var e = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
					for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
				} else
					for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
				return n
			}, h.prototype.update = function() {
				var a = this;
				if (a && !a.destroyed) {
					var e = a.snapGrid,
						t = a.params;
					t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
				}

				function i() {
					var e = a.rtlTranslate ? -1 * a.translate : a.translate,
						t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
					a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
				}
			}, h.prototype.init = function() {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
			}, h.prototype.destroy = function(e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a = this,
					i = a.params,
					s = a.$el,
					r = a.$wrapperEl,
					n = a.slides;
				return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((function(e) {
					a.off(e)
				})), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), X.deleteProps(a)), a.destroyed = !0), null
			}, h.extendDefaults = function(e) {
				X.extend(T, e)
			}, e.extendedDefaults.get = function() {
				return T
			}, e.defaults.get = function() {
				return x
			}, e.Class.get = function() {
				return u
			}, e.$.get = function() {
				return L
			}, Object.defineProperties(h, e), h
		}(s),
		C = {
			name: "device",
			proto: {
				device: m
			},
			static: {
				device: m
			}
		},
		M = {
			name: "support",
			proto: {
				support: Y
			},
			static: {
				support: Y
			}
		},
		z = {
			name: "browser",
			proto: {
				browser: I
			},
			static: {
				browser: I
			}
		},
		k = {
			name: "resize",
			create: function() {
				var e = this;
				X.extend(e, {
					resize: {
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					B.addEventListener("resize", this.resize.resizeHandler), B.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					B.removeEventListener("resize", this.resize.resizeHandler), B.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		P = {
			func: B.MutationObserver || B.WebkitMutationObserver,
			attach: function(e, t) {
				void 0 === t && (t = {});
				var a = this,
					i = new P.func((function(e) {
						if (1 !== e.length) {
							var t = function() {
								a.emit("observerUpdate", e[0])
							};
							B.requestAnimationFrame ? B.requestAnimationFrame(t) : B.setTimeout(t, 0)
						} else a.emit("observerUpdate", e[0])
					}));
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), a.observer.observers.push(i)
			},
			init: function() {
				var e = this;
				if (Y.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: !1
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach((function(e) {
					e.disconnect()
				})), this.observer.observers = []
			}
		},
		$ = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1
			},
			create: function() {
				X.extend(this, {
					observer: {
						init: P.init.bind(this),
						attach: P.attach.bind(this),
						destroy: P.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		D = {
			update: function(e) {
				var t = this,
					a = t.params,
					i = a.slidesPerView,
					s = a.slidesPerGroup,
					r = a.centeredSlides,
					n = t.virtual,
					o = n.from,
					l = n.to,
					d = n.slides,
					p = n.slidesGrid,
					c = n.renderSlide,
					u = n.offset;
				t.updateActiveIndex();
				var h, v, f, m = t.activeIndex || 0;
				h = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(i / 2) + s, f = Math.floor(i / 2) + s) : (v = i + (s - 1), f = s);
				var g = Math.max((m || 0) - f, 0),
					b = Math.min((m || 0) + v, d.length - 1),
					w = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);

				function y() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (X.extend(t.virtual, {
						from: g,
						to: b,
						offset: w,
						slidesGrid: t.slidesGrid
					}), o === g && l === b && !e) return t.slidesGrid !== p && w !== u && t.slides.css(h, w + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: w,
					from: g,
					to: b,
					slides: function() {
						for (var e = [], t = g; t <= b; t += 1) e.push(d[t]);
						return e
					}()
				}), void y();
				var x = [],
					E = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var T = o; T <= l; T += 1)(T < g || b < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
				for (var S = 0; S < d.length; S += 1) g <= S && S <= b && (void 0 === l || e ? E.push(S) : (l < S && E.push(S), S < o && x.push(S)));
				E.forEach((function(e) {
					t.$wrapperEl.append(c(d[e], e))
				})), x.sort((function(e, t) {
					return e < t
				})).forEach((function(e) {
					t.$wrapperEl.prepend(c(d[e], e))
				})), t.$wrapperEl.children(".swiper-slide").css(h, w + "px"), y()
			},
			renderSlide: function(e, t) {
				var a = this,
					i = a.params.virtual;
				if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
				var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
			},
			appendSlide: function(e) {
				this.virtual.slides.push(e), this.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this;
				if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
					var a = t.virtual.cache,
						i = {};
					Object.keys(a).forEach((function(e) {
						i[e + 1] = a[e]
					})), t.virtual.cache = i
				}
				t.virtual.update(!0), t.slideNext(0)
			}
		},
		O = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					virtual: {
						update: D.update.bind(e),
						appendSlide: D.appendSlide.bind(e),
						prependSlide: D.prependSlide.bind(e),
						renderSlide: D.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						X.extend(e.params, t), X.extend(e.originalParams, t), e.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		A = {
			handle: function(e) {
				var t = this,
					a = t.rtlTranslate,
					i = e;
				i.originalEvent && (i = i.originalEvent);
				var s = i.keyCode || i.charCode;
				if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
				if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
				if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
					if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
						var r = !1;
						if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
						var n = B.innerWidth,
							o = B.innerHeight,
							l = t.$el.offset();
						a && (l.left -= t.$el[0].scrollLeft);
						for (var d = [
								[l.left, l.top],
								[l.left + t.width, l.top],
								[l.left, l.top + t.height],
								[l.left + t.width, l.top + t.height]
							], p = 0; p < d.length; p += 1) {
							var c = d[p];
							0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
						}
						if (!r) return
					}
					t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
				}
			},
			enable: function() {
				this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		H = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function() {
				X.extend(this, {
					keyboard: {
						enabled: !1,
						enable: A.enable.bind(this),
						disable: A.disable.bind(this),
						handle: A.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		},
		G = {
			lastScrollTime: X.now(),
			event: -1 < B.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
				var e = "onwheel",
					t = e in f;
				if (!t) {
					var a = f.createElement("div");
					a.setAttribute(e, "return;"), t = "function" == typeof a[e]
				}
				return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
			}() ? "wheel" : "mousewheel",
			normalize: function(e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
					spinX: t,
					spinY: a,
					pixelX: i,
					pixelY: s
				}
			},
			handleMouseEnter: function() {
				this.mouseEntered = !0
			},
			handleMouseLeave: function() {
				this.mouseEntered = !1
			},
			handle: function(e) {
				var t = e,
					a = this,
					i = a.params.mousewheel;
				if (!a.mouseEntered && !i.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var s = 0,
					r = a.rtlTranslate ? -1 : 1,
					n = G.normalize(t);
				if (i.forceToAxis)
					if (a.isHorizontal()) {
						if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
						s = n.pixelX * r
					} else {
						if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
						s = n.pixelY
					}
				else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
				if (0 === s) return !0;
				if (i.invert && (s = -s), a.params.freeMode) {
					a.params.loop && a.loopFix();
					var o = a.getTranslate() + s * i.sensitivity,
						l = a.isBeginning,
						d = a.isEnd;
					if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = X.nextTick((function() {
							a.slideToClosest()
						}), 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
				} else {
					if (60 < X.now() - a.mousewheel.lastScrollTime)
						if (s < 0)
							if (a.isEnd && !a.params.loop || a.animating) {
								if (i.releaseOnEdges) return !0
							} else a.slideNext(), a.emit("scroll", t);
					else if (a.isBeginning && !a.params.loop || a.animating) {
						if (i.releaseOnEdges) return !0
					} else a.slidePrev(), a.emit("scroll", t);
					a.mousewheel.lastScrollTime = (new B.Date).getTime()
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			enable: function() {
				var e = this;
				if (!G.event) return !1;
				if (e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(G.event, e.mousewheel.handle), e.mousewheel.enabled = !0
			},
			disable: function() {
				var e = this;
				if (!G.event) return !1;
				if (!e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(G.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
			}
		},
		N = {
			update: function() {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl;
					s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
				}
			},
			init: function() {
				var e, t, a = this,
					i = a.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", (function(e) {
					e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext()
				})), t && 0 < t.length && t.on("click", (function(e) {
					e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev()
				})), X.extend(a.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function() {
				var e = this.navigation,
					t = e.$nextEl,
					a = e.$prevEl;
				t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass))
			}
		},
		V = {
			update: function() {
				var e = this,
					t = e.rtl,
					s = e.params.pagination;
				if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
						var o, l, d, p = e.pagination.bullets;
						if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each((function(e, t) {
							var a = L(t),
								i = a.index();
							i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
						}));
						else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
							for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
							c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
						}
						if (s.dynamicBullets) {
							var v = Math.min(p.length, s.dynamicMainBullets + 4),
								f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
								m = t ? "right" : "left";
							p.css(e.isHorizontal() ? m : "top", f + "px")
						}
					}
					if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
						var g;
						g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
						var b = (r + 1) / n,
							w = 1,
							y = 1;
						"horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
					}
					"custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
				}
			},
			render: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function() {
				var a = this,
					e = a.params.pagination;
				if (e.el) {
					var t = L(e.el);
					0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, (function(e) {
						e.preventDefault();
						var t = L(this).index() * a.params.slidesPerGroup;
						a.params.loop && (t += a.loopedSlides), a.slideTo(t)
					})), X.extend(a.pagination, {
						$el: t,
						el: t[0]
					}))
				}
			},
			destroy: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
				}
			}
		},
		R = {
			setTranslate: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtlTranslate,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						o = t.$el,
						l = e.params.scrollbar,
						d = s,
						p = (r - s) * i;
					a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (Y.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (Y.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function() {
						o[0].style.opacity = 0, o.transition(400)
					}), 1e3))
				}
			},
			setTransition: function(e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						n = e.size / e.virtualSize,
						o = n * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), X.extend(t, {
						trackSize: r,
						divider: n,
						moveDivider: o,
						dragSize: s
					}), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
				}
			},
			setDragPosition: function(e) {
				var t, a = this,
					i = a.scrollbar,
					s = a.rtlTranslate,
					r = i.$el,
					n = i.dragSize,
					o = i.trackSize;
				t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
				a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this.scrollbar,
					a = this.$wrapperEl,
					i = t.$el,
					s = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = X.nextTick((function() {
					i.css("opacity", 0), i.transition(400)
				}), 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
			},
			enableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEvents,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!Y.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!Y.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEvents,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!Y.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!Y.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			init: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.$el,
						i = e.params.scrollbar,
						s = L(i.el);
					e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
					var r = s.find("." + e.params.scrollbar.dragClass);
					0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), X.extend(t, {
						$el: s,
						el: s[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && t.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		F = {
			setTransform: function(e, t) {
				var a = this.rtl,
					i = L(e),
					s = a ? -1 : 1,
					r = i.attr("data-swiper-parallax") || "0",
					n = i.attr("data-swiper-parallax-x"),
					o = i.attr("data-swiper-parallax-y"),
					l = i.attr("data-swiper-parallax-scale"),
					d = i.attr("data-swiper-parallax-opacity");
				if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
					var p = d - (d - 1) * (1 - Math.abs(t));
					i[0].style.opacity = p
				}
				if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
				else {
					var c = l - (l - 1) * (1 - Math.abs(t));
					i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function() {
				var i = this,
					e = i.$el,
					t = i.slides,
					s = i.progress,
					r = i.snapGrid;
				e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function(e, t) {
					i.parallax.setTransform(t, s)
				})), t.each((function(e, t) {
					var a = t.progress;
					1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function(e, t) {
						i.parallax.setTransform(t, a)
					}))
				}))
			},
			setTransition: function(s) {
				void 0 === s && (s = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function(e, t) {
					var a = L(t),
						i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
					0 === s && (i = 0), a.transition(i)
				}))
			}
		},
		W = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function(e) {
				var t = this,
					a = t.params.zoom,
					i = t.zoom,
					s = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !Y.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, s.scaleStart = W.getDistanceBetweenTouches(e)
				}
				s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!Y.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					a.fakeGestureMoved = !0, i.scaleMove = W.getDistanceBetweenTouches(e)
				}
				i.$imageEl && 0 !== i.$imageEl.length && (Y.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
			},
			onGestureEnd: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!Y.gestures) {
					if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
					a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
				}
				i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.zoom,
					a = t.gesture,
					i = t.image;
				a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = X.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = X.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
					var n = s.width * a.scale,
						o = s.height * a.scale;
					if (!(n < i.slideWidth && o < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						o = a.currentX + n,
						l = i.y * r,
						d = a.currentY + l;
					0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = o, a.currentY = d;
					var c = a.width * e.scale,
						u = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in : function(e) {
				var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
					b = g.zoom,
					w = g.params.zoom,
					y = b.gesture,
					x = b.image;
				y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
			},
			out: function() {
				var e = this,
					t = e.zoom,
					a = e.params.zoom,
					i = t.gesture;
				i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function() {
				var e = this,
					t = e.zoom;
				if (!t.enabled) {
					t.enabled = !0;
					var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					Y.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			},
			disable: function() {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					e.zoom.enabled = !1;
					var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					Y.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			}
		},
		q = {
			loadInSlide: function(e, l) {
				void 0 === l && (l = !0);
				var d = this,
					p = d.params.lazy;
				if (void 0 !== e && 0 !== d.slides.length) {
					var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
						t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
					!c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each((function(e, t) {
						var i = L(t);
						i.addClass(p.loadingClass);
						var s = i.attr("data-background"),
							r = i.attr("data-src"),
							n = i.attr("data-srcset"),
							o = i.attr("data-sizes");
						d.loadImage(i[0], r || s, n, o, !1, (function() {
							if (null != d && d && (!d || d.params) && !d.destroyed) {
								if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
									var e = c.attr("data-swiper-slide-index");
									if (c.hasClass(d.params.slideDuplicateClass)) {
										var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
										d.lazy.loadInSlide(t.index(), !1)
									} else {
										var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										d.lazy.loadInSlide(a.index(), !1)
									}
								}
								d.emit("lazyImageReady", c[0], i[0])
							}
						})), d.emit("lazyImageLoad", c[0], i[0])
					}))
				}
			},
			load: function() {
				var i = this,
					t = i.$wrapperEl,
					a = i.params,
					s = i.slides,
					e = i.activeIndex,
					r = i.virtual && a.virtual.enabled,
					n = a.lazy,
					o = a.slidesPerView;

				function l(e) {
					if (r) {
						if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function d(e) {
					return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
				}
				if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each((function(e, t) {
					var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
					i.lazy.loadInSlide(a)
				}));
				else if (1 < o)
					for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
				else i.lazy.loadInSlide(e);
				if (n.loadPrevNext)
					if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
						for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
						for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
					} else {
						var g = t.children("." + a.slideNextClass);
						0 < g.length && i.lazy.loadInSlide(d(g));
						var b = t.children("." + a.slidePrevClass);
						0 < b.length && i.lazy.loadInSlide(d(b))
					}
			}
		},
		j = {
			LinearSpline: function(e, t) {
				var a, i, s, r, n;
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
					return e ? (n = function(e, t) {
						for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
						return a
					}(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var a, i, s = this,
					r = s.controller.control;

				function n(e) {
					var t = s.rtlTranslate ? -s.translate : s.translate;
					"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
				else r instanceof S && t !== r && n(r)
			},
			setTransition: function(t, e) {
				var a, i = this,
					s = i.controller.control;

				function r(e) {
					e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && X.nextTick((function() {
						e.updateAutoHeight()
					})), e.$wrapperEl.transitionEnd((function() {
						s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
					})))
				}
				if (Array.isArray(s))
					for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
				else s instanceof S && e !== s && r(s)
			}
		},
		K = {
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function(e) {
				var t = this,
					a = t.params.a11y;
				if (13 === e.keyCode) {
					var i = L(e.target);
					t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
				}
			},
			updatePagination: function() {
				var i = this,
					s = i.params.a11y;
				i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each((function(e, t) {
					var a = L(t);
					i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
				}))
			},
			init: function() {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, a, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			},
			destroy: function() {
				var e, t, a = this;
				a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
			}
		},
		U = {
			init: function() {
				var e = this;
				if (e.params.history) {
					if (!B.history || !B.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var t = e.history;
					t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || B.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || B.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function() {
				var e = B.location.pathname.slice(1).split("/").filter((function(e) {
						return "" !== e
					})),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function(e, t) {
				if (this.history.initialized && this.params.history.enabled) {
					var a = this.slides.eq(t),
						i = U.slugify(a.attr("data-history"));
					B.location.pathname.includes(e) || (i = e + "/" + i);
					var s = B.history.state;
					s && s.value === i || (this.params.history.replaceState ? B.history.replaceState({
						value: i
					}, null, i) : B.history.pushState({
						value: i
					}, null, i))
				}
			},
			slugify: function(e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (U.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var o = n.index();
							i.slideTo(o, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		_ = {
			onHashCange: function() {
				var e = this,
					t = f.location.hash.replace("#", "");
				t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
			},
			setHash: function() {
				var e = this;
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && B.history && B.history.replaceState) B.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
					else {
						var t = e.slides.eq(e.activeIndex),
							a = t.attr("data-hash") || t.attr("data-history");
						f.location.hash = a || ""
					}
			},
			init: function() {
				var e = this;
				if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
					e.hashNavigation.initialized = !0;
					var t = f.location.hash.replace("#", "");
					if (t)
						for (var a = 0, i = e.slides.length; a < i; a += 1) {
							var s = e.slides.eq(a);
							if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
								var r = s.index();
								e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
							}
						}
					e.params.hashNavigation.watchState && L(B).on("hashchange", e.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && L(B).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		Z = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = X.nextTick((function() {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}), a)
			},
			start: function() {
				var e = this;
				return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
			},
			stop: function() {
				var e = this;
				return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
			},
			pause: function(e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
			}
		},
		Q = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var a = this,
					t = a.slides,
					i = a.$wrapperEl;
				if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
					var s = !1;
					t.transitionEnd((function() {
						if (!s && a && !a.destroyed) {
							s = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
						}
					}))
				}
			}
		},
		J = {
			setTranslate: function() {
				var e, t = this,
					a = t.$el,
					i = t.$wrapperEl,
					s = t.slides,
					r = t.width,
					n = t.height,
					o = t.rtlTranslate,
					l = t.size,
					d = t.params.cubeEffect,
					p = t.isHorizontal(),
					c = t.virtual && t.params.virtual.enabled,
					u = 0;
				d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
				for (var h = 0; h < s.length; h += 1) {
					var v = s.eq(h),
						f = h;
					c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
					var E = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
						var T = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							z = d.shadowScale,
							k = d.shadowScale / M,
							P = d.shadowOffset;
						e.transform("scale3d(" + z + ", 1, " + k + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / k + "px) rotateX(-90deg)")
					}
				var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		ee = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
					var s = t.eq(i),
						r = s[0].progress;
					e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
						var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function(e) {
				var a = this,
					t = a.slides,
					i = a.activeIndex,
					s = a.$wrapperEl;
				if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
					var r = !1;
					t.eq(i).transitionEnd((function() {
						if (!r && a && !a.destroyed) {
							r = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
						}
					}))
				}
			}
		},
		te = {
			setTranslate: function() {
				for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
					var v = i.eq(u),
						f = r[u],
						m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
						g = o ? p * m : 0,
						b = o ? 0 : p * m,
						w = -c * Math.abs(m),
						y = o ? 0 : n.stretch * m,
						x = o ? n.stretch * m : 0;
					Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
					var E = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
					if (v.transform(E), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
						var T = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
					}
				}(Y.pointerEvents || Y.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
			},
			setTransition: function(e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		ae = [C, M, z, k, $, O, H, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					mousewheel: {
						enabled: !1,
						enable: G.enable.bind(e),
						disable: G.disable.bind(e),
						handle: G.handle.bind(e),
						handleMouseEnter: G.handleMouseEnter.bind(e),
						handleMouseLeave: G.handleMouseLeave.bind(e),
						lastScrollTime: X.now()
					}
				})
			},
			on: {
				init: function() {
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function() {
				X.extend(this, {
					navigation: {
						init: N.init.bind(this),
						update: N.update.bind(this),
						destroy: N.destroy.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(e) {
					var t = this.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					!this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function(e) {
						return e
					},
					formatFractionTotal: function(e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					pagination: {
						init: V.init.bind(e),
						render: V.render.bind(e),
						update: V.update.bind(e),
						destroy: V.destroy.bind(e),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function() {
					(this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(e) {
					var t = this;
					t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					scrollbar: {
						init: R.init.bind(e),
						destroy: R.destroy.bind(e),
						updateSize: R.updateSize.bind(e),
						setTranslate: R.setTranslate.bind(e),
						setTransition: R.setTransition.bind(e),
						enableDraggable: R.enableDraggable.bind(e),
						disableDraggable: R.disableDraggable.bind(e),
						setDragPosition: R.setDragPosition.bind(e),
						onDragStart: R.onDragStart.bind(e),
						onDragMove: R.onDragMove.bind(e),
						onDragEnd: R.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				X.extend(this, {
					parallax: {
						setTransform: F.setTransform.bind(this),
						setTranslate: F.setTranslate.bind(this),
						setTransition: F.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
				},
				init: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTransition: function(e) {
					this.params.parallax && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var t = this,
					a = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(e) {
					a[e] = W[e].bind(t)
				})), X.extend(t, {
					zoom: a
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function(e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function(e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				X.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: q.load.bind(this),
						loadInSlide: q.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: j.getInterpolateFunction.bind(e),
						setTranslate: j.setTranslate.bind(e),
						setTransition: j.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function(e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var t = this;
				X.extend(t, {
					a11y: {
						liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(K).forEach((function(e) {
					t.a11y[e] = K[e].bind(t)
				}))
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					history: {
						init: U.init.bind(e),
						setHistory: U.setHistory.bind(e),
						setHistoryPopState: U.setHistoryPopState.bind(e),
						scrollToSlide: U.scrollToSlide.bind(e),
						destroy: U.destroy.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				var e = this;
				X.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: _.init.bind(e),
						destroy: _.destroy.bind(e),
						setHash: _.setHash.bind(e),
						onHashCange: _.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function() {
				var t = this;
				X.extend(t, {
					autoplay: {
						running: !1,
						paused: !1,
						run: Z.run.bind(t),
						start: Z.start.bind(t),
						stop: Z.stop.bind(t),
						pause: Z.pause.bind(t),
						onTransitionEnd: function(e) {
							t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && this.autoplay.start()
				},
				beforeTransitionStart: function(e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop()
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				X.extend(this, {
					fadeEffect: {
						setTranslate: Q.setTranslate.bind(this),
						setTransition: Q.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						X.extend(e.params, t), X.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function(e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				X.extend(this, {
					cubeEffect: {
						setTranslate: J.setTranslate.bind(this),
						setTransition: J.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						X.extend(e.params, t), X.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function(e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				X.extend(this, {
					flipEffect: {
						setTranslate: ee.setTranslate.bind(this),
						setTransition: ee.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						X.extend(e.params, t), X.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function(e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				X.extend(this, {
					coverflowEffect: {
						setTranslate: te.setTranslate.bind(this),
						setTransition: te.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function() {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function(e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}];
	return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ae), S
})),
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, (function() {
	"use strict";

	function r(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}
	var e = "undefined" != typeof global && "[object global]" === {}.toString.call(global);

	function i(e, t) {
		return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
	}

	function s(e) {
		return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
	}

	function l() {
		var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
			n = t.id,
			r = t.url,
			o = n || r;
		if (!o) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
		if (e = o, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(o);
		if (s(o)) return o.replace("http:", "https:");
		if (n) throw new TypeError("â€œ".concat(n, "â€ is not a valid video id."));
		throw new TypeError("â€œ".concat(o, "â€ is not a vimeo.com url."))
	}
	var t = void 0 !== Array.prototype.indexOf,
		n = "undefined" != typeof window && void 0 !== window.postMessage;
	if (!(e || t && n)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
	var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
	! function(e) {
		if (!e.WeakMap) {
			var n = Object.prototype.hasOwnProperty,
				o = function(e, t, n) {
					Object.defineProperty ? Object.defineProperty(e, t, {
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n
				};
			e.WeakMap = function() {
				function e() {
					if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
					if (o(this, "_id", "_WeakMap_" + t() + "." + t()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported")
				}

				function r(e, t) {
					if (!i(e) || !n.call(e, "_id")) throw new TypeError(t + " method called on incompatible receiver " + typeof e)
				}

				function t() {
					return Math.random().toString().substring(2)
				}
				return o(e.prototype, "delete", (function(e) {
					if (r(this, "delete"), !i(e)) return !1;
					var t = e[this._id];
					return !(!t || t[0] !== e || (delete e[this._id], 0))
				})), o(e.prototype, "get", (function(e) {
					if (r(this, "get"), i(e)) {
						var t = e[this._id];
						return t && t[0] === e ? t[1] : void 0
					}
				})), o(e.prototype, "has", (function(e) {
					if (r(this, "has"), !i(e)) return !1;
					var t = e[this._id];
					return !(!t || t[0] !== e)
				})), o(e.prototype, "set", (function(e, t) {
					if (r(this, "set"), !i(e)) throw new TypeError("Invalid value used as weak map key");
					var n = e[this._id];
					return n && n[0] === e ? n[1] = t : o(e, this._id, [e, t]), this
				})), o(e, "_polyfill", !0), e
			}()
		}

		function i(e) {
			return Object(e) === e
		}
	}("undefined" != typeof self ? self : "undefined" != typeof window ? window : o);
	var a, f = (function(e) {
			var t, n, r;
			r = function() {
				var t, a, n, e = Object.prototype.toString,
					r = "undefined" != typeof setImmediate ? function(e) {
						return setImmediate(e)
					} : setTimeout;
				try {
					Object.defineProperty({}, "x", {}), t = function(e, t, n, r) {
						return Object.defineProperty(e, t, {
							value: n,
							writable: !0,
							configurable: !1 !== r
						})
					}
				} catch (e) {
					t = function(e, t, n) {
						return e[t] = n, e
					}
				}

				function i(e, t) {
					n.add(e, t), a || (a = r(n.drain))
				}

				function u(e) {
					var t, n = typeof e;
					return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
				}

				function c() {
					for (var e = 0; e < this.chain.length; e++) o(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
					this.chain.length = 0
				}

				function o(e, t, n) {
					var r, o;
					try {
						!1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = u(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r)
					} catch (e) {
						n.reject(e)
					}
				}

				function s(e) {
					var t = this;
					t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 0 < t.chain.length && i(c, t))
				}

				function l(e, n, r, o) {
					for (var t = 0; t < n.length; t++) ! function(t) {
						e.resolve(n[t]).then((function(e) {
							r(t, e)
						}), o)
					}(t)
				}

				function f(e) {
					this.def = e, this.triggered = !1
				}

				function d(e) {
					this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
				}

				function h(e) {
					if ("function" != typeof e) throw TypeError("Not a function");
					if (0 !== this.__NPO__) throw TypeError("Not a promise");
					this.__NPO__ = 1;
					var r = new d(this);
					this.then = function(e, t) {
						var n = {
							success: "function" != typeof e || e,
							failure: "function" == typeof t && t
						};
						return n.promise = new this.constructor((function(e, t) {
							if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
							n.resolve = e, n.reject = t
						})), r.chain.push(n), 0 !== r.state && i(c, r), n.promise
					}, this.catch = function(e) {
						return this.then(void 0, e)
					};
					try {
						e.call(void 0, (function(e) {
							(function e(n) {
								var r, o = this;
								if (!o.triggered) {
									o.triggered = !0, o.def && (o = o.def);
									try {
										(r = u(n)) ? i((function() {
											var t = new f(o);
											try {
												r.call(n, (function() {
													e.apply(t, arguments)
												}), (function() {
													s.apply(t, arguments)
												}))
											} catch (e) {
												s.call(t, e)
											}
										})): (o.msg = n, o.state = 1, 0 < o.chain.length && i(c, o))
									} catch (e) {
										s.call(new f(o), e)
									}
								}
							}).call(r, e)
						}), (function(e) {
							s.call(r, e)
						}))
					} catch (e) {
						s.call(r, e)
					}
				}
				n = function() {
					var n, r, o;

					function i(e, t) {
						this.fn = e, this.self = t, this.next = void 0
					}
					return {
						add: function(e, t) {
							o = new i(e, t), r ? r.next = o : n = o, r = o, o = void 0
						},
						drain: function() {
							var e = n;
							for (n = r = a = void 0; e;) e.fn.call(e.self), e = e.next
						}
					}
				}();
				var v = t({}, "constructor", h, !1);
				return t(h.prototype = v, "__NPO__", 0, !1), t(h, "resolve", (function(n) {
					return n && "object" == typeof n && 1 === n.__NPO__ ? n : new this((function(e, t) {
						if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
						e(n)
					}))
				})), t(h, "reject", (function(n) {
					return new this((function(e, t) {
						if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
						t(n)
					}))
				})), t(h, "all", (function(t) {
					var a = this;
					return "[object Array]" != e.call(t) ? a.reject(TypeError("Not an array")) : 0 === t.length ? a.resolve([]) : new a((function(n, e) {
						if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function");
						var r = t.length,
							o = Array(r),
							i = 0;
						l(a, t, (function(e, t) {
							o[e] = t, ++i === r && n(o)
						}), e)
					}))
				})), t(h, "race", (function(t) {
					var r = this;
					return "[object Array]" != e.call(t) ? r.reject(TypeError("Not an array")) : new r((function(n, e) {
						if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function");
						l(r, t, (function(e, t) {
							n(t)
						}), e)
					}))
				})), h
			}, (n = o)[t = "Promise"] = n[t] || r(), e.exports && (e.exports = n[t])
		}(a = {
			exports: {}
		}), a.exports),
		d = new WeakMap;

	function u(e, t, n) {
		var r = d.get(e.element) || {};
		t in r || (r[t] = []), r[t].push(n), d.set(e.element, r)
	}

	function c(e, t) {
		return (d.get(e.element) || {})[t] || []
	}

	function h(e, t, n) {
		var r = d.get(e.element) || {};
		if (!r[t]) return !0;
		if (!n) return r[t] = [], d.set(e.element, r), !0;
		var o = r[t].indexOf(n);
		return -1 !== o && r[t].splice(o, 1), d.set(e.element, r), r[t] && 0 === r[t].length
	}
	var v = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

	function p(r) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
		return v.reduce((function(e, t) {
			var n = r.getAttribute("data-vimeo-".concat(t));
			return (n || "" === n) && (e[t] = "" === n ? 1 : n), e
		}), e)
	}

	function y(e, t) {
		var n = e.html;
		if (!t) throw new TypeError("An element must be provided");
		if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
		var r = document.createElement("div");
		return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
	}

	function m(i) {
		var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
			u = 2 < arguments.length ? arguments[2] : void 0;
		return new Promise((function(t, n) {
			if (!s(i)) throw new TypeError("â€œ".concat(i, "â€ is not a vimeo.com url."));
			var e = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));
			for (var r in a) a.hasOwnProperty(r) && (e += "&".concat(r, "=").concat(encodeURIComponent(a[r])));
			var o = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
			o.open("GET", e, !0), o.onload = function() {
				if (404 !== o.status)
					if (403 !== o.status) try {
						var e = JSON.parse(o.responseText);
						if (403 === e.domain_status_code) return y(e, u), void n(new Error("â€œ".concat(i, "â€ is not embeddable.")));
						t(e)
					} catch (e) {
						n(e)
					} else n(new Error("â€œ".concat(i, "â€ is not embeddable.")));
					else n(new Error("â€œ".concat(i, "â€ was not found.")))
			}, o.onerror = function() {
				var e = o.status ? " (".concat(o.status, ")") : "";
				n(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
			}, o.send()
		}))
	}

	function g(e) {
		if ("string" == typeof e) try {
			e = JSON.parse(e)
		} catch (e) {
			return console.warn(e), {}
		}
		return e
	}

	function w(e, t, n) {
		if (e.element.contentWindow && e.element.contentWindow.postMessage) {
			var r = {
				method: t
			};
			void 0 !== n && (r.value = n);
			var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
			8 <= o && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
		}
	}

	function b(n, r) {
		var t, e = [];
		if ((r = g(r)).event) "error" === r.event && c(n, r.data.method).forEach((function(e) {
			var t = new Error(r.data.message);
			t.name = r.data.name, e.reject(t), h(n, r.data.method, e)
		})), e = c(n, "event:".concat(r.event)), t = r.data;
		else if (r.method) {
			var o = function(e, t) {
				var n = c(e, t);
				if (n.length < 1) return !1;
				var r = n.shift();
				return h(e, t, r), r
			}(n, r.method);
			o && (e.push(o), t = r.value)
		}
		e.forEach((function(e) {
			try {
				if ("function" == typeof e) return void e.call(n, t);
				e.resolve(t)
			} catch (e) {}
		}))
	}
	var k = new WeakMap,
		E = new WeakMap,
		Player = function() {
			function Player(u) {
				var e, c = this,
					n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				if (function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, Player), window.jQuery && u instanceof jQuery && (1 < u.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), u = u[0]), "undefined" != typeof document && "string" == typeof u && (u = document.getElementById(u)), e = u, !Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
				var r = u.ownerDocument.defaultView;
				if ("IFRAME" !== u.nodeName) {
					var t = u.querySelector("iframe");
					t && (u = t)
				}
				if ("IFRAME" === u.nodeName && !s(u.getAttribute("src") || "")) throw new Error("The player element passed isnâ€™t a Vimeo embed.");
				if (k.has(u)) return k.get(u);
				this.element = u, this.origin = "*";
				var o = new f((function(i, a) {
					var e = function(e) {
						if (s(e.origin) && c.element.contentWindow === e.source) {
							"*" === c.origin && (c.origin = e.origin);
							var t = g(e.data);
							if (t && "error" === t.event && t.data && "ready" === t.data.method) {
								var n = new Error(t.data.message);
								return n.name = t.data.name, void a(n)
							}
							var r = t && "ready" === t.event,
								o = t && "ping" === t.method;
							if (r || o) return c.element.setAttribute("data-ready", "true"), void i();
							b(c, t)
						}
					};
					if (r.addEventListener ? r.addEventListener("message", e, !1) : r.attachEvent && r.attachEvent("onmessage", e), "IFRAME" !== c.element.nodeName) {
						var t = p(u, n);
						m(l(t), t, u).then((function(e) {
							var t, n, r, o = y(e, u);
							return c.element = o, c._originalElement = u, t = u, n = o, r = d.get(t), d.set(n, r), d.delete(t), k.set(c.element, c), e
						})).catch(a)
					}
				}));
				return E.set(this, o), k.set(this.element, this), "IFRAME" === this.element.nodeName && w(this, "ping"), this
			}
			var e, t;
			return e = Player, (t = [{
				key: "callMethod",
				value: function(n) {
					var r = this,
						o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return new f((function(e, t) {
						return r.ready().then((function() {
							u(r, n, {
								resolve: e,
								reject: t
							}), w(r, n, o)
						})).catch(t)
					}))
				}
			}, {
				key: "get",
				value: function(n) {
					var r = this;
					return new f((function(e, t) {
						return n = i(n, "get"), r.ready().then((function() {
							u(r, n, {
								resolve: e,
								reject: t
							}), w(r, n)
						})).catch(t)
					}))
				}
			}, {
				key: "set",
				value: function(n, r) {
					var o = this;
					return new f((function(e, t) {
						if (n = i(n, "set"), null == r) throw new TypeError("There must be a value to set.");
						return o.ready().then((function() {
							u(o, n, {
								resolve: e,
								reject: t
							}), w(o, n, r)
						})).catch(t)
					}))
				}
			}, {
				key: "on",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (!t) throw new TypeError("You must pass a callback function.");
					if ("function" != typeof t) throw new TypeError("The callback must be a function.");
					0 === c(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {})), u(this, "event:".concat(e), t)
				}
			}, {
				key: "off",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass an event name.");
					if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
					h(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}))
				}
			}, {
				key: "loadVideo",
				value: function(e) {
					return this.callMethod("loadVideo", e)
				}
			}, {
				key: "ready",
				value: function() {
					var e = E.get(this) || new f((function(e, t) {
						t(new Error("Unknown player. Probably unloaded."))
					}));
					return f.resolve(e)
				}
			}, {
				key: "addCuePoint",
				value: function(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return this.callMethod("addCuePoint", {
						time: e,
						data: t
					})
				}
			}, {
				key: "removeCuePoint",
				value: function(e) {
					return this.callMethod("removeCuePoint", e)
				}
			}, {
				key: "enableTextTrack",
				value: function(e, t) {
					if (!e) throw new TypeError("You must pass a language.");
					return this.callMethod("enableTextTrack", {
						language: e,
						kind: t
					})
				}
			}, {
				key: "disableTextTrack",
				value: function() {
					return this.callMethod("disableTextTrack")
				}
			}, {
				key: "pause",
				value: function() {
					return this.callMethod("pause")
				}
			}, {
				key: "play",
				value: function() {
					return this.callMethod("play")
				}
			}, {
				key: "unload",
				value: function() {
					return this.callMethod("unload")
				}
			}, {
				key: "destroy",
				value: function() {
					var t = this;
					return new f((function(e) {
						E.delete(t), k.delete(t.element), t._originalElement && (k.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.parentNode && t.element.parentNode.removeChild(t.element), e()
					}))
				}
			}, {
				key: "getAutopause",
				value: function() {
					return this.get("autopause")
				}
			}, {
				key: "setAutopause",
				value: function(e) {
					return this.set("autopause", e)
				}
			}, {
				key: "getBuffered",
				value: function() {
					return this.get("buffered")
				}
			}, {
				key: "getColor",
				value: function() {
					return this.get("color")
				}
			}, {
				key: "setColor",
				value: function(e) {
					return this.set("color", e)
				}
			}, {
				key: "getCuePoints",
				value: function() {
					return this.get("cuePoints")
				}
			}, {
				key: "getCurrentTime",
				value: function() {
					return this.get("currentTime")
				}
			}, {
				key: "setCurrentTime",
				value: function(e) {
					return this.set("currentTime", e)
				}
			}, {
				key: "getDuration",
				value: function() {
					return this.get("duration")
				}
			}, {
				key: "getEnded",
				value: function() {
					return this.get("ended")
				}
			}, {
				key: "getLoop",
				value: function() {
					return this.get("loop")
				}
			}, {
				key: "setLoop",
				value: function(e) {
					return this.set("loop", e)
				}
			}, {
				key: "setMuted",
				value: function(e) {
					return this.set("muted", e)
				}
			}, {
				key: "getMuted",
				value: function() {
					return this.get("muted")
				}
			}, {
				key: "getPaused",
				value: function() {
					return this.get("paused")
				}
			}, {
				key: "getPlaybackRate",
				value: function() {
					return this.get("playbackRate")
				}
			}, {
				key: "setPlaybackRate",
				value: function(e) {
					return this.set("playbackRate", e)
				}
			}, {
				key: "getPlayed",
				value: function() {
					return this.get("played")
				}
			}, {
				key: "getSeekable",
				value: function() {
					return this.get("seekable")
				}
			}, {
				key: "getSeeking",
				value: function() {
					return this.get("seeking")
				}
			}, {
				key: "getTextTracks",
				value: function() {
					return this.get("textTracks")
				}
			}, {
				key: "getVideoEmbedCode",
				value: function() {
					return this.get("videoEmbedCode")
				}
			}, {
				key: "getVideoId",
				value: function() {
					return this.get("videoId")
				}
			}, {
				key: "getVideoTitle",
				value: function() {
					return this.get("videoTitle")
				}
			}, {
				key: "getVideoWidth",
				value: function() {
					return this.get("videoWidth")
				}
			}, {
				key: "getVideoHeight",
				value: function() {
					return this.get("videoHeight")
				}
			}, {
				key: "getVideoUrl",
				value: function() {
					return this.get("videoUrl")
				}
			}, {
				key: "getVolume",
				value: function() {
					return this.get("volume")
				}
			}, {
				key: "setVolume",
				value: function(e) {
					return this.set("volume", e)
				}
			}]) && r(e.prototype, t), Player
		}();
	return e || (function() {
		var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
			t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
			n = function(e) {
				"console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
			};
		t.forEach((function(t) {
			try {
				if (null !== t.getAttribute("data-vimeo-defer")) return;
				var e = p(t);
				m(l(e), e, t).then((function(e) {
					return y(e, t)
				})).catch(n)
			} catch (e) {
				n(e)
			}
		}))
	}(), function() {
		var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document;
		if (!window.VimeoPlayerResizeEmbeds_) {
			window.VimeoPlayerResizeEmbeds_ = !0;
			var e = function(e) {
				if (s(e.origin) && e.data && "spacechange" === e.data.event)
					for (var t = r.querySelectorAll("iframe"), n = 0; n < t.length; n++)
						if (t[n].contentWindow === e.source) {
							t[n].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
							break
						}
			};
			window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e)
		}
	}()), Player
})),
function() {
	this.Calendly = {}
}.call(this), Calendly.domReady = function(e) {
		var t = !1,
			n = function() {
				document.addEventListener ? (document.removeEventListener("DOMContentLoaded", i), window.removeEventListener("load", i)) : (document.detachEvent("onreadystatechange", i), window.detachEvent("onload", i))
			},
			i = function() {
				t || !document.addEventListener && "load" !== event.type && "complete" !== document.readyState || (t = !0, n(), e())
			};
		if ("complete" === document.readyState) e();
		else if (document.addEventListener) document.addEventListener("DOMContentLoaded", i), window.addEventListener("load", i);
		else {
			document.attachEvent("onreadystatechange", i), window.attachEvent("onload", i);
			var o = !1;
			try {
				o = null == window.frameElement && document.documentElement
			} catch (l) {}
			o && o.doScroll && function r() {
				if (!t) {
					try {
						o.doScroll("left")
					} catch (i) {
						return setTimeout(r, 50)
					}
					t = !0, n(), e()
				}
			}()
		}
	},
	function() {
		Calendly.initInlineWidgets = function() {
			return Calendly.domReady((function() {
				return Calendly.createInlineWidgets()
			}))
		}, Calendly.initBadgeWidget = function(e) {
			return Calendly.domReady((function() {
				return Calendly.createBadgeWidget(e)
			}))
		}, Calendly.createInlineWidgets = function() {
			var e, t, n, i, o;
			for (o = [], n = 0, i = (t = document.querySelectorAll(".calendly-inline-widget")).length; i > n; n++)(e = t[n]).getAttribute("data-processed") ? o.push(void 0) : (e.setAttribute("data-processed", !0), o.push(new Calendly.Iframe(e, !0, "Inline")));
			return o
		}, Calendly.createBadgeWidget = function(e) {
			return this.destroyBadgeWiget(), Calendly.badgeWidget = new Calendly.BadgeWidget({
				color: e.color,
				text: e.text,
				branding: e.branding,
				onClick: function() {
					return Calendly.showPopupWidget(e.url, "PopupWidget")
				}
			})
		}, Calendly.destroyBadgeWiget = function() {
			return Calendly.badgeWidget ? (Calendly.badgeWidget.destroy(), delete Calendly.badgeWidget) : void 0
		}, Calendly.showPopupWidget = function(e, t) {
			return null == t && (t = "PopupText"), this.closePopupWidget(), Calendly.popupWidget = new Calendly.PopupWidget(e, (function() {
				return delete Calendly.popupWidget
			}), t), Calendly.popupWidget.show()
		}, Calendly.closePopupWidget = function() {
			return Calendly.popupWidget ? Calendly.popupWidget.close() : void 0
		}
	}.call(this),
	function() {
		Calendly.Iframe = function() {
			function e(e, t, n) {
				this.parent = e, this.inlineStyles = null != t && t, this.embedType = n, this.build(), this.inject()
			}
			return e.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e.prototype.build = function() {
				return this.node = document.createElement("iframe"), this.node.src = this.getSource(), this.node.width = "100%", this.node.height = "100%", this.node.frameBorder = "0"
			}, e.prototype.inject = function() {
				return this.format(), this.parent.appendChild(this.buildSpinner()), this.parent.appendChild(this.node)
			}, e.prototype.getSource = function() {
				return "" + this.getURL() + this.getDivider() + this.getParams()
			}, e.prototype.getURL = function() {
				return null != this.url ? this.url : this.url = this.parent.getAttribute("data-url").split("#")[0]
			}, e.prototype.getDivider = function() {
				return -1 === this.getURL().indexOf("?") ? "?" : "&"
			}, e.prototype.getParams = function() {
				return "embed_domain=" + this.getDomain() + "&embed_type=" + this.embedType
			}, e.prototype.getDomain = function() {
				return encodeURIComponent(document.location.origin)
			}, e.prototype.format = function() {
				return this.isMobile ? this.formatMobile() : this.formatDesktop()
			}, e.prototype.formatDesktop = function() {
				return this.inlineStyles ? this.parent.setAttribute("style", "position: relative;" + this.parent.getAttribute("style")) : void 0
			}, e.prototype.formatMobile = function() {
				return this.inlineStyles ? this.parent.setAttribute("style", "position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;" + this.parent.getAttribute("style")) : this.parent.className += " mobile"
			}, e.prototype.buildSpinner = function() {
				var e;
				return (e = document.createElement("div")).className = "spinner", e.appendChild(this.buildBounce(1)), e.appendChild(this.buildBounce(2)), e.appendChild(this.buildBounce(3)), e
			}, e.prototype.buildBounce = function(e) {
				var t;
				return (t = document.createElement("div")).className = "bounce" + e, t
			}, e
		}()
	}.call(this),
	function() {
		Calendly.PopupWidget = function() {
			function t(t, n, i) {
				this.url = t, this.onClose = n, this.embedType = i, this.close = function(e, t) {
					return function() {
						return e.apply(t, arguments)
					}
				}(this.close, this), this.pageRoot = document.getElementsByTagName("html")[0]
			}
			return t.prototype.show = function() {
				return this.buildOverlay(), this.insertOverlay(), this.lockPageScroll()
			}, t.prototype.close = function() {
				return this.destroyOverlay(), this.onClose(), this.unlockPageScroll()
			}, t.prototype.buildOverlay = function() {
				return this.overlay = document.createElement("div"), this.overlay.className = "calendly-overlay", this.overlay.appendChild(this.buildCloseOverlay()), this.overlay.appendChild(this.buildPopup())
			}, t.prototype.insertOverlay = function() {
				return document.body.insertBefore(this.overlay, document.body.firstChild)
			}, t.prototype.buildCloseOverlay = function() {
				var e;
				return (e = document.createElement("div")).className = "calendly-close-overlay", e.onclick = this.close, e
			}, t.prototype.buildPopup = function() {
				var e;
				return (e = document.createElement("div")).className = "calendly-popup", e.appendChild(this.buildPopupContent()), e.appendChild(this.buildCloseButton()), e
			}, t.prototype.buildPopupContent = function() {
				var e;
				return (e = document.createElement("div")).className = "calendly-popup-content", e.setAttribute("data-url", this.url), new Calendly.Iframe(e, !1, this.embedType), e
			}, t.prototype.buildCloseButton = function() {
				var e;
				return (e = document.createElement("div")).className = "calendly-popup-close", e.onclick = this.close, e
			}, t.prototype.destroyOverlay = function() {
				return this.overlay.parentNode.removeChild(this.overlay)
			}, t.prototype.lockPageScroll = function() {
				return this.pageRoot.className += " calendly-page-scroll-locked"
			}, t.prototype.unlockPageScroll = function() {
				return this.pageRoot.className = this.pageRoot.className.replace(" calendly-page-scroll-locked", "")
			}, t
		}()
	}.call(this),
	function() {
		Calendly.BadgeWidget = function() {
			function e(e) {
				this.options = e, this.buildWidget(), this.insertWidget()
			}
			return e.prototype.destroy = function() {
				return this.widget.parentNode.removeChild(this.widget)
			}, e.prototype.buildWidget = function() {
				return this.widget = document.createElement("div"), this.widget.className = "calendly-badge-widget", this.widget.appendChild(this.buildContent())
			}, e.prototype.insertWidget = function() {
				return document.body.insertBefore(this.widget, document.body.firstChild)
			}, e.prototype.buildContent = function() {
				var e;
				return (e = document.createElement("div")).className = "calendly-badge-content", "#ffffff" === this.options.color && (e.className += " white"), e.onclick = this.options.onClick, e.innerHTML = this.options.text, e.style.background = this.options.color, this.options.branding && e.appendChild(this.buildBranding()), e
			}, e.prototype.buildBranding = function() {
				var e;
				return (e = document.createElement("span")).innerHTML = "powered by Calendly", e
			}, e
		}()
	}.call(this), Calendly.initInlineWidgets();
var validateMailchimp = function(e) {
	if (e.preventDefault(), "" !== this.getElementsByClassName("js-validate-robot")[0].value) return !1;
	var url = this.action.replace("/post?", "/post-json?"),
		input = this.getElementsByClassName("mce-EMAIL")[0],
		data = "&" + input.name + "=" + encodeURIComponent(input.value),
		script = document.createElement("script");
	script.src = url + data, document.body.appendChild(script);
	window.callback = function(data) {
		delete window.callback, document.body.removeChild(script);
		var toast = document.createElement("div");
		toast.className = "error" === data.result ? "toast toast-error" : "toast", toast.innerHTML = data.msg.replace("0 - ", ""), document.body.appendChild(toast), "success" === data.result && ("undefined" != typeof fbq && fbq("track", "CompleteRegistration", {
			email: input.value
		}), input.value = ""), window.setTimeout((function() {
			document.body.removeChild(toast)
		}), 7e3)
	}
};
! function() {
	var mcForm = document.getElementById("mc-form-newsletter");
	mcForm && mcForm.addEventListener("submit", validateMailchimp)
}();
var consoleCss = "font-size: 13px; padding: 85px 0 20px; background: url(https://carlos-burelo.github.io/assets/img/web-icon.png) no-repeat; background-size: auto 50px; background-position: 0 15px";
console.log("Carlos Burelo", consoleCss);
var navIsOpen = !1,
	navMobile = document.getElementById("nav-mobile-overlay"),
	navHamburger = document.getElementById("nav-hamburger"),
	toggleMenu = function(ev) {
		ev.preventDefault(), (navIsOpen = !navIsOpen) ? (navMobile.className = "visible-xs is-open", navHamburger.className = "hamburger is-open") : (navMobile.className = "visible-xs", navHamburger.className = "hamburger")
	};

function delayLevitation() {
	var levitateElements = document.getElementsByClassName("container-animation")[0];
	myVar = setTimeout((function() {
		levitateElements.classList.add("levitating")
	}), 3e3)
}
ScrollReveal().reveal(".container-animation div", {
	delay: 100,
	origin: "top",
	interval: 50,
	scale: 0,
	duration: 750,
	easing: "cubic-bezier(0.215,.61,.355,1)",
	distance: "100px",
	afterReveal: delayLevitation
});
var mySwiper, sliderJobsGallery = new Swiper(".swiper-container.jobs-gallery-slider", {
		slidesPerView: "auto",
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		observer: !0,
		observeParents: !0,
		grabCursor: !0
	}),
	breakpoint = window.matchMedia("(min-width:991px)"),
	breakpointChecker = function() {
		if (!0 !== breakpoint.matches) return !1 === breakpoint.matches ? enableSwiper() : void 0;
		void 0 !== mySwiper && mySwiper.destroy(!0, !0)
	},
	enableSwiper = function() {
		mySwiper = new Swiper(".jobs-perks-slider", {
			slidesPerView: 1,
			centeredSlides: !0,
			grabCursor: !0,
			pagination: {
				el: ".jobs-perks-slider .swiper-pagination",
				type: "bullets",
				clickable: !0,
				renderBullet: function(index, className) {
					return '<span class="' + className + '"></span>'
				}
			}
		})
	};
breakpoint.addListener(breakpointChecker), breakpointChecker();
var stepsPrev = document.getElementById("steps--prev"),
	stepsNext = document.getElementById("steps--next"),
	steps = document.getElementsByClassName("slider--steps")[0],
	sliderSteps = new Swiper(".slider--steps", {
		speed: 500,
		slidesPerView: 2,
		spaceBetween: 20,
		noSwipingClass: "swiper-button-black",
		preventInteractionOnTransition: !0,
		breakpoints: {
			1200: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
window.onload = function() {
	sliderSteps.on("reachEnd", (function() {
		stepsNext.classList.add("swiper-button-disabled")
	})).on("reachBeginning", (function() {
		stepsPrev.classList.add("swiper-button-disabled")
	})).on("fromEdge", (function() {
		stepsNext.classList.remove("swiper-button-disabled"), stepsPrev.classList.remove("swiper-button-disabled")
	})), null !== document.querySelector(".slider--steps") && (stepsNext.addEventListener("click", (function(e) {
		e.preventDefault(), steps.classList.remove("steps-animate--prev"), steps.classList.add("steps-animate--next"), sliderSteps.slideNext()
	})), stepsPrev.addEventListener("click", (function(e) {
		e.preventDefault(), steps.classList.remove("steps-animate--next"), steps.classList.add("steps-animate--prev"), sliderSteps.slidePrev()
	})))
}, null !== document.querySelector(".globe__website__image") && ScrollReveal().reveal(".globe__website__image", {
	duration: 500,
	delay: 200,
	interval: 200,
	reset: !1,
	easing: "cubic-bezier(0.6, 1.49, 0.39, 0.99)",
	scale: .5
}, 200), null !== document.querySelector(".globe__website__image") && ScrollReveal().reveal(".globe__website__image", {
	duration: 500,
	delay: 50,
	interval: 50,
	reset: !1,
	easing: "cubic-bezier(0.6, 1.49, 0.39, 0.99)",
	scale: .25
}, 500), null !== document.querySelector(".how__animation__icon__image") && ScrollReveal().reveal(".how__animation__icon__image", {
	duration: 500,
	delay: 100,
	interval: 100,
	reset: !1,
	easing: "cubic-bezier(0.6, 1.49, 0.39, 0.99)",
	scale: .25
}, 500);
var parallax = document.getElementsByClassName("parallax"),
	parallaxAnchors = document.getElementsByClassName("parallax-anchor");
! function() {
	for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(callback) {
		var currTime = (new Date).getTime(),
			timeToCall = Math.max(0, 16 - (currTime - lastTime)),
			id = window.setTimeout((function() {
				callback(currTime + timeToCall)
			}), timeToCall);
		return lastTime = currTime + timeToCall, id
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
		clearTimeout(id)
	})
}();
var getOffsetTop = function(elem) {
		var bodyRect = document.body.getBoundingClientRect();
		return elem.getBoundingClientRect().top - bodyRect.top
	},
	parallaxScroll = function() {
		for (var scrollY = (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) / 18, i = 0; i < parallax.length; i++) {
			var originalOffsetTop = getOffsetTop(parallaxAnchors[i]);
			parallax[i].style.top = 1 * originalOffsetTop + "px", parallax[i].getAttribute("data-parallax-reverse") ? parallax[i].style.transform = "translateY(" + scrollY + "px)" : parallax[i].style.transform = "translateY(-" + scrollY + "px)"
		}
	},
	caseParallax = function(elem, speed, direction) {
		for (var scrolled = window.pageYOffset, windowHeight = window.innerHeight, i = 0; i < elem.length; i++) {
			var cardHeight = elem[i].parentNode.getBoundingClientRect().height,
				originalOffsetTop = getOffsetTop(elem[i].parentNode);
			if (scrolled > originalOffsetTop - windowHeight && scrolled < originalOffsetTop + cardHeight) {
				var transformY, calctTransformY = (scrolled - originalOffsetTop + windowHeight) / (cardHeight + windowHeight) * 100 / speed;
				if (calctTransformY < 30) transformY = "down" === direction ? "translateY(" + calctTransformY + "%)" : "translateY(-" + calctTransformY + "%)", elem[i].style.transform = transformY
			}
		}
	},
	landingCaseBox = document.getElementsByClassName("case__content"),
	landingCaseImage = document.getElementsByClassName("case__image");

function updateParallax() {
	parallax && parallaxScroll()
}
window.onscroll = function() {
	updateParallax()
};
var lastPosition = -1;

function frameLoop() {
	if (lastPosition == window.pageYOffset) return window.requestAnimationFrame(frameLoop), !1;
	lastPosition = window.pageYOffset, updateParallax(), window.requestAnimationFrame(frameLoop)
}
frameLoop(), document.body.className = "", updateParallax();
var sliderServices = new Swiper(".slider--services", {
		speed: 500,
		slidesPerView: "auto"
	}),
	options = {
		url: "https://player.vimeo.com/video/473380514",
		autoplay: !0,
		autopause: !1,
		muted: !0,
		loop: !0,
		color: "19ecc0",
		title: !1,
		byline: !1,
		portrait: !1,
		controls: !1
	},
	optionsLightbox = {
		url: "https://player.vimeo.com/video/473380514",
		muted: !0,
		autopause: !1,
		color: "19ecc0",
		title: !1,
		byline: !1,
		portrait: !1
	},
	player = new Vimeo.Player("showreel-vimeo", options),
	playerLightbox = new Vimeo.Player("showreel-vimeo--lightbox", optionsLightbox),
	playerContainer = document.getElementsByClassName("showreel-container")[0],
	fullScreenButton = document.getElementsByClassName("showreel-button")[0],
	fullScreenBackground = document.getElementsByClassName("showreel-background")[0];
playerLightbox.ready().then((function() {
	var stop = function() {
		playerContainer.classList.remove("showreel--lightbox"), playerLightbox.setVolume(0), playerLightbox.setCurrentTime(0), document.body.classList.remove("overflow-hidden"), player.play()
	};
	fullScreenButton.addEventListener("click", (function() {
		player.pause(), document.body.classList.add("overflow-hidden"), playerContainer.classList.add("showreel--lightbox"), playerLightbox.play(), playerLightbox.setVolume(.3)
	})), playerLightbox.on("ended", stop), fullScreenBackground.addEventListener("click", stop), document.body.addEventListener("keyup", (function(e) {
		"Escape" == e.key && stop()
	}))
}));
