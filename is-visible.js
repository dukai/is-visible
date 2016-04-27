if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}
define(function(require, exports, module){
    var $ = require('jquery');

    var stack = [];

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
        //判断对象是否有overflow:hidden
        //
        //
        //absolute 判断如果上一个元素在本元素中已经不可见了，即可直接返回false
        //
        if($(ele.parentNode).css('position') == 'static'){
            stack.push(ele);
        }
        //overflow:hidden;不生效,display, visibility, opacity等生效
        //一直到父对象是body或者父对象的position不为static
        //判断与position不为static的父对象的相对位置
        //
        //fixed
        //
        //判断与body的相对位置
        //
        //
        //
        //如果父对象不是body继续比较，否则返回

        return true;

    };

    module.exports = function(ele){
    
    };
});
