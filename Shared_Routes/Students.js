
const express = require("express");
const { ObjectId } = require("mongodb");

const mongo = require("../Shared/mongodb");

const router = express.Router();




router.get("/", async (req, res) => {
    
    const data = await mongo.db.collection("students").find().toArray();
    res.send(data);
 
  });
  


  router.get("/:id" , async (req , res , next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
const data = await mongo.db.collection("students").findOne({_id:ObjectId(req.params.id)});

res.send(data.Name);




})

router.post("/" , async (req, res) => {

const data = await mongo.db.collection("students").insertOne(req.body);

res.send(data);


})

router.put("/:id" , async (req, res) =>{

    const data = await mongo.db.collection("students").findOneAndUpdate({_id:ObjectId(req.params.id)} , {$set :req.body});
    res.send(data);
  

})

router.delete("/:id" , async (req, res) => {

const data = await mongo.db.collection("students").deleteOne({_id:ObjectId(req.params.id)});
res.send(data);

})


module.exports = router;
