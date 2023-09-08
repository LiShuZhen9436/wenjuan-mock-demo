let Mock = require('mockjs') // 引入mock

let Random = Mock.Random
module.exports =[{
    url: '/api/test',
    method: 'get',
    response() {
        return{
            errno: 0,
            data:{
              'name': Random.cname()
            }
        }
    }
}]