import { useEffect, useState } from "react";
// Function
import { getMyBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'
import CreateNewBoardButton from 'components/utils/board/CreateNewBoardButton'
import { useAuthData } from "components/utils/common/useAuthData";

const MyBoard = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  // Id
  const { id, verifiedAge } = useAuthData();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getMyBoards(id).then((res) => setBoards(res.data))
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      <CreateNewBoardButton verifiedAge={verifiedAge} />
      <BoardsItem
        boards={boards}
        handleGetBoardData={handleGetBoardData}
      />
    </>
  )
}

export default MyBoard
