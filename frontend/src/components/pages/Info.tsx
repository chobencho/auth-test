import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getInfoData } from "lib/api/info"
import { InfoData } from "interfaces/index"
import moment from 'moment';

const Info = () => {
  const [info, setInfo] = useState<InfoData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const f = async () => {
      getInfoData(id).then((res) => setInfo(res.data))
    };
    f();
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
