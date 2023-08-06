import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// Style
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Function
import { getChatPartner } from "lib/api/chat"
// Interface
import { ChatUserData } from "interfaces/index"

interface ChatPartnerProps {
  buddyId: string
}

const ChatPartner = ({ buddyId }: ChatPartnerProps) => {
  const navigate = useNavigate()
  // State
  const [buddy, setBuddy] = useState<ChatUserData | null>(null)

  // ルームIDからメッセージ情報を取得・更新
  const handleGetChatPartner = async () => {
    getChatPartner(buddyId).then((res) => setBuddy(res.data))
  };

  useEffect(() => {
    handleGetChatPartner();
  }, []);

  return (
    <>
      <div className="border flex">
        <span onClick={() => (navigate("/messages"))}><ArrowBackIosNewIcon className="text-xl my-3 mx-5" /></span>
        {buddy &&
          <>
            <p>{buddy.name}</p>
            {buddy.image?.url ?
              <img
                src={buddy.image.url}
                alt="userData image"
                className="w-1/5 rounded-full "
              /> : null
            }
          </>
        }
      </div>
    </>
  )
}

export default ChatPartner
