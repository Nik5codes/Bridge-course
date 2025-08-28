const http = require('http');
const url = require('url')

//generate response
const server = http.createServer((req,res) =>
{
    const urlData = url.parse(req.url,true)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Server is writing something `)
    res.end('nodejs server is listening and I am HACKERRR')
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    console.log(urlData);
    console.log(urlData.pathname);
    console.log(urlData.query);
    
    
    
})

//open server
server.listen(3000,()=>{
    console.log(`server has started on port 3000`);
    
})