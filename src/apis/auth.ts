import {type AuthResponse, type LoginPayLoad, type RegisterPayLoad } from "../types/auth.types";
import {api} from './axios'

export const registerUser = async (data : RegisterPayLoad)=>{
    const response = await api.post<AuthResponse>
    ('/users/register',data)
    return response.data
}
export const loginUser = async (data : LoginPayLoad)=>{

    try{
        const response = await api.post<AuthResponse>
        ('/users/login',data)
        return response.data
    }
    catch (error) {
    console.error("Login failed:", error.response?.status === 404 ? "Endpoint not found" : error.message);
    throw error;
    }
}


