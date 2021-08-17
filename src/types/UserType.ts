export type Message = {
  message: string
}

export type Error ={
  error: string
}

export type UserState = {
  isLoading?: Boolean;
  userCurrent?: any;
  error?: string;
  result? : Message
  errorResetPass?: Message
};

export type User = {
  _id?: string
  name?: string
  phone: string;
  password: string
  token?:string
  otp?: string
}

export type Email ={
  email: string
  password?: string
}

export type Actions ={
  type: string
  payload?: any
}

export type OTP ={
  email: string
  otp: string
}
