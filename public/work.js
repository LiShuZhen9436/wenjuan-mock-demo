importScripts('./ceshi.js') // worker 线程中利用 importScripts() 方法加载我们需要的js文件，而且，通过此方法加载的js文件不受同源策略约束！

self.addEventListener('message', function (e) {
    self.close() // 在work中关闭work进程
    console.log("监听主线程发来的消息：", e.data) // hello Word
    // self.postMessage({a:1, b: 8})
    setTimeout(() => {
        console.log('setTimeout run');
        postMessage('Greeting from SetTimeout');
    });

    Promise.resolve().then(() => {
        console.log('Promise run');
        postMessage('Greeting from Promise');
    })

    for (let i = 0; i < 1001; i++) {
        if (i === 1000) {
            console.log('Loop run');
            postMessage('Greeting from Loop');
        }
    }
})
