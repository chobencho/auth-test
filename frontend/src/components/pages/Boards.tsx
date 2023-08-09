import { useEffect, useState } from "react";
// Function
import { getBoards } from "lib/api/board";
// Interface
import { BoardData } from "interfaces/index";
// Components
import BoardsItem from "components/utils/board/BoardsItem";
import CreateNewBoardButton from "components/utils/board/CreateNewBoardButton";
import { useAuthData } from "components/utils/common/useAuthData";

import Skeleton from "@material-ui/lab/Skeleton";

const Boards = () => {
  // State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const { verifiedAge } = useAuthData();
  const [isLoading, setIsLoading] = useState(true);

  // 掲示板を検索する関数;
  const handleGetBoardData = async () => {
    getBoards().then((res) => {
      setBoards(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleGetBoardData();
  }, []);

  if (isLoading) {
    // ロード中はSkeletonを表示
    return (
      <div>
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect" width={210} height={60} />
        <Skeleton variant="text" width={210} height={60} />
        {/* 必要なだけSkeletonを追加 */}
      </div>
    );
  }

  return (
    <>
      <div className="pb-16">
        <p className="text-center p-3">掲示板一覧</p>
        {boards && (
          <>
            <BoardsItem boards={boards} handleGetBoardData={handleGetBoardData} />
          </>
        )}
        <CreateNewBoardButton verifiedAge={verifiedAge} />
      </div>
    </>
  );
};

export default Boards;
