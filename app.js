const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', (req, res) => {
    res.header('Set-Cookie', 'name=Anwesh; SameSite=None; expires=Thu 26 Mar 2020 06:41:00 GMT');
    res.send("hello world")
})

app.listen(8300, () => {
    console.log("listening in 8300")
})
