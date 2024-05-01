"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"



const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password : "",
        username: ""      
    })

    const onSignUp  = async () =>{

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
       <h1>SignUp</h1>
       <label htmlFor="username"></label>
       <hr />
       <input type="text"  
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
       id="username"
       value = {user.username}
       onChange={(e) => setUser({...user, username:e.target.value})}
       placeholder="username"
       />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignUp}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">SignUp</button>
            <Link href="/login">Visittt login page</Link>

    </div>
  )
}

export default SignupPage