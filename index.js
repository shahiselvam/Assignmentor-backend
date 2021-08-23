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
        res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
  });
app.use(cors({
    origin:'https://elegant-bassi-cb4e38.netlify.app' 
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
