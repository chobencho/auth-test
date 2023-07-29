// Interface
import { BoardData } from "interfaces/index";

interface BoardEditItemProps {
  boardData: BoardData;
}

const BoardEditItem = ({
  boardData,
}: BoardEditItemProps) => {
  return (
    <>
      <p>タイトル:{boardData.title}</p>
      <p>
        画像:
        {boardData.image?.url ? (
          <img
            src={boardData.image.url}
            alt="boardData image"
            className="w-1/2"
          />
        ) : null}
      </p>
      <p className="whitespace-pre-wrap">内容:{boardData.body}</p>
    </>
  );
};

export default BoardEditItem;
