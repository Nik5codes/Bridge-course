const { error } = require('console')
var fs = require('fs')

// fs.readFile('welcome.txt','utf-8',(error,data)=>{
//     if(error){
//         console.error('Error reading file',error);
        
//     }
//     console.log('data is: ',data);
    
// })

// const neew = 'heheehehehehehehehehehehe';
// fs.unlink('welcome.txt',(error,data)=>{
//     if(error){
//         console.error('Error reading file',error);
        
//     }
//     console.log('data is: ',data);
    
// })

// var data = fs.readFileSync('welcome.txt')
// console.log(data);

// fs.readdir('D:/MCA NOTES/2nd sem',(error,data)=>{
//     if(error){
//         console.error('Error reading file',error);
        
//     }
//     console.log('data is: ',data);
    
// })

// fs.mkdir('dir',(error)=>{
//     if(error){
//         console.error('Error reading file',error);
        
//     }
//     console.log('created new directory');
// })

// fs.mkdir('C:/Users/SRINIVASA/Documents/StemUp/Bridge-course/Full Stack/React/Node/File-module',(error)=>{
//     if(error){
//         console.error('Error reading file',error);
        
//     }
//     console.log('created new directory');
// })


// fs.readFile('data.json','utf8',(error,data)=>{
//     const obj = JSON.parse(data);
//     console.log(data);
// })

fs.copyFile('copy.json', 'data.json', (error) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Data written');
    }
});