var express = require('express');
const app = express();

const homeroute = require('./homeroute.js')
const aboutus = require('./about.js')
const notfound = require('./notfound.js')
const userinfo = require('./userinfo.js');
// const error = require('./error.js');

app.use("/home",homeroute);

app.use("/user",userinfo);

app.use("/about",aboutus);
// app.use(error.notfound);
// app.use(error.errorhandler)
app.use(notfound);

app.listen(3000,(req,res)=>{
    console.log('server is running');
})