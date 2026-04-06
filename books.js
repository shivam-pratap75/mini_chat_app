const mongoose=require("mongoose");



main().then(()=>{
    console.log("connection Successful");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");  // connecting mongoose with db
}


const bookSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true,
            MaxLength:20,
        },
        author:{
            type:String,
            min:1,

        },
        price:{
            type:Number,
        },
        category:{
            type:String,
            enum:["fictional","non-fictional"],// category must be from one of the defined values
        }

});

const Book=mongoose.model("Book",bookSchema);

// let book1= new Book({
//     title:"Mathematics XII", // cannot insert without title 
//     author:"RD Sharma", // can skip author because there is not required constraint
//     price:300,
// });

let book3= new Book({
    title:"Shivam Thakur book", // cannot insert without title 
    author:"Shiva", // can skip author because there is not required constraint
    price:120,  // and also all the data types should be valid otherwise CastError

    // if you pass "abc" them error and if you pass " 123" then no error
});




book3.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})