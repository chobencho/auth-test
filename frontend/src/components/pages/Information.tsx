import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getInfos } from "lib/api/info"
import { InfoData } from "interfaces/index"

const Information = () => {
  const [infos, setInfos] = useState<InfoData[]>([]);

  useEffect(() => {
    const f = async () => {
      getInfos().then((res) => setInfos(res.data))
    };
    f();
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
