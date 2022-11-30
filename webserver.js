const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req,res) => {
    const n =  new Date().toLocaleTimeString()
    console.log("home dc request luc: " + n)
    res.render('home', {now:n})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running at ' + PORT)