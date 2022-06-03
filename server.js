const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const { Console } = require('console')
const MongoClient = require('mongodb').MongoClient

const PORT = 8000
const rappers = {
    '21 savage' : {
        name: 'chance yo',
        yearBorn: 'July 27 85',
        location: 'canmore, brap brap'
    },
    'eminem' : {
        name: 'cornielius',
        yearBorn: 'march 27 85',
        location: 'detroit, brap brap' 
    }, 
    'dylan' : {
        name: 'dylan',
        yearBorn: 'dylan',
        location: 'dylan, brap brap'
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json(rappers)

})
app.get('/api/:rapperName', (req, res) => {
    console.log(req.params.rapperName)

    //if the rapper exists in our object
    const keys = Object.keys(rappers)
    console.log(keys.indexOf(req.params.rapperName))
    // console.log(keys)
    const a = keys.indexOf(req.params.rapperName) === -1 ? rappers.dylan : rappers[req.params.rapperName]
    res.json(a)
    // req.params.rapperName
    //if it doesn't, give it dylan
})
app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js')
})

// process.env.PORT helps prevent an error when hooking up to heroku
app.listen(process.env.PORT || PORT, function() {
    console.log(`Server is running on port ${PORT}. So go and catch it!`)
})
 