import { useContext, useEffect, useState } from "react";
import { AuthContext } from "App";
import { useParams } from "react-router-dom";
// Function
import { getBoardData } from "lib/api/board";
import { getBoardComment } from "lib/api/boardComment";
// Interface
import { BoardData } from "interfaces/index";
import { CommentData } from "interfaces/index"
// Components
import BoardEditButton from "components/utils/board/BoardEditButton";
import LikeButton from "components/utils/board/LikeButton";
import GoBackButton from "components/utils/common/GoBackButton";
import BoardContent from "components/utils/board/BoardContent";
import CommentItem from "components/utils/board/CommentItem";
import CommonMessageForms from "components/utils/common/CommonMessageForms";

const Board = () => {
  // State
  const [board, setBoard] = useState<BoardData | null>(null);
  const [comments, setComments] = useState<CommentData[]>([])
  // Id
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getBoardData(id).then((res) => setBoard(res.data));
  };

  // コメント情報を取得
  const handleGetBoardComment = async () => {
    getBoardComment(id).then((res) => setComments(res.data));
  };

  useEffect(() => {
    handleGetBoardData();
    handleGetBoardComment();
  }, []);

  return (
    <>
      {board && (
        <>

          <p>test</p>

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
            generalId={board.id.toString()}
          />
          {/* 戻るボタン */}
          <GoBackButton />
          {/* コメント欄 */}
          {comments.map((comment: CommentData) => (
            <CommentItem comment={comment} />
          ))}

          {/* コメントフォーム */}

          <CommonMessageForms
            handleGetData={handleGetBoardComment}
            id={id ?? ""}
            stringMyId={stringMyId ?? ""}
            discrimination={"board"}
          />

        </>
      )}
    </>
  );
};

export default Board;
