
const Koa = require('koa') // 引入Koa构造函数
const static = require('koa-static')
const Router = require('koa-router'); 
const list = require('./mock/index')

const app = new Koa() //用构造函数创建对象——创建应用
const router = new Router(); // 创建路由，支持传递参数

app.use(static(__dirname+ '/public')) // 设置静态文件目录

function delayed(fn,ctx) { // 模拟网络延时
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const res=fn(ctx)
            resolve(res)
        }, 1000)
    })
}

list.forEach(item=>{
    router[item.method](item.url, async (ctx)=>{
        // ctx.body = item.response(ctx)
        const res= await delayed(item.response,ctx)
        ctx.body = res
    })
})

// router.get('/', async (ctx) => {
//     ctx.type = 'html'; 
//     ctx.body = '<h1>hello world!</h1>'; // 接口返回的数据
// })
app.use(router.routes());

// 启动服务监听本地3000端口
app.listen(3001, () => {
    console.log('应用已经启动，http://localhost:3001');
})