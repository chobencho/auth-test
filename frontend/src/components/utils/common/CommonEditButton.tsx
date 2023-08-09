import { Link, useNavigate } from 'react-router-dom'
// Function
import { createChatRoom } from "lib/api/message"
// Components
import CommonDeleteButton from "components/utils/common/CommonDeleteButton";

type CommonEditButtonProps = {
  userId: string;
  myId: string;
  generalId: string
  verifiedAge: boolean;
  commonRoomId: string;
};

const CommonEditButton = ({ userId, myId, generalId, verifiedAge, commonRoomId }: CommonEditButtonProps) => {
  const navigate = useNavigate();

  // 新しいチャットルームを作成する
  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => { navigate("/messages") }
    )
  }

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
        <div
          className={`relative border border-blue-600 text-blue-600 p-3 my-3 mx-auto w-3/5 rounded-3xl ${commonRoomId ? "bg-blue-600" : "bg-white"}`}>
          {commonRoomId ? (<p className="text-white text-center">メッセージを送る</p>) : (<p className="text-blue-600 text-center">メッセージを始める</p>)}
          {!verifiedAge && (
            <span
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer rounded-3xl text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              年齢確認が完了していません
            </span>
          )}
          {verifiedAge && commonRoomId ? (

            <Link to={`/message/${commonRoomId}?buddyId=${userId}`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>

          ) : (

            <button className="absolute top-0 left-0 w-full h-full opacity-0" onClick={() => handleCreateChat()} disabled={!verifiedAge} />

          )}
        </div>
      )}
    </>
  )
}

export default CommonEditButton
