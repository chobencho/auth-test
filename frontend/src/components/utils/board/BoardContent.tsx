// Interface
import { BoardData } from "interfaces/index";

import { makeStyles, Theme } from "@material-ui/core/styles";
import LikeButton from "components/utils/board/LikeButton";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

type BoardContentProps = {
  board: BoardData
  boardId: string
  myId: string
  handleGetBoardData: Function
};

const useStyles = makeStyles((theme: Theme) => ({
  boardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  userImage: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "20px"
  }
}));

const BoardContent = ({ board, boardId, myId, handleGetBoardData }: BoardContentProps) => {
  const classes = useStyles();

  return (
    <>
      {board.image?.url ? (
        <img
          src={board.image.url}
          alt="boardData image"
          className={`${classes.boardImage}`}
        />
      ) :
        <img src={`${process.env.PUBLIC_URL}/images/no-image.jpg`} alt="boardData image" className={`${classes.boardImage}`} />
      }
      <div className="w-96 bg-gray-400 m-auto">
        <p>{board.title}</p>
        <div className="flex">
          <div className="flex">
            <img src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`} alt="boardData image" className={`${classes.userImage}`} />
            <div>
              <p className="text-xs">{board.name}</p>
              <p className="text-10">{moment(board.createdAt).format("YYYY年MM月DD日 HH:mm")}</p>
            </div>
          </div>

          {/* いいねボタン */}
          <LikeButton
            handleGetBoardData={handleGetBoardData}
            boardId={boardId}
            myId={myId}
          />
        </div>


        <p className="whitespace-pre-wrap">内容:{board.boardBody}</p>
        <p>ユーザID:{board.userId}</p>
      </div>

    </>
  )
}

export default BoardContent
