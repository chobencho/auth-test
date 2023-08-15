import { useState, useEffect } from "react";
// Style
import { FaHeart } from "react-icons/fa6";
// Function
import { getLike } from "lib/api/userLike";
import { createLike } from "lib/api/userLike";
import { deleteLike } from "lib/api/userLike";

interface LikeUserProps {
  myId: string | undefined;
  userId: string | undefined;
}

const LikeUserButton = ({ myId, userId }: LikeUserProps) => {
  // State
  const [like, setLike] = useState<boolean>(false);

  // いいねする関数
  const handleCreateLike = async () => {
    createLike(myId, userId).then(() => {
      setLike(true);
    });
  };

  // いいねを外す関数
  const handleDeleteLike = async () => {
    deleteLike(myId, userId).then(() => {
      setLike(false);
    });
  };

  // いいねの状態を取得する関数
  const handleGetLike = async () => {
    getLike(myId, userId).then((res) => setLike(res.data));
  };

  useEffect(() => {
    handleGetLike();
  }, []);

  return (
    <div className="absolute right-2">
      <button onClick={like ? handleDeleteLike : handleCreateLike}>
        <FaHeart className={`text-xl my-1 ${like ? "text-red-400" : ""}`} />
      </button>
    </div>
  );
};

export default LikeUserButton;
