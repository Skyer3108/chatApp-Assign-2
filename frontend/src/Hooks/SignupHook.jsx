import { useState } from "react"

//import toast from 'react-toastify'
import { useAuthContext } from "../Context/AuthContext"

const useSingup = () => {

    const [loading, setLoading] = useState(false)

    const { authUser, setAuthUser } = useAuthContext()

    const signup = async ({ name, email, password, confirmPassword }) => {


        console.log(name,email,password)
        const sucess = handleInputError({ name, email, password, confirmPassword })

        if (!sucess) {
            return
        }

        setLoading(true)

        try {
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword }),
                credentials:'include'
            })

            const singupdata = await res.json()

            // if(singupdata.status!=200){

            //     throw(err)

            // }

           

            localStorage.setItem('chat-user', JSON.stringify(singupdata))


               if(singupdata.states==200){

                return alert('Email Already Exists')

               }

               setAuthUser(singupdata)
           


            console.log('GGGGGGGG',singupdata)
            console.log('Registration:',singupdata)



        } catch (err) {

            alert(err)

        } finally {
            setLoading(false)
        }







    }
    return { signup }


}

export default useSingup

function handleInputError({ name, email, password, confirmPassword }) {

    if (!name || !password || !email || !confirmPassword) {

        console.log(name, email, password, confirmPassword)

        alert('Please Enter All the Details')
        return false

    }

    if (password !== confirmPassword) {
        alert('Password is not same')
        return false
    }

    if (password.length < 6) {

        alert('Password Length less than 6')
        return false
    }

    return true
}