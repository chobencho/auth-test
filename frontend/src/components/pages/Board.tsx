import { useContext, useEffect, useState } from "react";
import { AuthContext } from "App";
import { useParams } from "react-router-dom";
// Function
import { getBoardData } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardEditButton from "components/utils/board/BoardEditButton";
import LikeButton from "components/utils/board/LikeButton";
import GoBackButton from "components/utils/common/GoBackButton";
import BoardContent from "components/utils/board/BoardContent";

const Board = () => {
  // State
  const [board, setBoard] = useState<BoardData | null>(null);
  // Id
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getBoardData(id).then((res) => setBoard(res.data));
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      {board && (
        <>
          {/* いいねボタン */}
          <LikeButton
            handleGetBoardData={handleGetBoardData}
            boardId={board.id.toString()}
            myId={stringMyId || ""}
          />
          {/* 掲示板表示 */}
          <BoardContent board={board} />

          {/* チャット開始ボタン || 掲示板編集ボタン */}
          <BoardEditButton
            userId={board.userId || ""}
            myId={stringMyId || ""}
            boardId={board.id.toString()}
          />
          {/* 戻るボタン */}
          <GoBackButton />
        </>
      )}
    </>
  );
};

export default Board;
