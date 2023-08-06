import { useEffect, useState } from "react";
// Function
import { getBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'
import CreateNewBoardButton from 'components/utils/board/CreateNewBoardButton'
import { useAuthData } from "components/utils/common/useAuthData";

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { verifiedAge } = useAuthData();

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
        <BoardsItem
          boards={boards}
          handleGetBoardData={handleGetBoardData}
        />
      )}
    </>
  )
}

export default Boards
