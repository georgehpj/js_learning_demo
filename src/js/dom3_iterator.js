/**
 * Created by 16030117 on 2016/4/15.
 */
var resultDiv = document.getElementById("result");
var showDivStr = '';

var filter = function(node){
    return node.tagName.toLowerCase() == 'label'?
        NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
};

var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT,filter,false);
var node = iterator.nextNode();
while(node != null){
    showDivStr += node.tagName+":"+node.innerText+"<br>";
    node = iterator.nextNode();
}
resultDiv.innerHTML=showDivStr;

var showDivStr = '';

var walkerFilter = function(node) {
    if(node.id == "needSkip"){
        alert("skip:"+node.id);
        return NodeFilter.FILTER_SKIP;
    }else if(node.id == "needReject"){
        alert("reject:"+node.id);
        return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
};
var walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT,walkerFilter,false);
var walkerNode = walker.nextNode();
while(walkerNode != null){
    showDivStr += walkerNode.tagName+":"+walkerNode.innerText+"<br>";
    walkerNode = walker.nextNode();
}
resultDiv.innerHTML=showDivStr;



