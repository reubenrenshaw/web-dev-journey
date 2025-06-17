(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bu = { exports: {} },
  ol = {},
  es = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for("react.element"),
  Ea = Symbol.for("react.portal"),
  _a = Symbol.for("react.fragment"),
  Na = Symbol.for("react.strict_mode"),
  La = Symbol.for("react.profiler"),
  Pa = Symbol.for("react.provider"),
  za = Symbol.for("react.context"),
  Ta = Symbol.for("react.forward_ref"),
  Ma = Symbol.for("react.suspense"),
  Ra = Symbol.for("react.memo"),
  Oa = Symbol.for("react.lazy"),
  Ao = Symbol.iterator;
function Ia(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ao && e[Ao]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ns = Object.assign,
  rs = {};
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rs),
    (this.updater = n || ts);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ls() {}
ls.prototype = un.prototype;
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rs),
    (this.updater = n || ts);
}
var Zi = (Wi.prototype = new ls());
Zi.constructor = Wi;
ns(Zi, un.prototype);
Zi.isPureReactComponent = !0;
var $o = Array.isArray,
  is = Object.prototype.hasOwnProperty,
  Qi = { current: null },
  os = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      is.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Jn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Qi.current,
  };
}
function Fa(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function Da(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wo = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Da("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jn:
          case Ea:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + El(o, 0) : r),
      $o(l)
        ? ((n = ""),
          e != null && (n = e.replace(Wo, "$&/") + "/"),
          kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ki(l) &&
            (l = Fa(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Wo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), $o(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + El(i, u);
      o += kr(i, t, n, s, l);
    }
  else if (((s = Ia(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + El(i, u++)), (o += kr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ha(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Sr = { transition: null },
  Va = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Qi,
  };
z.Children = {
  map: ir,
  forEach: function (e, t, n) {
    ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = un;
z.Fragment = _a;
z.Profiler = La;
z.PureComponent = Wi;
z.StrictMode = Na;
z.Suspense = Ma;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Va;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ns({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Qi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      is.call(t, s) &&
        !os.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: za,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pa, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = us;
z.createFactory = function (e) {
  var t = us.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ta, render: e };
};
z.isValidElement = Ki;
z.lazy = function (e) {
  return { $$typeof: Oa, _payload: { _status: -1, _result: e }, _init: Ha };
};
z.memo = function (e, t) {
  return { $$typeof: Ra, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
z.useId = function () {
  return ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ae.current.useRef(e);
};
z.useState = function (e) {
  return ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ae.current.useTransition();
};
z.version = "18.2.0";
es.exports = z;
var ee = es.exports;
const ge = ja(ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ua = ee,
  Ba = Symbol.for("react.element"),
  Aa = Symbol.for("react.fragment"),
  $a = Object.prototype.hasOwnProperty,
  Wa = Ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Za = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) $a.call(t, r) && !Za.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ba,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Wa.current,
  };
}
ol.Fragment = Aa;
ol.jsx = ss;
ol.jsxs = ss;
bu.exports = ol;
var d = bu.exports,
  Jl = {},
  as = { exports: {} },
  Ce = {},
  cs = { exports: {} },
  fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, L) {
    var P = j.length;
    j.push(L);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        Y = j[W];
      if (0 < l(Y, L)) (j[W] = L), (j[P] = Y), (P = W);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0],
      P = j.pop();
    if (P !== L) {
      j[0] = P;
      e: for (var W = 0, Y = j.length, rr = Y >>> 1; W < rr; ) {
        var yt = 2 * (W + 1) - 1,
          jl = j[yt],
          wt = yt + 1,
          lr = j[wt];
        if (0 > l(jl, P))
          wt < Y && 0 > l(lr, jl)
            ? ((j[W] = lr), (j[wt] = P), (W = wt))
            : ((j[W] = jl), (j[yt] = P), (W = yt));
        else if (wt < Y && 0 > l(lr, P)) (j[W] = lr), (j[wt] = P), (W = wt);
        else break e;
      }
    }
    return L;
  }
  function l(j, L) {
    var P = j.sortIndex - L.sortIndex;
    return P !== 0 ? P : j.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    C = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= j)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function g(j) {
    if (((C = !1), p(j), !x))
      if (n(s) !== null) (x = !0), kl(S);
      else {
        var L = n(c);
        L !== null && Sl(g, L.startTime - j);
      }
  }
  function S(j, L) {
    (x = !1), C && ((C = !1), f(N), (N = -1)), (w = !0);
    var P = m;
    try {
      for (
        p(L), h = n(s);
        h !== null && (!(h.expirationTime > L) || (j && !Pe()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Y = W(h.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            p(L);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var rr = !0;
      else {
        var yt = n(c);
        yt !== null && Sl(g, yt.startTime - L), (rr = !1);
      }
      return rr;
    } finally {
      (h = null), (m = P), (w = !1);
    }
  }
  var E = !1,
    _ = null,
    N = -1,
    $ = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < $);
  }
  function cn() {
    if (_ !== null) {
      var j = e.unstable_now();
      T = j;
      var L = !0;
      try {
        L = _(!0, j);
      } finally {
        L ? fn() : ((E = !1), (_ = null));
      }
    } else E = !1;
  }
  var fn;
  if (typeof a == "function")
    fn = function () {
      a(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Bo = new MessageChannel(),
      Sa = Bo.port2;
    (Bo.port1.onmessage = cn),
      (fn = function () {
        Sa.postMessage(null);
      });
  } else
    fn = function () {
      O(cn, 0);
    };
  function kl(j) {
    (_ = j), E || ((E = !0), fn());
  }
  function Sl(j, L) {
    N = O(function () {
      j(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), kl(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var P = m;
      m = L;
      try {
        return j();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, L) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var P = m;
      m = j;
      try {
        return L();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (j, L, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        j)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = P + Y),
        (j = {
          id: v++,
          callback: L,
          priorityLevel: j,
          startTime: P,
          expirationTime: Y,
          sortIndex: -1,
        }),
        P > W
          ? ((j.sortIndex = P),
            t(c, j),
            n(s) === null &&
              j === n(c) &&
              (C ? (f(N), (N = -1)) : (C = !0), Sl(g, P - W)))
          : ((j.sortIndex = Y), t(s, j), x || w || ((x = !0), kl(S))),
        j
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (j) {
      var L = m;
      return function () {
        var P = m;
        m = L;
        try {
          return j.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(fs);
cs.exports = fs;
var Qa = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ds = ee,
  xe = Qa;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ps = new Set(),
  On = {};
function Mt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) ps.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ql = Object.prototype.hasOwnProperty,
  Ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zo = {},
  Qo = {};
function Ga(e) {
  return ql.call(Qo, e)
    ? !0
    : ql.call(Zo, e)
    ? !1
    : Ka.test(e)
    ? (Qo[e] = !0)
    : ((Zo[e] = !0), !1);
}
function Ya(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xa(e, t, n, r) {
  if (t === null || typeof t > "u" || Ya(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Yi);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Yi);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gi, Yi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xa(t, n, l, r) && (n = null),
    r || l === null
      ? Ga(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  Ji = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  ms = Symbol.for("react.provider"),
  hs = Symbol.for("react.context"),
  qi = Symbol.for("react.forward_ref"),
  ei = Symbol.for("react.suspense"),
  ti = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  vs = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ko && e[Ko]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  _l;
function Cn(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var Nl = !1;
function Ll(e, t) {
  if (!e || Nl) return "";
  Nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function Ja(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case It:
      return "Portal";
    case bl:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case ei:
      return "Suspense";
    case ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hs:
        return (e.displayName || "Context") + ".Consumer";
      case ms:
        return (e._context.displayName || "Context") + ".Provider";
      case qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (t = e.displayName || null), t !== null ? t : ni(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ni(e(t));
        } catch {}
    }
  return null;
}
function qa(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ni(t);
    case 8:
      return t === Ji ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ba(e) {
  var t = gs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = ba(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Go(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ws(e, t) {
  (t = t.checked), t != null && Xi(e, "checked", t, !1);
}
function li(e, t) {
  ws(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ii(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ii(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function xs(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Jo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ui(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sr,
  ks = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function In(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  e2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  e2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function Ss(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function js(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ss(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var t2 = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function si(e, t) {
  if (t) {
    if (t2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ci = null;
function eo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fi = null,
  Gt = null,
  Yt = null;
function qo(e) {
  if ((e = er(e))) {
    if (typeof fi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = fl(t)), fi(e.stateNode, e.type, t));
  }
}
function Es(e) {
  Gt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Gt = e);
}
function _s() {
  if (Gt) {
    var e = Gt,
      t = Yt;
    if (((Yt = Gt = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function Ls() {}
var Pl = !1;
function Ps(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    (Pl = !1), (Gt !== null || Yt !== null) && (Ls(), _s());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var di = !1;
if (Ke)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function () {
        di = !0;
      },
    }),
      window.addEventListener("test", pn, pn),
      window.removeEventListener("test", pn, pn);
  } catch {
    di = !1;
  }
function n2(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var _n = !1,
  Ir = null,
  Fr = !1,
  pi = null,
  r2 = {
    onError: function (e) {
      (_n = !0), (Ir = e);
    },
  };
function l2(e, t, n, r, l, i, o, u, s) {
  (_n = !1), (Ir = null), n2.apply(r2, arguments);
}
function i2(e, t, n, r, l, i, o, u, s) {
  if ((l2.apply(this, arguments), _n)) {
    if (_n) {
      var c = Ir;
      (_n = !1), (Ir = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (pi = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function bo(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function o2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return bo(l), e;
        if (i === r) return bo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = o2(e)), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ms(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = xe.unstable_scheduleCallback,
  eu = xe.unstable_cancelCallback,
  u2 = xe.unstable_shouldYield,
  s2 = xe.unstable_requestPaint,
  Z = xe.unstable_now,
  a2 = xe.unstable_getCurrentPriorityLevel,
  to = xe.unstable_ImmediatePriority,
  Os = xe.unstable_UserBlockingPriority,
  Dr = xe.unstable_NormalPriority,
  c2 = xe.unstable_LowPriority,
  Is = xe.unstable_IdlePriority,
  ul = null,
  Ue = null;
function f2(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : m2,
  d2 = Math.log,
  p2 = Math.LN2;
function m2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((d2(e) / p2) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Sn(u)) : ((i &= o), i !== 0 && (r = Sn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Sn(o)) : i !== 0 && (r = Sn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function h2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function v2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = h2(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fs() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function g2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function no(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Ds(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hs,
  ro,
  Vs,
  Us,
  Bs,
  hi = !1,
  fr = [],
  it = null,
  ot = null,
  ut = null,
  Dn = new Map(),
  Hn = new Map(),
  tt = [],
  y2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && ro(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function w2(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = mn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = mn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Dn.set(i, mn(Dn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hn.set(i, mn(Hn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function As(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zs(n)), t !== null)) {
          (e.blockedOn = t),
            Bs(e.priority, function () {
              Vs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ci = r), n.target.dispatchEvent(r), (ci = null);
    } else return (t = er(n)), t !== null && ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  jr(e) && n.delete(t);
}
function x2() {
  (hi = !1),
    it !== null && jr(it) && (it = null),
    ot !== null && jr(ot) && (ot = null),
    ut !== null && jr(ut) && (ut = null),
    Dn.forEach(nu),
    Hn.forEach(nu);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    hi ||
      ((hi = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, x2)));
}
function Vn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < fr.length) {
    hn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && hn(it, e),
      ot !== null && hn(ot, e),
      ut !== null && hn(ut, e),
      Dn.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    As(n), n.blockedOn === null && tt.shift();
}
var Xt = Je.ReactCurrentBatchConfig,
  Vr = !0;
function C2(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), lo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function k2(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), lo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function lo(e, t, n, r) {
  if (Vr) {
    var l = vi(e, t, n, r);
    if (l === null) Ul(e, t, r, Ur, n), tu(e, r);
    else if (w2(l, e, t, n, r)) r.stopPropagation();
    else if ((tu(e, r), t & 4 && -1 < y2.indexOf(e))) {
      for (; l !== null; ) {
        var i = er(l);
        if (
          (i !== null && Hs(i),
          (i = vi(e, t, n, r)),
          i === null && Ul(e, t, r, Ur, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Ur = null;
function vi(e, t, n, r) {
  if (((Ur = null), (e = eo(r)), (e = kt(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ur = e), null;
}
function $s(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (a2()) {
        case to:
          return 1;
        case Os:
          return 4;
        case Dr:
        case c2:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  io = null,
  Er = null;
function Ws() {
  if (Er) return Er;
  var e,
    t = io,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function ru() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dr
        : ru),
      (this.isPropagationStopped = ru),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oo = ke(sn),
  bn = B({}, sn, { view: 0, detail: 0 }),
  S2 = ke(bn),
  Tl,
  Ml,
  vn,
  sl = B({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((Tl = e.screenX - vn.screenX), (Ml = e.screenY - vn.screenY))
              : (Ml = Tl = 0),
            (vn = e)),
          Tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  lu = ke(sl),
  j2 = B({}, sl, { dataTransfer: 0 }),
  E2 = ke(j2),
  _2 = B({}, bn, { relatedTarget: 0 }),
  Rl = ke(_2),
  N2 = B({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L2 = ke(N2),
  P2 = B({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  z2 = ke(P2),
  T2 = B({}, sn, { data: 0 }),
  iu = ke(T2),
  M2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  R2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  O2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function I2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = O2[e]) ? !!t[e] : !1;
}
function uo() {
  return I2;
}
var F2 = B({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = M2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? R2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uo,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  D2 = ke(F2),
  H2 = B({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ou = ke(H2),
  V2 = B({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uo,
  }),
  U2 = ke(V2),
  B2 = B({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A2 = ke(B2),
  $2 = B({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  W2 = ke($2),
  Z2 = [9, 13, 27, 32],
  so = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var Q2 = Ke && "TextEvent" in window && !Nn,
  Zs = Ke && (!so || (Nn && 8 < Nn && 11 >= Nn)),
  uu = " ",
  su = !1;
function Qs(e, t) {
  switch (e) {
    case "keyup":
      return Z2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function K2(e, t) {
  switch (e) {
    case "compositionend":
      return Ks(t);
    case "keypress":
      return t.which !== 32 ? null : ((su = !0), uu);
    case "textInput":
      return (e = t.data), e === uu && su ? null : e;
    default:
      return null;
  }
}
function G2(e, t) {
  if (Dt)
    return e === "compositionend" || (!so && Qs(e, t))
      ? ((e = Ws()), (Er = io = rt = null), (Dt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Y2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Y2[e.type] : t === "textarea";
}
function Gs(e, t, n, r) {
  Es(r),
    (t = Br(t, "onChange")),
    0 < t.length &&
      ((n = new oo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ln = null,
  Un = null;
function X2(e) {
  i0(e, 0);
}
function al(e) {
  var t = Ut(e);
  if (ys(t)) return e;
}
function J2(e, t) {
  if (e === "change") return t;
}
var Ys = !1;
if (Ke) {
  var Ol;
  if (Ke) {
    var Il = "oninput" in document;
    if (!Il) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (Il = typeof cu.oninput == "function");
    }
    Ol = Il;
  } else Ol = !1;
  Ys = Ol && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Ln && (Ln.detachEvent("onpropertychange", Xs), (Un = Ln = null));
}
function Xs(e) {
  if (e.propertyName === "value" && al(Un)) {
    var t = [];
    Gs(t, Un, e, eo(e)), Ps(X2, t);
  }
}
function q2(e, t, n) {
  e === "focusin"
    ? (fu(), (Ln = t), (Un = n), Ln.attachEvent("onpropertychange", Xs))
    : e === "focusout" && fu();
}
function b2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Un);
}
function ec(e, t) {
  if (e === "click") return al(t);
}
function tc(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function nc(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : nc;
function Bn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = du(n);
  }
}
function Js(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Js(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qs() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rc(e) {
  var t = qs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Js(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ao(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = pu(n, i));
        var o = pu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var lc = Ke && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  gi = null,
  Pn = null,
  yi = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yi ||
    Ht == null ||
    Ht !== Or(r) ||
    ((r = Ht),
    "selectionStart" in r && ao(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Bn(Pn, r)) ||
      ((Pn = r),
      (r = Br(gi, "onSelect")),
      0 < r.length &&
        ((t = new oo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vt = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Fl = {},
  bs = {};
Ke &&
  ((bs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function cl(e) {
  if (Fl[e]) return Fl[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bs) return (Fl[e] = t[n]);
  return e;
}
var e0 = cl("animationend"),
  t0 = cl("animationiteration"),
  n0 = cl("animationstart"),
  r0 = cl("transitionend"),
  l0 = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ht(e, t) {
  l0.set(e, t), Mt(t, [e]);
}
for (var Dl = 0; Dl < hu.length; Dl++) {
  var Hl = hu[Dl],
    ic = Hl.toLowerCase(),
    oc = Hl[0].toUpperCase() + Hl.slice(1);
  ht(ic, "on" + oc);
}
ht(e0, "onAnimationEnd");
ht(t0, "onAnimationIteration");
ht(n0, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(r0, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  uc = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), i2(r, t, void 0, e), (e.currentTarget = null);
}
function i0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          vu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          vu(l, u, c), (i = s);
        }
    }
  }
  if (Fr) throw ((e = pi), (Fr = !1), (pi = null), e);
}
function F(e, t) {
  var n = t[Si];
  n === void 0 && (n = t[Si] = new Set());
  var r = e + "__bubble";
  n.has(r) || (o0(t, e, 2, !1), n.add(r));
}
function Vl(e, t, n) {
  var r = 0;
  t && (r |= 4), o0(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      ps.forEach(function (n) {
        n !== "selectionchange" && (uc.has(n) || Vl(n, !1, e), Vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Vl("selectionchange", !1, t));
  }
}
function o0(e, t, n, r) {
  switch ($s(t)) {
    case 1:
      var l = C2;
      break;
    case 4:
      l = k2;
      break;
    default:
      l = lo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = kt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ps(function () {
    var c = i,
      v = eo(n),
      h = [];
    e: {
      var m = l0.get(e);
      if (m !== void 0) {
        var w = oo,
          x = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = D2;
            break;
          case "focusin":
            (x = "focus"), (w = Rl);
            break;
          case "focusout":
            (x = "blur"), (w = Rl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = E2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = U2;
            break;
          case e0:
          case t0:
          case n0:
            w = L2;
            break;
          case r0:
            w = A2;
            break;
          case "scroll":
            w = S2;
            break;
          case "wheel":
            w = W2;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = z2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ou;
        }
        var C = (t & 4) !== 0,
          O = !C && e === "scroll",
          f = C ? (m !== null ? m + "Capture" : null) : m;
        C = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Fn(a, f)), g != null && C.push($n(a, g, p)))),
            O)
          )
            break;
          a = a.return;
        }
        0 < C.length &&
          ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ci &&
            (x = n.relatedTarget || n.fromElement) &&
            (kt(x) || x[Ge]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? kt(x) : null),
              x !== null &&
                ((O = Rt(x)), x !== O || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((C = lu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = ou),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (O = w == null ? m : Ut(w)),
            (p = x == null ? m : Ut(x)),
            (m = new C(g, a + "leave", w, n, v)),
            (m.target = O),
            (m.relatedTarget = p),
            (g = null),
            kt(v) === c &&
              ((C = new C(f, a + "enter", x, n, v)),
              (C.target = p),
              (C.relatedTarget = O),
              (g = C)),
            (O = g),
            w && x)
          )
            t: {
              for (C = w, f = x, a = 0, p = C; p; p = Ot(p)) a++;
              for (p = 0, g = f; g; g = Ot(g)) p++;
              for (; 0 < a - p; ) (C = Ot(C)), a--;
              for (; 0 < p - a; ) (f = Ot(f)), p--;
              for (; a--; ) {
                if (C === f || (f !== null && C === f.alternate)) break t;
                (C = Ot(C)), (f = Ot(f));
              }
              C = null;
            }
          else C = null;
          w !== null && gu(h, m, w, C, !1),
            x !== null && O !== null && gu(h, O, x, C, !0);
        }
      }
      e: {
        if (
          ((m = c ? Ut(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var S = J2;
        else if (au(m))
          if (Ys) S = tc;
          else {
            S = b2;
            var E = q2;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = ec);
        if (S && (S = S(e, c))) {
          Gs(h, S, n, v);
          break e;
        }
        E && E(e, m, c),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            ii(m, "number", m.value);
      }
      switch (((E = c ? Ut(c) : window), e)) {
        case "focusin":
          (au(E) || E.contentEditable === "true") &&
            ((Ht = E), (gi = c), (Pn = null));
          break;
        case "focusout":
          Pn = gi = Ht = null;
          break;
        case "mousedown":
          yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yi = !1), mu(h, n, v);
          break;
        case "selectionchange":
          if (lc) break;
        case "keydown":
        case "keyup":
          mu(h, n, v);
      }
      var _;
      if (so)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Dt
          ? Qs(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Zs &&
          n.locale !== "ko" &&
          (Dt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Dt && (_ = Ws())
            : ((rt = v),
              (io = "value" in rt ? rt.value : rt.textContent),
              (Dt = !0))),
        (E = Br(c, N)),
        0 < E.length &&
          ((N = new iu(N, e, null, n, v)),
          h.push({ event: N, listeners: E }),
          _ ? (N.data = _) : ((_ = Ks(n)), _ !== null && (N.data = _)))),
        (_ = Q2 ? K2(e, n) : G2(e, n)) &&
          ((c = Br(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new iu("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    i0(h, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Fn(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = Fn(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Fn(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = Fn(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sc = /\r\n?/g,
  ac = /\u0000|\uFFFD/g;
function yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sc,
      `
`
    )
    .replace(ac, "");
}
function hr(e, t, n) {
  if (((t = yu(t)), yu(e) !== t && n)) throw Error(y(425));
}
function Ar() {}
var wi = null,
  xi = null;
function Ci(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ki = typeof setTimeout == "function" ? setTimeout : void 0,
  cc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  fc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(dc);
        }
      : ki;
function dc(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + an,
  Wn = "__reactProps$" + an,
  Ge = "__reactContainer$" + an,
  Si = "__reactEvents$" + an,
  pc = "__reactListeners$" + an,
  mc = "__reactHandles$" + an;
function kt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[Ve] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function fl(e) {
  return e[Wn] || null;
}
var ji = [],
  Bt = -1;
function vt(e) {
  return { current: e };
}
function D(e) {
  0 > Bt || ((e.current = ji[Bt]), (ji[Bt] = null), Bt--);
}
function I(e, t) {
  Bt++, (ji[Bt] = e.current), (e.current = t);
}
var mt = {},
  oe = vt(mt),
  pe = vt(!1),
  Nt = mt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  D(pe), D(oe);
}
function Cu(e, t, n) {
  if (oe.current !== mt) throw Error(y(168));
  I(oe, t), I(pe, n);
}
function u0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, qa(e) || "Unknown", l));
  return B({}, n, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Nt = oe.current),
    I(oe, e),
    I(pe, pe.current),
    !0
  );
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = u0(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(pe),
      D(oe),
      I(oe, e))
    : D(pe),
    I(pe, n);
}
var $e = null,
  dl = !1,
  Al = !1;
function s0(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function hc(e) {
  (dl = !0), s0(e);
}
function gt() {
  if (!Al && $e !== null) {
    Al = !0;
    var e = 0,
      t = R;
    try {
      var n = $e;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (dl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Rs(to, gt), l);
    } finally {
      (R = t), (Al = !1);
    }
  }
  return null;
}
var At = [],
  $t = 0,
  Zr = null,
  Qr = 0,
  Se = [],
  je = 0,
  Lt = null,
  We = 1,
  Ze = "";
function xt(e, t) {
  (At[$t++] = Qr), (At[$t++] = Zr), (Zr = e), (Qr = t);
}
function a0(e, t, n) {
  (Se[je++] = We), (Se[je++] = Ze), (Se[je++] = Lt), (Lt = e);
  var r = We;
  e = Ze;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ze = i + e);
  } else (We = (1 << i) | (n << l) | r), (Ze = e);
}
function co(e) {
  e.return !== null && (xt(e, 1), a0(e, 1, 0));
}
function fo(e) {
  for (; e === Zr; )
    (Zr = At[--$t]), (At[$t] = null), (Qr = At[--$t]), (At[$t] = null);
  for (; e === Lt; )
    (Lt = Se[--je]),
      (Se[je] = null),
      (Ze = Se[--je]),
      (Se[je] = null),
      (We = Se[--je]),
      (Se[je] = null);
}
var we = null,
  ye = null,
  H = !1,
  Re = null;
function c0(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _i(e) {
  if (H) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Su(e, t)) {
        if (Ei(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = we;
        t && Su(e, t)
          ? c0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (we = e));
      }
    } else {
      if (Ei(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (we = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function vr(e) {
  if (e !== we) return !1;
  if (!H) return ju(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ei(e)) throw (f0(), Error(y(418)));
    for (; t; ) c0(e, t), (t = st(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function f0() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function tn() {
  (ye = we = null), (H = !1);
}
function po(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var vc = Je.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kr = vt(null),
  Gr = null,
  Wt = null,
  mo = null;
function ho() {
  mo = Wt = Gr = null;
}
function vo(e) {
  var t = Kr.current;
  D(Kr), (e._currentValue = t);
}
function Ni(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Gr = e),
    (mo = Wt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (mo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
      if (Gr === null) throw Error(y(308));
      (Wt = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Wt = Wt.next = e;
  return t;
}
var St = null;
function go(e) {
  St === null ? (St = [e]) : St.push(e);
}
function d0(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function yo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function p0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Nr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
function Eu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            C = u;
          switch (((m = t), (w = n), C.tag)) {
            case 1:
              if (((x = C.payload), typeof x == "function")) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = C.payload),
                (m = typeof x == "function" ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var m0 = new ds.Component().refs;
function Li(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Nr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Nr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Nr(t, e, r));
  },
};
function Nu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  );
}
function h0(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = me(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? en(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = m0), yo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = me(t) ? Nt : oe.current), (l.context = en(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Li(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && pl.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === m0 && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function gr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pu(e) {
  var t = e._init;
  return t(e._payload);
}
function v0(e) {
  function t(f, a) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = dt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, p, g) {
    return a === null || a.tag !== 6
      ? ((a = Yl(p, f.mode, g)), (a.return = f), a)
      : ((a = l(a, p)), (a.return = f), a);
  }
  function s(f, a, p, g) {
    var S = p.type;
    return S === Ft
      ? v(f, a, p.props.children, g, p.key)
      : a !== null &&
        (a.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === be &&
            Pu(S) === a.type))
      ? ((g = l(a, p.props)), (g.ref = gn(f, a, p)), (g.return = f), g)
      : ((g = Rr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = gn(f, a, p)),
        (g.return = f),
        g);
  }
  function c(f, a, p, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = Xl(p, f.mode, g)), (a.return = f), a)
      : ((a = l(a, p.children || [])), (a.return = f), a);
  }
  function v(f, a, p, g, S) {
    return a === null || a.tag !== 7
      ? ((a = _t(p, f.mode, g, S)), (a.return = f), a)
      : ((a = l(a, p)), (a.return = f), a);
  }
  function h(f, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, p)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (p = Rr(a.type, a.key, a.props, null, f.mode, p)),
            (p.ref = gn(f, null, a)),
            (p.return = f),
            p
          );
        case It:
          return (a = Xl(a, f.mode, p)), (a.return = f), a;
        case be:
          var g = a._init;
          return h(f, g(a._payload), p);
      }
      if (kn(a) || dn(a))
        return (a = _t(a, f.mode, p, null)), (a.return = f), a;
      gr(f, a);
    }
    return null;
  }
  function m(f, a, p, g) {
    var S = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : u(f, a, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case or:
          return p.key === S ? s(f, a, p, g) : null;
        case It:
          return p.key === S ? c(f, a, p, g) : null;
        case be:
          return (S = p._init), m(f, a, S(p._payload), g);
      }
      if (kn(p) || dn(p)) return S !== null ? null : v(f, a, p, g, null);
      gr(f, p);
    }
    return null;
  }
  function w(f, a, p, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), u(a, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case or:
          return (f = f.get(g.key === null ? p : g.key) || null), s(a, f, g, S);
        case It:
          return (f = f.get(g.key === null ? p : g.key) || null), c(a, f, g, S);
        case be:
          var E = g._init;
          return w(f, a, p, E(g._payload), S);
      }
      if (kn(g) || dn(g)) return (f = f.get(p) || null), v(a, f, g, S, null);
      gr(a, g);
    }
    return null;
  }
  function x(f, a, p, g) {
    for (
      var S = null, E = null, _ = a, N = (a = 0), $ = null;
      _ !== null && N < p.length;
      N++
    ) {
      _.index > N ? (($ = _), (_ = null)) : ($ = _.sibling);
      var T = m(f, _, p[N], g);
      if (T === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && T.alternate === null && t(f, _),
        (a = i(T, a, N)),
        E === null ? (S = T) : (E.sibling = T),
        (E = T),
        (_ = $);
    }
    if (N === p.length) return n(f, _), H && xt(f, N), S;
    if (_ === null) {
      for (; N < p.length; N++)
        (_ = h(f, p[N], g)),
          _ !== null &&
            ((a = i(_, a, N)), E === null ? (S = _) : (E.sibling = _), (E = _));
      return H && xt(f, N), S;
    }
    for (_ = r(f, _); N < p.length; N++)
      ($ = w(_, f, N, p[N], g)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? N : $.key),
          (a = i($, a, N)),
          E === null ? (S = $) : (E.sibling = $),
          (E = $));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      H && xt(f, N),
      S
    );
  }
  function C(f, a, p, g) {
    var S = dn(p);
    if (typeof S != "function") throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var E = (S = null), _ = a, N = (a = 0), $ = null, T = p.next();
      _ !== null && !T.done;
      N++, T = p.next()
    ) {
      _.index > N ? (($ = _), (_ = null)) : ($ = _.sibling);
      var Pe = m(f, _, T.value, g);
      if (Pe === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = i(Pe, a, N)),
        E === null ? (S = Pe) : (E.sibling = Pe),
        (E = Pe),
        (_ = $);
    }
    if (T.done) return n(f, _), H && xt(f, N), S;
    if (_ === null) {
      for (; !T.done; N++, T = p.next())
        (T = h(f, T.value, g)),
          T !== null &&
            ((a = i(T, a, N)), E === null ? (S = T) : (E.sibling = T), (E = T));
      return H && xt(f, N), S;
    }
    for (_ = r(f, _); !T.done; N++, T = p.next())
      (T = w(_, f, N, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? N : T.key),
          (a = i(T, a, N)),
          E === null ? (S = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        _.forEach(function (cn) {
          return t(f, cn);
        }),
      H && xt(f, N),
      S
    );
  }
  function O(f, a, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ft &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case or:
          e: {
            for (var S = p.key, E = a; E !== null; ) {
              if (E.key === S) {
                if (((S = p.type), S === Ft)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (a = l(E, p.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === be &&
                    Pu(S) === E.type)
                ) {
                  n(f, E.sibling),
                    (a = l(E, p.props)),
                    (a.ref = gn(f, E, p)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            p.type === Ft
              ? ((a = _t(p.props.children, f.mode, g, p.key)),
                (a.return = f),
                (f = a))
              : ((g = Rr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = gn(f, a, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case It:
          e: {
            for (E = p.key; a !== null; ) {
              if (a.key === E)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, p.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(p, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case be:
          return (E = p._init), O(f, a, E(p._payload), g);
      }
      if (kn(p)) return x(f, a, p, g);
      if (dn(p)) return C(f, a, p, g);
      gr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(p, f.mode, g)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return O;
}
var nn = v0(!0),
  g0 = v0(!1),
  tr = {},
  Be = vt(tr),
  Zn = vt(tr),
  Qn = vt(tr);
function jt(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function wo(e, t) {
  switch ((I(Qn, t), I(Zn, e), I(Be, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ui(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ui(t, e));
  }
  D(Be), I(Be, t);
}
function rn() {
  D(Be), D(Zn), D(Qn);
}
function y0(e) {
  jt(Qn.current);
  var t = jt(Be.current),
    n = ui(t, e.type);
  t !== n && (I(Zn, e), I(Be, n));
}
function xo(e) {
  Zn.current === e && (D(Be), D(Zn));
}
var V = vt(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function Co() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Lr = Je.ReactCurrentDispatcher,
  Wl = Je.ReactCurrentBatchConfig,
  Pt = 0,
  U = null,
  K = null,
  X = null,
  Jr = !1,
  zn = !1,
  Kn = 0,
  gc = 0;
function re() {
  throw Error(y(321));
}
function ko(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function So(e, t, n, r, l, i) {
  if (
    ((Pt = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Lr.current = e === null || e.memoizedState === null ? Cc : kc),
    (e = n(r, l)),
    zn)
  ) {
    i = 0;
    do {
      if (((zn = !1), (Kn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (X = K = null),
        (t.updateQueue = null),
        (Lr.current = Sc),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Lr.current = qr),
    (t = K !== null && K.next !== null),
    (Pt = 0),
    (X = K = U = null),
    (Jr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function jo() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (U.memoizedState = X = e) : (X = X.next = e), X;
}
function Le() {
  if (K === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? U.memoizedState : X.next;
  if (t !== null) (X = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      X === null ? (U.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Pt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (U.lanes |= v),
          (zt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Fe(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (U.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Fe(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function w0() {}
function x0(e, t) {
  var n = U,
    r = Le(),
    l = t(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Eo(S0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, k0.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Pt & 30 || C0(n, t, l);
  }
  return l;
}
function C0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function k0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), j0(t) && E0(e);
}
function S0(e, t, n) {
  return n(function () {
    j0(t) && E0(e);
  });
}
function j0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function E0(e) {
  var t = Ye(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function zu(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xc.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _0() {
  return Le().memoizedState;
}
function Pr(e, t, n, r) {
  var l = He();
  (U.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (((i = o.destroy), r !== null && ko(r, o.deps))) {
      l.memoizedState = Yn(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Yn(1 | t, n, i, r));
}
function Tu(e, t) {
  return Pr(8390656, 8, e, t);
}
function Eo(e, t) {
  return ml(2048, 8, e, t);
}
function N0(e, t) {
  return ml(4, 2, e, t);
}
function L0(e, t) {
  return ml(4, 4, e, t);
}
function P0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function z0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ml(4, 4, P0.bind(null, t, e), n)
  );
}
function _o() {}
function T0(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function M0(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function R0(e, t, n) {
  return Pt & 21
    ? (Fe(n, t) || ((n = Fs()), (U.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function yc(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Wl.transition = r);
  }
}
function O0() {
  return Le().memoizedState;
}
function wc(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    I0(e))
  )
    F0(t, n);
  else if (((n = d0(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), D0(n, t, r);
  }
}
function xc(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (I0(e)) F0(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), go(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = d0(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), D0(n, t, r));
  }
}
function I0(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function F0(e, t) {
  zn = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function D0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
var qr = {
    readContext: Ne,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Cc = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Pr(4194308, 4, P0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Pr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Pr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = wc.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zu,
    useDebugValue: _o,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = zu(!1),
        t = e[0];
      return (e = yc.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = He();
      if (H) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Pt & 30 || C0(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Tu(S0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yn(9, k0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = J.identifierPrefix;
      if (H) {
        var n = Ze,
          r = We;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gc++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kc = {
    readContext: Ne,
    useCallback: T0,
    useContext: Ne,
    useEffect: Eo,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: L0,
    useMemo: M0,
    useReducer: Zl,
    useRef: _0,
    useState: function () {
      return Zl(Gn);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var t = Le();
      return R0(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Gn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: w0,
    useSyncExternalStore: x0,
    useId: O0,
    unstable_isNewReconciler: !1,
  },
  Sc = {
    readContext: Ne,
    useCallback: T0,
    useContext: Ne,
    useEffect: Eo,
    useImperativeHandle: z0,
    useInsertionEffect: N0,
    useLayoutEffect: L0,
    useMemo: M0,
    useReducer: Ql,
    useRef: _0,
    useState: function () {
      return Ql(Gn);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var t = Le();
      return K === null ? (t.memoizedState = e) : R0(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Gn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: w0,
    useSyncExternalStore: x0,
    useId: O0,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ja(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jc = typeof WeakMap == "function" ? WeakMap : Map;
function H0(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Ui = r)), zi(e, t);
    }),
    n
  );
}
function V0(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        zi(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jc();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Hc.bind(null, e, t, n)), t.then(e, e));
}
function Ru(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ec = Je.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? g0(t, null, n, r) : nn(t, e.child, n, r);
}
function Iu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Jt(t, l),
    (r = So(e, t, n, r, i, l)),
    (n = jo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (H && n && co(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Oo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), U0(e, t, i, r, l))
      : ((e = Rr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function U0(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Ti(e, t, n, r, l);
}
function B0(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Qt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Qt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Qt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Qt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function A0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ti(e, t, n, r, l) {
  var i = me(n) ? Nt : oe.current;
  return (
    (i = en(t, i)),
    Jt(t, l),
    (n = So(e, t, n, r, i, l)),
    (r = jo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (H && r && co(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Du(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    Wr(t);
  } else i = !1;
  if ((Jt(t, l), t.stateNode === null))
    zr(e, t), h0(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = me(n) ? Nt : oe.current), (c = en(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Lu(t, o, r, c)),
      (et = !1);
    var m = t.memoizedState;
    (o.state = m),
      Yr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || et
        ? (typeof v == "function" && (Li(t, n, v, r), (s = t.memoizedState)),
          (u = et || Nu(t, n, u, r, m, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      p0(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = me(n) ? Nt : oe.current), (s = en(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Lu(t, o, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (o.state = m),
      Yr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || pe.current || et
      ? (typeof w == "function" && (Li(t, n, w, r), (x = t.memoizedState)),
        (c = et || Nu(t, n, c, r, m, x, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Mi(e, t, n, r, i, l);
}
function Mi(e, t, n, r, l, i) {
  A0(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ku(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (Ec.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && ku(t, n, !0),
    t.child
  );
}
function $0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cu(e, t.context, !1),
    wo(e, t.containerInfo);
}
function Hu(e, t, n, r, l) {
  return tn(), po(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function W0(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(V, l & 1),
    e === null)
  )
    return (
      _i(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = gl(o, r, 0, null)),
              (e = _t(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Oi(n)),
              (t.memoizedState = Ri),
              e)
            : No(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return _c(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = _t(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Oi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ri),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function No(e, t) {
  return (
    (t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yr(e, t, n, r) {
  return (
    r !== null && po(r),
    nn(t, e.child, null, n),
    (e = No(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _c(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(y(422)))), yr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = gl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = _t(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, o),
        (t.child.memoizedState = Oi(o)),
        (t.memoizedState = Ri),
        i);
  if (!(t.mode & 1)) return yr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Kl(i, r, void 0)), yr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Ie(r, e, l, -1));
    }
    return Ro(), (r = Kl(Error(y(421)))), yr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vc.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = st(l.nextSibling)),
      (we = t),
      (H = !0),
      (Re = null),
      e !== null &&
        ((Se[je++] = We),
        (Se[je++] = Ze),
        (Se[je++] = Lt),
        (We = e.id),
        (Ze = e.overflow),
        (Lt = t)),
      (t = No(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ni(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Z0(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
        else if (e.tag === 19) Vu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Gl(t, !0, n, null, i);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nc(e, t, n) {
  switch (t.tag) {
    case 3:
      $0(t), tn();
      break;
    case 5:
      y0(t);
      break;
    case 1:
      me(t.type) && Wr(t);
      break;
    case 4:
      wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? W0(e, t, n)
          : (I(V, V.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      I(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Z0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), B0(e, t, n);
  }
  return Xe(e, t, n);
}
var Q0, Ii, K0, G0;
Q0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ii = function () {};
K0 = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), jt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = oi(e, l)), (r = oi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    si(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (On.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (On.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
G0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lc(e, t, n) {
  var r = t.pendingProps;
  switch ((fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && $r(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        D(pe),
        D(oe),
        Co(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && ($i(Re), (Re = null)))),
        Ii(e, t),
        le(t),
        null
      );
    case 5:
      xo(t);
      var l = jt(Qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        K0(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (((e = jt(Be.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ve] = t), (r[Wn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) F(jn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Go(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Xo(r, i), F("invalid", r);
          }
          si(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : On.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), Yo(r, i, !0);
              break;
            case "textarea":
              ur(r), Jo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ar);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ve] = t),
            (e[Wn] = r),
            Q0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ai(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) F(jn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Go(e, r), (l = ri(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Xo(e, r), (l = oi(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            si(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? js(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ks(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && In(e, s)
                    : typeof s == "number" && In(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (On.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && Xi(e, i, s, o));
              }
            switch (n) {
              case "input":
                ur(e), Yo(e, r, !1);
                break;
              case "textarea":
                ur(e), Jo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Kt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) G0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = jt(Qn.current)), jt(Be.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (D(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && ye !== null && t.mode & 1 && !(t.flags & 128))
          f0(), tn(), (t.flags |= 98560), (i = !1);
        else if (((i = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ve] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Re !== null && ($i(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? G === 0 && (G = 3) : Ro())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        rn(), Ii(e, t), e === null && An(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return vo(t.type._context), le(t), null;
    case 17:
      return me(t.type) && $r(), le(t), null;
    case 19:
      if ((D(V), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Xr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > on &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
            )
              return le(t), null;
          } else
            2 * Z() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = V.current),
          I(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Mo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Pc(e, t) {
  switch ((fo(t), t.tag)) {
    case 1:
      return (
        me(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        D(pe),
        D(oe),
        Co(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xo(t), null;
    case 13:
      if ((D(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(V), null;
    case 4:
      return rn(), null;
    case 10:
      return vo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  ie = !1,
  zc = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function Fi(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Uu = !1;
function Tc(e, t) {
  if (((wi = Vr), (e = qs()), ao(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Vr = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var C = x.memoizedProps,
                    O = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Te(t.type, C),
                      O
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          A(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (x = Uu), (Uu = !1), x;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Fi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Di(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Y0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Y0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[Wn], delete t[Si], delete t[pc], delete t[mc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function X0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || X0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), (e = e.sibling);
}
var q = null,
  Me = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) J0(e, t, n), (n = n.sibling);
}
function J0(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = q,
        l = Me;
      (q = null),
        qe(e, t, n),
        (q = r),
        (Me = l),
        q !== null &&
          (Me
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Me
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bl(e.parentNode, n)
              : e.nodeType === 1 && Bl(e, n),
            Vn(e))
          : Bl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Me),
        (q = n.stateNode.containerInfo),
        (Me = !0),
        qe(e, t, n),
        (q = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zc()),
      t.forEach(function (r) {
        var l = Uc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Me = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        J0(i, o, l), (q = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) q0(t, e), (t = t.sibling);
}
function q0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), De(e), r & 4)) {
        try {
          Tn(3, e, e.return), hl(3, e);
        } catch (C) {
          A(e, e.return, C);
        }
        try {
          Tn(5, e, e.return);
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 1:
      ze(t, e), De(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        De(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          In(l, "");
        } catch (C) {
          A(e, e.return, C);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ws(l, i),
              ai(u, o);
            var c = ai(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? js(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ks(l, h)
                : v === "children"
                ? In(l, h)
                : Xi(l, v, h, c);
            }
            switch (u) {
              case "input":
                li(l, i);
                break;
              case "textarea":
                xs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Kt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Kt(l, !!i.multiple, i.defaultValue, !0)
                      : Kt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Wn] = i;
          } catch (C) {
            A(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((ze(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (C) {
          A(e, e.return, C);
        }
      break;
    case 4:
      ze(t, e), De(e);
      break;
    case 13:
      ze(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zo = Z())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || v), ze(t, e), (ie = c)) : ze(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((m = k), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (C) {
                      A(r, n, C);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Wu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (k = w)) : Wu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ss("display", o)));
              } catch (C) {
                A(e, e.return, C);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (C) {
                A(e, e.return, C);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), De(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (X0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (In(l, ""), (r.flags &= -33));
          var i = Bu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Bu(e);
          Hi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mc(e, t, n) {
  (k = e), b0(e);
}
function b0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = wr;
        var c = ie;
        if (((wr = o), (ie = s) && !c))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Zu(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Zu(l);
        for (; i !== null; ) (k = i), b0(i), (i = i.sibling);
        (k = l), (wr = u), (ie = c);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : $u(e);
  }
}
function $u(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && _u(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _u(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Vn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ie || (t.flags & 512 && Di(t));
      } catch (m) {
        A(t, t.return, m);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Wu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Zu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var i = t.return;
          try {
            Di(t);
          } catch (s) {
            A(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Di(t);
          } catch (s) {
            A(t, o, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var Rc = Math.ceil,
  br = Je.ReactCurrentDispatcher,
  Lo = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  Q = null,
  te = 0,
  ve = 0,
  Qt = vt(0),
  G = 0,
  Xn = null,
  zt = 0,
  vl = 0,
  Po = 0,
  Mn = null,
  fe = null,
  zo = 0,
  on = 1 / 0,
  Ae = null,
  el = !1,
  Ui = null,
  ct = null,
  xr = !1,
  lt = null,
  tl = 0,
  Rn = 0,
  Bi = null,
  Tr = -1,
  Mr = 0;
function se() {
  return M & 6 ? Z() : Tr !== -1 ? Tr : (Tr = Z());
}
function ft(e) {
  return e.mode & 1
    ? M & 2 && te !== 0
      ? te & -te
      : vc.transition !== null
      ? (Mr === 0 && (Mr = Fs()), Mr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $s(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Rn) throw ((Rn = 0), (Bi = null), Error(y(185)));
  qn(e, n, r),
    (!(M & 2) || e !== J) &&
      (e === J && (!(M & 2) && (vl |= n), G === 4 && nt(e, te)),
      he(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((on = Z() + 500), dl && gt()));
}
function he(e, t) {
  var n = e.callbackNode;
  v2(e, t);
  var r = Hr(e, e === J ? te : 0);
  if (r === 0)
    n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eu(n), t === 1))
      e.tag === 0 ? hc(Qu.bind(null, e)) : s0(Qu.bind(null, e)),
        fc(function () {
          !(M & 6) && gt();
        }),
        (n = null);
    else {
      switch (Ds(r)) {
        case 1:
          n = to;
          break;
        case 4:
          n = Os;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Is;
          break;
        default:
          n = Dr;
      }
      n = ua(n, ea.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ea(e, t) {
  if (((Tr = -1), (Mr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Hr(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = na();
    (J !== e || te !== t) && ((Ae = null), (on = Z() + 500), Et(e, t));
    do
      try {
        Fc();
        break;
      } catch (u) {
        ta(e, u);
      }
    while (!0);
    ho(),
      (br.current = i),
      (M = l),
      Q !== null ? (t = 0) : ((J = null), (te = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = mi(e)), l !== 0 && ((r = l), (t = Ai(e, l)))), t === 1)
    )
      throw ((n = Xn), Et(e, 0), nt(e, r), he(e, Z()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Oc(l) &&
          ((t = nl(e, r)),
          t === 2 && ((i = mi(e)), i !== 0 && ((r = i), (t = Ai(e, i)))),
          t === 1))
      )
        throw ((n = Xn), Et(e, 0), nt(e, r), he(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Ct(e, fe, Ae);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = zo + 500 - Z()), 10 < t))
          ) {
            if (Hr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ki(Ct.bind(null, e, fe, Ae), t);
            break;
          }
          Ct(e, fe, Ae);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Rc(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ki(Ct.bind(null, e, fe, Ae), r);
            break;
          }
          Ct(e, fe, Ae);
          break;
        case 5:
          Ct(e, fe, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, Z()), e.callbackNode === n ? ea.bind(null, e) : null;
}
function Ai(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Oc(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Po,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qu(e) {
  if (M & 6) throw Error(y(327));
  qt();
  var t = Hr(e, 0);
  if (!(t & 1)) return he(e, Z()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mi(e);
    r !== 0 && ((t = r), (n = Ai(e, r)));
  }
  if (n === 1) throw ((n = Xn), Et(e, 0), nt(e, t), he(e, Z()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, fe, Ae),
    he(e, Z()),
    null
  );
}
function To(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((on = Z() + 500), dl && gt());
  }
}
function Tt(e) {
  lt !== null && lt.tag === 0 && !(M & 6) && qt();
  var t = M;
  M |= 1;
  var n = _e.transition,
    r = R;
  try {
    if (((_e.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (_e.transition = n), (M = t), !(M & 6) && gt();
  }
}
function Mo() {
  (ve = Qt.current), D(Qt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cc(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((fo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          rn(), D(pe), D(oe), Co();
          break;
        case 5:
          xo(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          D(V);
          break;
        case 19:
          D(V);
          break;
        case 10:
          vo(r.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Q = e = dt(e.current, null)),
    (te = ve = t),
    (G = 0),
    (Xn = null),
    (Po = vl = zt = 0),
    (fe = Mn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function ta(e, t) {
  do {
    var n = Q;
    try {
      if ((ho(), (Lr.current = qr), Jr)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Pt = 0),
        (X = K = U = null),
        (zn = !1),
        (Kn = 0),
        (Lo.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Xn = t), (Q = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Ru(o);
          if (w !== null) {
            (w.flags &= -257),
              Ou(w, o, u, i, t),
              w.mode & 1 && Mu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var C = new Set();
              C.add(s), (t.updateQueue = C);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(i, c, t), Ro();
              break e;
            }
            s = Error(y(426));
          }
        } else if (H && u.mode & 1) {
          var O = Ru(o);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Ou(O, o, u, i, t),
              po(ln(s, u));
            break e;
          }
        }
        (i = s = ln(s, u)),
          G !== 4 && (G = 2),
          Mn === null ? (Mn = [i]) : Mn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = H0(i, s, t);
              Eu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ct === null || !ct.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = V0(i, u, t);
                Eu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      la(n);
    } catch (S) {
      (t = S), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function na() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function Ro() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(zt & 268435455) && !(vl & 268435455)) || nt(J, te);
}
function nl(e, t) {
  var n = M;
  M |= 2;
  var r = na();
  (J !== e || te !== t) && ((Ae = null), Et(e, t));
  do
    try {
      Ic();
      break;
    } catch (l) {
      ta(e, l);
    }
  while (!0);
  if ((ho(), (M = n), (br.current = r), Q !== null)) throw Error(y(261));
  return (J = null), (te = 0), G;
}
function Ic() {
  for (; Q !== null; ) ra(Q);
}
function Fc() {
  for (; Q !== null && !u2(); ) ra(Q);
}
function ra(e) {
  var t = oa(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? la(e) : (Q = t),
    (Lo.current = null);
}
function la(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pc(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Q = null);
        return;
      }
    } else if (((n = Lc(n, t, ve)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Ct(e, t, n) {
  var r = R,
    l = _e.transition;
  try {
    (_e.transition = null), (R = 1), Dc(e, t, n, r);
  } finally {
    (_e.transition = l), (R = r);
  }
  return null;
}
function Dc(e, t, n, r) {
  do qt();
  while (lt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (g2(e, i),
    e === J && ((Q = J = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      ua(Dr, function () {
        return qt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (Lo.current = null),
      Tc(e, n),
      q0(n, e),
      rc(xi),
      (Vr = !!wi),
      (xi = wi = null),
      (e.current = n),
      Mc(n),
      s2(),
      (M = u),
      (R = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (xr && ((xr = !1), (lt = e), (tl = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    f2(n.stateNode),
    he(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Ui), (Ui = null), e);
  return (
    tl & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Bi ? Rn++ : ((Rn = 0), (Bi = e))) : (Rn = 0),
    gt(),
    null
  );
}
function qt() {
  if (lt !== null) {
    var e = Ds(tl),
      t = _e.transition,
      n = R;
    try {
      if (((_e.transition = null), (R = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (tl = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (k = h);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var m = v.sibling,
                        w = v.return;
                      if ((Y0(v), v === c)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (k = m);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var O = C.sibling;
                    (C.sibling = null), (C = O);
                  } while (C !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (k = p);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, u);
                  }
                } catch (S) {
                  A(u, u.return, S);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((M = l), gt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (_e.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = ln(n, t)),
    (t = H0(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (qn(e, 1, t), he(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = ln(n, e)),
            (e = V0(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (qn(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hc(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (te & n) === n &&
      (G === 4 || (G === 3 && (te & 130023424) === te && 500 > Z() - zo)
        ? Et(e, 0)
        : (Po |= n)),
    he(e, t);
}
function ia(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = se();
  (e = Ye(e, t)), e !== null && (qn(e, t, n), he(e, n));
}
function Vc(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ia(e, n);
}
function Uc(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), ia(e, n);
}
var oa;
oa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Nc(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), H && t.flags & 1048576 && a0(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zr(e, t), (e = t.pendingProps);
      var l = en(t, oe.current);
      Jt(t, n), (l = So(null, t, r, e, l, n));
      var i = jo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), Wr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yo(t),
            (l.updater = pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Mi(null, t, r, !0, i, n)))
          : ((t.tag = 0), H && i && co(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ac(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ti(null, t, r, e, n);
            break e;
          case 1:
            t = Du(null, t, r, e, n);
            break e;
          case 11:
            t = Iu(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ti(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Du(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($0(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          p0(e, t),
          Yr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = Hu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = Hu(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                we = t,
                H = !0,
                Re = null,
                n = g0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        y0(t),
        e === null && _i(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ci(r, l) ? (o = null) : i !== null && Ci(r, i) && (t.flags |= 32),
        A0(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && _i(t), null;
    case 13:
      return W0(e, t, n);
    case 4:
      return (
        wo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Iu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(Kr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Fe(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ni(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ni(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Fu(e, t, r, l, n)
      );
    case 15:
      return U0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        zr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Wr(t)) : (e = !1),
        Jt(t, n),
        h0(t, r, l),
        Pi(t, r, l, n),
        Mi(null, t, r, !0, e, n)
      );
    case 19:
      return Z0(e, t, n);
    case 22:
      return B0(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ua(e, t) {
  return Rs(e, t);
}
function Bc(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Bc(e, t, n, r);
}
function Oo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ac(e) {
  if (typeof e == "function") return Oo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Oo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ft:
        return _t(n.children, l, i, t);
      case Ji:
        (o = 8), (l |= 8);
        break;
      case bl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case ei:
        return (e = Ee(13, n, t, l)), (e.elementType = ei), (e.lanes = i), e;
      case ti:
        return (e = Ee(19, n, t, l)), (e.elementType = ti), (e.lanes = i), e;
      case vs:
        return gl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ms:
              o = 10;
              break e;
            case hs:
              o = 9;
              break e;
            case qi:
              o = 11;
              break e;
            case bi:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _t(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = vs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $c(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Io(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new $c(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yo(i),
    e
  );
}
function Wc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sa(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return u0(e, n, t);
  }
  return t;
}
function aa(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Io(n, r, !0, e, l, i, o, u, s)),
    (e.context = sa(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    qn(e, l, r),
    he(e, r),
    e
  );
}
function yl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = sa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Ie(e, l, o, i), Nr(e, l, o)),
    o
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fo(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t);
}
function Zc() {
  return null;
}
var ca =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
wl.prototype.render = Do.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
wl.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      yl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Us();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && As(e);
  }
};
function Ho(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function Qc(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = rl(o);
        i.call(c);
      };
    }
    var o = aa(t, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = o),
      (e[Ge] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = rl(s);
      u.call(c);
    };
  }
  var s = Io(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      yl(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = rl(o);
        u.call(s);
      };
    }
    yl(t, o, e, l);
  } else o = Qc(n, t, e, l, r);
  return rl(o);
}
Hs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (no(t, n | 1), he(t, Z()), !(M & 6) && ((on = Z() + 500), gt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Fo(e, 1);
  }
};
ro = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Fo(e, 134217728);
  }
};
Vs = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Fo(e, t);
  }
};
Us = function () {
  return R;
};
Bs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
fi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((li(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(y(90));
            ys(r), li(r, l);
          }
        }
      }
      break;
    case "textarea":
      xs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
Ns = To;
Ls = Tt;
var Kc = { usingClientEntryPoint: !1, Events: [er, Ut, fl, Es, _s, To] },
  wn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Gc = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Zc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber)
    try {
      (ul = Cr.inject(Gc)), (Ue = Cr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ho(t)) throw Error(y(200));
  return Wc(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!Ho(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = ca;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Io(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Tt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!xl(t)) throw Error(y(200));
  return Cl(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!Ho(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = ca;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = aa(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ge] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wl(t);
};
Ce.render = function (e, t, n) {
  if (!xl(t)) throw Error(y(200));
  return Cl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!xl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = To;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Cl(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function fa() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fa);
    } catch (e) {
      console.error(e);
    }
}
fa(), (as.exports = Ce);
var Yc = as.exports,
  Xu = Yc;
(Jl.createRoot = Xu.createRoot), (Jl.hydrateRoot = Xu.hydrateRoot);
function xn() {
  const e = ee.useRef(null);
  return [
    e,
    () => {
      var n;
      (n = e.current) == null || n.scrollIntoView({ behavior: "smooth" });
    },
  ];
}
const Xc = ({
  scrollToAbout: e,
  scrollToSkills: t,
  scrollToProjects: n,
  scrollToContact: r,
  mobileNavOpen: l,
  toggleMobileNav: i,
}) =>
  d.jsxs("div", {
    className: `md:hidden fixed top-0 left-0 z-40 mx-auto my-0 h-full bg-brand-yellow w-screen flex-row-reverse items-center justify-center border-8 border-black ${
      l ? "translate-x-0" : "-translate-x-full"
    } ease-in-out transition-all duration-300`,
    children: [
      d.jsx("button", {
        onClick: i,
        className: "absolute top-5 right-5",
        children: d.jsx("svg", {
          className: "w-12 h-12",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: d.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M6 18L18 6M6 6l12 12",
          }),
        }),
      }),
      d.jsxs("ul", {
        className:
          "font-Archivo font-semibold text-xl flex flex-col w-full justify-center items-center h-screen gap-10",
        children: [
          d.jsx("li", {
            onClick: () => {
              e(), i();
            },
            className: "cursor-pointer",
            children: "About",
          }),
          d.jsx("li", {
            onClick: () => {
              t(), i();
            },
            className: "cursor-pointer",
            children: "Skills",
          }),
          d.jsx("li", {
            onClick: () => {
              n(), i();
            },
            className: "cursor-pointer",
            children: "Projects",
          }),
          d.jsx("li", {
            onClick: () => {
              r(), i();
            },
            className: "cursor-pointer",
            children: "Contact",
          }),
        ],
      }),
    ],
  });
var da = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ju = ge.createContext && ge.createContext(da),
  Jc = ["attr", "size", "title"];
function qc(e, t) {
  if (e == null) return {};
  var n = bc(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function bc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
function qu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qu(Object(n), !0).forEach(function (r) {
          e1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function e1(e, t, n) {
  return (
    (t = t1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function t1(e) {
  var t = n1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function n1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pa(e) {
  return (
    e &&
    e.map((t, n) =>
      ge.createElement(t.tag, il({ key: n }, t.attr), pa(t.child))
    )
  );
}
function Vo(e) {
  return (t) =>
    ge.createElement(r1, ll({ attr: il({}, e.attr) }, t), pa(e.child));
}
function r1(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = qc(e, Jc),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      ge.createElement(
        "svg",
        ll(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: il(il({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ge.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ju !== void 0
    ? ge.createElement(Ju.Consumer, null, (n) => t(n))
    : t(da);
}
function l1(e) {
  return Vo({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
const i1 =
    "data:image/svg+xml,%3csvg%20width='81'%20height='79'%20viewBox='0%200%2081%2079'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.1526%200C17.9683%200%200%2017.988%200%2040.1966C0%2057.9837%2011.4937%2073.0072%2027.4543%2078.3332C29.462%2078.6849%2030.2148%2077.479%2030.2148%2076.4239C30.2148%2075.4692%2030.1646%2072.3037%2030.1646%2068.9373C20.0763%2070.7963%2017.4664%2066.4752%2016.6633%2064.2141C16.2116%2063.0585%2014.2542%2059.491%2012.5477%2058.5364C11.1423%2057.7827%209.13472%2055.9236%2012.4975%2055.8733C15.6595%2055.8231%2017.9181%2058.7876%2018.671%2059.9935C22.2847%2066.0732%2028.0566%2064.3649%2030.3654%2063.3097C30.7167%2060.6969%2031.7707%2058.9383%2032.9251%2057.9334C23.9912%2056.9285%2014.6557%2053.4615%2014.6557%2038.0863C14.6557%2033.7149%2016.2116%2030.0972%2018.7713%2027.2835C18.3698%2026.2786%2016.9645%2022.1584%2019.1729%2016.6314C19.1729%2016.6314%2022.5356%2015.5762%2030.2148%2020.7515C33.427%2019.8471%2036.84%2019.3949%2040.253%2019.3949C43.666%2019.3949%2047.0789%2019.8471%2050.2911%2020.7515C57.9703%2015.526%2061.3331%2016.6314%2061.3331%2016.6314C63.5415%2022.1584%2062.1362%2026.2786%2061.7346%2027.2835C64.2944%2030.0972%2065.8503%2033.6647%2065.8503%2038.0863C65.8503%2053.5118%2056.4646%2056.9285%2047.5306%2057.9334C48.9862%2059.1896%2050.2409%2061.6014%2050.2409%2065.3698C50.2409%2070.7461%2050.1908%2075.0672%2050.1908%2076.4239C50.1908%2077.479%2050.9436%2078.7352%2052.9512%2078.3332C60.9235%2075.6413%2067.8512%2070.5133%2072.7585%2063.6716C77.6658%2056.8299%2080.3053%2048.6194%2080.3052%2040.1966C80.3052%2017.988%2062.3369%200%2040.1526%200Z'%20fill='black'/%3e%3c/svg%3e",
  o1 =
    "data:image/svg+xml,%3csvg%20width='78'%20height='78'%20viewBox='0%200%2078%2078'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M71.7906%200.000538991H6.09873C5.36029%20-0.00965496%204.62707%200.12484%203.94093%200.396343C3.25478%200.667847%202.62917%201.07104%202.09981%201.5829C1.57046%202.09475%201.14772%202.70525%200.855756%203.37951C0.56379%204.05378%200.408308%204.77861%200.398193%205.51261V71.5804C0.408308%2072.3144%200.56379%2073.0392%200.855756%2073.7135C1.14772%2074.3877%201.57046%2074.9982%202.09981%2075.5101C2.62917%2076.0219%203.25478%2076.4251%203.94093%2076.6966C4.62707%2076.9681%205.36029%2077.1026%206.09873%2077.0924H71.7906C72.5291%2077.1026%2073.2623%2076.9681%2073.9485%2076.6966C74.6346%2076.4251%2075.2602%2076.0219%2075.7896%2075.5101C76.3189%2074.9982%2076.7417%2074.3877%2077.0336%2073.7135C77.3256%2073.0392%2077.4811%2072.3144%2077.4912%2071.5804V5.51261C77.4811%204.77861%2077.3256%204.05378%2077.0336%203.37951C76.7417%202.70525%2076.3189%202.09475%2075.7896%201.5829C75.2602%201.07104%2074.6346%200.667847%2073.9485%200.396343C73.2623%200.12484%2072.5291%20-0.00965496%2071.7906%200.000538991ZM23.782%2064.5265H12.1483V29.8351H23.782V64.5265ZM17.9652%2024.9783C16.3607%2024.9783%2014.822%2024.3448%2013.6875%2023.2171C12.553%2022.0894%2011.9156%2020.5599%2011.9156%2018.9651C11.9156%2017.3704%2012.553%2015.8409%2013.6875%2014.7132C14.822%2013.5855%2016.3607%2012.952%2017.9652%2012.952C18.8171%2012.8559%2019.6799%2012.9399%2020.497%2013.1982C21.314%2013.4566%2022.067%2013.8836%2022.7065%2014.4513C23.3461%2015.0189%2023.8578%2015.7145%2024.2081%2016.4924C24.5585%2017.2702%2024.7396%2018.1129%2024.7396%2018.9651C24.7396%2019.8174%2024.5585%2020.6601%2024.2081%2021.4379C23.8578%2022.2158%2023.3461%2022.9114%2022.7065%2023.479C22.067%2024.0467%2021.314%2024.4737%2020.497%2024.7321C19.6799%2024.9904%2018.8171%2025.0744%2017.9652%2024.9783ZM65.7411%2064.5265H54.1073V45.9088C54.1073%2041.2447%2052.4398%2038.1996%2048.2129%2038.1996C46.9047%2038.2091%2045.6309%2038.617%2044.5632%2039.3682C43.4954%2040.1194%2042.6849%2041.1779%2042.2409%2042.4011C41.9375%2043.3071%2041.806%2044.2612%2041.8531%2045.2149V64.4879H30.2194V29.7966H41.8531V34.6919C42.91%2032.8691%2044.4471%2031.3674%2046.2989%2030.3486C48.1508%2029.3297%2050.2471%2028.8323%2052.3623%2028.91C60.1181%2028.91%2065.7411%2033.8824%2065.7411%2044.5597V64.5265Z'%20fill='black'/%3e%3c/svg%3e",
  u1 =
    "data:image/svg+xml,%3csvg%20width='65'%20height='78'%20viewBox='0%200%2065%2078'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M53.7692%2027.2093H46.4729V4.53488C46.4729%202.0407%2044.4079%200%2041.884%200H23.5286C21.0047%200%2018.9397%202.0407%2018.9397%204.53488V27.2093H11.6434C7.55931%2027.2093%205.49432%2032.107%208.3853%2034.9639L29.4482%2055.7791C31.2379%2057.5477%2034.1289%2057.5477%2035.9185%2055.7791L56.9814%2034.9639C59.8724%2032.107%2057.8533%2027.2093%2053.7692%2027.2093ZM0.584229%2072.5581C0.584229%2075.0523%202.64922%2077.093%205.1731%2077.093H60.2395C62.7634%2077.093%2064.8284%2075.0523%2064.8284%2072.5581C64.8284%2070.0639%2062.7634%2068.0232%2060.2395%2068.0232H5.1731C2.64922%2068.0232%200.584229%2070.0639%200.584229%2072.5581Z'%20fill='black'/%3e%3c/svg%3e",
  s1 = "/assets/Brayden Friesen Resume-C0vTFWF1.pdf",
  ma = (e) =>
    d.jsxs("ul", {
      className: "flex flex-row justify-evenly items-center w-1/2 md:w-fit",
      children: [
        d.jsx("li", {
          className: "mx-auto",
          children: d.jsx("a", {
            href: "https://github.com/Be-Freezin",
            target: "_blank",
            children: d.jsx("img", {
              src: i1,
              alt: "Icon for github",
              srcSet: "",
              className: "w-1/3 drop-shadow-xxs cursor-pointer",
            }),
          }),
        }),
        d.jsxs("li", {
          children: [
            d.jsx("div", {}),
            d.jsx("a", {
              href: "https://www.linkedin.com/in/braydenfriesen/",
              target: "_blank",
              children: d.jsx("img", {
                src: o1,
                alt: "icon for linkedin",
                srcSet: "",
                className: "w-1/3 drop-shadow-xxs cursor-pointer",
              }),
            }),
          ],
        }),
        d.jsx("li", {
          children: d.jsxs("div", {
            className: "relative group flex",
            children: [
              d.jsx("a", {
                href: s1,
                download: !0,
                children: d.jsx("img", {
                  src: u1,
                  alt: "icon for download",
                  srcSet: "",
                  className: "w-1/3 drop-shadow-xxs cursor-pointer",
                }),
              }),
              d.jsx("div", {
                className:
                  "absolute text-center hidden group-hover:block bg-black text-white px-2 py-1 text-xs rounded bottom-full left-1/2 transform -translate-x-1/2 mb-1",
                children: "Download Resume",
              }),
            ],
          }),
        }),
      ],
    }),
  a1 = ({
    scrollToHome: e,
    scrollToAbout: t,
    scrollToSkills: n,
    scrollToProjects: r,
    scrollToContact: l,
  }) => {
    const [i, o] = ee.useState(!1),
      [u, s] = ee.useState(!1),
      c = () => s(!u),
      [v, h] = ee.useState("");
    ee.useEffect(() => {
      const w = () => {
        window.scrollY > 50 !== i && o(!i);
        const C = ["home", "about", "skills", "projects", "contact"];
        for (const O of C) {
          const f = document.getElementById(O);
          if (f) {
            const a = f.getBoundingClientRect();
            if (a.top < window.innerHeight && a.bottom >= 0) {
              h(O);
              return;
            }
          }
        }
      };
      return (
        document.addEventListener("scroll", w),
        () => {
          document.removeEventListener("scroll", w);
        }
      );
    }, [i]);
    const m = (w) => {
      h(w);
    };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs("nav", {
          className: `md:py-10 md:px-10 flex -mx-[7%] justify-between items-center flex-row-reverse md:sticky top-0 z-50 ${
            i
              ? "md:bg-primary-white md:border-black md:border-r-2 md:border-l-2 md:border-b-4 rounded-b-xl md:drop-shadow-6xl "
              : "bg-transparent"
          }`,
          children: [
            d.jsxs("div", {
              className: "w-full md:flex justify-between hidden",
              children: [
                d.jsx("div", {
                  className: "w-1/4 md:w-1/2 lg:w-1/3",
                  children: d.jsxs("ul", {
                    className:
                      "font-Archivo font-semibold text-xl flex w-full justify-between",
                    children: [
                      d.jsx("li", {
                        className: `cursor-pointer ${
                          v === "home"
                            ? "text-brand-purple-dark relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-100 after:drop-shadow-navglow before:drop-shadow-navglow after:transition after:duration-300 after:origin-center "
                            : "hover:text-brand-purple active:text-brand-purple relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
                        }`,
                        onClick: () => {
                          e(), m("home");
                        },
                        children: "Home",
                      }),
                      d.jsx("li", {
                        className: `cursor-pointer ${
                          v === "about"
                            ? "  text-brand-purple-dark relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-100 after:drop-shadow-navglow before:drop-shadow-navglow after:transition after:duration-300 after:origin-center "
                            : "hover:text-brand-purple active:text-brand-purple relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        }`,
                        onClick: () => {
                          t(), m("about");
                        },
                        children: "About",
                      }),
                      d.jsx("li", {
                        className: `cursor-pointer ${
                          v === "skills"
                            ? " text-brand-purple-dark relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-100 after:drop-shadow-navglow before:drop-shadow-navglow after:transition after:duration-300 after:origin-center "
                            : "hover:text-brand-purple active:text-brand-purple relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        }`,
                        onClick: () => {
                          n(), m("skills");
                        },
                        children: "Skills",
                      }),
                      d.jsx("li", {
                        className: `cursor-pointer ${
                          v === "projects"
                            ? " text-brand-purple-dark relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-100 after:drop-shadow-navglow before:drop-shadow-navglow after:transition after:duration-300 after:origin-center "
                            : "hover:text-brand-purple active:text-brand-purple relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        }`,
                        onClick: () => {
                          r(), m("projects");
                        },
                        children: "Projects",
                      }),
                      d.jsx("li", {
                        className: `cursor-pointer ${
                          v === "contact"
                            ? "  text-brand-purple-dark relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-100 after:drop-shadow-navglow before:drop-shadow-navglow after:transition after:duration-300 after:origin-center"
                            : "hover:text-brand-purple active:text-brand-purple relative text-xl w-fit block after:block  after:absolute after:h-[3px] after:bg-accent-orange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        }`,
                        onClick: () => {
                          l(), m("contact");
                        },
                        children: "Contact",
                      }),
                    ],
                  }),
                }),
                d.jsx(ma, {}),
              ],
            }),
            d.jsx("button", {
              onClick: c,
              className: "md:hidden pt-5",
              children: d.jsx(l1, { size: 40 }),
            }),
          ],
        }),
        d.jsx(Xc, {
          mobileNavOpen: u,
          toggleMobileNav: c,
          scrollToAbout: t,
          scrollToSkills: n,
          scrollToProjects: r,
          scrollToContact: l,
        }),
      ],
    });
  },
  c1 = ({
    children: e,
    scrollToHome: t,
    scrollToAbout: n,
    scrollToSkills: r,
    scrollToProjects: l,
    scrollToContact: i,
    homeIsInView: o,
    aboutIsInView: u,
    skillsIsInView: s,
    projectsIsInView: c,
    contactIsInView: v,
  }) =>
    d.jsx("div", {
      className: "w-3/4 min-h-screen bg-primary-white mx-auto",
      children: d.jsxs("div", {
        children: [
          d.jsx(a1, {
            scrollToAbout: n,
            scrollToSkills: r,
            scrollToProjects: l,
            scrollToContact: i,
            scrollToHome: t,
            homeIsInView: o,
            aboutIsInView: u,
            skillsIsInView: s,
            projectsIsInView: c,
            contactIsInView: v,
            homeRef: ge.createRef(),
            aboutRef: ge.createRef(),
            skillsRef: ge.createRef(),
            projectsRef: ge.createRef(),
            contactRef: ge.createRef(),
          }),
          e,
        ],
      }),
    }),
  f1 = ee.forwardRef((e, t) =>
    d.jsxs("header", {
      id: "home",
      ref: t,
      className:
        " w-full h-screen flex flex-col justify-center items-center gap-7",
      children: [
        d.jsxs("div", {
          className:
            "flex flex-col items-center justify-end md:w-full w-[120%] pt-16 md:pt-36 border-8 border-black rounded-3xl bg-brand-yellow drop-shadow-6xl-solid",
          children: [
            d.jsxs("div", {
              className:
                "font-Archivo font-black flex flex-col justify-center items-center -translate-y-1/2",
              children: [
                d.jsx("p", {
                  className: "md:text-7xl text-5xl",
                  children: "Hello",
                }),
                d.jsx("p", {
                  className: "md:text-2xl",
                  children: "My name is",
                }),
              ],
            }),
            d.jsx("div", {
              className:
                "bg-primary-white w-[95%] rounded-xl border-4  border-black flex justify-center items-center px-24 md:py-24 py-12 md:mb-7 mb-2 relative",
              children: d.jsxs("h1", {
                className:
                  "font-DelaGothicOne lg:text-9xl md:text-7xl text-5xl w-fit text-center md:flex md:flex-col  ",
                children: ["BRAYDEN ", d.jsx("span", { children: " FRIESEN" })],
              }),
            }),
          ],
        }),
        d.jsx("p", {
          className: "font-Archivo font-semibold md:text-3xl text-center mt-10",
          children:
            "I'm Blending Pixels and Code to Craft Exceptional Web Experiences as a Front-End Developer.",
        }),
      ],
    })
  ),
  d1 = "/assets/selfie-Bd8GXLAo.png",
  p1 =
    "data:image/svg+xml,%3csvg%20width='81'%20height='81'%20viewBox='0%200%2081%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.10093%209.10093C9.2355%208.96669%209.39521%208.8603%209.57093%208.78783C9.74665%208.71536%209.93492%208.67823%2010.125%208.67857H18.8036C19.9544%208.67857%2021.0581%208.2214%2021.8719%207.40762C22.6857%206.59385%2023.1429%205.49014%2023.1429%204.33929C23.1429%203.18844%2022.6857%202.08472%2021.8719%201.27095C21.0581%200.457173%2019.9544%200%2018.8036%200L10.125%200C7.43968%200%204.86435%201.06674%202.96554%202.96554C1.06674%204.86435%200%207.43968%200%2010.125L0%2018.8036C0%2019.9544%200.457173%2021.0581%201.27095%2021.8719C2.08472%2022.6857%203.18844%2023.1429%204.33929%2023.1429C5.49014%2023.1429%206.59385%2022.6857%207.40762%2021.8719C8.2214%2021.0581%208.67857%2019.9544%208.67857%2018.8036V10.125C8.67823%209.93492%208.71536%209.74665%208.78783%209.57093C8.8603%209.39521%208.96669%209.2355%209.10093%209.10093ZM81%2062.1964C81%2061.0456%2080.5428%2059.9419%2079.729%2059.1281C78.9153%2058.3143%2077.8116%2057.8571%2076.6607%2057.8571C75.5099%2057.8571%2074.4062%2058.3143%2073.5924%2059.1281C72.7786%2059.9419%2072.3214%2061.0456%2072.3214%2062.1964V70.875C72.3214%2071.2586%2072.169%2071.6265%2071.8978%2071.8978C71.6265%2072.169%2071.2586%2072.3214%2070.875%2072.3214H62.1964C61.0456%2072.3214%2059.9419%2072.7786%2059.1281%2073.5924C58.3143%2074.4062%2057.8571%2075.5099%2057.8571%2076.6607C57.8571%2077.8116%2058.3143%2078.9153%2059.1281%2079.729C59.9419%2080.5428%2061.0456%2081%2062.1964%2081H70.875C73.5603%2081%2076.1357%2079.9333%2078.0345%2078.0345C79.9333%2076.1357%2081%2073.5603%2081%2070.875V62.1964ZM4.33929%2057.8571C5.49014%2057.8571%206.59385%2058.3143%207.40762%2059.1281C8.2214%2059.9419%208.67857%2061.0456%208.67857%2062.1964V70.875C8.67857%2071.2586%208.83096%2071.6265%209.10222%2071.8978C9.37348%2072.169%209.74138%2072.3214%2010.125%2072.3214H18.8036C19.9544%2072.3214%2021.0581%2072.7786%2021.8719%2073.5924C22.6857%2074.4062%2023.1429%2075.5099%2023.1429%2076.6607C23.1429%2077.8116%2022.6857%2078.9153%2021.8719%2079.729C21.0581%2080.5428%2019.9544%2081%2018.8036%2081H10.125C7.43968%2081%204.86435%2079.9333%202.96554%2078.0345C1.06674%2076.1357%200%2073.5603%200%2070.875L0%2062.1964C0%2061.0456%200.457173%2059.9419%201.27095%2059.1281C2.08472%2058.3143%203.18844%2057.8571%204.33929%2057.8571ZM62.1964%200C61.0456%200%2059.9419%200.457173%2059.1281%201.27095C58.3143%202.08472%2057.8571%203.18844%2057.8571%204.33929C57.8571%205.49014%2058.3143%206.59385%2059.1281%207.40762C59.9419%208.2214%2061.0456%208.67857%2062.1964%208.67857H70.875C71.2586%208.67857%2071.6265%208.83096%2071.8978%209.10222C72.169%209.37348%2072.3214%209.74138%2072.3214%2010.125V18.8036C72.3214%2019.9544%2072.7786%2021.0581%2073.5924%2021.8719C74.4062%2022.6857%2075.5099%2023.1429%2076.6607%2023.1429C77.8116%2023.1429%2078.9153%2022.6857%2079.729%2021.8719C80.5428%2021.0581%2081%2019.9544%2081%2018.8036V10.125C81%207.43968%2079.9333%204.86435%2078.0345%202.96554C76.1357%201.06674%2073.5603%200%2070.875%200H62.1964ZM40.5%2044.9897C35.281%2044.9894%2030.1867%2046.5849%2025.9002%2049.5621C21.6138%2052.5394%2018.3401%2056.7561%2016.5182%2061.6468C15.8702%2063.3767%2017.253%2065.0893%2019.0986%2065.0893H61.8898C63.7412%2065.0893%2065.1182%2063.3767%2064.476%2061.6468C62.6541%2056.7561%2059.3805%2052.5394%2055.094%2049.5621C50.8075%2046.5849%2045.719%2044.9894%2040.5%2044.9897ZM53.2749%2025.8101C53.2749%2029.202%2051.9274%2032.455%2049.5289%2034.8535C47.1305%2037.252%2043.8775%2038.5994%2040.4855%2038.5994C37.0936%2038.5994%2033.8406%2037.252%2031.4421%2034.8535C29.0437%2032.455%2027.6962%2029.202%2027.6962%2025.8101C27.6962%2022.4181%2029.0437%2019.1651%2031.4421%2016.7667C33.8406%2014.3682%2037.0936%2013.0207%2040.4855%2013.0207C43.8775%2013.0207%2047.1305%2014.3682%2049.5289%2016.7667C51.9274%2019.1651%2053.2749%2022.4181%2053.2749%2025.8101Z'%20fill='black'/%3e%3c/svg%3e",
  m1 = ee.forwardRef((e, t) =>
    d.jsxs("section", {
      className:
        "bg-brand-yellow flex flex-col-reverse xl:flex-row justify-between items-center py-32 px-12 mt-20 -mx-[16.7%] relative border-y-8 border-black",
      children: [
        d.jsxs("div", {
          id: "about",
          ref: t,
          className:
            "absolute md:w-64 md:h-20 bg-brand-yellow border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[4.96rem] md:-top-[80px] -top-[52px]  left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-evenly items-center py-2",
          children: [
            d.jsx("img", { src: p1, alt: "", className: "md:w-[20%] w-[15%]" }),
            d.jsx("h3", { children: "About" }),
          ],
        }),
        d.jsxs("div", {
          className:
            "font-Archivo font-semibold text-lg w-1/4 md:w-1/3 border-8 border-black rounded-2xl drop-shadow-6xl-solid bg-brand-purple py-8 px-6 mt-20 xl:mt-0 relative flex flex-col justify-center min-h-[600px] min-w-96",
          children: [
            d.jsx("p", {
              children:
                "I'm authentically me, sprinkling my personality into everything I do. Melding creativity with logic, I focus on engaging user experiences, human-readable code and unique pixels.",
            }),
            d.jsx("br", {}),
            d.jsx("p", {
              children:
                "With an unending creative drive and a distinctive, creative-yet-logical approach to problem-solving, I strive to be the best developer I can be.",
            }),
            d.jsx("br", {}),
            d.jsx("p", {
              children:
                "You can find me at my happiest when I'm learning, creating, thinking of how to make things more efficient, headbanging in the front row of my favorite metal shows, hiking with my wife, or vanquishing foes in my favorite RPGs.",
            }),
            d.jsx("br", {}),
            d.jsx("p", {
              children:
                "I'm Brayden, and I could be your new favorite developer.",
            }),
            d.jsxs("div", {
              className:
                "lg:absolute lg:-top-6 lg:-right-72 flex flex-col justify-evenly h-full gap-4 mt-8",
              children: [
                d.jsx("div", {
                  className:
                    "w-full h-fit bg-accent-orange px-14 py-5 flex justify-center items-center border-4 border-black rounded-lg",
                  children: d.jsx("p", { children: "Horror Movie Junkie" }),
                }),
                d.jsx("div", {
                  className:
                    "w-full h-fit bg-accent-orange px-14 py-5 flex justify-center items-center border-4 border-black rounded-lg",
                  children: d.jsx("p", { children: "Metal Head" }),
                }),
                d.jsxs("div", {
                  className:
                    "w-full h-fit bg-accent-orange px-14 py-5 flex justify-center items-center border-4 border-black rounded-lg",
                  children: [" ", d.jsx("p", { children: "RPG Fanatic" })],
                }),
                d.jsxs("div", {
                  className:
                    "w-full h-fit bg-accent-orange px-14 py-5 flex justify-center items-center border-4 border-black rounded-lg",
                  children: [" ", d.jsx("p", { children: "Design Tinkerer" })],
                }),
                d.jsxs("div", {
                  className:
                    "w-full h-fit bg-accent-orange px-14 py-5 flex justify-center items-center border-4 border-black rounded-lg",
                  children: [" ", d.jsx("p", { children: "Music Producer" })],
                }),
              ],
            }),
          ],
        }),
        d.jsx("img", { src: d1, alt: "", srcSet: "" }),
      ],
    })
  ),
  h1 =
    "data:image/svg+xml,%3csvg%20width='85'%20height='80'%20viewBox='0%200%2085%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.25%200H80.75C81.8772%200%2082.9582%200.468252%2083.7552%201.30175C84.5522%202.13524%2085%203.2657%2085%204.44444V75.5556C85%2076.7343%2084.5522%2077.8648%2083.7552%2078.6983C82.9582%2079.5318%2081.8772%2080%2080.75%2080H4.25C3.12283%2080%202.04183%2079.5318%201.2448%2078.6983C0.447766%2077.8648%200%2076.7343%200%2075.5556V4.44444C0%203.2657%200.447766%202.13524%201.2448%201.30175C2.04183%200.468252%203.12283%200%204.25%200ZM61.4763%2055.7156L76.5%2040L61.4763%2024.2844L55.4625%2030.5778L64.481%2040L55.4625%2049.4267L61.4763%2055.7156ZM20.519%2040L29.5375%2030.5733L23.528%2024.2844L8.5%2040L23.528%2055.7156L29.5375%2049.4222L20.519%2040ZM39.287%2062.2222L54.757%2017.7778H45.713L30.243%2062.2222H39.287Z'%20fill='black'/%3e%3c/svg%3e",
  v1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='115'%20viewBox='0%200%20115%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_47_3206)'%3e%3cmask%20id='mask0_47_3206'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='115'%20height='115'%3e%3cpath%20d='M0%200H114.277V114.277H0V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_47_3206)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.6784%2093.7852L13.9363%2011.1489H99.6437L89.8969%2093.7757L56.7424%20102.965L23.6784%2093.7852ZM43.3768%2048.5507L42.4531%2038.1706H81.2357L82.1404%2028.0381H31.3825L34.1156%2058.688H69.2414L68.0653%2071.8298L56.7614%2074.8867H56.7519L45.4671%2071.8393L44.7433%2063.759H34.5632L35.9821%2079.672L56.7424%2085.4335L77.536%2079.672L80.0691%2051.2743L80.3167%2048.5555L43.3768%2048.5507Z'%20fill='black'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_47_3206'%3e%3crect%20width='114.277'%20height='114.277'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  g1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='115'%20viewBox='0%200%20115%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M57.3747%20103.146L24.3107%2093.9661L14.5638%2011.3298H100.271L90.5292%2093.9566L57.3747%20103.146ZM33.8337%2048.7364L34.7432%2058.8689H69.869L68.6929%2072.0107L57.389%2075.0676H57.3795L46.0947%2072.0202L45.3709%2063.9399H35.1955L36.6145%2079.8529L57.3747%2085.6144L78.1683%2079.8529L80.7014%2051.4552L80.949%2048.7364L82.7774%2028.219H32.0101L32.9338%2038.3562H71.6736L70.7498%2048.7364H33.8337Z'%20fill='black'/%3e%3c/svg%3e",
  y1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='116'%20viewBox='0%200%20115%20116'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.39771%207.92944V107.921H107.39V7.92944H7.39771ZM60.9649%2085.6018C60.9649%2095.3354%2055.2153%20100.081%2046.8923%20100.081C39.3751%20100.081%2035.0116%2096.188%2032.7975%2091.4897L40.4486%2086.8584C41.924%2089.4765%2043.0444%2091.6906%2046.2651%2091.6906C48.9435%2091.6906%2051.1442%2090.4831%2051.1442%2085.7848V54.3543H60.9649V85.6018ZM83.1394%2099.8574C74.4147%2099.8574%2068.7767%2095.9202%2066.0247%2090.4831L73.6871%2086.0482C75.6958%2089.3381%2078.3184%2091.5299%2082.9497%2091.5299C86.8423%2091.5299%2089.1032%2089.8068%2089.1032%2087.1218C89.1032%2083.9011%2086.7753%2082.7605%2082.4788%2080.8723L80.1307%2079.8634C73.35%2076.9797%2068.8549%2073.355%2068.8549%2065.7016C68.8549%2058.6553%2074.2227%2053.5084%2082.6127%2053.5084C88.5877%2053.5084%2092.8797%2055.3654%2095.971%2060.8025L88.6412%2065.5141C87.0297%2062.6282%2085.2933%2061.4966%2082.6015%2061.4966C79.8495%2061.4966%2078.1041%2063.242%2078.1041%2065.5141C78.1041%2068.3331%2079.8495%2069.4736%2083.876%2071.219L86.224%2072.2257C94.2122%2075.6495%2098.7096%2079.1447%2098.7096%2086.9923C98.7118%2095.4515%2092.0673%2099.8574%2083.1394%2099.8574Z'%20fill='black'/%3e%3c/svg%3e",
  w1 = "/assets/REACT-BLtNDmUt.svg",
  x1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='116'%20viewBox='0%200%20115%20116'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_47_3231)'%3e%3cpath%20d='M84.992%20107.907C84.567%20108.132%2084.6027%20108.204%2085.0099%20107.996C85.1353%20107.945%2085.2503%20107.871%2085.3491%20107.779C85.3491%20107.704%2085.3491%20107.704%2084.992%20107.907ZM85.8491%20107.443C85.6455%20107.611%2085.6455%20107.611%2085.8884%20107.5C85.9781%20107.458%2086.0602%20107.401%2086.1312%20107.332C86.1312%20107.236%2086.0741%20107.257%2085.8491%20107.443ZM86.4062%20107.107C86.2026%20107.275%2086.2026%20107.275%2086.4455%20107.164C86.5355%20107.121%2086.6177%20107.063%2086.6883%20106.993C86.6883%20106.904%2086.6312%20106.922%2086.4062%20107.107ZM86.9704%20106.775C86.7669%20106.943%2086.7669%20106.943%2087.0026%20106.829C87.1347%20106.757%2087.2454%20106.682%2087.2454%20106.661C87.2454%20106.572%2087.1882%20106.589%2086.9704%20106.775ZM87.7311%20106.272C87.3418%20106.532%2087.2061%20106.7%2087.5632%20106.514C87.8025%20106.368%2088.2096%20106.047%2088.1382%20106.047C87.9846%20106.104%2087.8561%20106.2%2087.7275%20106.272H87.7311ZM53.5802%200.794314C53.3195%200.81217%2052.5374%200.883593%2051.8518%200.940731C35.6102%202.41204%2020.415%2011.1542%2010.7836%2024.621C5.46107%2032.007%202.00133%2040.5694%200.698724%2049.5797C0.238047%2052.7223%200.180908%2053.6508%200.180908%2057.9112C0.180908%2062.168%200.238047%2063.0822%200.698724%2066.2248C3.80919%2087.6909%2019.0794%20105.711%2039.7777%20112.389C43.5025%20113.578%2047.4057%20114.4%2051.8518%20114.903C53.5802%20115.089%2061.0546%20115.089%2062.7831%20114.903C70.4682%20114.046%2076.9569%20112.15%2083.3778%20108.875C84.3635%20108.375%2084.5492%20108.243%2084.417%20108.132C81.2848%20103.992%2078.179%2099.8312%2075.0999%2095.651L65.9685%2083.3199L54.5301%2066.3748C50.7254%2060.7012%2046.8815%2055.0539%2042.9989%2049.4333C42.9596%2049.4333%2042.9096%2056.9648%2042.8882%2066.1498C42.8489%2082.2378%2042.8489%2082.8913%2042.6454%2083.2627C42.4502%2083.7114%2042.1004%2084.0751%2041.6597%2084.2876C41.3062%2084.4555%2040.9884%2084.4912%2039.2992%2084.4912H37.3672L36.8637%2084.1769C36.5483%2083.9746%2036.2921%2083.6925%2036.1209%2083.3591L35.8781%2082.8556L35.8959%2060.461L35.9352%2038.0663L36.2887%2037.6199C36.5145%2037.3455%2036.7925%2037.1185%2037.1065%2036.9521C37.5744%2036.7272%2037.7601%2036.6914%2039.692%2036.6914C41.9597%2036.6914%2042.3347%2036.7807%2042.9311%2037.4342C47.5647%2044.3261%2052.1585%2051.2447%2056.7121%2058.1897C64.1365%2069.446%2074.2714%2084.8055%2079.2532%2092.3406L88.3132%20106.05L88.7596%20105.754C93.1137%20102.86%2097.0593%2099.3951%20100.491%2095.451C107.689%2087.2127%20112.359%2077.0743%20113.943%2066.2498C114.404%2063.1072%20114.461%2062.1751%20114.461%2057.9183C114.461%2053.6579%20114.404%2052.7473%20113.943%2049.6047C110.833%2028.1386%2095.5626%2010.1186%2074.8642%203.43696C70.9959%202.21178%2067.0143%201.3779%2062.9795%200.947874C61.8974%200.837168%2054.5123%200.705036%2053.5838%200.801457L53.5802%200.794314ZM76.9605%2035.3523C77.2262%2035.4827%2077.4631%2035.6649%2077.6575%2035.8881C77.8519%2036.1113%2077.9998%2036.3711%2078.0925%2036.6522C78.189%2036.9521%2078.2068%2043.1624%2078.189%2057.1505L78.1497%2077.2346L74.6178%2071.8065L71.0645%2066.3748V51.7938C71.0645%2042.341%2071.1038%2037.0414%2071.1538%2036.7807C71.3286%2036.183%2071.7296%2035.6769%2072.2716%2035.3701C72.7144%2035.1451%2072.8858%2035.1273%2074.6535%2035.1273C76.307%2035.1273%2076.5891%2035.1451%2076.9605%2035.3523Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_47_3231'%3e%3crect%20width='114.277'%20height='114.277'%20fill='white'%20transform='translate(0.180908%200.755371)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  C1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='116'%20viewBox='0%200%20115%20116'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9186%2073.4006C6.99538%2073.4006%202.53859%2064.2966%207.39535%2058.04L48.8492%204.62518C51.6299%201.04451%2057.3723%203.00626%2057.3723%207.54876V42.4507H99.8261C107.744%2042.4507%20112.206%2051.5548%20107.349%2057.8114L65.8954%20111.226C63.1147%20114.807%2057.3723%20112.845%2057.3723%20108.307V73.4006H14.9186Z'%20fill='black'/%3e%3c/svg%3e",
  k1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='115'%20viewBox='0%200%20115%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_47_3236)'%3e%3cpath%20d='M25.7204%200.590504C26.401%200.343113%2027.138%200.29485%2027.8451%200.451371C28.5521%200.607892%2029.1999%200.962712%2029.7125%201.47424L45.5436%2017.3206C45.4534%2017.4575%2045.3719%2017.6%2045.2998%2017.7472L16.9211%2076.4549L25.7204%200.590504ZM17.5839%2091.3261L55.5238%20114.098C56.0287%20114.4%2056.5968%20114.582%2057.1837%20114.628C57.7706%20114.675%2058.3603%20114.584%2058.9064%20114.364L96.9986%2099.1274C97.7712%2098.8161%2098.4206%2098.2602%2098.8471%2097.5447C99.2737%2096.8292%2099.4539%2095.9935%2099.3603%2095.1658L91.7418%2026.5999C91.663%2025.9075%2091.3958%2025.2501%2090.9693%2024.6991C90.5427%2024.1481%2089.9732%2023.7246%2089.3228%2023.4748C88.6723%2023.225%2087.9658%2023.1584%2087.2801%2023.2822C86.5944%2023.4061%2085.9558%2023.7156%2085.4338%2024.1772L72.8252%2035.3839L17.5839%2091.3261ZM68.4446%2028.9768L60.6586%2017.2977C60.2966%2016.7542%2059.8009%2016.3129%2059.2191%2016.0162C58.6374%2015.7195%2057.9892%2015.5773%2057.3366%2015.6033C56.6841%2015.6293%2056.0492%2015.8227%2055.493%2016.1648C54.9367%2016.5068%2054.4777%2016.9862%2054.1601%2017.5568L51.7984%2021.8079L29.0497%2068.867L68.4446%2028.9768Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_47_3236'%3e%3crect%20width='114.277'%20height='114.277'%20fill='white'%20transform='translate(0.351074%200.361816)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  S1 =
    "data:image/svg+xml,%3csvg%20width='116'%20height='115'%20viewBox='0%200%20116%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M58.1171%2028.718C45.4038%2028.718%2037.4997%2035.0508%2034.3095%2047.7641C39.071%2041.4313%2044.642%2039.0505%2050.9748%2040.6218C54.5936%2041.5265%2057.2124%2044.1454%2060.0693%2047.0499C64.7356%2051.8114%2070.0209%2057.2872%2081.9247%2057.2872C94.638%2057.2872%20102.542%2050.9543%20105.732%2038.2411C100.971%2044.5739%2095.3998%2046.9547%2089.067%2045.3834C85.4482%2044.4787%2082.877%2041.8598%2079.9725%2038.9553C75.3062%2034.1938%2070.0209%2028.718%2058.1171%2028.718ZM34.3095%2057.2872C21.5962%2057.2872%2013.6921%2063.62%2010.5018%2076.3333C15.2634%2070.0004%2020.8343%2067.6197%2027.1672%2069.191C30.7859%2070.0957%2033.3572%2072.7145%2036.2617%2075.619C40.928%2080.3806%2046.2133%2085.8563%2058.1171%2085.8563C70.8304%2085.8563%2078.7345%2079.5235%2081.9247%2066.8102C77.1632%2073.143%2071.5922%2075.5238%2065.2594%2073.9525C61.6406%2073.0478%2059.0694%2070.429%2056.1649%2067.5244C51.4986%2062.7629%2046.2133%2057.2872%2034.3095%2057.2872Z'%20fill='black'/%3e%3c/svg%3e",
  j1 =
    "data:image/svg+xml,%3csvg%20width='116'%20height='115'%20viewBox='0%200%20116%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_47_3310)'%3e%3cmask%20id='mask0_47_3310'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='116'%20height='115'%3e%3cpath%20d='M0.96814%200.329834H115.245V114.606H0.96814V0.329834Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_47_3310)'%3e%3cpath%20d='M112.526%200.329838H3.68221C2.96196%200.3311%202.27164%200.618104%201.76279%201.12785C1.25394%201.63759%200.968143%202.32841%200.968144%203.04867V111.892C0.967517%20112.25%201.03741%20112.603%201.17382%20112.934C1.31024%20113.264%201.51048%20113.564%201.76307%20113.816C2.01566%20114.069%202.31563%20114.269%202.64578%20114.406C2.97593%20114.542%203.32976%20114.612%203.68697%20114.611H112.531C112.888%20114.611%20113.241%20114.541%20113.571%20114.404C113.901%20114.268%20114.201%20114.067%20114.453%20113.815C114.706%20113.562%20114.906%20113.263%20115.043%20112.933C115.179%20112.603%20115.249%20112.249%20115.249%20111.892V3.04391C115.249%202.68687%20115.178%202.33344%20115.041%202.00382C114.904%201.67419%20114.703%201.37482%20114.45%201.1228C114.197%200.870772%20113.897%200.67103%20113.567%200.534974C113.237%200.398917%20112.883%200.329212%20112.526%200.329838ZM68.9913%2061.4012H55.3876V103.722H44.5028V61.4012H30.8991V52.0257H68.9913V61.4012ZM72.0387%20101.303V89.9941C72.0387%2089.9941%2078.2191%2094.6509%2085.6328%2094.6509C93.0465%2094.6509%2092.7608%2089.8036%2092.7608%2089.137C92.7608%2082.1043%2071.753%2082.1043%2071.753%2066.515C71.753%2045.3167%20102.365%2053.6827%20102.365%2053.6827L101.984%2063.7581C101.984%2063.7581%2096.851%2060.3346%2091.0514%2060.3346C85.2519%2060.3346%2083.1616%2063.0963%2083.1616%2066.0389C83.1616%2073.643%20104.36%2072.8859%20104.36%2088.1895C104.36%20111.759%2072.0387%20101.307%2072.0387%20101.307'%20fill='black'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_47_3310'%3e%3crect%20width='114.277'%20height='114.277'%20fill='white'%20transform='translate(0.96814%200.329834)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  E1 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='115'%20viewBox='0%200%20115%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M41.8745%2045.5625C40.2594%2045.5625%2038.6601%2045.8806%2037.1679%2046.4987C35.6757%2047.1168%2034.3199%2048.0227%2033.1778%2049.1648C32.0357%2050.3068%2031.1298%2051.6627%2030.5117%2053.1549C29.8936%2054.647%2029.5755%2056.2464%2029.5755%2057.8615C29.5755%2059.4766%2029.8936%2061.0759%2030.5117%2062.5681C31.1298%2064.0603%2032.0357%2065.4161%2033.1778%2066.5582C34.3199%2067.7003%2035.6757%2068.6062%2037.1679%2069.2243C38.6601%2069.8424%2040.2594%2070.1605%2041.8745%2070.1605H54.1735V58.1091C54.1716%2057.944%2054.1716%2057.7789%2054.1735%2057.6139V45.5625H41.8745ZM54.1735%2038.4202H41.8745C38.612%2038.4202%2035.4831%2037.1241%2033.1761%2034.8172C30.8692%2032.5102%2029.5731%2029.3813%2029.5731%2026.1188C29.5731%2022.8562%2030.8692%2019.7273%2033.1761%2017.4204C35.4831%2015.1134%2038.612%2013.8174%2041.8745%2013.8174H54.1735V38.4202ZM61.3158%2013.8174V38.4202H73.6149C76.8355%2038.3568%2079.9028%2037.0329%2082.1581%2034.7329C84.4133%2032.4328%2085.6766%2029.34%2085.6766%2026.1188C85.6766%2022.8975%2084.4133%2019.8048%2082.1581%2017.5047C79.9028%2015.2046%2076.8355%2013.8807%2073.6149%2013.8174H61.3158ZM73.6149%2045.5577C70.3865%2045.5573%2067.2874%2046.8263%2064.9864%2049.0907C62.6854%2051.3552%2061.3671%2054.4336%2061.3158%2057.6615V58.0567C61.3552%2060.4803%2062.1099%2062.8382%2063.4851%2064.8343C64.8603%2066.8304%2066.7946%2068.3756%2069.0451%2069.2759C71.2957%2070.1762%2073.7621%2070.3914%2076.1345%2069.8945C78.507%2069.3976%2080.6797%2068.2108%2082.3798%2066.483C84.0799%2064.7553%2085.2316%2062.5637%2085.6901%2060.1835C86.1487%2057.8034%2085.8937%2055.3408%2084.9573%2053.1051C84.0208%2050.8693%2082.4446%2048.9602%2080.4266%2047.6174C78.4086%2046.2746%2076.0388%2045.558%2073.6149%2045.5577ZM41.8745%2077.3028C39.4409%2077.3019%2037.0616%2078.0227%2035.0376%2079.374C33.0136%2080.7254%2031.4359%2082.6467%2030.5039%2084.8948C29.5719%2087.143%2029.3276%2089.617%2029.8018%2092.004C30.276%2094.391%2031.4475%2096.5838%2033.168%2098.305C34.8885%20100.026%2037.0808%20101.198%2039.4677%20101.674C41.8545%20102.149%2044.3286%20101.905%2046.5771%20100.974C48.8256%20100.043%2050.7475%2098.4661%2052.0997%2096.4427C53.4518%2094.4192%2054.1735%2092.0402%2054.1735%2089.6066V77.3028H41.8745Z'%20fill='black'/%3e%3c/svg%3e",
  _1 = ee.forwardRef((e, t) =>
    d.jsxs("section", {
      className:
        "bg-primary-white flex flex-col-reverse xl:flex-row justify-center items-center py-64 px-12 -mx-[16.7%] relative border-b-8 border-black",
      children: [
        d.jsxs("div", {
          id: "skills",
          ref: t,
          className:
            "absolute md:w-64 md:h-20 bg-primary-white border-x-8 border-t-8 border-black rounded-t-2xl z-50 md:-top-[4.96rem] -top-[52px] left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-evenly items-center py-2",
          children: [
            d.jsx("img", { src: h1, alt: "", className: "md:w-[20%] w-[15%]" }),
            d.jsx("h3", { children: "Skills" }),
          ],
        }),
        d.jsxs("div", {
          className:
            "md:grid-cols-5 grid-cols-2 grid grid-rows-2 gap-10 content-center font-Archivo font-semibold md:text-2xl",
          children: [
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: v1,
                  alt: "Logo for HTML",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "HTML" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: g1,
                  alt: "Logo for CSS",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "CSS" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: y1,
                  alt: "Logo for Javascript",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Javascript" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: w1,
                  alt: "Logo for React",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "React" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: x1,
                  alt: "Logo for Next",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Next" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: C1,
                  alt: "Logo for Supabase",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Supabase" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: k1,
                  alt: "Logo for Firebase",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Firebase" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: S1,
                  alt: "Logo for TailwindCSS",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Tailwind" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: j1,
                  alt: "Logo for Typescript",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Typescript" }),
              ],
            }),
            d.jsxs("div", {
              className:
                "bg-brand-yellow rounded-md border-4 border-black p-6 drop-shadow-6xl flex flex-col justify-center items-center gap-2",
              children: [
                d.jsx("img", {
                  src: E1,
                  alt: "Logo for Figma",
                  className: "min-w-20 px-4",
                }),
                d.jsx("p", { children: "Figma" }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  N1 =
    "data:image/svg+xml,%3csvg%20width='92'%20height='83'%20viewBox='0%200%2092%2083'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_73_112'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='92'%20height='83'%3e%3cpath%20d='M83.4%202.42249H8.6C4.95492%202.42249%202%205.69252%202%209.72631V73.0262C2%2077.06%204.95492%2080.33%208.6%2080.33H83.4C87.0451%2080.33%2090%2077.06%2090%2073.0262V9.72631C90%205.69252%2087.0451%202.42249%2083.4%202.42249Z'%20stroke='white'%20stroke-width='4'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%209.72631C2%207.78922%202.69536%205.93146%203.9331%204.56173C5.17084%203.19199%206.84957%202.42249%208.6%202.42249H83.4C85.1504%202.42249%2086.8292%203.19199%2088.0669%204.56173C89.3046%205.93146%2090%207.78922%2090%209.72631V31.6378H2V9.72631Z'%20fill='white'%20stroke='white'%20stroke-width='4'/%3e%3cpath%20d='M10.7996%2017.0302C10.7996%2014.341%2012.7696%2012.161%2015.1996%2012.161C17.6297%2012.161%2019.5996%2014.341%2019.5996%2017.0302C19.5996%2019.7194%2017.6297%2021.8994%2015.1996%2021.8994C12.7696%2021.8994%2010.7996%2019.7194%2010.7996%2017.0302Z'%20fill='black'/%3e%3cpath%20d='M24.0005%2017.0302C24.0005%2014.341%2025.9705%2012.161%2028.4005%2012.161C30.8306%2012.161%2032.8005%2014.341%2032.8005%2017.0302C32.8005%2019.7194%2030.8306%2021.8994%2028.4005%2021.8994C25.9705%2021.8994%2024.0005%2019.7194%2024.0005%2017.0302Z'%20fill='black'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_73_112)'%3e%3cpath%20d='M-6.7998%20-17.0544H98.8002V99.8068H-6.7998V-17.0544Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";
function L1(e) {
  return Vo({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
function P1(e) {
  return Vo({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function z1({
  name: e,
  imageUrl: t,
  siteUrl: n,
  repoUrl: r,
  description: l,
  techStack: i,
}) {
  return d.jsxs("div", {
    className:
      "md:w-11/12 w-full h-fit md:h-full font-Archivo font-semibold border-4 border-black rounded-lg mx-auto p-4 bg-brand-yellow flex flex-col gap-4 justify-center items-center lg:flex-row md:justify-evenly",
    children: [
      d.jsx("img", {
        src: t,
        alt: "",
        className:
          "w-2/3 lg:w-2/4 border-black border-2 drop-shadow-6xl-mobile rounded-md",
      }),
      d.jsxs("div", {
        className:
          "flex flex-col gap-4 lg:gap-7 md:gap-4 md:justify-between w-full",
        children: [
          d.jsxs("div", {
            className:
              "flex flex-col lg:justify-end lg:items-end items-center gap-3 lg:gap-7",
            children: [
              d.jsx("h3", {
                className:
                  "text-3xl font-DelaGothicOne md:text-4xl lg:text-7xl lg:w-11/12 lg:tracking-wide lg:text-right text-center",
                children: e,
              }),
              d.jsx("div", {
                className:
                  " bg-brand-purple-dark rounded-md p-2 border-black border-2 lg:w-3/4 drop-shadow-6xl-mobile",
                children: d.jsx("p", {
                  className: "font-semibold lg:text-lg ",
                  children: l,
                }),
              }),
            ],
          }),
          d.jsx("div", {
            className: "flex justify-end md:w-full",
            children: d.jsxs("div", {
              className:
                "flex gap-3 font-light items-center justify-end w-full lg:w-1/2",
              children: [
                d.jsx("div", {
                  className: "flex justify-between w-fit gap-3",
                  children: i.map((o, u) => d.jsx("p", { children: o }, u)),
                }),
                d.jsxs("div", {
                  className: "flex justify-between w-2/12 lg:w-3/12 ml-5",
                  children: [
                    d.jsxs("div", {
                      className: "relative group inline-block",
                      children: [
                        d.jsx("a", {
                          href: r,
                          target: "_blank",
                          children: d.jsx(P1, { size: 25 }),
                        }),
                        d.jsx("div", {
                          className:
                            "absolute text-center hidden group-hover:block bg-black text-white px-2 py-1 text-xs rounded bottom-full left-1/2 transform -translate-x-1/2",
                          children: "GitHub Repository",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "relative group inline-block",
                      children: [
                        d.jsx("a", {
                          href: n,
                          target: "_blank",
                          children: d.jsx(L1, { size: 25 }),
                        }),
                        d.jsx("div", {
                          className:
                            "absolute text-center hidden group-hover:block bg-black text-white px-2 py-1 text-xs rounded bottom-full left-1/2 transform -translate-x-1/2",
                          children: "Open Site",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const T1 = "/assets/bloodbathandbeyond-inh06nn9.jpg",
  M1 = "/assets/eldenring-C0POE9-D.jpg",
  R1 = "/assets/quoted-BJy2lBUZ.jpg",
  O1 = "/assets/tenzies-DYbhMmv2.jpg",
  I1 = [
    {
      name: "Bloodbath and Beyond",
      imageUrl: T1,
      siteUrl: "https://shimmering-flan-b84847.netlify.app/",
      repoUrl: "https://github.com/Be-Freezin/Bloodbath-and-Beyond",
      description:
        "My personal spin on a storefront webapp. A RPG merchants online store. The user is able to add items to there cart, delete single items from said said or clear the entire cart. Users cart is tied to local storage so on refreshing or exiting the webapp, all items will stay within their cart unless deleted by the user.",
      techStack: ["React", "Tailwind"],
      key: 1,
    },
    {
      name: "Elden Ring Build Planner",
      imageUrl: M1,
      siteUrl: "https://cheerful-syrniki-d189ba.netlify.app/",
      repoUrl: "https://github.com/Be-Freezin/elden-ring",
      description:
        "The primary objective of this site is to showcase how I can consume APIs and display the data from them. The project is designed to assist people in creating solid starting points for one of my favorite games, Elden Ring. It is a work in progress, and I am continuously developing it until completion. Elden Ring involves complex calculations, and my main goal is to provide users with a starting point to guide them in creating a build.",
      techStack: ["React", "Tailwind", "Axios"],
      key: 2,
    },
    {
      name: "Quoted",
      imageUrl: R1,
      siteUrl: "https://quoted-tapply-internship-project.vercel.app/",
      repoUrl: "https://github.com/Be-Freezin/quoted-tapply-internship-project",
      description:
        "My first full stack application, using next.js and firebase. This application is for users to create a basic profile, change there basic settings and allow users to post their own quotes. I implemented user authorization so only signed in users have permissions to create a post, delete there own posts and like posts of either their own or other users.",
      techStack: ["Next", "Firebase", "Firestore"],
      key: 3,
    },
    {
      name: "Tenzies",
      imageUrl: O1,
      siteUrl: "https://euphonious-malabi-d86c2d.netlify.app/",
      repoUrl: "https://github.com/Be-Freezin/tenzies",
      description:
        "Browser based game where the user rolls the dice and clicks on the dice to lock it in place. The objective here is to have all the same numbers on each dice. Race against the clock and see if you can beat your previous time! Though its a small project it show cases a great ability of handling state and user interactions.",
      techStack: ["React"],
      key: 4,
    },
  ],
  F1 = ee.forwardRef((e, t) => {
    const n = I1.map((r) =>
      d.jsx(
        z1,
        {
          name: r.name,
          imageUrl: r.imageUrl,
          siteUrl: r.siteUrl,
          repoUrl: r.repoUrl,
          description: r.description,
          techStack: r.techStack,
        },
        r.key
      )
    );
    return d.jsxs("section", {
      className:
        "bg-brand-purple flex flex-col-reverse xl:flex-row justify-between items-center py-32 md:px-12 px-6 -mx-[16.7%] relative border-b-8 border-black",
      children: [
        d.jsxs("div", {
          id: "projects",
          ref: t,
          className:
            "absolute md:w-80 md:h-20 bg-brand-purple border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[4.96rem] md:-top-[80px] -top-[52px]  left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-evenly items-center py-2",
          children: [
            d.jsx("img", { src: N1, alt: "", className: "md:w-[15%] w-[15%]" }),
            d.jsx("h3", { children: "Projects" }),
          ],
        }),
        d.jsx("div", {
          className: " grid md:grid-cols-1 md:grid-rows-2 gap-10 w-full",
          children: n,
        }),
      ],
    });
  });
class nr {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const D1 = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  b = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: D1(),
  },
  Uo = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  H1 = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = Uo(e);
    (b.publicKey = n.publicKey),
      (b.blockHeadless = n.blockHeadless),
      (b.storageProvider = n.storageProvider),
      (b.blockList = n.blockList),
      (b.limitRate = n.limitRate),
      (b.origin = n.origin || t);
  },
  ha = async (e, t, n = {}) => {
    const r = await fetch(b.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      l = await r.text(),
      i = new nr(r.status, l);
    if (r.ok) return i;
    throw i;
  },
  va = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  V1 = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  ga = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  ya = () => new nr(451, "Unavailable For Headless Browser"),
  U1 = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  B1 = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  A1 = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  wa = (e, t) => {
    if (B1(e)) return !1;
    U1(e.list, e.watchVariable);
    const n = A1(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  xa = () => new nr(403, "Forbidden"),
  $1 = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string") throw "The LimitRate ID has to be a string";
  },
  W1 = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  Ca = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    $1(t.throttle, t.id);
    const r = t.id || e;
    return (await W1(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  ka = () => new nr(429, "Too Many Requests"),
  Z1 = async (e, t, n, r) => {
    const l = Uo(r),
      i = l.publicKey || b.publicKey,
      o = l.blockHeadless || b.blockHeadless,
      u = b.storageProvider || l.storageProvider,
      s = { ...b.blockList, ...l.blockList },
      c = { ...b.limitRate, ...l.limitRate };
    return o && ga(navigator)
      ? Promise.reject(ya())
      : (va(i, e, t),
        V1(n),
        n && wa(s, n)
          ? Promise.reject(xa())
          : (await Ca(location.pathname, c, u))
          ? Promise.reject(ka())
          : ha(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.3.3",
                user_id: i,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  Q1 = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  K1 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  G1 = async (e, t, n, r) => {
    const l = Uo(r),
      i = l.publicKey || b.publicKey,
      o = l.blockHeadless || b.blockHeadless,
      u = b.storageProvider || l.storageProvider,
      s = { ...b.blockList, ...l.blockList },
      c = { ...b.limitRate, ...l.limitRate };
    if (o && ga(navigator)) return Promise.reject(ya());
    const v = K1(n);
    va(i, e, t), Q1(v);
    const h = new FormData(v);
    return wa(s, h)
      ? Promise.reject(xa())
      : (await Ca(location.pathname, c, u))
      ? Promise.reject(ka())
      : (h.append("lib_version", "4.3.3"),
        h.append("service_id", e),
        h.append("template_id", t),
        h.append("user_id", i),
        ha("/api/v1.0/email/send-form", h));
  },
  Y1 = { init: H1, send: Z1, sendForm: G1, EmailJSResponseStatus: nr },
  X1 = ee.forwardRef((e, t) => {
    const n = ee.useRef(null),
      [r, l] = ee.useState(null),
      [i, o] = ee.useState(null),
      [u, s] = ee.useState({ user_name: "", user_email: "", message: "" });
    function c(h) {
      s((m) => ({ ...m, [h.target.name]: h.target.value })), l(null);
    }
    function v(h) {
      if (
        (h.preventDefault(),
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(u.user_email))
      ) {
        l("Invalid email address");
        return;
      }
      if (u.message.trim() === "") {
        l("Message is required");
        return;
      }
      Y1.sendForm(
        "service_lv3xmqs",
        "template_wpbqykc",
        n.current,
        "rZ3O8_5PqwdF_SHnY"
      ).then(
        () => {
          l(null), o("Message sent successfully");
        },
        () => {
          l("An error occurred while sending the message");
        }
      );
    }
    return d.jsxs("section", {
      id: "contact",
      ref: t,
      className:
        "py-20 flex lg:flex-row flex-col justify-center items-center relative gap-8 md:gap-0",
      children: [
        d.jsxs("div", {
          className:
            "font-DelaGothicOne font-black md:text-7xl text-4xl flex flex-col gap-8 md:w-2/5 w-full",
          children: [
            d.jsx("h2", {
              className: " w-full",
              children: "Excited to know more?",
            }),
            d.jsx("h2", {
              className: "md:ml-40 ml-[6.9rem] w-fit",
              children: "Let's talk!",
            }),
          ],
        }),
        d.jsx("form", {
          onSubmit: v,
          ref: n,
          className: "w-full z-10",
          children: d.jsxs("div", {
            className:
              "flex flex-col justify-center items-end mx-auto gap-7 w-full font-Archivo font-semibold text-xl ",
            children: [
              d.jsxs("label", {
                htmlFor: "name",
                className: "flex flex-col md:w-2/3 w-full",
                children: [
                  "Name",
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Name",
                    onChange: c,
                    name: "user_name",
                    value: u.user_name,
                    className:
                      "w-full border-4 border-black p-2 rounded-sm drop-shadow-xxs",
                  }),
                ],
              }),
              d.jsxs("label", {
                htmlFor: "email",
                className: "flex flex-col md:w-2/3 w-full",
                children: [
                  "Email",
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Email Address",
                    onChange: c,
                    name: "user_email",
                    value: u.user_email,
                    className:
                      "w-full border-4 border-black p-2 rounded-sm drop-shadow-xxs",
                  }),
                ],
              }),
              d.jsxs("label", {
                htmlFor: "message",
                className: "flex flex-col md:w-2/3 w-full",
                children: [
                  "Message",
                  d.jsx("textarea", {
                    placeholder: "Message",
                    onChange: c,
                    name: "message",
                    value: u.message,
                    cols: 30,
                    rows: 10,
                    className:
                      "w-full border-4 border-black p-2 rounded-sm drop-shadow-xxs",
                  }),
                ],
              }),
              !r && !i
                ? d.jsx("button", {
                    className:
                      "md:w-1/4 w-1/2 bg-brand-yellow border-4 py-2 border-black rounded-sm drop-shadow-button-solid",
                    children: "Send",
                  })
                : null,
              r &&
                d.jsx("div", {
                  className:
                    "w-fit bg-red-500 border-4 py-2 px-4 border-black rounded-sm drop-shadow-button-solid cursor-not-allowed",
                  children: r,
                }),
              i &&
                d.jsx("div", {
                  className:
                    "w-fit bg-green-500 border-4 py-2 px-4 border-black rounded-sm drop-shadow-button-solid",
                  children: i,
                }),
            ],
          }),
        }),
      ],
    });
  });
function J1() {
  return d.jsxs("footer", {
    className:
      "mx-[-7%] bg-brand-yellow flex flex-col md:flex-row-reverse justify-between items-center py-8 px-10 border-t-4 border-x-4 border-black drop-shadow-6xl rounded-t-xl gap-5 ",
    children: [
      d.jsx(ma, {}),
      d.jsx("p", {
        className:
          "md:w-1/4 md:text-left text-center font-Archivo md:text-sm text-xs",
        children:
          "A developer is never late, nor is he early, he commits precisely when he means to",
      }),
    ],
  });
}
function q1() {
  const [e, t] = xn(),
    [n, r] = xn(),
    [l, i] = xn(),
    [o, u] = xn(),
    [s, c] = xn();
  return d.jsx("div", {
    className: "bg-primary-white",
    children: d.jsxs(c1, {
      scrollToHome: t,
      scrollToAbout: r,
      scrollToSkills: i,
      scrollToProjects: u,
      scrollToContact: c,
      homeIsInView: !1,
      aboutIsInView: !1,
      skillsIsInView: !1,
      projectsIsInView: !1,
      contactIsInView: !1,
      children: [
        d.jsx(f1, { ref: e }),
        d.jsx(m1, { ref: n }),
        d.jsx(_1, { ref: l }),
        d.jsx(F1, { ref: o }),
        d.jsx(X1, { ref: s }),
        d.jsx(J1, {}),
      ],
    }),
  });
}
Jl.createRoot(document.getElementById("root")).render(
  d.jsx(ge.StrictMode, { children: d.jsx(q1, {}) })
);
