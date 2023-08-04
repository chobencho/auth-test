import { useEffect, useState, useContext } from "react";
import { AuthContext } from "App"
import { Link, useNavigate } from 'react-router-dom'
// Function
import { getCommonRoomId } from "lib/api/chat"
import { createChatRoom } from "lib/api/chat"
// Components
import CommonDeleteButton from "components/utils/common/CommonDeleteButton";

type UserEditButtonProps = {
  userId: string
  myId: string
  generalId: string
};

const BoardEditButton = ({ userId, myId, generalId }: UserEditButtonProps) => {
  const navigate = useNavigate();
  // State
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null)
  const { verifiedAge } = useContext(AuthContext);

  // チャットルームを作成する関数
  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => { navigate("/messages") }
    )
  }

  // 自分と相手のチャットルームがすでに存在するか確認する関数
  const handleGetCommonRoomId = () => {
    getCommonRoomId(userId, myId).then((res) => setCommonRoomId(res.data))
  }

  useEffect(() => {
    handleGetCommonRoomId();
  }, []);

  return (
    <>
      {userId == myId ? (
        <>
          <Link to={`/board/${generalId}/edit`} className="border bg-gray-600 text-white p-2">編集</Link>
          <CommonDeleteButton
            generalId={generalId}
            discrimination={"board"}
          />
        </>
      ) : (
        <div className={"relative border bg-gray-400 text-white p-2 m-auto w-1/2 h-20"}>
          {commonRoomId ? ("メッセージを見る") : ("新規メッセージ")}
          {!verifiedAge && (
            <span
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}

            >
              年齢確認が完了していません
            </span>
          )}
          {verifiedAge && commonRoomId ? (
            <Link to={`/message/${commonRoomId}?partnerId=${userId}`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>
          ) : (
            <button className="absolute top-0 left-0 w-full h-full opacity-0" onClick={() => handleCreateChat()} disabled={!verifiedAge} />
          )}
        </div>
      )}

    </>
  )
}

export default BoardEditButton
