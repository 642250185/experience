const _95Qu = function (t, e)
{
    let n, r;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    r = {
        rotl: function (t, e) {
            return t << e | t >>> 32 - e;
        },
        rotr: function (t, e) {
            return t << 32 - e | t >>> e;
        },
        endian: function (t) {
            if(t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
            for (var e = 0; e < t.length; e++) t[e] = r.endian(t[e]);
            return t;
        },
        randomBytes: function (t) {
            for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
            return e;
        },
        bytesToWords: function (t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
            return e
        },
        wordsToBytes: function (t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
            return e
        },
        bytesToHex: function (t) {
            for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
            return e.join("")
        },
        hexToBytes: function(t) {
            for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
            return e
        },
        bytesToBase64: function(t) {
            for (var e = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? e.push(n.charAt(i >>> 6 * (3 - o) & 63)) : e.push("=");
            return e.join("")
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var e = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(t.charAt(r)) >>> 6 - 2 * i);
            return e
        }
    }, t.exports = r
};

const _iFDI1 = function (t, e)
{
    var n = {
        stringToBytes: function(t) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
        },
        bytesToString: function(t) {
            return decodeURIComponent(escape(n.bin.bytesToString(t)))
        }
    };
    t.exports = n;
};

const _iFDI2 = function (t, e)
{
    var n = {
        stringToBytes: function(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
            return e
        },
        bytesToString: function(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
            return e.join("")
        }
    };
    t.exports = n;
};

