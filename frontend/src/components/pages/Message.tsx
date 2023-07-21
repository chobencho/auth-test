import { useContext } from "react"
import { AuthContext } from "App"
import { useParams, useLocation  } from "react-router-dom"
import { useEffect, useState } from "react"
import { MessageData } from "interfaces/index"
import { getMessages } from "lib/api/chat"
import ChatMessage from "components/utils/ChatMessage"
import ChatForm from "components/utils/ChatForm"
import DeleteButton from "components/utils/DeleteButton"

const Message = () => {
    const [messages, setMessages] = useState<MessageData[]>([]);

    // 自分のユーザIDをログインユーザ情報から取得
    const { currentUser } = useContext(AuthContext)
    const userId = currentUser ? currentUser.id : null
    const stringUserId = userId?.toString()

    // ルームIDをパラメータから取得
    const { id } = useParams<{ id: string }>();

    // クエリパラメータからチャット相手のユーザIDを取得
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const chatPartnerId = searchParams.get('partnerId') || '';
    
    // ルームIDからメッセージ情報を取得・更新
    const handleGetMessages = async () => {
        getMessages(id, chatPartnerId).then((res) => setMessages(res.data))
    }

    // 初回ページ遷移時、setMessagesの更新時にレンダリング実行
    useEffect(() => {
        handleGetMessages()
    }, [])

    return (
        <>
            {messages.map((message: MessageData) => (
                <ChatMessage
                    message={message}
                    stringUserId={stringUserId ?? ""}
                />
            ))}
            <ChatForm handleGetMessages={handleGetMessages} />
            <DeleteButton room_id={id}/>
        </>
    )
}

export default Message
