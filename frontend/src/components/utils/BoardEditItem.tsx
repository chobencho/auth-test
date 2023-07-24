import React from 'react'
import { BoardData } from "interfaces/index"

interface BoardEditItemProps {
  handleGetBoardData: Function
  boardData: BoardData
}

const BoardEditItem = ({ handleGetBoardData, boardData }: BoardEditItemProps) => {
  return (
    <>
      <p>タイトル:{boardData.title}</p>
      <p>画像:
        {boardData.image?.url ?
          <img
            src={boardData.image.url}
            alt="boardData image"
            className="w-1/2"
          /> : null
        }
      </p>
      <p>内容:{boardData.body}</p>
    </>
  )
}

export default BoardEditItem
