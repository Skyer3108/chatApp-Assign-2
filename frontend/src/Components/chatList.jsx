
import '../style.css'
const ChatList=({chats})=>{

    const user=localStorage.getItem('user')

    function SenderChat({message,username}){

        return(
            <div className="chat-sender">
                <img src='https://picsum.photos/200/300?grayscale' alt=''/>

                <p> <strong>{username}</strong> {message}</p>


            </div>

           
        )


    }


    function ReciverChat({message,username}){

        return(
            <div className='chat-reciver'>
                <img src='https://picsum.photos/200/300?grayscale' alt=''/>

                <p> <strong>{username}</strong> {message}</p>


            </div>

           
        )


    }

    return(
        <div className='chats_list'>

            {
                chats.map((chat,index)=>{
                        if(chat.user===user){
                            return <SenderChat key={index} message={chat.message} username={chat.user}/>
                        }
                        else{
                             return <ReciverChat key={index} message={chat.message} username={chat.user}/>

                        }
                })
            }

            
    

        </div>
    )
}

export default ChatList