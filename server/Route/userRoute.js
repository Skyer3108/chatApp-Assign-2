const express=require('express')
const { registerUser, loginUser, logOutUser } = require('../userController/userController')

const AuthRouter=express.Router()

AuthRouter.post('/signup',registerUser)

AuthRouter.post('/login',loginUser)


AuthRouter.post('/logout',logOutUser)



module.exports=AuthRouter