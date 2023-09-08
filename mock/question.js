/**
 * Mock生成问卷信息
 */
let Mock = require('mockjs') // 引入mock
let questionList = require('./questionsList')
const componentList = require('./getComponentList')

let Random = Mock.Random
const qiestionsList=[
    // 获取单个问卷
    {
    url: '/api/question/:id',
    method: 'get',
    response() {
        return{
            'errno':0,
            'data':{
                'id':Random.id(),
                'title':Random.ctitle(5),
                'desc':Random.ctitle(25),
                'js': '',
                'css': '',
                'isPublished': true,
                'componentList': componentList
            },
            'msg': '成功'
        }
    }
}, 
// 创建问卷
{
    url: '/api/question',
    method: 'post',
    response() {
        return{
            'errno':0,
            'data':{
                'id':Random.id(),
            }
        }
    }
}, 
// 获取问卷列表
{
    url: '/api/question',
    method: 'get',
    response(ctx) {
        const {originalUrl, query} = ctx
        const isDelete = originalUrl.includes('isDelete=true')
        const isStar = originalUrl.includes('isStar=true')
        const {page, pageSize} = query // 服务端获取传递的参数
        return{
            'errno':0,
            'data':{
                'list': questionList({isDelete, isStar, page, pageSize}),
                'total':100
            }
        }
    }
},

// 标星/删除/恢复
{
    url: '/api/question/:id',
    method: 'patch',
    response() {
        return{
            'errno':0,
        }
    }
},
// 复制
{
    url: '/api/question/copy/:id',
    method: 'post',
    response() {
        return{
            'errno':0,
            'data':{
                id: Random.id()
            }
        }
    }
},
// 彻底删除
{
    url: '/api/question/delete',
    method: 'delete',
    response(){
        return{
            'errno':0, 
        }
    }
}
]

module.exports = qiestionsList;