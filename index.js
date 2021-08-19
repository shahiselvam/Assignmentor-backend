const express = require("express");
const app =  express();

const student = require("./Shared_Routes/Students");

const mentor = require("./Shared_Routes/Mentors");
const AssignMentor = require("./Shared_Routes/Assignmentor");
const count = require ("./Shared_Routes/Count");
require("dotenv").config();
const cors = require("cors");

const mongo = require("./Shared/mongodb");
async function loadApp(){
try
{
await mongo.connect();
app.use((req, res, next) => {
          res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Origin', '*' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    next();
  });
app.use(cors({
    origin: 
    
    'https://elegant-bassi-cb4e38.netlify.app'
    
  ,
  methods:'GET, POST, OPTIONS, PUT, PATCH, DELETE'
}));
app.use(express.json());
app.use("/students" ,student );
app.use("/mentors" , mentor);
app.use("/AssignMentor" , AssignMentor);
app.use("/" ,count )
const port = process.env.PORT || 5000;
app.listen(port , () =>console.log(`Application started at the port ${port}`));
}

catch(err)
{

console.log(err);
console.log("error conecting to port");

}
}


loadApp();  
