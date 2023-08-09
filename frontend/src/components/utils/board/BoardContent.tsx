// Interface
import { BoardData } from "interfaces/index";

import { makeStyles, Theme } from "@material-ui/core/styles";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

type BoardContentProps = {
  board: BoardData
};

const useStyles = makeStyles((theme: Theme) => ({
  boardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  userImage: {}
}));

const BoardContent = ({ board }: BoardContentProps) => {
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

      <img src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`} alt="boardData image" className={`${classes.userImage}`} />
      <p>{board.name}</p>
      <p>{moment(board.createdAt).format("YYYY年MM月DD日 HH:mm")}</p>
      <p>タイトル:{board.title}</p>
      <p className="whitespace-pre-wrap">内容:{board.boardBody}</p>
      <p>ユーザID:{board.userId}</p>
    </>
  )
}

export default BoardContent
