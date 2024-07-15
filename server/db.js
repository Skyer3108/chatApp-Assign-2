const mongoose=require('mongoose')


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB CONNECTED")
}).catch((err)=>{
    console.log(err)
})