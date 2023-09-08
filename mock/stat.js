/**
 * Mock生成答卷信息
 */
let Mock = require('mockjs') // 引入mock
let Random = Mock.Random
let getStatList = require('./getStatList')

const statList = [{
    url: '/api/stat/:questionId',
    method: 'get',
    response() {
        return{
            errno:0, 
            data:{
                total:100,
                list:getStatList()
            }
        }
    }
}, {
    url: '/api/stat/:questionId/:componentId',
    method: 'get',
    response() {
        return{
            errno:0, 
            data:{
                stat:[{
                    name:'选项1', count: 20
                },{
                    name:'选项2', count: 20
                },{
                    name:'选项3', count: 30
                }]
            }
        }
    }
}]
module.exports=statList