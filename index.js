if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}

define(function(require, exports, module){
    exports.isVisible = require('./is-visible');
    exports.VisibleElement = require('./visible-element');
});
