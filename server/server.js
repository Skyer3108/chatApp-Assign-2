const express=require('express')

const cookieParser=require('cookie-parser')

const dotenv=require('dotenv')

dotenv.config()

const db=require('./db')

const AuthRouter=require('./Route/userRoute')

const {app,server } = require('./Scoket/socket')

app.use(cookieParser())

const cors=require('cors')




const PORT=4000



app.use(express.json())//to parse the incoming requests with json payloads(from req.body)

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))


app.use('/api/auth',AuthRouter)




// app.get('/',(req,res)=>{

//     console.log('hello')
    
//     res.send('hello')
// })

server.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${ PORT}`)
})