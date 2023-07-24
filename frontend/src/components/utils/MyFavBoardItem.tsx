import { Link } from 'react-router-dom'
import { BoardData } from "interfaces/index"

interface MyFavBoardItemProps {
    board: BoardData
}
  
const MyFavBoardItem = ({ board }: MyFavBoardItemProps) => {
  return (
    <>
          <Link to={`/board/${board.boardId}`} className="inline-block border m-2">
            <p>掲示板ID:{board.boardId}</p>
            <p>ユーザID:{board.userId}</p>
            <p>タイトル:{board.title}</p>
            {board.image?.url ?
              <img
                src={board.image.url}
                alt="boardData image"
                className="w-1/2"
              /> : null
            }
            <p>内容:{board.boardBody}</p>
          </Link>
    </>
  )
}

export default MyFavBoardItem