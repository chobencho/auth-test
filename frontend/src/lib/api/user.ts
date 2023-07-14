import client from "lib/api/client"
import { UserData } from "interfaces/index"

export const getUsers = () => {
  return client.get<UserData[]>("/users")
}

export const getData = () => {
  return client.get<UserData[]>("/boards")
}

export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/user/${id}`);
}
