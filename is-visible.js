if (typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}
define(function(require, exports, module){
    var $ = require('jquery');

    // pos = {x, y, width, height}
    // 判断两个矩形
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
    //获取对象的坐标以及宽高
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
            return !!isOverlap(pos ? pos: getInfo($ele), 
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
    };

    window.iv = module.exports = function(ele){

        return isVisible($(ele));
    
    };
});
