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
  subjectCode: string
  subjectId: number
  genderCode: string
  genderId: number
  gradeCode: string
  gradeId: number
  prefectureCode: string
  prefectureId: number
  interestId_1: number
  interestId_2: number
  interestId_3: number
  hobbyId_1: number
  hobbyId_2: number
  hobbyId_3: number
  hobbyId_4: number
  hobbyId_5: number
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}


// ユーザー
export interface BoardData {
  id: number
  boardId: number
  userId: string
  title: string
  boardTitle: string
  image: string
  boardImage: string
  body: string
  boardBody: string
  created_at: Date
  updated_at: Date
}
