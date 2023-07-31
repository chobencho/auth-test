import client from "lib/api/client";
import clientImage from "lib/api/clientImage";
import { CommunityCategoryData } from "interfaces/index";
import { CommunityData } from "interfaces/index";
import { AxiosPromise } from "axios";

export const getCommunityCategoryData = () => {
  return client.get<CommunityCategoryData[]>("/category");
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
