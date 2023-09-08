/**
 * 生成单个问卷信息方法
 */
let Mock = require('mockjs') // 引入mock

let Random = Mock.Random
function questionList(opt) {
    const {pageSize:len = 8, isDelete, isStar, page} = opt
    let list=[]
    for(let i=0;i<len;i++){
        list.push({_id: Random.id(),
        title: Random.ctitle(5),
        isPublished: Random.boolean(),
        isStar,
        answerCount: Random.natural(50,100),
        createdAt: Random.date(),
        isDelete
    })
    }
    return list
}
module.exports = questionList