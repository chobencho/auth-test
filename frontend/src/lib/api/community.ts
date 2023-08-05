import client from "lib/api/client";
import { CommunityData } from "interfaces/index";
import { AxiosPromise } from "axios";

// コミュニティ一覧を取得
export const getAllCommunityData = () => {
  return client.get<CommunityData[]>(`/communities`);
};

// 人気コミュニティを取得
export const getPopularCommunityData = () => {
  return client.get<CommunityData[]>("/communities/popular");
};

// 新規コミュニティを取得
export const getNewCommunityData = () => {
  return client.get<CommunityData[]>("/communities/latest");
};

// 参加済みコミュニティを取得
export const getMyCommunityData = (id: string | undefined) => {
  return client.get<CommunityData[]>(`/communities/${id}`);
};

// コミュニティに参加する
export const subscribeCommunity = (data: FormData): AxiosPromise => {
  return client.post(`/communities`, data);
};

// コミュニティを退会する
export const withdrawCommunity = (
  id: string | undefined,
  user_id: string | undefined
) => {
  return client.delete(`/communities/${id}`, { params: { user_id }, });
};

// 管理者にメール送信
export const sendMailApplyNewCommunity = (
  stringMyId: string,
  title: string,
  body: string
) => {
  return client.post(`/communities/sendMail`, {
    stringMyId,
    title,
    body,
  });
};
