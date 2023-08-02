import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { CommunityData } from "interfaces/index";
import { CommunityCommentData } from "interfaces/index";
import { AxiosPromise } from "axios";

export const getAllCommunityData = () => {
  return client.get<CommunityData[]>("/allCommunity");
};

export const getPopularCommunityData = () => {
  return client.get<CommunityData[]>("/popularCommunity");
};

export const getNewCommunityData = () => {
  return client.get<CommunityData[]>("/newCommunity");
};

export const getMyCommunityData = (id: string | undefined) => {
  return client.get<CommunityData[]>("/communities", { params: { id } });
};

export const getCommunityData = (id: string | undefined) => {
  return client.get<CommunityData>(`/community/${id}`);
};

export const getCommunityCommentData = (
  id: string | undefined,
  stringMyId: string | undefined
) => {
  return client.get<CommunityCommentData[]>(`/community/${id}/comments`, {
    params: { stringMyId },
  });
};

export const createCommunityComment = (data: FormData): AxiosPromise => {
  return client.post(`/communityComment`, data);
};

export const getSubscribedCommunity = (
  id: string | undefined,
  community_id: string | undefined
) => {
  return client.get(`/community/${id}/subscribed`, {
    params: { community_id },
  });
};

export const subscribeCommunity = (data: FormData): AxiosPromise => {
  return client.post(`/community/newSubscribed`, data);
};
