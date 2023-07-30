import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { useParams, useLocation } from "react-router-dom"
// Function
import { getMessages } from "lib/api/chat"
// Interface
import { MessageData } from "interfaces/index"
// Components
import ChatMessage from "components/utils/chat/ChatMessage"
import ChatForm from "components/utils/chat/ChatForm"
import ChatPartner from "components/utils/chat/ChatPartner"
import DeleteButton from "components/utils/chat/DeleteButton"

const Message = () => {
    // State
    const [messages, setMessages] = useState<MessageData[]>([]);
    // Id
    const { currentUser } = useContext(AuthContext)
    const userId = currentUser ? currentUser.id : null
    const stringUserId = userId?.toString()
    const { id } = useParams<{ id: string }>();
    // クエリパラメータからチャット相手のユーザIDを取得
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const chatPartnerId = searchParams.get('partnerId') || '';

    // ルームIDからメッセージ情報を取得・更新する関数
    const handleGetMessages = async () => {
        getMessages(id, chatPartnerId).then((res) => setMessages(res.data))
    }

    useEffect(() => {
        handleGetMessages()
    }, [])

    return (
        <>
            {/* チャット相手の情報 */}
            <ChatPartner chatPartnerId={chatPartnerId} />
            {/* チャットメッセージ */}
            {messages.map((message: MessageData) => (
                <ChatMessage
                    message={message}
                    stringUserId={stringUserId ?? ""}
                />
            ))}
            {/* チャットフォーム */}
            <ChatForm handleGetMessages={handleGetMessages} />
            {/* チャット削除ボタン */}
            <DeleteButton room_id={id} />
        </>
    )
}

export default Message
