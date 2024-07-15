const userSchema=require('../UserSchema/userSchema')

const generateToken=require('../utils/generateToken')

const bcrypt=require('bcrypt')



const registerUser=async(req,res)=>{

    try{

        const {name,email,password,confirmPassword}=req.body

        if(password!==confirmPassword){

            return res.send({
                status:400,
                error:'Password dont match'
            })

        }

        const user=await userSchema.findOne({email})

        if(user){
           return res.send({
                states:400,
                error:'Email already exists'
            })
        }

        //Hash Password
        const salt=await bcrypt.genSalt(10)

        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser=new userSchema({
            name,
            email,
            password:hashedPassword
        })

        
        const userDb=await newUser.save()

        const token=generateToken(userDb._id,res)

        res.send({
            status:201,
            data:userDb,
            message:'User sucessfully Register',
            token
            
        })


    }catch(err){

        res.send({
            status:400,
            message:"Error",
            error:err

        })

    }


}

const loginUser=async(req,res)=>{

    const {email,password}=req.body

    try{

        console.log(email,password)
        const user=await userSchema.findOne({email})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password||'')

        console.log(isPasswordCorrect)
        console.log(user)

        if(!user||!isPasswordCorrect){
             res.send({
                status:400,
                message:"Invalid UserName or Password"
            })
        }

        
        generateToken(user._id,res)

        res.send({
            status:200,
            data:user,
            message:"Login sucessfull"
        })



    }
    catch(err){
        return res.send({
            status:'Login Unsuccefull',
            error:err

        })
    }


}

const logOutUser=(req,res)=>{


    try{

        res.cookie("jwt","",{maxAge:0})

        res.send({
            status:200,
            message:"Loged out Succesfully"
        })

    }
    
    catch(err){
        res.send({
            status:400,
            message:"Internal Server Error"
        })
    }

}

module.exports={registerUser,loginUser,logOutUser}