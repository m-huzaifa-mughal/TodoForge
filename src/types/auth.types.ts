export type RegisterPayLoad ={
    fullName : string
    email : string
    password : string

}

export type LoginPayLoad ={
    email : string
    password : string

}

export type AuthResponse ={
    success : boolean
    message : string
    data ?: {
        accessToken : string
        refreshToken : string
    }

}
