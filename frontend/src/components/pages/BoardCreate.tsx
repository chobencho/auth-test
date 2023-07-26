import { useState, useEffect } from "react";
import { getBoardData } from "lib/api/board";
import { BoardData } from "interfaces/index";
import { useParams } from "react-router-dom";
import BoardCreateForm from "components/utils/BoardCreateForm";
import BoardCreateItem from "components/utils/BoardEditItem";
import GoBackButton from "components/utils/GoBackButton";

const BoardCreate = () => {
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <BoardCreateForm />

      <GoBackButton />
    </>
  );
};

export default BoardCreate;
