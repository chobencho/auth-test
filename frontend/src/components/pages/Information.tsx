import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// Function
import { getInfos } from "lib/api/info"
// Interface
import { InfoData } from "interfaces/index"

const Information = () => {
  // State
  const [infos, setInfos] = useState<InfoData[]>([]);

  // お知らせ情報を取得
  const handleGetInfos = async () => {
    getInfos().then((res) => setInfos(res.data))
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  return (
    <>
      {infos?.map((info) => (
        <Link to={`/info/${info.id}`} className="border inline-block m-2">
          <p>お知らせID:{info.id}</p>
          <p>タイトル:{info.title}</p>
          <p>内容:{info.body}</p>
        </Link>
      ))}
    </>
  )
}

export default Information
