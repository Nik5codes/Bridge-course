const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.post('/', (request, response) => {
    const name = request.body.username;
    const pwd = request.body.password;
    const id = new Date.now();

    if (!name || !pwd) {
        return response.status(400).json({ error: "Username and password are required" });
    }
    
    
    const newData = {id, name, pwd };


    let submission = [];
    try {
        const data = fs.readFileSync('login.json', 'utf8');
        submission = JSON.parse(data);
    } catch (error) {
    }

    submission.push(newData);

    fs.writeFile('login.json', JSON.stringify(submission, null, 2), (error) => {
        if (error) {
            return response.status(500).json({ error: "Failed to write file" });
        }

        response.status(200).json({ message: "Data saved successfully", data: newData });
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
