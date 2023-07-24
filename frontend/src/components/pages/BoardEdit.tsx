import { useState, useEffect } from "react"
import { getEditBoardData } from "lib/api/board"
import { BoardData } from "interfaces/index"
import { useParams } from "react-router-dom"
import BoradEditForm from "components/utils/BoradEditForm"
import BoardEditItem from "components/utils/BoardEditItem"
import GoBackButton from "components/utils/GoBackButton"

const BoardEdit = () => {
  const [boardData, setBoardData] = useState<BoardData | null>(null)
  const { id } = useParams<{ id: string }>();

  const handleGetBoardData = async () => {
    getEditBoardData(id).then((res) => setBoardData(res.data))
  }

  useEffect(() => {
    handleGetBoardData()
  }, [])

  return (
    <>
      <BoradEditForm
        handleGetBoardData={handleGetBoardData}
      />

      {boardData !== null && (
        <>
          <BoardEditItem
            handleGetBoardData={handleGetBoardData}
            boardData={boardData}
          />
        </>
      )}
      <GoBackButton />
    </>
  )
}

export default BoardEdit
