const path = require('path')
const express = require("express");
require('dotenv').config() 
const workoutController = require('./controllers/workouts');
const userController = require('./controllers/users');
const app = express(); 

const mongo = require('./models/mongo')

const PORT = process.env.PORT ?? 3000; 
console.log(`The best class at SUNY New Paltz is ${process.env.BEST_CLASS}`);

app 
    .use('/', express.static(path.join(__dirname, '../client/dist')))
    .use(express.json())

    // CORS
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    })

    .use((req, res, next) => {
        console.log(`Request: ${req.method} ${req.url}`)
        console.log(`Authorization: ${req.headers.authorization}`)
        next()
    })

    .use('/api/v1/workouts', workoutController)
    .use('/api/v1/users', userController)

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`)
})

console.log('3: End of file, waiting for requests...')