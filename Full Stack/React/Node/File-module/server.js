const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: "Username and password are required" });

    const newData = {
        id: Date.now(),
        name: username,
        pwd: password
    };

    let submission = [];
    try {
        submission = JSON.parse(fs.readFileSync('login.json', 'utf8'));
    } catch (_) {} 

    submission.push(newData);

    fs.writeFile('login.json', JSON.stringify(submission, null, 2), err => {
        if (err) return res.status(500).json({ error: "Failed to write file" });
        res.status(200).json({ message: "Data saved", data: newData });
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
