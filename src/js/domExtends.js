/**
 * Created by 16030117 on 2016/4/15.
 */
var label = document.querySelector("#secondDIV .label");
label.innerText = "this is the seconde label";

//alert(label.className);
var classes = label.classList;
classes.remove("c1");
classes.toggle("addCss");
//alert(label.className);

alert(label.dataset.name);
label.dataset.age = 18;
