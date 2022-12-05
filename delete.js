const dbConnect = require('./mongodb');

const deleteData = async() => {
    const data = await dbConnect();
    const result = await data.deleteMany({name:'note pro 5'})
    console.log(result);
    if(result.acknowledged) {
        console.log('delete data successfully')
    }
 }
deleteData();