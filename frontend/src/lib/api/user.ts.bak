import client from "lib/api/client"
import { UserData } from "interfaces/index"

export const getUsers = (stringMyId: string | undefined) => {
  return client.get<UserData[]>("/users", {params: {stringMyId}})
}

export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/user/${id}`);
}

export const getCommonRoomId = (userId: string | undefined, stringMyId: string | undefined) => {
  return client.get<boolean>("/user/existChatRoom", {params: {userId, stringMyId}})
}
