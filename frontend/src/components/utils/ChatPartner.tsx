import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getChatPartner } from "lib/api/chat"
import { ChatUserData } from "interfaces/index"
import { SlArrowLeft } from "react-icons/sl";

interface ChatPartnerProps {
  chatPartnerId: string
}

const ChatPartner = ({ chatPartnerId }: ChatPartnerProps) => {
  const [partner, setPartner] = useState<ChatUserData | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const f = async () => {
      getChatPartner(chatPartnerId).then((res) => setPartner(res.data))
    };
    f();
  }, []);

  return (
    <>
      <div className="border flex">
        <span onClick={() => (navigate("/messages"))}><SlArrowLeft className="text-xl my-3 mx-5" /></span>
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
