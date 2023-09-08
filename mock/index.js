let test = require('./test.js')
let question=require('./question.js')
const user=require('./user.js')
let stat = require('./stat.js')

const list=[
    ...test,
    ...question,
    ...user,
    ...stat
]

module.exports = list