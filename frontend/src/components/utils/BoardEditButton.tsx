import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getCommonRoomId } from "lib/api/chat"
import { createChatRoom } from "lib/api/chat"

type UserEditButtonProps = {
  userId: string
  myId: string
  boardId: string
};

const BoardEditButton = ({ userId, myId, boardId }: UserEditButtonProps) => {
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null)
  const navigate = useNavigate();

  const handleCreateChat = () => {
    createChatRoom(userId, myId).then(() => { navigate("/messages") }
    )
  }

  useEffect(() => {
    const f = async () => {
      getCommonRoomId(userId, myId).then((res) => setCommonRoomId(res.data))
    };
    f();
  }, []);

  return (
    <>
      {
        userId == myId ? (
          <Link to={`/board/${boardId}/edit`} className="border bg-gray-600 text-white p-2">編集</Link>
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

export default BoardEditButton
