// Interface
import { MessageData } from "interfaces/index";

interface MessageItemProps {
  message: MessageData;
  stringUserId: string | null;
}

const ChatMessage = ({ message, stringUserId }: MessageItemProps) => {
  return (
    <>
      {message.userId == stringUserId ? (
        <div className="border m-4 text-right">
          {message.image?.url ? (
            <img
              src={message.image.url}
              alt="boardData image"
              className="w-1/2 ml-auto"
            />
          ) : null}
          <p className="whitespace-pre-wrap">{message.body}</p>
        </div>
      ) : (
        <div className="border m-2 text-left">
          {message.image?.url ? (
            <img
              src={message.image.url}
              alt="boardData image"
              className="w-1/2 mr-auto"
            />
          ) : null}
          <p className="whitespace-pre-wrap">{message.body}</p>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
