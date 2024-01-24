const mongoose = require('mongoose');
const User = require('./User');

const uri = "mongodb+srv://practiseMongoose:HLidxGEoU6zJVnWo@cluster0.231nuf3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
run()
async function run (){
  // const user= await new User({name:"Nisma Hossain",age:25}).save();
  // console.log(user);

  // const user=await User.create({name:"Hossain",age:25});
  // user.name="masima Hossain";
  // await user.save();
  // console.log("User created",user);
  try{
    const user=await 
  User.create({
      name:"Juan Dela Cruz",
      age:25,
      email:"jaun@gmail.com",
      createdAt:Date.now(),
      updatedAt:Date.now(),
      bestFriend:new mongoose.Types.ObjectId(),
      hobbies:["reading","coding"],
      address:{
          street:"123 Main St",
          city:"New York",
          country:"USA"
      }


    });
    console.log("User created",user);

  }
  catch(err){console.log(err.message)}
  
 
  
}








