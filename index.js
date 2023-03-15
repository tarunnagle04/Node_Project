const express = require('express'); // this is a core module imported from node_modules
const app = express();  // this is a core module imported from node_modules
const cors = require('cors');   // this is a core module imported from node_modules
const bollywood = require('./Routes/Bollywood');    //this is a user defined module imported 
const fitness = require('./Routes/Fitness');    //this is a user defined module imported 
const food = require('./Routes/Food');  //this is a user defined module imported 
const hollywood = require('./Routes/Hollywood');    //this is a user defined module imported 
const technology = require('./Routes/Technology');  //this is a user defined module imported 
const userinfo = require('./Routes/UserInfo');  //this is a user defined module imported 


app.use(cors());    // this is used to connect front end and backend application 


app.use("/", bollywood);            // this is the webpage router for routing request from the API
app.use("/", fitness);          // this is the webpage router for routing request from the API
app.use("/", food);         // this is the webpage router for routing request from the API
app.use("/", hollywood);            // this is the webpage router for routing request from the API
app.use("/", technology);           // this is the webpage router for routing request from the API
app.use("/", userinfo);          // this is the webpage router for routing request from the API

app.listen(3001, () => {
    console.log('Server is running');
})