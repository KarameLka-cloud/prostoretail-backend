const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const {value} = req.query;
    res.json({name: value});
})

app.get('/event', (req, res) => {
    const {value} = req.query;
    res.json({event: value});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
