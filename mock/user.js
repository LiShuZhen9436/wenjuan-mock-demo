/**
 * Mock生成用户信息
 */
let Mock = require('mockjs') // 引入mock
let Random = Mock.Random

const userList=[
{
    // 获取用户信息
    url: '/api/userInfo',
    method: 'get',
    response(){
        return{
            'errno':0, 
            'data':{
                'username': Random.title(),
                'nickname': Random.cname(),
            }
        }
    }
},{
    url:'/api/user/register',
    method: 'post',
    response(){
        return{
            'errno':0,
        }
    }
},{
    url:'/api/user/login',
    method: 'post',
    response(){
        return{
            'errno':0,
            'data':{
                'token': Random.word(25)
            }
        }
    }
}]

module.exports=userList