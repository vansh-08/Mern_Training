const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Vansh!')
})

app.use(express.static('public')) // http://localhost:3000/steve.jpg
app.use('/static', express.static('public')) // use static with url(http://localhost:3000/static/steve.jpg)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})