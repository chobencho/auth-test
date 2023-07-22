import { useContext } from "react"
import { AuthContext } from "App"
import { useEffect, useState } from "react"
import { getBoardData } from "lib/api/board"
import { BoardData } from "interfaces/index"
import { useParams } from "react-router-dom"
import EditButton from "components/utils/EditButton"
import LikeButton from "components/utils/LikeButton"

const Board = () => {
  const [board, setBoard] = useState<BoardData | null>(null);
  const { id } = useParams<{ id: string }>();

  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()

    // ルームIDからメッセージ情報を取得・更新
    const handleGetBoardData = async () => {
      getBoardData(id).then((res) => setBoard(res.data))
    }

    // 初回ページ遷移時、setMessagesの更新時にレンダリング実行
    useEffect(() => {
      handleGetBoardData()
    }, [])

  return (
    <>
      {board &&
        <>
          <LikeButton
            handleGetBoardData={handleGetBoardData}
            boardId={board.id.toString()}
            myId={stringMyId ?? ''}
            />
          <p>ID:{board.id}</p>
          <p>タイトル:{board.title}</p>
          <p>内容:{board.boardBody}</p>
          <p>ユーザID:{board.userId}</p>

          <img src={`${process.env.PUBLIC_URL}/images/${board.boardImage}`} alt="" />
          <EditButton userId={board.userId || ''} />
        </>
      }
    </>
  )
}

export default Board
