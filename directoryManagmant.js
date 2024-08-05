const fs=require("fs/promises");

const dirName = "testDir";
const initialFileName = "testFile.txt";
const renamedFileName = "renamedFile.txt";
const fileContent = "Test file content.";
async function testDir(){
    try{
      await fs.mkdir(dirName,{recursive:true})
      console.log("created successfully")
      await fs.writeFile(`./${dirName}/${initialFileName}`,fileContent,"utf-8")
       await fs.rename(`./${dirName}/${initialFileName}`,`./${dirName}/${renamedFileName}`)
       console.log("renamed successfully")
        // await fs.unlink(`./${dirName}/${renamedFileName}`)
        // console.log("unlink successfully")
        // await fs.rmdir(dirName)
        // console.log("deleted directory")
    }catch(err){
        console.log(err)
    }
}
testDir()