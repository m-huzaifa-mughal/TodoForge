import { Navigate } from "react-router-dom"

const Token_Key = localStorage.getItem("token")

export default function ProtectedRoute({children}:any){
    const token = Token_Key
    if(!token){
        return <Navigate to="/login" replace />
    }
    return children
}