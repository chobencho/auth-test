import client from "lib/api/client"
import { AxiosPromise } from "axios"
import { ChatUserData } from "interfaces/index"
import { MessageItemsData } from "interfaces/index"


// ルーム内のメッセージ情報を取得
export const getMessages = (id: string | undefined, partnerId: string | undefined) => {
  return client.get<MessageItemsData[]>(`/chats/${id}`, { params: { partnerId } });
}

// 自分がやりとりしてるルーム情報を取得
export const getChatPartner = (id: string | undefined) => {
  return client.get<ChatUserData>(`/chats/${id}/chatBuddy`);
}

// チェットメッセージを作成する
export const createMessage = (data: FormData): AxiosPromise => {
  return client.post(`/chats`, data)
}

// ルームを削除する
export const deleteChatRoom = (room_id: string | undefined): AxiosPromise => {
  return client.delete(`/chats/${room_id}`)
}

