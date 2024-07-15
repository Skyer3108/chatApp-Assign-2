import { useState } from 'react'
import '../style.css'

const InputText=({addMessage})=>{

    const [message,setMessage]=useState()

    const sendMessage=()=>{

        addMessage({message})

        setMessage("")

    }

    return(
        <div className="inputtext-container">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message"  id="message" placeholder='Enter Message' rows='6'/>

            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default InputText