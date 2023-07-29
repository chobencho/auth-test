import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Function
import { getEditBoardData } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardEditForm from "components/utils/board/BoardEditForm";
import BoardEditItem from "components/utils/board/BoardEditItem";
import GoBackButton from "components/utils/common/GoBackButton";

const BoardEdit = () => {
  // State
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  // Id
  const { id } = useParams<{ id: string }>();

  // 掲示板情報を取得
  const handleGetBoardData = async () => {
    getEditBoardData(id).then((res) => setBoardData(res.data));
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  return (
    <>
      {boardData !== null && (
        <>
          {/* 掲示板編集フォーム */}
          <BoardEditForm
            handleGetBoardData={handleGetBoardData}
            boardData={boardData}
          />
          {/* 掲示板プレビュー */}
          <BoardEditItem
            boardData={boardData}
          />
        </>
      )}
      {/* 戻るボタン */}
      <GoBackButton />
    </>
  );
};

export default BoardEdit;
