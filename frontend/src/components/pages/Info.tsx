import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from 'moment';
// Function
import { getInfoData } from "lib/api/info"
// Interface
import { InfoData } from "interfaces/index"
import { useAuthData } from "components/utils/common/useAuthData";


const Info = () => {
  // State
  const [info, setInfo] = useState<InfoData | null>(null);
  // Id
  const { id } = useAuthData();

  // お知らせ情報を取得
  const handleGetInfoData = async () => {
    getInfoData(id).then((res) => setInfo(res.data))
  };

  useEffect(() => {
    handleGetInfoData();
  }, []);

  return (
    <>
      <p>{info?.id}</p>
      <p>{info?.title}</p>
      <p>{info?.body}</p>
      <p>{moment(info?.createdAt && new Date(info.createdAt).toLocaleString()).format('YYYY/MM/DD')}</p>
      <p>{moment(info?.updatedAt && new Date(info.createdAt).toLocaleString()).format('YYYY/MM/DD')}</p>
    </>
  )
}

export default Info
