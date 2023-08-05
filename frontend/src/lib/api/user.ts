import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { AxiosPromise } from "axios";
import { UserData } from "interfaces/index";

// ユーザ一覧を取得
export const getUsers = (id: string | undefined, keywords: string[]) => {
  return client.get<UserData[]>("/users", { params: { id, keywords } });
};

// ユーザ情報取得
export const getUserData = (id: string | undefined) => {
  return client.get<UserData>(`/users/${id}`);
};

// ユーザ情報取得
export const getEditUserData = (id: string | undefined) => {
  return client.get(`/users/${id}/edit`);
};

// ユーザ趣味情報取得
export const getHobbyData = (id: string | undefined) => {
  return client.get(`/users/${id}/hobby`);
};

// ユーザ興味情報取得
export const getInterestData = (id: string | undefined) => {
  return client.get(`/users/${id}/interest`);
};

// ユーザ研究タグ情報取得
export const getResearchTagData = (id: string | undefined) => {
  return client.get(`/users/${id}/researchTag`);
};

// ユーザ情報変更
export const updateUserData = (
  id: string | undefined,
  data: FormData
): AxiosPromise => {
  return clientImage.put(`/users/${id}`, data);
};
