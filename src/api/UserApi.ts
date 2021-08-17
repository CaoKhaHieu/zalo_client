import axiosClient from "./AxiosClient";

interface ListResponse<T> {
    data: T[]
}

interface User{
    name: string
    phone: string,
    password: string
}

interface Email{
    email: string
}

interface OTP{
    otp: string
    email: string
}

interface resultGetEmail{
    message: string
}

export const getAllUsers = () :Promise<ListResponse<User>> => axiosClient.get('/user')
export const login = (user: User) :Promise<ListResponse<User>> => axiosClient.post('/user/login', user)
export const register = (user: User) :Promise<ListResponse<User>> => axiosClient.post('/user/register', user)

export const getEmail = (email: Email) :Promise<resultGetEmail> => axiosClient.post('/user/sendmail', email)
export const checkOtp = (otp: OTP) :Promise<resultGetEmail> => axiosClient.post('/user/checkotp', otp)
export const updatePassword = (data: Email) :Promise<resultGetEmail> => axiosClient.post('/user/updatepassword', data)