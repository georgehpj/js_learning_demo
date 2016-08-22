/**
 * Created by 16030117 on 2016/4/22.
 */
var button = $("#button");


button.click(function(){
    //alert(document.documentElement.scrollTop||document.body.scrollTop);
    //alert($(document.documentElement).scrollTop()||$(document.body).scrollTop());
    if(document.documentElement.scrollTop){
        $(document.documentElement).animate({scrollTop: 0}, 400);
    }else{
        $(document.body).animate({scrollTop: 0}, 400);
    }

})