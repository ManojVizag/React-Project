const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const manoj = mongodb.MongoClient;
app.get("/getdetails",(req,res)=>{
    manoj.connect(`mongodb+srv://manoj:manoj@cluster0.dw1w9ay.mongodb.net/?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_database");
            db.collection("Register").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    }) 
})
app.post("/insertdetails",(req,res)=>{
    manoj.connect(`mongodb+srv://manoj:manoj@cluster0.dw1w9ay.mongodb.net/?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_database");
            db.collection("Register").insertOne({"username":req.body.username,"password":req.body.password,"conform_password":req.body.conform_password,"email":req.body.email,"gender":req.body.gender,"mobile_number":req.body.mobile_number,"address":req.body.address},(err,result)=>{
                if(err) throw err;
                else{
                    res.json({message:"data inserted successfully"});
                }
            })
        }
    })
    
})
app.put("/updatedetails",(req,res)=>{
    manoj.connect(`mongodb+srv://manoj:manoj@cluster0.dw1w9ay.mongodb.net/?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_database");
            db.collection("Register").updateOne({"username":req.body.username},{$set:{"password":req.body.password,"conform_password":req.body.conform_password,"email":req.body.email,"gender":req.body.gender,"mobile_number":req.body.mobile_number,"address":req.body.address}},(err,result)=>{
                if(err) throw err;
                else{
                    res.json({message:"data updated successfully"});
                }
            })
        }
    })
    
})
app.delete("/deletedetails",(req,res)=>{
    manoj.connect(`mongodb+srv://manoj:manoj@cluster0.dw1w9ay.mongodb.net/?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_database");
            db.collection("Register").deleteOne({"email":req.body.email},(err,result)=>{
                if(err) throw err;
                else{
                    res.json({message:"data deleted successfully"});
                }
            })
        }
    })
    
})
app.listen(8082,()=>{
    console.log("your port number 8082");
})