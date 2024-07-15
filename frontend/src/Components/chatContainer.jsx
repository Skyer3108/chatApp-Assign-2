import { useEffect, useState } from "react"
import ChatList from "./chatList"
import InputText from "./Input"
//import UserLogin from "./userLogin"
import socketIoClient from 'socket.io-client'
import { useAuthContext } from "../Context/AuthContext"


const ChatContainer=()=>{

    const [user,setUser]=useState(localStorage.getItem('chat-user'))

    console.log('userName :',localStorage.getItem('chat-user'))

    const socketIo=socketIoClient('http://localhost:4000')

    const [chats,setChats]=useState([])
    const { authUser, setAuthUser } = useAuthContext()

    console.log(user)

    useEffect(()=>{

        socketIo.on('chat',(chats)=>{
          setChats(chats)
        })
    })

    const sendToSocket=(chat)=>{

        socketIo.emit('chat',chat)

    }

    const addMessage=(chat)=>{

        const newChat={...chat,user:localStorage.getItem('user')}
          setChats([...chats,newChat])

          sendToSocket([...chats,newChat])
    }

    const logout=()=>{

        localStorage.removeItem('chat-user')

        setUser('')

        setAuthUser(null)
        
    }



    return(
        <div>


                        
            <div>
            <div className="chats-header">
                <h4>Username:{user}</h4>

                <p className='chat-logout'>
                    <button onClick={logout} className='btn btn-primary'>Logout</button>
                </p>
            </div>
            <ChatList chats={chats}/>
            <InputText addMessage={addMessage}/>
        </div>

               
           
                    
           
               
        </div>
    )
}

export default ChatContainer