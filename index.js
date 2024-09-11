const express=require('express');
const user = require('./routes/user');
const app=express();
app.use(user);

app.listen(3000,(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("Server is running on 3000...")
    }
})

//localhost:3000/users