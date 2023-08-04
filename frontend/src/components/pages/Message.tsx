import { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import { useParams, useLocation } from "react-router-dom"
// Function
import { getMessages } from "lib/api/chat"
// Interface
import { MessageItemsData } from "interfaces/index"
// Components
import CommonMessageItems from "components/utils/common/CommonMessageItems";
import CommonMessageForms from "components/utils/common/CommonMessageForms"
import ChatPartner from "components/utils/chat/ChatPartner"
import CommonDeleteButton from "components/utils/common/CommonDeleteButton";

const Message = () => {
    // State
    const [messages, setMessages] = useState<MessageItemsData[]>([]);
    // クエリパラメータからチャット相手のユーザIDを取得
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const chatPartnerId = searchParams.get('partnerId') || '';

    // Id
    const { id } = useParams();
    const { currentUser } = useContext(AuthContext);
    const myId = currentUser ? currentUser.id : null;
    const stringMyId = myId?.toString();


    const { verifiedAge } = useContext(AuthContext);

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
            {messages.map((message) => (
                <div className={"relative border p-2 m-auto w-full"}>
                    <CommonMessageItems
                        message={message}
                        stringMyId={stringMyId ?? ""}
                    />

                    {!verifiedAge && (
                        <span
                            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
                            style={{ backgroundColor: "#fff", border: "1px solid #000" }}
                        >
                            年齢確認後に表示されます
                        </span>
                    )}
                </div>
            ))}

            {/* チャットフォーム */}
            <div className={"relative border p-2 m-auto w-full"}>
                <CommonMessageForms
                    handleGetData={handleGetMessages}
                    id={id ?? ""}
                    stringMyId={stringMyId ?? ""}
                    discrimination={"chat"}
                />
                {!verifiedAge && (
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        年齢確認が完了していません
                    </span>
                )}
            </div>

            {/* チャット削除ボタン */}
            <CommonDeleteButton
                generalId={id}
                discrimination={"chat"}
            />
        </>
    )
}

export default Message
