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
  tags: string[];
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
  allowPasswordChange: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 趣味情報
export interface UserTagData {
  id: number;
  userId: string;
  tagId: string;
  tagName: string;
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

export interface CommentData {
  id: number;
  name: string;
  image?: {
    url: string;
  };
  boardId: string;
  userId: string;
  body: string;
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

export interface CommunityCategoryData {
  id: string;
  communityCode: string;
}

export interface CommunityData {
  id: string;
  communityId: string;
  communityCode: string;
  userId: string;
  categoryId: string;
  title: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityCommentData {
  id: string;
  communityId: string;
  userId: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}


export interface MessageItemsData {
  id: string;
  communityId: string;
  userId: string;
  roomId: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
