const mongoose=require("mongoose");



main().then(()=>{
    console.log("connection Successful");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");  // connecting mongoose with db
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

 const User=mongoose.model("User",userSchema);


User.updateOne({name:"Adam"},{age:25})
.then((res)=>{

    console.log(res);
}).catch((err)=>{
    copnsole.log(err);
})



 
// User.findById("69d1b60d9ccd7184585e1f7d")
// .then((res)=>{
//     console.log(res.name);
// })
// .catch((err)=>{
//     console.log(err);
// });




// const Employee=mongoose.model("Employee",userSchema);

// const user2=new User({
//     name:"Adam",
//     email:"adam@gmail.com",
//     age:20,
// });

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Harry",email:"harry@gmail.com",age:47},
//     {name:"jhony",email:"jhony@gmail.com",age:52},
    
// ]).then((res)=>{
//     console.log(res);
// });

 // async function which also returns promise 
//  user2.save()
//  .then((res)=>{
//         console.log(res);
//  })
//  .catch((err)=>{
//         console.log("ERROR -",err);
//  });