(function (ut) {
  typeof define == "function" && define.amd ? define(ut) : ut()
})(function () {
    "use strict";
    const ut = `@media screen and (max-width: 480px){.tippy-tooltip-loaded,.tippy-tooltip-media{min-width:90vw!important;max-width:90vw!important}}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}#qa{padding-bottom:2em}.amboss-marker{background:inherit;color:inherit;position:relative}.amboss-marker{border-bottom:2px solid #0fcad4}.ambossLog{margin:1em;font-family:monospace;color:#0f0;background:black;min-height:7em;text-align:left}.tippy-arrow{border:initial}.tippy-tooltip.light-theme{color:#26323d!important;box-shadow:0 0 20px 4px #9aa1b126,0 4px 80px -8px #24282f40,0 4px 4px -2px #5b5e6926!important;background-color:#fff!important}.tippy-tooltip.light-theme[x-placement^=top] .tippy-arrow{border-top:8px solid #fff!important;border-right:8px solid transparent!important;border-left:8px solid transparent!important}.tippy-tooltip.light-theme[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #fff!important;border-right:8px solid transparent!important;border-left:8px solid transparent!important}.tippy-tooltip.light-theme[x-placement^=left] .tippy-arrow{border-left:8px solid #fff!important;border-top:8px solid transparent!important;border-bottom:8px solid transparent!important}.tippy-tooltip.light-theme[x-placement^=right] .tippy-arrow{border-right:8px solid #fff!important;border-top:8px solid transparent!important;border-bottom:8px solid transparent!important}.tippy-tooltip.light-theme .tippy-backdrop{background-color:#fff}.tippy-tooltip.light-theme .tippy-roundarrow{fill:#fff}.tippy-tooltip.light-theme[data-animatefill]{background-color:initial}.tippy-tooltip{padding:10px 16px 16px!important}.tippy-arrow:before{content:""!important;display:block!important;width:100px!important;height:15px!important;margin-left:-50px!important;margin-top:-7px!important;background-color:transparent!important}.tippy-tooltip-loaded{min-width:440px;max-width:440px}.tippy-tooltip-media{min-width:550px;max-width:550px}div.tippy-popper,div.tippy-popper div.tippy-tooltip,div.tippy-popper div.tippy-tooltip div.tippy-content{background-color:transparent;border-style:none;height:auto;width:auto;text-decoration:none}
`,
      Re = "#qa";
    class di {
      constructor(t) {
        this._selector = t, this._onReviewerContentChangedCallbacks = []
      }
      observe() {
        const t = new MutationObserver(r => {
            r.forEach(i => {
              i.type === "childList" && i.addedNodes.length > 0 && i.addedNodes[0].tagName === "STYLE" && this._reviewerContentChanged()
            })
          }),
          n = document.querySelector(this._selector);
        t.observe(n, {
          childList: !0
        })
      }
      scheduleOnReviewerContentChanged(t) {
        this._onReviewerContentChangedCallbacks.push(t)
      }
      _reviewerContentChanged() {
        this._onReviewerContentChangedCallbacks.forEach(t => {
          t()
        })
      }
    }
    const Cn = e => typeof e == "string" ? e : Object.entries(e).map(([t, n]) => typeof n == "string" ? `${t}:${n};` : `${t}{${Cn(n)}}`).join(`
`),
      hi = ["0amboss_addon", "1044112126"];

    function mi() {
      const e = document.getElementsByTagName("script");
      for (let t of e)
        for (let n of hi)
          if (t.src.includes(n)) return !0;
      return !1
    }

    function gi() {
      return window.hasOwnProperty("bridgeCommand") || window.hasOwnProperty("pycmd")
    }

    function yi(e) {
      let t = document.getElementById("ambossLog");
      t === null && (t = document.createElement("div"), t.className = "ambossLog", document.querySelector(Re).appendChild(t)), t.innerText = t.innerText + Cn(e)
    }
    const vi = (e, t, n, r, i) => {
      const s = {
          utm_source: "amboss-anki-deck-template-script",
          utm_medium: "anki",
          utm_campaign: "amboss-anki-deck-template-script-beta",
          utm_term: encodeURIComponent(n.toLowerCase()).replace(/%20/g, "+"),
          aid: r,
          uid: i
        },
        p = Object.keys(s).filter(g => s[g]).map(g => `${g}=${s[g]}`).join("&"),
        l = t !== "undefined" ? t : null;
      return `https://next.amboss.com/us/article/${e}${p && "?" + p}${l && "#" + l}`
    };
    /**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.16.1
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    var Fe = typeof window < "u" && typeof document < "u" && typeof navigator < "u",
      xi = function () {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
          if (Fe && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0
      }();

    function wi(e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e()
        }))
      }
    }

    function Ii(e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, xi))
      }
    }
    var bi = Fe && window.Promise,
      Ai = bi ? wi : Ii;

    function Tn(e) {
      var t = {};
      return e && t.toString.call(e) === "[object Function]"
    }

    function we(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r
    }

    function Bt(e) {
      return e.nodeName === "HTML" ? e : e.parentNode || e.host
    }

    function Ue(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body
      }
      var t = we(e),
        n = t.overflow,
        r = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + r) ? e : Ue(Bt(e))
    }

    function Ln(e) {
      return e && e.referenceNode ? e.referenceNode : e
    }
    var Dn = Fe && !!(window.MSInputMethodContext && document.documentMode),
      kn = Fe && /MSIE 10/.test(navigator.userAgent);

    function Ee(e) {
      return e === 11 ? Dn : e === 10 ? kn : Dn || kn
    }

    function Ne(e) {
      if (!e) return document.documentElement;
      for (var t = Ee(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === "BODY" || r === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && we(n, "position") === "static" ? Ne(n) : n
    }

    function Ei(e) {
      var t = e.nodeName;
      return t === "BODY" ? !1 : t === "HTML" || Ne(e.firstElementChild) === e
    }

    function _t(e) {
      return e.parentNode !== null ? _t(e.parentNode) : e
    }

    function lt(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        i = n ? t : e,
        s = document.createRange();
      s.setStart(r, 0), s.setEnd(i, 0);
      var p = s.commonAncestorContainer;
      if (e !== p && t !== p || r.contains(i)) return Ei(p) ? p : Ne(p);
      var l = _t(e);
      return l.host ? lt(l.host, t) : lt(e, _t(t).host)
    }

    function Me(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
        n = t === "top" ? "scrollTop" : "scrollLeft",
        r = e.nodeName;
      if (r === "BODY" || r === "HTML") {
        var i = e.ownerDocument.documentElement,
          s = e.ownerDocument.scrollingElement || i;
        return s[n]
      }
      return e[n]
    }

    function Ni(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Me(t, "top"),
        i = Me(t, "left"),
        s = n ? -1 : 1;
      return e.top += r * s, e.bottom += r * s, e.left += i * s, e.right += i * s, e
    }

    function Sn(e, t) {
      var n = t === "x" ? "Left" : "Top",
        r = n === "Left" ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
    }

    function On(e, t, n, r) {
      return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Ee(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0)
    }

    function jn(e) {
      var t = e.body,
        n = e.documentElement,
        r = Ee(10) && getComputedStyle(n);
      return {
        height: On("Height", t, n, r),
        width: On("Width", t, n, r)
      }
    }
    var Mi = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
      Ci = function () {
        function e(t, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      Ce = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      },
      ee = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      };

    function me(e) {
      return ee({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
      })
    }

    function Rt(e) {
      var t = {};
      try {
        if (Ee(10)) {
          t = e.getBoundingClientRect();
          var n = Me(e, "top"),
            r = Me(e, "left");
          t.top += n, t.left += r, t.bottom += n, t.right += r
        } else t = e.getBoundingClientRect()
      } catch {}
      var i = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
        },
        s = e.nodeName === "HTML" ? jn(e.ownerDocument) : {},
        p = s.width || e.clientWidth || i.width,
        l = s.height || e.clientHeight || i.height,
        g = e.offsetWidth - p,
        x = e.offsetHeight - l;
      if (g || x) {
        var m = we(e);
        g -= Sn(m, "x"), x -= Sn(m, "y"), i.width -= g, i.height -= x
      }
      return me(i)
    }

    function Ft(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Ee(10),
        i = t.nodeName === "HTML",
        s = Rt(e),
        p = Rt(t),
        l = Ue(e),
        g = we(t),
        x = parseFloat(g.borderTopWidth),
        m = parseFloat(g.borderLeftWidth);
      n && i && (p.top = Math.max(p.top, 0), p.left = Math.max(p.left, 0));
      var u = me({
        top: s.top - p.top - x,
        left: s.left - p.left - m,
        width: s.width,
        height: s.height
      });
      if (u.marginTop = 0, u.marginLeft = 0, !r && i) {
        var d = parseFloat(g.marginTop),
          h = parseFloat(g.marginLeft);
        u.top -= x - d, u.bottom -= x - d, u.left -= m - h, u.right -= m - h, u.marginTop = d, u.marginLeft = h
      }
      return (r && !n ? t.contains(l) : t === l && l.nodeName !== "BODY") && (u = Ni(u, t)), u
    }

    function Ti(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Ft(e, n),
        i = Math.max(n.clientWidth, window.innerWidth || 0),
        s = Math.max(n.clientHeight, window.innerHeight || 0),
        p = t ? 0 : Me(n),
        l = t ? 0 : Me(n, "left"),
        g = {
          top: p - r.top + r.marginTop,
          left: l - r.left + r.marginLeft,
          width: i,
          height: s
        };
      return me(g)
    }

    function Bn(e) {
      var t = e.nodeName;
      if (t === "BODY" || t === "HTML") return !1;
      if (we(e, "position") === "fixed") return !0;
      var n = Bt(e);
      return n ? Bn(n) : !1
    }

    function _n(e) {
      if (!e || !e.parentElement || Ee()) return document.documentElement;
      for (var t = e.parentElement; t && we(t, "transform") === "none";) t = t.parentElement;
      return t || document.documentElement
    }

    function Ut(e, t, n, r) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        s = {
          top: 0,
          left: 0
        },
        p = i ? _n(e) : lt(e, Ln(t));
      if (r === "viewport") s = Ti(p, i);
      else {
        var l = void 0;
        r === "scrollParent" ? (l = Ue(Bt(t)), l.nodeName === "BODY" && (l = e.ownerDocument.documentElement)) : r === "window" ? l = e.ownerDocument.documentElement : l = r;
        var g = Ft(l, p, i);
        if (l.nodeName === "HTML" && !Bn(p)) {
          var x = jn(e.ownerDocument),
            m = x.height,
            u = x.width;
          s.top += g.top - g.marginTop, s.bottom = m + g.top, s.left += g.left - g.marginLeft, s.right = u + g.left
        } else s = g
      }
      n = n || 0;
      var d = typeof n == "number";
      return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s
    }

    function Li(e) {
      var t = e.width,
        n = e.height;
      return t * n
    }

    function Rn(e, t, n, r, i) {
      var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf("auto") === -1) return e;
      var p = Ut(n, r, s, i),
        l = {
          top: {
            width: p.width,
            height: t.top - p.top
          },
          right: {
            width: p.right - t.right,
            height: p.height
          },
          bottom: {
            width: p.width,
            height: p.bottom - t.bottom
          },
          left: {
            width: t.left - p.left,
            height: p.height
          }
        },
        g = Object.keys(l).map(function (d) {
          return ee({
            key: d
          }, l[d], {
            area: Li(l[d])
          })
        }).sort(function (d, h) {
          return h.area - d.area
        }),
        x = g.filter(function (d) {
          var h = d.width,
            y = d.height;
          return h >= n.clientWidth && y >= n.clientHeight
        }),
        m = x.length > 0 ? x[0].key : g[0].key,
        u = e.split("-")[1];
      return m + (u ? "-" + u : "")
    }

    function Fn(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = r ? _n(t) : lt(t, Ln(n));
      return Ft(n, i, r)
    }

    function Un(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        s = {
          width: e.offsetWidth + i,
          height: e.offsetHeight + r
        };
      return s
    }

    function pt(e) {
      var t = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n]
      })
    }

    function Pn(e, t, n) {
      n = n.split("-")[0];
      var r = Un(e),
        i = {
          width: r.width,
          height: r.height
        },
        s = ["right", "left"].indexOf(n) !== -1,
        p = s ? "top" : "left",
        l = s ? "left" : "top",
        g = s ? "height" : "width",
        x = s ? "width" : "height";
      return i[p] = t[p] + t[g] / 2 - r[g] / 2, n === l ? i[l] = t[l] - r[x] : i[l] = t[pt(l)], i
    }

    function Pe(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function Di(e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (i) {
        return i[t] === n
      });
      var r = Pe(e, function (i) {
        return i[t] === n
      });
      return e.indexOf(r)
    }

    function zn(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, Di(e, "name", n));
      return r.forEach(function (i) {
        i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var s = i.function || i.fn;
        i.enabled && Tn(s) && (t.offsets.popper = me(t.offsets.popper), t.offsets.reference = me(t.offsets.reference), t = s(t, i))
      }), t
    }

    function ki() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
        };
        e.offsets.reference = Fn(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Rn(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Pn(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = zn(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
      }
    }

    function Yn(e, t) {
      return e.some(function (n) {
        var r = n.name,
          i = n.enabled;
        return i && r === t
      })
    }

    function Pt(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
        var i = t[r],
          s = i ? "" + i + n : e;
        if (typeof document.body.style[s] < "u") return s
      }
      return null
    }

    function Si() {
      return this.state.isDestroyed = !0, Yn(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Pt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function $n(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window
    }

    function Vn(e, t, n, r) {
      var i = e.nodeName === "BODY",
        s = i ? e.ownerDocument.defaultView : e;
      s.addEventListener(t, n, {
        passive: !0
      }), i || Vn(Ue(s.parentNode), t, n, r), r.push(s)
    }

    function Oi(e, t, n, r) {
      n.updateBound = r, $n(e).addEventListener("resize", n.updateBound, {
        passive: !0
      });
      var i = Ue(e);
      return Vn(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }

    function ji() {
      this.state.eventsEnabled || (this.state = Oi(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function Bi(e, t) {
      return $n(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (n) {
        n.removeEventListener("scroll", t.updateBound)
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function _i() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Bi(this.reference, this.state))
    }

    function zt(e) {
      return e !== "" && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Yt(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 && zt(t[n]) && (r = "px"), e.style[n] = t[n] + r
      })
    }

    function Ri(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
      })
    }

    function Fi(e) {
      return Yt(e.instance.popper, e.styles), Ri(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Yt(e.arrowElement, e.arrowStyles), e
    }

    function Ui(e, t, n, r, i) {
      var s = Fn(i, t, e, n.positionFixed),
        p = Rn(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return t.setAttribute("x-placement", p), Yt(t, {
        position: n.positionFixed ? "fixed" : "absolute"
      }), n
    }

    function Pi(e, t) {
      var n = e.offsets,
        r = n.popper,
        i = n.reference,
        s = Math.round,
        p = Math.floor,
        l = function (w) {
          return w
        },
        g = s(i.width),
        x = s(r.width),
        m = ["left", "right"].indexOf(e.placement) !== -1,
        u = e.placement.indexOf("-") !== -1,
        d = g % 2 === x % 2,
        h = g % 2 === 1 && x % 2 === 1,
        y = t ? m || u || d ? s : p : l,
        b = t ? s : l;
      return {
        left: y(h && !u && t ? r.left - 1 : r.left),
        top: b(r.top),
        bottom: b(r.bottom),
        right: y(r.right)
      }
    }
    var zi = Fe && /Firefox/i.test(navigator.userAgent);

    function Yi(e, t) {
      var n = t.x,
        r = t.y,
        i = e.offsets.popper,
        s = Pe(e.instance.modifiers, function (A) {
          return A.name === "applyStyle"
        }).gpuAcceleration;
      s !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
      var p = s !== void 0 ? s : t.gpuAcceleration,
        l = Ne(e.instance.popper),
        g = Rt(l),
        x = {
          position: i.position
        },
        m = Pi(e, window.devicePixelRatio < 2 || !zi),
        u = n === "bottom" ? "top" : "bottom",
        d = r === "right" ? "left" : "right",
        h = Pt("transform"),
        y = void 0,
        b = void 0;
      if (u === "bottom" ? l.nodeName === "HTML" ? b = -l.clientHeight + m.bottom : b = -g.height + m.bottom : b = m.top, d === "right" ? l.nodeName === "HTML" ? y = -l.clientWidth + m.right : y = -g.width + m.right : y = m.left, p && h) x[h] = "translate3d(" + y + "px, " + b + "px, 0)", x[u] = 0, x[d] = 0, x.willChange = "transform";
      else {
        var T = u === "bottom" ? -1 : 1,
          w = d === "right" ? -1 : 1;
        x[u] = b * T, x[d] = y * w, x.willChange = u + ", " + d
      }
      var L = {
        "x-placement": e.placement
      };
      return e.attributes = ee({}, L, e.attributes), e.styles = ee({}, x, e.styles), e.arrowStyles = ee({}, e.offsets.arrow, e.arrowStyles), e
    }

    function Gn(e, t, n) {
      var r = Pe(e, function (l) {
          var g = l.name;
          return g === t
        }),
        i = !!r && e.some(function (l) {
          return l.name === n && l.enabled && l.order < r.order
        });
      if (!i) {
        var s = "`" + t + "`",
          p = "`" + n + "`";
        console.warn(p + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
      }
      return i
    }

    function $i(e, t) {
      var n;
      if (!Gn(e.instance.modifiers, "arrow", "keepTogether")) return e;
      var r = t.element;
      if (typeof r == "string") {
        if (r = e.instance.popper.querySelector(r), !r) return e
      } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
      var i = e.placement.split("-")[0],
        s = e.offsets,
        p = s.popper,
        l = s.reference,
        g = ["left", "right"].indexOf(i) !== -1,
        x = g ? "height" : "width",
        m = g ? "Top" : "Left",
        u = m.toLowerCase(),
        d = g ? "left" : "top",
        h = g ? "bottom" : "right",
        y = Un(r)[x];
      l[h] - y < p[u] && (e.offsets.popper[u] -= p[u] - (l[h] - y)), l[u] + y > p[h] && (e.offsets.popper[u] += l[u] + y - p[h]), e.offsets.popper = me(e.offsets.popper);
      var b = l[u] + l[x] / 2 - y / 2,
        T = we(e.instance.popper),
        w = parseFloat(T["margin" + m]),
        L = parseFloat(T["border" + m + "Width"]),
        A = b - e.offsets.popper[u] - w - L;
      return A = Math.max(Math.min(p[x] - y, A), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, Ce(n, u, Math.round(A)), Ce(n, d, ""), n), e
    }

    function Vi(e) {
      return e === "end" ? "start" : e === "start" ? "end" : e
    }
    var Qn = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      $t = Qn.slice(3);

    function Hn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = $t.indexOf(e),
        r = $t.slice(n + 1).concat($t.slice(0, n));
      return t ? r.reverse() : r
    }
    var Vt = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
    };

    function Gi(e, t) {
      if (Yn(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement) return e;
      var n = Ut(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
        r = e.placement.split("-")[0],
        i = pt(r),
        s = e.placement.split("-")[1] || "",
        p = [];
      switch (t.behavior) {
        case Vt.FLIP:
          p = [r, i];
          break;
        case Vt.CLOCKWISE:
          p = Hn(r);
          break;
        case Vt.COUNTERCLOCKWISE:
          p = Hn(r, !0);
          break;
        default:
          p = t.behavior
      }
      return p.forEach(function (l, g) {
        if (r !== l || p.length === g + 1) return e;
        r = e.placement.split("-")[0], i = pt(r);
        var x = e.offsets.popper,
          m = e.offsets.reference,
          u = Math.floor,
          d = r === "left" && u(x.right) > u(m.left) || r === "right" && u(x.left) < u(m.right) || r === "top" && u(x.bottom) > u(m.top) || r === "bottom" && u(x.top) < u(m.bottom),
          h = u(x.left) < u(n.left),
          y = u(x.right) > u(n.right),
          b = u(x.top) < u(n.top),
          T = u(x.bottom) > u(n.bottom),
          w = r === "left" && h || r === "right" && y || r === "top" && b || r === "bottom" && T,
          L = ["top", "bottom"].indexOf(r) !== -1,
          A = !!t.flipVariations && (L && s === "start" && h || L && s === "end" && y || !L && s === "start" && b || !L && s === "end" && T),
          D = !!t.flipVariationsByContent && (L && s === "start" && y || L && s === "end" && h || !L && s === "start" && T || !L && s === "end" && b),
          S = A || D;
        (d || w || S) && (e.flipped = !0, (d || w) && (r = p[g + 1]), S && (s = Vi(s)), e.placement = r + (s ? "-" + s : ""), e.offsets.popper = ee({}, e.offsets.popper, Pn(e.instance.popper, e.offsets.reference, e.placement)), e = zn(e.instance.modifiers, e, "flip"))
      }), e
    }

    function Qi(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        i = e.placement.split("-")[0],
        s = Math.floor,
        p = ["top", "bottom"].indexOf(i) !== -1,
        l = p ? "right" : "bottom",
        g = p ? "left" : "top",
        x = p ? "width" : "height";
      return n[l] < s(r[g]) && (e.offsets.popper[g] = s(r[g]) - n[x]), n[g] > s(r[l]) && (e.offsets.popper[g] = s(r[l])), e
    }

    function Hi(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        s = +i[1],
        p = i[2];
      if (!s) return e;
      if (p.indexOf("%") === 0) {
        var l = void 0;
        switch (p) {
          case "%p":
            l = n;
            break;
          case "%":
          case "%r":
          default:
            l = r
        }
        var g = me(l);
        return g[t] / 100 * s
      } else if (p === "vh" || p === "vw") {
        var x = void 0;
        return p === "vh" ? x = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : x = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), x / 100 * s
      } else return s
    }

    function Wi(e, t, n, r) {
      var i = [0, 0],
        s = ["right", "left"].indexOf(r) !== -1,
        p = e.split(/(\+|\-)/).map(function (m) {
          return m.trim()
        }),
        l = p.indexOf(Pe(p, function (m) {
          return m.search(/,|\s/) !== -1
        }));
      p[l] && p[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var g = /\s*,\s*|\s+/,
        x = l !== -1 ? [p.slice(0, l).concat([p[l].split(g)[0]]), [p[l].split(g)[1]].concat(p.slice(l + 1))] : [p];
      return x = x.map(function (m, u) {
        var d = (u === 1 ? !s : s) ? "height" : "width",
          h = !1;
        return m.reduce(function (y, b) {
          return y[y.length - 1] === "" && ["+", "-"].indexOf(b) !== -1 ? (y[y.length - 1] = b, h = !0, y) : h ? (y[y.length - 1] += b, h = !1, y) : y.concat(b)
        }, []).map(function (y) {
          return Hi(y, d, t, n)
        })
      }), x.forEach(function (m, u) {
        m.forEach(function (d, h) {
          zt(d) && (i[u] += d * (m[h - 1] === "-" ? -1 : 1))
        })
      }), i
    }

    function Ji(e, t) {
      var n = t.offset,
        r = e.placement,
        i = e.offsets,
        s = i.popper,
        p = i.reference,
        l = r.split("-")[0],
        g = void 0;
      return zt(+n) ? g = [+n, 0] : g = Wi(n, s, p, l), l === "left" ? (s.top += g[0], s.left -= g[1]) : l === "right" ? (s.top += g[0], s.left += g[1]) : l === "top" ? (s.left += g[0], s.top -= g[1]) : l === "bottom" && (s.left += g[0], s.top += g[1]), e.popper = s, e
    }

    function qi(e, t) {
      var n = t.boundariesElement || Ne(e.instance.popper);
      e.instance.reference === n && (n = Ne(n));
      var r = Pt("transform"),
        i = e.instance.popper.style,
        s = i.top,
        p = i.left,
        l = i[r];
      i.top = "", i.left = "", i[r] = "";
      var g = Ut(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      i.top = s, i.left = p, i[r] = l, t.boundaries = g;
      var x = t.priority,
        m = e.offsets.popper,
        u = {
          primary: function (h) {
            var y = m[h];
            return m[h] < g[h] && !t.escapeWithReference && (y = Math.max(m[h], g[h])), Ce({}, h, y)
          },
          secondary: function (h) {
            var y = h === "right" ? "left" : "top",
              b = m[y];
            return m[h] > g[h] && !t.escapeWithReference && (b = Math.min(m[y], g[h] - (h === "right" ? m.width : m.height))), Ce({}, y, b)
          }
        };
      return x.forEach(function (d) {
        var h = ["left", "top"].indexOf(d) !== -1 ? "primary" : "secondary";
        m = ee({}, m, u[h](d))
      }), e.offsets.popper = m, e
    }

    function Xi(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = t.split("-")[1];
      if (r) {
        var i = e.offsets,
          s = i.reference,
          p = i.popper,
          l = ["bottom", "top"].indexOf(n) !== -1,
          g = l ? "left" : "top",
          x = l ? "width" : "height",
          m = {
            start: Ce({}, g, s[g]),
            end: Ce({}, g, s[g] + s[x] - p[x])
          };
        e.offsets.popper = ee({}, p, m[r])
      }
      return e
    }

    function Zi(e) {
      if (!Gn(e.instance.modifiers, "hide", "preventOverflow")) return e;
      var t = e.offsets.reference,
        n = Pe(e.instance.modifiers, function (r) {
          return r.name === "preventOverflow"
        }).boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e;
        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
      } else {
        if (e.hide === !1) return e;
        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
      }
      return e
    }

    function Ki(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = e.offsets,
        i = r.popper,
        s = r.reference,
        p = ["left", "right"].indexOf(n) !== -1,
        l = ["top", "left"].indexOf(n) === -1;
      return i[p ? "left" : "top"] = s[n] - (l ? i[p ? "width" : "height"] : 0), e.placement = pt(t), e.offsets.popper = me(i), e
    }
    var eo = {
        shift: {
          order: 100,
          enabled: !0,
          fn: Xi
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: Ji,
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: qi,
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent"
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: Qi
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: $i,
          element: "[x-arrow]"
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: Gi,
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: Ki
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: Zi
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: Yi,
          gpuAcceleration: !0,
          x: "bottom",
          y: "right"
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: Fi,
          onLoad: Ui,
          gpuAcceleration: void 0
        }
      },
      to = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: eo
      },
      ft = function () {
        function e(t, n) {
          var r = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          Mi(this, e), this.scheduleUpdate = function () {
            return requestAnimationFrame(r.update)
          }, this.update = Ai(this.update.bind(this)), this.options = ee({}, e.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
          }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ee({}, e.Defaults.modifiers, i.modifiers)).forEach(function (p) {
            r.options.modifiers[p] = ee({}, e.Defaults.modifiers[p] || {}, i.modifiers ? i.modifiers[p] : {})
          }), this.modifiers = Object.keys(this.options.modifiers).map(function (p) {
            return ee({
              name: p
            }, r.options.modifiers[p])
          }).sort(function (p, l) {
            return p.order - l.order
          }), this.modifiers.forEach(function (p) {
            p.enabled && Tn(p.onLoad) && p.onLoad(r.reference, r.popper, r.options, p, r.state)
          }), this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), this.state.eventsEnabled = s
        }
        return Ci(e, [{
          key: "update",
          value: function () {
            return ki.call(this)
          }
        }, {
          key: "destroy",
          value: function () {
            return Si.call(this)
          }
        }, {
          key: "enableEventListeners",
          value: function () {
            return ji.call(this)
          }
        }, {
          key: "disableEventListeners",
          value: function () {
            return _i.call(this)
          }
        }]), e
      }();
    ft.Utils = (typeof window < "u" ? window : global).PopperUtils, ft.placements = Qn, ft.Defaults = to;
    const no = ft;
    var ro = '.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}';

    function q() {
      return q = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, q.apply(this, arguments)
    }
    var io = "4.3.5",
      ze = typeof window < "u" && typeof document < "u",
      Wn = ze ? navigator.userAgent : "",
      Jn = /MSIE |Trident\//.test(Wn),
      qn = /UCBrowser\//.test(Wn),
      Xn = ze && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
      se = {
        a11y: !0,
        allowHTML: !0,
        animateFill: !0,
        animation: "shift-away",
        appendTo: function () {
          return document.body
        },
        aria: "describedby",
        arrow: !1,
        arrowType: "sharp",
        boundary: "scrollParent",
        content: "",
        delay: 0,
        distance: 10,
        duration: [325, 275],
        flip: !0,
        flipBehavior: "flip",
        flipOnUpdate: !1,
        followCursor: !1,
        hideOnClick: !0,
        ignoreAttributes: !1,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        maxWidth: 350,
        multiple: !1,
        offset: 0,
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        placement: "top",
        popperOptions: {},
        role: "tooltip",
        showOnInit: !1,
        size: "regular",
        sticky: !1,
        target: "",
        theme: "dark",
        touch: !0,
        touchHold: !1,
        trigger: "mouseenter focus",
        triggerTarget: null,
        updateDuration: 0,
        wait: null,
        zIndex: 9999
      },
      oo = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"],
      Ye = ze ? Element.prototype : {},
      Gt = Ye.matches || Ye.matchesSelector || Ye.webkitMatchesSelector || Ye.mozMatchesSelector || Ye.msMatchesSelector;

    function $e(e) {
      return [].slice.call(e)
    }

    function dt(e, t) {
      return Qt(e, function (n) {
        return Gt.call(n, t)
      })
    }

    function Qt(e, t) {
      for (; e;) {
        if (t(e)) return e;
        e = e.parentElement
      }
      return null
    }
    var Ht = {
        passive: !0
      },
      Wt = 4,
      Jt = "x-placement",
      qt = "x-out-of-boundaries",
      Zn = "tippy-iOS",
      Kn = "tippy-active",
      er = "tippy-popper",
      tr = "tippy-tooltip",
      nr = "tippy-content",
      rr = "tippy-backdrop",
      ir = "tippy-arrow",
      or = "tippy-roundarrow",
      Xt = ".".concat(er),
      ao = ".".concat(tr),
      so = ".".concat(nr),
      co = ".".concat(rr),
      uo = ".".concat(ir),
      lo = ".".concat(or),
      ge = !1;

    function po() {
      ge || (ge = !0, Xn && document.body.classList.add(Zn), window.performance && document.addEventListener("mousemove", sr))
    }
    var ar = 0;

    function sr() {
      var e = performance.now();
      e - ar < 20 && (ge = !1, document.removeEventListener("mousemove", sr), Xn || document.body.classList.remove(Zn)), ar = e
    }

    function fo() {
      var e = document,
        t = e.activeElement;
      t && t.blur && t._tippy && t.blur()
    }

    function ho() {
      document.addEventListener("touchstart", po, Ht), window.addEventListener("blur", fo)
    }
    var mo = Object.keys(se);

    function go(e) {
      return mo.reduce(function (t, n) {
        var r = (e.getAttribute("data-tippy-".concat(n)) || "").trim();
        if (!r) return t;
        if (n === "content") t[n] = r;
        else try {
          t[n] = JSON.parse(r)
        } catch {
          t[n] = r
        }
        return t
      }, {})
    }

    function yo(e) {
      var t = {
        isVirtual: !0,
        attributes: e.attributes || {},
        contains: function () {},
        setAttribute: function (i, s) {
          e.attributes[i] = s
        },
        getAttribute: function (i) {
          return e.attributes[i]
        },
        removeAttribute: function (i) {
          delete e.attributes[i]
        },
        hasAttribute: function (i) {
          return i in e.attributes
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        classList: {
          classNames: {},
          add: function (i) {
            e.classList.classNames[i] = !0
          },
          remove: function (i) {
            delete e.classList.classNames[i]
          },
          contains: function (i) {
            return i in e.classList.classNames
          }
        }
      };
      for (var n in t) e[n] = t[n]
    }

    function vo(e) {
      return {}.toString.call(e) === "[object Object]" && !e.addEventListener
    }

    function xo(e) {
      return !!e._tippy && !Gt.call(e, Xt)
    }

    function ht(e, t) {
      return {}.hasOwnProperty.call(e, t)
    }

    function wo(e) {
      if (ur(e)) return [e];
      if (e instanceof NodeList) return $e(e);
      if (Array.isArray(e)) return e;
      try {
        return $e(document.querySelectorAll(e))
      } catch {
        return []
      }
    }

    function mt(e, t, n) {
      if (Array.isArray(e)) {
        var r = e[t];
        return r == null ? n : r
      }
      return e
    }

    function cr(e, t) {
      if (t === 0) return e;
      var n;
      return function (r) {
        clearTimeout(n), n = setTimeout(function () {
          e(r)
        }, t)
      }
    }

    function gt(e, t) {
      return e && e.modifiers && e.modifiers[t]
    }

    function Zt(e, t) {
      return e.indexOf(t) > -1
    }

    function Ve(e) {
      return e instanceof Element
    }

    function ur(e) {
      return !!(e && ht(e, "isVirtual")) || Ve(e)
    }

    function lr() {
      return "innerHTML"
    }

    function Kt(e, t) {
      return typeof e == "function" ? e.apply(null, t) : e
    }

    function pr(e, t) {
      e.filter(function (n) {
        return n.name === "flip"
      })[0].enabled = t
    }

    function Io(e) {
      return Ve(e) ? Gt.call(e, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !e.hasAttribute("disabled") : !0
    }

    function Ge() {
      return document.createElement("div")
    }

    function Qe(e, t) {
      e.forEach(function (n) {
        n && (n.style.transitionDuration = "".concat(t, "ms"))
      })
    }

    function fr(e, t) {
      e.forEach(function (n) {
        n && n.setAttribute("data-state", t)
      })
    }

    function dr(e, t) {
      var n = q({}, t, {
        content: Kt(t.content, [e])
      }, t.ignoreAttributes ? {} : go(e));
      return (n.arrow || qn) && (n.animateFill = !1), n
    }

    function hr(e, t) {
      Object.keys(e).forEach(function (n) {
        if (!ht(t, n)) throw new Error("[tippy]: `".concat(n, "` is not a valid option"))
      })
    }

    function mr(e, t) {
      e[lr()] = Ve(t) ? t[lr()] : t
    }

    function gr(e, t) {
      if (Ve(t.content)) mr(e, ""), e.appendChild(t.content);
      else if (typeof t.content != "function") {
        var n = t.allowHTML ? "innerHTML" : "textContent";
        e[n] = t.content
      }
    }

    function en(e) {
      return {
        tooltip: e.querySelector(ao),
        backdrop: e.querySelector(co),
        content: e.querySelector(so),
        arrow: e.querySelector(uo) || e.querySelector(lo)
      }
    }

    function yr(e) {
      e.setAttribute("data-inertia", "")
    }

    function bo(e) {
      e.removeAttribute("data-inertia")
    }

    function tn(e) {
      var t = Ge();
      return e === "round" ? (t.className = or, mr(t, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>')) : t.className = ir, t
    }

    function vr() {
      var e = Ge();
      return e.className = rr, e.setAttribute("data-state", "hidden"), e
    }

    function xr(e, t) {
      e.setAttribute("tabindex", "-1"), t.setAttribute("data-interactive", "")
    }

    function Ao(e, t) {
      e.removeAttribute("tabindex"), t.removeAttribute("data-interactive")
    }

    function nn(e, t, n) {
      var r = qn && document.body.style.webkitTransition !== void 0 ? "webkitTransitionEnd" : "transitionend";
      e[t + "EventListener"](r, n)
    }

    function rn(e) {
      var t = e.getAttribute(Jt);
      return t ? t.split("-")[0] : ""
    }

    function Eo(e) {
      e.offsetHeight
    }

    function on(e, t, n) {
      n.split(" ").forEach(function (r) {
        e.classList[t](r + "-theme")
      })
    }

    function No(e, t) {
      var n = Ge();
      n.className = er, n.id = "tippy-".concat(e), n.style.zIndex = "" + t.zIndex, n.style.position = "absolute", n.style.top = "0", n.style.left = "0", t.role && n.setAttribute("role", t.role);
      var r = Ge();
      r.className = tr, r.style.maxWidth = t.maxWidth + (typeof t.maxWidth == "number" ? "px" : ""), r.setAttribute("data-size", t.size), r.setAttribute("data-animation", t.animation), r.setAttribute("data-state", "hidden"), on(r, "add", t.theme);
      var i = Ge();
      return i.className = nr, i.setAttribute("data-state", "hidden"), t.interactive && xr(n, r), t.arrow && r.appendChild(tn(t.arrowType)), t.animateFill && (r.appendChild(vr()), r.setAttribute("data-animatefill", "")), t.inertia && yr(r), gr(i, t), r.appendChild(i), n.appendChild(r), n
    }

    function Mo(e, t, n) {
      var r = en(e),
        i = r.tooltip,
        s = r.content,
        p = r.backdrop,
        l = r.arrow;
      e.style.zIndex = "" + n.zIndex, i.setAttribute("data-size", n.size), i.setAttribute("data-animation", n.animation), i.style.maxWidth = n.maxWidth + (typeof n.maxWidth == "number" ? "px" : ""), n.role ? e.setAttribute("role", n.role) : e.removeAttribute("role"), t.content !== n.content && gr(s, n), !t.animateFill && n.animateFill ? (i.appendChild(vr()), i.setAttribute("data-animatefill", "")) : t.animateFill && !n.animateFill && (i.removeChild(p), i.removeAttribute("data-animatefill")), !t.arrow && n.arrow ? i.appendChild(tn(n.arrowType)) : t.arrow && !n.arrow && i.removeChild(l), t.arrow && n.arrow && t.arrowType !== n.arrowType && i.replaceChild(tn(n.arrowType), l), !t.interactive && n.interactive ? xr(e, i) : t.interactive && !n.interactive && Ao(e, i), !t.inertia && n.inertia ? yr(i) : t.inertia && !n.inertia && bo(i), t.theme !== n.theme && (on(i, "remove", t.theme), on(i, "add", n.theme))
    }

    function Co() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.exclude,
        n = e.duration;
      $e(document.querySelectorAll(Xt)).forEach(function (r) {
        var i = r._tippy;
        if (i) {
          var s = !1;
          t && (s = xo(t) ? i.reference === t : r === t.popper), s || i.hide(n)
        }
      })
    }

    function To(e, t, n, r) {
      if (!e) return !0;
      var i = n.clientX,
        s = n.clientY,
        p = r.interactiveBorder,
        l = r.distance,
        g = t.top - s > (e === "top" ? p + l : p),
        x = s - t.bottom > (e === "bottom" ? p + l : p),
        m = t.left - i > (e === "left" ? p + l : p),
        u = i - t.right > (e === "right" ? p + l : p);
      return g || x || m || u
    }

    function Lo(e) {
      return -(e - 10) + "px"
    }
    var Do = 1,
      yt = [];

    function wr(e, t) {
      var n = dr(e, t);
      if (!n.multiple && e._tippy) return null;
      var r, i, s, p, l, g = !1,
        x = !1,
        m, u = !1,
        d = !1,
        h, y, b = [],
        T, w = cr(it, n.interactiveDebounce),
        L = Do++,
        A = No(L, n),
        D = en(A),
        S = null,
        F = {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1
        },
        I = {
          id: L,
          reference: e,
          popper: A,
          popperChildren: D,
          popperInstance: S,
          props: n,
          state: F,
          clearDelayTimeouts: Be,
          set: ct,
          setContent: _e,
          show: K,
          hide: he,
          enable: st,
          disable: Nn,
          destroy: Mn
        };
      return e._tippy = I, A._tippy = I, ue(), n.lazy || Ae(), n.showOnInit && pe(), n.a11y && !n.target && !Io(V()) && V().setAttribute("tabindex", "0"), A.addEventListener("mouseenter", function (M) {
        I.props.interactive && I.state.isVisible && r === "mouseenter" && pe(M, !0)
      }), A.addEventListener("mouseleave", function () {
        I.props.interactive && r === "mouseenter" && document.addEventListener("mousemove", w)
      }), I;

      function Y() {
        document.removeEventListener("mousemove", H)
      }

      function Q() {
        document.body.removeEventListener("mouseleave", de), document.removeEventListener("mousemove", w), yt = yt.filter(function (M) {
          return M !== w
        })
      }

      function V() {
        return I.props.triggerTarget || e
      }

      function ae() {
        document.addEventListener("click", jt, !0)
      }

      function ve() {
        document.removeEventListener("click", jt, !0)
      }

      function be() {
        return [I.popperChildren.tooltip, I.popperChildren.backdrop, I.popperChildren.content]
      }

      function X() {
        var M = I.props.followCursor;
        return M && r !== "focus" || ge && M === "initial"
      }

      function fe() {
        Qe([A], Jn ? 0 : I.props.updateDuration);
        var M = e.getBoundingClientRect();

        function j() {
          var c = e.getBoundingClientRect();
          (M.top !== c.top || M.right !== c.right || M.bottom !== c.bottom || M.left !== c.left) && I.popperInstance.scheduleUpdate(), M = c, I.state.isMounted && requestAnimationFrame(j)
        }
        j()
      }

      function ke(M, j) {
        Oe(M, function () {
          !I.state.isVisible && A.parentNode && A.parentNode.contains(A) && j()
        })
      }

      function Se(M, j) {
        Oe(M, j)
      }

      function Oe(M, j) {
        var c = I.popperChildren.tooltip;

        function o(a) {
          a.target === c && (nn(c, "remove", o), j())
        }
        if (M === 0) return j();
        nn(c, "remove", y), nn(c, "add", o), y = o
      }

      function Z(M, j) {
        var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        V().addEventListener(M, j, c), b.push({
          eventType: M,
          handler: j,
          options: c
        })
      }

      function ue() {
        I.props.touchHold && !I.props.target && (Z("touchstart", rt, Ht), Z("touchend", ot, Ht)), I.props.trigger.trim().split(" ").forEach(function (M) {
          if (M !== "manual")
            if (I.props.target) switch (M) {
              case "mouseenter":
                Z("mouseover", le), Z("mouseout", je);
                break;
              case "focus":
                Z("focusin", le), Z("focusout", je);
                break;
              case "click":
                Z(M, le);
                break
            } else switch (Z(M, rt), M) {
              case "mouseenter":
                Z("mouseleave", ot);
                break;
              case "focus":
                Z(Jn ? "focusout" : "blur", St);
                break
            }
        })
      }

      function $() {
        b.forEach(function (M) {
          var j = M.eventType,
            c = M.handler,
            o = M.options;
          V().removeEventListener(j, c, o)
        }), b = []
      }

      function H(M) {
        var j = i = M,
          c = j.clientX,
          o = j.clientY;
        if (T) {
          var a = Qt(M.target, function (fi) {
              return fi === e
            }),
            f = e.getBoundingClientRect(),
            v = I.props.followCursor,
            E = v === "horizontal",
            N = v === "vertical",
            B = Zt(["top", "bottom"], rn(A)),
            _ = A.getAttribute(Jt),
            U = _ ? !!_.split("-")[1] : !1,
            P = B ? A.offsetWidth : A.offsetHeight,
            z = P / 2,
            li = B ? 0 : U ? P : z,
            pi = B ? U ? P : z : 0;
          (a || !I.props.interactive) && (I.popperInstance.reference = q({}, I.popperInstance.reference, {
            referenceNode: e,
            clientWidth: 0,
            clientHeight: 0,
            getBoundingClientRect: function () {
              return {
                width: B ? P : 0,
                height: B ? 0 : P,
                top: (E ? f.top : o) - li,
                bottom: (E ? f.bottom : o) + li,
                left: (N ? f.left : c) - pi,
                right: (N ? f.right : c) + pi
              }
            }
          }), I.popperInstance.update()), v === "initial" && I.state.isVisible && Y()
        }
      }

      function kt(M) {
        if (M) {
          var j = dt(M.target, I.props.target);
          j && !j._tippy && wr(j, q({}, I.props, {
            content: Kt(t.content, [j]),
            appendTo: t.appendTo,
            target: "",
            showOnInit: !0
          }))
        }
      }

      function rt(M) {
        !I.state.isEnabled || at(M) || (I.state.isVisible || (r = M.type, M instanceof MouseEvent && (i = M, yt.forEach(function (j) {
          return j(M)
        }))), M.type === "click" && I.props.hideOnClick !== !1 && I.state.isVisible ? de() : pe(M))
      }

      function it(M) {
        var j = dt(M.target, Xt) === A,
          c = Qt(M.target, function (o) {
            return o === e
          });
        j || c || To(rn(A), A.getBoundingClientRect(), M, I.props) && (Q(), de())
      }

      function ot(M) {
        if (!at(M)) {
          if (I.props.interactive) {
            document.body.addEventListener("mouseleave", de), document.addEventListener("mousemove", w), yt.push(w);
            return
          }
          de()
        }
      }

      function St(M) {
        M.target === V() && (I.props.interactive && M.relatedTarget && A.contains(M.relatedTarget) || de())
      }

      function le(M) {
        dt(M.target, I.props.target) && pe(M)
      }

      function je(M) {
        dt(M.target, I.props.target) && de()
      }

      function at(M) {
        var j = "ontouchstart" in window,
          c = Zt(M.type, "touch"),
          o = I.props.touchHold;
        return j && ge && o && !c || ge && !o && c
      }

      function Ot() {
        !d && h && (d = !0, Eo(A), h())
      }

      function Ae() {
        var M = I.props.popperOptions,
          j = I.popperChildren,
          c = j.tooltip,
          o = j.arrow,
          a = gt(M, "preventOverflow");

        function f(E) {
          I.props.flip && !I.props.flipOnUpdate && (E.flipped && (I.popperInstance.options.placement = E.placement), pr(I.popperInstance.modifiers, !1)), c.setAttribute(Jt, E.placement), E.attributes[qt] !== !1 ? c.setAttribute(qt, "") : c.removeAttribute(qt), m && m !== E.placement && u && (c.style.transition = "none", requestAnimationFrame(function () {
            c.style.transition = ""
          })), m = E.placement, u = I.state.isVisible;
          var N = rn(A),
            B = c.style;
          B.top = B.bottom = B.left = B.right = "", B[N] = Lo(I.props.distance);
          var _ = a && a.padding !== void 0 ? a.padding : Wt,
            U = typeof _ == "number",
            P = q({
              top: U ? _ : _.top,
              bottom: U ? _ : _.bottom,
              left: U ? _ : _.left,
              right: U ? _ : _.right
            }, !U && _);
          P[N] = U ? _ + I.props.distance : (_[N] || 0) + I.props.distance, I.popperInstance.modifiers.filter(function (z) {
            return z.name === "preventOverflow"
          })[0].padding = P, T = P
        }
        var v = q({
          eventsEnabled: !1,
          placement: I.props.placement
        }, M, {
          modifiers: q({}, M ? M.modifiers : {}, {
            preventOverflow: q({
              boundariesElement: I.props.boundary,
              padding: Wt
            }, a),
            arrow: q({
              element: o,
              enabled: !!o
            }, gt(M, "arrow")),
            flip: q({
              enabled: I.props.flip,
              padding: I.props.distance + Wt,
              behavior: I.props.flipBehavior
            }, gt(M, "flip")),
            offset: q({
              offset: I.props.offset
            }, gt(M, "offset"))
          }),
          onCreate: function (N) {
            f(N), Ot(), M && M.onCreate && M.onCreate(N)
          },
          onUpdate: function (N) {
            f(N), Ot(), M && M.onUpdate && M.onUpdate(N)
          }
        });
        I.popperInstance = new no(e, A, v)
      }

      function xe() {
        d = !1;
        var M = X();
        I.popperInstance ? (pr(I.popperInstance.modifiers, I.props.flip), M || (I.popperInstance.reference = e, I.popperInstance.enableEventListeners()), I.popperInstance.scheduleUpdate()) : (Ae(), M || I.popperInstance.enableEventListeners());
        var j = I.props.appendTo,
          c = j === "parent" ? e.parentNode : Kt(j, [e]);
        c.contains(A) || (c.appendChild(A), I.props.onMount(I), I.state.isMounted = !0)
      }

      function pe(M, j) {
        if (Be(), !I.state.isVisible) {
          if (I.props.target) return kt(M);
          if (g = !0, M && !j && I.props.onTrigger(I, M), I.props.wait) return I.props.wait(I, M);
          X() && !I.state.isMounted && (I.popperInstance || Ae(), document.addEventListener("mousemove", H)), ae();
          var c = mt(I.props.delay, 0, se.delay);
          c ? s = setTimeout(function () {
            K()
          }, c) : K()
        }
      }

      function de() {
        if (Be(), !I.state.isVisible) {
          Y(), ve();
          return
        }
        g = !1;
        var M = mt(I.props.delay, 1, se.delay);
        M ? p = setTimeout(function () {
          I.state.isVisible && he()
        }, M) : l = requestAnimationFrame(function () {
          he()
        })
      }

      function jt(M) {
        I.props.interactive && A.contains(M.target) || V().contains(M.target) && (ge || I.state.isVisible && Zt(I.props.trigger, "click")) || I.props.hideOnClick === !0 && (Be(), he())
      }

      function st() {
        I.state.isEnabled = !0
      }

      function Nn() {
        I.state.isEnabled = !1
      }

      function Be() {
        clearTimeout(s), clearTimeout(p), cancelAnimationFrame(l)
      }

      function ct(M) {
        M = M || {}, hr(M, se), $();
        var j = I.props,
          c = dr(e, q({}, I.props, {}, M, {
            ignoreAttributes: !0
          }));
        c.ignoreAttributes = ht(M, "ignoreAttributes") ? M.ignoreAttributes || !1 : j.ignoreAttributes, I.props = c, ue(), Q(), w = cr(it, c.interactiveDebounce), Mo(A, j, c), I.popperChildren = en(A), I.popperInstance && (oo.some(function (o) {
          return ht(M, o) && M[o] !== j[o]
        }) ? (I.popperInstance.destroy(), Ae(), I.state.isVisible && I.popperInstance.enableEventListeners(), I.props.followCursor && i && H(i)) : I.popperInstance.update())
      }

      function _e(M) {
        ct({
          content: M
        })
      }

      function K() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mt(I.props.duration, 0, se.duration[1]);
        if (!(I.state.isDestroyed || !I.state.isEnabled || ge && !I.props.touch) && !V().hasAttribute("disabled") && I.props.onShow(I) !== !1) {
          ae(), A.style.visibility = "visible", I.state.isVisible = !0, I.props.interactive && V().classList.add(Kn);
          var j = be();
          Qe(j.concat(A), 0), h = function () {
            if (I.state.isVisible) {
              var o = X();
              o && i ? H(i) : o || I.popperInstance.update(), I.popperChildren.backdrop && (I.popperChildren.content.style.transitionDelay = Math.round(M / 12) + "ms"), I.props.sticky && fe(), Qe([A], I.props.updateDuration), Qe(j, M), fr(j, "visible"), Se(M, function () {
                I.props.aria && V().setAttribute("aria-".concat(I.props.aria), A.id), I.props.onShown(I), I.state.isShown = !0
              })
            }
          }, xe()
        }
      }

      function he() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mt(I.props.duration, 1, se.duration[1]);
        if (!(I.state.isDestroyed || !I.state.isEnabled && !x) && !(I.props.onHide(I) === !1 && !x)) {
          ve(), A.style.visibility = "hidden", I.state.isVisible = !1, I.state.isShown = !1, u = !1, I.props.interactive && V().classList.remove(Kn);
          var j = be();
          Qe(j, M), fr(j, "hidden"), ke(M, function () {
            g || Y(), I.props.aria && V().removeAttribute("aria-".concat(I.props.aria)), I.popperInstance.disableEventListeners(), I.popperInstance.options.placement = I.props.placement, A.parentNode.removeChild(A), I.props.onHidden(I), I.state.isMounted = !1
          })
        }
      }

      function Mn(M) {
        if (!I.state.isDestroyed) {
          x = !0, I.state.isMounted && he(0), $(), delete e._tippy;
          var j = I.props.target;
          j && M && Ve(e) && $e(e.querySelectorAll(j)).forEach(function (c) {
            c._tippy && c._tippy.destroy()
          }), I.popperInstance && I.popperInstance.destroy(), x = !1, I.state.isDestroyed = !0
        }
      }
    }

    function ko(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.delay,
        r = n === void 0 ? e[0].props.delay : n,
        i = t.duration,
        s = i === void 0 ? 0 : i,
        p = !1;
      e.forEach(function (d) {
        d._originalProps ? d.set(d._originalProps) : d._originalProps = q({}, d.props)
      });

      function l(d) {
        p = d, u()
      }

      function g(d) {
        d._originalProps.onShow(d), e.forEach(function (h) {
          h.set({
            duration: s
          }), h.state.isVisible && h.hide()
        }), l(!0)
      }

      function x(d) {
        d._originalProps.onHide(d), l(!1)
      }

      function m(d) {
        d._originalProps.onShown(d), d.set({
          duration: d._originalProps.duration
        })
      }

      function u() {
        e.forEach(function (d) {
          d.set({
            onShow: g,
            onShown: m,
            onHide: x,
            delay: p ? [0, Array.isArray(r) ? r[1] : r] : r,
            duration: p ? s : d._originalProps.duration
          })
        })
      }
      u()
    }
    var Ir = !1;

    function ye(e, t) {
      hr(t || {}, se), Ir || (ho(), Ir = !0);
      var n = q({}, se, {}, t);
      vo(e) && yo(e);
      var r = wo(e).reduce(function (i, s) {
        var p = s && wr(s, n);
        return p && i.push(p), i
      }, []);
      return ur(e) ? r[0] : r
    }
    ye.version = io, ye.defaults = se, ye.setDefaults = function (e) {
      Object.keys(e).forEach(function (t) {
        se[t] = e[t]
      })
    }, ye.hideAll = Co, ye.group = ko;

    function So() {
      $e(document.querySelectorAll("[data-tippy]")).forEach(function (e) {
        var t = e.getAttribute("data-tippy");
        t && ye(e, {
          content: t
        })
      })
    }
    ze && setTimeout(So);

    function Oo(e) {
      if (ze) {
        var t = document.createElement("style");
        t.type = "text/css", t.textContent = e, t.setAttribute("data-tippy-stylesheet", "");
        var n = document.head,
          r = n.querySelector("style,link");
        r ? n.insertBefore(t, r) : n.appendChild(t)
      }
    }
    Oo(ro);

    function vt(e, t) {
      if (!Boolean(e)) throw new Error(t)
    }

    function jo(e) {
      return typeof e == "object" && e !== null
    }

    function Bo(e, t) {
      if (!Boolean(e)) throw new Error(t != null ? t : "Unexpected invariant triggered.")
    }
    const _o = /\r\n|[\n\r]/g;

    function an(e, t) {
      let n = 0,
        r = 1;
      for (const i of e.body.matchAll(_o)) {
        if (typeof i.index == "number" || Bo(!1), i.index >= t) break;
        n = i.index + i[0].length, r += 1
      }
      return {
        line: r,
        column: t + 1 - n
      }
    }

    function Ro(e) {
      return br(e.source, an(e.source, e.start))
    }

    function br(e, t) {
      const n = e.locationOffset.column - 1,
        r = "".padStart(n) + e.body,
        i = t.line - 1,
        s = e.locationOffset.line - 1,
        p = t.line + s,
        l = t.line === 1 ? n : 0,
        g = t.column + l,
        x = `${e.name}:${p}:${g}
`,
        m = r.split(/\r\n|[\n\r]/g),
        u = m[i];
      if (u.length > 120) {
        const d = Math.floor(g / 80),
          h = g % 80,
          y = [];
        for (let b = 0; b < u.length; b += 80) y.push(u.slice(b, b + 80));
        return x + Ar([
          [`${p} |`, y[0]], ...y.slice(1, d + 1).map(b => ["|", b]), ["|", "^".padStart(h)],
          ["|", y[d + 1]]
        ])
      }
      return x + Ar([
        [`${p - 1} |`, m[i - 1]],
        [`${p} |`, u],
        ["|", "^".padStart(g)],
        [`${p + 1} |`, m[i + 1]]
      ])
    }

    function Ar(e) {
      const t = e.filter(([r, i]) => i !== void 0),
        n = Math.max(...t.map(([r]) => r.length));
      return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`)
    }

    function Fo(e) {
      const t = e[0];
      return t == null || "kind" in t || "length" in t ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5]
      } : t
    }
    class He extends Error {
      constructor(t, ...n) {
        var r, i, s;
        const {
          nodes: p,
          source: l,
          positions: g,
          path: x,
          originalError: m,
          extensions: u
        } = Fo(n);
        super(t), this.name = "GraphQLError", this.path = x != null ? x : void 0, this.originalError = m != null ? m : void 0, this.nodes = Er(Array.isArray(p) ? p : p ? [p] : void 0);
        const d = Er((r = this.nodes) === null || r === void 0 ? void 0 : r.map(y => y.loc).filter(y => y != null));
        this.source = l != null ? l : d == null || (i = d[0]) === null || i === void 0 ? void 0 : i.source, this.positions = g != null ? g : d == null ? void 0 : d.map(y => y.start), this.locations = g && l ? g.map(y => an(l, y)) : d == null ? void 0 : d.map(y => an(y.source, y.start));
        const h = jo(m == null ? void 0 : m.extensions) ? m == null ? void 0 : m.extensions : void 0;
        this.extensions = (s = u != null ? u : h) !== null && s !== void 0 ? s : Object.create(null), Object.defineProperties(this, {
          message: {
            writable: !0,
            enumerable: !0
          },
          name: {
            enumerable: !1
          },
          nodes: {
            enumerable: !1
          },
          source: {
            enumerable: !1
          },
          positions: {
            enumerable: !1
          },
          originalError: {
            enumerable: !1
          }
        }), m != null && m.stack ? Object.defineProperty(this, "stack", {
          value: m.stack,
          writable: !0,
          configurable: !0
        }) : Error.captureStackTrace ? Error.captureStackTrace(this, He) : Object.defineProperty(this, "stack", {
          value: Error().stack,
          writable: !0,
          configurable: !0
        })
      }
      get[Symbol.toStringTag]() {
        return "GraphQLError"
      }
      toString() {
        let t = this.message;
        if (this.nodes)
          for (const n of this.nodes) n.loc && (t += `

` + Ro(n.loc));
        else if (this.source && this.locations)
          for (const n of this.locations) t += `

` + br(this.source, n);
        return t
      }
      toJSON() {
        const t = {
          message: this.message
        };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t
      }
    }

    function Er(e) {
      return e === void 0 || e.length === 0 ? void 0 : e
    }

    function W(e, t, n) {
      return new He(`Syntax Error: ${n}`, {
        source: e,
        positions: [t]
      })
    }
    class Uo {
      constructor(t, n, r) {
        this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r
      }
      get[Symbol.toStringTag]() {
        return "Location"
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        }
      }
    }
    class Nr {
      constructor(t, n, r, i, s, p) {
        this.kind = t, this.start = n, this.end = r, this.line = i, this.column = s, this.value = p, this.prev = null, this.next = null
      }
      get[Symbol.toStringTag]() {
        return "Token"
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        }
      }
    }
    const Mr = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      },
      Po = new Set(Object.keys(Mr));

    function Cr(e) {
      const t = e == null ? void 0 : e.kind;
      return typeof t == "string" && Po.has(t)
    }
    var Te;
    (function (e) {
      e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
    })(Te || (Te = {}));
    var sn;
    (function (e) {
      e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
    })(sn || (sn = {}));
    var O;
    (function (e) {
      e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
    })(O || (O = {}));

    function cn(e) {
      return e === 9 || e === 32
    }

    function We(e) {
      return e >= 48 && e <= 57
    }

    function Tr(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90
    }

    function Lr(e) {
      return Tr(e) || e === 95
    }

    function zo(e) {
      return Tr(e) || We(e) || e === 95
    }

    function Yo(e) {
      var t;
      let n = Number.MAX_SAFE_INTEGER,
        r = null,
        i = -1;
      for (let p = 0; p < e.length; ++p) {
        var s;
        const l = e[p],
          g = $o(l);
        g !== l.length && (r = (s = r) !== null && s !== void 0 ? s : p, i = p, p !== 0 && g < n && (n = g))
      }
      return e.map((p, l) => l === 0 ? p : p.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1)
    }

    function $o(e) {
      let t = 0;
      for (; t < e.length && cn(e.charCodeAt(t));) ++t;
      return t
    }

    function Vo(e, t) {
      const n = e.replace(/"""/g, '\\"""'),
        r = n.split(/\r\n|[\n\r]/g),
        i = r.length === 1,
        s = r.length > 1 && r.slice(1).every(h => h.length === 0 || cn(h.charCodeAt(0))),
        p = n.endsWith('\\"""'),
        l = e.endsWith('"') && !p,
        g = e.endsWith("\\"),
        x = l || g,
        m = !(t != null && t.minimize) && (!i || e.length > 70 || x || s || p);
      let u = "";
      const d = i && cn(e.charCodeAt(0));
      return (m && !d || s) && (u += `
`), u += n, (m || x) && (u += `
`), '"""' + u + '"""'
    }
    var C;
    (function (e) {
      e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
    })(C || (C = {}));
    class Go {
      constructor(t) {
        const n = new Nr(C.SOF, 0, 0, 0, 0);
        this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0
      }
      get[Symbol.toStringTag]() {
        return "Lexer"
      }
      advance() {
        return this.lastToken = this.token, this.token = this.lookahead()
      }
      lookahead() {
        let t = this.token;
        if (t.kind !== C.EOF)
          do
            if (t.next) t = t.next;
            else {
              const n = Ho(this, t.end);
              t.next = n, n.prev = t, t = n
            } while (t.kind === C.COMMENT);
        return t
      }
    }

    function Qo(e) {
      return e === C.BANG || e === C.DOLLAR || e === C.AMP || e === C.PAREN_L || e === C.PAREN_R || e === C.SPREAD || e === C.COLON || e === C.EQUALS || e === C.AT || e === C.BRACKET_L || e === C.BRACKET_R || e === C.BRACE_L || e === C.PIPE || e === C.BRACE_R
    }

    function Le(e) {
      return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
    }

    function xt(e, t) {
      return Dr(e.charCodeAt(t)) && kr(e.charCodeAt(t + 1))
    }

    function Dr(e) {
      return e >= 55296 && e <= 56319
    }

    function kr(e) {
      return e >= 56320 && e <= 57343
    }

    function Ie(e, t) {
      const n = e.source.body.codePointAt(t);
      if (n === void 0) return C.EOF;
      if (n >= 32 && n <= 126) {
        const r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`
      }
      return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
    }

    function G(e, t, n, r, i) {
      const s = e.line,
        p = 1 + n - e.lineStart;
      return new Nr(t, n, r, s, p, i)
    }

    function Ho(e, t) {
      const n = e.source.body,
        r = n.length;
      let i = t;
      for (; i < r;) {
        const s = n.charCodeAt(i);
        switch (s) {
          case 65279:
          case 9:
          case 32:
          case 44:
            ++i;
            continue;
          case 10:
            ++i, ++e.line, e.lineStart = i;
            continue;
          case 13:
            n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
            continue;
          case 35:
            return Wo(e, i);
          case 33:
            return G(e, C.BANG, i, i + 1);
          case 36:
            return G(e, C.DOLLAR, i, i + 1);
          case 38:
            return G(e, C.AMP, i, i + 1);
          case 40:
            return G(e, C.PAREN_L, i, i + 1);
          case 41:
            return G(e, C.PAREN_R, i, i + 1);
          case 46:
            if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return G(e, C.SPREAD, i, i + 3);
            break;
          case 58:
            return G(e, C.COLON, i, i + 1);
          case 61:
            return G(e, C.EQUALS, i, i + 1);
          case 64:
            return G(e, C.AT, i, i + 1);
          case 91:
            return G(e, C.BRACKET_L, i, i + 1);
          case 93:
            return G(e, C.BRACKET_R, i, i + 1);
          case 123:
            return G(e, C.BRACE_L, i, i + 1);
          case 124:
            return G(e, C.PIPE, i, i + 1);
          case 125:
            return G(e, C.BRACE_R, i, i + 1);
          case 34:
            return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? ea(e, i) : qo(e, i)
        }
        if (We(s) || s === 45) return Jo(e, i, s);
        if (Lr(s)) return ta(e, i);
        throw W(e.source, i, s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Le(s) || xt(n, i) ? `Unexpected character: ${Ie(e, i)}.` : `Invalid character: ${Ie(e, i)}.`)
      }
      return G(e, C.EOF, r, r)
    }

    function Wo(e, t) {
      const n = e.source.body,
        r = n.length;
      let i = t + 1;
      for (; i < r;) {
        const s = n.charCodeAt(i);
        if (s === 10 || s === 13) break;
        if (Le(s)) ++i;
        else if (xt(n, i)) i += 2;
        else break
      }
      return G(e, C.COMMENT, t, i, n.slice(t + 1, i))
    }

    function Jo(e, t, n) {
      const r = e.source.body;
      let i = t,
        s = n,
        p = !1;
      if (s === 45 && (s = r.charCodeAt(++i)), s === 48) {
        if (s = r.charCodeAt(++i), We(s)) throw W(e.source, i, `Invalid number, unexpected digit after 0: ${Ie(e, i)}.`)
      } else i = un(e, i, s), s = r.charCodeAt(i);
      if (s === 46 && (p = !0, s = r.charCodeAt(++i), i = un(e, i, s), s = r.charCodeAt(i)), (s === 69 || s === 101) && (p = !0, s = r.charCodeAt(++i), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), i = un(e, i, s), s = r.charCodeAt(i)), s === 46 || Lr(s)) throw W(e.source, i, `Invalid number, expected digit but got: ${Ie(e, i)}.`);
      return G(e, p ? C.FLOAT : C.INT, t, i, r.slice(t, i))
    }

    function un(e, t, n) {
      if (!We(n)) throw W(e.source, t, `Invalid number, expected digit but got: ${Ie(e, t)}.`);
      const r = e.source.body;
      let i = t + 1;
      for (; We(r.charCodeAt(i));) ++i;
      return i
    }

    function qo(e, t) {
      const n = e.source.body,
        r = n.length;
      let i = t + 1,
        s = i,
        p = "";
      for (; i < r;) {
        const l = n.charCodeAt(i);
        if (l === 34) return p += n.slice(s, i), G(e, C.STRING, t, i + 1, p);
        if (l === 92) {
          p += n.slice(s, i);
          const g = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Xo(e, i) : Zo(e, i) : Ko(e, i);
          p += g.value, i += g.size, s = i;
          continue
        }
        if (l === 10 || l === 13) break;
        if (Le(l)) ++i;
        else if (xt(n, i)) i += 2;
        else throw W(e.source, i, `Invalid character within String: ${Ie(e, i)}.`)
      }
      throw W(e.source, i, "Unterminated string.")
    }

    function Xo(e, t) {
      const n = e.source.body;
      let r = 0,
        i = 3;
      for (; i < 12;) {
        const s = n.charCodeAt(t + i++);
        if (s === 125) {
          if (i < 5 || !Le(r)) break;
          return {
            value: String.fromCodePoint(r),
            size: i
          }
        }
        if (r = r << 4 | Je(s), r < 0) break
      }
      throw W(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`)
    }

    function Zo(e, t) {
      const n = e.source.body,
        r = Sr(n, t + 2);
      if (Le(r)) return {
        value: String.fromCodePoint(r),
        size: 6
      };
      if (Dr(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        const i = Sr(n, t + 8);
        if (kr(i)) return {
          value: String.fromCodePoint(r, i),
          size: 12
        }
      }
      throw W(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
    }

    function Sr(e, t) {
      return Je(e.charCodeAt(t)) << 12 | Je(e.charCodeAt(t + 1)) << 8 | Je(e.charCodeAt(t + 2)) << 4 | Je(e.charCodeAt(t + 3))
    }

    function Je(e) {
      return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
    }

    function Ko(e, t) {
      const n = e.source.body;
      switch (n.charCodeAt(t + 1)) {
        case 34:
          return {
            value: '"', size: 2
          };
        case 92:
          return {
            value: "\\", size: 2
          };
        case 47:
          return {
            value: "/", size: 2
          };
        case 98:
          return {
            value: "\b", size: 2
          };
        case 102:
          return {
            value: "\f", size: 2
          };
        case 110:
          return {
            value: `
`, size: 2
          };
        case 114:
          return {
            value: "\r", size: 2
          };
        case 116:
          return {
            value: "	", size: 2
          }
      }
      throw W(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
    }

    function ea(e, t) {
      const n = e.source.body,
        r = n.length;
      let i = e.lineStart,
        s = t + 3,
        p = s,
        l = "";
      const g = [];
      for (; s < r;) {
        const x = n.charCodeAt(s);
        if (x === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
          l += n.slice(p, s), g.push(l);
          const m = G(e, C.BLOCK_STRING, t, s + 3, Yo(g).join(`
`));
          return e.line += g.length - 1, e.lineStart = i, m
        }
        if (x === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
          l += n.slice(p, s), p = s + 1, s += 4;
          continue
        }
        if (x === 10 || x === 13) {
          l += n.slice(p, s), g.push(l), x === 13 && n.charCodeAt(s + 1) === 10 ? s += 2 : ++s, l = "", p = s, i = s;
          continue
        }
        if (Le(x)) ++s;
        else if (xt(n, s)) s += 2;
        else throw W(e.source, s, `Invalid character within String: ${Ie(e, s)}.`)
      }
      throw W(e.source, s, "Unterminated string.")
    }

    function ta(e, t) {
      const n = e.source.body,
        r = n.length;
      let i = t + 1;
      for (; i < r;) {
        const s = n.charCodeAt(i);
        if (zo(s)) ++i;
        else break
      }
      return G(e, C.NAME, t, i, n.slice(t, i))
    }
    const na = 10,
      Or = 2;

    function jr(e) {
      return wt(e, [])
    }

    function wt(e, t) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(e);
        case "function":
          return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
          return ra(e, t);
        default:
          return String(e)
      }
    }

    function ra(e, t) {
      if (e === null) return "null";
      if (t.includes(e)) return "[Circular]";
      const n = [...t, e];
      if (ia(e)) {
        const r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : wt(r, n)
      } else if (Array.isArray(e)) return aa(e, n);
      return oa(e, n)
    }

    function ia(e) {
      return typeof e.toJSON == "function"
    }

    function oa(e, t) {
      const n = Object.entries(e);
      return n.length === 0 ? "{}" : t.length > Or ? "[" + sa(e) + "]" : "{ " + n.map(([i, s]) => i + ": " + wt(s, t)).join(", ") + " }"
    }

    function aa(e, t) {
      if (e.length === 0) return "[]";
      if (t.length > Or) return "[Array]";
      const n = Math.min(na, e.length),
        r = e.length - n,
        i = [];
      for (let s = 0; s < n; ++s) i.push(wt(e[s], t));
      return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]"
    }

    function sa(e) {
      const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
      if (t === "Object" && typeof e.constructor == "function") {
        const n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n
      }
      return t
    }
    const ca = function (t, n) {
      return t instanceof n
    };
    class Br {
      constructor(t, n = "GraphQL request", r = {
        line: 1,
        column: 1
      }) {
        typeof t == "string" || vt(!1, `Body must be a string. Received: ${jr(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || vt(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || vt(!1, "column in locationOffset is 1-indexed and must be positive.")
      }
      get[Symbol.toStringTag]() {
        return "Source"
      }
    }

    function ua(e) {
      return ca(e, Br)
    }

    function la(e, t) {
      return new pa(e, t).parseDocument()
    }
    class pa {
      constructor(t, n = {}) {
        const r = ua(t) ? t : new Br(t);
        this._lexer = new Go(r), this._options = n, this._tokenCounter = 0
      }
      parseName() {
        const t = this.expectToken(C.NAME);
        return this.node(t, {
          kind: O.NAME,
          value: t.value
        })
      }
      parseDocument() {
        return this.node(this._lexer.token, {
          kind: O.DOCUMENT,
          definitions: this.many(C.SOF, this.parseDefinition, C.EOF)
        })
      }
      parseDefinition() {
        if (this.peek(C.BRACE_L)) return this.parseOperationDefinition();
        const t = this.peekDescription(),
          n = t ? this._lexer.lookahead() : this._lexer.token;
        if (n.kind === C.NAME) {
          switch (n.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition()
          }
          if (t) throw W(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
          switch (n.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "extend":
              return this.parseTypeSystemExtension()
          }
        }
        throw this.unexpected(n)
      }
      parseOperationDefinition() {
        const t = this._lexer.token;
        if (this.peek(C.BRACE_L)) return this.node(t, {
          kind: O.OPERATION_DEFINITION,
          operation: Te.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
        const n = this.parseOperationType();
        let r;
        return this.peek(C.NAME) && (r = this.parseName()), this.node(t, {
          kind: O.OPERATION_DEFINITION,
          operation: n,
          name: r,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        })
      }
      parseOperationType() {
        const t = this.expectToken(C.NAME);
        switch (t.value) {
          case "query":
            return Te.QUERY;
          case "mutation":
            return Te.MUTATION;
          case "subscription":
            return Te.SUBSCRIPTION
        }
        throw this.unexpected(t)
      }
      parseVariableDefinitions() {
        return this.optionalMany(C.PAREN_L, this.parseVariableDefinition, C.PAREN_R)
      }
      parseVariableDefinition() {
        return this.node(this._lexer.token, {
          kind: O.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(C.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(C.EQUALS) ? this.parseConstValueLiteral() : void 0,
          directives: this.parseConstDirectives()
        })
      }
      parseVariable() {
        const t = this._lexer.token;
        return this.expectToken(C.DOLLAR), this.node(t, {
          kind: O.VARIABLE,
          name: this.parseName()
        })
      }
      parseSelectionSet() {
        return this.node(this._lexer.token, {
          kind: O.SELECTION_SET,
          selections: this.many(C.BRACE_L, this.parseSelection, C.BRACE_R)
        })
      }
      parseSelection() {
        return this.peek(C.SPREAD) ? this.parseFragment() : this.parseField()
      }
      parseField() {
        const t = this._lexer.token,
          n = this.parseName();
        let r, i;
        return this.expectOptionalToken(C.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
          kind: O.FIELD,
          alias: r,
          name: i,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(C.BRACE_L) ? this.parseSelectionSet() : void 0
        })
      }
      parseArguments(t) {
        const n = t ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(C.PAREN_L, n, C.PAREN_R)
      }
      parseArgument(t = !1) {
        const n = this._lexer.token,
          r = this.parseName();
        return this.expectToken(C.COLON), this.node(n, {
          kind: O.ARGUMENT,
          name: r,
          value: this.parseValueLiteral(t)
        })
      }
      parseConstArgument() {
        return this.parseArgument(!0)
      }
      parseFragment() {
        const t = this._lexer.token;
        this.expectToken(C.SPREAD);
        const n = this.expectOptionalKeyword("on");
        return !n && this.peek(C.NAME) ? this.node(t, {
          kind: O.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1)
        }) : this.node(t, {
          kind: O.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        })
      }
      parseFragmentDefinition() {
        const t = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
          kind: O.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        }) : this.node(t, {
          kind: O.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        })
      }
      parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName()
      }
      parseValueLiteral(t) {
        const n = this._lexer.token;
        switch (n.kind) {
          case C.BRACKET_L:
            return this.parseList(t);
          case C.BRACE_L:
            return this.parseObject(t);
          case C.INT:
            return this.advanceLexer(), this.node(n, {
              kind: O.INT,
              value: n.value
            });
          case C.FLOAT:
            return this.advanceLexer(), this.node(n, {
              kind: O.FLOAT,
              value: n.value
            });
          case C.STRING:
          case C.BLOCK_STRING:
            return this.parseStringLiteral();
          case C.NAME:
            switch (this.advanceLexer(), n.value) {
              case "true":
                return this.node(n, {
                  kind: O.BOOLEAN,
                  value: !0
                });
              case "false":
                return this.node(n, {
                  kind: O.BOOLEAN,
                  value: !1
                });
              case "null":
                return this.node(n, {
                  kind: O.NULL
                });
              default:
                return this.node(n, {
                  kind: O.ENUM,
                  value: n.value
                })
            }
            case C.DOLLAR:
              if (t)
                if (this.expectToken(C.DOLLAR), this._lexer.token.kind === C.NAME) {
                  const r = this._lexer.token.value;
                  throw W(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`)
                } else throw this.unexpected(n);
              return this.parseVariable();
            default:
              throw this.unexpected()
        }
      }
      parseConstValueLiteral() {
        return this.parseValueLiteral(!0)
      }
      parseStringLiteral() {
        const t = this._lexer.token;
        return this.advanceLexer(), this.node(t, {
          kind: O.STRING,
          value: t.value,
          block: t.kind === C.BLOCK_STRING
        })
      }
      parseList(t) {
        const n = () => this.parseValueLiteral(t);
        return this.node(this._lexer.token, {
          kind: O.LIST,
          values: this.any(C.BRACKET_L, n, C.BRACKET_R)
        })
      }
      parseObject(t) {
        const n = () => this.parseObjectField(t);
        return this.node(this._lexer.token, {
          kind: O.OBJECT,
          fields: this.any(C.BRACE_L, n, C.BRACE_R)
        })
      }
      parseObjectField(t) {
        const n = this._lexer.token,
          r = this.parseName();
        return this.expectToken(C.COLON), this.node(n, {
          kind: O.OBJECT_FIELD,
          name: r,
          value: this.parseValueLiteral(t)
        })
      }
      parseDirectives(t) {
        const n = [];
        for (; this.peek(C.AT);) n.push(this.parseDirective(t));
        return n
      }
      parseConstDirectives() {
        return this.parseDirectives(!0)
      }
      parseDirective(t) {
        const n = this._lexer.token;
        return this.expectToken(C.AT), this.node(n, {
          kind: O.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(t)
        })
      }
      parseTypeReference() {
        const t = this._lexer.token;
        let n;
        if (this.expectOptionalToken(C.BRACKET_L)) {
          const r = this.parseTypeReference();
          this.expectToken(C.BRACKET_R), n = this.node(t, {
            kind: O.LIST_TYPE,
            type: r
          })
        } else n = this.parseNamedType();
        return this.expectOptionalToken(C.BANG) ? this.node(t, {
          kind: O.NON_NULL_TYPE,
          type: n
        }) : n
      }
      parseNamedType() {
        return this.node(this._lexer.token, {
          kind: O.NAMED_TYPE,
          name: this.parseName()
        })
      }
      peekDescription() {
        return this.peek(C.STRING) || this.peek(C.BLOCK_STRING)
      }
      parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral()
      }
      parseSchemaDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("schema");
        const r = this.parseConstDirectives(),
          i = this.many(C.BRACE_L, this.parseOperationTypeDefinition, C.BRACE_R);
        return this.node(t, {
          kind: O.SCHEMA_DEFINITION,
          description: n,
          directives: r,
          operationTypes: i
        })
      }
      parseOperationTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseOperationType();
        this.expectToken(C.COLON);
        const r = this.parseNamedType();
        return this.node(t, {
          kind: O.OPERATION_TYPE_DEFINITION,
          operation: n,
          type: r
        })
      }
      parseScalarTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("scalar");
        const r = this.parseName(),
          i = this.parseConstDirectives();
        return this.node(t, {
          kind: O.SCALAR_TYPE_DEFINITION,
          description: n,
          name: r,
          directives: i
        })
      }
      parseObjectTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("type");
        const r = this.parseName(),
          i = this.parseImplementsInterfaces(),
          s = this.parseConstDirectives(),
          p = this.parseFieldsDefinition();
        return this.node(t, {
          kind: O.OBJECT_TYPE_DEFINITION,
          description: n,
          name: r,
          interfaces: i,
          directives: s,
          fields: p
        })
      }
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(C.AMP, this.parseNamedType) : []
      }
      parseFieldsDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseFieldDefinition, C.BRACE_R)
      }
      parseFieldDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription(),
          r = this.parseName(),
          i = this.parseArgumentDefs();
        this.expectToken(C.COLON);
        const s = this.parseTypeReference(),
          p = this.parseConstDirectives();
        return this.node(t, {
          kind: O.FIELD_DEFINITION,
          description: n,
          name: r,
          arguments: i,
          type: s,
          directives: p
        })
      }
      parseArgumentDefs() {
        return this.optionalMany(C.PAREN_L, this.parseInputValueDef, C.PAREN_R)
      }
      parseInputValueDef() {
        const t = this._lexer.token,
          n = this.parseDescription(),
          r = this.parseName();
        this.expectToken(C.COLON);
        const i = this.parseTypeReference();
        let s;
        this.expectOptionalToken(C.EQUALS) && (s = this.parseConstValueLiteral());
        const p = this.parseConstDirectives();
        return this.node(t, {
          kind: O.INPUT_VALUE_DEFINITION,
          description: n,
          name: r,
          type: i,
          defaultValue: s,
          directives: p
        })
      }
      parseInterfaceTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("interface");
        const r = this.parseName(),
          i = this.parseImplementsInterfaces(),
          s = this.parseConstDirectives(),
          p = this.parseFieldsDefinition();
        return this.node(t, {
          kind: O.INTERFACE_TYPE_DEFINITION,
          description: n,
          name: r,
          interfaces: i,
          directives: s,
          fields: p
        })
      }
      parseUnionTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("union");
        const r = this.parseName(),
          i = this.parseConstDirectives(),
          s = this.parseUnionMemberTypes();
        return this.node(t, {
          kind: O.UNION_TYPE_DEFINITION,
          description: n,
          name: r,
          directives: i,
          types: s
        })
      }
      parseUnionMemberTypes() {
        return this.expectOptionalToken(C.EQUALS) ? this.delimitedMany(C.PIPE, this.parseNamedType) : []
      }
      parseEnumTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("enum");
        const r = this.parseName(),
          i = this.parseConstDirectives(),
          s = this.parseEnumValuesDefinition();
        return this.node(t, {
          kind: O.ENUM_TYPE_DEFINITION,
          description: n,
          name: r,
          directives: i,
          values: s
        })
      }
      parseEnumValuesDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseEnumValueDefinition, C.BRACE_R)
      }
      parseEnumValueDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription(),
          r = this.parseEnumValueName(),
          i = this.parseConstDirectives();
        return this.node(t, {
          kind: O.ENUM_VALUE_DEFINITION,
          description: n,
          name: r,
          directives: i
        })
      }
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw W(this._lexer.source, this._lexer.token.start, `${It(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName()
      }
      parseInputObjectTypeDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("input");
        const r = this.parseName(),
          i = this.parseConstDirectives(),
          s = this.parseInputFieldsDefinition();
        return this.node(t, {
          kind: O.INPUT_OBJECT_TYPE_DEFINITION,
          description: n,
          name: r,
          directives: i,
          fields: s
        })
      }
      parseInputFieldsDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseInputValueDef, C.BRACE_R)
      }
      parseTypeSystemExtension() {
        const t = this._lexer.lookahead();
        if (t.kind === C.NAME) switch (t.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension()
        }
        throw this.unexpected(t)
      }
      parseSchemaExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        const n = this.parseConstDirectives(),
          r = this.optionalMany(C.BRACE_L, this.parseOperationTypeDefinition, C.BRACE_R);
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.SCHEMA_EXTENSION,
          directives: n,
          operationTypes: r
        })
      }
      parseScalarTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        const n = this.parseName(),
          r = this.parseConstDirectives();
        if (r.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.SCALAR_TYPE_EXTENSION,
          name: n,
          directives: r
        })
      }
      parseObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        const n = this.parseName(),
          r = this.parseImplementsInterfaces(),
          i = this.parseConstDirectives(),
          s = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.OBJECT_TYPE_EXTENSION,
          name: n,
          interfaces: r,
          directives: i,
          fields: s
        })
      }
      parseInterfaceTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        const n = this.parseName(),
          r = this.parseImplementsInterfaces(),
          i = this.parseConstDirectives(),
          s = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.INTERFACE_TYPE_EXTENSION,
          name: n,
          interfaces: r,
          directives: i,
          fields: s
        })
      }
      parseUnionTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        const n = this.parseName(),
          r = this.parseConstDirectives(),
          i = this.parseUnionMemberTypes();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.UNION_TYPE_EXTENSION,
          name: n,
          directives: r,
          types: i
        })
      }
      parseEnumTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        const n = this.parseName(),
          r = this.parseConstDirectives(),
          i = this.parseEnumValuesDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.ENUM_TYPE_EXTENSION,
          name: n,
          directives: r,
          values: i
        })
      }
      parseInputObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        const n = this.parseName(),
          r = this.parseConstDirectives(),
          i = this.parseInputFieldsDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
          kind: O.INPUT_OBJECT_TYPE_EXTENSION,
          name: n,
          directives: r,
          fields: i
        })
      }
      parseDirectiveDefinition() {
        const t = this._lexer.token,
          n = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(C.AT);
        const r = this.parseName(),
          i = this.parseArgumentDefs(),
          s = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const p = this.parseDirectiveLocations();
        return this.node(t, {
          kind: O.DIRECTIVE_DEFINITION,
          description: n,
          name: r,
          arguments: i,
          repeatable: s,
          locations: p
        })
      }
      parseDirectiveLocations() {
        return this.delimitedMany(C.PIPE, this.parseDirectiveLocation)
      }
      parseDirectiveLocation() {
        const t = this._lexer.token,
          n = this.parseName();
        if (Object.prototype.hasOwnProperty.call(sn, n.value)) return n;
        throw this.unexpected(t)
      }
      node(t, n) {
        return this._options.noLocation !== !0 && (n.loc = new Uo(t, this._lexer.lastToken, this._lexer.source)), n
      }
      peek(t) {
        return this._lexer.token.kind === t
      }
      expectToken(t) {
        const n = this._lexer.token;
        if (n.kind === t) return this.advanceLexer(), n;
        throw W(this._lexer.source, n.start, `Expected ${_r(t)}, found ${It(n)}.`)
      }
      expectOptionalToken(t) {
        return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1
      }
      expectKeyword(t) {
        const n = this._lexer.token;
        if (n.kind === C.NAME && n.value === t) this.advanceLexer();
        else throw W(this._lexer.source, n.start, `Expected "${t}", found ${It(n)}.`)
      }
      expectOptionalKeyword(t) {
        const n = this._lexer.token;
        return n.kind === C.NAME && n.value === t ? (this.advanceLexer(), !0) : !1
      }
      unexpected(t) {
        const n = t != null ? t : this._lexer.token;
        return W(this._lexer.source, n.start, `Unexpected ${It(n)}.`)
      }
      any(t, n, r) {
        this.expectToken(t);
        const i = [];
        for (; !this.expectOptionalToken(r);) i.push(n.call(this));
        return i
      }
      optionalMany(t, n, r) {
        if (this.expectOptionalToken(t)) {
          const i = [];
          do i.push(n.call(this)); while (!this.expectOptionalToken(r));
          return i
        }
        return []
      }
      many(t, n, r) {
        this.expectToken(t);
        const i = [];
        do i.push(n.call(this)); while (!this.expectOptionalToken(r));
        return i
      }
      delimitedMany(t, n) {
        this.expectOptionalToken(t);
        const r = [];
        do r.push(n.call(this)); while (this.expectOptionalToken(t));
        return r
      }
      advanceLexer() {
        const {
          maxTokens: t
        } = this._options, n = this._lexer.advance();
        if (t !== void 0 && n.kind !== C.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw W(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`)
      }
    }

    function It(e) {
      const t = e.value;
      return _r(e.kind) + (t != null ? ` "${t}"` : "")
    }

    function _r(e) {
      return Qo(e) ? `"${e}"` : e
    }

    function fa(e) {
      return `"${e.replace(da, ha)}"`
    }
    const da = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

    function ha(e) {
      return ma[e.charCodeAt(0)]
    }
    const ma = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
      ga = Object.freeze({});

    function Rr(e, t, n = Mr) {
      const r = new Map;
      for (const w of Object.values(O)) r.set(w, ya(t, w));
      let i, s = Array.isArray(e),
        p = [e],
        l = -1,
        g = [],
        x = e,
        m, u;
      const d = [],
        h = [];
      do {
        l++;
        const w = l === p.length,
          L = w && g.length !== 0;
        if (w) {
          if (m = h.length === 0 ? void 0 : d[d.length - 1], x = u, u = h.pop(), L)
            if (s) {
              x = x.slice();
              let D = 0;
              for (const [S, F] of g) {
                const I = S - D;
                F === null ? (x.splice(I, 1), D++) : x[I] = F
              }
            } else {
              x = Object.defineProperties({}, Object.getOwnPropertyDescriptors(x));
              for (const [D, S] of g) x[D] = S
            } l = i.index, p = i.keys, g = i.edits, s = i.inArray, i = i.prev
        } else if (u) {
          if (m = s ? l : p[l], x = u[m], x == null) continue;
          d.push(m)
        }
        let A;
        if (!Array.isArray(x)) {
          var y, b;
          Cr(x) || vt(!1, `Invalid AST Node: ${jr(x)}.`);
          const D = w ? (y = r.get(x.kind)) === null || y === void 0 ? void 0 : y.leave : (b = r.get(x.kind)) === null || b === void 0 ? void 0 : b.enter;
          if (A = D == null ? void 0 : D.call(t, x, m, u, d, h), A === ga) break;
          if (A === !1) {
            if (!w) {
              d.pop();
              continue
            }
          } else if (A !== void 0 && (g.push([m, A]), !w))
            if (Cr(A)) x = A;
            else {
              d.pop();
              continue
            }
        }
        if (A === void 0 && L && g.push([m, x]), w) d.pop();
        else {
          var T;
          i = {
            inArray: s,
            index: l,
            keys: p,
            edits: g,
            prev: i
          }, s = Array.isArray(x), p = s ? x : (T = n[x.kind]) !== null && T !== void 0 ? T : [], l = -1, g = [], u && h.push(u), u = x
        }
      } while (i !== void 0);
      return g.length !== 0 ? g[g.length - 1][1] : e
    }

    function ya(e, t) {
      const n = e[t];
      return typeof n == "object" ? n : typeof n == "function" ? {
        enter: n,
        leave: void 0
      } : {
        enter: e.enter,
        leave: e.leave
      }
    }

    function va(e) {
      return Rr(e, wa)
    }
    const xa = 80,
      wa = {
        Name: {
          leave: e => e.value
        },
        Variable: {
          leave: e => "$" + e.name
        },
        Document: {
          leave: e => k(e.definitions, `

`)
        },
        OperationDefinition: {
          leave(e) {
            const t = R("(", k(e.variableDefinitions, ", "), ")"),
              n = k([e.operation, k([e.name, t]), k(e.directives, " ")], " ");
            return (n === "query" ? "" : n + " ") + e.selectionSet
          }
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: n,
            directives: r
          }) => e + ": " + t + R(" = ", n) + R(" ", k(r, " "))
        },
        SelectionSet: {
          leave: ({
            selections: e
          }) => re(e)
        },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: n,
            directives: r,
            selectionSet: i
          }) {
            const s = R("", e, ": ") + t;
            let p = s + R("(", k(n, ", "), ")");
            return p.length > xa && (p = s + R(`(
`, bt(k(n, `
`)), `
)`)), k([p, k(r, " "), i], " ")
          }
        },
        Argument: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        FragmentSpread: {
          leave: ({
            name: e,
            directives: t
          }) => "..." + e + R(" ", k(t, " "))
        },
        InlineFragment: {
          leave: ({
            typeCondition: e,
            directives: t,
            selectionSet: n
          }) => k(["...", R("on ", e), k(t, " "), n], " ")
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: n,
            directives: r,
            selectionSet: i
          }) => `fragment ${e}${R("(", k(n, ", "), ")")} on ${t} ${R("", k(r, " "), " ")}` + i
        },
        IntValue: {
          leave: ({
            value: e
          }) => e
        },
        FloatValue: {
          leave: ({
            value: e
          }) => e
        },
        StringValue: {
          leave: ({
            value: e,
            block: t
          }) => t ? Vo(e) : fa(e)
        },
        BooleanValue: {
          leave: ({
            value: e
          }) => e ? "true" : "false"
        },
        NullValue: {
          leave: () => "null"
        },
        EnumValue: {
          leave: ({
            value: e
          }) => e
        },
        ListValue: {
          leave: ({
            values: e
          }) => "[" + k(e, ", ") + "]"
        },
        ObjectValue: {
          leave: ({
            fields: e
          }) => "{" + k(e, ", ") + "}"
        },
        ObjectField: {
          leave: ({
            name: e,
            value: t
          }) => e + ": " + t
        },
        Directive: {
          leave: ({
            name: e,
            arguments: t
          }) => "@" + e + R("(", k(t, ", "), ")")
        },
        NamedType: {
          leave: ({
            name: e
          }) => e
        },
        ListType: {
          leave: ({
            type: e
          }) => "[" + e + "]"
        },
        NonNullType: {
          leave: ({
            type: e
          }) => e + "!"
        },
        SchemaDefinition: {
          leave: ({
            description: e,
            directives: t,
            operationTypes: n
          }) => R("", e, `
`) + k(["schema", k(t, " "), re(n)], " ")
        },
        OperationTypeDefinition: {
          leave: ({
            operation: e,
            type: t
          }) => e + ": " + t
        },
        ScalarTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n
          }) => R("", e, `
`) + k(["scalar", t, k(n, " ")], " ")
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i
          }) => R("", e, `
`) + k(["type", t, R("implements ", k(n, " & ")), k(r, " "), re(i)], " ")
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            type: r,
            directives: i
          }) => R("", e, `
`) + t + (Fr(n) ? R(`(
`, bt(k(n, `
`)), `
)`) : R("(", k(n, ", "), ")")) + ": " + r + R(" ", k(i, " "))
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: n,
            defaultValue: r,
            directives: i
          }) => R("", e, `
`) + k([t + ": " + n, R("= ", r), k(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i
          }) => R("", e, `
`) + k(["interface", t, R("implements ", k(n, " & ")), k(r, " "), re(i)], " ")
        },
        UnionTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            types: r
          }) => R("", e, `
`) + k(["union", t, k(n, " "), R("= ", k(r, " | "))], " ")
        },
        EnumTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            values: r
          }) => R("", e, `
`) + k(["enum", t, k(n, " "), re(r)], " ")
        },
        EnumValueDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n
          }) => R("", e, `
`) + k([t, k(n, " ")], " ")
        },
        InputObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            directives: n,
            fields: r
          }) => R("", e, `
`) + k(["input", t, k(n, " "), re(r)], " ")
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            repeatable: r,
            locations: i
          }) => R("", e, `
`) + "directive @" + t + (Fr(n) ? R(`(
`, bt(k(n, `
`)), `
)`) : R("(", k(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + k(i, " | ")
        },
        SchemaExtension: {
          leave: ({
            directives: e,
            operationTypes: t
          }) => k(["extend schema", k(e, " "), re(t)], " ")
        },
        ScalarTypeExtension: {
          leave: ({
            name: e,
            directives: t
          }) => k(["extend scalar", e, k(t, " ")], " ")
        },
        ObjectTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: r
          }) => k(["extend type", e, R("implements ", k(t, " & ")), k(n, " "), re(r)], " ")
        },
        InterfaceTypeExtension: {
          leave: ({
            name: e,
            interfaces: t,
            directives: n,
            fields: r
          }) => k(["extend interface", e, R("implements ", k(t, " & ")), k(n, " "), re(r)], " ")
        },
        UnionTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            types: n
          }) => k(["extend union", e, k(t, " "), R("= ", k(n, " | "))], " ")
        },
        EnumTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            values: n
          }) => k(["extend enum", e, k(t, " "), re(n)], " ")
        },
        InputObjectTypeExtension: {
          leave: ({
            name: e,
            directives: t,
            fields: n
          }) => k(["extend input", e, k(t, " "), re(n)], " ")
        }
      };

    function k(e, t = "") {
      var n;
      return (n = e == null ? void 0 : e.filter(r => r).join(t)) !== null && n !== void 0 ? n : ""
    }

    function re(e) {
      return R(`{
`, bt(k(e, `
`)), `
}`)
    }

    function R(e, t, n = "") {
      return t != null && t !== "" ? e + t + n : ""
    }

    function bt(e) {
      return R("  ", e.replace(/\n/g, `
  `))
    }

    function Fr(e) {
      var t;
      return (t = e == null ? void 0 : e.some(n => n.includes(`
`))) !== null && t !== void 0 ? t : !1
    }
    var Ur = () => {},
      ie = Ur;

    function oe(e) {
      var t = [e];
      return t.tag = 0, t
    }

    function qe(e) {
      var t = [e];
      return t.tag = 1, t
    }
    var Ia = e => e;

    function te(e) {
      return t => n => {
        var r = ie;
        t(i => {
          i === 0 ? n(0) : i.tag === 0 ? (r = i[0], n(i)) : e(i[0]) ? n(i) : r(0)
        })
      }
    }

    function Xe(e) {
      return t => n => t(r => {
        r === 0 || r.tag === 0 ? n(r) : n(qe(e(r[0])))
      })
    }

    function Pr(e) {
      return t => n => {
        var r = [],
          i = ie,
          s = !1,
          p = !1;
        t(l => {
          p || (l === 0 ? (p = !0, r.length || n(0)) : l.tag === 0 ? i = l[0] : (s = !1, function (x) {
            var m = ie;
            x(u => {
              if (u === 0) {
                if (r.length) {
                  var d = r.indexOf(m);
                  d > -1 && (r = r.slice()).splice(d, 1), r.length || (p ? n(0) : s || (s = !0, i(0)))
                }
              } else u.tag === 0 ? (r.push(m = u[0]), m(0)) : r.length && (n(u), m(0))
            })
          }(e(l[0])), s || (s = !0, i(0))))
        }), n(oe(l => {
          if (l === 1) {
            p || (p = !0, i(1));
            for (var g = 0, x = r, m = r.length; g < m; g++) x[g](1);
            r.length = 0
          } else {
            !p && !s ? (s = !0, i(0)) : s = !1;
            for (var u = 0, d = r, h = r.length; u < h; u++) d[u](0)
          }
        }))
      }
    }

    function ba(e) {
      return Pr(Ia)(e)
    }

    function At(e) {
      return ba(Ma(e))
    }

    function zr(e) {
      return t => n => {
        var r = !1;
        t(i => {
          if (!r)
            if (i === 0) r = !0, n(0), e();
            else if (i.tag === 0) {
            var s = i[0];
            n(oe(p => {
              p === 1 ? (r = !0, s(1), e()) : s(p)
            }))
          } else n(i)
        })
      }
    }

    function Et(e) {
      return t => n => {
        var r = !1;
        t(i => {
          if (!r)
            if (i === 0) r = !0, n(0);
            else if (i.tag === 0) {
            var s = i[0];
            n(oe(p => {
              p === 1 && (r = !0), s(p)
            }))
          } else e(i[0]), n(i)
        })
      }
    }

    function Yr(e) {
      return t => n => t(r => {
        r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r)
      })
    }

    function Ze(e) {
      var t = [],
        n = ie,
        r = !1;
      return i => {
        t.push(i), t.length === 1 && e(s => {
          if (s === 0) {
            for (var p = 0, l = t, g = t.length; p < g; p++) l[p](0);
            t.length = 0
          } else if (s.tag === 0) n = s[0];
          else {
            r = !1;
            for (var x = 0, m = t, u = t.length; x < u; x++) m[x](s)
          }
        }), i(oe(s => {
          if (s === 1) {
            var p = t.indexOf(i);
            p > -1 && (t = t.slice()).splice(p, 1), t.length || n(1)
          } else r || (r = !0, n(0))
        }))
      }
    }

    function Aa(e) {
      return t => n => {
        var r = ie,
          i = ie,
          s = !1,
          p = !1,
          l = !1,
          g = !1;
        t(x => {
          g || (x === 0 ? (g = !0, l || n(0)) : x.tag === 0 ? r = x[0] : (l && (i(1), i = ie), s ? s = !1 : (s = !0, r(0)), function (u) {
            l = !0, u(d => {
              l && (d === 0 ? (l = !1, g ? n(0) : s || (s = !0, r(0))) : d.tag === 0 ? (p = !1, (i = d[0])(0)) : (n(d), p ? p = !1 : i(0)))
            })
          }(e(x[0]))))
        }), n(oe(x => {
          x === 1 ? (g || (g = !0, r(1)), l && (l = !1, i(1))) : (!g && !s && (s = !0, r(0)), l && !p && (p = !0, i(0)))
        }))
      }
    }

    function $r(e) {
      return t => n => {
        var r = ie,
          i = !1,
          s = 0;
        t(p => {
          i || (p === 0 ? (i = !0, n(0)) : p.tag === 0 ? e <= 0 ? (i = !0, n(0), p[0](1)) : r = p[0] : s++ < e ? (n(p), !i && s >= e && (i = !0, n(0), r(1))) : n(p))
        }), n(oe(p => {
          p === 1 && !i ? (i = !0, r(1)) : p === 0 && !i && s < e && r(0)
        }))
      }
    }

    function Vr(e) {
      return t => n => {
        var r = ie,
          i = ie,
          s = !1;
        t(p => {
          s || (p === 0 ? (s = !0, i(1), n(0)) : p.tag === 0 ? (r = p[0], e(l => {
            l === 0 || (l.tag === 0 ? (i = l[0])(0) : (s = !0, i(1), r(1), n(0)))
          })) : n(p))
        }), n(oe(p => {
          p === 1 && !s ? (s = !0, r(1), i(1)) : s || r(0)
        }))
      }
    }

    function Ea(e) {
      return t => {
        var n = e[Symbol.asyncIterator](),
          r = !1,
          i = !1,
          s = !1,
          p;
        t(oe(async l => {
          if (l === 1) r = !0, n.return && n.return();
          else if (i) s = !0;
          else {
            for (s = i = !0; s && !r;)
              if ((p = await n.next()).done) r = !0, n.return && await n.return(), t(0);
              else try {
                s = !1, t(qe(p.value))
              } catch (g) {
                if (n.throw)(r = !!(await n.throw(g)).done) && t(0);
                else throw g
              }
            i = !1
          }
        }))
      }
    }

    function Na(e) {
      return e[Symbol.asyncIterator] ? Ea(e) : t => {
        var n = e[Symbol.iterator](),
          r = !1,
          i = !1,
          s = !1,
          p;
        t(oe(l => {
          if (l === 1) r = !0, n.return && n.return();
          else if (i) s = !0;
          else {
            for (s = i = !0; s && !r;)
              if ((p = n.next()).done) r = !0, n.return && n.return(), t(0);
              else try {
                s = !1, t(qe(p.value))
              } catch (g) {
                if (n.throw)(r = !!n.throw(g).done) && t(0);
                else throw g
              }
            i = !1
          }
        }))
      }
    }
    var Ma = Na;

    function Gr(e) {
      return t => {
        var n = !1;
        t(oe(r => {
          r === 1 ? n = !0 : n || (n = !0, t(qe(e)), t(0))
        }))
      }
    }

    function ln(e) {
      return t => {
        var n = !1,
          r = e({
            next(i) {
              n || t(qe(i))
            },
            complete() {
              n || (n = !0, t(0))
            }
          });
        t(oe(i => {
          i === 1 && !n && (n = !0, r())
        }))
      }
    }

    function Ca() {
      var e, t;
      return {
        source: Ze(ln(n => (e = n.next, t = n.complete, Ur))),
        next(n) {
          e && e(n)
        },
        complete() {
          t && t()
        }
      }
    }

    function Nt(e) {
      return t => {
        var n = ie,
          r = !1;
        return t(i => {
          i === 0 ? r = !0 : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0))
        }), {
          unsubscribe() {
            r || (r = !0, n(1))
          }
        }
      }
    }

    function Ta(e) {
      Nt(t => {})(e)
    }
    var La = e => typeof e == "string" ? new He(e) : typeof e == "object" && e.message ? new He(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
    class pn extends Error {
      constructor(t) {
        var n = (t.graphQLErrors || []).map(La),
          r = ((i, s) => {
            var p = "";
            if (i) return `[Network] ${i.message}`;
            if (s)
              for (var l of s) p && (p += `
`), p += `[GraphQL] ${l.message}`;
            return p
          })(t.networkError, n);
        super(r), this.name = "CombinedError", this.message = r, this.graphQLErrors = n, this.networkError = t.networkError, this.response = t.response
      }
      toString() {
        return this.message
      }
    }
    var fn = (e, t) => {
        for (var n = typeof t == "number" ? 0 | t : 5381, r = 0, i = 0 | e.length; r < i; r++) n = (n << 5) + n + e.charCodeAt(r);
        return n
      },
      Mt = new Set,
      Qr = new WeakMap,
      Ke = e => {
        if (e === null || Mt.has(e)) return "null";
        if (typeof e != "object") return JSON.stringify(e) || "";
        if (e.toJSON) return Ke(e.toJSON());
        if (Array.isArray(e)) {
          var t = "[";
          for (var n of e) t !== "[" && (t += ","), t += (n = Ke(n)).length > 0 ? n : "null";
          return t += "]"
        }
        var r = Object.keys(e).sort();
        if (!r.length && e.constructor && e.constructor !== Object) {
          var i = Qr.get(e) || Math.random().toString(36).slice(2);
          return Qr.set(e, i), `{"__key":"${i}"}`
        }
        Mt.add(e);
        var s = "{";
        for (var p of r) {
          var l = Ke(e[p]);
          l && (s.length > 1 && (s += ","), s += Ke(p) + ":" + l)
        }
        return Mt.delete(e), s += "}"
      },
      dn = e => (Mt.clear(), Ke(e)),
      Da = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
      ka = /(#[^\n\r]+)?(?:\n|\r\n?|$)+/g,
      Sa = (e, t) => t % 2 == 0 ? e.replace(ka, `
`) : e,
      Hr = e => e.split(Da).map(Sa).join("").trim(),
      Wr = new Map,
      Ct = new Map,
      hn = e => {
        var t;
        return typeof e == "string" ? t = Hr(e) : e.loc && Ct.get(e.__key) === e ? t = e.loc.source.body : (t = Wr.get(e) || Hr(va(e)), Wr.set(e, t)), typeof e != "string" && !e.loc && (e.loc = {
          start: 0,
          end: t.length,
          source: {
            body: t,
            name: "gql",
            locationOffset: {
              line: 1,
              column: 1
            }
          }
        }), t
      },
      Jr = e => {
        var t = fn(hn(e));
        if (typeof e == "object" && "definitions" in e) {
          var n = Xr(e);
          n && (t = fn(`
# ${n}`, t))
        }
        return t
      },
      qr = e => {
        var t, n;
        return typeof e == "string" ? (t = Jr(e), n = Ct.get(t) || la(e, {
          noLocation: !0
        })) : (t = e.__key || Jr(e), n = Ct.get(t) || e), n.loc || hn(n), n.__key = t, Ct.set(t, n), n
      },
      mn = (e, t) => {
        t || (t = {});
        var n = qr(e),
          r = dn(t),
          i = n.__key;
        return r !== "{}" && (i = fn(r, i)), {
          key: i,
          query: n,
          variables: t
        }
      },
      Xr = e => {
        for (var t of e.definitions)
          if (t.kind === O.OPERATION_DEFINITION && t.name) return t.name.value
      },
      Oa = e => {
        for (var t of e.definitions)
          if (t.kind === O.OPERATION_DEFINITION) return t.operation
      },
      gn = (e, t, n) => {
        if (!("data" in t) && !("errors" in t) || "path" in t) throw new Error("No Content");
        return {
          operation: e,
          data: t.data,
          error: Array.isArray(t.errors) ? new pn({
            graphQLErrors: t.errors,
            response: n
          }) : void 0,
          extensions: typeof t.extensions == "object" && t.extensions || void 0,
          hasNext: !!t.hasNext
        }
      },
      ja = (e, t, n) => {
        var r = {
          ...e
        };
        if (r.hasNext = !!t.hasNext, !("path" in t)) return "data" in t && (r.data = t.data), r;
        Array.isArray(t.errors) && (r.error = new pn({
          graphQLErrors: r.error ? [...r.error.graphQLErrors, ...t.errors] : t.errors,
          response: n
        }));
        for (var i = r.data = {
            ...r.data
          }, s = 0, p; s < t.path.length;) i = i[p = t.path[s++]] = Array.isArray(i[p]) ? [...i[p]] : {
          ...i[p]
        };
        return Object.assign(i, t.data), r
      },
      Zr = (e, t, n) => ({
        operation: e,
        data: void 0,
        error: new pn({
          networkError: t,
          response: n
        }),
        extensions: void 0
      });

    function Ba(e) {
      return {
        query: hn(e.query),
        operationName: Xr(e.query),
        variables: e.variables || void 0,
        extensions: void 0
      }
    }
    var _a = (e, t) => {
        var n = e.kind === "query" && e.context.preferGetMethod;
        if (!n || !t) return e.context.url;
        var r = new URL(e.context.url),
          i = r.searchParams;
        t.operationName && i.set("operationName", t.operationName), t.query && i.set("query", t.query), t.variables && i.set("variables", dn(t.variables)), t.extensions && i.set("extensions", dn(t.extensions));
        var s = r.toString();
        return s.length > 2047 && n !== "force" ? (e.context.preferGetMethod = !1, e.context.url) : s
      },
      Ra = (e, t) => {
        var n = e.kind === "query" && !!e.context.preferGetMethod,
          r = {
            accept: "application/graphql+json, application/json"
          };
        n || (r["content-type"] = "application/json");
        var i = (typeof e.context.fetchOptions == "function" ? e.context.fetchOptions() : e.context.fetchOptions) || {};
        if (i.headers)
          for (var s in i.headers) r[s.toLowerCase()] = i.headers[s];
        return {
          ...i,
          body: !n && t ? JSON.stringify(t) : void 0,
          method: n ? "GET" : "POST",
          headers: r
        }
      },
      Fa = typeof TextDecoder < "u" ? new TextDecoder : null,
      Ua = /content-type:[^\r\n]*application\/json/i,
      Pa = /boundary="?([^=";]+)"?/i,
      za = (e, t, n) => {
        var r = n.redirect === "manual" ? 400 : 300,
          i = e.context.fetch;
        return ln(({
          next: s,
          complete: p
        }) => {
          var l = typeof AbortController < "u" ? new AbortController : null;
          l && (n.signal = l.signal);
          var g = !1,
            x = (h, y, b) => {
              var T = b.headers && b.headers.get("Content-Type") || "";
              if (/text\//i.test(T)) return b.text().then(ae => {
                h(Zr(y, new Error(ae), b))
              });
              if (!/multipart\/mixed/i.test(T)) return b.text().then(ae => {
                h(gn(y, JSON.parse(ae), b))
              });
              var w = "---",
                L = T.match(Pa);
              L && (w = "--" + L[1]);
              var A, D = () => {};
              if (b[Symbol.asyncIterator]) {
                var S = b[Symbol.asyncIterator]();
                A = S.next.bind(S)
              } else if ("body" in b && b.body) {
                var F = b.body.getReader();
                D = () => F.cancel(), A = () => F.read()
              } else throw new TypeError("Streaming requests unsupported");
              var I = "",
                Y = !0,
                Q = null,
                V = null;
              return A().then(function ae(ve) {
                if (ve.done) g = !0;
                else {
                  var be = ($ = ve.value).constructor.name === "Buffer" ? $.toString() : Fa.decode($),
                    X = be.indexOf(w);
                  for (X > -1 ? X += I.length : X = I.indexOf(w), I += be; X > -1;) {
                    var fe = I.slice(0, X),
                      ke = I.slice(X + w.length);
                    if (Y) Y = !1;
                    else {
                      var Se = fe.indexOf(`\r
\r
`) + 4,
                        Oe = fe.slice(0, Se),
                        Z = fe.slice(Se, fe.lastIndexOf(`\r
`)),
                        ue = void 0;
                      if (Ua.test(Oe)) try {
                        ue = JSON.parse(Z), Q = V = V ? ja(V, ue, b) : gn(y, ue, b)
                      } catch {}
                      if (ke.slice(0, 2) === "--" || ue && !ue.hasNext) {
                        if (!V) return h(gn(y, {}, b));
                        break
                      }
                    }
                    X = (I = ke).indexOf(w)
                  }
                }
                var $;
                if (Q && (h(Q), Q = null), !ve.done && (!V || V.hasNext)) return A().then(ae)
              }).finally(D)
            },
            m = !1,
            u = !1,
            d;
          return Promise.resolve().then(() => {
            if (!m) return (i || fetch)(t, n)
          }).then(h => {
            if (h) return u = (d = h).status < 200 || d.status >= r, x(s, e, d)
          }).then(p).catch(h => {
            if (g) throw h;
            var y = Zr(e, u && d.statusText ? new Error(d.statusText) : h, d);
            s(y), p()
          }), () => {
            m = !0, l && l.abort()
          }
        })
      },
      yn = (e, t) => {
        if (Array.isArray(e))
          for (var n of e) yn(n, t);
        else if (typeof e == "object" && e !== null)
          for (var r in e) r === "__typename" && typeof e[r] == "string" ? t.add(e[r]) : yn(e[r], t);
        return t
      },
      Kr = e => {
        if (!e.selectionSet) return e;
        for (var t of e.selectionSet.selections)
          if (t.kind === O.FIELD && t.name.value === "__typename" && !t.alias) return e;
        return {
          ...e,
          selectionSet: {
            ...e.selectionSet,
            selections: [...e.selectionSet.selections, {
              kind: O.FIELD,
              name: {
                kind: O.NAME,
                value: "__typename"
              }
            }]
          }
        }
      },
      ei = new Map,
      Ya = e => {
        var t = qr(e),
          n = ei.get(t.__key);
        return n || (n = Rr(t, {
          Field: Kr,
          InlineFragment: Kr
        }), Object.defineProperty(n, "__key", {
          value: t.__key,
          enumerable: !1
        }), ei.set(t.__key, n)), n
      },
      vn = (e, t) => {
        if (!e || typeof e != "object") return e;
        if (Array.isArray(e)) return e.map(i => vn(i));
        if (e && typeof e == "object" && (t || "__typename" in e)) {
          var n = {};
          for (var r in e) r === "__typename" ? Object.defineProperty(n, "__typename", {
            enumerable: !1,
            value: e.__typename
          }) : n[r] = vn(e[r]);
          return n
        } else return e
      };

    function ti(e) {
      return e.toPromise = () => new Promise(t => {
        var n = Nt(r => {
          !r.stale && !r.hasNext && Promise.resolve().then(() => {
            n.unsubscribe(), t(r)
          })
        })(e)
      }), e
    }

    function et(e, t, n) {
      return n || (n = t.context), {
        key: t.key,
        query: t.query,
        variables: t.variables,
        kind: e,
        context: n
      }
    }
    var ni = (e, t) => et(e.kind, e, {
        ...e.context,
        meta: {
          ...e.context.meta,
          ...t
        }
      }),
      $a = () => {},
      xn = ({
        kind: e
      }) => e !== "mutation" && e !== "query",
      ri = ({
        forward: e,
        client: t,
        dispatchDebug: n
      }) => {
        var r = new Map,
          i = new Map,
          s = l => {
            var g = et(l.kind, l);
            return g.query = Ya(l.query), g
          },
          p = l => {
            var {
              key: g,
              kind: x,
              context: {
                requestPolicy: m
              }
            } = l;
            return x === "query" && m !== "network-only" && (m === "cache-only" || r.has(g))
          };
        return l => {
          var g = Ze(l),
            x = Xe(u => {
              var d = r.get(u.key),
                h = {
                  ...d,
                  operation: ni(u, {
                    cacheOutcome: d ? "hit" : "miss"
                  })
                };
              return u.context.requestPolicy === "cache-and-network" && (h.stale = !0, ii(t, u)), h
            })(te(u => !xn(u) && p(u))(g)),
            m = Et(u => {
              var {
                operation: d
              } = u;
              if (d) {
                var h = (I => [...yn(I, new Set)])(u.data).concat(d.context.additionalTypenames || []);
                if (u.operation.kind === "mutation") {
                  for (var y = new Set, b = 0; b < h.length; b++) {
                    var T = h[b],
                      w = i.get(T);
                    w || i.set(T, w = new Set);
                    for (var L of w.values()) y.add(L);
                    w.clear()
                  }
                  for (var A of y.values()) r.has(A) && (d = r.get(A).operation, r.delete(A), ii(t, d))
                } else if (d.kind === "query" && u.data) {
                  r.set(d.key, u);
                  for (var D = 0; D < h.length; D++) {
                    var S = h[D],
                      F = i.get(S);
                    F || i.set(S, F = new Set), F.add(d.key)
                  }
                }
              }
            })(e(te(u => u.kind !== "query" || u.context.requestPolicy !== "cache-only")(Xe(u => ni(u, {
              cacheOutcome: "miss"
            }))(At([Xe(s)(te(u => !xn(u) && !p(u))(g)), te(u => xn(u))(g)])))));
          return At([x, m])
        }
      },
      ii = (e, t) => e.reexecuteOperation(et(t.kind, t, {
        ...t.context,
        requestPolicy: "network-only"
      })),
      oi = ({
        forward: e,
        dispatchDebug: t
      }) => {
        var n = new Set,
          r = s => {
            var {
              key: p,
              kind: l
            } = s;
            if (l === "teardown" || l === "mutation") return n.delete(p), !0;
            var g = n.has(p);
            return n.add(p), !g
          },
          i = ({
            operation: s,
            hasNext: p
          }) => {
            p || n.delete(s.key)
          };
        return s => {
          var p = te(r)(s);
          return Et(i)(e(p))
        }
      },
      ai = ({
        forward: e,
        dispatchDebug: t
      }) => n => {
        var r = Ze(n),
          i = Pr(p => {
            var {
              key: l
            } = p, g = Ba(p), x = _a(p, g), m = Ra(p, g), u = Vr(te(d => d.kind === "teardown" && d.key === l)(r))(za(p, x, m));
            return u
          })(te(p => p.kind === "query" || p.kind === "mutation")(r)),
          s = e(te(p => p.kind !== "query" && p.kind !== "mutation")(r));
        return At([i, s])
      },
      Va = ({
        dispatchDebug: e
      }) => t => te(() => !1)(Et(n => {
        if (n.kind !== "teardown" && !1) var r
      })(t)),
      Ga = e => ({
        client: t,
        forward: n,
        dispatchDebug: r
      }) => e.reduceRight((i, s) => s({
        client: t,
        forward: i,
        dispatchDebug(p) {}
      }), n),
      Qa = [oi, ri, ai],
      Ha = function e(t) {
        var n = 0,
          r = new Map,
          i = new Map,
          s = [],
          p = {
            url: t.url,
            fetchOptions: t.fetchOptions,
            fetch: t.fetch,
            preferGetMethod: !!t.preferGetMethod,
            requestPolicy: t.requestPolicy || "cache-first"
          },
          {
            source: l,
            next: g
          } = Ca(),
          x = !1;

        function m(w) {
          if (w && g(w), !x) {
            for (x = !0; x && (w = s.shift());) g(w);
            x = !1
          }
        }
        var u = w => {
            var L = te(A => A.operation.kind === w.kind && A.operation.key === w.key && (!A.operation.context._instance || A.operation.context._instance === w.context._instance))(T);
            return t.maskTypename && (L = Xe(A => ({
              ...A,
              data: vn(A.data, !0)
            }))(L)), w.kind === "mutation" ? $r(1)(Yr(() => g(w))(L)) : Ze(zr(() => {
              r.delete(w.key), i.delete(w.key);
              for (var A = s.length - 1; A >= 0; A--) s[A].key === w.key && s.splice(A, 1);
              g(et("teardown", w, w.context))
            })(Et(A => {
              r.set(w.key, A)
            })(Aa(A => w.kind !== "query" || A.stale ? Gr(A) : At([Gr(A), Xe(() => ({
              ...A,
              stale: !0
            }))($r(1)(te(D => D.kind === "query" && D.key === w.key && D.context.requestPolicy !== "cache-only")(l)))]))(Vr(te(A => A.kind === "teardown" && A.key === w.key)(l))(L)))))
          },
          d = this instanceof e ? this : Object.create(e.prototype),
          h = Object.assign(d, {
            suspense: !!t.suspense,
            operations$: l,
            reexecuteOperation(w) {
              (w.kind === "mutation" || i.has(w.key)) && (s.push(w), Promise.resolve().then(m))
            },
            createRequestOperation(w, L, A) {
              return A || (A = {}), Oa(L.query), et(w, L, {
                _instance: w === "mutation" ? n = n + 1 | 0 : void 0,
                ...p,
                ...A,
                requestPolicy: A.requestPolicy || p.requestPolicy,
                suspense: A.suspense || A.suspense !== !1 && h.suspense
              })
            },
            executeRequestOperation(w) {
              return w.kind === "mutation" ? u(w) : ln(L => {
                var A = i.get(w.key);
                A || i.set(w.key, A = u(w));
                var D = w.context.requestPolicy === "cache-and-network" || w.context.requestPolicy === "network-only";
                return Nt(L.next)(zr(() => {
                  x = !1, L.complete()
                })(Yr(() => {
                  var S = r.get(w.key);
                  if (w.kind === "subscription") return m(w);
                  D && m(w), S != null && S === r.get(w.key) ? L.next(D ? {
                    ...S,
                    stale: !0
                  } : S) : D || m(w)
                })(A))).unsubscribe
              })
            },
            executeQuery(w, L) {
              var A = h.createRequestOperation("query", w, L);
              return h.executeRequestOperation(A)
            },
            executeSubscription(w, L) {
              var A = h.createRequestOperation("subscription", w, L);
              return h.executeRequestOperation(A)
            },
            executeMutation(w, L) {
              var A = h.createRequestOperation("mutation", w, L);
              return h.executeRequestOperation(A)
            },
            query(w, L, A) {
              return (!A || typeof A.suspense != "boolean") && (A = {
                ...A,
                suspense: !1
              }), ti(h.executeQuery(mn(w, L), A))
            },
            readQuery(w, L, A) {
              var D = null;
              return Nt(S => {
                D = S
              })(h.query(w, L, A)).unsubscribe(), D
            },
            subscription: (w, L, A) => h.executeSubscription(mn(w, L), A),
            mutation: (w, L, A) => ti(h.executeMutation(mn(w, L), A))
          }),
          y = $a,
          b = Ga(t.exchanges !== void 0 ? t.exchanges : Qa),
          T = Ze(b({
            client: h,
            dispatchDebug: y,
            forward: Va({
              dispatchDebug: y
            })
          })(l));
        return Ta(T), h
      };
    const Wa = new Ha({
        url: "https://content-gateway.us.production.amboss.com",
        requestPolicy: "cache-first",
        exchanges: [oi, ri, ai]
      }),
      Ja = `
    query AnkiMobilePhraseGroup($eid: String!) {
        phraseGroup(eid: $eid) {
            eid
            title
            synonyms
            abstract
            translation
            destinations {
                label
                articleEid
                anchor
                publicUrl
            }
            media {
                eid
                title
                canonicalUrl
                aspectRatio
                copyright {
                    html
                }
            }
        }
    }
`,
      qa = (e, t, n, r, i) => {
        const s = {
          "X-Amboss-Anon-Id": t,
          "X-Amboss-App": "amboss-anki-deck-template-script"
        };
        n && (s.Authorization = `Bearer ${n}`), Wa.query(Ja, {
          eid: e
        }, {
          fetch: (p, l) => fetch(p, {
            ...l,
            headers: {
              ...l.headers,
              ...s
            }
          })
        }).toPromise().then(p => {
          const l = p.error && p.error.graphQLErrors && p.error.graphQLErrors.map(x => x.message);
          if (l && l.includes("permission.user_is_not_authorized")) {
            i(403);
            return
          }
          const g = p.data && p.data.phraseGroup;
          if (g) {
            r(g);
            return
          }
          p.error && p.error.response && p.error.response.status ? i(p.error.response.status) : p.error && p.error.message ? i(p.error.response.message) : i("GraphQL client returns with neither error nor data")
        }).catch(p => {
          i(p || "GraphQL client errors with no reason")
        })
      };
    var Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      si = {},
      Tt = {};
    Tt.byteLength = es, Tt.toByteArray = ns, Tt.fromByteArray = os;
    for (var ce = [], ne = [], Za = typeof Uint8Array < "u" ? Uint8Array : Array, wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", De = 0, Ka = wn.length; De < Ka; ++De) ce[De] = wn[De], ne[wn.charCodeAt(De)] = De;
    ne["-".charCodeAt(0)] = 62, ne["_".charCodeAt(0)] = 63;

    function ci(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      n === -1 && (n = t);
      var r = n === t ? 0 : 4 - n % 4;
      return [n, r]
    }

    function es(e) {
      var t = ci(e),
        n = t[0],
        r = t[1];
      return (n + r) * 3 / 4 - r
    }

    function ts(e, t, n) {
      return (t + n) * 3 / 4 - n
    }

    function ns(e) {
      var t, n = ci(e),
        r = n[0],
        i = n[1],
        s = new Za(ts(e, r, i)),
        p = 0,
        l = i > 0 ? r - 4 : r,
        g;
      for (g = 0; g < l; g += 4) t = ne[e.charCodeAt(g)] << 18 | ne[e.charCodeAt(g + 1)] << 12 | ne[e.charCodeAt(g + 2)] << 6 | ne[e.charCodeAt(g + 3)], s[p++] = t >> 16 & 255, s[p++] = t >> 8 & 255, s[p++] = t & 255;
      return i === 2 && (t = ne[e.charCodeAt(g)] << 2 | ne[e.charCodeAt(g + 1)] >> 4, s[p++] = t & 255), i === 1 && (t = ne[e.charCodeAt(g)] << 10 | ne[e.charCodeAt(g + 1)] << 4 | ne[e.charCodeAt(g + 2)] >> 2, s[p++] = t >> 8 & 255, s[p++] = t & 255), s
    }

    function rs(e) {
      return ce[e >> 18 & 63] + ce[e >> 12 & 63] + ce[e >> 6 & 63] + ce[e & 63]
    }

    function is(e, t, n) {
      for (var r, i = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), i.push(rs(r));
      return i.join("")
    }

    function os(e) {
      for (var t, n = e.length, r = n % 3, i = [], s = 16383, p = 0, l = n - r; p < l; p += s) i.push(is(e, p, p + s > l ? l : p + s));
      return r === 1 ? (t = e[n - 1], i.push(ce[t >> 2] + ce[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(ce[t >> 10] + ce[t >> 4 & 63] + ce[t << 2 & 63] + "=")), i.join("")
    }
    var In = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    In.read = function (e, t, n, r, i) {
      var s, p, l = i * 8 - r - 1,
        g = (1 << l) - 1,
        x = g >> 1,
        m = -7,
        u = n ? i - 1 : 0,
        d = n ? -1 : 1,
        h = e[t + u];
      for (u += d, s = h & (1 << -m) - 1, h >>= -m, m += l; m > 0; s = s * 256 + e[t + u], u += d, m -= 8);
      for (p = s & (1 << -m) - 1, s >>= -m, m += r; m > 0; p = p * 256 + e[t + u], u += d, m -= 8);
      if (s === 0) s = 1 - x;
      else {
        if (s === g) return p ? NaN : (h ? -1 : 1) * (1 / 0);
        p = p + Math.pow(2, r), s = s - x
      }
      return (h ? -1 : 1) * p * Math.pow(2, s - r)
    }, In.write = function (e, t, n, r, i, s) {
      var p, l, g, x = s * 8 - i - 1,
        m = (1 << x) - 1,
        u = m >> 1,
        d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        h = r ? 0 : s - 1,
        y = r ? 1 : -1,
        b = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, p = m) : (p = Math.floor(Math.log(t) / Math.LN2), t * (g = Math.pow(2, -p)) < 1 && (p--, g *= 2), p + u >= 1 ? t += d / g : t += d * Math.pow(2, 1 - u), t * g >= 2 && (p++, g /= 2), p + u >= m ? (l = 0, p = m) : p + u >= 1 ? (l = (t * g - 1) * Math.pow(2, i), p = p + u) : (l = t * Math.pow(2, u - 1) * Math.pow(2, i), p = 0)); i >= 8; e[n + h] = l & 255, h += y, l /= 256, i -= 8);
      for (p = p << i | l, x += i; x > 0; e[n + h] = p & 255, h += y, p /= 256, x -= 8);
      e[n + h - y] |= b * 128
    };
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    (function (e) {
      const t = Tt,
        n = In,
        r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      e.Buffer = l, e.SlowBuffer = L, e.INSPECT_MAX_BYTES = 50;
      const i = 2147483647;
      e.kMaxLength = i, l.TYPED_ARRAY_SUPPORT = s(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

      function s() {
        try {
          const c = new Uint8Array(1),
            o = {
              foo: function () {
                return 42
              }
            };
          return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(c, o), c.foo() === 42
        } catch {
          return !1
        }
      }
      Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (l.isBuffer(this)) return this.buffer
        }
      }), Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (l.isBuffer(this)) return this.byteOffset
        }
      });

      function p(c) {
        if (c > i) throw new RangeError('The value "' + c + '" is invalid for option "size"');
        const o = new Uint8Array(c);
        return Object.setPrototypeOf(o, l.prototype), o
      }

      function l(c, o, a) {
        if (typeof c == "number") {
          if (typeof o == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return u(c)
        }
        return g(c, o, a)
      }
      l.poolSize = 8192;

      function g(c, o, a) {
        if (typeof c == "string") return d(c, o);
        if (ArrayBuffer.isView(c)) return y(c);
        if (c == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c);
        if (K(c, ArrayBuffer) || c && K(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(c, SharedArrayBuffer) || c && K(c.buffer, SharedArrayBuffer))) return b(c, o, a);
        if (typeof c == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const f = c.valueOf && c.valueOf();
        if (f != null && f !== c) return l.from(f, o, a);
        const v = T(c);
        if (v) return v;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function") return l.from(c[Symbol.toPrimitive]("string"), o, a);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c)
      }
      l.from = function (c, o, a) {
        return g(c, o, a)
      }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);

      function x(c) {
        if (typeof c != "number") throw new TypeError('"size" argument must be of type number');
        if (c < 0) throw new RangeError('The value "' + c + '" is invalid for option "size"')
      }

      function m(c, o, a) {
        return x(c), c <= 0 ? p(c) : o !== void 0 ? typeof a == "string" ? p(c).fill(o, a) : p(c).fill(o) : p(c)
      }
      l.alloc = function (c, o, a) {
        return m(c, o, a)
      };

      function u(c) {
        return x(c), p(c < 0 ? 0 : w(c) | 0)
      }
      l.allocUnsafe = function (c) {
        return u(c)
      }, l.allocUnsafeSlow = function (c) {
        return u(c)
      };

      function d(c, o) {
        if ((typeof o != "string" || o === "") && (o = "utf8"), !l.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
        const a = A(c, o) | 0;
        let f = p(a);
        const v = f.write(c, o);
        return v !== a && (f = f.slice(0, v)), f
      }

      function h(c) {
        const o = c.length < 0 ? 0 : w(c.length) | 0,
          a = p(o);
        for (let f = 0; f < o; f += 1) a[f] = c[f] & 255;
        return a
      }

      function y(c) {
        if (K(c, Uint8Array)) {
          const o = new Uint8Array(c);
          return b(o.buffer, o.byteOffset, o.byteLength)
        }
        return h(c)
      }

      function b(c, o, a) {
        if (o < 0 || c.byteLength < o) throw new RangeError('"offset" is outside of buffer bounds');
        if (c.byteLength < o + (a || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let f;
        return o === void 0 && a === void 0 ? f = new Uint8Array(c) : a === void 0 ? f = new Uint8Array(c, o) : f = new Uint8Array(c, o, a), Object.setPrototypeOf(f, l.prototype), f
      }

      function T(c) {
        if (l.isBuffer(c)) {
          const o = w(c.length) | 0,
            a = p(o);
          return a.length === 0 || c.copy(a, 0, 0, o), a
        }
        if (c.length !== void 0) return typeof c.length != "number" || he(c.length) ? p(0) : h(c);
        if (c.type === "Buffer" && Array.isArray(c.data)) return h(c.data)
      }

      function w(c) {
        if (c >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return c | 0
      }

      function L(c) {
        return +c != c && (c = 0), l.alloc(+c)
      }
      l.isBuffer = function (o) {
        return o != null && o._isBuffer === !0 && o !== l.prototype
      }, l.compare = function (o, a) {
        if (K(o, Uint8Array) && (o = l.from(o, o.offset, o.byteLength)), K(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), !l.isBuffer(o) || !l.isBuffer(a)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (o === a) return 0;
        let f = o.length,
          v = a.length;
        for (let E = 0, N = Math.min(f, v); E < N; ++E)
          if (o[E] !== a[E]) {
            f = o[E], v = a[E];
            break
          } return f < v ? -1 : v < f ? 1 : 0
      }, l.isEncoding = function (o) {
        switch (String(o).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, l.concat = function (o, a) {
        if (!Array.isArray(o)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (o.length === 0) return l.alloc(0);
        let f;
        if (a === void 0)
          for (a = 0, f = 0; f < o.length; ++f) a += o[f].length;
        const v = l.allocUnsafe(a);
        let E = 0;
        for (f = 0; f < o.length; ++f) {
          let N = o[f];
          if (K(N, Uint8Array)) E + N.length > v.length ? (l.isBuffer(N) || (N = l.from(N)), N.copy(v, E)) : Uint8Array.prototype.set.call(v, N, E);
          else if (l.isBuffer(N)) N.copy(v, E);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          E += N.length
        }
        return v
      };

      function A(c, o) {
        if (l.isBuffer(c)) return c.length;
        if (ArrayBuffer.isView(c) || K(c, ArrayBuffer)) return c.byteLength;
        if (typeof c != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c);
        const a = c.length,
          f = arguments.length > 2 && arguments[2] === !0;
        if (!f && a === 0) return 0;
        let v = !1;
        for (;;) switch (o) {
          case "ascii":
          case "latin1":
          case "binary":
            return a;
          case "utf8":
          case "utf-8":
            return st(c).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return a * 2;
          case "hex":
            return a >>> 1;
          case "base64":
            return ct(c).length;
          default:
            if (v) return f ? -1 : st(c).length;
            o = ("" + o).toLowerCase(), v = !0
        }
      }
      l.byteLength = A;

      function D(c, o, a) {
        let f = !1;
        if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, o >>>= 0, a <= o)) return "";
        for (c || (c = "utf8");;) switch (c) {
          case "hex":
            return Z(this, o, a);
          case "utf8":
          case "utf-8":
            return X(this, o, a);
          case "ascii":
            return Se(this, o, a);
          case "latin1":
          case "binary":
            return Oe(this, o, a);
          case "base64":
            return be(this, o, a);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ue(this, o, a);
          default:
            if (f) throw new TypeError("Unknown encoding: " + c);
            c = (c + "").toLowerCase(), f = !0
        }
      }
      l.prototype._isBuffer = !0;

      function S(c, o, a) {
        const f = c[o];
        c[o] = c[a], c[a] = f
      }
      l.prototype.swap16 = function () {
        const o = this.length;
        if (o % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let a = 0; a < o; a += 2) S(this, a, a + 1);
        return this
      }, l.prototype.swap32 = function () {
        const o = this.length;
        if (o % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let a = 0; a < o; a += 4) S(this, a, a + 3), S(this, a + 1, a + 2);
        return this
      }, l.prototype.swap64 = function () {
        const o = this.length;
        if (o % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let a = 0; a < o; a += 8) S(this, a, a + 7), S(this, a + 1, a + 6), S(this, a + 2, a + 5), S(this, a + 3, a + 4);
        return this
      }, l.prototype.toString = function () {
        const o = this.length;
        return o === 0 ? "" : arguments.length === 0 ? X(this, 0, o) : D.apply(this, arguments)
      }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function (o) {
        if (!l.isBuffer(o)) throw new TypeError("Argument must be a Buffer");
        return this === o ? !0 : l.compare(this, o) === 0
      }, l.prototype.inspect = function () {
        let o = "";
        const a = e.INSPECT_MAX_BYTES;
        return o = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (o += " ... "), "<Buffer " + o + ">"
      }, r && (l.prototype[r] = l.prototype.inspect), l.prototype.compare = function (o, a, f, v, E) {
        if (K(o, Uint8Array) && (o = l.from(o, o.offset, o.byteLength)), !l.isBuffer(o)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o);
        if (a === void 0 && (a = 0), f === void 0 && (f = o ? o.length : 0), v === void 0 && (v = 0), E === void 0 && (E = this.length), a < 0 || f > o.length || v < 0 || E > this.length) throw new RangeError("out of range index");
        if (v >= E && a >= f) return 0;
        if (v >= E) return -1;
        if (a >= f) return 1;
        if (a >>>= 0, f >>>= 0, v >>>= 0, E >>>= 0, this === o) return 0;
        let N = E - v,
          B = f - a;
        const _ = Math.min(N, B),
          U = this.slice(v, E),
          P = o.slice(a, f);
        for (let z = 0; z < _; ++z)
          if (U[z] !== P[z]) {
            N = U[z], B = P[z];
            break
          } return N < B ? -1 : B < N ? 1 : 0
      };

      function F(c, o, a, f, v) {
        if (c.length === 0) return -1;
        if (typeof a == "string" ? (f = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, he(a) && (a = v ? 0 : c.length - 1), a < 0 && (a = c.length + a), a >= c.length) {
          if (v) return -1;
          a = c.length - 1
        } else if (a < 0)
          if (v) a = 0;
          else return -1;
        if (typeof o == "string" && (o = l.from(o, f)), l.isBuffer(o)) return o.length === 0 ? -1 : I(c, o, a, f, v);
        if (typeof o == "number") return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? v ? Uint8Array.prototype.indexOf.call(c, o, a) : Uint8Array.prototype.lastIndexOf.call(c, o, a) : I(c, [o], a, f, v);
        throw new TypeError("val must be string, number or Buffer")
      }

      function I(c, o, a, f, v) {
        let E = 1,
          N = c.length,
          B = o.length;
        if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
          if (c.length < 2 || o.length < 2) return -1;
          E = 2, N /= 2, B /= 2, a /= 2
        }

        function _(P, z) {
          return E === 1 ? P[z] : P.readUInt16BE(z * E)
        }
        let U;
        if (v) {
          let P = -1;
          for (U = a; U < N; U++)
            if (_(c, U) === _(o, P === -1 ? 0 : U - P)) {
              if (P === -1 && (P = U), U - P + 1 === B) return P * E
            } else P !== -1 && (U -= U - P), P = -1
        } else
          for (a + B > N && (a = N - B), U = a; U >= 0; U--) {
            let P = !0;
            for (let z = 0; z < B; z++)
              if (_(c, U + z) !== _(o, z)) {
                P = !1;
                break
              } if (P) return U
          }
        return -1
      }
      l.prototype.includes = function (o, a, f) {
        return this.indexOf(o, a, f) !== -1
      }, l.prototype.indexOf = function (o, a, f) {
        return F(this, o, a, f, !0)
      }, l.prototype.lastIndexOf = function (o, a, f) {
        return F(this, o, a, f, !1)
      };

      function Y(c, o, a, f) {
        a = Number(a) || 0;
        const v = c.length - a;
        f ? (f = Number(f), f > v && (f = v)) : f = v;
        const E = o.length;
        f > E / 2 && (f = E / 2);
        let N;
        for (N = 0; N < f; ++N) {
          const B = parseInt(o.substr(N * 2, 2), 16);
          if (he(B)) return N;
          c[a + N] = B
        }
        return N
      }

      function Q(c, o, a, f) {
        return _e(st(o, c.length - a), c, a, f)
      }

      function V(c, o, a, f) {
        return _e(Nn(o), c, a, f)
      }

      function ae(c, o, a, f) {
        return _e(ct(o), c, a, f)
      }

      function ve(c, o, a, f) {
        return _e(Be(o, c.length - a), c, a, f)
      }
      l.prototype.write = function (o, a, f, v) {
        if (a === void 0) v = "utf8", f = this.length, a = 0;
        else if (f === void 0 && typeof a == "string") v = a, f = this.length, a = 0;
        else if (isFinite(a)) a = a >>> 0, isFinite(f) ? (f = f >>> 0, v === void 0 && (v = "utf8")) : (v = f, f = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const E = this.length - a;
        if ((f === void 0 || f > E) && (f = E), o.length > 0 && (f < 0 || a < 0) || a > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        v || (v = "utf8");
        let N = !1;
        for (;;) switch (v) {
          case "hex":
            return Y(this, o, a, f);
          case "utf8":
          case "utf-8":
            return Q(this, o, a, f);
          case "ascii":
          case "latin1":
          case "binary":
            return V(this, o, a, f);
          case "base64":
            return ae(this, o, a, f);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ve(this, o, a, f);
          default:
            if (N) throw new TypeError("Unknown encoding: " + v);
            v = ("" + v).toLowerCase(), N = !0
        }
      }, l.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      };

      function be(c, o, a) {
        return o === 0 && a === c.length ? t.fromByteArray(c) : t.fromByteArray(c.slice(o, a))
      }

      function X(c, o, a) {
        a = Math.min(c.length, a);
        const f = [];
        let v = o;
        for (; v < a;) {
          const E = c[v];
          let N = null,
            B = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
          if (v + B <= a) {
            let _, U, P, z;
            switch (B) {
              case 1:
                E < 128 && (N = E);
                break;
              case 2:
                _ = c[v + 1], (_ & 192) === 128 && (z = (E & 31) << 6 | _ & 63, z > 127 && (N = z));
                break;
              case 3:
                _ = c[v + 1], U = c[v + 2], (_ & 192) === 128 && (U & 192) === 128 && (z = (E & 15) << 12 | (_ & 63) << 6 | U & 63, z > 2047 && (z < 55296 || z > 57343) && (N = z));
                break;
              case 4:
                _ = c[v + 1], U = c[v + 2], P = c[v + 3], (_ & 192) === 128 && (U & 192) === 128 && (P & 192) === 128 && (z = (E & 15) << 18 | (_ & 63) << 12 | (U & 63) << 6 | P & 63, z > 65535 && z < 1114112 && (N = z))
            }
          }
          N === null ? (N = 65533, B = 1) : N > 65535 && (N -= 65536, f.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), f.push(N), v += B
        }
        return ke(f)
      }
      const fe = 4096;

      function ke(c) {
        const o = c.length;
        if (o <= fe) return String.fromCharCode.apply(String, c);
        let a = "",
          f = 0;
        for (; f < o;) a += String.fromCharCode.apply(String, c.slice(f, f += fe));
        return a
      }

      function Se(c, o, a) {
        let f = "";
        a = Math.min(c.length, a);
        for (let v = o; v < a; ++v) f += String.fromCharCode(c[v] & 127);
        return f
      }

      function Oe(c, o, a) {
        let f = "";
        a = Math.min(c.length, a);
        for (let v = o; v < a; ++v) f += String.fromCharCode(c[v]);
        return f
      }

      function Z(c, o, a) {
        const f = c.length;
        (!o || o < 0) && (o = 0), (!a || a < 0 || a > f) && (a = f);
        let v = "";
        for (let E = o; E < a; ++E) v += Mn[c[E]];
        return v
      }

      function ue(c, o, a) {
        const f = c.slice(o, a);
        let v = "";
        for (let E = 0; E < f.length - 1; E += 2) v += String.fromCharCode(f[E] + f[E + 1] * 256);
        return v
      }
      l.prototype.slice = function (o, a) {
        const f = this.length;
        o = ~~o, a = a === void 0 ? f : ~~a, o < 0 ? (o += f, o < 0 && (o = 0)) : o > f && (o = f), a < 0 ? (a += f, a < 0 && (a = 0)) : a > f && (a = f), a < o && (a = o);
        const v = this.subarray(o, a);
        return Object.setPrototypeOf(v, l.prototype), v
      };

      function $(c, o, a) {
        if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
        if (c + o > a) throw new RangeError("Trying to access beyond buffer length")
      }
      l.prototype.readUintLE = l.prototype.readUIntLE = function (o, a, f) {
        o = o >>> 0, a = a >>> 0, f || $(o, a, this.length);
        let v = this[o],
          E = 1,
          N = 0;
        for (; ++N < a && (E *= 256);) v += this[o + N] * E;
        return v
      }, l.prototype.readUintBE = l.prototype.readUIntBE = function (o, a, f) {
        o = o >>> 0, a = a >>> 0, f || $(o, a, this.length);
        let v = this[o + --a],
          E = 1;
        for (; a > 0 && (E *= 256);) v += this[o + --a] * E;
        return v
      }, l.prototype.readUint8 = l.prototype.readUInt8 = function (o, a) {
        return o = o >>> 0, a || $(o, 1, this.length), this[o]
      }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function (o, a) {
        return o = o >>> 0, a || $(o, 2, this.length), this[o] | this[o + 1] << 8
      }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function (o, a) {
        return o = o >>> 0, a || $(o, 2, this.length), this[o] << 8 | this[o + 1]
      }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216
      }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3])
      }, l.prototype.readBigUInt64LE = M(function (o) {
        o = o >>> 0, xe(o, "offset");
        const a = this[o],
          f = this[o + 7];
        (a === void 0 || f === void 0) && pe(o, this.length - 8);
        const v = a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24,
          E = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + f * 2 ** 24;
        return BigInt(v) + (BigInt(E) << BigInt(32))
      }), l.prototype.readBigUInt64BE = M(function (o) {
        o = o >>> 0, xe(o, "offset");
        const a = this[o],
          f = this[o + 7];
        (a === void 0 || f === void 0) && pe(o, this.length - 8);
        const v = a * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o],
          E = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + f;
        return (BigInt(v) << BigInt(32)) + BigInt(E)
      }), l.prototype.readIntLE = function (o, a, f) {
        o = o >>> 0, a = a >>> 0, f || $(o, a, this.length);
        let v = this[o],
          E = 1,
          N = 0;
        for (; ++N < a && (E *= 256);) v += this[o + N] * E;
        return E *= 128, v >= E && (v -= Math.pow(2, 8 * a)), v
      }, l.prototype.readIntBE = function (o, a, f) {
        o = o >>> 0, a = a >>> 0, f || $(o, a, this.length);
        let v = a,
          E = 1,
          N = this[o + --v];
        for (; v > 0 && (E *= 256);) N += this[o + --v] * E;
        return E *= 128, N >= E && (N -= Math.pow(2, 8 * a)), N
      }, l.prototype.readInt8 = function (o, a) {
        return o = o >>> 0, a || $(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o]
      }, l.prototype.readInt16LE = function (o, a) {
        o = o >>> 0, a || $(o, 2, this.length);
        const f = this[o] | this[o + 1] << 8;
        return f & 32768 ? f | 4294901760 : f
      }, l.prototype.readInt16BE = function (o, a) {
        o = o >>> 0, a || $(o, 2, this.length);
        const f = this[o + 1] | this[o] << 8;
        return f & 32768 ? f | 4294901760 : f
      }, l.prototype.readInt32LE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24
      }, l.prototype.readInt32BE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]
      }, l.prototype.readBigInt64LE = M(function (o) {
        o = o >>> 0, xe(o, "offset");
        const a = this[o],
          f = this[o + 7];
        (a === void 0 || f === void 0) && pe(o, this.length - 8);
        const v = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (f << 24);
        return (BigInt(v) << BigInt(32)) + BigInt(a + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24)
      }), l.prototype.readBigInt64BE = M(function (o) {
        o = o >>> 0, xe(o, "offset");
        const a = this[o],
          f = this[o + 7];
        (a === void 0 || f === void 0) && pe(o, this.length - 8);
        const v = (a << 24) + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
        return (BigInt(v) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + f)
      }), l.prototype.readFloatLE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), n.read(this, o, !0, 23, 4)
      }, l.prototype.readFloatBE = function (o, a) {
        return o = o >>> 0, a || $(o, 4, this.length), n.read(this, o, !1, 23, 4)
      }, l.prototype.readDoubleLE = function (o, a) {
        return o = o >>> 0, a || $(o, 8, this.length), n.read(this, o, !0, 52, 8)
      }, l.prototype.readDoubleBE = function (o, a) {
        return o = o >>> 0, a || $(o, 8, this.length), n.read(this, o, !1, 52, 8)
      };

      function H(c, o, a, f, v, E) {
        if (!l.isBuffer(c)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (o > v || o < E) throw new RangeError('"value" argument is out of bounds');
        if (a + f > c.length) throw new RangeError("Index out of range")
      }
      l.prototype.writeUintLE = l.prototype.writeUIntLE = function (o, a, f, v) {
        if (o = +o, a = a >>> 0, f = f >>> 0, !v) {
          const B = Math.pow(2, 8 * f) - 1;
          H(this, o, a, f, B, 0)
        }
        let E = 1,
          N = 0;
        for (this[a] = o & 255; ++N < f && (E *= 256);) this[a + N] = o / E & 255;
        return a + f
      }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function (o, a, f, v) {
        if (o = +o, a = a >>> 0, f = f >>> 0, !v) {
          const B = Math.pow(2, 8 * f) - 1;
          H(this, o, a, f, B, 0)
        }
        let E = f - 1,
          N = 1;
        for (this[a + E] = o & 255; --E >= 0 && (N *= 256);) this[a + E] = o / N & 255;
        return a + f
      }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 1, 255, 0), this[a] = o & 255, a + 1
      }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 2, 65535, 0), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2
      }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 2, 65535, 0), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2
      }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 4, 4294967295, 0), this[a + 3] = o >>> 24, this[a + 2] = o >>> 16, this[a + 1] = o >>> 8, this[a] = o & 255, a + 4
      }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 4, 4294967295, 0), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4
      };

      function kt(c, o, a, f, v) {
        Ae(o, f, v, c, a, 7);
        let E = Number(o & BigInt(4294967295));
        c[a++] = E, E = E >> 8, c[a++] = E, E = E >> 8, c[a++] = E, E = E >> 8, c[a++] = E;
        let N = Number(o >> BigInt(32) & BigInt(4294967295));
        return c[a++] = N, N = N >> 8, c[a++] = N, N = N >> 8, c[a++] = N, N = N >> 8, c[a++] = N, a
      }

      function rt(c, o, a, f, v) {
        Ae(o, f, v, c, a, 7);
        let E = Number(o & BigInt(4294967295));
        c[a + 7] = E, E = E >> 8, c[a + 6] = E, E = E >> 8, c[a + 5] = E, E = E >> 8, c[a + 4] = E;
        let N = Number(o >> BigInt(32) & BigInt(4294967295));
        return c[a + 3] = N, N = N >> 8, c[a + 2] = N, N = N >> 8, c[a + 1] = N, N = N >> 8, c[a] = N, a + 8
      }
      l.prototype.writeBigUInt64LE = M(function (o, a = 0) {
        return kt(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"))
      }), l.prototype.writeBigUInt64BE = M(function (o, a = 0) {
        return rt(this, o, a, BigInt(0), BigInt("0xffffffffffffffff"))
      }), l.prototype.writeIntLE = function (o, a, f, v) {
        if (o = +o, a = a >>> 0, !v) {
          const _ = Math.pow(2, 8 * f - 1);
          H(this, o, a, f, _ - 1, -_)
        }
        let E = 0,
          N = 1,
          B = 0;
        for (this[a] = o & 255; ++E < f && (N *= 256);) o < 0 && B === 0 && this[a + E - 1] !== 0 && (B = 1), this[a + E] = (o / N >> 0) - B & 255;
        return a + f
      }, l.prototype.writeIntBE = function (o, a, f, v) {
        if (o = +o, a = a >>> 0, !v) {
          const _ = Math.pow(2, 8 * f - 1);
          H(this, o, a, f, _ - 1, -_)
        }
        let E = f - 1,
          N = 1,
          B = 0;
        for (this[a + E] = o & 255; --E >= 0 && (N *= 256);) o < 0 && B === 0 && this[a + E + 1] !== 0 && (B = 1), this[a + E] = (o / N >> 0) - B & 255;
        return a + f
      }, l.prototype.writeInt8 = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[a] = o & 255, a + 1
      }, l.prototype.writeInt16LE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 2, 32767, -32768), this[a] = o & 255, this[a + 1] = o >>> 8, a + 2
      }, l.prototype.writeInt16BE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 2, 32767, -32768), this[a] = o >>> 8, this[a + 1] = o & 255, a + 2
      }, l.prototype.writeInt32LE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 4, 2147483647, -2147483648), this[a] = o & 255, this[a + 1] = o >>> 8, this[a + 2] = o >>> 16, this[a + 3] = o >>> 24, a + 4
      }, l.prototype.writeInt32BE = function (o, a, f) {
        return o = +o, a = a >>> 0, f || H(this, o, a, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[a] = o >>> 24, this[a + 1] = o >>> 16, this[a + 2] = o >>> 8, this[a + 3] = o & 255, a + 4
      }, l.prototype.writeBigInt64LE = M(function (o, a = 0) {
        return kt(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
      }), l.prototype.writeBigInt64BE = M(function (o, a = 0) {
        return rt(this, o, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
      });

      function it(c, o, a, f, v, E) {
        if (a + f > c.length) throw new RangeError("Index out of range");
        if (a < 0) throw new RangeError("Index out of range")
      }

      function ot(c, o, a, f, v) {
        return o = +o, a = a >>> 0, v || it(c, o, a, 4), n.write(c, o, a, f, 23, 4), a + 4
      }
      l.prototype.writeFloatLE = function (o, a, f) {
        return ot(this, o, a, !0, f)
      }, l.prototype.writeFloatBE = function (o, a, f) {
        return ot(this, o, a, !1, f)
      };

      function St(c, o, a, f, v) {
        return o = +o, a = a >>> 0, v || it(c, o, a, 8), n.write(c, o, a, f, 52, 8), a + 8
      }
      l.prototype.writeDoubleLE = function (o, a, f) {
        return St(this, o, a, !0, f)
      }, l.prototype.writeDoubleBE = function (o, a, f) {
        return St(this, o, a, !1, f)
      }, l.prototype.copy = function (o, a, f, v) {
        if (!l.isBuffer(o)) throw new TypeError("argument should be a Buffer");
        if (f || (f = 0), !v && v !== 0 && (v = this.length), a >= o.length && (a = o.length), a || (a = 0), v > 0 && v < f && (v = f), v === f || o.length === 0 || this.length === 0) return 0;
        if (a < 0) throw new RangeError("targetStart out of bounds");
        if (f < 0 || f >= this.length) throw new RangeError("Index out of range");
        if (v < 0) throw new RangeError("sourceEnd out of bounds");
        v > this.length && (v = this.length), o.length - a < v - f && (v = o.length - a + f);
        const E = v - f;
        return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, f, v) : Uint8Array.prototype.set.call(o, this.subarray(f, v), a), E
      }, l.prototype.fill = function (o, a, f, v) {
        if (typeof o == "string") {
          if (typeof a == "string" ? (v = a, a = 0, f = this.length) : typeof f == "string" && (v = f, f = this.length), v !== void 0 && typeof v != "string") throw new TypeError("encoding must be a string");
          if (typeof v == "string" && !l.isEncoding(v)) throw new TypeError("Unknown encoding: " + v);
          if (o.length === 1) {
            const N = o.charCodeAt(0);
            (v === "utf8" && N < 128 || v === "latin1") && (o = N)
          }
        } else typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
        if (a < 0 || this.length < a || this.length < f) throw new RangeError("Out of range index");
        if (f <= a) return this;
        a = a >>> 0, f = f === void 0 ? this.length : f >>> 0, o || (o = 0);
        let E;
        if (typeof o == "number")
          for (E = a; E < f; ++E) this[E] = o;
        else {
          const N = l.isBuffer(o) ? o : l.from(o, v),
            B = N.length;
          if (B === 0) throw new TypeError('The value "' + o + '" is invalid for argument "value"');
          for (E = 0; E < f - a; ++E) this[E + a] = N[E % B]
        }
        return this
      };
      const le = {};

      function je(c, o, a) {
        le[c] = class extends a {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: o.apply(this, arguments),
              writable: !0,
              configurable: !0
            }), this.name = `${this.name} [${c}]`, this.stack, delete this.name
          }
          get code() {
            return c
          }
          set code(v) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: v,
              writable: !0
            })
          }
          toString() {
            return `${this.name} [${c}]: ${this.message}`
          }
        }
      }
      je("ERR_BUFFER_OUT_OF_BOUNDS", function (c) {
        return c ? `${c} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
      }, RangeError), je("ERR_INVALID_ARG_TYPE", function (c, o) {
        return `The "${c}" argument must be of type number. Received type ${typeof o}`
      }, TypeError), je("ERR_OUT_OF_RANGE", function (c, o, a) {
        let f = `The value of "${c}" is out of range.`,
          v = a;
        return Number.isInteger(a) && Math.abs(a) > 2 ** 32 ? v = at(String(a)) : typeof a == "bigint" && (v = String(a), (a > BigInt(2) ** BigInt(32) || a < -(BigInt(2) ** BigInt(32))) && (v = at(v)), v += "n"), f += ` It must be ${o}. Received ${v}`, f
      }, RangeError);

      function at(c) {
        let o = "",
          a = c.length;
        const f = c[0] === "-" ? 1 : 0;
        for (; a >= f + 4; a -= 3) o = `_${c.slice(a - 3, a)}${o}`;
        return `${c.slice(0, a)}${o}`
      }

      function Ot(c, o, a) {
        xe(o, "offset"), (c[o] === void 0 || c[o + a] === void 0) && pe(o, c.length - (a + 1))
      }

      function Ae(c, o, a, f, v, E) {
        if (c > a || c < o) {
          const N = typeof o == "bigint" ? "n" : "";
          let B;
          throw E > 3 ? o === 0 || o === BigInt(0) ? B = `>= 0${N} and < 2${N} ** ${(E + 1) * 8}${N}` : B = `>= -(2${N} ** ${(E + 1) * 8 - 1}${N}) and < 2 ** ${(E + 1) * 8 - 1}${N}` : B = `>= ${o}${N} and <= ${a}${N}`, new le.ERR_OUT_OF_RANGE("value", B, c)
        }
        Ot(f, v, E)
      }

      function xe(c, o) {
        if (typeof c != "number") throw new le.ERR_INVALID_ARG_TYPE(o, "number", c)
      }

      function pe(c, o, a) {
        throw Math.floor(c) !== c ? (xe(c, a), new le.ERR_OUT_OF_RANGE(a || "offset", "an integer", c)) : o < 0 ? new le.ERR_BUFFER_OUT_OF_BOUNDS : new le.ERR_OUT_OF_RANGE(a || "offset", `>= ${a ? 1 : 0} and <= ${o}`, c)
      }
      const de = /[^+/0-9A-Za-z-_]/g;

      function jt(c) {
        if (c = c.split("=")[0], c = c.trim().replace(de, ""), c.length < 2) return "";
        for (; c.length % 4 !== 0;) c = c + "=";
        return c
      }

      function st(c, o) {
        o = o || 1 / 0;
        let a;
        const f = c.length;
        let v = null;
        const E = [];
        for (let N = 0; N < f; ++N) {
          if (a = c.charCodeAt(N), a > 55295 && a < 57344) {
            if (!v) {
              if (a > 56319) {
                (o -= 3) > -1 && E.push(239, 191, 189);
                continue
              } else if (N + 1 === f) {
                (o -= 3) > -1 && E.push(239, 191, 189);
                continue
              }
              v = a;
              continue
            }
            if (a < 56320) {
              (o -= 3) > -1 && E.push(239, 191, 189), v = a;
              continue
            }
            a = (v - 55296 << 10 | a - 56320) + 65536
          } else v && (o -= 3) > -1 && E.push(239, 191, 189);
          if (v = null, a < 128) {
            if ((o -= 1) < 0) break;
            E.push(a)
          } else if (a < 2048) {
            if ((o -= 2) < 0) break;
            E.push(a >> 6 | 192, a & 63 | 128)
          } else if (a < 65536) {
            if ((o -= 3) < 0) break;
            E.push(a >> 12 | 224, a >> 6 & 63 | 128, a & 63 | 128)
          } else if (a < 1114112) {
            if ((o -= 4) < 0) break;
            E.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, a & 63 | 128)
          } else throw new Error("Invalid code point")
        }
        return E
      }

      function Nn(c) {
        const o = [];
        for (let a = 0; a < c.length; ++a) o.push(c.charCodeAt(a) & 255);
        return o
      }

      function Be(c, o) {
        let a, f, v;
        const E = [];
        for (let N = 0; N < c.length && !((o -= 2) < 0); ++N) a = c.charCodeAt(N), f = a >> 8, v = a % 256, E.push(v), E.push(f);
        return E
      }

      function ct(c) {
        return t.toByteArray(jt(c))
      }

      function _e(c, o, a, f) {
        let v;
        for (v = 0; v < f && !(v + a >= o.length || v >= c.length); ++v) o[v + a] = c[v];
        return v
      }

      function K(c, o) {
        return c instanceof o || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === o.name
      }

      function he(c) {
        return c !== c
      }
      const Mn = function () {
        const c = "0123456789abcdef",
          o = new Array(256);
        for (let a = 0; a < 16; ++a) {
          const f = a * 16;
          for (let v = 0; v < 16; ++v) o[f + v] = c[a] + c[v]
        }
        return o
      }();

      function M(c) {
        return typeof BigInt > "u" ? j : c
      }

      function j() {
        throw new Error("BigInt not supported")
      }
    })(si);
    let bn = null;

    function An() {
      var r;
      if (bn !== null) return bn;
      const e = document.getElementById("amboss-snippet"),
        t = ((r = e == null ? void 0 : e.dataset) == null ? void 0 : r.addon) || "";
      let n;
      try {
        n = JSON.parse(si.Buffer.from(t, "base64").toString())
      } catch {
        n = {
          anonId: "unknown",
          userId: null,
          token: null
        }
      }
      return bn = n, n
    }
    document.__defineGetter__("cookie", function () {
        return ""
      }),
      function () {
        const e = window.analytics = window.analytics || [];
        if (!e.initialize && !e.invoked) {
          e.invoked = !0, e.methods = ["reset", "setAnonymousId", "identify", "track", "page"], e.factory = function (t) {
            return function () {
              const n = Array.prototype.slice.call(arguments);
              return n.unshift(t), e.push(n), e
            }
          };
          for (let t = 0; t < e.methods.length; t++) {
            const n = e.methods[t];
            e[n] = e.factory(n)
          }
          e.load = function (t, n, r) {
            const i = document.createElement("script");
            i.type = "text/javascript", i.async = !0, i.src = `${r}/${t}/a.min.js`;
            const s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(i, s), e._loadOptions = n
          }, e.SNIPPET_VERSION = "4.1.0", e.load("LMgtVb6YOhvtGHlgEJYb2tz7I1G4l9kI", {
            integrations: {
              All: !1,
              "Segment.io": !0
            }
          }, "https://www.amboss.com/us/api/sprx/cdn")
        }
      }();
    const tt = (e, t = {}) => {
        const n = window.analytics,
          r = An(),
          i = r.userId,
          s = r.anonId,
          p = {
            userId: i,
            anonymousId: s,
            app: {
              name: "amboss-anki-deck-template-script",
              version: "acc2e35",
              ambossLanguage: "en"
            }
          };
        n.Integrations && n.Integrations.hasOwnProperty("Segment.io") && n.Integrations["Segment.io"].storage && !n.Integrations["Segment.io"].storage.toString().includes("disabledSegmentStorage") && (n.Integrations["Segment.io"].storage = () => (window.disabledSegmentStorage = !0, () => {}));
        const l = typeof n.user == "function" ? n.user() : {},
          g = typeof l.id == "function" && l.id(),
          x = typeof l.anonymousId == "function" && l.anonymousId(),
          m = typeof n.reset == "function" && n.reset,
          u = typeof n.identify == "function" && n.identify,
          d = typeof n.setAnonymousId == "function" && n.setAnonymousId;
        s && s !== x && d && d(s), !i && g && m ? m() : i && i !== g && u && u(i), n.track(e, t, p)
      },
      as = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 0 19 24"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="amboss-card-article-icon"
>
    <rect x="4" y="2" width="16" height="20"></rect>
    <line x1="16" y1="6" x2="8" y2="6"></line>
    <line x1="14" y1="10" x2="8" y2="10"></line>
    <rect x="8" y="14" width="8" height="4"></rect>
</svg>
`,
      ss = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="amboss-card-article-icon"
>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
</svg>
`,
      cs = `
<style>    
    .amboss-card, .amboss-card * {
      text-align: left;
      text-decoration: initial;
      background-color: initial;
      font-variant: initial;
      color: initial;
      font-size: 11pt;
      color: #303438;
      font-family: Lato, -apple-system, BlinkMacSystemFont, 'segoe ui', 'avenir next', avenir, 'helvetica neue', helvetica,
      ubuntu, roboto, noto, arial, sans-serif;
      font-feature-settings: 'lnum', 'pnum', 'kern', 'liga', 'clig';
      -webkit-font-smoothing: antialiased;
      font-style: normal;
      font-weight: 400;
      max-width: 600px;
      user-select: text;
    }

    .amboss-register-link {
      text-decoration: underline;
    }

    .amboss-card {
      background-color: white;
    }
    
    .amboss-card-header {
      margin-bottom: 0.9em;
    }
    
    .amboss-card-title {
      font-size: 1.4em;
      font-weight: bold;
      margin-top: 0.4em;
      margin-bottom: 0;
      padding-top: 0;
    }
    
    .amboss-card-subtitles {
      font-size: 1.1em;
      margin-top: 0.24em;
      line-height: 2em;
      margin-bottom: 0.9em;
    }
    
    .amboss-card-subtitles:last-child {
      margin-bottom: 0.9em;
    }
    
    .amboss-synonyms, .amboss-translation {
      font-size: 1.1em;
      line-height: 1.4em;
    }
    
    .amboss-synonyms {
      font-style: italic;
    }
    
    .amboss-translation {
      color: rgb(106, 136, 154);
    }
    
    .amboss-abstract {
      font-size: 1.1em;
      margin-bottom: 0.9em;
      line-height: 1.4em;
      color: #51616d;
    }
    
    /* DESTINATION START */
    .amboss-destinations {
        flex-direction: column;
        display: flex;
        margin-left: -16px;
        margin-right: -16px;
    }
    
    .amboss-destination-container {
        display: flex;
        align-items: center;
        padding: 0.8em;
        border-top: 1px solid #DCE4E8;
    }
    
    .amboss-destination-container:hover {
      background-color: #f9fafb;
    }
    
    .amboss-destination-container:hover .amboss-destination-icon-left {
      stroke: #0099ab;
    }
    
    .amboss-destination-container:hover .amboss-destination-text {
      color: #51616d;
      text-decoration: underline #c0c8cc;
    }
    
    .amboss-destination-icon-left, .amboss-destination-icon-right {
      stroke: #9daebb;
      width: 20px;
      padding-left: 4px;
      height: auto;
    }
    
    .amboss-destination-icon-right {
      position: absolute;
      right: 1rem;
    }
    
    .amboss-destination-text {
      padding-left: 10px;
      font-size: 1.1em;
      line-height: 1.2em;
      color: #303438;
      max-width: calc(100% - 50px - 28px);
    }
    /* DESTINATION END */
    
    .amboss-card-article-icon {
      vertical-align: middle;
      width: initial;
    }
    
    .amboss-notification {
      padding-bottom: 0.9em;
    }
    
    @keyframes amboss-load-animation {
      to {
        stroke-dashoffset: 136;
      }
    }
    
    .amboss-load {
      stroke: rgb(22, 190, 157);
      animation: 2s linear 0s infinite normal none running amboss-load-animation;
      stroke-dasharray: 17px;
    }
    /* FOOTER START */
    .amboss-card-footer {
        border-top: 1px solid #DCE4E8;
        padding-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: -16px;
        margin-left: -16px;
        padding-right: 16px;
        padding-left: 16px;
    }
    
    .amboss-card-version-info {
      color: #eb5e64;
      font-size: 0.8em;
      font-weight: bold;
    }
    
    .amboss-footer-link {
      font-size: .8em;
      font-weight: bold;
      color: #9daebb;
      text-decoration: underline;
    }
    
    .amboss-footer-link:hover {
      color: #51616d;
    }
    
    .amboss-footer-logo {
      height: 16px;
      max-width: 100%;
      max-height: 100%;
    }
    
    /* MEDIA START */
    
    .amboss-tooltip-media-wrapper {
      display: flex;
    }
    
    .thumbnails-container {
      text-align: center;
      width: 80px;
      height: 250px;
      border-right-color: lightgrey;
      border-right-style: solid;
      border-right-width: 1px;
    }
    
    .thumbnail-image-wrapper {
        display: block;
        text-align: center;
        height: 36px;
        width: 64px;
        overflow: hidden;
        margin-top: 8px;
        border-radius: 8px;
        border-color: lightgrey;
        border-style: solid;
        border-width: 1px;
    }
    
    .thumbnail-image {
      max-height: 36px;
    }
    
    .thumbnail-image-wrapper:hover:not(.thumbnail-active) {
      border-color: darkgrey;
    }
    
    .thumbnail-image-wrapper:active {
      border-color: grey;
    }
    
    .thumbnail-active {
      border-color: grey;
    }
    
    .main-image-container {
      flex: auto;
      text-align: center;
      width: 500px;
      height: 300px;
    }
    
    .main-image-wrapper {
      display: block;
      text-align: center;
      height: 100% !important;
      width: 100% !important;
      // cursor: crosshair;
    }
    
    .main-image {
      height: auto !important;
      width: auto !important;
      max-height: 85% !important;
      max-width: 80% !important;
      margin: 8px;
      margin-bottom: 0;
    }
    
    .main-image-wrapper h5 {
      margin: 0;
      text-align: center;
      color: #51616d;
    }
    
    /******************  WARNINGS AND PLACEHOLDER  ******************/
    .amboss-card-placeholder {
      padding: 0.8em;
      text-align: center;
    }
    
    .amboss-card-server-notification {
      padding-top: 0.8em;
      padding-bottom: 0.4em;
    }
    
    .amboss-card-server-notification-warning {
      background: #F1D56B;
      border-radius: 3.06853px;
      padding: 0.8em 0.6em;
      color: white;
      display: flex;
      align-items: center;
      line-height: 1.2em;
      font-weight: bold;
    }
    
    .amboss-card-server-notification-warning-icon {
      padding-right: 0.4em;
      width: 32px;
    }
    
    .amboss-card-client-notification {
      padding: 0 0.8em 0.8em;
      line-height: 1.5em;
      text-align: center;
    }
    
    .amboss-card-client-notification-error {
      color: red;
    }
    
    .amboss-card-client-notification-access-expired {
      text-align: left;
    }
    
    .amboss-card-client-notification-access-expired-header {
      font-weight: bold;
    }
</style>
`,
      us = `
<div id="amboss-card-placeholder" class="amboss-card-placeholder">
    <svg id="triangle" width="100" height="100" viewBox="-3 -4 39 39" class="container-2420473442">
      <polygon fill="transparent" stroke-width="1" points="16,0 32,32 0,32" class="amboss-load"></polygon>
    </svg>
</div>
`,
      ls = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICBoZWlnaHQ9IjIzOC4xOTAwMiIKICAgd2lkdGg9IjE0NzIuMzgxNSIKICAgaWQ9InN2ZzMxIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAxNDcyLjM4MTUgMjM4LjE5MDAyIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTIiPgogICAgPHN0eWxlCiAgICAgICBpZD0ic3R5bGUxMCI+LmNscy0xe2ZpbGw6IzBhYTdiOTt9LmNscy0ye2ZpbGw6IzAwMDIwZTt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlCiAgICAgaWQ9InRpdGxlMTQiPkxvZ28tdGVhbC1ob3Jpem9udGFsPC90aXRsZT4KICA8cGF0aAogICAgIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIGNsYXNzPSJjbHMtMSIKICAgICBkPSJtIDIyMC42MywyMDIuNDMgLTkyLC0xNjguNyAtOC41NSwxNiAtOC43NCwxNiAtNjYuMjcsMTIxLjQ5IEggMjcuNTggTCAxMTkuOTYsMTcuODUgMTExLjMyLDIgMiwyMDIuNDMgaCAzNC43OSBsIC0xNi42LDMwLjM0IEggMjAyLjQxIEwgMTg1Ljg1LDIwMi40MyBaIE0gMTI4LjcxLDY1LjU5IDE5NS4wNSwxODcuMjIgaCAtMTcuNDggbCAtNDksLTg5Ljc1IC04LjY1LDE1Ljg1IDQwLjMxLDczLjkgSCA2Mi4zNiBaIG0gNDguMTIsMTUyIGggLTEzMSBsIDguMjUsLTE1LjE2IGggMTE0LjQ3IHoiCiAgICAgaWQ9InBhdGgxNiIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIGNsYXNzPSJjbHMtMiIKICAgICBkPSJtIDQ4OC43OSwyMzIuNjkgaCAtMTIgYSA1LjI1LDUuMjUgMCAwIDEgLTMuNDksLTEuMTQgNy40NSw3LjQ1IDAgMCAxIC0yLjEzLC0zIEwgNDQ1Ljc4LDE2Ni4wOCBIIDM0MC4xMyBsIC0yNS4yMyw2Mi40NyBhIDYuNDEsNi40MSAwIDAgMSAtMi4xMywyLjg5IDUuNjUsNS42NSAwIDAgMSAtMy42NCwxLjIxIGggLTExLjg2IGwgODgsLTIxNS4wOCBoIDE1LjUgeiBNIDM0NC44NSwxNTQuNTYgaCA5Ni4zNCBMIDM5Ny4yOSw0NS44OCBxIC0xLjEsLTIuNTggLTIuMSwtNS44NSAtMSwtMy4yNyAtMi4xMywtNi45MSAtMS4wNywzLjY1IC0yLjEzLDYuOTEgLTEuMDYsMy4yNiAtMi4xMyw2IHoiCiAgICAgaWQ9InBhdGgxOCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIGNsYXNzPSJjbHMtMiIKICAgICBkPSJtIDYyNy4xMSwxNzkuMTkgYyAwLjYsLTEuNjIgMS4yNCwtMy4yMiAxLjksLTQuNzkgYSAzOS42MywzOS42MyAwIDAgMSAyLjIsLTQuNDggTCA3MTUuNzIsMjAuNSBhIDUuNDYsNS40NiAwIDAgMSAyLjQzLC0yLjQzIDkuNjksOS42OSAwIDAgMSAzLjM1LC0wLjQ2IGggMTAuNzkgViAyMzIuNjkgSCA3MTguNjEgViA0OS40MyBhIDc5Ljg3LDc5Ljg3IDAgMCAxIDAuNDYsLTguMzYgTCA2MzQuNCwxOTEuMzUgYyAtMS40MiwyLjYzIC0zLjQ0LDMuOTUgLTYuMDgsMy45NSBoIC0yLjQzIHEgLTMuOCwwIC02LjA4LC0zLjk1IEwgNTMyLjg3LDQwLjg3IGEgODMuNzgsODMuNzggMCAwIDEgMC40NSw4LjUxIFYgMjMyLjY5IEggNTE5Ljc5IFYgMTcuNjEgaCAxMC42NCBhIDEwLjM0LDEwLjM0IDAgMCAxIDMuNDIsMC40NiA1LjM0LDUuMzQgMCAwIDEgMi41MSwyLjQzIGwgODYuODMsMTQ5LjU3IGEgNjIuNyw2Mi43IDAgMCAxIDMuOTIsOS4xMiB6IgogICAgIGlkPSJwYXRoMjAiIC8+CiAgPHBhdGgKICAgICBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBjbGFzcz0iY2xzLTIiCiAgICAgZD0iTSA3ODAuOTMsMjMyLjY5IFYgMTcuNjEgaCA2MS44NiBxIDE4LjM5LDAgMzEuODUsMy42NSAxMy40NiwzLjY1IDIyLjI2LDEwLjcyIGEgNDMuNzgsNDMuNzggMCAwIDEgMTMuMTUsMTcuMjUgNTguNDgsNTguNDggMCAwIDEgNC4zNCwyMy4xIDQ2LjI5LDQ2LjI5IDAgMCAxIC0zLDE2LjQyIDQ5LjcxLDQ5LjcxIDAgMCAxIC04LjU5LDE0LjU5IDU1LjE3LDU1LjE3IDAgMCAxIC0xMy43NSwxMS42MyA2Ni4yMSw2Ni4yMSAwIDAgMSAtMTguNjIsNy41MiBxIDI1LjM4LDMuODEgMzkuMDYsMTYuODcgMTMuNjgsMTMuMDYgMTMuNywzNC41MSBhIDYwLDYwIDAgMCAxIC00Ljg2LDI0LjYyIDQ5Ljk0LDQ5Ljk0IDAgMCAxIC0xNC4xNCwxOC41NSA2NC41NCw2NC41NCAwIDAgMSAtMjIuOCwxMS42MiAxMDcuNDEsMTA3LjQxIDAgMCAxIC0zMC43LDQgeiBtIDE1LjUsLTExNC40NSBoIDQ2LjY3IHEgMTQuODksMCAyNS40NiwtMy44IGEgNTAuNDUsNTAuNDUgMCAwIDAgMTcuMzMsLTEwIDM5LDM5IDAgMCAwIDEwLC0xNC4xMyA0Myw0MyAwIDAgMCAzLjE5LC0xNi4yNyBxIDAsLTIxLjc0IC0xMy43NSwtMzIuOSAtMTMuNzUsLTExLjE2IC00Mi40OSwtMTEuMTggaCAtNDYuMzYgeiBtIDAsMTEuNCB2IDkwLjU5IGggNTQgcSAyOC40MiwwIDQyLjg3LC0xMi4yNCAxNC40NSwtMTIuMjQgMTQuNDQsLTM0LjQzIGEgNDIuMSw0Mi4xIDAgMCAwIC0zLjg4LC0xOC4zMSAzOC4yNiwzOC4yNiAwIDAgMCAtMTEuMjEsLTEzLjgyIDUyLjA3LDUyLjA3IDAgMCAwIC0xNy45NCwtOC43NCA4Ny44OSw4Ny44OSAwIDAgMCAtMjQuMTYsLTMgeiIKICAgICBpZD0icGF0aDIyIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgY2xhc3M9ImNscy0yIgogICAgIGQ9Im0gMTE1OC40OSwxMjUuMDggcSAwLDI0LjkzIC03LjQ0LDQ1LjIyIGEgMTAwLjIzLDEwMC4yMyAwIDAgMSAtMjEsMzQuNjUgOTIuNTcsOTIuNTcgMCAwIDEgLTMyLjM4LDIyLjE5IHEgLTE4Ljg0LDcuODMgLTQxLjgsNy44MyBBIDEwNy4wOCwxMDcuMDggMCAwIDEgMTAxNC4zOCwyMjcuMTQgOTIuNTcsOTIuNTcgMCAwIDEgOTgyLDIwNC45NSAxMDEuMTQsMTAxLjE0IDAgMCAxIDk2MSwxNzAuMyBxIC03LjUzLC0yMC4zIC03LjUyLC00NS4yMiAwLjAxLC0yNC45MiA3LjUyLC00NS4wNyBhIDEwMS4xOSwxMDEuMTkgMCAwIDEgMjEsLTM0LjY2IDkzLjcxLDkzLjcxIDAgMCAxIDMyLjM4LC0yMi4yNyAxMDYuMzcsMTA2LjM3IDAgMCAxIDQxLjQ5LC03LjkgcSAyMywwIDQxLjgsNy44MyBhIDkyLjI0LDkyLjI0IDAgMCAxIDMyLjM4LDIyLjI3IDEwMSwxMDEgMCAwIDEgMjEsMzQuNzMgcSA3LjQ0LDIwLjMgNy40NCw0NS4wNyB6IG0gLTE2LjExLDAgcSAwLC0yMi41IC02LjIzLC00MC40NCBhIDg3LjE5LDg3LjE5IDAgMCAwIC0xNy41NiwtMzAuNCA3NS40LDc1LjQgMCAwIDAgLTI3LjI4LC0xOS4wNyA5MS42Nyw5MS42NyAwIDAgMCAtMzUuNDIsLTYuNjEgOTAuMjYsOTAuMjYgMCAwIDAgLTM1LDYuNjEgNzcsNzcgMCAwIDAgLTI3LjM2LDE5LjA3IDg2Ljg1LDg2Ljg1IDAgMCAwIC0xNy43OSwzMC40IHEgLTYuMywxNy45NCAtNi4zLDQwLjQ0IDAsMjIuNjUgNi4zLDQwLjUgYSA4Ni44OSw4Ni44OSAwIDAgMCAxNy43OSwzMC4zMyA3Ni4wNyw3Ni4wNyAwIDAgMCAyNy4zNiwxOSA5MS4xNyw5MS4xNyAwIDAgMCAzNSw2LjUzIDkyLjYsOTIuNiAwIDAgMCAzNS40MiwtNi41MyA3NC41MSw3NC41MSAwIDAgMCAyNy4yOCwtMTkgODcuMjMsODcuMjMgMCAwIDAgMTcuNiwtMzAuMzMgcSA2LjE5LC0xNy44NSA2LjE5LC00MC41IHoiCiAgICAgaWQ9InBhdGgyNCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIGNsYXNzPSJjbHMtMiIKICAgICBkPSJtIDEyOTguMDMsNDMuNzYgYSA0LjMsNC4zIDAgMCAxIC00LDIuNTggcSAtMiwwIC01LjEsLTIuODEgYSA2NS44LDY1LjggMCAwIDAgLTIxLjc0LC0xMi41NCBxIC04LC0yLjkgLTE5Ljc1LC0yLjg5IGEgNTguOSw1OC45IDAgMCAwIC0yMC42NiwzLjM0IDQzLjIsNDMuMiAwIDAgMCAtMTUsOS4xMiAzOC44OCwzOC44OCAwIDAgMCAtOS4xNCwxMy4zOCA0MS40Nyw0MS40NyAwIDAgMCAtMy4xMywxNiBxIDAsMTAuOTUgNC42NCwxOC4wOSBhIDQxLjkzLDQxLjkzIDAgMCAwIDEyLjI2LDEyLjE2IDc5LjQ2LDc5LjQ2IDAgMCAwIDE3LjI3LDguNDMgcSA5LjY2LDMuNDIgMTkuODcsNi43NyAxMC4yMSwzLjM1IDE5Ljg2LDcuMzcgYSA3MS44Nyw3MS44NyAwIDAgMSAxNy4yNywxMC4xMSA0Ni4zNCw0Ni4zNCAwIDAgMSAxMi4yNiwxNSBxIDQuNjMsOC44OSA0LjY0LDIyLjEyIGEgNjkuNyw2OS43IDAgMCAxIC00LjYzLDI1LjQ2IDU5LjQ3LDU5LjQ3IDAgMCAxIC0xMy40NiwyMC43NCA2Myw2MyAwIDAgMSAtMjEuNTgsMTMuOTEgcSAtMTIuNzcsNS4xIC0yOS4xOCw1LjA5IC0yMS4yOSwwIC0zNi42NCwtNy41MiBhIDg2LjMzLDg2LjMzIDAgMCAxIC0yNi45LC0yMC42IGwgNC4yNiwtNi42OCBhIDUuMzMsNS4zMyAwIDAgMSA0LjI1LC0yLjI4IGMgMC45MiwwIDIuMDgsMC42IDMuNSwxLjgyIDEuNDIsMS4yMiAzLjE1LDIuNzEgNS4xOCw0LjQ4IDIuMDMsMS43NyA0LjQ2LDMuNyA3LjMsNS43OCBhIDU5LjkxLDU5LjkxIDAgMCAwIDkuOSw1Ljc4IDcwLjQyLDcwLjQyIDAgMCAwIDEyLjkzLDQuNDggNjguNTksNjguNTkgMCAwIDAgMTYuNiwxLjgyIDYzLjE3LDYzLjE3IDAgMCAwIDIyLjgzLC0zLjg3IDUwLDUwIDAgMCAwIDE3LC0xMC41NyA0NC43Miw0NC43MiAwIDAgMCAxMC41OCwtMTUuODggNTIuOTIsNTIuOTIgMCAwIDAgMy42NSwtMTkuNjggcSAwLC0xMS40IC00LjY0LC0xOC43OCBBIDQwLjEsNDAuMSAwIDAgMCAxMjc2LjI3LDE0MS4xOCA3OS4yLDc5LjIgMCAwIDAgMTI1OSwxMzIuOSBxIC05LjY2LC0zLjM0IC0xOS44NiwtNi41NCAtMTAuMiwtMy4yIC0xOS44NywtNy4xNCBBIDY4LjczLDY4LjczIDAgMCAxIDEyMDIsMTA5LjExIDQ2LjI0LDQ2LjI0IDAgMCAxIDExODkuNzQsOTMuNzYgcSAtNC42MywtOS4xOSAtNC42NCwtMjMgYSA1NC4zOSw1NC4zOSAwIDAgMSA0LjExLC0yMC44MiA1MS44OSw1MS44OSAwIDAgMSAxMiwtMTcuNzEgNTkuMDksNTkuMDkgMCAwIDEgMTkuNTYsLTEyLjMxIDcxLjQzLDcxLjQzIDAgMCAxIDI2LjU3LC00LjY0IDgwLjQsODAuNCAwIDAgMSAzMC4wNiw1LjMyIDcyLjE0LDcyLjE0IDAgMCAxIDI0LjI2LDE2LjI2IHoiCiAgICAgaWQ9InBhdGgyNiIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMDAwMjBlO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgY2xhc3M9ImNscy0yIgogICAgIGQ9Im0gMTQ1OS45LDQzLjc2IGEgNC4yOSw0LjI5IDAgMCAxIC00LDIuNTggcSAtMiwwIC01LjExLC0yLjgxIGEgNjUuNjUsNjUuNjUgMCAwIDAgLTguNDYsLTYuMjMgNjYuOTIsNjYuOTIgMCAwIDAgLTEzLjM0LC02LjMxIHEgLTgsLTIuOSAtMTkuNzUsLTIuODkgYSA1OC44Niw1OC44NiAwIDAgMCAtMjAuNjYsMy4zNCA0My4yLDQzLjIgMCAwIDAgLTE1LDkuMTIgMzguOSwzOC45IDAgMCAwIC05LjE1LDEzLjM4IDQxLjY0LDQxLjY0IDAgMCAwIC0zLjEyLDE2IHEgMCwxMC45NSA0LjY0LDE4LjA5IGEgNDEuODksNDEuODkgMCAwIDAgMTIuMjUsMTIuMTYgNzkuNzcsNzkuNzcgMCAwIDAgMTcuMjgsOC40MyBxIDkuNjYsMy40MiAxOS44Niw2Ljc3IDEwLjIsMy4zNSAxOS44Niw3LjM3IGEgNzEuNzQsNzEuNzQgMCAwIDEgMTcuMjgsMTAuMTEgNDYuNDcsNDYuNDcgMCAwIDEgMTIuMjYsMTUgcSA0LjYzLDguODkgNC42NCwyMi4xMiBhIDY5LjcxLDY5LjcxIDAgMCAxIC00LjY0LDI1LjQ2IDU5LjMsNTkuMyAwIDAgMSAtMTMuNDUsMjAuNzQgNjMuMDgsNjMuMDggMCAwIDEgLTIxLjU4LDEzLjkxIHEgLTEyLjc2LDUuMSAtMjkuMTksNS4wOSAtMjEuMjksMCAtMzYuNjMsLTcuNTIgYSA4Ni4yMiw4Ni4yMiAwIDAgMSAtMjYuOSwtMjAuNiBsIDQuMjUsLTYuNjggYSA1LjM2LDUuMzYgMCAwIDEgNC4yNiwtMi4yOCBjIDAuOTEsMCAyLjA4LDAuNiAzLjUsMS44MiBsIDUuMTgsNC40OCBxIDMsMi42NyA3LjMsNS43OCBhIDYwLjIyLDYwLjIyIDAgMCAwIDkuODksNS43OCA3MC44LDcwLjggMCAwIDAgMTIuOTQsNC40OCA2OC41LDY4LjUgMCAwIDAgMTYuNTksMS44MiA2My4xOSw2My4xOSAwIDAgMCAyMi44NCwtMy44NyA1MC4xNSw1MC4xNSAwIDAgMCAxNywtMTAuNTcgNDQuODUsNDQuODUgMCAwIDAgMTAuNTgsLTE1Ljg4IDUyLjkyLDUyLjkyIDAgMCAwIDMuNjUsLTE5LjY4IHEgMCwtMTEuNCAtNC42NCwtMTguNzggYSA0MC4yMSw0MC4yMSAwIDAgMCAtMTIuMTQsLTEyLjM4IDc5LjIsNzkuMiAwIDAgMCAtMTcuMjcsLTguMjggcSAtOS42NywtMy4zNCAtMTkuODcsLTYuNTQgLTEwLjIsLTMuMiAtMTkuODYsLTcuMTQgYSA2OSw2OSAwIDAgMSAtMTcuMjgsLTEwLjExIDQ2LjIxLDQ2LjIxIDAgMCAxIC0xMi4yNSwtMTUuMzUgcSAtNC42NSwtOS4xOSAtNC42NCwtMjMgYSA1NC4yLDU0LjIgMCAwIDEgNC4xMSwtMjAuODIgNTEuNzUsNTEuNzUgMCAwIDEgMTIsLTE3LjcxIDU5LjA5LDU5LjA5IDAgMCAxIDE5LjU2LC0xMi4zMSA3MS4zNyw3MS4zNyAwIDAgMSAyNi41NiwtNC42NCA4MC40LDgwLjQgMCAwIDEgMzAuMDYsNS4zMiA3Mi4wOCw3Mi4wOCAwIDAgMSAyNC4yNywxNi4yNiB6IgogICAgIGlkPSJwYXRoMjgiIC8+Cjwvc3ZnPgo=";
    class ps extends HTMLElement {
      constructor() {
        super(), this.attachShadow({
          mode: "open"
        })
      }
      connectedCallback() {
        const t = this.getAttribute("props") || "",
          n = JSON.parse(decodeURI(t)),
          {
            title: r,
            synonyms: i = [],
            translation: s,
            abstract: p,
            destinations: l = [],
            bottomBarHelpLink: g,
            bottomBarAmbossLink: x,
            feedbackText: m,
            loading: u
          } = n,
          d = r ? `<div class="amboss-card-title amboss-header" data-e2e-test-id="header">${r}</div>` : "",
          h = i.length ? `<div class="amboss-synonyms" data-e2e-test-id="synonyms">${i.join(", ")}</div>` : "",
          y = s ? `<div class="amboss-translation" data-e2e-test-id="translation">${s}</div>` : "",
          b = p ? `<div class="amboss-abstract" data-e2e-test-id="abstract">${p}</div>` : "",
          T = "amboss-destination-container",
          w = l.length > 0 ? `<div class="amboss-destinations">${l.map(A => {
        const { phraseTerm: D, anchorId: S, articleId: F, destinationText: I } = A, Y = An(), Q = Y.userId, V = Y.anonId; return ` <
          a
        href = "${vi(F, S, D, V, Q)}"
        $ {
          gi() ? "" : 'target="_blank"'
        }
        class = "${T}"
        data - phrase - term = "${D}"
        data - anchor - id = "${S}"
        data - article - id = "${F}"
        data - e2e - test - id = "action-destination" >
          <
          div class = "amboss-destination-icon-left" >
          $ {
            as
          } <
          /div> <
          div class = "amboss-destination-text" >
          $ {
            I
          } <
          /div> <
          div class = "amboss-destination-icon-right" >
          $ {
            ss
          } <
          /div> <
          /a>`}).join("")}</div > ` : "", L = ` < div class = "amboss-card-footer" >
          <
          a href = "${x}" >
          <
          img class = "amboss-base-img amboss-footer-logo"
        src = "${ls}"
        alt = "AMBOSS logo" / >
          <
          /a> <
          div class = "amboss-card-version-info" > < /div> <
          a class = "amboss-footer-link"
        href = "${g}" >
          $ {
            m
          } <
          /a> <
          /div>`; this.shadowRoot.innerHTML = `
        $ {
          cs
        } <
        div id = "amboss-card"
        class = "amboss-card"
        data - e2e - test - id = "amboss-card"
        onclick = "window.ambossController.hideTooltips();" >
          <
          div class = "amboss-card-body" >
          $ {
            u ? us : `<div class="amboss-card-header">
                        ${d}
                        <div class="amboss-card-subtitles">
                          ${h}
                          ${y}
                        </div>
                      </div>
                      ${b}
                      ${w}
                      ${L}
                    `
          } <
          /div> <
          /div>
        `, this.shadowRoot.querySelectorAll(`
        a.$ {
          T
        }
        `).forEach(A => { A.addEventListener("click", D => { tt("tooltip_destination_opened", { term: A.getAttribute("data-phrase-term"), anchor: A.getAttribute("data-anchor-id"), learningCardId: A.getAttribute("data-article-id") }) }) })
    }
  } const Lt = "amboss-tooltip-content"; class fs {
    constructor(t, n, r) { this.selector = t, this.markClass = n, this.addonData = r, this._eventListenerArgs = ["touchstart", this._tooltipDismissalListener.bind(this), { once: !0, capture: !0 }], this.tippyOptions = { content: nt({ loading: !0 }), animateFill: !1, animation: "shift-away", theme: "light amboss", arrow: !0, interactive: !0, interactiveDebounce: 100, flipOnUpdate: !0, onShow: i => { const s = i.reference; this.startShowTooltip = Date.now(), this.hideAll(), this._getAbstractFor(s, i), this.tooltipVisible = !0, this.lastPhraseId = s.getAttribute("data-phrase-id"), this.removeTooltipDismissalListener(), this.addTooltipDismissalListener() } } } initialize() { const t = Object.assign(this.tippyOptions, { target: `.$ {
          this.markClass
        }
        `, hideOnClick: !1, onHidden: n => { tt("tooltip_hidden", { phraseId: n.reference.getAttribute("data-phrase-id"), shownForMilliseconds: Date.now() - this.startShowTooltip }), this.tooltipVisible = !1, n.setContent(nt({ loading: !0 })) } }); ye(this.selector, t) } hideAll() { ye.hideAll({ duration: 0 }) } addTooltipDismissalListener() { document.addEventListener(...this._eventListenerArgs) } removeTooltipDismissalListener() { document.removeEventListener(...this._eventListenerArgs) } _tooltipDismissalListener(t) { if (t.target.closest(Lt)) return t.stopPropagation(), t; t.preventDefault(), t.stopPropagation(), this.hideAll() } setContentFor(t, n) { if (!t || t.state.isDestroyed) return !1; t.popperChildren.tooltip.classList.add("tippy-tooltip-loaded"), t.setContent(n) } _getAbstractFor(t, n) {
      const r = t.getAttribute("data-phrase-term"), i = t.getAttribute("data-phrase-id"), s = t.getAttribute("data-phrase-article-id"), p = t.getAttribute("data-phrase-article-title"), l = t.getAttribute("data-phrase-section-title"), g = t.getAttribute("data-phrase-anchor-id"); if (t.getAttribute("data-phrase-has-phrase-group") === "true") qa(i, this.addonData.anonId, this.addonData.token, m => { const u = m && m.destinations, d = { title: m && m.title || "error", abstract: m && m.abstract || "error", destinations: u && u.map(h => ({ phraseTerm: r, anchorId: h.anchor, articleId: h.articleEid, destinationText: h.label })), feedbackText: "Feedback", bottomBarHelpLink: "https://docs.google.com/forms/d/1cCdURkf35gi3UFnr5GObKi7IJNQHuaFzrQY3wduFeOk", bottomBarAmbossLink: "https://go.amboss.com/anki-mobile-faq" }; this.setContentFor(n, nt(d)), tt("tooltip_shown", { phraseId: i, term: r }) }, m => {
        const u = Number.isInteger(m) && m >= 400 && m < 500 ? ` < p class = 'amboss-card-client-notification-access-expired-header' > Your AMBOSS add - on seems out - of -sync. < /p> <
          p > Please open Anki on your computer and log into the AMBOSS add - on to sync this deck with AnkiWeb. < /p>`: `<p>We couldn't find this tooltip.</p >
          <
          p > If you keep seeing this message, please open Anki on your computer and log into the AMBOSS add - on to sync this deck with AnkiWeb. < /p>`, d = { title: r || "Error", abstract: u, destinations: [], feedbackText: "Feedback", bottomBarHelpLink: "https:/ / docs.google.com / forms / d / 1 cCdURkf35gi3UFnr5GObKi7IJNQHuaFzrQY3wduFeOk ", bottomBarAmbossLink: "
        https: //go.amboss.com/anki-mobile-faq" }; this.setContentFor(n, nt(d)), tt("tooltip_shown", { phraseId: i, term: r, error: m })
      });
    else {
      const m = {
        title: r,
        destinations: [{
          phraseTerm: r,
          anchorId: g,
          articleId: s,
          destinationText: p + (l !== "undefined" ? ` → ${l}` : "")
        }],
        feedbackText: "Feedback",
        bottomBarHelpLink: "https://docs.google.com/forms/d/1cCdURkf35gi3UFnr5GObKi7IJNQHuaFzrQY3wduFeOk",
        bottomBarAmbossLink: "https://go.amboss.com/anki-mobile-faq"
      };
      this.setContentFor(n, nt(m)), tt("tooltip_shown", {
        phraseId: i,
        term: r
      })
    }
  }
}
const nt = e => `<${Lt} props="${encodeURI(JSON.stringify(e))}"/>`;
customElements.get(Lt) || customElements.define(Lt, ps);
var En = {},
  ds = {
    get exports() {
      return En
    },
    set exports(e) {
      En = e
    }
  };
/*!***************************************************
 * mark.js v8.11.1
 * https://markjs.io/
 * Copyright (c) 2014–2018, Julian Kühnel
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
(function (e, t) {
  (function (n, r) {
    e.exports = r()
  })(Xa, function () {
    var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (x) {
        return typeof x
      } : function (x) {
        return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x
      },
      r = function (x, m) {
        if (!(x instanceof m)) throw new TypeError("Cannot call a class as a function")
      },
      i = function () {
        function x(m, u) {
          for (var d = 0; d < u.length; d++) {
            var h = u[d];
            h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(m, h.key, h)
          }
        }
        return function (m, u, d) {
          return u && x(m.prototype, u), d && x(m, d), m
        }
      }(),
      s = Object.assign || function (x) {
        for (var m = 1; m < arguments.length; m++) {
          var u = arguments[m];
          for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (x[d] = u[d])
        }
        return x
      },
      p = function () {
        function x(m) {
          var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
            h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 5e3;
          r(this, x), this.ctx = m, this.iframes = u, this.exclude = d, this.iframesTimeout = h
        }
        return i(x, [{
          key: "getContexts",
          value: function () {
            var u = void 0,
              d = [];
            return typeof this.ctx > "u" || !this.ctx ? u = [] : NodeList.prototype.isPrototypeOf(this.ctx) ? u = Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? u = this.ctx : typeof this.ctx == "string" ? u = Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : u = [this.ctx], u.forEach(function (h) {
              var y = d.filter(function (b) {
                return b.contains(h)
              }).length > 0;
              d.indexOf(h) === -1 && !y && d.push(h)
            }), d
          }
        }, {
          key: "getIframeContents",
          value: function (u, d) {
            var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function () {},
              y = void 0;
            try {
              var b = u.contentWindow;
              if (y = b.document, !b || !y) throw new Error("iframe inaccessible")
            } catch {
              h()
            }
            y && d(y)
          }
        }, {
          key: "isIframeBlank",
          value: function (u) {
            var d = "about:blank",
              h = u.getAttribute("src").trim(),
              y = u.contentWindow.location.href;
            return y === d && h !== d && h
          }
        }, {
          key: "observeIframeLoad",
          value: function (u, d, h) {
            var y = this,
              b = !1,
              T = null,
              w = function L() {
                if (!b) {
                  b = !0, clearTimeout(T);
                  try {
                    y.isIframeBlank(u) || (u.removeEventListener("load", L), y.getIframeContents(u, d, h))
                  } catch {
                    h()
                  }
                }
              };
            u.addEventListener("load", w), T = setTimeout(w, this.iframesTimeout)
          }
        }, {
          key: "onIframeReady",
          value: function (u, d, h) {
            try {
              u.contentWindow.document.readyState === "complete" ? this.isIframeBlank(u) ? this.observeIframeLoad(u, d, h) : this.getIframeContents(u, d, h) : this.observeIframeLoad(u, d, h)
            } catch {
              h()
            }
          }
        }, {
          key: "waitForIframes",
          value: function (u, d) {
            var h = this,
              y = 0;
            this.forEachIframe(u, function () {
              return !0
            }, function (b) {
              y++, h.waitForIframes(b.querySelector("html"), function () {
                --y || d()
              })
            }, function (b) {
              b || d()
            })
          }
        }, {
          key: "forEachIframe",
          value: function (u, d, h) {
            var y = this,
              b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function () {},
              T = u.querySelectorAll("iframe"),
              w = T.length,
              L = 0;
            T = Array.prototype.slice.call(T);
            var A = function () {
              --w <= 0 && b(L)
            };
            w || A(), T.forEach(function (D) {
              x.matches(D, y.exclude) ? A() : y.onIframeReady(D, function (S) {
                d(D) && (L++, h(S)), A()
              }, A)
            })
          }
        }, {
          key: "createIterator",
          value: function (u, d, h) {
            return document.createNodeIterator(u, d, h, !1)
          }
        }, {
          key: "createInstanceOnIframe",
          value: function (u) {
            return new x(u.querySelector("html"), this.iframes)
          }
        }, {
          key: "compareNodeIframe",
          value: function (u, d, h) {
            var y = u.compareDocumentPosition(h),
              b = Node.DOCUMENT_POSITION_PRECEDING;
            if (y & b)
              if (d !== null) {
                var T = d.compareDocumentPosition(h),
                  w = Node.DOCUMENT_POSITION_FOLLOWING;
                if (T & w) return !0
              } else return !0;
            return !1
          }
        }, {
          key: "getIteratorNode",
          value: function (u) {
            var d = u.previousNode(),
              h = void 0;
            return d === null ? h = u.nextNode() : h = u.nextNode() && u.nextNode(), {
              prevNode: d,
              node: h
            }
          }
        }, {
          key: "checkIframeFilter",
          value: function (u, d, h, y) {
            var b = !1,
              T = !1;
            return y.forEach(function (w, L) {
              w.val === h && (b = L, T = w.handled)
            }), this.compareNodeIframe(u, d, h) ? (b === !1 && !T ? y.push({
              val: h,
              handled: !0
            }) : b !== !1 && !T && (y[b].handled = !0), !0) : (b === !1 && y.push({
              val: h,
              handled: !1
            }), !1)
          }
        }, {
          key: "handleOpenIframes",
          value: function (u, d, h, y) {
            var b = this;
            u.forEach(function (T) {
              T.handled || b.getIframeContents(T.val, function (w) {
                b.createInstanceOnIframe(w).forEachNode(d, h, y)
              })
            })
          }
        }, {
          key: "iterateThroughNodes",
          value: function (u, d, h, y, b) {
            for (var T = this, w = this.createIterator(d, u, y), L = [], A = [], D = void 0, S = void 0, F = function () {
                var Y = T.getIteratorNode(w);
                return S = Y.prevNode, D = Y.node, D
              }; F();) this.iframes && this.forEachIframe(d, function (I) {
              return T.checkIframeFilter(D, S, I, L)
            }, function (I) {
              T.createInstanceOnIframe(I).forEachNode(u, function (Y) {
                return A.push(Y)
              }, y)
            }), A.push(D);
            A.forEach(function (I) {
              h(I)
            }), this.iframes && this.handleOpenIframes(L, u, h, y), b()
          }
        }, {
          key: "forEachNode",
          value: function (u, d, h) {
            var y = this,
              b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function () {},
              T = this.getContexts(),
              w = T.length;
            w || b(), T.forEach(function (L) {
              var A = function () {
                y.iterateThroughNodes(u, L, d, h, function () {
                  --w <= 0 && b()
                })
              };
              y.iframes ? y.waitForIframes(L, A) : A()
            })
          }
        }], [{
          key: "matches",
          value: function (u, d) {
            var h = typeof d == "string" ? [d] : d,
              y = u.matches || u.matchesSelector || u.msMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.webkitMatchesSelector;
            if (y) {
              var b = !1;
              return h.every(function (T) {
                return y.call(u, T) ? (b = !0, !1) : !0
              }), b
            } else return !1
          }
        }]), x
      }(),
      l = function () {
        function x(m) {
          r(this, x), this.ctx = m, this.ie = !1;
          var u = window.navigator.userAgent;
          (u.indexOf("MSIE") > -1 || u.indexOf("Trident") > -1) && (this.ie = !0)
        }
        return i(x, [{
          key: "log",
          value: function (u) {
            var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "debug",
              h = this.opt.log;
            this.opt.debug && (typeof h > "u" ? "undefined" : n(h)) === "object" && typeof h[d] == "function" && h[d]("mark.js: " + u)
          }
        }, {
          key: "escapeStr",
          value: function (u) {
            return u.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
          }
        }, {
          key: "createRegExp",
          value: function (u) {
            return this.opt.wildcards !== "disabled" && (u = this.setupWildcardsRegExp(u)), u = this.escapeStr(u), Object.keys(this.opt.synonyms).length && (u = this.createSynonymsRegExp(u)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (u = this.setupIgnoreJoinersRegExp(u)), this.opt.diacritics && (u = this.createDiacriticsRegExp(u)), u = this.createMergedBlanksRegExp(u), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (u = this.createJoinersRegExp(u)), this.opt.wildcards !== "disabled" && (u = this.createWildcardsRegExp(u)), u = this.createAccuracyRegExp(u), u
          }
        }, {
          key: "createSynonymsRegExp",
          value: function (u) {
            var d = this.opt.synonyms,
              h = this.opt.caseSensitive ? "" : "i",
              y = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
            for (var b in d)
              if (d.hasOwnProperty(b)) {
                var T = d[b],
                  w = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(b) : this.escapeStr(b),
                  L = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(T) : this.escapeStr(T);
                w !== "" && L !== "" && (u = u.replace(new RegExp("(" + this.escapeStr(w) + "|" + this.escapeStr(L) + ")", "gm" + h), y + ("(" + this.processSynomyms(w) + "|") + (this.processSynomyms(L) + ")") + y))
              } return u
          }
        }, {
          key: "processSynomyms",
          value: function (u) {
            return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (u = this.setupIgnoreJoinersRegExp(u)), u
          }
        }, {
          key: "setupWildcardsRegExp",
          value: function (u) {
            return u = u.replace(/(?:\\)*\?/g, function (d) {
              return d.charAt(0) === "\\" ? "?" : ""
            }), u.replace(/(?:\\)*\*/g, function (d) {
              return d.charAt(0) === "\\" ? "*" : ""
            })
          }
        }, {
          key: "createWildcardsRegExp",
          value: function (u) {
            var d = this.opt.wildcards === "withSpaces";
            return u.replace(/\u0001/g, d ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, d ? "[\\S\\s]*?" : "\\S*")
          }
        }, {
          key: "setupIgnoreJoinersRegExp",
          value: function (u) {
            return u.replace(/[^(|)\\]/g, function (d, h, y) {
              var b = y.charAt(h + 1);
              return /[(|)\\]/.test(b) || b === "" ? d : d + "\0"
            })
          }
        }, {
          key: "createJoinersRegExp",
          value: function (u) {
            var d = [],
              h = this.opt.ignorePunctuation;
            return Array.isArray(h) && h.length && d.push(this.escapeStr(h.join(""))), this.opt.ignoreJoiners && d.push("\\u00ad\\u200b\\u200c\\u200d"), d.length ? u.split(/\u0000+/).join("[" + d.join("") + "]*") : u
          }
        }, {
          key: "createDiacriticsRegExp",
          value: function (u) {
            var d = this.opt.caseSensitive ? "" : "i",
              h = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"],
              y = [];
            return u.split("").forEach(function (b) {
              h.every(function (T) {
                if (T.indexOf(b) !== -1) {
                  if (y.indexOf(T) > -1) return !1;
                  u = u.replace(new RegExp("[" + T + "]", "gm" + d), "[" + T + "]"), y.push(T)
                }
                return !0
              })
            }), u
          }
        }, {
          key: "createMergedBlanksRegExp",
          value: function (u) {
            return u.replace(/[\s]+/gmi, "[\\s]+")
          }
        }, {
          key: "createAccuracyRegExp",
          value: function (u) {
            var d = this,
              h = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",
              y = this.opt.accuracy,
              b = typeof y == "string" ? y : y.value,
              T = typeof y == "string" ? [] : y.limiters,
              w = "";
            switch (T.forEach(function (L) {
              w += "|" + d.escapeStr(L)
            }), b) {
              case "partially":
              default:
                return "()(" + u + ")";
              case "complementary":
                return w = "\\s" + (w || this.escapeStr(h)), "()([^" + w + "]*" + u + "[^" + w + "]*)";
              case "exactly":
                return "(^|\\s" + w + ")(" + u + ")(?=$|\\s" + w + ")"
            }
          }
        }, {
          key: "getSeparatedKeywords",
          value: function (u) {
            var d = this,
              h = [];
            return u.forEach(function (y) {
              d.opt.separateWordSearch ? y.split(" ").forEach(function (b) {
                b.trim() && h.indexOf(b) === -1 && h.push(b)
              }) : y.trim() && h.indexOf(y) === -1 && h.push(y)
            }), {
              keywords: h.sort(function (y, b) {
                return b.length - y.length
              }),
              length: h.length
            }
          }
        }, {
          key: "isNumeric",
          value: function (u) {
            return Number(parseFloat(u)) == u
          }
        }, {
          key: "checkRanges",
          value: function (u) {
            var d = this;
            if (!Array.isArray(u) || Object.prototype.toString.call(u[0]) !== "[object Object]") return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(u), [];
            var h = [],
              y = 0;
            return u.sort(function (b, T) {
              return b.start - T.start
            }).forEach(function (b) {
              var T = d.callNoMatchOnInvalidRanges(b, y),
                w = T.start,
                L = T.end,
                A = T.valid;
              A && (b.start = w, b.length = L - w, h.push(b), y = L)
            }), h
          }
        }, {
          key: "callNoMatchOnInvalidRanges",
          value: function (u, d) {
            var h = void 0,
              y = void 0,
              b = !1;
            return u && typeof u.start < "u" ? (h = parseInt(u.start, 10), y = h + parseInt(u.length, 10), this.isNumeric(u.start) && this.isNumeric(u.length) && y - d > 0 && y - h > 0 ? b = !0 : (this.log("Ignoring invalid or overlapping range: " + ("" + JSON.stringify(u))), this.opt.noMatch(u))) : (this.log("Ignoring invalid range: " + JSON.stringify(u)), this.opt.noMatch(u)), {
              start: h,
              end: y,
              valid: b
            }
          }
        }, {
          key: "checkWhitespaceRanges",
          value: function (u, d, h) {
            var y = void 0,
              b = !0,
              T = h.length,
              w = d - T,
              L = parseInt(u.start, 10) - w;
            return L = L > T ? T : L, y = L + parseInt(u.length, 10), y > T && (y = T, this.log("End range automatically set to the max value of " + T)), L < 0 || y - L < 0 || L > T || y > T ? (b = !1, this.log("Invalid range: " + JSON.stringify(u)), this.opt.noMatch(u)) : h.substring(L, y).replace(/\s+/g, "") === "" && (b = !1, this.log("Skipping whitespace only range: " + JSON.stringify(u)), this.opt.noMatch(u)), {
              start: L,
              end: y,
              valid: b
            }
          }
        }, {
          key: "getTextNodes",
          value: function (u) {
            var d = this,
              h = "",
              y = [];
            this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (b) {
              y.push({
                start: h.length,
                end: (h += b.textContent).length,
                node: b
              })
            }, function (b) {
              return d.matchesExclude(b.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            }, function () {
              u({
                value: h,
                nodes: y
              })
            })
          }
        }, {
          key: "matchesExclude",
          value: function (u) {
            return p.matches(u, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
          }
        }, {
          key: "wrapRangeInTextNode",
          value: function (u, d, h) {
            var y = this.opt.element ? this.opt.element : "mark",
              b = u.splitText(d),
              T = b.splitText(h - d),
              w = document.createElement(y);
            return w.setAttribute("data-markjs", "true"), this.opt.className && w.setAttribute("class", this.opt.className), w.textContent = b.textContent, b.parentNode.replaceChild(w, b), T
          }
        }, {
          key: "wrapRangeInMappedTextNode",
          value: function (u, d, h, y, b) {
            var T = this;
            u.nodes.every(function (w, L) {
              var A = u.nodes[L + 1];
              if (typeof A > "u" || A.start > d) {
                if (!y(w.node)) return !1;
                var D = d - w.start,
                  S = (h > w.end ? w.end : h) - w.start,
                  F = u.value.substr(0, w.start),
                  I = u.value.substr(S + w.start);
                if (w.node = T.wrapRangeInTextNode(w.node, D, S), u.value = F + I, u.nodes.forEach(function (Y, Q) {
                    Q >= L && (u.nodes[Q].start > 0 && Q !== L && (u.nodes[Q].start -= S), u.nodes[Q].end -= S)
                  }), h -= S, b(w.node.previousSibling, w.start), h > w.end) d = w.end;
                else return !1
              }
              return !0
            })
          }
        }, {
          key: "wrapMatches",
          value: function (u, d, h, y, b) {
            var T = this,
              w = d === 0 ? 0 : d + 1;
            this.getTextNodes(function (L) {
              L.nodes.forEach(function (A) {
                A = A.node;
                for (var D = void 0;
                  (D = u.exec(A.textContent)) !== null && D[w] !== "";)
                  if (h(D[w], A)) {
                    var S = D.index;
                    if (w !== 0)
                      for (var F = 1; F < w; F++) S += D[F].length;
                    A = T.wrapRangeInTextNode(A, S, S + D[w].length), y(A.previousSibling), u.lastIndex = 0
                  }
              }), b()
            })
          }
        }, {
          key: "wrapMatchesAcrossElements",
          value: function (u, d, h, y, b) {
            var T = this,
              w = d === 0 ? 0 : d + 1;
            this.getTextNodes(function (L) {
              for (var A = void 0;
                (A = u.exec(L.value)) !== null && A[w] !== "";) {
                var D = A.index;
                if (w !== 0)
                  for (var S = 1; S < w; S++) D += A[S].length;
                var F = D + A[w].length;
                T.wrapRangeInMappedTextNode(L, D, F, function (I) {
                  return h(A[w], I)
                }, function (I, Y) {
                  u.lastIndex = Y, y(I)
                })
              }
              b()
            })
          }
        }, {
          key: "wrapRangeFromIndex",
          value: function (u, d, h, y) {
            var b = this;
            this.getTextNodes(function (T) {
              var w = T.value.length;
              u.forEach(function (L, A) {
                var D = b.checkWhitespaceRanges(L, w, T.value),
                  S = D.start,
                  F = D.end,
                  I = D.valid;
                I && b.wrapRangeInMappedTextNode(T, S, F, function (Y) {
                  return d(Y, L, T.value.substring(S, F), A)
                }, function (Y) {
                  h(Y, L)
                })
              }), y()
            })
          }
        }, {
          key: "unwrapMatches",
          value: function (u) {
            for (var d = u.parentNode, h = document.createDocumentFragment(); u.firstChild;) h.appendChild(u.removeChild(u.firstChild));
            d.replaceChild(h, u), this.ie ? this.normalizeTextNode(d) : d.normalize()
          }
        }, {
          key: "normalizeTextNode",
          value: function (u) {
            if (u) {
              if (u.nodeType === 3)
                for (; u.nextSibling && u.nextSibling.nodeType === 3;) u.nodeValue += u.nextSibling.nodeValue, u.parentNode.removeChild(u.nextSibling);
              else this.normalizeTextNode(u.firstChild);
              this.normalizeTextNode(u.nextSibling)
            }
          }
        }, {
          key: "markRegExp",
          value: function (u, d) {
            var h = this;
            this.opt = d, this.log('Searching with expression "' + u + '"');
            var y = 0,
              b = "wrapMatches",
              T = function (L) {
                y++, h.opt.each(L)
              };
            this.opt.acrossElements && (b = "wrapMatchesAcrossElements"), this[b](u, this.opt.ignoreGroups, function (w, L) {
              return h.opt.filter(L, w, y)
            }, T, function () {
              y === 0 && h.opt.noMatch(u), h.opt.done(y)
            })
          }
        }, {
          key: "mark",
          value: function (u, d) {
            var h = this;
            this.opt = d;
            var y = 0,
              b = "wrapMatches",
              T = this.getSeparatedKeywords(typeof u == "string" ? [u] : u),
              w = T.keywords,
              L = T.length,
              A = this.opt.caseSensitive ? "" : "i",
              D = function S(F) {
                var I = new RegExp(h.createRegExp(F), "gm" + A),
                  Y = 0;
                h.log('Searching with expression "' + I + '"'), h[b](I, 1, function (Q, V) {
                  return h.opt.filter(V, F, y, Y)
                }, function (Q) {
                  Y++, y++, h.opt.each(Q)
                }, function () {
                  Y === 0 && h.opt.noMatch(F), w[L - 1] === F ? h.opt.done(y) : S(w[w.indexOf(F) + 1])
                })
              };
            this.opt.acrossElements && (b = "wrapMatchesAcrossElements"), L === 0 ? this.opt.done(y) : D(w[0])
          }
        }, {
          key: "markRanges",
          value: function (u, d) {
            var h = this;
            this.opt = d;
            var y = 0,
              b = this.checkRanges(u);
            b && b.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(b)), this.wrapRangeFromIndex(b, function (T, w, L, A) {
              return h.opt.filter(T, w, L, A)
            }, function (T, w) {
              y++, h.opt.each(T, w)
            }, function () {
              h.opt.done(y)
            })) : this.opt.done(y)
          }
        }, {
          key: "unmark",
          value: function (u) {
            var d = this;
            this.opt = u;
            var h = this.opt.element ? this.opt.element : "*";
            h += "[data-markjs]", this.opt.className && (h += "." + this.opt.className), this.log('Removal selector "' + h + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (y) {
              d.unwrapMatches(y)
            }, function (y) {
              var b = p.matches(y, h),
                T = d.matchesExclude(y);
              return !b || T ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            }, this.opt.done)
          }
        }, {
          key: "opt",
          set: function (u) {
            this._opt = s({}, {
              element: "",
              className: "",
              exclude: [],
              iframes: !1,
              iframesTimeout: 5e3,
              separateWordSearch: !0,
              diacritics: !0,
              synonyms: {},
              accuracy: "partially",
              acrossElements: !1,
              caseSensitive: !1,
              ignoreJoiners: !1,
              ignoreGroups: 0,
              ignorePunctuation: [],
              wildcards: "disabled",
              each: function () {},
              noMatch: function () {},
              filter: function () {
                return !0
              },
              done: function () {},
              debug: !1,
              log: window.console
            }, u)
          },
          get: function () {
            return this._opt
          }
        }, {
          key: "iterator",
          get: function () {
            return new p(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout)
          }
        }]), x
      }();

    function g(x) {
      var m = this,
        u = new l(x);
      return this.mark = function (d, h) {
        return u.mark(d, h), m
      }, this.markRegExp = function (d, h) {
        return u.markRegExp(d, h), m
      }, this.markRanges = function (d, h) {
        return u.markRanges(d, h), m
      }, this.unmark = function (d) {
        return u.unmark(d), m
      }, this
    }
    return g
  })
})(ds);
let Dt;
const hs = new Uint8Array(16);

function ms() {
  if (!Dt && (Dt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Dt)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Dt(hs)
}
const J = [];
for (let e = 0; e < 256; ++e) J.push((e + 256).toString(16).slice(1));

function gs(e, t = 0) {
  return (J[e[t + 0]] + J[e[t + 1]] + J[e[t + 2]] + J[e[t + 3]] + "-" + J[e[t + 4]] + J[e[t + 5]] + "-" + J[e[t + 6]] + J[e[t + 7]] + "-" + J[e[t + 8]] + J[e[t + 9]] + "-" + J[e[t + 10]] + J[e[t + 11]] + J[e[t + 12]] + J[e[t + 13]] + J[e[t + 14]] + J[e[t + 15]]).toLowerCase()
}
const ui = {
  randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};

function ys(e, t, n) {
  if (ui.randomUUID && !t && !e) return ui.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || ms)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i) t[n + i] = r[i];
    return t
  }
  return gs(r)
}
class vs {
  constructor(t, n) {
    this._apiURL = t, this._addonData = n
  }
  findPhrases(t) {
    const n = new Headers;
    return n.append("Content-Type", "application/json"), n.append("X-Amboss-App", "amboss-anki-deck-template-script"), n.append("X-Amboss-Anon-Id", this._addonData.anonId), this._addonData.token && n.append("Authorization", `Bearer ${this._addonData.token}`), new Promise((r, i) => {
      fetch(this._apiURL, {
        method: "post",
        body: JSON.stringify({
          card_text_list: t,
          guid: null
        }),
        headers: n
      }).then(s => s.ok && s.status === 200 ? s.json() : (console.log(`Could not fetch phrases: ${s.status}, ${s.statusText}`), {
        results: []
      })).then(s => r(s.results))
    })
  }
}
class xs {
  constructor(t, n, r) {
    this.card = document.querySelector(t), this.markClass = n, this.textNodeFilter = r, this.marker = null
  }
  hideAll() {
    this.hideByClass(this.markClass)
  }
  hideByClass(t) {
    if (!this.marker) return !1;
    this.marker.unmark({
      className: t
    })
  }
  mark(t) {
    const r = `mark-session-${ys()}`;
    this._spacifyParagraphs(this.card), this.marker || (this.marker = new En(this.card));
    let i = 0;
    for (const s in t) {
      this.textNodeFilter.initialize();
      const p = this._composeTermRegex(s);
      this.marker.markRegExp(p, {
        element: "span",
        className: this.markClass,
        separateWordSearch: !1,
        acrossElements: !0,
        filter: (l, g, x) => this.textNodeFilter.filter(l, g, x),
        each: l => {
          l.onclick = () => {};
          const g = t[s];
          l.setAttribute("data-phrase-term", s), l.setAttribute("data-phrase-id", g.id), l.setAttribute("data-phrase-article-id", g.articleId), l.setAttribute("data-phrase-article-title", g.articleTitle), l.setAttribute("data-phrase-anchor-id", g.anchorId), l.setAttribute("data-phrase-has-phrase-group", g.hasPhraseGroup), l.setAttribute("data-phrase-section-title", g.sectionTitle), l.id = `mark-${++i}`, l.classList.add(`${this.markClass}-${this.textNodeFilter.markerType}`), l.classList.add(r)
        }
      })
    }
    return r
  }
  _spacifyParagraphs(t) {
    for (const n of t.querySelectorAll("div, p, br")) n.insertAdjacentHTML("beforebegin", " "), n.insertAdjacentHTML("afterend", " ")
  }
  _composeTermRegex(t) {
    return new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "[ -‐‑−]") + `(?=[\\s,.:;"'?\\]\\)/]|$)`, "gmi")
  }
}
class ws {
  constructor() {
    this.initialize()
  }
  initialize() {
    this.textBuffer = "", this.markerType = "single"
  }
  filter(t, n, r) {
    if (t.parentNode.hasAttribute("data-phrase-id")) return !1;
    const i = t.textContent,
      s = i.toLowerCase().includes(n.toLowerCase());
    return !this.textBuffer && s ? this.markerType = "single" : !this.textBuffer && !s ? (this.textBuffer += i, this.markerType = "start") : this.textBuffer && !s ? (this.textBuffer += i, this.textBuffer.includes(n) ? (this.textBuffer = "", this.markerType = "end") : this.markerType = "middle") : (this.markerType = "single", this.textBuffer = ""), !0
  }
}

function Is(e) {
  let t = new DOMParser().parseFromString(e, "text/html"),
    n = t.querySelectorAll("script, style"),
    r = n.length;
  for (; r--;) n[r].parentNode.removeChild(n[r]);
  return [t.body.innerHTML || ""]
}
class bs {
  constructor(t, n, r, i) {
    this.selector = t, this.ambossMarker = n, this.ambossTooltips = r, this.phraseFinder = i, this.ambossTooltips.initialize(), this._previousPhrases = null
  }
  ambossifyCard() {
    this.ambossTooltips.hideAll(), this.ambossTooltips.removeTooltipDismissalListener();
    let t = Is(document.querySelector(this.selector).innerHTML),
      n;
    this._previousPhrases && (n = this.ambossMarker.mark(this._previousPhrases)), this.phraseFinder.findPhrases(t).then(r => {
      let i = {};
      for (let s of r) i[s.term] = {
        id: s.pg_id,
        articleId: s.lc_id,
        articleTitle: s.lc_title,
        anchorId: s.ankerlink_id,
        hasPhraseGroup: s.is_detail_visible,
        sectionTitle: s.section_title
      };
      n !== void 0 && this.ambossMarker.hideByClass(n), this.ambossMarker.mark(i), this._previousPhrases = i
    })
  }
  hideTooltips() {
    this.ambossTooltips.hideAll()
  }
}
if (mi()) console.log("AMBOSS add-on detected. Aborting script execution.");
else if (window.ambossController === void 0) {
  const e = document.createElement("style");
  e.innerHTML = ut, document.body.appendChild(e), window.ambossLog = yi;
  const t = "amboss-marker",
    n = An(),
    r = new ws,
    i = new xs(Re, t, r),
    s = new fs(Re, t, n),
    p = new di(Re),
    l = new vs("https://anki.us.production.amboss.com/v1/anki/mobile", n),
    g = new bs(Re, i, s, l);
  window.ambossController = g, g.ambossifyCard(), p.scheduleOnReviewerContentChanged(() => {
    g.ambossifyCard()
  }), p.observe()
}
});