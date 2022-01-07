const fs = require('fs')
let finalWord = ''
let foreWord = ''
try {
    finalWord = fs.readFileSync('finalword.txt','utf8')
}
catch(err){
    console.log(err,"could not read finalword")
}
try {
     foreWord = fs.readFileSync('foreword.txt','utf8')
}
catch(err){
    console.log(err,"could not read foreword")
}


export {finalWord,foreWord}