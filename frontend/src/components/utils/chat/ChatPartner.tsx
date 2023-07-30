import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// Style
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Function
import { getChatPartner } from "lib/api/chat"
// Interface
import { ChatUserData } from "interfaces/index"

interface ChatPartnerProps {
  chatPartnerId: string
}

const ChatPartner = ({ chatPartnerId }: ChatPartnerProps) => {
  const navigate = useNavigate()
  // State
  const [partner, setPartner] = useState<ChatUserData | null>(null)

  // ルームIDからメッセージ情報を取得・更新
  const handleGetChatPartner = async () => {
    getChatPartner(chatPartnerId).then((res) => setPartner(res.data))
  };

  useEffect(() => {
    handleGetChatPartner();
  }, []);

  return (
    <>
      <div className="border flex">
        <span onClick={() => (navigate("/messages"))}><ArrowBackIosNewIcon className="text-xl my-3 mx-5" /></span>
        {partner &&
          <>
            <p>{partner.name}</p>
            {partner.image?.url ?
              <img
                src={partner.image.url}
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
