import { Navigate } from "react-router-dom"

const Token_Key = "token"

export default function ProtectedRoute({children}:any){
    const token =localStorage.getItem(Token_Key)

    if(!token){
        return <Navigate to="/login" replace />
    }
    return children
}