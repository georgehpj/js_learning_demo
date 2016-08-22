/**
 * Created by 16030117 on 2016/8/15.
 */
function myPromise(fn){
    const missions = [];
    var value = null;
    var state = 'pending';
    var nextResolve = null;
//执行传入的方法
    fn(resolve);

//当传入的方法中调用resolve(value)时，异步执行mission
    function resolve(_return_value){
        value = _return_value;
        state = 'fulfilled';
        setTimeout(()=>{
            missions.forEach(mission=>{
                handle(mission);
            })
        }, 0);
    }

//执行then方法时，将传入的方法加入missions，等待resolve触发。
    this.then = function(mission){
        var fn = function(resolve){
            nextResolve = resolve;
            if(state === 'pending'){
                missions.push(mission)
            }else{
                handle(mission);
            }
        }

        return new myPromise(fn);
    }

    function handle(mission){
        const result = mission(value);
        if(result && (typeof result == 'object' || typeof result == 'function')){
            if(result.then && typeof result.then == 'function'){
                result.then(nextResolve);
            }
        }else{
            nextResolve(result);
        }
    }
}

function wash(resolve){
    console.log('开始洗衣服...');
    setTimeout(()=>{
        console.log('洗完了！');
        resolve('一堆洗干净的衣服');
    },3000);
}

function hang(clothes){
    console.log('开始晾衣服...');
    return new myPromise(resolve=>{
        setTimeout(()=>{
            console.log(clothes+'晾完了！');
            resolve("一堆晾好的衣服");
        },2000)
    });
}

function dry(clothes) {
    console.log('等衣服干...');
    return new myPromise(resolve=>{
        setTimeout(()=>{
            console.log(clothes + '晾干了!');
            resolve("一堆晾干了的衣服");
        },2000)
    });
}

function pickup(clothes){
    console.log('开始收衣服...');
    return new myPromise(resolve=>{
        setTimeout(()=>{
            console.log(clothes+'收完了!');
            resolve("一堆收好了的衣服");
        },2000)
    });
}

var promise = new myPromise(wash);

setTimeout(()=>{
    promise.then(hang).then(dry).then(pickup);
}, 1000)