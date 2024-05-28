const express = require("express");
const app  = express();
const routh = require('./routh/auth-routh');

app.use('/api/auth',routh);

// app.get("/",(req,res)=>{
//     res.status(200).send("Hello World");
// });
const PORT =5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})