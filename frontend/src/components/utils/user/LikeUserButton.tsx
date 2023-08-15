import { useState, useEffect } from "react";
import { UserData } from "interfaces/index";
// Style
import { FaHeart } from "react-icons/fa6";
// Function
import { getLike } from "lib/api/userLike";
import { createLike } from "lib/api/userLike";
import { deleteLike } from "lib/api/userLike";

interface LikeUserProps {
  myId: string | undefined;
  userId: string | undefined;
  userData: UserData;
  handleGetUserData: Function;
}

const LikeUserButton = ({ myId, userId, userData, handleGetUserData }: LikeUserProps) => {
  // State
  const [like, setLike] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // いいねする関数
  const handleCreateLike = async () => {
    createLike(myId, userId).then(() => {
      setLike(true);
      handleGetUserData();
    });

    // アニメーションをトリガー
    setIsAnimating(true);

    // 一定時間後にアニメーションを停止
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

  };

  // いいねを外す関数
  const handleDeleteLike = async () => {
    deleteLike(myId, userId).then(() => {
      setLike(false);
      handleGetUserData();
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
      <button onClick={like ? handleDeleteLike : handleCreateLike} className="flex items-center">
        <FaHeart className={`text-base my-1 mx-2 ${like ? "text-red-400" : ""} ${isAnimating ? "animate-like-bounce" : ""}`} />
        <span className="text-gray-500">{userData.likeCount}</span>
      </button>
    </div>
  );
};

export default LikeUserButton;
