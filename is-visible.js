if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}
define(function(require, exports, module){
    var $ = require('jquery');

    var isVisible = function(ele){
        ele = $(ele);


        if(9 === ele[0].nodeType){
            return true;
        }


        if(ele.css('opacity') == 0 || ele.css('display') == 'none' || ele.css('visibility') == 'hidden'){
            return false;
        }

        //TODO: 比较父对象

    };

    module.exports = function(ele){
    
    };
});
