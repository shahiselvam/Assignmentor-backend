
const express = require("express");


const mongo = require("../Shared/mongodb");

const router = express.Router();

router.get("/mentorcount" , async (req, res) => {
    
    const data = await mongo.db.collection("mentors").estimatedDocumentCount();
    console.log(data);
    res.status(200).send(data.toString());

 
  });
  router.get("/studentcount" , async (req, res) => {
    
    const data = await mongo.db.collection("students").estimatedDocumentCount();
    console.log(data);
    res.status(200).send(data.toString());

 
  });
  module.exports = router;