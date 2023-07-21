import { useEffect, useState } from "react"
import { getBoardData } from "lib/api/board"
import { BoardData } from "interfaces/index"
import { useParams } from "react-router-dom"
import EditButton from "components/utils/EditButton"

const Board = () => {
  const [board, setBoard] = useState<BoardData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const f = async () => {
      getBoardData(id).then((res) => setBoard(res.data))
    };
    f();
  }, []);

  return (
    <>
      {board &&
        <>
          <p>ID:{board.id}</p>
          <p>タイトル:{board.title}</p>
          <p>内容:{board.boardBody}</p>
          <p>ユーザID:{board.userId}</p>

          <img src={`${process.env.PUBLIC_URL}/images/${board.image}`} alt="" />
          <EditButton userId={board.userId || ''} />
        </>
      }
    </>
  )
}

export default Board
