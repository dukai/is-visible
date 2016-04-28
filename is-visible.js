if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}
define(function(require, exports, module){
    //var $ = require('jquery');

    var stack = [];

    // pos = {x, y, width, height}
    var isOverlap = function(pos1, pos2){
        if( pos1.x + pos1.width > pos2.x && pos2.x + pos2.width > pos1.x && 
            pos1.y + pos1.height > pos2.y && pos2.y + pos2.height > pos1.y){

            var npos = {};
            npos.x = Math.max(pos1.x, pos2.x);
            npos.y = Math.max(pos1.y, pos2.y);


            var x = Math.min(pos1.x + pos1.width, pos2.x + pos2.width);
            var y = Math.min(pos1.y + pos1.height, pos2.y + pos2.height);

            npos.width = x - npos.x;
            npos.height = y = npos.y;

            return npos;
            
        }else{
            return false;
        }
    }

    var getInfo = function($ele){
        var offset = $ele.offset();
        return {
            x: offset.left, y: offset.top, width: $ele.width(), height: $ele.height()
        }
    }
    
    var isVisible = function(ele, pos){
        var $ele = $(ele);
        ele = $ele.get(0);

        if(9 === $ele[0].nodeType){
            return true;
        }


        if($ele.css('opacity') == 0 || $ele.css('display') == 'none' || $ele.css('visibility') == 'hidden'){
            return false;
        }

        //当position是fixed的时候不受父对象影响，直接返回结果
        var elePosition = $ele.css('position');
        if(elePosition == 'fixed'){
            return isOverlap(pos ? pos: getInfo($ele), 
                {x: 0, y: $(window).scrollTop(), width:$(window).width(), height: $(window).height()});
        }

        if(ele.nodeName != 'BODY'){
            switch(elePosition){
                case 'static':
                case 'relative':
                    var parentOverflow = $ele.parent().css('overflow');
                    if('hidden|scroll|auto'.indexOf(parentOverflow) >= 0){
                        var p = null;
                        if(p = isOverlap(pos ? pos: getInfo($ele), getInfo($ele.parent()))){
                            return isVisible($ele.parent(), p);
                        }else{
                            return false;
                        }
                    }else{
                        return isVisible($ele.parent(), getInfo($ele));
                    }
                    break;
                case 'absolute':
                    //TODO: 判断当前位置与offsetParent比较
                    //如果不可见直接返回false，如果可见递归offsetParent
                    //overflow hidden 不能遮挡，但是opacity和visibility能够

                    var parentOverflow = $ele.offsetParent().css('overflow');
                    if('hidden|scroll|auto'.indexOf(parentOverflow) >= 0){
                        var p = null;
                        if(p = isOverlap(pos ? pos: getInfo($ele), getInfo($ele.offsetParent()))){
                            return isVisible($ele.offsetParent(), p);
                        }else{
                            return false;
                        }
                    }else{
                        return isVisible($ele.offsetParent(), getInfo($ele));
                    }
                    break;
                default:
                    break;
            }
        }

        return true;

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


    };

    window.iv = module.exports = function(ele){

        return isVisible($(ele));
    
    };
});
