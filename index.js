const fs = require("fs");

const path = require("path");
const dirPath = path.join(__dirname, "files");
// create file

// for ( i = 0; i <5; i++)
//  {
//     fs.writeFileSync(dirPath +" /hello" +i + ".txt","hello world")

// }

// read file

fs.readdir(dirPath, (err, files) => {
  console.warn(files);
  files.forEach((item) => {
    console.log(item);
  });
});
