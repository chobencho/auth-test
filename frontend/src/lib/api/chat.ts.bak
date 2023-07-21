import client from "lib/api/client"
import { ChatUserData } from "interfaces/index"
import { MessageData } from "interfaces/index"

export const getChatRooms = (id: string | undefined) => {
  return client.get<ChatUserData[]>(`/messages`, { params: { id } });
}

export const getMessages = (id: string | undefined) => {
    return client.get<MessageData[]>(`/message/${id}`);
}

