//open express server with port 8080
const express = require('express'); 

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => console.log(`listening on port ${port}`));

