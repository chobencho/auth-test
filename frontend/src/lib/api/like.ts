import client from "lib/api/client"

export const getLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.get(`/board/${boardId}/getLike`, { params: { userId } })
}

export const createLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.post(`/board/createLike`, { boardId, userId })
}

export const deleteLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.delete(`/board/${boardId}/deleteLike`, { params: { userId } })
}
