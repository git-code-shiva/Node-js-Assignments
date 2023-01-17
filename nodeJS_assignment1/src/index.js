const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data=await fs.writeFile("testfile.txt","This is a test file",(err)=>{
        console.log(err);
    });
}
myFileWriter();

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile("testfile.txt", "utf-8")
	console.log(data);
}
myFileReader();


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data = await fs.appendFile("testfile.txt", " i was Updated",(err)=>{
		console.log(err);
	})
}
myFileUpdater();

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.unlink("testfile.txt",(err)=>{
		console.log(err);
	})
}
myFileDeleter();



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}