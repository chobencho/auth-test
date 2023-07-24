import { useContext } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from "App"
import { useEffect, useState } from "react"
import { ChatUserData } from "interfaces/index"
import { getChatRooms } from "lib/api/chat"

const Messages = () => {
  const { currentUser } = useContext(AuthContext)
  const userId = currentUser ? currentUser.id : null
  const stringUserId = userId?.toString()
  const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);

  useEffect(() => {
    const f = async () => {
      getChatRooms(stringUserId).then((res) => setChatUsers(res.data))
    };
    f();
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
