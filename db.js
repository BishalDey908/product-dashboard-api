const mongoose = require("mongoose")
const dbHOST=process.env.DBHOST


mongoose.connect(dbHOST)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})