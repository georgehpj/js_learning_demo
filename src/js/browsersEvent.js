/**
 * Created by 16030117 on 2016/4/18.
 */
var EventUtil = {
    addEventListener: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },

    removeEventListener: function (element, type, handle) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handle, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handle);
        } else {
            element['on' + type] = handle;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget : function(event){
        return event.target || event.srcElement;
    },

    preventDefault :function(event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },

    stopPropagation : function(event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
};




