import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { Link, useNavigate } from 'react-router-dom'
import { createChatRoom } from "lib/api/chat"
import { getCommonRoomId } from "lib/api/chat"

type UserEditButtonProps = {
  userId: string;
};

const EditButton = ({ userId }: UserEditButtonProps) => {
  const [commonRoomId, setCommonRoomId] = useState<string | null>(null)
  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()
  const navigate = useNavigate();

  const handleCreateChat = () => {
    createChatRoom(userId, stringMyId).then(() => { navigate("/messages") }
    )
  }

  useEffect(() => {
    const f = async () => {
      getCommonRoomId(userId, stringMyId).then((res) => setCommonRoomId(res.data))
    };
    f();
  }, []);

  return (
    <>
      {
        userId == stringMyId ? (
          <Link to={`/user/${stringMyId}/edit`} className="border bg-gray-600 text-white p-2">編集</Link>
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
