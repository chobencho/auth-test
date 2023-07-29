// Interface
import { BoardData } from "interfaces/index";

type BoardContentProps = {
  board: BoardData
};

const BoardContent = ({ board }: BoardContentProps) => {
  return (
    <>
      <p>ID:{board.id}</p>
      <p>タイトル:{board.title}</p>
      <p className="whitespace-pre-wrap">内容:{board.boardBody}</p>
      {board.image?.url ? (
        <img
          src={board.image.url}
          alt="boardData image"
          className="w-1/2"
        />
      ) : null}
      <p>ユーザID:{board.userId}</p>
    </>
  )
}

export default BoardContent
