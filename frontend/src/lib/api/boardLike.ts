import client from "lib/api/client"

// 特定の掲示板のいいねを取得
export const getLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.get(`/board_likes/${boardId}`, { params: { userId } })
}

// 掲示板にいいねする
export const createLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.post(`/board_likes`, { boardId, userId })
}

// 掲示板のいいねを削除する
export const deleteLike = (boardId: string | undefined, userId: string | undefined) => {
  return client.delete(`/board_likes/${boardId}`, { params: { userId } })
}
