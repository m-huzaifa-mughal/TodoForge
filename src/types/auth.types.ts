export type RegisterPayLoad ={
    username : string
    email : string
    password : string

}

export type LoginPayLoad ={
    email : string
    password : string

}

export type AuthResponse ={
    statusCode: number
    success : boolean
    message : string
    data ?: {
        accessToken : string
        refreshToken : string
        statusCode : number
    }

}
