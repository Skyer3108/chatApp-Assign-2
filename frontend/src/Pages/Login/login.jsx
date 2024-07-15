import {Link} from 'react-router-dom'

import { useState } from 'react'
import useLogin from '../../Hooks/useLogin'

const Login=()=>{


    const [data, setData] = useState({
        
        email:"",
        password: ""
    })


    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
    
        setData(data=>({...data,[name]:value}))
        

    }

   const {login}=useLogin()

    const handleSubmit=async(e)=>{

        e.preventDefault()

        await login(data)


    }





    

    return(

        <div>

        <div className='login-popup min-vh-100 container d-flex justify-content-center align-items-center'>

        <form onSubmit={handleSubmit}>

       

<div className='login-popup-input'>

    



      <div className="mb-3">
      <label>
            <span>Email</span>
        </label>
      <input className="form-control"  name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter Your Email' type='email' required />
      </div>

      <div className="mb-3">
      <label>
            <span>Password</span>
        </label>
      <input className="form-control"  name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Your Password' type='password' required />
      </div>

</div>

<button className='btn btn-primary' type='submit'>Login</button>
            

<p>Don't have an Account ?
    <Link to='/signup'>
    <span>Register here</span>
    </Link>
</p>
        </form>

       


        </div>

    </div>
        
    )
}

export default Login