
import ChatContainer from "./Components/chatContainer"
import { useAuthContext } from "./Context/AuthContext"

import { Route,Routes,Navigate } from "react-router-dom"
import SignUp from "./Pages/Signup/signup"
import Login from "./Pages/Login/login"

function App() {

  const  {authUser}=useAuthContext()
  

  return (
   <div className="App">

    <Routes>
      <Route path='/' element={authUser?<ChatContainer/>:<Navigate to={'/login'}/>}/>

      <Route path='/signup' element={authUser?<Navigate to='/'/>:<SignUp/>}/>

      <Route path='/login' element={authUser?<Navigate to='/'/>:<Login/>}/>


    </Routes>

  
    
     

   </div>
  )
}

export default App
