import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
// Function
import { getMyBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'

const MyBoard = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  // Id
  const { id } = useParams<{ id: string }>();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getMyBoards(id).then((res) => setBoards(res.data))
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      <Link to={`/boardCreate`} className="border p-2 m-2 bg-gray-100">新規作成</Link>
      {
        boards.map((board) => (
          <BoardsItem
            board={board}
          />
        ))
      }
    </>
  )
}

export default MyBoard
