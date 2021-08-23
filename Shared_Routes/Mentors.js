
const express = require("express");
const { ObjectId } = require("mongodb");

const mongo = require("../Shared/mongodb");

const router = express.Router();




router.get("/", async (req, res) => {
    debugger
    const data = await mongo.db.collection("mentors").find().toArray();
    res.send(data);
  });
  


  router.get("/:id" , async (req , res ) => {
       
const data = await mongo.db.collection("mentors").findOne({_id:ObjectId(req.params.id)});
res.send(data.Name);

})

router.post("/" , async (req, res) => {

const data = await mongo.db.collection("mentors").insertOne(req.body);


res.send(data);

})

router.put("/:id" , async (req, res) =>{

    const data = await mongo.db.collection("mentors").findOneAndUpdate({_id:ObjectId(req.params.id)} , {$set :req.body})
    res.send(data);
})

router.delete("/:id" , async (req, res) => {

const data = await mongo.db.collection("mentors").deleteOne({_id:ObjectId(req.params.id)})
res.send(data);
})


module.exports = router;
