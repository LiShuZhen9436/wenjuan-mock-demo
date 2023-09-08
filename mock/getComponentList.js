let Mock = require('mockjs') // 引入mock
let Random = Mock.Random

const componentList=
     [{
        // fe_id: Random.id(),
        fe_id: 'c1', // 为了兼容统计 写成固定值
        type: 'QuestionInfo', // 组件的类型 要前后端统一 
        title:'问卷标题', // 输入框类型名称
        isHidden:false,
        isLocked:false,
        props:{ // 组件的属性
            title: '问卷调查',
            desc: '描述...',
        }

    },{
        fe_id: 'c2',
        type: 'questionTitle',
        title:'标题',
        isHidden:false,
        isLocked:false,
        props:{
            text: '信息调研',
            lervel: 1,
            isCenter: false
        }

    },{
        fe_id: 'c3',
        type: 'questionInput', // 组件的类型 要前后端统一
        title:'输入框', // 输入框类型名称
        isHidden:false,
        isLocked:false,
        props:{ // 组件的属性
            title: '你的姓名',
            placeholder: '请输入姓名...'
        }

    },{
        fe_id: 'c4',
        type: 'questionParagraph', // 组件的类型 要前后端统一
        title:'段落', // 输入框类型名称
        isHidden:false,
        isLocked:false,
        props:{ // 组件的属性
            text: '段落。。。',
            isCenter: false
        }

    },{
        fe_id: 'c5',
        type: 'questionRadio', // 组件的类型 要前后端统一
        title:'单选标题', // 输入框类型名称
        isHidden:false,
        isLocked:false,
        props:{ // 组件的属性
            title: '单选标题',
            value: '', // 默认选中值
            isVertical: true, // 是否纵向显示
            options: [
              {
                value: 'item1',
                text: '选项1',
              },
              {
                value: 'item2',
                text: '选项2',
              },
              {
                value: 'item3',
                text: '选项3',
              },
            ],
        }

    },{
        fe_id: 'c6',
        type: 'questionCheckbox', // 组件的类型 要前后端统一
        title:'多选标题', // 输入框类型名称
        isHidden:false,
        isLocked:false,
        props:{ // 组件的属性
            title: '多选标题',
            value: '', // 默认选中值
            isVertical: true, // 是否纵向显示
            options: [
              {
                value: 'item1',
                text: '选项1',
                isChecked: false,
              },
              {
                value: 'item2',
                text: '选项2',
                isChecked: false,
              },
              {
                value: 'item3',
                text: '选项3',
                isChecked: false,
              },
            ],
        }

    }]


module.exports = componentList;