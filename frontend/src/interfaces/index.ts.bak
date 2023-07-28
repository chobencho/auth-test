// サインアップ
export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  confirmSuccessUrl: string;
}

// サインイン
export interface SignInParams {
  email: string;
  password: string;
}

// ユーザー
export interface UserData {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  age: string;
  image?: {
    url: string;
  };
  body: string;
  subjectCode: string;
  subjectId: number;
  genderCode: string;
  genderId: number;
  gradeCode: string;
  gradeId: number;
  prefectureCode: string;
  prefectureId: number;
  interestId: number;
  hobbyId_1: number;
  hobbyId_2: number;
  hobbyId_3: number;
  hobbyId_4: number;
  hobbyId_5: number;
  allowPasswordChange: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 趣味情報
export interface UserHobbyData {
  id: number;
  hobbyId: string;
  hobbyCode: string;
}

// 興味分野情報
export interface UserInterestData {
  id: number;
  interestId: string;
  interestCode: string;
}

// 掲示板
export interface BoardData {
  id: number;
  boardId: number;
  userId: string;
  title: string;
  boardTitle: string;
  image?: {
    url: string;
  };
  boardImage?: {
    url: string;
  };
  body: string;
  boardBody: string;
  createdAt: Date;
  updatedAt: Date;
}

// インフォメーション
export interface InfoData {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatUserData {
  id: string;
  uid: string;
  provider: string;
  email: string;
  name: string;
  age: number;
  image?: {
    url: string;
  };
  roomId: string;
}

export interface MessageData {
  id: string;
  userId: string;
  roomId: string;
  body: string;
  image?: {
    url: string;
  };
}
