import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { BoardData } from "interfaces/index"
import { getMyBoards } from "lib/api/board"

const MyBoard = () => {
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const f = async () => {
      getMyBoards(id).then((res) => setBoards(res.data))
    };
    f();
  }, []);

  return (
    <>
      {boards.map((board) => (
        <Link to={`/board/${board.id}`} key={board.id} className="inline-block border m-2">
          <p>掲示板ID:{board.id}</p>
          <p>ユーザID:{board.userId}</p>
          <p>タイトル:{board.title}</p>
          <p>内容:{board.body}</p>
          <img src={`${process.env.PUBLIC_URL}/images/${board.image}`} alt="" />
        </Link>
      ))}
    </>
  )
}

export default MyBoard
