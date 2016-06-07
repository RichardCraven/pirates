//TODO:

//1. geT DATABSE WORKING, FIGURE OUT ROUTING TO COMMUNICATE TO DB AND PERFORM CRUD
//2.Wire up Angular and connect view for showing pirates
//3.Handle creation of pirate
//4.Hnadle deletion
//5.Handle update
//6.Refactor

const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const pirates = require('./routes/pirates')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({encoded:false}))
app.use(morgan('tiny'));

app.use('/api/pirates', pirates) //<-- the /api is just a distinction for the server side route (can be called anything) vs the Angular route, which might just be /pirates

app.listen(3000, function() {
	console.log('Listening on port 3000')
})