/**
 * 生成答卷
 */

let Mock = require('mockjs') // 引入mock
let Random = Mock.Random
const getComponentList=require('./getComponentList')

module.exports=function getStatList(len=10) {
    console.log('111')
    const res=[]
    // 循环生成用户的答卷信息
    for(let i=0;i<len;i++) {
        let stat = {
            _id:Random.id()
        }
        getComponentList.forEach(c => {
            const {fe_id, type, props} =c
            switch(type) {
                case 'questionInput':
                    stat[fe_id]=Random.ctitle() // 组件ID：组件答案
                    break
                case 'questionParagraph':
                    stat[fe_id] = Random.ctitle()
                    break
                case 'questionRadio':
                    stat[fe_id] = props.options[0].text // 组件ID：置为单选按钮选项中的第一个选项
                    break
                case 'questionCheckbox':
                    stat[fe_id] = `${props.options[0].text},${props.options[1].text}` // 组件ID：置为多选按钮选项中的第一个选项和第二个用，号分割
                    break
            }
        });
        res.push(stat)
    }

    return res
}