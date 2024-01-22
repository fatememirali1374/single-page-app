import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
const navigate=useNavigate()
const [isAuth,setIsAuth]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/",{replace:true, state:"this is dummy data"})
    }
    return (
        <div>
            <h1>Login</h1>
{isAuth && <Navigate to="/posts" replace={true}/>}
            <form onSubmit={handleSubmit}>
                <button>Login</button>
            </form>
            <button onClick={()=>setIsAuth(!isAuth)}>go to posts page</button>
        </div>
    )
}

export default Login