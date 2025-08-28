var express = require('express');
var app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('this is home page');
});

app.get("/about", (req, res) => {
    res.send('this is about page');
});

app.post("/sendstudent", (req, res) => {
    res.send(`sending student data ${JSON.stringify(req.body)}`);
});

app.put("/updatestudent/:id", (req, res) => {
    res.send(`updating student with id ${req.params.id}, data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
    console.log('server running');
});
