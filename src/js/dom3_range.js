/**
 * Created by 16030117 on 2016/4/15.
 */
var range = document.createRange();
var needMoveNode = document.getElementById("needMove");
range.selectNode(needMoveNode);

//range.deleteContents();
var fragment = range.extractContents();
document.getElementById("needReject").parentNode.insertBefore(fragment, document.getElementById("needReject"));