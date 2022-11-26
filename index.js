const fs = require("fs");

const path = require("path");
const dirPath =path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
 // create file
//  fs.writeFileSync(filePath,'this is demo');

//Read file
// fs.readFile(filePath,'utf-8',(err,item)=>{
// console.log(item) 
// })
// Without Utf-8 parameter file read show like Buffer <Buffer 74 68 69 73 20 69 73 20 64 65 6d 6f>

// Update file 
// fs.appendFile(filePath,'and file ins apple.txt',(err) => {
//     if(!err) {
//         console.log('file is updated successfully')
//     }
// })

// rename

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) => {
//     if(!err) {
//         console.log('file name is updated successfully')
//     }
// })

// delete file

fs.unlinkSync(`${dirPath}/fruit.txt`)