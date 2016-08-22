/**
 * Created by 16030117 on 2016/4/29.
 */
/*
function handlerMessage(event){
    alert("Messgage received : " + event.message);
}
function handlerMessage2(event){
    alert("Next Messgage received : " + event.message);
}

var target = new EventTarget();
var event = {
    type: "message",
    message : "hello world!"
};
var event2 = {
    type: "message",
    message : "hello world3!"
};

target.addHandler("message", handlerMessage);
target.addHandler("message", handlerMessage2);

target.fire(event);

target.removeHandler("message", handlerMessage);
target.removeHandler("message", handlerMessage2);

target.fire(event);*/


function Person(name){
    EventTarget.call(this);
    this.name = name;
}

inheritPrototype(Person, EventTarget);

function inheritPrototype(SubObj, SuperObj){
    var prototype = SuperObj.prototype;
    prototype.constructor = SubObj;
    SubObj.prototype = prototype;
}

Person.prototype.say = function(message){
    var event = {
        type : "message",
        message : message
    };
    this.fire(event);
}

Person.prototype.go = function(distence){
    var event = {
        type : "walk",
        distence : distence
    };
    this.fire(event);
}

function messageHandler(event){
    alert(event.target.name + " is saying : " + event.message);
}

function walkHandler(event){
    alert(event.target.name + " is walking : " + event.distence);
}

var person = new Person("George");
person.addHandler("message", messageHandler);
person.say("thank you!");

person.addHandler("walk", walkHandler);
person.go("1000km");