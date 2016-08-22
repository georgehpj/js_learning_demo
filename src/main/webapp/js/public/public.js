/**
 * Created by 16030117 on 2016/4/29.
 */
function loadjs(src){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
}