import client from "lib/api/client"
import { ChatUserData } from "interfaces/index"

// 自分がやりとりしてるルーム情報を取得
export const getChatRooms = (id: string | undefined) => {
  return client.get<ChatUserData[]>(`/messages`, { params: { id } });
}

// 新しいチャットルームを作成する
export const createChatRoom = (id: string | undefined, stringMyId: string | undefined) => {
  return client.post(`/messages`, { id, stringMyId })
}