const _Re3r = function (t, e)
{
    function n(t) {
        return !! t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    t.exports = function(t) {
        return null != t && (n(t) ||
        function(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        } (t) || !!t._isBuffer)
    }
};

const _L6bb = function (t, e, n)
{
    var r, i, o, a, s;
    r = _95Qu(t, e);
    i = _iFDI1(t, e),
    o = _Re3r(t, e),
    a = _iFDI2(t, e),
    (s = function(t, e) {
        t.constructor == String ? t = e && "binary" === e.encoding ? a.stringToBytes(t) : i.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
        for (var n = r.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, h = 0; h < n.length; h++) n[h] = 16711935 & (n[h] << 8 | n[h] >>> 24) | 4278255360 & (n[h] << 24 | n[h] >>> 8);
        n[u >>> 5] |= 128 << u % 32,
            n[14 + (u + 64 >>> 9 << 4)] = u;
        var p = s._ff,
            v = s._gg,
            m = s._hh,
            g = s._ii;
        for (h = 0; h < n.length; h += 16) {
            var y = c,
                _ = l,
                b = f,
                w = d;
            l = g(l = g(l = g(l = g(l = m(l = m(l = m(l = m(l = v(l = v(l = v(l = v(l = p(l = p(l = p(l = p(l, f = p(f, d = p(d, c = p(c, l, f, d, n[h + 0], 7, -680876936), l, f, n[h + 1], 12, -389564586), c, l, n[h + 2], 17, 606105819), d, c, n[h + 3], 22, -1044525330), f = p(f, d = p(d, c = p(c, l, f, d, n[h + 4], 7, -176418897), l, f, n[h + 5], 12, 1200080426), c, l, n[h + 6], 17, -1473231341), d, c, n[h + 7], 22, -45705983), f = p(f, d = p(d, c = p(c, l, f, d, n[h + 8], 7, 1770035416), l, f, n[h + 9], 12, -1958414417), c, l, n[h + 10], 17, -42063), d, c, n[h + 11], 22, -1990404162), f = p(f, d = p(d, c = p(c, l, f, d, n[h + 12], 7, 1804603682), l, f, n[h + 13], 12, -40341101), c, l, n[h + 14], 17, -1502002290), d, c, n[h + 15], 22, 1236535329), f = v(f, d = v(d, c = v(c, l, f, d, n[h + 1], 5, -165796510), l, f, n[h + 6], 9, -1069501632), c, l, n[h + 11], 14, 643717713), d, c, n[h + 0], 20, -373897302), f = v(f, d = v(d, c = v(c, l, f, d, n[h + 5], 5, -701558691), l, f, n[h + 10], 9, 38016083), c, l, n[h + 15], 14, -660478335), d, c, n[h + 4], 20, -405537848), f = v(f, d = v(d, c = v(c, l, f, d, n[h + 9], 5, 568446438), l, f, n[h + 14], 9, -1019803690), c, l, n[h + 3], 14, -187363961), d, c, n[h + 8], 20, 1163531501), f = v(f, d = v(d, c = v(c, l, f, d, n[h + 13], 5, -1444681467), l, f, n[h + 2], 9, -51403784), c, l, n[h + 7], 14, 1735328473), d, c, n[h + 12], 20, -1926607734), f = m(f, d = m(d, c = m(c, l, f, d, n[h + 5], 4, -378558), l, f, n[h + 8], 11, -2022574463), c, l, n[h + 11], 16, 1839030562), d, c, n[h + 14], 23, -35309556), f = m(f, d = m(d, c = m(c, l, f, d, n[h + 1], 4, -1530992060), l, f, n[h + 4], 11, 1272893353), c, l, n[h + 7], 16, -155497632), d, c, n[h + 10], 23, -1094730640), f = m(f, d = m(d, c = m(c, l, f, d, n[h + 13], 4, 681279174), l, f, n[h + 0], 11, -358537222), c, l, n[h + 3], 16, -722521979), d, c, n[h + 6], 23, 76029189), f = m(f, d = m(d, c = m(c, l, f, d, n[h + 9], 4, -640364487), l, f, n[h + 12], 11, -421815835), c, l, n[h + 15], 16, 530742520), d, c, n[h + 2], 23, -995338651), f = g(f, d = g(d, c = g(c, l, f, d, n[h + 0], 6, -198630844), l, f, n[h + 7], 10, 1126891415), c, l, n[h + 14], 15, -1416354905), d, c, n[h + 5], 21, -57434055), f = g(f, d = g(d, c = g(c, l, f, d, n[h + 12], 6, 1700485571), l, f, n[h + 3], 10, -1894986606), c, l, n[h + 10], 15, -1051523), d, c, n[h + 1], 21, -2054922799), f = g(f, d = g(d, c = g(c, l, f, d, n[h + 8], 6, 1873313359), l, f, n[h + 15], 10, -30611744), c, l, n[h + 6], 15, -1560198380), d, c, n[h + 13], 21, 1309151649), f = g(f, d = g(d, c = g(c, l, f, d, n[h + 4], 6, -145523070), l, f, n[h + 11], 10, -1120210379), c, l, n[h + 2], 15, 718787259), d, c, n[h + 9], 21, -343485551),
                c = c + y >>> 0,
                l = l + _ >>> 0,
                f = f + b >>> 0,
                d = d + w >>> 0
        }
        let RRR = r.endian([c, l, f, d]);
        console.info('RRR: ', RRR);
        return RRR;
    })._ff = function(t, e, n, r, i, o, a) {
        var s = t + (e & n | ~e & r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    s._gg = function(t, e, n, r, i, o, a) {
        var s = t + (e & r | n & ~r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    s._hh = function(t, e, n, r, i, o, a) {
        var s = t + (e ^ n ^ r) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    s._ii = function(t, e, n, r, i, o, a) {
        var s = t + (n ^ (e | ~r)) + (i >>> 0) + a;
        return (s << o | s >>> 32 - o) + e
    },
    s._blocksize = 16,
    s._digestsize = 16,
    t.exports = function(t, e) {
        if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
        var n = r.wordsToBytes(s(t, e));
        return e && e.asBytes ? n: e && e.asString ? a.bytesToString(n) : r.bytesToHex(n)
    }
};

let t = "bid=1cid=1order=3page=1size=20timestamp=1532916151LWRpYW46YmVmb3JlIHs";


const logs = _L6bb(t, undefined, undefined);
console.info('logs: ', logs);

// const d = function (t) {
//     var e = [], n = 0, o = "";
//     var l = 'LWRpYW46YmVmb3JlIHs';
//     for (n in t) e.push(n);
//     for(n in e.sort(), e) o += e[n] + "=" + t[e[n]];
//     t.sign = _L6bb(t, e, n);
//     console.info('sign: ', t.sign);
// };
//
// d(t);