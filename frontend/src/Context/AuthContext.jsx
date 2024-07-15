import { createContext, useState } from "react";

import { useContext } from "react";


export const AuthContext=createContext()

export const useAuthContext=()=>{

    return useContext(AuthContext)

}

export const AuthContextProvider=({children})=>{

    const [authUser,setAuthUser]=useState(localStorage.getItem('chat-user')||null)

    const [conv,setcoversation]=useState([])


//     const getConversation=async()=>{

//     try{

//         // const res=await fetch('http://localhost:2000/api/users/')


//         // console.log(res)

//         // const data=await res.json()

//         // console.log(data,'njnj')

        

//         //setcoversation(data)

//         const res=await axios.get('http://localhost:2000/api/users/')

//         console.log(res,'jjj')


        
//     }catch(err){

//         alert('User fetch Error')
//     }

// }

// useEffect(()=>{

//     getConversation()

// },[])


    return<AuthContext.Provider value={{authUser,setAuthUser,conv,setcoversation}}>

        {children}

    </AuthContext.Provider>
}