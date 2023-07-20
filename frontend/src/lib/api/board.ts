import client from "lib/api/client"
import { BoardData } from "interfaces/index"

export const getBoards = () => {
  return client.get<BoardData[]>("/boards")
}

export const getBoardData = (id: string | undefined) => {
  return client.get<BoardData>(`/board/${id}`);
}

export const getMyBoards = (id: string | undefined) => {
  return client.get<BoardData[]>(`/myboard/${id}`);
}
