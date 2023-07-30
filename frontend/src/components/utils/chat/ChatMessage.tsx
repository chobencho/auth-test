import { useState } from "react"
// Interface
import { MessageData } from "interfaces/index";

import ModalImage from "components/utils/common/ModalImage";

interface MessageItemProps {
  message: MessageData;
  stringUserId: string | null;
}

const ChatMessage = ({ message, stringUserId }: MessageItemProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleExpansionImage = () => {
    setShowModal(true)
  }

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  return (
    <>
      {message.userId == stringUserId ? (
        <div className="border m-4 text-right">
          {message.image?.url ? (
            <img
              src={message.image.url}
              alt="boardData image"
              className="w-1/2 ml-auto"
              onClick={() => handleExpansionImage()}
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
      {/* 画像拡大モーダル */}
      {message.image?.url && showModal ? (
        <ModalImage
          onClose={handleClearPreview}
          image={message.image.url}
        />
      ) : null}
    </>
  );
};

export default ChatMessage;
