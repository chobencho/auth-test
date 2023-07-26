import { useState, useEffect } from "react";
import { getEditBoardData } from "lib/api/board";
import { BoardData } from "interfaces/index";
import { useParams } from "react-router-dom";
import BoardEditForm from "components/utils/BoardEditForm";
import BoardEditItem from "components/utils/BoardEditItem";
import GoBackButton from "components/utils/GoBackButton";

const BoardEdit = () => {
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  const { id } = useParams<{ id: string }>();

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
          <BoardEditForm
            handleGetBoardData={handleGetBoardData}
            boardData={boardData}
          />
          <BoardEditItem
            handleGetBoardData={handleGetBoardData}
            boardData={boardData}
          />
        </>
      )}
      <GoBackButton />
    </>
  );
};

export default BoardEdit;
