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

        //TODO: 比较父对象 如果不是body
        //
        //判断在父对象中的位置信息，确定是否可见
        //
        //判断position类型
        //
        //static
        //float or normal
        //
        //
        //
        //relative
        //
        //
        //
        //absolut
        //
        //
        //
        //fixed
        //
        //
        //
        //
        //如果父对象不是body继续比较，否则返回

        return true;

    };

    module.exports = function(ele){
    
    };
});
