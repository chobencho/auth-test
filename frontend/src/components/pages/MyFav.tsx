import { AuthContext } from "App"
import { useState, useEffect, useContext } from "react"
// Function
import { getMyFavBoards } from "lib/api/board"
// Interface
import { BoardData } from "interfaces/index"
// Components
import BoardsItem from 'components/utils/board/BoardsItem'

const MyFav = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([])
  // Id
  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()

  // 自分がいいねした掲示板情報を取得
  const handleGetMyFavBoardData = async () => {
    getMyFavBoards(stringMyId).then((res) => setBoards(res.data))
  }

  useEffect(() => {
    handleGetMyFavBoardData()
  }, [])

  return (
    <>
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

export default MyFav
