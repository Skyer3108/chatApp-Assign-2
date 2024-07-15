
const jwt=require('jsonwebtoken')

const generateToken=(userId,res)=>{


    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    console.log(token)

     res.cookie('jwt',token,{
        httpOnly: true, // HttpOnly makes the cookie inaccessible to JavaScript on the client side
        secure: true, // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
        sameSite: 'lax' // Adjust based on your needs
      })

    
}
module.exports=generateToken