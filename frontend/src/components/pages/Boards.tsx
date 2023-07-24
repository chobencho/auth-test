import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { BoardData } from "interfaces/index"
import { getBoards } from "lib/api/board"
import BoardsItem from 'components/utils/BoardsItem'

const Boards = () => {
  const [boards, setBoards] = useState<BoardData[]>([]);

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
