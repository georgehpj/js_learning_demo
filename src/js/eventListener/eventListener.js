/**
 * Created by 16030117 on 2016/4/29.
 */
function EventTarget(){
    this.handlers = {};
}

EventTarget.prototype = {
    constructor : EventTarget,
    addHandler : function(type, handler){
        if(typeof this.handlers[type] == "undefined"){
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire : function(event){
        if(!event.target){
            event.target = this;
        }
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type];
            handlers.forEach(function(handler){
                handler(event);
            });
        }
    },
    removeHandler : function(type, handler){
        if(this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for(var i=0; i<handlers.length; i++){
                if(handlers[i] === handler){
                    handlers.splice(i--,1);
                }
            }
        }
    }
}
