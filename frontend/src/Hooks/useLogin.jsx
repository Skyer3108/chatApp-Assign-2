import { useAuthContext } from "../Context/AuthContext"




const useLogin=()=>{

   const {setAuthUser}= useAuthContext()

    const login=async({email,password})=>{

        console.log(email,password)

        try{

            const res=await fetch('http://localhost:4000/api/auth/login',{
                method:'POST',
                 headers:{'content-Type':'application/json'},
                body:JSON.stringify({email,password}),
                credentials:'include'
            })

            const data=await res.json()



            localStorage.setItem('chat-user',data.data.name)

            console.log('DATA',data.data.name)

            if(data.status==200){

                
            setAuthUser(data)

            }
            else{
                alert('Email or Password Incorrect')
            }




        }
        catch(err){

            alert('Error Login')


        }

       

    }
    return {login}
    


}

export default useLogin