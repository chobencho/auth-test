import { useContext } from "react"
import { AuthContext } from "App"
import { useState, useEffect } from "react"
import { getMyFavBoards } from "lib/api/board"
import { BoardData } from "interfaces/index"
import MyFavBoardItem from 'components/utils/MyFavBoardItem'

const MyFav = () => {
  const [boards, setBoards] = useState<BoardData[]>([])

  // 自分のユーザIDをログインユーザ情報から取得
  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()

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
          <MyFavBoardItem 
            board={board}
          />

        ))
      }
    </>
  )
}

export default MyFav
