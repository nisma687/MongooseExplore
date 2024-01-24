const mongoose = require('mongoose');
const addressSchema=new mongoose.Schema({
    street:String,
    city:String,
    country:String,
});


const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    // bestfriend is a reference to another user
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    // nested schema(or we can use a separate schema)
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,
    // }
    address:addressSchema
    
});


module.exports=mongoose.model('User',userSchema);