const fs= require("fs/promises");


const txtData="Hello, World!"
const newTxt="This is Node.js FS module";



async function creatDirectory(){
    try{
        
         
        await fs.writeFile("./example.txt",txtData,"utf-8")
         const content = await fs.readFile("./example.txt","utf-8")
         console.log("content:",content)
        
        
    }catch(err){
        console.log(err)
    }
}

// creatDirectory()

async function appendNewTxt(txt){
    try{
       await fs.appendFile("./example.txt",txt,"utf8")
      const changedTxt= await fs.readFile("./example.txt","utf8")
      console.log("changed txt:",changedTxt)
    }catch(err){
        console.log(err)
    }
}

// appendNewTxt(newTxt)      



async function main() {
    await creatDirectory();
    await appendNewTxt(newTxt);
}

main();