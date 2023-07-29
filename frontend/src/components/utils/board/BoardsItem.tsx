import { Link } from "react-router-dom";
// Interface
import { BoardData } from "interfaces/index";

interface BoardItemProps {
  board: BoardData;
}

const BoardsItem = ({ board }: BoardItemProps) => {
  return (
    <>
      <Link to={`/board/${board.boardId}`} className="inline-block border m-2">
        <p>掲示板ID:{board.boardId}</p>
        <p>ユーザID:{board.userId}</p>
        <p>タイトル:{board.title}</p>
        {board.image?.url ? (
          <img src={board.image.url} alt="boardData image" className="w-1/2" />
        ) : null}
        <p className="whitespace-pre-wrap">内容:{board.boardBody}</p>
      </Link>
    </>
  );
};

export default BoardsItem;
