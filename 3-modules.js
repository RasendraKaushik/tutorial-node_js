//CommonJS - every file is module(by default)
//Modules - Encapsulated Code (only share minimum)

const secret = "SUPER SECRET"
const x = "john"
const y = "peter"
const data = require('./4-alternative')
console.log(data)
const sayhii = (name) =>{
    console.log(`Hello there ${name}`)
}

require('./5-func')
// sayhii('susan')
// sayhii(x)
// sayhii(y)
// sayhii(secret)

//the lecture showed how to use export keyword to export variables,function and access them in different files
