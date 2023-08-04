import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "App";
// Function
import { getMyBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'
import CreateNewBoardButton from 'components/utils/board/CreateNewBoardButton'

const MyBoard = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  // Id
  const { id } = useParams<{ id: string }>();
  const { verifiedAge } = useContext(AuthContext);

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
