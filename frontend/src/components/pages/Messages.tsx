import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from "App"
// Function
import { getChatRooms } from "lib/api/message"
// Interface
import { ChatUserData } from "interfaces/index"

const Messages = () => {
  // State
  const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);
  //Id
  const { currentUser } = useContext(AuthContext)
  const userId = currentUser ? currentUser.id : null
  const stringUserId = userId?.toString()

  // 自分の入っているチャットルームを取得
  const handleGetChatRooms = async () => {
    getChatRooms(stringUserId).then((res) => setChatUsers(res.data))
  };

  useEffect(() => {
    handleGetChatRooms();
  }, []);

  return (
    <>
      {chatUsers?.map((chatUser) => (
        <Link to={`/message/${chatUser.roomId}?partnerId=${chatUser.id}`} className="border m-2 inline-block">
          <p>名前:{chatUser.name}</p>
          <p>メール:{chatUser.email}</p>
          {chatUser.image?.url ?
            <img
              src={chatUser.image.url}
              alt="userData image"
              className="w-1/2"
            /> : null
          }
          <p>ルームID:{chatUser.roomId}</p>
        </Link>
      ))}
    </>
  )
}

export default Messages
