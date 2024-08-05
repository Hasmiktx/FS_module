const fs=require("fs/promises")
 const newUser={
    name: "Bob",
    gae: 18
 }
async function readAndUpdate(user){
    try{
   const data= await fs.readFile("data.json","utf-8");
   const users= JSON.parse(data)
    console.log("Users:", users)
    users.push(user)
    await fs.writeFile("data.json",JSON.stringify(users,null,2),"utf-8")
    console.log("updated data")
    }catch(err){
        console.log(err)
    }

}

readAndUpdate(newUser)