define(function(require, exports, module){
    var tools = require('tools');
    var $ = require('jquery');
    var isVisible = require('./is-visible');
    
    var list = [];

    setInterval(function(){
        for(var i = 0; i < list.length; i++){
            list[i].check();
        }
    }, 50);

    var VisibleElement = function(options){
        this._initVisibleElement(options);
    };

    VisibleElement.prototype = {
        _initVisibleElement: function(options){
            tools.EventEmitter.call(this);
            this.options = tools.mix({
                element: null
            }, options);
            list.push(this);

            this.showStatus = false;
        },

        check: function(){
            if(isVisible(this.options.element)){
                if(this.showStatus === false){
                    this.emit('show');
                    this.showStatus = true;
                }
            }else{
                this.showStatus = false;
            }
        },

        stopTrack: function(){
            var index = tools.indexOf(list, this);
            if(index >= 0){
                list.splice(index, 1);
            }
        }
    };

    tools.extend(VisibleElement, tools.EventEmitter);

    module.exports = VisibleElement;
});
