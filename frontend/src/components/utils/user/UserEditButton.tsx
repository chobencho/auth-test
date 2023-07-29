import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { Link, useNavigate } from 'react-router-dom'
// Function
import { createChatRoom } from "lib/api/chat"
import { getCommonRoomId } from "lib/api/chat"

type UserEditButtonProps = {
  userId: string;
  myId: string
};

const EditButton = ({ userId, myId }: UserEditButtonProps) => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate();
  // State
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null)

  // 新しいチャットルームを作成する
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
      {
        userId == myId ? (
          <Link to={`/user/${myId}/edit`} className="border bg-gray-600 text-white p-2">編集</Link>
        ) : (
          commonRoomId ? (
            <Link to={`/message/${commonRoomId}?partnerId=${userId}`} className="border bg-gray-600 text-white p-2">
              メッセージを見る
            </Link>
          ) : (
            <button className="border bg-gray-600 text-white p-2" onClick={() => handleCreateChat()}>
              新しくメッセージを送る
            </button>
          )
        )
      }
    </>
  )
}

export default EditButton
