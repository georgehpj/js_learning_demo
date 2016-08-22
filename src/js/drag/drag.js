/**
 * Created by 16030117 on 2016/4/29.
 */
var DragAndDrop = function(){
    var dragDrop = new EventTarget();

    var dragging = false;diffX = 0+"px"; diffY = 0+"px";

    function handler(event){

        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        switch (event.type) {
            case "mousedown" :
                if(target.classList.contains("draggable")){
                    dragDrop.fire({type:"dragStart",target:target,x:event.clientX, y:event.clientY});
                    dragging = true;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                }
                break;
            case "mousemove" :
                if(dragging){
                    dragDrop.fire({type:"drag",target:target,x:event.clientX, y:event.clientY});
                    target.style.left = event.clientX - diffX + "px";
                    target.style.top = event.clientY - diffY + "px";
                }
                break;
            case "mouseup" :
                dragDrop.fire({type:"dragEnd",target:target,x:event.clientX, y:event.clientY});
                dragging = false;
                break;
        }
    }

    dragDrop.enable = function(){
        EventUtil.addEventListener(document, "mousedown", handler);
        EventUtil.addEventListener(document, "mousemove", handler);
        EventUtil.addEventListener(document, "mouseup", handler);
    };
    dragDrop.disable = function(){
        EventUtil.removeEventListener(document, "mousedown", handler);
        EventUtil.removeEventListener(document, "mousemove", handler);
        EventUtil.removeEventListener(document, "mouseup", handler);
    };
    return dragDrop;
}();

DragAndDrop.enable();

DragAndDrop.addHandler("drag", dragHandler);
function dragHandler(event){
    var status = document.getElementById("status");
    status.innerHTML = "dragging... x:"+event.x + " y:"+event.y;
}