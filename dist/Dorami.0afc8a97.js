// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3HMo3":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "2151f5c5991674bb7fc81bec0afc8a97";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5OBaY":[function(require,module,exports) {
var _cssJs = require('./css.js');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _cssJsDefault = _parcelHelpers.interopDefault(_cssJs);
const player = {
  id: undefined,
  n: 1,
  time: 40,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: () => {
    player.ui.demo.innerText = _cssJsDefault.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _cssJsDefault.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': onclick = 'pause',
    '#btnPlay': onclick = 'play',
    '#btnSlow': onclick = 'slow',
    '#btnNormal': onclick = 'normal',
    '#btnFast': onclick = 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
    document.querySelector('#btnPause').onclick = player.pause;
    document.querySelector('#btnPlay').onclick = player.play;
    document.querySelector('#btnSlow').onclick = player.slow;
    document.querySelector('#btnNormal').onclick = player.normal;
    document.querySelector('#btnFast').onclick = player.fast;
  },
  run: () => {
    player.n += 1;
    if (player.n > _cssJsDefault.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _cssJsDefault.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _cssJsDefault.default.substring(0, player.n);
    player.ui.demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 40;
    player.play();
  }
};
player.init();

},{"./css.js":"60uKb","@parcel/transformer-js/lib/esmodule-helpers.js":"3GKdu"}],"60uKb":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const string = `
/*大家好~
* 新人苏靖惜为大家带来新作品啦
* 这次给大家展示哆啦美
*她是哆啦A梦的小妹妹哦
*首先
*给哆啦美加上粉嫩的背景
*/
.background * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.background *::after {
  box-sizing: border-box;
}

.background *::before {
  box-sizing: border-box;
}
.background {
  background-color: #ffc0cb;
  min-height: 60vh;
  position: relative;
}
/*哆啦美的头上有一个红色蝴蝶结*/
.ribbon {
  border: 5px solid black;
  position: absolute;
  display: block;
  width: 120px;
  height: 150px;
  background-color: red;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  top: -10px;
  left: 50%;
  margin-left: -60px;
}
#ribbon-right {
  transform: rotate(15deg) translateX(80px);
}
#ribbon-left {
  transform: rotate(-15deg) translateX(-80px);
}
/*和哥哥不一样的是，哆啦美是黄色的*/
#head {
  border: 5px solid black;
  border-radius: 50% 50% 45% 45%;
  width: 310px;
  height: 300px;
  position: absolute;
  background-color: #f7f977;
  left: 50%;
  top: 60px;
  margin-left: -155px;
}
#head-white {
  border: 5px solid black;
  border-radius: 50% 50% 45% 45%;
  width: 240px;
  height: 220px;
  position: absolute;
  background-color: white;
  left: 50%;
  top: 120px;
  margin-left: -120px;
}
/*给哆啦美画上漂亮的眼睛*/
.eyebrow {
  position: absolute;
  width: 70px;
  height: 60px;
  border: 4px solid #000;
  border-color: black transparent transparent transparent;
  border-radius: 90%/100px 100px 0 0;
  left: 50%;
  top: 142px;
  margin-left: -35px;
}
#eyebrow-right {
  transform: rotate(10deg) translateX(60px);
}
#eyebrow-left {
  transform: rotate(-10deg) translateX(-60px);
}
.eyelash {
  position: absolute;
  border-left: 3.5px solid black;
  height: 16px;
  left: 50%;
}
#eyelash-left1 {
  top: 174px;
  transform: rotate(-33deg) translateX(-65px) translateY(-43px);
  z-index: 100;
}
#eyelash-left2 {
  top: 169px;
  transform: translateX(-58px);
  z-index: 100;
}
#eyelash-left3 {
  top: 174px;
  transform: rotate(33deg) translateX(-30px) translateY(20px);
  z-index: 100;
}
#eyelash-right1 {
  top: 174px;
  transform: rotate(-33deg) translateX(30px) translateY(20px);
  z-index: 100;
}
#eyelash-right2 {
  top: 169px;
  transform: translateX(56px);
  z-index: 100;
}
#eyelash-right3 {
  top: 174px;
  transform: rotate(33deg) translateX(65px) translateY(-43px);
  z-index: 100;
}
.eye {
  position: absolute;
  background-color: transparent;
  border: 4px solid black;
  height: 65px;
  width: 60px;
  border-radius: 50%;
  left: 50%;
  top: 182px;
  margin-left: -30px;
  z-index: 10;
}
#eye-right {
  transform: translateX(58px);
}
#eye-left {
  transform: translateX(-58px);
}
.eye-pupil {
  position: absolute;
  background-color: black;
  height: 42px;
  width: 40px;
  border-radius: 50%;
  left: 50%;
  top: 192px;
  margin-left: -20px;
}
#eye-pupil-right {
  transform: translateX(57px);
}
#eye-pupil-left {
  transform: translateX(-57px);
}
.eye-white {
  position: absolute;
  background-color: white;
  width: 14px;
  height: 16px;
  left: 50%;
  top: 203px;
  margin-left: -8px;
  border-radius: 50%;
}
#eye-white-left {
  transform: translateX(57px);
}
#eye-white-right {
  transform: translateX(-57px);
}
/*哆啦美的眼睛里有星星哦*/
.eye-start {
  position: absolute;
  background-color: white;
  width: 11px;
  height: 11px;
  top: 203px;
  margin-left: -8px;
  left: 50%;
}
#eye-start-left {
  transform: rotate(45deg) translateX(-50px) translateY(55px);
}
#eye-start-right {
  transform: rotate(45deg) translateX(30px) translateY(-28px);
}
/*接下来给哆啦美画上鼻子和粉扑扑的脸颊*/
#nose {
  position: absolute;
  border-radius: 50%;
  background-color: pink;
  height: 25px;
  width: 40px;
  border: solid 4px black;
  top: 246px;
  left: 50%;
  margin-left: -20px;
}
#nose-white {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  height: 12px;
  width: 12px;
  top: 250px;
  left: 49.8%;
}
#nose-top {
  position: absolute;
  height: 20px;
  width: 40px;
  border-radius: 50%;
  border: solid 2px black;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  top: 236px;
  left: 50%;
  margin-left: -20px;
}
.blush {
  position: absolute;
  background-color: pink;
  border-radius: 50%;
  height: 34px;
  width: 34px;
  left: 50%;
  margin-left: -18px;
  top: 240px;
}
#blush-left {
  transform: translateX(-90px);
}
#blush-right {
  transform: translateX(90px);
}
/*哆啦美很爱笑哦*/
#mouth {
  position: absolute;
  height: 15px;
  width: 60px;
  top: 285px;
  left: 50%;
  margin-left: -30px;
  border-radius: 0 0 80px 80px;
  border: solid 4px #000000;
  border-top: none;
}
/*最后，哆啦美和哥哥一样也有小铃铛哦*/
#collar {
  position: absolute;
  height: 35px;
  width: 200px;
  top: 325px;
  left: 50%;
  margin-left: -100px;
  background-color: #3399ff;
  border-radius: 25% 25% 25% 25%;
  border: 5px solid black;
}
.bell {
  position: absolute;
  background-color: yellow;
  height: 60px;
  width: 60px;
  border: solid black 5px;
  border-radius: 50%;
  top: 330px;
  left: 50%;
  margin-left: -30px;
}
.bell .bell-front {
  position: absolute;
  background-color: yellow;
  height: 16px;
  width: 60px;
  border: solid black 5px;
  border-radius: 30%;
  top: 34%;
  left: 50%;
  margin-left: -30px;
}
.bell .bell-front-hole {
  position: absolute;
  background-color: black;
  height: 20px;
  width: 20px;
  border: solid black 5px;
  border-radius: 50%;
  top: 68%;
  left: 50%;
  margin-left: -10px;
}
/*加点动画吧*/
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.bell:hover {
  transform-origin: center top;
  animation: wave 0.2s infinite;
}
/*把鼠标放在铃铛上可以看到不一样的效果哦*/
`;
exports.default = string;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3GKdu"}],"3GKdu":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["3HMo3","5OBaY"], "5OBaY", "parcelRequire427e")

//# sourceMappingURL=Dorami.0afc8a97.js.map
