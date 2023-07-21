import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { Link, useNavigate } from 'react-router-dom'
import { createChatRoom } from "lib/api/chat"
import { getCommonRoomId } from "lib/api/user"

type ChildComponentProps = {
  userId: string;
};

const EditButton = ({ userId }: ChildComponentProps) => {
  const [commonRoomId, setCommonRoomId] =useState<boolean>(false)
  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()
  const navigate = useNavigate();

  const handleCreateChat = () => {
    createChatRoom(userId, stringMyId).then(() => {navigate("/messages")}
    )
  }

  // useEffect(() => {
  //   const f = async () => {
  //     const res = await getCommonRoomId(userId, stringMyId);
  //     setCommonRoomId(res.data);
  //   };
  //   f();
  // }, []);


  return (
    <>
      {
        userId == `${currentUser?.id}` ? (
          <Link to={`edit`} className="border bg-gray-200">編集</Link>
        ) : (
          <button
            className="border bg-gray-200"
            onClick={() => handleCreateChat()}
          >
            メッセージを送る
          </button>
        )
      }
    </>
  )
}

export default EditButton
