import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { BoardData } from "interfaces/index";
import { AxiosPromise } from "axios";

export const getBoards = () => {
  return client.get<BoardData[]>("/boards");
};

export const getBoardData = (id: string | undefined) => {
  return client.get<BoardData>(`/board/${id}`);
};

export const getMyBoards = (id: string | undefined) => {
  return client.get<BoardData[]>(`/myboard/${id}`);
};

// 掲示板情報取得
export const getEditBoardData = (id: string | undefined) => {
  return client.get(`/board/${id}/edit`);
};

// 掲示板情報変更
export const editBoardData = (
  id: string | undefined,
  data: FormData
): AxiosPromise => {
  return clientImage.post(`/board/${id}/edit`, data);
};

export const getMyFavBoards = (id: string | undefined) => {
  return client.get<BoardData[]>("/boards/myFav", { params: { id } });
};

// 掲示板情報作成
export const createBoardData = (data: FormData): AxiosPromise => {
  return clientImage.post(`/board/create`, data);
};
