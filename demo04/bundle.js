!function (e) {
    function t(r) {
        if (n[r])return n[r].exports;
        var o = n[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    n(1)
}, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(4)(r, {});
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    t = e.exports = n(3)(), t.push([e.id, "body{background-color:blue}", ""])
}, function (e, t) {
    e.exports = function () {
        var e = [];
        return e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var s = t[o];
                "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
            }
        }, e
    }
}, function (e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], o = l[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++)o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++)o.parts.push(a(r.parts[i], t))
            } else {
                for (var s = [], i = 0; i < r.parts.length; i++)s.push(a(r.parts[i], t));
                l[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function o(e) {
        for (var t = [], n = {}, r = 0; r < e.length; r++) {
            var o = e[r], i = o[0], s = o[1], a = o[2], u = o[3], f = {css: s, media: a, sourceMap: u};
            n[i] ? n[i].parts.push(f) : t.push(n[i] = {id: i, parts: [f]})
        }
        return t
    }

    function i() {
        var e = document.createElement("style"), t = h();
        return e.type = "text/css", t.appendChild(e), e
    }

    function s() {
        var e = document.createElement("link"), t = h();
        return e.rel = "stylesheet", t.appendChild(e), e
    }

    function a(e, t) {
        var n, r, o;
        if (t.singleton) {
            var a = m++;
            n = v || (v = i()), r = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(), r = c.bind(null, n), o = function () {
            n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = i(), r = f.bind(null, n), o = function () {
            n.parentNode.removeChild(n)
        });
        return r(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)return;
                r(e = t)
            } else o()
        }
    }

    function u(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet)e.styleSheet.cssText = g(t, o); else {
            var i = document.createTextNode(o), s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
        }
    }

    function f(e, t) {
        var n = t.css, r = t.media;
        t.sourceMap;
        if (r && e.setAttribute("media", r), e.styleSheet)e.styleSheet.cssText = n; else {
            for (; e.firstChild;)e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function c(e, t) {
        var n = t.css, r = (t.media, t.sourceMap);
        r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var o = new Blob([n], {type: "text/css"}), i = e.href;
        e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i)
    }

    var l = {}, p = function (e) {
        var t;
        return function () {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t
        }
    }, d = p(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), h = p(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), v = null, m = 0;
    e.exports = function (e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = d());
        var n = o(e);
        return r(n, t), function (e) {
            for (var i = [], s = 0; s < n.length; s++) {
                var a = n[s], u = l[a.id];
                u.refs--, i.push(u)
            }
            if (e) {
                var f = o(e);
                r(f, t)
            }
            for (var s = 0; s < i.length; s++) {
                var u = i[s];
                if (0 === u.refs) {
                    for (var c = 0; c < u.parts.length; c++)u.parts[c]();
                    delete l[u.id]
                }
            }
        }
    };
    var g = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}]);