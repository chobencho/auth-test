import { useContext } from "react";
import { AuthContext } from "App";
import { useEffect, useState } from "react";
import { getBoardData } from "lib/api/board";
import { BoardData } from "interfaces/index";
import { useParams } from "react-router-dom";
import BoardEditButton from "components/utils/BoardEditButton";
import LikeButton from "components/utils/LikeButton";
import GoBackButton from "components/utils/GoBackButton";

const Board = () => {
  const [board, setBoard] = useState<BoardData | null>(null);
  const { id } = useParams<{ id: string }>();

  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // ルームIDからメッセージ情報を取得・更新
  const handleGetBoardData = async () => {
    getBoardData(id).then((res) => setBoard(res.data));
  };

  // 初回ページ遷移時、setMessagesの更新時にレンダリング実行
  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      {board && (
        <>
          <LikeButton
            handleGetBoardData={handleGetBoardData}
            boardId={board.id.toString()}
            myId={stringMyId || ""}
          />
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

          <img
            src={`${process.env.PUBLIC_URL}/images/${board.boardImage}`}
            alt=""
          />
          <BoardEditButton
            userId={board.userId || ""}
            myId={stringMyId || ""}
            boardId={board.id.toString()}
          />
          <GoBackButton />
        </>
      )}
    </>
  );
};

export default Board;
