import client from "lib/api/client"
import { InfoData } from "interfaces/index"

export const getInfos = () => {
  return client.get<InfoData[]>("/information")
}

export const getInfoData = (id: string | undefined) => {
  return client.get<InfoData>(`/info/${id}`);
}
