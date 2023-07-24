import client from "lib/api/client"
import clientImage from "lib/api/clientImage"
import { BoardData } from "interfaces/index"
import { AxiosPromise } from "axios"

export const getBoards = () => {
  return client.get<BoardData[]>("/boards")
}

export const getBoardData = (id: string | undefined) => {
  return client.get<BoardData>(`/board/${id}`);
}

export const getMyBoards = (id: string | undefined) => {
  return client.get<BoardData[]>(`/myboard/${id}`);
}

// ユーザ情報取得
export const getEditBoardData = (id: string | undefined) => {
  return client.get(`/board/${id}/edit`)
}

// ユーザ情報変更
export const editBoardData = (id: string | undefined, data: FormData): AxiosPromise => {
  return clientImage.post(`/board/${id}/edit`, data)
}
