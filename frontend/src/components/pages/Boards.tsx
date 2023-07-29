import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// Function
import { getBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);

  // 掲示板を検索する関数
  const handleGetBoardData = async () => {
    getBoards().then((res) => setBoards(res.data))
  }

  useEffect(() => {
    handleGetBoardData()
  }, [])

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

export default Boards
