import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";
import { UserData } from "interfaces/index";

export const getUsers = (id: string | undefined, name: string | undefined) => {
  return client.get<UserData[]>("/users", { params: { id, name } });
};

export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/user/${id}`);
};

// ユーザ情報取得
export const getEditUserData = (id: string | undefined) => {
  return client.get(`/user/${id}/edit`);
};

// ユーザ趣味情報取得
export const getEditUserHobbyData = (id: string | undefined) => {
  return client.get(`/user/${id}/editHobby`);
};

// ユーザ興味情報取得
export const getEditUserInterestData = (id: string | undefined) => {
  return client.get(`/user/${id}/editInterest`);
};

// ユーザ研究タグ情報取得
export const getEditUserResearchTagData = (id: string | undefined) => {
  return client.get(`/user/${id}/editResearchTag`);
};

// ユーザ情報変更
export const editUserData = (
  id: string | undefined,
  data: FormData
): AxiosPromise => {
  return clientImage.post(`/user/${id}/edit`, data);
};
