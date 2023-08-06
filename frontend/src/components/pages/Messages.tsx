import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from "App"
// Function
import { getChatRooms } from "lib/api/message"
import { useAuthData } from "components/utils/common/useAuthData";
// Interface
import { ChatUserData } from "interfaces/index"


const Messages = () => {
  // State
  const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);
  //Id
  const { stringMyId } = useAuthData();

  // 自分の入っているチャットルームを取得
  const handleGetChatRooms = async () => {
    getChatRooms(stringMyId).then((res) => setChatUsers(res.data))
  };

  useEffect(() => {
    handleGetChatRooms();
  }, []);

  return (
    <>
      {chatUsers?.map((chatUser) => (
        <Link to={`/message/${chatUser.roomId}?buddyId=${chatUser.id}`} className="border m-2 inline-block">
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
