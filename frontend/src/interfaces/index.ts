// サインアップ
export interface SignUpParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  confirmSuccessUrl: string
}

// サインイン
export interface SignInParams {
  email: string
  password: string
}

// ユーザー
export interface UserData {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  age: number
  image: string
  body: string
  hobby_id_1: number
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}

