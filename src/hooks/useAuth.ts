import { useState } from "react"
import type { LoginPayLoad, RegisterPayLoad } from "../types/auth.types"
import { loginUser, registerUser } from "../apis/auth"

const Token_Key = "token"

const setToken = (token : string)=>{
    localStorage.setItem(Token_Key,token)

}
const getToken = ()=>{
    return localStorage.getItem(Token_Key)

}

const removeToken = ()=>{
    localStorage.removeItem(Token_Key)

}


export const useAuth=()=>{

    const [user ,setUser] = useState<any>(null)
    const [loading , setLoading] = useState(false)


    const register = async (data : RegisterPayLoad) =>{
        setLoading(true)
        try{
            const response = await registerUser(data)

            if (response?.data?.accessToken){
                setToken(response.data.accessToken)
            }
            return response
        }
        finally{
            setLoading(false)
        }
    }

    const login = async (data : LoginPayLoad) =>{
        setLoading(true)
        try{

            const response = await loginUser(data)
            const token =  response?.data?.accessToken
            
            if (token){
                setToken(token)
            }
            return response
        }
        finally{
            setLoading(false)
        }
    }

    const logout =()=>{
        removeToken()
        setUser(null)
    }
    return {
        user,
        register,
        login,
        logout,
        loading,
        isAuth : !!getToken(),
    }
}