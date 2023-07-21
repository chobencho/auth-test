import { MessageData } from "interfaces/index"


interface MessageItemProps {
    message: MessageData
    stringUserId: string | null
}

const ChatMessage = ({ message, stringUserId }: MessageItemProps) => {
    return (
        <>
            {
                message.userId == stringUserId ? (
                    <div className="border m-4 text-right">
                        {message.body}
                    </div>
                ) : (
                    <div className="border m-2 text-left">
                        {message.body}
                    </div>
                )
            }

        </>
    )
}

export default ChatMessage
