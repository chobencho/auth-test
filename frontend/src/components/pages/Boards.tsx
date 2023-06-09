import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { BoardData } from "interfaces/index"
import { getBoards } from "lib/api/user"

const Boards = () => {
  const [boards, setBoards] = useState<BoardData[]>([]);

  useEffect(() => {
    const f = async () => {
      const res = await getBoards();
      setBoards(res.data);
    };
    f();
  }, []);

  return (
    <>
      {boards?.map((board) => (
        <>
          <Link to={`/board/${board.boardId}`} className="inline-block border m-2">
            <p>掲示板ID:{board.boardId}</p>
            <p>ユーザID:{board.userId}</p>
            <p>タイトル:{board.boardTitle}</p>
            <img src={`${process.env.PUBLIC_URL}/images/${board.boardImage}`} alt="" />
            <p>内容:{board.boardBody}</p>
          </Link>
        </>
      ))}
    </>
  )
}

export default Boards