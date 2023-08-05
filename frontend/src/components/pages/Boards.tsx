import { useEffect, useState, useContext } from "react";
import { AuthContext } from "App";
// Function
import { getBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'
import CreateNewBoardButton from 'components/utils/board/CreateNewBoardButton'

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { verifiedAge } = useContext(AuthContext);

  // 掲示板を検索する関数
  const handleGetBoardData = async () => {
    getBoards().then((res) => setBoards(res.data))
  }

  useEffect(() => {
    handleGetBoardData()
  }, [])

  return (
    <>
      <CreateNewBoardButton verifiedAge={verifiedAge} />

      {boards && (
        <>
          {
            boards.map((board) => (
              <BoardsItem
                board={board}
              />
            ))
          }
        </>
      )}
    </>
  )
}

export default Boards
