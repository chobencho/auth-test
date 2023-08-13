import { Link, useNavigate } from "react-router-dom";
// Function
import { createChatRoom } from "lib/api/message";
// Components
import CommonDeleteButton from "components/utils/common/CommonDeleteButton";

type CommonEditButtonProps = {
  userId: string;
  myId: string;
  generalId: string;
  verifiedAge: boolean;
  commonRoomId: string;
};

const CommonEditButton = ({
  userId,
  myId,
  generalId,
  verifiedAge,
  commonRoomId,
}: CommonEditButtonProps) => {
  const navigate = useNavigate();

  // 新しいチャットルームを作成する
  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => {
      navigate("/messages");
    });
  };

  return (
    <>
      {userId == myId ? (
        <>
          <div className="generalButton w-3/5 relative bg-gray-600">
            <Link
              to={`/board/${generalId}/edit`}
              className="text-white text-center w-full block"
            >
              編集
            </Link>
          </div>
        </>
      ) : (
        <div
          className={`generalButton w-3/5 relative border-blue-base text-blue-base ${commonRoomId ? "bg-blue-base" : "bg-white border"
            }`}
        >
          {commonRoomId ? (
            <p className="text-white text-center">メッセージを送る</p>
          ) : (
            <p className="text-blue-base text-center">メッセージを始める</p>
          )}
          {!verifiedAge && (
            <span
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer rounded-3xl text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              年齢確認が完了していません
            </span>
          )}
          {verifiedAge && commonRoomId ? (
            <Link
              to={`/message/${commonRoomId}?buddyId=${userId}`}
              className="absolute top-0 left-0 w-full h-full opacity-0"
            ></Link>
          ) : (
            <button
              className="absolute top-0 left-0 w-full h-full opacity-0"
              onClick={() => handleCreateChat()}
              disabled={!verifiedAge}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CommonEditButton;
