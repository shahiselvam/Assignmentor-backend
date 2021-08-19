
const express = require("express");
const { ObjectId } = require("mongodb");

const mongo = require("../Shared/mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
    
    const data = await mongo.db.collection("assignMentor").find().toArray();
    res.send(data);
 
  });

  router.post("/" , async (req, res) => 
  {
  const user  = await mongo.db.collection("assignMentor").findOne({student : req.body.student});
  
  if(user)
  {
  res.send("Mentor Already Assigned for this Student");
  }

  else
  {
    const data = await mongo.db.collection("assignMentor").insertOne(req.body);
    res.send(data);    
  }

    })

    router.delete("/:id" , async (req, res) => {

      const data = await mongo.db.collection("assignMentor").deleteOne({_id:ObjectId(req.params.id)})
      res.send(data);
      })
      router.put("/:id" , async (req, res) =>{

        const data = await mongo.db.collection("assignMentor").findOneAndUpdate({_id:ObjectId(req.params.id)} , {$set :req.body});
        res.send(data);
      
    
    })
    module.exports = router;