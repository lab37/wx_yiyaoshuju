(function(a) {
  "use strict";
  var b = "L",
    c = "S",
    d = o,
    e = function(a, b) {
      if (a)
        for (var c = a.length, d = 0; c > d; d++) b(a[d], d, a)
    },
    f = function(a) {
      a = a.toLocaleUpperCase();
      var b;
      for (var c in m)
        if (m.hasOwnProperty(c) && m[c] === a) {
          b = c;
          break
        }
      return b
    },
    g = function(a) {
      return n[a]
    },
    h = function(a, b) {
      a = a || {};
      for (var c in b) "undefined" == typeof a[c] && (a[c] = b[c]);
      return a
    },
    i = function(a) {
      return m[a.toLocaleUpperCase()]
    },
    j = function(a, b, c, d, f, g) {
      var h = "string" == typeof g,
        i = new RegExp("(" + b + "|" + d + ")", "g"),
        j = "";
      return e(a.match(i), function(a, e) {
        h && e > 0 && (j += g), a === b ? j += c : a === d && (j += f)
      }), j
    },
    k = function(a, b, c, d) {
      if ("string" != typeof a) throw new TypeError("Invalid value type: " + typeof a);
      var f = "undefined" != typeof d,
        g = new RegExp(b + "|[\\n\\r]+", "g"),
        h = a.trim().split(g);
      return e(h, function(a, b) {
        h[b] = a = a.split(c), f && e(a, function(a, c) {
          h[b][c] = a.split(d).join("")
        })
      }), h
    },
    l = function(a, b) {
      if (!a) return a;
      for (var c = 0, d = ""; b > c; c++) d += a;
      return d
    },
    m = {
      A: "SL",
      B: "LSSS",
      C: "LSLS",
      D: "LSS",
      E: "S",
      F: "SSLS",
      G: "LLS",
      H: "SSSS",
      I: "SS",
      J: "SLLL",
      K: "LSL",
      L: "SLSS",
      M: "LL",
      N: "LS",
      O: "LLL",
      P: "SLLS",
      Q: "LLSL",
      R: "SLS",
      S: "SSS",
      T: "L",
      U: "SSL",
      V: "SSSL",
      W: "SLL",
      X: "LSSL",
      Y: "LSLL",
      Z: "LLSS",
      0: "LLLLL",
      1: "SLLLL",
      2: "SSLLL",
      3: "SSSLL",
      4: "SSSSL",
      5: "SSSSS",
      6: "LSSSS",
      7: "LLSSS",
      8: "LLLSS",
      9: "LLLLS",
      ".": "SLSLSL",
      ",": "LLSSLL",
      "?": "SSLLSS",
      "'": "SLLLLS",
      "!": "LSLSLL",
      "/": "LSSLS",
      "(": "LSLLS",
      ")": "LSLLSL",
      "&": "SLSSS",
      ":": "LLLSSS",
      ";": "LSLSLS",
      "=": "LSSSL",
      "+": "SLSLS",
      "-": "LSSSSL",
      _: "SSLLSL",
      '"': "SLSSLS",
      $: "SSSLSSL",
      "@": "SLLSLS",
      "Ä": "SLSL",
      "Æ": "SLSL",
      "Ą": "SLSL",
      "À": "SLLSL",
      "Å": "SLLSL",
      "Ç": "LSLSS",
      "Ĉ": "LSLSS",
      "Ć": "LSLSS",
      "Š": "LLLL",
      "Ð": "SSLLS",
      "Ś": "SSSLSSS",
      "È": "SLSSL",
      "Ł": "SLSSL",
      "É": "SSLSS",
      "Đ": "SSLSS",
      "Ę": "SSLSS",
      "Ĝ": "LLSLS",
      "Ĥ": "LLLL",
      "Ĵ": "SLLLS",
      "Ź": "LLSSLS",
      "Ñ": "LLSLL",
      "Ń": "LLSLL",
      "Ö": "LLLS",
      "Ø": "LLLS",
      "Ó": "LLLS",
      "Ŝ": "SSSLS",
      "Þ": "SLLSS",
      "Ü": "SSLL",
      "Ŭ": "SSLL",
      "Ż": "LLSSL"
    },
    n = {
      classic: {
        charSpacer: " ",
        letterSpacer: l(" ", 3),
        longString: "-",
        shortString: "·",
        wordSpacer: l(" ", 7)
      },
      classicEntities: {
        charSpacer: "&nbsp;",
        letterSpacer: l("&nbsp;", 3),
        longString: "&#45;",
        shortString: "&middot;",
        wordSpacer: l("&nbsp;", 7)
      },
      compact: {
        charSpacer: "",
        letterSpacer: " ",
        longString: "-",
        shortString: "·",
        wordSpacer: l(" ", 3)
      },
      compactEntities: {
        charSpacer: "",
        letterSpacer: "&nbsp;",
        longString: "&#45;",
        shortString: "&middot;",
        wordSpacer: l("&nbsp;", 3)
      },
      simple: {
        charSpacer: "",
        letterSpacer: " ",
        longString: "-",
        shortString: ".",
        wordSpacer: l(" ", 3)
      },
      custom: {
        charSpacer: '',
        letterSpacer: '/',
        longString: '-',
        shortString: '.',
        wordSpacer: '/'
      }
    },
    o = {
      VERSION: "1.1.0",
      chars: m,
      defaults: {
        mode: "compact"
      },
      modes: n,
      decode: function(a, d) {
        a = a || "", d = h(d, o.defaults);
        var i = g(d.mode),
          l = "",
          m = k(a, i.wordSpacer, i.letterSpacer, i.charSpacer);
        return m ? (e(m, function(a, d) {
          d > 0 && (l += " "), e(a, function(a) {
            var d, e = j(a, i.shortString, c, i.longString, b);
            e && (d = f(e), "string" == typeof d && (l += d))
          })
        }), l) : l
      },
      encode: function(a, d) {
        a = a || "", d = h(d, o.defaults);
        var f = g(d.mode),
          l = "",
          m = k(a, "\\s+", "");
        return m ? (e(m, function(a, d) {
          d > 0 && (l += f.wordSpacer), e(a, function(a, d) {
            d > 0 && (l += f.letterSpacer);
            var e = i(a);
            "string" == typeof e && (l += j(e, c, f.shortString, b, f.longString, f.charSpacer))
          })
        }), l) : l
      },
      noConflict: function() {
        return a.morjs = d, this
      }
    };
 /* "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = o), exports.morjs = o) : "function" == typeof define && define.amd ? define(function() {
    return o
  }) : a.morjs = o
  */
  module.exports = o

})(this);