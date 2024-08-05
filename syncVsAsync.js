const fs= require("fs/promises")
 const fsSync= require("fs");
 

 try{
   fsSync.writeFileSync("./txtFileSync.txt","Hello Sync","utf-8")
    const data=fsSync.readFileSync("./txtFileSync.txt","utf-8")
    console.log(data)
 }catch(err){
    console.log(err)
 }


 async function readWriteAsync(){
   try{
      console.log("start----")
     await fs.writeFile("./textAsync.txt","Hello from Async text","utf-8")
     const data =  await fs.readFile("./textAsync.txt","utf-8")
     console.log(data)
     console.log("end-----")
   }catch(err){
      console.log(err)
   }
 }

 readWriteAsync()