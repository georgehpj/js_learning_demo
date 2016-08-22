/**
 * Created by 16030117 on 2016/8/12.
 */
var Promise = require('./promise');
var promise = new Promise(wash);
promise.then(hang).then(dry).then(pickup);

function wash(resolve){
    console.log('开始洗衣服...');
    setTimeout(()=>{
        console.log('洗完了！');
        resolve('一堆洗干净的衣服');
    }, 3000);
}

function hang(clothes){
    console.log('开始晾衣服...');
    setTimeout(()=>{
        console.log(clothes+'晾完了！');
    },3000);
    return ("一堆晾好的衣服");
}

function dry(clothes){
    console.log('等衣服干...');
    setTimeout(()=>{
        console.log(clothes+'晾干了!');
    },3000);
    return ("一堆晾干了的衣服");
}

function pickup(clothes){
    console.log('开始收衣服...');
    setTimeout(()=>{
        console.log(clothes+'收完了!');
    },3000)
}