import client from "lib/api/client"
import { InfoData } from "interfaces/index"

// お知らせ一覧を取得
export const getInfos = () => {
  return client.get<InfoData[]>("/infos")
}

// 特定のお知らせ情報を取得
export const getInfoData = (id: string | undefined) => {
  return client.get<InfoData>(`/infos/${id}`);
}
