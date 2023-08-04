import client from "lib/api/client"
import { AxiosPromise } from "axios"
import { ChatUserData } from "interfaces/index"
import { MessageItemsData } from "interfaces/index"

// 自分がやりとりしてるルーム情報を取得
export const getChatRooms = (id: string | undefined) => {
  return client.get<ChatUserData[]>(`/messages`, { params: { id } });
}

// 自分がやりとりしてるルーム情報を取得
export const getChatPartner = (id: string | undefined) => {
  return client.get<ChatUserData>(`/message`, { params: { id } });
}

// 新しいチャットルームを作成する
export const createChatRoom = (id: string | undefined, stringMyId: string | undefined) => {
  return client.post(`/chatCreate`, { id, stringMyId })
}

// ルーム内のメッセージ情報を取得
export const getMessages = (id: string | undefined, partnerId: string | undefined) => {
  return client.get<MessageItemsData[]>(`/message/${id}`, { params: { partnerId } });
}

// メッセージを作成する
export const createMessage = (data: FormData): AxiosPromise => {
  return client.post(`/message`, data)
}

// ルームを削除する
export const deleteChatRoom = (room_id: string | undefined): AxiosPromise => {
  return client.delete(`/message/${room_id}`)
}

export const getCommonRoomId = (userId: string | undefined, stringMyId: string | undefined) => {
  return client.get<string | null>(`/message/exist`, { params: { userId, stringMyId } })
}
