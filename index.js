const express = require('express')
const app = express()
const port = 3001
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    const a = 2;
    const b = 3;
    const c = a / b
  res.send('hello world abcad')
})
app.listen(port, () => console.log(`localhost:${port}`))