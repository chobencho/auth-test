import client from "lib/api/client"
import clientImage from "lib/api/clientImage"
import { AxiosPromise } from "axios"
import { UserData } from "interfaces/index"

export const getUsers = (stringMyId: string | undefined) => {
  return client.get<UserData[]>("/users", { params: { stringMyId } })
}

export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/user/${id}`);
}

// ユーザ情報取得
export const getEditUserData = (id: string | undefined) => {
  return client.get(`/user/${id}/edit`)
}

// ユーザ情報変更
export const editUserData = (id: string | undefined, data: FormData): AxiosPromise => {
  return clientImage.post(`/user/${id}/edit`, data)
}
