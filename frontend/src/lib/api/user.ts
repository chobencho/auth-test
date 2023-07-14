import client from "lib/api/client"
import { UserData } from "interfaces/index"
import { BoardData } from "interfaces/index"

export const getUsers = () => {
  return client.get<UserData[]>("/users")
}

export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/user/${id}`);
}

export const getBoards = () => {
  return client.get<BoardData[]>("/boards")
}

export const getBoardData = (id: string | undefined) => {
  return client.get<BoardData>(`/board/${id}`);
}