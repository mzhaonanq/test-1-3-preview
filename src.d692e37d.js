// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
$("#picker1").picker({
  title: "请选择您的性别",
  cols: [{
    textAlign: "center",
    values: ["男", "女"]
  }],
  onClose: function onClose() {
    $('.backdrop').css('display', 'none');
  }
});
$("#input-calendar1").calendar({
  onClose: function onClose() {
    $('.backdrop').css('display', 'none');
  }
});
$("#input-calendar2").calendar({
  onClose: function onClose() {
    $('.backdrop').css('display', 'none');
  }
});
$("#picker2").picker({
  title: "请选择是否已婚",
  cols: [{
    textAlign: "center",
    values: ["是", "否"]
  }],
  onClose: function onClose() {
    $('.backdrop').css('display', 'none');
  }
});
$("#picker3").picker({
  title: "请选择您的预计到岗时间",
  cols: [{
    textAlign: "center",
    values: ["随时", "一周内", "半个月内", "一个月内", "待定"]
  }],
  onClose: function onClose() {
    $('.backdrop').css('display', 'none');
  }
});
$("#my-textarea").on('keyup', function (e) {
  $("#count")[0].innerText = e.target.value.length;
});
$('.backdrop').on('touchmove', function (event) {
  // 监听滚动事件
  event.preventDefault(); // 禁止浏览器默认行为
});
$('#input-calendar1,#input-calendar2,#picker1,#picker2,#picker3').click(function () {
  $('input, textarea').blur();
  $('.backdrop').css('display', 'block');
});
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.d692e37d.js.map