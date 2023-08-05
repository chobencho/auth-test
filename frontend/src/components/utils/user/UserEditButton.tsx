import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { Link, useNavigate } from 'react-router-dom'
// Function
import { createChatRoom } from "lib/api/message"


type UserEditButtonProps = {
  userId: string;
  myId: string;
  verifiedAge: boolean;
  common_room_id: string;
};

const EditButton = ({ userId, myId, verifiedAge, common_room_id }: UserEditButtonProps) => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate();
  // State


  // 新しいチャットルームを作成する
  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => { navigate("/messages") }
    )
  }

  console.log(common_room_id)

  return (
    <>
      <div className={"relative border bg-gray-400 text-white p-2 m-auto w-1/2 h-20"}>
        {common_room_id ? ("メッセージを見る") : ("新規メッセージ")}
        {!verifiedAge && (
          <span
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}

          >
            年齢確認が完了していません
          </span>
        )}
        {verifiedAge && common_room_id ? (
          <Link to={`/message/${common_room_id}?partnerId=${userId}`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>
        ) : (
          <button className="absolute top-0 left-0 w-full h-full opacity-0" onClick={() => handleCreateChat()} disabled={!verifiedAge} />
        )}
      </div>
    </>
  )
}

export default EditButton
