import { useContext } from "react"
import { AuthContext } from "App"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { MessageData } from "interfaces/index"
import { getMessages } from "lib/api/chat"
import ChatMessage from "components/utils/ChatMessage"

const Message = () => {
    const { currentUser } = useContext(AuthContext)
    const userId = currentUser ? currentUser.id : null
    const stringUserId = userId?.toString()

    const { id } = useParams<{ id: string }>();
    const [messages, setMessages] = useState<MessageData[]>([]);

    useEffect(() => {
        const f = async () => {
            getMessages(id).then((res) => setMessages(res.data))
        };
        f();
    }, []);

  return (
    <>
        {messages.map((message: MessageData) => (
            <ChatMessage
            message={message}
            stringUserId = {stringUserId ?? ""}
            />
        ))}
    </>
  )
}

export default Message