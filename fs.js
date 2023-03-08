const fs = require('fs')

let fileContent = fs.readFileSync('f1.txt')
console.log('data of file 1->  ' + fileContent)

fs.writeFileSync('f2.txt', 'this is file 2')

fs.appendFileSync('f3.txt', 'asdfg')
fs.unlinkSync('f2.txt')