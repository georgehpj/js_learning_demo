/**
 * Created by 16030117 on 2016/8/11.
 */
function myPromise(fn){
    const missions = [];
    var state = 'pending';
    var value = null;

    fn(resolve);

    function resolve(_return_value) {
        if(_return_value && (typeof _return_value === 'object' || typeof _return_value === 'function')){
            const then = _return_value.then;
            if(typeof then === 'function'){
                _return_value.then(resolve);
                return;
            }
        }
        state = 'fulfilled';
        value = _return_value;
        setTimeout(()=>{
            missions.forEach(mission=>{
                handle(mission);
            })
        },0);
    }

    function handle(mission){
        if(state == 'pending'){
            missions.push(mission);
            return;
        }
        const ret = mission.mission(value);
        mission.nextResolve(ret);
    }

    this.then = function(mission){
        return new myPromise(nextResolve => {
            handle({mission, nextResolve});
        });
    };
}

function wash(resolve){
    console.log('开始洗衣服...');
    setTimeout(()=>{
        console.log('洗完了，去晾干!');
        resolve('一堆洗干净的衣服');
    }, 3000)
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
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(clothes+'晾干了!');
            resolve('一堆晾干了的衣服');
        },3000)
    });
}

function pickup(clothes){
    console.log('开始收衣服...');
    setTimeout(()=>{
        console.log(clothes+'收完了!');
    },3000)
}

module.exports = myPromise;


/*

var promise1 = new myPromise(wash);
 promise1.then(hang).then(dry).then(pickup);*/
