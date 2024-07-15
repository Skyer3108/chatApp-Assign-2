const express=require('express')

const http=require('http')

const Server=require('socket.io').Server


const app=express()



const server=http.createServer(app)

const io=new Server(server,{
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

// {
//     cors:{
//         origin:['http://localhost:5173'],
//         methods:['GET','POST']
//     }
// }

io.on('connection',(socket)=>{
    console.log('connected')

    socket.on('chat',chat=>{
        io.emit('chat',chat)
    })

    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})



module.exports={app,server}
