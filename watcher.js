const fs = require('fs');
const filePath = './watchDir';



const addChanges = (data) => {
    console.log('data added:');
    fs.writeFileSync(`./${filePath}/watchText.txt`, data,"utf-8");
  }
  

fs.watch(filePath, (eventType, filename) => {
    console.log(eventType,"event type");
    
    console.log(filename,"filename");
    })

    setTimeout(() => { addChanges("new changes"); }, 1000);