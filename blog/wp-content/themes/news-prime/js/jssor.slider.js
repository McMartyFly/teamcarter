(function(j, h, c, g, d, k, f) {
    new(function() {});
    var e = j.$Jease$ = {
        $Swing: function(a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        $Linear: function(a) {
            return a
        },
        $InQuad: function(a) {
            return a * a
        },
        $OutQuad: function(a) {
            return -a * (a - 2)
        },
        $InOutQuad: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        },
        $InCubic: function(a) {
            return a * a * a
        },
        $OutCubic: function(a) {
            return (a -= 1) * a * a + 1
        },
        $InOutCubic: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        },
        $InQuart: function(a) {
            return a * a * a * a
        },
        $OutQuart: function(a) {
            return -((a -= 1) * a * a * a - 1)
        },
        $InOutQuart: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        },
        $InQuint: function(a) {
            return a * a * a * a * a
        },
        $OutQuint: function(a) {
            return (a -= 1) * a * a * a * a + 1
        },
        $InOutQuint: function(a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        },
        $InSine: function(a) {
            return 1 - c.cos(c.PI / 2 * a)
        },
        $OutSine: function(a) {
            return c.sin(c.PI / 2 * a)
        },
        $InOutSine: function(a) {
            return -1 / 2 * (c.cos(c.PI * a) - 1)
        },
        $InExpo: function(a) {
            return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
        },
        $OutExpo: function(a) {
            return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
        },
        $InOutExpo: function(a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
        },
        $InCirc: function(a) {
            return -(c.sqrt(1 - a * a) - 1)
        },
        $OutCirc: function(a) {
            return c.sqrt(1 - (a -= 1) * a)
        },
        $InOutCirc: function(a) {
            return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
        },
        $InElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
        },
        $OutElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .3,
                d = .075;
            return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
        },
        $InOutElastic: function(a) {
            if (!a || a == 1) return a;
            var b = .45,
                d = .1125;
            return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
        },
        $InBack: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        $OutBack: function(a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        },
        $InOutBack: function(a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        },
        $InBounce: function(a) {
            return 1 - e.$OutBounce(1 - a)
        },
        $OutBounce: function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        },
        $InOutBounce: function(a) {
            return a < 1 / 2 ? e.$InBounce(a * 2) * .5 : e.$OutBounce(a * 2 - 1) * .5 + .5
        },
        $GoBack: function(a) {
            return 1 - c.abs(2 - 1)
        },
        $InWave: function(a) {
            return 1 - c.cos(a * c.PI * 2)
        },
        $OutWave: function(a) {
            return c.sin(a * c.PI * 2)
        },
        $OutJump: function(a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        },
        $InJump: function(a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        },
        $Early: c.ceil,
        $Late: c.floor
    };
    var b = j.$Jssor$ = new function() {
        var i = this,
            zb = /\S+/g,
            M = 1,
            jb = 2,
            mb = 3,
            lb = 4,
            pb = 5,
            N, t = 0,
            l = 0,
            u = 0,
            B = 0,
            C = 0,
            F = navigator,
            ub = F.appName,
            o = F.userAgent,
            A = h.documentElement,
            q = parseFloat;

        function Ib() {
            if (!N) {
                N = {
                    ug: "ontouchstart" in j || "createTouch" in h
                };
                var a;
                if (F.pointerEnabled || (a = F.msPointerEnabled)) N.Ud = a ? "msTouchAction" : "touchAction"
            }
            return N
        }

        function w(g) {
            if (!t) {
                t = -1;
                if (ub == "Microsoft Internet Explorer" && !!j.attachEvent && !!j.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    t = M;
                    u = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on B=@_jscript_version@*/ ;
                    l = h.documentMode || u
                } else if (ub == "Netscape" && !!j.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        f = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        t = jb;
                        l = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var i = o.substring(0, b).lastIndexOf("/");
                        t = f >= 0 ? lb : mb;
                        l = q(o.substring(i + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            t = M;
                            l = u = q(a[1])
                        }
                    }
                    if (c >= 0) C = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        t = pb;
                        l = q(a[2])
                    }
                }
            }
            return g == t
        }

        function r() {
            return w(M)
        }

        function ib() {
            return r() && (l < 6 || h.compatMode == "BackCompat")
        }

        function Ab() {
            return w(jb)
        }

        function kb() {
            return w(mb)
        }

        function Db() {
            return w(lb)
        }

        function ob() {
            return w(pb)
        }

        function eb() {
            return kb() && C > 534 && C < 535
        }

        function I() {
            w();
            return C > 537 || l > 42 || t == M && l >= 11
        }

        function gb() {
            return r() && l < 9
        }

        function fb(a) {
            var b, c;
            return function(g) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + e;
                        if (g.style[b] != f) return c = b
                    })
                }
                return c
            }
        }

        function db(b) {
            var a;
            return function(c) {
                a = a || fb(b)(c) || b;
                return a
            }
        }
        var O = db("transform");

        function tb(a) {
            return {}.toString.call(a)
        }
        var qb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            qb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (tb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function H(a) {
            return a == g ? String(a) : qb[tb(a)] || "object"
        }

        function rb(a) {
            for (var b in a) return d
        }

        function D(a) {
            try {
                return H(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function xb(b, a) {
            setTimeout(b, a || 0)
        }

        function E(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function T(b, a) {
            if (l < 9) b.style.filter = a
        }

        function Hb(a, b) {
            if (a === f) a = b;
            return a
        }
        i.$Device = Ib;
        i.$IsBrowserIE = r;
        i.$IsBrowserIeQuirks = ib;
        i.$IsBrowserFireFox = Ab;
        i.$IsBrowserSafari = kb;
        i.$IsBrowserChrome = Db;
        i.$IsBrowserOpera = ob;
        i.Gf = I;
        fb("transform");
        i.$BrowserVersion = function() {
            return l
        };
        i.$BrowserEngineVersion = function() {
            return u || l
        };
        i.$WebKitVersion = function() {
            w();
            return C
        };
        i.$Delay = xb;
        i.Ff = function(a, b) {
            b.call(a);
            return G({}, a)
        };

        function Z(a) {
            a.constructor === Z.caller && a.Ub && a.Ub.apply(a, Z.caller.arguments)
        }
        i.Ub = Z;
        i.$GetElement = function(a) {
            if (i.sf(a)) a = h.getElementById(a);
            return a
        };

        function v(a) {
            return a || j.event
        }
        i.Fd = v;
        i.$EvtSrc = function(b) {
            b = v(b);
            var a = b.target || b.srcElement || h;
            if (a.nodeType == 3) a = i.pc(a);
            return a
        };
        i.Ld = function(a) {
            a = v(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };
        i.$WindowSize = function() {
            var a = h.body;
            return {
                x: a.clientWidth || A.clientWidth,
                y: a.clientHeight || A.clientHeight
            }
        };

        function x(c, d, a) {
            if (a !== f) c.style[d] = a == f ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && j.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, g);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function bb(b, c, a, d) {
            if (a === f) {
                a = q(x(b, c));
                isNaN(a) && (a = g);
                return a
            }
            if (a == g) a = "";
            else d && (a += "px");
            x(b, c, a)
        }

        function m(c, a) {
            var d = a ? bb : x,
                b;
            if (a & 4) b = db(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Cb(b) {
            if (r() && u < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Eb(b, a, f) {
            if (r() && u < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = E(h, [i], d);
                T(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var P = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!I()) P = G(P, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function Q(d, a) {
            var c = "";
            if (a) {
                if (r() && l && l < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.$Each(a, function(d, b) {
                    var a = P[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (R[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (I()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != f) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == f) a.$ScaleX = 1;
                    if (a.$ScaleY == f) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[O(d)] = c
        }
        i.xf = m("transformOrigin", 4);
        i.wf = m("backfaceVisibility", 4);
        i.uf = m("transformStyle", 4);
        i.vf = m("perspective", 6);
        i.Vf = m("perspectiveOrigin", 4);
        i.Wf = function(a, b) {
            if (r() && u < 9 || u < 10 && ib()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = O(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = E(e, [g], f);
                a.style[c] = d
            }
        };
        i.$AddEvent = function(a, c, d, b) {
            a = i.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.T = function(a, c, d, b) {
            a = i.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.$FireEvent = function(c, b) {
            var a;
            if (h.createEvent) {
                a = h.createEvent("HTMLEvents");
                a.initEvent(b, k, k);
                c.dispatchEvent(a)
            } else {
                var d = "on" + b;
                a = h.createEventObject();
                c.fireEvent(d, a)
            }
        };
        i.$CancelEvent = function(a) {
            a = v(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        i.$StopEvent = function(a) {
            a = v(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        i.$CreateCallback = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        i.$InnerText = function(a, b) {
            if (b == f) return a.textContent || a.innerText;
            var c = h.createTextNode(b);
            i.uc(a);
            a.appendChild(c)
        };
        i.$InnerHtml = function(a, b) {
            if (b == f) return a.innerHTML;
            a.innerHTML = b
        };
        i.$ClearInnerHtml = function(a) {
            a.innerHTML = ""
        };
        i.$Children = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function sb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (X(a, b) == c) return a;
                    if (!e) {
                        var d = sb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        i.$FindChild = sb;

        function W(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    X(a, b) == d && c.push(a);
                    if (!f) {
                        var e = W(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function nb(a, c, d) {
            for (a = a ? a.firstChild : g; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = nb(a, c, d);
                        if (b) return b
                    }
                }
        }
        i.Lf = nb;
        i.Kf = function(b, a) {
            return b.getElementsByTagName(a)
        };
        i.Lb = function(a, f, d) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c = b.$AttributeEx(a, d);
                    if (c && c == Hb(f, c)) {
                        e = a;
                        break
                    }
                }
                a = b.pc(a)
            } while (a && a != h.body);
            return e
        };

        function G() {
            var e = arguments,
                d, c, b, a, h = 1 & e[0],
                g = 1 + h;
            d = e[g - 1] || {};
            for (; g < e.length; g++)
                if (c = e[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== f) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (D(i) || D(a)) ? G(h, {}, i, a) : a
                        }
                    }
                return d
        }
        i.s = G;

        function ab(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (D(a) && D(b)) {
                        a = ab(a, b);
                        e = !rb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        i.Zd = function(a) {
            return H(a) == "function"
        };
        i.sf = function(a) {
            return H(a) == "string"
        };
        i.fc = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        i.$Each = n;
        i.Wd = D;

        function U(a) {
            return h.createElement(a)
        }
        i.$CreateElement = U;
        i.$CreateDiv = function() {
            return U("DIV")
        };
        i.Pf = function() {
            return U("SPAN")
        };
        i.Xd = function() {};

        function y(b, c, a) {
            if (a == f) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function X(a, b) {
            return y(a, b) || y(a, "data-" + b)
        }
        i.$Attribute = y;
        i.$AttributeEx = X;
        i.gc = function(d, b, c) {
            var a = i.cd(y(d, b));
            if (isNaN(a)) a = c;
            return a
        };

        function z(b, a) {
            return y(b, "class", a) || ""
        }

        function wb(b) {
            var a = {};
            n(b, function(b) {
                if (b != f) a[b] = b
            });
            return a
        }

        function yb(b, a) {
            return b.match(a || zb)
        }

        function S(b, a) {
            return wb(yb(b || "", a))
        }
        i.Of = wb;
        i.Qf = yb;

        function cb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function K(a, c, b) {
            z(a, cb(" ", G(ab(S(z(a)), S(c)), S(b))))
        }
        i.pc = function(a) {
            return a.parentNode
        };
        i.V = function(a) {
            i.rb(a, "none")
        };
        i.D = function(a, b) {
            i.rb(a, b ? "none" : "")
        };
        i.Jf = function(b, a) {
            b.removeAttribute(a)
        };
        i.Mf = function() {
            return r() && l < 10
        };
        i.Yf = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top || a.E || 0) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left || a.B || 0) + "px)";
            else if (a !== f) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = E(h, g, "");
                b.$CssCssText(d, e)
            }
        };
        i.R = function() {
            return +new Date
        };
        i.$AppendChild = function(b, a) {
            b.appendChild(a)
        };
        i.Db = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        i.Qb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        i.yf = function(a, b) {
            n(a, function(a) {
                i.Qb(a, b)
            })
        };
        i.uc = function(a) {
            i.yf(i.$Children(a, d), a)
        };
        i.ld = function(a, b) {
            var c = i.pc(a);
            b & 1 && i.z(a, (i.$CssWidth(c) - i.$CssWidth(a)) / 2);
            b & 2 && i.C(a, (i.$CssHeight(c) - i.$CssHeight(a)) / 2)
        };
        var V = {
            $Top: g,
            $Right: g,
            $Bottom: g,
            $Left: g,
            v: g,
            u: g
        };
        i.rf = function(a) {
            var b = i.$CreateDiv();
            s(b, {
                tf: "block",
                mb: i.J(a),
                $Top: 0,
                $Left: 0,
                v: 0,
                u: 0
            });
            var d = i.sd(a, V);
            i.Db(b, a);
            i.$AppendChild(b, a);
            var e = i.sd(a, V),
                c = {};
            n(d, function(b, a) {
                if (b == e[a]) c[a] = b
            });
            s(b, V);
            s(b, c);
            s(a, {
                $Top: 0,
                $Left: 0
            });
            return c
        };
        i.Qc = function(b, a) {
            return parseInt(b, a || 10)
        };
        i.cd = q;

        function Y(d, c, b) {
            var a = d.cloneNode(!c);
            !b && i.Jf(a, "id");
            return a
        }
        i.$CloneNode = Y;
        i.Nb = function(e, f) {
            var a = new Image;

            function b(e, d) {
                i.T(a, "load", b);
                i.T(a, "abort", c);
                i.T(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (ob() && l < 11.6 || !e) b(!e);
            else {
                i.$AddEvent(a, "load", b);
                i.$AddEvent(a, "abort", c);
                i.$AddEvent(a, "error", c);
                a.src = e
            }
        };
        i.If = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                i.Nb(a.src, b)
            });
            b()
        };
        i.rd = function(a, g, i, h) {
            if (h) a = Y(a);
            var c = W(a, g);
            if (!c.length) c = b.Kf(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = Y(i);
                z(e, z(d));
                b.$CssCssText(e, d.style.cssText);
                b.Db(e, d);
                b.Qb(d)
            }
            return a
        };

        function Fb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                d = [],
                q, k = 0,
                g = 0,
                e = 0;

            function j() {
                K(a, q, (d[e || g & 2 || g] || "") + " " + (d[k] || ""));
                b.$Css(a, "pointer-events", e ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                i.T(h, "mouseup", c);
                i.T(h, "touchend", c);
                i.T(h, "touchcancel", c)
            }

            function o(a) {
                if (e) i.$CancelEvent(a);
                else {
                    k = 4;
                    j();
                    i.$AddEvent(h, "mouseup", c);
                    i.$AddEvent(h, "touchend", c);
                    i.$AddEvent(h, "touchcancel", c)
                }
            }
            l.kd = function(a) {
                if (a === f) return g;
                g = a & 2 || a & 1;
                j()
            };
            l.$Enable = function(a) {
                if (a === f) return !e;
                e = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = i.$GetElement(a);
            y(a, "data-jssor-button", "1");
            var m = b.Qf(z(a));
            if (m) p = m.shift();
            n(r, function(a) {
                d.push(p + a)
            });
            q = cb(" ", d);
            d.unshift("");
            i.$AddEvent(a, "mousedown", o);
            i.$AddEvent(a, "touchstart", o)
        }
        i.Xb = function(a) {
            return new Fb(a)
        };
        i.$Css = x;
        i.Ab = m("overflow");
        i.C = m("top", 2);
        i.tg = m("right", 2);
        i.sg = m("bottom", 2);
        i.z = m("left", 2);
        i.$CssWidth = m("width", 2);
        i.$CssHeight = m("height", 2);
        i.cg = m("marginLeft", 2);
        i.rg = m("marginTop", 2);
        i.J = m("position");
        i.rb = m("display");
        i.A = m("zIndex", 1);
        i.Fc = function(b, a, c) {
            if (a != f) Eb(b, a, c);
            else return Cb(b)
        };
        i.$CssCssText = function(a, b) {
            if (b != f) a.style.cssText = b;
            else return a.style.cssText
        };
        i.vg = function(b, a) {
            if (a === f) {
                a = x(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            x(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var L;
        i.yg = L = {
            $Opacity: i.Fc,
            $Top: i.C,
            $Right: i.tg,
            $Bottom: i.sg,
            $Left: i.z,
            v: i.$CssWidth,
            u: i.$CssHeight,
            mb: i.J,
            tf: i.rb,
            $ZIndex: i.A
        };
        i.sd = function(c, b) {
            var a = {};
            n(b, function(d, b) {
                if (L[b]) a[b] = L[b](c)
            });
            return a
        };

        function s(h, l) {
            var e = gb(),
                b = I(),
                d = eb(),
                j = O(h);

            function k(b, d, a) {
                var e = b.kb(p(-d / 2, -a / 2)),
                    f = b.kb(p(d / 2, -a / 2)),
                    g = b.kb(p(d / 2, a / 2)),
                    h = b.kb(p(-d / 2, a / 2));
                b.kb(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.$TranslateZ || 0,
                    p = (a.$RotateX || 0) % 360,
                    q = (a.$RotateY || 0) % 360,
                    u = (a.$Rotate || 0) % 360,
                    l = a.$ScaleX,
                    m = a.$ScaleY,
                    g = a.th;
                if (l == f) l = 1;
                if (m == f) m = 1;
                if (g == f) g = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    g = 0
                }
                var c = new Bb(a.$TranslateX, a.$TranslateY, n);
                c.$RotateX(p);
                c.$RotateY(q);
                c.ig(u);
                c.gg(a.$SkewX, a.$SkewY);
                c.$Scale(l, m, g);
                if (b) {
                    c.$Move(a.B, a.E);
                    d.style[j] = c.fg()
                } else if (!B || B < 9) {
                    var o = "",
                        h = {
                            x: 0,
                            y: 0
                        };
                    if (a.$OriginalWidth) h = k(c, a.$OriginalWidth, a.$OriginalHeight);
                    i.rg(d, h.y);
                    i.cg(d, h.x);
                    o = c.og();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = E(s, [t], o);
                    T(d, r)
                }
            }
            s = function(e, c) {
                c = c || {};
                var j = c.B,
                    k = c.E,
                    h;
                n(L, function(a, b) {
                    h = c[b];
                    h !== f && a(e, h)
                });
                i.Yf(e, c.$Clip);
                if (!b) {
                    j != f && i.z(e, (c.td || 0) + j);
                    k != f && i.C(e, (c.vd || 0) + k)
                }
                if (c.ng)
                    if (d) xb(i.$CreateCallback(g, Q, e, c));
                    else a(e, c)
            };
            i.nc = Q;
            if (d) i.nc = s;
            if (e) i.nc = a;
            else if (!b) a = Q;
            i.I = s;
            s(h, l)
        }
        i.nc = s;
        i.I = s;

        function Bb(j, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
                i = c.sin,
                h = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return m.apply(g, (a || b).concat(c))
            }
            d.$Scale = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([1, 0, 0, 0, 0, d, g, 0, 0, -g, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, 0, -g, 0, 0, 1, 0, 0, g, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.ig = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, g, 0, 0, -g, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.gg = function(a, c) {
                if (a || c) {
                    j = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.kb = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.fg = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.og = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.Rc(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.Rc(b, 0, c)
            };
            a.Rc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.kb = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return p(a[0][0], a[1][0])
            }
        });
        var R = {
            td: 0,
            vd: 0,
            B: 0,
            E: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        i.Jc = function(c, d) {
            var a = c || {};
            if (c)
                if (b.Zd(c)) a = {
                    Y: a
                };
                else if (b.Zd(c.$Clip)) a.$Clip = {
                Y: c.$Clip
            };
            a.Y = a.Y || d;
            if (a.$Clip) a.$Clip.Y = a.$Clip.Y || d;
            return a
        };

        function vb(c, a) {
            var b = {};
            n(c, function(c, d) {
                var e = c;
                if (a[d] != f)
                    if (i.fc(c)) e = c + a[d];
                    else e = vb(c, a[d]);
                b[d] = e
            });
            return b
        }
        i.we = vb;
        i.Sc = function(n, j, s, t, B, C, o) {
            var a = j;
            if (n) {
                a = {};
                for (var i in j) {
                    var D = C[i] || 1,
                        z = B[i] || [0, 1],
                        h = (s - z[0]) / z[1];
                    h = c.min(c.max(h, 0), 1);
                    h = h * D;
                    var x = c.floor(h);
                    if (h != x) h -= x;
                    var k = t.Y || e.$Linear,
                        m, E = n[i],
                        q = j[i];
                    if (b.fc(q)) {
                        k = t[i] || k;
                        var A = k(h);
                        m = E + q * A
                    } else {
                        m = b.s({
                            ec: {}
                        }, n[i]);
                        var y = t[i] || {};
                        b.$Each(q.ec || q, function(d, a) {
                            k = y[a] || y.Y || k;
                            var c = k(h),
                                b = d * c;
                            m.ec[a] = b;
                            m[a] += b
                        })
                    }
                    a[i] = m
                }
                var w = b.$Each(j, function(b, a) {
                    return R[a] != f
                });
                w && b.$Each(R, function(c, b) {
                    if (a[b] == f && n[b] !== f) a[b] = n[b]
                });
                if (w) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = o.$OriginalWidth;
                    a.$OriginalHeight = o.$OriginalHeight;
                    if (r() && l >= 11 && (j.B || j.E) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8;
                    a.ng = d
                }
            }
            if (j.$Clip && o.$Move) {
                var p = a.$Clip.ec,
                    v = (p.$Top || 0) + (p.$Bottom || 0),
                    u = (p.$Left || 0) + (p.$Right || 0);
                a.$Left = (a.$Left || 0) + u;
                a.$Top = (a.$Top || 0) + v;
                a.$Clip.$Left -= u;
                a.$Clip.$Right -= u;
                a.$Clip.$Top -= v;
                a.$Clip.$Bottom -= v
            }
            if (a.$Clip && b.Mf() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.E && !a.$Clip.B && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = g;
            return a
        }
    };

    function o() {
        var a = this,
            d = [];

        function h(a, b) {
            d.push({
                Bc: a,
                Ic: b
            })
        }

        function g(a, c) {
            b.$Each(d, function(b, e) {
                b.Bc == a && b.Ic === c && d.splice(e, 1)
            })
        }
        a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.k = function(a) {
            var c = [].slice.call(arguments, 1);
            b.$Each(d, function(b) {
                b.Bc == a && b.Ic.apply(j, c)
            })
        }
    }
    var l = function(A, D, g, L, O, J) {
        A = A || 0;
        var a = this,
            p, m, n, t, B = 0,
            H, I, G, C, z = 0,
            h = 0,
            l = 0,
            y, i, e, f, o, x, v = [],
            w;

        function P(a) {
            e += a;
            f += a;
            i += a;
            h += a;
            l += a;
            z += a
        }

        function s(p) {
            var j = p;
            if (o)
                if (!x && (j >= f || j < e) || x && j >= e) j = ((j - e) % o + o) % o + e;
            if (!y || t || h != j) {
                var k = c.min(j, f);
                k = c.max(k, e);
                if (!y || t || k != l) {
                    if (J) {
                        var m = (k - i) / (D || 1);
                        if (g.$Reverse) m = 1 - m;
                        var n = b.Sc(O, J, m, H, G, I, g);
                        if (w) b.$Each(n, function(b, a) {
                            w[a] && w[a](L, b)
                        });
                        else b.I(L, n)
                    }
                    a.Lc(l - i, k - i);
                    var r = l,
                        q = l = k;
                    b.$Each(v, function(b, c) {
                        var a = !y && x || j <= h ? v[v.length - c - 1] : b;
                        a.G(l - z)
                    });
                    h = j;
                    y = d;
                    a.cc(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.$Shift(f);
            if (!d) {
                e = c.min(e, a.mc() + z);
                f = c.max(f, a.sb() + z)
            }
            v.push(a)
        }
        var u = j.requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || j.msRequestAnimationFrame;
        if (b.$IsBrowserSafari() && b.$BrowserVersion() < 7 || !u) u = function(a) {
            b.$Delay(a, g.$Interval)
        };

        function K() {
            if (p) {
                var d = b.R(),
                    e = c.min(d - B, g.bd),
                    a = h + e * n;
                B = d;
                if (a * n >= m * n) a = m;
                s(a);
                if (!t && a * n >= m * n) M(C);
                else u(K)
            }
        }

        function r(g, i, j) {
            if (!p) {
                p = d;
                t = j;
                C = i;
                g = c.max(g, e);
                g = c.min(g, f);
                m = g;
                n = m < h ? -1 : 1;
                a.id();
                B = b.R();
                u(K)
            }
        }

        function M(b) {
            if (p) {
                t = p = C = k;
                a.Tc();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            r(a ? h + a : f, b, c)
        };
        a.xd = r;
        a.tb = M;
        a.fe = function(a) {
            r(a)
        };
        a.ab = function() {
            return h
        };
        a.yd = function() {
            return m
        };
        a.Ib = function() {
            return l
        };
        a.G = s;
        a.ce = function() {
            s(f, d)
        };
        a.$Move = function(a) {
            s(h + a)
        };
        a.$IsPlaying = function() {
            return p
        };
        a.oe = function(a) {
            o = a
        };
        a.$Shift = P;
        a.O = function(a, b) {
            E(a, 0, b)
        };
        a.Ec = function(a) {
            E(a, 1)
        };
        a.od = function(a) {
            f += a
        };
        a.mc = function() {
            return e
        };
        a.sb = function() {
            return f
        };
        a.cc = a.id = a.Tc = a.Lc = b.Xd;
        a.Mc = b.R();
        g = b.s({
            $Interval: 16,
            bd: 50
        }, g);
        o = g.Kc;
        x = g.af;
        w = g.mf;
        e = i = A;
        f = A + D;
        I = g.$Round || {};
        G = g.$During || {};
        H = b.Jc(g.$Easing)
    };
    var m = {
            Hb: "data-scale",
            tc: "data-scale-ratio",
            vb: "data-autocenter"
        },
        n = new function() {
            var a = this;
            a.U = function(c, a, e, d) {
                (d || !b.$Attribute(c, a)) && b.$Attribute(c, a, e)
            };
            a.Zb = function(a) {
                var c = b.gc(a, m.vb);
                b.ld(a, c)
            }
        },
        q = j.$JssorSlideshowFormations$ = new function() {
            var h = this,
                b = 0,
                a = 1,
                f = 2,
                e = 3,
                s = 1,
                r = 2,
                t = 4,
                q = 8,
                w = 256,
                x = 512,
                v = 1024,
                u = 2048,
                j = u + s,
                i = u + r,
                o = x + s,
                m = x + r,
                n = w + t,
                k = w + q,
                l = v + t,
                p = v + q;

            function y(a) {
                return (a & r) == r
            }

            function z(a) {
                return (a & t) == t
            }

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.$FormationStraight = function(f) {
                for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Yb, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                    for (a = 0; a < d; a++) {
                        switch (s) {
                            case j:
                                c = h - (a * e + (q - b));
                                break;
                            case l:
                                c = h - (b * d + (p - a));
                                break;
                            case o:
                                c = h - (a * e + b);
                            case n:
                                c = h - (b * d + a);
                                break;
                            case i:
                                c = a * e + b;
                                break;
                            case k:
                                c = b * d + (p - a);
                                break;
                            case m:
                                c = a * e + (q - b);
                                break;
                            default:
                                c = b * d + a
                        }
                        g(r, c, [b, a])
                    }
                return r
            };
            h.$FormationSwirl = function(q) {
                var x = q.$Cols,
                    y = q.$Rows,
                    B = q.$Assembly,
                    w = q.Yb,
                    A = [],
                    z = [],
                    u = 0,
                    c = 0,
                    h = 0,
                    r = x - 1,
                    s = y - 1,
                    t, p, v = 0;
                switch (B) {
                    case j:
                        c = r;
                        h = 0;
                        p = [f, a, e, b];
                        break;
                    case l:
                        c = 0;
                        h = s;
                        p = [b, e, a, f];
                        break;
                    case o:
                        c = r;
                        h = s;
                        p = [e, a, f, b];
                        break;
                    case n:
                        c = r;
                        h = s;
                        p = [a, e, b, f];
                        break;
                    case i:
                        c = 0;
                        h = 0;
                        p = [f, b, e, a];
                        break;
                    case k:
                        c = r;
                        h = 0;
                        p = [a, f, b, e];
                        break;
                    case m:
                        c = 0;
                        h = s;
                        p = [e, b, f, a];
                        break;
                    default:
                        c = 0;
                        h = 0;
                        p = [b, f, a, e]
                }
                u = 0;
                while (u < w) {
                    t = h + "," + c;
                    if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                        z[t] = d;
                        g(A, u++, [h, c])
                    } else switch (p[v++ % p.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            h--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            h++
                    }
                    switch (p[v % p.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            h++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            h--
                    }
                }
                return A
            };
            h.$FormationZigZag = function(p) {
                var w = p.$Cols,
                    x = p.$Rows,
                    z = p.$Assembly,
                    v = p.Yb,
                    t = [],
                    u = 0,
                    c = 0,
                    d = 0,
                    q = w - 1,
                    r = x - 1,
                    y, h, s = 0;
                switch (z) {
                    case j:
                        c = q;
                        d = 0;
                        h = [f, a, e, a];
                        break;
                    case l:
                        c = 0;
                        d = r;
                        h = [b, e, a, e];
                        break;
                    case o:
                        c = q;
                        d = r;
                        h = [e, a, f, a];
                        break;
                    case n:
                        c = q;
                        d = r;
                        h = [a, e, b, e];
                        break;
                    case i:
                        c = 0;
                        d = 0;
                        h = [f, b, e, b];
                        break;
                    case k:
                        c = q;
                        d = 0;
                        h = [a, f, b, f];
                        break;
                    case m:
                        c = 0;
                        d = r;
                        h = [e, b, f, b];
                        break;
                    default:
                        c = 0;
                        d = 0;
                        h = [b, f, a, f]
                }
                u = 0;
                while (u < v) {
                    y = d + "," + c;
                    if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                        g(t, u++, [d, c]);
                        switch (h[s % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    } else {
                        switch (h[s++ % h.length]) {
                            case b:
                                c--;
                                break;
                            case f:
                                d--;
                                break;
                            case a:
                                c++;
                                break;
                            case e:
                                d++
                        }
                        switch (h[s++ % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    }
                }
                return t
            };
            h.$FormationStraightStairs = function(q) {
                var u = q.$Cols,
                    v = q.$Rows,
                    e = q.$Assembly,
                    t = q.Yb,
                    r = [],
                    s = 0,
                    c = 0,
                    d = 0,
                    f = u - 1,
                    h = v - 1,
                    x = t - 1;
                switch (e) {
                    case j:
                    case m:
                    case o:
                    case i:
                        var a = 0,
                            b = 0;
                        break;
                    case k:
                    case l:
                    case n:
                    case p:
                        var a = f,
                            b = 0;
                        break;
                    default:
                        e = p;
                        var a = f,
                            b = 0
                }
                c = a;
                d = b;
                while (s < t) {
                    if (z(e) || y(e)) g(r, x - s++, [d, c]);
                    else g(r, s++, [d, c]);
                    switch (e) {
                        case j:
                        case m:
                            c--;
                            d++;
                            break;
                        case o:
                        case i:
                            c++;
                            d--;
                            break;
                        case k:
                        case l:
                            c--;
                            d--;
                            break;
                        case p:
                        case n:
                        default:
                            c++;
                            d++
                    }
                    if (c < 0 || d < 0 || c > f || d > h) {
                        switch (e) {
                            case j:
                            case m:
                                a++;
                                break;
                            case k:
                            case l:
                            case o:
                            case i:
                                b++;
                                break;
                            case p:
                            case n:
                            default:
                                a--
                        }
                        if (a < 0 || b < 0 || a > f || b > h) {
                            switch (e) {
                                case j:
                                case m:
                                    a = f;
                                    b++;
                                    break;
                                case o:
                                case i:
                                    b = h;
                                    a++;
                                    break;
                                case k:
                                case l:
                                    b = h;
                                    a--;
                                    break;
                                case p:
                                case n:
                                default:
                                    a = 0;
                                    b++
                            }
                            if (b > h) b = h;
                            else if (b < 0) b = 0;
                            else if (a > f) a = f;
                            else if (a < 0) a = 0
                        }
                        d = b;
                        c = a
                    }
                }
                return r
            };
            h.$FormationSquare = function(i) {
                var a = i.$Cols || 1,
                    b = i.$Rows || 1,
                    j = [],
                    d, e, f, h, k;
                f = a < b ? (b - a) / 2 : 0;
                h = a > b ? (a - b) / 2 : 0;
                k = c.round(c.max(a / 2, b / 2)) + 1;
                for (d = 0; d < a; d++)
                    for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
                return j
            };
            h.$FormationRectangle = function(f) {
                var d = f.$Cols || 1,
                    e = f.$Rows || 1,
                    h = [],
                    a, b, i;
                i = c.round(c.min(d / 2, e / 2)) + 1;
                for (a = 0; a < d; a++)
                    for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
                return h
            };
            h.$FormationRandom = function(d) {
                for (var e = [], a, b = 0; b < d.$Rows; b++)
                    for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
                return e
            };
            h.$FormationCircle = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
                return h
            };
            h.$FormationCross = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
                return h
            };
            h.$FormationRectangleCross = function(f) {
                for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                    for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
                return j
            }
        };
    j.$JssorSlideshowRunner$ = function(m, s, p, u, z, A) {
        var a = this,
            v, h, f, y = 0,
            x = u.$TransitionsOrder,
            r, i = 8;

        function t(a) {
            if (a.$Top) a.E = a.$Top;
            if (a.$Left) a.B = a.$Left;
            b.$Each(a, function(a) {
                b.Wd(a) && t(a)
            })
        }

        function j(h, f, g) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: k,
                $SlideOut: k,
                $Reverse: k,
                $Formation: q.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: e.$Linear,
                $Round: {},
                bc: [],
                $During: {}
            };
            b.s(a, h);
            if (a.$Rows == 0) a.$Rows = c.round(a.$Cols * g);
            t(a);
            a.Yb = a.$Cols * a.$Rows;
            a.$Easing = b.Jc(a.$Easing, e.$Linear);
            a.ee = c.ceil(a.$Duration / a.$Interval);
            a.qe = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.bc[f]) {
                    a.bc[f] = {
                        v: c,
                        u: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.bc[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.bc[f]
            };
            if (a.$Brother) {
                a.$Brother = j(a.$Brother, f, g);
                a.$SlideOut = d
            }
            return a
        }

        function n(z, i, a, v, n, l) {
            var y = this,
                t, u = {},
                h = {},
                m = [],
                f, e, r, p = a.$ChessMode.$Column || 0,
                q = a.$ChessMode.$Row || 0,
                g = a.qe(n, l),
                o = B(a),
                C = o.length - 1,
                s = a.$Duration + a.$Delay * C,
                w = v + s,
                j = a.$SlideOut,
                x;
            w += 50;

            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.ed = w;
            y.hc = function(d) {
                d -= v;
                var e = d < s;
                if (e || x) {
                    x = e;
                    if (!j) d = s - d;
                    var f = c.ceil(d / a.$Interval);
                    b.$Each(h, function(a, e) {
                        var d = c.max(f, a.Ae);
                        d = c.min(d, a.length - 1);
                        if (a.Yc != d) {
                            if (!a.Yc && !j) b.D(m[e]);
                            else d == a.ue && j && b.V(m[e]);
                            a.Yc = d;
                            b.I(m[e], a[d])
                        }
                    })
                }
            };
            i = b.$CloneNode(i);
            A(i, 0, 0);
            b.$Each(o, function(i, m) {
                b.$Each(i, function(G) {
                    var I = G[0],
                        H = G[1],
                        v = I + "," + H,
                        o = k,
                        s = k,
                        x = k;
                    if (p && H % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && I % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = s ? a.$Bottom : a.$Top,
                        z = s ? a.$Top : a.$Bottom,
                        B = o ? a.$Right : a.$Left,
                        A = o ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    r = {};
                    e = {
                        E: 0,
                        B: 0,
                        $Opacity: 1,
                        v: n,
                        u: l
                    };
                    f = b.s({}, e);
                    t = b.s({}, g[v]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var K = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var J = d;
                        if (J) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (K) {
                        var i = t.ec = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                i.$Top = g.u / 2 * w;
                                i.$Bottom = -i.$Top
                            } else if (C) i.$Bottom = -g.u * w;
                            else if (z) i.$Top = g.u * w;
                            if (B && A) {
                                i.$Left = g.v / 2 * w;
                                i.$Right = -i.$Left
                            } else if (B) i.$Right = -g.v * w;
                            else if (A) i.$Left = g.v * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (a.x) e.B += n * a.x * L;
                    if (a.y) e.E += l * a.y * M;
                    b.$Each(e, function(a, c) {
                        if (b.fc(a))
                            if (a != f[c]) r[c] = a - f[c]
                    });
                    u[v] = j ? f : e;
                    var D = a.ee,
                        y = c.round(m * a.$Delay / a.$Interval);
                    h[v] = new Array(y);
                    h[v].Ae = y;
                    h[v].ue = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.Sc(f, r, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        h[v].push(E)
                    }
                })
            });
            o.reverse();
            b.$Each(o, function(a) {
                b.$Each(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = i;
                    if (e || f) a = b.$CloneNode(i);
                    b.I(a, u[d]);
                    b.Ab(a, "hidden");
                    b.J(a, "absolute");
                    z.ve(a);
                    m[d] = a;
                    b.D(a, !j)
                })
            })
        }

        function w() {
            var a = this,
                b = 0;
            l.call(a, 0, v);
            a.cc = function(c, a) {
                if (a - b > i) {
                    b = a;
                    f && f.hc(a);
                    h && h.hc(a)
                }
            };
            a.sc = r
        }
        a.Te = function() {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].wb = a);
            return b[a]
        };
        a.Re = function(x, y, k, l, b, t) {
            a.xb();
            r = b;
            b = j(b, i, t);
            var g = l.Bd,
                e = k.Bd;
            g["no-image"] = !l.jc;
            e["no-image"] = !k.jc;
            var o = g,
                q = e,
                w = b,
                d = b.$Brother || j({}, i, t);
            if (!b.$SlideOut) {
                o = e;
                q = g
            }
            var u = d.$Shift || 0;
            h = new n(m, q, d, c.max(u - d.$Interval, 0), s, p);
            f = new n(m, o, w, c.max(d.$Interval - u, 0), s, p);
            h.hc(0);
            f.hc(0);
            v = c.max(h.ed, f.ed);
            a.wb = x
        };
        a.xb = function() {
            m.xb();
            h = g;
            f = g
        };
        a.We = function() {
            var a = g;
            if (f) a = new w;
            return a
        };
        if (z && b.$WebKitVersion() < 537) i = 16;
        o.call(a);
        l.call(a, -1e7, 1e7)
    };
    var p = {
        Ob: 1
    };
    j.$JssorBulletNavigator$ = function(a, E) {
        var f = this;
        o.call(f);
        a = b.$GetElement(a);
        var u, C, B, t, l = 0,
            e, q, j, y, z, i, h, s, r, D = [],
            A = [];

        function x(a) {
            a != -1 && A[a].kd(a == l)
        }

        function v(a) {
            f.k(p.Ob, a * q)
        }
        f.$Elmt = a;
        f.oc = function(a) {
            if (a != t) {
                var d = l,
                    b = c.floor(a / q);
                l = b;
                t = a;
                x(d);
                x(b)
            }
        };
        f.qc = function(c) {
            b.D(a, c)
        };
        var w;
        f.Nc = function(x) {
            if (!w) {
                u = c.ceil(x / q);
                l = 0;
                var n = s + y,
                    o = r + z,
                    m = c.ceil(u / j) - 1;
                C = s + n * (!i ? m : j - 1);
                B = r + o * (i ? m : j - 1);
                b.$CssWidth(a, C);
                b.$CssHeight(a, B);
                for (var f = 0; f < u; f++) {
                    var t = b.Pf();
                    b.$InnerText(t, f + 1);
                    var k = b.rd(h, "numbertemplate", t, d);
                    b.J(k, "absolute");
                    var p = f % (m + 1);
                    b.z(k, !i ? n * p : f % j * n);
                    b.C(k, i ? o * p : c.floor(f / (m + 1)) * o);
                    b.$AppendChild(a, k);
                    D[f] = k;
                    e.$ActionMode & 1 && b.$AddEvent(k, "click", b.$CreateCallback(g, v, f));
                    e.$ActionMode & 2 && b.$AddEvent(k, "mouseenter", b.$CreateCallback(g, v, f));
                    A[f] = b.Xb(k)
                }
                w = d
            }
        };
        f.Pb = e = b.s({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, E);
        h = b.$FindChild(a, "prototype");
        s = b.$CssWidth(h);
        r = b.$CssHeight(h);
        b.Qb(h, a);
        q = e.$Steps || 1;
        j = e.$Rows || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        i = e.$Orientation - 1;
        e.$Scale == k && n.U(a, m.Hb, 1);
        e.$AutoCenter && n.U(a, m.vb, e.$AutoCenter);
        n.Zb(a)
    };
    j.$JssorArrowNavigator$ = function(a, f, i) {
        var c = this;
        o.call(c);
        var t, e, h, j;
        b.$CssWidth(a);
        b.$CssHeight(a);
        var r, q;

        function l(a) {
            c.k(p.Ob, a, d)
        }

        function v(c) {
            b.D(a, c);
            b.D(f, c)
        }

        function u() {
            r.$Enable(i.$Loop || e > 0);
            q.$Enable(i.$Loop || e < t - i.$Cols)
        }
        c.oc = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                u()
            }
        };
        c.qc = v;
        var s;
        c.Nc = function(c) {
            t = c;
            e = 0;
            if (!s) {
                b.$AddEvent(a, "click", b.$CreateCallback(g, l, -j));
                b.$AddEvent(f, "click", b.$CreateCallback(g, l, j));
                r = b.Xb(a);
                q = b.Xb(f);
                s = d
            }
        };
        c.Pb = h = b.s({
            $Steps: 1
        }, i);
        j = h.$Steps;
        if (h.$Scale == k) {
            n.U(a, m.Hb, 1);
            n.U(f, m.Hb, 1)
        }
        if (h.$AutoCenter) {
            n.U(a, m.vb, h.$AutoCenter);
            n.U(f, m.vb, h.$AutoCenter)
        }
        n.Zb(a);
        n.Zb(f)
    };
    j.$JssorThumbnailNavigator$ = function(h, D) {
        var j = this,
            A, s, a, x = [],
            B, z, e, t, u, w, v, r, l, f, q;
        o.call(j);
        h = b.$GetElement(h);

        function C(o, f) {
            var h = this,
                c, n, m;

            function r() {
                n.kd(s == f)
            }

            function i(g) {
                if (g || !l.De()) {
                    var a = e - f % e,
                        b = l.gd((f + a) / e - 1),
                        c = b * e + e - a;
                    j.k(p.Ob, c, k, d)
                }
            }
            h.wb = f;
            h.fd = r;
            m = o.se || o.jc || b.$CreateDiv();
            h.dc = c = b.rd(q, "thumbnailtemplate", m, d);
            n = b.Xb(c);
            a.$ActionMode & 1 && b.$AddEvent(c, "click", b.$CreateCallback(g, i, 0));
            a.$ActionMode & 2 && b.$AddEvent(c, "mouseenter", b.$CreateCallback(g, i, 1))
        }
        j.oc = function(b, d, f) {
            var a = s;
            s = b;
            a != -1 && x[a].fd();
            x[b].fd();
            !f && l.$PlayTo(l.gd(c.floor(d / e)))
        };
        j.qc = function(a) {
            b.D(h, a)
        };
        var y;
        j.Nc = function(G, D) {
            if (!y) {
                A = G;
                c.ceil(A / e);
                s = -1;
                r = c.min(r, D.length);
                var g = a.$Orientation & 1,
                    o = w + (w + t) * (e - 1) * (1 - g),
                    n = v + (v + u) * (e - 1) * g,
                    q = o + (o + t) * (r - 1) * g,
                    p = n + (n + u) * (r - 1) * (1 - g);
                b.J(f, "absolute");
                b.Ab(f, "hidden");
                b.z(f, (B - q) / 2);
                b.C(f, (z - p) / 2);
                b.$CssWidth(f, q);
                b.$CssHeight(f, p);
                var m = [];
                b.$Each(D, function(k, h) {
                    var i = new C(k, h),
                        d = i.dc,
                        a = c.floor(h / e),
                        j = h % e;
                    b.z(d, (w + t) * j * (1 - g));
                    b.C(d, (v + u) * j * g);
                    if (!m[a]) {
                        m[a] = b.$CreateDiv();
                        b.$AppendChild(f, m[a])
                    }
                    b.$AppendChild(m[a], d);
                    x.push(i)
                });
                var F = b.s({
                    $AutoPlay: 0,
                    $NaviQuitDrag: k,
                    $SlideWidth: o,
                    $SlideHeight: n,
                    $SlideSpacing: t * g + u * (1 - g),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                l = new i(h, F);
                j.Rf = l.Rf;
                y = d
            }
        };
        j.Pb = a = b.s({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $ActionMode: 1
        }, D);
        B = b.$CssWidth(h);
        z = b.$CssHeight(h);
        f = b.$FindChild(h, "slides", d);
        q = b.$FindChild(f, "prototype");
        w = b.$CssWidth(q);
        v = b.$CssHeight(q);
        b.Qb(q, f);
        e = a.$Rows || 1;
        t = a.$SpacingX;
        u = a.$SpacingY;
        r = a.$Cols;
        a.$Scale == k && n.U(h, m.Hb, 1);
        a.$AutoCenter &= a.$Orientation;
        a.$AutoCenter && n.U(h, m.vb, a.$AutoCenter);
        n.Zb(h)
    };

    function r(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.hd = b.Xd;
        a.dd = 0;
        a.ad = c
    }
    j.$JssorCaptionSlideo$ = function(v, j, u, E) {
        var a = this,
            w, o = {},
            p = j.$Transitions,
            s = j.$Controls,
            m = new l(0, 0),
            q = [],
            h = [],
            D = E,
            f = D ? 1e8 : 0;
        l.call(a, 0, 0);

        function r(d, c) {
            var a = {};
            b.$Each(d, function(d, f) {
                var e = o[f];
                if (e) {
                    if (b.Wd(d)) d = r(d, c || f == "e");
                    else if (c)
                        if (b.fc(d)) d = w[d];
                    a[e] = d
                }
            });
            return a
        }

        function t(d, e) {
            var a = [],
                c = b.$Children(d);
            b.$Each(c, function(c) {
                var h = b.$AttributeEx(c, "u") == "caption";
                if (h) {
                    var d = b.$AttributeEx(c, "t"),
                        g = p[b.Qc(d)] || p[d],
                        f = {
                            $Elmt: c,
                            sc: g
                        };
                    a.push(f)
                }
                a = a.concat(t(c, e + 1))
            });
            return a
        }

        function n(c, e) {
            var a = q[c];
            if (a == g) {
                a = q[c] = {
                    Z: c,
                    yc: [],
                    Yd: []
                };
                var d = 0;
                !b.$Each(h, function(a, b) {
                    d = b;
                    return a.Z > c
                }) && d++;
                h.splice(d, 0, a)
            }
            return a
        }

        function z(t, u, h) {
            var a, e;
            if (s) {
                var o = b.$AttributeEx(t, "c");
                if (o) {
                    var m = s[b.Qc(o)];
                    if (m) {
                        a = n(m.r, 0);
                        a.Nf = m.e || 0
                    }
                }
            }
            b.$Each(u, function(i) {
                var g = b.s(d, {}, r(i)),
                    j = b.Jc(g.$Easing);
                delete g.$Easing;
                if (g.$Left) {
                    g.B = g.$Left;
                    j.B = j.$Left;
                    delete g.$Left
                }
                if (g.$Top) {
                    g.E = g.$Top;
                    j.E = j.$Top;
                    delete g.$Top
                }
                var o = {
                        $Easing: j,
                        $OriginalWidth: h.v,
                        $OriginalHeight: h.u
                    },
                    k = new l(i.b, i.d, o, t, h, g);
                f = c.max(f, i.b + i.d);
                if (a) {
                    if (!e) e = new l(i.b, 0);
                    e.O(k)
                } else {
                    var m = n(i.b, i.b + i.d);
                    m.yc.push(k)
                }
                h = b.we(h, g)
            });
            if (a && e) {
                e.ce();
                var i = e,
                    k, j = e.mc(),
                    p = e.sb(),
                    q = c.max(p, a.Nf);
                if (a.Z < p) {
                    if (a.Z > j) {
                        i = new l(j, a.Z - j);
                        i.O(e, d)
                    } else i = g;
                    k = new l(a.Z, q - j, {
                        Kc: q - a.Z,
                        af: d
                    });
                    k.O(e, d)
                }
                i && a.yc.push(i);
                k && a.Yd.push(k)
            }
            return h
        }

        function y(a) {
            b.$Each(a, function(f) {
                var a = f.$Elmt,
                    e = b.$CssWidth(a),
                    d = b.$CssHeight(a),
                    c = {
                        $Left: b.z(a),
                        $Top: b.C(a),
                        B: 0,
                        E: 0,
                        $Opacity: 1,
                        $ZIndex: b.A(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        v: e,
                        u: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.td = c.$Left;
                c.vd = c.$Top;
                z(a, f.sc, c)
            })
        }

        function B(f, e, g) {
            var c = f.b - e;
            if (c) {
                var b = new l(e, c);
                b.O(m, d);
                b.$Shift(g);
                a.O(b)
            }
            a.od(f.d);
            return c
        }

        function A(e) {
            var c = m.mc(),
                d = 0;
            b.$Each(e, function(e, f) {
                e = b.s({
                    d: u
                }, e);
                B(e, c, d);
                c = e.b;
                d += e.d;
                if (!f || e.t == 2) {
                    a.dd = c;
                    a.ad = c + e.d
                }
            })
        }

        function i(k, d, e) {
            var g = d.length;
            if (g > 4)
                for (var m = c.ceil(g / 4), a = 0; a < m; a++) {
                    var h = d.slice(a * 4, c.min(a * 4 + 4, g)),
                        j = new l(h[0].Z, 0);
                    i(j, h, e);
                    k.O(j)
                } else b.$Each(d, function(a) {
                    b.$Each(e ? a.Yd : a.yc, function(a) {
                        e && a.od(f - a.sb());
                        k.O(a)
                    })
                })
        }
        a.hd = function() {
            a.G(-1, d)
        };
        w = [e.$Linear, e.$Swing, e.$InQuad, e.$OutQuad, e.$InOutQuad, e.$InCubic, e.$OutCubic, e.$InOutCubic, e.$InQuart, e.$OutQuart, e.$InOutQuart, e.$InQuint, e.$OutQuint, e.$InOutQuint, e.$InSine, e.$OutSine, e.$InOutSine, e.$InExpo, e.$OutExpo, e.$InOutExpo, e.$InCirc, e.$OutCirc, e.$InOutCirc, e.$InElastic, e.$OutElastic, e.$InOutElastic, e.$InBack, e.$OutBack, e.$InOutBack, e.$InBounce, e.$OutBounce, e.$InOutBounce, e.$Early, e.$Late];
        var C = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.$Each(C, function(b, a) {
            o[b] = a
        });
        y(t(v, 1));
        i(m, h);
        var x = j.$Breaks || [],
            k = [].concat(x[b.Qc(b.$AttributeEx(v, "b"))] || []);
        k.push({
            b: f,
            d: k.length ? 0 : u
        });
        A(k);
        f = c.max(f, a.sb());
        i(a, h, d);
        a.G(-1)
    };
    var i = j.$JssorSlider$ = function() {
        var a = this;
        b.Ff(a, o);
        var ub = "data-jssor-slider",
            Tb = "data-jssor-thumb",
            w, n, X, fb, V, jb, U, eb, H, G, Lb, fc, jc = 1,
            ec = 1,
            Ub = 1,
            Xb = {},
            z, R, sb, Nb, Kb, ib, wb, vb, db, s = -1,
            N, zb, q, K, I, Hb, ob, pb, qb, t, S, x, P, Jb, Z = [],
            bc, cc, Yb, kc, Fc, v, gb, F, ac, nb, xb, Ab, mb, Bb, L, hb, Q, J = 1,
            T, D, Y, Cb = 0,
            Db = 0,
            M, kb, lb, Ob, y, bb, A, Eb, ab = [],
            Pb = b.$Device(),
            Gb = Pb.ug,
            B = [],
            C, O, E, tb, Sb, W;

        function sc(e, n, o) {
            var k = this,
                h = {
                    $Top: 2,
                    $Right: 1,
                    $Bottom: 2,
                    $Left: 1
                },
                l = {
                    $Top: "top",
                    $Right: "right",
                    $Bottom: "bottom",
                    $Left: "left"
                },
                g, a, f, i, j = {};
            k.$Elmt = e;
            k.$ScaleSize = function(q, k) {
                var p, s = q,
                    r = k;
                if (!f) {
                    f = b.rf(e);
                    g = e.parentNode;
                    i = {
                        $Scale: b.gc(e, m.Hb, 1),
                        $AutoCenter: b.gc(e, m.vb)
                    };
                    b.$Each(l, function(c, a) {
                        j[a] = b.gc(e, "data-scale-" + c, 1)
                    });
                    a = e;
                    if (n) {
                        a = b.$CloneNode(g, d);
                        b.I(a, {
                            $Top: 0,
                            $Left: 0
                        });
                        b.$AppendChild(a, e);
                        b.$AppendChild(g, a)
                    }
                }
                if (o) p = q > k ? q : k;
                else s = r = p = c.pow(H < G ? k : q, i.$Scale);
                b.Wf(a, p);
                b.$Attribute(a, m.tc, p);
                b.$CssWidth(g, f.v * s);
                b.$CssHeight(g, f.u * r);
                var t = b.$IsBrowserIE() && b.$BrowserEngineVersion() < 9 || b.$BrowserEngineVersion() < 10 && b.$IsBrowserIeQuirks() ? p : 1,
                    u = (s - t) * f.v / 2,
                    v = (r - t) * f.u / 2;
                b.z(a, u);
                b.C(a, v);
                b.$Each(f, function(d, a) {
                    if (h[a] && d) {
                        var e = (h[a] & 1) * c.pow(q, j[a]) * d + (h[a] & 2) * c.pow(k, j[a]) * d / 2;
                        b.yg[a](g, e)
                    }
                });
                b.ld(g, i.$AutoCenter)
            }
        }

        function Ec() {
            var b = this;
            l.call(b, -1e8, 2e8);
            b.Xf = function() {
                var a = b.Ib(),
                    d = c.floor(a),
                    f = u(d),
                    e = a - c.floor(a);
                return {
                    wb: f,
                    Zf: d,
                    mb: e
                }
            };
            b.cc = function(e, b) {
                var f = c.floor(b);
                if (f != b && b > e) f++;
                dc(f, d);
                a.k(i.$EVT_POSITION_CHANGE, u(b), u(e), b, e)
            }
        }

        function Dc() {
            var a = this;
            l.call(a, 0, 0, {
                Kc: q
            });
            b.$Each(B, function(b) {
                L & 1 && b.oe(q);
                a.Ec(b);
                b.$Shift(mb / qb)
            })
        }

        function Cc() {
            var a = this,
                b = Eb.$Elmt;
            l.call(a, -1, 2, {
                $Easing: e.$Linear,
                mf: {
                    mb: ic
                },
                Kc: q
            }, b, {
                mb: 1
            }, {
                mb: -2
            });
            a.dc = b
        }

        function uc(o, m) {
            var b = this,
                e, f, h, j, c;
            l.call(b, -1e8, 2e8, {
                bd: 100
            });
            b.id = function() {
                T = d;
                Y = g;
                a.k(i.$EVT_SWIPE_START, u(y.ab()), y.ab())
            };
            b.Tc = function() {
                T = k;
                j = k;
                var b = y.Xf();
                a.k(i.$EVT_SWIPE_END, u(y.ab()), y.ab());
                !b.mb && Gc(b.Zf, s)
            };
            b.cc = function(g, d) {
                var a;
                if (j) a = c;
                else {
                    a = f;
                    if (h) {
                        var b = d / h;
                        a = n.$SlideEasing(b) * (f - e) + e
                    }
                }
                y.G(a)
            };
            b.Rb = function(a, d, c, g) {
                e = a;
                f = d;
                h = c;
                y.G(a);
                b.G(0);
                b.xd(c, g)
            };
            b.qf = function(a) {
                j = d;
                c = a;
                b.$Play(a, g, d)
            };
            b.pf = function(a) {
                c = a
            };
            y = new Ec;
            y.O(o);
            y.O(m)
        }

        function vc() {
            var c = this,
                a = gc();
            b.A(a, 0);
            b.$Css(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.ve = function(c) {
                b.$AppendChild(a, c);
                b.D(a)
            };
            c.xb = function() {
                b.V(a);
                b.uc(a)
            }
        }

        function Bc(m, f) {
            var e = this,
                r, L, y, j, z = [],
                x, D, T, H, P, F, J, h, w, p;
            l.call(e, -t, t + 1, {});

            function E(a) {
                r && r.hd();
                S(m, a, 0);
                F = d;
                r = new V.$Class(m, V, b.cd(b.$AttributeEx(m, "idle")) || ac, !v);
                r.G(0)
            }

            function W() {
                r.Mc < V.Mc && E()
            }

            function N(p, r, o) {
                if (!H) {
                    H = d;
                    if (j && o) {
                        var g = o.width,
                            c = o.height,
                            m = g,
                            l = c;
                        if (g && c && n.$FillMode) {
                            if (n.$FillMode & 3 && (!(n.$FillMode & 4) || g > K || c > I)) {
                                var h = k,
                                    q = K / I * c / g;
                                if (n.$FillMode & 1) h = q > 1;
                                else if (n.$FillMode & 2) h = q < 1;
                                m = h ? g * I / c : K;
                                l = h ? I : c * K / g
                            }
                            b.$CssWidth(j, m);
                            b.$CssHeight(j, l);
                            b.C(j, (I - l) / 2);
                            b.z(j, (K - m) / 2)
                        }
                        b.J(j, "absolute");
                        a.k(i.$EVT_LOAD_END, f)
                    }
                }
                b.V(r);
                p && p(e)
            }

            function U(g, b, c, d) {
                if (d == Y && s == f && v)
                    if (!Fc) {
                        var a = u(g);
                        C.Re(a, f, b, e, c, I / K);
                        b.Af();
                        bb.$Shift(a - bb.mc() - 1);
                        bb.G(a);
                        A.Rb(a, a, 0)
                    }
            }

            function Z(b) {
                if (b == Y && s == f) {
                    if (!h) {
                        var a = g;
                        if (C)
                            if (C.wb == f) a = C.We();
                            else C.xb();
                        W();
                        h = new Ac(m, f, a, r);
                        h.Nd(p)
                    }!h.$IsPlaying() && h.Pc()
                }
            }

            function G(a, d, k) {
                if (a == f) {
                    if (a != d) B[d] && B[d].Vd();
                    else !k && h && h.xg();
                    p && p.$Enable();
                    var l = Y = b.R();
                    e.Nb(b.$CreateCallback(g, Z, l))
                } else {
                    var j = c.min(f, a),
                        i = c.max(f, a),
                        o = c.min(i - j, j + q - i),
                        m = t + n.$LazyLoading - 1;
                    (!P || o <= m) && e.Nb()
                }
            }

            function ab() {
                if (s == f && h) {
                    h.tb();
                    p && p.$Quit();
                    p && p.$Disable();
                    h.Od()
                }
            }

            function cb() {
                s == f && h && h.tb()
            }

            function X(b) {
                !Q && a.k(i.$EVT_CLICK, f, b)
            }

            function O() {
                p = w.pInstance;
                h && h.Nd(p)
            }
            e.Nb = function(e, c) {
                c = c || y;
                if (z.length && !H) {
                    b.D(c);
                    if (!T) {
                        T = d;
                        a.k(i.$EVT_LOAD_START, f);
                        b.$Each(z, function(a) {
                            if (!b.$Attribute(a, "src")) {
                                a.src = b.$AttributeEx(a, "src2") || "";
                                b.rb(a, a["display-origin"])
                            }
                        })
                    }
                    b.If(z, j, b.$CreateCallback(g, N, e, c))
                } else N(e, c)
            };
            e.kg = function() {
                if (q == 1) {
                    e.Vd();
                    G(f, f)
                } else if (C) {
                    var a = C.Te(q);
                    if (a) {
                        var h = Y = b.R(),
                            c = f + gb,
                            d = B[u(c)];
                        return d.Nb(b.$CreateCallback(g, U, c, d, a, h), y)
                    }
                } else Ib(gb)
            };
            e.Oc = function() {
                G(f, f, d)
            };
            e.Vd = function() {
                p && p.$Quit();
                p && p.$Disable();
                e.Rd();
                h && h.mg();
                h = g;
                E()
            };
            e.Af = function() {
                b.V(m)
            };
            e.Rd = function() {
                b.D(m)
            };
            e.jg = function() {
                p && p.$Enable()
            };

            function S(a, f, c, h) {
                if (b.$Attribute(a, ub)) return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        z.push(a);
                        if (!b.$Attribute(a, "src")) {
                            P = d;
                            a["display-origin"] = b.rb(a);
                            b.V(a)
                        }
                    }
                    var e = b.vg(a);
                    if (e) {
                        var g = new Image;
                        b.$AttributeEx(g, "src2", e);
                        z.push(g)
                    }
                    c && b.A(a, (b.A(a) || 0) + 1)
                }
                var i = b.$Children(a);
                b.$Each(i, function(a) {
                    var e = a.tagName,
                        g = b.$AttributeEx(a, "u");
                    if (g == "player" && !w) {
                        w = a;
                        if (w.pInstance) O();
                        else b.$AddEvent(w, "dataavailable", O)
                    }
                    if (g == "caption") {
                        if (f) {
                            b.xf(a, b.$AttributeEx(a, "to"));
                            b.wf(a, b.$AttributeEx(a, "bf"));
                            J && b.$AttributeEx(a, "3d") && b.uf(a, "preserve-3d")
                        }
                    } else if (!F && !c && !j) {
                        if (e == "A") {
                            if (b.$AttributeEx(a, "u") == "image") j = b.Lf(a, "IMG");
                            else j = b.$FindChild(a, "image", d);
                            if (j) {
                                x = a;
                                b.rb(x, "block");
                                b.I(x, db);
                                D = b.$CloneNode(x, d);
                                b.J(x, "relative");
                                b.Fc(D, 0);
                                b.$Css(D, "backgroundColor", "#000")
                            }
                        } else if (e == "IMG" && b.$AttributeEx(a, "u") == "image") j = a;
                        if (j) {
                            j.border = 0;
                            b.I(j, db)
                        }
                    }
                    S(a, f, c + 1, h)
                })
            }
            e.Lc = function(c, b) {
                var a = t - b;
                ic(L, a)
            };
            e.wb = f;
            o.call(e);
            J = b.$AttributeEx(m, "p");
            b.vf(m, J);
            b.Vf(m, b.$AttributeEx(m, "po"));
            var M = b.$FindChild(m, "thumb", d);
            if (M) {
                e.se = b.$CloneNode(M);
                b.V(M)
            }
            b.D(m);
            y = b.$CloneNode(R);
            b.A(y, 1e3);
            b.$AddEvent(m, "click", X);
            E(d);
            e.jc = j;
            e.Ed = D;
            e.Bd = m;
            e.dc = L = m;
            b.$AppendChild(L, y);
            a.$On(203, G);
            a.$On(28, cb);
            a.$On(24, ab)
        }

        function Ac(z, g, p, q) {
            var c = this,
                n = 0,
                u = 0,
                h, j, f, e, m, t, r, o = B[g];
            l.call(c, 0, 0);

            function w() {
                b.uc(O);
                kc && m && o.Ed && b.$AppendChild(O, o.Ed);
                b.D(O, !m && o.jc)
            }

            function x() {
                c.Pc()
            }

            function y(a) {
                r = a;
                c.tb();
                c.Pc()
            }
            c.Pc = function() {
                var b = c.Ib();
                if (!D && !T && !r && s == g) {
                    if (!b) {
                        if (h && !m) {
                            m = d;
                            c.Od(d);
                            a.k(i.$EVT_SLIDESHOW_START, g, n, u, h, e)
                        }
                        w()
                    }
                    var k, p = i.$EVT_STATE_CHANGE;
                    if (b != e)
                        if (b == f) k = e;
                        else if (b == j) k = f;
                    else if (!b) k = j;
                    else k = c.yd();
                    a.k(p, g, b, n, j, f, e);
                    var l = v && (!F || J);
                    if (b == e)(f != e && !(F & 12) || l) && o.kg();
                    else(l || b != f) && c.xd(k, x)
                }
            };
            c.xg = function() {
                f == e && f == c.Ib() && c.G(j)
            };
            c.mg = function() {
                C && C.wb == g && C.xb();
                var b = c.Ib();
                b < e && a.k(i.$EVT_STATE_CHANGE, g, -b - 1, n, j, f, e)
            };
            c.Od = function(a) {
                p && b.Ab(S, a && p.sc.$Outside ? "" : "hidden")
            };
            c.Lc = function(c, b) {
                if (m && b >= h) {
                    m = k;
                    w();
                    o.Rd();
                    C.xb();
                    a.k(i.$EVT_SLIDESHOW_END, g, n, u, h, e)
                }
                a.k(i.$EVT_PROGRESS_CHANGE, g, b, n, j, f, e)
            };
            c.Nd = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.jf, y)
                }
            };
            p && c.Ec(p);
            h = c.sb();
            c.Ec(q);
            j = h + q.dd;
            e = c.sb();
            f = v ? h + q.ad : e
        }

        function yb(a, c, d) {
            b.z(a, c);
            b.C(a, d)
        }

        function ic(c, b) {
            var a = x > 0 ? x : X,
                d = ob * b * (a & 1),
                e = pb * b * (a >> 1 & 1);
            yb(c, d, e)
        }

        function Zb() {
            tb = T;
            Sb = A.yd();
            E = y.ab()
        }

        function mc() {
            Zb();
            if (D || !J && F & 12) {
                A.tb();
                a.k(i.re)
            }
        }

        function lc(f) {
            if (!D && (J || !(F & 12)) && !A.$IsPlaying()) {
                var b = y.ab(),
                    a = c.ceil(E);
                if (f && c.abs(M) >= n.$MinDragOffsetToSlide) {
                    a = c.ceil(b);
                    a += lb
                }
                if (!(L & 1)) a = c.min(q - t, c.max(a, 0));
                var d = c.abs(a - b);
                if (d < 1 && n.$SlideEasing != e.$Linear) d = 1 - c.pow(1 - d, 5);
                if (!Q && tb) A.fe(Sb);
                else if (b == a) {
                    zb.jg();
                    zb.Oc()
                } else A.Rb(b, a, d * nb)
            }
        }

        function Rb(a) {
            !b.Lb(b.$EvtSrc(a), "nodrag") && b.$CancelEvent(a)
        }

        function yc(a) {
            hc(a, 1)
        }

        function hc(c, j) {
            c = b.Fd(c);
            var e = b.$EvtSrc(c);
            Jb = k;
            var l = b.Lb(e, "1", Tb);
            if ((!l || l === w) && !P && (!j || c.touches.length == 1) && !b.Lb(e, "nodrag") && zc()) {
                var n = b.Lb(e, f, m.tc);
                if (n) Ub = b.$Attribute(n, m.tc);
                if (j) {
                    var p = c.touches[0];
                    Cb = p.clientX;
                    Db = p.clientY
                } else {
                    var o = b.Ld(c);
                    Cb = o.x;
                    Db = o.y
                }
                D = d;
                Y = g;
                b.$AddEvent(h, j ? "touchmove" : "mousemove", Mb);
                b.R();
                Q = 0;
                mc();
                if (!tb) x = 0;
                M = 0;
                kb = 0;
                lb = 0;
                a.k(i.$EVT_DRAG_START, u(E), E, c)
            }
        }

        function Mb(a) {
            if (D) {
                a = b.Fd(a);
                var e;
                if (a.type != "mousemove")
                    if (a.touches.length == 1) {
                        var m = a.touches[0];
                        e = {
                            x: m.clientX,
                            y: m.clientY
                        }
                    } else cb();
                else e = b.Ld(a);
                if (e) {
                    var f = e.x - Cb,
                        g = e.y - Db;
                    if (x || c.abs(f) > 1.5 || c.abs(g) > 1.5) {
                        if (c.floor(E) != E) x = x || X & P;
                        if ((f || g) && !x)
                            if (P == 3)
                                if (c.abs(g) > c.abs(f)) x = 2;
                                else x = 1;
                        else {
                            x = P;
                            var n = [0, c.abs(f), c.abs(g)],
                                p = n[x],
                                o = n[~x & 3];
                            if (o > p) Jb = d
                        }
                        if (x && !Jb) {
                            var l = g,
                                h = pb;
                            if (x == 1) {
                                l = f;
                                h = ob
                            }
                            if (M - kb < -1.5) lb = 0;
                            else if (M - kb > 1.5) lb = -1;
                            kb = M;
                            M = l;
                            W = E - M / h / Ub;
                            if (!(L & 1)) {
                                var j = 0,
                                    i = [-E, 0, E - q + t];
                                b.$Each(i, function(b, d) {
                                    if (b > 0) {
                                        var a = c.pow(b, 1 / 1.6);
                                        a = c.tan(a * c.PI / 2);
                                        j = (a - b) * (d - 1)
                                    }
                                });
                                var k = j + W;
                                i = [-k, 0, k - q + t];
                                b.$Each(i, function(a, b) {
                                    if (a > 0) {
                                        a = c.min(a, h);
                                        a = c.atan(a) * 2 / c.PI;
                                        a = c.pow(a, 1.6);
                                        W = a * (b - 1);
                                        if (b) W += q - t
                                    }
                                })
                            }
                            b.$CancelEvent(a);
                            if (!T) A.qf(W);
                            else A.pf(W)
                        }
                    }
                }
            }
        }

        function cb() {
            wc();
            if (D) {
                D = k;
                Q = M;
                b.R();
                b.T(h, "mousemove", Mb);
                b.T(h, "touchmove", Mb);
                Q && v & 8 && (v = 0);
                A.tb();
                var c = y.ab();
                a.k(i.$EVT_DRAG_END, u(c), c, u(E), E);
                F & 12 && Zb();
                lc(d)
            }
        }

        function rc(c) {
            var a = b.$EvtSrc(c),
                d = b.Lb(a, "1", ub);
            if (w === d)
                if (Q) {
                    b.$StopEvent(c);
                    while (a && w !== a) {
                        (a.tagName == "A" || b.$Attribute(a, "data-jssor-button")) && b.$CancelEvent(c);
                        a = a.parentNode
                    }
                } else v & 4 && (v = 0)
        }

        function nc(a) {
            B[s];
            s = u(a);
            zb = B[s];
            y.G(s);
            dc(s);
            return s
        }

        function Gc(b, c) {
            x = 0;
            nc(b);
            if (v & 2 && (gb > 0 && s == q - 1 || gb < 0 && !s)) v = 0;
            a.k(i.$EVT_PARK, s, c)
        }

        function dc(a, c) {
            N = a;
            b.$Each(Z, function(b) {
                b.oc(u(a), a, c)
            })
        }

        function zc() {
            var b = i.Pd || 0,
                a = hb;
            if (Gb) a & 1 && (a &= 1);
            i.Pd |= a;
            return P = a & ~b
        }

        function wc() {
            if (P) {
                i.Pd &= ~hb;
                P = 0
            }
        }

        function gc() {
            var a = b.$CreateDiv();
            b.I(a, db);
            b.J(a, "absolute");
            return a
        }

        function u(b, a) {
            a = a || q || 1;
            return (b % a + a) % a
        }

        function rb(c, a, b) {
            v & 8 && (v = 0);
            Qb(c, nb, a, b)
        }

        function Fb() {
            b.$Each(Z, function(a) {
                a.qc(a.Pb.$ChanceToShow <= J)
            })
        }

        function pc() {
            if (!J) {
                J = 1;
                Fb();
                if (!D) {
                    F & 12 && lc();
                    F & 3 && B[s] && B[s].Oc()
                }
            }
            a.k(i.$EVT_MOUSE_LEAVE)
        }

        function oc() {
            if (J) {
                J = 0;
                Fb();
                D || !(F & 12) || mc()
            }
            a.k(i.$EVT_MOUSE_ENTER)
        }

        function qc() {
            b.$Each(ab, function(a) {
                b.I(a, db);
                b.J(a, "absolute");
                b.Ab(a, "hidden");
                b.V(a)
            });
            b.I(R, db)
        }

        function Ib(b, a) {
            Qb(b, a, d)
        }

        function Qb(h, g, m, o) {
            if (Bb && (!D && (J || !(F & 12)) || n.$NaviQuitDrag)) {
                T = d;
                D = k;
                A.tb();
                if (g == f) g = nb;
                var e = Ob.Ib(),
                    b = h;
                if (m) {
                    b = N + h;
                    if (h > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                var a = b;
                if (!(L & 1))
                    if (o) a = u(a);
                    else if (L & 2 && (a < 0 && !N || a > q - t && N >= q - t)) a = a < 0 ? q - t : 0;
                else a = c.max(0, c.min(a, q - t));
                var l = (a - e) % q;
                a = e + l;
                var i = e == a ? 0 : g * c.abs(l),
                    j = 1;
                if (t > 1) j = (X & 1 ? wb : vb) / qb;
                i = c.min(i, g * j * 1.5);
                A.Rb(e, a, i || 1)
            }
        }
        a.$SlidesCount = function() {
            return ab.length
        };
        a.$CurrentIndex = function() {
            return s
        };
        a.$AutoPlay = function(a) {
            if (a == f) return a;
            if (a != v) {
                v = a;
                v && B[s] && B[s].Oc()
            }
        };
        a.$IsDragging = function() {
            return D
        };
        a.$IsSliding = function() {
            return T
        };
        a.$IsMouseOver = function() {
            return !J
        };
        a.De = function() {
            return Q
        };
        a.$OriginalWidth = function() {
            return H
        };
        a.$OriginalHeight = function() {
            return G
        };
        a.$ScaleHeight = function(b) {
            if (b == f) return fc || G;
            a.$ScaleSize(b / G * H, b)
        };
        a.$ScaleWidth = function(b) {
            if (b == f) return Lb || H;
            a.$ScaleSize(b, b / H * G)
        };
        a.$ScaleSize = function(c, a) {
            b.$CssWidth(w, c);
            b.$CssHeight(w, a);
            jc = c / H;
            ec = a / G;
            b.$Each(Xb, function(a) {
                a.$ScaleSize(jc, ec)
            });
            if (!Lb) {
                b.Db(S, z);
                b.C(S, 0);
                b.z(S, 0)
            }
            Lb = c;
            fc = a
        };
        a.$PlayTo = Qb;
        a.$GoTo = function(a) {
            nc(a)
        };
        a.$Next = function() {
            Ib(1)
        };
        a.$Prev = function() {
            Ib(-1)
        };
        a.$Pause = function() {
            v = 0
        };
        a.$Play = function() {
            a.$AutoPlay(v || 1)
        };
        a.$SetSlideshowTransitions = function(a) {
            n.$SlideshowOptions.$Transitions = a
        };
        a.$SetCaptionTransitions = function(a) {
            V.$Transitions = a;
            V.Mc = b.R()
        };
        a.gd = function(a) {
            var d = c.ceil(u(mb / qb)),
                b = u(a - N + d);
            if (b > t) {
                if (a - N > q / 2) a -= q;
                else if (a - N <= -q / 2) a += q
            } else a = N + b - d;
            if (!(L & 1)) a = u(a);
            return a
        };
        a.Ub = function(y, l) {
            a.$Elmt = w = b.$GetElement(y);
            H = b.$CssWidth(w);
            G = b.$CssHeight(w);
            n = b.s({
                $FillMode: 0,
                $LazyLoading: 1,
                $ArrowKeyNavigation: 1,
                $StartIndex: 0,
                $AutoPlay: 0,
                $Loop: 1,
                $HWA: d,
                $NaviQuitDrag: d,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 1,
                $SlideDuration: 500,
                $SlideEasing: e.$OutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $Cols: 1,
                $Align: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, l);
            n.$HWA = n.$HWA && b.Gf();
            if (n.$Idle != f) n.$AutoPlayInterval = n.$Idle;
            if (n.$ParkingPosition != f) n.$Align = n.$ParkingPosition;
            X = n.$PlayOrientation & 3;
            fb = n.$SlideshowOptions;
            V = b.s({
                $Class: r
            }, n.$CaptionSliderOptions);
            jb = n.$BulletNavigatorOptions;
            U = n.$ArrowNavigatorOptions;
            eb = n.$ThumbnailNavigatorOptions;
            !n.$UISearchMode;
            var m = b.$Children(w);
            b.$Each(m, function(a, d) {
                var c = b.$AttributeEx(a, "u");
                if (c == "loading") R = a;
                else {
                    if (c == "slides") z = a;
                    if (c == "navigator") sb = a;
                    if (c == "arrowleft") Nb = a;
                    if (c == "arrowright") Kb = a;
                    if (c == "thumbnavigator") ib = a;
                    if (a.tagName == "DIV" || a.tagName == "SPAN") Xb[c || d] = new sc(a, c == "slides", b.Of(["slides", "thumbnavigator"])[c])
                }
            });
            R = R || b.$CreateDiv(h);
            wb = b.$CssWidth(z);
            vb = b.$CssHeight(z);
            K = n.$SlideWidth || wb;
            I = n.$SlideHeight || vb;
            db = {
                v: K,
                u: I,
                $Top: 0,
                $Left: 0
            };
            Hb = n.$SlideSpacing;
            ob = K + Hb;
            pb = I + Hb;
            qb = X & 1 ? ob : pb;
            gb = n.$AutoPlaySteps;
            F = n.$PauseOnHover;
            ac = n.$AutoPlayInterval;
            nb = n.$SlideDuration;
            Eb = new vc;
            if (n.$HWA) yb = function(a, c, d) {
                b.nc(a, {
                    $TranslateX: c,
                    $TranslateY: d
                })
            };
            v = n.$AutoPlay & 63;
            a.Pb = l;
            b.$Attribute(w, ub, "1");
            b.A(z, b.A(z) || 0);
            b.J(z, "absolute");
            S = b.$CloneNode(z, d);
            b.Db(S, z);
            bb = new Cc;
            b.$AppendChild(S, bb.dc);
            b.Ab(z, "hidden");
            F &= Gb ? 10 : 5;
            var o = b.$Children(z);
            b.$Each(o, function(a) {
                a.tagName == "DIV" && !b.$AttributeEx(a, "u") && ab.push(a);
                b.A(a, (b.A(a) || 0) + 1)
            });
            O = gc();
            b.$Css(O, "backgroundColor", "#000");
            b.Fc(O, 0);
            b.A(O, 0);
            b.Db(O, z.firstChild, z);
            q = ab.length;
            t = c.min(n.$Cols, q);
            Bb = t < q;
            L = Bb ? n.$Loop : 0;
            if (q) {
                qc();
                if (fb) {
                    kc = fb.$ShowLink;
                    xb = fb.$Class;
                    Ab = t == 1 && q > 1 && xb && (!b.$IsBrowserIE() || b.$BrowserVersion() >= 9)
                }
                mb = Ab || t >= q || !(L & 1) ? 0 : n.$Align;
                hb = (t > 1 || mb ? X : -1) & n.$DragOrientation;
                Pb.Ud && b.$Css(z, Pb.Ud, ([g, "pan-y", "pan-x", "none"])[hb] || "");
                if (Ab) C = new xb(Eb, K, I, fb, Gb, yb);
                for (var k = 0; k < ab.length; k++) {
                    var s = ab[k],
                        x = new Bc(s, k);
                    B.push(x)
                }
                b.V(R);
                Ob = new Dc;
                A = new uc(Ob, bb);
                b.$AddEvent(w, "click", rc, d);
                b.$AddEvent(w, "mouseleave", pc);
                b.$AddEvent(w, "mouseenter", oc);
                if (hb) {
                    b.$AddEvent(w, "mousedown", hc);
                    b.$AddEvent(w, "touchstart", yc);
                    b.$AddEvent(w, "dragstart", Rb);
                    b.$AddEvent(w, "selectstart", Rb);
                    b.$AddEvent(j, "mouseup", cb);
                    b.$AddEvent(h, "mouseup", cb);
                    b.$AddEvent(h, "touchend", cb);
                    b.$AddEvent(h, "touchcancel", cb);
                    b.$AddEvent(j, "blur", cb)
                }
                if (sb && jb) {
                    bc = new jb.$Class(sb, jb, H, G);
                    Z.push(bc)
                }
                if (U && Nb && Kb) {
                    U.$Loop = L;
                    U.$Cols = t;
                    cc = new U.$Class(Nb, Kb, U, H, G);
                    Z.push(cc)
                }
                if (ib && eb) {
                    eb.$StartIndex = n.$StartIndex;
                    Yb = new eb.$Class(ib, eb);
                    b.$Attribute(ib, Tb, "1");
                    Z.push(Yb)
                }
                b.$Each(Z, function(a) {
                    a.Nc(q, B, R);
                    a.$On(p.Ob, rb)
                });
                b.$Css(w, "visibility", "visible");
                a.$ScaleSize(H, G);
                Fb();
                n.$ArrowKeyNavigation && b.$AddEvent(h, "keydown", function(a) {
                    if (a.keyCode == 37) rb(-n.$ArrowKeyNavigation, d);
                    else a.keyCode == 39 && rb(n.$ArrowKeyNavigation, d)
                });
                var i = n.$StartIndex;
                i = u(i);
                A.Rb(i, i, 0)
            }
        };
        b.Ub(a)
    };
    i.$EVT_CLICK = 21;
    i.$EVT_DRAG_START = 22;
    i.$EVT_DRAG_END = 23;
    i.$EVT_SWIPE_START = 24;
    i.$EVT_SWIPE_END = 25;
    i.$EVT_LOAD_START = 26;
    i.$EVT_LOAD_END = 27;
    i.re = 28;
    i.$EVT_MOUSE_ENTER = 31;
    i.$EVT_MOUSE_LEAVE = 32;
    i.$EVT_POSITION_CHANGE = 202;
    i.$EVT_PARK = 203;
    i.$EVT_SLIDESHOW_START = 206;
    i.$EVT_SLIDESHOW_END = 207;
    i.$EVT_PROGRESS_CHANGE = 208;
    i.$EVT_STATE_CHANGE = 209
})(window, document, Math, null, true, false)