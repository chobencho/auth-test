import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { BoardData } from "interfaces/index"
import { getBoards } from "lib/api/board"

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
      <Link to={`/boardCreate`} className="border p-2 m-2 bg-gray-100">新規作成</Link>
      {boards?.map((board) => (
        <>
          <Link to={`/board/${board.boardId}`} className="inline-block border m-2">
            <p>掲示板ID:{board.boardId}</p>
            <p>ユーザID:{board.userId}</p>
            <p>タイトル:{board.title}</p>
            {board.image?.url ?
              <img
                src={board.image.url}
                alt="boardData image"
                className="w-1/2"
              /> : null
            }
            <p>内容:{board.boardBody}</p>
          </Link>
        </>
      ))}
    </>
  )
}

export default Boards
